(this.webpackJsonpminting_dapp=this.webpackJsonpminting_dapp||[]).push([[0],{242:function(e,t){},265:function(e,t){},267:function(e,t){},344:function(e,t){},346:function(e,t){},379:function(e,t){},384:function(e,t){},386:function(e,t){},393:function(e,t){},406:function(e,t){},429:function(e,t){},438:function(e,t){},440:function(e,t){},517:function(e,t,n){},518:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i,s,l,d,x,b,j,u,p,h,g,O,f=n(2),y=n(84),m=n.n(y),v=n(16),C=n.n(v),w=n(42),S=n(68),A=n(14),E=n(57),T=n(67),N=n.n(T),k=n(216),_=n.n(k),M=n(69),D=n(217),R=n(18),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(R.a)(Object(R.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(R.a)(Object(R.a)({},I),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(R.a)(Object(R.a)({},e),{},{account:t.payload.account});default:return e}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(R.a)(Object(R.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(R.a)(Object(R.a)({},P),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},K=Object(M.b)({blockchain:L,data:W}),U=[D.a],F=Object(M.c)(M.a.apply(void 0,U)),z=Object(M.d)(K,F),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},B=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},H=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var t=Object(w.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(B());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=n(15),Q=q.a.div(r||(r=Object(A.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),X=q.a.div(c||(c=Object(A.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=q.a.div(a||(a=Object(A.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=q.a.div(o||(o=Object(A.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=q.a.div(i||(i=Object(A.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=q.a.div(s||(s=Object(A.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"gray":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=q.a.p(l||(l=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),te=(q.a.p(d||(d=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),q.a.p(x||(x=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ne=(q.a.div(b||(b=Object(A.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(1)),re=function(e,t){return e.length>t?"".concat(e.substring(0,t),"..."):e},ce=q.a.button(j||(j=Object(A.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ae=q.a.button(u||(u=Object(A.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),oe=q.a.div(p||(p=Object(A.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ie=q.a.img(h||(h=Object(A.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),se=q.a.img(g||(g=Object(A.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px soild var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),le=q.a.a(O||(O=Object(A.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var de=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.blockchain})),n=Object(E.c)((function(e){return e.data})),r=Object(f.useState)(!1),c=Object(S.a)(r,2),a=c[0],o=c[1],i=Object(f.useState)("Click buy to mint your NFT."),s=Object(S.a)(i,2),l=s[0],d=s[1],x=Object(f.useState)(1),b=Object(S.a)(x,2),j=b[0],u=b[1],p=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),h=Object(S.a)(p,2),g=h[0],O=h[1],y=function(){""!==t.account&&null!==t.smartContract&&e(B(t.account))},m=function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){m()}),[]),Object(f.useEffect)((function(){y()}),[t.account]),Object(ne.jsx)(Q,{children:Object(ne.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:g.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(se,{alt:"example",src:"/config/images/polyshards.gif"})}),Object(ne.jsx)(ie,{alt:"logo",src:"/config/images/logo.png"}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(oe,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)(Z,{}),Object(ne.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px soild var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[n.totalSupply," / ",g.MAX_SUPPLY]}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)(le,{target:"_blank",href:g.SCAN_LINK,children:re(g.CONTRACT_ADDRESS,15)})}),Object(ne.jsx)(J,{}),Number(n.totalSupply)>=g.MAX_SUPPLY?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",g.NFT_NAME," on"]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(le,{target:"_blank",href:g.MARKETPLACE_LINK,children:g.MARKETPLACE})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",g.SYMBOL," costs ",g.DISPLAY_COST," ",g.NETWORK.SYMBOL,"."]}),Object(ne.jsx)(X,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(ne.jsx)(J,{}),""===t.account||null===t.smartContract?Object(ne.jsxs)($,{ai:"center",jc:"center",children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",g.NETWORK.NAME," network"]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(ce,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(w.a)(C.a.mark((function e(t){var n,r,c,a,o,i,s,l,d;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=e.sent,e.next=12,c.json();case 12:if(a=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return N.a.setProvider(i),s=new _.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new N.a(r,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){t(G(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(H("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(H("Something went wrong."));case 31:e.next=34;break;case 33:t(H("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),y()},children:"CONNECT"}),""!==t.errorMsg?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(ne.jsx)(V,{}),Object(ne.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(ne.jsx)(ae,{style:{lineHeight:.4},disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=j-1;e<1&&(e=1),u(e)}()},children:"-"}),Object(ne.jsx)(V,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(ne.jsx)(V,{}),Object(ne.jsx)(ae,{disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=j+1;e>2&&(e=2),u(e)}()},children:"+"})]}),Object(ne.jsx)(J,{}),Object(ne.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(ne.jsx)(ce,{disabled:a?1:0,onClick:function(n){n.preventDefault(),function(){var n=g.WEI_COST,r=g.GAS_LIMIT,c=String(n*j),a=String(r*j);console.log("Cost: ",c),console.log("Gas limit: ",a),d("Minting your ".concat(g.NFT_NAME,"...")),o(!0),t.smartContract.methods.mint(j).send({gasLimit:String(a),to:g.CONTRACT_ADDRESS,from:t.account,value:c}).once("error",(function(e){console.log(e),d("Sorry, something went wrong please try again later."),o(!1)})).then((function(n){console.log(n),d("WOW, the ".concat(g.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),e(B(t.account))}))}(),y()},children:a?"BUSY":"BUY"})})]})]}),Object(ne.jsx)(V,{})]}),Object(ne.jsx)(Z,{})]}),Object(ne.jsx)(V,{}),Object(ne.jsxs)(oe,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(se,{alt:"example",src:"/config/images/polyshards.gif"})}),Object(ne.jsx)(Z,{}),Object(ne.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px soild var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ne.jsx)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:"WELCOME TO THE CLUB"}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:"When you buy a Poly shard, you\u2019re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Poly Shard can serve as your digital identity, and open digital doors for you."}),Object(ne.jsx)(J,{}),Object(ne.jsx)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:"Roadmap"}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We\u2019re in this for the long haul.",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"We\u2019ve set up some goalposts for ourselves. Once we hit a target sell through percentage, we will begin to work on realizing the stated goal.",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"10% - We pay back our moms.",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"20% - We lost the shards. 2 Poly Shards were saved (tokens held back from the sale) are airdropped to random PolyShardholders.",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"40% -",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"60% - Member-Exclusive PSD Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies. PolyShardholders can claim an item for free",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"80% - The PSD club becomes interactive and the Mysterious Note becomes legible, beginning a treasure hunt. The first to solve the mystery will be rewarded 250 MATIC and Poly Shard. ",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"90% - The PSD liquidity pool is initiated. ",Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),"100% - The Mutant Shards (NFT Breeding) Arcade Machine launched. And we cook up new ways to shard with our friends. ",Object(ne.jsx)("br",{})]})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(se,{alt:"example",src:"/config/images/polyshards.gif",style:{transform:"scaleX(-1)"}})})]}),Object(ne.jsx)(V,{}),Object(ne.jsxs)(oe,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)(Z,{}),Object(ne.jsx)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px soild var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:Object(ne.jsx)($,{jc:"center",ai:"center",style:{width:"70%"},children:Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(ne.jsx)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:"PSD CONTRACT ADDRESS"}),Object(ne.jsx)(le,{target:"_blank",href:g.SCAN_LINK,children:re(g.CONTRACT_ADDRESS,15)})]})})})]}),Object(ne.jsxs)(oe,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)(Z,{}),Object(ne.jsx)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px soild var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:Object(ne.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",g.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",g.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})})]}),Object(ne.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:"\xa92022 - Poly Shards"}),Object(ne.jsx)(J,{})]})]})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,522)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};n(517);m.a.render(Object(ne.jsx)(E.a,{store:z,children:Object(ne.jsx)(de,{})}),document.getElementById("root")),xe()}},[[518,1,2]]]);
//# sourceMappingURL=main.8e54875b.chunk.js.map