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

<TopBanner title="UberChop" version="v1.0.0" author="Uberith" skill="Woodcutting" />

---

## Cost

<ContentBlock title="Cost">

- **5 Coins / Month** (not including client access)  


</ContentBlock>

---

## Features

<ContentBlock title="Features">

- **Automatic Navigation:**  
  Effortlessly navigates to precise, coordinate-based locations, ensuring efficient movement to tree spots and nearby banks.  

- **Persistent Settings:**  
  Save preferences across sessions, including:  
    - Selected tree locations  
    - Tree types  
    - Nest-pickup options  

- **Human-like Random Delays:**  
  Fuzzy, randomized delays mimic human behavior, reducing detection risk and enhancing realism.  

- **Intelligent Banking Automation:**  
  Automatically detects full inventory, navigates to the nearest bank, deposits logs, and resumes chopping.  

- **Woodbox Support:**  
  Stores logs in a wood box (if available) to extend chopping sessions without interruptions.  

- **Magic Notepaper Support:**  
  Automatically uses magic notepaper to convert logs into bank notes, freeing up inventory space.  

- **Crystallise Spell Support:**  
  Optimizes experience gain with Crystallise spell management when conditions are met.  

- **World Hopping:**  
  Avoid crowded areas or maximize resources with automatic world hopping.  

---

### Advanced Features

- **Statistics Page:**  
  Real-time display of:  
    - Total logs chopped  
    - Time elapsed  
    - Experience gained  

- **Advanced Settings Page:**  
  Fine-tune script behavior with advanced options for greater customization.  

- **Debug Page:**  
  Troubleshoot issues easily with a built-in debug page.  

### Supported Chopping Locations  

Supports 12 key locations for optimized tree chopping:  
- **Burthorpe:** Tree, Oak  
- **Draynor Village:** Tree, Oak, Willow, Elder Tree  
- **Edgeville:** Tree, Oak, Willow  
- **Etceteria:** Tree  
- **Falador:** Tree, Oak, Yew, Elder Tree  
- **Kharazi Jungle:** Teak, Mahogany  
- **Lumbridge:** Tree, Oak, Willow  
- **Menaphos:** Acadia  
- **Seer’s Village:** Tree, Oak, Willow, Maple Tree, Magic Tree, Elder Tree  
- **Tai Bwo Wannai:** Teak, Mahogany  
- **Uzer:** Tree, Teak  
- **Varrock:** Tree, Oak, Yew, Elder Tree  
- **Varrock Palace:** Tree, Oak, Yew  

---

### Screenshots  

#### Main Interface
![Main Interface](01UberChop.png)

#### Statistics Page
![Main Interface Example](02UberChop.png)  

#### Advanced Settings Page 
![Settings Example](03UberChop.png)  

#### Debug Page
![Debug Example](04UberChop.png)  

</ContentBlock>

---

## Supported Logs

<ContentBlock title="Supported Locations/Logs">

| Location        | Supported Logs                           |
|-----------------|------------------------------------------|
| **Burthorpe**   | Tree, Oak                               |
| **Draynor Village** | Tree, Oak, Willow, Elder Tree       |
| **Edgeville**   | Tree, Oak, Willow                       |
| **Falador**     | Tree, Oak, Yew, Elder Tree              |
| **Kharazi Jungle** | Teak, Mahogany                       |
| **Lumbridge**   | Tree, Oak, Willow                       |
| **Menaphos**    | Acadia                                  |
| **Seer’s Village** | Tree, Oak, Willow, Maple Tree, Magic Tree, Elder Tree |
| **Tai Bwo Wannai** | Teak, Mahogany                       |
| **Uzer**        | Tree, Teak                              |
| **Varrock**     | Tree, Oak, Yew, Elder Tree              |
| **Varrock Palace** | Tree, Oak, Yew                       |

---

### Unsupported Trees

- Ivy  
- Crystal  

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

> ### Planned Features  
> - **Player Suggestion:**  
>   Add secondary actions for high-level trees like Elder Trees (e.g., switch to Yew after Elder, teleport for another Elder).  
> - **New Features:**  
>   - Ancient Elven Ritual Shard support for Lightform/Crystallise  
>   - Perfect Juju Potion integration  
>   - Special Mahogany Log management  
>   - Beaver Pouch support  
>   - Incense Stick support  
>   - Bank preset automation  
> - **Anomaly Detection:**  
>   Implement real-time behavior adjustments for greater variability, including:  
>     - Randomized movement speeds  
>     - Occasional pauses  
>     - Interaction with nearby objects or players.  

</ContentBlock>

---

<Changelog changes={changes} />
