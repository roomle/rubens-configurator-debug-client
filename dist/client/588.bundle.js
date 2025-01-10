"use strict";(self.webpackChunkconfigurator_debug=self.webpackChunkconfigurator_debug||[]).push([[588],{588:(t,e,i)=>{i.d(e,{DragInFromCustomViewStrategy:()=>u});var s=i(319),n=i(93),r=Object.defineProperty,a=(t,e,i)=>((t,e,i)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!=typeof e?e+"":e,i);const o=t=>{t.preventDefault(),t.stopPropagation()};class h{constructor({onCustomDragStart:t},e={}){a(this,"_startX",0),a(this,"_startY",0),a(this,"_lastX",0),a(this,"_lastY",0),a(this,"_epsilon"),a(this,"_isWaiting",!1),a(this,"_onCustomDragStart"),this._epsilon="number"==typeof e.epsilon?e.epsilon:s.C,this._onCustomDragStart=t}onMove(t){this._lastX=t.clientX,this._lastY=t.clientY,this._isWaiting&&((t,e)=>{const i=this._lastX-t,s=this._lastY-e;return Math.sqrt(i*i+s*s)})(this._startX,this._startY)>this._epsilon&&(this._onCustomDragStart(t),this._isWaiting=!1)}onStart(t){this._startX=t.clientX,this._startY=t.clientY,this.onMove(t),this._isWaiting=!0}onEnd(){this._reset()}_reset(){this._startX=0,this._startY=0,this._lastX=0,this._lastY=0,this._isWaiting=!1}}const c="data-rml-old-draggable",l=(t,e)=>{const i=(0,s.i)(t),n={delay:i?s.b:s.c,epsilon:i?s.d:s.C};if(!e)return n;if(!(i||t instanceof MouseEvent))return console.warn("Unsupported event! It is not TouchEvent and also not MouseEvent"),n;const{delayKey:r,epsilonKey:a}=i?{delayKey:"touchDragDelay",epsilonKey:"touchDragEpsilon"}:{delayKey:"customDragDelay",epsilonKey:"customDragEpsilon"};return"number"==typeof e[r]&&(n.delay=e.touchDragDelay),"number"==typeof e[a]&&(n.epsilon=e.touchDragEpsilon),n};class u{constructor(t,e,i){a(this,"_options",{}),a(this,"_instance"),a(this,"_viewName"),a(this,"_currentCustomDrag",null),a(this,"_currentBb",null),a(this,"_startTarget",null),a(this,"_onBeforeUpdateDrag",(()=>({}))),a(this,"isDragging",!1),this._instance=t,this._options=e||{},this._viewName=i}beforeUpdateGhost(t){this._onBeforeUpdateDrag=t}async _dragStart(t,e,i="rml_id"){var n;this._startTarget&&(this._startTarget.style.pointerEvents="none",this._startTarget.style.userSelect="none",this._startTarget.setAttribute(c,this._startTarget.draggable.toString()),this._startTarget.draggable=!1,this._startTarget.removeEventListener("dragstart",o),this._startTarget.addEventListener("dragstart",o)),this._currentBb=await this._instance.getBoundingClientRect((n=this._viewName,`[data-rml-custom-view="${n}"]`));const{clientX:r,clientY:a}=(0,s.e)(e),h=this._currentBb.x+r,l=this._currentBb.y+a;this.isDragging=!0,this._instance.dragInObject(t,h,l,i)}_dragUpdate(t){if(document.body.focus(),this._currentCustomDrag&&this._currentCustomDrag.onMove(t),!this._currentBb||!this.isDragging)return;const{clientX:e,clientY:i}=(0,s.e)(t),{url:r,width:a,height:o}=(t=>{let e="",i=n.e,s=n.f;if(!t)return{url:n.d,width:i,height:s};const r=t;if(r instanceof HTMLElement){const t=r.getBoundingClientRect(),a=r.getAttribute("data-rml-ghost-url"),o=r.getAttribute("data-rml-ghost-width"),h=r.getAttribute("data-rml-ghost-height");a?e=a:!a&&r instanceof HTMLImageElement&&r.src&&(e=r.src),e?(i=t.width,s=t.height):e=n.d,i=o?parseInt(o,10):i,s=h?parseInt(h,10):s}return{url:e||n.d,width:i,height:s}})(this._startTarget),h=this._currentBb.x+e,c=this._currentBb.y+i,l=this._options||{},u={ghost:{visibleIn:{x:this._currentBb.x-(l.dragInOverlapX||0),y:this._currentBb.y+(l.dragInOverlapY||0),width:this._currentBb.width+(l.dragInOverlapX||0),height:this._currentBb.height+(l.dragInOverlapY||0)},url:r,width:a,height:o},mode:"custom-view"},{x:_,y:g,options:d}=this._onBeforeUpdateDrag(h,c,u),m="number"==typeof _?_:h,p="number"==typeof g?g:c,f=d||u;this._instance.updateDrag(m,p,f)}_dragEnd(){this._currentCustomDrag&&this._currentCustomDrag.onEnd(),this._currentCustomDrag=null,this.isDragging=!1,this._currentBb=null,this._resetStartTarget(),this._instance.enableEvents(),this._instance.dragInObjectEnd()}dragStart(t,e,i){this._instance.disableEvents(),this._startTarget=e.target,this._currentCustomDrag=(0,s.i)(e)?new s.T(void 0,{onTouchDragStart:(e,s)=>{this._dragStart(t,s,i)}},l(e,this._options)):new h({onCustomDragStart:e=>this._dragStart(t,e,i)},l(e,this._options)),this._currentCustomDrag.onStart(e)}dragEnd(){this._dragEnd()}dragUpdate(t){this._dragUpdate(t)}touchStart(t,e,i="rml_id"){this.dragStart(t,e,i)}touchMove(t){this.dragUpdate(t)}touchEnd(){this.dragEnd()}dispose(){}_resetStartTarget(){this._startTarget&&(this._startTarget.style.pointerEvents="",this._startTarget.style.userSelect="",this._startTarget.draggable="true"===this._startTarget.getAttribute(c),this._startTarget.removeAttribute(c),this._startTarget.removeEventListener("dragstart",o))}releaseInput(t){this._currentCustomDrag&&this._currentCustomDrag.onEnd(),this._resetStartTarget()}}},319:(t,e,i)=>{i.d(e,{C:()=>p,T:()=>y,a:()=>l,b:()=>g,c:()=>m,d:()=>d,e:()=>u,g:()=>h,i:()=>a});var s=Object.defineProperty,n=(t,e,i)=>((t,e,i)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!=typeof e?e+"":e,i);class r{constructor(t=16){n(this,"_computedStyleCache",new Map),n(this,"_maxLifetime",16),n(this,"_cacheCleanInterval",null),this._maxLifetime=t}get(t){const e=this._computedStyleCache.get(t),i=Date.now();if(e&&i-e.updated<this._maxLifetime)return e.style;const s=getComputedStyle(t);return this._computedStyleCache.set(t,{style:s,updated:i}),this._cacheCleanInterval||(this._cacheCleanInterval=setInterval((()=>this._cleanUpCache),Math.max(1e3*this._maxLifetime,5e3))),s}_cleanUpCache(){const t=Date.now();for(const[e,{updated:i}]of this._computedStyleCache.entries())t-i>=this._maxLifetime&&this._computedStyleCache.delete(e);0===this._computedStyleCache.size&&this._cacheCleanInterval&&(clearInterval(this._cacheCleanInterval),this._cacheCleanInterval=null)}}const a=t=>window.TouchEvent&&t instanceof window.TouchEvent;let o;const h=t=>(o||(o=new r),o.get(t)),c=(t,e,i)=>{const s=parseFloat(t),n=window.devicePixelRatio||1;if("px"===e)return s;if("%"===e)return s/100*(i===document.documentElement?window.innerWidth:i.offsetWidth);if("rem"===e)return s*parseFloat(h(document.documentElement).fontSize);if("em"===e)return s*parseFloat(h(i).fontSize);if("vh"===e||"vw"===e||"vmin"===e||"vmax"===e)return s/100*{vh:window.innerHeight,vw:window.innerWidth,vmin:Math.min(window.innerWidth,window.innerHeight),vmax:Math.max(window.innerWidth,window.innerHeight)}[e];const r={cm:37.7952755906,mm:3.77952755906,in:96};return e in r?s*r[e]*n:(console.warn("Unable to determine coordinates for drag-in. Therefore drag-in is not possible. Check the CSS that positions the iframe of Roomle"),0)},l=(t,e,i={x:0,y:0})=>{const s=t.getBoundingClientRect(),n=h(t).transform;let r=0,a=0;if("none"!==n){const e=/translate\(\s*([-+]?\d*\.?\d+|\d+)(px|%)?,?\s*([-+]?\d*\.?\d+|\d+)?(px|%)?\s*\)/,i=n.match(e);i&&(r=c(i[1],i[2],t),a=c(i[3],i[4],t))}const{clientX:o,clientY:l}=u(e,i);return{x:o-s.left-r+t.scrollLeft,y:l-s.top-a+t.scrollTop}},u=(t,e=null)=>{const{clientX:i,clientY:s}=a(t)?_(t):t;return{clientX:i>0?i:e?e.x:i,clientY:s>0?s:e?e.y:s}},_=t=>{if(t.touches.length){let{clientX:e,clientY:i}=t.touches[0];if(t.touches.length>1){const s=t.touches[1];e=(e+s.clientX)/2,i=(i+s.clientY)/2}return{clientX:e,clientY:i}}const e=t.changedTouches[0];return{clientX:e.clientX,clientY:e.clientY}},g=500,d=10,m=100,p=15,f=(t,e=0)=>a(t)?{clientX:t.touches[e].clientX,clientY:t.touches[e].clientY}:{clientX:t.clientX,clientY:t.clientY},T=t=>!t||!a(t)||t.touches.length>0;class y{constructor(t,{onTouchDragStart:e},i={}){n(this,"_touchDragTimeOut"),n(this,"_onTouchDragStart"),n(this,"_payload",null),n(this,"_delay",g),n(this,"_firstTouch",null),n(this,"_lastTouch",null),n(this,"_epsilon",d),this._payload=t,this._onTouchDragStart=e,this._delay="number"==typeof i.delay?i.delay:g,this._epsilon="number"==typeof i.epsilon?i.epsilon:d}onStart(t){T(t)&&(this._touchDragTimeOut||(this._firstTouch=f(t,a(t)?t.touches.length-1:0),this._touchDragTimeOut=setTimeout((()=>{this._clearTimeout(),this._lastTouch||(this._lastTouch=f(t)),this._checkXDistance(t)()}),this._delay)))}onEnd(){this._resetTouches()}onMove(t){T(t)&&(this._lastTouch=f(t))}_clearTimeout(){this._touchDragTimeOut&&(clearTimeout(this._touchDragTimeOut),this._touchDragTimeOut=null)}_resetTouches(){this._clearTimeout(),this._lastTouch=null,this._firstTouch=null,this._payload=null}_checkXDistance(t){return()=>{if(!this._firstTouch||!this._lastTouch)return;let e=!1;e=Math.abs(this._firstTouch.clientX-this._lastTouch.clientX)<this._epsilon,e&&(this._onTouchDragStart(this._payload,t),this._resetTouches())}}}}}]);