---
title: 5. Your First Local Script
description: Build the BotWithUs skeleton into a .jar, let Gradle drop it in the right folder, and watch it run inside the bot menu.
sidebar_position: 5
---

import ContentBlock from '@site/src/components/ContentBlock';

<ContentBlock title="A 60-second Java refresher">

Before we open the skeleton, the absolute minimum Java you'll see in every script: **variables**. A variable is a named slot that holds one value of a specific type. Java is **statically typed** — you declare the type up front, and you can't put a value of the wrong type into it.

Declaration is always `Type name = value;`:

```java
int    coins      = 1500;          // whole number (32-bit)
long   xp         = 2_500_000_000L;// whole number, bigger range — note the 'L' suffix
double accuracy   = 0.875;         // decimal number
boolean isFull    = true;          // true / false only
String  loot      = "Dragon bones";// text — note the capital S, String is a class

final int MAX_TRIES = 3;           // 'final' = "this never changes" (a constant)

var    nearestNpc = NpcQuery.newQuery().name("Banker").results().nearest(); // 'var' = "compiler, infer the type for me"
```

A few things to know:

- **Naming**: `lowerCamelCase` for variables/fields (`botState`, `loopDelay`), `UPPER_SNAKE_CASE` for `final` constants (`MAX_TRIES`).
- **`int` vs `long`**: use `int` by default; reach for `long` when the number could exceed about 2 billion (timestamps, big XP totals, BotWithUs delays).
- **`String` is *not* a primitive** — it's a class. That's why it's capitalized, and why you compare two strings with `.equals(...)`, never `==`.
- **`var`** lets the compiler figure out the type from the right-hand side. Useful when the type is long-winded; the type is still fixed, you just don't have to type it out.

You'll see all of these used in the skeleton in the next section.

</ContentBlock>

<ContentBlock title="What we're doing">

You already have the skeleton open in IntelliJ. In this chapter you'll:

1. Look at the two files that make up the skeleton script.
2. Add a single line that prints to the console (so we can prove the script is alive).
3. Build it into a `.jar` with Gradle.
4. Confirm the `.jar` landed in the right folder — the skeleton's build script handles this for you.
5. Open BotWithUs and run it.

That's the entire end-to-end flow. Everything else you'll learn later is variations on these five steps.

</ContentBlock>

<ContentBlock title="Anatomy of the skeleton">

Inside the skeleton you'll find two files under `src/main/java/net/botwithus/`:

| File | Job                                                                                     |
|---|-----------------------------------------------------------------------------------------|
| `SkeletonScript.java` | The script itself — what runs every loop.                                               |
| `SkeletonScriptGraphicsContext.java` | The ImGui settings panel users see when they click script configuration. |

#### `SkeletonScript.java` (trimmed)

Before the class itself, real Java files start with a **package declaration** and a list of **imports** — every class name you use (`LoopingScript`, `Client`, `LocalPlayer`, `Execution`, `Backpack`, etc.) has to be imported from its package, otherwise the compiler doesn't know where to find it. The skeleton's actual top of file looks like this:

```java
package net.botwithus;

import net.botwithus.api.game.hud.inventories.Backpack;
import net.botwithus.internal.scripts.ScriptDefinition;
import net.botwithus.rs3.game.Client;
import net.botwithus.rs3.game.hud.interfaces.Interfaces;
import net.botwithus.rs3.game.queries.builders.objects.SceneObjectQuery;
import net.botwithus.rs3.game.scene.entities.characters.player.LocalPlayer;
import net.botwithus.rs3.game.scene.entities.object.SceneObject;
import net.botwithus.rs3.script.Execution;
import net.botwithus.rs3.script.LoopingScript;
import net.botwithus.rs3.script.config.ScriptConfig;

import java.util.Random;
```

You almost never type these by hand — when you reference a new class, IntelliJ pops up an *Unresolved reference* error and you press **Alt+Enter** to auto-import it. If you ever copy a snippet from this guide and the class name has a red squiggle, that's all it means: import is missing. Alt+Enter fixes it.

The snippets below leave imports out for readability, but they exist in the real file.

```java
public class SkeletonScript extends LoopingScript {

    private final Random random = new Random();
    private BotState botState = BotState.IDLE;

    enum BotState { IDLE, SKILLING, BANKING }

    public SkeletonScript(String s, ScriptConfig scriptConfig, ScriptDefinition scriptDefinition) {
        super(s, scriptConfig, scriptDefinition);
        this.sgc = new SkeletonScriptGraphicsContext(getConsole(), this);
    }

    @Override
    public void onLoop() {
        LocalPlayer player = Client.getLocalPlayer();
        if (player == null
                || Client.getGameState() != Client.GameState.LOGGED_IN
                || botState == BotState.IDLE) {
            Execution.delay(random.nextLong(3000, 7000));
            return;
        }
        switch (botState) {
            case SKILLING -> Execution.delay(handleSkilling(player));
            case BANKING  -> { /* your banking logic */ }
        }
    }
}
```

A few things worth knowing:

| Piece | What it means |
|---|---|
| `extends LoopingScript` | "This class is a BotWithUs script." `LoopingScript` is the simplest base class — it just calls `onLoop()` repeatedly (~every 100 ms by default; change with `this.loopDelay = 500`). |
| `this.sgc = new SkeletonScriptGraphicsContext(...)` | Wires up the ImGui settings panel. The `sgc` field is what BWU draws when a user opens your script. |
| `BotState` enum + `botState` field | A simple state machine. The skeleton ships with `IDLE`, `SKILLING`, `BANKING` — replace these with whatever your script needs. |
| `onLoop()` early-return | If we're not logged in **or** the bot is idle, just delay and bail. The state machine only runs when the player is in-game and the bot is doing something. |

`Execution.delay(...)` blocks the loop for the given number of milliseconds — use it to pace actions/queries so you don't spam the game.

#### `SkeletonScriptGraphicsContext.java`

The graphics context is where you describe your settings UI with ImGui. The skeleton's version draws a window with two tabs:

```java
@Override
public void drawSettings() {
    if (ImGui.Begin("My script", ImGuiWindowFlag.None.getValue())) {
        if (ImGui.BeginTabBar("My bar", ImGuiWindowFlag.None.getValue())) {
            if (ImGui.BeginTabItem("Settings", ImGuiWindowFlag.None.getValue())) {
                ImGui.Text("Welcome to my script!");
                ImGui.Text("My scripts state is: " + script.getBotState());
                ImGui.EndTabItem();
            }
            if (ImGui.BeginTabItem("Other", ImGuiWindowFlag.None.getValue())) {
                script.setSomeBool(ImGui.Checkbox("Are you cool?", script.isSomeBool()));
                ImGui.EndTabItem();
            }
            ImGui.EndTabBar();
        }
        ImGui.End();
    }
}
```

You don't need to touch this for now — just know it's where your script's settings window lives.

</ContentBlock>

<ContentBlock title='Add a "Hello, world!"'>

Open `SkeletonScript.java` and add **one line** at the very top of `onLoop()`, before the early-return check:

```java
@Override
public void onLoop() {
    println("Hello from SkeletonScript!");

    LocalPlayer player = Client.getLocalPlayer();
    if (player == null
            || Client.getGameState() != Client.GameState.LOGGED_IN
            || botState == BotState.IDLE) {
        Execution.delay(random.nextLong(3000, 7000));
        return;
    }
    // ...rest unchanged
}
```

`println(...)` is a helper provided by `LoopingScript` — anything you pass to it shows up in the BotWithUs console window when the script is running. Putting it **above** the early-return guarantees it fires every loop, even while the bot is `IDLE`. We'll use that console heavily for debugging in later chapters.

Save the file (`Ctrl+S`).

:::tip Why not put real game logic yet?
Because we want to confirm the build → load → run pipeline works end-to-end **before** layering anything on top. If something's wrong, a one-line script makes the problem much easier to spot. Until you get comfortable it's best to test every new feature you add before adding more.
:::

</ContentBlock>

<ContentBlock title="Build the .jar with Gradle">

1. Open the **Gradle** tool window on IntelliJ's right edge.
2. Expand the project → **Tasks → build**.
3. Double-click **build**.

IntelliJ runs Gradle, compiles your code, and produces a `.jar`. The bottom panel shows progress; you want to see **BUILD SUCCESSFUL** at the end.

If you get **BUILD FAILED**, scroll up in the output. The first red line usually points at the file and line number with the problem.

:::info You can also use the wrapper from the terminal
If you prefer the terminal: open IntelliJ's terminal (`Alt+F12`) and run `gradlew build`. Same result.
:::

</ContentBlock>

<ContentBlock title="Where the .jar goes">

The skeleton's `build.gradle.kts` defines a custom `copyJar` task that runs **automatically after every successful build** and drops the finished `.jar` into your local scripts folder.

A `.jar` is just a Java archive — very similar to a `.zip` or `.rar` — holding your compiled classes, resources like images, and metadata.

```
%USERPROFILE%\BotWithUs\scripts\local\
```

(That's `C:\Users\<you>\BotWithUs\scripts\local\` — paste the `%USERPROFILE%` form into Explorer's address bar and Windows will resolve it.)

After **BUILD SUCCESSFUL**, open that folder. You should see the skeleton's jar (e.g. `BwuScriptJavaSkeleton-1.0-SNAPSHOT.jar`) sitting in there.

:::info Don't see the .jar?
The `copyJar` task in `build.gradle.kts` controls the destination. Open it and look for the section that references `${user.home}\BotWithUs\scripts\local\` — that's where it lands. If you've changed it, either change it back or copy the `.jar` to the local folder by hand.
:::

</ContentBlock>

<ContentBlock title="Run it inside BotWithUs">

1. Launch a game client through the loader ([chapter 2](./02-launching-accounts.md)).
2. Wait for injection (BWU logo appears).
3. Press **Insert** to open the bot menu and click **Scripts**.
4. On the **Scripts** tab (the local one — *not* SDN), find **SkeletonScript** in the list.
5. Click it, then click **Play**.

Open the BotWithUs **console**. Every loop, you should see:

```
Hello from SkeletonScript!
```

**That's a working script.**

Open the script's settings window and you'll see the two ImGui tabs ("Settings" and "Other") rendered by `SkeletonScriptGraphicsContext` — proof that the graphics context is wired up too.

</ContentBlock>

<ContentBlock title="If it didn't work">

| Symptom | Likely cause | Fix |
|---|---|---|
| Script not in the **Scripts** list | `.jar` isn't in `BotWithUs\scripts\local\` | Confirm `copyJar` ran in the build output; copy the `.jar` over manually if needed |
| Script appears, but errors when started | Compile target wrong / missing dependency | Re-check JDK 20 in [chapter 4](./04-ide-setup.md), then rebuild |
| Console shows nothing | Console window is closed or filtered | Open the console from the loader; check there's no filter set |
| BUILD FAILED in IntelliJ | Code error or wrong JDK | Read the first red line in the Gradle output — it tells you what and where |

</ContentBlock>

You've now built and run your first script. From here, every new feature is just *more code inside `onLoop()`* (or new tabs in the graphics context). The next chapter teaches you what game data you can actually look at from in there.

**Next:** [reading the game →](./06-reading-the-game.md)
