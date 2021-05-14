(function(t){function e(e){for(var r,s,l=e[0],i=e[1],c=e[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,l=1;l<o.length;l++){var i=o[l];0!==n[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},n={app:0},a=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dalton-website/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"1f46":function(t,e,o){},"36cd":function(t,e,o){},"3b82":function(t,e,o){"use strict";o("1f46")},"54d8":function(t,e,o){"use strict";o("9b48")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],s=(o("034f"),o("2877")),l={},i=Object(s["a"])(l,n,a,!1,null,null,null),c=i.exports,u=o("9483");Object(u["a"])("".concat("/dalton-website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("main",[o("div",{staticClass:"topInfo"},[o("h1",[t._v("Dalton")]),o("p",[t._v(" Dalton is a very dark theme, with a dark blue. Available for some programs, like Neovim and Alacritty. ")]),o("div",{staticClass:"colorBox"},[o("Color",{attrs:{background:"#0C0A0F",color:"white"}}),o("Color",{attrs:{background:"#F50C40",color:"white"}}),o("Color",{attrs:{background:"#FF8F00",color:"black"}}),o("Color",{attrs:{background:"#30DB22",color:"white"}}),o("Color",{attrs:{background:"#F0EE00",color:"black"}}),o("Color",{attrs:{background:"#2B7DF0",color:"white"}}),o("Color",{attrs:{background:"#32BCD9",color:"white"}})],1),t._m(0)]),t._m(1),o("div",{staticClass:"dalton-apps"},[o("h1",[t._v("Apps with Dalton theme")]),o("div",{staticClass:"dalton-apps-content"},[o("Project",{attrs:{name:"Neovim/Vim",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Neovim-mark-flat.svg/836px-Neovim-mark-flat.svg.png",url:"https://github.com/edersonferreira/dalton-vim"}}),o("Project",{attrs:{name:"Dmenu",logo:"https://tools.suckless.org/dmenu/patches/border/dmenu_border.png",url:"https://github.com/edersonferreira/dalton-dmenu"}}),o("Project",{attrs:{name:"Alacritty",logo:"https://raw.githubusercontent.com/alacritty/alacritty/master/extra/logo/compat/alacritty-term%2Bscanlines.png",url:"https://github.com/edersonferreira/dalton-alacritty"}}),o("Project",{attrs:{name:"Discord",logo:"https://www.thrifter.com/sites/thrifter.com/files/styles/medium/public/article-images/2018/11/discord.png?itok=Gvzs4qq2",url:"https://github.com/edersonferreira/dalton-discord"}}),o("Project",{attrs:{name:"Rofi",logo:"https://user-images.githubusercontent.com/406245/62415221-8f422500-b626-11e9-976a-5e6e225d6918.png",url:"https://github.com/edersonferreira/dalton-rofi"}})],1)]),t._m(2)])])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"daltonlogobox"},[r("img",{staticClass:"daltonlogo",attrs:{src:o("916d"),alt:"Dalton Logo"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dalton-benefits"},[o("h1",[t._v("Dalton benefits")]),o("ul",{staticClass:"dalton-benefits-list"},[o("li",{staticClass:"dalton-benefits-item"},[t._v(" Dalton is a very good theme for colorblind people, mostly Deutan. Because the colors are very easy to differentiate. ")]),o("li",{staticClass:"dalton-benefits-item"},[t._v(" Very dark colors, perfect for people who loves dark themes ")]),o("li",{staticClass:"dalton-benefits-item"},[t._v(" Dalton has few colors, making easy to create a Dalton theme for your favorite app ")]),o("li",{staticClass:"dalton-benefits-item"},[t._v(" Blue is the principal color of Dalton palette. So, if you love blue, you will love this theme. ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dalton-story"},[o("h1",[t._v("Story")]),o("p",[t._v(" I created Dalton theme because I wasn't finding a good theme for Vim, Because or all the themes was not too dark, and the colors wasn't contrasting. ")]),o("p",[t._v(" So, I created a new theme basing in "),o("a",{attrs:{href:"https://github.com/ayu-theme/ayu-vim",target:"blank"}},[t._v("Ayu Dark Theme")]),t._v(", changing the colors to more darken and blue colors. ")]),o("p",[t._v(" With the time, I started to create more Dalton theme ports to more programs, making the best desktop aesthetics for me. ")])])}],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"color",style:{background:t.background}},[o("span",{style:{color:t.color}},[t._v(t._s(t.background))])])},h=[],g={name:"Color",props:{background:String,color:String}},b=g,v=(o("3b82"),Object(s["a"])(b,m,h,!1,null,null,null)),y=v.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:t.url,target:"_blank"}},[o("div",{staticClass:"project"},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:t.logo,alt:t.name+" logo"}})]),o("div",{staticClass:"name"},[t._v(" "+t._s(t.name)+" ")])])])},_=[],k={name:"Project",props:{logo:String,name:String,url:String}},C=k,j=(o("54d8"),Object(s["a"])(C,w,_,!1,null,null,null)),D=j.exports,O={name:"Home",components:{Color:y,Project:D}},x=O,P=(o("b76c"),Object(s["a"])(x,f,p,!1,null,null,null)),S=P.exports,E=o("574d"),A=o.n(E);o("04f2");r["default"].use(A.a),r["default"].use(d["a"]);var B=[{path:"/",name:"Home",component:S}],F=new d["a"]({mode:"history",base:"/dalton-website/",routes:B}),$=F;r["default"].config.productionTip=!1,new r["default"]({router:$,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,o){},"916d":function(t,e,o){t.exports=o.p+"img/daltonlogo.d5f0f941.png"},"9b48":function(t,e,o){},b76c:function(t,e,o){"use strict";o("36cd")}});
//# sourceMappingURL=app.9b4ae636.js.map