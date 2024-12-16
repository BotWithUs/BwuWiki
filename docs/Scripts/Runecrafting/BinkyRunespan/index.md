---
title: BinkyRunespan
description: Siphons nodes and creatures in runespan for points/xp
# Slug is the URL path for this page.
slug: /BinkyRunespan
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="BinkyRunespan" version="v1.0.0" author="AJBinky" skill="Runecrafting">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - 6 coins / month (not including client access)

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - Siphons from appropriate nodes for great xp/points
> - Siphons from creatures when necessary
> - Planned features
>   - Island traversal
>   - Node/Creature Prioritization
>   - Seek Yellow Wizard

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

> - Start script on your desired runespan island
> - Have 25+ essence in your inventory

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
