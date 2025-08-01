---
title: The World Wakes
description: Completes the quest The World Wakes.
# Slug is the URL path for this page.
slug: /TheWorldWakes
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="The World Wakes" version="v1.0.0" author="Aria" skill="Necromancy">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - FREE / month (not including client access)

</ContentBlock>

:::hidden

## Description

:::

This script completes the quest The World Wakes.

Rewards from completing this quest include:

* The ability to make the "Divine Conversion" relic (also requires 95 Archaeology, boostable)
  * The relic enables a method for gathering Incandescent Energy that earns over 6m/hr without having to risk a Memory dowser (700m item) on each bot.
* Access to five ultimate abilities (the most important being Death's Swiftness and Sunshine)
* 810k EXP worth of experience lamps
  * 3 ancient lamps granting 100,000 experience in three different skills at or above level 75
  * 3 static lamps granting 50,000 Combat experience each in any combat skill at or above level 65
  * Glossy lamp granting 110,000 Slayer experience, requiring 70 Slayer
  * Pale lamp granting 250,000 Prayer experience, requiring 80 Prayer

If you do not have the requirements to use those lamps, they can be destroyed and reclaimed from the High Druid for free.

## Requirements

* 70+ Magic, Ranged, or Necromancy (this script safespots two of the bosses, so Melee can't be used)
* 60+ HP
* Ardougne lodestone unlocked

This script was tested on accounts with: 
* Stats: 75 Magic and 60 HP
* Armour: Amulet of Glory + Ring of Fortune
* Weapons: T75 weapons
* Prayers: None
* Inventory: 1000 air runes + 27 beltfish

## Features

* Eats any food
* Reclaims items if the player died
* Banks for more food if the player has below a certain amount (default 20)
* Avoids/handles most boss special attacks
* Destroys slayer/prayer lamps the player currently can't use (they can be reclaimed for free)
* Destroys the "Juna's Gift" cosmetic item so it doesn't waste bank space (it can be reclaimed for free)

## Setup Instructions

* **Save a bank preset to preset slot 1** with your desired inventory and equipment setup before starting the script.
  * Your inventory must have at least 20 food.
  * Your inventory should include any consumable items required for combat, like food, runes if using Magic, necroplasm if using Necromancy, etc
* Combat Config
  * Enable Auto-Retaliate
  * Enable Revolution
  * Enable automatically using threshold and ultimate abilities
  * This can be done through: Settings menu -> Gameplay tab -> Combat Mode -> Revolution Combat -> Automatically trigger Threshold/Ultimate abilities

## Future Features

* Automatically use lamps on selected skills
* Switch to a specified action bar
* Prayer support may be added eventually, but this script is intended to be used by low combat level Divination bots.

## Known Issues

* The script doesn't move out of the Automaton AoE ground pound attack, though the Guardian should be dead before it can use it.
* The script runs directly to Guthix during the "reach Guthix" section of the quest.
  * This may get the player killed multiple times if they have bad ice prison/ball RNG.
* During the boulder track puzzle, a rare issue may occur where the entire screen appears black and no objects are detected.
  * If that happens, you may need to reinstall RS or switch to another PC. This is a bug related to RS itself, not BWU.


:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>