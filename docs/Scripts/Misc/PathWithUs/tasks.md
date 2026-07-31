---
title: Task Types
description: Reference for every task building block PathWithUs can queue — what each type does, the parameters it exposes, and how to assemble your own pathway from them.
slug: /PathWithUs/tasks
---

import React from 'react';
import ContentBlock from '@site/src/components/ContentBlock';

:::::hidden

## Overview

:::::

<ContentBlock title="Overview">

> A **pathway** is nothing more than an ordered queue of **tasks**. Every single entry you see in the queue — mine 100 clay, complete Cook's Assistant, load bank preset 3, build the Fort lodestone — is one task, and every task is an instance of one of the types listed on this page.
>
> Tasks are self-contained. Each one knows where it needs to go, what it needs to carry, what it does when it gets there, and how to tell when it is finished. That is why you can stop the script at any point, restart it days later, and it will pick up from wherever the game actually is rather than from where it last left a bookmark.
>
> There are **39 task types** in total. Most of them are narrow and purpose-built (mill flour, claim the Quest Caravan reward), a handful are broad workhorses used dozens of times across the pathway (Resource Gather, Bank Deposit, Interaction, Make Combine, Skill Training), and one — Level Loop — is not a game action at all but a control-flow marker.

</ContentBlock>

:::::hidden

## Shared Task Fields

:::::

<ContentBlock title="Shared task fields">

> No matter which type it is, every task in the queue carries the same core set of fields.
>
> - **Task ID** — a unique key such as `MINE_100_CLAY` or `QUEST_DRAGON_SLAYER`. It is what the save file stores, what the Add Task catalog looks up, and what any persisted flags and cumulative counters are named after (`taskId_done`, `cumulative_taskId`).
> - **Description** — the human-readable line shown in the queue, e.g. "Mine 100 clay at Burthorpe".
> - **Required items** — the shopping list the banking system uses. It is a list of item name plus quantity, with an optional partial-match flag so an entry like "pickaxe" will accept any pickaxe. Skill tasks derive theirs automatically (Mining asks for a pickaxe, Fishing for bait or feathers); quest and crafting tasks carry hand-written lists.
> - **Completion condition** — checked every tick, never on a timer. Roughly two dozen kinds exist: skill level reached, varbit or varp value, item count (one stack or every slot), item by ID, item equipped, whole gear set equipped, item gone from the backpack, empty backpack (optionally empty equipment too), within N tiles of a coordinate, cumulative gather total across bank trips, a persisted one-off flag, toolbelt contents, and an "any of these" combiner.
> - **State** — PENDING, IN_PROGRESS, COMPLETED or SKIPPED. Loading a save re-checks each pending task against live game state, so anything you already did by hand is skipped rather than repeated.
> - **Progress** — a current value and a target, rendered in the queue as "12/28", plus a percentage for the progress bar.
> - **Per-task overrides** — the saved queue keeps your edits per task, not per type. Item names, item actions and quantities you change on a task in the UI are persisted with that queue entry and survive a reload.
>
> **Catalog-only tasks.** Some definitions are registered for the Add Task UI and for loading from saves but are deliberately left out of the default pathway queue — the manual-handling quests are the usual example. They are fully usable, you just have to add them yourself.

</ContentBlock>

:::::hidden

## Task Type Reference

:::::

<ContentBlock title="Task type reference">

| Task type | What it does | Configurable parameters | Example |
|---|---|---|---|
| **Resource Gather** | Walks to a spot and repeatedly interacts with one scene object to collect an item (mine ore, pick flax, chop logs). Banks when the backpack fills; over 28 items it tracks a cumulative total via inventory events. Can optionally chisel each full load inline, use a Deposit-All box instead of a bank, and world-hop when the rocks are depleted. | `gatherCoord`, `areaRadius`, `gatherArea`, `objectName`, `action`, `resultItemName`, `targetCount`, `bankCoord`, `bankArea`, `objectIds`, `hopWhenDepleted`, `chiselInputItem`, `useDepositBox` | `PICK_28_FLAX_ASTRAM_FARM` — Flax / "Pick" / 28 at Burthorpe; `MINE_100_CLAY` |
| **Dual Resource Gather** | Gathers two different resources to separate target counts in the same area, picking whichever rock is still short. Once both quotas are met it walks in place to break the animation so completion can register. Supports depositing into an ore box. | `areaCorner1`, `areaCorner2`, `objectNameA`, `actionA`, `resultItemNameA`, `targetCountA`, the same B set, `bankCoord`, `useOreBox` | `MINE_2_COPPER_2_TIN`; `MINE_20_COPPER_20_TIN` with ore box |
| **Interaction** | Navigates to a tile (or a random walkable tile in an area), talks to an NPC with a given option, then plays a scripted dialogue sequence. Can equip an item afterwards, e.g. wear the reward. | `interactionData`: `targetCoord`, `targetArea`, `npcName`, `npcOption`, `dialogueSteps`, `equipItemName`, `equipAction` | `OBTAIN_WICKED_HOOD`, `OBTAIN_DWARVEN_ARMY_AXE`, `TALK_TO_SOSTRATUS_ROBES` |
| **Quest** | Runs a full scripted quest implementation to completion, driven by that quest's own varbit or varp. Catalog-only quests can carry a manual-handling note and a required-items list surfaced in the UI. | `questSupplier`, `manualNote`, `requiredItems`; completion built from a varbit or varp plus its completion value | `QUEST_COOKS_ASSISTANT`, `QUEST_DRAGON_SLAYER`, `QUEST_BROKEN_HOME` |
| **Skill Training** | Delegates to a per-skill handler (Mining, Fishing, Woodcutting, Cooking, Necromancy and more) to train at a named location on a named resource until a level, item count or XP target is hit. Auto-banks and travels via the handler. | `skill`, `location`, `resource`, `trigger` (LEVEL / ITEM_COUNT / XP_GAINED), `targetValue`, `trackedItemName`, `customRequiredItems` | `CATCH_70_SHRIMP`, `COOK_50_SHRIMP`, `TRAIN_NECROMANCY_TO_24` |
| **Smelting** | Walks to a furnace and smelts ore into bars through the furnace interface until the bar count is reached. Can dump the ore box first. | `barName`, `targetCount`, `furnaceCoord`, `emptyOreBoxFirst` | `SMELT_20_BRONZE_BARS`, `SMELT_14_STEEL_BARS` |
| **Smithing** | At an anvil or forge, selects a bar and a product in the Forge interface and smiths N of them. | `smithItemName`, `targetCount`, `anvilCoord` | `SMITH_BRONZE_ORE_BOX`, `SMITH_4_BRONZE_WIRES`, `SMITH_IRON_PICKAXE` |
| **Spinning** | Uses a processing scene object such as a spinning wheel with a named option and the make-X interface to convert materials into a product N times. | `objectName`, `option`, `resultItemName`, `targetCount`, `wheelCoord` | `SPIN_28_FLAX_BOWSTRINGS` — Spinning wheel / "Spin" / Bowstring x28 |
| **Sell To NPC** | Trades an NPC, switches to the shop's sell tab if needed, and sells the item stack via a component click. | `npcName`, `npcOption`, `shopInterfaceId`, `sellTabVarp`, `sellTabValue`, `switchToSellTabComponentId`, `sellItemComponentId`, `sellOption` | `SELL_BOWSTRINGS_TO_JACK_OVAL` |
| **Purchase From NPC** | Travels to a shop, trades the NPC, finds the item by name and buys it. A buy sequence lets it buy large totals in chunks, e.g. 500 + 500 + 100 + 100 + 100 + 100 = 1400. | `npcName`, `npcOption`, `shopInterfaceId`, `itemToBuy`, `buyQuantity`, `buyOption`, `shopLocation`, `buySequence` | `PURCHASE_1400_WEAK_NECROPLASM`, `PURCHASE_14_PIE_DISHES_BEEFY_BILL` |
| **Bank Deposit** | Goes to a bank, opens it, deposits everything or only named items, optionally withdraws a list of items, then closes. The general-purpose "reset backpack, prep supplies" task. | `bankCoord`, `withdrawItems`, `depositOnlyItems`; a deposit-only factory | `EMPTY_BACKPACK_ALKHARID`, `PREP_LESSER_COMMUNION_SUPPLIES`, `WITHDRAW_NECROMANCER_GEAR` |
| **Backpack Item** | Interacts with a named backpack item using a named action and plays a dialogue sequence — the generic "use, eat, drop, equip or activate this item" task. | `itemName`, `itemAction`, `dialogueSteps` | `USE_PRAYER_XP_LAMP`, `EAT_STARTING_SHRIMPS`, `DROP_BRONZE_DAGGER`, `ADD_IRON_PICKAXE_TO_TOOLBELT` |
| **Equip Items** | Equips a list of items out of the backpack in one task. | `itemsToEquip`; completion is checked against one representative item | `EQUIP_NECROMANCER_GEAR`, `EQUIP_T20_NECROMANCER_GEAR`, `EQUIP_ARCHAEOLOGY_JOURNAL` |
| **XP Lamp** | Rubs or uses an XP lamp, picks a skill in the XP-choice interface and confirms. | `itemName`, `itemAction`, `skillComponentId`, `confirmIndex` | `USE_LAMP_JOY_FARMING`, `USE_ANTIQUE_LAMP_CONSTRUCTION` |
| **Goulash XP** | Loops the Swept Away reward Bowl: Fill-bowl at Maggie's cauldron, Drink Goulash, pick a skill in the XP-choice interface — until the cauldron no longer offers Fill-bowl. | `skillComponentId`, `confirmIndex` | `USE_GOULASH_BOWL_HERBLORE` |
| **Make Combine** | Generic make-X crafting, in four trigger modes: item on item, item on object, object interact where a named option opens the interface, or item action. Withdraws inputs fresh from the bank each trip and never deposits the kept items. | `primaryItem`, `secondaryItem`, `objectName`, `objectAction`, `itemAction`, `outputItemName`, `targetCount`, `workCoord`, `workArea`, `bankCoord`, `inputs`, `keepItems` | `MAKE_14_PASTRY_DOUGH`, `COOK_14_REDBERRY_PIES`, `UPGRADE_DEATH_GUARD_T20` |
| **Station Convert** | Withdraws a backpack of an input item, converts it at a production station (Sawmill "Process planks", Stonecutter "Cut stone"), deposits the output and repeats — counting output cumulatively across bank trips. | `inputItem`, `outputItem`, `stationName`, `stationOption`, `stationCoord`, `bankCoord`, `targetCount`, `inputPerOutput` (1 for logs to planks, 4 for planks to refined, 3 for refined to frames) | `MAKE_146_PLANKS_FORT`, `MAKE_8_WOODEN_FRAMES_FORT`, `CUT_48_SEGMENTS_FORT_UPGRADES` |
| **Soft Clay** | Uses a water source's Fill option on clay and confirms through the make-X interface, banking and looping to a target count. | `waterSourceCoord`, `waterSourceArea`, `waterSourceName`, `waterSourceOption`, `targetCount`, `bankCoord` | `MAKE_100_SOFT_CLAY` — Draynor Waterpump / "Fill" / 100 |
| **Pottery** | Trains Crafting at a Potter's Wheel: makes unfired items then fires them in the oven, escalating the item made as level rises. Setting the item to auto picks pots, then pie dishes, then bowls. | `potteryAreaCoord`, `itemToMake` or auto, `targetLevel`, `bankCoord` | `CRAFTING_1_TO_15_POTTERY` |
| **Unfired Bowl** | One-shot: produces a single unfired bowl for Dragon Slayer, mining and watering clay first if none is in the bank or backpack. | `potteryCoord`, `bankCoord`, `clayMineCoord`, `waterpumpArea`, `waterpumpCoord` | `CRAFT_1_UNFIRED_BOWL_DRAGON_SLAYER` |
| **Mill Flour** | Runs the whole Mill Lane Mill loop — pick wheat, load the hopper, operate the controls, collect flour into empty pots — until the pot target is met, banking only for more empty pots. | `targetPots`, `bankCoord` | `MILL_14_POT_OF_FLOUR` |
| **Metal Bank Deposit** | At a furnace, dumps all ores and bars from the backpack into the metal bank. | `furnaceCoord` | `DEPOSIT_ORES_INTO_METAL_BANK`, `DEPOSIT_14_IRON_BARS_METAL_BANK` |
| **Metal Bank Withdraw** | Opens the furnace interface, which fronts the metal bank, runs Withdraw-X on a specific row of the metal-bank panel and answers the quantity prompt. | `furnaceCoord`, `itemName`, `subComponentIndex` (the row, e.g. 3 for Iron bar), `quantity` | `WITHDRAW_KNIGHTS_SWORD_IRON_BARS` |
| **Load Bank Preset** | Lodestone-teleports to Burthorpe — deliberately, to exit any instance the previous quest ended in — opens the bank and loads a numbered preset. Completion is always false so it can be re-queued between quests. | `presetNumber` (1 to 18) | `LOAD_BANK_PRESET_3` — one is generated for every slot |
| **Lodestone Unlock** | Traverses to a lodestone and interacts Activate to unlock the teleport. | `lodestoneCoord`, `lodestoneArea`, `lodestoneName`; can complete on a persisted flag or on the real unlock varbit | `UNLOCK_CANIFIS_LODESTONE`, `UNLOCK_CITY_OF_UM_LODESTONE` |
| **Navigate To Abbey** | Fixed one-shot: traverses to the Abbey, steps onto the trigger tile to fire the Abbey dialog and clears it — a prerequisite for One Piercing Note. | None beyond ID, description and completion check | `NAVIGATE_TO_ABBEY` |
| **Quest Caravan Reward** | Claims the 25 Quest Point milestone reward from May's Quest Caravan: Reclaim from May, Roll the Magical Dice for coins, Add to pouch, then finish. Two persisted flags stop a reload from re-claiming. | None beyond ID, description and completion check | `CLAIM_QUEST_CARAVAN_25QP_REWARD` |
| **Supply And Demand** | Completes 5 Supply and Demand deliveries at the Troll Warzone — deliver Supplies to the Ambush Commander, ask Commander Denulth for more — until the achievement completes, then uses the 15 reward lamps. | None beyond ID, description and completion check | `SUPPLY_AND_DEMAND_DELIVERIES` |
| **Jatix Supplies** | Trades Jatix in Taverley, takes every free Herblore sample from the sample container until it is empty, then buys 20 vials of water from the regular stock. | None beyond ID, description and completion check | `COLLECT_JATIX_SUPPLIES` |
| **Anachronia Clay Workers** | Opens the Anachronia base camp interface and assigns 10 workers to gather clay. Runs after the Anachronia tutorial. | None beyond ID, description and completion check | `ANACHRONIA_CLAY_WORKERS` |
| **Toolbelt Hatchet** | Adds the highest-tier hatchet the account can currently use — chosen at runtime from Woodcutting level and what is in the backpack — to the toolbelt. Completion compares belt-slot indices, so it can be re-run later to upgrade. | None beyond ID, description and completion check | `ADD_BEST_HATCHET_TO_TOOLBELT` |
| **Talent Unlock** | Opens the Well of Souls and unlocks the Command Skeleton Warrior Necromancy talent. | None; completion reads the talent varbit | `UNLOCK_COMMAND_SKELETON_WARRIOR` |
| **Ritual** | Performs Necromancy rituals at the City of Um ritual site N times: sets up the glyphs and candles, feeds the focus item and counts cycles, or reads a per-recipe lifetime counter. Re-withdraws required items every bank trip. | `ritualName`, `focusItemName`, `focusAmountPerRitual`, `targetRitualCount`, `requiredItems`, `initialItems` (first travel only), optional completion varbit and target | `PERFORM_25_LESSER_COMMUNION_RITUALS_BIG_BONES`, `PERFORM_7_LESSER_NECROPLASM_RITUALS` |
| **Ritual Chest Loot** | One-shot: opens the Ritual chest at the City of Um, switches it to noted-items mode and clicks Take all. | None beyond ID, description and a persisted completion flag | `LOOT_RITUAL_CHEST`, `LOOT_RITUAL_CHEST_ENSOUL` |
| **Fort Structure** | One-shot Fort Forinthry build for the two special structures: Town Hall tier 1 via the verified plan selector, or the Fort lodestone via the blueprints' misc dropdown. | `structure` — either TOWN_HALL or LODESTONE | `BUILD_FORT_LODESTONE`, `BUILD_FORT_TOWN_HALL_T1` |
| **Fort Building** | Builds or upgrades a Fort Forinthry structure to a target tier: pulls N wooden frames and stone wall segments from the fort bank, selects the plan on the blueprints — verified against the product item ID, so it cannot pick the wrong entry when the list reorders — and drives the hotspot until it is built away. | `structureName`, `productItemId`, `frameItemName`, `frameCount`, `segmentCount`, `tierVarbitId`, `targetTier` | `BUILD_FORT_WORKSHOP_T2`, `BUILD_FORT_CHAPEL_T1`, `BUILD_FORT_GROVE_CABIN_T2` |
| **Runespan** | Trains Runecrafting inside the Runespan on a specific floor via the embedded Runespan runner. A target level of 0 turns it into a pure floor-transition task completed by a location check. | `floor` (LOW / MIDDLE / HIGH), `targetLevel` | `RUNESPAN_LOW_TO_33`, `RUNESPAN_MID_TO_50` |
| **Shattered Worlds** | Trains a combat skill in the Shattered Worlds minigame, entering with an empty backpack and equipment so the minigame's own Feed Me and Equip Me supply scaled gear and food. | `skill`, `combatStyleIndex` (the Equip Me style), `combatSkillIndex`, `targetLevel` | `SW_TRAIN_MAGIC_55`, `SW_TRAIN_RANGED_45` |
| **Level Loop** | A control-flow marker, not a game action. While the given skill is below the target it rewinds the queue by N steps, resetting those tasks to PENDING so the preceding block repeats; once the level is hit the task completes and the queue moves on. Skipped outright if the level is already met. | `skill`, `targetLevel`, `loopBackSteps` | `GRIND_SMITHING_TO_10` |

</ContentBlock>

:::::hidden

## Building Your Own Pathway

:::::

<ContentBlock title="Building your own pathway">

> The predefined pathway is only one arrangement of these building blocks. You can queue your own.
>
> 1. **Start from the catalog.** The Add Task screen lists every registered definition, including the catalog-only ones that are not part of the default queue. Search by task ID or by description.
> 2. **Order matters, and only order matters.** The queue runs strictly top to bottom. There is no dependency solver — if a Smithing task needs bars, a Smelting task has to sit above it. Put quest tasks after the tasks that gather their items, and after any quest they themselves require.
> 3. **Set required items on the tasks that need them.** Skill tasks work out their own tools and bait, but combine, quest and ritual tasks use the list you give them. The banking system reads that list, counts what is already in your backpack, and withdraws only the shortfall — so an over-generous list costs nothing but an incomplete one will stall the task at the bank.
> 4. **Use the per-task overrides instead of new tasks.** Item names, actions and target counts you edit on a queued task are saved with that entry. Changing "Mine 100 clay" to 250 is a field edit, not a new definition.
> 5. **Repeat blocks with Level Loop.** To grind a skill to a level, place the gather and process tasks in sequence and finish the block with a Level Loop task whose loop-back count covers those steps. It will rewind and replay them until the level lands.
> 6. **Re-queue bank presets freely.** The Load Bank Preset task never reports itself complete, so you can drop the same preset load between every quest to reset your kit.
> 7. **Save it as a preset.** Once the queue reads the way you want, save it. Saved queues keep each entry's state, progress and overrides, so reloading resumes mid-run rather than restarting. Loading a save also re-checks every pending task against live game state and marks off anything you have since done by hand.
>
> **A sensible first custom build:** copy the predefined pathway, delete the sections you have already finished on that account, insert your own gather and skill tasks where you want extra levels, and save it under a new name. That keeps the quest ordering and its prerequisites intact while letting you steer the skilling.

</ContentBlock>

:::::hidden

## Related Pages

:::::

<ContentBlock title="Related pages">

> - [Predefined Pathway](./pathway.md) — the full default queue, in order, and what each stage is for.
> - [Quest Coverage](./quests.md) — every quest the script can run, which ones are automated end to end, and which ones need a hand.

</ContentBlock>
