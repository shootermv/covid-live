(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{169:function(e,t,a){e.exports=a(353)},174:function(e,t,a){},175:function(e,t,a){},352:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyAtSFIF7j6fP-MFqpupRBsJGvqD_WQhnjY","authDomain":"covid19-ba97a.firebaseapp.com","databaseURL":"https://covid19-ba97a.firebaseio.com","projectId":"covid19-ba97a","storageBucket":"covid19-ba97a.appspot.com","messagingSenderId":"335262016556","appId":"1:335262016556:web:5a010ee87394bb7c7a9d89","measurementId":"G-ZFWEGKZ4BT"}')},353:function(e,t,a){"use strict";a.r(t);var n,r=a(1),c=a.n(r),l=a(50),o=a.n(l),i=(a(174),a(175),function(e){var t=e.children;return c.a.createElement("div",{className:"header"},t)}),u=a(51),s=a(6),d=["europe","asia","north america","south america","total:"],m="https://corona.lmao.ninja/v2/countries",f="https://corona.lmao.ninja/v2/countries?yesterday=true",h="https://restcountries.eu/rest/v2/name/",v=a(20),b=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1],h=Object(r.useState)("active"),b=Object(s.a)(h,2),E=b[0],y=b[1],p=Object(r.useState)("false"),g=Object(s.a)(p,2),w=g[0],j=g[1],N=function(e){var t=Object(r.useState)(0),a=Object(s.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var t=setTimeout((function(){c(n+1)}),e);return function(){return clearTimeout(t)}}),[e,n]),n}(36e5),O=Object(r.useState)(null),S=Object(s.a)(O,2),C=S[0],k=S[1],x=Object(r.useState)(null),T=Object(s.a)(x,2),A=T[0],L=T[1],I=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){fetch(f).then((function(e){return e.json()})).then((function(e){return e.reduce((function(e,t){return Object(u.a)({},e,Object(v.a)({},t.country,t))}),{})})).then(n)}),[]),{yesterday:a,setYesterday:n}}().yesterday,D=Object(r.useCallback)((function(){return j(!0)||fetch(m).then((function(e){return e.json()})).then(function(e){return function(t){return t.filter((function(t){return"world"===t.country.toLowerCase()?("function"===typeof e&&e(t),!1):0!==t.country.length&&!d.includes(t.country.toLowerCase())}))}}(L)).then(n).then((function(){return j(!1)})).then((function(){return C&&k(null)||j(!1)})).catch(function(e){return function(t){console.log(t.toString())||e("The API temporary unavailable ")}}(k)||j(!1))}),[C]);return Object(r.useEffect)((function(){D()}),[D,N]),{error:C,cards:a,setCards:n,search:o,setSearch:i,sort:E,setSort:y,world:A,loading:w,sortedCards:function(e){var t=e.cards,a=e.search,n=e.sort,r=a.length?t.filter((function(e){return e.country.match(new RegExp(a,"i"))})):t;return(I?r.map((function(e){var t=I[e.country]||null?I[e.country][n]:0,a=e[n];return e.stats=t>0?(a-t)/t*100:0,Object(u.a)({},e)})):r).sort((function(e,t){return e[n]>t[n]?-1:t[n]>e[n]?1:0}))}({cards:a,search:o,sort:E})}},E=["active","cases","critical","deaths","recovered","todayCases","todayDeaths"],y=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},p=function(e){var t=e.world,a=Object(r.useRef)(null),n=Object(r.useState)(0),l=Object(s.a)(n,2),o=l[0],i=l[1],u=Object(r.useState)(window.outerWidth),d=Object(s.a)(u,2),m=d[0],f=d[1];return Object(r.useEffect)((function(){var e=function(){f(window.outerWidth),i(0)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(r.useEffect)((function(){var e=setTimeout((function(){return i((e=o,(Math.abs(e)>m?-1*e:e)+1));var e}),20);return function(){return clearTimeout(e)}}),[o,m]),t?c.a.createElement("div",{className:"worldCard"},c.a.createElement("div",{className:"world worldTitle"}),c.a.createElement("ul",{ref:a},E.map((function(e){return c.a.createElement("li",{style:{left:"".concat(-o,"px")},key:e},"".concat(y(e),": ").concat(t&&t[e]))})))):null},g=function(){return c.a.createElement("div",{className:"main-title"},c.a.createElement("div",null,"Covid-19 Live Dashboard"),c.a.createElement("div",{className:"sub-title lineHeight"},"by ",c.a.createElement("a",{href:"https://github.com/nudelx"},"Nudelman Alex")," ",c.a.createElement("a",{href:"https://github.com/nudelx/covid-live"},c.a.createElement("div",{className:"github"}))),c.a.createElement("div",{className:"sub-title-2"},"DataSource:"," ",c.a.createElement("a",{href:"https://www.worldometers.info"},"www.worldometers.info")," with"," ",c.a.createElement("a",{href:"https://github.com/javieraviles/covidAPI"},"API")," by"," ",c.a.createElement("a",{href:"https://github.com/javieraviles"},"Javier Aviles")),c.a.createElement("div",{className:"sub-title-2"},"Prediction Data: by"," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/anton-shorsh/"},"Anton Shorsh")))},w=[{label:"Live",id:"live",icon:"\u26a1\ufe0f"},{label:"Graph",id:"graph",icon:"\ud83d\udcc8"},{label:"Prediction",id:"prediction",icon:"\ud83e\uddd9\ud83c\udffc\u200d\u2642\ufe0f"}],j=function(e){var t=e.tab,a=e.setTabs,n=e.tabs;return c.a.createElement("ul",{className:"tabs"},n.map((function(e){return c.a.createElement("li",{key:e.id,id:e.id,onClick:function(e){return a(e.target.id)},className:t===e.id?"active":""},"".concat(e.icon," ").concat(e.label))})))},N=function(e){var t=e.error;return c.a.createElement("div",null,c.a.createElement("div",{className:"fog"}),c.a.createElement("div",{className:"error"},c.a.createElement("div",{className:"errorMsg"},t)))},O=function(e){var t=e.onChangeSearch,a=e.search,n=e.onChangeSort;return c.a.createElement("div",{className:"tools"},c.a.createElement("div",{className:"search"},c.a.createElement("label",{htmlFor:"search"},"Search"),c.a.createElement("input",{placeholder:"...",id:"search",name:"search",onChange:function(e){e.preventDefault(),t(e.target.value)},value:a})),c.a.createElement("div",{className:"sort"},c.a.createElement("label",{htmlFor:"sort"},"Sort"),c.a.createElement("select",{id:"sort",onChange:function(e){return n(e.target.value)}},E.map((function(e){return c.a.createElement("option",{key:e,value:e},y(e))})))))},S=function(e){var t=Object(r.useState)("#"),a=Object(s.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var t=localStorage.getItem(e);if(t)return c(JSON.parse(t).flag);fetch("".concat(h).concat(function(e){var t=e.toLowerCase(),a={uk:function(){return"GB"},czechia:function(){return"czech"}};return a[t]?a[t]():e}(e),"?fields=name;flag")).then((function(e){return e.json()})).then((function(t){return function(e,t){var a={india:function(){return[e[1]]}};return a[t.toLowerCase()]?a[t.toLowerCase()]():e}(t,e)})).then((function(t){return t[0]&&localStorage.setItem(e,JSON.stringify(t[0]))||t})).then((function(e){return e[0]&&c(e[0].flag)}))}),[e]),{flag:n,setFlag:c}},C=function(e){var t=e.stats;return t?c.a.createElement("div",{className:"stats ".concat(t>0?"s-red":"s-green")},c.a.createElement("div",{className:t>0?"arrow-up":"arrow-down"}),"".concat(t?Math.abs(t).toFixed(2)+"%":0)):null},k=function(e){var t=e.country,a=e.index,n=e.countryInfo,r=e.stats,l=n?n.flag:S(t).flag;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"title"},c.a.createElement("div",null,c.a.createElement("div",{className:"cardIndex"},a)),c.a.createElement("div",{className:"flagHolder"},c.a.createElement(C,{stats:r}),c.a.createElement("div",{className:"countryName"},t),c.a.createElement("div",{className:"flag ".concat("world"===t.toLowerCase()?"world":"")},"#"!==l?c.a.createElement("img",{width:"30",height:"25",alt:t,src:l}):null))),c.a.createElement("div",{className:"body"},c.a.createElement("ul",{className:"stats"},E.map((function(t){return c.a.createElement("li",{key:t},c.a.createElement("span",null,"".concat(y(t),":")," "),c.a.createElement("span",null,e[t]))})))))},x=function(e){var t=e.x,a=e.y,n=e.width,r=e.value;return c.a.createElement("g",null,c.a.createElement("text",{x:t+n+25,y:a+10,fill:"#ccc",textAnchor:"middle",dominantBaseline:"middle"},r))},T=["#1abc9c","#3498db","#9b59b6","#e67e22","#c0392b","#f1c40f","#60a3bc","#3c6382","#0c2461","#079992","#f6b93b","#60a3bc","#eb2f06","#6a89cc","#D980FA","#C4E538","#FFC312"],A=a(8),L=function(e){var t=e.data,a=e.sortedKey,n=30*t.length,r=n<100?100:n;return c.a.createElement("div",{className:"chart"},c.a.createElement(A.f,{layout:"vertical",key:(new Date).getTime(),width:900,height:r,data:t,margin:{top:10,right:80,bottom:20,left:20}},c.a.createElement(A.m,{type:"number",verticalAlign:"top",orientation:"top"}),c.a.createElement(A.n,{dataKey:"country",type:"category",interval:0}),c.a.createElement(A.l,{contentStyle:{backgroundColor:"#274a56",opacity:.8,border:"1px solid #000"}}),c.a.createElement(A.h,{verticalAlign:"top",align:"right"}),c.a.createElement(A.a,{type:"monotone",dataKey:"deaths",fill:"#e74c3c",stroke:"#c0392b"}),c.a.createElement(A.c,{dataKey:a,barSize:100,fill:"#2980b9"},c.a.createElement(A.g,{dataKey:a,content:x})),c.a.createElement(A.i,{type:"monotone",dataKey:"cases",stroke:"#27ae60"})))},I=a(79),D=["as","country","city","countryCode","isp","region","regionName","timezone"],K=function(){var e=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){fetch("http://ip-api.com/json").then((function(e){return e.json()})).then(n)}),[]),{location:a,setLocation:n}}().location;return e&&c.a.createElement("div",{className:"location"},c.a.createElement("div",{className:"locationBody"},c.a.createElement("ul",{className:"locationList"},D.map((function(t){return c.a.createElement("li",{key:t},c.a.createElement("span",{className:"wide-title"},"".concat(y(t),":")," "),c.a.createElement("span",null,e[t]))})))))},z=function(e){var t=e.country,a=e.name,n=e.onClick,r=S(t[a]).flag;return c.a.createElement("div",{className:"countryOption",onClick:n},c.a.createElement("img",{alt:t[a],width:"20",height:"20",src:r}),c.a.createElement("span",null,t[a]))},F=function(e){var t=e.options,a=e.index,n=e.name,l=e.onChange,o=Object(r.useState)(null),i=Object(s.a)(o,2),u=i[0],d=i[1],m=Object(r.useState)(null),f=Object(s.a)(m,2),h=f[0],v=f[1],b=Object(r.useState)(null),E=Object(s.a)(b,2),y=E[0],p=E[1],g=.85*window.outerWidth,w=g>600?600:g,j=Object(r.useCallback)((function(e){"Escape"===e.key&&u&&(d(!1),p(null))}),[u]),N=y&&y.length?t.filter((function(e){return e.country.match(new RegExp(y,"i"))})):t;return Object(r.useEffect)((function(){return document.addEventListener("keydown",j,!1),function(){return document.removeEventListener("keydown",j,!1)}}),[j]),c.a.createElement("div",{className:"dropDown",style:{width:w}},c.a.createElement("div",{className:"inputHolder",style:{whiteSpace:"nowrap"}},c.a.createElement("input",{placeholder:"Select a Country or Start Typing ...",className:"input",onChange:function(e){p(e.target.value),h&&v(null),!u&&d(!0)},value:h&&h[n]||y||""}),c.a.createElement("i",{className:"button",onClick:function(){d(!u)},style:{left:"-60px"}})),c.a.createElement("div",{className:"menu",style:{display:u?"block":"none",width:.96*w}},c.a.createElement("ul",null,N&&N.map((function(e){return c.a.createElement("li",{id:e[a],key:e[a],onClick:function(e){return function(e){var n=t.filter((function(t){return t[a]===e.id})),r=n.length&&n.pop();v(r),d(!1),p(null),"function"===typeof l&&l(r)}(e.currentTarget)}},c.a.createElement(z,{country:e,name:n}))})))))},P=function(e){var t=e.data,a=e.title,n=e.dataKeys,r=e.country;if(!t)return null;var l=.9*window.outerWidth;l=l<500?500:l;var o=S(r).flag,i=t.countryColors,u=0;return c.a.createElement("div",{className:"chartCenter chartShadow chatWidth"},c.a.createElement("div",{className:"chartTitle"},c.a.createElement("span",null,c.a.createElement("img",{width:"50",height:"30",src:o,alt:r})),c.a.createElement("span",null,"".concat(a))),c.a.createElement(A.b,{width:l,height:400,data:t.data,margin:{top:10,right:30,left:0,bottom:40}},c.a.createElement(A.h,{verticalAlign:"top",align:"right"}),c.a.createElement(A.m,{dataKey:"date",interval:0,angle:60,padding:{right:10},dy:30,dx:20,tick:{fontSize:10}}),c.a.createElement(A.n,{interval:0}),c.a.createElement(A.l,{contentStyle:{backgroundColor:"#274a56",opacity:.8,border:"1px solid #000"}}),c.a.createElement(A.d,{strokeDasharray:"2 2",stroke:"#062d3d"}),n.map((function(e){var t,a=n.length>i.length?T[(t=T.length,Math.floor(Math.random()*Math.floor(t)))]:i[u++];return c.a.createElement(A.a,{key:e,fillOpacity:"0.3",type:"monotone",dataKey:e,stroke:a,fill:a})}))))},M=function(){return c.a.createElement("div",{className:"loader"},"Loading ...")},W=a(150),J={growth:["trend","growth"],daily:["dailyP","daily"],cases:["casesP","cases"]},B=["#eb4d4b","#f9ca24","#6ab04c"],R=function(e){var t=function(e){var t=e.dayNumber,a=e.dayName,n=e.month,c=e.year,l=Object(r.useState)(null),o=Object(s.a)(l,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){var e=new Date,r=["January","February","March","April","May","June","July","August","September","October","November","December"],l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];u({dayNumber:t||e.getDate(),dayName:a||l[t]||l[e.getDay()],month:r[n-1]||r[e.getMonth()],year:c||e.getFullYear()})}),[a,t,n,c]),{date:i,setDate:u}}({dayName:e.dayName,dayNumber:e.dayNumber,month:e.month}).date;return t?c.a.createElement("div",{className:"calendar"},c.a.createElement("div",{className:"number"},t.dayNumber),c.a.createElement("div",{className:"holder"},c.a.createElement("div",{className:"day"},t.dayName),c.a.createElement("div",{className:"month"},"".concat(t.month," ").concat(t.year)))):null},G=function(e){var t=e.value,a=void 0===t?89:t,n=e.width,r=void 0===n?200:n,l=e.height,o=void 0===l?100:l,i=a>100?100:a,u=[{name:"value",value:i},{name:"empty",value:100-i}],s=function(e){return e<=75?0:e>75&&e<=90?1:e>90?2:void 0}(i);return c.a.createElement(A.k,{width:r,height:o},c.a.createElement(A.j,{data:u,cx:r/2,cy:.8*o,startAngle:180,endAngle:0,innerRadius:60,outerRadius:80,labelLine:!1,blendStroke:!0,dataKey:"value",label:function(e){var t=e.percent;if(1===e.index)return null;var a="".concat((100*t).toFixed(0),"%");return c.a.createElement("text",{x:r/2-a.length/2*8,y:.7*o,fill:"#abb9bb",textAnchor:"center",dominantBaseline:"central",fontSize:20},a)}},c.a.createElement(A.e,{fill:B[s]}),c.a.createElement(A.e,{fill:"#072f3f"})))},H=function(e){var t=e.update,a=e.confidence,n=t.split("-"),r=Object(s.a)(n,3),l=r[0],o=r[1],i=r[2];return c.a.createElement("div",{className:"info chartShadow"},c.a.createElement("div",null,c.a.createElement(R,{year:parseInt(l),dayNumber:parseInt(i),month:parseInt(o)})),c.a.createElement("div",{className:"confidence"},c.a.createElement(G,{value:a}),c.a.createElement("div",{className:"confidenceTitle"},"Confidence Level")))},Y=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(null),o=Object(s.a)(l,2),i=o[0],u=o[1],d=Object(r.useState)(!0),m=Object(s.a)(d,2),f=m[0],h=m[1];if(Object(r.useEffect)((function(){I.default.database().ref().child("dataV2/prediction").on("value",(function(e){n(e.val().map((function(e){var t={confidence:e.confidence,country:e.country,update:e.update,countryColors:e.colors},a=e.growth.length-1;return t.data=e.trend.reduce((function(t,n,r){return[].concat(Object(W.a)(t),[{trend:n,growth:e.growth[r],date:e.dates[r],cases:e.cases[r],casesP:r<a?null:e.casesP[r],daily:e.daily[r],dailyP:r<a?null:e.dailyP[r]}])}),[]),t})))}))}),[]),Object(r.useEffect)((function(){window.resizeEventMobile=document.body.clientWidth;var e=function(e){window.resizeEventMobile!==document.body.clientWidth&&(window.timer=setTimeout((function(){return h(f+1)}),500),window.resizeEventMobile=document.body.clientWidth)};return window.addEventListener("resize",e),function(){clearTimeout(window.timer),window.removeEventListener("resize",e)}}),[f]),!a)return c.a.createElement(M,null);var v=i?a.filter((function(e){return e.country===i.country}))[0]:a[0],b=v.confidence,E=v.update;return c.a.createElement("div",{className:"predictionBoard",key:f},c.a.createElement("div",{className:"dropHolder"},c.a.createElement(F,{options:a,index:"country",name:"country",onChange:u})),c.a.createElement("ul",{className:"chartList"},c.a.createElement("li",null,c.a.createElement(H,{confidence:b,update:E})),c.a.createElement("li",null,c.a.createElement(P,{data:v,dataKeys:J.growth,country:v.country,title:"".concat(v.country," - Growth Rate Prediction")})),c.a.createElement("li",null,c.a.createElement(P,{data:v,country:v.country,dataKeys:J.daily,title:"".concat(v.country," - Daily Prediction")})),c.a.createElement("li",null,c.a.createElement(P,{data:v,country:v.country,dataKeys:J.cases,title:"".concat(v.country," - Cases Prediction")}))),c.a.createElement(K,null))},q="live",U="graph",Z="prediction",Q=(n={},Object(v.a)(n,q,(function(e){return e.sortedCards.map((function(e,t){return c.a.createElement(k,Object.assign({key:e.country},e,{index:t+1}))}))})),Object(v.a)(n,U,(function(e){var t=e.sortedCards,a=e.sort;return c.a.createElement(L,{data:t,sortedKey:a})})),Object(v.a)(n,Z,(function(e){return c.a.createElement(Y,e)})),n);a(79);var V,_=function(e){var t=e.tab,a=e.search,n=e.setSearch,r=e.sort,l=e.setSort,o=e.sortedCards,i=e.error;e.yesterday;return c.a.createElement("div",{className:"board"},t!==Z&&c.a.createElement(O,{search:a,onChangeSearch:n,sort:r,onChangeSort:l}),i&&c.a.createElement(N,{error:i}),Q[t]({sortedCards:o,sort:r}))},X=function(){var e=function(e){var t=Object(r.useState)(e),a=Object(s.a)(t,2);return{tab:a[0],setTabs:a[1],tabs:w}}(q),t=e.tab,a=e.setTabs,n=e.tabs,l=b(),o=l.search,u=l.setSearch,d=l.sort,m=l.setSort,f=l.sortedCards,h=l.error,v=l.world;return l.loading?c.a.createElement(M,null):c.a.createElement("div",null,c.a.createElement(i,null,c.a.createElement(g,null),c.a.createElement(j,{tab:t,setTabs:a,tabs:n})),c.a.createElement(_,{search:o,setSearch:u,sort:d,setSort:m,sortedCards:f,error:h,tab:t}),t!==Z&&c.a.createElement(p,{world:v}))};V="bee66946449a",localStorage.getItem("covid19token")!==V&&(localStorage.clear(),localStorage.setItem("covid19token",V));var $=function(){var e=function(){var e=Object(r.useState)("dark"),t=Object(s.a)(e,2);return{theme:t[0],setTheme:t[1]}}(),t=e.theme,a=e.setTheme;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"themeToggle",onClick:function(){return a("light"===t?"dark":"light")}}),c.a.createElement("header",{className:"App-header ".concat(t)},c.a.createElement(X,null)))};o.a.render(c.a.createElement($,null),document.getElementById("root"))},79:function(e,t,a){"use strict";a.r(t);var n=a(149),r=a.n(n),c=(a(350),a(352)),l=r.a.initializeApp(c);t.default=l}},[[169,1,2]]]);
//# sourceMappingURL=main.10dd84dd.chunk.js.map