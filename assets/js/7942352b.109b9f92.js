"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[6810],{79398:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>p});var n=t(17624),r=t(4552),s=(t(11504),t(23940)),o=t(99188),l=t(9510);t(61462);const a=JSON.parse('[{"date":"2024-11-19","title":"v2.0.0","items":["Complete script rewrite","Now supports all 3 PVME rotations"]},{"date":"2024-02-14","title":"v1.0.6","items":["Added support for eof/conjur necklace switching when summoning conjures in the fight lobby","Fixed a rare post-fight death scenario where fight logic had stopped processing but Rasial fired one more explosion.","Fixed health buff conflicts between bonfire/valentines/thermal bath/other health boosts, now always interacting the bonfire only if health is not boosted by any means (instead of just boosted by bonfire)","Fixed a rare scenario where certain abilities would occasionally not activate for an unlucky user","Added an additional check at wars retreat that turns off your prayer if it was still on."]},{"date":"2024-02-06","title":"v1.0.5","items":["Greatly improved effectiveness of p4 walking mechanics","Fixed a bug that could cause guthix/sara brews to not be sipped depending on dosage","Increased reliability of death reclaim feature","Added a safety check for lack of death touched bracelet charge"]},{"date":"2024-02-03","title":"v1.0.4","items":["Randomized war\'s retreat activity: More random altar -> bank times, with a small chance of a short afk","Bot will surge toward the crystal the majority of the time now, but sometimes still walk","Optimized prism of restoration timing for better coverage during the kill and less waste on the 2nd prism","Optimized start of fight to get an extra tick out of command skeleton warrior","In the rare event of death, the bot will now reclaim its items and continue on fighting rasial. Safeguard for failed death reclaim is added at war\'s retreat (checks for missing equipment) in order to prevent dying again with items in death storage should a reclaim go wrong.","Bot will no longer re-summon undead army at the very end of fight in rare circumstances","General bot statistics like kills, drops, etc will now be tracked centrally (and anonymously)","Dashboards coming :soon~1:"]},{"date":"2024-02-01","title":"v1.0.3","items":["Remove checkbox for super brews, bot now drinks liquids in this order of priority: Super Guthix brews, Guthix rest, Super sara brews, sara brews","Fixed a scenario where adren pot could fail to activate after living death for t90 rotation","Added a safeguard for praying too many times at wars altar","Script will lobby if player is out of ectoplasm or runes.","Added support for prism of restoration spell to be cast for better reaver healing"]},{"date":"2024-01-30","title":"v1.0.2","items":["Drinks super restore if low prayer","Added imbued HSR/LOTD support for luck ring switch","Added option to ring of vigour switch for death skulls (for those without passive vigour effect)","Added safeguard to logout bot when your scripture of Jas runs out of charge","If you run out of reaver scrolls, bot will continue but print a warning to the console.","Bot will lobby if you happen to find yourself at death\'s office","Fixed super saradomin brew drinking"]},{"date":"2024-01-28","title":"v1.0.1","items":["Added option to utilize lantadyme incense sticks in your preset","Added option to throw a 2nd vuln bomb for slower t90/unlucky t95 kills","Bot will activate bonfire buff if its not active","Added option to drink super sara brews instead of normal ones","Fixed area loot support"]},{"date":"2024-01-26","title":"v1.0.0","items":["Release"]}]'),d={title:"RasialWithUs",description:"Fights Rasial, the First Necromancer using T90 or T95 gear.",slug:"/rasial-with-us"},c=void 0,h={id:"Scripts/Combat/Boss Scripts/RasialWithUs/index",title:"RasialWithUs",description:"Fights Rasial, the First Necromancer using T90 or T95 gear.",source:"@site/docs/Scripts/Combat/Boss Scripts/RasialWithUs/index.md",sourceDirName:"Scripts/Combat/Boss Scripts/RasialWithUs",slug:"/rasial-with-us",permalink:"/rasial-with-us",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RasialWithUs",description:"Fights Rasial, the First Necromancer using T90 or T95 gear.",slug:"/rasial-with-us"},sidebar:"mainSidebar",previous:{title:"Pizzas Vorkath",permalink:"/Pizzas-Vorkath"},next:{title:"SanctumWithUs [Hard]",permalink:"/SanctumWithUs-Hard"}},u={},p=[{value:"Cost",id:"cost",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Changelog",id:"changelog",level:2}];function m(e){const i={admonition:"admonition",blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.M)(),...e.components},{Details:d}=i;return d||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.c,{title:"RasialWithUs",version:"v2.0.0",author:"BotWithUs",offical:"OFFICAL SCRIPT",skill:"Necromancy"}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"cost",children:"Cost"})}),"\n",(0,n.jsx)(o.c,{title:"Cost",children:(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"$100 USD / month (not including client access)"}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"features",children:"Features"})}),"\n",(0,n.jsx)(o.c,{title:"Features",children:(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Fights Rasial fully autonomously, all you need to do is make sure the bot has enough supplies."}),"\n",(0,n.jsx)(i.li,{children:"Supports all 3 rotations on PVME for rasial: T95 Supreme invigorate (1:10-1:20 killtimes), T95 Equilbrium (1:15-1:30 killtimes), T90 Equilibrium (1:30-1:50 killtimes)."}),"\n",(0,n.jsx)(i.li,{children:"Picks up drops, rinse and repeat."}),"\n",(0,n.jsx)(i.li,{children:"Has a number of safety mechanisms to lobby when the player is out of critical resources like item charge, runes, etc."}),"\n",(0,n.jsx)(i.li,{children:"Makes you a TON of gp!"}),"\n",(0,n.jsx)(i.li,{children:"Currently ~65m / hr on average"}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"requirements",children:"Requirements"})}),"\n",(0,n.jsxs)(o.c,{title:"Requirements",children:[(0,n.jsx)(i.p,{children:"Any items marked as recommended are optional, anything else is a strict requirement."}),(0,n.jsx)(i.p,{children:"Required by all rotations"}),(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Ancient summoning unlocked for blood reaver or hellhound, scrolls if using reaver."}),"\n",(0,n.jsx)(i.li,{children:"99+ Necromancy and all necromancy abilities and incantations unlocked from the well of Souls"}),"\n",(0,n.jsx)(i.li,{children:"Invigorating 4 perk required"}),"\n",(0,n.jsx)(i.li,{children:"Igneous Kal-Mor cape or Igneous Kal-Ket cape"}),"\n",(0,n.jsx)(i.li,{children:"At least 87 herblore for Super adrenaline potions"}),"\n",(0,n.jsx)(i.li,{children:"Haunted mine Quest + enchanted salve amulet"}),"\n",(0,n.jsx)(i.li,{children:"Alpha vs Omega quest complete to fight Rasial"}),"\n",(0,n.jsx)(i.li,{children:"Ring of vigour unlocked, and ideally made passive via Extinction request (not required, bot can vigour switch)"}),"\n",(0,n.jsx)(i.li,{children:"118 archaeology for Conservation of Energy (boost from 110) OR Supreme Invigorate + plenty of refreshes. Ideally both."}),"\n",(0,n.jsx)(i.li,{children:"Guildmaster certification recommended, depends on which rotation used."}),"\n",(0,n.jsx)(i.li,{children:"Runes in pouches for the spells you want to use (Prism of restoration, smoke cloud, invoke death)"}),"\n",(0,n.jsx)(i.li,{children:"(Strongly Recommended): 300-400m+ to buy sufficient supplies for running all day"}),"\n",(0,n.jsx)(i.li,{children:"(Strongly Recommended): Undead slayer perk on gear"}),"\n",(0,n.jsx)(i.li,{children:"(Strongly Recommended): Vulnerability bombs"}),"\n",(0,n.jsx)(i.li,{children:"(Recommended): Luck ring switch"}),"\n"]}),"\n"]}),(0,n.jsx)(i.p,{children:"T95 Invigorate Rotation"}),(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Level 115 herblore for adrenaline renewal potions"}),"\n",(0,n.jsx)(i.li,{children:"Supreme invigorate Aura + plenty of Tier4 refreshs (Requires Supreme invigorate 24/7)"}),"\n",(0,n.jsx)(i.li,{children:"EOF with Death Grasp stored"}),"\n"]}),"\n"]}),(0,n.jsx)(i.p,{children:"T95 Equilibrium (with Conservation of Energy)"}),(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Divert"}),"\n",(0,n.jsx)(i.li,{children:"EOF with Death Grasp stored"}),"\n",(0,n.jsx)(i.li,{children:"(Recommended) Level 115 herblore for adrenaline renewal potions"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Without CoE:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Supreme invigorate Aura + plenty of Tier4 refreshs (Requires Supreme invigorate 24/7)"}),"\n"]}),"\n"]}),(0,n.jsx)(i.p,{children:"T90 Equilibrium (with Conservation of Energy)"}),(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Divert"}),"\n",(0,n.jsx)(i.li,{children:"(Recommended) Level 115 herblore for adrenaline renewal potions"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Without CoE:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Supreme invigorate Aura + plenty of Tier4 refreshs (Requires Supreme invigorate 24/7)"}),"\n"]}),"\n"]})]}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"setup",children:"Setup"})}),"\n",(0,n.jsxs)(o.c,{title:"Setup",children:[(0,n.jsxs)(d,{children:[(0,n.jsx)("summary",{children:"T90 Preset Setup example"}),(0,n.jsx)(i.p,{children:"Brews flasks can be replaced with:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:'Super Guthix Brew flasks (BIS - "Best in slot")'}),"\n",(0,n.jsx)(i.li,{children:"Super Guthix rest flasks"}),"\n",(0,n.jsx)(i.li,{children:"Super Saradomin Brew Flasks"}),"\n"]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"T90 Preset Example",src:t(81012).c+"",width:"421",height:"259"})})]}),(0,n.jsxs)(d,{children:[(0,n.jsx)("summary",{children:"T95 Preset Setup example"}),(0,n.jsx)(i.p,{children:"Brews flasks can be replaced with:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:'Super Guthix Brew flasks (BIS - "Best in slot")'}),"\n",(0,n.jsx)(i.li,{children:"Super Guthix rest flasks"}),"\n",(0,n.jsx)(i.li,{children:"Super Saradomin Brew Flasks"}),"\n"]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"T95 Preset Example",src:t(53956).c+"",width:"422",height:"259"})})]}),(0,n.jsxs)(d,{children:[(0,n.jsx)("summary",{children:"UI Settings Guide"}),(0,n.jsx)(i.p,{children:"This is an example of a possible T90 UI setup."}),(0,n.jsx)(i.p,{children:"All recommended settings are optional, but lead to dps increase or qol increase. Use them if you can."}),(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"The settings tab, where you control how the script behaves."}),"\n",(0,n.jsx)(i.li,{children:"Instructions tab, make sure to read these before you claim the script isnt working."}),"\n",(0,n.jsx)(i.li,{children:"Readiness check, here you can run a test to help you determine if you're setup properly for the rotation you've selected."}),"\n",(0,n.jsx)(i.li,{children:"Bot state, mostly informational about what the bot is thinking."}),"\n",(0,n.jsx)(i.li,{children:"Runtime, how long since the script was loaded."}),"\n",(0,n.jsx)(i.li,{children:"Killcount for the session"}),"\n",(0,n.jsx)(i.li,{children:"Kills per hour of the session"}),"\n",(0,n.jsx)(i.li,{children:"This button will remember your current settings in the UI the next time you launch the script."}),"\n",(0,n.jsx)(i.li,{children:"Reset script. You may need to do this is the bot is not behaving correctly. Resets state to: WARS"}),"\n",(0,n.jsx)(i.li,{children:"Reset ability cache - Makes the script redetect your abilities. Run this if you change your action bars after loading the script."}),"\n",(0,n.jsx)(i.li,{children:"Enable if you want the script to put in your bank pin for you."}),"\n",(0,n.jsx)(i.li,{children:"The pin to enter"}),"\n",(0,n.jsx)(i.li,{children:"The rotation style you'd like to fight rasial with."}),"\n",(0,n.jsx)(i.li,{children:"The quick prayer preset that has your Necromancy dmg prayer and soulsplit configured. Make sure its also on your actionbar."}),"\n",(0,n.jsx)(i.li,{children:"Whether you want to use smoke cloud on rasial. Recommended."}),"\n",(0,n.jsx)(i.li,{children:"Whether you want to cast invoke death at the start of the fight. Enable it, unless you're wearing T90 deathdealer armor."}),"\n",(0,n.jsx)(i.li,{children:"Whether you have undead slayer codex unlocked and want to use it in the fight. Recommended."}),"\n",(0,n.jsx)(i.li,{children:"Cast prism of restoration to facilitate better reaver heals. Advised."}),"\n",(0,n.jsx)(i.li,{children:"Use another vuln bomb after the first one expires after a minute."}),"\n",(0,n.jsx)(i.li,{children:"Swap to ring of vigour in inventory when using ults. Required if no passive ring of vigour unlocked."}),"\n"]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"UI Settings",src:t(82108).c+"",width:"641",height:"412"})})]})]}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"changelog",children:"Changelog"})}),"\n",(0,n.jsx)(l.c,{changes:a})]})}function f(e={}){const{wrapper:i}={...(0,r.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},81012:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/t90preset-48db81d42e1f0fb9d885c5aa4026d73f.png"},53956:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/t95preset-12a06d5b58900aac8a69c705debb3934.png"},82108:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/uisettings-d52aa7e17c97efe43a3e246510bcc871.png"}}]);