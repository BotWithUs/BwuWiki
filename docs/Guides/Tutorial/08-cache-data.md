---
title: 8. Cache Data Gathering
description: Pull item, NPC, and object info straight from the game cache so your script doesn't need hard-coded numbers.
sidebar_position: 8
---

import ContentBlock from '@site/src/components/ContentBlock';

<ContentBlock title='What "the cache" is'>

When the game client launches, it downloads (or reads from disk) a giant package of static data: every item's name, every NPC's stats, every object's right-click options, every interface layout. That package is **the cache**.

The cache is *the* source of truth for things like:

- "What's the official in-game name for item ID 12345?"
- "What right-click options does this object have?"
- "What stats does this NPC have?"
- "What's this varbit's underlying varp and bit range?"

You can read all of this from inside your script without making the player walk over and look at it.

</ContentBlock>

<ContentBlock title="Why it matters">

Most beginner scripts get written with hard-coded numbers — and worse, hard-coded *lists*:

```java
// Hardcoded raw fish IDs — fragile and incomplete.
// Every time Jagex adds a new fish, you have to find this list and update it.
int[] RAW_FISH = { 317, 321, 327, 331, 335, 341, 353, 359, 363, 371, 377, 383, 389, 395, 401, /* ...keep going forever... */ };
```

That works until Jagex adds a new fish, renames an item, or you copy your script to a fresh setup and realize you missed twelve IDs. **Cache lookups** let you discover the answer at runtime instead — the cache is the single source of truth and you ask it directly.

The most useful pattern is **iterating the cache to find every item matching a rule**. This loop is lifted straight from `CookWithUs.loadRawFishItems()`:

```java
// Build the list of raw fish at script start by walking the cache.
List<ItemType> rawFishItems = new ArrayList<>();
HashSet<String> seenNames = new HashSet<>();

for (int i = 0; i < 60000; i++) {              // walk every known item id
    ItemType item = ConfigManager.getItemType(i);
    if (item != null
            && item.getCategory() == 57        // 57 = "Cooking" category
            && item.getName().startsWith("Raw ")) {
        if (seenNames.add(item.getName())) {   // dedupe by name
            rawFishItems.add(item);
        }
    }
}
println("Loaded " + rawFishItems.size() + " unique raw fish items from cache");
```

When Jagex ships a new fish next month, your script picks it up automatically — no code change. You also don't have to *know* the IDs in advance; you describe what you want ("a Cooking-category item whose name starts with 'Raw '") and the cache hands you the matching set. Same trick works for "every overload variant", "every herb", "every uncharged piece of augmented gear" — anything where the in-game grouping is reflected in `getCategory()` or the item's name.

Use simple by-name resolution when you only need one specific thing:

```java
ItemType potion = ConfigManager.getItemType("Super restore (4)");
int id = potion.getId();
```

This is highly optional for one-off IDs but **strongly recommended** the moment your script needs a *list* of related items.

</ContentBlock>

<ContentBlock title="The four cache helpers you'll meet">

BotWithUs exposes the cache through `ConfigManager` (or equivalent helpers — exact names vary by API version, but the *concepts* are stable).

| Helper | Returns info about | Common use |
|---|---|---|
| **ItemType** | An item (name, examine text, value, stackable, etc.) | "Get the ID of the item called 'Magic logs'" |
| **NpcType** | An NPC's static info | "What name does NPC 1234 have?" |
| **ObjectType** | A scene object's static info | "What right-click options does this object define?" |
| **VarbitType** | A varbit's underlying structure | Maps a varbit to the varp it lives in and the bits it occupies |

You'll usually use them as a *one-shot lookup* in `initialize()` (so you do the work once) and store the result in a variable but can also be used to check if specific item is for example notable on runtime.

</ContentBlock>

<ContentBlock title="Pattern — resolve once, reuse">

Walk the cache once in `initialize()` and store the result:

```java
private List<Integer> rawFishIds = new ArrayList<>();
private int superRestore4Id;

@Override
public boolean initialize() {
    this.loopDelay = 600;

    // One-shot lookup for a specific item.
    superRestore4Id = ConfigManager.getItemType("Super restore (4)").getId();

    // Bulk discovery — same loop as above, this time storing IDs into a field.
    rawFishIds = findItemIds(57, "Raw ");

    return super.initialize();
}
```

Then in `onLoop()` you use the variables, never the literal numbers:

```java
// Withdraw any raw fish we know about — no hardcoded list.
for (int id : rawFishIds) {
    if (Bank.getCount(id) > 0) {
        Bank.withdraw(id, 28);
        break;
    }
}

if (Backpack.getCount(superRestore4Id) > 0) {
    // we still have a 4-dose super restore in the bag
}
```

Your script now survives Jagex adding new fish, renaming an item, or shifting IDs in patches — as long as the **rule** stays the same ("Cooking category, name starts with 'Raw '"), you're fine.

:::tip Names aren't unique
Some names appear on multiple things (e.g., several different "Bank chest" objects in different cities). When that happens, lookup-by-name returns *one* of them, which may not be the one you want. Add a second filter (location, animation, additional name keyword) or fall back to the ID printed by the debug overlay.
:::

</ContentBlock>

<ContentBlock title="Reading the cache offline — the cache dump">

`ConfigManager` lets you read cache data **at runtime** from inside a script. There's a complementary tool: an **offline dump of the entire cache as JSON** that gets posted to the BotWithUs Discord and updated whenever a new RuneScape patch ships. You grep it from your editor instead of running the game and watching overlays.

#### What's in the dump

| File | What it holds |
|---|---|
| `items.json` | Every item: id, name, examine, stack flags, ground/widget actions |
| `npcs.json` | Every NPC: id, name, combat stats, animation IDs |
| `locations.json` | Every scene object ("location"): id, name, right-click options |
| `structs.json` | Game **structs** — small typed records the engine uses for everything from buff bar entries to potion timers (see below) |
| `enums.json` | Enum tables (e.g. lookup tables that map item id → noted item id) |
| `dbrows.json` | Database rows (modern Jagex content like Vault rooms ships through these) |
| `latest_varbits.json` / `latest_varps.json` | Every varbit/varp the cache currently knows about |
| `quests.json`, `achievements.json` | Quest and achievement metadata |
| `cs2/` | ~20k+ decompiled **CS2 client scripts** (TypeScript-like) — what the game itself runs when you click a button |
| `cs2_diff.json` | Diff vs the previous dump — perfect after game updates to see exactly what shifted |

#### Where to get it

Grab the latest dump from the BotWithUs Discord. The repo is auto-updated, so cloning/pulling always gives you the current cache without having to run an extractor yourself.

#### When to reach for it instead of `ConfigManager`

- **You don't have the game running** and just want to find an ID — grep `items.json` for the name and read the `id` field.
- **You want to see what *all* the entries look like**, not just one — e.g., listing every item whose name contains "Potion".
- **You're investigating game mechanics** — the cs2 scripts show you exactly what the game does when an interface button is clicked, which is often faster than trial-and-error in the live game.
- **A varbit ID changed after a patch** — `cs2_diff.json` and the dated `zips/` archives let you compare yesterday's cache to today's.
- **You need a struct's field layout** — buff bar entries, action bar slots, and many quest-stage records are structs; the dump shows every key that struct uses.

#### Practical examples

The dump is just text files, so any search tool works. The IntelliJ **Find in Files** dialog (`Ctrl+Shift+F`) over the dump folder is the easiest cross-platform option.

```bash
# Bash / Git Bash / WSL — "What's the item ID for Magic logs?"
grep -B1 -A2 '"name": "Magic logs"' items.json

# "Which NPCs have 'Araxxor' in their name?"
grep '"name": "[^"]*Araxxor' npcs.json
```

```powershell
# PowerShell equivalents — "What's the item ID for Magic logs?"
Select-String -Path items.json -Pattern '"name": "Magic logs"' -Context 1,2

# "Which CS2 scripts touch the bank?"
Select-String -Path cs2\*.ts -Pattern 'bank' -List
```

In a hard-stuck debugging session, this is often faster than starting the client and chasing values through the debug overlays — especially for static info like item names, struct fields, or "did this varbit ID change in the last patch?"

</ContentBlock>

<ContentBlock title="When *not* to use cache lookups">

Cache data is for **static** info — facts that don't change while the game is running. Don't reach for the cache when you need to know:

- The **current animation** of a specific NPC (use the NPC's live state).
- The **current value** of a varbit (use `VarManager`).
- Whether the boss is *right now* in phase 3 (use a varbit or NPC animation).

Rule of thumb: if the answer can change *during a session*, it's not in the cache.

</ContentBlock>

<ContentBlock title="Quick wins for new scripts">

Two things to start using `ConfigManager` for immediately:

1. **Replace any item ID literal in your code** with a `getItemType("name").getId()` lookup. Cleaner code, fewer bugs.
2. **Build a small "constants" class** that holds every cache-resolved ID for your script:

```java
public class Cfg {
    public static int SUPER_RESTORE_4_ID;
    public static int OVERLOAD_6_ID;
    public static List<Integer> RAW_FISH_IDS = new ArrayList<>();

    public static void load() {
        SUPER_RESTORE_4_ID = ConfigManager.getItemType("Super restore (4)").getId();
        OVERLOAD_6_ID      = ConfigManager.getItemType("Overload (6)").getId();
        RAW_FISH_IDS       = findItemIds(57, "Raw ");   // same iteration helper as above
    }
}
```

Call `Cfg.load()` once in `initialize()`. Now your whole script reads `Cfg.SUPER_RESTORE_4_ID` everywhere — readable and centralised.

</ContentBlock>

You can now (a) write a script, (b) read live game state, (c) find unknown IDs, and (d) resolve static data cleanly. The last chapter takes your finished script and puts it on the marketplace.

**Next:** [publishing to SDN →](./09-publishing-to-sdn.md)
