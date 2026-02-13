---
title: ConstructionContractsWithUs
description: Automates Construction Contracts from the Estate Agent for fast Construction XP.
# Slug is the URL path for this page.
slug: /ConstructionContractsWithUs
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="ConstructionContractsWithUs" version="v1.0" author="BotWithUs" skill="Construction">
</TopBanner>

:::hidden

## Description

:::

<ContentBlock title="Description">

> ConstructionContractsWithUs fully automates the **Construction Contracts** activity in RuneScape 3. The script accepts contracts from the Estate Agent in Varrock, travels to the contract location (Draynor, Varrock, Lumbridge, or Edgeville), repairs all 5 required furniture pieces, and returns the completed contract for Construction XP rewards. It handles multi-floor navigation, door interactions, Beast of Burden familiar management, and automatic banking with presets - allowing fully hands-off Construction training.

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

> - **Full Contract Automation**: Accepts, completes, and returns contracts to the Estate Agent automatically
> - **All 4 Locations Supported**: Draynor, Varrock, Lumbridge, and Edgeville with 23+ sub-areas
> - **Multi-Floor Navigation**: Automatically detects and uses staircases and ladders to reach furniture on upper floors
> - **Beast of Burden Support**: Manages Pack Mammoth, Pack Yak, War Tortoise, or Spirit Terrorbird for extra material storage with automatic renewal at Edgeville obelisk
> - **Smart Material Management**: Tracks planks, nails, bars, cloth, and candles across backpack and familiar - rebalances inventory as needed
> - **All Plank Tiers**: Supports regular Planks, Oak, Teak, and Mahogany planks with matching bar types
> - **Automatic Banking**: Uses nearest bank to contract location with preset loading
> - **Door Handling**: Tracks and retries locked doors with a blocking system to avoid getting stuck
> - **Contract Interface Parsing**: Reads contract details from the in-game interface to determine location and required furniture
> - **Session Statistics**: Tracks XP gained, XP/hour, levels gained, and current bot state

</ContentBlock>

:::hidden

## Requirements

:::

<ContentBlock title="Requirements">

> **Make sure you meet the requirements below**
> - Archaeology Journal equipped (pocket slot) - used for teleporting between contract areas
> - Bank preset configured with: planks, nails, bars, cloth (Bolt of cloth), and candles (White candle)
> - Construction level appropriate for your plank tier (40+ for Planks, 50+ for Oak, 60+ for Teak, 70+ for Mahogany)
> - Start the script near the Estate Agent in Varrock
> - Accept at least one contract before starting

</ContentBlock>

<ContentBlock title="Optional Requirements">

> **Having these will improve the script's efficiency**
> - Beast of Burden pouch in backpack (Pack Mammoth, Pack Yak, Abyssal Titan, War Tortoise, or Spirit Terrorbird) for extra material storage
> - Summoning level 30+ (required for any Beast of Burden familiar)
> - Access to Edgeville obelisk (required for Beast of Burden point renewal)

</ContentBlock>

:::hidden

## Setup

:::

<ContentBlock title="Setup">

<details>
<summary><strong>Bank Preset Setup</strong></summary>

> *Your bank preset should contain the following materials:*
> - **Planks**: Regular Planks, Oak planks, Teak planks, or Mahogany planks (highest tier you can use)
> - **Nails**: Any tier (Bronze through Rune) - bring plenty as some are consumed on use
> - **Bars**: Matched to your plank tier (Iron for Planks, Steel for Oak, Mithril for Teak, Adamant for Mahogany)
> - **Cloth**: Bolt of cloth (needed for beds, altars, curtains)
> - **Candles**: White candles (needed for altars, organs, lighting)
>
> The script uses **Load Last Preset** when banking, so make sure your last-used preset contains these materials.

</details>

<details>
<summary><strong>Equipment Setup</strong></summary>

> - **Pocket Slot**: Archaeology Journal (required for teleporting)
> - **Familiar**: Beast of Burden pouch in backpack (optional but recommended)
> - Load your preset and have the contract interface open before starting

</details>

<details>
<summary><strong>Starting the Script</strong></summary>

> 1. Travel to the Estate Agent in Varrock
> 2. Accept a construction contract
> 3. Load your bank preset with materials
> 4. Start the script
>
> The script will handle everything from there - completing the current contract, returning it, accepting a new one, banking for supplies, and repeating the cycle.

</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
