(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,n){e.exports=n(78)},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r,a=n(1),i=n.n(a),c=n(24),o=n.n(c),u=n(11),l=n(15),s=n.n(l),f=n(7),d=n(46),b=n(18),m=n(42),h=s.a.mark(v);function v(e){var t;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(t=r[e.type])){n.next=5;break}return n.next=5,t(e);case 5:n.next=13;break;case 7:n.prev=7,n.t0=n.catch(0),console.group("Error handling action: ",e.type),console.error("error: ",n.t0),console.log("action: ",e),console.groupEnd();case 13:case"end":return n.stop()}},h,this,[[0,7]])}var p=n(25),O=n(43),j=n.n(O),g="Adding Search Results",w="Request for Waste List",y="Clearing Results for Waste List",E="Adding item to Favorites";function k(e){return{type:w,payload:e}}function L(){return{type:y}}function x(e){return{type:E,payload:e}}var C,_=s.a.mark(S),F=function(){return j.a.get("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000")};function S(e){var t,n;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(b.a)(F);case 2:return t=r.sent,n=t.data.filter(function(t){if(t.keywords.includes(e.payload))return t}),r.next=6,Object(b.b)({type:g,payload:n});case 6:case"end":return r.stop()}},_,this)}C=Object(p.a)({},w,S),r=Object(m.a)({},r,C);var T=n(26),R=[],I=[],W=Object(f.c)({wasteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(T.a)(t.payload);case y:return[]}return e},favoritesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return e.includes(t.payload)?e.filter(function(e){return e!==t.payload}):[].concat(Object(T.a)(e),[t.payload])}return e}}),M=s.a.mark(H),z=Object(d.a)();function H(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)(function(){return!0},v);case 2:case"end":return e.stop()}},M,this)}var A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,q=Object(f.e)(W,A(Object(f.a)(z)));z.run(H);var D=q,P=(n(76),n(8)),B=n(9),J=n(13),N=n(10),X=n(12),U=n(3),V=n(4),$=n(19),G=n(23);function K(){var e=Object(U.a)(["\n    fill: white;\n    padding-top: 2px;\n    height: 2em;\n    width: 2em;\n    transform: scale(-2,2);\n"]);return K=function(){return e},e}function Q(){var e=Object(U.a)(["\n    margin-left: 1em;\n    width: 4%;\n    height: 4em;\n    background-color: #1f824f;\n    border-radius: 2px;\n    border: none;\n"]);return Q=function(){return e},e}function Y(){var e=Object(U.a)(["\n    font-size: 0.9em;\n    padding: 0.8em 1.4em 0.8em 1.4em;\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 2px;\n    border: 1px solid grey;\n"]);return Y=function(){return e},e}function Z(){var e=Object(U.a)(["\n    margin: 1em;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n"]);return Z=function(){return e},e}var ee=V.a.div(Z()),te=V.a.input(Y()),ne=V.a.button(Q()),re=Object(V.a)(G.a)(K()),ae=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(J.a)(this,Object(N.a)(t).call(this,e))).state={term:""},n.onInputChange=n.onInputChange.bind(Object($.a)(Object($.a)(n))),n.onFormSubmit=n.onFormSubmit.bind(Object($.a)(Object($.a)(n))),n}return Object(X.a)(t,e),Object(B.a)(t,[{key:"onInputChange",value:function(e){""===e.currentTarget.value&&this.props.clearWasteResults(),this.setState({term:e.currentTarget.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.wasteRequest(this.state.term)}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement(ee,null,i.a.createElement(te,{value:this.state.term,onChange:this.onInputChange}),i.a.createElement(ne,{type:"submit"},i.a.createElement(re,null))))}}]),t}(a.Component),ie=Object(u.b)(null,function(e){return Object(f.b)({wasteRequest:k,clearWasteResults:L},e)})(ae);function ce(){var e=Object(U.a)(["\n    width: 65%;\n    li {\n        padding-bottom: 10px;\n    }\n"]);return ce=function(){return e},e}function oe(){var e=Object(U.a)(["\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    width: 35%;\n"]);return oe=function(){return e},e}function ue(){var e=Object(U.a)(["\n    fill: green;\n    height: 1.2em;\n    width: 1.2em;\n    margin: 1em;\n"]);return ue=function(){return e},e}function le(){var e=Object(U.a)(["\n    fill: grey;\n    height: 1.2em;\n    width: 1.2em;\n    margin: 1em;\n"]);return le=function(){return e},e}function se(){var e=Object(U.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return se=function(){return e},e}var fe=V.a.div(se()),de=Object(V.a)(G.b)(le()),be=Object(V.a)(G.b)(ue()),me=V.a.div(oe()),he=V.a.div(ce()),ve=function(e){function t(){var e,n;Object(P.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(J.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(a)))).decodeHTML=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value},n.handleFavoritesClick=function(e){n.props.addToFavorites(e)},n}return Object(X.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this,t=this.props.waste,n=this.decodeHTML(t.body);return this.props.favoritesList.filter(function(e){return e.title===t.title}).length>0?i.a.createElement(fe,null,i.a.createElement(be,{onClick:function(){return e.handleFavoritesClick(t)}}),i.a.createElement(me,null,t.title),i.a.createElement(he,{dangerouslySetInnerHTML:{__html:"".concat(n)}})):i.a.createElement(fe,null,i.a.createElement(de,{onClick:function(){return e.handleFavoritesClick(t)}}),i.a.createElement(me,null,t.title),i.a.createElement(he,{dangerouslySetInnerHTML:{__html:"".concat(n)}}))}}]),t}(i.a.PureComponent);var pe=Object(u.b)(function(e){return{favoritesList:e.favoritesList}},function(e,t){return Object(f.b)({addToFavorites:x},e)})(ve),Oe=function(e){function t(){return Object(P.a)(this,t),Object(J.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(B.a)(t,[{key:"renderList",value:function(){return this.props.wasteList.map(function(e){return i.a.createElement(pe,{key:e.title,waste:e})})}},{key:"render",value:function(){return this.props.wasteList?i.a.createElement("div",null,this.renderList()):i.a.createElement(i.a.Fragment,null)}}]),t}(a.Component);var je=Object(u.b)(function(e){return{wasteList:e.wasteList}},null)(Oe);function ge(){var e=Object(U.a)(["\n    font-weight: 700;\n    color: green;\n    font-size: 1.5em;\n    padding: 1em;\n"]);return ge=function(){return e},e}function we(){var e=Object(U.a)(["\n    background-color: #f5fef9;\n    height: 100%;\n"]);return we=function(){return e},e}var ye=V.a.div(we()),Ee=V.a.div(ge()),ke=function(e){function t(){return Object(P.a)(this,t),Object(J.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(B.a)(t,[{key:"renderList",value:function(){return this.props.favoritesList.map(function(e){return i.a.createElement(pe,{key:e.title,waste:e})})}},{key:"render",value:function(){return 0!==this.props.favoritesList.length&&this.props.favoritesList?i.a.createElement(ye,null,i.a.createElement(Ee,null,"Favourites"),this.renderList()):i.a.createElement(i.a.Fragment,null)}}]),t}(a.Component);var Le=Object(u.b)(function(e){return{favoritesList:e.favoritesList}},null)(ke);function xe(){var e=Object(U.a)(["\n"]);return xe=function(){return e},e}function Ce(){var e=Object(U.a)(["\n    flex: 1;\n"]);return Ce=function(){return e},e}function _e(){var e=Object(U.a)(["\n    color: white;\n    font-size: 2.5em;\n    font-weight: 700;\n"]);return _e=function(){return e},e}function Fe(){var e=Object(U.a)(["\n    background-image: linear-gradient(to right, #184680, #005a8b, #006b83, #00786c, #1f824f);\n    height: 15%;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n"]);return Fe=function(){return e},e}function Se(){var e=Object(U.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n"]);return Se=function(){return e},e}var Te=V.a.div(Se()),Re=V.a.header(Fe()),Ie=V.a.div(_e()),We=V.a.div(Ce()),Me=V.a.div(xe()),ze=function(e){function t(){return Object(P.a)(this,t),Object(J.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(X.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return i.a.createElement(Te,null,i.a.createElement(Re,null,i.a.createElement(Ie,null,"Toronto Waste Lookup")),i.a.createElement(We,null,i.a.createElement(ie,null),i.a.createElement(je,null)),i.a.createElement(Me,null,i.a.createElement(Le,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(u.a,{store:D},i.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,2,1]]]);
//# sourceMappingURL=main.d59c9792.chunk.js.map