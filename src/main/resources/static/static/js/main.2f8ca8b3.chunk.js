(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],[,,,,,function(e,n,r){e.exports=r(12)},,,,,function(e,n,r){},function(e,n,r){},function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t),a=r(3),c=r.n(a),i=(r(10),r(1)),s=r(4);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}var l=function(e){for(var n=e+"=",r=decodeURIComponent(document.cookie).split(";"),t=0;t<r.length;t++){for(var o=r[t];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(n))return o.substring(n.length,o.length)}return""},p=function(e,n){return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(r,!0).forEach(function(n){Object(i.a)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}({},e,{},n)},f=function(e){var n={message:"",playerOneChoice:"",playerTwoChoice:"",playerOneName:"",playerTwoName:"",csrfToken:"",uuid:e.uuid},r=Object(t.useState)(n),a=Object(s.a)(r,2),c=a[0],u=a[1];Object(t.useEffect)(function(){var e=l("XSRF-TOKEN");u(p(c,{csrfToken:e})),u(p(c,{uuid:l("UUID")}))},[c.uuid]);var f=function(e,n){return u(p(e,n))},m=function(e){return f(c,Object(i.a)({},e.target.name,e.target.value))},h=function(e){return console.log(e),["rock","paper","scissors"].includes(e)};return o.a.createElement("div",{className:"gameFormContainer"},c.message&&o.a.createElement("div",{className:"message"},c.message),o.a.createElement("form",{id:"gameForm"},o.a.createElement("input",{name:"playerOneChoice",placeholder:"Player 1 Choice",value:c.playerOneChoice,onChange:m,required:!0}),o.a.createElement("input",{name:"playerTwoChoice",placeholder:"Player 2 Choice",value:c.playerTwoChoice,onChange:m,required:!0}),o.a.createElement("button",{onClick:function(e){e.preventDefault();var n={playerOne:c.playerOneChoice,playerTwo:c.playerTwoChoice,matchId:c.uuid};(h(c.playerOneChoice)||h(c.playerTwoChoice))&&f(c,{message:"Invalid choice!"}),c.playerOneChoice===c.playerTwoChoice&&f(c,{message:"Draw. Play again!"}),fetch("/api",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json","X-XSRF-TOKEN":c.csrfToken},referrer:"no-referrer",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){var n;e?(n=e.message,f(c,{message:n})):u(p(c,{error:e.message}))})}},"PLAY")))},m=(r(11),function(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,{uuid:2}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.2f8ca8b3.chunk.js.map