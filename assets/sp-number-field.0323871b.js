var N=Object.defineProperty,V=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var F=(r,t,e)=>t in r?N(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,A=(r,t)=>{for(var e in t||(t={}))K.call(t,e)&&F(r,e,t[e]);if(_)for(var e of _(t))G.call(t,e)&&F(r,e,t[e]);return r},D=(r,t)=>V(r,M(t));import{h as c,i as W,j as Y,t as f,k as X,l as k,m as U,s as J,n as T,I as z,p as B,$ as l,q as p,_ as g,O as Q,x as E,F as j,y as x,S as Z,M as tt,z as P,A as L,B as et}from"./index.5cad1641.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(r){return c(D(A({},r),{state:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=W(class extends Y{constructor(r){if(super(r),r.type!==f.PROPERTY&&r.type!==f.ATTRIBUTE&&r.type!==f.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!X(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[t]){if(t===k||t===U)return t;const e=r.element,o=r.name;if(r.type===f.PROPERTY){if(t===e[o])return k}else if(r.type===f.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(o))return k}else if(r.type===f.ATTRIBUTE&&e.getAttribute(o)===t+"")return k;return J(r),t}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function S(r,t){var e={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(r);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(r,o[s])&&(e[o[s]]=r[o[s]]);return e}function b(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(i=(s<3?a(i):s>3?a(t,e,i):a(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i}const it=()=>T`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"
    />
  </svg>`;class st extends z{render(){return B(l),it()}}customElements.define("sp-icon-chevron75",st);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function v(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(i=(s<3?a(i):s>3?a(t,e,i):a(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function $(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(i=(s<3?a(i):s>3?a(t,e,i):a(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i}function ct(r){class t extends r{renderAnchor({id:o,className:s,ariaHidden:i,labelledby:a,tabindex:n,anchorContent:R=l`<slot></slot>`}){return l`<a
                    id=${o}
                    class=${p(s)}
                    href=${p(this.href)}
                    download=${p(this.download)}
                    target=${p(this.target)}
                    aria-label=${p(this.label)}
                    aria-labelledby=${p(a)}
                    aria-hidden=${p(i?"true":void 0)}
                    tabindex=${p(n)}
                    rel=${p(this.rel)}
                >${R}</a>`}}return g([c({reflect:!0})],t.prototype,"download",void 0),g([c()],t.prototype,"label",void 0),g([c({reflect:!0})],t.prototype,"href",void 0),g([c({reflect:!0})],t.prototype,"target",void 0),g([c({reflect:!0})],t.prototype,"rel",void 0),t}const w=Symbol("slotElementObserver"),O=Symbol("startObserving"),y=Symbol("slotContentIsPresent");function at(r,t){var e;const o=Array.isArray(t)?t:[t];class s extends r{constructor(){super(...arguments);this[e]=new Map,this.managePresenceObservedSlot=()=>{o.forEach(a=>{this[y].set(a,!!this.querySelector(a))}),this.requestUpdate()}}get slotContentIsPresent(){if(o.length===1)return this[y].get(o[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(a){if(this[y].has(a))return this[y].get(a)||!1;throw new Error("The provided selector `` is not being observed.")}[(e=y,O)](){const a={childList:!0,subtree:!0};this[w]||(this[w]=new MutationObserver(this.managePresenceObservedSlot)),this[w].observe(this,a),this.managePresenceObservedSlot()}connectedCallback(){super.connectedCallback(),this[O]()}disconnectedCallback(){this[w].disconnect(),super.disconnectedCallback()}}return s}function nt(r){return typeof window!="undefined"&&window.navigator!=null?r.test(window.navigator.userAgent):!1}function lt(r){return typeof window!="undefined"&&window.navigator!=null?r.test(window.navigator.platform):!1}function dt(){return lt(/^iPhone/)}function ut(){return nt(/Android/)}class q extends ct(Q(at(j,'[slot="icon"]'))){constructor(){super();this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}get focusElement(){return this}get buttonContent(){const t=[l`
                <div id="label" ?hidden=${!this.hasLabel}>
                    <slot
                        id="slot"
                        @slotchange=${this.manageTextObservedSlot}
                    ></slot>
                </div>
            `];return this.hasIcon&&t.unshift(l`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `),t}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if(this.type!=="button"){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return l`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return l`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;switch(e){case"Space":t.preventDefault(),typeof this.href=="undefined"&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0);break}}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":this.click();break}}handleKeyup(t){const{code:e}=t;switch(e){case"Space":this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click();break}}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?(this.getAttribute("role")==="button"&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):((!this.hasAttribute("role")||this.getAttribute("role")==="link")&&this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}}$([c({type:Boolean,reflect:!0})],q.prototype,"active",void 0);$([c({type:String})],q.prototype,"type",void 0);$([E(".anchor")],q.prototype,"anchorElement",void 0);const pt=x`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){max-height:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([variant=black]:not([quiet])[disabled]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-disabled,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet])[disabled][selected]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-disabled-selected,transparent
)}:host([variant=black]:not([quiet])[disabled]:not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-disabled,transparent
)}:host([variant=black]:not([quiet]):not([disabled])){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-default,rgba(0,0,0,.4)
)}:host([variant=black]:not([quiet]):not([disabled]):hover){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-hover,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled])[active]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-down,rgba(0,0,0,.7)
)}:host([variant=black]:not([quiet]):not([disabled]).focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]):focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]).is-keyboardFocused){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-default,transparent
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]):hover){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-hover,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected])[active]){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-down,rgba(0,0,0,.4)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]).focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]):focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]).is-keyboardFocused){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black][quiet][disabled]){border-color:transparent}:host([variant=black][quiet][disabled]:not([selected])){background-color:transparent}:host([variant=black][quiet]:not([disabled])){border-color:transparent}:host([variant=black][quiet]:not([disabled]):not([selected])){background-color:var(
--spectrum-alias-component-background-color-quiet-default,var(--spectrum-alias-background-color-transparent)
)}:host([variant=black][quiet]:not([disabled]):not([selected]):hover){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected])[active]){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=black][quiet]:not([disabled]):not([selected]).focus-visible){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected]):focus-visible){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected]).is-keyboardFocused){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-25))}:host([size][variant=black][disabled][selected]){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-disabled-selected,rgba(0,0,0,.1)
)}:host([size][variant=black][disabled][selected]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host([size][variant=black][disabled][selected]) #label{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host([size][variant=black][disabled][selected]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) #label{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=black][selected]:not([disabled])){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-90))}:host([variant=black][selected]:not([disabled]):hover){background-color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black][selected]:not([disabled])[active]){background-color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black][selected]:not([disabled]).focus-visible){background-color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black][selected]:not([disabled]):focus-visible){background-color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black][selected]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black][selected]:not([disabled])) .hold-affordance{color:inherit}:host([variant=black][selected]:not([disabled])) #label{color:inherit}:host([variant=black][selected]:not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=black]) .hold-affordance{color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=black]:not([disabled]):not([selected])) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-90))}:host([variant=black]:not([disabled]):not([selected]):hover) .hold-affordance{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]):hover) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]):hover) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected])[active]) .hold-affordance{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected])[active]) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected])[active]) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) .hold-affordance{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host([variant=black]:not([disabled]):not([selected])) #label{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-90))}:host([variant=black]:not([disabled]):not([selected])) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-90))}:host([variant=black]) #label{color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=black]) ::slotted([slot=icon]){color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=white]:not([quiet])[disabled]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-disabled,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet])[disabled][selected]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-disabled-selected,transparent
)}:host([variant=white]:not([quiet])[disabled]:not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-disabled,transparent
)}:host([variant=white]:not([quiet]):not([disabled])){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-default,hsla(0,0%,100%,.4)
)}:host([variant=white]:not([quiet]):not([disabled]):hover){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-hover,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled])[active]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-down,hsla(0,0%,100%,.7)
)}:host([variant=white]:not([quiet]):not([disabled]).focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]):focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]).is-keyboardFocused){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-default,transparent
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]):hover){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-hover,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected])[active]){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-down,hsla(0,0%,100%,.4)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]).focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]):focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]).is-keyboardFocused){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white][quiet][disabled]){border-color:transparent}:host([variant=white][quiet][disabled]:not([selected])){background-color:transparent}:host([variant=white][quiet]:not([disabled])){border-color:transparent}:host([variant=white][quiet]:not([disabled]):not([selected])){background-color:var(
--spectrum-alias-component-background-color-quiet-default,var(--spectrum-alias-background-color-transparent)
)}:host([variant=white][quiet]:not([disabled]):not([selected]):hover){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected])[active]){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=white][quiet]:not([disabled]):not([selected]).focus-visible){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected]):focus-visible){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected]).is-keyboardFocused){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-25))}:host([variant=white][disabled][selected]){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-disabled-selected,hsla(0,0%,100%,.1)
)}:host([variant=white][disabled][selected]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled][selected]) #label{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled][selected]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) #label{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host([variant=white][selected]:not([disabled])){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-90))}:host([variant=white][selected]:not([disabled]):hover){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white][selected]:not([disabled])[active]){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white][selected]:not([disabled]).focus-visible){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white][selected]:not([disabled]):focus-visible){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white][selected]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white][selected]:not([disabled])) .hold-affordance{color:inherit}:host([variant=white][selected]:not([disabled])) #label{color:inherit}:host([variant=white][selected]:not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=white]) .hold-affordance{color:var(
--spectrum-ActionButton-static-white-color
)}:host([variant=white]:not([disabled]):not([selected])) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-90))}:host([variant=white]:not([disabled]):not([selected]):hover) .hold-affordance{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]):hover) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]):hover) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected])[active]) .hold-affordance{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected])[active]) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected])[active]) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) .hold-affordance{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=white]:not([disabled]):not([selected])) #label{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-90))}:host([variant=white]:not([disabled]):not([selected])) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-90))}:host([variant=white]) #label{color:var(
--spectrum-ActionButton-static-white-color
)}:host([variant=white]) ::slotted([slot=icon]){color:var(
--spectrum-ActionButton-static-white-color
)}:host([size=s]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-s-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-s-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-s-texticon-padding-left,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-s-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-s-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-s-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-s-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-s-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-s-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-40)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-s-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-40)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-s-textonly-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-s-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-s-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-s-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-s-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-s-textonly-padding-right,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-s-textonly-padding-left,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-s-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-s-icononly-padding-right,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-s-icononly-padding-left,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-global-dimension-size-300
)}:host([size=m]){--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-m-texticon-padding-left
);--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-m-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-m-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-m-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-m-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-m-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-m-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-m-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-m-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-m-textonly-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-m-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-m-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-m-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-m-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-m-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-m-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-m-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-m-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-m-icononly-padding-right,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-m-icononly-padding-left,var(--spectrum-global-dimension-size-85)
)}:host([size=l]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-l-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-l-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-l-texticon-padding-left,var(--spectrum-global-dimension-size-160)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-l-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-l-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-l-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-l-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-l-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-l-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-65)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-l-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-l-textonly-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-l-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-l-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-l-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-l-textonly-height,var(--spectrum-global-dimension-size-500)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-l-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-l-textonly-padding-right,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-l-textonly-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-l-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-l-icononly-padding-right,var(--spectrum-global-dimension-size-125)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-l-icononly-padding-left,var(--spectrum-global-dimension-size-125)
)}:host([size=xl]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-xl-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-xl-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-xl-texticon-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-xl-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-xl-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-xl-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-xl-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-xl-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-xl-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-75)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-xl-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-75)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-xl-textonly-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-xl-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-xl-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-xl-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-xl-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-xl-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-xl-textonly-padding-right,var(--spectrum-global-dimension-size-225)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-xl-textonly-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-xl-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-xl-icononly-padding-right,var(--spectrum-global-dimension-size-160)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-xl-icononly-padding-left,var(--spectrum-global-dimension-size-160)
)}:host{--spectrum-actionbutton-padding-left-adjusted:calc(var(--spectrum-actionbutton-texticon-padding-left) - var(--spectrum-actionbutton-texticon-border-size));--spectrum-actionbutton-textonly-padding-left-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-left) - var(--spectrum-actionbutton-textonly-border-size));--spectrum-actionbutton-textonly-padding-right-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-right) - var(--spectrum-actionbutton-textonly-border-size));--spectrum-actionbutton-icononly-padding-left-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-left) - var(--spectrum-actionbutton-icononly-border-size));--spectrum-actionbutton-icononly-padding-right-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-right) - var(--spectrum-actionbutton-icononly-border-size));--spectrum-actionbutton-focus-ring-border-radius-adjusted:calc(var(--spectrum-actionbutton-quiet-textonly-border-radius) + var(--spectrum-actionbutton-focus-ring-gap))}:host([dir=ltr]){padding-left:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
);padding-right:var(--spectrum-actionbutton-textonly-padding-right-adjusted)}:host([dir=rtl]){padding-left:var(--spectrum-actionbutton-textonly-padding-right-adjusted);padding-right:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
)}:host{border-radius:var(--spectrum-actionbutton-textonly-border-radius);border-width:var(--spectrum-actionbutton-textonly-border-size);color:inherit;font-size:var(--spectrum-actionbutton-textonly-text-size);font-weight:var(--spectrum-actionbutton-textonly-text-font-weight);height:var(--spectrum-actionbutton-textonly-height);line-height:var(--spectrum-actionbutton-textonly-text-line-height);min-width:var(--spectrum-actionbutton-textonly-min-width);position:relative}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-actionbutton-texticon-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-actionbutton-texticon-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}.hold-affordance+::slotted([slot=icon]),:host([dir]) slot[icon-only] sp-icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted))*-1);margin-right:calc((var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted))*-1)}#label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .hold-affordance{right:var(
--spectrum-actionbutton-textonly-hold-icon-padding-right
)}:host([dir=rtl]) .hold-affordance{left:var(
--spectrum-actionbutton-textonly-hold-icon-padding-right
)}:host([dir=rtl]) .hold-affordance{transform:matrix(-1,0,0,1,0,0)}.hold-affordance{bottom:var(--spectrum-actionbutton-textonly-hold-icon-padding-bottom);position:absolute}:host([quiet]){border-radius:var(--spectrum-actionbutton-quiet-textonly-border-radius);border-width:var(
--spectrum-actionbutton-quiet-textonly-border-size
);font-size:var(--spectrum-actionbutton-quiet-textonly-text-size);font-weight:var(--spectrum-actionbutton-quiet-textonly-text-font-weight)}:host{--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap,var(--spectrum-global-dimension-static-size-0)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size,var(--spectrum-global-dimension-static-size-10)
);--spectrum-actionbutton-focus-ring-color:var(
--spectrum-actionbutton-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host:after{border-radius:var(
--spectrum-actionbutton-focus-ring-border-radius-adjusted
);bottom:0;content:"";left:0;margin:calc((var(--spectrum-actionbutton-focus-ring-gap) + var(--spectrum-actionbutton-textonly-border-size))*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(.focus-visible){box-shadow:none!important}:host(:focus-visible){box-shadow:none!important}:host(.focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-ring-size) var(--spectrum-actionbutton-focus-ring-color)}:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-ring-size) var(--spectrum-actionbutton-focus-ring-color)}:host([variant=white]){--spectrum-actionbutton-focus-ring-color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=black]){--spectrum-actionbutton-focus-ring-color:var(
--spectrum-global-color-static-black,#000
)}:host([emphasized][selected]),:host([variant=black]),:host([variant=white]){--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size-emphasized,var(--spectrum-global-dimension-static-size-25)
)}:host{background-color:var(
--spectrum-actionbutton-m-textonly-background-color,var(--spectrum-alias-component-background-color-default)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color,var(--spectrum-alias-component-border-color-default)
);color:var(
--spectrum-actionbutton-m-textonly-text-color,var(--spectrum-alias-component-text-color-default)
)}::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}.hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host(:hover){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-hover,var(--spectrum-alias-component-background-color-hover)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-hover,var(--spectrum-alias-component-border-color-hover)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}:host(:hover) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}:host(.focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host(:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(.focus-visible) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(:focus-visible) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([active]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-down,var(--spectrum-alias-component-background-color-down)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-down,var(--spectrum-alias-component-border-color-down)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([active]) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host([disabled]),:host([disabled]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([disabled]) ::slotted([slot=icon]),:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([disabled]) .hold-affordance,:host([disabled]) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([selected]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected,var(--spectrum-alias-component-border-color-selected-default)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-key-focus,var(--spectrum-alias-component-background-color-selected-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-key-focus,var(--spectrum-alias-component-background-color-selected-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([selected].focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([selected]:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:hover){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-hover,var(--spectrum-alias-component-background-color-selected-hover)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-selected-hover)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-selected-hover)
)}:host([selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-hover,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected][active]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-down,var(--spectrum-alias-component-background-color-selected-down)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-selected-down)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-selected-down)
)}:host([selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-down,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected][disabled]),:host([selected][disabled]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([selected][disabled]) ::slotted([slot=icon]),:host([selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([emphasized][quiet][selected]),:host([emphasized][selected]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected,var(
--spectrum-alias-component-background-color-emphasized-selected-default
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected,var(--spectrum-alias-component-border-color-emphasized-selected-default)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected,var(--spectrum-alias-component-text-color-emphasized-selected-default)
)}:host([emphasized][quiet][selected]) ::slotted([slot=icon]),:host([emphasized][selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-emphasized-selected-default)
)}:host([emphasized][quiet][selected].focus-visible),:host([emphasized][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-emphasized-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus,var(
--spectrum-alias-component-border-color-emphasized-selected-key-focus
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:focus-visible),:host([emphasized][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-emphasized-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus,var(
--spectrum-alias-component-border-color-emphasized-selected-key-focus
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:focus-visible) ::slotted([slot=icon]),:host([emphasized][selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:hover),:host([emphasized][selected]:hover){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover,var(
--spectrum-alias-component-background-color-emphasized-selected-hover
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-emphasized-selected-hover)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-emphasized-selected-hover)
)}:host([emphasized][quiet][selected]:hover) ::slotted([slot=icon]),:host([emphasized][selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-hover,var(--spectrum-alias-component-icon-color-emphasized-selected-hover)
)}:host([emphasized][quiet][selected][active]),:host([emphasized][selected][active]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down,var(
--spectrum-alias-component-background-color-emphasized-selected-down
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-emphasized-selected-down)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-emphasized-selected-down)
)}:host([emphasized][quiet][selected][active]) ::slotted([slot=icon]),:host([emphasized][selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-down,var(--spectrum-alias-component-icon-color-emphasized-selected-down)
)}:host([emphasized][quiet][selected][disabled]),:host([emphasized][quiet][selected][disabled]),:host([emphasized][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([quiet]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color,var(--spectrum-alias-component-background-color-quiet-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color,var(--spectrum-alias-component-border-color-quiet-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([quiet]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-hover,var(--spectrum-alias-component-background-color-quiet-hover)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-hover,var(--spectrum-alias-component-border-color-quiet-hover)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([quiet].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-quiet-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([quiet]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-quiet-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([quiet][active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-down,var(--spectrum-alias-component-background-color-quiet-down)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-down,var(--spectrum-alias-component-border-color-quiet-down)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([quiet][disabled]),:host([quiet][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-disabled,var(--spectrum-alias-component-background-color-quiet-disabled)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([quiet][selected]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected,var(--spectrum-alias-component-border-color-quiet-selected-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([quiet][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-quiet-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-quiet-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([quiet][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-quiet-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-quiet-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([quiet][selected]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-hover,var(--spectrum-alias-component-background-color-quiet-selected-hover)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-quiet-selected-hover)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-selected-hover)
)}:host([quiet][selected][active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-down,var(--spectrum-alias-component-background-color-quiet-selected-down)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-quiet-selected-down)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-selected-down)
)}:host([quiet][selected][disabled]),:host([quiet][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-quiet-selected-disabled)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([variant=black]),:host([variant=white]){--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-ActionButton-static-black-color:var(
--spectrum-global-color-static-black,#000
);--spectrum-ActionButton-static-white-color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=black][selected]),:host([variant=white][selected]){color:inherit!important}@media (forced-colors:active){:host{--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-textonly-background-color:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-down:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-hover:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-down:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-hover:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-text-color-down:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-hover:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-texticon-icon-color:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-disabled:GrayText;--spectrum-actionbutton-m-texticon-icon-color-hover:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-key-focus:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-selected:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-disabled:GrayText;--spectrum-actionbutton-m-texticon-icon-color-selected-down:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-hover:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-textonly-background-color:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-down:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-hover:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-textonly-border-color:ButtonText;--spectrum-actionbutton-m-textonly-border-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-border-color-down:ButtonText;--spectrum-actionbutton-m-textonly-border-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-border-color-key-focus:Highlight;--spectrum-actionbutton-m-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-textonly-hold-icon-color:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-hold-icon-color-down:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus:ButtonText;--spectrum-actionbutton-m-textonly-text-color:ButtonText;--spectrum-actionbutton-m-textonly-text-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-text-color-down:ButtonText;--spectrum-actionbutton-m-textonly-text-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-key-focus:HighlightText;forced-color-adjust:none}:host([quiet][emphasized]:not([disabled]):hover){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover,var(
--spectrum-alias-component-background-color-emphasized-selected-hover
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover,var(
--spectrum-alias-component-border-color-emphasized-selected-hover
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-emphasized-selected-hover)
)}:host([quiet][emphasized]:not([disabled])[active]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down,var(
--spectrum-alias-component-background-color-emphasized-selected-down
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down,var(
--spectrum-alias-component-border-color-emphasized-selected-down
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-emphasized-selected-down)
)}}:host{display:inline-flex;flex-direction:row}:host:after{border-radius:var(
--spectrum-actionbutton-after-border-radius,calc(var(--spectrum-actionbutton-quiet-textonly-border-radius) + var(--spectrum-actionbutton-focus-ring-gap))
)}:host([disabled]){cursor:auto;pointer-events:none}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{inset:0;position:absolute}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([emphasized][quiet][selected]:not([disabled])) .hold-affordance,:host([emphasized][selected]:not([disabled])) .hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-emphasized-selected-default)
)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;var mt=pt;const bt=x`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;var ht=bt;const vt=()=>T`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`;class ft extends z{render(){return B(l),vt()}}customElements.define("sp-icon-corner-triangle300",ft);const xt={s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"},gt=300;let H;class h extends Z(q){constructor(){super();this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.role="button",this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{if(!this.toggles)return;this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected)},this.addEventListener("click",this.onClick),this.addEventListener("pointerdown",this.onPointerdown)}static get styles(){return[mt,ht]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}onPointerdown(){this.addEventListener("pointerup",this.onPointerup),this.addEventListener("pointercancel",this.onPointerup),H=setTimeout(()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))},gt)}onPointerup(){clearTimeout(H),this.removeEventListener("pointerup",this.onPointerup),this.removeEventListener("pointercancel",this.onPointerup)}handleKeydown(t){if(!this.holdAffordance)return super.handleKeydown(t);const{code:e,altKey:o}=t;(e==="Space"||o&&e==="ArrowDown")&&(t.preventDefault(),e==="ArrowDown"&&(t.stopPropagation(),t.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(t){if(!this.holdAffordance)return super.handleKeyup(t);const{code:e,altKey:o}=t;(e==="Space"||o&&e==="ArrowDown")&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const t=super.buttonContent;return this.holdAffordance&&t.unshift(l`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${xt[this.size]}"
                ></sp-icon-corner-triangle300>
            `),t}updated(t){super.updated(t);const o=this.role==="button"&&(this.selected||this.toggles);(t.has("selected")||t.has("role"))&&(o?this.setAttribute("aria-pressed",this.selected?"true":"false"):this.removeAttribute("aria-pressed"))}}v([c({type:Boolean,reflect:!0})],h.prototype,"emphasized",void 0);v([c({type:Boolean,reflect:!0,attribute:"hold-affordance"})],h.prototype,"holdAffordance",void 0);v([c({type:Boolean,reflect:!0})],h.prototype,"quiet",void 0);v([c({reflect:!0})],h.prototype,"role",void 0);v([c({type:Boolean,reflect:!0})],h.prototype,"selected",void 0);v([c({type:Boolean,reflect:!0})],h.prototype,"toggles",void 0);v([c({reflect:!0})],h.prototype,"variant",void 0);v([c({type:String})],h.prototype,"value",null);customElements.define("sp-action-button",h);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function u(r,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,o);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(i=(s<3?a(i):s>3?a(t,e,i):a(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i}const yt=()=>T`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`;class kt extends z{render(){return B(l),yt()}}customElements.define("sp-icon-checkmark100",kt);let C;const wt=function(r,...t){return C?C(r,...t):t.reduce((e,o,s)=>e+o+r[s+1],r[0])},zt=r=>{C=r},qt=({width:r=24,height:t=24,hidden:e=!1,title:o="Alert"}={})=>wt`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${r}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M17.127 2.579L.4 32.512A1 1 0 001.272 34h33.456a1 1 0 00.872-1.488L18.873 2.579a1 1 0 00-1.746 0zM20 29.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
    />
  </svg>`;class It extends z{render(){return zt(l),qt({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-alert",It);const Ut=x`
:host{--spectrum-textfield-texticon-padding-left:var(
--spectrum-textfield-m-texticon-padding-left
);--spectrum-textfield-quiet-texticon-border-bottom-size:var(
--spectrum-textfield-m-quiet-texticon-border-bottom-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-quiet-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-border-radius:var(
--spectrum-textfield-m-quiet-texticon-border-radius,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-left:var(
--spectrum-textfield-m-quiet-texticon-padding-left,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-right:var(
--spectrum-textfield-m-quiet-texticon-padding-right,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-texticon-border-size:var(
--spectrum-textfield-m-texticon-border-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-texticon-text-line-height:var(
--spectrum-textfield-m-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-textfield-texticon-text-size:var(
--spectrum-textfield-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-textfield-texticon-placeholder-text-font-style:var(
--spectrum-textfield-m-texticon-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-textfield-texticon-placeholder-text-font-weight:var(
--spectrum-textfield-m-texticon-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-textfield-texticon-success-icon-height:var(
--spectrum-textfield-m-texticon-success-icon-height,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-width:var(
--spectrum-textfield-m-texticon-success-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-invalid-icon-height:var(
--spectrum-textfield-m-texticon-invalid-icon-height,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-width:var(
--spectrum-textfield-m-texticon-invalid-icon-width,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-min-width:var(
--spectrum-textfield-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-textfield-texticon-border-radius:var(
--spectrum-textfield-m-texticon-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-textfield-texticon-padding-right:var(
--spectrum-textfield-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-height:var(
--spectrum-textfield-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textarea-text-padding-top:var(
--spectrum-textarea-m-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-textarea-text-padding-bottom:var(
--spectrum-textarea-m-text-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-textarea-padding-left:var(
--spectrum-textarea-m-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-padding-right:var(
--spectrum-textarea-m-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-height:var(
--spectrum-textarea-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textfield-texticon-padding-top:3px;--spectrum-textfield-texticon-padding-bottom:5px;--spectrum-textfield-texticon-text-font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);--spectrum-textfield-texticon-icon-gap:var(
--spectrum-global-dimension-size-65
);--spectrum-textfield-quiet-texticon-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-textarea-min-height:var(--spectrum-textarea-height);--spectrum-textarea-height-adjusted:auto;--spectrum-textarea-padding-top:var(--spectrum-textarea-text-padding-top);--spectrum-textarea-padding-bottom:var(
--spectrum-textarea-text-padding-bottom
)}#textfield{display:inline-flex;min-width:var(--spectrum-textfield-texticon-min-width);position:relative;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([quiet][multiline]) #textfield .input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:after{border-color:transparent;border-radius:calc(var(--spectrum-textfield-texticon-border-radius) + var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
));bottom:0;content:"";left:0;margin:calc(var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([quiet]) #textfield:after{border-radius:0}.input{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);height:var(--spectrum-textfield-texticon-height);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;padding:var(--spectrum-textfield-texticon-padding-top) var(--spectrum-textfield-texticon-padding-right) var(--spectrum-textfield-texticon-padding-bottom) calc(var(--spectrum-textfield-texticon-padding-left) + 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;width:100%}.input::placeholder{font-style:var(--spectrum-textfield-texticon-placeholder-text-font-style);font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
);opacity:1;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}.input:hover::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input:disabled{opacity:1;resize:none}.input:disabled::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input::-ms-clear{height:0;width:0}.input::-webkit-inner-spin-button,.input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}:host([dir=ltr][valid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=rtl][valid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=ltr][invalid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([dir=rtl][invalid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([multiline]) .input{height:var(
--spectrum-textarea-height-adjusted
);min-height:var(--spectrum-textarea-min-height);overflow:auto;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px)}:host([dir=ltr][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=rtl][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=ltr][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([dir=rtl][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([quiet]) .input{border-bottom-width:var(
--spectrum-textfield-quiet-texticon-border-bottom-size
);border-left-width:0;border-radius:var(
--spectrum-textfield-quiet-texticon-border-radius
);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}:host([dir=ltr][invalid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=rtl][invalid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=ltr][valid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}:host([dir=rtl][valid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}.icon{pointer-events:all;position:absolute}:host([dir=ltr][quiet]) .icon{padding-right:0}:host([dir=rtl][quiet]) .icon{padding-left:0}:host([dir=ltr][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([dir=rtl][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([invalid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-invalid-icon-height)/2);height:var(--spectrum-textfield-texticon-invalid-icon-height);width:var(
--spectrum-textfield-texticon-invalid-icon-width
)}:host([dir=ltr][quiet][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([dir=rtl][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([valid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-success-icon-height)/2);height:var(--spectrum-textfield-texticon-success-icon-height);width:var(
--spectrum-textfield-texticon-success-icon-width
)}:host([dir=ltr][quiet][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr]) .icon-workflow{left:var(
--spectrum-textfield-texticon-padding-left
)}:host([dir=rtl]) .icon-workflow{right:var(
--spectrum-textfield-texticon-padding-left
)}.icon-workflow{display:block;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);position:absolute;top:calc(var(--spectrum-textfield-texticon-height)/2 - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
)/2);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr][quiet]) .icon-workflow{left:0}:host([dir=rtl][quiet]) .icon-workflow{right:0}:host([dir=ltr][quiet]) .icon-workflow~.input{padding-left:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=rtl][quiet]) .icon-workflow~.input{padding-right:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=ltr]) .icon-workflow+.input{padding-left:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([dir=rtl]) .icon-workflow+.input{padding-right:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([multiline]) .icon-workflow~.input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
);box-shadow:none}#textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#textfield:hover .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#textfield:active .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}#textfield:active .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host([valid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-valid,var(--spectrum-semantic-positive-icon-color)
)}:host([invalid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-hover,var(--spectrum-alias-input-border-color-invalid-hover)
)}:host([disabled]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid-disabled,var(--spectrum-alias-background-color-transparent)
)}:host([disabled]) #textfield .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}.icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host([focused]) #textfield:after{box-shadow:0 0 0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host([focused][quiet]) #textfield .input{box-shadow:none}:host([focused][quiet]) #textfield:after{border-bottom:2px solid var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);bottom:calc(var(
--spectrum-alias-input-quiet-focusline-gap,
var(--spectrum-global-dimension-static-size-10)
)*-1);box-shadow:none;margin:0}.input{background-color:var(
--spectrum-textfield-m-texticon-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
);color:var(
--spectrum-textfield-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}.input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color,var(--spectrum-global-color-gray-600)
)}.input:focus,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}.input.focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}.input:focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}.input :disabled,:host([disabled]) #textfield .input,:host([disabled]) #textfield:hover .input{-webkit-text-fill-color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);background-color:var(
--spectrum-textfield-m-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
);color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}.input :disabled::placeholder,:host([disabled]) #textfield .input::placeholder,:host([disabled]) #textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([quiet]) .input{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid][quiet]) #textfield .input{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host{display:inline-flex;flex-direction:column;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([multiline]){resize:both}#textfield{width:100%}#textfield,textarea{resize:inherit}.input{caret-color:var(--swc-test-caret-color);min-width:var(--spectrum-textfield-texticon-min-width)}:host([grows]) .input{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0}:host([grows]) #sizer{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;overflow-wrap:break-word;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;white-space:pre-wrap;width:100%;word-break:break-word}:host([grows][quiet]) #sizer{border-bottom-width:var(--spectrum-textfield-quiet-texticon-border-size);border-left-width:0;border-radius:var(--spectrum-textfield-quiet-texticon-border-radius);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([multiline][focused]:not([quiet])) textarea,:host([multiline][focused]:not([quiet]):hover) textarea{box-shadow:0 0 0 calc(var(
--spectrum-textfield-m-texticon-focus-ring-border-width,
var(--spectrum-alias-component-focusring-size)
)) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)!important}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}
`;var Ct=Ut;const Tt=x`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(
--spectrum-alias-ui-icon-checkmark-size-50
)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(
--spectrum-alias-ui-icon-checkmark-size-75
)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(
--spectrum-alias-ui-icon-checkmark-size-100
)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(
--spectrum-alias-ui-icon-checkmark-size-200
)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(
--spectrum-alias-ui-icon-checkmark-size-300
)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(
--spectrum-alias-ui-icon-checkmark-size-400
)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(
--spectrum-alias-ui-icon-checkmark-size-500
)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(
--spectrum-alias-ui-icon-checkmark-size-600
)}
`;var Bt=Tt;const Et=["text","url","tel","email","password"];class d extends tt(j){constructor(){super(...arguments);this.allowedKeys="",this.focused=!1,this.invalid=!1,this.label="",this.placeholder="",this._type="text",this.grows=!1,this.maxlength=-1,this.minlength=-1,this.multiline=!1,this.readonly=!1,this.valid=!1,this._value="",this.quiet=!1,this.required=!1}static get styles(){return[Ct,Bt]}get type(){var t;return(t=Et.find(e=>e===this._type))!==null&&t!==void 0?t:"text"}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}get focusElement(){return this.inputElement}setSelectionRange(t,e,o="none"){this.inputElement.setSelectionRange(t,e,o)}select(){this.inputElement.select()}handleInput(){if(this.allowedKeys&&this.inputElement.value&&!new RegExp(`^[${this.allowedKeys}]*$`,"u").test(this.inputElement.value)){const o=this.inputElement.selectionStart-1;this.inputElement.value=this.value.toString(),this.inputElement.setSelectionRange(o,o);return}this.value=this.inputElement.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onFocus(){this.focused=!0}onBlur(){this.focused=!1}renderStateIcons(){return this.invalid?l`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            `:this.valid?l`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            `:U}get displayValue(){return this.value.toString()}get renderMultiline(){return l`
            ${this.grows&&!this.quiet?l`
                      <div id="sizer">${this.value}&#8203;</div>
                  `:U}
            <!-- @ts-ignore -->
            <textarea
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${p(this.invalid||void 0)}
                class="input"
                maxlength=${p(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${p(this.minlength>-1?this.minlength:void 0)}
                pattern=${p(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${p(this.autocomplete)}
            ></textarea>
        `}get renderInput(){return l`
            <!-- @ts-ignore -->
            <input
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${p(this.invalid||void 0)}
                class="input"
                maxlength=${p(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${p(this.minlength>-1?this.minlength:void 0)}
                pattern=${p(this.pattern)}
                placeholder=${this.placeholder}
                .value=${rt(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${p(this.autocomplete)}
            />
        `}renderField(){return l`
            ${this.renderStateIcons()}
            ${this.multiline?this.renderMultiline:this.renderInput}
        `}render(){return l`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `}updated(t){(t.has("value")||t.has("required")&&this.required)&&this.checkValidity()}checkValidity(){let t=this.inputElement.checkValidity();return(this.required||this.value&&this.pattern)&&((this.disabled||this.multiline)&&this.pattern&&(t=new RegExp(`^${this.pattern}$`,"u").test(this.value.toString())),typeof this.minlength!="undefined"&&(t=t&&this.value.toString().length>this.minlength),this.valid=t,this.invalid=!t),t}}u([c({attribute:"allowed-keys"})],d.prototype,"allowedKeys",void 0);u([c({type:Boolean,reflect:!0})],d.prototype,"focused",void 0);u([E(".input")],d.prototype,"inputElement",void 0);u([c({type:Boolean,reflect:!0})],d.prototype,"invalid",void 0);u([c()],d.prototype,"label",void 0);u([c()],d.prototype,"placeholder",void 0);u([c({attribute:"type",reflect:!0})],d.prototype,"_type",void 0);u([ot()],d.prototype,"type",null);u([c()],d.prototype,"pattern",void 0);u([c({type:Boolean,reflect:!0})],d.prototype,"grows",void 0);u([c({type:Number})],d.prototype,"maxlength",void 0);u([c({type:Number})],d.prototype,"minlength",void 0);u([c({type:Boolean,reflect:!0})],d.prototype,"multiline",void 0);u([c({type:Boolean,reflect:!0})],d.prototype,"readonly",void 0);u([c({type:Boolean,reflect:!0})],d.prototype,"valid",void 0);u([c({type:String})],d.prototype,"value",null);u([c({type:Boolean,reflect:!0})],d.prototype,"quiet",void 0);u([c({type:Boolean,reflect:!0})],d.prototype,"required",void 0);u([c({type:String,reflect:!0})],d.prototype,"autocomplete",void 0);class $t extends d{constructor(){super(...arguments);this._value=""}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}}u([c({type:String})],$t.prototype,"value",null);const _t=x`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronDown75{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500,.spectrum-UIIcon-ChevronUp75{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(
--spectrum-alias-ui-icon-chevron-size-75
)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(
--spectrum-alias-ui-icon-chevron-size-100
)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(
--spectrum-alias-ui-icon-chevron-size-200
)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(
--spectrum-alias-ui-icon-chevron-size-300
)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(
--spectrum-alias-ui-icon-chevron-size-400
)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(
--spectrum-alias-ui-icon-chevron-size-500
)}
`;var Ft=_t;const At=x`
:host{--spectrum-stepper-width:var(
--spectrum-global-dimension-size-900
);--spectrum-stepper-border-size:var(
--spectrum-alias-border-size-thin,var(--spectrum-global-dimension-static-size-10)
);--spectrum-stepper-button-height:calc(var(
--spectrum-alias-single-line-height,
var(--spectrum-global-dimension-size-400)
)/2);--spectrum-stepper-button-width:calc(var(--spectrum-global-dimension-size-300) - var(--spectrum-stepper-border-size));--spectrum-stepper-button-padding:calc(var(--spectrum-global-dimension-size-150)/2);--spectrum-stepper-border-radius-reset:0;--spectrum-stepper-border-size-reset:0;--spectrum-stepper-icon-nudge-top:var(--spectrum-global-dimension-size-10);--spectrum-stepper-icon-nudge:var(--spectrum-global-dimension-size-25);--spectrum-stepper-quiet-width:var(--spectrum-global-dimension-size-600);--spectrum-stepper-button-offset:calc(var(--spectrum-stepper-button-width)/2 - var(--spectrum-alias-ui-icon-chevron-size-75)/2);--spectrum-stepper-quiet-button-width:calc(var(--spectrum-stepper-button-width) - var(--spectrum-stepper-button-offset))}#textfield{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
);display:inline-flex;flex-direction:row;flex-wrap:nowrap;line-height:0;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-stepper-width)}#textfield:before{content:""}:host([dir=ltr]) .buttons{border-top-left-radius:0}:host([dir=rtl]) .buttons{border-top-right-radius:0}:host([dir=ltr]) .buttons{border-top-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-top-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-bottom-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-left-radius:0}:host([dir=rtl]) .buttons{border-bottom-right-radius:0}.buttons{display:block;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown,.stepUp{border-width:var(--spectrum-stepper-border-size);box-sizing:border-box;display:flex;height:var(--spectrum-stepper-button-height);margin:0!important;min-width:0;position:relative;width:var(--spectrum-stepper-button-width)}.stepDown .stepper-icon,.stepUp .stepper-icon{margin:0!important;opacity:1}:host([dir=ltr]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepUp{border-bottom:none;padding-top:var(--spectrum-stepper-icon-nudge-top)}:host([dir=ltr]) .stepDown{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown{padding-bottom:var(
--spectrum-stepper-icon-nudge
)}.textfield{flex:1;width:auto}:host([dir=ltr]) .input{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .input{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.input,.textfield{min-width:0}:host([quiet]) #textfield{border-radius:var(
--spectrum-stepper-border-radius-reset
);width:var(--spectrum-stepper-quiet-width)}:host([quiet]) .buttons{border-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-left:none}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-right:none}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{padding-right:0}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{padding-left:0}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-radius:var(--spectrum-stepper-border-radius-reset);border-top:none;justify-content:flex-end;min-width:0;width:var(
--spectrum-stepper-quiet-button-width
)}:host([dir=ltr][quiet]) .stepDown:after,:host([dir=ltr][quiet]) .stepUp:after{right:calc(var(--spectrum-stepper-button-offset)*-1)}:host([dir=rtl][quiet]) .stepDown:after,:host([dir=rtl][quiet]) .stepUp:after{left:calc(var(--spectrum-stepper-button-offset)*-1)}:host([quiet]) .stepDown:after,:host([quiet]) .stepUp:after{content:"";height:100%;position:absolute;width:var(--spectrum-stepper-button-offset)}:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .input,:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .stepDown,:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
)}:host([focused]) #textfield{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused]) #textfield .stepDown,:host([focused]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
);box-shadow:none}:host([focused][invalid]) #textfield{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .stepDown,:host([focused][invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([keyboard-focused]) #textfield{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .input,:host([keyboard-focused]) #textfield .stepDown,:host([keyboard-focused]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused][invalid]) #textfield{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([keyboard-focused][invalid]) #textfield .stepDown,:host([keyboard-focused][invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([keyboard-focused][invalid]) #textfield .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([invalid]) #textfield .stepDown,:host([invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([invalid][keyboard-focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([invalid][keyboard-focused]) #textfield .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled]) #textfield .stepDown,:host([disabled]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
)}.stepDown,.stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}.stepDown:disabled,.stepUp:disabled{border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
)}:host([quiet][disabled]) #textfield .stepDown,:host([quiet][disabled]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([quiet]) .stepDown:disabled,:host([quiet]) .stepUp:disabled{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([quiet]) .input{box-shadow:none}:host([quiet][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][invalid]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused]) #textfield,:host([quiet][keyboard-focused]) #textfield{box-shadow:none}:host([quiet][focused]) #textfield .buttons,:host([quiet][focused]) #textfield .input,:host([quiet][keyboard-focused]) #textfield .buttons,:host([quiet][keyboard-focused]) #textfield .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([quiet][focused]) #textfield .stepDown,:host([quiet][keyboard-focused]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([quiet][focused][invalid]) #textfield,:host([quiet][keyboard-focused][invalid]) #textfield{box-shadow:none}:host([quiet][focused][invalid]) #textfield .buttons,:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .buttons,:host([quiet][keyboard-focused][invalid]) #textfield .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused][invalid]) #textfield .stepDown,:host([quiet][keyboard-focused][invalid]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host{width:var(--spectrum-stepper-width)}#textfield{width:100%}sp-field-button{--spectrum-dropdown-height:100%;--spectrum-dropdown-padding-x:0}.input{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}:host([readonly]) .buttons{pointer-events:none}:host([hide-stepper]:not([quiet])) .input{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr][invalid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][invalid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][valid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][valid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet][invalid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][invalid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr][quiet][valid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][valid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr]:not([hide-stepper])) .icon-workflow{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl]:not([hide-stepper])) .icon-workflow{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet]:not([hide-stepper])) .icon-workflow{left:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet]:not([hide-stepper])) .icon-workflow{right:var(--spectrum-stepper-button-width)}
`;var Dt=At;const Pt=5,I="-",Lt={"\uFF11":"1","\uFF12":"2","\uFF13":"3","\uFF14":"4","\uFF15":"5","\uFF16":"6","\uFF17":"7","\uFF18":"8","\uFF19":"9","\uFF10":"0","\u3001":",","\uFF0C":",","\u3002":".","\uFF0E":".","\uFF05":"%","\uFF0B":"+",\u30FC:"-"};class m extends d{constructor(){super(...arguments);this.focused=!1,this._forcedUnit="",this.formatOptions={},this.hideStepper=!1,this.indeterminate=!1,this.keyboardFocused=!1,this.resolvedLanguage=document.documentElement.lang||navigator.language,this.stepperActive=!1,this.stepModifier=10,this._value=NaN,this._trackingValue="",this.changeCount=0,this.wasIndeterminate=!1}static get styles(){return[...super.styles,Dt,Ft]}set value(t){const e=this.validateInput(t);if(e===this.value)return;const o=this._value;this._value=e,this.requestUpdate("value",o)}get value(){return this._value}get inputValue(){return this.indeterminate?this.formattedValue:this.inputElement.value}get valueAsString(){return this._value.toString()}set valueAsString(t){this.value=this.numberParser.parse(t)}get formattedValue(){return isNaN(this.value)?"":this.numberFormatter.format(this.value)+(this.focused?"":this._forcedUnit)}convertValueToNumber(t){return this.numberParser.parse(t)}get _step(){var t;return typeof this.step!="undefined"?this.step:((t=this.formatOptions)===null||t===void 0?void 0:t.style)==="percent"?.01:1}handlePointerdown(t){if(t.button!==0){t.preventDefault();return}this.stepperActive=!0,this.buttons.setPointerCapture(t.pointerId);const e=this.buttons.children[0].getBoundingClientRect(),o=this.buttons.children[1].getBoundingClientRect();this.findChange=s=>{s.clientX>=e.x&&s.clientY>=e.y&&s.clientX<=e.x+e.width&&s.clientY<=e.y+e.height?this.change=i=>this.increment(i.shiftKey?this.stepModifier:1):s.clientX>=o.x&&s.clientY>=o.y&&s.clientX<=o.x+o.width&&s.clientY<=o.y+o.height&&(this.change=i=>this.decrement(i.shiftKey?this.stepModifier:1))},this.findChange(t),this.startChange(t)}startChange(t){this.changeCount=0,this.doChange(t),this.safty=setTimeout(()=>{this.doNextChange(t)},400)}doChange(t){this.change(t)}handlePointermove(t){this.findChange(t)}handlePointerup(t){this.buttons.releasePointerCapture(t.pointerId),cancelAnimationFrame(this.nextChange),clearTimeout(this.safty),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.stepperActive=!1}doNextChange(t){return this.changeCount+=1,this.changeCount%Pt===0&&this.doChange(t),requestAnimationFrame(()=>{this.nextChange=this.doNextChange(t)})}stepBy(t){if(this.disabled||this.readonly)return;const e=typeof this.min!="undefined"?this.min:0;let o=this.value;o+=t*this._step,isNaN(this.value)?this.value=e:this.value=o,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.indeterminate=!1,this.focus()}increment(t=1){this.stepBy(1*t)}decrement(t=1){this.stepBy(-1*t)}handleKeydown(t){switch(t.code){case"ArrowUp":t.preventDefault(),this.increment(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));break;case"ArrowDown":t.preventDefault(),this.decrement(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));break}}onScroll(t){t.preventDefault();const e=t.shiftKey?t.deltaX/Math.abs(t.deltaX):t.deltaY/Math.abs(t.deltaY);e!==0&&!isNaN(e)&&this.stepBy(e*(t.shiftKey?this.stepModifier:1))}onFocus(){super.onFocus(),this._trackingValue=this.inputValue,this.keyboardFocused=!0,this.addEventListener("wheel",this.onScroll)}onBlur(){super.onBlur(),this.keyboardFocused=!1,this.removeEventListener("wheel",this.onScroll)}handleFocusin(){this.focused=!0,this.keyboardFocused=!0}handleFocusout(){this.focused=!1,this.keyboardFocused=!1}handleChange(){const t=this.convertValueToNumber(this.inputValue);if(this.wasIndeterminate&&(this.wasIndeterminate=!1,this.indeterminateValue=void 0,isNaN(t))){this.indeterminate=!0;return}this.value=t,super.handleChange()}handleInput(){this.indeterminate&&(this.wasIndeterminate=!0,this.indeterminateValue=this.value,this.inputElement.value=this.inputElement.value.replace(I,""));const{value:t,selectionStart:e}=this.inputElement,o=t.split("").map(n=>Lt[n]||n).join("");if(this.numberParser.isValidPartialNumber(o)){const n=this.convertValueToNumber(o);!o&&this.indeterminateValue?(this.indeterminate=!0,this._value=this.indeterminateValue):(this.indeterminate=!1,this._value=this.validateInput(n)),this._trackingValue=o,this.inputElement.value=o;return}const s=o.length,i=this._trackingValue.length,a=(e||s)-(s-i);this.inputElement.value=this.indeterminate?I:this._trackingValue,this.inputElement.setSelectionRange(a,a)}validateInput(t){if(typeof this.min!="undefined"&&(t=Math.max(this.min,t)),typeof this.max!="undefined"&&(t=Math.min(this.max,t)),this.step){const e=typeof this.min!="undefined"?this.min:0,o=(t-e)%this.step;if(o===0||(Math.round(o/this.step)===1?t+=this.step-o:t-=o),typeof this.max!="undefined")for(;t>this.max;)t-=this.step}return t}get displayValue(){const t=this.focused?"":I;return this.indeterminate?t:this.formattedValue}clearNumberFormatterCache(){this._numberFormatter=void 0,this._numberParser=void 0}get numberFormatter(){if(!this._numberFormatter||!this._numberFormatterFocused){const t=this.formatOptions,{style:e,unit:o,unitDisplay:s}=t,i=S(t,["style","unit","unitDisplay"]);e!=="unit"&&(i.style=e),this._numberFormatterFocused=new P(this.resolvedLanguage,i);try{this._numberFormatter=new P(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberFormatter.format(1)}catch{e==="unit"&&(this._forcedUnit=o),this._numberFormatter=this._numberFormatterFocused}}return this.focused?this._numberFormatterFocused:this._numberFormatter}get numberParser(){if(!this._numberParser||!this._numberParserFocused){const t=this.formatOptions,{style:e,unit:o,unitDisplay:s}=t,i=S(t,["style","unit","unitDisplay"]);e!=="unit"&&(i.style=e),this._numberParserFocused=new L(this.resolvedLanguage,i);try{this._numberParser=new L(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberParser.parse("0")}catch{e==="unit"&&(this._forcedUnit=o),this._numberParser=this._numberParserFocused}}return this.focused?this._numberParserFocused:this._numberParser}renderField(){return this.autocomplete="off",l`
            ${super.renderField()}
            ${this.hideStepper?l``:l`
                      <span
                          class="buttons"
                          @focusin=${this.handleFocusin}
                          @focusout=${this.handleFocusout}
                          ${et({start:["pointerdown",this.handlePointerdown],streamInside:[["pointermove","pointerenter","pointerleave","pointerover","pointerout"],this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
                      >
                          <sp-action-button
                              class="stepUp"
                              label="Increment"
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||typeof this.max!="undefined"&&this.value===this.max}
                              ?quiet=${this.quiet}
                          >
                              <sp-icon-chevron75
                                  slot="icon"
                                  class="stepper-icon spectrum-UIIcon-ChevronUp75"
                              ></sp-icon-chevron75>
                          </sp-action-button>
                          <sp-action-button
                              class="stepDown"
                              label="Decrement"
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||typeof this.min!="undefined"&&this.value===this.min}
                              ?quiet=${this.quiet}
                          >
                              <sp-icon-chevron75
                                  slot="icon"
                                  class="stepper-icon spectrum-UIIcon-ChevronDown75"
                              ></sp-icon-chevron75>
                          </sp-action-button>
                      </span>
                  `}
        `}update(t){(t.has("formatOptions")||t.has("resolvedLanguage"))&&this.clearNumberFormatterCache(),super.update(t)}firstUpdated(t){super.firstUpdated(t),this.multiline=!1,this.addEventListener("keydown",this.handleKeydown)}updated(t){if(t.has("value")||t.has("max")||t.has("min")||t.has("min")){const e=this.numberParser.parse(this.inputValue.replace(this._forcedUnit,""));this.value=e}if(t.has("min")||t.has("formatOptions")){let e="numeric";const o=typeof this.min!="undefined"&&this.min<0,{maximumFractionDigits:s}=this.formatOptions,i=s&&s>0;dt()?o?e="text":i&&(e="decimal"):ut()&&(o?e="numeric":i&&(e="decimal")),this.inputElement.inputMode=e}}connectedCallback(){super.connectedCallback(),this.resolveLanguage()}disconnectedCallback(){this.resolveLanguage(),super.disconnectedCallback()}resolveLanguage(){const t=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:e=>{this.resolvedLanguage=e}},cancelable:!0});this.dispatchEvent(t)}}b([E(".buttons")],m.prototype,"buttons",void 0);b([c({type:Boolean,reflect:!0})],m.prototype,"focused",void 0);b([c({type:Object,attribute:"format-options"})],m.prototype,"formatOptions",void 0);b([c({type:Boolean,reflect:!0,attribute:"hide-stepper"})],m.prototype,"hideStepper",void 0);b([c({type:Boolean,reflect:!0})],m.prototype,"indeterminate",void 0);b([c({type:Boolean,reflect:!0,attribute:"keyboard-focused"})],m.prototype,"keyboardFocused",void 0);b([c({type:Number})],m.prototype,"max",void 0);b([c({type:Number})],m.prototype,"min",void 0);b([c({attribute:!1})],m.prototype,"resolvedLanguage",void 0);b([c({type:Number})],m.prototype,"step",void 0);b([c({type:Number,reflect:!0,attribute:"step-modifier"})],m.prototype,"stepModifier",void 0);b([c({type:Number})],m.prototype,"value",null);customElements.define("sp-number-field",m);
