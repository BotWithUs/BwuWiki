---
title: UberMine
description: Optimize your mining in game with precision and automation.
slug: /UberMine
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json';

<TopBanner title="UberMine" version="v0.0.1" author="Uberith" skill="Mining">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

 - **BETA**: FREE / month (not including client access)
 - **Post-Beta**: TBD Coins / Month (not including client access)

 **Beta ends December 15th**

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

- **Automatic Navigation:**  
  Automatically navigates to precise, coordinate-based locations, ensuring efficient movement to mining spots and nearby banks.

- **Persistent Settings:**  
  Saves user preferences across sessions, including:
  - Selected mining locations
  - Ore types
  - Inventory management options

- **Human-like Random Delays:**  
  Implements fuzzy, randomized delays in interactions and navigation timings to simulate human behavior and enhance bot-detection resistance.

- **Intelligent Banking Automation:**  
  Detects when inventory is full, automatically navigates to the nearest bank, deposits ores, and resumes mining.

- **Statistics Page:**  
  Displays real-time statistics, including:
  - Total ores mined
  - Time elapsed
  - Experience gained


- **Supported Mining Locations:**  
  Supports multiple mining locations, including:
  - Burthorpe

- **Control Buttons:**  
  Start and stop the script easily using integrated controls.

![Example](01UberMine.png)
![Example](02UberMine.png)

</ContentBlock>

<ContentBlock title="Supported Locations/Ores">

| Location               | Supported Ores                                      |
|------------------------|:---------------------------------------------------:|
| Burthorpe              | Copper, Tin, Clay, Iron, Silver, Common gem rock    |

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">
    - Must be equipped with a pickaxe appropriate for the selected ores.
    - If using magic notepaper, ensure it’s in the inventory.
</ContentBlock>

<ContentBlock title="Product Roadmap">
> - **Player Suggestion:** Add secondary actions if mining high-level ores (e.g., Runite), such as teleporting to another location or switching to lower-level ores during respawn times.
> - Add support for lightform/crystallise on specific ores.
> - **Player Suggestions:** 
>   - Add support for usage of Perfect Juju Potions and various mining boosts.
>   - Add support for mining familiar pouches (e.g., Lava Titan) for bonus XP.
>   - Add support for Incense Sticks and mining auras.
> - Implement anomaly detection for monitoring and adjusting script actions if they seem too consistent. Randomize actions, including:
>   - Variations in movement speed
>   - Occasional breaks or pauses
>   - Random interactions with nearby game objects (like examining rocks or nearby items).
</ContentBlock>

:::

<Changelog changes={changes} />
