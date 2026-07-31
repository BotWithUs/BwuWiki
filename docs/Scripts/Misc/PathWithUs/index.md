---
title: PathWithUs
description: Automated account builder that runs an ordered queue of quests, skilling, gathering and shopping tasks to take a fresh RuneScape 3 account through a full progression pathway.
slug: /PathWithUs
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import changes from './changes.json'

<TopBanner title="PathWithUs" version="v1.0.0" skill="Necromancy">
</TopBanner>

:::::hidden

## Overview

:::::

<ContentBlock title="Overview">

> **PathWithUs** (formerly *AccountBuilder*) builds an account for you. It runs an **ordered queue of tasks** — quests, skill training, gathering, processing, shopping, banking and minigames — and works its way down the list from a tutorial-island-fresh account through a large predefined progression pathway.
>
> Every task carries its own **completion check** that is read from live game state, so the script never relies on a timer or on assumptions about what has already been done.
>
> You can run the built-in pathway as-is, edit the queue, save and share your own pathways as presets, or assemble something completely custom out of the full task catalog.

</ContentBlock>

:::::hidden

## Features

:::::

<ContentBlock title="Features">

> - **Predefined pathway** — one button loads the full Efficient Ironman progression queue
> - **Quests-only mode** — loads every quest that is *not* already part of the predefined pathway
> - **Full task catalog** with category filter, search and duplicate hiding, so you can build your own pathway task by task
> - **Live completion detection** — level, varbit/varp, item count, item ID, equipped items, location, persisted flags and cumulative gather counts
> - **Named pathway presets** saved as shareable JSON files, loadable fresh or with their saved progress
> - **Self-banking** — every trip works out what the next step needs and withdraws only the shortfall, using Withdraw-X for exact amounts
> - **14 trainable skills**: Mining, Fishing, Woodcutting, Cooking, Smithing, Crafting, Firemaking, Divination, Magic, Necromancy, Runecrafting, Slayer, Ranged and general Combat
> - **Built-in minigame runners**: Runespan, Shattered Worlds, the Circus, Player-Owned Farm tutorial and the Fort Forinthry build chain
> - **Automatic lodestone unlocking** across the free-to-play circuit
> - **Death recovery** that runs above the queue — reclaim, clear dialogue, exit Death's office, resume
> - **Automatic bank PIN entry**, tutorial/hint popup dismissal and cutscene handling
> - **Ore box, wood box and toolbelt hatchet awareness**, including automatic hatchet upgrades as Woodcutting levels
> - **World hopping** with members, ping and population filters
> - **Progress that survives restarts** — task states, positions, cumulative counts and one-time flags are flushed to disk on every change

</ContentBlock>

:::::hidden

## Requirements

:::::

<ContentBlock title="Requirements">

> - **Draw Distance must be set to High.** Go to Settings → Graphics → Draw Distance and set it by hand. The client ignores injected dropdown clicks, so the script cannot do this for you — it checks the value at start-up and **stops itself** if it is anything other than High.
> - **A members account** for most of the pathway. Free-to-play accounts also only have the first 7 bank preset slots.
> - **Your 4-digit bank PIN entered in the Options tab** if the account has one. If a PIN screen appears and no PIN is configured, the script stops rather than guessing.
> - **Free bank and backpack space** — the script deposits and withdraws constantly.
> - **Guidance hints will be turned off** automatically at start-up, because the hint overlays interfere with later steps.
> - A few steps are deliberately handed back to you (some puzzles and some fights). These show a red `ACTION:` line in the Current Task panel.

</ContentBlock>

:::::hidden

## Setup

:::::

<ContentBlock title="Setup">

> 1. Set **Settings → Graphics → Draw Distance** to **High** in the game client, by hand, before starting.
> 2. Open the **Options** page and enter your **Bank pin** if the account has one.
> 3. Check the **World Hopper** page — hopping is on by default with sensible filters, turn it off or adjust the ping/population ranges if you prefer.
> 4. Go to the **Queue** page and press **Load predefined pathway** to load the full built-in progression, or **Load quests only** for the quests that are not in it, or build your own with the **Add Task** section.
> 5. Optionally save what you have built with **Save preset** so it survives a `Clear` or a pathway reload.
> 6. Watch the **Current Task** panel for red `ACTION:` lines — those are the steps the script deliberately hands to you.

</ContentBlock>

:::::hidden

## The Task Queue

:::::

<ContentBlock title="How the Queue Runs">

> The queue is a plain ordered list with a single "current position" pointer. Every cycle the script re-checks the task it is pointing at:
>
> 1. If the queue is exhausted, the state becomes `Complete`.
> 2. **Completion is re-checked before any work is done.** Each task carries a completion check from its definition — a level reached, an item count, a varbit or varp value, a saved boolean flag, or a cumulative gather count. If it already reads as satisfied, the task is marked `Completed` and the queue advances **without performing it**.
> 3. Otherwise the task is marked `In Progress` and the script picks the appropriate state — banking, travelling, gathering, questing, and so on.

| State | Meaning |
|---|---|
| `Pending` | Not started. |
| `In Progress` | Currently being worked on. |
| `Completed` | Its completion condition was satisfied. **Not** "the script ran it to the end" — a task counted as complete may never have been executed at all. |
| `Skipped` | You skipped it, or it was skipped in bulk. Skipped tasks are not counted as completed. |

> **Progress tracking**
> - **Counted tasks** (gather N, make N) use a persistent counter incremented from inventory-update events. Because it is persistent, progress survives bank trips, pauses and client restarts, and it is cleared when the task completes.
> - **Skill tasks** read live skill levels and XP, so a skill-up event can complete a task immediately.
> - **Quests** report the raw quest progress value against that quest's completion value, shown as `Progress: 210/500` style numbers. These are varbit/varp values, **not** a percentage of steps.
>
> **Duplicate limit** — the script refuses to have more than **2 of the same task in a row**. Adds, moves and removals that would break that rule are rejected, and the console prints `Not added: ...`, `Move blocked: ...` or `Remove blocked: ...`.
>
> **Robustness on load** — tasks saved by an older build whose format changed are dropped on load, and the current position is shifted back by the number of drops before it, so the queue resumes on the same logical task instead of silently jumping ahead.

</ContentBlock>

<ContentBlock title="Editing the Queue">

> Reordering and removal are done from the buttons on each row of the **Task Queue** table:
>
> - `Up` — move the task one place earlier.
> - `Dn` — move the task one place later.
> - `X` — remove the task.
>
> **Important side effect:** `Up` and `Dn` reset the queue position back to task 1, so reordering restarts execution from the top of the list.
>
> There is **no UI for editing an individual task's parameters**. Tasks do serialize their own fields into the save (for example a backpack-item task stores its item name, item action and dialogue steps), and on reload those stored values win — only the link back to the registry definition, and therefore the completion check, is refreshed. Practical consequence: if a script update changes what a task does, an existing saved queue keeps the old behaviour until you press `Reset` or `Clear` and reload the pathway, or load a preset fresh.

</ContentBlock>

<ContentBlock title="Presets and Persistence">

> **Pathway presets** are separate JSON files, one per preset, stored at `%USERPROFILE%\BotWithUs\scripts\configs\pathwithus\pathways\PresetName.json`.
>
> They are deliberately kept out of the settings blob so they are shareable, enumerable, and survive a settings wipe — a hand-built pathway cannot be lost by loading the predefined one or pressing `Clear`. Saving under an existing name overwrites it.
>
> **Script settings and the live queue** are written into the script's own configuration as a single JSON blob and flushed to disk immediately on every change: every option change, every add/remove/move/skip/reset/clear, every time a cumulative count ticks, every task completion, `Save Settings`, and on pause.
>
> **Persists across restarts**
> - All options.
> - The whole task queue, including each task's state, progress and the current position.
> - One-time completion flags for setup steps that should never repeat.
> - Cumulative gather counts.
> - Saved pathway preset files.
> - Window theme and mini-mode preferences.
>
> **Per-run only**
> - The running/paused flag — always forced to stopped on load, so the script never resumes itself.
> - The guidance-hints, game-settings and lodestone-unlock trackers, which are re-evaluated each session against live varbits.
> - **Bank-preset tasks**, whose completion check is hard-coded to "never complete" so the same preset can be queued repeatedly and will run again next session.
> - The manual-action alert, the cached quest name/step/progress, the recent-chat buffer, and the Shattered Worlds / Runespan sub-runners.
> - The `Stopped:` reason text, cleared on the next start.

</ContentBlock>

:::::hidden

## Interface and Settings

:::::

<ContentBlock title="Window and Navigation">

> The window is titled `PathWithUs | v1.0.0` and opens at the standard width by **850 px** tall. Dragging it narrower than 820 px flips it into **Mini UI**, where the left navigation collapses into a single dropdown.

| Left nav button | What it does |
|---|---|
| `RESUME` / `PAUSE` | The main start/stop button. Reads `RESUME` while stopped and `PAUSE` while running. Also starts and pauses the runtime timer. |
| `Statistics` | Read-only run status plus a second copy of the run controls. |
| `Console Log` | The script's log output. |
| `UI Style` | Shared theme page — `Red`, `Green`, `Blue`, `Alpha (bg only)` and `Global Alpha (%)` sliders plus `Reset to Default Style`. Cosmetic only. |
| `Queue` | The main working page — task list, presets, add and remove controls. |
| `Options` | General, banking, anti-pattern and circus settings. |
| `World Hopper` | World-hopping filters. |

</ContentBlock>

<ContentBlock title="Queue Page">

> **Top row**

| Control | Behaviour |
|---|---|
| `Load predefined pathway` | Wipes the queue and rebuilds it from the built-in Efficient Ironman pathway (every registered task except catalog-only ones). Prints `Loaded N tasks from registry (completion checked each run).` |
| `Load quests only` | Wipes the queue and loads **only** quests that are *not* part of the predefined pathway. Quests already in the pathway are skipped, so this does **not** load every quest. |
| `Lodestones: X/Y` | Read-out of unlocked lodestones. While any are missing it also names the next one. Reads `Lodestones: unavailable (log in to view)` when logged out. |

> **Pathway Presets**

| Control | Behaviour |
|---|---|
| `Preset name` | Name to save the current queue under. Illegal filename characters (backslash, forward slash, colon, asterisk, question mark, double quote, angle brackets and pipe) are stripped. |
| `Save preset` | Saves the whole current queue, including each task's progress and state, to a JSON file. Overwrites an existing preset of the same name. Refuses on a blank name or an empty queue. |
| `Preset` | Dropdown listing saved preset files, sorted alphabetically and case-insensitively. If none exist the section shows `No saved presets yet.` |
| `Load fresh` | Replaces the queue with the preset and **resets all progress to task 1**. |
| `Load w/ progress` | Replaces the queue with the preset, keeping the progress it was saved with. |
| `Delete` | Deletes the selected preset file. |

> **Current Task**
>
> A scrolling panel showing the task the script is on right now. Line one is the task description, the last line is `Status: Pending` / `In Progress` / `Completed` / `Skipped`, and if nothing is queued it reads `No active task`. Depending on the task type it also shows:
>
> - **Skill training** — `Skill:`, `Location:`, `Resource:` and `Progress: n%` (current progress over target value).
> - **Gathering** — `Gathered: current/target item (n%)`.
> - **Soft clay** — `Made: current/target Soft clay (n%)`.
> - **Station-convert** — `Made: current/target output item (n%)`.
> - **Quests** — `Quest:`, `Step:` (or `...` when unknown) and `Progress: current/target`, plus:
>   - `ACTION:` in **red** — a manual action the script cannot do for you, such as a puzzle or a fight it deliberately hands over.
>   - `Note:` in **orange** — a static per-quest note about player requirements.
>   - `Items:` — items the quest needs you to have.

> **Add Task**

| Control | Behaviour / default |
|---|---|
| `Category` | Filters the task dropdown: `All`, `Quests`, `Gathering`, `Training`, `Processing`, `Shop`, `Banking`, `Necromancy`, `Fort`, `Other`. Default `All`. |
| `Search` | Case-insensitive substring filter on the task description. Default empty. |
| `Hide duplicates` | Default **off**. Shows each task only once in the dropdown. The predefined pathway registers some tasks several times, so with this off you see every occurrence. |
| `Task` | The filtered list of task definitions. Bank-preset tasks are excluded — they have their own dropdown. |
| `Add` | Appends the selected task to the **end** of the queue and prints `Added: description`. |
| `Bank preset` | `Preset 1` through `Preset 18`. Free-to-play accounts only have the first 7. |
| `Add preset` | Appends a "Load bank preset N (Burthorpe)" task. It teleports to Burthorpe, opens the bank and loads that preset — queue one between quests to swap gear and supplies. |

> If the filters exclude everything, the section shows `No tasks match this category/search.` instead.

> **Task Queue list**
>
> The header reads `Task Queue (N shown / M)`, where the word `shown` only appears while a filter is active. Two controls sit above it: `Hide skipped/completed` (default **off**, hides finished rows, though the current task is always shown) and `Filter` (case-insensitive substring filter, default empty).
>
> The table has three columns — `#`, `Task`, and an unlabelled button column.
>
> - The `#` column shows the 1-based position, and the current task is prefixed with a chevron, for example `>14`.
> - Row colours: **yellow** = current task, **green** = completed, **grey** = skipped, default colour = pending.
> - Row labels get a progress suffix in brackets where the task type supports it — `(12/50)` for counted tasks, and progress-over-target for quests. Quest progress only shows real numbers for the *current* task; other quest rows show a zero.

> **Queue control buttons**

| Button | Behaviour |
|---|---|
| `Skip` | Marks the current task `Skipped` and advances one. |
| `Skip 10` | Skips the next 10 tasks. |
| `Skip 50` | Skips the next 50 tasks. |
| `Undo Skip` | Steps back onto the previous task and sets it back to `Pending`. Greyed out unless the immediately previous task is in the `Skipped` state. |
| `Back 1` | Steps back one task and sets it `Pending` so it runs again, regardless of the previous task's state — useful after a reload where it reads `Completed`. Greyed out at position 1. |
| `Reset` | Sets every task back to `Pending`, zeroes each task's progress and jumps to task 1. Prints `Pathway reset`. |
| `Clear` | Empties the queue entirely. Prints `Task queue cleared`. |

> **Progress footer** — `Completed: completed/total` and `Skipped: n`. There is no ETA or time-remaining display anywhere in the UI.

</ContentBlock>

<ContentBlock title="Options Page">

> **General**

| Setting | Type | Default | Effect |
|---|---|---|---|
| `Logout on complete` | checkbox | **on** | When the whole queue finishes, disables auto-login, clicks Logout, then pauses. With it off the script just pauses. |
| `Debug mode` | checkbox | **on** | Extra logging and stack traces from dialogue handling, quests, shops and navigation. |
| `Skip settings check` | checkbox | **off** | Skips the guidance-hints disabling *and* the automatic game-settings pass at start-up. Lodestone unlocking still runs. |

> **Banking**

| Setting | Type | Default | Effect |
|---|---|---|---|
| `Bank pin` | text input | empty | Your 4-digit bank PIN, entered automatically when the PIN screen appears. Only exactly 4 digits are accepted; anything else is ignored and not written. |
| `Hide bank pin` | checkbox | **on** | Masks the PIN field with asterisks. |

> **Anti-Pattern**

| Setting | Type | Default | Effect |
|---|---|---|---|
| `Random delays` | checkbox | **on** | Randomised action timing. |
| `Delay: 500-1500 ms` | read-only text | 500 to 1500 | Displays the current delay window. There is no input field for it in this build — the values are persisted but only editable in the saved settings JSON. |

> **Circus (Big Top Bonanza)**

| Control | Behaviour / default |
|---|---|
| `Location` | Dropdown. The first entry is `Auto` followed by the computed city; the rest are the rotation cities. Cities with no travel coordinate are suffixed `(no coordinate)`. Default `Auto`. Picking a city pins it by hand; picking `Auto` clears the override. A saved override that no longer exists in the rotation is silently dropped back to `Auto`. |
| `Travelling to: ...` | Text showing which city the circus task will actually travel to, and whether that was `(set by hand)` or `(weekly rotation)`. |
| Red warning | Shown if the effective city has no mapped coordinate — the circus task cannot travel there, so pick another city. |
| Orange advisory | Shown while on `Auto` — the rotation is computed, not read from the game, so pin the right city if the script walks to an empty field. |

> **Footer** — `Save Settings` writes settings and queue to disk and logs `Settings saved`. It is mostly redundant, since every checkbox and field change already auto-saves silently.

</ContentBlock>

<ContentBlock title="World Hopper Page">

> Hops to a fresh world when a resource is depleted, for example redberry bushes. Section headers are `World Hopper`, `Ping (ms)` and `Players`.

| Setting | Type | Default | Notes |
|---|---|---|---|
| `Enable world hopping` | checkbox | **on** | Used by gathering tasks flagged "hop when depleted", and by the Necromancy combat handler when another player enters an instanced training spot. |
| `Members worlds only` | checkbox | **on** | |
| `Min Ping` | integer | `1` | Clamped to 0 or above. |
| `Max Ping` | integer | `300` | Clamped to 1 or above. |
| `Min Players` | integer | `0` | Clamped to 0 or above. |
| `Max Players` | integer | `2000` | Clamped to 1 or above. |

> Two settings are saved and loaded but have no UI control: `usePredefinedPathway` (default true) and `autoBankOnFull` (default true).

</ContentBlock>

<ContentBlock title="Statistics Page">

> Read-only run status plus a second copy of the run controls.
>
> - `Script State:` — one of `Idle`, `Disabling Guidance Hints`, `Configuring Game Settings`, `Unlocking Lodestones`, `Checking Task`, `Handling Interaction`, `Banking`, `Traveling`, `Gathering`, `Spinning`, `Smelting`, `Smithing`, `Metal Bank Deposit`, `Metal Bank Withdraw`, `Purchasing`, `Selling`, `Training`, `Questing`, `Making Soft Clay`, `Making Pottery`, `Unfired Bowl (Dragon Slayer)`, `Combining Items`, `Milling Flour`, `Performing Ritual`, `Looting Ritual Chest`, `Loading Bank Preset`, `Transitioning`, `Complete`.
> - `Current Handler:` — the active skill handler, or `None`.
> - `Lodestones: X/Y unlocked`.
> - `Tasks Completed:`, `Tasks Skipped:` and `Tasks Remaining:` (remaining is total minus current position).
> - `Stopped:` in **red** — shown only while stopped, and only when the script stopped *itself* on a failed task.
> - `Start` / `Pause` — mirrors `RESUME` / `PAUSE`.
> - `Reset Stats` — **misleading label**. It calls the same reset as the queue's `Reset` button, setting every task back to `Pending` and jumping to task 1. Unlike the Queue page's `Reset`, it does not save afterwards.

</ContentBlock>

<ContentBlock title="Start and Stop Behaviour">

> - **On start** it subscribes to skill, inventory, tick and chat events, sets state to `Idle`, clears any previous stop reason and navigation-failure counters, and resumes the runtime timer.
> - **On pause** it saves settings and queue, unsubscribes events and pauses the timer.
> - **Self-stop on failure** — when a task cannot proceed (no path, missing supplies, retries exhausted) the script logs `TASK FAILED:` with the reason and stops. It does **not** skip the task or advance the queue, so fixing the problem and pressing Start retries the same task. The reason stays visible in red on the Statistics page until the next start.
> - **On finishing everything** the state becomes `Complete`, it logs `All tasks complete!`, logs out if `Logout on complete` is on, then pauses.
> - A crash-tracing boot log is written to `%USERPROFILE%\BotWithUs\pathwithus_boot.log`.

</ContentBlock>

:::::hidden

## Automatic Game Settings

:::::

<ContentBlock title="Automatic Game Settings">

> On `RESUME` the script starts in `Idle` and runs a start-up sequence before touching the queue. All of it except lodestone unlocking is skipped if `Skip settings check` is ticked.
>
> **1. Disabling Guidance Hints** — opens Settings → Interfaces → Information Windows and turns guidance hints **off**, verifying that the setting actually flipped rather than assuming the clicks landed.
>
> **2. Configuring Game Settings** — opens Settings on the gameplay tab and applies the changes below, clicking each row until the underlying variable reads the wanted value. It makes up to 3 attempts per row, then logs `FAILED` and moves on.

| Settings location | Change made |
|---|---|
| Combat & Action Bar → Combat Mode | Revolution auto-trigger thresholds **on** |
| Combat & Action Bar → Combat Mode | Revolution auto-trigger enhanced abilities **on** |
| Combat & Action Bar → Combat Mode | Revolution auto-trigger ultimates **on** |
| Combat & Action Bar → Combat XP | Melee defence XP **off** |
| Combat & Action Bar → Combat XP | Ranged defence XP **off** |
| Combat & Action Bar → Combat XP | Magic defence XP **off** |
| Skills & XP → Necromancy | Ask before clearing component **off** |
| Skills & XP → Necromancy | Ask before repairing component **off** |
| Skills & XP → Necromancy | Ask before overriding component **off** |
| Skills & XP → Necromancy | Ask before repair-all **off** |
| Skills & XP → Necromancy | Warn on site clear **off** |
| Skills & XP → Necromancy | Warn on ritual quit **off** |
| Skills & XP → Necromancy | Warn on depleted alteration **off** |
| Interfaces → Game Interaction | Skip travel cutscenes **on** |

> **3. Draw Distance check** — this one is a read, not a change. The script switches to the Graphics tab and checks Draw Distance. If it is anything other than **High** it stops itself and tells you to set it manually and restart. The client ignores injected dropdown clicks, so this has to be done by hand once.
>
> **4. Unlocking Lodestones** — it closes the settings window and, if any lodestones are missing, walks the free-to-play circuit in this order: Lumbridge, Al Kharid, Draynor, Port Sarim, Falador, Taverley, Burthorpe, Varrock, Edgeville. Each stone's unlock flag is tracked, so already-unlocked stones are skipped and the step ends as soon as all nine are done. Then it moves to the task queue.

> **Always-on behaviour in the main loop**
>
> These are not settings changes, but the script does them every loop without asking:
>
> - Enters your bank PIN when the PIN screen opens.
> - Detects death and runs item reclaim, then exits Death's office.
> - Dismisses the tutorial/hint popup and the welcome screen.
> - Waits out cinematics and presses continue on cutscene prompts.
> - **Destroys on sight** any `Strange rock` or `Sealed clue scroll` picked up while skilling or fighting, including confirming the destroy dialog.

</ContentBlock>

:::::hidden

## Supporting Systems

:::::

<ContentBlock title="Banking and Supplies">

> While running the predefined pathway, PathWithUs banks for itself and never needs a bank preset. Every trip is walk to a bank, deposit, withdraw exactly what the next step needs, close, go.
>
> - **Quests outside the pathway do not bank.** A catalog-only quest will not fetch its own supplies — set your backpack and gear up by hand before you queue one. The exception is a quest that banks as part of its own walkthrough, which it will still do.
> - **What it carries** — each task carries its own shopping list. Skill tasks derive theirs from the skill: Mining asks for any pickaxe, Woodcutting for any hatchet, Fishing for 100 bait or 100 feathers (nets, rods, cages and harpoons are assumed to be on the tool belt), Cooking for the matching raw fish. Quest and crafting steps carry hand-written lists.
> - **Withdraw only what is missing** — combine and craft steps count what is already in your backpack and withdraw only the shortfall. Ritual steps withdraw only the ingredients still owed. Flour milling withdraws only the remaining empty pots. Fort conversions check what is already banked first. Where an exact number is needed the bot uses **Withdraw-X**, so 14 out of a stack of 28 really is 14.
> - **Deposits** — the default is deposit-everything, but combine steps keep the recipe inputs, deposit-only steps bank a single named item, and full-reset steps deposit worn equipment too (used before Shattered Worlds, which supplies your gear). A wood box in the backpack is emptied into the bank *before* the deposit so its logs are not locked away from later plank and fort tasks. Equipped items that must be banked are unequipped first.
> - **Deposit boxes** — gathering steps at box-only locations such as Silvarea click Deposit-All on the box instead of walking to a real bank.
> - **Noted withdrawals** — for bulk bone deliveries the noted-withdrawal toggle is flipped on and back off automatically.
> - **Metal bank** — Smithing steps use the Fort furnace metal bank directly, with Deposit-all at a furnace and Withdraw-X from the smithing interface.
> - **Bank presets** are used in exactly one place: the "load preset at Burthorpe" step used to reset kit between quests. It teleports to the Burthorpe lodestone (skipped if you are already within 40 tiles of the bank), walks in, loads the preset, and confirms by watching for the game's "Your preset is being withdrawn" chat line. Three failed attempts fail the task, because a preset that never confirms is normally an empty one.
> - **Out of supplies** — if a withdrawal fails twice in a row for the same task, the script stops with an out-of-supplies message instead of looping at the bank.

</ContentBlock>

<ContentBlock title="Completion Detection">

> Every step carries its own finish condition, checked each tick. Nothing runs on a timer, so you can stop and restart at any point and the bot picks up where the game actually is.

| Check | What it means |
|---|---|
| **Level** | A skill has reached a target level. |
| **Varbit / Varp** | A hidden game variable has reached a value. This is how quests are tracked, and also lodestone unlocks, Fort building tiers and toolbelt contents. |
| **Item count** | You hold at least N of an item, either as one stack or summed across slots for non-stackables. |
| **Item by ID** | The same, but by item ID, for gear whose name does not reveal its tier — Necromancy equipment is all called "Death guard" or "Deathwarden" at every tier. |
| **Equipped** | One item, or a whole list of items, is worn. |
| **Item gone** | An item is no longer in the backpack, or no longer offers an option. |
| **Empty backpack** | Backpack empty, optionally with nothing equipped either. |
| **At location** | You are within N tiles of a coordinate — used for teleport and travel steps. |
| **Cumulative gather** | For targets bigger than a backpack, a running total is kept across bank trips and saved between sessions. |
| **Persisted flag** | A one-off with no game state to read records itself as done in your save file. |
| **Ore box / wood box aware** | Ore counts read the ore box's own storage plus the backpack, so boxed ore still counts. |
| **Any of these** | Several checks combined — the step is done if any one passes. |

</ContentBlock>

<ContentBlock title="Navigation and Travel">

> All travel goes through one shared router, which is why long-distance hops behave consistently.
>
> - **Lodestones and teleports are automatic.** Paths are resolved by the game's own navigation, which uses lodestones, charters and shortcuts as needed. You never tell the bot which lodestone to use.
> - **Short hops are walked.** Under 50 tiles, teleports are switched off so the bot walks instead of waiting on a teleport animation.
> - **Surge is always enabled**, and Bladed Dive is used except in combat.
> - **Combat-aware routing** — if you get into a fight mid-journey the route is re-resolved without teleports or dive, and is interrupted the moment combat ends so full navigation resumes. An out-of-combat route is likewise interrupted the moment combat starts.
> - **Excluded areas** — certain regions are blacklisted from pathing so routes do not wander through them.
> - **Failure handling** — three consecutive failed attempts to reach the same place and the bot stops retrying and moves on, with the counter resetting after a minute without failures. "No path at all" fails the task loudly rather than spinning.

</ContentBlock>

<ContentBlock title="Death and Recovery">

> Death recovery runs *above* the task queue — whatever the bot was doing, a detected death takes priority and the queue resumes only once you are back out.
>
> Death's office is instanced, so a fixed area check is useless. The bot decides it is in the office by seeing **both** the Death NPC and Death's Hourglass within 30 tiles, and separately tracks the pending items-to-reclaim counter, where a jump from zero means a fresh death.
>
> 1. **Reclaim** — talk to Death, click Reclaim items, confirm, and wait for the pending counter to drop to zero, up to 3 attempts.
> 2. **Clear dialogue** — any conversation the office opened is clicked through. On a first-ever death Death blocks the hourglass with his tutorial line; the bot recognises it, clicks through and then talks to him properly. As a fallback, two blocked exits also trigger the talk-to.
> 3. **Exit** — use Exit on Death's Hourglass. Some exits open a generic option modal instead of a dialogue, so the bot reads the option texts and clicks the one containing "exit" rather than guessing a position.

</ContentBlock>

<ContentBlock title="Minigames and Skills">

> **Minigames and activity subsystems**
>
> - **Runespan** — a full trainer entered from the Wizards' Tower. It maps the floor into islands, caches the links, and picks targets by weighing XP rate against travel time. Pathway usage: low floor to Runecrafting 33, then mid floor to 50.
> - **Shattered Worlds** — the standalone bot embedded, covering the lobby, the Mutator screen, combat, prayer switching, potions and exiting via the Red Portal. Pathway usage: Magic to 55 and Ranged to 45. Your backpack *and* worn equipment are banked first, because the minigame supplies gear and food.
> - **Fort Forinthry** — the whole gather, convert and build chain, including plan selection that verifies the game's selected-recipe variable matches the intended plan.
> - **Circus** — used to reach Magic 5 for the Surge unlock. The circus city is computed from a weekly rotation because the game exposes nothing that names it, which is why the Options page has a manual override.
> - **Player-Owned Farm** — the Manor Farm tutorial, completed end to end.
> - **Slayer** — trains to 10 with Turael/Spria in Burthorpe, reading your assignment and kill count live, buying and equipping required master-shop items, and mapping roughly two dozen low-level categories to kill spots.
>
> **Skill training** covers Mining, Fishing, Woodcutting, Cooking, Smithing, Crafting, Firemaking, Divination, Magic, Necromancy, Runecrafting, Slayer, Ranged and general Combat. Training locations are **not** chosen dynamically — each pathway step names the location it wants, and the skill's handler maps that name to an area, a walk-to coordinate and a bank.

</ContentBlock>

<ContentBlock title="World Hopping, Combat Level and Tools">

> - **World hopping** is on by default. You control members-only, ping range and population range; if nothing matches your filters the bot falls back to a preset world list. Hops are throttled to one per 8 seconds and it waits until it is actually logged in on the new world. It hops when a gathering step's resource is depleted and the step is flagged hop-when-empty, when Necromancy training in an instanced area detects another player within 30 tiles, and once deliberately before Rune Mythos to force a clean login.
> - **Combat level** is computed from your base stats with the wiki formula rather than read from the game, because the game's own getter is unreliable. Several quests and steps gate on it.
> - **Toolbelt hatchet upgrades** — the tool belt holds exactly one hatchet, and the bot knows the whole ladder from Bronze to Primal. While chopping it watches your Woodcutting level, and when you pass the requirement for a better hatchet that the pathway already bought from Bob's Brilliant Axes (steel, mithril, adamant), the next bank trip withdraws it and adds it to the belt. If the hatchet is not in the bank or the add does not register, that tier is dropped for the session.
> - **Ore box** — if a bronze ore box is in the backpack, mining steps Fill it, and ore counts read the box plus your backpack.
> - **Wood box** — any tier is used opportunistically while chopping. The bot knows each tier's capacity and which log types it accepts, empties it at the bank first and keeps it in the backpack for the next trip. After two failed empties it stops offering the box.

</ContentBlock>

:::::hidden

## Related Pages

:::::

<ContentBlock title="Related Pages">

> - [Predefined Pathway](./pathway.md) — the full ordered list of tasks in the built-in progression.
> - [Quest Coverage](./quests.md) — which quests are automated, which need a manual step, and what each one requires.
> - [Task Type Reference](./tasks.md) — every task type in the catalog and what it does.

</ContentBlock>

:::::hidden

## Changelog

:::::

<Changelog changes={changes} />
