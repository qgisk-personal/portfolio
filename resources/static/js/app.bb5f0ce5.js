(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],d=0,v=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},o={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("8a23"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("Snackbar"),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"z-index":"10"}},[a("v-toolbar",{staticStyle:{cursor:"pointer",background:"transparent","z-index":"10"},attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"headline",staticStyle:{"margin-left":"7.5vh"},on:{click:function(e){return t.redirect("/")}}},[t._v("Demiann")]),a("v-spacer"),a("v-toolbar-items",{staticStyle:{"margin-right":"7.5vh","z-index":"10"}},[a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],staticStyle:{"z-index":"10"},attrs:{text:"",rounded:""}},[t._v("Home")]),a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#footer",expression:"'#footer'"}],staticStyle:{"z-index":"10"},attrs:{text:"",rounded:""}},[t._v("About")]),a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#footer",expression:"'#footer'"}],staticStyle:{"z-index":"10"},attrs:{text:"",rounded:""}},[t._v("Contact")])],1)],1)],1)},i=[],l={name:"Navbar",methods:{redirect:function(t){this.$router.push(t).catch((function(){}))}}},c=l,u=a("2877"),d=a("6544"),v=a.n(d),m=a("8336"),f=a("2fa4"),h=a("71d9"),p=a("2a7f"),b=Object(u["a"])(c,s,i,!1,null,null,null),g=b.exports;v()(b,{VBtn:m["a"],VSpacer:f["a"],VToolbar:h["a"],VToolbarItems:p["a"],VToolbarTitle:p["b"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-snackbar",{attrs:{color:t.type,right:"right",timeout:t.timeout,top:"top",vertical:"vertical"===t.mode},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v(" "+t._s(t.text)+" "),a("v-btn",{attrs:{color:"",text:""},on:{click:t.toggleSnackBar}},[t._v("Close")])],1)],1)],1)},k=[],x={name:"snackbar",data:function(){return{mode:"",color:"success",timeout:3e3}},computed:{show:{get:function(){return this.$store.getters.snackbarActive},set:function(){var t={type:"",text:""};this.$store.dispatch("toggleSnackBar",t)}},text:{get:function(){return this.$store.getters.snackbarText}},type:{get:function(){return this.$store.getters.snackbarType}}},methods:{toggleSnackBar:function(){var t={type:"",text:""};this.$store.dispatch("toggleSnackBar",t)}}},_=x,S=a("b0af"),w=a("2db4"),C=Object(u["a"])(_,y,k,!1,null,null,null),V=C.exports;v()(C,{VBtn:m["a"],VCard:S["a"],VSnackbar:w["a"]});var T={name:"App",components:{Navbar:g,Snackbar:V},data:function(){return{}}},O=T,B=(a("034f"),a("7496")),j=Object(u["a"])(O,o,n,!1,null,null,null),M=j.exports;v()(j,{VApp:B["a"]});var I=a("5c51"),P=a("f13c"),A=a.n(P),z=a("58ca"),$=a("2f62"),N=a("2b27"),D=a.n(N),E={status:"",snackbarActive:!1,snackbarText:"",snackbarType:"",token:D.a.get("token")||"",user:JSON.parse(localStorage.getItem("user"))||{}},J={auth_request:function(t){t.status="loading"},auth_success:function(t,e){var a=e.token,r=e.user;t.status="success",t.token=a,t.user=r},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token="",t.user={}},toggleSnackBar:function(t,e){var a=e.type,r=e.text;t.snackbarActive=!t.snackbarActive,t.snackbarText=r,t.snackbarType=a}},q=(a("b0c0"),a("d3b7"),a("bc3a")),W=a.n(q);var H={toggleSnackBar:function(t,e){var a=t.commit,r=e.type,o=e.text;a("toggleSnackBar",{type:r,text:o})},login:function(t,e){var a=t.commit;return new Promise((function(t,r){a("auth_request"),W()({url:"/api/auth/login",data:{email:e.email,password:e.password},crossdomain:!0,method:"POST"}).then((function(e){var r=e.data.token,o={id:e.data.user._id,name:e.data.user.name,email:e.data.user.email,socials:e.data.user.socials,isAdmin:e.data.user.isAdmin},n={type:"success",text:"Successfully logged in"};D.a.set("token",r,"24h"),D.a.set("user",o,"24h"),localStorage.setItem("user",JSON.stringify(o)),W.a.defaults.headers.common["Authorization"]=r,a("toggleSnackBar",n),a("auth_success",{token:r,user:o}),t(e)})).catch((function(t){a("auth_error",t),localStorage.removeItem("token"),r(t)}))}))},register:function(t,e){var a=t.commit;return new Promise((function(t,r){a("auth_request"),W()({url:"/api/auth/register",crossdomain:!0,data:e,method:"POST"}).then((function(e){var r=e.data.token,o={id:e.data.user._id,name:e.data.user.name,email:e.data.user.email,socials:e.data.user.socials,admin:e.data.user.isAdmin},n={type:"success",text:"Successfully registered"};D.a.set("token",r,"24h"),D.a.set("user",o,"24h"),localStorage.setItem("user",JSON.stringify(o)),W.a.defaults.headers.common["Authorization"]=r,a("auth_success",{token:r,user:o}),a("toggleSnackBar",n),t(e)})).catch((function(t){a("auth_error",t),localStorage.removeItem("user"),localStorage.removeItem("token"),r(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t,a){var r={type:"success",text:"Successfully logged out"};D.a.remove("token"),D.a.remove("user"),localStorage.removeItem("token"),localStorage.removeItem("user"),delete W.a.defaults.headers.common["Authorization"],e("toggleSnackBar",r),e("logout"),t()}))}},F={isAuthenticated:function(t){return!!t.token},userId:function(t){return t.user.id},snackbarActive:function(t){return t.snackbarActive},snackbarText:function(t){return t.snackbarText},snackbarType:function(t){return t.snackbarType},authStatus:function(t){return t.status}};r["a"].use($["a"]);var R=new $["a"].Store({state:E,mutations:J,actions:H,getters:F}),Y=a("8c4f"),Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("Portfolio"),a("Contact"),a("Footer")],1)},L=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("particles-bg",{staticStyle:{"z-index":"1","max-height":"90vh"},attrs:{type:"cobweb",bg:!0,num:"100",color:t.white}}),a("v-container",{attrs:{"my-5":""}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-card",{staticClass:"ml-5",staticStyle:{"z-index":"6","margin-top":"27.5vh","margin-bottom":"15vh",background:"transparent","font-size":"2em","line-height":"1.5em"},attrs:{flat:""}},[t._v(" I'm a "),a("b",[t._v("Web Developer")]),a("br"),t._v("Based in "),a("b",[t._v("The Netherlands")])])],1)],1)],1)],1)},K=[],U={name:"Header",data:function(){return{white:null}}},X=U,Z=a("62ad"),tt=a("a523"),et=a("0fd9"),at=Object(u["a"])(X,G,K,!1,null,null,null),rt=at.exports;v()(at,{VCard:S["a"],VCol:Z["a"],VContainer:tt["a"],VRow:et["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark",staticStyle:{"margin-top":"17.5vh"}},[a("v-container",{staticClass:"my-5 fill-height"},[a("v-fade-transition",{attrs:{mode:"out-in",appear:""}},[a("v-row",{staticStyle:{"margin-top":"-17.5vh"}},[a("v-col",{staticClass:"mx-auto",staticStyle:{"z-index":"6","margin-bottom":"10vh"},attrs:{id:"portfolio",cols:"8"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"/public/images/ReviewsByMe.png",alt:"Image of Reviews By Me"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"https://reviewsbyme.demiann.xyz",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Reviews by Me")]),a("v-card-text",[t._v("Reviews By Me is a Blog Application "),a("br"),t._v("Made with Vue, Express, NodeJS and MongoDB")])],1)],1),a("v-col",{staticClass:"mx-5",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"7"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"/public/images/TemplateOne.png",alt:"Image of template one"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"https://template-one.demiann.xyz",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Template One")]),a("v-card-text",[t._v("Is Made with Vue, Express, NodeJS and MongoDB")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"4"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("This Portfolio")]),a("v-card-text",[t._v("Is Made with Vue, Express, NodeJS and MongoDB")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"8"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"5"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1),a("v-col",{staticClass:"mx-auto",staticStyle:{"margin-bottom":"10vh"},attrs:{cols:"6"}},[a("v-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("div",{staticStyle:{position:"relative"}},[a("v-img",{staticClass:"grey darken-4",attrs:{src:"https://images.unsplash.com/photo-1468366141642-e5ea3a6738f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Temp image"}}),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:"",color:"grey darken"}},[a("v-btn",{attrs:{href:"#",disabled:"",target:"_blank"}},[t._v("View Website")])],1):t._e()],1)],1)]}}])}),a("v-card-title",[t._v("Portfolio")]),a("v-card-text",[t._v("Made with Vue and NodeJS")])],1)],1)],1)],1)],1)],1)},nt=[],st={name:"Portfolio",data:function(){return{}}},it=st,lt=a("99d9"),ct=a("0789"),ut=a("ce87"),dt=a("adda"),vt=a("a797"),mt=Object(u["a"])(it,ot,nt,!1,null,null,null),ft=mt.exports;v()(mt,{VBtn:m["a"],VCard:S["a"],VCardText:lt["b"],VCardTitle:lt["c"],VCol:Z["a"],VContainer:tt["a"],VFadeTransition:ct["a"],VHover:ut["a"],VImg:dt["a"],VOverlay:vt["a"],VRow:et["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact"}},[a("v-container",[t.about?t._e():a("v-col",{attrs:{cols:"12"}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.toggle()}}},[t._v("About me")])],1)],1),t.about?a("v-col",{attrs:{cols:"12"}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.toggle()}}},[t._v("Contact me")])],1)],1):t._e(),t.show?a("v-row",[t.contacted?a("v-col",{staticClass:"mx-auto",attrs:{cols:"6",text:""}},[a("v-card",{staticStyle:{background:"transparent","margin-top":"25vh","margin-bottom":"25vh"},attrs:{elevation:"0"}},[a("v-card-title",{staticClass:"mx-auto headline"},[a("h2",{staticClass:"mx-auto"},[t._v("Thanks for Contacting me.")])]),a("v-card-text",{staticClass:"text-center"},[t._v("I'll get back to you as soon as I can.")])],1)],1):a("v-col",{staticClass:"mx-auto",attrs:{cols:"6"}},[a("v-card",{staticStyle:{"margin-top":"10vh","margin-bottom":"10vh",background:"transparent","font-size":"1.5em","line-height":"1.5em"},attrs:{elevation:"0"}},[a("v-card-title",[a("h2",[t._v("Contact")])]),a("v-card-text",[a("v-text-field",{ref:"name",attrs:{label:"What's your name?",hint:"Your first name",rules:[function(){return!!t.from||"This field is required"}],required:""},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),a("v-text-field",{ref:"email",attrs:{rules:[function(){return!!t.email||"This field is required"}],label:"How do I contact you?",hint:"Your email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-textarea",{attrs:{label:"Tell me about your project",counter:"",maxlength:"500","single-line":""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),a("v-subheader",{staticStyle:{"margin-left":"-1.5vh"}},[t._v("How long will this take?")]),a("v-slider",{attrs:{"tick-labels":t.timeTicks,max:4,step:"1",ticks:"always","tick-size":"4"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),a("v-divider",{staticClass:"mt-5"}),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:t.resetForm}},[t._v("Reset form")]),a("v-spacer"),t.from&&t.email&&t.body?a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.submit}},[t._v("Send")]):a("v-btn",{attrs:{color:"primary",disabled:"",text:""},on:{click:t.submit}},[t._v("Send")])],1)],1)],1)],1):a("v-row",[a("v-col",{staticClass:"mx-auto",attrs:{cols:"6"}},[a("v-card",{staticStyle:{"margin-top":"10vh","margin-bottom":"10vh",background:"transparent","font-size":"1.5em","line-height":"1.5em"},attrs:{elevation:"0"}},[a("v-card-title",[a("h2",[t._v("About")])]),a("v-card-text",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore sapiente suscipit impedit maiores perspiciatis nihil eveniet fugit illo dicta itaque nulla, dolorum enim ea repudiandae culpa voluptate? In ut repellendus, esse recusandae ab dolorem suscipit labore at rem dolores minima omnis vel voluptatum nisi porro placeat est reprehenderit laboriosam? ")])],1)],1)],1)],1)],1)},pt=[];var bt={name:"Contact",components:{},data:function(){return{show:!0,timeTicks:["Yesterday","1 Month","3 Months","6 Months","1 Year"],contacted:!1,about:!1,white:null,time:"",from:"",email:"",subject:"",body:""}},methods:{toggle:function(){this.show=!this.show,this.about=!this.about},resetForm:function(){var t=this;this.from="",this.email="",this.subject="",this.body="",this.time="",this.show=!1,this.$nextTick((function(){t.show=!0}))},submit:function(){var t=this,e={from:this.from,email:this.email,time:this.timeTicks[this.time],body:this.body};W()({url:"/api/contact",data:e,method:"POST"}).then((function(){t.resetForm();var e={type:"green",text:"Message has been send!"};t.$store.dispatch("toggleSnackBar",e),t.show=!1,t.contacted=!0})).catch((function(){var e={type:"red",text:"Please check all fields and try again."};t.$store.dispatch("toggleSnackBar",e)}))}}},gt=bt,yt=a("ce7e"),kt=a("a722"),xt=a("ba0d"),_t=a("e0c7"),St=a("8654"),wt=a("a844"),Ct=Object(u["a"])(gt,ht,pt,!1,null,null,null),Vt=Ct.exports;v()(Ct,{VBtn:m["a"],VCard:S["a"],VCardActions:lt["a"],VCardText:lt["b"],VCardTitle:lt["c"],VCol:Z["a"],VContainer:tt["a"],VDivider:yt["a"],VLayout:kt["a"],VRow:et["a"],VSlider:xt["a"],VSpacer:f["a"],VSubheader:_t["a"],VTextField:St["a"],VTextarea:wt["a"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark",attrs:{id:"footer"}},[a("v-footer",{staticClass:"mt-3",attrs:{color:"transparent",padless:""}},[a("v-row",{staticClass:"mt-4",attrs:{justify:"center","no-gutters":""}},[a("v-btn",{staticClass:"my-2 mr-1",attrs:{color:"white",text:"",rounded:"",rel:"noreferrer",target:"_blank",href:"https://github.com/qgisk"}},[t._v("Github")]),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Discord")]),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Instagram")]),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Telegram")]),a("v-btn",{staticClass:"my-2 mx-1",attrs:{color:"white",rel:"noreferrer",text:"",rounded:"",target:"_blank",href:"#"}},[t._v("Linkedin")]),a("v-col",{staticClass:"lighten-2 my-3 py-4 text-center white--text",attrs:{cols:"12"}},[a("strong",[t._v(" Demiann © "+t._s((new Date).getFullYear())+" ")])])],1)],1)],1)},Ot=[],Bt={name:"Footer"},jt=Bt,Mt=a("553a"),It=Object(u["a"])(jt,Tt,Ot,!1,null,null,null),Pt=It.exports;v()(It,{VBtn:m["a"],VCol:Z["a"],VFooter:Mt["a"],VRow:et["a"]});var At={name:"home",data:function(){return{}},components:{Header:rt,Portfolio:ft,Contact:Vt,Footer:Pt},metaInfo:{title:"Portfolio ",titleTemplate:"%s @ Demiann",htmlAttrs:{lang:"en",amp:!0}}},zt=At,$t=Object(u["a"])(zt,Q,L,!1,null,null,null),Nt=$t.exports;r["a"].use(Y["a"]);var Dt=[{path:"/",name:"home",component:Nt}],Et=new Y["a"]({routes:Dt}),Jt=Et,qt=a("f309");r["a"].use(qt["a"]);var Wt=new qt["a"]({theme:{dark:!0}});a("d5e8"),a("5363");r["a"].config.productionTip=!1,r["a"].use(I["a"]),r["a"].use(z["a"],{refreshOnceOnNavigation:!0}),r["a"].use(A.a,{container:"body",duration:750,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new r["a"]({store:R,router:Jt,vuetify:Wt,render:function(t){return t(M)}}).$mount("#app")},"8a23":function(t,e,a){}});
//# sourceMappingURL=app.bb5f0ce5.js.map