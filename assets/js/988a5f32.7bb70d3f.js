"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[4e3],{98992:(A,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var t=i(17624),s=i(4552),n=(i(11504),i(23940)),r=i(99188),l=i(9510);i(61462);const o=JSON.parse('[{"date":"2024-09-25","title":"v0.0.1","items":[" Initial Release"]},{"date":"2024-09-26","title":"v0.0.2","items":["Added support for divine blessing & catalyst of alteration caputring.","Redo of treasure chest & supply handling - should now scan for chests everytime it scans for resources to stop missing them.","Support for resource tracking with porter buffs."]},{"date":"2024-09-27","title":"v0.0.3","items":["XP Tracking for all Arc Skills.","Added discord webhook logging - will automatically send when a new island is started.","Added support for green maps & ability to logout when out of maps.","Added banking preset support instead of using deposit-all when full inventory."]}]'),d={title:"vArc",description:"Example.",slug:"/vArc"},a=void 0,c={id:"Scripts/Misc/vArc/index",title:"vArc",description:"Example.",source:"@site/docs/Scripts/Misc/vArc/index.md",sourceDirName:"Scripts/Misc/vArc",slug:"/vArc",permalink:"/vArc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"vArc",description:"Example.",slug:"/vArc"},sidebar:"mainSidebar",previous:{title:"RandomsWithUs",permalink:"/RandomsWithUs"},next:{title:"BondFarm",permalink:"/BondFarm"}},h={},u=[{value:"Cost",id:"cost",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Changelog",id:"changelog",level:2}];function p(A){const e={admonition:"admonition",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.M)(),...A.components},{Details:d}=e;return d||function(A,e){throw new Error("Expected "+(e?"component":"object")+" `"+A+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.c,{title:"vArc",version:"v0.0.3",author:"Vopori",skill:"Woodcutting"}),"\n",(0,t.jsx)(e.admonition,{type:"hidden",children:(0,t.jsx)(e.h2,{id:"cost",children:"Cost"})}),"\n",(0,t.jsx)(r.c,{title:"Cost",children:(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"BETA - Currently Invite Only"}),"\n",(0,t.jsx)(e.li,{children:"15 Coins / Month After Beta"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(e.admonition,{type:"hidden",children:(0,t.jsx)(e.h2,{id:"features",children:"Features"})}),"\n",(0,t.jsx)(r.c,{title:"Features",children:(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"BETA Script - Please DM & report all issues."}),"\n",(0,t.jsx)(e.li,{children:"Skills & gathers the following resources in uncharted isles:"}),"\n",(0,t.jsx)(e.li,{children:"Golden Bamboo"}),"\n",(0,t.jsx)(e.li,{children:"Mushrooms"}),"\n",(0,t.jsx)(e.li,{children:"Wobbegongs"}),"\n",(0,t.jsx)(e.li,{children:"Ancestral Energy"}),"\n",(0,t.jsx)(e.li,{children:"(Script does not currently support tortles - use excess energy to transmute for now)"}),"\n",(0,t.jsx)(e.li,{children:"Automatically scans for and attempts to gather treasure chests & washed up supplies."}),"\n",(0,t.jsx)(e.li,{children:"Walks closer to out of range resources to ensure interaction success."}),"\n",(0,t.jsx)(e.li,{children:"Scans island periodically for resources and adds them to its internal list. Will interact with the closest resources."}),"\n",(0,t.jsx)(e.li,{children:"Handles full inventory with depositing all items. GOTE is recommended."}),"\n",(0,t.jsx)(e.li,{children:"If no resources are found, will move around island scanning for out of range resources for a set number of times. If no resources are found, player will hop to another Long Voyage."}),"\n",(0,t.jsx)(e.li,{children:"ONLY Long Voyages are currently supported."}),"\n",(0,t.jsx)(e.li,{children:"Ensure player starts script in large island with the uncharted island selection screen already set on your rowboat."}),"\n",(0,t.jsx)(e.li,{children:"Script will also not currently handle switching outfits/items per resource. Ensure your loadout has a decent skilling spread."}),"\n",(0,t.jsx)(e.li,{children:"Will automatically send a message to your discord server when a new island is started with your resource counts."}),"\n",(0,t.jsx)(e.li,{children:"XP Tracking for all Arc Skills."}),"\n",(0,t.jsx)(e.li,{children:"Support for Green Maps & Ability to Logout when out of maps."}),"\n",(0,t.jsx)(e.li,{children:"Banking Presets - Will use your selected preset when inventory is full."}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(e.admonition,{type:"hidden",children:(0,t.jsx)(e.h2,{id:"requirements",children:"Requirements"})}),"\n",(0,t.jsx)(r.c,{title:"Requirements",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Enough supplies to last the duration of your planned runtime. (Roughly 20 resources per hour)"}),"\n",(0,t.jsx)(e.li,{children:"Decent skilling spread as script does not currently support switching loadouts."}),"\n",(0,t.jsx)(e.li,{children:"Render distance set to maximum and graphics set to lowest."}),"\n",(0,t.jsx)(e.li,{children:"Acess to Uncharted Isles (Obviously)"}),"\n"]})}),"\n",(0,t.jsx)(e.admonition,{type:"hidden",children:(0,t.jsx)(e.h2,{id:"setup",children:"Setup"})}),"\n",(0,t.jsxs)(r.c,{title:"Setup",children:[(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"Start in large island with uncharted island selection screen already set on your rowboat."}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Setup",src:i(11920).c+"",width:"1273",height:"874"})}),(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:'The settings above should show when you use the "Leave" option on the rowboat.'}),"\n"]}),"\n"]})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"UI Settings Guide"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"UI Settings",src:i(47364).c+"",width:"508",height:"253"})}),(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Ensure your UI settings are set to the minimum with maximum render distance."}),"\n"]}),"\n"]})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:"Discord Webhook Setup"}),(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["First, you need to create a Discord channel to receive vArc notifications.\n",(0,t.jsx)(e.img,{alt:"Discord Webhook Setup1",src:i(28056).c+"",width:"1024",height:"220"})]}),"\n",(0,t.jsxs)(e.li,{children:["Log in to Discord, open your server, open the Discord channel you want to receive AidaForm notifications. From the channel menu, select Edit channel (click the small cog button).\n",(0,t.jsx)(e.img,{alt:"Discord Webhook Setup2",src:i(21156).c+"",width:"1024",height:"220"})]}),"\n",(0,t.jsxs)(e.li,{children:["On the left side panel click on Webhooks menu item.\n",(0,t.jsx)(e.img,{alt:"Discord Webhook Setup3",src:i(73696).c+"",width:"1024",height:"220"})]}),"\n",(0,t.jsxs)(e.li,{children:["Click the Create Webhook button, fill in the Webhook Name, select a channel from the drop-down menu you\u2019d like to send responses, and optionally, edit the avatar of your choice.\n",(0,t.jsx)(e.img,{alt:"Discord Webhook Setup4",src:i(32215).c+"",width:"1024",height:"768"})]}),"\n",(0,t.jsx)(e.li,{children:"Scroll down a bit, and you\u2019ll find the Webhook URL that needed to be provided to vARc settings window. Simply, paste it into the Webhook URL field."}),"\n"]}),"\n"]})]})]}),"\n",(0,t.jsx)(e.admonition,{type:"hidden",children:(0,t.jsx)(e.h2,{id:"changelog",children:"Changelog"})}),"\n",(0,t.jsx)(l.c,{changes:o})]})}function m(A={}){const{wrapper:e}={...(0,s.M)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(p,{...A})}):p(A)}},28056:(A,e,i)=>{i.d(e,{c:()=>t});const t="data:image/jpeg;base64,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"},21156:(A,e,i)=>{i.d(e,{c:()=>t});const t=i.p+"assets/images/screen2-webhooks-673144bab769433bc07a336ec23d64dc.jpg"},73696:(A,e,i)=>{i.d(e,{c:()=>t});const t=i.p+"assets/images/screen3-create-webhook-8ad79049009f0efa159441ffe7988294.jpg"},32215:(A,e,i)=>{i.d(e,{c:()=>t});const t=i.p+"assets/images/screen4-save-ab5d848eb00e087b7431dca894e0f5c6.jpg"},11920:(A,e,i)=>{i.d(e,{c:()=>t});const t=i.p+"assets/images/setup-289d1da9545c462f213805142b246575.jpg"},47364:(A,e,i)=>{i.d(e,{c:()=>t});const t=i.p+"assets/images/ui-e6d32a6e06536e333e5ca1993b7f1cd5.png"}}]);