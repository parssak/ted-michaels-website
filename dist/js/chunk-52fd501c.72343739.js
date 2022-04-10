(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52fd501c"],{"06d0":function(e,t,a){"use strict";a("a4d3"),a("e01a");var n=a("7a23"),c={class:"relative"},i=Object(n["j"])("div",{class:"absolute inset-0"},[Object(n["j"])("div",{class:"absolute inset-0 bg-accent mix-blend-multiply","aria-hidden":"true"})],-1),l={class:"py-8"},s={class:"text-white capitalize "},r={key:0,class:"mt-6 text-xl text-indigo-100 max-w-3xl"};function u(e,t,a,u,d,o){var b=Object(n["A"])("Container");return Object(n["u"])(),Object(n["g"])("div",c,[i,Object(n["j"])(b,null,{default:Object(n["H"])((function(){return[Object(n["j"])("div",l,[Object(n["j"])("h1",s,Object(n["C"])(a.title),1),a.description?(Object(n["u"])(),Object(n["g"])("p",r,Object(n["C"])(a.description),1)):Object(n["h"])("",!0)])]})),_:1})])}var d=a("802e"),o={components:{Container:d["a"]},name:"Header",props:{title:String,description:String}};o.render=u;t["a"]=o},6725:function(e,t,a){"use strict";var n=a("7a23"),c=a("a3df"),i=a.n(c),l=a("aaa3"),s=a.n(l),r=a("953d"),u=a.n(r),d=a("54e6"),o=a.n(d),b=Object(n["j"])("div",{class:"\n        max-w-7xl\n        mx-auto\n        py-12\n        px-4\n        sm:px-8\n        lg:py-20\n        bg-accent-light\n        rounded-xl\n        flex flex-col\n        items-center\n        text-center\n      "},[Object(n["j"])("h2",{class:"mb-0"},"Connect with Ted"),Object(n["j"])("div",{class:"w-24 h-1 my-4 bg-accent"}),Object(n["j"])("p",{class:"max-w-2xl text-lg text-accent-darkest"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales ac et, non cursus arcu. Dui euismod habitant ac at ut donec. "),Object(n["j"])("div",{class:"mt-3 flex space-x-3 items-center"},[Object(n["j"])("a",{href:"#"},[Object(n["j"])("img",{src:i.a,alt:""})]),Object(n["j"])("a",{href:"#"},[Object(n["j"])("img",{src:s.a,alt:""})]),Object(n["j"])("a",{href:"#"},[Object(n["j"])("img",{src:u.a,alt:""})]),Object(n["j"])("a",{href:"#"},[Object(n["j"])("img",{src:o.a,alt:""})])]),Object(n["j"])("button",{class:"btn btn-xl mt-12",path:"/contact"},"Send an email")],-1);function j(e,t,a,c,i,l){var s=Object(n["A"])("Container");return Object(n["u"])(),Object(n["g"])(s,null,{default:Object(n["H"])((function(){return[b]})),_:1})}var m=a("802e");function p(e,t,a,c,i,l){var s=Object(n["A"])("router-link");return Object(n["u"])(),Object(n["g"])(s,{to:a.path,class:[l.getTheme(),"btn no-show-active"]},{default:Object(n["H"])((function(){return[Object(n["z"])(e.$slots,"default")]})),_:3},8,["to","class"])}var O={props:{path:{type:String,required:!1,default:"/"},theme:{type:String,default:"dark"},size:{type:String,default:"xl"}},methods:{getTheme:function(){var e="";switch(this.theme){case"light":e="btn-light";break;case"dark":e="btn-dark";break;default:e="btn-dark"}switch(this.size){case"xs":e+=" btn-xs";break;case"sm":e+=" btn-sm";break;case"md":e+=" btn-md";break;case"lg":e+=" btn-lg";break;case"xl":e+=" btn-xl";break;default:e+=" btn-md"}return e}}};O.render=p;var g=O,h={components:{Button:g,Container:m["a"]}};h.render=j;t["a"]=h},"802e":function(e,t,a){"use strict";var n=a("7a23"),c={class:"max-w-full lg:max-w-7xl lg:mx-auto"},i={class:"md:p-6 w-full h-full relative"};function l(e,t,a,l,s,r){return Object(n["u"])(),Object(n["g"])("section",{class:[s.additionalClasses,"py-12 px-4 sm:px-6 lg:px-8"]},[Object(n["j"])("div",c,[Object(n["j"])("div",i,[Object(n["z"])(e.$slots,"default")])])],2)}var s={name:"Container",data:function(){return{additionalClasses:this.full&&"min-h-screen"}},props:{full:{type:Boolean,default:!1}}};s.render=l;t["a"]=s},b30a:function(e,t,a){"use strict";a.r(t);a("a4d3"),a("e01a");var n=a("7a23"),c={class:"grid gap-10 sm:grid-cols-2 lg:grid-cols-3"},i={class:"\n            w-16\n            h-16\n            bg-accent-light\n            shadow-lg\n            grid\n            place-items-center\n            rounded-lg\n            absolute\n            -top-8\n          "},l={class:""};function s(e,t,a,s,r,u){var d=Object(n["A"])("Header"),o=Object(n["A"])("SpeakerphoneIcon"),b=Object(n["A"])("Container"),j=Object(n["A"])("SimpleBrandCTA");return Object(n["u"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(d,{title:"services"}),Object(n["j"])(b,null,{default:Object(n["H"])((function(){return[Object(n["j"])("div",c,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(r.services,(function(e){return Object(n["u"])(),Object(n["g"])("div",{key:e.title,class:"\n          bg-accent-lightest\n          flex flex-col\n          items-center\n          text-center\n          pt-16\n          p-8\n          rounded-lg\n          relative\n        "},[Object(n["j"])("div",i,[Object(n["j"])(o,{class:"w-10 h-10"})]),Object(n["j"])("h3",l,Object(n["C"])(e.title),1),Object(n["j"])("p",null,Object(n["C"])(e.description),1)])})),128))])]})),_:1}),Object(n["j"])(j)],64)}var r=a("6725"),u=a("802e"),d=a("06d0"),o=a("9510"),b=[{title:"Service 1",description:"Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. "},{title:"Service 2",description:"Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. "},{title:"Service 3",description:"Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. "},{title:"Service 4",description:"Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. "},{title:"Service 5",description:"Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. "},{title:"Service 6",description:"Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. "}],j={components:{Header:d["a"],Container:u["a"],SimpleBrandCTA:r["a"],SpeakerphoneIcon:o["g"]},data:function(){return{services:b}}};j.render=s;t["default"]=j}}]);
//# sourceMappingURL=chunk-52fd501c.72343739.js.map