(this.webpackJsonpmoviereact=this.webpackJsonpmoviereact||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/posterNotFound.f1004ffe.jpg"},29:function(e,t,a){e.exports=a(65)},34:function(e,t,a){},35:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),r=a.n(l),o=(a(34),a(4)),i=(a(35),a(9)),s=a.n(i),m=a(2),u=(a(53),a(1)),f=(a(54),function(e){e.setSearchQuery;var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1],i=Object(n.useContext)(S),s=Object(m.e)(),u=function(e){e.preventDefault(),l?(i.setSearchQuery(l),s.push("/search_results/".concat(l.split(" ").join("_"),"/1"))):s.push("/movie-info-with-react")};return c.a.createElement("form",{className:"container-searchbox m-3",onSubmit:u},c.a.createElement("input",{type:"text",className:"form-control p-2",placeholder:"Search movie...",value:l,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn-outline-fmv bg-fmv text-white",onClick:u},c.a.createElement("i",{className:"fa fa-search "})))}),p=function(){return c.a.createElement("div",{className:"container-header p-2"},c.a.createElement("div",{className:"header-left"},c.a.createElement("div",{className:"btn btn-default genre-list"},c.a.createElement("i",{className:"fa fa-list bg-bgicon p-1 rounded "})),c.a.createElement("h2",{className:"bg-fmv rounded p-1"},c.a.createElement(u.b,{className:"link",to:"/movie-info-with-react"},"GETMOVIES"))),c.a.createElement("div",{className:"header-right"},c.a.createElement("span",{className:"p-1"},c.a.createElement(u.b,{to:"/movie-info-with-react"},"Login"))))},b=a(28),v=a.n(b),E=function(e){return"https://image.tmdb.org/t/p/original".concat(e)},d=function(e){e.target.onerror=null,e.target.src=v.a},g=(a(60),function(e){var t=e.nowPlaying,a=e.activeIndex,n=e.setActiveIndex;return c.a.createElement("ul",{className:"carousel__indicators"},t.slice(0,10).map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{className:t==a?"carousel__indicator carousel__indicator--active":"carousel__indicator",onClick:function(e){return function(e){n(e)}(t)}}))})))}),h=function(e){var t=e.direction,a=e.activeIndex,n=e.setActiveIndex;return c.a.createElement("a",{href:"#",className:"carousel__arrow carousel__arrow--".concat(t),onClick:function(e){return function(e){e.preventDefault();var c=a;"left"===t?c<1?c=9:--c:"right"===t&&(9==c?c=0:++c),n(c)}(e)}},c.a.createElement("span",{className:"fa fa-2x fa-angle-".concat(t)}))},N=function(e){var t=e.genreById,a=Object(n.useState)([]),l=Object(o.a)(a,2),r=l[0],i=l[1];Object(n.useEffect)((function(){s.a.get("https://api.themoviedb.org/3/movie/now_playing",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){console.log(e.data.results),i(e.data.results)})).catch((function(e){console.log(e)}))}),[]);var m=Object(n.useState)(0),f=Object(o.a)(m,2),p=f[0],b=f[1];return setInterval((function(){}),3e3),c.a.createElement("div",{className:"carousel-container"},c.a.createElement("div",{className:"carousel"},c.a.createElement(h,{direction:"left",activeIndex:p,setActiveIndex:b}),c.a.createElement("ul",{className:"slides"},r.slice(0,10).map((function(e,a){return c.a.createElement("li",{className:a==p?"slide slide--active":"slide",key:a},c.a.createElement("div",{className:"img-backdrop"},c.a.createElement("img",{src:E(e.backdrop_path),alt:e.title,onError:d}),c.a.createElement("div",null,c.a.createElement("h1",null,c.a.createElement(u.b,{to:"/movie/".concat(e.id)},e.title," (",e.release_date.split("-")[0],")")),c.a.createElement("p",null,c.a.createElement("span",null,"TMDb "),e.vote_average),c.a.createElement("ul",null,c.a.createElement("span",null,"Genre: ")," ",e.genre_ids?e.genre_ids.map((function(e,a){return c.a.createElement("li",{key:a},t[e])})):null))))}))),c.a.createElement(h,{direction:"right",activeIndex:p,setActiveIndex:b}),c.a.createElement(g,{nowPlaying:r,activeIndex:p,setActiveIndex:b})))},y=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){s.a.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){var t={};e.data.genres.map((function(e){t[e.id]=e.name})),l(t)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",null,c.a.createElement(N,{genreById:a}))},j=(a(61),function(){return c.a.createElement("div",{className:"container-searchpage"},c.a.createElement("div",{className:"logo "},c.a.createElement("h1",{className:"bg-fmv rounded p-1 mt-4 mb-3 text-white"},"GETMOVIES")),c.a.createElement(f,null),c.a.createElement("p",{style:{fontSize:"1.2em",textAlign:"center",padding:"1em 1.5em "}},"getmovies - Just the place for getting reviews of movies and tv series!"," "),c.a.createElement("div",{className:"homebtn"},c.a.createElement(u.b,{to:"/Home",className:"btn btn-primary btn-lg bg-fmv mt-2 "},"Go to Home page")))}),_=(a(62),function(e){var t=e.movieId,a=Object(n.useState)([]),l=Object(o.a)(a,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){s.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){console.log(e),i(e.data.cast)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("ul",null,c.a.createElement("span",null,"Credits:"),r.map((function(e,t){if(t<6)return c.a.createElement("li",{style:{listStyle:"none",margin:"0 8px"},key:t},c.a.createElement(u.b,{to:"#",className:"cast-list text-fmv"},e.name),","," ")})))}),O=function(){var e=Object(m.f)(),t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1],i=Object(m.e)();return Object(n.useEffect)((function(){l||i.push("/movie-info-with-react")}),[l]),Object(n.useEffect)((function(){s.a.get("https://api.themoviedb.org/3/movie/".concat(e.id),{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){console.log(l)}),[]),c.a.createElement("div",{className:"container-fluid p-0 container-item bg-bgc text-white"},c.a.createElement("div",{className:"error-loading"}),c.a.createElement("div",{className:"container-movie-detail"},c.a.createElement("div",{className:"img-backdrop"},c.a.createElement("img",{src:E(l.backdrop_path),alt:l.title,onError:d}),c.a.createElement("div",null,c.a.createElement("h1",null,l.title),c.a.createElement("p",null,l.tagline),c.a.createElement("ul",null,c.a.createElement("span",null,"Genre: ")," ",l.genres?l.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})):null))),c.a.createElement("div",{className:"row pl-5 pr-5 pb-5 movie-detail "},c.a.createElement("img",{className:"offset-lg-1 col-xl-3 col-lg-3 col-md-4 col-sm-4 img-poster",src:E(l.poster_path),alt:l.title,onError:d}),c.a.createElement("div",{className:"offset-xl-1 offset-lg-1 offset-sm-1 col-lg-6 col-md-6 col-sm-6 align-self-center descriptions"},c.a.createElement("p",null,c.a.createElement("span",null,"Overview:")," ",l.overview),c.a.createElement(_,{movieId:e.id}),c.a.createElement("p",null,c.a.createElement("span",null,"Release Date:")," ",l.release_date),c.a.createElement("p",null,c.a.createElement("span",null,"Box Office Revenue:")," ",l.revenue," USD"),c.a.createElement("p",null,c.a.createElement("span",null,"language:")," ",l.original_language),c.a.createElement("p",null,c.a.createElement("span",null,"adult:")," ",l.adult?"true":"false"),c.a.createElement("ul",null,c.a.createElement("span",null,"movie by:"),l.production_companies?l.production_companies.map((function(e){return c.a.createElement("li",{key:e.id},e.name," ")})):null),c.a.createElement("p",null,"ratings: ",l.vote_average,"/10 amongst"," ",l.vote_count," voters")))))},k=a(10),x=function(e){var t=e.searchQuery,a=e.totalPages,l=Object(n.useState)(1),r=Object(o.a)(l,2),i=r[0],s=r[1],m=function(e){for(var t=[],a=1;a<=e;a++)t.push(a);return t}(a);return c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",Object(k.a)({className:"page-item",key:"fp"},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(u.b,{className:"page-link bg-fmv text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/1"),onClick:function(){s(1)}},"<<")),1!==i?c.a.createElement("li",Object(k.a)({className:"page-item",key:"pp"},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(u.b,{className:"page-link bg-fmv text-white border-0",onClick:function(){s(i-1)},to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(i-1)},"<")):null,m.map((function(e,a){return e===i?c.a.createElement("li",Object(k.a)({className:"page-item",key:a},"className","btn btn-outline-primary bg-primary p-1 mr-1"),c.a.createElement(u.b,{className:"page-link bg-primary text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(e),onClick:function(){s(e)}},e)):e<i&&e>i-3||e>i&&e<i+3?c.a.createElement("li",Object(k.a)({className:"page-item",key:a},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(u.b,{className:"page-link bg-fmv text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(e),onClick:function(){s(e)}},e)):void 0})),i!==a?c.a.createElement("li",Object(k.a)({className:"page-item",key:"np"},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(u.b,{className:"page-link bg-fmv text-white border-0",onClick:function(){s(i+1)},to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(i+1)},">")):null,c.a.createElement("li",Object(k.a)({className:"page-item",key:"lp"},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(u.b,{className:"page-link bg-fmv text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(a),onClick:function(){s(a)}},">>"))))},w=(a(63),function(){var e=Object(m.f)(),t=Object(n.useContext)(S),a=t.searchQuery,l=(t.setSearchQuery,Object(n.useState)(0)),r=Object(o.a)(l,2),i=r[0],f=r[1],p=Object(n.useState)([]),b=Object(o.a)(p,2),v=b[0],g=b[1],h=Object(m.e)();return Object(n.useEffect)((function(){a||h.push("/movie-info-with-react")}),[a]),Object(n.useEffect)((function(){s.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63",query:a,page:e.pageNo}}).then((function(e){f(e.data.total_pages),g(e.data.results)})).catch((function(e){console.log(e)}))}),[a,e.pageNo]),c.a.createElement("div",{className:"container-fluid sr-container bg-bgc"},c.a.createElement("h4",{style:{color:"#FFF"}},'search results for "',a,'"'),c.a.createElement(x,{searchQuery:a,totalPages:i}),c.a.createElement("ul",{className:"row justify-content-center sr-row pl-3 mt-4"},v?v.map((function(e){return c.a.createElement("li",{key:e.id,className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 sr-col pl-1 pr-1 mb-2 "},c.a.createElement(u.b,{to:"/movie/".concat(e.id)},c.a.createElement("img",{src:E(e.poster_path),alt:e.title,onError:d}),c.a.createElement("p",{className:""},e.title)))})):null))}),S=c.a.createContext();c.a.createContext();var I=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",null,c.a.createElement(S.Provider,{value:{searchQuery:a,setSearchQuery:l}},c.a.createElement(p,null)),c.a.createElement(S.Provider,{value:{searchQuery:a,setSearchQuery:l}},c.a.createElement(m.a,{exact:!0,path:"/movie-info-with-react",component:j})),c.a.createElement(m.a,{exact:!0,path:"/Home",component:y}),c.a.createElement(m.a,{exact:!0,path:"/movie/:id",component:O}),c.a.createElement(S.Provider,{value:{searchQuery:a,setSearchQuery:l}},c.a.createElement(m.a,{exact:!0,path:"/search_results/:searchQuery/:pageNo",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(64);r.a.render(c.a.createElement(u.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.45d9c376.chunk.js.map