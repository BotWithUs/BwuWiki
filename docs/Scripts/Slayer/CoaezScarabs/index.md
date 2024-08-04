---
title: CoaezScarabs
description: Squashes Corrupted Scarabs in Menaphos and Sophanem.
slug: /CoaezScarabs
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="CoaezScarabs" author="coaez" version="v1.1.0" skill="Slayer">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - 15 / month (not including client access)

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - Does Scarabs in Menaphos for Slayer experience.
> - Uses localhost Redis server to communicate world between all connected local sessions. Note that this requires user configuration and starting a default Redis server.
> - Waits for Scarabs at random positions and hops worlds.
> - 2-tick interaction for fastest possible experience.
> - Uses food and loads last preset.
> - Uses stars when inventory full on selected skill.
> - Will heal at 20% or move to bank if there is no food and start the interaction again once full.
> - Using the script will report the world automatically for other local instances so more instances usually means more exp/h.
> - Sophanem-only location: 
>   - Waits at Slayer dungeon spot.
>   - Uses Memory Strands for banking.
>   - Uses tablets for returning back as the fastest option.

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

- Install and configure a local Redis server.
- Ensure you have the necessary game items and settings:
    - Food in inventory.
    - Selected skill set for experience stars.
    - Banking preset loaded with food(if enabled).
    - Health failsafe enabled for HCIM (if applicable, we will teleport using memory strands and stop the script if health is below 5%).

</ContentBlock>

:::hidden

## Setup

:::
<ContentBlock title="Setup">

<details>
<summary>Redis Server Setup</summary>

#### Precompiled Windows Version

1. Download the Redis `.msi` installation file from [tporadowski/redis releases](https://github.com/tporadowski/redis/releases).
2. Double-click the `.msi` file to install Redis.
3. Navigate to `C:\Program Files\Redis`.
4. Shift + Right-click in the folder and select "Open PowerShell window here".
5. Type in `./redis-server.exe` and press Enter.
6. Run the script.

#### Compiling Redis on Windows

1. Clone the official repository from [dmajkic/redis](https://github.com/dmajkic/redis):
    ```bash
    git clone http://github.com/dmajkic/redis.git
    ```
2. Navigate to the repository directory:
    ```bash
    cd redis
    ```
3. Ensure you have MinGW installed. If you are using full mSysGit, you already have all tools needed.
4. Start Git bash and compile Redis:
    ```bash
    make
    ```
5. Test the build:
    ```bash
    make test
    ```

</details>

<details>
<summary>Before starting the script</summary>
- Make sure Redis is installed and running on your local machine.
- Clone the repository and set up your environment.
- Ensure all dependencies are installed.
- Run the script from your bot client. The script won't be able to to start if redis is not started.
- Configure the script settings as needed:
    - Run Duration
    - World Hop Delay
    - Selected Skill
    - Use Food
    - Sophanem Spot
- Start the script and monitor the console for updates.

</details>

<details>
<summary>UI Settings Guide</summary>

- **Run Duration**: Set the duration for which the script should run.
- **World Hop Delay**: Configure the delay between world hops. Increase the value if using multiple instances to avoid getting blocked by too many login attempts.
- **Selected Skill**: Choose the skill to use experience stars on when the inventory is full.
- **Use Food**: Enable or disable the use of food for healing.
- **Sophanem Spot**: Enable Sophanem-only mode for focused Scarab hunting near the slayer dungeon.

</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
