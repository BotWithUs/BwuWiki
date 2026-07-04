---
title: 10. Multi-Module Projects & Sharing Code (Advanced)
description: Scale beyond one-script-per-repo — a Maven multi-module workspace, your own reusable API, and many scripts in a single project.
sidebar_position: 10
---

import ContentBlock from '@site/src/components/ContentBlock';

<ContentBlock title="Who this chapter is for">

By chapter 9 you can ship a single script. This chapter is for when **one repo per script stops working** for you:

- You're maintaining 10+ scripts and find yourself copy-pasting helpers (banking, prayer flicking, area logic) between them.
- You want a **shared API** — your own utility classes — that every script you write pulls in by name.
- You're tired of opening a different IDE window per script.

The pattern below is the same one BotWithUs uses internally for the production `BwUMavenScripts` collection: **a single Maven workspace with one parent POM, a few category aggregators, individual script modules, and one or more shared API modules**. `mvn install` from the root builds *everything*, drops every jar into your scripts folder, and updates shared APIs across all scripts atomically.

</ContentBlock>

<ContentBlock title="Maven, not Gradle — why the switch">

Chapter 5 used Gradle because that's what the official skeleton ships with. Multi-module is possible in either tool, but **Maven's multi-module story is dramatically more mature**, and the established BotWithUs production workspaces are all Maven. This chapter is Maven.

Both Gradle and Maven are accepted for SDN submissions ([chapter 9](./09-publishing-to-sdn.md)), so the workspace you build here can ship straight to the SDN — no need to convert anything.

The mental model is the same in both:

- A **parent project** declares shared versions and plugins.
- **Module projects** inherit from the parent and either *aggregate* (point at sub-modules) or *produce* a jar.
- Modules can **depend on each other** by Maven coordinates — your script module pulls in your API module as if it were any third-party library.

</ContentBlock>

<ContentBlock title="The layout we're building">

```
MyScripts/                                 ← root (parent POM)
├── pom.xml                                ← parent: deps, plugins, repos
├── APIs/
│   ├── pom.xml                            ← aggregator
│   └── MyApi/
│       ├── pom.xml                        ← leaf: produces MyApi.jar
│       └── src/main/java/.../MyApi.java
├── Bosses/
│   ├── pom.xml                            ← aggregator
│   ├── AraxxorScript/
│   │   ├── pom.xml                        ← leaf: depends on MyApi
│   │   └── src/main/java/.../AraxxorScript.java
│   └── ZukScript/
│       ├── pom.xml
│       └── src/main/java/...
└── Skilling/
    ├── pom.xml
    ├── ChopScript/
    └── FishScript/
```

Three layers:

1. **Root** — declares Maven coordinates, the BotWithUs Nexus repo, shared dependency versions, and global plugins. `packaging=pom`.
2. **Category aggregators** (`Bosses`, `Skilling`, `APIs`) — group related modules. Also `packaging=pom`. Their only job is to list the leaf modules they contain.
3. **Leaf modules** — produce an actual jar. These are your scripts and your API libraries.

</ContentBlock>

<ContentBlock title="Step 1 — the parent POM">

The root `pom.xml`. Every leaf inherits from this.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>MyScripts</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>pom</packaging>

    <properties>
        <maven.compiler.source>20</maven.compiler.source>
        <maven.compiler.target>20</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <modules>
        <module>APIs</module>
        <module>Bosses</module>
        <module>Skilling</module>
    </modules>

    <!-- Shared dependency versions; child modules don't repeat the version. -->
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>net.botwithus.rs3</groupId>
                <artifactId>botwithus-api</artifactId>
                <version>[1.0.5,2.0.0)</version>
            </dependency>
            <dependency>
                <groupId>net.botwithus.xapi.public</groupId>
                <artifactId>api</artifactId>
                <version>[1.2.6,2.0.0)</version>
            </dependency>
            <dependency>
                <groupId>com.google.code.gson</groupId>
                <artifactId>gson</artifactId>
                <version>2.10.1</version>
            </dependency>
            <dependency>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>1.18.28</version>
                <scope>provided</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <repositories>
        <repository>
            <id>botwithus</id>
            <url>https://nexus.botwithus.net/repository/maven-releases/</url>
        </repository>
    </repositories>
</project>
```

Three things that earn their keep here:

- **`packaging=pom`** says "this project doesn't produce a jar; it exists to be inherited from."
- **`dependencyManagement`** centralises versions. Child modules write `<dependency>...<groupId>net.botwithus.rs3</groupId>...</dependency>` *without* a `<version>`; Maven fills it in from here. Bumping the BotWithUs API version is then a one-line change instead of edits across 40 modules.
- **`<repositories>`** points at the BotWithUs Nexus so `botwithus-api` and `xapi.public:api` resolve. You only need this once, in the parent.

:::tip Version ranges
`[1.0.5,2.0.0)` means "any 1.x version ≥ 1.0.5". The BotWithUs API ships frequent compatible 1.x updates, so a range gives you new features automatically while shutting the door on a hypothetical breaking 2.0.
:::

</ContentBlock>

<ContentBlock title="Step 2 — category aggregators">

`Bosses/pom.xml` (and the equivalent for `Skilling`, `APIs`). These are pure routing — they tell Maven where the actual modules live.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>MyScripts</artifactId>
        <version>1.0-SNAPSHOT</version>
        <relativePath>../pom.xml</relativePath>
    </parent>

    <artifactId>Bosses</artifactId>
    <packaging>pom</packaging>

    <modules>
        <module>AraxxorScript</module>
        <module>ZukScript</module>
    </modules>
</project>
```

That's it. The aggregator inherits from the parent and lists its children. Building `Bosses` builds every boss script underneath.

You don't *need* this layer — the parent could list every script directly — but once you have 30+ scripts, grouping by category keeps things readable and lets you build "just the bosses" with `mvn -pl Bosses install`.

</ContentBlock>

<ContentBlock title="Step 3 — your shared API module">

This is where the real value of the multi-module setup lives. Build a module that holds your reusable code — banking helpers, area definitions, prayer flicker, whatever you'd otherwise paste into every script.

`APIs/MyApi/pom.xml`:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>MyScripts</artifactId>
        <version>1.0-SNAPSHOT</version>
        <relativePath>../../pom.xml</relativePath>
    </parent>

    <artifactId>MyApi</artifactId>

    <dependencies>
        <!-- No <version> needed — inherited from parent dependencyManagement. -->
        <dependency>
            <groupId>net.botwithus.rs3</groupId>
            <artifactId>botwithus-api</artifactId>
        </dependency>
        <dependency>
            <groupId>net.botwithus.xapi.public</groupId>
            <artifactId>api</artifactId>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>
```

`src/main/java/com/example/api/Banker.java`:

```java
package com.example.api;

import net.botwithus.api.game.hud.inventories.Backpack;
import net.botwithus.rs3.game.queries.builders.objects.SceneObjectQuery;
import net.botwithus.rs3.game.scene.entities.object.SceneObject;

public final class Banker {
    public static boolean depositAll() {
        if (Backpack.isEmpty()) return true;
        SceneObject chest = SceneObjectQuery.newQuery()
                .name("Bank chest")
                .option("Use")
                .hidden(false)
                .results()
                .nearest();
        return chest != null && chest.interact("Use");
    }
}
```

Now any script in your workspace can call `Banker.depositAll()` after declaring `MyApi` as a dependency.

</ContentBlock>

<ContentBlock title="Step 4 — a script module that depends on your API">

`Bosses/AraxxorScript/pom.xml`:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>MyScripts</artifactId>
        <version>1.0-SNAPSHOT</version>
        <relativePath>../../pom.xml</relativePath>
    </parent>

    <artifactId>AraxxorScript</artifactId>

    <dependencies>
        <dependency>
            <groupId>net.botwithus.rs3</groupId>
            <artifactId>botwithus-api</artifactId>
        </dependency>
        <dependency>
            <groupId>net.botwithus.xapi.public</groupId>
            <artifactId>api</artifactId>
        </dependency>

        <!-- Your own API module — referenced by Maven coordinates. -->
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>MyApi</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <source>20</source>
                    <target>20</target>
                    <!-- Java 20 preview features (record patterns, pattern matching for switch).
                         The production BotWithUs scripts compile with this flag, so matching it
                         keeps your code interchangeable with theirs. Drop the flag if you don't
                         use preview features. -->
                    <compilerArgs>
                        <arg>--enable-preview</arg>
                    </compilerArgs>
                </configuration>
            </plugin>

            <!-- Bundle MyApi's classes into the script's jar so the loader has everything in one file. -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-shade-plugin</artifactId>
                <version>3.4.1</version>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals><goal>shade</goal></goals>
                        <configuration>
                            <outputFile>${user.home}\BotWithUs\scripts\local\AraxxorScript.jar</outputFile>
                            <artifactSet>
                                <includes>
                                    <!-- Group-includes pull in every module under that groupId.
                                         com.example covers your own scripts/APIs (MyApi, etc.)
                                         net.botwithus.api covers anything published under that group
                                         in the production workspace. -->
                                    <include>com.example</include>
                                    <!-- The public extension API — bundled, not loader-provided. -->
                                    <include>net.botwithus.xapi.public</include>
                                </includes>
                            </artifactSet>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

The script source then uses your API straight up:

```java
import com.example.api.Banker;
// ...
if (Backpack.isFull()) {
    Banker.depositAll();
}
```

</ContentBlock>

<ContentBlock title="How shading works (and why you need it)">

The BotWithUs loader scans `~/BotWithUs/scripts/local/` for jars and loads each one independently. It does **not** recursively resolve Maven dependencies at runtime — if your script's jar references a class that isn't inside the jar, you'll get `NoClassDefFoundError` at startup.

`maven-shade-plugin` solves this by **fattening** your final jar: it unpacks every dependency listed in `<artifactSet>` and packs the classes back into a single jar. So the `AraxxorScript.jar` that lands in your local folder physically contains both your script code *and* `MyApi` classes.

The rules are simpler than they look:

- **Always include your own API modules.** They're not on the loader's classpath otherwise. Use a group-level include (`<include>com.example</include>`) so a single line covers all of them.
- **Always include `xapi.public:api`** (`net.botwithus.xapi.public`). It's a public extension API, not part of the loader, so your script needs its classes inside the jar.
- **Don't include `botwithus-api`** (`net.botwithus.rs3:botwithus-api`). That one *is* the loader's own API, supplied at runtime — bundling it creates duplicate-class conflicts.

For comparison, the production `AraxxorWithUs/pom.xml` uses three group-includes — its own group, a third-party API its scripts share (`net.akisame.api`), and the public extension API:

```xml
<artifactSet>
    <includes>
        <include>net.botwithus.api</include>
        <include>net.akisame.api</include>
        <include>net.botwithus.xapi.public</include>
    </includes>
</artifactSet>
```

Same pattern, different group names.

You can also put a default shade config in the parent POM and let leaves only override the `outputFile`.

</ContentBlock>

<ContentBlock title="Daily workflow">

Once the structure is in place, your loop is:

```
# Build everything from the root — every script jar lands in ~/BotWithUs/scripts/local/
mvn -f MyScripts/pom.xml install

# Or build just one module + everything it depends on
mvn -pl Bosses/AraxxorScript -am install

# Or one category
mvn -pl Bosses install
```

`-am` ("also make") is the magic flag for fast iteration: changing a function in `MyApi`, then running `mvn -pl Bosses/AraxxorScript -am install`, rebuilds `MyApi` *and* `AraxxorScript` and nothing else. Seconds, not a full workspace rebuild.

In IntelliJ, the same thing is available as a **Maven tool window** — expand each module, double-click `package`, your script lands in the local folder. Keep the loader running; just hit **Refresh** in the SDN tab afterwards (chapter 3) and the new jar is picked up without restarting.

</ContentBlock>

<ContentBlock title="When to split out an API module">

Don't pre-emptively create `MyApi`. The right time is when you find yourself copying the same helper into a second script. Then:

1. Create the API module (parent POM, basic dependencies — no shade plugin, since the API is consumed by other scripts, not loaded directly).
2. Move the helper there.
3. Add the API as a dependency in both consuming scripts.
4. From now on, fixes propagate to both with a single `mvn install`.

Common things that earn their place in a shared API:

- **Banking flows** — every skilling/combat script banks; the click sequence is identical.
- **Area definitions** — coordinates and `Area.Rectangular`s for common locations (Wars Retreat, GE, lobbies).
- **Prayer flicker** — the projectile-driven prayer switching from chapter 6, parameterised by attack IDs.
- **Action-bar helpers** — abstraction over `ActionBar` calls that retry, wait for the GCD, etc.
- **State machines / tree-script base classes** — if your scripts share a structure (e.g. all use a `LeafTask` tree), the framework belongs in the API.

Keep things specific to a single script *out* of the shared API. Cross-cutting helpers belong there; boss-specific phase logic doesn't.

</ContentBlock>

<ContentBlock title="Common pitfalls">

- **`relativePath` wrong** — every leaf POM's `<parent><relativePath>` must point at the actual parent POM. Off by one `..` and Maven warns "non-resolvable parent POM" during build.
- **Forgetting to bundle your API** — script jar builds, drops in folder, loads, and explodes the moment it calls `Banker.depositAll()` because shade didn't include `com.example:MyApi`. Add the include.
- **Bundling the BotWithUs loader API** — shading `net.botwithus.rs3:botwithus-api` into your jar gives you "duplicate class" errors at runtime when the loader's copy collides with yours. Bundle your own modules and `net.botwithus.xapi.public`, but never `botwithus-api` itself.
- **Using `<version>LATEST</version>` for your *own* inter-module deps** — for the BotWithUs Nexus artifacts (`botwithus-api`, `xapi.public:api`) the production scripts use `LATEST` and that's fine; the Nexus only ever serves a sane current version. But for *workspace-internal* deps (your `MyApi` module from a sibling script), pin the explicit version (`1.0-SNAPSHOT`). `LATEST` against a local module resolves unpredictably across reactor builds.
- **Editing `dependency-reduced-pom.xml`** — that file is auto-generated by shade. Edit `pom.xml` only.

</ContentBlock>

You now know how to scale a single tutorial script into a workspace of dozens — sharing code through your own API module, building everything with one command, and keeping versions consistent through a parent POM. That's the structure every serious BotWithUs author ends up with.

Congrats — you've completed the zero-to-script tutorial.
