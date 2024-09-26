---
title: CoaezCombatAIO
description: Comprehensive combat script for various creatures.
# Slug is the URL path for this page.
slug: /CoaezCombatAIO
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="CoaezCombatAIO" author="coaeasy" version="v1.7.0" skill="Strength">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - 12$ / week (subject to change and not including client access)

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - Full manual Necromancy combat rotation.
> - NPC attack with custom targeting and manual gameplay support.
> - Support for Incense sticks, auras, and custom breaks.
> - Alchemy during combat
> - Herb bag support.
> - Refill divine charges when depleted.
> - Food, potion, and prayer management.
> - Supports Excalibur and Ancient Elven Ritual Shard.
> - Overload, aggression, charming, and weapon poison potion support.
> - Customizable combat rotations with save/load preset options.
> - Banking in War's Retreat with custom return location.
> - Looting for specific items or all stackable items, blacklist and drop support.
> - Notepaper support.
> - Loot delay support.
> - Additional skilling mics features such as Slime collecting, Necro rituals and combination of both.
> - Daily shop run for runes/feathers/nuts/bolts.
> - Prif thieving (elves).
> - Taverly binding contracts(selling to shop and buying material, optimized for speed recommended to babysit and to select low ping world).
> - Lunar sifting soil spell outside of combat.
> - High alchemy and disassembly outside of combat.
> - Custom breaks support
> - Boss-specific support for God Wars 1(all bosses), Arch-Glacor(0/1 mechanic charm farming), and Ripper Demons.

</ContentBlock>

:::hidden

## Requirements

:::

<ContentBlock title="Requirements">

- For combat. Full manual enabled in settings and if using cycle targets configure cycle target forward to 0 (zero).
- Area Loot enabled(make sure to check Gameplay > Item Drops > Loot System > Single items open loot inventory)
- Action bar should contain all abilities/prayers/teleports we are using.
- For any boss preset should already be saved/loaded as we are loading last preset.

</ContentBlock>

:::hidden

## Setup

:::

<ContentBlock title="Setup">

<details>
<summary>Before starting the script</summary>
- Enable the settings you want to use and the main script state will change, after that simply click play.

</details>

<details>
<summary>UI Settings Guide</summary>

- Loot Settings:
    - Enable Are loot in order to show all the settings
    - Loot range specifies how close the item must be before we consider opening area loot window.
    - Loot delay will delay the next loot by specified time, eg if set to 60000ms we will loot once every 1 minute.
    - Loot all will loot every item we get as a drop.
    - Loot all stackables will loot any stackable item.
    - Use magic notepaper will use the notepaper on any item from the notepaper list.
    - Items to loot list is used in case you want to customize specific loot. Supports regex.
    - Blacklisted items will be skipped and drop from inventory in case we pick them up due to lagg, we will avoid loot any blacklisted item regardless of settings.
- Target Settings:
    - For manual gameplay we simply need to select a target.
    - Attack any npc in case you want to attack any nearby npc with Attack option.
    - Attack range specifies how far we can target the npc in tiles.
    - Cycle targets useful for quickly changing targets as soon as they are dead, use this if you have trouble with speed(cycle forward key-bind must be configured to 0).
    - Select NPC's to attack will be populated once you hit play, you can use this to specify only certain monsters we will attack if in range.
- Prayer & Potions:
    - Uses prayer and renewal potions once prayer reaches set %.
    - Option to eat food once health reaches set % on anything with "eat" option.
    - Excalibur, Shard, Overloads, Aggression, Charming Weapon poison potions.
    - Herb bag.
    - All curses prayers.
- Ability priority:
    - Any selected ability will override the default rotation and will be executed if possible.
- Manual rotation:
    - Option to configure manual rotation by adding abilities to the list and save different presets, the ability priority will still be applicable.
- Refill/Auras/Incense sticks:
    - Divine charges and Nexus charge check to teleport to War's Retreat and stop the script.
    - Refill option for divine charges.
    - Custom refill preset.
    - Aura and reset aura option.
    - Option to select individual incense sticks we will overload and upkeep(30min timer).
- Banking:
    - Banking is done in War's Retreat, make sure you have the teleport on action bar.
    - Return location must be configured manually for ease of use coordinates are visible on gui.
    - Bank pin support
- Custom Breaks
    - Possibility to configure custom breaks which we will rotate once the last once is finished.
- GWD1/Arch-Glacor/RipperDemons
    - Select the boss and set either left or right portal to it. Enable early banking or, we will bank after instance expires.
    - Automatically skips KC farm if you have Totem of Intimidation applicable to GWD1.
    - Ripper demons will try to avoid special attack activation by moving near him before attacking. Does not evade ripper special if it's activated at the moment use with caution.
- Daily shop run
    - Select shops to visit, select items to purchase, enable and hit start.
- Customization
    - Offers fully customizable theme colors and more. You can easily share themes by copying the hash and applying it to another instance.
</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
