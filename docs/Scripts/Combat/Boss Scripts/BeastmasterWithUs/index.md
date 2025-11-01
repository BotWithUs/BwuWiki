---
title: BeastmasterWithUs
description: Beastmaster Durzag completion with Necromancy combat style.
# Slug is the URL path for this page.
slug: /BeastmasterWithUs
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="BeastmasterWithUs" version="v1.0" author="BotWithUs" skill="Necromancy">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">
> - **20 USD / weekly** (client access not included)
</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - **Combat Style**: Necromancy support with T90/T95
> - **Banking Options**: War's Retreat or Max Guild banking with smart checkpoint support
> - **Prayers**: Curse prayer support (Sorrow T95 / Ruination T99)
> - **Scripture Support**: Ful, Wen, Jas, Grimoire - automatic refilling
> - **Aura System**: Queue-based aura rotation with automatic reset support
> - **Familiars**: Hellhound, Blood Reaver, Ripper Demon, Kal'Gerion Demon with scroll usage
> - **Consumables**: Overloads, Restore potions, Adrenaline, Saradomin brews, Guthix rest, Stamina and Energy potions
> - **Average Completion**: ~12-15 minutes depending on gear tier, auras and familiar used
> - **Flexible Start**: Begin at War's Retreat portal, Max Guild, or instance entrance
> - **Gear Refill**: Automatic scripture, divine charge, and EOF recharging
> - **Pre-Fight Setup**: Campfire, salt-water treatment, incense sticks, powders support
    </ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Essential Requirements">

> **Game Settings**
> - Script will perform initial requirement check and log to console if something is configured incorrectly
> - Action Bar: Full Manual mode
> - Ability Queuing: Disabled
> - Auto Attacks: Disabled
> - Auto Retaliate: Disabled
> - Bone Shield spell: Active
>
> **Action Bar Setup**
> - Deflect prayers and Soul Split (curses)
> - War's Retreat or Max Guild teleport
> - Double Surge and Dive (requires Mobile perk or Shadow's Grace relic)
> - All necromancy abilities
> - Defensive abilities (Devotion,Reflect,Debilitate,Barricade,Darkness,Anticipation)
> - Double surge and Dive with mobile perk or Shadow's grace relic
>
> **War's Retreat Setup**
> - War's Altar access (prayer restoration)
> - Adrenaline crystal access
> - Boss portal configured to Mazcab
>
> **Inventory Items**
> - Food (Blubbers and Saradomin brews)
> - Overload potions (any tier)
> - Restore/Prayer potions/Stamina or Energy flask
> - Necromancy runes (Nexus)
> - Energy flask or Stamina potion or use the salt-water treatment
>
> **Equipment**
> - Igneous Kal-Mor
> 
> **Start**
> - The Community button should be visible on the ribbon bar, and the Group interface should be displayed separately.
> - Before the script starts, you must always create and set the initial group to the Liberation of Mazcab raid whether you are starting near an instance or in bank.
> - The kill restart function will only activate if the boss has already been looted and the user is farming for the pet.
> - If the boss hasn’t been looted yet, the script will stop after the kill, allowing the player to manually loot the boss.
> - If the player has already completed the normal loot and is now going for the pet, the group will be automatically re-created after each kill.
>
    </ContentBlock>

<ContentBlock title="Recommended for Optimal Performance">

> **Equipment**
> - T95 Necromancy gear
> - Essence of Finality
> - Scripture (Ful/Wen/Jas/Grimoire)
> - Excalibur
> - 
> **Abilities & Spells**
> - All Necromancy abilities unlocked
> - Vulnerability bombs (add to action bar, option 1: Default)
>
> **Consumables**
> - Weapon Poison+++
> - Powder of Protection
> - Powder of Penance - using penance will probably remove the requirement for the Restore/Prayer potions and in this case you can only bring 1.
> - Lantadyme and Kwuarm Incense sticks

</ContentBlock>
:::hidden

## Setup

:::
<ContentBlock title="Setup Guide">

<details>
<summary><strong>Action Bar Configuration</strong></summary>

![Action Bar](ActionBar.png)

> **Ability Placement**
> - The script dynamically adapts rotations based on available abilities
> - Having all abilities on your action bar ensures optimal DPS and defense
> - Missing abilities may result in suboptimal rotation and slower kill times
>

</details>

<details>
<summary><strong>Gear & Inventory Setup</strong></summary>

> **T95 Gear Setup**

![T95 Gear Example 1](GearT95.png)
![T95 Gear Example 2](GearT95-2.png)

> - If not using penance powder bring at least 3 restore flasks

> **T90 Gear Setup**

![T90 Gear](GearT90-2.png)

> - If not using penance powder bring at least 5 restore flasks

> **Pre-Fight Inventory**

![Pre-Fight Setup](PREFIGHT.png)
> - Script will use any enabled or available items in the pre-fight preset, and it will refill divine charges, scripture and eof if low.

> **Banking Preset Contents**
> - Overload potion (any tier)
> - Weapon Poison potion (preferably +++)
> - Food: Blubbers or any best available (may impact kill time due to adrenaline drain)
> - Saradomin brews/Guthix rest (optional, recommended with lower gear tier)
> - Restore/Prayer potions
> - Necromancy runes (inventory or Nexus)
> - Rune pouches with:
    >   - Runes for Prism of Restoration or enough scrolls for hellhound to heal

</details>

<details>
<summary><strong>Script Settings Configuration</strong></summary>

> **General Settings**
>
> ![General Settings](settings-general.png)
>
> Configure banking location (War's Retreat or Max Guild), checkpoint banking options, and instance entry preferences.

> **Pre-Fight Settings**
>
> ![Pre-Fight Settings](settings-prefight.png)
>
> Enable campfire boost, thermal pool, incense sticks, and powder buffs for optimal preparation.

> **Aura Settings**
>
> ![Aura Settings](settings-aura.png)
>
> Configure aura queue system with priority ordering and automatic reset options.

> **Familiar Settings**
>
> ![Familiar Settings](settings-familiar.png)
>
> Select familiar type and enable scroll usage for additional DPS support (recommended ripper demon).

> **Prayer Settings**
>
> ![Prayer Settings](settings-prayer.png)
>
> Choose between Sorrow (T95) or Ruination (T99) curse prayers.

> **Abilities Settings**
>
> ![Abilities Settings](settings-abilities.png)
>
> Configure gear tier (T90/T95), EOF usage, and special ability toggles (Vengeance, Disruption Shield, Smoke Cloud, Invoke Lord of Bones).
>
> > **Consumable Settings**
>
> ![Consumables Settings](settings-consumable.png)
>
> Adjust healing options.

</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes} />
