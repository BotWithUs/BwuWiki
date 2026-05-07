---
title: 6. Reading the Game
description: Plain-English tour of the data your script can read — varbits, scene objects, NPCs, inventory, skills, interfaces, position, events, and more.
sidebar_position: 6
---

import ContentBlock from '@site/src/components/ContentBlock';

<ContentBlock title="The mental model">

Your script is a brain that watches the game and decides what to do. Everything it watches falls into a handful of categories. Once you know what's in each category and *why it exists*, you stop guessing and start reading the game like the engine sees it.

| Category | Answers the question | Examples                                              |
|---|---|-------------------------------------------------------|
| **Varbits** | "Is this small flag on or off? What stage of the quest am I at?" | Is this prayer active? Is this potion buff active?    |
| **Varps** | Same idea as varbits, just bigger numbers | Quest progress, packed settings, per-player counters  |
| **Varcs** | Per-client values (UI state, options) | Whether the chat box is hidden, music volume          |
| **Scene objects** | "What buildings, doors, trees, ores, banks are around me?" | Bank chest, magic tree, mining rock, ladder           |
| **NPCs** | "What characters are around me — friendly or hostile?" | Boss, monster, banker, shopkeeper                     |
| **Ground items** | "What loot is on the floor near me?" | Bones, rare drops, dropped supplies                   |
| **Projectiles** | "Is something flying through the air right now?" | Boss special attack, player's spell, dragonfire       |
| **Animations / spot animations** | "What is something *doing* right now?" | Player swinging axe, NPC casting, ground graphic effect |
| **Inventory, bank & equipment** | "What items am I carrying, banking, or wearing?" | Backpack stacks, equipped weapon, bank counts         |
| **Skills & XP** | "What level am I? How much XP did I just gain?" | Mining level, XP gained this session, level-up        |
| **Interfaces & components** | "What menu/dialog is open and what does it say?" | Bank window, quest dialog, options menu               |
| **Player & position** | "Where am I, am I in my target area, what's the engine seeing me do?" | Coordinate, current Area, my animation/hitsplats      |
| **Events** | "Tell me when X happens — I don't want to keep checking." | Chat message arrived, XP gained, inventory changed    |

The rest of this chapter is one section per category, in plain English, with concrete examples from real BotWithUs scripts.

</ContentBlock>

<ContentBlock title="Varbits — small numeric flags">

Think of a varbit as a labeled slot the game stores a small number in. Each varbit has an **ID** (a number) and a **value**. The value is *usually* 0 or 1 (a flag), but plenty of varbits are real small integers — counters, timers, tiered settings.

In real WithUs scripts you'll find varbits doing all of these:

- **Yes/no flags** — "Is this prayer turned on?" → `VarManager.getVarbitValue(prayer.getVarbitId()) > 0`
- **Counters** — "How many flowers are in the basket right now?" → `VarManager.getVarbitValue(basket.getFlowerCountVarbit())`
- **Buff/familiar timers** — "How much time is left on my BoB familiar?" → `VarManager.getVarbitValue(BOB_REMAINING_TIME_VARBIT)`
- **Mode toggles** — "Is area-loot enabled?" → `VarManager.getVarbitValue(27943) == 1`
- **Boss/quest stage** — "Which phase is the boss in?" → `varbit == 3`

Reading one looks like:

```java
int phase = VarManager.getVarbitValue(SOME_VARBIT_ID);
if (phase == 3) {
    // boss is in phase 3, do phase-3 things
}
```

You don't memorize varbit IDs — you **find** them. Varbits behave differently from varps in the debug overlay, so finding them has its own workflow — see [chapter 7](./07-debug-overlays.md) for the details.

In a finished script the IDs usually end up as named constants (`PERFECT_WOODCUTTING_JUJU_VARBIT = 26029`) so the call site reads naturally.

</ContentBlock>

<ContentBlock title="Varps — bigger numeric flags">

A varp ("var player") is a varbit's bigger cousin — a full 32-bit integer the game tracks per player. Under the hood, varbits are *slices* of varps (each varp is split into bit-fields, and a varbit is one of those fields). For your purposes:

- Use a **varbit** when the in-game state is small (a flag, a stage, a small counter) — most of the time.
- Reach for a **varp** when the value is too big to be a varbit (large counters, packed quest progress, certain settings) or when the debug overlay shows the change in the varp panel rather than the varbit panel.

Reading is the same shape, different method:

```java
int value = VarManager.getVarpValue(SOME_VARP_ID);
```

You'll mostly meet varps in quest tracking and certain global settings.

</ContentBlock>

<ContentBlock title="Varcs — client-only values">

A varc ("var client") lives only in **your** game client. They store UI state and per-client preferences: which chat tab is active, whether music is muted, how a sub-panel was last sorted.

You'll use varcs less often than varbits/varps, but they're the right tool when your script depends on a **UI** state the server doesn't know about — for example, "is this side panel currently expanded or collapsed?"

There's also `getVarcStringValue(...)` for varcs that hold strings rather than numbers (e.g. user-entered text or a selected option label).

</ContentBlock>

<ContentBlock title="Scene objects — buildings, doors, trees, ores">

A **scene object** is anything in the world that *isn't a person*: trees, banks, ladders, mining rocks, fishing spots, doors, anvils, prayer altars, fires, ranges. Each has a position, a name, and one or more right-click options ("Chop down", "Mine", "Climb-up", "Add logs to").

The query is a chain of filters: `name(...)`, `option(...)`, `id(...)`, `animation(...)`, etc. — combine whichever you need. Real patterns from our scripts:

```java
// Filter by name only:
SceneObject tree = SceneObjectQuery.newQuery()
    .name("Magic tree")
    .results()
    .nearest();

// Filter by name AND right-click option (many "Fire" objects
// exist in the world; we only want a cookable one):
SceneObject fire = SceneObjectQuery.newQuery()
    .name("Fire")
    .option("Cook-at")
    .results()
    .nearest();

// Filter by option only — "give me whatever is nearby that lets
// me 'Load Last Preset from'", regardless of name:
SceneObject preset = SceneObjectQuery.newQuery()
    .option("Load Last Preset from")
    .results()
    .nearest();

// Filter out scene objects that exist in the scene data but aren't
// currently rendered/interactable. Very common in encounters where
// the same name can refer to an active or inactive object (open vs
// closed door, powered vs unpowered anchor, used vs fresh trapdoor)
// you will use hidden flag almost everywhere:
SceneObject tree = SceneObjectQuery.newQuery()
    .name("Tree")
    .hidden(false)
    .results()
    .nearest();

if (tree != null) {
    tree.interact("Chop down");
}
```

What `SceneObjectQuery` actually does: "give me every scene object in the loaded scene matching these filters" — then you call `.nearest()` / `.first()` / iterate. If nothing matches, you get `null` back, which is why every interaction is preceded by a null check.

:::tip Why filter by option, not just name?
Many objects share names (every "Fire" is named "Fire", but only some are cookable). Filtering by the right-click option you actually want skips decorative or wrong-state copies. This is *the* most common mistake in early scripts.
:::


</ContentBlock>

<ContentBlock title="NPCs — characters">

NPCs are the moving people and monsters. Same query shape as scene objects:

```java
Npc boss = NpcQuery.newQuery()
    .name("Araxxor")
    .results()
    .nearest();
```

What you read off an NPC:

- **Position** — where they are (`getCoordinate()`).
- **Animation ID** — what they're currently doing (`getAnimationId()`; see below).
- **Health** — how alive they are (boss kill detection).
- **Overhead text** — what they just said.
- **Target** — who/what they're attacking — useful to detect when the boss switches to or away from you.

NPCs are how your script "sees" enemies, vendors, summoning familiars, slayer task targets, and any creature in the world. Boss scripts in particular spend most of their time reading the boss NPC's animation and target.

</ContentBlock>

<ContentBlock title="Ground items — loot on the floor">

A **ground item** is anything sitting on a tile that you can pick up: bones a monster dropped, rares from a kill, supplies someone tossed. Same query pattern as scene objects and NPCs:

```java
GroundItem loot = GroundItemQuery.newQuery()
    .name("Dragon bones")
    .results()
    .nearest();

if (loot != null) {
    loot.interact("Take");
}
```

You'll mostly use this in money-making and combat scripts — anything that loots after a kill.

</ContentBlock>

<ContentBlock title="Projectiles — things mid-flight">

A **projectile** is something the game has launched but not yet landed: a fireball, a thrown spear, a dragon's breath, a boss's homing attack. Each has an **ID**, a **source** (who fired it), a **target**, a **position**, and a **landing cycle** — the engine tick when it'll hit.

Projectiles are critical for **boss scripts** — they're how you know an attack is *coming* before the damage actually hits. By the time the damage lands, it's too late to switch prayers or step out.

The real pattern from our prayer-flicker code is:

```java
EntityResultSet<Projectile> magicProjectiles =
        ProjectileQuery.newQuery().ids(1234).results();      // some boss's magic attack ID

for (Projectile p : magicProjectiles) {
    long landingInMs = (Client.getClientCycle() - p.getEndCycle()) * 20L;
    // landingInMs is negative while the projectile is still mid-flight,
    // 0 when it lands, positive once it's already landed.
    if (landingInMs > -300 && landingInMs < 0) {
        // ~300 ms before impact — flick to the matching prayer
    }
}
```

Two things to notice:

- We query **by ID** (`.ids(1234)`) — each boss attack has its own projectile ID. You learn them with the debug overlay.
- `(Client.getClientCycle() - p.getEndCycle()) * 20L` gives you a number relative to landing. **Negative** = "lands in N ms" (still in flight), **positive** = "landed N ms ago." Boss flickers in our codebase (`ZukWithUsNM`, `AraxxorWithUs`) trigger when `landingInMs` is in a small negative window like `-300 < landingInMs < 0` — that's the lead-time you need to swap prayers before the hit registers.

</ContentBlock>

<ContentBlock title="Animations — what something is doing">

Every action in the game has an **animation ID**. Player swinging an axe = one ID. Player drinking a potion = another. Boss winding up its special = another.

Two flavors:

- **Animation** — attached to a character (player, NPC, monster). Read the character's `getAnimationId()`.
- **Spot animation** — a graphic that plays at a *location* without a character (e.g., a magic rune appearing on the ground, an explosion mark).

The single most-used idiom is **`getAnimationId() == -1`**, which means *the character isn't doing anything right now*. You'll see it in two shapes:

```java
// Wait until I'm idle (e.g. finished chopping):
Execution.delayUntil(12000, () -> Client.getLocalPlayer().getAnimationId() == -1);

// "Am I currently doing anything?" — for skill/combat detection:
boolean busy = player.isMoving() || player.getAnimationId() != -1;
```

For specific actions, compare against known IDs (most of the time, the simple `!= -1` check above is enough):

```java
LocalPlayer player = Client.getLocalPlayer();
boolean isHarvesting =
        player.getAnimationId() == 21228
     || player.getAnimationId() == 36249
     || player.getAnimationId() == 36250
     || player.getAnimationId() == 31055;
```

Animation IDs change between bosses, skills, and outfits — you'll be looking them up constantly.

</ContentBlock>

<ContentBlock title="Inventory, bank & equipment — what you have">

Your **inventory** (the backpack), the **bank**, and your **equipped gear** are all readable. The most-used helpers in our scripts:

```java
if (Backpack.isFull()) {
    // walk to bank
}

int axes = Backpack.getCount("Dragon hatchet");

Item weapon = Equipment.getItemAt(EquipmentSlot.WEAPON);
```

Common questions you'll answer with these:

- **Backpack** — "Is my backpack full? Do I still have logs to bank? Do I have a tinderbox?"
- **Bank** — "Do I have stamina potions in the bank to withdraw? How many planks left?"
- **Equipment** — "Am I wearing the right weapon for this monster?"

For specific item *queries* by ID/predicate, use `InventoryItemQuery` — same shape as `SceneObjectQuery` but for items.

</ContentBlock>

<ContentBlock title="Skills & XP — your stats">

The `Skills` API tells you levels and XP:

```java
int miningLevel = Skills.MINING.getLevel();
int miningXp    = Skills.MINING.getExperience();
```

Use this when you need to:

- Gate behavior on level ("Don't try to mine runite until level 85").
- Track session XP for an in-script counter.
- Detect when training is "done" (target level reached).

For a *push-based* version — "tell me whenever XP changes" — see Events below.

</ContentBlock>

<ContentBlock title="Interfaces & components — what's on screen">

Every UI panel in the game (bank window, dialog box, quest journal, settings) is an **interface** made up of **components**. Each component has a position, text, and sometimes buttons or input fields.

```java
if (Interfaces.isOpen(517)) {
    // confirm option
}

Component continueBtn = ComponentQuery.newQuery(517)
    .text("Click here to continue")
    .results()
    .first();
```

You'll reach for interfaces when your script depends on the **UI** being in a specific state — most commonly:

- The **bank** is open before depositing/withdrawing.
- A **dialog** is on screen so you can advance it.
- The **deposit/withdraw mode** of a panel is the one you want.

Interface IDs (like `517` above) are also discoverable through the debug overlays in the next chapter.

</ContentBlock>

<ContentBlock title="Player & position — where am I, what am I doing">

Your own character is a `LocalPlayer` — same shape as any `Player`/`Npc`, so you read animation, position, target, and hitsplats off it the same way:

```java
LocalPlayer me = Client.getLocalPlayer();
Coordinate pos = me.getCoordinate();
int anim       = me.getAnimationId();    // -1 means idle
```

For "am I in the right zone?" use an `Area`:

```java
Area minePit = new Area.Rectangular(
    new Coordinate(3290, 3370, 0),
    new Coordinate(3300, 3380, 0));

if (!minePit.contains(me)) {
    // walk back to the mine
}
```

`Movement` and `NavPath` (the action side) build on top of these reads — your script asks "where am I?" with `Coordinate`, then asks `Movement` to walk somewhere new.

</ContentBlock>

<ContentBlock title="Events — push notifications instead of polling">

Everything above is **pull**: your `onLoop()` runs and asks the game "what's the state right now?" Sometimes you'd rather the game *tell you* the moment something happens — that's an **event**.

```java
EventBus.subscribe(ChatMessageEvent.class, e -> {
    if (e.getMessage().contains("You receive a Clue scroll")) {
        println("Clue dropped — switch state to bank.");
    }
});
```

The events you'll hit most often:

- **`ChatMessageEvent`** — anything in the game chat.
- **`SkillUpdateEvent`** — XP gained / level up.
- **`InventoryUpdateEvent`** — items added or removed from the backpack.

Two rules of thumb:

- **Subscribe in your constructor or `initialize()`**, not inside `onLoop()` (you'd subscribe over and over).
- **Don't run game queries directly in an event handler** — handlers fire on a different thread. Use them to set a flag your `onLoop()` reads next tick.
- **Don't run execution delays inside the events**.

</ContentBlock>

<ContentBlock title="Putting them together">

Most scripts boil down to a tiny decision loop using these primitives:

> *Look at varbits / inventory / NPC animations / projectiles to figure out what's happening, then interact with a scene object, NPC, or interface to do something about it.*

A toy example for a woodcutter:

1. **Look** — query for the nearest tree. Read my own animation ID.
2. **Decide** — if I'm idle (`getAnimationId() == -1`) and there's a tree, click it. If `Backpack.isFull()`, switch to banking instead.
3. **Repeat** — `onLoop()` fires again ~100 ms later.

That's it. Boss scripts add more checks (projectiles, varbits, target switches) but the shape is identical.

</ContentBlock>

You now know **what** the game exposes. The next chapter shows you the on-screen tools BotWithUs gives you for **finding** the specific IDs and values your script needs. After that, we'll look at the cache dump, which contains almost everything the game has to offer.

**Next:** [debug overlays →](./07-debug-overlays.md)
