(this["webpackJsonpmovie-react"]=this["webpackJsonpmovie-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(11),a(12),a(13),a(1)),s=a.n(o),i=a(5),m=a(2);function u(e){var t=e.movie;return r.a.createElement("div",{className:"card",key:t.id},r.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),r.a.createElement("div",{className:"card--content"},r.a.createElement("h3",{className:"card--title"},t.title),r.a.createElement("p",null,r.a.createElement("small",null,"RELEASE DATE: ",t.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"RATING: ",t.vote_average)),r.a.createElement("p",{className:"card--desc"},t.overview)))}function p(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),p=o[0],d=o[1],v=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=a6c0f50838ed78cf34adafa914a97163&language=en-US&query=".concat(a,"&page=1&include_adult=true"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,d(c.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:v},r.a.createElement("br",null),r.a.createElement("input",{className:"input",type:"text",name:"query",placeholder:"Insert the movie you want to search, i.e. Jurassic Park",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Search")),r.a.createElement("div",{className:"card-list"},p.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement(u,{movie:e,key:e.id})}))))}var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Search-O-Flix")),r.a.createElement("div",{className:"container"},r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.f9d15fc1.chunk.js.map