---
title: Treasure Trails With Us
description: Completes any type of clue scrolls.
# Slug is the URL path for this page.
slug: /TreasureTrailsWithUs
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="Treasure Trails With Us" version="v1.0.0" author="ARMAR" skill="Money Making">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - 2 days sub for 15 Coins.

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - Solves any tier of clue scroll easy (~40+/hr)/medium(~30+/hr)/hard(~20+/hr)/elite(10+/hr)/master(10+/hr).
> - Above estimates will vary and depend on your preset (You can start the script with literarly nothing or a full inventory of teleport items)
> - Locates and excavates powered tetracompasses.
> - For emote clues you can either have a hidey hole built/filled for that step OR have the items in bank OR Allow using emote skipping tickets in settings & have skipping tickets in preset.
> - If you have a hidey hole built but not filled it will fill that hidey hole for you assuming you have the items required to fill it in bank.
> - At any point if your character is too low on hp (below 40%) it will use war's retreat teleport spell & heal at the bank.
> - The bot will stop if it doesn't have any more clues to solve / No_Path was found for a step / No required Items/Levels/Quests for a step.
> - If the script is stopping it will teleport you to war's retreat & logout / simply just stop depending if logout option is checked in settings.
> - Uses the effects of globetrotter outfit:
> - - If you have the full outfit worn in your preset & hidey hole filled will skip equipping clue items before using the emote.
> - - if you have globetrotter jacket in your inventory/equipment it will teleport to current clue if it has charges and its a scan clue/ the path to clue takes longer than ~70 seconds.
> - - if you have globetrotter backpack in your inventory/equipment it will skip the step if it has charges and no path was found to current clue or an annoying master skilling clue.

</ContentBlock>

:::hidden

## Settings

:::

<ContentBlock title="Settings">

> - If you feel the bot is stuck on a wrong clue click the "Reset active clue" button to reset current active clue (You might need to reload script aswell).
> - All settings have tooltips explaining what they do. 

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements/Instructions">

> - First of all have a weapon of your choice worn in your preset & have a revo bar for it (Any weapons will do).
> - War's retreat teleport unlocked (if you don't have it unlocked go kill 10 kbds and buy the unlock from war shop).
> - Have equipment & inventory tabs open & in view at all times.
> - Have Magic spellbook open at all times.
> - Before starting the script make sure to withdraw your current active clue from bank (active clues shouldn't be in your preset only sealed ones/ charos' clue carrier)
> - For scan clues (elites/masters) you need to disable walk markers from settings.
> - Have emotes tab open & in view at all times (I'd just make it as small as possible and tuck it somewhere on screen).
> - If use meerkats option is on you need to have meerkats pouch & scrolls in your preset.
> - If no path was found for a step you need to open that clue and see what your missing probably either a light source or trollhiem access (If no spell to teleport to trollhiem was found you need to have rock climbing boots in your inventory/equipment).
> - If your doing tetracompasses simply have any amount of them (powered) in your inventory and start the script.
> - If the script logs you out saying "Your preset is missing any or all required items." in console then your missing meerkats pouch or scrolls 
> - If it doesn't say the above ^ msg then it will tell you what items your missing.
> example presets
>  - I have provided example presets for each clue type but nav supports portable fairy rings and archaelogy teleports.

<details>
<summary>Easy clues</summary>

>  - RS Wiki Page: https://runescape.wiki/w/Clue_scroll_(easy)#Requirements
>  - Any requirement that needs partial completion of a quest will require the completion of the quest for this script.
>  - If not using globetrotter outfit for emote clues YOU NEED TO HAVE SPACE IN YOUR PRESET FOR THE ITEMS IT REQUIRES TO WITHDRAW (and enough inventory space to remove all equipped items if needed).
>
<div align="center">
![Example](med-easy.png)
</div>
<details>
<summary>Required Items(for emote clues)</summary>

>  1) Bronze dagger.
>  2) Iron full helm.
>  3) Gold ring.
>  4) Iron med helm.
>  5) Emerald ring.
>  6) Leather gloves.
>  7) Iron kiteshield.
>  8) Steel longsword.
>  9) Studded chaps.
>  10) Bronze platelegs.
>  11) Steel pickaxe.
>  12) Steel med helm.
>  13) Iron platelegs.
>  14) Emerald amulet.
>  15) Oak shieldbow.
>  16) Gold ring.
>  17) Leather chaps.
>  18) Steel mace.
>  19) Studded leather coif.
>  20) Steel plateskirt.
>  21) Sapphire necklace.
>  22) Polar camo top.
>  23) Leather gloves.
>  24) Leather boots.
>  25) Iron platebody.
>  26) Studded chaps.
>  27) Bronze full helm.
>  28) Sapphire necklace.
>  29) Polar camo legs.
>  30) Oak shortbow.
>  31) Iron chainbody.
>  32) Sapphire ring.
>  33) Shieldbow.
>  34) Gold necklace.
>  35) Gold ring.
>  36) Bronze spear.
>  37) Holy symbol.
>  38) Leather vambraces.
>  39) Iron warhammer.
>  40) Emerald ring.
>  41) Wood camo top.
>  42) Tiara.
>  43) Steel full helm.
>  44) Steel platebody.
>  45) Iron plateskirt.
>  46) Air tiara.
>  47) Bronze 2h sword.
>  48) Gold amulet.
>  49) Iron armoured boots.
>  50) Unholy symbol.
>  51) Steel hatchet.
>  52) Studded body.
>  53) Bronze platelegs.
>  54) Mud pie.
>  55) Sapphire ring.
>  56) Yellow flowers.
>  57) Leather chaps.
>  58) Sapphire amulet.
>  59) Emerald ring.
>  60) Bronze chainbody.
>  61) Studded leather coif.
>  62) Iron platebody.
>  63) Leather gloves.
>  64) Leather cowl.
>  65) Amulet of strength.
>  66) Iron scimitar.
>  67) Ruby amulet.
>  68) Blue flowers.
>  69) Leather gloves.
>  70) Leather chaps.
>  71) Bronze hatchet.
>  72) Hard leather body.
>  73) Iron chainbody.
>  74) Leather chaps.
>  75) Studded leather coif.
</details>
</details>
<details>
<summary>Medium clues</summary>

>  - RS Wiki Page: https://runescape.wiki/w/Clue_scroll_(medium)#Requirements
>  - Any requirement that needs partial completion of a quest will require the completion of the quest for this script.
>  - If not using globetrotter outfit for emote clues YOU NEED TO HAVE SPACE IN YOUR PRESET FOR THE ITEMS IT REQUIRES TO WITHDRAW (and enough inventory space to remove all equipped items if needed).
>  - You need a rope in your preset for Baxtorian Falls step.
>
<div align="center">
![Example](med-easy.png)
</div>
<details>
<summary>Required Items(for emote clues)</summary>

>  1) Spiny helmet.
>  2) Mithril platelegs.
>  3) Iron 2h sword.
>  4) Mithril plateskirt.
>  5) Maple shieldbow.
>  6) Iron hatchet.
>  7) Steel kiteshield.
>  8) Mithril full helm.
>  9) Green dragonhide chaps.
>  10) Ring of duelling (8) or Ring of duelling (7) or Ring of duelling (6) or Ring of duelling (5) or Ring of duelling (4) or Ring of duelling (3) or Ring of duelling (2) or Ring of duelling (1).
>  11) Mithril med helm.
>  12) Ruby amulet.
>  13) Mithril scimitar.
>  14) Iron square shield.
>  15) Steel platebody.
>  16) Maple shortbow.
>  17) Bronze armoured boots.
>  18) Green dragonhide chaps.
>  19) Steel kiteshield.
>  20) Ring of forging.
>  21) Iron crossbow.
>  22) Adamant med helm.
>  23) Snakeskin chaps.
>  24) Mithril chainbody.
>  25) Green dragonhide chaps.
>  26) Ruby amulet.
>  27) Green dragonhide body.
>  28) Green dragonhide chaps.
>  29) Steel square shield.
>  30) Blood'n'tar snelm (pointed).
>  31) Snakeskin boots.
>  32) Iron pickaxe.
>  33) Blood'n'tar snelm (round).
>  34) Hard leather body.
>  35) Silver sickle.
>  36) Bruise blue snelm (pointed).
>  37) Staff of air.
</details>
</details>

<details>
<summary>Hard clues</summary>

>  - RS Wiki Page: https://runescape.wiki/w/Clue_scroll_(hard)#Requirements
>  - Any requirement that needs partial completion of a quest will require the completion of the quest for this script.
>  - If not using globetrotter outfit for emote clues YOU NEED TO HAVE SPACE IN YOUR PRESET FOR THE ITEMS IT REQUIRES TO WITHDRAW (and enough inventory space to remove all equipped items if needed).
>
<div align="center">
![Example](hards.png)
</div>
<details>
<summary>Required Items</summary>

>  1) Bronze platelegs.
>  2) Iron platebody.
>  3) Blue dragonhide vambraces.
>  4) Elemental shield.
>  5) Blue dragonhide chaps.
>  6) Rune warhammer.
>  7) Blue dragonhide body.
>  8) Blue dragonhide vambraces.
>  9) Ring of life.
>  10) Amulet of glory or Amulet of glory (1) or Amulet of glory (2) or Amulet of glory (3) or Amulet of glory (4).
>  11) Adamant 2h sword.
>  12) Iron square shield.
>  13) Blue dragonhide vambraces.
>  14) Iron pickaxe.
>  15) Diamond ring.
>  16) Amulet of power.
>  17) Rune full helm.
>  18) Blue dragonhide chaps.
>  19) Fire battlestaff.
>  20) Mithril platelegs.
>  21) Ring of life.
>  22) Rune hatchet.
>  23) Splitbark helm.
>  24) Mud pie.
>  25) Rune platebody.
</details>
</details>
<details>
<summary>Elite clues</summary>

>  - RS Wiki Page: https://runescape.wiki/w/Clue_scroll_(elite)#Requirements
>  - Any requirement that needs partial completion of a quest will require the completion of the quest for this script.
>  - If you have keldagrim unlocked then you need to have visited keldagrim once (You can confirm its valid if you can use luck of the dwarf's keldagrim teleport).
>  - A Light source in your preset (only sapphire lantern and emeral lantern are handled)
>  - If your creating sapphire lantern, buy bullseye lantern (third one on GE that says "A sturdy steel lantern."), sapphire, then use the sapphire on the bullseye lantern.
>
<div align="center">
![Example](elites.png)
</div>
<details>
<summary>Required Items(for emote clues)</summary>

> None.
</details>
</details>

<details>
<summary>Master clues</summary>

>  - RS Wiki Page: https://runescape.wiki/w/Clue_scroll_(master)#Requirements
>  - Any requirement that needs partial completion of a quest will require the completion of the quest for this script.
>  - If not using globetrotter outfit for emote clues YOU NEED TO HAVE SPACE IN YOUR PRESET FOR THE ITEMS IT REQUIRES TO WITHDRAW (and enough inventory space to remove all equipped items if needed).
>  - You need to have some supplies to go on uncharted islands.
>  - If you have completed 'Gower Quest' you need to have Disk of Returning in your preset.
>  - Your inventory needs to have atleast 3 free spaces.
>  - You cannot put skilling clue items in your preset only teleport items allowed.
>  - A Light source in your preset (only sapphire lantern and emeral lantern are handled)
>  - If your creating sapphire lantern, buy bullseye lantern (third one on GE that says "A sturdy steel lantern."), sapphire, then use the sapphire on the bullseye lantern.
>
<div align="center">
![Example](masters.png)
</div>

<details>
<summary>Skilling Steps Additional requirements</summary>
>  - Skilling clues require all these https://runescape.wiki/w/Treasure_Trails/Guide/Skill_riddle_challenges.
>  - You need to have these ingredients/items in your bank:
>  - - torstol potion (unf) , jangerberries to make zamorak brews. 
>  - - toadflax potion (unf) , crushed bird nest to make saradomin brews. 
>  - - black dragon leathers , threads to make black dragonhide bodies. 
>  - - decorated cooking urn (nr), a fire rune to make decorated cooking urns.
>  - - raw sharks.
>  - - elder logs & magic logs.
>  - - raw wild pies.(You can use wilder pies instead if you have 90 cooking)
>  - - pure essence.
>  - - Great white shark bait (If you have the tier 5 prawnbroker perk you can enable the option in settings to use that instead but its much slower and not worth it since each bait gives you 50 great white sharks and you can buy them on GE).
>  - You need to have some rune bars in your metal bank.
>  - You need to have some banite ores in your metal bank. 
>  - You need to have some cash in your money pouch to buy cleansing crystals. 
>  - You need to set your runspan portal to high level, from wizards tower the guy near the east portal can change ur portal direction to high runspan level.
>  - You need to have your Prayer tab open and in view at all times for the prayer skilling step.

</details>
<details>
<summary>Required Items (for emote clues)</summary>

>  1) Fire cape.
>  2) Toktz-ket-xil.
>  3) Spork.
>  4) Enhanced yaktwee stick.
>  5) Dagon'hai hat.
>  6) Amulet of ranging.
>  7) Dark bow.
>  8) Infinity boots.
>  9) Culinaromancer's gloves 10.
>  10) Imphide hood.
>  11) Prifddinian musician's robe top.
>  12) Amulet of magic.
>  13) Iban's staff.
>  14) Ghostly cloak.
>  15) Tan cavalier or Dark cavalier or Black cavalier or Cavalier and mask or Gilded cavalier or Gilded cavalier and mask.
>  16) Asylum surgeon's ring.
>  17) Scabaras mask.
>  18) Lab coat top.
>  19) Lab coat legs.
>  20) Staff of light.
>  21) Green dragon mask or Blue dragon mask or Red dragon mask or Black dragon mask or Frost dragon mask or Bronze dragon mask or Iron dragon mask or Steel dragon mask or Mithril dragon mask or Adamant dragon mask or Dragonstone dragon mask or Onyx dragon mask or Rune dragon mask or Hydrix dragon mask.
>  22) Dragon Rider amulet.
>  23) Dragon defender.
>  24) Demon slayer gloves.
>  25) Red boater or Orange boater or Green boater or Blue boater or Black boater or Gilded boater.
>  26) Cape of legends.
>  27) Ancient staff.
>  28) Prifddinian worker's trousers.
>  29) Berserker ring.
>  30) Holy Cithara.
>  31) Saradomin's murmur.
>  32) Ring of devotion.
</details>
</details>

</ContentBlock>

:::hidden



## Changelog

:::

<Changelog changes={changes}>

</Changelog>