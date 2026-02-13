---
title: ZukWithUs-Normal
description: Automates TzKal-Zuk Normal Mode using Necromancy with full wave progression and boss mechanics.
# Slug is the URL path for this page.
slug: /ZukWithUs-Normal
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="ZukWithUs-Normal" version="v1.0" author="BotWithUs" skill="Necromancy">
</TopBanner>

:::hidden

## Description

:::

<ContentBlock title="Description">

> ZukWithUs-Normal fully automates the **TzKal-Zuk Normal Mode** encounter in RuneScape 3 using Necromancy. The script handles all 17 mob waves plus the 7-phase Zuk boss fight with dedicated combat strategies per wave. It manages pre-fight setup (campfire, thermal pool, incense sticks, powders), automatic banking at War's Retreat or Max Guild, aura queue rotation, familiar summoning, prayer flicking, consumable usage, and death recovery. The script uses a GCD-based rotation system synchronized to RuneScape's 600ms server tick for precise ability execution.

</ContentBlock>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - FREE / month (not including client access)

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - **Full 18-Wave Automation**: Specialized combat rotation strategies for every wave including checkpoint waves (5, 10, 15)
> - **7-Phase Zuk Boss Fight**: Handles all TzKal-Zuk mechanics including empowering magic attacks, pizza/flames phases, and enrage phase
> - **GCD-Based Combat Rotation**: Server tick-synchronized ability execution with proper global cooldown tracking (3-4 tick cycles)
> - **Necromancy Rotation**: Full conjure management (Skeleton, Zombie, Ghost, Phantom), Living Death combos, Death Skulls, Volley of Souls, Spectral Scythe tiering
> - **Banking Options**: War's Retreat (with optional Bladed Dive) or Max Guild banking
> - **Pre-Fight Setup**: Campfire boost, Thermal Pool, Incense Sticks, Powder of Protection, Powder of Penance - all toggleable
> - **Aura Queue System**: Priority-based aura rotation with per-aura reset toggle (Vis Wax / refresh scrolls)
> - **Familiar Support**: Hellhound, Blood Reaver, Kal'Gerion Demon, Ripper Demon, Pack Yak, Pack Mammoth, War Tortoise, Spirit Terrorbird with auto-scroll usage and refresh tracking
> - **Prayer Flicking**: Continuous prayer management with specialized Jad prayer flicking for checkpoint trap phases
> - **Consumable Management**: Configurable health thresholds for food, Saradomin Brews, Guthix Rest, Excalibur, and prayer restores
> - **Death Recovery**: Automatic return to Death's Office with gear reclaim and configurable death limit
> - **Vulnerability Bombs**: Auto-throws on TzekHaar-Aken and TzKal-Zuk
> - **Session Statistics**: Tracks runtime, death count, dungeon completion time, average dungeon time, and total completions

</ContentBlock>

:::hidden

## Requirements

:::

<ContentBlock title="Requirements">

> **Make sure you meet the requirements below**
> - 99+ Necromancy (120 recommended for optimal performance)
> - All Necromancy talent tree unlocks
> - Conjure Undead Army with all 3 conjures active
> - Sufficient Ectoplasm and Necrotic runes (minimum 500 of each type)
> - T90+ Necromancy weapon and armour
> - T95 Curses unlocked (Deflect Melee/Ranged/Magic, Soul Split, Sorrow)
> - War's Retreat unlocks: Campfire, Prayer Altar, Boss Portal set to TzKal-Zuk
> - Supreme Overloads (or any Overload variant)
> - Food, Saradomin Brews, and Restore potions in bank preset
> - Action Bar set to Revolution++ with all Necromancy abilities placed
> - Auto Retaliate enabled
> - Prayer tab open and visible
> - Minimum 15,000 Divine Charges (if using augmented gear)
> - Bank Preset #1 configured with combat gear and supplies

</ContentBlock>

<ContentBlock title="Optional Requirements">

> **Having all optional requirements will ensure better kill times and fewer deaths**
> - T95 Necromancy gear (affects Volley of Souls and Soul Strike thresholds)
> - Essence of Finality amulet
> - Igneous Kal-Mor or Igneous Kal-Zuk cape
> - Enhanced Excalibur (used automatically if in inventory)
> - Elven Ritual Shard (used automatically if in inventory)
> - Darkness spell (Ancient spellbook)
> - Prism of Restoration (requires Astral, Blood, and Soul runes - minimum 500 each)
> - Adrenaline potions
> - Vulnerability Bombs
> - Devoted / Enhanced Devoted perks on armour
> - Mobile perk or Double Surge relic active
> - Scripture of Ful/Wen/Jas/Grimoire
> - Pre-Fight Preset #2 for buff gear (Incense Sticks, Powders)

</ContentBlock>

:::hidden

## Setup

:::

<ContentBlock title="Setup">

<details>
<summary><strong>Action Bar Setup</strong></summary>

> Ensure **Revolution++** is active and all of the following abilities are on your action bar:
> - **Necromancy Basics**: Soul Sap, Soul Strike, Touch of Death
> - **Necromancy Thresholds**: Finger of Death, Volley of Souls, Bloat
> - **Necromancy Ultimates**: Living Death, Death Skulls
> - **Conjures**: Conjure Undead Army, Command Skeleton Warrior, Command Vengeful Ghost, Life Transfer (Zombie)
> - **Spectral Scythe**: All unlocked tiers (1/2/3)
> - **Utility**: Darkness, Prism of Restoration, Invoke Death
> - **Defensives**: Resonance, Debilitate, Greater Bone Shield
> - **Mobility**: Surge, Dive/Bladed Dive
> - **Prayers**: Soul Split, Sorrow/Ruination, Deflect Melee, Deflect Ranged, Deflect Magic

</details>

<details>
<summary><strong>Inventory / Preset Setup</strong></summary>

> *Bank Preset #1 (Combat Gear) should contain:*
> - Full Necromancy combat gear (weapon, armour, cape, amulet, ring)
> - Overload potions (any tier)
> - Saradomin Brews
> - Super Restore potions
> - Food (Sailfish or similar high-healing)
> - Adrenaline potions (optional)
> - Vulnerability Bombs (optional)
> - Enhanced Excalibur (optional)
> - Elven Ritual Shard (optional)
> - Familiar pouch and scrolls
>
> *Bank Preset #2 (Pre-Fight Buffs - optional) should contain:*
> - Incense Sticks (Lantadyme and/or Kwuarm)
> - Powder of Protection
> - Powder of Penance

</details>

<details>
<summary><strong>Script Settings</strong></summary>

> **General Tab**
> - Select banking location (War's Retreat or Max Guild)
> - Set regular banking preset ID (default: 1)
> - Configure death limit (0 = unlimited)
> - Toggle "Start at Instance" if already at the entrance
>
> **Pre-Fight Tab**
> - Toggle campfire boost, thermal pool, incense sticks, and powders
> - Set pre-fight preset ID (default: 2)
>
> **Aura Tab**
> - Add auras to the queue in priority order (Mahjarrat, Maniacal, Berserker, etc.)
> - Toggle per-aura reset
>
> **Prayer Tab**
> - Toggle T95 gear mode (affects ability thresholds)
> - Select Sorrow (T95) or Ruination (T99) prayer
>
> **Familiar Tab**
> - Select familiar type and enable scroll usage
> - Set refresh threshold (minutes remaining before re-summoning)
>
> **Consumables Tab**
> - Set health % thresholds for food (60%), brews (25%), Guthix Rest (45%), Excalibur (95%), and prayer restore (25%)

</details>

<details>
<summary><strong>Starting the Script</strong></summary>

> 1. Be at **War's Retreat** or **Max Guild** with your boss portal set to TzKal-Zuk
> 2. Load your combat preset
> 3. Ensure all abilities and prayers are on your action bar and visible
> 4. Configure the script settings in the GUI
> 5. Start the script
>
> The script will handle pre-fight buffs, entering the instance, all 18 waves, looting, banking, and repeating.

</details>

<details>
<summary><strong>Additional Notes</strong></summary>

> - Deaths are possible, particularly on Jad checkpoint waves (unlucky melee swipes). The script will automatically recover from death and continue.
> - Ensure sufficient GP in your money pouch to rebuy gear from Death if needed.
> - The script tracks your average dungeon completion time across runs for performance monitoring.
> - Devoted / Enhanced Devoted perks on armour significantly improve survivability.
> - The script will use Vulnerability Bombs on TzekHaar-Aken and TzKal-Zuk if they are in your inventory.

</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
