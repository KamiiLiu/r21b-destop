(()=>{"use strict";var e={444:(e,r,o)=>{o(752),o(3964),o(429),o(6409);var n=o(9242),t=o(3396);function l(e,r){var o=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(o)}var a=o(89);const i={},c=(0,a.Z)(i,[["render",l],["__scopeId","data-v-df82a0fa"]]),u=c;var s=o(2483),d={class:"home"};function p(e,r,o,n,l,a){var i=(0,t.up)("GameSetting");return(0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(i)])}var g=o(2833),f=o(3087),y=o(3806),b=o(2730),v=o(3336),m=(o(1919),o(228),o(6034),o(739),o(6520)),h=o(7139);const w=o.p+"img/logo-red.c817f088.png";var k=function(e){return(0,t.dD)("data-v-fd353120"),e=e(),(0,t.Cn)(),e},S={class:"wrap position-relative"},_=k((function(){return(0,t._)("div",{class:"banner-wrap"},[(0,t._)("div",{class:"mx-1280"},[(0,t._)("div",{class:"banner-img-wrap"},[(0,t._)("img",{src:w})])])],-1)})),C={class:"setting-wrap mx-1280 flex-grow-1"},x=k((function(){return(0,t._)("h1",{class:"title-style text-start mb-6"},"創建遊戲",-1)})),D={class:"d-flex justify-content-between fs-20"},G={class:"d-flex align-items-center mb-4"},R={class:"d-flex align-items-center"},Z=k((function(){return(0,t._)("p",{class:"mb-0 text-nowrap fw-bold"},"卡片牌局：",-1)})),M={class:"count-wrap"},j={class:"mb-0 d-inline-block fw-bold"},P={class:"fw-normal"},B={key:0,class:"fw-bold fs-red ml-2"},O={class:"d-flex flex-wrap group-card-wrap flex-grow-1"},q={class:"d-flex justify-content-center"};function I(e,r,o,n,l,a){var i=(0,t.up)("BFormSelect"),c=(0,t.up)("GroupCardPanel"),u=(0,t.up)("FooterCopyright"),s=(0,t.up)("Alert");return(0,t.wg)(),(0,t.iD)("div",S,[_,(0,t._)("div",C,[x,(0,t._)("div",D,[(0,t._)("div",G,[(0,t._)("div",R,[Z,(0,t.Wm)(i,{modelValue:e.selectedModeId,"onUpdate:modelValue":r[0]||(r[0]=function(r){return e.selectedModeId=r}),options:e.roleOptions},null,8,["modelValue","options"])]),(0,t._)("div",M,[(0,t._)("p",j,[(0,t.Uk)("人數："),(0,t._)("span",P,(0,h.zw)(e.countChecked),1),e.countChecked>20?((0,t.wg)(),(0,t.iD)("span",B,"(人數已達上限20人)")):(0,t.kq)("",!0)])])]),(0,t._)("div",null,[(0,t._)("p",{class:"mb-0 text-end cursor fw-bold",onClick:r[1]||(r[1]=function(){return e.setAllStatus&&e.setAllStatus.apply(e,arguments)})},[(0,t._)("i",{class:(0,h.C_)(["mr-12",e.allStatusStyle])},null,2),(0,t.Uk)("全選")])])]),(0,t._)("div",O,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.groupedRoles,(function(r,o){return(0,t.wg)(),(0,t.j4)(c,{class:"group-card-panel",data:r,index:o,onSetGroupStatus:e.setGroupStatus,onSetSingleStatus:e.setSingleStatus},null,8,["data","index","onSetGroupStatus","onSetSingleStatus"])})),256))]),(0,t._)("div",q,[(0,t._)("div",{class:"button-style cursor fw-bold",onClick:r[2]||(r[2]=function(){return e.submitSetting&&e.submitSetting.apply(e,arguments)})},"Game Start")])]),(0,t.Wm)(u,{class:"position-absolute bottom-0 start-0"}),(0,t.Wm)(s,{show:e.modalShow,"onUpdate:modalShow":r[3]||(r[3]=function(r){return e.modalShow=r})},null,8,["show"])])}o(886),o(278),o(8077),o(4338),o(560),o(9730),o(5728),o(6801),o(3843),o(9693),o(7522);var T=o(2578),F=o(4870),U=o(65),z={class:"banner-wrap w-100 p-2"},A=(0,t._)("p",{class:"footer-text text-end"},"Copyright © 2023 by Paulina Tong and Kami Liu. ",-1),H=(0,t._)("p",{class:"text-end footer-text"},"All rights reserved.",-1),E=[A,H];function N(e,r,o,n,l,a){return(0,t.wg)(),(0,t.iD)("div",z,E)}const K=(0,t.aZ)({name:"FooterCopyright"}),W=(0,a.Z)(K,[["render",N]]),Y=W;var L=["onClick"],V={class:"mr-12"},J={class:"d-flex justify-content-between flex-grow-1"},Q={class:"mb-0 pole-style w-50 text-start"};function X(e,r,o,n,l,a){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",{class:"text-start title-style cursor",onClick:r[0]||(r[0]=function(r){return e.setGroupStatus()})},[(0,t._)("i",{class:(0,h.C_)(["mr-12",e.groupedStatusStyle])},null,2),(0,t.Uk)("角色-zone "+(0,h.zw)(e.index+1),1)]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.data,(function(r){return(0,t.wg)(),(0,t.iD)("div",{class:"d-flex roles-style cursor",onClick:function(o){return e.setSingleStatus(r.pair)}},[(0,t._)("div",V,[(0,t._)("i",{class:(0,h.C_)(["bi",e.setSingleCheckColor(r.checked,r.required)])},null,2)]),(0,t._)("div",J,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(null===r||void 0===r?void 0:r.roles,(function(r){return(0,t.wg)(),(0,t.iD)("p",Q,[(0,t._)("i",{class:"bi mr-12 bi-person-badge icon-color",style:(0,h.j5)(e.SetTeamColor(r.color))},null,4),(0,t.Uk)((0,h.zw)(r.label),1)])})),256))])],8,L)})),256))])}o(9288);const $=JSON.parse('[{"label":"blue","color":"#5595D5","colorDark":"1d3a5d"},{"label":"red","color":"#CC333C","colorDark":"#401618"},{"label":"grey","color":"#808080","colorDark":"#4c4c4c"}]'),ee=(0,t.aZ)({name:"GroupCardPanel",props:{data:{type:Array,default:function(){return[]}},index:{type:Number}},setup:function(e,r){var o=r.emit,n=$,l=(0,t.Fl)((function(){var r;return null===(r=e.data)||void 0===r?void 0:r.length})),a=(0,t.Fl)((function(){var r;return null===(r=e.data.filter((function(e){return e.checked})))||void 0===r?void 0:r.length})),i=(0,t.Fl)((function(){return a.value==l.value?"bi bi-check-square-fill fill-color":a.value>0?"bi bi-dash-square":"bi bi-square"}));function c(e){var r,o=null===(r=n.find((function(r){return r.label==e})))||void 0===r?void 0:r.color;return{"--color":o}}function u(e,r){return r?"bi-check-square-fill checked-disable-color":e?"bi-check-square-fill fill-color":"bi-square"}function s(){var r=l.value!=a.value;o("setGroupStatus",e.index,r)}function d(e){o("setSingleStatus",e)}return{SetTeamColor:c,groupedStatusStyle:i,setSingleStatus:d,setGroupStatus:s,setSingleCheckColor:u}}}),re=(0,a.Z)(ee,[["render",X],["__scopeId","data-v-cd90e55a"]]),oe=re;var ne=function(e){return(0,t.dD)("data-v-180676fa"),e=e(),(0,t.Cn)(),e},te=ne((function(){return(0,t._)("i",{class:"d-block text-center bi bi-exclamation-octagon-fill fs-48 icon-color"},null,-1)})),le=ne((function(){return(0,t._)("p",{class:"mb-0 text-center"},"角色人數已達系統上限20人。",-1)})),ae=ne((function(){return(0,t._)("p",{class:"mb-0 text-center"},"請取消不需要的角色後，再開始遊戲。",-1)}));function ie(e,r,o,n,l,a){var i=(0,t.up)("BModal");return(0,t.wg)(),(0,t.j4)(i,{modelValue:e.showLoc,"onUpdate:modelValue":r[1]||(r[1]=function(r){return e.showLoc=r}),"hide-footer":"","hide-header":"",centered:"",modalClass:"backdrop-blur","content-class":"p-6 position-relative"},{default:(0,t.w5)((function(){return[(0,t._)("i",{class:"bi bi-x-lg close-icon position-absolute cursor",onClick:r[0]||(r[0]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)})}),te,le,ae]})),_:1},8,["modelValue"])}const ce=(0,t.aZ)({name:"GameDashboard",props:{show:{type:Boolean,default:!1}},components:{BModal:T.Nk},setup:function(e,r){var o=r.emit,n=(0,t.Fl)({get:function(){return e.show},set:function(e){return o("update:show",e)}});function l(){o("update:modalShow",!1),n.value=!n.value,console.log(n.value)}return{showLoc:n,closeModal:l}}}),ue=(0,a.Z)(ce,[["render",ie],["__scopeId","data-v-180676fa"]]),se=ue,de=JSON.parse('[{"key":"bluePresident","role":"President","color":"blue","label":"總統","desc":"最後不與炸彈客在同一個房間","pair":1,"src":"pic/role/blue-president.png"},{"key":"redBomer","role":"Bomer","color":"red","label":"炸彈客","desc":"最後與總統在同一個房間","pair":1,"src":"pic/role/red-bomer.png"},{"key":"blueDoctor","role":"Doctor","color":"blue","label":"醫生","desc":"遊戲結束前與總統分享卡片","pair":2,"src":"pic/role/blue-doctor.png"},{"key":"redEngineer","role":"Engineer","color":"red","label":"工程師","desc":"遊戲結束前與炸彈客分享卡片","pair":2,"src":"pic/role/red-engineer.png"},{"key":"blueTuesdayKnight","role":"TuesdayKnight","color":"blue","label":"星期二騎士","desc":"跟炸彈客分享卡片，藍隊直接獲勝","pair":3,"src":"pic/role/blue-tuesdayknight.png"},{"key":"redDr.Boom","role":"Dr.Boom","color":"red","label":"砰砰博士","desc":"跟總統分享卡片，紅隊直接獲勝","pair":3,"src":"pic/role/red-drboom.png"},{"key":"blueEnforcer","role":"Enforcer","color":"blue","label":"執法者","desc":"強制兩位玩家交換卡片","pair":4,"src":"pic/role/blue-enforcer.png"},{"key":"redEnforcer","role":"Enforcer","color":"red","label":"執法者","desc":"強制兩位玩家交換卡片","pair":4,"src":"pic/role/red-enforcer.png"},{"key":"blueSpy","role":"Spy","color":"blue","label":"藍隊間諜","desc":"卡片顏色與隊伍相反","pair":5,"src":"pic/role/blue-spy.png"},{"key":"redSpy","role":"Spy","color":"red","label":"紅隊間諜","desc":"卡片顏色與隊伍相反","pair":5,"src":"pic/role/red-spy.png"},{"key":"blueCoyboy","role":"Coyboy","color":"blue","label":"靦腆少年","desc":"你只能執行分享顏色","pair":6,"src":"pic/role/blue-coyboy.png"},{"key":"redCoyboy","role":"Coyboy","color":"red","label":"靦腆少年","desc":"你只能執行分享顏色","pair":6,"src":"pic/role/red-coyboy.png"},{"key":"bluePapanoid","role":"Papanoid","color":"blue","label":"妄想者","desc":"五個回合內只能執行一次卡片分享","pair":7,"src":"pic/role/blue-papanoid.png"},{"key":"redPapanoid","role":"Papanoid","color":"red","label":"妄想者","desc":"五個回合內只能執行一次卡片分享","pair":7,"src":"pic/role/red-papanoid.png"},{"key":"blueMayor","role":"Mayor","color":"blue","label":"市長","desc":"公開後，一票值兩票","pair":8,"src":"pic/role/blue-mayor.png"},{"key":"redMayor","role":"Mayor","color":"red","label":"市長","desc":"公開後，一票值兩票","pair":8,"src":"pic/role/red-mayor.png"},{"key":"blueUsurper","role":"Usurper","color":"blue","label":"篡位者","desc":"在前四回合中，室長篡位一次","pair":9,"src":"pic/role/blue-usurper.png"},{"key":"redUsurper","role":"Usurper","color":"red","label":"篡位者","desc":"在前四回合中，室長篡位一次","pair":9,"src":"pic/role/red-usurper.png"},{"key":"blueSecurity","role":"Security","color":"blue","label":"保安","desc":"可以扣留一名房間成員不作為人質","pair":10,"src":"pic/role/blue-security.png"},{"key":"redSecurity","role":"Security","color":"red","label":"保安","desc":"可以扣留一名房間成員不作為人質","pair":10,"src":"pic/role/red-security.png"},{"key":"blueEris","role":"Eris","color":"blue","label":"紛爭女神厄里斯","desc":"你展示卡片的兩人，勝利條件變為終局處於不同房間","pair":11,"src":"pic/role/blue-eris.png"},{"key":"redCupid","role":"Cupid","color":"red","label":"愛神丘比特","desc":"你展示卡片的兩人，勝利條件變為終局處於同個房間","pair":11,"src":"pic/role/red-cupid.png"},{"key":"greyRival","role":"Rival","color":"grey","label":"競爭者","desc":"最後與總統在不同房間","pair":12,"src":"pic/role/grey-rival.png"},{"key":"greyIntern","role":"Intern","color":"grey","label":"實習生","desc":"最後與總統在同個房間","pair":12,"src":"pic/role/grey-intern.png"},{"key":"greySurvivor","role":"Survivor","color":"grey","label":"倖存者","desc":"最後與炸彈客在不同房間","pair":13,"src":"pic/role/grey-survivor.png"},{"key":"greyVictim","role":"Victim","color":"grey","label":"受害者","desc":"最後與炸彈客在同個房間","pair":13,"src":"pic/role/grey-victim.png"},{"key":"greyRomeo","role":"Romeo","color":"grey","label":"羅密歐","desc":"最後與茱麗葉和炸彈客在同一個房間","pair":14,"src":"pic/role/grey-romeo.png"},{"key":"greyJuliet","role":"Juliet","color":"grey","label":"茱麗葉","desc":"最後與羅密歐和炸彈客在同一個房間","pair":14,"src":"pic/role/grey-juliet.png"},{"key":"greyButler","role":"Butler","color":"grey","label":"管家","desc":"最後與女僕和總統在同一個房間","pair":15,"src":"pic/role/grey-butler.png"},{"key":"greyMaid","role":"Maid","color":"grey","label":"女僕","desc":"最後與管家和總統在同一個房間","pair":15,"src":"pic/role/grey-maid.png"},{"key":"greyAhab","role":"Ahab","color":"grey","label":"亞哈","desc":"最後同時避開莫比與炸彈客","pair":16,"src":"pic/role/grey-ahab.png"},{"key":"greyMoby","role":"Moby","color":"grey","label":"莫比","desc":"最後同時避開亞哈與炸彈客","pair":16,"src":"pic/role/grey-moby.png"},{"key":"greyWife","role":"Wife","color":"grey","label":"妻子","desc":"最後和總統待在一起，避開情婦","pair":17,"src":"pic/role/grey-wife.png"},{"key":"greyMistress","role":"Mistress","color":"grey","label":"情婦","desc":"最後和總統待在一起，避開妻子","pair":17,"src":"pic/role/grey-mistress.png"},{"key":"greyBomb-Bot","role":"Bomb-Bot","color":"grey","label":"拆彈機器人","desc":"最後和炸彈客待在一起，避開總統","pair":18,"src":"pic/role/grey-bomb-bot.png"},{"key":"greyQueen","role":"Queen","color":"grey","label":"皇后","desc":"最後同時避開總統與炸彈客","pair":18,"src":"pic/role/grey-queen.png"},{"key":"greyDecoy","role":"Decoy","color":"grey","label":"誘餌","desc":"被狙擊手打中","pair":19,"src":"pic/role/grey-decoy.png"},{"key":"greyTarget","role":"Target","color":"grey","label":"目標","desc":"不要被狙擊手打中","pair":19,"src":"pic/role/grey-target.png"},{"key":"greySniper","role":"Sniper","color":"grey","label":"狙擊手","desc":"打中目標","pair":19,"src":"pic/role/grey-sniper.png"},{"key":"greyGambler","role":"Gambler","color":"grey","label":"賭徒","desc":"公開預判哪個顏色獲勝","pair":20,"src":"pic/role/grey-gambler.png"}]'),pe=JSON.parse('[{"key":0,"name":"nomal","label":"一般","route":"nomal","required":["bluePresident","redBomer","blueDoctor","redEngineer"],"options":["blueTuesdayKnight","redDr.Boom","blueEnforcer","redEnforcer","blueSpy","redSpy","blueCoyboy","redCoyboy","bluePapanoid","redPapanoid","blueMayor","redMayor","blueUsurper","redUsurper","blueSecurity","redSecurity","greyGambler"]},{"key":1,"name":"Love And Hate","route":"love-and-hate","label":"愛恨","required":["bluePresident","redBomer"],"options":["blueEris","redCupid","greyRival","greyIntern","greySurvivor","greyVictim","greyRomeo","greyJuliet","greyButler","greyMaid","greyAhab","greyMoby","greyWife","greyMistress","greyBomb-Bot","greyQueen","greyDecoy","greyTarget","greySniper"]}]'),ge=(0,t.aZ)({components:{BFormSelect:T.KB,BFormCheckboxGroup:T.x0,BFormCheckbox:T.lD,BFormGroup:T.xH,GroupCardPanel:oe,FooterCopyright:Y,Alert:se},setup:function(){var e=(0,s.tv)(),r=(0,U.oR)(),o=(0,F.iH)(!1),n=pe.map((function(e){return{value:e.key,text:e.label}})),l=(0,F.iH)(n[0].value),a=(0,F.iH)([]),i=(0,t.Fl)((function(){return a.value.reduce((function(e,r){return r.checked?e+r.roles.length:e}),0)})),c=(0,t.Fl)((function(){return a.value.filter((function(e){return e.checked}))})),u=(0,t.Fl)((function(){return p(a.value,4)}));function d(e,r){var o="required"==r,n=g(e,r),t=f(n);return y(t,o)}function p(e,r){for(var o=[],n=0;n<e.length;n+=r)o.push(e.slice(n,n+r));return o}function g(e,r){var o=[],n=pe.find((function(r){return r.key===e}));return n&&(o=n[r]),o}function f(e){var r=de.filter((function(r){return e.includes(r.key)}));return r}function y(e,r){return e.reduce((function(e,o){var n=e.find((function(e){return e.pair==o.pair}));return n?n.roles.push(o):e.push({pair:o.pair,required:r,roles:[o],checked:r}),e}),[])}(0,t.YP)(l,(function(e){var r=d(e,"required"),o=d(e,"options");a.value=r.concat(o)}),{immediate:!0});var b=(0,t.Fl)((function(){return a.value.reduce((function(e,r){return e+r.roles.length}),0)})),v=(0,t.Fl)((function(){return b.value==i.value?"bi bi-check-square-fill fill-color":i.value>0?"bi bi-dash-square":"bi bi-square"}));function m(){var e=b.value!=i.value;a.value.forEach((function(r){r.required||(r.checked=e)}))}function h(e,r){for(var o=4*e;o<4*e+4;o++)if(o<a.value.length){var n=a.value[o];n.required||(n.checked=r)}}function w(e){var r=a.value.find((function(r){return r.pair==e}));r&&!r.required&&(r.checked=!r.checked)}function k(){o.value=!0,console.log(o)}function S(){var o=pe[l.value],n={roles:c.value,mode:l.value,count:i.value};i.value>20?k():(r.dispatch("updateGameSetting",n),e.push({path:"/game/".concat(o.route)}))}return{modalShow:o,roleOptions:n,selectedModeId:l,groupedRoles:u,countChecked:i,setSingleStatus:w,setGroupStatus:h,submitSetting:S,setAllStatus:m,allStatusStyle:v}}}),fe=(0,a.Z)(ge,[["render",I],["__scopeId","data-v-fd353120"]]),ye=fe;var be=function(e,r,o,n){var t,l=arguments.length,a=l<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,o):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,v.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,n);else for(var i=e.length-1;i>=0;i--)(t=e[i])&&(a=(l<3?t(a):l>3?t(r,o,a):t(r,o))||a);return l>3&&a&&Object.defineProperty(r,o,a),a},ve=function(e){(0,y.Z)(o,e);var r=(0,b.Z)(o);function o(){return(0,f.Z)(this,o),r.apply(this,arguments)}return(0,g.Z)(o)}(m.w3);ve=be([(0,m.Ei)({components:{GameSetting:ye}})],ve);const me=ve,he=(0,a.Z)(me,[["render",p],["__scopeId","data-v-10f156c6"]]),we=he;function ke(e,r,o,n,l,a){var i=(0,t.up)("NomalPannel");return(0,t.wg)(),(0,t.j4)(i)}var Se={class:"wrap position-relative"},_e={class:"d-flex h-100"};function Ce(e,r,o,n,l,a){var i=(0,t.up)("GroupedCharPannel"),c=(0,t.up)("GameConfigurationSection");return(0,t.wg)(),(0,t.iD)("div",Se,[(0,t._)("div",_e,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.groupedChar,(function(r,o){return(0,t.wg)(),(0,t.j4)(i,{class:"pannel-wrap",data:r.value,color:e.COLOR_LIST[o]},null,8,["data","color"])})),256))]),(0,t.Wm)(c,{class:"position-absolute config-wrap"})])}var xe=o(9584),De=(o(4564),o(385),o(4806)),Ge=o.n(De);function Re(e,r,o,n,l,a){var i=(0,t.up)("CardSection");return(0,t.wg)(),(0,t.iD)("div",{class:"char-panel",style:(0,h.j5)({backgroundColor:e.color})},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.groupedChar,(function(e,r){return(0,t.wg)(),(0,t.j4)(i,{class:"card-section-wrap",data:e},{default:(0,t.w5)((function(){return[(0,t._)("p",null,(0,h.zw)(e),1)]})),_:2},1032,["data"])})),256))],4)}var Ze={class:"w-100"},Me={class:"d-flex justify-content-center"},je={class:"ver-text card-title m-0"};function Pe(e,r,o,n,l,a){return(0,t.wg)(),(0,t.iD)("div",Ze,[(0,t._)("div",Me,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.data,(function(e){return(0,t.wg)(),(0,t.iD)("div",{class:(0,h.C_)(["card-wrap d-flex justify-content-center position-relative",e.color]),style:(0,h.j5)("background-image: url('./".concat(e.src,"')"))},[(0,t._)("p",je,(0,h.zw)(e.label),1),(0,t._)("p",{class:(0,h.C_)(["ver-text card-desc m-0",e.color])},(0,h.zw)(e.desc),3)],6)})),256))])])}const Be=(0,t.aZ)({name:"CardSection",props:{data:{type:Array,required:!0}},setup:function(e,r){r.emit;function o(e){return"./".concat(e)}return{getImageSrc:o}}}),Oe=(0,a.Z)(Be,[["render",Pe],["__scopeId","data-v-a0997b6e"]]),qe=Oe,Ie=(0,t.aZ)({name:"GroupedCharPannel",components:{CardSection:qe},props:{data:{type:Array,required:!0},color:{type:String,required:!0}},setup:function(e){var r=e.data,o=(0,t.Fl)((function(){var e=5;return console.log(r.length),r?[r.slice(0).slice(0,e),r.slice(0).slice(e,1e3)]:[[],[]]}));return{groupedChar:o}}}),Te=(0,a.Z)(Ie,[["render",Re],["__scopeId","data-v-723df031"]]),Fe=Te;o(4284);var Ue=function(e){return(0,t.dD)("data-v-4fdf3c7c"),e=e(),(0,t.Cn)(),e},ze={class:"position-relative configuration-wrap"},Ae={class:"position-absolute ver-wrap d-flex flex-column"},He={class:"w-100 d-flex justify-content-center bi-number-style-wrap pb-50 h-50 align-items-center"},Ee={class:"text-center"},Ne={class:"d-flex align-items-center"},Ke={class:"title-style"},We={class:"subtitle-style rb-fz"},Ye=Ue((function(){return(0,t._)("div",{class:"subtitle-style rb-fz"},"ROUND",-1)})),Le={class:"number-style-wrap icon-text-style mt-1"},Ve=["onClick"],Je={class:"w-100 pt-50 h-50 d-flex justify-content-center align-items-center"},Qe={class:"px-6"},Xe={class:"text-start icon-text-style"},$e=Ue((function(){return(0,t._)("span",{class:"d-block"},"請室長在1分鐘內",-1)})),er={class:"d-block"},rr={class:"fw-bold"},or={class:"hostage-icon-container"},nr={class:"bi bi-person-walking"},tr=Ue((function(){return(0,t._)("i",{class:"bi bi-door-open door"},null,-1)})),lr={class:"position-absolute ho-wrap d-flex"},ar=Ue((function(){return(0,t._)("div",{class:"mx-auto pic-wrap"},[(0,t._)("img",{class:"d-block",src:w})],-1)})),ir=[ar],cr={class:"player-style rb-fz text-center"},ur=Ue((function(){return(0,t._)("span",{class:"ml-2"},"Players",-1)}));function sr(e,r,o,n,l,a){var i=(0,t.up)("CountdownTimer");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",ze,[(0,t.Wm)(i,{class:"position-absolute timer-wrap",gameRound:e.gameRound,onAddGameRound:e.addGameRound},null,8,["gameRound","onAddGameRound"]),(0,t._)("div",Ae,[(0,t._)("div",He,[(0,t._)("div",Ee,[(0,t._)("div",Ne,[(0,t._)("div",Ke,(0,h.zw)(e.gameMode.label)+"局",1),(0,t._)("i",{class:"d-block bi bi-pencil-square pencil-icon cursor",onClick:r[0]||(r[0]=function(){return e.returnSetting&&e.returnSetting.apply(e,arguments)})})]),(0,t._)("div",We,(0,h.zw)(e.gameMode.name.toUpperCase()),1),Ye,(0,t._)("div",Le,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(5,(function(r){return(0,t._)("i",{class:(0,h.C_)(["bi bi-number-style cursor",r==e.gameRound+1?"bi-".concat(r,"-circle-fill"):"bi-".concat(r,"-circle")]),onClick:function(o){return e.changeGameRound(r)}},null,10,Ve)})),64))])])]),(0,t._)("div",Je,[(0,t._)("div",Qe,[(0,t._)("p",Xe,[(0,t.Uk)("討論時間結束後"),$e,(0,t._)("span",er,[(0,t.Uk)("選出 "),(0,t._)("span",rr,(0,h.zw)(e.quantity),1),(0,t.Uk)(" 位人質")])]),(0,t._)("div",or,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.quantity,(function(e){return(0,t.wg)(),(0,t.iD)("i",nr)})),256)),tr])])])]),(0,t._)("div",lr,[(0,t._)("div",{class:"w-50 pr-25",style:(0,h.j5)({"background-color":e.leftColor})},ir,4),(0,t._)("div",{class:"w-50 pl-25",style:(0,h.j5)({"background-color":e.rightColor})},[(0,t._)("p",cr,[(0,t.Uk)((0,h.zw)(e.playerCount),1),ur])],4)])])])}var dr=function(e){return(0,t.dD)("data-v-254e87c6"),e=e(),(0,t.Cn)(),e},pr={class:"position-relative boom-style"},gr={class:"boom-wrap d-flex justify-content-center align-items-center"},fr={class:"boom-inner-warp d-flex justify-content-center align-items-center"},yr={class:"text-center"},br={class:"rb-fz fz-6 mb-12"},vr=dr((function(){return(0,t._)("p",{class:"fz-5 mb-12"},"討論時間",-1)})),mr={class:"timer-banner mb-12"},hr={class:"mb-0 fz-15 clock-fz"},wr=dr((function(){return(0,t._)("i",{class:"bi bi-play-circle-fill"},null,-1)})),kr=[wr];function Sr(e,r,o,n,l,a){return(0,t.wg)(),(0,t.iD)("div",pr,[(0,t._)("div",gr,[(0,t._)("div",fr,[(0,t._)("div",yr,[(0,t._)("p",br,"ROUND "+(0,h.zw)(e.gameRound+1),1),vr,(0,t._)("div",mr,[(0,t._)("p",hr,(0,h.zw)(e.formattedTime),1)]),(0,t._)("div",{class:"play-wrap cursor",onClick:r[0]||(r[0]=function(){return e.pressCountdownButton&&e.pressCountdownButton.apply(e,arguments)})},kr)])])])])}o(6869),o(8472),o(8932),o(24),o(2826);var _r=[{key:"START",icon:"bi-alarm"},{key:"PAUSE",icon:"bi-play-circle"},{key:"CONTINUE",icon:"bi-play-circle-fill"}];const Cr=(0,t.aZ)({name:"CountdownTimer",components:{},props:{gameRound:{type:Number,default:0}},setup:function(e,r){var o=r.emit,n=1,l=1,a=60*n/l,i=(0,F.iH)(a),c=(0,F.iH)({icon:_r[1].icon,key:_r[1].key}),u=(0,F.iH)(!1);function s(){u.value=!u.value,p()}var d=void 0;function p(){void 0===d&&(d=setInterval((function(){i.value>0?i.value--:(clearInterval(d),d=void 0,i.value=a,u.value=!1,o("addGameRound"))}),1e3*l))}var g=(0,t.Fl)((function(){var e=Math.floor(i.value*l/60).toString().padStart(2,"0"),r=Math.floor(i.value*l%60).toString().padStart(2,"0");return"".concat(e," : ").concat(r)}));return{timeDuration:i,formattedTime:g,pressCountdownButton:s,timeStatus:c,btnIsActive:u}}}),xr=(0,a.Z)(Cr,[["render",Sr],["__scopeId","data-v-254e87c6"]]),Dr=xr,Gr=[3,2,2,1,1],Rr=(0,t.aZ)({name:"GameConfigurationSection",props:{leftColor:{type:String,default:"#942121"},rightColor:{type:String,default:"#3C55A5"}},components:{CountdownTimer:Dr},setup:function(){var e=(0,U.oR)(),r=(0,s.tv)(),o=(0,F.iH)(0),n=(0,t.Fl)((function(){return Gr[o.value]})),l=e.state.gameSetting.count,a=(0,t.Fl)((function(){var r,o=(null===(r=e.state.gameSetting)||void 0===r?void 0:r.mode)||0,n=pe[o],t=n.name,l=n.label;return{name:t,label:l}}));function i(e){o.value=e-1}function c(e){o.value++}function u(){r.push({name:"home"})}return{playerCount:l,gameMode:a,quantity:n,gameRound:o,returnSetting:u,changeGameRound:i,addGameRound:c}}}),Zr=(0,a.Z)(Rr,[["render",sr],["__scopeId","data-v-4fdf3c7c"]]),Mr=Zr,jr=(0,t.aZ)({name:"NomalPannel",components:{GameConfigurationSection:Mr,GroupedCharPannel:Fe},setup:function(){var e=(0,U.oR)(),r=(0,F.iH)([]),o=(0,F.iH)([]),n=["#CC333C","#5595D5"],l=(0,t.Fl)((function(){var r,o=null===(r=e.state.gameSetting)||void 0===r?void 0:r.roles;return o?a(o):[[],[]]}));function a(e){var n=Ge().flatMap(e,(function(e){return Ge().filter(e.roles,{color:"blue"})})),t=Ge().flatMap(e,(function(e){return Ge().filter(e.roles,{color:"red"})})),l=Ge().flatMap(e,(function(e){return Ge().filter(e.roles,{color:"grey"})})),a=(null===n||void 0===n?void 0:n.length)+(null===l||void 0===l?void 0:l.length)-10;if(a>0){var i=10-n.length||0;r.value=[].concat((0,xe.Z)(t),(0,xe.Z)(l.slice(0).slice(i,100))),o.value=[].concat((0,xe.Z)(n),(0,xe.Z)(l.slice(0).slice(0,i)))}else r.value=(0,xe.Z)(t),o.value=[].concat((0,xe.Z)(n),(0,xe.Z)(l));return[r,o]}return{groupedChar:l,COLOR_LIST:n}}}),Pr=(0,a.Z)(jr,[["render",Ce],["__scopeId","data-v-593bf190"]]),Br=Pr,Or=(0,t.aZ)({name:"GameDashboard",components:{NomalPannel:Br},setup:function(){var e=(0,U.oR)(),r=(0,s.tv)();return(0,t.YP)(e.state.gameSetting,(function(e){Ge().isEmpty(e)&&r.push({name:"home"})}),{immediate:!0}),{}}}),qr=(0,a.Z)(Or,[["render",ke]]),Ir=qr;var Tr={class:"wrap"};function Fr(e,r,o,n,l,a){var i=(0,t.up)("GameConfigurationSection"),c=(0,t.up)("NomalPannel");return(0,t.wg)(),(0,t.iD)("div",Tr,[(0,t.Wm)(i),(0,t.Wm)(c)])}const Ur=(0,t.aZ)({name:"GameDashboard",components:{NomalPannel:Br,GameConfigurationSection:Mr},setup:function(){var e=(0,U.oR)(),r=(0,s.tv)();return(0,t.YP)(e.state.gameSetting,(function(e){Ge().isEmpty(e)&&r.push({name:"home"})}),{immediate:!0}),{}}}),zr=(0,a.Z)(Ur,[["render",Fr],["__scopeId","data-v-09b5dc66"]]),Ar=zr;var Hr=[{path:"/",name:"home",component:we},{path:"/game/nomal",name:"gameNomal",component:Ir},{path:"/game/love-and-hate",name:"LoveAndHate",component:Ar}],Er=(0,s.p7)({history:(0,s.r5)(),routes:Hr});const Nr=Er,Kr=(0,U.MT)({state:{gameSetting:{}},mutations:{setGameSetting:function(e,r){e.gameSetting=r}},actions:{updateGameSetting:function(e,r){e.commit("setGameSetting",r)}}});(0,n.ri)(u).use(Kr).use(Nr).use(T.ZP).mount("#app")}},r={};function o(n){var t=r[n];if(void 0!==t)return t.exports;var l=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}o.m=e,(()=>{o.amdO={}})(),(()=>{var e=[];o.O=(r,n,t,l)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,t,l]=e[s],i=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(s--,1);var u=t();void 0!==u&&(r=u)}}return r}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,t,l]}})(),(()=>{o.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(r,{a:r}),r}})(),(()=>{o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p="https://kamiiliu.github.io/R21B/"})(),(()=>{var e={143:0};o.O.j=r=>0===e[r];var r=(r,n)=>{var t,l,[a,i,c]=n,u=0;if(a.some((r=>0!==e[r]))){for(t in i)o.o(i,t)&&(o.m[t]=i[t]);if(c)var s=c(o)}for(r&&r(n);u<a.length;u++)l=a[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(s)},n=self["webpackChunkmy_vue3_project"]=self["webpackChunkmy_vue3_project"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=o.O(void 0,[998],(()=>o(444)));n=o.O(n)})();
//# sourceMappingURL=app.98fe7aef.js.map