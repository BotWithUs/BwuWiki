---
title: AbyssKiller
description: Kill creatures in the Abyss.
# Slug is the URL path for this page.
slug: /AbyssKiller
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="AbyssKiller" author="louisdnb"  version="v2.1.0" skill="Attack">
</TopBanner>

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

> - Walks to Abyss and checks for a free spot
> - Auto hopping worlds when spots are taken
> - PVP safety check
> - Logout on script error
> - Support any food item
> - Optimal AFK spot
> - Automatically set Main Action Bar
> - Banking:
>   - Bank locations: War's Retreat, Max guild, Grand Exchange
>   - Load preset
>   - Recharge Divine charges
>   - Recharge Blood amulet of fury
> - Prayer Support:
>   - Soul Split, Deflect Magic, Deflect Ranged, Deflect Melee, Protect from Magic, Protect from Ranged, Protect from melee
>   - Super restore, Prayer potion, Prayer flask, Blessed flask
> - Stat boosting potions:
>   - Overload, Super Warmaster's potion, Super Melee potion, Grand Ranging potion, Grand Magic potion, Extreme Magic, Extreme Ranging, Extreme Necromancy 
> - Looting: currently will click loot all in area loot interface
> - Misc Support:
>   - Scrimshaw of Sacrifice
>   - Torstol incense sticks
>   - Lantadyme incense sticks



</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

- Edgeville lodestone unlocked
- Opted out of PVP
- Correct Prayer book (when Use Prayer enabled)
- Area Loot enabled (when Use Looting System enabled)

- Action bar should contain the following:
    - Bank teleport:
        - War's Retreat: War's Retreat Teleport
        - Max guild: Max guild Teleport
        - Grand Exchange: Ring of Fortune or Luck of the Dwarves
    - Selected Prayer
    - Scrimshaw of Sacrifice (optional)

- A preset containing the following:
    - Stat boosting potion (optional)
    - Food (optional)
    - Prayer restore item (optional)
    - Torstol incense sticks (optional)
    - Lantadyme incense sticks (optional)
    - Scrimshaw of Sacrifice (Equipped) (optional)
    - Ring of Fortune or Luck of the Dwarves (Equipped) (when using Grand Exchange banking)

- Bank should contain the following:
    - Recharge Divine Charges: Divine Charges
    - Recharge Blood Fury: Atleast 1000 Blood runes
    - Food (optional)
    - Prayer restore item (optional)
    - Scrimshaw of Sacrifice (inactive)
        - This is incase the scrimshaw in your preset runs out

</ContentBlock>

:::hidden

## Setup

:::
<ContentBlock title="Setup">

<details>
<summary>Before starting the script</summary>
- Make a preset containing:
    - Stat boosting potion (optional)
    - Food (optional)
    - Prayer restore item (optional)
    - Torstol incense sticks (optional)
    - Lantadyme incense sticks (optional)
    - Scrimshaw of Sacrifice (Equipped) (optional)
    - Ring of Fortune or Luck of the Dwarves (Equipped) (when using Grand Exchange banking)
- Select the settings you want to use.
- Start the script.

</details>

<details>
<summary>UI Settings Guide</summary>

- Combat:
    - Main Action Bar: Main Action Bar you want to use
    - Use Optimal AFK Spot: stand in the optimal AFK spot
    - Use Stat Boosting Potion
        - Stat Boosting Potion: select the potion you want to use
    - Eat Food
        - Heal Percent: when lifepoints hit below this percent, script will eat food
    - Use Prayer
        - Prayer: select the Prayer you want to use
        - Min Prayer Points: the minimum Prayer points before using a Prayer restore item
        - Prayer Restore: select the Prayer restore item you want to use
- Bank:
    - Preset Number: Bank preset number that should be loaded
    - Bank Location: bank teleport location
    - Recharge Divine Charges: recharge divine charges when they run out
    - Recharge Blood fury: recharge Blood amulet of fury when charge percent is under 5.0%
- Looting:
    - Use Looting System: this will click loot all button in the area loot interface
- Misc:
    - Use Scrimshaw of Sacrifice: Activate/Deactivate Scrimshaw in combat and equip a new one from the bank when it runs out
    - Use Torstol Sticks: keeps Torstol sticks at max potency and the timer above 1 minute
    - Use Lantadyme Sticks: keeps Lantadyme sticks at max potency and the timer above 1 minute

</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
