(this.webpackJsonpmoviereact=this.webpackJsonpmoviereact||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/posterNotFound.f1004ffe.jpg"},29:function(e,t,a){e.exports=a(65)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),r=a.n(l),o=(a(34),a(2)),i=(a(35),a(3)),s=(a(36),a(1)),m=function(){return c.a.createElement("div",{className:"container-header p-2"},c.a.createElement("div",{className:"header-left"},c.a.createElement("div",{className:"btn btn-default genre-list"},c.a.createElement("i",{className:"fa fa-list bg-bgicon p-1 rounded "})),c.a.createElement("h2",{className:"bg-fmv rounded p-1"},c.a.createElement(s.b,{className:"link",to:"/movie-info-with-react"},"GETMOVIES"))),c.a.createElement("div",{className:"header-right"},c.a.createElement("span",{className:"p-1"},c.a.createElement(s.b,{to:"/movie-info-with-react"},"Login"))))},u=a(28),p=a.n(u),f=function(e){return"https://image.tmdb.org/t/p/original".concat(e)},b=function(e){e.target.onerror=null,e.target.src=p.a},E=(a(42),a(4)),d=a.n(E),g=function(e){var t=e.nowPlaying,a=e.activeIndex,n=e.setActiveIndex;return c.a.createElement("ul",{className:"carousel__indicators"},t.slice(0,10).map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{className:t==a?"carousel__indicator carousel__indicator--active":"carousel__indicator",onClick:function(e){return function(e){n(e)}(t)}}))})))},v=function(e){var t=e.direction,a=e.activeIndex,n=e.setActiveIndex;return c.a.createElement("a",{href:"#",className:"carousel__arrow carousel__arrow--".concat(t),onClick:function(e){return function(e){e.preventDefault();var c=a;"left"===t?c<1?c=9:--c:"right"===t&&(9==c?c=0:++c),n(c)}(e)}},c.a.createElement("span",{className:"fa fa-2x fa-angle-".concat(t)}))},h=function(e){var t=e.genreById,a=Object(n.useState)([]),l=Object(o.a)(a,2),r=l[0],i=l[1];Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/now_playing",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){i(e.data.results)})).catch((function(e){console.log(e)}))}),[]);var m=Object(n.useState)(0),u=Object(o.a)(m,2),p=u[0],E=u[1];return c.a.createElement("div",{className:"carousel-container"},c.a.createElement("div",{className:"carousel"},c.a.createElement(v,{direction:"left",activeIndex:p,setActiveIndex:E}),c.a.createElement("ul",{className:"slides"},r.slice(0,10).map((function(e,a){return c.a.createElement("li",{className:a==p?"slide slide--active":"slide",key:a},c.a.createElement("div",{className:"img-backdrop"},c.a.createElement("img",{src:f(e.backdrop_path),alt:e.title,onError:b}),c.a.createElement("div",null,c.a.createElement("h1",null,c.a.createElement(s.b,{to:"/movie/".concat(e.id)},e.title," (",e.release_date.split("-")[0],")")),c.a.createElement("p",null,c.a.createElement("span",null,"TMDb "),e.vote_average),c.a.createElement("ul",null,c.a.createElement("span",null,"Genre: ")," ",e.genre_ids?e.genre_ids.map((function(e,a){return c.a.createElement("li",{key:a},t[e])})):null))))}))),c.a.createElement(v,{direction:"right",activeIndex:p,setActiveIndex:E}),c.a.createElement(g,{nowPlaying:r,activeIndex:p,setActiveIndex:E})))},N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/top_rated",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){l(e.data.results)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"container-fluid sr-container bg-bgc mb-3"},c.a.createElement("h3",{className:"text-fmv pl-4"},"Top Rated movies"),c.a.createElement("ul",{className:"row justify-content-center sr-row pl-3 mt-4"},a?a.slice(0,18).map((function(e){return c.a.createElement("li",{key:e.id,className:"col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 sr-col pl-1 pr-1 mb-2 "},c.a.createElement(s.b,{to:"/movie/".concat(e.id)},c.a.createElement("img",{src:f(e.poster_path),alt:e.title,onError:b}),c.a.createElement("p",{className:""},e.title)))})):null))},j=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){l(e.data.results)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"container-fluid sr-container bg-bgc mb-3"},c.a.createElement("h3",{className:"text-fmv pl-4"},"Popular movies"),c.a.createElement("ul",{className:"row justify-content-center sr-row pl-3 mt-4"},a?a.slice(0,18).map((function(e){return c.a.createElement("li",{key:e.id,className:"col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 sr-col pl-1 pr-1 mb-2 "},c.a.createElement(s.b,{to:"/movie/".concat(e.id)},c.a.createElement("img",{src:f(e.poster_path),alt:e.title,onError:b}),c.a.createElement("p",{className:""},e.title)))})):null))},y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/upcoming",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){l(e.data.results)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"container-fluid sr-container bg-bgc mb-3"},c.a.createElement("h3",{className:"text-fmv pl-4"},"Upcoming movies"),c.a.createElement("ul",{className:"row justify-content-center sr-row pl-3 mt-4"},a?a.slice(0,18).map((function(e){return c.a.createElement("li",{key:e.id,className:"col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 sr-col pl-1 pr-1 mb-2 "},c.a.createElement(s.b,{to:"/movie/".concat(e.id)},c.a.createElement("img",{src:f(e.poster_path),alt:e.title,onError:b}),c.a.createElement("p",{className:""},e.title)))})):null))},O=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){var t={};e.data.genres.map((function(e){t[e.id]=e.name})),l(t)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{style:{backgroundColor:"#1e2129"}},c.a.createElement(h,{genreById:a}),c.a.createElement(j,null),c.a.createElement(N,null),c.a.createElement(y,null))},_=(a(60),a(61),function(e){e.setSearchQuery;var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(n.useContext)(F),m=Object(i.e)(),u=function(e){e.preventDefault(),l?(s.setSearchQuery(l),m.push("/search_results/".concat(l.split(" ").join("_"),"/1"))):m.push("/movie-info-with-react")};return c.a.createElement("form",{className:"container-searchbox m-3",onSubmit:u},c.a.createElement("input",{type:"text",className:"form-control p-2",placeholder:"Search movie...",value:l,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn-outline-fmv bg-fmv text-white",onClick:u},c.a.createElement("i",{className:"fa fa-search "})))}),k=function(){return c.a.createElement("div",{className:"container-searchpage"},c.a.createElement("div",{className:"logo "},c.a.createElement("h1",{className:"bg-fmv rounded p-1 mt-4 mb-3 text-white"},"GETMOVIES")),c.a.createElement(_,null),c.a.createElement("p",{style:{fontSize:"1.2em",textAlign:"center",padding:"1em 1.5em "}},"getmovies - Just the place for getting reviews of movies!"," "),c.a.createElement("div",{className:"homebtn"},c.a.createElement(s.b,{to:"/Home",className:"btn btn-primary btn-lg bg-fmv mt-2 "},"Go to Home page")))},x=(a(62),function(e){var t=e.movieId,a=Object(n.useState)([]),l=Object(o.a)(a,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){console.log(e),i(e.data.cast)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("ul",null,c.a.createElement("span",null,"Credits:"),r.map((function(e,t){if(t<6)return c.a.createElement("li",{style:{listStyle:"none",margin:"0 8px"},key:t},c.a.createElement(s.b,{to:"/people/".concat(e.id),className:"cast-list text-fmv"},e.name),","," ")})))}),w=function(){var e=Object(i.f)(),t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(i.e)();return Object(n.useEffect)((function(){l||s.push("/movie-info-with-react")}),[l]),Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/movie/".concat(e.id),{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"container-fluid p-0 container-item bg-bgc text-white"},c.a.createElement("div",{className:"error-loading"}),c.a.createElement("div",{className:"container-movie-detail"},c.a.createElement("div",{className:"img-backdrop"},c.a.createElement("img",{src:f(l.backdrop_path),alt:l.title,onError:b}),c.a.createElement("div",null,c.a.createElement("h1",null,l.title),c.a.createElement("p",null,l.tagline),c.a.createElement("ul",null,c.a.createElement("span",null,"Genre: ")," ",l.genres?l.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})):null))),c.a.createElement("div",{className:"row pl-5 pr-5 pb-5 movie-detail "},c.a.createElement("img",{className:"offset-lg-1 col-xl-3 col-lg-3 col-md-4 col-sm-4 img-poster",src:f(l.poster_path),alt:l.title,onError:b}),c.a.createElement("div",{className:"offset-xl-1 offset-lg-1 offset-sm-1 col-lg-6 col-md-6 col-sm-6 align-self-center descriptions"},c.a.createElement("p",null,c.a.createElement("span",null,"Overview:")," ",l.overview),c.a.createElement(x,{movieId:e.id}),c.a.createElement("p",null,c.a.createElement("span",null,"Release Date:")," ",l.release_date),c.a.createElement("p",null,c.a.createElement("span",null,"Box Office Revenue:")," ",l.revenue," USD"),c.a.createElement("p",null,c.a.createElement("span",null,"language:")," ",l.original_language),c.a.createElement("p",null,c.a.createElement("span",null,"adult:")," ",l.adult?"true":"false"),c.a.createElement("ul",null,c.a.createElement("span",null,"movie by:"),l.production_companies?l.production_companies.map((function(e){return c.a.createElement("li",{key:e.id},e.name," ")})):null),c.a.createElement("p",null,"ratings: ",l.vote_average,"/10 amongst"," ",l.vote_count," voters")))))},S=a(10),C=function(e){var t=e.searchQuery,a=e.totalPages,l=Object(n.useState)(1),r=Object(o.a)(l,2),i=r[0],m=r[1],u=function(e){for(var t=[],a=1;a<=e;a++)t.push(a);return t}(a);return c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",Object(S.a)({className:"page-item",key:"fp"},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(s.b,{className:"page-link bg-fmv text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/1"),onClick:function(){m(1)}},"<<")),1!==i?c.a.createElement("li",Object(S.a)({className:"page-item",key:"pp"},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(s.b,{className:"page-link bg-fmv text-white border-0",onClick:function(){m(i-1)},to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(i-1)},"<")):null,u.map((function(e,a){return e===i?c.a.createElement("li",Object(S.a)({className:"page-item",key:a},"className","btn btn-outline-primary bg-primary p-1 mr-1"),c.a.createElement(s.b,{className:"page-link bg-primary text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(e),onClick:function(){m(e)}},e)):e<i&&e>i-3||e>i&&e<i+3?c.a.createElement("li",Object(S.a)({className:"page-item",key:a},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(s.b,{className:"page-link bg-fmv text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(e),onClick:function(){m(e)}},e)):void 0})),i!==a?c.a.createElement("li",Object(S.a)({className:"page-item",key:"np"},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(s.b,{className:"page-link bg-fmv text-white border-0",onClick:function(){m(i+1)},to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(i+1)},">")):null,c.a.createElement("li",Object(S.a)({className:"page-item",key:"lp"},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(s.b,{className:"page-link bg-fmv text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(a),onClick:function(){m(a)}},">>"))))},I=(a(63),function(){var e=Object(i.f)(),t=Object(n.useContext)(F).searchQuery,a=Object(n.useState)(0),l=Object(o.a)(a,2),r=l[0],m=l[1],u=Object(n.useState)([]),p=Object(o.a)(u,2),E=p[0],g=p[1],v=Object(i.e)();return Object(n.useEffect)((function(){t||v.push("/movie-info-with-react")}),[t]),Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63",query:t,page:e.pageNo}}).then((function(e){console.log("movies"),console.log(e.data),m(e.data.total_pages),g(e.data.results)})).catch((function(e){console.log(e)}))}),[t,e.pageNo]),c.a.createElement("div",{className:"container-fluid sr-container bg-bgc"},c.a.createElement("h4",{style:{color:"#FFF",textAlign:"center"}},'search results for "',t,'"'),c.a.createElement(C,{searchQuery:t,totalPages:r}),c.a.createElement("ul",{className:"row justify-content-center sr-row pl-3 mt-4"},E?E.map((function(e){return c.a.createElement("li",{key:e.id,className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 sr-col pl-1 pr-1 mb-2 "},c.a.createElement(s.b,{to:"/movie/".concat(e.id)},c.a.createElement("img",{src:f(e.poster_path),alt:e.title,onError:b}),c.a.createElement("p",{className:""},e.title)))})):null))}),Q=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/person/".concat(e),{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){l(e.data.name)})).catch((function(e){console.log(e)}))}),[]),c},A=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){d.a.get("https://api.themoviedb.org/3/person/".concat(e,"/movie_credits"),{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){console.log(e),l(e.data.cast)})).catch((function(e){console.log(e)}))}),[]),c},P=function(){var e=Object(i.f)().id,t=Q(e),a=A(e);return console.log(a),c.a.createElement("div",{className:"container-fluid sr-container bg-bgc pt-3"},c.a.createElement("h4",{style:{color:"#FFF",textAlign:"center"}},"Other movies by ",t,"."),c.a.createElement("ul",{className:"row justify-content-center sr-row pl-3 mt-4"},a?a.map((function(e){return c.a.createElement("li",{key:e.id,className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 sr-col pl-1 pr-1 mb-2 "},c.a.createElement(s.b,{to:"/movie/".concat(e.id)},c.a.createElement("img",{src:f(e.poster_path),alt:e.title,onError:b}),c.a.createElement("p",{className:""},e.title)))})):null))},F=c.a.createContext();c.a.createContext();var B=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"br-bgc"},c.a.createElement(F.Provider,{value:{searchQuery:a,setSearchQuery:l}},c.a.createElement(m,null)),c.a.createElement(F.Provider,{value:{searchQuery:a,setSearchQuery:l}},c.a.createElement(i.a,{exact:!0,path:"/movie-info-with-react",component:k})),c.a.createElement(i.a,{exact:!0,path:"/Home",component:O}),c.a.createElement(i.a,{exact:!0,path:"/movie/:id",component:w}),c.a.createElement(i.a,{exact:!0,path:"/people/:id",component:P}),c.a.createElement(F.Provider,{value:{searchQuery:a}},c.a.createElement(i.a,{exact:!0,path:"/search_results/:searchQuery/:pageNo",component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(64);r.a.render(c.a.createElement(s.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.cc106ac5.chunk.js.map