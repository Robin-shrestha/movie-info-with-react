(this.webpackJsonpmoviereact=this.webpackJsonpmoviereact||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/posterNotFound.f1004ffe.jpg"},29:function(e,t,a){e.exports=a(64)},34:function(e,t,a){},35:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(25),r=a.n(l),o=(a(34),a(8)),s=(a(35),a(10)),i=a.n(s),m=a(1),u=(a(53),a(3)),p=(a(54),function(e){e.setSearchQuery;var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(n.useContext)(O),i=Object(m.e)(),u=function(e){e.preventDefault(),l?(s.setSearchQuery(l),i.push("/search_results/".concat(l.split(" ").join("_"),"/1"))):i.push("/movie-info-with-react")};return c.a.createElement("form",{className:"container-searchbox m-3",onSubmit:u},c.a.createElement("input",{type:"text",className:"form-control p-2",placeholder:"Search movie...",value:l,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn-outline-fmv bg-fmv text-white",onClick:u},c.a.createElement("i",{className:"fa fa-search "})))}),f=function(){return c.a.createElement("div",{className:"container-header p-2"},c.a.createElement("div",{className:"header-left"},c.a.createElement("div",{className:"btn btn-default genre-list"},c.a.createElement("i",{className:"fa fa-list bg-bgicon p-1 rounded "})),c.a.createElement("h2",{className:"bg-fmv rounded p-1"},c.a.createElement(u.b,{className:"link",to:"/movie-info-with-react"},"GETMOVIES"))),c.a.createElement("div",{className:"header-right"},c.a.createElement("span",{className:"p-1"},c.a.createElement(u.b,{to:"/movie-info-with-react"},"Login"))))},E=function(){return c.a.createElement("div",null,"HOMEs")},g=(a(60),a(27)),v=a.n(g),d=function(e){return"https://image.tmdb.org/t/p/w200".concat(e)},h=function(e){e.target.onerror=null,e.target.src=v.a},b=a(28),N=function(e){var t=e.searchQuery,a=function(e){for(var t=[],a=1;a<=e;a++)t.push(a);return t}(e.totalPages);return c.a.createElement("div",null,c.a.createElement("ul",{className:"pagination"},a.map((function(e,a){return c.a.createElement("li",Object(b.a)({className:"page-item",key:a},"className","btn btn-outline-fmv bg-fmv p-1 mr-1"),c.a.createElement(u.b,{className:"page-link bg-fmv text-white border-0",to:"/search_results/".concat(t.split(" ").join("_"),"/").concat(e)},e))}))))},y=(a(61),function(){return c.a.createElement("div",{className:"container-searchpage"},c.a.createElement("div",{className:"logo "},c.a.createElement("h1",{className:"bg-fmv rounded p-1 mt-4 mb-3 text-white"},"GETMOVIES")),c.a.createElement(p,null),c.a.createElement("p",{style:{fontSize:"1.2em",textAlign:"center",padding:"1em 1.5em "}},"getmovies - Just the place for getting reviews of movies and tv series!"," "),c.a.createElement("div",{className:"homebtn"},c.a.createElement(u.b,{to:"/Home",className:"btn btn-primary btn-lg bg-fmv mt-2 "},"Go to Home page")))}),j=(a(62),function(){var e=Object(m.f)(),t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){i.a.get("https://api.themoviedb.org/3/movie/".concat(e.id),{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63"}}).then((function(e){console.log(e),r(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){console.log(l)}),[]),c.a.createElement("div",{className:"container-fluid p-0 container-item bg-bgc text-white"},c.a.createElement("div",{className:"error-loading"}),c.a.createElement("div",{className:"container-movie-detail"},c.a.createElement("div",{className:"img-backdrop"},c.a.createElement("img",{src:d(l.backdrop_path),alt:l.title,onError:h}),c.a.createElement("div",null,c.a.createElement("h1",null,l.title),c.a.createElement("p",null,l.tagline),c.a.createElement("ul",null,l.genres?l.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})):null))),c.a.createElement("div",{className:"row pl-5 pr-5 pb-5 movie-detail "},c.a.createElement("img",{className:"offset-xl-1 offset-lg-1 col-xl-3 col-lg-3 col-md-4 col-sm-4 ",src:d(l.poster_path),alt:l.title,onError:h}),c.a.createElement("div",{className:"offset-xl-1 offset-lg-1 offset-sm-1 col-lg-6 col-md-6 col-sm-6 align-self-center descriptions"},c.a.createElement("p",null,c.a.createElement("span",null,"overview:")," ",l.overview),c.a.createElement("p",null,c.a.createElement("span",null,"Release Date:")," ",l.release_date),c.a.createElement("p",null,c.a.createElement("span",null,"Box Office Revenue:")," ",l.revenue," USD"),c.a.createElement("p",null,c.a.createElement("span",null,"language:")," ",l.original_language),c.a.createElement("p",null,c.a.createElement("span",null,"adult:")," ",l.adult?"true":"false"),c.a.createElement("ul",null,c.a.createElement("span",null,"movie by:"),l.production_companies?l.production_companies.map((function(e){return c.a.createElement("li",{key:e.id},e.name," ")})):null),c.a.createElement("p",null,"ratings: ",l.vote_average,"/10 amongst"," ",l.vote_count," voters")))))}),w=function(){var e=Object(m.f)(),t=Object(n.useContext)(O),a=t.searchQuery,l=(t.setSearchQuery,Object(n.useState)(0)),r=Object(o.a)(l,2),s=r[0],p=r[1],f=Object(n.useState)([]),E=Object(o.a)(f,2),g=E[0],v=E[1];return console.log(e),Object(n.useEffect)((function(){i.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"b13b73e49a3f6baa037e1e91855f9c63",query:a,page:e.pageNo}}).then((function(e){console.log(e.data),p(e.data.total_pages),v(e.data.results)})).catch((function(e){console.log(e)}))}),[a,e.pageNo]),c.a.createElement("div",{className:"container-fluid sr-container bg-bgc"},c.a.createElement("h4",{style:{color:"#FFF"}},'search results for "',a,'"'),c.a.createElement(N,{searchQuery:a,totalPages:s}),c.a.createElement("ul",{className:"row justify-content-center sr-row pl-3 mt-4"},g?g.map((function(e){return c.a.createElement("li",{key:e.id,className:"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 sr-col pl-1 pr-1 mb-2 "},c.a.createElement(u.b,{to:"/movie/".concat(e.id)},c.a.createElement("img",{src:d(e.poster_path),alt:e.title,onError:h}),c.a.createElement("p",{className:""},e.title)))})):null))},O=c.a.createContext();c.a.createContext();var x=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",null,c.a.createElement(O.Provider,{value:{searchQuery:a,setSearchQuery:l}},c.a.createElement(f,null)),c.a.createElement(O.Provider,{value:{searchQuery:a,setSearchQuery:l}},c.a.createElement(m.a,{exact:!0,path:"/movie-info-with-react",component:y})),c.a.createElement(m.a,{exact:!0,path:"/Home",component:E}),c.a.createElement(m.a,{exact:!0,path:"/movie/:id",component:j}),c.a.createElement(O.Provider,{value:{searchQuery:a,setSearchQuery:l}},c.a.createElement(m.a,{exact:!0,path:"/search_results/:searchQuery/:pageNo",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63);r.a.render(c.a.createElement(u.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.0ada0418.chunk.js.map