(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={index:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="client/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0756":function(t,e,n){"use strict";var a=n("6315"),s=n.n(a);s.a},1:function(t,e){},"18ce":function(t,e,n){},"18e6":function(t,e,n){},"325d":function(t,e,n){"use strict";var a=n("db68"),s=n.n(a);s.a},"387d":function(t,e,n){},3923:function(t,e,n){"use strict";var a=n("5de5"),s=n.n(a);s.a},"4b57":function(t,e,n){"use strict";var a=n("cf4b"),s=n.n(a);s.a},"55c6":function(t,e,n){"use strict";var a=n("18ce"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Authorize",{attrs:{client:t.state.client,socket:t.socket}}),t.state.client.code?n("div",[n("Board",[n("Scores",{attrs:{clients:t.state.clients.clients}}),n("DiscardPile",{attrs:{data:t.state.game.discardDeck}}),n("DrawPile",{attrs:{count:t.state.game.drawDeckCount,socket:t.socket,client:t.state.client}}),n("Player",{attrs:{client:t.state.client,socket:t.socket}}),t._l(t.opponents,(function(e,a){return n("Opponent",{key:a,attrs:{data:e,position:t.getOpponentPosition(a)}})})),t.state.game.winner?n("Popup",{attrs:{type:"win",message:t.state.game.winner+" won!",showButton:!t.state.client.ready,buttonText:"Next round",buttonHandler:t.ready}}):t._e(),t.state.game.winner||t.state.game.ready?t._e():n("Popup",{attrs:{type:"wait",message:"Waiting for game to start",showButton:!t.state.client.ready,buttonText:"Ready!",buttonHandler:t.ready}})],2)],1):t._e(),n("ErrorMessage",{attrs:{messages:t.state.messages}})],1)},i=[],r=n("8055"),c=n.n(r),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("div",{staticClass:"grad"}),t._t("default")],2)},l=[],u={name:"Board"},d=u,p=(n("3923"),n("2877")),f=Object(p["a"])(d,o,l,!1,null,"071a89b0",null),h=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"player"},[n("div",{staticClass:"hand-cards-transform"},t._l(t.cards,(function(e,a){return n("Card",{key:a,attrs:{data:e,clickHandler:t.placeCard}})})),1),n("div",{staticClass:"client-name",class:{active:t.client.turn}},[n("span",[t._v(t._s(t.client.name))])])]),t.showSpecial?n("div",{staticClass:"popup-pos"},[n("div",{staticClass:"popup-before"}),n("div",{staticClass:"popup"},t._l(t.specialCards,(function(e,a){return n("Card",{key:a,attrs:{data:e,clickHandler:t.placeCard}})})),1),n("div",{staticClass:"popup-after"})]):t._e()])},v=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playing-card-placeholder",style:t.transform},[n("div",{staticClass:"playing_card",class:t.data.type,on:{click:function(e){return t.clickHandler(t.data.type)}}},[n("div"),n("div"),n("div")])])},g=[],b={name:"Card",props:["data","clickHandler"],computed:{transform:function(){return{transform:" rotate("+this.data.angle+"deg) translate("+this.data.x+"px,"+this.data.y+"px)"}}}},_=b,C=(n("4b57"),Object(p["a"])(_,y,g,!1,null,"1eb0d94c",null)),x=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name",class:{active:t.turn}},[t._v(t._s(t.name))])},k=[],P={name:"NamePlate",props:["name","turn"]},O=P,j=(n("d92e"),Object(p["a"])(O,w,k,!1,null,"03947edd",null)),E=j.exports,S={name:"Player",props:["client","socket"],components:{Card:x,NamePlate:E},data:function(){return{showSpecial:!1,specialType:""}},computed:{specialCards:function(){let t=[];return t.push({type:"r"+this.specialType,x:200,y:30,angle:0}),t.push({type:"y"+this.specialType,x:300,y:30,angle:0}),t.push({type:"g"+this.specialType,x:400,y:30,angle:0}),t.push({type:"b"+this.specialType,x:500,y:30,angle:0}),t},cards:function(){let t=[];this.client.cards.sort();let e=this.client.cards.length,n=30*e/7;n=Math.min(n,50);let a=-n/2,s=n/2,i=(s-a)/(this.client.cards.length-1),r=a;for(let c=0;c<this.client.cards.length;c++)t.push({type:this.client.cards[c],x:0,y:-600,angle:r}),r+=i;return t}},methods:{placeCard:function(t){"kc"===t?(this.showSpecial=!0,this.specialType="c"):"kg"===t?(this.showSpecial=!0,this.specialType="g"):(this.showSpecial=!1,this.socket.emit("place",{client:this.client,card:t}))}}},M=S,T=(n("58a0"),Object(p["a"])(M,m,v,!1,null,"6d626da0",null)),$=T.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"opponet",style:{left:t.position}},[n("div",{staticClass:"oppo-cards"},t._l(t.cards,(function(e,a){return n("div",{key:a,staticClass:"playing_card back",style:t.transform(e)})})),0),n("div",{staticClass:"oppo-name",class:{active:t.data.turn}},[n("span",[t._v(t._s(this.data.name))])])])},H=[],B={name:"Opponent",props:["data","position"],computed:{cards:function(){let t=[],e=this.data.cardsCount,n=30*e/7;n=Math.min(n,40);let a=-n/2,s=n/2,i=(s-a)/(e-1),r=a;for(let c=0;c<e;c++)t.push({x:0,y:0,angle:r}),r+=i;return t}},methods:{transform:function(t){return{transform:" rotate("+t.angle+"deg) translate("+t.x+"px,"+t.y+"px)"}}}},N=B,A=(n("c25d"),Object(p["a"])(N,D,H,!1,null,"06ef91a1",null)),J=A.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.client.code?t._e():n("div",{staticClass:"login-box"},[n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.room,expression:"room"}],staticClass:"input",attrs:{type:"text",placeholder:"Channel"},domProps:{value:t.room},on:{input:function(e){e.target.composing||(t.room=e.target.value)}}})]),n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.client.name,expression:"client.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Type your name"},domProps:{value:t.client.name},on:{input:function(e){e.target.composing||t.$set(t.client,"name",e.target.value)}}})]),n("div",{staticClass:"row"},[n("div",{staticClass:"big-yellow-button",on:{click:t.login}},[t._v("Join")])])])},R=[],W={name:"Authorize",props:["client","socket"],data:function(){return{error:!1,room:null}},methods:{login:function(){this.client.name.length>0&&(this.socket.emit("create",this.room),this.socket.emit("login",{client:this.client}))}},mounted:function(){}},q=W,F=(n("0756"),Object(p["a"])(q,z,R,!1,null,"0e206edf",null)),G=F.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discard-pos"},t._l(t.cards,(function(t,e){return n("Card",{key:e,attrs:{data:t}})})),1)},K=[],L={name:"DiscardPile",props:["data"],components:{Card:x},data:function(){return{cards:[]}},methods:{addCard:function(t){this.cards.push({type:t,x:10-20*Math.random(),y:10-20*Math.random(),angle:10-20*Math.random()})}},watch:{data:function(t,e){let n=t.filter(t=>!e.includes(t));for(let a=0;a<n.length;a++)this.addCard(n[a]);while(this.cards.length>t.length)this.cards.shift()}},mounted:function(){for(let t=0;t<this.data.length;t++)this.addCard(this.data[t])}},Q=L,U=(n("573c"),Object(p["a"])(Q,I,K,!1,null,"4c84d77d",null)),V=U.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"draw-pos"},t._l(t.cards,(function(e,a){return n("div",{key:a,staticClass:"playing_card back",style:t.transform(e),on:{click:t.takeCard}})})),0)},Y=[],Z={name:"DrawPile",props:["count","socket","client"],data:function(){return{cards:[]}},methods:{transform:function(t){return{transform:"translate("+t.x+"px,"+t.y+"px) rotate("+t.angle+"deg)"}},takeCard:function(){this.socket.emit("take",{client:this.client})}},watch:{count:function(t,e){while(this.cards.length<t)this.cards.push({x:0,y:0,angle:5-10*Math.random()});while(this.cards.length>t)this.cards.pop()}},mounted:function(){while(this.cards.length<this.count)this.cards.push({x:0,y:0,angle:5-10*Math.random()})}},tt=Z,et=(n("f77c"),Object(p["a"])(tt,X,Y,!1,null,"735aebf5",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},st=[],it={name:"ErrorMessage",props:["messages"]},rt=it,ct=(n("55c6"),Object(p["a"])(rt,at,st,!1,null,"7f0619ba",null)),ot=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup"},[n("div",{staticClass:"message",class:t.type},[t._v(t._s(t.message))]),t.showButton?n("div",{staticClass:"block"},[n("div",{staticClass:"big-yellow-button",on:{click:t.buttonHandler}},[t._v(t._s(t.buttonText))])]):t._e()])},ut=[],dt={name:"Popup",props:["type","message","buttonText","buttonHandler","showButton"]},pt=dt,ft=(n("772b"),Object(p["a"])(pt,lt,ut,!1,null,"6e515010",null)),ht=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scores"},t._l(t.clients,(function(e,a){return n("div",{key:a,staticClass:"column"},[n("div",{staticClass:"cell"},[t._v(t._s(e.name))]),t._l(e.score,(function(e,a){return n("div",{key:a,staticClass:"cell"},[t._v(t._s(e))])}))],2)})),0)},vt=[],yt={name:"Popup",props:["clients"]},gt=yt,bt=(n("325d"),Object(p["a"])(gt,mt,vt,!1,null,"5d8bfd83",null)),_t=bt.exports,Ct=(n("8b26"),{name:"clientApp",data:function(){return{socket:c()("http://"+window.location.hostname+":80"),state:{client:{code:null,name:"",ready:!1,turn:!1,cards:[]},clients:{clients:[]},game:{discardDeck:[],drawDeckCount:0,winner:!1,ready:!0},messages:[]},error:"",config:{discardPilePosition:{x:350,y:300},drawPilePosition:{x:50,y:300}}}},components:{Authorize:G,Board:h,Player:$,Opponent:J,DiscardPile:V,DrawPile:nt,ErrorMessage:ot,Popup:ht,Scores:_t},computed:{opponents:function(){let t=[];for(let e=0;e<this.state.clients.clients.length;e++)this.state.clients.clients[e].name!==this.state.client.name&&t.push(this.state.clients.clients[e]);return t}},methods:{getOpponentPosition(t){let e=this.state.clients.clients.length-1,n=800/e;return n/2+t*n-100+"px"},gameStateResponse:function(t){this.state=t},ready:function(){this.state.client.ready=!0,this.socket.emit("begin",{client:this.state.client})}},mounted:function(){this.socket.on("state",this.gameStateResponse)},beforeDestroy:function(){this.socket.disconnect()}}),xt=Ct,wt=(n("b463"),Object(p["a"])(xt,s,i,!1,null,"410a953e",null)),kt=wt.exports,Pt=n("2b27"),Ot=n.n(Pt);a["a"].use(Ot.a),new a["a"]({el:"#clientApp",render:t=>t(kt)})},"573c":function(t,e,n){"use strict";var a=n("fc35"),s=n.n(a);s.a},"58a0":function(t,e,n){"use strict";var a=n("aeab"),s=n.n(a);s.a},"5de5":function(t,e,n){},6315:function(t,e,n){},7107:function(t,e,n){},"772b":function(t,e,n){"use strict";var a=n("387d"),s=n.n(a);s.a},"8b26":function(t){t.exports=JSON.parse("{}")},aeab:function(t,e,n){},b463:function(t,e,n){"use strict";var a=n("e831"),s=n.n(a);s.a},c25d:function(t,e,n){"use strict";var a=n("e7d8"),s=n.n(a);s.a},cf4b:function(t,e,n){},d92e:function(t,e,n){"use strict";var a=n("7107"),s=n.n(a);s.a},db68:function(t,e,n){},e7d8:function(t,e,n){},e831:function(t,e,n){},f77c:function(t,e,n){"use strict";var a=n("18e6"),s=n.n(a);s.a},fc35:function(t,e,n){}});
//# sourceMappingURL=index.31967255.js.map