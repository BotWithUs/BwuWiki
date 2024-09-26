---
title: vArc
description: Example.
# Slug is the URL path for this page.
slug: /vArc
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="vArc" version="v0.0.1" author="Vopori" skill="Woodcutting">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - BETA - Currently Invite Only
> - 15 Coins / Month After Beta

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - BETA Script - Please DM & report all issues.
> - Skills & gathers the following resources in uncharted isles:
>  - Golden Bamboo
>  - Mushrooms
>  - Wobbegongs
>  - Ancestral Energy
>  - (Script does not currently support tortles - use excess energy to transmute for now)
> - Automatically scans for and attempts to gather treasure chests & washed up supplies.
> - Walks closer to out of range resources to ensure interaction success.
> - Scans island periodically for resources and adds them to its internal list. Will interact with the closest resources.
> - Handles full inventory with depositing all items. GOTE is recommended. 
> - If no resources are found, will move around island scanning for out of range resources for a set number of times. If no resources are found, player will hop to another Long Voyage.
> - ONLY Long Voyages are currently supported.
> - Ensure player starts script in large island with the uncharted island selection screen already set on your rowboat.
> - Script will also not currently handle switching outfits/items per resource. Ensure your loadout has a decent skilling spread.

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

- Enough supplies to last the duration of your planned runtime. (Roughly 20 resources per hour)
- Decent skilling spread as script does not currently support switching loadouts.
- Render distance set to maximum and graphics set to lowest.
- Acess to Uncharted Isles (Obviously)

</ContentBlock>

:::hidden

## Setup

:::
<ContentBlock title="Setup">

<details>
<summary>Start in large island with uncharted island selection screen already set on your rowboat.</summary>

![Setup](setup.jpg)

> - The settings above should show when you use the "Leave" option on the rowboat.


</details>

<details>
<summary>UI Settings Guide</summary>

![UI Settings](ui.png)

> - Ensure your UI settings are set to the minimum with maximum render distance.

</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
