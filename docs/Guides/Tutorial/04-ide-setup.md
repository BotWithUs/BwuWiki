---
title: 4. Setting Up Your Coding Environment
description: Install IntelliJ IDEA, get JDK 20, and clone the BotWithUs skeleton script.
sidebar_position: 4
---

import ContentBlock from '@site/src/components/ContentBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';

<ContentBlock title="What you're installing and why">

Before you can write a script, you need three things on your machine:

| Tool | What it is | Why you need it                                                                                            |
|---|---|------------------------------------------------------------------------------------------------------------|
| **IntelliJ IDEA** | The code editor (an "IDE") | This is where you type, run, and build your scripts. This guide focuses on IntelliJ but any IDE will work. |
| **JDK 20** | The Java compiler | Scripts are written in Java; the JDK turns your code into a `.jar` BotWithUs can load                      |
| **Skeleton repo** | A pre-made starter project | Has all the BotWithUs APIs wired up so you can hit "build" and get a working script on day one             |

</ContentBlock>

<ContentBlock title="Step 1 — Install IntelliJ IDEA Community">
<BrowserWindow url="https://www.jetbrains.com/idea/download/">

IntelliJ comes in two editions: **Community** (free) and **Ultimate** (paid). Community is just fine for everything we'll do.

1. Go to [jetbrains.com/idea/download](https://www.jetbrains.com/idea/download/).
2. Scroll down to the **Community Edition** section. Don't grab Ultimate by mistake — it's at the top of the page.
3. Click **Download**, run the installer.
4. Accept the defaults. The only useful checkbox is **Add "Open Folder as Project"** (it puts a right-click shortcut in Windows Explorer).
5. Launch IntelliJ when it finishes.

On first launch IntelliJ asks about themes and plugins — pick whatever you like, defaults are safe.

</BrowserWindow>
</ContentBlock>

<ContentBlock title="Step 2 — Clone the skeleton script">
<BrowserWindow url="https://github.com/BotWithUs/BwuScriptJavaSkeleton">

The **skeleton** is an empty BotWithUs script with the build setup already done. Cloning it means you don't have to set up Gradle, Maven, dependencies, or output paths by hand.

You can clone using either Git (if you know it) or directly through IntelliJ. The IntelliJ way is easier.

#### Cloning through IntelliJ

1. From the IntelliJ welcome screen, click **Clone Repository** (or **File → New → Project from Version Control** if a project is already open).
2. In the **URL** field, paste:
   ```
   https://github.com/BotWithUs/BwuScriptJavaSkeleton
   ```
3. Pick a folder for it (default is fine).
4. Click **Clone**.

IntelliJ will download the project and ask if you want to **trust** it — say **Trust Project**. It'll then start indexing files (bottom status bar). Wait for indexing to finish before doing anything else.

#### If IntelliJ asks about Git

If IntelliJ says *"Git is not installed"* and you don't already have it: install it from [git-scm.com](https://git-scm.com/), accept all defaults, and try the clone again. Git is also useful later if you want to track your changes, and it's a must-have for publishing scripts to the marketplace.

</BrowserWindow>
</ContentBlock>

<ContentBlock title="Step 3 — Download JDK 20 from inside IntelliJ">

You don't need to fetch a JDK from the web — IntelliJ has a built-in dialog. With the skeleton project open:

1. Go to **File → Project Structure** (or `Ctrl+Alt+Shift+S`).
2. On the left, click **Project**.
3. Find the **SDK** dropdown. If it's blank or shows the wrong version, click it → **Download JDK…**.
4. In the dialog:
   - **Version:** 20
   - **Vendor:** any works, but **Eclipse Temurin** or **Amazon Corretto** are common safe choices.
   - **Location:** leave the default.
5. Click **Download**. IntelliJ pulls the JDK and selects it for the project.
6. Set **Language level** to **SDK Default**.
7. Click **OK**.

</ContentBlock>

<ContentBlock title="Step 4 — Confirm Gradle loaded the project">

The skeleton uses **Gradle** (Kotlin DSL — `build.gradle.kts`) to manage its dependencies. IntelliJ should detect this automatically and start a Gradle sync as soon as the project opens.

- Look for a **Gradle** tool window on the right edge of IntelliJ. Click it.
- You should see the project with sections like **Tasks** (with `build`, `assemble`, etc.) and **Dependencies**.
- If a yellow banner at the top of the editor says *"Gradle project needs to be imported"* or *"Load Gradle Changes"* — click it (or press the refresh/sync icon in the Gradle tool window).

When indexing and the Gradle sync finish, the bottom status bar goes quiet. You're ready.

</ContentBlock>

<ContentBlock title="Step 5 — Sanity check: open the main script file">

In the **Project** tool window (left edge):

1. Expand `src` → `main` → `java` → `net.botwithus...` (the package path varies by skeleton version).
2. Find the `.java` file — it'll be the one with the same name as the skeleton's main class.
3. Double-click to open.

:::info This is just a folder structure
What you see in the **Project** tool window is the same folder layout that exists on disk. IntelliJ collapses Java packages into a single dotted entry (e.g. `net.botwithus.example`) for readability, but if you open the project folder in Windows Explorer you'll find real, nested folders: `src\main\java\net\botwithus\example\`. Each `.` in the package name is a folder boundary on disk.
:::

If the editor shows code with **no red squiggles**, the IDE, JDK, and dependencies are all happy. You're ready to build it into a real script.

:::warning If there are red squiggles everywhere
That usually means Gradle hasn't finished syncing or the JDK isn't set. Re-check Step 3 and Step 4. Still stuck? Post a screenshot in the [public scripters channel](https://discord.com/channels/973830420858810378/1257291849475817565) on Discord.
:::

</ContentBlock>

**Next:** [build the skeleton into your first running script →](./05-first-script.md)
