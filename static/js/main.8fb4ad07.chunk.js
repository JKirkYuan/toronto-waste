(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,n){e.exports=n(91)},89:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r,a=n(1),i=n.n(a),o=n(24),c=n.n(o),u=n(11),l=n(15),s=n.n(l),f=n(7),d=n(50),m=n(18),v=n(45),b=s.a.mark(h);function h(e){var t;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(t=r[e.type])){n.next=5;break}return n.next=5,t(e);case 5:n.next=13;break;case 7:n.prev=7,n.t0=n.catch(0),console.group("Error handling action: ",e.type),console.error("error: ",n.t0),console.log("action: ",e),console.groupEnd();case 13:case"end":return n.stop()}},b,this,[[0,7]])}var p=n(25),O=n(46),g=n.n(O),j="Adding Search Results",w="Request for Waste List",y="Clearing Results for Waste List",E="Adding item to Favorites",k="Removing item from Favorites";function L(e){return{type:w,payload:e}}function x(){return{type:y}}function C(e){return{type:E,payload:e}}function F(e){return{type:k,payload:e}}var S,_=s.a.mark(T),R=function(){return g.a.get("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000")};function T(e){var t,n;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(m.a)(R);case 2:return t=r.sent,n=t.data.filter(function(t){if(t.keywords.includes(e.payload))return t}),r.next=6,Object(m.b)({type:j,payload:n});case 6:case"end":return r.stop()}},_,this)}S=Object(p.a)({},w,T),r=Object(v.a)({},r,S);var I=n(26),W=[],M=[],z=Object(f.c)({wasteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(I.a)(t.payload);case y:return[]}return e},favoritesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return e.includes(t.payload)?e.filter(function(e){return e!==t.payload}):[].concat(Object(I.a)(e),[t.payload]);case k:return e.filter(function(e){return e.title!==t.payload})}return e}}),H=n(47),A=n.n(H),J=s.a.mark(q),N=Object(d.a)();function q(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)(function(){return!0},h);case 2:case"end":return e.stop()}},J,this)}var D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,P=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),B=Object(f.e)(z,P,D(Object(f.a)(N)));B.subscribe(A()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}({favoritesList:B.getState().favoritesList})},1e3)),N.run(q);var X=B,U=(n(89),n(8)),V=n(9),$=n(13),G=n(10),K=n(12),Q=n(3),Y=n(4),Z=n(19),ee=n(23);function te(){var e=Object(Q.a)(["\n    fill: white;\n    padding-top: 2px;\n    height: 2em;\n    width: 2em;\n    transform: scale(-2,2);\n"]);return te=function(){return e},e}function ne(){var e=Object(Q.a)(["\n    margin-left: 1em;\n    width: 4%;\n    height: 4em;\n    background-color: #1f824f;\n    border-radius: 2px;\n    border: none;\n"]);return ne=function(){return e},e}function re(){var e=Object(Q.a)(["\n    font-size: 0.9em;\n    padding: 0.8em 1.4em 0.8em 1.4em;\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 2px;\n    border: 1px solid grey;\n"]);return re=function(){return e},e}function ae(){var e=Object(Q.a)(["\n    margin: 1em;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n"]);return ae=function(){return e},e}var ie=Y.a.div(ae()),oe=Y.a.input(re()),ce=Y.a.button(ne()),ue=Object(Y.a)(ee.a)(te()),le=function(e){function t(e){var n;return Object(U.a)(this,t),(n=Object($.a)(this,Object(G.a)(t).call(this,e))).state={term:""},n.onInputChange=n.onInputChange.bind(Object(Z.a)(Object(Z.a)(n))),n.onFormSubmit=n.onFormSubmit.bind(Object(Z.a)(Object(Z.a)(n))),n}return Object(K.a)(t,e),Object(V.a)(t,[{key:"onInputChange",value:function(e){""===e.currentTarget.value&&this.props.clearWasteResults(),this.setState({term:e.currentTarget.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.wasteRequest(this.state.term.toLowerCase())}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement(ie,null,i.a.createElement(oe,{value:this.state.term,onChange:this.onInputChange}),i.a.createElement(ce,{type:"submit"},i.a.createElement(ue,null))))}}]),t}(a.Component),se=Object(u.b)(null,function(e){return Object(f.b)({wasteRequest:L,clearWasteResults:x},e)})(le);function fe(){var e=Object(Q.a)(["\n    width: 65%;\n    li {\n        padding-bottom: 10px;\n    }\n"]);return fe=function(){return e},e}function de(){var e=Object(Q.a)(["\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    width: 35%;\n"]);return de=function(){return e},e}function me(){var e=Object(Q.a)(["\n    fill: green;\n    height: 1.2em;\n    width: 1.2em;\n    margin: 1em;\n"]);return me=function(){return e},e}function ve(){var e=Object(Q.a)(["\n    fill: grey;\n    height: 1.2em;\n    width: 1.2em;\n    margin: 1em;\n"]);return ve=function(){return e},e}function be(){var e=Object(Q.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return be=function(){return e},e}var he=Y.a.div(be()),pe=Object(Y.a)(ee.b)(ve()),Oe=Object(Y.a)(ee.b)(me()),ge=Y.a.div(de()),je=Y.a.div(fe()),we=function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object($.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(a)))).decodeHTML=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value},n.handleFavoritesClick=function(e){n.props.addToFavorites(e)},n.handleRemoveFavoritesClick=function(e){n.props.removeFromFavorites(e)},n}return Object(K.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this,t=this.props.waste,n=this.decodeHTML(t.body);return this.props.favoritesList.filter(function(e){return e.title===t.title}).length>0?i.a.createElement(he,null,i.a.createElement(Oe,{onClick:function(){return e.handleRemoveFavoritesClick(t.title)}}),i.a.createElement(ge,null,t.title),i.a.createElement(je,{dangerouslySetInnerHTML:{__html:"".concat(n)}})):i.a.createElement(he,null,i.a.createElement(pe,{onClick:function(){return e.handleFavoritesClick(t)}}),i.a.createElement(ge,null,t.title),i.a.createElement(je,{dangerouslySetInnerHTML:{__html:"".concat(n)}}))}}]),t}(i.a.PureComponent);var ye=Object(u.b)(function(e){return{favoritesList:e.favoritesList}},function(e,t){return Object(f.b)({addToFavorites:C,removeFromFavorites:F},e)})(we),Ee=function(e){function t(){return Object(U.a)(this,t),Object($.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(V.a)(t,[{key:"renderList",value:function(){return this.props.wasteList.map(function(e){return i.a.createElement(ye,{key:e.title,waste:e})})}},{key:"render",value:function(){return this.props.wasteList?i.a.createElement("div",null,this.renderList()):i.a.createElement(i.a.Fragment,null)}}]),t}(a.Component);var ke=Object(u.b)(function(e){return{wasteList:e.wasteList}},null)(Ee);function Le(){var e=Object(Q.a)(["\n    font-weight: 700;\n    color: green;\n    font-size: 1.5em;\n    padding: 1em;\n"]);return Le=function(){return e},e}function xe(){var e=Object(Q.a)(["\n    background-color: #f5fef9;\n    height: 100%;\n"]);return xe=function(){return e},e}var Ce=Y.a.div(xe()),Fe=Y.a.div(Le()),Se=function(e){function t(){return Object(U.a)(this,t),Object($.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(V.a)(t,[{key:"renderList",value:function(){return this.props.favoritesList.map(function(e){return i.a.createElement(ye,{key:e.title,waste:e})})}},{key:"render",value:function(){return 0!==this.props.favoritesList.length&&this.props.favoritesList?i.a.createElement(Ce,null,i.a.createElement(Fe,null,"Favourites"),this.renderList()):i.a.createElement(i.a.Fragment,null)}}]),t}(a.Component);var _e=Object(u.b)(function(e){return{favoritesList:e.favoritesList}},null)(Se);function Re(){var e=Object(Q.a)(["\n"]);return Re=function(){return e},e}function Te(){var e=Object(Q.a)(["\n    flex: 1;\n"]);return Te=function(){return e},e}function Ie(){var e=Object(Q.a)(["\n    color: white;\n    font-size: 2.5em;\n    font-weight: 700;\n"]);return Ie=function(){return e},e}function We(){var e=Object(Q.a)(["\n    background-image: linear-gradient(to right, #184680, #005a8b, #006b83, #00786c, #1f824f);\n    height: 15%;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n"]);return We=function(){return e},e}function Me(){var e=Object(Q.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n"]);return Me=function(){return e},e}var ze=Y.a.div(Me()),He=Y.a.header(We()),Ae=Y.a.div(Ie()),Je=Y.a.div(Te()),Ne=Y.a.div(Re()),qe=function(e){function t(){return Object(U.a)(this,t),Object($.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){return i.a.createElement(ze,null,i.a.createElement(He,null,i.a.createElement(Ae,null,"Toronto Waste Lookup")),i.a.createElement(Je,null,i.a.createElement(se,null),i.a.createElement(ke,null)),i.a.createElement(Ne,null,i.a.createElement(_e,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(u.a,{store:X},i.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,2,1]]]);
//# sourceMappingURL=main.8fb4ad07.chunk.js.map