"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[9384],{88672:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>g});var t=i(17624),s=i(4552),a=(i(11504),i(23940)),o=i(99188),r=i(9510);i(61462);const d=JSON.parse('[{"date":"2024-06-01","title":"v1.1","items":["Release"]},{"date":"2024-06-02","title":"v1.2","items":["Fixed using bond when stuck, updated requirements"]},{"date":"2024-08-26","title":"v2.0","items":["Improved Grand Exchange buy/sell logic.","Added check for P2P world before G.E. actions.","Improved Bank preset handling in Oasis.","Introduced \'Auto-Start\' setting in Options.","Updated Instructions.","Reworked WorldHopping to prevent crashes (thanks to @coaez for finding the 100ms delay).","Reworked and fixed WebHook logic.","Added new WebHook Statistics and Stats tab:","   - Total Wealth: ((Golden roses * GE price) + GP)","   - Golden Roses Worth: (Golden roses * GE price)","   - GP: Current player GP","Disabled \'Bonds_Activate\' function, as redeeming Bond codes was removed.","Introduced \'Harvesting\' modes:","   - Progressive: Harvest the best flowers your farming level allows.","   - Random: Randomly decides which flowers to harvest (based on farming level) at each Bank visit.","   - Roses_Only: Harvest only roses.","Updated Flower areas.","Added South Oasis Bank location, so bot travels to the closer one.","Reworked Key Token removal logic.","Reworked Strange Rock removal logic.","Added Mulling (beta) - Wealth trading to another player. Requires another account:","   - Option to sell/not sell flowers before mulling.","   - Mulling at specific times each hour.","   - Mulling only if Total Wealth exceeds a set limit.","   - Mule World and Coordinates selection.","Updated Wiki.","Updated script description."]}]'),l={title:"BondFarm",description:"Farms Bonds",slug:"/BondFarm"},c=void 0,h={id:"Scripts/Money Making/BondFarm/index",title:"BondFarm",description:"Farms Bonds",source:"@site/docs/Scripts/Money Making/BondFarm/index.md",sourceDirName:"Scripts/Money Making/BondFarm",slug:"/BondFarm",permalink:"/BondFarm",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"BondFarm",description:"Farms Bonds",slug:"/BondFarm"},sidebar:"mainSidebar",previous:{title:"BinkyCaches",permalink:"/BinkyCaches"},next:{title:"InkMeDaddy",permalink:"/InkMeDaddy"}},u={},g=[{value:"Cost",id:"cost",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Introduction to BondFarm",id:"introduction-to-bondfarm",level:2},{value:"Features",id:"features",level:2},{value:"Detailed Functionality",id:"detailed-functionality",level:2},{value:"Configuration and Persistence",id:"configuration-and-persistence",level:2},{value:"Statistics and Monitoring",id:"statistics-and-monitoring",level:2},{value:"Summary",id:"summary",level:2},{value:"My Recommendation",id:"my-recommendation",level:2},{value:"GUI",id:"gui",level:2},{value:"Changelog",id:"changelog",level:2}];function m(e){const n={admonition:"admonition",blockquote:"blockquote",br:"br",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.c,{title:"Bond Farm",version:"v2.0",author:"MonVardsDraguns & andri588",skill:"Farming"}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"cost",children:"Cost"})}),"\n",(0,t.jsx)(o.c,{title:"Cost",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"30 days sub for 10 Coins."}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"})}),"\n",(0,t.jsx)(o.c,{title:"Requirements",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A New Account"}),"\n",(0,t.jsx)(n.li,{children:"Membership"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"introduction-to-bondfarm",children:"Introduction to BondFarm"})}),"\n",(0,t.jsx)(o.c,{title:"Introduction to BondFarm",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The BondFarm script is a sophisticated RuneScape bot meticulously designed to automate the process of farming and trading items, enabling players to accumulate in-game currency for purchasing Bonds. This script employs a multi-faceted approach to maximize efficiency and profitability, ensuring a steady acquisition of Bonds. Updated to BondFarm v2, the script now includes improved G.E. logic, automatic P2P world detection, refined bank preset handling, and new harvesting modes, among other enhancements."}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"features",children:"Features"})}),"\n",(0,t.jsx)(o.c,{title:"Features",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gathers Starting Money"}),": Added support for targeting and harvesting pale wisps."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Grand Exchange Handling"}),": Automated interactions for buying/selling acquired and required items."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Farming Activities"}),": Added functionality to navigate and level up farming in POF, use supercompost, and collect golden roses within Het's Oasis."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Banking"}),": Implemented setting up a preset for efficient inventory management at Het's Oasis."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"World Hopping"}),": Reworked world-hopping feature to avoid other players and enhance efficiency."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bond Management"}),': Disabled "Bonds_Activate" function, as redeeming Bond codes was removed from the game.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Customizable Parameters"}),": Enabled user configuration for world hopping and bond price limits."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mulling (Beta)"}),": Introduced a feature for wealth trading to another account, including options for selling/not selling flowers before mulling and setting specific times for mulling each hour."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Statistics"}),": Added tracking for key metrics like total wealth, golden roses worth, and GP for performance insights."]}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"detailed-functionality",children:"Detailed Functionality"})}),"\n",(0,t.jsx)(o.c,{title:"Detailed Functionality",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Divination"}),": The bot initiates by engaging in divination activities, specifically targeting pale wisps. It moves the player to the Energy Rift, configures it, and starts harvesting pale wisps. It monitors the inventory and converts memories when the backpack is full, ensuring continuous collection of resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Grand Exchange Interactions"}),": Once sufficient pale energy is collected, the bot navigates to the Grand Exchange (GE). It handles interactions with the GE clerks to sell the collected pale energy and other items, like roses, to accumulate gold pieces (GP). The bot also manages the tutorial for new players at the GE."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Item Purchasing"}),": With accumulated GP, the bot intelligently purchases necessary items such as Rings of Duelling, Skills Necklaces, and Supercompost from the GE, ensuring that the player is always equipped for subsequent tasks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Farming"}),": The script transitions to farming activities once the necessary items are procured. It navigates to designated farming areas, turns manure for leveling up farming skills, and uses supercompost to enhance the growth of plants. It handles the collection and selling of roses, including the more valuable golden roses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Banking"}),": The bot efficiently manages banking tasks at Het's Oasis, loading presets and withdrawing essential items to prepare for farming activities. It ensures that the player's inventory is optimally managed for continuous operations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"World Hopping"}),": The script includes a reworked world-hopping feature that allows the player to switch worlds to avoid crowded areas and ensure access to resources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Wealth Accumulation and Mulling"}),": The bot can now mull wealth to another account if total wealth exceeds a certain limit. It also allows for wealth trading at specific times and locations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Event Handling"}),": The script is equipped to handle various game events, such as inventory updates and chat messages. It responds to these events by adjusting the bot\u2019s state and actions, ensuring smooth and adaptive operation."]}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"configuration-and-persistence",children:"Configuration and Persistence"})}),"\n",(0,t.jsx)(o.c,{title:"Configuration and Persistence",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The script supports configurable parameters, allowing users to customize aspects like world-hopping distance, time, and bond price limits. It saves these configurations and loads them upon initialization, providing a seamless and personalized botting experience."}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"statistics-and-monitoring",children:"Statistics and Monitoring"})}),"\n",(0,t.jsx)(o.c,{title:"Statistics and Monitoring",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Throughout its operation, the bot keeps track of key metrics such as total wealth, golden roses worth, and GP, updating statistics to provide insights into its performance. This helps users understand the efficiency and effectiveness of the bot in real-time."}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"summary",children:"Summary"})}),"\n",(0,t.jsx)(o.c,{title:"Summary",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Overall, the BondFarm script offers a comprehensive and automated solution for RuneScape players looking to efficiently farm resources and trade them for Bonds. Its intelligent design, robust state management, and adaptive functionalities make it a powerful tool for optimizing in-game currency acquisition and enhancing gameplay."}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"my-recommendation",children:"My Recommendation"})}),"\n",(0,t.jsx)(o.c,{title:"My Recommendation",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use the auto login module from BWU in case you get kicked offline while changing worlds."}),"\n",(0,t.jsx)(n.li,{children:"Bot on fresh accounts rather than old ones."}),"\n",(0,t.jsx)(n.li,{children:"Use a username that doesn't look auto-generated."}),"\n",(0,t.jsx)(n.li,{children:"If collecting bond codes, and you get banned, check the mail, and the codes should still be there."}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"gui",children:"GUI"})}),"\n",(0,t.jsx)(o.c,{title:"GUI",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Example",src:i(97900).c+"",width:"388",height:"350"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"Example",src:i(52868).c+"",width:"389",height:"347"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"Example",src:i(94144).c+"",width:"386",height:"347"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"Example",src:i(94172).c+"",width:"382",height:"349"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"Example",src:i(13464).c+"",width:"387",height:"351"}),"\n",(0,t.jsx)(n.img,{alt:"Example",src:i(9180).c+"",width:"385",height:"351"}),"\n",(0,t.jsx)(n.img,{alt:"Example",src:i(7964).c+"",width:"314",height:"307"})]})}),"\n",(0,t.jsx)(n.admonition,{type:"hidden",children:(0,t.jsx)(n.h2,{id:"changelog",children:"Changelog"})}),"\n",(0,t.jsx)(r.c,{changes:d})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},97900:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/1-aabf3711a132468d16a98737a25bf9ba.PNG"},52868:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/2-e1d67f4df0b0aa977b2d465024f3ecab.PNG"},94144:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/3-ca0c18d48dd5f157bf3dc18ab43f4c47.png"},94172:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/4-bc6061bc151763eb2d7d36d6e1a41e25.png"},13464:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/5-4dbaf75fd6048f6894c3641dcc091044.PNG"},9180:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/6-f18157067a6c3b97c182f09655c85711.PNG"},7964:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/7-74d807c3a666ab6cf54ca4ac5a031fa5.PNG"}}]);