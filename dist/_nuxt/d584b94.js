(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5,6],{307:function(t,e,n){"use strict";var o=n(11),r=n(1),c=n(4),d=n(115),l=n(16),f=n(12),h=n(207),v=n(43),x=n(84),m=n(206),y=n(5),I=n(85).f,_=n(37).f,N=n(18).f,E=n(308),w=n(309).trim,S="Number",C=r.Number,k=C.prototype,M=r.TypeError,A=c("".slice),X=c("".charCodeAt),O=function(t){var e=m(t,"number");return"bigint"==typeof e?e:R(e)},R=function(t){var e,n,o,r,c,d,l,code,f=m(t,"number");if(x(f))throw M("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=w(f),43===(e=X(f,0))||45===e){if(88===(n=X(f,2))||120===n)return NaN}else if(48===e){switch(X(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(d=(c=A(f,2)).length,l=0;l<d;l++)if((code=X(c,l))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(d(S,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var $,j=function(t){var e=arguments.length<1?0:C(O(t)),n=this;return v(k,n)&&y((function(){E(n)}))?h(Object(e),n,j):e},F=o?I(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;F.length>T;T++)f(C,$=F[T])&&!f(j,$)&&N(j,$,_(C,$));j.prototype=k,k.constructor=j,l(r,S,j)}},308:function(t,e,n){var o=n(4);t.exports=o(1..valueOf)},309:function(t,e,n){var o=n(4),r=n(26),c=n(13),d=n(310),l=o("".replace),f="["+d+"]",h=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),x=function(t){return function(e){var n=c(r(e));return 1&t&&(n=l(n,h,"")),2&t&&(n=l(n,v,"")),n}};t.exports={start:x(1),end:x(2),trim:x(3)}},310:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},317:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("d458ad56",content,!0,{sourceMap:!1})},318:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("b2814ca2",content,!0,{sourceMap:!1})},319:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("45bbca1a",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n.r(e);n(307);var o={name:"carousel-img",props:{pic:{Required:!0,type:Object},currentIndex:{Required:!0,type:Number},index:{Required:!0,type:Number}},computed:{placeImg:function(){return"https://maps.googleapis.com/maps/api/place/photo?photo_reference=".concat(this.pic.photo_reference)+"&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE"}}},r=(n(349),n(36)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===t.index,expression:"currentIndex === index"}],attrs:{src:t.placeImg,alt:""}})}),[],!1,null,"a712af48",null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var o={name:"carousel-controls",methods:{previousSlideHandler:function(){this.$emit("previous-slide")},nextSlideHandler:function(){this.$emit("next-slide")}}},r=(n(351),n(36)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-control-containers"},[n("button",{staticClass:"btn-control prev",on:{click:t.previousSlideHandler}},[n("font-awesome-icon",{attrs:{icon:"angle-left"}})],1),t._v(" "),n("button",{staticClass:"btn-control next",on:{click:t.nextSlideHandler}},[n("font-awesome-icon",{attrs:{icon:"angle-right"}})],1)])}),[],!1,null,"545404d2",null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);n(307);var o={name:"carousel-indicators",props:{photos:{Required:!0,type:Array},currentIndex:{Required:!0,type:Number}}},r=(n(353),n(36)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-indicator-container"},[n("div",{staticClass:"indicator-dots"},t._l(t.photos,(function(e,o){return n("div",{key:o,staticClass:"dots",class:{active:t.currentIndex===o}},[n("p")])})),0)])}),[],!1,null,"316fa730",null);e.default=component.exports},349:function(t,e,n){"use strict";n(317)},350:function(t,e,n){var o=n(65)(!1);o.push([t.i,'*[data-v-a712af48]{font-family:"Noto Sans",sans-serif}body[data-v-a712af48]{position:relative}img[data-v-a712af48]{position:absolute;top:0;left:0;bottom:0;right:0;transition:all .5s ease;-webkit-animation-name:fade-in-data-v-a712af48;animation-name:fade-in-data-v-a712af48;-webkit-animation-duration:1s;animation-duration:1s}@-webkit-keyframes fade-in-data-v-a712af48{0%{opacity:.3}to{opacity:1}}@keyframes fade-in-data-v-a712af48{0%{opacity:.3}to{opacity:1}}',""]),t.exports=o},351:function(t,e,n){"use strict";n(318)},352:function(t,e,n){var o=n(65)(!1);o.push([t.i,'*[data-v-545404d2]{font-family:"Noto Sans",sans-serif}body[data-v-545404d2]{position:relative}.btn-control-containers .btn-control[data-v-545404d2]{position:absolute;padding:20px;border:none;outline:none;background:rgba(0,0,0,.6);color:#fff;top:calc(50% - 25px)}.btn-control-containers .prev[data-v-545404d2]{left:0;opacity:.2}.btn-control-containers .prev[data-v-545404d2]:hover{opacity:.8}.btn-control-containers .next[data-v-545404d2]{right:0;opacity:.2}.btn-control-containers .next[data-v-545404d2]:hover{opacity:.8}',""]),t.exports=o},353:function(t,e,n){"use strict";n(319)},354:function(t,e,n){var o=n(65)(!1);o.push([t.i,'*[data-v-316fa730]{font-family:"Noto Sans",sans-serif}body[data-v-316fa730]{position:relative}.carousel-indicator-container[data-v-316fa730]{position:absolute;bottom:20px;left:calc(50% - 56px)}.carousel-indicator-container .indicator-dots[data-v-316fa730]{display:flex;justify-content:center;align-items:center;grid-gap:5px;gap:5px;overflow-x:auto;overflow-y:hidden}.carousel-indicator-container .indicator-dots .dots[data-v-316fa730]{width:5px;height:5px;border-radius:50%;background:#fff}.carousel-indicator-container .indicator-dots .dots p[data-v-316fa730]{width:100%}.carousel-indicator-container .indicator-dots .active[data-v-316fa730]{width:22px;border-radius:16px}',""]),t.exports=o},355:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("7034d526",content,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";n(355)},406:function(t,e,n){var o=n(65)(!1);o.push([t.i,'*[data-v-2b2146ea]{font-family:"Noto Sans",sans-serif}body[data-v-2b2146ea]{position:relative}.carousel-container[data-v-2b2146ea]{position:relative;display:flex;width:90vw;height:50vh;overflow-x:auto}',""]),t.exports=o},412:function(t,e,n){"use strict";n.r(e);var o=n(324),r=n(325),c=n(326),d={name:"carousel",components:{carouselImg:o.default,CarouselControls:r.default,CarouselIndicators:c.default},props:{photos:{Required:!0,type:Array}},data:function(){return{currentIndex:0,touch:{startX:0,endX:0}}},methods:{previousSlide:function(){this.currentIndex<=0?this.currentIndex:this.currentIndex-=1},nextSlide:function(){this.currentIndex>this.photos.length-2?this.currentIndex:this.currentIndex+=1},touchStart:function(t){this.touch.startX=t.touches[0].clientX,this.touch.endX=0},touchMove:function(t){this.touch.endX=t.touches[0].clientX},touchEnd:function(){!this.touch.endX||Math.abs(this.touch.end-this.touch.start)<20||(this.touch.endX<this.touch.startX?this.nextSlide():this.previousSlide())}},mounted:function(){var t=this;this.$el.addEventListener("touchstart",(function(e){return t.touchStart(e)})),this.$el.addEventListener("touchmove",(function(e){return t.touchMove(e)})),this.$el.addEventListener("touchend",(function(){return t.touchEnd()}))}},l=(n(405),n(36)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-container"},[t._l(t.photos,(function(e,o){return n("carousel-img",{key:o,attrs:{pic:e,currentIndex:t.currentIndex,index:o}})})),t._v(" "),n("carousel-controls",{on:{"previous-slide":t.previousSlide,"next-slide":t.nextSlide}}),t._v(" "),n("carousel-indicators",{attrs:{photos:t.photos,currentIndex:t.currentIndex}})],2)}),[],!1,null,"2b2146ea",null);e.default=component.exports;installComponents(component,{CarouselImg:n(324).default,CarouselControls:n(325).default,CarouselIndicators:n(326).default})}}]);