(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},o={app:0},s=[];function r(t){return c.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"c1dfd3b6"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="static/css/"+({about:"about"}[t]||t)+"."+{about:"f69a60c9"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],m.parentNode.removeChild(m),a(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a85":function(t,e,a){"use strict";a("5ae5")},"36e9":function(t,e,a){t.exports=a.p+"static/img/statistics.648bfdb3.jpg"},"3fa5":function(t,e,a){t.exports=a.p+"static/img/businessgrowth.48bc9c98.jpg"},"4cdf":function(t,e,a){},5461:function(t,e,a){},"54fd":function(t,e,a){t.exports=a.p+"static/img/app.767a6ff7.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d1e78"),a("15f5");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-main",[a("NavBar"),a("router-view",{staticClass:"animated fadeIn"})],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-core animated fadeIn",style:{backgroundColor:t.$store.state.navBarBackGroundColor}},[a("v-layout",{staticClass:"nav-layout hidden-sm-and-down"},[a("v-flex",{staticClass:"logo-flex",attrs:{xs12:"",sm12:"",md2:"",lg2:"",xl2:""}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[a("div",{staticClass:"logo",on:{click:function(e){t.isServices=!1,t.isContact=!1,t.scrollTo("#landing-id")}}},[a("h1",{staticStyle:{color:"#eca715"}},[t._v("!Tech")])])])],1),a("v-flex",{staticClass:"menu-items-container",attrs:{xs12:"",sm12:"",md8:"",lg8:"",xl8:""}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/about"}},[a("div",{staticClass:"menu-item"},[a("span",[t._v("About")]),"About"==t.$route.name?a("span",{staticClass:"indicator animated fadeInUp"}):t._e()])]),a("div",{staticStyle:{"text-decoration":"none",cursor:"pointer"},on:{click:function(e){t.$router.push("/"),t.isContact=!1,t.isServices=!0,t.scrollTo("#services-id")}}},[a("div",{staticClass:"menu-item"},[a("span",[t._v("Services")]),"Home"==t.$route.name&&1==t.isServices?a("span",{staticClass:"indicator animated fadeInUp"}):t._e()])]),a("div",{staticStyle:{"text-decoration":"none",cursor:"pointer"},on:{click:function(e){t.$router.push("/"),t.isServices=!1,t.isContact=!0,t.scrollTo("#contact-id")}}},[a("div",{staticClass:"menu-item"},[a("span",[t._v("Contact")]),"Home"==t.$route.name&&1==t.isContact?a("span",{staticClass:"indicator animated fadeInUp"}):t._e()])])],1)],1),a("div",{staticClass:"mobile-bar hidden-md-and-up"},[a("v-icon",{staticClass:"ml-5",attrs:{large:"",color:"white"},on:{click:function(e){t.sidebarDrawer=!0}}},[t._v("fas fa-bars")])],1),a("v-navigation-drawer",{staticClass:"nav-drawer hidden-md-and-up pt-5",attrs:{color:"#15141c",fixed:"",top:"",width:"65%",temporary:"","hide-overlay":""},model:{value:t.sidebarDrawer,callback:function(e){t.sidebarDrawer=e},expression:"sidebarDrawer"}},[a("v-flex",{staticClass:"logo-flex",attrs:{xs12:"",sm12:"",md2:"",lg2:"",xl2:""}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[a("div",{staticClass:"logo",on:{click:function(e){t.isServices=!1,t.isContact=!1,t.scrollTo("#landing-id"),t.sidebarDrawer=!1}}},[a("h1",{staticStyle:{color:"#eca715"}},[t._v("!Tech")])])])],1),a("v-flex",{staticClass:"menu-items-container",attrs:{xs12:"",sm12:"",md8:"",lg8:"",xl8:""}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/about"}},[a("div",{staticClass:"menu-item"},[a("span",[t._v("About")]),"About"==t.$route.name?a("span",{staticClass:"indicator animated fadeInUp"}):t._e()])]),a("div",{staticStyle:{"text-decoration":"none",cursor:"pointer"},on:{click:function(e){t.$router.push("/"),t.isContact=!1,t.isServices=!0,t.scrollTo("#services-id"),t.sidebarDrawer=!1}}},[a("div",{staticClass:"menu-item"},[a("span",[t._v("Services")]),"Home"==t.$route.name&&1==t.isServices?a("span",{staticClass:"indicator animated fadeInUp"}):t._e()])]),a("div",{staticStyle:{"text-decoration":"none",cursor:"pointer"},on:{click:function(e){t.$router.push("/"),t.isServices=!1,t.isContact=!0,t.scrollTo("#contact-id"),t.sidebarDrawer=!1}}},[a("div",{staticClass:"menu-item"},[a("span",[t._v("Contact")]),"Home"==t.$route.name&&1==t.isContact?a("span",{staticClass:"indicator animated fadeInUp"}):t._e()])])],1)],1)],1)},r=[],c=(a("a9e3"),a("b64b"),a("6f04")),l={name:"NavBar",data:function(){return{scrollColor:"#ffffff",easing:"easeInOutCubic",easings:Object.keys(c),duration:400,offset:25,isServices:!1,isContact:!1,sidebarDrawer:!1}},computed:{target:function(){var t=this[this.type];return isNaN(t)?t:Number(t)},options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}}},created:function(){this.diseableIndicator(),window.addEventListener("scroll",this.diseableIndicator)},methods:{menuScrollAnimation:function(){var t=document.documentElement.scrollTop,e=document.querySelector(".scroll-nav-layout");t>=100?(console.log(self.navBarBackGroundColor),e.style.display="flex",e.style.transition="opacity 0.5s linear 0.1s",e.style.opacity=t/150,e.classList.add("slideInDown")):t<100&&(e.style.display="none",e.style.opacity="0")},diseableIndicator:function(){var t=this,e=document.documentElement.scrollTop;0==e?(t.isServices=!1,t.isContact=!1):e<4e3&&e>600?(t.isServices=!0,t.isContact=!1):e>5e3&&(t.isServices=!1,t.isContact=!0)},scrollTo:function(t){var e=this,a=this;setTimeout((function(){e.$vuetify.goTo(t,a.options)}),20)}}},u=l,d=(a("0a85"),a("2877")),m=a("6544"),f=a.n(m),p=a("0e8f"),h=a("132d"),g=a("a722"),v=a("f774"),b=Object(d["a"])(u,s,r,!1,null,"7a07a589",null),y=b.exports;f()(b,{VFlex:p["a"],VIcon:h["a"],VLayout:g["a"],VNavigationDrawer:v["a"]});var C={name:"App",components:{NavBar:y},data:function(){return{}},created:function(){},methods:{}},k=C,w=(a("e219"),a("7496")),x=a("f6c4"),T=Object(d["a"])(k,i,o,!1,null,"63659f64",null),S=T.exports;f()(T,{VApp:w["a"],VMain:x["a"]});a("d3b7");var _=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-core",attrs:{id:"landing-id"}},[a("div",{staticClass:"landing-core"},[a("div",{staticClass:"back-overlay"}),a("div",{staticClass:"text-container"},[t._m(0),a("p",{staticClass:"mt-5"},[t._v(" Software systems facilitate business processes and enable enterprises to operate efficiently while managing growth effectively. With smart organizational practices and rapid improvement in technology, modern enterprises have been relying more on customs software systems. ")]),a("div",{staticClass:"contact-btns mt-5 hidden-sm-and-down"},[a("v-btn",{staticClass:"in-touch mr-3",attrs:{"x-large":"",rounded:"",color:"#eca715"},on:{click:function(e){return t.scrollTo("#contact-id")}}},[a("span",[t._v("Get in Touch")])])],1)])]),a("div",{staticClass:"services",attrs:{id:"services-id"}},[a("h1",{staticClass:"mb-3",staticStyle:{"font-weight":"bold"}},[t._v("Our Services")]),a("p",{staticClass:"services-text mb-5",attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[t._v(" Since technology is rapidly evolving, businesses must keep pace in investing in newer applications, services, and enhancing/re-engineer legacy systems. Newer applications reduce downtime, trim costs, and augment user experience. ! TECH is introducing a better and more agile way of designing, building, and maintaining suitable software. With the introduction of newer technologies such as mobility, cloud, IoT, big data analytics, and AI, the potential for enterprise solutions to deliver value to clientele has increased exponentially. ")]),a("div",{staticClass:"services-container mt-5"},[a("div",{staticClass:"services-img hidden-sm-and-down"}),a("div",{staticClass:"services-items"},[t._m(1),a("div",{staticClass:"services-flex-container"},t._l(t.services,(function(e,n){return a("v-flex",{key:n,staticClass:"services-flex ml-5 mr-5 mt-5 mb-5",attrs:{xs4:"",sm4:"",md4:"",lg4:"",xl4:"","data-aos":"zoom-in","data-aos-delay":150*n,"data-aos-duration":"500"}},[a("div",{staticClass:"icon",style:{backgroundImage:"url("+e.icon+")"}}),a("p",{staticClass:"ml-3"},[t._v(t._s(e.name))])])})),1)])])]),a("div",{staticClass:"itechs-container"},t._l(t.itechs,(function(e,n){return a("div",{key:n,staticClass:"itechs"},[a("div",{staticClass:"itechs-text",attrs:{"data-aos":e.animation,"data-aos-duration":"700"}},[a("h3",{staticClass:"mb-5"},[a("span",[t._v(t._s(e.title))])]),a("p",{domProps:{innerHTML:t._s(e.content)}})]),a("div",{staticClass:"itechs-icon pa-5 hidden-sm-and-down",style:{backgroundImage:"url("+e.icon+")"},attrs:{"data-aos":"zoom-in","data-aos-duration":"700"}})])})),0),a("div",{staticClass:"contact",attrs:{id:"contact-id"}},[a("div",{staticClass:"contct-info"},[a("h1",{staticClass:"mb-4"},[t._v("Get in Touch")]),a("div",{staticClass:"infos mb-4"},[a("p",[a("v-icon",{attrs:{color:"white"}},[t._v("fas fa-envelope")]),t._v(" inno8tech@gmail.com")],1),a("p",[a("v-icon",{attrs:{color:"white"}},[t._v("fas fa-phone-alt")]),t._v(" +31 6 18874427 & +237 681 33 52 61")],1),a("p",[a("v-icon",{attrs:{color:"white"}},[t._v("fas fa-map-marker")]),t._v(" Jouvence Yaounde cameroon")],1)]),a("div",{staticClass:"social-media"})]),a("v-form",{ref:"contactForm",staticClass:"contact-form",attrs:{"data-aos":"fade-up","data-aos-delay":"150","data-aos-duration":"500"}},[a("p",{staticClass:"form-err-msg"}),a("v-text-field",{attrs:{rules:[t.$store.state.rules.required],label:"Name*",required:"",outlined:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"Email",type:"email",required:"",outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Tel. Number",type:"number",required:"",outlined:""},model:{value:t.telNumber,callback:function(e){t.telNumber=e},expression:"telNumber"}}),a("v-textarea",{attrs:{rules:[t.$store.state.rules.required],label:"Message*",required:"",outlined:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("div",{staticClass:"btn-container"},[a("v-btn",{staticClass:"pa-3",attrs:{large:"",color:"#111111"},on:{click:function(e){return t.sendMail()}}},[t._v("Send Message")])],1)],1)],1)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"goal"},[a("span",[t._v("Intelligent systems")]),t._v(" "),a("span",{staticClass:"for"},[t._v("4")]),t._v(" "),a("span",[t._v("intelligent results")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"service-title ml-5 mb-5 font-weight-bold"},[t._v("We develop "),a("span",{staticStyle:{color:"#eca715"}},[t._v("intelligent")]),t._v(" systems for "),a("span",{staticStyle:{color:"#eca715"}},[t._v("intelligent")]),t._v(" results")])}],I=(a("b0c0"),{name:"Home",components:{},computed:{target:function(){var t=this[this.type];return isNaN(t)?t:Number(t)},options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}}},data:function(){return{services:[{name:"Software Development",icon:a("7f2e")},{name:"App Development",icon:a("54fd")},{name:"Online Marketing",icon:a("e114")}],itechs:[{title:"DIGITAL INNOVATION FOR BUSINESS GROWTH(DIBG)",content:"Digital innovation combined with sleek customer experience is the engine for growth in many businesses and industries.  This has revolutionized the way financial institutions, insurance and, many other businesses communicate with their customers and this has brought about the much-needed proximity to their customers. Digitization and innovation have brought forth many benefits to businesses. Some of such benefits are customer experience, business simplification, competitiveness, speed of operations, efficiency, and growth. However,  the effort can be daunting, especially if preparations are less than perfect. This is why it is important to partner with us.! Techers are known for their rapid ideation, design, prototyping, and deployment. We work on a project basis, and we can also provide your company with a dedicated team that will be with you throughout your digitization process.",icon:a("3fa5"),animation:"fade-right"},{title:"DIGITAL INNOVATION FOR START-UPS(continuation for DIBG)",content:"We love startups because we are a startup too.!TECH Startup services aim at helping early-stage (other startups)companies accomplish their goals through product ideation, prototyping, software development, software testing, and maintenance.!TECH is happy to be associated with the growth story of some startups across industries such as shipping, inter-urban transportation, financial technology, and big data. With our expertise in agile development combined with the latest in data analysis and visualization,!TECH ensures that your brilliant idea is converted into a market redefining product with the potential of gaining market share over other average software solutions. ",icon:a("8d7b"),animation:"fade-left"},{title:"DATA ANALYTICS and BUSINESS INTELLIGENCE",content:"Business intelligence (BI) leverages software and services to transform data into actionable insights. This process helps organizations to answer important questions regarding the business. A data-driven organization makes informed strategic and tactical business decisions that propel the organization for growth. To leverage intelligence from data, the organization needs to have or hire experts with sound business acumen, strong technology, and statistical knowledge to mine this data for patterns and insights. At !Tech, we have a strong and dedicated team of specialists with strong business acumen, superior delivery practices, and technical expertise that will build flexible, animated, and immersive visual analytics which allows organizational leaders to think creatively and make informed decisions thereby bringing returns on investment.",icon:a("36e9"),animation:"fade-right"},{title:"QUANTITATIVE MARKETING AND ANALYTICS",content:"As margins shrinks, the market becomes harder and the way forward is going digital to expand the market. It is all about drawing consumers to your business and maintaining their loyalty. But how do you constantly understand customer preferences and changing behavior? Is your marketing team meeting up? Are they bringing a return on marketing investment?!Tech is occupying this space with experience in industries ranging from satellite telecom, mobile networks operators(MNO’s) media agencies, mobile banking, and finance, insurance, etc.! Tech is leveraging Artificial intelligence, Analytics, Big Data, in marketing to understand customer preferences to prevent customer churn. This knowledge helps you answer questions in marketing ranging from customer patterns, behaviors, and where the market is shifting too. With this knowledge, organizations can plan and execute intelligent marketing that delivers value to customers and bring returns to the company.",icon:a("ffcf"),animation:"fade-left"},{title:"MARKETING AUTOMATION B2B",content:"To attract, nurture and qualify leads, every organization needs a good marketing team with expert knowledge in marketing automation. It is said that the efficient use of marketing automation drives a 14.5% increase in sales productivity and a 12.2% reduction in marketing overhead. Is your marketing team seeing these results? !Tech has positioned itself in helping organizations to prepare their marketing automation process.!Tech also leverages its expert knowledge in 360° degree marketing in promoting the companies across all media. !Tech carefully tailored messaging which leads to customer satisfaction that brings about brand loyalty. We make use of data to help companies understand what their marketing messages need to be. We analyze social media conversations, web trends, inbound traffic, etc to uncover revenue opportunities. We answer questions such as ;What do people say about your brand? What other things are they interested in? What are they doing when they get to your site? <a style='text-decoration: None' href='#contact-id'>Contact Us</a>",icon:a("d3ab"),animation:"fade-right"},{title:"DIGITAL MARKETING",content:"Marketing as a field has undergone a revolution. With the advancement in technology, traditional marketing is transitioning to the online space. Marketing in the digital space needs specialized skills set. !TECH prides itself with the knowledge of digital marketing across search engines, emails, social media, text etc. If your marketing can not show a return on investment then get in touch with us today. <a style='text-decoration: None' href='#contact-id'>Contact Us</a>",icon:a("b1b0"),animation:"fade-left"}],neme:null,email:null,message:null,telNumber:null,easing:"easeInOutCubic",easings:Object.keys(c),duration:400,offset:25}},created:function(){this.$store.state.navBarBackGroundColor=null;var t=this;window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;t.$store.state.navBarBackGroundColor=e>700?"#2d2d41":null}))},methods:{scrollTo:function(t){var e=this,a=this;setTimeout((function(){e.$vuetify.goTo(t,a.options)}),20)},sendMail:function(){var t=this,e=document.querySelector(".form-err-msg"),a=document.querySelector(".v-messages__message");document.body.contains(a)||null==t.name||null==t.message?e.innerHTML="Name and message should not be empty":null!=t.email||null!=t.telNumber?this.$store.dispatch("publicPostReq",{url:"contact/send_message",params:{email:t.email,name:t.name,message:t.message,tel_number:t.telNumber},auth:null,csrftoken:null,callback:function(t){console.log(t),t.sended?(e.innerHTML=t.msg,setTimeout((function(){e.innerHTML="",document.querySelector(".contact-form").reset()}),2e3)):e.innerHTML=t.msg}}):e.innerHTML="Full your Email or Tel. number"}}}),N=I,O=(a("703a"),a("8336")),D=a("4bd4"),j=a("8654"),H=a("a844"),M=Object(d["a"])(N,A,E,!1,null,"78eea8b9",null),R=M.exports;f()(M,{VBtn:O["a"],VFlex:p["a"],VForm:D["a"],VIcon:h["a"],VTextField:j["a"],VTextarea:H["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rproject-core"},[a("v-layout",{staticClass:"rproject-layout"},[a("v-flex",{staticClass:"rproject-content",attrs:{xs11:"",sm11:"",md8:"",lg8:"",xl8:""}},[a("v-form",{ref:"rProjectForm",staticClass:"rproject-form animated fadeInUp"},[a("div",{staticClass:"services"},[a("v-radio-group",{staticClass:"service-radio",attrs:{row:""},model:{value:t.serviceModel,callback:function(e){t.serviceModel=e},expression:"serviceModel"}},t._l(t.services,(function(e,n){return a("div",{key:n,staticClass:"service ml-3 mr-3",class:t.serviceModel},[a("v-radio",{attrs:{value:e,color:"#eca715",mandatory:""},scopedSlots:t._u([{key:"label",fn:function(){return[a("span",{staticStyle:{color:"black","font-size":"17px"}},[t._v(t._s(e))])]},proxy:!0}],null,!0)})],1)})),0)],1),a("v-textarea",{staticClass:"ml-5",attrs:{rows:"10","row-height":"70",outlined:"",label:"Project Description"},model:{value:t.projectDescription,callback:function(e){t.projectDescription=e},expression:"projectDescription"}}),a("div",{staticClass:"btn-container ml-5"},[a("p",{on:{click:function(e){t.termsDialog=!0}}},[t._v("Terms Agreements")]),a("v-checkbox",{attrs:{label:"I accept the terms in the License Agreement",color:"#eca715"},model:{value:t.agreed,callback:function(e){t.agreed=e},expression:"agreed"}}),a("v-btn",{staticClass:"mt-5",attrs:{"x-large":"",color:"#eca715"}},[a("span",{staticStyle:{color:"white","text-transform":"capitalize","font-size":"17px","font-weight":"bold"}},[t._v("Request Project")])])],1)],1)],1)],1),a("v-dialog",{attrs:{scrollable:"","max-width":"1000px",transition:"dialog-bottom-transition"},model:{value:t.termsDialog,callback:function(e){t.termsDialog=e},expression:"termsDialog"}},[a("div",{staticClass:"terms-container"},[a("p",{staticClass:"mb-2"},[t._v("© TERMS AND CONDITIONS ")]),a("p",{staticClass:"mb-2"},[t._v(" !TECH contractual agreement states the terms and conditions that govern the contractual agreement between [!TECH] having his principal place of business at [JOUVENCE CAMEROON], and [Client] having its principal place of business at [Client. Address] who agrees to be bound by this Agreement. ")]),a("p",{staticClass:"mb-2"},[a("strong",[t._v("WHEREAS")]),t._v(", the Client has conceptualized [QUICK DESCRIPTION OF THE WORK] which is described in further detail on Exhibit A, and!TECH is a contractor with whom the Client has agreed to perform these services."),a("br"),a("br"),a("strong",[t._v("NOW, THEREFORE")]),t._v(", In consideration of the mutual covenants and promises made by the parties to this services agreement, !TECH and the [Client] agree as follows: ")])])])],1)},q=[],$={name:"",data:function(){return{services:["Software","Mobile App"],serviceModel:null,projectDescription:null,agreed:!1,termsDialog:!1}},created:function(){var t=this;setTimeout((function(){t.$store.state.navBarBackGroundColor="#2d2d41"}),10)},methods:{}},z=$,V=(a("5aad"),a("ac7c")),L=a("169a"),F=a("67b6"),P=a("43a6"),G=Object(d["a"])(z,B,q,!1,null,"a5b50782",null),U=G.exports;f()(G,{VBtn:O["a"],VCheckbox:V["a"],VDialog:L["a"],VFlex:p["a"],VForm:D["a"],VLayout:g["a"],VRadio:F["a"],VRadioGroup:P["a"],VTextarea:H["a"]}),n["a"].use(_["a"]);var W=[{path:"/",name:"Home",component:R},{path:"/request_project",name:"RequestProject",component:U},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],K=new _["a"]({mode:"history",base:"/",routes:W}),X=K,J=(a("99af"),a("4160"),a("ac1f"),a("1276"),a("159b"),a("2f62")),Y=a("bc3a"),Q=a.n(Y);n["a"].use(J["a"]);var Z=new J["a"].Store({state:{HOST:""!=window.location.port?"http://127.0.0.1:8000":"https://itech.technology",AUTHENTICATED:void 0,usertoken:void 0,rules:{required:function(t){return!!t||"This field is required"},min:function(t){return t.length>=8||"8 characters minimal"},textareaMin:function(t){return t.length>=10||"100 characters minimal"},emailMatch:function(){return"Email and password don't match"}},emailRules:[function(t){return!!t||"Email is required"},function(t){return/.+@.+/.test(t)||"Email is not valid"}],navBarBackGroundColor:null},getters:{setData:function(t){return function(e){console.log(t),e[0].length>0&&(e[0].length=0),e[1].forEach((function(t){e[0].push(t)}))}},getRandomString:function(t){return function(e){console.log(t);for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",i=0;i<e;i++)n+=a.charAt(Math.floor(Math.random()*a.length));return n}}},mutations:{splitToArray:function(t,e){var a=e.split(",");return a},get$:function(t,e,a){return e.get(a)},destroy$:function(t,e){e.destroy()},getAxiosCall:function(t,e){Q.a.get("".concat(e.host,"/api/").concat(e.url,"/"),{params:e.params,headers:{"X-CSRFToken":e.csrftoken,Authorization:"token ".concat(e.auth)}}).then((function(t){var a=t.data;e.callback(a)})).catch((function(t){console.log(t)}))},postAxiosCall:function(t,e){var a={body:e.params};Q.a.post("".concat(e.host,"/api/").concat(e.url,"/"),a,{headers:{"X-CSRFToken":e.csrftoken,Authorization:"token ".concat(e.auth)}}).then((function(t){var a=t.data;e.callback(a)})).catch((function(t){console.log(t)}))},publicPostAxiosCall:function(t,e){Q.a.post("".concat(e.host,"/api/").concat(e.url,"/"),{body:e.params,headers:{"X-CSRFToken":e.csrftoken,Authorization:"token ".concat(e.auth)}}).then((function(t){var a=t.data;e.callback(a)})).catch((function(t){console.log(t)}))},putAxiosCall:function(t,e){var a={body:e.params};Q.a.put("".concat(e.host,"/api/").concat(e.url,"/"),a,{headers:{"X-CSRFToken":e.csrftoken,Authorization:"token ".concat(e.auth)}}).then((function(t){var a=t.data;e.callback(a)})).catch((function(t){console.log(t)}))},deleteAxiosCall:function(t,e){Q.a.delete("".concat(e.host,"/api/").concat(e.url,"/"),{params:e.params,headers:{"X-CSRFToken":e.csrftoken,Authorization:"token ".concat(e.auth)}}).then((function(t){var a=t.data;e.callback(a)})).catch((function(t){console.log(t)}))}},actions:{getReq:function(t,e){var a=t.commit,n=t.rootState;a("getAxiosCall",{url:e.url,params:e.params,auth:e.auth,csrftoken:e.csrftoken,callback:e.callback,host:n.HOST})},publicPostReq:function(t,e){var a=t.commit,n=t.rootState;a("publicPostAxiosCall",{url:e.url,params:e.params,auth:e.auth,csrftoken:e.csrftoken,callback:e.callback,host:n.HOST})},postReq:function(t,e){var a=t.commit,n=t.rootState;a("postAxiosCall",{url:e.url,params:e.params,auth:e.auth,csrftoken:e.csrftoken,callback:e.callback,host:n.HOST})},putReq:function(t,e){var a=t.commit,n=t.rootState;a("putAxiosCall",{url:e.url,params:e.params,auth:e.auth,csrftoken:e.csrftoken,callback:e.callback,host:n.HOST})},deleteReq:function(t,e){var a=t.commit,n=t.rootState;a("deleteAxiosCall",{url:e.url,params:e.params,auth:e.auth,csrftoken:e.csrftoken,callback:e.callback,host:n.HOST})}},modules:{}}),tt=a("9483");Object(tt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var et=a("00e4"),at=a("f309");n["a"].use(at["a"]);var nt=new at["a"]({}),it=a("f5af"),ot=a.n(it);a("e829");n["a"].config.productionTip=!1,n["a"].use(et["a"]),n["a"].use(J["a"]),Q.a.defaults.xsrfHeaderName="X-CSRFTOKEN",Q.a.defaults.xsrfCookieName="XCSRF-TOKEN",Q.a.defaults.withCredentials=!1,n["a"].prototype.$axios=Q.a,n["a"].config.productionTip=!1,new n["a"]({created:function(){ot.a.init()},router:X,store:Z,vuetify:nt,render:function(t){return t(S)}}).$mount("#app")},"5aad":function(t,e,a){"use strict";a("cfaf")},"5ae5":function(t,e,a){},"703a":function(t,e,a){"use strict";a("5461")},"7f2e":function(t,e,a){t.exports=a.p+"static/img/software.140b42b2.svg"},"8d7b":function(t,e,a){t.exports=a.p+"static/img/startup.f423a3af.svg"},b1b0:function(t,e,a){t.exports=a.p+"static/img/digitalmarketing.27b8096f.jpg"},cfaf:function(t,e,a){},d3ab:function(t,e,a){t.exports=a.p+"static/img/automation.ca058756.jpg"},e114:function(t,e,a){t.exports=a.p+"static/img/marketing.2ca4fa22.svg"},e219:function(t,e,a){"use strict";a("4cdf")},ffcf:function(t,e,a){t.exports=a.p+"static/img/analytics.6bc199a2.jpg"}});
//# sourceMappingURL=app.91005cd1.js.map