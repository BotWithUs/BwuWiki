---
title: Zero-to-Script Tutorial
description: A start-from-nothing walkthrough — from buying a sub to writing your first script. No coding experience required.
slug: /tutorial
sidebar_position: 0
---

import React from 'react';
import ContentBlock from '@site/src/components/ContentBlock';

<ContentBlock title="Start here">

This tutorial walks you all the way from **zero** to **your first working script**. It assumes you have **never written code before**.

You don't have to read it in one sitting. Each chapter is short, focused on one thing, and links to the next. If you get stuck, ask in the [Discord](https://discord.gg/botwithus) — a screenshot of where you are usually unblocks you in seconds.

### What you'll do

1. **[Install & first launch](./01-install.md)** — buy a sub, install the loader, exclude it from antivirus, and run it for the first time.
2. **[Launching accounts](./02-launching-accounts.md)** — classic accounts via the account manager, launcher (Jagex) accounts, session limits.
3. **[The bot menu](./03-bot-menu.md)** — the Insert hotkey, Scripts vs SDN Scripts, subscribing to marketplace scripts.
4. **[Setting up your coding environment](./04-ide-setup.md)** — install IntelliJ, get JDK 20, clone the skeleton script. *Skip this if you only want to use marketplace scripts.*
5. **[Your first local script](./05-first-script.md)** — build the skeleton into a `.jar`, drop it in the right folder, and watch it run in the bot menu.
6. **[Reading the game](./06-reading-the-game.md)** — varbits, varps, varcs, scene objects, NPCs, projectiles, animations. What each one is *for*, in plain English.
7. **[Debug overlays](./07-debug-overlays.md)** — the in-game debug windows you use to find IDs and watch values change.
8. **[Cache data gathering](./08-cache-data.md)** — pulling item, NPC and object info from the game cache so your script doesn't need hard-coded numbers.
9. **[Publishing to SDN](./09-publishing-to-sdn.md)** — uploading your finished script so others can use it.
10. **[Multi-module projects](./10-multi-module-projects.md)** *(advanced)* — once you're maintaining several scripts, scale up to a Maven workspace with a shared API.

### What you won't need

- Prior coding experience (we'll explain Java basics as we hit them).
- Reverse-engineering or low-level know-how — BotWithUs gives you clean APIs so you can focus on **what** your script does, not **how** the game internally works.
- A fancy PC. Anything that runs RuneScape 3 will run a bot too.

:::tip If you only want to *use* scripts
You can stop after **chapter 3**. Marketplace scripts cover most activities. Read chapter 4 onwards only if you want to write or modify your own.
:::

:::info Keep the API reference open while you write
The full BotWithUs Java API is documented at **[static.botwithus.com/static/javadoc/net.botwithus.rs3/module-summary.html](https://static.botwithus.com/static/javadoc/net.botwithus.rs3/module-summary.html)**. This tutorial covers the *concepts* and the most common patterns, but every class you meet (`SceneObjectQuery`, `VarManager`, `Backpack`, `Execution`, etc.) has many more methods than we touch on. When you want to know "what else can I ask this object?" or "what overloads does this method have?", open the javadoc — it's the source of truth, generated straight from the API.
:::

</ContentBlock>
