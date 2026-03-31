---
title: SlayerWithUs
description: All-in-one Slayer script supporting 195+ tasks, 15 masters, point farming, per-task combat profiles, looting, and custom paths.
slug: /SlayerWithUs
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import changes from './changes.json'

<TopBanner title="SlayerWithUs" version="v1.0.0" skill="Slayer">
</TopBanner>

:::::hidden

## Overview

:::::

<ContentBlock title="Overview">

> SlayerWithUs is a comprehensive all-in-one Slayer script supporting **195+ tasks** across **15 Slayer masters**. It handles task assignment, navigation, combat, looting, banking, death recovery, and custom pathing — all fully configurable per task.

</ContentBlock>

<ContentBlock title="Features">

> - Automatic task assignment via NPC Contact or walking to master
> - Point farming mode with dedicated 10th-task bonus master
> - Per-task combat profiles with prayer, potion, and food management
> - 4 attack styles: Melee, Ranged, Magic, Necromancy
> - 4 prayer modes: Disabled, Soul Split, Protect by Style, Hybrid
> - Area looting with value threshold and wildcard patterns
> - Herb bag, gem bag support
> - 500+ pre-configured task locations
> - Custom path system with 10 step types for custom navigation generation
> - Automatic death recovery with item reclamation
> - Per-task location selection with configurable combat radius
> - Task priority system for preferred task ordering
> - Auto-banking between tasks with 9 supported bank locations

</ContentBlock>

<ContentBlock title="Supported Masters">

> - **Turael** / **Spria** — Burthorpe (low level)
> - **Jacquelyn** — Lumbridge
> - **Vannaka** — Varrock
> - **Mazchna** / **Achtryn** — Canifis
> - **The Raptor** — Feldip Hills
> - **Chaeldar** — Zanaris
> - **Sumona** — Pollnivneach
> - **Lapalok** / **Duradel** — Shilo Village
> - **Kuradal** — Dungeoneering
> - **Morvran** / **Laniakea** — Menaphos
> - **Mandrith** — Wilderness (PvP)

</ContentBlock>

<ContentBlock title="Requirements">

> - Area Looting enabled in-game (with "1 item opens loot window")
> - Appropriate combat gear and action bar configured
> - NPC Contact on your action bar if using automatic task assignment
> - Food and prayer potions in your bank preset
> - Slayer level appropriate for your chosen master

</ContentBlock>

<ContentBlock title="Setup">

> 1. Select your Slayer master (or enable Point Farm Mode and pick a bonus master).
> 2. Configure your default combat profile — attack style, prayer mode, food/potion thresholds.
> 3. Optionally set per-task combat overrides in the Combat tab.
> 4. Configure loot rules — value threshold, stackables, custom patterns.
> 5. Choose task locations in the Locations tab and adjust combat radius if needed.
> 6. Optionally set up task priorities or custom navigation paths.

</ContentBlock>

:::::hidden

## General Settings

:::::

<ContentBlock title="General Settings">

![General Settings](SlayerGeneralSettings.png)

> - **Point Farm Mode**: Cycles between a low-level master for fast tasks and a high-level master every 10th task for bonus Slayer points
> - **Slayer Master**: Select your primary Slayer master from 15 supported masters
> - **Current Task Handling**: Resumes an in-progress task or fetches a new one
> - **Use NPC Contact**: Uses the NPC Contact spell to get tasks without walking to the master — falls back to walking if the spell fails
> - **Bank After Every Task**: Deposits loot at a bank between each task completion

</ContentBlock>

:::::hidden

## Combat Settings

:::::

<ContentBlock title="Combat Settings">

![Combat Settings](SlayerCombatSettings.png)

> **Default Combat Profile** applies to all tasks unless overridden:
> - **Attack Style**: Melee, Ranged, Magic, or Necromancy
> - **Prayer Mode**: Disabled, Soul Split, Protect by Style (auto-switches based on monster), or Hybrid (Soul Split above HP threshold, protection below)
> - **Use Curses**: Uses Deflect prayers instead of Protect prayers
> - **Food**: Automatically eats when HP drops below the configured heal threshold (default 50%)
> - **Prayer Restore**: Drinks prayer potions when points drop below threshold (default 30%)
> - **Prayer Renewal**: Maintains prayer renewal buff
> - **Overloads**: Maintains overload potion buff
>
> **Per-Task Overrides**: Enable the Override toggle on any task in the combat table to use a custom combat profile for that specific task.

</ContentBlock>

:::::hidden

## Loot Settings

:::::

<ContentBlock title="Loot Settings">

![Loot Settings](SlayerLootSettings.png)

> - **Minimum Value**: Set a GP value threshold — items below this value are ignored (default 5,000 GP)
> - **Loot All Stackables**: Picks up all stackable items regardless of value
> - **Stackables Ignore Value Threshold**: Stackable items bypass the minimum value filter entirely
> - **Herb Bag**: Automatically stashes herbs into your herb bag (supports upgraded version)
> - **Gem Bag**: Automatically stashes gems into your gem bag
> - **Custom Loot Patterns**: Define wildcard patterns for specific items to always loot (supports `*` and `?` wildcards, case-insensitive)

</ContentBlock>

:::::hidden

## Custom Paths

:::::

<ContentBlock title="Custom Paths">

> Create custom navigation paths for any task/location combination. Useful for tasks where default navigation doesn't reach the optimal spot.
>
> **Step Types:**
> - **MOVE_TO** — Walk to absolute coordinates (X, Y, Plane)
> - **MOVE_RELATIVE** — Move relative to current position
> - **INTERACT_OBJECT** — Interact with a scene object (e.g. open a door, climb stairs)
> - **INTERACT_NPC** — Interact with an NPC
> - **USE_ITEM** — Use an item from backpack, equipment, or action bar
> - **MINIMENU** — Right-click menu interaction on a target
> - **INTERACT_INTERFACE** — Click a specific interface component
> - **WAIT** — Pause for a set duration (ms)
> - **WAIT_FOR_INTERFACE** — Wait until a game interface opens (with timeout)
> - **ATTACK** — Signals navigation is complete, begin combat
>
> Paths are saved per task and optionally per location key. Set an **Arrival Area** to define when the path is considered complete.

</ContentBlock>

:::::hidden

## Changelog

:::::

<Changelog changes={changes} />
