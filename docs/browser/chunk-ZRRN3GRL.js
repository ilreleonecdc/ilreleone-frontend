import{$ as w,$a as Dt,Aa as Be,B as Sn,Ba as M,Da as bt,Ea as Ut,Eb as Ht,Fb as kn,Gb as $n,H as wn,Ha as Q,Ia as K,Ib as v,Ja as T,Jb as Bn,K as J,Ka as x,Kb as Vt,La as me,Lb as We,M as b,Mb as Ge,N as G,Oa as Rn,P as L,R as P,Ra as ee,S as g,Sa as _,T as gt,Ta as Ln,Ua as yt,V as _n,Va as xn,W as Tn,Wa as we,X as oe,Ya as _e,Za as Te,_ as An,_a as se,a as S,ab as Et,ba as Fn,bb as Nn,db as Pn,ea as In,eb as Y,f as Dn,fa as mt,fb as Ue,ga as Bt,gb as je,hb as ze,i as ie,ia as re,ja as he,jb as He,ka as ge,kb as Ve,l as En,lb as jt,m as $t,mb as Mn,oa as Se,ob as vt,pb as Ct,q as ke,ub as B,w as vn,wa as O,wb as zt,xa as On,y as Cn,ya as $e}from"./chunk-ARMGOPD6.js";var k=new L("");var zn=null;function St(){return zn}function po(t){zn??=t}var Wt=class{},Gt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>g(Hn),providedIn:"platform"})}return t})();var Hn=(()=>{class t extends Gt{_location;_history;_doc=g(k);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return St().getBaseHref(this._doc)}onPopState(e){let n=St().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=St().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Vn(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Un(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function ae(t){return t&&t[0]!=="?"?`?${t}`:t}var wt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>g(Gn),providedIn:"root"})}return t})(),Wn=new L(""),Gn=(()=>{class t extends wt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??g(k).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Vn(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+ae(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+ae(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+ae(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(P(Gt),P(Wn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kn=(()=>{class t{_subject=new ie;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=go(Un(jn(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+ae(n))}normalize(e){return t.stripTrailingSlash(ho(this._basePath,jn(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ae(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ae(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=ae;static joinWithSlash=Vn;static stripTrailingSlash=Un;static \u0275fac=function(n){return new(n||t)(P(wt))};static \u0275prov=b({token:t,factory:()=>fo(),providedIn:"root"})}return t})();function fo(){return new Kn(P(wt))}function ho(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function jn(t){return t.replace(/\/index.html$/,"")}function go(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Kt=/\s+/,Yn=[],Yt=(()=>{class t{_ngEl;_renderer;initialClasses=Yn;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Kt):Yn}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Kt):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Kt).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(M(he),M(Be))};static \u0275dir=T({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var _t=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Xn=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new _t(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let l=n.get(r);n.move(l,s),Zn(l,o)}});for(let o=0,r=n.length;o<r;o++){let l=n.get(o).context;l.index=o,l.count=r,l.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);Zn(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(M(bt),M($e),M(kn))};static \u0275dir=T({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Zn(t,i){t.context.$implicit=i.item}var Zt=(()=>{class t{_viewContainer;_context=new Tt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){qn(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){qn(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(M(bt),M($e))};static \u0275dir=T({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Tt=class{$implicit=null;ngIf=null};function qn(t,i){if(t&&!t.createEmbeddedView)throw new J(2020,!1)}var qt=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:On.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(M(he),M($n),M(Be))};static \u0275dir=T({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Xt=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(M(bt))};static \u0275dir=T({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[oe]})}return t})();var le=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({})}return t})();function Jt(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Jn="browser",Qn="server";function Ye(t){return t===Jn}function Qt(t){return t===Qn}var Ke=class{};function ei(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function be(t,i){if(t&&i){let e=n=>{ei(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function yo(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function ye(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Ia(t="p-overflow-hidden"){let i=yo(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),ye(document.body,t)}function Oa(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function Ra(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function La(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function ti(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Ze(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function en(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),Ze(i)?i:void 0}function xa(t,i){let e=en(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function tn(t,i={}){if(Ze(t)){let e=(n,o)=>{var r,s;let l=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?e(n,c):Object.entries(c).map(([f,p])=>n==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);a=d.length?a.concat(d.filter(f=>!!f)):a}}return a},l)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?tn(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function Na(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function Do(t,i){return Ze(t)?Array.from(t.querySelectorAll(i)):[]}function Ae(t,i){return Ze(t)?t.matches(i)?t:t.querySelector(i):null}function Pa(t,i){t&&document.activeElement!==t&&t.focus(i)}function ni(t,i=""){let e=Do(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function Ma(t,i){let e=ni(t,i);return e.length>0?e[0]:null}function nn(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Eo(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function ka(t,i){let e=ni(t,i);return e.length>0?e[e.length-1]:null}function ii(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function on(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function $a(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function vo(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Eo(t))}function Ba(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let o=en((r=>!!(r&&r.constructor&&r.call&&r.apply))(t)?t():t);return o?.nodeType===9||vo(o)?o:void 0}}function rn(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Ua(t){return!!(t&&t.offsetParent!=null)}function ja(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function oi(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function za(t,i){let e=en(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function Ha(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,c=t.scrollTop,u=t.clientHeight,d=on(i);a<0?t.scrollTop=c+a:a+d>u&&(t.scrollTop=c+a-u+d)}function ri(t,i="",e){Ze(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function si(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(o=>{o(e)})},clear(){t.clear()}}}var Co=Object.defineProperty,ai=Object.getOwnPropertySymbols,So=Object.prototype.hasOwnProperty,wo=Object.prototype.propertyIsEnumerable,li=(t,i,e)=>i in t?Co(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,_o=(t,i)=>{for(var e in i||(i={}))So.call(i,e)&&li(t,e,i[e]);if(ai)for(var e of ai(i))wo.call(i,e)&&li(t,e,i[e]);return t};function N(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function sn(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,l;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!sn(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let a=t instanceof Date,c=i instanceof Date;if(a!=c)return!1;if(a&&c)return t.getTime()==i.getTime();let u=t instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==i.toString();let f=Object.keys(t);if(s=f.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,f[r]))return!1;for(r=s;r--!==0;)if(l=f[r],!sn(t[l],i[l],e))return!1;return!0}function To(t,i){return sn(t,i)}function ui(t){return!!(t&&t.constructor&&t.call&&t.apply)}function D(t){return!N(t)}function At(t,i){if(!t||!i)return null;try{let e=t[i];if(D(e))return e}catch{}if(Object.keys(t).length){if(ui(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function di(t,i,e){return e?At(t,e)===At(i,e):To(t,i)}function Ka(t,i){let e=-1;if(D(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function Z(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function W(t,...i){return ui(t)?t(...i):t}function ce(t,i=!0){return typeof t=="string"&&(i||t!=="")}function ci(t){return ce(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Ft(t,i="",e={}){let n=ci(i).split("."),o=n.shift();return o?Z(t)?Ft(W(t[Object.keys(t).find(r=>ci(r)===o)||""],e),n.join("."),e):void 0:W(t,e)}function It(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function pi(t){return D(t)&&!isNaN(t)}function Ya(t=""){return D(t)&&t.length===1&&!!t.match(/\S| /)}function j(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function qe(...t){let i=(e={},n={})=>{let o=_o({},e);return Object.keys(n).forEach(r=>{Z(n[r])&&r in e&&Z(e[r])?o[r]=i(e[r],n[r]):o[r]=n[r]}),o};return t.reduce((e,n,o)=>o===0?n:i(e,n),{})}function De(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function z(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function Ot(t){return ce(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function an(t){return ce(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var Rt={};function Xe(t="pui_id_"){return Rt.hasOwnProperty(t)||(Rt[t]=0),Rt[t]++,`${t}${Rt[t]}`}function Ao(){let t=[],i=(s,l,a=999)=>{let c=o(s,l,a),u=c.value+(c.key===s?0:a)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(l=>l.value!==s)},n=(s,l)=>o(s,l).value,o=(s,l,a=0)=>[...t].reverse().find(c=>l?!0:c.key===s)||{key:s,value:a},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,l,a)=>{l&&(l.style.zIndex=String(i(s,!0,a)))},clear:s=>{s&&(e(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var Xa=Ao();var F=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var ul=(()=>{class t{filter(e,n,o,r,s){let l=[];if(e)for(let a of e)for(let c of n){let u=At(a,c);if(this.filters[r](u,o,s)){l.push(a);break}}return l}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=z(n.toString()).toLocaleLowerCase(o);return z(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=z(n.toString()).toLocaleLowerCase(o);return z(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=z(n.toString()).toLocaleLowerCase(o);return z(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=z(n.toString()).toLocaleLowerCase(o),s=z(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:z(e.toString()).toLocaleLowerCase(o)==z(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:z(e.toString()).toLocaleLowerCase(o)!=z(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(di(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dl=(()=>{class t{messageSource=new ie;clearSource=new ie;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),pl=(()=>{class t{clickSource=new ie;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fi=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(M($e))};static \u0275dir=T({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ue=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({imports:[le]})}return t})(),fl=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Fo=Object.defineProperty,Io=Object.defineProperties,Oo=Object.getOwnPropertyDescriptors,Lt=Object.getOwnPropertySymbols,mi=Object.prototype.hasOwnProperty,bi=Object.prototype.propertyIsEnumerable,hi=(t,i,e)=>i in t?Fo(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,X=(t,i)=>{for(var e in i||(i={}))mi.call(i,e)&&hi(t,e,i[e]);if(Lt)for(var e of Lt(i))bi.call(i,e)&&hi(t,e,i[e]);return t},ln=(t,i)=>Io(t,Oo(i)),te=(t,i)=>{var e={};for(var n in t)mi.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Lt)for(var n of Lt(t))i.indexOf(n)<0&&bi.call(t,n)&&(e[n]=t[n]);return e};function ml(...t){return qe(...t)}var Ro=si(),H=Ro;function gi(t,i){It(t)?t.push(...i||[]):Z(t)&&Object.assign(t,i)}function Lo(t){return Z(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function xo(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function cn(t="",i=""){return xo(`${ce(t,!1)&&ce(i,!1)?`${t}-`:t}${i}`)}function yi(t="",i=""){return`--${cn(t,i)}`}function No(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Di(t,i="",e="",n=[],o){if(ce(t)){let r=/{([^}]*)}/g,s=t.trim();if(No(s))return;if(j(s,r)){let l=s.replaceAll(r,u=>{let f=u.replace(/{|}/g,"").split(".").filter(p=>!n.some(m=>j(p,m)));return`var(${yi(e,Ot(f.join("-")))}${D(o)?`, ${o}`:""})`}),a=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return j(l.replace(c,"0"),a)?`calc(${l})`:l}return s}else if(pi(t))return t}function Po(t,i,e){ce(i,!1)&&t.push(`${i}:${e};`)}function Fe(t,i){return t?`${t}{${i}}`:""}var Ie=(...t)=>Mo(E.getTheme(),...t),Mo=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=E.defaults||{},{prefix:s,transform:l}=t?.options||r||{},c=j(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||N(n)&&l==="strict"?E.getTokenValue(i):Di(c,void 0,s,[o.excludedKeyRegex],e)}return""};function ko(t,i={}){let e=E.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[f,p])=>{let m=j(f,r)?cn(u):cn(u,Ot(f)),h=Lo(p);if(Z(h)){let{variables:y,tokens:A}=s(h,m);gi(d.tokens,A),gi(d.variables,y)}else d.tokens.push((n?m.replace(`${n}-`,""):m).replaceAll("-",".")),Po(d.variables,yi(m),Di(h,m,n,[r]));return d},{variables:[],tokens:[]}),{variables:l,tokens:a}=s(t,n);return{value:l,tokens:a,declarations:l.join(""),css:Fe(o,l.join(""))}}var q={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return ko(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,l,a,c,u,d;let{preset:f,options:p}=i,m,h,y,A,I,C,R;if(D(f)&&p.transform!=="strict"){let{primitive:ve,semantic:Ce,extend:nt}=f,Ne=Ce||{},{colorScheme:it}=Ne,ot=te(Ne,["colorScheme"]),rt=nt||{},{colorScheme:st}=rt,Pe=te(rt,["colorScheme"]),Me=it||{},{dark:at}=Me,lt=te(Me,["dark"]),ct=st||{},{dark:ut}=ct,dt=te(ct,["dark"]),pt=D(ve)?this._toVariables({primitive:ve},p):{},ft=D(ot)?this._toVariables({semantic:ot},p):{},ht=D(lt)?this._toVariables({light:lt},p):{},gn=D(at)?this._toVariables({dark:at},p):{},mn=D(Pe)?this._toVariables({semantic:Pe},p):{},bn=D(dt)?this._toVariables({light:dt},p):{},yn=D(ut)?this._toVariables({dark:ut},p):{},[Ki,Yi]=[(r=pt.declarations)!=null?r:"",pt.tokens],[Zi,qi]=[(s=ft.declarations)!=null?s:"",ft.tokens||[]],[Xi,Ji]=[(l=ht.declarations)!=null?l:"",ht.tokens||[]],[Qi,eo]=[(a=gn.declarations)!=null?a:"",gn.tokens||[]],[to,no]=[(c=mn.declarations)!=null?c:"",mn.tokens||[]],[io,oo]=[(u=bn.declarations)!=null?u:"",bn.tokens||[]],[ro,so]=[(d=yn.declarations)!=null?d:"",yn.tokens||[]];m=this.transformCSS(t,Ki,"light","variable",p,n,o),h=Yi;let ao=this.transformCSS(t,`${Zi}${Xi}`,"light","variable",p,n,o),lo=this.transformCSS(t,`${Qi}`,"dark","variable",p,n,o);y=`${ao}${lo}`,A=[...new Set([...qi,...Ji,...eo])];let co=this.transformCSS(t,`${to}${io}color-scheme:light`,"light","variable",p,n,o),uo=this.transformCSS(t,`${ro}color-scheme:dark`,"dark","variable",p,n,o);I=`${co}${uo}`,C=[...new Set([...no,...oo,...so])],R=W(f.css,{dt:Ie})}return{primitive:{css:m,tokens:h},semantic:{css:y,tokens:A},global:{css:I,tokens:C},style:R}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var l,a,c;let u,d,f;if(D(i)&&e.transform!=="strict"){let p=t.replace("-directive",""),m=i,{colorScheme:h,extend:y,css:A}=m,I=te(m,["colorScheme","extend","css"]),C=y||{},{colorScheme:R}=C,ve=te(C,["colorScheme"]),Ce=h||{},{dark:nt}=Ce,Ne=te(Ce,["dark"]),it=R||{},{dark:ot}=it,rt=te(it,["dark"]),st=D(I)?this._toVariables({[p]:X(X({},I),ve)},e):{},Pe=D(Ne)?this._toVariables({[p]:X(X({},Ne),rt)},e):{},Me=D(nt)?this._toVariables({[p]:X(X({},nt),ot)},e):{},[at,lt]=[(l=st.declarations)!=null?l:"",st.tokens||[]],[ct,ut]=[(a=Pe.declarations)!=null?a:"",Pe.tokens||[]],[dt,pt]=[(c=Me.declarations)!=null?c:"",Me.tokens||[]],ft=this.transformCSS(p,`${at}${ct}`,"light","variable",e,o,r,s),ht=this.transformCSS(p,dt,"dark","variable",e,o,r,s);u=`${ft}${ht}`,d=[...new Set([...lt,...ut,...pt])],f=W(A,{dt:Ie})}return{css:u,tokens:d,style:f}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:l}=i,a=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:a,options:l,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let s=t.replace("-directive",""),{preset:l,options:a}=i,c=(r=l?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:a,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${W(o.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),l=Object.entries(n).reduce((a,[c,u])=>a.push(`${c}="${u}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,u])=>{if(u?.css){let d=De(u?.css),f=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${f}" ${l}>${d}</style>`)}return a},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let l={name:t,theme:i,params:e,set:o,defaults:r},a=(s=t.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,f])=>u.push(`${d}="${f}"`)&&u,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${De(a)}</style>`:""},createTokens(t={},i,e="",n="",o={}){return Object.entries(t).forEach(([r,s])=>{let l=j(r,i.variable.excludedKeyRegex)?e:e?`${e}.${an(r)}`:an(r),a=n?`${n}.${r}`:r;Z(s)?this.createTokens(s,i,l,a,o):(o[l]||(o[l]={paths:[],computed(c,u={}){var d,f;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(f=this.paths.find(p=>p.scheme===c))==null?void 0:f.computed(c,u.binding):this.paths.map(p=>p.computed(p.scheme,u[p.scheme]))}}),o[l].paths.push({path:a,value:s,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,f=s;if(u.name=this.path,u.binding||(u.binding={}),j(s,d)){let m=s.trim().replaceAll(d,A=>{var I;let C=A.replace(/{|}/g,""),R=(I=o[C])==null?void 0:I.computed(c,u);return It(R)&&R.length===2?`light-dark(${R[0].value},${R[1].value})`:R?.value}),h=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,y=/var\([^)]+\)/g;f=j(m.replace(y,"0"),h)?`calc(${m})`:m}return N(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),o},getTokenValue(t,i,e){var n;let r=(a=>a.split(".").filter(u=>!j(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,l=[(n=t[r])==null?void 0:n.computed(s)].flat().filter(a=>a);return l.length===1?l[0].value:l.reduce((a={},c)=>{let u=c,{colorScheme:d}=u,f=te(u,["colorScheme"]);return a[d]=f,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Fe(D(i)?`${t}${i},${t} ${i}`:t,n):Fe(t,D(i)?Fe(i,n):n)},transformCSS(t,i,e,n,o={},r,s,l){if(D(i)){let{cssLayer:a}=o;if(n!=="style"){let c=this.getColorSchemeOption(o,s);i=e==="dark"?c.reduce((u,{type:d,selector:f})=>(D(f)&&(u+=f.includes("[CSS]")?f.replace("[CSS]",i):this.getSelectorRule(f,l,d,i)),u),""):Fe(l??":root",i)}if(a){let c={name:"primeui",order:"primeui"};Z(a)&&(c.name=W(a.name,{name:t,type:n})),D(c.name)&&(i=Fe(`@layer ${c.name}`,i),r?.layerNames(c.name))}return i}return""}},E={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=ln(X({},i),{options:X(X({},this.defaults.options),i.options)}),this._tokens=q.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),H.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ln(X({},this.theme),{preset:t}),this._tokens=q.createTokens(t,this.defaults),this.clearLoadedStyleNames(),H.emit("preset:change",t),H.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ln(X({},this.theme),{options:t}),this.clearLoadedStyleNames(),H.emit("options:change",t),H.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return q.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return q.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPreset(o)},getLayerOrderCSS(t=""){return q.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return q.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return q.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return q.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),H.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&H.emit("theme:load"))}};var $o=0,Ei=(()=>{class t{document=g(k);use(e,n={}){let o=!1,r=e,s=null,{immediate:l=!0,manual:a=!1,name:c=`style_${++$o}`,id:u=void 0,media:d=void 0,nonce:f=void 0,first:p=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=e,tn(s,{type:"text/css",media:d,nonce:f});let h=this.document.head;p&&h.firstChild?h.insertBefore(s,h.firstChild):h.appendChild(s),ri(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Oe={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Bo=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Uo=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,$=(()=>{class t{name="base";useStyle=g(Ei);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(W(e,{dt:Ie}));return r?this.useStyle.use(De(r),S({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(o="")=>E.transformCSS(e.name||this.name,`${o}${n}`));loadGlobalCSS=(e={})=>this.load(Uo,e);loadGlobalTheme=(e={},n="")=>this.load(Bo,e,(o="")=>E.transformCSS(e.name||this.name,`${o}${n}`));getCommonTheme=e=>E.getCommon(this.name,e);getComponentTheme=e=>E.getComponent(this.name,e);getDirectiveTheme=e=>E.getDirective(this.name,e);getPresetTheme=(e,n,o)=>E.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>E.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=W(this.css,{dt:Ie}),r=De(`${o}${e}`),s=Object.entries(n).reduce((l,[a,c])=>l.push(`${a}="${c}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>E.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[E.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=W(this.theme,{dt:Ie}),l=De(E.transformCSS(r,s)),a=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${a}>${l}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jo=(()=>{class t{theme=ge(void 0);csp=ge({nonce:void 0});isThemeChanged=!1;document=g(k);baseStyle=g($);constructor(){Ge(()=>{H.on("theme:change",e=>{Vt(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Ge(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){E.clearLoadedStyleNames(),H.clear()}onThemeChange(e){E.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!E.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,S({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,S({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,S({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(S({name:"global-style"},s),r),E.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),un=(()=>{class t extends jo{ripple=ge(!1);platformId=g(Se);inputStyle=ge(null);inputVariant=ge(null);overlayOptions={};csp=ge({nonce:void 0});filterMatchModeOptions={text:[F.STARTS_WITH,F.CONTAINS,F.NOT_CONTAINS,F.ENDS_WITH,F.EQUALS,F.NOT_EQUALS],numeric:[F.EQUALS,F.NOT_EQUALS,F.LESS_THAN,F.LESS_THAN_OR_EQUAL_TO,F.GREATER_THAN,F.GREATER_THAN_OR_EQUAL_TO],date:[F.DATE_IS,F.DATE_IS_NOT,F.DATE_BEFORE,F.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ie;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=S(S({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:l,overlayOptions:a,translation:c,filterMatchModeOptions:u}=e||{};n&&this.csp.set(n),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),a&&(this.overlayOptions=a),c&&this.setTranslation(c),u&&(this.filterMatchModeOptions=u),l&&this.setThemeConfig({theme:l,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zo=new L("PRIME_NG_CONFIG");function Gl(...t){let i=t?.map(n=>({provide:zo,useValue:n,multi:!1})),e=Rn(()=>{let n=g(un);t?.forEach(o=>n.setConfig(o))});return gt([...i,e])}var vi=(()=>{class t extends ${name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),V=(()=>{class t{document=g(k);platformId=g(Se);el=g(he);injector=g(Fn);cd=g(Ht);renderer=g(Be);config=g(un);baseComponentStyle=g(vi);baseStyle=g($);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Xe("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return Ft(e,n,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Qt(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>H.off("theme:change",e))}_loadStyles(){let e=()=>{Oe.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Oe.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Oe.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Oe.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!E.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,S({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,S({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,S({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(S({name:"global-style"},this.styleOptions),r),E.setLoadedStyleName("common")}if(!E.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,S({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(S({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),E.setLoadedStyleName(this.componentStyle?.name)}if(!E.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,S({name:"layer-order",first:!0},this.styleOptions)),E.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,S({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Oe.clearLoadedStyleNames(),H.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let o=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:S({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=T({type:t,inputs:{dt:"dt"},features:[B([vi,$]),oe]})}return t})();var dn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=I=>{if(I)return getComputedStyle(I).getPropertyValue("position")==="relative"?I:r(I.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},m,h;a.top+l+s.height>d.height?(m=a.top-p.top-s.height,e.style.transformOrigin="bottom",a.top+m<0&&(m=-1*a.top)):(m=l+a.top-p.top,e.style.transformOrigin="top");let y=a.left+s.width-d.width,A=a.left-p.left;s.width>d.width?h=(a.left-p.left)*-1:y>0?h=A-y:h=a.left-p.left,e.style.top=m+"px",e.style.left=h+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,l=r.width,a=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),p=this.getViewport(),m,h;u.top+a+s>p.height?(m=u.top+d-s,e.style.transformOrigin="bottom",m<0&&(m=d)):(m=a+u.top+d,e.style.transformOrigin="top"),u.left+l>p.width?h=Math.max(0,u.left+f+c-l):h=u.left+f,e.style.top=m+"px",e.style.left=h+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return r.test(a.getPropertyValue("overflow"))||r.test(a.getPropertyValue("overflowX"))||r.test(a.getPropertyValue("overflowY"))};for(let l of o){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let c=a.split(",");for(let u of c){let d=this.findSingle(l,u);d&&s(d)&&n.push(d)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-r-l,d=e.scrollTop,f=e.clientHeight,p=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+p>f&&(e.scrollTop=d+u-f+p)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,l=r/s;let a=setInterval(()=>{o=o-l,o<=0&&(o=0,clearInterval(a)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,l=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let l=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([f,p])=>r==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);a=d.length?a.concat(d.filter(f=>!!f)):a}}return a},l)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let l=r.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),Ci=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=dn.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Si=(()=>{class t extends V{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(Se);document=g(k);host=g(he);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ye(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=dn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275dir=T({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",v],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[x]})}return t})();var Ho=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Vo={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":D(t.value)&&String(t.value).length===1,"p-badge-dot":N(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},wi=(()=>{class t extends ${name="badge";theme=Ho;classes=Vo;static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var pn=(()=>{class t extends V{styleClass=re();style=re();badgeSize=re();size=re();severity=re();value=re();badgeDisabled=re(!1,{transform:v});_componentStyle=g(wi);containerClass=We(()=>{let e="p-badge p-component";return D(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),N(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=Q({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(xn(o.style()),we(o.containerClass()),Ln("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[B([wi]),x],decls:1,vars:1,template:function(n,o){n&1&&vt(0),n&2&&Ct(o.value())},dependencies:[le,ue],encapsulation:2,changeDetection:0})}return t})(),_i=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({imports:[pn,ue,ue]})}return t})();var Go=["*"],Ko=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Yo=(()=>{class t extends ${name="baseicon";inlineStyles=Ko;static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Ti=(()=>{class t extends V{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=N(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=Q({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",v],styleClass:"styleClass"},features:[B([Yo]),x],ngContentSelectors:Go,decls:1,vars:0,template:function(n,o){n&1&&(Ue(),je(0))},encapsulation:2,changeDetection:0})}return t})();var Ai=(()=>{class t extends Ti{pathId;ngOnInit(){this.pathId="url(#"+Xe()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=Q({type:t,selectors:[["SpinnerIcon"]],features:[x],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(An(),_e(0,"svg",0)(1,"g"),se(2,"path",1),Te(),_e(3,"defs")(4,"clipPath",2),se(5,"rect",3),Te()()()),n&2&&(we(o.getClassNames()),ee("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),O(),ee("clip-path",o.pathId),O(3),_("id",o.pathId))},encapsulation:2})}return t})();var Zo=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,qo={root:"p-ink"},Fi=(()=>{class t extends ${name="ripple";theme=Zo;classes=qo;static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Ii=(()=>{class t extends V{zone=g(Bt);_componentStyle=g(Fi);animationListener;mouseDownListener;timeout;constructor(){super(),Ge(()=>{Ye(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(ye(n,"p-ink-active"),!nn(n)&&!rn(n)){let l=Math.max(ti(this.el.nativeElement),on(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let o=ii(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-rn(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-nn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),be(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&ye(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&ye(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),ye(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,oi(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=T({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[B([Fi]),x]})}return t})();var Xo=["content"],Jo=["loadingicon"],Qo=["icon"],er=["*"],Li=t=>({class:t});function tr(t,i){t&1&&Nn(0)}function nr(t,i){if(t&1&&se(0,"span",8),t&2){let e=Y(3);_("ngClass",e.iconClass()),ee("aria-hidden",!0)("data-pc-section","loadingicon")}}function ir(t,i){if(t&1&&se(0,"SpinnerIcon",9),t&2){let e=Y(3);_("styleClass",e.spinnerIconClass())("spin",!0),ee("aria-hidden",!0)("data-pc-section","loadingicon")}}function or(t,i){if(t&1&&(Dt(0),me(1,nr,1,3,"span",6)(2,ir,1,4,"SpinnerIcon",7),Et()),t&2){let e=Y(2);O(),_("ngIf",e.loadingIcon),O(),_("ngIf",!e.loadingIcon)}}function rr(t,i){}function sr(t,i){if(t&1&&me(0,rr,0,0,"ng-template",10),t&2){let e=Y(2);_("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ar(t,i){if(t&1&&(Dt(0),me(1,or,3,2,"ng-container",2)(2,sr,1,1,null,5),Et()),t&2){let e=Y();O(),_("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),O(),_("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",zt(3,Li,e.iconClass()))}}function lr(t,i){if(t&1&&se(0,"span",8),t&2){let e=Y(2);we(e.icon),_("ngClass",e.iconClass()),ee("data-pc-section","icon")}}function cr(t,i){}function ur(t,i){if(t&1&&me(0,cr,0,0,"ng-template",10),t&2){let e=Y(2);_("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function dr(t,i){if(t&1&&(Dt(0),me(1,lr,1,4,"span",11)(2,ur,1,1,null,5),Et()),t&2){let e=Y();O(),_("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),O(),_("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",zt(3,Li,e.iconClass()))}}function pr(t,i){if(t&1&&(_e(0,"span",12),vt(1),Te()),t&2){let e=Y();ee("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),O(),Ct(e.label)}}function fr(t,i){if(t&1&&se(0,"p-badge",13),t&2){let e=Y();_("value",e.badge)("severity",e.badgeSeverity)}}var hr=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,gr={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},pe=(()=>{class t extends ${name="button";theme=hr;classes=gr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var de={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Oi=(()=>{class t extends V{_componentStyle=g(pe);static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275dir=T({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&yt("p-button-label",!0)},features:[B([pe]),x]})}return t})(),Ri=(()=>{class t extends V{_componentStyle=g(pe);static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275dir=T({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&yt("p-button-icon",!0)},features:[B([pe]),x]})}return t})(),mu=(()=>{class t extends V{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Ut(Ri);labelSignal=Ut(Oi);isIconOnly=We(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(de);isTextButton=We(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(pe);ngAfterViewInit(){super.ngAfterViewInit(),be(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let e=[de.button,de.component];return this.icon&&!this.label&&N(this.htmlElement.textContent)&&e.push(de.iconOnly),this.loading&&(e.push(de.disabled,de.loading),!this.icon&&this.label&&e.push(de.labelOnly),this.icon&&!this.label&&!N(this.htmlElement.textContent)&&e.push(de.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return N(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Ae(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Ae(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&be(n,o);let r=this.getIconClass();r&&be(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Ae(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Ae(this.htmlElement,".p-button-icon"),n=Ae(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275dir=T({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(jt(r,o.iconSignal,Ri,5),jt(r,o.labelSignal,Oi,5)),n&2&&Mn(2)},hostVars:4,hostBindings:function(n,o){n&2&&yt("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],outlined:[2,"outlined","outlined",v],size:"size",plain:[2,"plain","plain",v],fluid:[2,"fluid","fluid",v],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[B([pe]),x,oe]})}return t})(),mr=(()=>{class t extends V{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new mt;onFocus=new mt;onBlur=new mt;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return N(this.fluid)?!!n:this.fluid}_componentStyle=g(pe);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=Q({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(ze(r,Xo,5),ze(r,Jo,5),ze(r,Qo,5),ze(r,fi,4)),n&2){let s;He(s=Ve())&&(o.contentTemplate=s.first),He(s=Ve())&&(o.loadingIconTemplate=s.first),He(s=Ve())&&(o.iconTemplate=s.first),He(s=Ve())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",v],loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],plain:[2,"plain","plain",v],severity:"severity",outlined:[2,"outlined","outlined",v],link:[2,"link","link",v],tabindex:[2,"tabindex","tabindex",Bn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",v],fluid:[2,"fluid","fluid",v],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[B([pe]),x,oe],ngContentSelectors:er,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(Ue(),_e(0,"button",0),Pn("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),je(1),me(2,tr,1,0,"ng-container",1)(3,ar,3,5,"ng-container",2)(4,dr,3,5,"ng-container",2)(5,pr,2,3,"span",3)(6,fr,1,2,"p-badge",4),Te()),n&2&&(_("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),ee("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),O(2),_("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),O(),_("ngIf",o.loading),O(),_("ngIf",!o.loading),O(),_("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),O(),_("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[le,Yt,Zt,Xt,qt,Ii,Si,Ai,_i,pn,ue],encapsulation:2,changeDetection:0})}return t})(),bu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({imports:[le,mr,ue,ue]})}return t})();var Le=class{},Je=class{},fe=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),r=e.slice(n+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let r=i.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(l=>r.indexOf(l)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Nt=class{encodeKey(i){return xi(i)}encodeValue(i){return xi(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function br(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,l]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],a=e.get(s)||[];a.push(l),e.set(s,a)}),e}var yr=/%(\d[a-f0-9])/gi,Dr={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function xi(t){return encodeURIComponent(t).replace(yr,(i,e)=>Dr[e]??i)}function xt(t){return`${t}`}var ne=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Nt,i.fromString){if(i.fromObject)throw new J(2805,!1);this.map=br(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(xt):[xt(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(r=>{e.push({param:n,value:r,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(xt(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(xt(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Pt=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function Er(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ni(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Pi(t){return typeof Blob<"u"&&t instanceof Blob}function Mi(t){return typeof FormData<"u"&&t instanceof FormData}function vr(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var ki="Content-Type",$i="Accept",Bi="X-Request-URL",Ui="text/plain",ji="application/json",Cr=`${ji}, ${Ui}, */*`,Re=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,e,n,o){this.url=e,this.method=i.toUpperCase();let r;if(Er(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new fe,this.context??=new Pt,!this.params)this.params=new ne,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let l=e.indexOf("?"),a=l===-1?"?":l<e.length-1?"&":"";this.urlWithParams=e+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ni(this.body)||Pi(this.body)||Mi(this.body)||vr(this.body)?this.body:this.body instanceof ne?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Mi(this.body)?null:Pi(this.body)?this.body.type||null:Ni(this.body)?null:typeof this.body=="string"?Ui:this.body instanceof ne?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ji:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,r=i.transferCache??this.transferCache,s=i.body!==void 0?i.body:this.body,l=i.withCredentials??this.withCredentials,a=i.reportProgress??this.reportProgress,c=i.headers||this.headers,u=i.params||this.params,d=i.context??this.context;return i.setHeaders!==void 0&&(c=Object.keys(i.setHeaders).reduce((f,p)=>f.set(p,i.setHeaders[p]),c)),i.setParams&&(u=Object.keys(i.setParams).reduce((f,p)=>f.set(p,i.setParams[p]),u)),new t(e,n,s,{params:u,headers:c,context:d,reportProgress:a,responseType:o,withCredentials:l,transferCache:r})}},Ee=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Ee||{}),xe=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new fe,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},Mt=class t extends xe{constructor(i={}){super(i)}type=Ee.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Qe=class t extends xe{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Ee.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},et=class extends xe{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Sr=200,wr=204;function fn(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var zi=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let r;if(e instanceof Re)r=e;else{let a;o.headers instanceof fe?a=o.headers:a=new fe(o.headers);let c;o.params&&(o.params instanceof ne?c=o.params:c=new ne({fromObject:o.params})),r=new Re(e,n,o.body!==void 0?o.body:null,{headers:a,context:o.context,params:c,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=$t(r).pipe(Cn(a=>this.handler.handle(a)));if(e instanceof Re||o.observe==="events")return s;let l=s.pipe(vn(a=>a instanceof Qe));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(ke(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new J(2806,!1);return a.body}));case"blob":return l.pipe(ke(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new J(2807,!1);return a.body}));case"text":return l.pipe(ke(a=>{if(a.body!==null&&typeof a.body!="string")throw new J(2808,!1);return a.body}));case"json":default:return l.pipe(ke(a=>a.body))}case"response":return l;default:throw new J(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new ne().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,fn(o,n))}post(e,n,o={}){return this.request("POST",e,fn(o,n))}put(e,n,o={}){return this.request("PUT",e,fn(o,n))}static \u0275fac=function(n){return new(n||t)(P(Le))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var _r=new L("");function Tr(t,i){return i(t)}function Ar(t,i,e){return(n,o)=>Tn(e,()=>i(n,r=>t(r,o)))}var Hi=new L(""),Vi=new L(""),Wi=new L("",{providedIn:"root",factory:()=>!0});var kt=(()=>{class t extends Le{backend;injector;chain=null;pendingTasks=g(In);contributeToStability=g(Wi);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Hi),...this.injector.get(Vi,[])]));this.chain=n.reduceRight((o,r)=>Ar(o,r,this.injector),Tr)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(Sn(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(P(Je),P(_n))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Fr=/^\)\]\}',?\n/,Ir=RegExp(`^${Bi}:`,"m");function Or(t){return"responseURL"in t&&t.responseURL?t.responseURL:Ir.test(t.getAllResponseHeaders())?t.getResponseHeader(Bi):null}var hn=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new J(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?En(n.\u0275loadImpl()):$t(null)).pipe(wn(()=>new Dn(r=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((h,y)=>s.setRequestHeader(h,y.join(","))),e.headers.has($i)||s.setRequestHeader($i,Cr),!e.headers.has(ki)){let h=e.detectContentTypeHeader();h!==null&&s.setRequestHeader(ki,h)}if(e.responseType){let h=e.responseType.toLowerCase();s.responseType=h!=="json"?h:"text"}let l=e.serializeBody(),a=null,c=()=>{if(a!==null)return a;let h=s.statusText||"OK",y=new fe(s.getAllResponseHeaders()),A=Or(s)||e.url;return a=new Mt({headers:y,status:s.status,statusText:h,url:A}),a},u=()=>{let{headers:h,status:y,statusText:A,url:I}=c(),C=null;y!==wr&&(C=typeof s.response>"u"?s.responseText:s.response),y===0&&(y=C?Sr:0);let R=y>=200&&y<300;if(e.responseType==="json"&&typeof C=="string"){let ve=C;C=C.replace(Fr,"");try{C=C!==""?JSON.parse(C):null}catch(Ce){C=ve,R&&(R=!1,C={error:Ce,text:C})}}R?(r.next(new Qe({body:C,headers:h,status:y,statusText:A,url:I||void 0})),r.complete()):r.error(new et({error:C,headers:h,status:y,statusText:A,url:I||void 0}))},d=h=>{let{url:y}=c(),A=new et({error:h,status:s.status||0,statusText:s.statusText||"Unknown Error",url:y||void 0});r.error(A)},f=!1,p=h=>{f||(r.next(c()),f=!0);let y={type:Ee.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(y.total=h.total),e.responseType==="text"&&s.responseText&&(y.partialText=s.responseText),r.next(y)},m=h=>{let y={type:Ee.UploadProgress,loaded:h.loaded};h.lengthComputable&&(y.total=h.total),r.next(y)};return s.addEventListener("load",u),s.addEventListener("error",d),s.addEventListener("timeout",d),s.addEventListener("abort",d),e.reportProgress&&(s.addEventListener("progress",p),l!==null&&s.upload&&s.upload.addEventListener("progress",m)),s.send(l),r.next({type:Ee.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",u),s.removeEventListener("timeout",d),e.reportProgress&&(s.removeEventListener("progress",p),l!==null&&s.upload&&s.upload.removeEventListener("progress",m)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(P(Ke))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Gi=new L(""),Rr="XSRF-TOKEN",Lr=new L("",{providedIn:"root",factory:()=>Rr}),xr="X-XSRF-TOKEN",Nr=new L("",{providedIn:"root",factory:()=>xr}),tt=class{},Pr=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Jt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(P(k),P(Lr))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Mr(t,i){let e=t.url.toLowerCase();if(!g(Gi)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=g(tt).getToken(),o=g(Nr);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),i(t)}function kr(...t){let i=[zi,hn,kt,{provide:Le,useExisting:kt},{provide:Je,useFactory:()=>g(_r,{optional:!0})??g(hn)},{provide:Hi,useValue:Mr,multi:!0},{provide:Gi,useValue:!0},{provide:tt,useClass:Pr}];for(let e of t)i.push(...e.\u0275providers);return gt(i)}export{k as a,St as b,po as c,Wt as d,wt as e,Kn as f,Yt as g,Xn as h,Zt as i,qt as j,Xt as k,le as l,Jt as m,Jn as n,Ye as o,Qt as p,Ke as q,zi as r,kr as s,ei as t,be as u,ye as v,Ia as w,Oa as x,Ra as y,La as z,ti as A,xa as B,Na as C,Ae as D,Pa as E,ni as F,Ma as G,nn as H,ka as I,on as J,$a as K,Ba as L,rn as M,Ua as N,ja as O,za as P,Ha as Q,ri as R,N as S,To as T,D as U,At as V,di as W,Ka as X,Ya as Y,Xe as Z,ul as _,dl as $,pl as aa,fi as ba,ue as ca,fl as da,ml as ea,$ as fa,Gl as ga,V as ha,dn as ia,Ci as ja,Si as ka,Ti as la,Ai as ma,Ii as na,mu as oa,bu as pa};
