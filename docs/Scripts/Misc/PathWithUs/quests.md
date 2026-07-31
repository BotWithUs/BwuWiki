---
title: Quest Coverage
description: Every quest PathWithUs automates — the 78 quest tasks built into the predefined pathway and the 46 standalone quests you can add yourself from the task catalog.
slug: /PathWithUs/quests
---

import React from 'react';
import ContentBlock from '@site/src/components/ContentBlock';

:::::hidden

## Overview

:::::

<ContentBlock title="Two Tiers of Quest Support">

> PathWithUs ships its quest automation in **two tiers**. Both tiers are fully supported script code — the difference is only whether the task is queued for you or whether you queue it yourself.
>
> - **Predefined pathway quests — 78 quest-catalog tasks.** These are registered into the default account build and run automatically, in a fixed order, alongside the skilling, shopping and Necromancy tasks. You do not add them; loading the pathway queues them for you.
> - **Catalog-only quests — 46 quests.** These are registered as catalog entries only. They appear in the Add Task UI and under **Load quests only**, but they are deliberately **kept out of the predefined pathway** so they are queued **one at a time rather than chained**.
> - **Declared but never registered — 0.** Nothing in the quest catalog is unreachable from the UI.
>
> **Why the split exists.** The predefined pathway is one continuous progression: every quest in it feeds the next step, and each reward lamp is spent the moment it drops. The catalog-only quests sit outside that progression — they are optional, they often need prerequisites the pathway does not build (skill levels, prior quests, specific banked items), and several need gear banked or the backpack emptied before they start. Chaining them blindly into the account build would break the pathway's item flow, so they are left for you to slot in where you want them.

</ContentBlock>

<ContentBlock title="Reading the Coverage Notes">

> Where the tables mention automation coverage, it means one of three things:
>
> - **Fully wired** — the whole progress ladder is mapped, so the quest is automated from start to finish (aside from any manual step listed for it).
> - **Wired with gaps** — the whole walkthrough is automated, but a few progress values in the middle of the ladder have no handler yet. If the quest ever comes to rest on one of those the task waits and logs it, so finish that one step by hand and the script picks the quest back up.
> - **Wiring in progress** — the task drives the steps that have been mapped so far and the rest are still being mapped from live runs, so expect to finish those by hand.
>
> Anything in the **Manual steps** column is a step the script deliberately does **not** do. Handle it yourself and the script picks the quest back up.

</ContentBlock>

:::::hidden

## Pathway Quests

:::::

<ContentBlock title="Quests in the Predefined Pathway">

> Listed in pathway execution order. The quest rows are the quests themselves; the rows between them are the support tasks the pathway queues alongside each quest — reward-lamp rubs, banking stops, equips and lodestone activations — because the pathway spends every reward as it drops rather than hoarding it.
>
> Only **two** pathway quests carry a manual note: **Missing, Presumed Death** and **Sheep Herder**. Everything else in this list runs unattended.

| # | Quest | Requirements | Notes |
|---|---|---|---|
| 1 | Navigate to Abbey of St. Elspeth Citharede | none | Travel step queued ahead of One Piercing Note |
| 2 | One Piercing Note | none | — |
| 3 | One Piercing Note — Prayer XP lamp | Prayer XP lamp | Rubbed and confirmed; skill-locked, no skill choice |
| 4 | The Blood Pact | none | Short combat quest in the Lumbridge Catacombs |
| 5 | The Blood Pact — Caitlin's staff | Caitlin's staff | Wielded and set to auto-cast; re-runs if the staff or auto-cast is cleared |
| 6 | The Blood Pact — Combat XP lamp | Combat XP lamp | Rubbed and confirmed |
| 7 | The Restless Ghost | none | — |
| 8 | The Restless Ghost — Prayer XP lamp | Prayer XP lamp | Skill-locked lamp |
| 9 | Cook's Assistant | none | — |
| 10 | Archaeology Tutorial | none | Varrock Dig Site |
| 11 | Equip Archaeology journal | Archaeology journal | Post-tutorial equip |
| 12 | Anachronia Base Camp Tutorial | none | — |
| 13 | Anachronia clay workers | none | Sets 10 base-camp workers to gather clay |
| 14 | Violet is Blue | none | — |
| 15 | Violet is Blue — Lamp of joy | Lamp of joy | Spent on Farming |
| 16 | Violet is Blue — Lamp of wonder | Lamp of wonder | Spent on Farming |
| 17 | Violet is Blue — Lamp of laughter | Lamp of laughter | Spent on Farming |
| 18 | Leave the Land of Snow | Archaeology journal | Teleports out to the Archaeology Campus |
| 19 | Violet is Blue Too | none | — |
| 20 | Violet is Blue Too — Lamp of joy | Lamp of joy | Spent on Archaeology |
| 21 | Violet is Blue Too — Lamp of wonder | Lamp of wonder | Spent on Construction |
| 22 | Violet is Blue Too — Lamp of laughter | Lamp of laughter | Spent on Summoning |
| 23 | Leave the Land of Snow | Archaeology journal | Teleports out to the Archaeology Campus |
| 24 | Deposit backpack, Archaeology Campus | none | Empties the backpack after the lamps |
| 25 | Wolf Whistle | none | Pikkupstix, unlocks Summoning |
| 26 | Wolf Whistle — Summoning XP lamp | Summoning XP lamp | Skill-locked lamp |
| 27 | Druidic Ritual | none | — |
| 28 | Death Plateau | none | — |
| 29 | Death Plateau — 3 Reward lamps | Reward lamp ×3 | Spent on Smithing |
| 30 | Supply and Demand deliveries | none | 5 Troll Warzone deliveries, then the 15 reward lamps are used |
| 31 | What's Mine is Yours | none | — |
| 32 | What's Mine is Yours — Gofannon amulet | Gofannon amulet | Smithing XP via the amulet's Gain xp option |
| 33 | Stronghold of Security (floors 1-4) | none | Rewards 10,000 coins |
| 34 | Empty backpack, Burthorpe | none | Fresh backpack before the second Supply and Demand pass |
| 35 | Supply and Demand deliveries (2nd pass) | none | Runs after Necromancy training — the higher combat level unlocks more trips |
| 36 | Gunnar's Ground | none | — |
| 37 | Gunnar's Ground — Antique lamp | Antique lamp | Spent on Construction |
| 38 | Demon Slayer | none | Only counted complete once the Combat XP lamp is actually in hand |
| 39 | Demon Slayer — Combat XP lamp | Combat XP lamp | Spent on Ranged |
| 40 | Re-equip Death guard | Death guard | Re-equipped after the lamp |
| 41 | Ernest the Chicken | none | — |
| 42 | Swept Away | none | — |
| 43 | Swept Away — Bowl (goulash) | reward Bowl | Repeats Herblore XP until Maggie's cauldron can no longer be filled |
| 44 | May's Quest Caravan 25 QP reward | none | Claims the 25 Quest Point reward and the Lorehound pet |
| 45 | New Foundations | 146 planks, 130 oak planks, 386 limestone bricks — pre-stocked by earlier pathway tasks | Establishes Fort Forinthry |
| 46 | Withdraw redberry pie | Redberry pie ×1 | Falador West bank. Skips itself if the pie has already been handed to Thurgo, so a rebuilt queue never stalls |
| 47 | Withdraw 2 iron bars | Iron bar ×2 | Burthorpe furnace metal bank. Also skips itself if the quest is already done |
| 48 | The Knight's Sword | Pie and 2 iron bars withdrawn by the two tasks above | — |
| 49 | Knight's Sword — Smithing XP lamp | Smithing XP lamp | Skill-locked lamp |
| 50 | Empty backpack, Burthorpe | none | Post-quest cleanup |
| 51 | Travel to Ardougne (wilderness levers) | none | Edgeville lever, Deserted Keep, Wilderness lever, Ardougne Castle |
| 52 | Activate the Ardougne lodestone | none | — |
| 53 | Player-owned farm tutorial | 17 Farming, 20 Construction | Daily farm runs themselves are not queue tasks |
| 54 | Activate the Seers' Village lodestone | none | — |
| 55 | Activate the Catherby lodestone | none | — |
| 56 | Activate the Yanille lodestone | none | Unlocked before the Castle Wars teak run |
| 57 | Murder on the Border | 12 willow frames and 6 stone wall segments in the fort bank | Builds Command Centre tier 1 mid-quest. The build plan only appears on the blueprints once the quest is started |
| 58 | Murder on the Border — Construction lamp | Construction XP lamp | Skill-locked lamp |
| 59 | Murder on the Border — Prismatic lamp | Prismatic XP lamp | Deliberately **destroyed** so it can be reclaimed from Diango and spent later |
| 60 | Empty backpack, Fort Forinthry | none | So the next quest's ectoplasm and food withdrawal starts fresh |
| 61 | Unwelcome Guests | 14 maple frames and 6 stone wall segments in the fort bank. 50 Construction, 10 Slayer, Murder on the Border first | Builds Guardhouse tier 1 mid-quest |
| 62 | Goblin Diplomacy | 3 × Goblin mail plus Aggie's Red, Yellow and Blue dye, in the backpack before starting | — |
| 63 | Goblin Diplomacy — reward lamp | Lamp | Spent on Crafting |
| 64 | Monk's Friend | A jug — bought by an earlier pathway task | — |
| 65 | Party Pooper (monastery balloon) | none | Ardougne area task: burst a Party Balloon at the monastery party after the quest |
| 66 | Earth talisman → Wicked hood | Wicked hood, withdrawn earlier in the pathway | Kills the level-2 Giant spiders below the Clock Tower for an Earth talisman, then feeds the hood |
| 67 | Missing, Presumed Death | none | **Manual step below.** The citadel lever and light combat puzzle (7 wights) is not automated |
| 68 | MPD — Combat lamp | Combat lamp | 1,500 XP into Strength |
| 69 | MPD — Prayer lamp | Prayer lamp | Skill-fixed lamp, rub and confirm only |
| 70 | MPD — Agility lamp | Agility lamp | Skill-fixed lamp, rub and confirm only |
| 71 | Gertrude's Cat | Items and bait withdrawn by earlier pathway tasks; a sardine is fished if needed | Find Fluffs at the Lumber Yard |
| 72 | Mine 25 pure essence | 25 pure essence produced | Via Aubury's essence-mine teleport, for Priest in Peril |
| 73 | Priest in Peril | 25 pure essence, Bucket | Grants Morytania access |
| 74 | Activate the Canifis lodestone | none | Needs the Morytania access from Priest in Peril |
| 75 | Priest in Peril — Prayer XP lamp | Prayer XP lamp | Skill-locked lamp |
| 76 | Sheep Herder | Plague outfit and Cattleprod, equipped by the script | **Manual step below.** The script equips the kit, waits for the herding, then feeds, burns bones and finishes |
| 77 | Empty backpack, Ardougne | none | Dumps the plague outfit, Cattleprod and leftovers |
| 78 | Hazeel Cult | none — no item or skill requirements | Carnillean mansion, East Ardougne. **Last entry in the predefined pathway** |

</ContentBlock>

<ContentBlock title="Pathway Manual Steps">

> - **Missing, Presumed Death** — the citadel lever and light combat puzzle (7 wights) is not automated. Clear it yourself; the script resumes after the "Wight defeated: 7/7" chat message.
> - **Sheep Herder** — prod the four Sick-looking sheep into the pen yourself. The script equips the plague outfit and Cattleprod, waits for the herding, then feeds the sheep, burns the bones and finishes the quest.

</ContentBlock>

:::::hidden

## Catalog-Only Quests

:::::

<ContentBlock title="Catalog-Only Quests (not in the predefined pathway)">

> All 46 of these are fully supported and selectable from the task catalog — they are simply not queued for you. Add them yourself, one at a time, wherever they suit your account. Read the **Requirements** column before you queue one: several quests never bank, so the items have to be carried in, and a few need gear banked before they start.

| Quest | Requirements | Manual steps | Notes |
|---|---|---|---|
| The Tourist Trap | Bronze bar ×1, Feather ×10, Desert shirt ×1, Desert robe ×1, Desert boots ×1. 10 Fletching, 20 Smithing | — | Items must be in the **backpack** before starting — the quest never banks |
| Waterfall Quest | Rope ×1, Air rune ×6, Water rune ×6, Earth rune ×6. No skill or quest requirements | — | Items go in the **bank**; they are withdrawn mid-quest at Ardougne south bank and your food is kept |
| Merlin's Crystal | Bread ×1, Bucket ×1, Bat bones ×1 | — | Items go in the **bank** at Seers' Village; tinderbox and insect repellent on the toolbelt. Fights Sir Mordred with no familiar and no bleeds or poisons. The black candle is made in-quest at Catherby |
| Holy Grail | Excalibur ×1 **in the bank**. 30 Attack, Merlin's Crystal first | — | The Entrana trip empties backpack and equipment mid-quest, then Excalibur is withdrawn for the Black Knight Titan. Reclaim it from the Lady of the Lake if it is lost |
| Stolen Hearts | none | — | The only combat is three level-2 thugs, handled by auto-retaliate |
| Diamond in the Rough | Stolen Hearts completed first — **not enforced by the task**, so keep it after Stolen Hearts in your queue | — | The only combat is level-5 Apep and Heru |
| The Jack of Spades | Diamond in the Rough completed first | — | Pure talk and walk. The gate step unequips your weapon and shield |
| Dead and Buried | 14 Acadia frames and 6 Stone wall segments in the fort bank. Unwelcome Guests first | Solve the dream boulder and pressure-plate puzzle yourself — the script resumes once the dream is done | Builds the Ranger's Workroom tier 1 mid-quest. The sliding map puzzle **is** solved automatically |
| A Shadow over Ashdale | Armour and food. F2P Novice, no requirements | — | All combat scales and the Agoroth fight is deathsafe. Scouts drop healing Minnow. Needs **7 free backpack slots** at the final Gudrik hand-in |
| A Soul's Bane | Melee armour, food, antipoison | — | Instanced — deaths send unprotected items to a gravestone outside the rift. The anger-room weapons are two-handed, so enter with your **weapon and shield slots free** |
| Broken Home | None — gear is unusable inside | — | Bank all items and equipment at the deposit box by the mansion gates before starting. The script is a **one shot**: start it without continuing from checkpoints, on a stable connection and ideally a fresh client restart. Only the Mystery meat found inside heals. Puzzles are solved automatically |
| Broken Home (replay) | As above | — | Never reports itself as already complete, so it runs once per queued task. Use it if Broken Home is already done, e.g. for the weekly. Reset the quest and start standing in front of the mansion's front door. Same one-shot and fresh-client caveats |
| Visions of Havenhythe | None. F2P Novice, no requirements | — | The only combat is ten level-1 Juvenile boulder crabs. Needs **1 free backpack slot** at the start and **10 free slots** for the limestone |
| Hearts of Sanguine | Visions of Havenhythe completed first | — | Novice, 1 quest point. Brew antisanguine, smith a havensilver greatsword, slay the Sanguine heart |
| Rune Mysteries | none | Luring can be slow — stopping and doing it by hand is suggested, though the script will try to finish it | Heavily instanced. **Fully wired** — the per-progress checkpoints are mapped from 0 through 160 (completion is 170). This is **not** Rune Mythos, which is the Necromancy quest |
| Witch's House | Combat gear and food | If the witch's garden timing desyncs, sneak to the fountain and shed yourself — the script resumes | Novice, 4 quest points. Four-form Witch's experiment (chicken, giant spider, bear, wolf) all weak to water magic. **Wired with gaps** — the magnet, the cheese, the garden and the ball return are mapped (progress 0, 1, 2, 3 and 6 of the 0-6 ladder); values 4 and 5 have no handler, so the task waits if the quest rests on one |
| Dragon Slayer | 33 Quest Points to enter the Champions' Guild | — | Experienced, 2 quest points. **Wired with gaps** — the Guild Master, Oziach, the map pieces, the ship-deck repair, Ned's sail to Crandor, the Crandor dungeon and Elvarg, and the finish with Oziach are all mapped (progress 0, 1, 2, 3, 6, 7, 8 and 9 of the 0-9 ladder); values 4 and 5 have no handler |
| Jungle Potion | Herblore 3 | — | Members, 1 quest point. **Fully wired** — the whole 0-10 ladder is mapped (completion is 12): all five herbs are searched for, cleaned and handed back to Trufitus in turn, including the rogue's purse down the Pothole Dungeon |
| Shilo Village | A chisel **in the backpack** (a toolbelt chisel is rejected), rope, torch, tinderbox, 3 regular bones, bronze wire. Agility 32, Crafting 20, Jungle Potion first | Add Surge to your action bar before running it | Members, 2 quest points. Rope, torch and bones are consumed. Three level-53 Nazastarool forms — the ghost form needs a weapon that can hit ghosts. **Wired with gaps** — twelve progress values (0, 1, 4, 5, 7-14 of a 15 completion) cover the mound, the fissure, the temple finds, Bervirius's tomb, the crypt and the Nazastarool fight; values 2, 3 and 6 have no handler |
| One Small Favour | Steel bar ×4, Bronze bar ×1, Iron bar ×1, Empty pot ×1, Clean marrentill ×1, Clean harralander ×1, Vial of water ×1. Crafting 25, Herblore 18 (20 ironman), Agility 36, Smithing 30, 20 Mining if ironman. Shilo Village and Druidic Ritual first | — | Items must be in the **backpack** — the quest never banks. Also bring a lockpick, soft clay, around 2,000 coins or spare cut gems, and combat gear for Slagilith (63) and three dwarf gang members (35). **Fully wired** — 54 progress values from 0 to 275 are mapped (completion is 280), covering the whole favour chain from the blunt hatchet to the returned logs |
| Lost City | Any (unstrung) bow ×1, Bowstring ×1, Shaft ×100, Feather ×100, arrowheads ×100. Crafting 31, Woodcutting 36 | — | Entrana allows no weapons or armour, so bank your gear before you sail. The bow and arrows are built inside the dungeon and any fletchable tier works. Bring food for the level-63 Dramen tree spirit. **Fully wired** — the complete 0-5 ladder is mapped (completion is 6) |
| The Fremennik Trials | Raw shark ×1 and at least 5,250 coins. Crafting 40, Woodcutting 40, Fletching 25 | Talk to the Warrior before the fight — the only manual step | Members, 3 quest points. The assist system does not cover the Fletching step. Thorvald's fight must be done with **no weapon and no armour**: bank your gear, bring food and rings of recoil. Keep at least **10 free backpack slots** for the reward lamps before the final vote |
| Buyers and Cellars | Logs ×1. Thieving 5 | — | Novice, 1 quest point, members. Tinderbox on the toolbelt, hatchet optional. **Fully wired** — the quest start plus a single quest-body case that carries the rest of the quest, from Chief Thief Robin through the complex key to the golden chalice |
| Plague City | Dwellberries ×1, Rope ×1, Bucket of water ×4, Chocolate dust ×1, Bucket of milk ×1, Snape grass ×1. No skill or quest requirements | — | Novice, 1 quest point, members. Spade on the toolbelt. **Carry everything in before you start — West Ardougne has no bank and no lodestone.** The buckets are consumed on the mud patch and the rope on the grill. **Fully wired** — twenty progress values (0-10 and 20-28 of a 29 completion) cover Edmond, the mud patch, the grill, the climb into West Ardougne, the Rehnisons, Bravek's hangover cure and the cell rescue |
| Biohazard | Priest gown ×2, plus weapon and armour. Plague City first | — | Novice, 3 quest points, members. Includes a level-33 mourner fight. **Wired with gaps** — twelve progress values (0-7, 10, 12, 14, 15 of a 16 completion) cover Elena, Jerico, the pigeon cage, Omart's rope ladder, the cauldron, the Mourner Headquarters, the vials at the Dancing Donkey, Guidor and King Lathas; values 8, 9, 11 and 13 have no handler |
| Underground Pass | Rope ×1, Shortbow ×1, arrow ×5, plus food and armour. Ranged 25, Biohazard first | — | Intermediate, 5 quest points. Bring a real shortbow and arrows in the backpack; a plank is picked up inside. **High Agility is recommended — the script may not recover from every obstacle.** Expect level 78-81 demons, paladins and Kalrag, so a high combat level and magic gear are recommended and death is possible |
| Fight Arena | 5 coins, combat gear and plenty of food. No skill or quest requirements | — | Experienced, 2 quest points. Four back-to-back fights: Khazard ogre (64, weak to air), Khazard scorpion (50, weak to crush), Bouncer (77), and optionally General Khazard (84, killed twice, giant form 13,150 LP). **Ranged is not recommended. Keep 3 backpack slots free at the start.** **Wired with gaps** — every leg of the quest is automated: ten progress values (0, 1, 2, 3, 5, 7, 9, 10, 12, 13 of a 14 completion) cover the quest start, the borrowed armour, the prison, Khali's brew and the keys, Sammy's cell, all four fights and the return to Lady Servil; values 4, 6, 8 and 11 have no handler |
| Sheep Shearer | Nothing brought — the wool is sheared and spun in-quest | — | **Miniquest**, F2P, no requirements. Keep at least **20 free backpack slots**; the rams in the pen can attack while you shear |
| Tree Gnome Village | Logs ×6 or a hatchet, plus combat gear and food. No requirements | — | Novice, 2 quest points. **Fully wired.** The level-53 Khazard warlord is melee-only and weak to air, with safespots along the Ardougne wall; the level-49 Khazard commander can be walked past. The third tracker gnome gives the ballista x-coordinate as a riddle, so expect some missed shots |
| The Grand Tree | Nothing required — every quest item is handed over during the quest. Optional 1,000 coins for Femi. 25 Agility | — | Experienced, 5 quest points. Keep several backpack slots free (bark sample, translation book, scroll, journal, lumber order, key, invasion plans, 4 bundles of twigs). Bring combat gear, food and **Protect from Melee for the level-98 black demon**. The level-28 Foreman can be talked past. **Fully wired** — sixteen progress values (0 to 150 in tens, completion at 160) cover the bark sample, the scroll hand-back, Glough, the king, Charlie, the journal and accusation, the Karamja glider and the foreman, Femi, Anita's key and the chest, the invasion plans, the pillar spells, the trapdoor demon and the Daconia rock |
| Raksha, the Shadow Colossus | Food if your max LP is under 1,000. Anachronia base camp tutorial first | — | Novice, awards **0 quest points**. No combat and no quest items. Siphoning costs 200 LP five times. A Slayer (master) cape teleports to Laniakea, otherwise the Orthen device to Xolo City. Completing it is required to start Azzanadra's Quest. **Wiring in progress** — the quest start, the five shadow-anima siphons, the sealed door and the Zaros conversation are mapped (progress 0, 15, 20, 25, 30, 35, 40 and 50 of a 100 completion); everything past Zaros is not mapped yet |
| Impressing the Locals | Coins ×1000 for Trader Stan's charter fare. The **Port Sarim and Draynor lodestones must be activated** — they are how the run gets back off the player-owned port | — | Novice, 1 quest point, no combat. A Meg conversation fires on the way in. **Fully wired.** Rewards access to The Arc, the Stan-ing Around rest animation, Flippers McGraw as a crew member, and the Elite Dungeons chest teleport |
| Benedict's World Tour | Nothing brought, nothing picked up. No requirements | — | **Miniquest**, Intermediate, 0 quest points. Sixteen souvenirs, and the **last seven are members-only**. The crystal is inside the low-level Runespan, cinnamon is through the Polypore Dungeon cave, and the frogburger is on Mazcab. **Fully wired.** Rewards experience lamps at 4, 8, 9, 12 and 16 souvenirs |
| Imp Catcher | Bowl of hot water ×1, plus combat gear and a little food | Make the bowl of hot water yourself beforehand — fill a bowl and use it on a range, e.g. the Lumbridge Castle kitchen. It is **not** made during the run | Novice, 1 quest point, F2P. Level-5 choleric imp (200 LP, max hit 16). Keep at least **5 free backpack slots** and **do not bank the beads mid-run**. **Fully wired.** Rewards the amulet of accuracy, an 875 Magic XP lamp, and the ability to buy further amulets for 5,000 coins |
| Vampyre Slayer | Beer ×1, or at least 2 coins to buy one, plus combat gear and food | — | Novice, 3 quest points, F2P. Garlic is collected in-run from Morgan's drawers — keep carrying it, it weakens the Count. Count Draynor is level 28 with 2,000 LP and a max hit of 300, weak to fire, and the **stake and stake hammer must be in your backpack or he heals to full**. The undead trees swipe at passers-by. **Fully wired** — all three progress values are mapped: the quest start, both Harlow talks, collecting the stake and hammer, the Count Draynor fight and the report back to Morgan |
| You Are It | Rope ×1. There's No Place Like Home first. Members only | Keep the emote window open | Novice, 1 quest point. **Fully wired.** The task is only marked complete once the awarded Puzzle casket has been opened and its sliding puzzle solved — tying the solver to quest state keeps it away from ordinary treasure-trail caskets |
| Shield of Arrav | Coins ×20 — 10 for Baraek and 10 for Charlie the Tramp — plus combat gear. No requirements | — | Novice, 1 quest point, F2P. Originally a two-player quest; in RS3 one account joins both gangs solo. Keep around **6 backpack slots free** and **do not destroy either shield half**. **Fully wired.** Rewards 1,200 coins, and members can later claim 5 kudos and a 1,000 XP antique lamp from Historian Minas |
| Witch's Potion | Burnt meat ×1, Eye of newt ×1, Onion ×1 | — | **Miniquest**, F2P, no quest points. The rat's tail is collected in-run from a level-1 rat in the Rimmington archery shop, so keep a slot free. Burnt meat: cook raw meat, then cook it again until it burns on the range north of Hetty's. Eyes of newt are 3 gp at Betty's and onions grow in the field north of Rimmington. **Fully wired.** Rewards 325 Magic XP |
| Pirate's Treasure | Coins ×60, White apron ×1. No requirements | — | F2P, 2 quest points. 30 gp covers the Karamjan rum and 30 the spare ferry fare if the Karamja lodestone is locked. Keep around **14 backpack slots free**. A level-4 Gardener attacks during the Falador Park dig. The whole quest is item-driven, keyed on the rum, chest key and pirate message. Rewards a casket with 450 coins, an emerald and a gold ring |
| Clock Tower | Bucket of water ×1, or equipped ice gloves. No requirements | — | Members, 1 quest point. The four cogs are carried one at a time. Level-67 ogres guard the red cog and level-28 hobgoblins roam. **Fully wired** — the start, the cog hunt (dispatched by which cog you are carrying), all four cog placements and the report back to Kojo are mapped. Rewards 500 coins |
| Observatory Quest | Plank ×3, Bronze bar ×1, Molten glass ×1. No requirements | Turn in the observed constellation manually | Members, 2 quest points. **Fully wired** — the complete 0-6 ladder is mapped (completion is 7): the three material deliveries, the lens mould, the cast lens and the trip to the observatory |
| Dwarf Cannon | None — Captain Lawgof provides the toolkit. No requirements | — | Members, 1 quest point. The Goblin Cave holds aggressive goblins, so low-level accounts should bring armour and food. **Fully wired** — the complete 0-10 ladder is mapped (completion is 11): the wall repairs, the tower climb, the dwarf remains, the Goblin Cave and Lollk, the cannon repair and Nulodion. Rewards 750 Crafting XP, the ammo mould, the dwarf multicannon and cannonball smithing |
| Murder Mystery | Pot of flour ×7. No requirements | — | Members, 3 quest points. The whole investigation runs as one item-driven chain. **The script never fills pots at the mansion kitchen**, so bring them, and leave 11-16 free backpack spaces. The killer and thread colour are random per account. Rewards 2,000 coins and 1,406 Crafting XP |
| Rune Memories | None — all quest items are given during the quest. Rune Mysteries first | The finale's timed flashing-beam runes are retried automatically, but may need a hand if the timing never lands | Members, Novice, 1 quest point. Needs **14 free backpack spaces**. **Fully wired** — the progress checkpoints are mapped from 0 through 90 (completion is 120): the rune charges, all four memories and their reports, the documents, the ritual circle, Ellaron, the finale beams and the finish talk. Rewards 300 Magic and 300 Runecrafting XP and the First tower robes |
| Myths of the White Lands | None. No requirements | If an ice slide lands wrong the script stops and says so — log out and back in to restart that cavern from its entrance and it picks up again | F2P, Novice, 2 quest points. Ported whole from v1, **fully wired**. The optional hidden Crafting 30, Agility 55 and Woodcutting 80 XP is skipped. Rewards a 500 XP antique lamp and Land of Snow access |
| Rag and Bone Man | Coins ×40, Empty pot ×8, Logs ×8, Rope ×1. No requirements | — | Members, 2 quest points. **Wear a light source (candle or bullseye lantern) and a spiny helmet** — the big frog leg is fought for in the Lumbridge Swamp Caves, with the rope for the descent, the light for the darkness and head protection against wall beasts. The hunt crosses Lumbridge, Barbarian Village, Varrock, Karamja and the Coal truck mine. The bone arc is item-driven; the final stretch is **wiring in progress**. Rewards 500 Cooking XP and 500 Prayer XP |

</ContentBlock>

<ContentBlock title="Catalog Quests That Need You at the Keyboard">

> These are the catalog-only quests with a documented manual step. Everything else in the catalog runs unattended within its stated coverage.
>
> - **Dead and Buried** — solve the dream boulder and pressure-plate puzzle yourself. The sliding map puzzle is automatic.
> - **The Fremennik Trials** — talk to the Warrior before the fight.
> - **Imp Catcher** — make the bowl of hot water before you queue the task.
> - **Observatory Quest** — turn in the observed constellation manually.
> - **Rune Mysteries** — luring can be slow; handling it by hand is suggested.
> - **Rune Memories** — the finale's timed beam runes may need help if the timing never lands.
> - **Witch's House** — if the garden timing desyncs, sneak to the fountain and shed yourself.
> - **Myths of the White Lands** — if an ice slide lands wrong, log out and back in to restart that cavern.
> - **You Are It** — keep the emote window open.
> - **Shilo Village** — add Surge to your action bar first.

</ContentBlock>

<ContentBlock title="Not Currently Selectable">

> **Nothing.** Every quest declared in the quest catalog is registered exactly once — 78 into the predefined pathway and 46 as catalog-only entries — so there are no quests in the script that you cannot reach from the UI.
>
> Two things are worth knowing about the boundaries of that count:
>
> - The Necromancy chain quests (Necromancy, Kili Row, Rune Mythos) also run inside the predefined pathway, but they are registered from the Necromancy catalog rather than the quest catalog, so they are not part of the 78 above.
> - A handful of source classes are shared puzzle and progress helpers rather than quests in their own right (the Broken Home book, plate and statue puzzles, for example) and are never registered as standalone tasks.

</ContentBlock>

:::::hidden

## Adding a Catalog Quest

:::::

<ContentBlock title="Adding a Catalog-Only Quest to Your Queue">

> 1. Open the **Add Task** UI and browse the task catalog. Catalog-only quests appear there alongside the pathway tasks.
> 2. Alternatively use **Load quests only**, which loads the quest catalog instead of the full predefined pathway.
> 3. Add the quest you want. Queue them **one at a time** rather than chaining a long list — that is exactly why they are kept out of the predefined pathway.
> 4. Respect the prerequisite chains yourself. The tasks do not enforce them, so order matters: Stolen Hearts before Diamond in the Rough before The Jack of Spades; Plague City before Biohazard before Underground Pass; Jungle Potion before Shilo Village before One Small Favour; Visions of Havenhythe before Hearts of Sanguine; Merlin's Crystal before Holy Grail; Unwelcome Guests before Dead and Buried; Rune Mysteries before Rune Memories.
> 5. Set the items up yourself. **Catalog-only quests do not bank for you** — unlike the pathway, they will not gather their own supplies, so prepare your backpack and gear before you queue one, using the **Requirements** column above. A quest that banks as part of its own walkthrough is the only exception. A few (Broken Home, Holy Grail's Entrana leg, The Fremennik Trials' Thorvald fight) want your gear banked before you start.
> 6. The catalog also exposes **Load bank preset 1-18** tasks. Queue one between quests to swap gear and supplies mid-chain — each of them teleports to Burthorpe first.

</ContentBlock>

<ContentBlock title="Related Pages">

> - [Predefined Pathway](./pathway.md) — the full ordered account build, including the skilling, shopping, Fort Forinthry and Necromancy tasks around these quests.
> - [PathWithUs](./index.md) — script overview, setup and settings.

</ContentBlock>
