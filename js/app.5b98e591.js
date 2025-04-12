(()=>{"use strict";var e={286:(e,r,o)=>{o(3792),o(3362),o(9085),o(9391);var n=o(5130),t=o(6768);function l(e,r){var o=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.Wv)(o)}var a=o(1241);const i={},c=(0,a.A)(i,[["render",l],["__scopeId","data-v-df82a0fa"]]),u=c;var s=o(1387),d={class:"home"};function p(e,r,o,n,l,a){var i=(0,t.g2)("GameSetting"),c=(0,t.g2)("FooterCopyright");return(0,t.uX)(),(0,t.CE)("div",d,[(0,t.bF)(i),(0,t.bF)(c)])}var g=o(9492),f=o(5026),y=o(2202),b=o(9129),m=o(4119),v=(o(4185),o(3851),o(6099),o(5472),{class:"banner-wrap w-100 p-2"});function k(e,r,o,n,l,a){return(0,t.uX)(),(0,t.CE)("div",v,r[0]||(r[0]=[(0,t.Lk)("p",{class:"footer-text text-end"},"Copyright © 2023 by Paulina Tong and Kami Liu. ",-1),(0,t.Lk)("p",{class:"text-end footer-text"},"All rights reserved.",-1)]))}const h=(0,t.pM)({name:"FooterCopyright"}),C=(0,a.A)(h,[["render",k]]),S=C;var w=o(4232);const E=o.p+"img/logo.edaddc0d.svg";var x={class:"wrap position-relative"},L={class:"setting-wrap mx-1280 flex-grow-1"},M={class:"d-flex justify-content-between fs-20"},B={class:"d-flex align-items-center mb-4"},A={class:"d-flex align-items-center"},R={class:"count-wrap"},W={class:"mb-0 d-inline-block fw-bold"},D={class:"fw-normal"},_={key:0,class:"fw-bold fs-red ml-2"},G={class:"d-flex align-items-center"},T={class:"d-flex flex-wrap group-card-wrap flex-grow-1"},I={class:"d-flex justify-content-center"};function X(e,r,o,n,l,a){var i=(0,t.g2)("BFormSelect"),c=(0,t.g2)("BButton"),u=(0,t.g2)("BButtonGroup"),s=(0,t.g2)("GroupCardPanel"),d=(0,t.g2)("Alert");return(0,t.uX)(),(0,t.CE)("div",x,[r[8]||(r[8]=(0,t.Lk)("div",{class:"banner-wrap"},[(0,t.Lk)("div",{class:"mx-1280"},[(0,t.Lk)("div",{class:"banner-img-wrap"},[(0,t.Lk)("img",{src:E})])])],-1)),(0,t.Lk)("div",L,[r[7]||(r[7]=(0,t.Lk)("h1",{class:"title-style text-start mb-6"},"創建遊戲",-1)),(0,t.Lk)("div",M,[(0,t.Lk)("div",B,[(0,t.Lk)("div",A,[r[4]||(r[4]=(0,t.Lk)("p",{class:"mb-0 text-nowrap fw-bold"},"卡片牌局：",-1)),(0,t.bF)(i,{modelValue:e.selectedModeId,"onUpdate:modelValue":r[0]||(r[0]=function(r){return e.selectedModeId=r}),options:e.roleOptions},null,8,["modelValue","options"])]),(0,t.Lk)("div",R,[(0,t.Lk)("p",W,[r[5]||(r[5]=(0,t.eW)("人數：")),(0,t.Lk)("span",D,(0,w.v_)(e.countChecked),1),e.countChecked>20?((0,t.uX)(),(0,t.CE)("span",_,"(人數已達上限20人)")):(0,t.Q3)("",!0)])])]),(0,t.Lk)("div",G,[(0,t.bF)(u,{class:"Toggle rounded-pill mr-4",style:(0,w.Tr)(e.styleVars)},{default:(0,t.k6)((function(){return[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.roundOptions,(function(r,o){return(0,t.uX)(),(0,t.Wv)(c,{class:"px-6 text-nowrap mb-0",key:o,onClick:function(o){return e.selectedRoundOptions=r}},null,8,["onClick"])})),128)),(0,t.eW)((0,w.v_)(e.selectedRoundOptions.text),1)]})),_:1},8,["style"]),(0,t.Lk)("p",{class:"mb-0 text-end cursor fw-bold",onClick:r[1]||(r[1]=function(){return e.setAllStatus&&e.setAllStatus.apply(e,arguments)})},[(0,t.Lk)("i",{class:(0,w.C4)(["mr-12",e.allStatusStyle])},null,2),r[6]||(r[6]=(0,t.eW)("全選"))])])]),(0,t.Lk)("div",T,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.groupedRoles,(function(r,o){return(0,t.uX)(),(0,t.Wv)(s,{class:"group-card-panel",data:r,index:o,onSetGroupStatus:e.setGroupStatus,onSetSingleStatus:e.setSingleStatus},null,8,["data","index","onSetGroupStatus","onSetSingleStatus"])})),256))]),(0,t.Lk)("div",I,[(0,t.Lk)("div",{class:"button-style cursor fw-bold",onClick:r[2]||(r[2]=function(){return e.submitSetting&&e.submitSetting.apply(e,arguments)})},"Game Start")])]),(0,t.bF)(d,{show:e.modalShow,"onUpdate:modalShow":r[3]||(r[3]=function(r){return e.modalShow=r})},null,8,["show"])])}o(8706),o(2008),o(113),o(1629),o(4423),o(5276),o(2062),o(4114),o(2712),o(4782),o(6910),o(8111),o(2489),o(116),o(7588),o(1701),o(8237),o(1699),o(3500);function P(e,r,o,n,l,a){var i=(0,t.g2)("BModal");return(0,t.uX)(),(0,t.Wv)(i,{modelValue:e.showLoc,"onUpdate:modelValue":r[1]||(r[1]=function(r){return e.showLoc=r}),"hide-footer":"","hide-header":"",centered:"",modalClass:"backdrop-blur","content-class":"p-6 position-relative"},{default:(0,t.k6)((function(){return[(0,t.Lk)("i",{class:"bi bi-x-lg close-icon position-absolute cursor",onClick:r[0]||(r[0]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)})}),r[2]||(r[2]=(0,t.Lk)("i",{class:"d-block text-center bi bi-exclamation-octagon-fill fs-48 icon-color"},null,-1)),r[3]||(r[3]=(0,t.Lk)("p",{class:"mb-0 text-center"},"角色人數已達系統上限20人。",-1)),r[4]||(r[4]=(0,t.Lk)("p",{class:"mb-0 text-center"},"請取消不需要的角色後，再開始遊戲。",-1))]})),_:1},8,["modelValue"])}var K=o(7572);const j=(0,t.pM)({name:"GameDashboard",props:{show:{type:Boolean,default:!1}},components:{BModal:K.RB},setup:function(e,r){var o=r.emit,n=(0,t.EW)({get:function(){return e.show},set:function(e){return o("update:show",e)}});function l(){o("update:modalShow",!1),n.value=!n.value,console.log(n.value)}return{showLoc:n,closeModal:l}}}),O=(0,a.A)(j,[["render",P],["__scopeId","data-v-7ec89e44"]]),F=O;var q=["onClick"],N={class:"mr-12"},U={class:"d-flex justify-content-between flex-grow-1"},z={class:"mb-0 pole-style w-50 text-start"};function V(e,r,o,n,l,a){return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("p",{class:"text-start title-style cursor",onClick:r[0]||(r[0]=function(r){return e.setGroupStatus()})},[(0,t.Lk)("i",{class:(0,w.C4)(["mr-12",e.groupedStatusStyle])},null,2),(0,t.eW)("角色-zone "+(0,w.v_)(e.index+1),1)]),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.data,(function(r){return(0,t.uX)(),(0,t.CE)("div",{class:"d-flex roles-style cursor",onClick:function(o){return e.setSingleStatus(r.pair)}},[(0,t.Lk)("div",N,[(0,t.Lk)("i",{class:(0,w.C4)(["bi",e.setSingleCheckColor(r.checked,r.required)])},null,2)]),(0,t.Lk)("div",U,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(null===r||void 0===r?void 0:r.roles,(function(r){return(0,t.uX)(),(0,t.CE)("p",z,[(0,t.Lk)("i",{class:"bi mr-12 bi-person-badge icon-color",style:(0,w.Tr)(e.SetTeamColor(r.color))},null,4),(0,t.eW)((0,w.v_)(r.label),1)])})),256))])],8,q)})),256))])}o(2892);const J=JSON.parse('[{"label":"blue","color":"#5595D5","colorDark":"#1d3a5d"},{"label":"red","color":"#CC333C","colorDark":"#401618"},{"label":"grey","color":"#808080","colorDark":"#4c4c4c"},{"label":"green","color":"#6EBE46","colorDark":"#30542f"},{"label":"purple","color":"#755BA7","colorDark":"#3d2f84"}]'),Q=(0,t.pM)({name:"GroupCardPanel",props:{data:{type:Array,default:function(){return[]}},index:{type:Number}},setup:function(e,r){var o=r.emit,n=J,l=(0,t.EW)((function(){var r;return null===(r=e.data)||void 0===r?void 0:r.length})),a=(0,t.EW)((function(){var r;return null===(r=e.data.filter((function(e){return e.checked})))||void 0===r?void 0:r.length})),i=(0,t.EW)((function(){return a.value==l.value?"bi bi-check-square-fill fill-color":a.value>0?"bi bi-dash-square":"bi bi-square"}));function c(e){var r,o=null===(r=n.find((function(r){return r.label==e})))||void 0===r?void 0:r.color;return{"--color":o}}function u(e,r){return r?"bi-check-square-fill checked-disable-color":e?"bi-check-square-fill fill-color":"bi-square"}function s(){var r=l.value!=a.value;o("setGroupStatus",e.index,r)}function d(e){o("setSingleStatus",e)}return{SetTeamColor:c,groupedStatusStyle:i,setSingleStatus:d,setGroupStatus:s,setSingleCheckColor:u}}}),Z=(0,a.A)(Q,[["render",V],["__scopeId","data-v-18d51b6a"]]),H=Z;var Y;(function(e){e[e["PresidentBoomer"]=1]="PresidentBoomer",e[e["DoctorEngineer"]=2]="DoctorEngineer",e[e["TuesdayKnightDrBoom"]=3]="TuesdayKnightDrBoom",e[e["Enforcer"]=4]="Enforcer",e[e["Mayor"]=5]="Mayor",e[e["Coyboy"]=6]="Coyboy",e[e["Papanoid"]=7]="Papanoid",e[e["Spy"]=8]="Spy",e[e["Usurper"]=9]="Usurper",e[e["Security"]=10]="Security",e[e["ErisCupid"]=11]="ErisCupid",e[e["RivalIntern"]=12]="RivalIntern",e[e["ButlerMaid"]=13]="ButlerMaid",e[e["WifeMistress"]=14]="WifeMistress",e[e["SurvivorVictim"]=15]="SurvivorVictim",e[e["RomeoJuliet"]=16]="RomeoJuliet",e[e["AhabMoby"]=17]="AhabMoby",e[e["BombBotQueen"]=18]="BombBotQueen",e[e["DecoyTargetSniper"]=19]="DecoyTargetSniper",e[e["Gambler"]=20]="Gambler",e[e["Drunk"]=21]="Drunk",e[e["Negotiator"]=22]="Negotiator",e[e["Zombie"]=23]="Zombie",e[e["Mummy"]=24]="Mummy",e[e["Conman"]=25]="Conman",e[e["Negozombie"]=26]="Negozombie",e[e["Angel"]=27]="Angel",e[e["Demon"]=28]="Demon",e[e["Mime"]=29]="Mime"})(Y||(Y={}));var $=[{key:"bluePresident",role:"President",color:"blue",label:"總統",desc:"最後不與炸彈客在同一個房間",pair:Y.PresidentBoomer,src:"pic/role/blue-president.png"},{key:"redBoomer",role:"Boomer",color:"red",label:"炸彈客",desc:"最後與總統在同一個房間",pair:Y.PresidentBoomer,src:"pic/role/red-boomer.png"},{key:"blueDoctor",role:"Doctor",color:"blue",label:"醫生",desc:"遊戲結束前與總統分享卡片",pair:Y.DoctorEngineer,src:"pic/role/blue-doctor.png"},{key:"redEngineer",role:"Engineer",color:"red",label:"工程師",desc:"遊戲結束前與炸彈客分享卡片",pair:Y.DoctorEngineer,src:"pic/role/red-engineer.png"},{key:"blueTuesdayKnight",role:"TuesdayKnight",color:"blue",label:"星期二騎士",desc:"跟炸彈客分享卡片，藍隊直接獲勝",pair:Y.TuesdayKnightDrBoom,src:"pic/role/blue-tuesdayknight.png"},{key:"redDr.Boom",role:"Dr.Boom",color:"red",label:"砰砰博士",desc:"跟總統分享卡片，紅隊直接獲勝",pair:Y.TuesdayKnightDrBoom,src:"pic/role/red-drboom.png"},{key:"blueEnforcer",role:"Enforcer",color:"blue",label:"執法者",desc:"強制兩位玩家交換卡片",pair:Y.Enforcer,src:"pic/role/blue-enforcer.png"},{key:"redEnforcer",role:"Enforcer",color:"red",label:"執法者",desc:"強制兩位玩家交換卡片",pair:Y.Enforcer,src:"pic/role/red-enforcer.png"},{key:"blueMayor",role:"Mayor",color:"blue",label:"市長",desc:"公開後，一票值兩票",pair:Y.Mayor,src:"pic/role/blue-mayor.png"},{key:"redMayor",role:"Mayor",color:"red",label:"市長",desc:"公開後，一票值兩票",pair:Y.Mayor,src:"pic/role/red-mayor.png"},{key:"blueCoyboy",role:"Coyboy",color:"blue",label:"靦腆少年",desc:"你只能執行分享顏色",pair:Y.Coyboy,src:"pic/role/blue-coyboy.png"},{key:"redCoyboy",role:"Coyboy",color:"red",label:"靦腆少年",desc:"你只能執行分享顏色",pair:Y.Coyboy,src:"pic/role/red-coyboy.png"},{key:"bluePapanoid",role:"Papanoid",color:"blue",label:"妄想者",desc:"五個回合內只能執行一次卡片分享",pair:Y.Papanoid,src:"pic/role/blue-papanoid.png"},{key:"redPapanoid",role:"Papanoid",color:"red",label:"妄想者",desc:"五個回合內只能執行一次卡片分享",pair:Y.Papanoid,src:"pic/role/red-papanoid.png"},{key:"blueSpy",role:"Spy",color:"blue",label:"藍隊間諜",desc:"卡片顏色與隊伍相反",pair:Y.Spy,src:"pic/role/blue-spy.png"},{key:"redSpy",role:"Spy",color:"red",label:"紅隊間諜",desc:"卡片顏色與隊伍相反",pair:Y.Spy,src:"pic/role/red-spy.png"},{key:"blueUsurper",role:"Usurper",color:"blue",label:"篡位者",desc:"在前四回合中，室長篡位一次",pair:Y.Usurper,src:"pic/role/blue-usurper.png"},{key:"redUsurper",role:"Usurper",color:"red",label:"篡位者",desc:"在前四回合中，室長篡位一次",pair:Y.Usurper,src:"pic/role/red-usurper.png"},{key:"blueSecurity",role:"Security",color:"blue",label:"保安",desc:"可以扣留一名房間成員不作為人質",pair:Y.Security,src:"pic/role/blue-security.png"},{key:"redSecurity",role:"Security",color:"red",label:"保安",desc:"可以扣留一名房間成員不作為人質",pair:Y.Security,src:"pic/role/red-security.png"},{key:"blueEris",role:"Eris",color:"blue",label:"紛爭女神厄里斯",desc:"你可以使任兩名玩家進入相愛狀態",pair:Y.ErisCupid,src:"pic/role/blue-eris.png"},{key:"redCupid",role:"Cupid",color:"red",label:"愛神丘比特",desc:"你可以使任兩名玩家進入相恨狀態",pair:Y.ErisCupid,src:"pic/role/red-cupid.png"},{key:"greyRival",role:"Rival",color:"grey",label:"競爭者",desc:"最後與總統在不同房間",pair:Y.RivalIntern,src:"pic/role/grey-rival.png"},{key:"greyIntern",role:"Intern",color:"grey",label:"實習生",desc:"最後與總統在同個房間",pair:Y.RivalIntern,src:"pic/role/grey-intern.png"},{key:"greyButler",role:"Butler",color:"grey",label:"管家",desc:"最後與女僕和總統在同一個房間",pair:Y.ButlerMaid,src:"pic/role/grey-butler.png"},{key:"greyMaid",role:"Maid",color:"grey",label:"女僕",desc:"最後與管家和總統在同一個房間",pair:Y.ButlerMaid,src:"pic/role/grey-maid.png"},{key:"greyWife",role:"Wife",color:"grey",label:"妻子",desc:"最後和總統待在一起，避開情婦",pair:Y.WifeMistress,src:"pic/role/grey-wife.png"},{key:"greyMistress",role:"Mistress",color:"grey",label:"情婦",desc:"最後和總統待在一起，避開妻子",pair:Y.WifeMistress,src:"pic/role/grey-mistress.png"},{key:"greySurvivor",role:"Survivor",color:"grey",label:"倖存者",desc:"最後與炸彈客在不同房間",pair:Y.SurvivorVictim,src:"pic/role/grey-survivor.png"},{key:"greyVictim",role:"Victim",color:"grey",label:"受害者",desc:"最後與炸彈客在同個房間",pair:Y.SurvivorVictim,src:"pic/role/grey-victim.png"},{key:"greyRomeo",role:"Romeo",color:"grey",label:"羅密歐",desc:"最後與茱麗葉和炸彈客在同一個房間",pair:Y.RomeoJuliet,src:"pic/role/grey-romeo.png"},{key:"greyJuliet",role:"Juliet",color:"grey",label:"茱麗葉",desc:"最後與羅密歐和炸彈客在同一個房間",pair:Y.RomeoJuliet,src:"pic/role/grey-juliet.png"},{key:"greyAhab",role:"Ahab",color:"grey",label:"亞哈",desc:"最後同時避開莫比與炸彈客",pair:Y.AhabMoby,src:"pic/role/grey-ahab.png"},{key:"greyMoby",role:"Moby",color:"grey",label:"莫比",desc:"最後同時避開亞哈與炸彈客",pair:Y.AhabMoby,src:"pic/role/grey-moby.png"},{key:"greyBomb-Bot",role:"Bomb-Bot",color:"grey",label:"拆彈機器人",desc:"最後和炸彈客待在一起，避開總統",pair:Y.BombBotQueen,src:"pic/role/grey-bomb-bot.png"},{key:"greyQueen",role:"Queen",color:"grey",label:"皇后",desc:"最後同時避開總統與炸彈客",pair:Y.BombBotQueen,src:"pic/role/grey-queen.png"},{key:"greyDecoy",role:"Decoy",color:"grey",label:"誘餌",desc:"被狙擊手打中",pair:Y.DecoyTargetSniper,src:"pic/role/grey-decoy.png"},{key:"greyTarget",role:"Target",color:"grey",label:"目標",desc:"不要被狙擊手打中",pair:Y.DecoyTargetSniper,src:"pic/role/grey-target.png"},{key:"greySniper",role:"Sniper",color:"grey",label:"狙擊手",desc:"打中目標",pair:Y.DecoyTargetSniper,src:"pic/role/grey-sniper.png"},{key:"greyGambler",role:"Gambler",color:"grey",label:"賭徒",desc:"公開預判哪個顏色獲勝",pair:Y.Gambler,src:"pic/role/grey-gambler.png"},{key:"blueAngel",role:"Angel",color:"blue",label:"天使",desc:"只能講真話",pair:Y.Angel,src:"pic/role/blue-angel.png"},{key:"redAngel",role:"Angel",color:"red",label:"天使",desc:"只能講真話",pair:Y.Angel,src:"pic/role/red-angel.png"},{key:"blueDemon",role:"Demon",color:"blue",label:"惡魔",desc:"撒謊",pair:Y.Demon,src:"pic/role/blue-demon.png"},{key:"redDemon",role:"Demon",color:"red",label:"惡魔",desc:"撒謊",pair:Y.Demon,src:"pic/role/red-demon.png"},{key:"blueClown",role:"Clown",color:"blue",label:"啞劇小丑",desc:"永遠不能說話",pair:Y.Mime,src:"pic/role/blue-mime.png"},{key:"redMime",role:"Mime",color:"red",label:"啞劇小丑",desc:"永遠不能說話",pair:Y.Mime,src:"pic/role/red-mime.png"},{key:"blueConman",role:"Conman",color:"blue",label:"騙子",desc:"顏色分享變成卡片分享",pair:Y.Conman,src:"pic/role/blue-conman.png"},{key:"redConman",role:"Conman",color:"red",label:"騙子",desc:"顏色分享變成卡片分享",pair:Y.Conman,src:"pic/role/red-conman.png"},{key:"blueMummy",role:"Mummy",color:"blue",label:"木乃伊",desc:"和你交換卡片的人都成為啞劇小丑",pair:Y.Mummy,src:"pic/role/blue-mummy.png"},{key:"redMummy",role:"Mummy",color:"red",label:"木乃伊",desc:"和你交換卡片的人都成為啞劇小丑",pair:Y.Mummy,src:"pic/role/red-mummy.png"},{key:"blueNegotiator",role:"Negotiator",color:"blue",label:"談判專家",desc:"只能進行卡片分享，不能進行顏色分享",pair:Y.Negotiator,src:"pic/role/blue-negotiator.png"},{key:"redNegotiator",role:"Negotiator",color:"red",label:"談判專家",desc:"只能進行卡片分享，不能進行顏色分享",pair:Y.Negotiator,src:"pic/role/red-negotiator.png"},{key:"drunk",role:"Drunk",color:"purple",label:"醉鬼",desc:"最後一回合清醒過來",pair:Y.Drunk,src:"pic/role/purple-drunk.png"},{key:"zombie",role:"Zombie",color:"green",label:"殭屍",desc:"想辦法把所有人變成殭屍",pair:Y.Zombie,src:"pic/role/green-zombie.png"}],ee=["bluePresident","redBoomer"],re=[{key:"normal",name:"normal",label:"一般",route:"normal",required:[].concat(ee,["blueDoctor","redEngineer"]),options:["blueTuesdayKnight","redDr.Boom","blueEnforcer","redEnforcer","blueSpy","redSpy","blueCoyboy","redCoyboy","bluePapanoid","redPapanoid","blueMayor","redMayor","blueUsurper","redUsurper","blueSecurity","redSecurity","greyGambler"]},{key:"loveAndHate",name:"Love And Hate",route:"love-and-hate",label:"愛恨",required:[].concat(ee,["blueEris","redCupid"]),options:["greyRival","greyIntern","greySurvivor","greyVictim","greyRomeo","greyJuliet","greyButler","greyMaid","greyAhab","greyMoby","greyWife","greyMistress","greyBomb-Bot","greyQueen","greyDecoy","greyTarget","greySniper"]}],oe=o(144),ne=o(782),te=[{value:"three",text:"三局"},{value:"five",text:"五局"}];const le=(0,t.pM)({components:{BFormSelect:K.JR,BFormCheckboxGroup:K.zl,BFormCheckbox:K.GJ,BFormGroup:K.a3,GroupCardPanel:H,FooterCopyright:S,Alert:F,BButtonGroup:K.Mt,BButton:K.PF},setup:function(){var e=(0,s.rd)(),r=(0,ne.Pj)(),o=(0,oe.KR)(!1),n=(0,oe.KR)(te),l=(0,oe.KR)(n.value[0]),a=(0,t.EW)((function(){var e=J.map((function(e){return e.label}));return $.sort((function(r,o){return e.indexOf(r.color)-e.indexOf(o.color)}))})),i={key:"all",name:"自由",label:"自由",route:"normal",required:ee,options:a.value.map((function(e){return e.key})).filter((function(e){return!ee.includes(e)}))},c=(0,t.EW)((function(){return[i].concat(re)})),u=(0,t.EW)((function(){return c.value.map((function(e){return{value:e.key,text:e.label}}))})),d=(0,oe.KR)(u.value[0].value),p=(0,oe.KR)([]),g=(0,t.EW)((function(){return p.value.reduce((function(e,r){return r.checked?e+r.roles.length:e}),0)})),f=(0,t.EW)((function(){return p.value.filter((function(e){return e.checked}))})),y=(0,t.EW)((function(){return m(p.value,4)}));function b(e,r){var o="required"==r,n=v(e,r),t=k(n);return h(t,o)}function m(e,r){for(var o=[],n=0;n<e.length;n+=r)o.push(e.slice(n,n+r));return o}function v(e,r){if(e==i.key)return i[r];var o=c.value.find((function(r){return r.key===e}));return(null===o||void 0===o?void 0:o[r])||[]}function k(e){var r=a.value.filter((function(r){return e.includes(r.key)}));return r}function h(e,r){return e.reduce((function(e,o){var n=e.find((function(e){return e.pair==o.pair}));return n?n.roles.push(o):e.push({pair:o.pair,required:r,roles:[o],checked:r}),e}),[])}(0,t.wB)(d,(function(e){var r=b(e,"required"),o=b(e,"options");p.value=r.concat(o)}),{immediate:!0});var C=(0,t.EW)((function(){return p.value.reduce((function(e,r){return e+r.roles.length}),0)})),S=(0,t.EW)((function(){return C.value==g.value?"bi bi-check-square-fill fill-color":g.value>0?"bi bi-dash-square":"bi bi-square"}));function w(){var e=C.value!==g.value;p.value.forEach((function(r){r.required||(r.checked=e)}))}function E(e,r){for(var o=4*e,n=Math.min(o+4,p.value.length),t=o;t<n;t++){var l=p.value[t];l.required||(l.checked=r)}}function x(e){var r=p.value.find((function(r){return r.pair==e}));r&&!r.required&&(r.checked=!r.checked)}function L(){o.value=!0,console.log(o)}function M(){if(g.value>20)L();else{var o=c.value.find((function(e){return e.key===d.value})),n={roles:f.value,mode:d.value,count:g.value,script:o};r.dispatch("updateGameSetting",n),e.push({path:"/game/".concat(null===o||void 0===o?void 0:o.route)})}}return{modalShow:o,roleOptions:u,selectedModeId:d,groupedRoles:y,countChecked:g,setSingleStatus:x,setGroupStatus:E,submitSetting:M,setAllStatus:w,allStatusStyle:S,selectedRoundOptions:l,roundOptions:n}}}),ae=(0,a.A)(le,[["render",X],["__scopeId","data-v-22e1dade"]]),ie=ae;var ce=o(9975),ue=function(e,r,o,n){var t,l=arguments.length,a=l<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,o):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,m.A)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,n);else for(var i=e.length-1;i>=0;i--)(t=e[i])&&(a=(l<3?t(a):l>3?t(r,o,a):t(r,o))||a);return l>3&&a&&Object.defineProperty(r,o,a),a},se=function(e){function r(){return(0,f.A)(this,r),(0,y.A)(this,r,arguments)}return(0,b.A)(r,e),(0,g.A)(r)}(ce.lD);se=ue([(0,ce.JY)({components:{GameSetting:ie,FooterCopyright:S}})],se);const de=se,pe=(0,a.A)(de,[["render",p],["__scopeId","data-v-027ac61a"]]),ge=pe;function fe(e,r,o,n,l,a){var i=(0,t.g2)("LayoutContainer");return(0,t.uX)(),(0,t.Wv)(i,{data:e.groupedChar,config:e.config},null,8,["data","config"])}var ye=o(9258),be=(o(8350),o(5086),o(237),o(531),o(3579),o(6034),o(1415),o(7642),o(8004),o(3853),o(5876),o(2475),o(5024),o(1698),o(7764),o(2953),{class:"wrap position-relative"}),me={class:"d-flex h-100"};function ve(e,r,o,n,l,a){var i=(0,t.g2)("NavigationSidebar"),c=(0,t.g2)("GameConfigurationSection");return(0,t.uX)(),(0,t.CE)("div",be,[(0,t.Lk)("div",me,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.data,(function(r,o){return(0,t.uX)(),(0,t.Wv)(i,{class:"pannel-wrap",data:r.value,cardWidth:e.cardWidth},null,8,["data","cardWidth"])})),256))]),(0,t.bF)(c,{class:"position-absolute config-wrap",configBgc:e.config.configBgc},null,8,["configBgc"])])}var ke={class:"char-panel"};function he(e,r,o,n,l,a){var i=(0,t.g2)("CardSection");return(0,t.uX)(),(0,t.CE)("div",ke,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.data,(function(r,o){return(0,t.uX)(),(0,t.Wv)(i,{class:"card-section-wrap",data:r,cardWidth:e.cardWidth},null,8,["data","cardWidth"])})),256))])}var Ce={class:"w-100 d-flex justify-content-center"},Se={class:"ver-text card-title m-0"},we={class:"h-100 d-flex flex-column"},Ee={key:0,class:"text-center"},xe={class:"ver-text card-title m-0"};function Le(e,r,o,n,l,a){return(0,t.uX)(),(0,t.CE)("div",Ce,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.RoleArray,(function(r){return(0,t.uX)(),(0,t.CE)("div",{class:"d-flex justify-content-center flex-grow-1 team-wrap",style:(0,w.Tr)([{"background-color":r.color}])},[r.groupedRoles.single?((0,t.uX)(!0),(0,t.CE)(t.FK,{key:0},(0,t.pI)(r.groupedRoles.single,(function(r){return(0,t.uX)(),(0,t.CE)("div",{class:(0,w.C4)(["card-wrap card-background card-padding card-full-height d-flex justify-content-center",r.color]),style:(0,w.Tr)(e.generateStyle(r))},[(0,t.Lk)("p",Se,(0,w.v_)(r.label),1),(0,t.Lk)("p",{class:(0,w.C4)(["ver-text card-desc m-0",r.color])},(0,w.v_)(r.desc),3)],6)})),256)):(0,t.Q3)("",!0),r.groupedRoles.pair?((0,t.uX)(!0),(0,t.CE)(t.FK,{key:1},(0,t.pI)(r.groupedRoles.pair,(function(r){return(0,t.uX)(),(0,t.CE)("div",we,[r.icon?((0,t.uX)(),(0,t.CE)("div",Ee,[(0,t.Lk)("i",{class:(0,w.C4)(["bi",[r.color,"bi-".concat(r.icon)]])},null,2)])):(0,t.Q3)("",!0),(0,t.Lk)("div",{class:(0,w.C4)(["d-flex",[r.icon?"h--30":"h-100"]])},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.card,(function(r){return(0,t.uX)(),(0,t.CE)("div",{class:(0,w.C4)(["card-wrap card-background card-padding d-flex justify-content-center",r.color]),style:(0,w.Tr)(e.generateStyle(r))},[(0,t.Lk)("p",xe,(0,w.v_)(r.label),1),(0,t.Lk)("p",{class:(0,w.C4)(["ver-text card-desc m-0",r.color])},(0,w.v_)(r.desc),3)],6)})),256))],2)])})),256)):(0,t.Q3)("",!0)],4)})),256))])}o(6918),o(3288),o(8781);var Me=[{pair:Y.PresidentBoomer,icon:"person-bounding-box",color:"blue"},{pair:Y.PresidentBoomer,icon:"person-bounding-box",color:"red"},{pair:Y.WifeMistress,icon:"heart-fill",color:"blue"},{pair:Y.RomeoJuliet,icon:"heart-fill",color:"red"},{pair:Y.AhabMoby,icon:"signpost-split-fill",color:"red"},{pair:Y.BombBotQueen,icon:"signpost-split-fill",color:"blue"},{pair:Y.DecoyTargetSniper,icon:"recycle",color:"grey"}],Be=o(8626),Ae=o.n(Be);const Re=(0,t.pM)({name:"CardSection",props:{data:{type:Array,required:!0},cardWidth:{type:Number,default:100}},setup:function(e){var r=(0,t.EW)((function(){return o(e.data)}));function o(e){var r=n(e);return r.map((function(e){return l(e)}))}function n(e){return e.reduce((function(e,r){var o=e.find((function(e){return e.team===r.color}));return o||(o={team:r.color,color:i(r.color),roles:[],groupedRoles:{single:[],pair:[]}},e.push(o)),o.roles.push(r),e}),[])}function l(e){var r=Ae().countBy(e.roles,"pair");return Ae().forEach(r,(function(r,o){var n;if(1===r)(n=e.groupedRoles.single).push.apply(n,(0,ye.A)(e.roles.filter((function(e){return e.pair===+o}))));else if(r>1){var t=Me.find((function(e){return e.pair.toString()==o})),l={color:null===t||void 0===t?void 0:t.color,icon:null===t||void 0===t?void 0:t.icon,card:e.roles.filter((function(e){return e.pair===+o}))};e.groupedRoles.pair.push(l)}})),e}function a(e){return Me[e]}function i(e){var r;return(null===(r=J.find((function(r){return r.label===e})))||void 0===r?void 0:r.color)||"fff"}function c(r){return{"background-image":"url(./".concat(r.src,")"),width:"".concat(Math.round(e.cardWidth),"px")}}return{RoleArray:r,findIcon:a,generateStyle:c}}}),We=(0,a.A)(Re,[["render",Le],["__scopeId","data-v-77257cf4"]]),De=We,_e=(0,t.pM)({name:"NavigationSidebar",components:{CardSection:De},props:{data:{type:Array,required:!0},cardWidth:{type:Number,default:100}},setup:function(e){e.data}}),Ge=(0,a.A)(_e,[["render",he],["__scopeId","data-v-0010ab68"]]),Te=Ge;o(2010);var Ie={class:"position-relative configuration-wrap"},Xe={class:"position-absolute ver-wrap d-flex flex-column"},Pe={class:"w-100 d-flex justify-content-center bi-number-style-wrap pb-50 h-50 align-items-center"},Ke={class:"text-center"},je={class:"d-flex align-items-center"},Oe={class:"title-style"},Fe={class:"subtitle-style rb-fz"},qe={class:"number-style-wrap icon-text-style mt-1"},Ne=["onClick"],Ue={class:"w-100 pt-50 h-50 d-flex justify-content-center align-items-center"},ze={class:"px-6"},Ve={class:"text-start icon-text-style"},Je={class:"d-block"},Qe={class:"fw-bold"},Ze={class:"hostage-icon-container"},He={class:"bi bi-person-walking"},Ye={class:"position-absolute ho-wrap d-flex"},$e={class:"player-style rb-fz text-center"};function er(e,r,o,n,l,a){var i=(0,t.g2)("CountdownTimer");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("div",Ie,[(0,t.bF)(i,{class:"position-absolute timer-wrap",gameRound:e.gameRound,onAddGameRound:e.addGameRound},null,8,["gameRound","onAddGameRound"]),(0,t.Lk)("div",Xe,[(0,t.Lk)("div",Pe,[(0,t.Lk)("div",Ke,[(0,t.Lk)("div",je,[(0,t.Lk)("div",Oe,(0,w.v_)(e.gameMode.label)+"局",1),(0,t.Lk)("i",{class:"d-block bi bi-pencil-square pencil-icon cursor",onClick:r[0]||(r[0]=function(){return e.returnSetting&&e.returnSetting.apply(e,arguments)})})]),(0,t.Lk)("div",Fe,(0,w.v_)(e.gameMode.name.toUpperCase()),1),r[1]||(r[1]=(0,t.Lk)("div",{class:"subtitle-style rb-fz"},"ROUND",-1)),(0,t.Lk)("div",qe,[((0,t.uX)(),(0,t.CE)(t.FK,null,(0,t.pI)(5,(function(r){return(0,t.Lk)("i",{class:(0,w.C4)(["bi bi-number-style cursor",r==e.gameRound+1?"bi-".concat(r,"-circle-fill"):"bi-".concat(r,"-circle")]),onClick:function(o){return e.changeGameRound(r)}},null,10,Ne)})),64))])])]),(0,t.Lk)("div",Ue,[(0,t.Lk)("div",ze,[(0,t.Lk)("p",Ve,[r[4]||(r[4]=(0,t.eW)("討論時間結束後")),r[5]||(r[5]=(0,t.Lk)("span",{class:"d-block"},"請室長在1分鐘內",-1)),(0,t.Lk)("span",Je,[r[2]||(r[2]=(0,t.eW)("選出 ")),(0,t.Lk)("span",Qe,(0,w.v_)(e.quantity),1),r[3]||(r[3]=(0,t.eW)(" 位人質"))])]),(0,t.Lk)("div",Ze,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.quantity,(function(e){return(0,t.uX)(),(0,t.CE)("i",He)})),256)),r[6]||(r[6]=(0,t.Lk)("i",{class:"bi bi-door-open door"},null,-1))])])])]),(0,t.Lk)("div",Ye,[(0,t.Lk)("div",{class:"w-50 pr-25 d-flex justify-content-center",style:(0,w.Tr)({"background-color":e.configBgc[0]})},r[7]||(r[7]=[(0,t.Lk)("div",{class:"mx-auto pic-wrap py-8px"},[(0,t.Lk)("img",{class:"d-block",src:E})],-1)]),4),(0,t.Lk)("div",{class:"w-50 pl-25",style:(0,w.Tr)({"background-color":e.configBgc[1]})},[(0,t.Lk)("p",$e,[(0,t.eW)((0,w.v_)(e.playerCount),1),r[8]||(r[8]=(0,t.Lk)("span",{class:"ml-2"},"Players",-1))])],4)])])])}var rr={class:"position-relative boom-style"},or={class:"boom-wrap d-flex justify-content-center align-items-center"},nr={class:"boom-inner-warp d-flex justify-content-center align-items-center"},tr={class:"text-center"},lr={class:"rb-fz fz-6 mb-12"},ar={class:"timer-banner mb-12"},ir={class:"mb-0 fz-15 clock-fz"};function cr(e,r,o,n,l,a){return(0,t.uX)(),(0,t.CE)("div",rr,[(0,t.Lk)("div",or,[(0,t.Lk)("div",nr,[(0,t.Lk)("div",tr,[(0,t.Lk)("p",lr,"ROUND "+(0,w.v_)(e.gameRound+1),1),r[1]||(r[1]=(0,t.Lk)("p",{class:"fz-5 mb-12"},"討論時間",-1)),(0,t.Lk)("div",ar,[(0,t.Lk)("p",ir,(0,w.v_)(e.formattedTime),1)]),(0,t.Lk)("div",{class:"play-wrap cursor",onClick:r[0]||(r[0]=function(){return e.toggleCountdown&&e.toggleCountdown.apply(e,arguments)})},[(0,t.Lk)("i",{class:(0,w.C4)(["bi",e.btnIsActive?"bi-pause-circle-fill":"bi-play-circle-fill"])},null,2)])])])])])}o(8156),o(6031);var ur=[{key:"START",icon:"bi-alarm"},{key:"PAUSE",icon:"bi-play-circle"},{key:"CONTINUE",icon:"bi-play-circle-fill"}];const sr=(0,t.pM)({name:"CountdownTimer",components:{},props:{gameRound:{type:Number,default:0}},setup:function(e,r){var o=r.emit,n=5,l=1,a=60*n/l,i=(0,oe.KR)(a),c=(0,oe.KR)({icon:ur[1].icon,key:ur[1].key}),u=(0,oe.KR)(!1),s=new Audio("/bgm.mp3"),d=void 0;function p(){u.value=!u.value,u.value?(m(),v()):(f(),k())}function g(){clearInterval(d),d=void 0}function f(){void 0!==d&&g()}function y(){s.currentTime=0,s.pause()}function b(){i.value=a,u.value=!1}function m(){void 0==d&&(d=setInterval((function(){i.value>0?i.value--:(g(),b(),o("addGameRound"))}),1e3*l))}function v(){s.play()}function k(){s.pause()}(0,t.wB)((function(){return e.gameRound}),(function(){g(),b(),y()}));var h=(0,t.EW)((function(){var e=Math.floor(i.value*l/60).toString().padStart(2,"0"),r=Math.floor(i.value*l%60).toString().padStart(2,"0");return"".concat(e," : ").concat(r)}));return(0,t.xo)((function(){y()})),{timeDuration:i,formattedTime:h,toggleCountdown:p,timeStatus:c,btnIsActive:u}}}),dr=(0,a.A)(sr,[["render",cr],["__scopeId","data-v-8806ad00"]]),pr=dr,gr=[3,2,2,1,1],fr=(0,t.pM)({name:"GameConfigurationSection",props:{configBgc:{type:Array,default:function(){return["#942121","#3C55A5"]}}},components:{CountdownTimer:pr},setup:function(){var e=(0,ne.Pj)(),r=(0,s.rd)(),o=(0,oe.KR)(0),n=(0,t.EW)((function(){return gr[o.value]})),l=e.state.gameSetting.count,a=(0,t.EW)((function(){var r=e.state.gameSetting.script||{},o=r.name,n=void 0===o?"":o,t=r.label,l=void 0===t?"":t;return{name:n,label:l}}));function i(e){o.value=e-1}function c(e){o.value<4&&o.value++}function u(){r.push({name:"home"})}return{playerCount:l,gameMode:a,quantity:n,gameRound:o,returnSetting:u,changeGameRound:i,addGameRound:c}}}),yr=(0,a.A)(fr,[["render",er],["__scopeId","data-v-6eb17abc"]]),br=yr,mr=(0,t.pM)({name:"LayoutContainer",components:{GameConfigurationSection:br,NavigationSidebar:Te},props:{data:{type:Array,required:!0},config:{type:Object,required:!0}},setup:function(e){e.data;var r=e.config,o=(0,oe.KR)(window.innerWidth),n=(0,t.EW)((function(){var e=o.value>1280?48:12,n=2*r.space;return((o.value-200)/2-e*n*2)/r.maxCardCount})),l=function(){o.value=window.innerWidth,console.log(n.value)};return(0,t.sV)((function(){window.addEventListener("resize",l)})),(0,t.xo)((function(){window.removeEventListener("resize",l)})),{cardWidth:n}}}),vr=(0,a.A)(mr,[["render",ve],["__scopeId","data-v-17f507ae"]]),kr=vr,hr=(0,t.pM)({name:"GameDashboard",components:{LayoutContainer:kr},setup:function(){var e=(0,ne.Pj)(),r=(0,s.rd)(),o=5;(0,t.wB)(e.state.gameSetting,(function(e){Ae().isEmpty(e)&&r.push({name:"home"})}),{immediate:!0});var n=(0,oe.KR)([]),l=(0,oe.KR)([]),a=(0,t.EW)((function(){var r,o=null===(r=e.state.gameSetting)||void 0===r?void 0:r.roles;return o?u(o):[[],[]]})),i=(0,t.EW)((function(){var r;return null!==(r=e.state.gameSetting)&&void 0!==r&&null!==(r=r.roles)&&void 0!==r&&r.some((function(e){return"grey"===e.color}))?2:1}));function c(e,r){return Ae().flatMap(e,(function(e){return Ae().filter(e.roles,{color:r})}))}function u(r){null===(o=e.state.gameSetting)||void 0===o||null===(o=o.roles)||void 0===o||o.reduce((function(e,r){return e+r.roles.length}),0);var o,t=new Set;r.forEach((function(e){e.roles.forEach((function(e){t.add(e.color)}))}));var a={};t.forEach((function(e){a[e]=c(r,e)}));var i=[],u=[];if(u.push.apply(u,(0,ye.A)(a["red"]||[])),i.push.apply(i,(0,ye.A)(a["blue"]||[])),a["grey"]){var s=a["grey"],p=Ae().groupBy(s,"pair"),g=Object.values(p),f=Math.ceil(g.length/2),y=g.slice(0,f),b=g.slice(f);u.push.apply(u,(0,ye.A)(Ae().flatten(y))),i.push.apply(i,(0,ye.A)(Ae().flatten(b)))}return u.push.apply(u,(0,ye.A)(a["green"]||[])),i.push.apply(i,(0,ye.A)(a["purple"]||[])),n.value=d(u),l.value=d(i),[n,l]}function d(e){if(!e)return[[],[]];if(0===e.length)return[[],[]];var r=Ae().groupBy(e,(function(e){return e.pair||"unpaired"})),o=Object.values(r),n=Math.ceil(o.length/2),t=Ae().flatten(o.slice(0,n)),l=Ae().flatten(o.slice(n));return[t,l]}var p={space:i.value,maxCardCount:o};return{config:p,groupedChar:a}}}),Cr=(0,a.A)(hr,[["render",fe]]),Sr=Cr;function wr(e,r,o,n,l,a){var i=(0,t.g2)("LayoutContainer");return(0,t.uX)(),(0,t.Wv)(i,{data:e.groupedChar,config:e.config},null,8,["data","config"])}var Er=o(8676);const xr=(0,t.pM)({name:"GameDashboard",components:{LayoutContainer:kr},setup:function(){var e=(0,ne.Pj)(),r=(0,s.rd)(),o=6;(0,t.wB)(e.state.gameSetting,(function(e){Ae().isEmpty(e)&&r.push({name:"home"})}),{immediate:!0});var n=(0,oe.KR)([]),l=(0,oe.KR)([]),a=(0,t.EW)((function(){var r,o=null===(r=e.state.gameSetting)||void 0===r?void 0:r.roles;return o?i(o):[[],[]]}));function i(e){var r=function(r){return Ae().flatMap(e,(function(e){return Ae().filter(e.roles,{color:r})}))},o=r("blue"),t=r("red"),a=Ae().flatMap(e,(function(e){return Ae().filter(e.roles,{color:"grey"})})).sort((function(e,r){return e.pair-r.pair})),i=Ae().partition(a,(function(e){return[18,19].includes(e.pair)})),c=(0,Er.A)(i,2),u=c[0],s=c[1],d=[].concat((0,ye.A)(t),(0,ye.A)(o)),p=Ae().partition(s,(function(e){return[12,13,14].includes(e.pair)})),g=(0,Er.A)(p,2),f=g[0],y=g[1],b=u;return n.value=[d,b],l.value=[f,y],[n,l]}var c={space:1,maxCardCount:o,configBgc:["#636564","#636564"]};return{config:c,groupedChar:a}}}),Lr=(0,a.A)(xr,[["render",wr],["__scopeId","data-v-a622419c"]]),Mr=Lr;var Br=[{path:"/",name:"home",component:ge},{path:"/game/normal",name:"gameNormal",component:Sr},{path:"/game/love-and-hate",name:"LoveAndHate",component:Mr}],Ar=(0,s.aE)({history:(0,s.Bt)(),routes:Br});const Rr=Ar,Wr=(0,ne.y$)({state:{gameSetting:{}},mutations:{setGameSetting:function(e,r){e.gameSetting=r}},actions:{updateGameSetting:function(e,r){e.commit("setGameSetting",r)}}});(0,n.Ef)(u).use(Wr).use(Rr).use(K.Ay).mount("#app")}},r={};function o(n){var t=r[n];if(void 0!==t)return t.exports;var l=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}o.m=e,(()=>{o.amdO={}})(),(()=>{var e=[];o.O=(r,n,t,l)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,t,l]=e[s],i=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(s--,1);var u=t();void 0!==u&&(r=u)}}return r}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,t,l]}})(),(()=>{o.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(r,{a:r}),r}})(),(()=>{o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p="https://kamiiliu.github.io/r21b-destop/"})(),(()=>{var e={524:0};o.O.j=r=>0===e[r];var r=(r,n)=>{var t,l,[a,i,c]=n,u=0;if(a.some((r=>0!==e[r]))){for(t in i)o.o(i,t)&&(o.m[t]=i[t]);if(c)var s=c(o)}for(r&&r(n);u<a.length;u++)l=a[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(s)},n=self["webpackChunkmy_vue3_project"]=self["webpackChunkmy_vue3_project"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=o.O(void 0,[504],(()=>o(286)));n=o.O(n)})();
//# sourceMappingURL=app.5b98e591.js.map