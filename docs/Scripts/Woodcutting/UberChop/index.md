---
title: UberChop
description: Optimize your woodcutting in game with precision and automation.
slug: /UberChop
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json';


<TopBanner title="UberChop" version="v0.0.1" author="Uberith" skill="Woodcutting">
</TopBanner>

---

## Cost

<ContentBlock title="Cost">

 - **BETA**: FREE / month (not including client access)
 - **Post-Beta**: TBD Coins / Month

</ContentBlock>

---

## Features

<ContentBlock title="Features">

> - Automatic navigation to precise coordinate-based locations to ensure accurate navigation to tree locations and banks, minimizing inefficiencies in movement.
> - Persistent settings is used by the script to save user preferences such as the selected location, tree type, and nest-pickup options, ensuring settings are restored across sessions.
> - Randomized delays to simulate human-like behavior, the script employs a fuzzy random delay function, adding randomness to interactions and navigation timings to avoid detection.
> - Banking automation that intelligently detects when the player's inventory is full and automatically navigates to the nearest bank, deposits the logs, and returns to continue chopping.
> - If a wood box is present in the player's inventory, the script will interact with it to fill it with logs, freeing up additional inventory space for longer chopping sessions.

> - Chop trees in 9 Locations: 
>   - Burthorpe
>   - Draynor Village
>   - Edgeville
>   - Etceteria
>   - Falador
>   - Lumbridge
>   - Seer's Village
>   - Uzer
>   - Varrock
>   - Varrock Palace
> - Stop and Start Button


##### Supported Logs

> - Logs
> - Oak
> - Willow
> - Yew
> - Teak
> - Maple Tree
> - Magic Tree
> - Elder

##### Unsupported Trees

=========
> - Bloodwood
> - Elder


</ContentBlock>

---

## Requirements

<ContentBlock title="Requirements">

- Must be equipped with an axe appropriate for the trees.  
- If using a wood box, ensure compatibility with selected trees.  

</ContentBlock>

---

## Product Roadmap

<ContentBlock title="Product Roadmap">
> - Add support for unsupported trees
> - Add support for additional locations
>   - **Player Suggestion:** Add a Khazari Jungle's Mahogany location - Has two Mahogany trees super close together, better than Ape Atoll
> - **Player Suggestion:** Add support to have secondary actions if chopping high level trees (e.g. Elder Tree) to then do something else. Based on user input, it could begin chopping another tree (e.g. Yew), or teleport to another location to chop the high level tree.
> - Add support to pickup bird's nests
> - Add support for lightform/crystalize
> - **Player Suggestion:** 
>   - Add Support for Ancient Elven Ritual Shard (for useage with lightform/crystalize)
>   - Add Support for Perfect JUJU Potions
>   - Add support for Destroy special mahogany logs
>   - Add support for Beaver pouches
>   - Add support for Incense Sticks
> - Add support for bank presets
> - Implement anomaly detection systems that monitor the script's behavior in real-time and adjust the actions if they seem too consistent or predictable. Randomize actions such as:
>   - Small variations in movement speed
>   - Occasional breaks or pauses
>   - Random interactions with other game objects (like inspecting a nearby item or interacting with another player).
</ContentBlock>

---

<Changelog changes={changes} />
