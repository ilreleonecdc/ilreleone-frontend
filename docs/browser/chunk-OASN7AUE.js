import{a as si,b as ai,c as Le,d as li,e as ri,f as ci,g as pi,h as di,i as ui,j as mi,k as hi,l as fi,m as gi,n as pt,o as _i,p as qe}from"./chunk-4SLPCIUG.js";import{$ as rt,A as Fe,B as xt,C as qt,D as ve,E as Ce,F as Kt,G as Gt,H as Ae,I as Wt,J as ze,L as Ut,M as Re,N as wt,O as Be,P as Yt,Q as Xt,R as Jt,S as Ye,T as ei,U as lt,V as je,W as ti,X as It,Y as ii,Z as ae,_ as ni,aa as oi,ba as Ie,ca as A,da as ct,fa as K,g as he,h as Ze,ha as Z,i as ce,ia as Xe,j as Ee,ja as dt,k as _e,ka as yi,l as q,la as le,ma as bi,na as ut,o as Pe,oa as vi,pa as Ci,r as Bt,t as Ue,u as Ct,v as Ht,w as Nt,x as Qt,y as Zt,z as jt}from"./chunk-ZRRN3GRL.js";import{c as $e,d as we,f as ye,g as yt,h as be,i as st,j as bt,k as at,l as vt}from"./chunk-F2X3VGZZ.js";import{$ as y,$a as R,Ab as At,Ba as J,Bb as ne,Da as zt,Ha as I,Ia as ie,Ib as C,Ja as nt,Jb as ee,Ka as x,L as kt,La as u,Lb as We,M as N,Mb as Rt,N as te,Ra as f,S as F,Sa as l,Ta as ot,Ua as Ve,Va as ke,Wa as S,X as it,Xa as W,Y as b,Ya as p,Z as v,Za as d,_ as se,_a as h,a as G,ab as B,b as Ke,bb as z,cb as Q,db as $,eb as c,fa as E,fb as de,ga as xe,gb as ue,hb as w,ib as Y,jb as g,ka as Se,kb as _,nb as re,ob as L,pb as Oe,qb as Ge,rb as Lt,sb as Mt,tb as Dt,ua as $t,ub as j,vb as Ne,wa as r,wb as D,xb as me,ya as Ft,yb as Qe,zb as Pt}from"./chunk-ARMGOPD6.js";var on=({dt:t})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("textarea.color")};
    background: ${t("textarea.background")};
    padding: ${t("textarea.padding.y")} ${t("textarea.padding.x")};
    border: 1px solid ${t("textarea.border.color")};
    transition: background ${t("textarea.transition.duration")}, color ${t("textarea.transition.duration")}, border-color ${t("textarea.transition.duration")}, outline-color ${t("textarea.transition.duration")}, box-shadow ${t("textarea.transition.duration")};
    appearance: none;
    border-radius: ${t("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${t("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${t("textarea.focus.border.color")};
    box-shadow: ${t("textarea.focus.ring.shadow")};
    outline: ${t("textarea.focus.ring.width")} ${t("textarea.focus.ring.style")} ${t("textarea.focus.ring.color")};
    outline-offset: ${t("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${t("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${t("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${t("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${t("textarea.disabled.background")};
    color: ${t("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${t("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${t("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${t("textarea.sm.font.size")};
    padding-block: ${t("textarea.sm.padding.y")};
    padding-inline: ${t("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${t("textarea.lg.font.size")};
    padding-block: ${t("textarea.lg.padding.y")};
    padding-inline: ${t("textarea.lg.padding.x")};
}
`,sn={root:({instance:t,props:o})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":o.autoResize,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":o.fluid}]},xi=(()=>{class t extends K{name="textarea";theme=on;classes=sn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var wi=(()=>{class t extends Z{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new E;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=F(xi);constructor(e,i){super(),this.ngModel=e,this.control=i}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}ngAfterViewChecked(){this.autoResize&&this.resize()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(J(pi,8),J(li,8))};static \u0275dir=nt({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(i,n){i&1&&$("input",function(a){return n.onInput(a)}),i&2&&Ve("p-filled",n.filled)("p-textarea-resizable",n.autoResize)("p-variant-filled",n.variant==="filled"||n.config.inputStyle()==="filled"||n.config.inputVariant()==="filled")("p-textarea-fluid",n.hasFluid)("p-textarea-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-textarea-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",C],variant:"variant",fluid:[2,"fluid","fluid",C],pSize:"pSize"},outputs:{onResize:"onResize"},features:[j([xi]),x]})}return t})(),Ii=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=te({})}return t})();var Ti=(()=>{class t extends le{static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["BlankIcon"]],features:[x],decls:2,vars:0,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(i,n){i&1&&(se(),p(0,"svg",0),h(1,"rect",1),d())},encapsulation:2})}return t})();var mt=(()=>{class t extends le{static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["CheckIcon"]],features:[x],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,n){i&1&&(se(),p(0,"svg",0),h(1,"path",1),d()),i&2&&(S(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Si=(()=>{class t extends le{static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["ChevronDownIcon"]],features:[x],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,n){i&1&&(se(),p(0,"svg",0),h(1,"path",1),d()),i&2&&(S(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Oi=(()=>{class t extends le{pathId;ngOnInit(){this.pathId="url(#"+ae()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["ExclamationTriangleIcon"]],features:[x],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(se(),p(0,"svg",0)(1,"g"),h(2,"path",1)(3,"path",2)(4,"path",3),d(),p(5,"defs")(6,"clipPath",4),h(7,"rect",5),d()()()),i&2&&(S(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),r(),f("clip-path",n.pathId),r(5),l("id",n.pathId))},encapsulation:2})}return t})();var Ei=(()=>{class t extends le{pathId;ngOnInit(){this.pathId="url(#"+ae()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["InfoCircleIcon"]],features:[x],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(se(),p(0,"svg",0)(1,"g"),h(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),h(5,"rect",3),d()()()),i&2&&(S(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),r(),f("clip-path",n.pathId),r(3),l("id",n.pathId))},encapsulation:2})}return t})();var Vi=(()=>{class t extends le{pathId;ngOnInit(){this.pathId="url(#"+ae()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["SearchIcon"]],features:[x],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(se(),p(0,"svg",0)(1,"g"),h(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),h(5,"rect",3),d()()()),i&2&&(S(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),r(),f("clip-path",n.pathId),r(3),l("id",n.pathId))},encapsulation:2})}return t})();var ki=(()=>{class t extends le{pathId;ngOnInit(){this.pathId="url(#"+ae()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["TimesCircleIcon"]],features:[x],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(se(),p(0,"svg",0)(1,"g"),h(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),h(5,"rect",3),d()()()),i&2&&(S(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),r(),f("clip-path",n.pathId),r(3),l("id",n.pathId))},encapsulation:2})}return t})();var ht=class t{httpClient=F(Bt);constructor(){}sendContatto(o){return this.httpClient.post("https://httpbin.org/post",o)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})};var ln=["*"],rn=({dt:t})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${t("floatlabel.font.weight")};
    inset-inline-start: ${t("floatlabel.position.x")};
    color: ${t("floatlabel.color")};
    transition-duration: ${t("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${t("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${t("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${t("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${t("floatlabel.active.font.size")};
    font-weight: ${t("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${t("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${t("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${t("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${t("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${t("floatlabel.on.border.radius")};
    background: ${t("floatlabel.on.active.background")};
    padding: ${t("floatlabel.on.active.padding")};
}
`,cn={root:({instance:t,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},$i=(()=>{class t extends K{name="floatlabel";theme=rn;classes=cn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Tt=(()=>{class t extends Z{_componentStyle=F($i);variant="over";static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(i,n){i&2&&Ve("p-floatlabel",!0)("p-floatlabel-over",n.variant==="over")("p-floatlabel-on",n.variant==="on")("p-floatlabel-in",n.variant==="in")},inputs:{variant:"variant"},features:[j([$i]),x],ngContentSelectors:ln,decls:1,vars:0,template:function(i,n){i&1&&(de(),ue(0))},dependencies:[q,A],encapsulation:2,changeDetection:0})}return t})(),Fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=te({imports:[Tt,A,A]})}return t})();var dn=["container"],un=["icon"],mn=["closeicon"],hn=["*"],fn=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),gn=t=>({value:"visible()",params:t}),_n=t=>({closeCallback:t});function yn(t,o){t&1&&z(0)}function bn(t,o){if(t&1&&u(0,yn,1,0,"ng-container",7),t&2){let e=c(2);l("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function vn(t,o){if(t&1&&h(0,"i",3),t&2){let e=c(2);l("ngClass",e.icon)}}function Cn(t,o){if(t&1&&h(0,"span",9),t&2){let e=c(3);l("ngClass",e.cx("text"))("innerHTML",e.text,$t)}}function xn(t,o){if(t&1&&(p(0,"div"),u(1,Cn,1,2,"span",8),d()),t&2){let e=c(2);r(),l("ngIf",!e.escape)}}function wn(t,o){if(t&1&&(p(0,"span",5),L(1),d()),t&2){let e=c(3);l("ngClass",e.cx("text")),r(),Oe(e.text)}}function In(t,o){if(t&1&&u(0,wn,2,2,"span",10),t&2){let e=c(2);l("ngIf",e.escape&&e.text)}}function Tn(t,o){t&1&&z(0)}function Sn(t,o){if(t&1&&u(0,Tn,1,0,"ng-container",11),t&2){let e=c(2);l("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",D(2,_n,e.close.bind(e)))}}function On(t,o){if(t&1&&(p(0,"span",5),ue(1),d()),t&2){let e=c(2);l("ngClass",e.cx("text"))}}function En(t,o){if(t&1&&h(0,"i",13),t&2){let e=c(3);l("ngClass",e.closeIcon)}}function Vn(t,o){t&1&&z(0)}function kn(t,o){if(t&1&&u(0,Vn,1,0,"ng-container",7),t&2){let e=c(3);l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function $n(t,o){t&1&&h(0,"TimesIcon",14)}function Fn(t,o){if(t&1){let e=Q();p(0,"button",12),$("click",function(n){b(e);let s=c(2);return v(s.close(n))}),u(1,En,1,1,"i",13)(2,kn,1,1,"ng-container")(3,$n,1,0,"TimesIcon",14),d()}if(t&2){let e=c(2);f("aria-label",e.closeAriaLabel),r(),W(e.closeIcon?1:-1),r(),W(e.closeIconTemplate||e._closeIconTemplate?2:-1),r(),W(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function zn(t,o){if(t&1&&(p(0,"div",1)(1,"div",2),u(2,bn,1,1,"ng-container")(3,vn,1,1,"i",3)(4,xn,2,1,"div",4)(5,In,1,1,"ng-template",null,0,ne)(7,Sn,1,4,"ng-container")(8,On,2,1,"span",5)(9,Fn,4,4,"button",6),d()()),t&2){let e=re(6),i=c();l("ngClass",i.containerClass)("@messageAnimation",D(13,gn,me(10,fn,i.showTransitionOptions,i.hideTransitionOptions))),f("aria-live","polite")("role","alert"),r(2),W(i.iconTemplate||i._iconTemplate?2:-1),r(),W(i.icon?3:-1),r(),l("ngIf",!i.escape)("ngIfElse",e),r(3),W(i.containerTemplate||i._containerTemplate?7:8),r(2),W(i.closable?9:-1)}}var Ln=({dt:t})=>`
.p-message {
    border-radius: ${t("message.border.radius")};
    outline-width: ${t("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${t("message.content.padding")};
    gap: ${t("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${t("message.close.button.width")};
    height: ${t("message.close.button.height")};
    border-radius: ${t("message.close.button.border.radius")};
    background: transparent;
    transition: background ${t("message.transition.duration")}, color ${t("message.transition.duration")}, outline-color ${t("message.transition.duration")}, box-shadow ${t("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${t("message.close.icon.size")};
    width: ${t("message.close.icon.size")};
    height: ${t("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${t("message.close.button.focus.ring.width")};
    outline-style: ${t("message.close.button.focus.ring.style")};
    outline-offset: ${t("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${t("message.info.background")};
    outline-color: ${t("message.info.border.color")};
    color: ${t("message.info.color")};
    box-shadow: ${t("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${t("message.info.close.button.focus.ring.color")};
    box-shadow: ${t("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${t("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${t("message.info.outlined.color")};
    outline-color: ${t("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${t("message.info.simple.color")};
}

.p-message-success {
    background: ${t("message.success.background")};
    outline-color: ${t("message.success.border.color")};
    color: ${t("message.success.color")};
    box-shadow: ${t("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${t("message.success.close.button.focus.ring.color")};
    box-shadow: ${t("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${t("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${t("message.success.outlined.color")};
    outline-color: ${t("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${t("message.success.simple.color")};
}

.p-message-warn {
    background: ${t("message.warn.background")};
    outline-color: ${t("message.warn.border.color")};
    color: ${t("message.warn.color")};
    box-shadow: ${t("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${t("message.warn.close.button.focus.ring.color")};
    box-shadow: ${t("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${t("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${t("message.warn.outlined.color")};
    outline-color: ${t("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${t("message.warn.simple.color")};
}

.p-message-error {
    background: ${t("message.error.background")};
    outline-color: ${t("message.error.border.color")};
    color: ${t("message.error.color")};
    box-shadow: ${t("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${t("message.error.close.button.focus.ring.color")};
    box-shadow: ${t("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${t("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${t("message.error.outlined.color")};
    outline-color: ${t("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${t("message.error.simple.color")};
}

.p-message-secondary {
    background: ${t("message.secondary.background")};
    outline-color: ${t("message.secondary.border.color")};
    color: ${t("message.secondary.color")};
    box-shadow: ${t("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${t("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${t("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${t("message.secondary.outlined.color")};
    outline-color: ${t("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${t("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${t("message.contrast.background")};
    outline-color: ${t("message.contrast.border.color")};
    color: ${t("message.contrast.color")};
    box-shadow: ${t("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${t("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${t("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${t("message.contrast.outlined.color")};
    outline-color: ${t("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${t("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${t("message.text.font.size")};
    font-weight: ${t("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${t("message.icon.size")};
    width: ${t("message.icon.size")};
    height: ${t("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${t("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${t("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${t("message.icon.sm.size")};
    width: ${t("message.icon.sm.size")};
    height: ${t("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${t("message.close.icon.sm.size")};
    width: ${t("message.close.icon.sm.size")};
    height: ${t("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${t("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${t("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${t("message.icon.lg.size")};
    width: ${t("message.icon.lg.size")};
    height: ${t("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${t("message.close.icon.lg.size")};
    width: ${t("message.close.icon.lg.size")};
    height: ${t("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${t("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${t("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Mn={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},zi=(()=>{class t extends K{name="message";theme=Ln;classes=Mn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var St=(()=>{class t extends Z{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new E;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Se(!0);_componentStyle=F(zi);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-message"]],contentQueries:function(i,n,s){if(i&1&&(w(s,dn,4),w(s,un,4),w(s,mn,4),w(s,Ie,4)),i&2){let a;g(a=_())&&(n.containerTemplate=a.first),g(a=_())&&(n.iconTemplate=a.first),g(a=_())&&(n.closeIconTemplate=a.first),g(a=_())&&(n.templates=a)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",C],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",C],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[j([zi]),x],ngContentSelectors:hn,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,n){i&1&&(de(),u(0,zn,10,15,"div",1)),i&2&&W(n.visible()?0:-1)},dependencies:[q,he,ce,_e,qe,ut,A],encapsulation:2,data:{animation:[$e("messageAnimation",[be(":enter",[ye({opacity:0,transform:"translateY(-25%)"}),we("{{showTransitionParams}}")]),be(":leave",[we("{{hideTransitionParams}}",ye({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),Li=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=te({imports:[St,A,A]})}return t})();var He=class t{static isArray(o,e=!0){return Array.isArray(o)&&(e||o.length!==0)}static isObject(o,e=!0){return typeof o=="object"&&!Array.isArray(o)&&o!=null&&(e||Object.keys(o).length!==0)}static equals(o,e,i){return i?this.resolveFieldData(o,i)===this.resolveFieldData(e,i):this.equalsByValue(o,e)}static equalsByValue(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var i=Array.isArray(o),n=Array.isArray(e),s,a,m;if(i&&n){if(a=o.length,a!=e.length)return!1;for(s=a;s--!==0;)if(!this.equalsByValue(o[s],e[s]))return!1;return!0}if(i!=n)return!1;var V=this.isDate(o),O=this.isDate(e);if(V!=O)return!1;if(V&&O)return o.getTime()==e.getTime();var T=o instanceof RegExp,U=e instanceof RegExp;if(T!=U)return!1;if(T&&U)return o.toString()==e.toString();var P=Object.keys(o);if(a=P.length,a!==Object.keys(e).length)return!1;for(s=a;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,P[s]))return!1;for(s=a;s--!==0;)if(m=P[s],!this.equalsByValue(o[m],e[m]))return!1;return!0}return o!==o&&e!==e}static resolveFieldData(o,e){if(o&&e){if(this.isFunction(e))return e(o);if(e.indexOf(".")==-1)return o[e];{let i=e.split("."),n=o;for(let s=0,a=i.length;s<a;++s){if(n==null)return null;n=n[i[s]]}return n}}else return null}static isFunction(o){return!!(o&&o.constructor&&o.call&&o.apply)}static reorderArray(o,e,i){let n;o&&e!==i&&(i>=o.length&&(i%=o.length,e%=o.length),o.splice(i,0,o.splice(e,1)[0]))}static insertIntoOrderedArray(o,e,i,n){if(i.length>0){let s=!1;for(let a=0;a<i.length;a++)if(this.findIndexInList(i[a],n)>e){i.splice(a,0,o),s=!0;break}s||i.push(o)}else i.push(o)}static findIndexInList(o,e){let i=-1;if(e){for(let n=0;n<e.length;n++)if(e[n]==o){i=n;break}}return i}static contains(o,e){if(o!=null&&e&&e.length){for(let i of e)if(this.equals(o,i))return!0}return!1}static removeAccents(o){return o&&(o=o.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),o}static isDate(o){return Object.prototype.toString.call(o)==="[object Date]"}static isEmpty(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!this.isDate(o)&&typeof o=="object"&&Object.keys(o).length===0}static isNotEmpty(o){return!this.isEmpty(o)}static compare(o,e,i,n=1){let s=-1,a=this.isEmpty(o),m=this.isEmpty(e);return a&&m?s=0:a?s=n:m?s=-n:typeof o=="string"&&typeof e=="string"?s=o.localeCompare(e,i,{numeric:!0}):s=o<e?-1:o>e?1:0,s}static sort(o,e,i=1,n,s=1){let a=t.compare(o,e,n,i),m=i;return(t.isEmpty(o)||t.isEmpty(e))&&(m=s===1?i:s),m*a}static merge(o,e){if(!(o==null&&e==null)){{if((o==null||typeof o=="object")&&(e==null||typeof e=="object"))return G(G({},o||{}),e||{});if((o==null||typeof o=="string")&&(e==null||typeof e=="string"))return[o||"",e||""].join(" ")}return e||o}}static isPrintableCharacter(o=""){return this.isNotEmpty(o)&&o.length===1&&o.match(/\S| /)}static getItemValue(o,...e){return this.isFunction(o)?o(...e):o}static findLastIndex(o,e){let i=-1;if(this.isNotEmpty(o))try{i=o.findLastIndex(e)}catch{i=o.lastIndexOf([...o].reverse().find(e))}return i}static findLast(o,e){let i;if(this.isNotEmpty(o))try{i=o.findLast(e)}catch{i=[...o].reverse().find(e)}return i}static deepEquals(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var i=Array.isArray(o),n=Array.isArray(e),s,a,m;if(i&&n){if(a=o.length,a!=e.length)return!1;for(s=a;s--!==0;)if(!this.deepEquals(o[s],e[s]))return!1;return!0}if(i!=n)return!1;var V=o instanceof Date,O=e instanceof Date;if(V!=O)return!1;if(V&&O)return o.getTime()==e.getTime();var T=o instanceof RegExp,U=e instanceof RegExp;if(T!=U)return!1;if(T&&U)return o.toString()==e.toString();var P=Object.keys(o);if(a=P.length,a!==Object.keys(e).length)return!1;for(s=a;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,P[s]))return!1;for(s=a;s--!==0;)if(m=P[s],!this.deepEquals(o[m],e[m]))return!1;return!0}return o!==o&&e!==e}static minifyCSS(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(o){return this.isString(o)?o.replace(/(-|_)/g,"").toLowerCase():o}static isString(o,e=!0){return typeof o=="string"&&(e||o!=="")}};function Pn(){let t=[],o=(s,a)=>{let m=t.length>0?t[t.length-1]:{key:s,value:a},V=m.value+(m.key===s?0:a)+2;return t.push({key:s,value:V}),V},e=s=>{t=t.filter(a=>a.value!==s)},i=()=>t.length>0?t[t.length-1].value:0,n=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:n,set:(s,a,m)=>{a&&(a.style.zIndex=String(o(s,m)))},clear:s=>{s&&(e(n(s)),s.style.zIndex="")},getCurrent:()=>i(),generateZIndex:o,revertZIndex:e}}var fe=Pn();var Mi=["container"],An=(t,o,e,i)=>({showTransformParams:t,hideTransformParams:o,showTransitionParams:e,hideTransitionParams:i}),Rn=t=>({value:"visible",params:t}),Bn=(t,o)=>({$implicit:t,closeFn:o}),Hn=t=>({$implicit:t});function Nn(t,o){t&1&&z(0)}function Qn(t,o){if(t&1&&u(0,Nn,1,0,"ng-container",3),t&2){let e=c();l("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",me(2,Bn,e.message,e.onCloseIconClick))}}function Zn(t,o){if(t&1&&h(0,"span",4),t&2){let e=c(3);l("ngClass",e.cx("messageIcon"))}}function jn(t,o){t&1&&h(0,"CheckIcon"),t&2&&f("aria-hidden",!0)("data-pc-section","icon")}function qn(t,o){t&1&&h(0,"InfoCircleIcon"),t&2&&f("aria-hidden",!0)("data-pc-section","icon")}function Kn(t,o){t&1&&h(0,"TimesCircleIcon"),t&2&&f("aria-hidden",!0)("data-pc-section","icon")}function Gn(t,o){t&1&&h(0,"ExclamationTriangleIcon"),t&2&&f("aria-hidden",!0)("data-pc-section","icon")}function Wn(t,o){t&1&&h(0,"InfoCircleIcon"),t&2&&f("aria-hidden",!0)("data-pc-section","icon")}function Un(t,o){if(t&1&&(p(0,"span",4),u(1,jn,1,2,"CheckIcon")(2,qn,1,2,"InfoCircleIcon")(3,Kn,1,2,"TimesCircleIcon")(4,Gn,1,2,"ExclamationTriangleIcon")(5,Wn,1,2,"InfoCircleIcon"),d()),t&2){let e,i=c(3);l("ngClass",i.cx("messageIcon")),f("aria-hidden",!0)("data-pc-section","icon"),r(),W((e=i.message.severity)==="success"?1:e==="info"?2:e==="error"?3:e==="warn"?4:5)}}function Yn(t,o){if(t&1&&(R(0),u(1,Zn,1,1,"span",6)(2,Un,6,4,"span",6),p(3,"div",4)(4,"div",4),L(5),d(),p(6,"div",4),L(7),d()(),B()),t&2){let e=c(2);r(),l("ngIf",e.message.icon),r(),l("ngIf",!e.message.icon),r(),l("ngClass",e.cx("messageText")),f("data-pc-section","text"),r(),l("ngClass",e.cx("summary")),f("data-pc-section","summary"),r(),Ge(" ",e.message.summary," "),r(),l("ngClass",e.cx("detail")),f("data-pc-section","detail"),r(),Oe(e.message.detail)}}function Xn(t,o){t&1&&z(0)}function Jn(t,o){if(t&1&&h(0,"span",4),t&2){let e=c(4);l("ngClass",e.cx("closeIcon"))}}function eo(t,o){if(t&1&&u(0,Jn,1,1,"span",6),t&2){let e=c(3);l("ngIf",e.message.closeIcon)}}function to(t,o){if(t&1&&h(0,"TimesIcon",4),t&2){let e=c(3);l("ngClass",e.cx("closeIcon")),f("aria-hidden",!0)("data-pc-section","closeicon")}}function io(t,o){if(t&1){let e=Q();p(0,"div")(1,"button",7),$("click",function(n){b(e);let s=c(2);return v(s.onCloseIconClick(n))})("keydown.enter",function(n){b(e);let s=c(2);return v(s.onCloseIconClick(n))}),u(2,eo,1,1,"span",4)(3,to,1,3,"TimesIcon",4),d()()}if(t&2){let e=c(2);r(),l("ariaLabel",e.closeAriaLabel),f("class",e.cx("closeButton"))("data-pc-section","closebutton"),r(),W(e.message.closeIcon?2:3)}}function no(t,o){if(t&1&&(p(0,"div",4),u(1,Yn,8,10,"ng-container",5)(2,Xn,1,0,"ng-container",3)(3,io,4,4,"div"),d()),t&2){let e=c();S(e.message==null?null:e.message.contentStyleClass),l("ngClass",e.cx("messageContent")),f("data-pc-section","content"),r(),l("ngIf",!e.template),r(),l("ngTemplateOutlet",e.template)("ngTemplateOutletContext",D(8,Hn,e.message)),r(),W((e.message==null?null:e.message.closable)!==!1?3:-1)}}var oo=["message"],so=["headless"];function ao(t,o){if(t&1){let e=Q();p(0,"p-toastItem",3),$("onClose",function(n){b(e);let s=c();return v(s.onMessageClose(n))})("@toastAnimation.start",function(n){b(e);let s=c();return v(s.onAnimationStart(n))})("@toastAnimation.done",function(n){b(e);let s=c();return v(s.onAnimationEnd(n))}),d()}if(t&2){let e=o.$implicit,i=o.index,n=c();l("message",e)("index",i)("life",n.life)("template",n.template||n._template)("headlessTemplate",n.headlessTemplate||n._headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",n.showTransformOptions)("hideTransformOptions",n.hideTransformOptions)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)}}var lo=({dt:t})=>`
.p-toast {
    width: ${t("toast.width")};
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: ${t("toast.icon.size")};
    width: ${t("toast.icon.size")};
    height: ${t("toast.icon.size")};
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: ${t("toast.content.padding")};
    gap: ${t("toast.content.gap")};
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: ${t("toast.text.gap")};
}

.p-toast-summary {
    font-weight: ${t("toast.summary.font.weight")};
    font-size: ${t("toast.summary.font.size")};
}

.p-toast-detail {
    font-weight: ${t("toast.detail.font.weight")};
    font-size: ${t("toast.detail.font.size")};
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background ${t("toast.transition.duration")}, color ${t("toast.transition.duration")}, outline-color ${t("toast.transition.duration")}, box-shadow ${t("toast.transition.duration")};
    outline-color: transparent;
    color: inherit;
    width: ${t("toast.close.button.width")};
    height: ${t("toast.close.button.height")};
    border-radius: ${t("toast.close.button.border.radius")};
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: ${t("toast.border.width")};
    border-style: solid;
    backdrop-filter: blur(${t("toast.blur")});
    border-radius: ${t("toast.border.radius")};
}

.p-toast-close-icon {
    font-size: ${t("toast.close.icon.size")};
    width: ${t("toast.close.icon.size")};
    height: ${t("toast.close.icon.size")};
}

.p-toast-close-button:focus-visible {
    outline-width: ${t("focus.ring.width")};
    outline-style: ${t("focus.ring.style")};
    outline-offset: ${t("focus.ring.offset")};
}

.p-toast-message-info {
    background: ${t("toast.info.background")};
    border-color: ${t("toast.info.border.color")};
    color: ${t("toast.info.color")};
    box-shadow: ${t("toast.info.shadow")};
}

.p-toast-message-info .p-toast-detail {
    color: ${t("toast.info.detail.color")};
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.info.close.button.focus.ring.color")};
    box-shadow: ${t("toast.info.close.button.focus.ring.shadow")};
}

.p-toast-message-info .p-toast-close-button:hover {
    background: ${t("toast.info.close.button.hover.background")};
}

.p-toast-message-success {
    background: ${t("toast.success.background")};
    border-color: ${t("toast.success.border.color")};
    color: ${t("toast.success.color")};
    box-shadow: ${t("toast.success.shadow")};
}

.p-toast-message-success .p-toast-detail {
    color: ${t("toast.success.detail.color")};
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.success.close.button.focus.ring.color")};
    box-shadow: ${t("toast.success.close.button.focus.ring.shadow")};
}

.p-toast-message-success .p-toast-close-button:hover {
    background: ${t("toast.success.close.button.hover.background")};
}

.p-toast-message-warn {
    background: ${t("toast.warn.background")};
    border-color: ${t("toast.warn.border.color")};
    color: ${t("toast.warn.color")};
    box-shadow: ${t("toast.warn.shadow")};
}

.p-toast-message-warn .p-toast-detail {
    color: ${t("toast.warn.detail.color")};
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.warn.close.button.focus.ring.color")};
    box-shadow: ${t("toast.warn.close.button.focus.ring.shadow")};
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: ${t("toast.warn.close.button.hover.background")};
}

.p-toast-message-error {
    background: ${t("toast.error.background")};
    border-color: ${t("toast.error.border.color")};
    color: ${t("toast.error.color")};
    box-shadow: ${t("toast.error.shadow")};
}

.p-toast-message-error .p-toast-detail {
    color: ${t("toast.error.detail.color")};
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.error.close.button.focus.ring.color")};
    box-shadow: ${t("toast.error.close.button.focus.ring.shadow")};
}

.p-toast-message-error .p-toast-close-button:hover {
    background: ${t("toast.error.close.button.hover.background")};
}

.p-toast-message-secondary {
    background: ${t("toast.secondary.background")};
    border-color: ${t("toast.secondary.border.color")};
    color: ${t("toast.secondary.color")};
    box-shadow: ${t("toast.secondary.shadow")};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${t("toast.secondary.detail.color")};
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("toast.secondary.close.button.focus.ring.shadow")};
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: ${t("toast.secondary.close.button.hover.background")};
}

.p-toast-message-contrast {
    background: ${t("toast.contrast.background")};
    border-color: ${t("toast.contrast.border.color")};
    color: ${t("toast.contrast.color")};
    box-shadow: ${t("toast.contrast.shadow")};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${t("toast.contrast.detail.color")};
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: ${t("toast.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("toast.contrast.close.button.focus.ring.shadow")};
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: ${t("toast.contrast.close.button.hover.background")};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`,ro={root:({instance:t})=>{let{_position:o}=t;return{position:"fixed",top:o==="top-right"||o==="top-left"||o==="top-center"?"20px":o==="center"?"50%":null,right:(o==="top-right"||o==="bottom-right")&&"20px",bottom:(o==="bottom-left"||o==="bottom-right"||o==="bottom-center")&&"20px",left:o==="top-left"||o==="bottom-left"?"20px":o==="center"||o==="top-center"||o==="bottom-center"?"50%":null}}},co={root:({instance:t})=>({"p-toast p-component":!0,[`p-toast-${t._position}`]:!!t._position}),message:({instance:t})=>({"p-toast-message":!0,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":!0,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":!0,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},ft=(()=>{class t extends K{name="toast";theme=lo;classes=co;inlineStyles=ro;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var po=(()=>{class t extends Z{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new E;containerViewChild;_componentStyle=F(ft);timeout;constructor(e){super(),this.zone=e}ngAfterViewInit(){super.ngAfterViewInit(),this.initTimeout()}initTimeout(){this.message?.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=e=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.clearTimeout(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(J(xe))};static \u0275cmp=I({type:t,selectors:[["p-toastItem"]],viewQuery:function(i,n){if(i&1&&Y(Mi,5),i&2){let s;g(s=_())&&(n.containerViewChild=s.first)}},inputs:{message:"message",index:[2,"index","index",ee],life:[2,"life","life",ee],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[j([ft]),x],decls:4,vars:15,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","ngClass"],[3,"ngClass","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["type","button","autofocus","",3,"click","keydown.enter","ariaLabel"]],template:function(i,n){if(i&1){let s=Q();p(0,"div",1,0),$("mouseenter",function(){return b(s),v(n.onMouseEnter())})("mouseleave",function(){return b(s),v(n.onMouseLeave())}),u(2,Qn,1,5,"ng-container")(3,no,4,10,"div",2),d()}i&2&&(S(n.message==null?null:n.message.styleClass),l("ngClass",n.cx("message"))("@messageState",D(13,Rn,Pt(8,An,n.showTransformOptions,n.hideTransformOptions,n.showTransitionOptions,n.hideTransitionOptions))),f("id",n.message==null?null:n.message.id)("data-pc-name","toast")("data-pc-section","root"),r(2),W(n.headlessTemplate?2:3))},dependencies:[q,he,ce,_e,mt,Oi,Ei,qe,ki,A],encapsulation:2,data:{animation:[$e("messageState",[yt("visible",ye({transform:"translateY(0)",opacity:1})),be("void => *",[ye({transform:"{{showTransformParams}}",opacity:0}),we("{{showTransitionParams}}")]),be("* => void",[we("{{hideTransitionParams}}",ye({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return t})(),Ot=(()=>{class t extends Z{key;autoZIndex=!0;baseZIndex=0;life=3e3;style;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new E;template;headlessTemplate;containerViewChild;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=F(rt);_componentStyle=F(ft);styleElement;id=ae("pn_id_");templates;ngOnInit(){super.ngOnInit(),this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let i=e.filter(n=>this.canAdd(n));this.add(i)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}_template;_headlessTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let i=this.key===e.key;return i&&this.preventOpenDuplicates&&(i=!this.containsMessage(this.messages,e)),i&&this.preventDuplicates&&(i=!this.containsMessage(this.messagesArchieve,e)),i}containsMessage(e,i){return e?e.find(n=>n.summary===i.summary&&n.detail==i.detail&&n.severity===i.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.cd.detectChanges()}onAnimationStart(e){e.fromState==="void"&&(this.renderer.setAttribute(this.containerViewChild?.nativeElement,this.id,""),this.autoZIndex&&this.containerViewChild?.nativeElement.style.zIndex===""&&fe.set("modal",this.containerViewChild?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(e){e.toState==="void"&&this.autoZIndex&&Ye(this.messages)&&fe.clear(this.containerViewChild?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints){let n="";for(let s in this.breakpoints[i])n+=s+":"+this.breakpoints[i][s]+" !important;";e+=`
                    @media screen and (max-width: ${i}) {
                        .p-toast[${this.id}] {
                           ${n}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),Jt(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&fe.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-toast"]],contentQueries:function(i,n,s){if(i&1&&(w(s,oo,5),w(s,so,5),w(s,Ie,4)),i&2){let a;g(a=_())&&(n.template=a.first),g(a=_())&&(n.headlessTemplate=a.first),g(a=_())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&Y(Mi,5),i&2){let s;g(s=_())&&(n.containerViewChild=s.first)}},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",C],baseZIndex:[2,"baseZIndex","baseZIndex",ee],life:[2,"life","life",ee],style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",C],preventDuplicates:[2,"preventDuplicates","preventDuplicates",C],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[j([ft]),x],decls:3,vars:7,consts:[["container",""],[3,"ngClass","ngStyle"],[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions"]],template:function(i,n){i&1&&(p(0,"div",1,0),u(2,ao,1,10,"p-toastItem",2),d()),i&2&&(ke(n.style),S(n.styleClass),l("ngClass",n.cx("root"))("ngStyle",n.sx("root")),r(2),l("ngForOf",n.messages))},dependencies:[q,he,Ze,Ee,po,A],encapsulation:2,data:{animation:[$e("toastAnimation",[be(":enter, :leave",[vt("@*",bt())])])]},changeDetection:0})}return t})(),Di=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=te({imports:[Ot,A,A]})}return t})();var mo=["*"],ho=({dt:t})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${t("icon.size")} / 2));
    color: ${t("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${t("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${t("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
    margin-top: calc(-1 * (${t("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
    margin-top: calc(-1 * (${t("form.field.lg.font.size")} / 2));
}
`,fo={root:"p-iconfield"},Pi=(()=>{class t extends K{name="iconfield";theme=ho;classes=fo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Ai=(()=>{class t extends Z{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=F(Pi);static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,n){i&2&&(S(n._styleClass),Ve("p-iconfield-left",n.iconPosition==="left")("p-iconfield-right",n.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[j([Pi]),x],ngContentSelectors:mo,decls:1,vars:0,template:function(i,n){i&1&&(de(),ue(0))},dependencies:[q],encapsulation:2,changeDetection:0})}return t})();var go=["*"],_o={root:"p-inputicon"},Ri=(()=>{class t extends K{name="inputicon";classes=_o;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),Bi=(()=>{class t extends Z{styleClass;get hostClasses(){return this.styleClass}_componentStyle=F(Ri);static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,n){i&2&&(S(n.hostClasses),Ve("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[j([Ri]),x],ngContentSelectors:go,decls:1,vars:0,template:function(i,n){i&1&&(de(),ue(0))},dependencies:[q,A],encapsulation:2,changeDetection:0})}return t})();var Hi=["content"],bo=["overlay"],vo=["*"],Co=(t,o,e,i,n,s,a,m,V,O,T,U,P,pe)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t,"p-overlay-center":o,"p-overlay-top":e,"p-overlay-top-start":i,"p-overlay-top-end":n,"p-overlay-bottom":s,"p-overlay-bottom-start":a,"p-overlay-bottom-end":m,"p-overlay-left":V,"p-overlay-left-start":O,"p-overlay-left-end":T,"p-overlay-right":U,"p-overlay-right-start":P,"p-overlay-right-end":pe}),xo=(t,o,e)=>({showTransitionParams:t,hideTransitionParams:o,transform:e}),wo=t=>({value:"visible",params:t}),Io=t=>({mode:t}),To=t=>({$implicit:t});function So(t,o){t&1&&z(0)}function Oo(t,o){if(t&1){let e=Q();p(0,"div",3,1),$("click",function(n){b(e);let s=c(2);return v(s.onOverlayContentClick(n))})("@overlayContentAnimation.start",function(n){b(e);let s=c(2);return v(s.onOverlayContentAnimationStart(n))})("@overlayContentAnimation.done",function(n){b(e);let s=c(2);return v(s.onOverlayContentAnimationDone(n))}),ue(2),u(3,So,1,0,"ng-container",4),d()}if(t&2){let e=c(2);S(e.contentStyleClass),l("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",D(11,wo,Qe(7,xo,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),r(3),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",D(15,To,D(13,Io,e.overlayMode)))}}function Eo(t,o){if(t&1){let e=Q();p(0,"div",3,0),$("click",function(){b(e);let n=c();return v(n.onOverlayClick())}),u(2,Oo,4,17,"div",2),d()}if(t&2){let e=c();S(e.styleClass),l("ngStyle",e.style)("ngClass",At(5,Co,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),r(2),l("ngIf",e.visible)}}var Vo=({dt:t})=>`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,Ni=(()=>{class t extends K{name="overlay";theme=Vo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),ko=st([ye({transform:"{{transform}}",opacity:0}),we("{{showTransitionParams}}")]),$o=st([we("{{hideTransitionParams}}",ye({transform:"{{transform}}",opacity:0}))]),Qi=(()=>{class t extends Z{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return He.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return He.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return He.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return He.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(e){this._appendTo=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}visibleChange=new E;onBeforeShow=new E;onShow=new E;onBeforeHide=new E;onHide=new E;onAnimationStart=new E;onAnimationDone=new E;overlayViewChild;contentViewChild;contentTemplate;templates;_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=F(Ni);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(Pe(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return G(G({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return G(G({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Ut(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Ce(this.targetEl),this.modal&&Ct(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Ce(this.targetEl),this.modal&&Ht(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&Xe.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&fe.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),Xe.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&Ct(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(i,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),Xe.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),fe.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new dt(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!Be()}):!Be())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!Be()}):!Be())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(Xe.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),fe.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(J(oi),J(xe))};static \u0275cmp=I({type:t,selectors:[["p-overlay"]],contentQueries:function(i,n,s){if(i&1&&(w(s,Hi,4),w(s,Ie,4)),i&2){let a;g(a=_())&&(n.contentTemplate=a.first),g(a=_())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&(Y(bo,5),Y(Hi,5)),i&2){let s;g(s=_())&&(n.overlayViewChild=s.first),g(s=_())&&(n.contentViewChild=s.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[j([Ni]),x],ngContentSelectors:vo,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(de(),u(0,Eo,3,20,"div",2)),i&2&&l("ngIf",n.modalVisible)},dependencies:[q,he,ce,_e,Ee,A],encapsulation:2,data:{animation:[$e("overlayContentAnimation",[be(":enter",[at(ko)]),be(":leave",[at($o)])])]},changeDetection:0})}return t})();var Zi=["content"],Fo=["item"],zo=["loader"],Lo=["loadericon"],Mo=["element"],Do=["*"],Po=(t,o,e)=>({"p-virtualscroller":!0,"p-virtualscroller-inline":t,"p-virtualscroller-both p-both-scroll":o,"p-virtualscroller-horizontal p-horizontal-scroll":e}),Et=(t,o)=>({$implicit:t,options:o}),Ao=t=>({"p-virtualscroller-content":!0,"p-virtualscroller-loading ":t}),Ro=t=>({"p-virtualscroller-loader-mask":t}),Bo=t=>({numCols:t}),qi=t=>({options:t}),Ho=()=>({styleClass:"p-virtualscroller-loading-icon"}),No=(t,o)=>({rows:t,columns:o});function Qo(t,o){t&1&&z(0)}function Zo(t,o){if(t&1&&(R(0),u(1,Qo,1,0,"ng-container",10),B()),t&2){let e=c(2);r(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",me(2,Et,e.loadedItems,e.getContentOptions()))}}function jo(t,o){t&1&&z(0)}function qo(t,o){if(t&1&&(R(0),u(1,jo,1,0,"ng-container",10),B()),t&2){let e=o.$implicit,i=o.index,n=c(3);r(),l("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",me(2,Et,e,n.getOptions(i)))}}function Ko(t,o){if(t&1&&(p(0,"div",11,3),u(2,qo,2,5,"ng-container",12),d()),t&2){let e=c(2);ke(e.contentStyle),S(e.contentStyleClass),l("ngClass",D(8,Ao,e.d_loading)),f("data-pc-section","content"),r(2),l("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function Go(t,o){if(t&1&&h(0,"div",13),t&2){let e=c(2);l("ngStyle",e.spacerStyle),f("data-pc-section","spacer")}}function Wo(t,o){t&1&&z(0)}function Uo(t,o){if(t&1&&(R(0),u(1,Wo,1,0,"ng-container",10),B()),t&2){let e=o.index,i=c(4);r(),l("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",D(4,qi,i.getLoaderOptions(e,i.both&&D(2,Bo,i.numItemsInViewport.cols))))}}function Yo(t,o){if(t&1&&(R(0),u(1,Uo,2,6,"ng-container",15),B()),t&2){let e=c(3);r(),l("ngForOf",e.loaderArr)}}function Xo(t,o){t&1&&z(0)}function Jo(t,o){if(t&1&&(R(0),u(1,Xo,1,0,"ng-container",10),B()),t&2){let e=c(4);r(),l("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",D(3,qi,Ne(2,Ho)))}}function es(t,o){t&1&&h(0,"SpinnerIcon",16),t&2&&(l("styleClass","p-virtualscroller-loading-icon pi-spin"),f("data-pc-section","loadingIcon"))}function ts(t,o){if(t&1&&u(0,Jo,2,5,"ng-container",6)(1,es,1,2,"ng-template",null,5,ne),t&2){let e=re(2),i=c(3);l("ngIf",i.loaderIconTemplate||i._loaderIconTemplate)("ngIfElse",e)}}function is(t,o){if(t&1&&(p(0,"div",14),u(1,Yo,2,1,"ng-container",6)(2,ts,3,2,"ng-template",null,4,ne),d()),t&2){let e=re(3),i=c(2);l("ngClass",D(4,Ro,!i.loaderTemplate)),f("data-pc-section","loader"),r(),l("ngIf",i.loaderTemplate||i._loaderTemplate)("ngIfElse",e)}}function ns(t,o){if(t&1){let e=Q();R(0),p(1,"div",7,1),$("scroll",function(n){b(e);let s=c();return v(s.onContainerScroll(n))}),u(3,Zo,2,5,"ng-container",6)(4,Ko,3,10,"ng-template",null,2,ne)(6,Go,1,2,"div",8)(7,is,4,6,"div",9),d(),B()}if(t&2){let e=re(5),i=c();r(),S(i._styleClass),l("ngStyle",i._style)("ngClass",Qe(12,Po,i.inline,i.both,i.horizontal)),f("id",i._id)("tabindex",i.tabindex)("data-pc-name","scroller")("data-pc-section","root"),r(2),l("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),r(3),l("ngIf",i._showSpacer),r(),l("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function os(t,o){t&1&&z(0)}function ss(t,o){if(t&1&&(R(0),u(1,os,1,0,"ng-container",10),B()),t&2){let e=c(2);r(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",me(5,Et,e.items,me(2,No,e._items,e.loadedColumns)))}}function as(t,o){if(t&1&&(ue(0),u(1,ss,2,8,"ng-container",17)),t&2){let e=c();r(),l("ngIf",e.contentTemplate||e._contentTemplate)}}var ls=({dt:t})=>`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${t("virtualscroller.loader.mask.background")};
    color: ${t("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${t("virtualscroller.loader.icon.size")};
    width: ${t("virtualscroller.loader.icon.size")};
    height: ${t("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,ji=(()=>{class t extends K{name="virtualscroller";theme=ls;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Ki=(()=>{class t extends Z{zone;get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n)),Object.entries(e).forEach(([i,n])=>this[`${i}`]!==n&&(this[`${i}`]=n)))}onLazyLoad=new E;onScroll=new E;onScrollIndexChange=new E;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:e.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=F(ji);constructor(e){super(),this.zone=e}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(e){super.ngOnChanges(e);let i=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:n,currentValue:s}=e.loading;this.lazy&&n!==s&&s!==this.d_loading&&(this.d_loading=s,i=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:n,currentValue:s}=e.numToleratedItems;n!==s&&s!==this.d_numToleratedItems&&(this.d_numToleratedItems=s)}if(e.options){let{previousValue:n,currentValue:s}=e.options;this.lazy&&n?.loading!==s?.loading&&s?.loading!==this.d_loading&&(this.d_loading=s.loading,i=!0),n?.numToleratedItems!==s?.numToleratedItems&&s?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=s.numToleratedItems)}this.initialized&&!i&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){Pe(this.platformId)&&!this.initialized&&wt(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=Re(this.elementViewChild?.nativeElement),this.defaultHeight=Ae(this.elementViewChild?.nativeElement),this.defaultContentWidth=Re(this.contentEl),this.defaultContentHeight=Ae(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||ve(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,i="auto"){if(this.both?e.every(s=>s>-1):e>-1){let s=this.first,{scrollTop:a=0,scrollLeft:m=0}=this.elementViewChild?.nativeElement,{numToleratedItems:V}=this.calculateNumItems(),O=this.getContentPosition(),T=this.itemSize,U=(M=0,H)=>M<=H?0:M,P=(M,H,ge)=>M*H+ge,pe=(M=0,H=0)=>this.scrollTo({left:M,top:H,behavior:i}),oe=this.both?{rows:0,cols:0}:0,Me=!1,k=!1;this.both?(oe={rows:U(e[0],V[0]),cols:U(e[1],V[1])},pe(P(oe.cols,T[1],O.left),P(oe.rows,T[0],O.top)),k=this.lastScrollPos.top!==a||this.lastScrollPos.left!==m,Me=oe.rows!==s.rows||oe.cols!==s.cols):(oe=U(e,V),this.horizontal?pe(P(oe,T,O.left),a):pe(m,P(oe,T,O.top)),k=this.lastScrollPos!==(this.horizontal?m:a),Me=oe!==s),this.isRangeChanged=Me,k&&(this.first=oe)}}scrollInView(e,i,n="auto"){if(i){let{first:s,viewport:a}=this.getRenderedRange(),m=(T=0,U=0)=>this.scrollTo({left:T,top:U,behavior:n}),V=i==="to-start",O=i==="to-end";if(V){if(this.both)a.first.rows-s.rows>e[0]?m(a.first.cols*this._itemSize[1],(a.first.rows-1)*this._itemSize[0]):a.first.cols-s.cols>e[1]&&m((a.first.cols-1)*this._itemSize[1],a.first.rows*this._itemSize[0]);else if(a.first-s>e){let T=(a.first-1)*this._itemSize;this.horizontal?m(T,0):m(0,T)}}else if(O){if(this.both)a.last.rows-s.rows<=e[0]+1?m(a.first.cols*this._itemSize[1],(a.first.rows+1)*this._itemSize[0]):a.last.cols-s.cols<=e[1]+1&&m((a.first.cols+1)*this._itemSize[1],a.first.rows*this._itemSize[0]);else if(a.last-s<=e+1){let T=(a.first+1)*this._itemSize;this.horizontal?m(T,0):m(0,T)}}}else this.scrollToIndex(e,n)}getRenderedRange(){let e=(s,a)=>a||s?Math.floor(s/(a||s)):0,i=this.first,n=0;if(this.elementViewChild?.nativeElement){let{scrollTop:s,scrollLeft:a}=this.elementViewChild.nativeElement;if(this.both)i={rows:e(s,this._itemSize[0]),cols:e(a,this._itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{let m=this.horizontal?a:s;i=e(m,this._itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}}calculateNumItems(){let e=this.getContentPosition(),i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,s=(O,T)=>T||O?Math.ceil(O/(T||O)):0,a=O=>Math.ceil(O/2),m=this.both?{rows:s(n,this._itemSize[0]),cols:s(i,this._itemSize[1])}:s(this.horizontal?i:n,this._itemSize),V=this.d_numToleratedItems||(this.both?[a(m.rows),a(m.cols)]:a(m));return{numItemsInViewport:m,numToleratedItems:V}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:i}=this.calculateNumItems(),n=(m,V,O,T=!1)=>this.getLast(m+V+(m<O?2:3)*O,T),s=this.first,a=this.both?{rows:n(this.first.rows,e.rows,i[0]),cols:n(this.first.cols,e.cols,i[1],!0)}:n(this.first,e,i);this.last=a,this.numItemsInViewport=e,this.d_numToleratedItems=i,this.showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:s.cols}:0:s,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,i]=[Re(this.contentEl),Ae(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),i!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[n,s]=[Re(this.elementViewChild.nativeElement),Ae(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=n<this.defaultWidth?n+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=s<this.defaultHeight?s+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),i=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),n=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),s=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),a=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:i,right:n,top:s,bottom:a,x:i+n,y:s+a}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement.parentElement.parentElement,i=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||e.offsetWidth}px`,n=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||e.offsetHeight}px`,s=(a,m)=>this.elementViewChild.nativeElement.style[a]=m;this.both||this.horizontal?(s("height",n),s("width",i)):s("height",n)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),i=(n,s,a,m=0)=>this.spacerStyle=Ke(G({},this.spacerStyle),{[`${n}`]:(s||[]).length*a+m+"px"});this.both?(i("height",this._items,this._itemSize[0],e.y),i("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,e.x):i("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let i=e?e.first:this.first,n=(a,m)=>a*m,s=(a=0,m=0)=>this.contentStyle=Ke(G({},this.contentStyle),{transform:`translate3d(${a}px, ${m}px, 0)`});if(this.both)s(n(i.cols,this._itemSize[1]),n(i.rows,this._itemSize[0]));else{let a=n(i,this._itemSize);this.horizontal?s(a,0):s(0,a)}}}onScrollPositionChange(e){let i=e.target,n=this.getContentPosition(),s=(k,M)=>k?k>M?k-M:k:0,a=(k,M)=>M||k?Math.floor(k/(M||k)):0,m=(k,M,H,ge,Te,De)=>k<=Te?Te:De?H-ge-Te:M+Te-1,V=(k,M,H,ge,Te,De,tt)=>k<=De?0:Math.max(0,tt?k<M?H:k-De:k>M?H:k-2*De),O=(k,M,H,ge,Te,De=!1)=>{let tt=M+ge+2*Te;return k>=Te&&(tt+=Te+1),this.getLast(tt,De)},T=s(i.scrollTop,n.top),U=s(i.scrollLeft,n.left),P=this.both?{rows:0,cols:0}:0,pe=this.last,oe=!1,Me=this.lastScrollPos;if(this.both){let k=this.lastScrollPos.top<=T,M=this.lastScrollPos.left<=U;if(!this._appendOnly||this._appendOnly&&(k||M)){let H={rows:a(T,this._itemSize[0]),cols:a(U,this._itemSize[1])},ge={rows:m(H.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],k),cols:m(H.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],M)};P={rows:V(H.rows,ge.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],k),cols:V(H.cols,ge.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],M)},pe={rows:O(H.rows,P.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:O(H.cols,P.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},oe=P.rows!==this.first.rows||pe.rows!==this.last.rows||P.cols!==this.first.cols||pe.cols!==this.last.cols||this.isRangeChanged,Me={top:T,left:U}}}else{let k=this.horizontal?U:T,M=this.lastScrollPos<=k;if(!this._appendOnly||this._appendOnly&&M){let H=a(k,this._itemSize),ge=m(H,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,M);P=V(H,ge,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,M),pe=O(H,P,this.last,this.numItemsInViewport,this.d_numToleratedItems),oe=P!==this.first||pe!==this.last||this.isRangeChanged,Me=k}}return{first:P,last:pe,isRangeChanged:oe,scrollPos:Me}}onScrollChange(e){let{first:i,last:n,isRangeChanged:s,scrollPos:a}=this.onScrollPositionChange(e);if(s){let m={first:i,last:n};if(this.setContentPosition(m),this.first=i,this.last=n,this.lastScrollPos=a,this.handleEvents("onScrollIndexChange",m),this._lazy&&this.isPageChanged(i)){let V={first:this._step?Math.min(this.getPageByFirst(i)*this._step,this.items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst(i)+1)*this._step:n,this.items.length)};(this.lazyLoadState.first!==V.first||this.lazyLoadState.last!==V.last)&&this.handleEvents("onLazyLoad",V),this.lazyLoadState=V}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:i}=this.onScrollPositionChange(e);(i||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){Pe(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,i=Be()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,i,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(wt(this.elementViewChild?.nativeElement)){let[e,i]=[Re(this.elementViewChild?.nativeElement),Ae(this.elementViewChild?.nativeElement)],[n,s]=[e!==this.defaultWidth,i!==this.defaultHeight];(this.both?n||s:this.horizontal?n:this.vertical?s:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=i,this.defaultContentWidth=Re(this.contentEl),this.defaultContentHeight=Ae(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,i){return this.options&&this.options[e]?this.options[e](i):this[e].emit(i)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,i)=>this.getLoaderOptions(e,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(e){let i=(this._items||[]).length,n=this.both?this.first.rows+e:this.first+e;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}}getLoaderOptions(e,i){let n=this.loaderArr.length;return G({index:e,count:n,first:e===0,last:e===n-1,even:e%2===0,odd:e%2!==0},i)}static \u0275fac=function(i){return new(i||t)(J(xe))};static \u0275cmp=I({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(i,n,s){if(i&1&&(w(s,Zi,4),w(s,Fo,4),w(s,zo,4),w(s,Lo,4),w(s,Ie,4)),i&2){let a;g(a=_())&&(n.contentTemplate=a.first),g(a=_())&&(n.itemTemplate=a.first),g(a=_())&&(n.loaderTemplate=a.first),g(a=_())&&(n.loaderIconTemplate=a.first),g(a=_())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&(Y(Mo,5),Y(Zi,5)),i&2){let s;g(s=_())&&(n.elementViewChild=s.first),g(s=_())&&(n.contentViewChild=s.first)}},hostVars:2,hostBindings:function(i,n){i&2&&ot("height",n.height)},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[j([ji]),x,it],ngContentSelectors:Do,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","ngClass"],["class","p-virtualscroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-virtualscroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-virtualscroller-spacer",3,"ngStyle"],[1,"p-virtualscroller-loader",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"styleClass"],[4,"ngIf"]],template:function(i,n){if(i&1&&(de(),u(0,ns,8,16,"ng-container",6)(1,as,2,1,"ng-template",null,0,ne)),i&2){let s=re(2);l("ngIf",!n._disabled)("ngIfElse",s)}},dependencies:[q,he,Ze,ce,_e,Ee,bi,A],encapsulation:2})}return t})();var rs=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,cs={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Gi=(()=>{class t extends K{name="tooltip";theme=rs;classes=cs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Wi=(()=>{class t extends Z{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:ae("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=F(Gi);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),Pe(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=G(G({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Ue(e.relatedTarget,"p-tooltip")||Ue(e.relatedTarget,"p-tooltip-text")||Ue(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?xt(this.container,this.el.nativeElement):xt(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),qt(this.container,250),this.getOption("tooltipZIndex")==="auto"?fe.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&fe.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof Ft){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[n,s]of i[e].entries())if(n===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+Zt(),n=e.top+jt();return{left:i,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?ve(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,i=Fe(e),n=(ze(e)-ze(this.container))/2;this.alignTooltip(i,n)}alignLeft(){this.preAlign("left");let e=Fe(this.container),i=(ze(this.el.nativeElement)-ze(this.container))/2;this.alignTooltip(-e,i)}alignTop(){this.preAlign("top");let e=(Fe(this.el.nativeElement)-Fe(this.container))/2,i=ze(this.container);this.alignTooltip(e,-i)}alignBottom(){this.preAlign("bottom");let e=(Fe(this.el.nativeElement)-Fe(this.container))/2,i=ze(this.el.nativeElement);this.alignTooltip(e,i)}alignTooltip(e,i){let n=this.getHostOffset(),s=n.left+e,a=n.top+i;this.container.style.left=s+this.getOption("positionLeft")+"px",this.container.style.top=a+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=G(G({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Ue(e,"p-inputwrapper")?ve(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,n=e.left,s=Fe(this.container),a=ze(this.container),m=Qt();return n+s>m.width||n<0||i<0||i+a>m.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new dt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Yt(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&fe.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(J(xe),J(zt))};static \u0275dir=nt({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",C],showDelay:[2,"showDelay","showDelay",ee],hideDelay:[2,"hideDelay","hideDelay",ee],life:[2,"life","life",ee],positionTop:[2,"positionTop","positionTop",ee],positionLeft:[2,"positionLeft","positionLeft",ee],autoHide:[2,"autoHide","autoHide",C],fitContent:[2,"fitContent","fitContent",C],hideOnEscape:[2,"hideOnEscape","hideOnEscape",C],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[j([Gi]),x,it]})}return t})();var et=t=>({height:t}),ps=(t,o,e)=>({"p-select-option":!0,"p-select-option-selected":t,"p-disabled":o,"p-focus":e}),Vt=t=>({$implicit:t});function ds(t,o){t&1&&h(0,"CheckIcon",5)}function us(t,o){t&1&&h(0,"BlankIcon",6)}function ms(t,o){if(t&1&&(R(0),u(1,ds,1,0,"CheckIcon",3)(2,us,1,0,"BlankIcon",4),B()),t&2){let e=c();r(),l("ngIf",e.selected),r(),l("ngIf",!e.selected)}}function hs(t,o){if(t&1&&(p(0,"span"),L(1),d()),t&2){let e,i=c();r(),Oe((e=i.label)!==null&&e!==void 0?e:"empty")}}function fs(t,o){t&1&&z(0)}var gs=["item"],_s=["group"],ys=["loader"],bs=["selectedItem"],vs=["header"],Ui=["filter"],Cs=["footer"],xs=["emptyfilter"],ws=["empty"],Is=["dropdownicon"],Ts=["loadingicon"],Ss=["clearicon"],Os=["filtericon"],Es=["onicon"],Vs=["officon"],ks=["cancelicon"],$s=["focusInput"],Fs=["editableInput"],zs=["items"],Ls=["scroller"],Ms=["overlay"],Ds=["firstHiddenFocusableEl"],Ps=["lastHiddenFocusableEl"],As=()=>({class:"p-select-clear-icon"}),Rs=()=>({class:"p-select-dropdown-icon"}),Xi=t=>({options:t}),Ji=(t,o)=>({$implicit:t,options:o}),Bs=()=>({});function Hs(t,o){if(t&1&&(R(0),L(1),B()),t&2){let e=c(2);r(),Oe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Ns(t,o){if(t&1&&z(0,24),t&2){let e=c(2);l("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",D(2,Vt,e.selectedOption))}}function Qs(t,o){if(t&1&&(p(0,"span"),L(1),d()),t&2){let e=c(3);r(),Oe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function Zs(t,o){if(t&1&&u(0,Qs,2,1,"span",18),t&2){let e=c(2);l("ngIf",e.isSelectedOptionEmpty())}}function js(t,o){if(t&1){let e=Q();p(0,"span",22,3),$("focus",function(n){b(e);let s=c();return v(s.onInputFocus(n))})("blur",function(n){b(e);let s=c();return v(s.onInputBlur(n))})("keydown",function(n){b(e);let s=c();return v(s.onKeyDown(n))}),u(2,Hs,2,1,"ng-container",20)(3,Ns,1,4,"ng-container",23)(4,Zs,1,1,"ng-template",null,4,ne),d()}if(t&2){let e,i=re(5),n=c();l("ngClass",n.inputClass)("pTooltip",n.tooltip)("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),f("aria-disabled",n.disabled)("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",(e=n.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.disabled?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required)("required",n.required),r(2),l("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate)("ngIfElse",i),r(),l("ngIf",(n.selectedItemTemplate||n._selectedItemTemplate)&&!n.isSelectedOptionEmpty())}}function qs(t,o){if(t&1){let e=Q();p(0,"input",25,5),$("input",function(n){b(e);let s=c();return v(s.onEditableInput(n))})("keydown",function(n){b(e);let s=c();return v(s.onKeyDown(n))})("focus",function(n){b(e);let s=c();return v(s.onInputFocus(n))})("blur",function(n){b(e);let s=c();return v(s.onInputBlur(n))}),d()}if(t&2){let e=c();l("ngClass",e.inputClass)("disabled",e.disabled)("pAutoFocus",e.autofocus),f("id",e.inputId)("maxlength",e.maxlength)("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Ks(t,o){if(t&1){let e=Q();p(0,"TimesIcon",27),$("click",function(n){b(e);let s=c(2);return v(s.clear(n))}),d()}t&2&&f("data-pc-section","clearicon")}function Gs(t,o){}function Ws(t,o){t&1&&u(0,Gs,0,0,"ng-template")}function Us(t,o){if(t&1){let e=Q();p(0,"span",27),$("click",function(n){b(e);let s=c(2);return v(s.clear(n))}),u(1,Ws,1,0,null,28),d()}if(t&2){let e=c(2);f("data-pc-section","clearicon"),r(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",Ne(3,As))}}function Ys(t,o){if(t&1&&(R(0),u(1,Ks,1,1,"TimesIcon",26)(2,Us,2,4,"span",26),B()),t&2){let e=c();r(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),r(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Xs(t,o){t&1&&z(0)}function Js(t,o){if(t&1&&(R(0),u(1,Xs,1,0,"ng-container",29),B()),t&2){let e=c(2);r(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function ea(t,o){if(t&1&&h(0,"span",32),t&2){let e=c(3);l("ngClass","p-select-loading-icon pi-spin "+e.loadingIcon)}}function ta(t,o){t&1&&h(0,"span",33),t&2&&S("p-select-loading-icon pi pi-spinner pi-spin")}function ia(t,o){if(t&1&&(R(0),u(1,ea,1,1,"span",30)(2,ta,1,2,"span",31),B()),t&2){let e=c(2);r(),l("ngIf",e.loadingIcon),r(),l("ngIf",!e.loadingIcon)}}function na(t,o){if(t&1&&(R(0),u(1,Js,2,1,"ng-container",18)(2,ia,3,2,"ng-container",18),B()),t&2){let e=c();r(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),r(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function oa(t,o){if(t&1&&h(0,"span",37),t&2){let e=c(3);l("ngClass",e.dropdownIcon)}}function sa(t,o){t&1&&h(0,"ChevronDownIcon",38),t&2&&l("styleClass","p-select-dropdown-icon")}function aa(t,o){if(t&1&&(R(0),u(1,oa,1,1,"span",35)(2,sa,1,1,"ChevronDownIcon",36),B()),t&2){let e=c(2);r(),l("ngIf",e.dropdownIcon),r(),l("ngIf",!e.dropdownIcon)}}function la(t,o){}function ra(t,o){t&1&&u(0,la,0,0,"ng-template")}function ca(t,o){if(t&1&&(p(0,"span",39),u(1,ra,1,0,null,28),d()),t&2){let e=c(2);r(),l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",Ne(2,Rs))}}function pa(t,o){if(t&1&&u(0,aa,3,2,"ng-container",18)(1,ca,2,3,"span",34),t&2){let e=c();l("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),r(),l("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function da(t,o){t&1&&z(0)}function ua(t,o){t&1&&z(0)}function ma(t,o){if(t&1&&(R(0),u(1,ua,1,0,"ng-container",28),B()),t&2){let e=c(3);r(),l("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",D(2,Xi,e.filterOptions))}}function ha(t,o){t&1&&h(0,"SearchIcon")}function fa(t,o){}function ga(t,o){t&1&&u(0,fa,0,0,"ng-template")}function _a(t,o){if(t&1&&(p(0,"span"),u(1,ga,1,0,null,29),d()),t&2){let e=c(4);r(),l("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function ya(t,o){if(t&1){let e=Q();p(0,"p-iconfield")(1,"input",46,10),$("input",function(n){b(e);let s=c(3);return v(s.onFilterInputChange(n))})("keydown",function(n){b(e);let s=c(3);return v(s.onFilterKeyDown(n))})("blur",function(n){b(e);let s=c(3);return v(s.onFilterBlur(n))}),d(),p(3,"p-inputicon"),u(4,ha,1,0,"SearchIcon",18)(5,_a,2,1,"span",18),d()()}if(t&2){let e=c(3);r(),l("pSize",e.size)("value",e._filterValue()||"")("variant",e.variant),f("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),r(3),l("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),r(),l("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function ba(t,o){if(t&1){let e=Q();p(0,"div",45),$("click",function(n){return b(e),v(n.stopPropagation())}),u(1,ma,2,4,"ng-container",20)(2,ya,6,9,"ng-template",null,9,ne),d()}if(t&2){let e=re(3),i=c(2);r(),l("ngIf",i.filterTemplate||i._filterTemplate)("ngIfElse",e)}}function va(t,o){t&1&&z(0)}function Ca(t,o){if(t&1&&u(0,va,1,0,"ng-container",28),t&2){let e=o.$implicit,i=o.options;c(2);let n=re(9);l("ngTemplateOutlet",n)("ngTemplateOutletContext",me(2,Ji,e,i))}}function xa(t,o){t&1&&z(0)}function wa(t,o){if(t&1&&u(0,xa,1,0,"ng-container",28),t&2){let e=o.options,i=c(4);l("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",D(2,Xi,e))}}function Ia(t,o){t&1&&(R(0),u(1,wa,1,4,"ng-template",null,12,ne),B())}function Ta(t,o){if(t&1){let e=Q();p(0,"p-scroller",47,11),$("onLazyLoad",function(n){b(e);let s=c(2);return v(s.onLazyLoad.emit(n))}),u(2,Ca,1,5,"ng-template",null,2,ne)(4,Ia,3,0,"ng-container",18),d()}if(t&2){let e=c(2);ke(D(8,et,e.scrollHeight)),l("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),r(4),l("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Sa(t,o){t&1&&z(0)}function Oa(t,o){if(t&1&&(R(0),u(1,Sa,1,0,"ng-container",28),B()),t&2){c();let e=re(9),i=c();r(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",me(3,Ji,i.visibleOptions(),Ne(2,Bs)))}}function Ea(t,o){if(t&1&&(p(0,"span"),L(1),d()),t&2){let e=c(2).$implicit,i=c(3);r(),Oe(i.getOptionGroupLabel(e.optionGroup))}}function Va(t,o){t&1&&z(0)}function ka(t,o){if(t&1&&(R(0),p(1,"li",51),u(2,Ea,2,1,"span",18)(3,Va,1,0,"ng-container",28),d(),B()),t&2){let e=c(),i=e.$implicit,n=e.index,s=c().options,a=c(2);r(),l("ngStyle",D(5,et,s.itemSize+"px")),f("id",a.id+"_"+a.getOptionIndex(n,s)),r(),l("ngIf",!a.groupTemplate&&!a._groupTemplate),r(),l("ngTemplateOutlet",a.groupTemplate||a._groupTemplate)("ngTemplateOutletContext",D(7,Vt,i.optionGroup))}}function $a(t,o){if(t&1){let e=Q();R(0),p(1,"p-selectItem",52),$("onClick",function(n){b(e);let s=c().$implicit,a=c(3);return v(a.onOptionSelect(n,s))})("onMouseEnter",function(n){b(e);let s=c().index,a=c().options,m=c(2);return v(m.onOptionMouseEnter(n,m.getOptionIndex(s,a)))}),d(),B()}if(t&2){let e=c(),i=e.$implicit,n=e.index,s=c().options,a=c(2);r(),l("id",a.id+"_"+a.getOptionIndex(n,s))("option",i)("checkmark",a.checkmark)("selected",a.isSelected(i))("label",a.getOptionLabel(i))("disabled",a.isOptionDisabled(i))("template",a.itemTemplate||a._itemTemplate)("focused",a.focusedOptionIndex()===a.getOptionIndex(n,s))("ariaPosInset",a.getAriaPosInset(a.getOptionIndex(n,s)))("ariaSetSize",a.ariaSetSize)}}function Fa(t,o){if(t&1&&u(0,ka,4,9,"ng-container",18)(1,$a,2,10,"ng-container",18),t&2){let e=o.$implicit,i=c(3);l("ngIf",i.isOptionGroup(e)),r(),l("ngIf",!i.isOptionGroup(e))}}function za(t,o){if(t&1&&L(0),t&2){let e=c(4);Ge(" ",e.emptyFilterMessageLabel," ")}}function La(t,o){t&1&&z(0,null,14)}function Ma(t,o){if(t&1&&u(0,La,2,0,"ng-container",29),t&2){let e=c(4);l("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function Da(t,o){if(t&1&&(p(0,"li",53),u(1,za,1,1)(2,Ma,1,1,"ng-container"),d()),t&2){let e=c().options,i=c(2);l("ngStyle",D(2,et,e.itemSize+"px")),r(),W(!i.emptyFilterTemplate&&!i._emptyFilterTemplate&&!i.emptyTemplate?1:2)}}function Pa(t,o){if(t&1&&L(0),t&2){let e=c(4);Ge(" ",e.emptyMessageLabel," ")}}function Aa(t,o){t&1&&z(0,null,15)}function Ra(t,o){if(t&1&&u(0,Aa,2,0,"ng-container",29),t&2){let e=c(4);l("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Ba(t,o){if(t&1&&(p(0,"li",53),u(1,Pa,1,1)(2,Ra,1,1,"ng-container"),d()),t&2){let e=c().options,i=c(2);l("ngStyle",D(2,et,e.itemSize+"px")),r(),W(!i.emptyTemplate&&!i._emptyTemplate?1:2)}}function Ha(t,o){if(t&1&&(p(0,"ul",48,13),u(2,Fa,2,2,"ng-template",49)(3,Da,3,4,"li",50)(4,Ba,3,4,"li",50),d()),t&2){let e=o.$implicit,i=o.options,n=c(2);ke(i.contentStyle),l("ngClass",i.contentStyleClass),f("id",n.id+"_list")("aria-label",n.listLabel),r(2),l("ngForOf",e),r(),l("ngIf",n.filterValue&&n.isEmpty()),r(),l("ngIf",!n.filterValue&&n.isEmpty())}}function Na(t,o){t&1&&z(0)}function Qa(t,o){if(t&1){let e=Q();p(0,"div",40)(1,"span",41,6),$("focus",function(n){b(e);let s=c();return v(s.onFirstHiddenFocus(n))}),d(),u(3,da,1,0,"ng-container",29)(4,ba,4,2,"div",42),p(5,"div",43),u(6,Ta,5,10,"p-scroller",44)(7,Oa,2,6,"ng-container",18)(8,Ha,5,8,"ng-template",null,7,ne),d(),u(10,Na,1,0,"ng-container",29),p(11,"span",41,8),$("focus",function(n){b(e);let s=c();return v(s.onLastHiddenFocus(n))}),d()()}if(t&2){let e=c();S(e.panelStyleClass),l("ngClass","p-select-overlay p-component")("ngStyle",e.panelStyle),r(),f("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),r(2),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),r(),l("ngIf",e.filter),r(),ot("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),r(),l("ngIf",e.virtualScroll),r(),l("ngIf",!e.virtualScroll),r(3),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),r(),f("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var Za=({dt:t})=>`
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${t("select.background")};
    border: 1px solid ${t("select.border.color")};
    transition: background ${t("select.transition.duration")}, color ${t("select.transition.duration")}, border-color ${t("select.transition.duration")},
        outline-color ${t("select.transition.duration")}, box-shadow ${t("select.transition.duration")};
    border-radius: ${t("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("select.shadow")};
}

.p-select.ng-invalid.ng-dirty {
    border-color: ${t("select.invalid.border.color")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${t("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${t("select.focus.border.color")};
    box-shadow: ${t("select.focus.ring.shadow")};
    outline: ${t("select.focus.ring.width")} ${t("select.focus.ring.style")} ${t("select.focus.ring.color")};
    outline-offset: ${t("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${t("select.filled.background")};
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${t("select.filled.hover.background")};
}

.p-select.p-variant-filled.p-focus {
    background: ${t("select.filled.focus.background")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${t("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${t("select.clear.icon.color")};
    inset-inline-end: ${t("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("select.dropdown.color")};
    width: ${t("select.dropdown.width")};
    border-start-end-radius: ${t("select.border.radius")};
    border-end-end-radius: ${t("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${t("select.padding.y")} ${t("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${t("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${t("select.placeholder.color")};
}

.p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
    color: ${t("select.invalid.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-inline-end: calc(1rem + ${t("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${t("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    cursor: default;
    background: ${t("select.overlay.background")};
    color: ${t("select.overlay.color")};
    border: 1px solid ${t("select.overlay.border.color")};
    border-radius: ${t("select.overlay.border.radius")};
    box-shadow: ${t("select.overlay.shadow")};
}

.p-select-header {
    padding: ${t("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${t("select.option.group.padding")};
    background: ${t("select.option.group.background")};
    color: ${t("select.option.group.color")};
    font-weight: ${t("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${t("select.list.padding")};
    gap: ${t("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("select.option.padding")};
    border: 0 none;
    color: ${t("select.option.color")};
    background: transparent;
    transition: background ${t("select.transition.duration")}, color ${t("select.transition.duration")}, border-color ${t("select.transition.duration")},
            box-shadow ${t("select.transition.duration")}, outline-color ${t("select.transition.duration")};
    border-radius: ${t("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${t("select.option.focus.background")};
    color: ${t("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${t("select.option.selected.background")};
    color: ${t("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${t("select.option.selected.focus.background")};
    color: ${t("select.option.selected.focus.color")};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${t("select.checkmark.gutter.start")};
    margin-inline-end: ${t("select.checkmark.gutter.end")};
    color: ${t("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${t("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
}

.p-select-sm .p-select-label {
    font-size: ${t("select.sm.font.size")};
    padding-block: ${t("select.sm.padding.y")};
    padding-inline: ${t("select.sm.padding.x")};
}

.p-select-sm .p-select-dropdown .p-icon {
    font-size: ${t("select.sm.font.size")};
    width: ${t("select.sm.font.size")};
    height: ${t("select.sm.font.size")};
}

.p-select-lg .p-select-label {
    font-size: ${t("select.lg.font.size")};
    padding-block: ${t("select.lg.padding.y")};
    padding-inline: ${t("select.lg.padding.x")};
}

.p-select-lg .p-select-dropdown .p-icon {
    font-size: ${t("select.lg.font.size")};
    width: ${t("select.lg.font.size")};
    height: ${t("select.lg.font.size")};
}
`,ja={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.disabled,"p-variant-filled":t.variant==="filled"||t.config.inputVariant()==="filled"||t.config.inputStyle()==="filled","p-focus":t.focused,"p-inputwrapper-filled":t.modelValue()!==void 0&&t.modelValue()!==null,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size==="small","p-select-lg p-inputfield-lg":t.size==="large"}],label:({instance:t,props:o})=>["p-select-label",{"p-placeholder":!o.editable&&t.label===o.placeholder,"p-select-label-empty":!o.editable&&!t.$slots.value&&(t.label==="p-emptylabel"||t.label.length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t,props:o,state:e,option:i,focusedOption:n})=>["p-select-option",{"p-select-option-selected":t.isSelected(i)&&o.highlightOnSelect,"p-focus":e.focusedOptionIndex===n,"p-disabled":t.isOptionDisabled(i)}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},Yi=(()=>{class t extends K{name="select";theme=Za;classes=ja;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var qa={provide:si,useExisting:kt(()=>gt),multi:!0},Ka=(()=>{class t extends Z{id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;onClick=new E;onMouseEnter=new E;onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",C],focused:[2,"focused","focused",C],label:"label",disabled:[2,"disabled","disabled",C],visible:[2,"visible","visible",C],itemSize:[2,"itemSize","itemSize",ee],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",C]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[x],decls:4,vars:22,consts:[["role","option","pRipple","",3,"click","mouseenter","id","ngStyle","ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-select-option-check-icon",4,"ngIf"],["styleClass","p-select-option-blank-icon",4,"ngIf"],["styleClass","p-select-option-check-icon"],["styleClass","p-select-option-blank-icon"]],template:function(i,n){i&1&&(p(0,"li",0),$("click",function(a){return n.onOptionClick(a)})("mouseenter",function(a){return n.onOptionMouseEnter(a)}),u(1,ms,3,2,"ng-container",1)(2,hs,2,1,"span",1)(3,fs,1,0,"ng-container",2),d()),i&2&&(l("id",n.id)("ngStyle",D(14,et,n.itemSize+"px"))("ngClass",Qe(16,ps,n.selected&&!n.checkmark,n.disabled,n.focused)),f("aria-label",n.label)("aria-setsize",n.ariaSetSize)("aria-posinset",n.ariaPosInset)("aria-selected",n.selected)("data-p-focused",n.focused)("data-p-highlight",n.selected)("data-p-disabled",n.disabled),r(),l("ngIf",n.checkmark),r(),l("ngIf",!n.template),r(),l("ngTemplateOutlet",n.template)("ngTemplateOutletContext",D(20,Vt,n.option)))},dependencies:[q,he,ce,_e,Ee,A,ut,mt,Ti],encapsulation:2})}return t})(),gt=(()=>{class t extends Z{zone;filterService;id;scrollHeight="200px";filter;name;style;panelStyle;styleClass;panelStyleClass;readonly;required;editable;appendTo;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;variant;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";autoDisplayFirst=!0;group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;size;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";maxlength;tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;fluid;get disabled(){return this._disabled}set disabled(e){e&&(this.focused=!1,this.overlayVisible&&this.hide()),this._disabled=e,this.cd.destroyed||this.cd.detectChanges()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}_itemSize;get autoZIndex(){return this._autoZIndex}set autoZIndex(e){this._autoZIndex=e,console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_autoZIndex;get baseZIndex(){return this._baseZIndex}set baseZIndex(e){this._baseZIndex=e,console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_baseZIndex;get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(e){this._showTransitionOptions=e,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_showTransitionOptions;get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(e){this._hideTransitionOptions=e,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}_hideTransitionOptions;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){ei(e,this._options())||this._options.set(e)}onChange=new E;onFilter=new E;onFocus=new E;onBlur=new E;onClick=new E;onShow=new E;onHide=new E;onClear=new E;onLazyLoad=new E;_componentStyle=F(Yi);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}get hostClass(){return this._componentStyle.classes.root({instance:this}).map(i=>typeof i=="string"?i:Object.keys(i).filter(n=>i[n]).join(" ")).join(" ")+" "+this.styleClass}get hostStyle(){return this.style}_disabled;itemsWrapper;itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=Se(null);_placeholder=Se(void 0);modelValue=Se(null);value;onModelChange=()=>{};onModelTouched=()=>{};hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=Se(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=Se(-1);labelId;listId;clicked=Se(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(ct.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(ct.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.disabled}get listLabel(){return this.config.getTranslation(ct.ARIA).listLabel}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputClass(){let e=this.label();return{"p-select-label":!0,"p-placeholder":this.placeholder()&&e===this.placeholder(),"p-select-label-empty":!this.editable&&!this.selectedItemTemplate&&(e==null||e==="p-emptylabel"||e.length===0)}}get panelClass(){return{"p-dropdown-panel p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=We(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let n=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options.filter(s=>s.label?s.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:s.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let s=this.options||[],a=[];return s.forEach(m=>{let O=this.getOptionGroupChildren(m).filter(T=>n.includes(T));O.length>0&&a.push(Ke(G({},m),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...O]}))}),this.flatOptions(a)}return n}return e});label=We(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),i=e.findIndex(n=>this.isOptionValueEqualsModelValue(n));return i!==-1?this.getOptionLabel(e[i]):this.placeholder()||"p-emptylabel"});filled=We(()=>typeof this.modelValue()=="string"?!!this.modelValue():this.label()!=="p-emptylabel"&&this.modelValue()!==void 0&&this.modelValue()!==null);selectedOption;editableInputValue=We(()=>this.getOptionLabel(this.selectedOption)||this.modelValue()||"");constructor(e,i){super(),this.zone=e,this.filterService=i,Rt(()=>{let n=this.modelValue(),s=this.visibleOptions();if(s&&lt(s)){let a=this.findSelectedOptionIndex();(a!==-1||n===void 0||typeof n=="string"&&n.length===0||this.isModelValueNotSet()||this.editable)&&(this.selectedOption=s[a])}Ye(s)&&(n===void 0||this.isModelValueNotSet())&&lt(this.selectedOption)&&(this.selectedOption=null),n!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}ngOnInit(){super.ngOnInit(),this.id=this.id||ae("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){if(this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=ve(this.overlayViewChild?.overlayViewChild?.nativeElement,"li.p-select-option-selected");e&&Xt(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((i,n,s)=>{i.push({optionGroup:n,group:!0,index:s});let a=this.getOptionGroupChildren(n);return a&&a.forEach(m=>i.push(m)),i},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)),this.autoDisplayFirst&&(this.modelValue()===null||this.modelValue()===void 0)&&!this.placeholder()){let e=this.findFirstOptionIndex();this.onOptionSelect(null,this.visibleOptions()[e],!1,!0)}}onOptionSelect(e,i,n=!0,s=!1){if(!this.isSelected(i)){let a=this.getOptionValue(i);this.updateModel(a,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),s===!1&&this.onChange.emit({originalEvent:e,value:a})}n&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}updateModel(e,i){this.value=e,this.onModelChange(e),this.modelValue.set(e),this.selectedOptionUpdated=!0}writeValue(e){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),this.modelValue.set(this.value),this.updateEditableLabel(),this.cd.markForCheck()}allowModelChange(){return!!this.modelValue()&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return this.isValidOption(e)&&ti(this.modelValue(),this.getOptionValue(e),this.equalityKey())}ngAfterViewInit(){super.ngAfterViewInit(),this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,i=e?.classList.contains("p-float-label");if(e&&i&&!this.selectedOption){let n=e.querySelector("label");n&&this._placeholder.set(n.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?je(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?je(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}isSelectedOptionEmpty(){return Ye(this.selectedOption)}isOptionDisabled(e){return this.getOptionValue(this.modelValue())===this.getOptionValue(e)||this.getOptionLabel(this.modelValue()===this.getOptionLabel(e))&&e.disabled===!1?!1:this.optionDisabled?je(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?je(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?je(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onContainerClick(e){this.disabled||this.readonly||this.loading||(this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),!(e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]'))&&((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let i=e.target.value;this.searchValue="",!this.searchOptions(e,i)&&this.focusedOptionIndex.set(-1),this.onModelChange(i),this.updateModel(i||null,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:i})},1),!this.overlayVisible&&lt(i)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&Ce(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=ve(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-select-list-container"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=ve(this.itemsWrapper,".p-select-option.p-select-option-selected");i&&i.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e))}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&Nt(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&Ce(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&Ce(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.disabled)return;this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,i=!1){if(!(this.disabled||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,i);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&ii(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,i){if(this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus)){let n=this.visibleOptions()[i];this.onOptionSelect(e,n,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=ve(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?null:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?It(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}findLastOptionIndex(){return It(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,i=!1){if(e.altKey&&!i){if(this.focusedOptionIndex()!==-1){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}this.overlayVisible&&this.hide()}else{let n=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,i=!1){i&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,i=!1){if(i){let n=e.currentTarget;e.shiftKey?n.setSelectionRange(0,n.value.length):(n.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,i=!1){if(i){let n=e.currentTarget;if(e.shiftKey)n.setSelectionRange(0,n.value.length);else{let s=n.value.length;n.setSelectionRange(s,s),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,i=!1){!this.editable&&!i&&this.onEnterKey(e)}onEnterKey(e,i=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}!i&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()}onTabKey(e,i=!1){if(!i)if(this.overlayVisible&&this.hasFocusableElements())Ce(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let n=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,n)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?Gt(this.overlayViewChild.el?.nativeElement,":not(.p-hidden-focusable)"):this.focusInputViewChild?.nativeElement;Ce(i)}onLastHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?Wt(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Ce(i)}hasFocusableElements(){return Kt(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,i=!1){i&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,s=!1;return n=this.visibleOptions().findIndex(a=>this.isOptionMatched(a)),n!==-1&&(s=!0),n===-1&&this.focusedOptionIndex()===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&setTimeout(()=>{this.changeFocusedOptionIndex(e,n)}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let i=e.target.value;this._filterValue.set(i),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?ve(this.el.nativeElement,".p-dropdown-label.p-inputtext").focus():Ce(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}static \u0275fac=function(i){return new(i||t)(J(xe),J(ni))};static \u0275cmp=I({type:t,selectors:[["p-select"]],contentQueries:function(i,n,s){if(i&1&&(w(s,gs,4),w(s,_s,4),w(s,ys,4),w(s,bs,4),w(s,vs,4),w(s,Ui,4),w(s,Cs,4),w(s,xs,4),w(s,ws,4),w(s,Is,4),w(s,Ts,4),w(s,Ss,4),w(s,Os,4),w(s,Es,4),w(s,Vs,4),w(s,ks,4),w(s,Ie,4)),i&2){let a;g(a=_())&&(n.itemTemplate=a.first),g(a=_())&&(n.groupTemplate=a.first),g(a=_())&&(n.loaderTemplate=a.first),g(a=_())&&(n.selectedItemTemplate=a.first),g(a=_())&&(n.headerTemplate=a.first),g(a=_())&&(n.filterTemplate=a.first),g(a=_())&&(n.footerTemplate=a.first),g(a=_())&&(n.emptyFilterTemplate=a.first),g(a=_())&&(n.emptyTemplate=a.first),g(a=_())&&(n.dropdownIconTemplate=a.first),g(a=_())&&(n.loadingIconTemplate=a.first),g(a=_())&&(n.clearIconTemplate=a.first),g(a=_())&&(n.filterIconTemplate=a.first),g(a=_())&&(n.onIconTemplate=a.first),g(a=_())&&(n.offIconTemplate=a.first),g(a=_())&&(n.cancelIconTemplate=a.first),g(a=_())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&(Y(Ui,5),Y($s,5),Y(Fs,5),Y(zs,5),Y(Ls,5),Y(Ms,5),Y(Ds,5),Y(Ps,5)),i&2){let s;g(s=_())&&(n.filterViewChild=s.first),g(s=_())&&(n.focusInputViewChild=s.first),g(s=_())&&(n.editableInputViewChild=s.first),g(s=_())&&(n.itemsViewChild=s.first),g(s=_())&&(n.scroller=s.first),g(s=_())&&(n.overlayViewChild=s.first),g(s=_())&&(n.firstHiddenFocusableElementOnOverlay=s.first),g(s=_())&&(n.lastHiddenFocusableElementOnOverlay=s.first)}},hostVars:5,hostBindings:function(i,n){i&1&&$("click",function(a){return n.onContainerClick(a)}),i&2&&(f("id",n.id),ke(n.hostStyle),S(n.hostClass))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",C],name:"name",style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",C],required:[2,"required","required",C],editable:[2,"editable","editable",C],appendTo:"appendTo",tabindex:[2,"tabindex","tabindex",ee],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",variant:"variant",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",C],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",C],checkmark:[2,"checkmark","checkmark",C],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",C],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",autoDisplayFirst:[2,"autoDisplayFirst","autoDisplayFirst",C],group:[2,"group","group",C],showClear:[2,"showClear","showClear",C],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",C],virtualScroll:[2,"virtualScroll","virtualScroll",C],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",ee],virtualScrollOptions:"virtualScrollOptions",size:"size",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",maxlength:[2,"maxlength","maxlength",ee],tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",C],selectOnFocus:[2,"selectOnFocus","selectOnFocus",C],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",C],autofocusFilter:[2,"autofocusFilter","autofocusFilter",C],fluid:[2,"fluid","fluid",C],disabled:"disabled",itemSize:"itemSize",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",filterValue:"filterValue",options:"options"},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[j([qa,Yi]),x],decls:11,vars:15,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text","aria-haspopup","listbox",3,"ngClass","disabled","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",1,"p-select-dropdown"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","autoZIndex","baseZIndex","showTransitionOptions","hideTransitionOptions"],["role","combobox",3,"focus","blur","keydown","ngClass","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text","aria-haspopup","listbox",3,"input","keydown","focus","blur","ngClass","disabled","pAutoFocus"],["class","p-select-clear-icon",3,"click",4,"ngIf"],[1,"p-select-clear-icon",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"ngClass",4,"ngIf"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true"],["class","p-select-dropdown-icon",4,"ngIf"],["class","p-select-dropdown-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-select-dropdown-icon",3,"ngClass"],[3,"styleClass"],[1,"p-select-dropdown-icon"],[3,"ngClass","ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],["class","p-select-header",3,"click",4,"ngIf"],[1,"p-select-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],[1,"p-select-header",3,"click"],["pInputText","","type","text","role","searchbox","autocomplete","off",1,"p-select-filter",3,"input","keydown","blur","pSize","value","variant"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-select-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-select-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-select-option-group",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize"],["role","option",1,"p-select-empty-message",3,"ngStyle"]],template:function(i,n){if(i&1){let s=Q();u(0,js,6,20,"span",16)(1,qs,2,8,"input",17)(2,Ys,3,2,"ng-container",18),p(3,"div",19),u(4,na,3,2,"ng-container",20)(5,pa,2,2,"ng-template",null,0,ne),d(),p(7,"p-overlay",21,1),Dt("visibleChange",function(m){return b(s),Mt(n.overlayVisible,m)||(n.overlayVisible=m),v(m)}),$("onAnimationStart",function(m){return b(s),v(n.onOverlayAnimationStart(m))})("onHide",function(){return b(s),v(n.hide())}),u(9,Qa,13,17,"ng-template",null,2,ne),d()}if(i&2){let s,a=re(6);l("ngIf",!n.editable),r(),l("ngIf",n.editable),r(),l("ngIf",n.isVisibleClearIcon),r(),f("aria-expanded",(s=n.overlayVisible)!==null&&s!==void 0?s:!1)("data-pc-section","trigger"),r(),l("ngIf",n.loading)("ngIfElse",a),r(3),Lt("visible",n.overlayVisible),l("options",n.overlayOptions)("target","@parent")("appendTo",n.appendTo)("autoZIndex",n.autoZIndex)("baseZIndex",n.baseZIndex)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)}},dependencies:[q,he,Ze,ce,_e,Ee,Ka,Qi,Wi,yi,qe,Si,Vi,pt,Ai,Bi,Ki,A],encapsulation:2,changeDetection:0})}return t})(),en=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=te({imports:[gt,A,A]})}return t})();var _t=class{numeroPratica;nome;cognome;email;oggettoRichiesta;messaggio;constructor(){this.numeroPratica=`PR-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${crypto.randomUUID().substring(0,4).toUpperCase()}`,this.nome="",this.cognome="",this.email="",this.oggettoRichiesta="",this.messaggio=""}};function Wa(t,o){t&1&&h(0,"p-message",41),t&2&&l("life",3e3)}function Ua(t,o){t&1&&h(0,"p-message",42),t&2&&l("life",3e3)}function Ya(t,o){t&1&&h(0,"p-message",43),t&2&&l("life",3e3)}function Xa(t,o){t&1&&h(0,"p-message",44),t&2&&l("life",3e3)}function Ja(t,o){t&1&&h(0,"p-message",45),t&2&&l("life",3e3)}function el(t,o){t&1&&(p(0,"div",37),h(1,"p-message",46),d()),t&2&&(r(),l("life",1e4))}var tn=class t{inviato=!1;errore=!1;contattoService=F(ht);formBuilder=F(hi);messageService=F(rt);form;opzioniOggetto=[{label:"Iscrizione Oratorio",value:"Iscrizione Oratorio"},{label:"Iscrizione Grest",value:"Iscrizione Grest"},{label:"Supporto Tecnico",value:"Supporto Tecnico"},{label:"Richiesta Collaborazione",value:"Richiesta Collaborazione"},{label:"Altro",value:"Altro"}];constructor(){}ngOnInit(){this.generateForm(),this.form.reset()}generateForm(){this.form=this.formBuilder.group({nome:["",Le.required],cognome:["",Le.required],email:["",[Le.required,Le.email]],oggetto:["",[Le.required]],messaggio:["",[Le.required,Le.maxLength(500)]]})}onSubmit(){if(this.form.valid){let o=new _t;o.nome=this.form.value.nome,o.cognome=this.form.value.cognome,o.email=this.form.value.email,o.oggettoRichiesta=this.form.value.oggetto,o.messaggio=this.form.value.messaggio,this.contattoService.sendContatto(o).subscribe({next:()=>{this.inviato=!0,this.errore=!1,console.log(o),this.form.reset(),this.messageService.add({severity:"success",summary:`Pratica avviata:
 ${o.numeroPratica}`,detail:"Messaggio inviato con successo!"})},error:()=>{this.errore=!0,this.inviato=!1,this.messageService.add({severity:"error",summary:"Errore",detail:"Errore imprevisto, si prega di riprovare."}),this.markAllAsTouched()}}),setTimeout(()=>{this.inviato=!1,this.errore=!1},1e4)}}markAllAsTouched(){Object.values(this.form.controls).forEach(o=>o.markAsTouched())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["app-contatti"]],decls:72,vars:14,consts:[[1,"w-full","mb-6"],[2,"font-weight","300"],[2,"font-weight","300","margin-top","1.75rem"],[1,"card","contatti"],[1,"card-item","telefono"],[1,"circle","whatsapp"],[1,"fa-brands","fa-whatsapp","fa-xl",2,"color","#fff"],[1,"value"],[1,"card-item","email"],[1,"circle","email"],[1,"fa-solid","fa-envelope","fa-lg",2,"color","#fff"],[1,"card-item","address"],[1,"circle","map"],[1,"fa-solid","fa-map-marker-alt","fa-lg",2,"color","#fff"],[1,"card-item","social","flex","gap-4"],[1,"card-subitem","flex","align-items-center","justify-content-center","gap-1"],[1,"fa-brands","fa-facebook","fa-xl",2,"color","#1877f2"],[1,"fa-brands","fa-instagram","fa-xl",2,"color","#e1306c"],[1,"contact-container"],[1,"formgrid","grid","p-fluid",3,"ngSubmit","formGroup"],[1,"field","col-12","md:col-6"],["pInputText","","id","nome","type","text","formControlName","nome"],["for","nome"],["severity","error","variant","simple","size","small","text","Il nome \xE8 obbligatorio",3,"life",4,"ngIf"],["pInputText","","id","cognome","type","text","formControlName","cognome"],["for","cognome"],["severity","error","variant","simple","size","small","text","Il cognome \xE8 obbligatorio",3,"life",4,"ngIf"],[1,"field","col-12"],["pInputText","","id","email","type","text","formControlName","email"],["for","email"],["severity","error","variant","simple","size","small","text","L'email \xE8 obbligatoria",3,"life",4,"ngIf"],["formControlName","oggetto","optionLabel","label","optionValue","value","variant","filled",3,"options"],["for","oggetto"],["severity","error","variant","simple","size","small","text","Inserisci un oggetto",3,"life",4,"ngIf"],["pInputTextarea","","id","messaggio","rows","8","formControlName","messaggio",3,"keydown.enter"],["for","messaggio"],["severity","error","variant","simple","size","small","text","Il messaggio \xE8 obbligatorio",3,"life",4,"ngIf"],[1,"flex","w-max","justify-content-center"],[1,"field","col-12","justify-content-center","flex"],["pButton","","type","submit","label","Invia","iconPos","left","icon","pi pi-send",3,"severity","disabled"],["position","top-center",3,"life","baseZIndex"],["severity","error","variant","simple","size","small","text","Il nome \xE8 obbligatorio",3,"life"],["severity","error","variant","simple","size","small","text","Il cognome \xE8 obbligatorio",3,"life"],["severity","error","variant","simple","size","small","text","L'email \xE8 obbligatoria",3,"life"],["severity","error","variant","simple","size","small","text","Inserisci un oggetto",3,"life"],["severity","error","variant","simple","size","small","text","Il messaggio \xE8 obbligatorio",3,"life"],["size","small","variant","simple","severity","success","text","Ti ringraziamo per averci contattato, ti risponderemo al pi\xF9 presto!","styleClass","flex justify-content-center text-center",3,"life"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"p",1),L(2,"Non riesci a trovare quello che cerchi?"),d(),p(3,"p",2),L(4,"Hai una domanda da porci?"),d()(),p(5,"div",3)(6,"div",4)(7,"div",5),h(8,"i",6),d(),p(9,"span",7),L(10,"+39 3662873862"),d()(),p(11,"div",8)(12,"div",9),h(13,"i",10),d(),p(14,"span",7),L(15,"info@oratorioperdiqua.it"),d()(),p(16,"div",11)(17,"div",12),h(18,"i",13),d(),p(19,"span",7),L(20,"Via Maria Mattia Pierini 5, "),h(21,"br"),L(22," 06012, Cerbara, PG"),d()(),p(23,"div",14)(24,"div",15),h(25,"i",16),p(26,"span",7),L(27,"Facebook"),d()(),p(28,"div",15),h(29,"i",17),p(30,"span",7),L(31,"Instagram"),d()()()(),p(32,"div",18)(33,"h2"),L(34,"CONTATTACI"),d(),p(35,"h5"),L(36,"Compila il modulo qua sotto!"),d(),p(37,"form",19),$("ngSubmit",function(){return i.onSubmit()}),p(38,"div",20)(39,"p-floatlabel"),h(40,"input",21),p(41,"label",22),L(42,"Nome"),d()(),u(43,Wa,1,1,"p-message",23),d(),p(44,"div",20)(45,"p-floatlabel"),h(46,"input",24),p(47,"label",25),L(48,"Cognome"),d()(),u(49,Ua,1,1,"p-message",26),d(),p(50,"div",27)(51,"p-floatlabel"),h(52,"input",28),p(53,"label",29),L(54,"Email"),d()(),u(55,Ya,1,1,"p-message",30),d(),p(56,"div",27)(57,"p-floatlabel"),h(58,"p-select",31),p(59,"label",32),L(60,"Oggetto"),d()(),u(61,Xa,1,1,"p-message",33),d(),p(62,"div",27)(63,"p-floatlabel")(64,"textarea",34),$("keydown.enter",function(){return i.onSubmit()}),d(),p(65,"label",35),L(66,"Messaggio"),d()(),u(67,Ja,1,1,"p-message",36),d(),u(68,el,2,1,"div",37),p(69,"div",38),h(70,"button",39),d()(),h(71,"p-toast",40),d()),e&2&&(r(37),l("formGroup",i.form),r(6),l("ngIf",i.form.controls.nome.invalid&&i.form.controls.nome.touched),r(6),l("ngIf",i.form.controls.cognome.invalid&&i.form.controls.cognome.touched),r(6),l("ngIf",i.form.controls.email.invalid&&i.form.controls.email.touched),r(3),l("options",i.opzioniOggetto),r(3),l("ngIf",i.form.controls.oggetto.invalid&&i.form.controls.oggetto.touched),r(6),l("ngIf",i.form.controls.messaggio.invalid&&i.form.controls.messaggio.touched),r(),W(i.inviato&&!i.errore?68:-1),r(2),S(i.form.valid?"p-button-rounded p-button-raised":"p-button-rounded p-button-outlined"),l("severity","primary")("disabled",!i.form.valid),r(),l("life",1e4)("baseZIndex",1e4))},dependencies:[q,ce,gi,di,ai,ri,ci,ui,mi,_i,pt,Ci,vi,Ii,wi,fi,Fi,Tt,Li,St,Di,Ot,en,gt],styles:["[_nghost-%COMP%]{display:block;margin:2rem auto;max-width:90%}h2[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-style:italic;font-size:2rem}h5[_ngcontent-%COMP%]{text-align:center;font-weight:400;font-size:.9rem;letter-spacing:.05rem;color:var(--p-secondary-500)}.formgrid[_ngcontent-%COMP%]{margin-top:1rem;gap:.75rem 0}[_nghost-%COMP%]     .p-message{margin-top:.25rem}[_nghost-%COMP%]     .p-floatlabel{width:100%}[_nghost-%COMP%]     .p-floatlabel label{font-weight:300;color:#9a9a9a;font-style:italic}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], .p-select[_ngcontent-%COMP%]{font-weight:400;border:1px solid #eee;border-radius:.6rem;width:inherit}[_nghost-%COMP%]     .p-inputtext{width:inherit}[_nghost-%COMP%]     .p-select-dropdown{color:#9a9a9a}input[_ngcontent-%COMP%]{height:3rem}.p-button[_ngcontent-%COMP%]{justify-self:center;padding:.75rem 1.5rem;font-size:1.1rem}.p-button-raised[_ngcontent-%COMP%]{background:var(--p-secondary-500);border-color:var(--p-secondary-500)}.p-button-outlined[_ngcontent-%COMP%]{color:var(--p-secondary-500);border-color:var(--p-secondary-500)}.p-button[_ngcontent-%COMP%]:not(:disabled):active{background:var(--p-secondary-600);border-color:var(--p-secondary-600)}.p-button[_ngcontent-%COMP%]:not(:disabled):hover{background:var(--p-secondary-400);border-color:var(--p-secondary-400)}[_nghost-%COMP%]     .p-toast{z-index:100000;width:90%}[_nghost-%COMP%]     .p-select-list{background:#fff}.card.contatti[_ngcontent-%COMP%]{display:flex;gap:2rem;flex-direction:column;box-shadow:#00000029 0 1px 4px;border-radius:1.5rem;margin:3rem 1rem;padding:1.5rem}.card-item[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center}.card-item.address[_ngcontent-%COMP%], .card-item.email[_ngcontent-%COMP%]{font-size:.9rem}.card-item.social[_ngcontent-%COMP%]{justify-content:space-around}.circle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:50%;height:40px;width:40px}.circle.whatsapp[_ngcontent-%COMP%]{background:#25d366}.circle.email[_ngcontent-%COMP%]{background:var(--p-primary-500)}.circle.map[_ngcontent-%COMP%]{background:var(--p-highlight-500)}"]})};export{tn as ContattiComponent};
