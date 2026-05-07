---
title: 9. Publishing to SDN
description: Take your finished local script and put it on the BotWithUs marketplace so others can use it.
sidebar_position: 9
---

import ContentBlock from '@site/src/components/ContentBlock';

<ContentBlock title="Local vs SDN">

So far your script has lived in `BotWithUs\scripts\local\`. That folder is **personal** — only you and people you hand the `.jar` to can run it.

The **SDN** (Script Distribution Network) is the central marketplace at [botwithus.net/sdn](https://botwithus.net/sdn). Once a script is on the SDN it shows up under **SDN Scripts** in everyone's bot menu when they subscribe to it (free or paid).

Publishing is the last step — it's also a *gated* step, because every SDN script gets reviewed before it ships.

</ContentBlock>

<ContentBlock title="Before you submit — hard requirements">

Going through this list yourself before sending your script for review will speed up your release and avoid the most common rejection reasons.

#### 1. Build system — Gradle or Maven

Your script must build through a real, reproducible build system — either **Gradle** or **Maven** is fine, including the Maven multi-module workspace from [chapter 10](./10-multi-module-projects.md).

- For Gradle: `build.gradle` or `build.gradle.kts` at the root, and `./gradlew build` (or `gradle build`) must produce a jar cleanly.
- For Maven: `pom.xml` at the root (or a parent POM that includes the script as a module), and `mvn package` must produce the final jar.
- **No pre-built jars.** Submissions without a working build setup are auto-rejected — reviewers must be able to compile from source.

#### 2. Java version — must target Java 20

BotWithUs runs on **Java 20**. Scripts compiled against Java 21 or newer will crash the loader.

Gradle:

```groovy
java {
    sourceCompatibility = JavaVersion.VERSION_20
    targetCompatibility = JavaVersion.VERSION_20
}
```

Maven:

```xml
<properties>
    <maven.compiler.source>20</maven.compiler.source>
    <maven.compiler.target>20</maven.compiler.target>
</properties>
```

To verify what your jar was actually compiled with:

```bash
# Bash / Git Bash / WSL
javap -verbose -classpath build/libs/YourScript.jar YourMainClass | grep "major version"
```

```powershell
# PowerShell equivalent
javap -verbose -classpath build\libs\YourScript.jar YourMainClass | Select-String "major version"
```

The output must say **major version 64** (Java 20). Version 65 = Java 21 = rejection.

#### 3. `script.ini` — required fields

The file must exist at one of these paths:

- `src/main/resources/script.ini`, or
- `script.ini` at the repo root.

It must contain at least:

```ini
version=1
apiVersion=2
```

Missing or malformed `script.ini` is an automatic block.

#### 4. Jar size — under 15 MB

If your compiled jar exceeds **15 MB**, contact a moderator before submitting. Don't submit anyway.

#### 5. No sensitive data in the repo

Don't commit API keys, tokens, passwords, or credentials. If your script needs config, load it from a local file that's listed in `.gitignore`.

#### 6. Behavioral basics

These aren't auto-rejected by tooling, but reviewers bounce on them constantly:

- It works end-to-end for the activity it advertises — no "will TODO this later."
- It handles the user clicking Stop mid-action without crashing.
- It pauses or logs out gracefully on long disconnects — not spam-clicking a logged-out client.
- It doesn't print confidential info to the console (player names, paths, debug dumps).
- You've tested it on at least one fresh account — your dev account often has setup that hides bugs.
- You've read the [BotWithUs rules](../../Rules/) so your script doesn't violate any (e.g., no real-world trading flows).

</ContentBlock>

<ContentBlock title="Security audit — what gets your submission blocked">

Before reviewers build your script, an automated security scan runs over the source. Hits on the patterns below either block submission outright or require explicit staff approval.

#### Always blocked — no exceptions

These are detected by Jagex's anti-cheat and cause player bans, so they never ship in an SDN script.

| Pattern | Why |
|---|---|
| `java.awt.event.KeyEvent` | Anti-cheat detection → bans |
| `java.awt.event.MouseEvent` | Same |
| `java.awt.event.InputEvent` | Same |

#### Blocked unless you get explicit staff approval

These have legitimate uses (a local log file, a curated GE flow), but each one is reviewed case-by-case. **Disclose them in your submission message.** Trying to obfuscate or hide them is an automatic permanent ban.

| Pattern | Category |
|---|---|
| `java.net.` / `HttpURLConnection` / `HttpClient` / `Socket` / `URLConnection` | Network access |
| `OkHttp` / `okhttp` / `retrofit` | Network libraries |
| `FileOutputStream` / `FileWriter` / `DataOutput` / `BufferedWriter` | File writing |
| `discord.com` / `webhook` / `telegram` / `pastebin` | External services |
| `trade` / `Trading` / `GrandExchange` | Economy manipulation |
| `Class.forName` / `getMethod` / `invoke` | Reflection |
| `Base64.decode` / `DatatypeConverter` | Encoded payloads |
| `Runtime.getRuntime` / `ProcessBuilder` / `exec(` | Process execution |
| `java.awt.Robot` / `java.awt.Toolkit` / `GraphicsEnvironment` / `MouseInfo` / `PointerInfo` | System input/screen |
| `ClassLoader` / `URLClassLoader` / `defineClass` / `Unsafe` | Dynamic class loading |
| `System.loadLibrary` / `System.load` | Native libraries |
| `native` method | Native code |

</ContentBlock>

<ContentBlock title="Final pre-submission checklist">

Confirm all of the following before you send the link:

- [ ] Gradle or Maven build system present, and `./gradlew build` / `mvn package` succeeds cleanly
- [ ] Jar compiles to Java 20 (major version 64)
- [ ] `script.ini` present with `version=1` and `apiVersion=2`
- [ ] Jar is under 15 MB
- [ ] No `java.awt.event.KeyEvent/MouseEvent/InputEvent` anywhere in source
- [ ] No network, file I/O, or reflection code — *or* you've disclosed it and have staff approval
- [ ] No credentials or tokens in the repo
- [ ] Script works correctly in your local BWU client
- [ ] You've read the BotWithUs rules and your script doesn't violate them

If anything is "no," fix it first. Ask in the community Discord if you're unsure — much faster than going through a rejection cycle.

</ContentBlock>

<ContentBlock title="The submission workflow">

The full GitHub-based submission workflow has its own page. Open it in a new tab and follow it end-to-end:

> **→ [Script Submission Workflow](../ScriptSubmissionWorkflow.md)**

That page covers:

- Cloning the SDN scripts repo with **GitHub Desktop** (no command line required).
- Creating a **feature branch** for your script.
- Committing your code, syncing with `main`, **squashing**, and pushing.
- Opening the **pull request** for review.

Come back here once you've read it.

</ContentBlock>

<ContentBlock title="What reviewers look at">

A `@Dev` or script reviewer will check:

- **Does it build?** Pull the branch, run `./gradlew build` or `mvn package` (whichever your repo uses), expect success.
- **Does it match the description?** A "woodcutter" that secretly does combat fails review.
- **Is it safe?** No outbound network calls to unknown URLs, no reading random files, no obvious anti-detection trickery.
- **Is it a duplicate?** If five other scripts already do exactly the same thing, you may be asked to differentiate or contribute to the existing one.
- **Is the UI sane?** ImGui windows that crash on edge inputs or display garbage will get flagged.

Reviews can take from a few hours to a few days depending on volume. Be patient and respond to feedback in the PR thread.

</ContentBlock>

<ContentBlock title="After it ships">

Once your script is merged and built by SDN:

1. It appears at [botwithus.net/sdn](https://botwithus.net/sdn) in the appropriate category.
2. Users **subscribe** to it on the website.
3. The script appears in their bot menu under **SDN Scripts** after a refresh.

Updates work the same way: another feature branch, another PR, another (faster) review.

</ContentBlock>

<ContentBlock title="You're done">

You started with no software and no code. You now have:

- A working BotWithUs install.
- A built skeleton script you can extend.
- A mental model for everything you can read off the running game.
- The debug tools to find any unknown ID.
- A clean way to resolve static data from the cache.
- A path to ship your work to other users.

If you got value out of this tutorial, drop a thanks in [Discord](https://discord.gg/botwithus) — and consider passing it along to someone earlier in the journey. The community runs on it.

</ContentBlock>
