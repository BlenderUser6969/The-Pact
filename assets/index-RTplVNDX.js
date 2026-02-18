(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i_={exports:{}},ju={},o_={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),mT=Symbol.for("react.portal"),gT=Symbol.for("react.fragment"),yT=Symbol.for("react.strict_mode"),_T=Symbol.for("react.profiler"),vT=Symbol.for("react.provider"),wT=Symbol.for("react.context"),ET=Symbol.for("react.forward_ref"),TT=Symbol.for("react.suspense"),IT=Symbol.for("react.memo"),xT=Symbol.for("react.lazy"),Im=Symbol.iterator;function ST(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var a_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l_=Object.assign,u_={};function Ni(t,e,n){this.props=t,this.context=e,this.refs=u_,this.updater=n||a_}Ni.prototype.isReactComponent={};Ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function c_(){}c_.prototype=Ni.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=u_,this.updater=n||a_}var Zd=Jd.prototype=new c_;Zd.constructor=Jd;l_(Zd,Ni.prototype);Zd.isPureReactComponent=!0;var xm=Array.isArray,h_=Object.prototype.hasOwnProperty,ef={current:null},d_={key:!0,ref:!0,__self:!0,__source:!0};function f_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)h_.call(e,r)&&!d_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:_a,type:t,key:i,ref:o,props:s,_owner:ef.current}}function kT(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function AT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sm=/\/+/g;function jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AT(""+t.key):e.toString(36)}function Pl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case mT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+jc(o,0):r,xm(s)?(n="",t!=null&&(n=t.replace(Sm,"$&/")+"/"),Pl(s,e,n,"",function(h){return h})):s!=null&&(tf(s)&&(s=kT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Sm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",xm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+jc(i,l);o+=Pl(i,e,n,u,s)}else if(u=ST(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+jc(i,l++),o+=Pl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function il(t,e,n){if(t==null)return t;var r=[],s=0;return Pl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function RT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},Nl={transition:null},CT={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:ef};function p_(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Ni;oe.Fragment=gT;oe.Profiler=_T;oe.PureComponent=Jd;oe.StrictMode=yT;oe.Suspense=TT;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CT;oe.act=p_;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=l_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ef.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)h_.call(e,u)&&!d_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:_a,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:wT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vT,_context:t},t.Consumer=t};oe.createElement=f_;oe.createFactory=function(t){var e=f_.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:ET,render:t}};oe.isValidElement=tf;oe.lazy=function(t){return{$$typeof:xT,_payload:{_status:-1,_result:t},_init:RT}};oe.memo=function(t,e){return{$$typeof:IT,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};oe.unstable_act=p_;oe.useCallback=function(t,e){return Pt.current.useCallback(t,e)};oe.useContext=function(t){return Pt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Pt.current.useEffect(t,e)};oe.useId=function(){return Pt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Pt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};oe.useRef=function(t){return Pt.current.useRef(t)};oe.useState=function(t){return Pt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Pt.current.useTransition()};oe.version="18.3.1";o_.exports=oe;var J=o_.exports;const m_=pT(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT=J,NT=Symbol.for("react.element"),bT=Symbol.for("react.fragment"),DT=Object.prototype.hasOwnProperty,OT=PT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VT={key:!0,ref:!0,__self:!0,__source:!0};function g_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DT.call(e,r)&&!VT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:NT,type:t,key:i,ref:o,props:s,_owner:OT.current}}ju.Fragment=bT;ju.jsx=g_;ju.jsxs=g_;i_.exports=ju;var p=i_.exports,Nh={},y_={exports:{}},Yt={},__={exports:{}},v_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Z){var F=H.length;H.push(Z);e:for(;0<F;){var _e=F-1>>>1,de=H[_e];if(0<s(de,Z))H[_e]=Z,H[F]=de,F=_e;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Z=H[0],F=H.pop();if(F!==Z){H[0]=F;e:for(var _e=0,de=H.length,Ae=de>>>1;_e<Ae;){var Dt=2*(_e+1)-1,Jt=H[Dt],ee=Dt+1,pt=H[ee];if(0>s(Jt,F))ee<de&&0>s(pt,Jt)?(H[_e]=pt,H[ee]=F,_e=ee):(H[_e]=Jt,H[Dt]=F,_e=Dt);else if(ee<de&&0>s(pt,F))H[_e]=pt,H[ee]=F,_e=ee;else break e}}return Z}function s(H,Z){var F=H.sortIndex-Z.sortIndex;return F!==0?F:H.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,y=null,_=3,S=!1,R=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(H){for(var Z=n(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=H)r(h),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(h)}}function b(H){if(N=!1,k(H),!R)if(n(u)!==null)R=!0,Bt(z);else{var Z=n(h);Z!==null&&bt(b,Z.startTime-H)}}function z(H,Z){R=!1,N&&(N=!1,T(m),m=-1),S=!0;var F=_;try{for(k(Z),y=n(u);y!==null&&(!(y.expirationTime>Z)||H&&!A());){var _e=y.callback;if(typeof _e=="function"){y.callback=null,_=y.priorityLevel;var de=_e(y.expirationTime<=Z);Z=t.unstable_now(),typeof de=="function"?y.callback=de:y===n(u)&&r(u),k(Z)}else r(u);y=n(u)}if(y!==null)var Ae=!0;else{var Dt=n(h);Dt!==null&&bt(b,Dt.startTime-Z),Ae=!1}return Ae}finally{y=null,_=F,S=!1}}var U=!1,v=null,m=-1,E=5,x=-1;function A(){return!(t.unstable_now()-x<E)}function C(){if(v!==null){var H=t.unstable_now();x=H;var Z=!0;try{Z=v(!0,H)}finally{Z?I():(U=!1,v=null)}}else U=!1}var I;if(typeof w=="function")I=function(){w(C)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,un=Ze.port2;Ze.port1.onmessage=C,I=function(){un.postMessage(null)}}else I=function(){O(C,0)};function Bt(H){v=H,U||(U=!0,I())}function bt(H,Z){m=O(function(){H(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,Bt(z))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var F=_;_=Z;try{return H()}finally{_=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var F=_;_=H;try{return Z()}finally{_=F}},t.unstable_scheduleCallback=function(H,Z,F){var _e=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?_e+F:_e):F=_e,H){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=F+de,H={id:f++,callback:Z,priorityLevel:H,startTime:F,expirationTime:de,sortIndex:-1},F>_e?(H.sortIndex=F,e(h,H),n(u)===null&&H===n(h)&&(N?(T(m),m=-1):N=!0,bt(b,F-_e))):(H.sortIndex=de,e(u,H),R||S||(R=!0,Bt(z))),H},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(H){var Z=_;return function(){var F=_;_=Z;try{return H.apply(this,arguments)}finally{_=F}}}})(v_);__.exports=v_;var LT=__.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MT=J,Qt=LT;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w_=new Set,Ho={};function Ns(t,e){yi(t,e),yi(t+"Capture",e)}function yi(t,e){for(Ho[t]=e,t=0;t<e.length;t++)w_.add(e[t])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,jT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Am={};function UT(t){return bh.call(Am,t)?!0:bh.call(km,t)?!1:jT.test(t)?Am[t]=!0:(km[t]=!0,!1)}function FT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zT(t,e,n,r){if(e===null||typeof e>"u"||FT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nf=/[\-:]([a-z])/g;function rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nf,rf);dt[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nf,rf);dt[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nf,rf);dt[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sf(t,e,n,r){var s=dt.hasOwnProperty(e)?dt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zT(e,n,s,r)&&(n=null),r||s===null?UT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var or=MT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),E_=Symbol.for("react.provider"),T_=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),Oh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),lf=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),I_=Symbol.for("react.offscreen"),Rm=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Uc;function To(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function zc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function BT(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Gs:return"Portal";case Dh:return"Profiler";case of:return"StrictMode";case Oh:return"Suspense";case Vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T_:return(t.displayName||"Context")+".Consumer";case E_:return(t._context.displayName||"Context")+".Provider";case af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lf:return e=t.displayName||null,e!==null?e:Lh(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return Lh(t(e))}catch{}}return null}function $T(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lh(e);case 8:return e===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qT(t){var e=x_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=qT(t))}function S_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=x_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mh(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function k_(t,e){e=e.checked,e!=null&&sf(t,"checked",e,!1)}function jh(t,e){k_(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uh(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uh(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Io=Array.isArray;function ai(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Io(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function A_(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function R_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?R_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,C_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HT=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){HT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function P_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function N_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=P_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var WT=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bh(t,e){if(e){if(WT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function $h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=null;function uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hh=null,li=null,ui=null;function Dm(t){if(t=Ea(t)){if(typeof Hh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=$u(e),Hh(t.stateNode,t.type,e))}}function b_(t){li?ui?ui.push(t):ui=[t]:li=t}function D_(){if(li){var t=li,e=ui;if(ui=li=null,Dm(t),e)for(t=0;t<e.length;t++)Dm(e[t])}}function O_(t,e){return t(e)}function V_(){}var Bc=!1;function L_(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return O_(t,e,n)}finally{Bc=!1,(li!==null||ui!==null)&&(V_(),D_())}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var r=$u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Wh=!1;if(Yn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Wh=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Wh=!1}function KT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var No=!1,Jl=null,Zl=!1,Kh=null,GT={onError:function(t){No=!0,Jl=t}};function QT(t,e,n,r,s,i,o,l,u){No=!1,Jl=null,KT.apply(GT,arguments)}function YT(t,e,n,r,s,i,o,l,u){if(QT.apply(this,arguments),No){if(No){var h=Jl;No=!1,Jl=null}else throw Error(B(198));Zl||(Zl=!0,Kh=h)}}function bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Om(t){if(bs(t)!==t)throw Error(B(188))}function XT(t){var e=t.alternate;if(!e){if(e=bs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Om(s),t;if(i===r)return Om(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function j_(t){return t=XT(t),t!==null?U_(t):null}function U_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=U_(t);if(e!==null)return e;t=t.sibling}return null}var F_=Qt.unstable_scheduleCallback,Vm=Qt.unstable_cancelCallback,JT=Qt.unstable_shouldYield,ZT=Qt.unstable_requestPaint,We=Qt.unstable_now,eI=Qt.unstable_getCurrentPriorityLevel,cf=Qt.unstable_ImmediatePriority,z_=Qt.unstable_UserBlockingPriority,eu=Qt.unstable_NormalPriority,tI=Qt.unstable_LowPriority,B_=Qt.unstable_IdlePriority,Uu=null,Rn=null;function nI(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:iI,rI=Math.log,sI=Math.LN2;function iI(t){return t>>>=0,t===0?32:31-(rI(t)/sI|0)|0}var ul=64,cl=4194304;function xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=xo(l):(i&=o,i!==0&&(r=xo(i)))}else o=n&~s,o!==0?r=xo(o):i!==0&&(r=xo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),s=1<<n,r|=t[n],e&=~s;return r}function oI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-_n(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=oI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $_(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function $c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function lI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-_n(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ve=0;function q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H_,df,W_,K_,G_,Qh=!1,hl=[],Ar=null,Rr=null,Cr=null,Go=new Map,Qo=new Map,yr=[],uI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lm(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function fo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ea(e),e!==null&&df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function cI(t,e,n,r,s){switch(e){case"focusin":return Ar=fo(Ar,t,e,n,r,s),!0;case"dragenter":return Rr=fo(Rr,t,e,n,r,s),!0;case"mouseover":return Cr=fo(Cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Go.set(i,fo(Go.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Qo.set(i,fo(Qo.get(i)||null,t,e,n,r,s)),!0}return!1}function Q_(t){var e=ds(t.target);if(e!==null){var n=bs(e);if(n!==null){if(e=n.tag,e===13){if(e=M_(n),e!==null){t.blockedOn=e,G_(t.priority,function(){W_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qh=r,n.target.dispatchEvent(r),qh=null}else return e=Ea(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function Mm(t,e,n){bl(t)&&n.delete(e)}function hI(){Qh=!1,Ar!==null&&bl(Ar)&&(Ar=null),Rr!==null&&bl(Rr)&&(Rr=null),Cr!==null&&bl(Cr)&&(Cr=null),Go.forEach(Mm),Qo.forEach(Mm)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,Qh||(Qh=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,hI)))}function Yo(t){function e(s){return po(s,t)}if(0<hl.length){po(hl[0],t);for(var n=1;n<hl.length;n++){var r=hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&po(Ar,t),Rr!==null&&po(Rr,t),Cr!==null&&po(Cr,t),Go.forEach(e),Qo.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)Q_(n),n.blockedOn===null&&yr.shift()}var ci=or.ReactCurrentBatchConfig,nu=!0;function dI(t,e,n,r){var s=ve,i=ci.transition;ci.transition=null;try{ve=1,ff(t,e,n,r)}finally{ve=s,ci.transition=i}}function fI(t,e,n,r){var s=ve,i=ci.transition;ci.transition=null;try{ve=4,ff(t,e,n,r)}finally{ve=s,ci.transition=i}}function ff(t,e,n,r){if(nu){var s=Yh(t,e,n,r);if(s===null)Zc(t,e,r,ru,n),Lm(t,r);else if(cI(s,t,e,n,r))r.stopPropagation();else if(Lm(t,r),e&4&&-1<uI.indexOf(t)){for(;s!==null;){var i=Ea(s);if(i!==null&&H_(i),i=Yh(t,e,n,r),i===null&&Zc(t,e,r,ru,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Zc(t,e,r,null,n)}}var ru=null;function Yh(t,e,n,r){if(ru=null,t=uf(r),t=ds(t),t!==null)if(e=bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function Y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eI()){case cf:return 1;case z_:return 4;case eu:case tI:return 16;case B_:return 536870912;default:return 16}default:return 16}}var xr=null,pf=null,Dl=null;function X_(){if(Dl)return Dl;var t,e=pf,n=e.length,r,s="value"in xr?xr.value:xr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Dl=s.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function jm(){return!1}function Xt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?dl:jm,this.isPropagationStopped=jm,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mf=Xt(bi),wa=Le({},bi,{view:0,detail:0}),pI=Xt(wa),qc,Hc,mo,Fu=Le({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(qc=t.screenX-mo.screenX,Hc=t.screenY-mo.screenY):Hc=qc=0,mo=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Um=Xt(Fu),mI=Le({},Fu,{dataTransfer:0}),gI=Xt(mI),yI=Le({},wa,{relatedTarget:0}),Wc=Xt(yI),_I=Le({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),vI=Xt(_I),wI=Le({},bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EI=Xt(wI),TI=Le({},bi,{data:0}),Fm=Xt(TI),II={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SI[t])?!!e[t]:!1}function gf(){return kI}var AI=Le({},wa,{key:function(t){if(t.key){var e=II[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RI=Xt(AI),CI=Le({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zm=Xt(CI),PI=Le({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),NI=Xt(PI),bI=Le({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),DI=Xt(bI),OI=Le({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VI=Xt(OI),LI=[9,13,27,32],yf=Yn&&"CompositionEvent"in window,bo=null;Yn&&"documentMode"in document&&(bo=document.documentMode);var MI=Yn&&"TextEvent"in window&&!bo,J_=Yn&&(!yf||bo&&8<bo&&11>=bo),Bm=" ",$m=!1;function Z_(t,e){switch(t){case"keyup":return LI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function jI(t,e){switch(t){case"compositionend":return ev(e);case"keypress":return e.which!==32?null:($m=!0,Bm);case"textInput":return t=e.data,t===Bm&&$m?null:t;default:return null}}function UI(t,e){if(Ys)return t==="compositionend"||!yf&&Z_(t,e)?(t=X_(),Dl=pf=xr=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return J_&&e.locale!=="ko"?null:e.data;default:return null}}var FI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FI[t.type]:e==="textarea"}function tv(t,e,n,r){b_(r),e=su(e,"onChange"),0<e.length&&(n=new mf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Do=null,Xo=null;function zI(t){dv(t,0)}function zu(t){var e=Zs(t);if(S_(e))return t}function BI(t,e){if(t==="change")return e}var nv=!1;if(Yn){var Kc;if(Yn){var Gc="oninput"in document;if(!Gc){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),Gc=typeof Hm.oninput=="function"}Kc=Gc}else Kc=!1;nv=Kc&&(!document.documentMode||9<document.documentMode)}function Wm(){Do&&(Do.detachEvent("onpropertychange",rv),Xo=Do=null)}function rv(t){if(t.propertyName==="value"&&zu(Xo)){var e=[];tv(e,Xo,t,uf(t)),L_(zI,e)}}function $I(t,e,n){t==="focusin"?(Wm(),Do=e,Xo=n,Do.attachEvent("onpropertychange",rv)):t==="focusout"&&Wm()}function qI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Xo)}function HI(t,e){if(t==="click")return zu(e)}function WI(t,e){if(t==="input"||t==="change")return zu(e)}function KI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:KI;function Jo(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!bh.call(e,s)||!wn(t[s],e[s]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Km(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iv(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function _f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GI(t){var e=iv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sv(n.ownerDocument.documentElement,n)){if(r!==null&&_f(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Gm(n,i);var o=Gm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QI=Yn&&"documentMode"in document&&11>=document.documentMode,Xs=null,Xh=null,Oo=null,Jh=!1;function Qm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jh||Xs==null||Xs!==Xl(r)||(r=Xs,"selectionStart"in r&&_f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Jo(Oo,r)||(Oo=r,r=su(Xh,"onSelect"),0<r.length&&(e=new mf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xs)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Js={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Qc={},ov={};Yn&&(ov=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Bu(t){if(Qc[t])return Qc[t];if(!Js[t])return t;var e=Js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ov)return Qc[t]=e[n];return t}var av=Bu("animationend"),lv=Bu("animationiteration"),uv=Bu("animationstart"),cv=Bu("transitionend"),hv=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){hv.set(t,e),Ns(e,[t])}for(var Yc=0;Yc<Ym.length;Yc++){var Xc=Ym[Yc],YI=Xc.toLowerCase(),XI=Xc[0].toUpperCase()+Xc.slice(1);Wr(YI,"on"+XI)}Wr(av,"onAnimationEnd");Wr(lv,"onAnimationIteration");Wr(uv,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(cv,"onTransitionEnd");yi("onMouseEnter",["mouseout","mouseover"]);yi("onMouseLeave",["mouseout","mouseover"]);yi("onPointerEnter",["pointerout","pointerover"]);yi("onPointerLeave",["pointerout","pointerover"]);Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JI=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Xm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YT(r,e,void 0,t),t.currentTarget=null}function dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Xm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Xm(s,l,h),i=u}}}if(Zl)throw t=Kh,Zl=!1,Kh=null,t}function Ce(t,e){var n=e[rd];n===void 0&&(n=e[rd]=new Set);var r=t+"__bubble";n.has(r)||(fv(e,t,2,!1),n.add(r))}function Jc(t,e,n){var r=0;e&&(r|=4),fv(n,t,r,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[pl]){t[pl]=!0,w_.forEach(function(n){n!=="selectionchange"&&(JI.has(n)||Jc(n,!1,t),Jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Jc("selectionchange",!1,e))}}function fv(t,e,n,r){switch(Y_(e)){case 1:var s=dI;break;case 4:s=fI;break;default:s=ff}n=s.bind(null,e,n,t),s=void 0,!Wh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Zc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ds(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}L_(function(){var h=i,f=uf(n),y=[];e:{var _=hv.get(t);if(_!==void 0){var S=mf,R=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":S=RI;break;case"focusin":R="focus",S=Wc;break;case"focusout":R="blur",S=Wc;break;case"beforeblur":case"afterblur":S=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=gI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=NI;break;case av:case lv:case uv:S=vI;break;case cv:S=DI;break;case"scroll":S=pI;break;case"wheel":S=VI;break;case"copy":case"cut":case"paste":S=EI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=zm}var N=(e&4)!==0,O=!N&&t==="scroll",T=N?_!==null?_+"Capture":null:_;N=[];for(var w=h,k;w!==null;){k=w;var b=k.stateNode;if(k.tag===5&&b!==null&&(k=b,T!==null&&(b=Ko(w,T),b!=null&&N.push(ea(w,b,k)))),O)break;w=w.return}0<N.length&&(_=new S(_,R,null,n,f),y.push({event:_,listeners:N}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",_&&n!==qh&&(R=n.relatedTarget||n.fromElement)&&(ds(R)||R[Xn]))break e;if((S||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=h,R=R?ds(R):null,R!==null&&(O=bs(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=h),S!==R)){if(N=Um,b="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=zm,b="onPointerLeave",T="onPointerEnter",w="pointer"),O=S==null?_:Zs(S),k=R==null?_:Zs(R),_=new N(b,w+"leave",S,n,f),_.target=O,_.relatedTarget=k,b=null,ds(f)===h&&(N=new N(T,w+"enter",R,n,f),N.target=k,N.relatedTarget=O,b=N),O=b,S&&R)t:{for(N=S,T=R,w=0,k=N;k;k=$s(k))w++;for(k=0,b=T;b;b=$s(b))k++;for(;0<w-k;)N=$s(N),w--;for(;0<k-w;)T=$s(T),k--;for(;w--;){if(N===T||T!==null&&N===T.alternate)break t;N=$s(N),T=$s(T)}N=null}else N=null;S!==null&&Jm(y,_,S,N,!1),R!==null&&O!==null&&Jm(y,O,R,N,!0)}}e:{if(_=h?Zs(h):window,S=_.nodeName&&_.nodeName.toLowerCase(),S==="select"||S==="input"&&_.type==="file")var z=BI;else if(qm(_))if(nv)z=WI;else{z=qI;var U=$I}else(S=_.nodeName)&&S.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(z=HI);if(z&&(z=z(t,h))){tv(y,z,n,f);break e}U&&U(t,_,h),t==="focusout"&&(U=_._wrapperState)&&U.controlled&&_.type==="number"&&Uh(_,"number",_.value)}switch(U=h?Zs(h):window,t){case"focusin":(qm(U)||U.contentEditable==="true")&&(Xs=U,Xh=h,Oo=null);break;case"focusout":Oo=Xh=Xs=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,Qm(y,n,f);break;case"selectionchange":if(QI)break;case"keydown":case"keyup":Qm(y,n,f)}var v;if(yf)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Ys?Z_(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(J_&&n.locale!=="ko"&&(Ys||m!=="onCompositionStart"?m==="onCompositionEnd"&&Ys&&(v=X_()):(xr=f,pf="value"in xr?xr.value:xr.textContent,Ys=!0)),U=su(h,m),0<U.length&&(m=new Fm(m,t,null,n,f),y.push({event:m,listeners:U}),v?m.data=v:(v=ev(n),v!==null&&(m.data=v)))),(v=MI?jI(t,n):UI(t,n))&&(h=su(h,"onBeforeInput"),0<h.length&&(f=new Fm("onBeforeInput","beforeinput",null,n,f),y.push({event:f,listeners:h}),f.data=v))}dv(y,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function su(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ko(t,n),i!=null&&r.unshift(ea(t,i,s)),i=Ko(t,e),i!=null&&r.push(ea(t,i,s))),t=t.return}return r}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Ko(n,i),u!=null&&o.unshift(ea(n,u,l))):s||(u=Ko(n,i),u!=null&&o.push(ea(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZI=/\r\n?/g,e1=/\u0000|\uFFFD/g;function Zm(t){return(typeof t=="string"?t:""+t).replace(ZI,`
`).replace(e1,"")}function ml(t,e,n){if(e=Zm(e),Zm(t)!==e&&n)throw Error(B(425))}function iu(){}var Zh=null,ed=null;function td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,t1=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,n1=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(t){return eg.resolve(null).then(t).catch(r1)}:nd;function r1(t){setTimeout(function(){throw t})}function eh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Yo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Yo(e)}function Pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),kn="__reactFiber$"+Di,ta="__reactProps$"+Di,Xn="__reactContainer$"+Di,rd="__reactEvents$"+Di,s1="__reactListeners$"+Di,i1="__reactHandles$"+Di;function ds(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tg(t);t!==null;){if(n=t[kn])return n;t=tg(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[kn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function $u(t){return t[ta]||null}var sd=[],ei=-1;function Kr(t){return{current:t}}function Ne(t){0>ei||(t.current=sd[ei],sd[ei]=null,ei--)}function ke(t,e){ei++,sd[ei]=t.current,t.current=e}var Fr={},xt=Kr(Fr),jt=Kr(!1),ws=Fr;function _i(t,e){var n=t.type.contextTypes;if(!n)return Fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ut(t){return t=t.childContextTypes,t!=null}function ou(){Ne(jt),Ne(xt)}function ng(t,e,n){if(xt.current!==Fr)throw Error(B(168));ke(xt,e),ke(jt,n)}function pv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,$T(t)||"Unknown",s));return Le({},n,r)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,ws=xt.current,ke(xt,t),ke(jt,jt.current),!0}function rg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=pv(t,e,ws),r.__reactInternalMemoizedMergedChildContext=t,Ne(jt),Ne(xt),ke(xt,t)):Ne(jt),ke(jt,n)}var zn=null,qu=!1,th=!1;function mv(t){zn===null?zn=[t]:zn.push(t)}function o1(t){qu=!0,mv(t)}function Gr(){if(!th&&zn!==null){th=!0;var t=0,e=ve;try{var n=zn;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,qu=!1}catch(s){throw zn!==null&&(zn=zn.slice(t+1)),F_(cf,Gr),s}finally{ve=e,th=!1}}return null}var ti=[],ni=0,lu=null,uu=0,tn=[],nn=0,Es=null,Bn=1,$n="";function us(t,e){ti[ni++]=uu,ti[ni++]=lu,lu=t,uu=e}function gv(t,e,n){tn[nn++]=Bn,tn[nn++]=$n,tn[nn++]=Es,Es=t;var r=Bn;t=$n;var s=32-_n(r)-1;r&=~(1<<s),n+=1;var i=32-_n(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Bn=1<<32-_n(e)+s|n<<s|r,$n=i+t}else Bn=1<<i|n<<s|r,$n=t}function vf(t){t.return!==null&&(us(t,1),gv(t,1,0))}function wf(t){for(;t===lu;)lu=ti[--ni],ti[ni]=null,uu=ti[--ni],ti[ni]=null;for(;t===Es;)Es=tn[--nn],tn[nn]=null,$n=tn[--nn],tn[nn]=null,Bn=tn[--nn],tn[nn]=null}var Gt=null,Ht=null,De=!1,yn=null;function yv(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=Pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Es!==null?{id:Bn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,Ht=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function od(t){if(De){var e=Ht;if(e){var n=e;if(!sg(t,e)){if(id(t))throw Error(B(418));e=Pr(n.nextSibling);var r=Gt;e&&sg(t,e)?yv(r,n):(t.flags=t.flags&-4097|2,De=!1,Gt=t)}}else{if(id(t))throw Error(B(418));t.flags=t.flags&-4097|2,De=!1,Gt=t}}}function ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function gl(t){if(t!==Gt)return!1;if(!De)return ig(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!td(t.type,t.memoizedProps)),e&&(e=Ht)){if(id(t))throw _v(),Error(B(418));for(;e;)yv(t,e),e=Pr(e.nextSibling)}if(ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Gt?Pr(t.stateNode.nextSibling):null;return!0}function _v(){for(var t=Ht;t;)t=Pr(t.nextSibling)}function vi(){Ht=Gt=null,De=!1}function Ef(t){yn===null?yn=[t]:yn.push(t)}var a1=or.ReactCurrentBatchConfig;function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function og(t){var e=t._init;return e(t._payload)}function vv(t){function e(T,w){if(t){var k=T.deletions;k===null?(T.deletions=[w],T.flags|=16):k.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function s(T,w){return T=Or(T,w),T.index=0,T.sibling=null,T}function i(T,w,k){return T.index=k,t?(k=T.alternate,k!==null?(k=k.index,k<w?(T.flags|=2,w):k):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,w,k,b){return w===null||w.tag!==6?(w=lh(k,T.mode,b),w.return=T,w):(w=s(w,k),w.return=T,w)}function u(T,w,k,b){var z=k.type;return z===Qs?f(T,w,k.props.children,b,k.key):w!==null&&(w.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===mr&&og(z)===w.type)?(b=s(w,k.props),b.ref=go(T,w,k),b.return=T,b):(b=zl(k.type,k.key,k.props,null,T.mode,b),b.ref=go(T,w,k),b.return=T,b)}function h(T,w,k,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=uh(k,T.mode,b),w.return=T,w):(w=s(w,k.children||[]),w.return=T,w)}function f(T,w,k,b,z){return w===null||w.tag!==7?(w=ys(k,T.mode,b,z),w.return=T,w):(w=s(w,k),w.return=T,w)}function y(T,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=lh(""+w,T.mode,k),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ol:return k=zl(w.type,w.key,w.props,null,T.mode,k),k.ref=go(T,null,w),k.return=T,k;case Gs:return w=uh(w,T.mode,k),w.return=T,w;case mr:var b=w._init;return y(T,b(w._payload),k)}if(Io(w)||co(w))return w=ys(w,T.mode,k,null),w.return=T,w;yl(T,w)}return null}function _(T,w,k,b){var z=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return z!==null?null:l(T,w,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ol:return k.key===z?u(T,w,k,b):null;case Gs:return k.key===z?h(T,w,k,b):null;case mr:return z=k._init,_(T,w,z(k._payload),b)}if(Io(k)||co(k))return z!==null?null:f(T,w,k,b,null);yl(T,k)}return null}function S(T,w,k,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return T=T.get(k)||null,l(w,T,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ol:return T=T.get(b.key===null?k:b.key)||null,u(w,T,b,z);case Gs:return T=T.get(b.key===null?k:b.key)||null,h(w,T,b,z);case mr:var U=b._init;return S(T,w,k,U(b._payload),z)}if(Io(b)||co(b))return T=T.get(k)||null,f(w,T,b,z,null);yl(w,b)}return null}function R(T,w,k,b){for(var z=null,U=null,v=w,m=w=0,E=null;v!==null&&m<k.length;m++){v.index>m?(E=v,v=null):E=v.sibling;var x=_(T,v,k[m],b);if(x===null){v===null&&(v=E);break}t&&v&&x.alternate===null&&e(T,v),w=i(x,w,m),U===null?z=x:U.sibling=x,U=x,v=E}if(m===k.length)return n(T,v),De&&us(T,m),z;if(v===null){for(;m<k.length;m++)v=y(T,k[m],b),v!==null&&(w=i(v,w,m),U===null?z=v:U.sibling=v,U=v);return De&&us(T,m),z}for(v=r(T,v);m<k.length;m++)E=S(v,T,m,k[m],b),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?m:E.key),w=i(E,w,m),U===null?z=E:U.sibling=E,U=E);return t&&v.forEach(function(A){return e(T,A)}),De&&us(T,m),z}function N(T,w,k,b){var z=co(k);if(typeof z!="function")throw Error(B(150));if(k=z.call(k),k==null)throw Error(B(151));for(var U=z=null,v=w,m=w=0,E=null,x=k.next();v!==null&&!x.done;m++,x=k.next()){v.index>m?(E=v,v=null):E=v.sibling;var A=_(T,v,x.value,b);if(A===null){v===null&&(v=E);break}t&&v&&A.alternate===null&&e(T,v),w=i(A,w,m),U===null?z=A:U.sibling=A,U=A,v=E}if(x.done)return n(T,v),De&&us(T,m),z;if(v===null){for(;!x.done;m++,x=k.next())x=y(T,x.value,b),x!==null&&(w=i(x,w,m),U===null?z=x:U.sibling=x,U=x);return De&&us(T,m),z}for(v=r(T,v);!x.done;m++,x=k.next())x=S(v,T,m,x.value,b),x!==null&&(t&&x.alternate!==null&&v.delete(x.key===null?m:x.key),w=i(x,w,m),U===null?z=x:U.sibling=x,U=x);return t&&v.forEach(function(C){return e(T,C)}),De&&us(T,m),z}function O(T,w,k,b){if(typeof k=="object"&&k!==null&&k.type===Qs&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ol:e:{for(var z=k.key,U=w;U!==null;){if(U.key===z){if(z=k.type,z===Qs){if(U.tag===7){n(T,U.sibling),w=s(U,k.props.children),w.return=T,T=w;break e}}else if(U.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===mr&&og(z)===U.type){n(T,U.sibling),w=s(U,k.props),w.ref=go(T,U,k),w.return=T,T=w;break e}n(T,U);break}else e(T,U);U=U.sibling}k.type===Qs?(w=ys(k.props.children,T.mode,b,k.key),w.return=T,T=w):(b=zl(k.type,k.key,k.props,null,T.mode,b),b.ref=go(T,w,k),b.return=T,T=b)}return o(T);case Gs:e:{for(U=k.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(T,w.sibling),w=s(w,k.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=uh(k,T.mode,b),w.return=T,T=w}return o(T);case mr:return U=k._init,O(T,w,U(k._payload),b)}if(Io(k))return R(T,w,k,b);if(co(k))return N(T,w,k,b);yl(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(T,w.sibling),w=s(w,k),w.return=T,T=w):(n(T,w),w=lh(k,T.mode,b),w.return=T,T=w),o(T)):n(T,w)}return O}var wi=vv(!0),wv=vv(!1),cu=Kr(null),hu=null,ri=null,Tf=null;function If(){Tf=ri=hu=null}function xf(t){var e=cu.current;Ne(cu),t._currentValue=e}function ad(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hi(t,e){hu=t,Tf=ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mt=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(Tf!==t)if(t={context:t,memoizedValue:e,next:null},ri===null){if(hu===null)throw Error(B(308));ri=t,hu.dependencies={lanes:0,firstContext:t}}else ri=ri.next=t;return e}var fs=null;function Sf(t){fs===null?fs=[t]:fs.push(t)}function Ev(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Sf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Jn(t,n)}return s=r.interleaved,s===null?(e.next=e,Sf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Jn(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}function ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,r){var s=t.updateQueue;gr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var y=s.baseState;o=0,f=h=u=null,l=i;do{var _=l.lane,S=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(_=e,S=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){y=R.call(S,y,_);break e}y=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,_=typeof R=="function"?R.call(S,y,_):R,_==null)break e;y=Le({},y,_);break e;case 2:gr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[l]:_.push(l))}else S={eventTime:S,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=y):f=f.next=S,o|=_;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;_=l,l=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(f===null&&(u=y),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Is|=o,t.lanes=o,t.memoizedState=y}}function lg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var Ta={},Cn=Kr(Ta),na=Kr(Ta),ra=Kr(Ta);function ps(t){if(t===Ta)throw Error(B(174));return t}function Af(t,e){switch(ke(ra,e),ke(na,t),ke(Cn,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zh(e,t)}Ne(Cn),ke(Cn,e)}function Ei(){Ne(Cn),Ne(na),Ne(ra)}function Iv(t){ps(ra.current);var e=ps(Cn.current),n=zh(e,t.type);e!==n&&(ke(na,t),ke(Cn,n))}function Rf(t){na.current===t&&(Ne(Cn),Ne(na))}var Oe=Kr(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nh=[];function Cf(){for(var t=0;t<nh.length;t++)nh[t]._workInProgressVersionPrimary=null;nh.length=0}var Ll=or.ReactCurrentDispatcher,rh=or.ReactCurrentBatchConfig,Ts=0,Ve=null,Xe=null,rt=null,pu=!1,Vo=!1,sa=0,l1=0;function yt(){throw Error(B(321))}function Pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Nf(t,e,n,r,s,i){if(Ts=i,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?d1:f1,t=n(r,s),Vo){i=0;do{if(Vo=!1,sa=0,25<=i)throw Error(B(301));i+=1,rt=Xe=null,e.updateQueue=null,Ll.current=p1,t=n(r,s)}while(Vo)}if(Ll.current=mu,e=Xe!==null&&Xe.next!==null,Ts=0,rt=Xe=Ve=null,pu=!1,e)throw Error(B(300));return t}function bf(){var t=sa!==0;return sa=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ve.memoizedState=rt=t:rt=rt.next=t,rt}function ln(){if(Xe===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=rt===null?Ve.memoizedState:rt.next;if(e!==null)rt=e,Xe=t;else{if(t===null)throw Error(B(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},rt===null?Ve.memoizedState=rt=t:rt=rt.next=t}return rt}function ia(t,e){return typeof e=="function"?e(t):e}function sh(t){var e=ln(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Xe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Ts&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Ve.lanes|=f,Is|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,wn(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ve.lanes|=i,Is|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ih(t){var e=ln(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);wn(i,e.memoizedState)||(Mt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function xv(){}function Sv(t,e){var n=Ve,r=ln(),s=e(),i=!wn(r.memoizedState,s);if(i&&(r.memoizedState=s,Mt=!0),r=r.queue,Df(Rv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,oa(9,Av.bind(null,n,r,s,e),void 0,null),st===null)throw Error(B(349));Ts&30||kv(n,e,s)}return s}function kv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Av(t,e,n,r){e.value=n,e.getSnapshot=r,Cv(e)&&Pv(t)}function Rv(t,e,n){return n(function(){Cv(e)&&Pv(t)})}function Cv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function Pv(t){var e=Jn(t,1);e!==null&&vn(e,t,1,-1)}function ug(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=h1.bind(null,Ve,t),[e.memoizedState,t]}function oa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Nv(){return ln().memoizedState}function Ml(t,e,n,r){var s=Sn();Ve.flags|=t,s.memoizedState=oa(1|e,n,void 0,r===void 0?null:r)}function Hu(t,e,n,r){var s=ln();r=r===void 0?null:r;var i=void 0;if(Xe!==null){var o=Xe.memoizedState;if(i=o.destroy,r!==null&&Pf(r,o.deps)){s.memoizedState=oa(e,n,i,r);return}}Ve.flags|=t,s.memoizedState=oa(1|e,n,i,r)}function cg(t,e){return Ml(8390656,8,t,e)}function Df(t,e){return Hu(2048,8,t,e)}function bv(t,e){return Hu(4,2,t,e)}function Dv(t,e){return Hu(4,4,t,e)}function Ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vv(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4,4,Ov.bind(null,e,t),n)}function Of(){}function Lv(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Mv(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jv(t,e,n){return Ts&21?(wn(n,e)||(n=$_(),Ve.lanes|=n,Is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n)}function u1(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=rh.transition;rh.transition={};try{t(!1),e()}finally{ve=n,rh.transition=r}}function Uv(){return ln().memoizedState}function c1(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fv(t))zv(e,n);else if(n=Ev(t,e,n,r),n!==null){var s=Ct();vn(n,t,r,s),Bv(n,e,r)}}function h1(t,e,n){var r=Dr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fv(t))zv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,wn(l,o)){var u=e.interleaved;u===null?(s.next=s,Sf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Ev(t,e,s,r),n!==null&&(s=Ct(),vn(n,t,r,s),Bv(n,e,r))}}function Fv(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function zv(t,e){Vo=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}var mu={readContext:an,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},d1={readContext:an,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,Ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=c1.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:ug,useDebugValue:Of,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=ug(!1),e=t[0];return t=u1.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,s=Sn();if(De){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),st===null)throw Error(B(349));Ts&30||kv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,cg(Rv.bind(null,r,i,t),[t]),r.flags|=2048,oa(9,Av.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Sn(),e=st.identifierPrefix;if(De){var n=$n,r=Bn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=l1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},f1={readContext:an,useCallback:Lv,useContext:an,useEffect:Df,useImperativeHandle:Vv,useInsertionEffect:bv,useLayoutEffect:Dv,useMemo:Mv,useReducer:sh,useRef:Nv,useState:function(){return sh(ia)},useDebugValue:Of,useDeferredValue:function(t){var e=ln();return jv(e,Xe.memoizedState,t)},useTransition:function(){var t=sh(ia)[0],e=ln().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:Sv,useId:Uv,unstable_isNewReconciler:!1},p1={readContext:an,useCallback:Lv,useContext:an,useEffect:Df,useImperativeHandle:Vv,useInsertionEffect:bv,useLayoutEffect:Dv,useMemo:Mv,useReducer:ih,useRef:Nv,useState:function(){return ih(ia)},useDebugValue:Of,useDeferredValue:function(t){var e=ln();return Xe===null?e.memoizedState=t:jv(e,Xe.memoizedState,t)},useTransition:function(){var t=ih(ia)[0],e=ln().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:Sv,useId:Uv,unstable_isNewReconciler:!1};function mn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ld(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wu={isMounted:function(t){return(t=t._reactInternals)?bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),s=Dr(t),i=Gn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Nr(t,i,s),e!==null&&(vn(e,t,s,r),Vl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),s=Dr(t),i=Gn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Nr(t,i,s),e!==null&&(vn(e,t,s,r),Vl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Dr(t),s=Gn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Nr(t,s,r),e!==null&&(vn(e,t,r,n),Vl(e,t,r))}};function hg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,r)||!Jo(s,i):!0}function $v(t,e,n){var r=!1,s=Fr,i=e.contextType;return typeof i=="object"&&i!==null?i=an(i):(s=Ut(e)?ws:xt.current,r=e.contextTypes,i=(r=r!=null)?_i(t,s):Fr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function dg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wu.enqueueReplaceState(e,e.state,null)}function ud(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},kf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=an(i):(i=Ut(e)?ws:xt.current,s.context=_i(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ld(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Wu.enqueueReplaceState(s,s.state,null),du(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ti(t,e){try{var n="",r=e;do n+=BT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function oh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var m1=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yu||(yu=!0,wd=r),cd(t,e)},n}function Hv(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){cd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){cd(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new m1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=C1.bind(null,t,e,n),e.then(t,t))}function pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var g1=or.ReactCurrentOwner,Mt=!1;function Rt(t,e,n,r){e.child=t===null?wv(e,null,n,r):wi(e,t.child,n,r)}function gg(t,e,n,r,s){n=n.render;var i=e.ref;return hi(e,s),r=Nf(t,e,n,r,i,s),n=bf(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Zn(t,e,s)):(De&&n&&vf(e),e.flags|=1,Rt(t,e,r,s),e.child)}function yg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Wv(t,e,i,r,s)):(t=zl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,r)&&t.ref===e.ref)return Zn(t,e,s)}return e.flags|=1,t=Or(i,r),t.ref=e.ref,t.return=e,e.child=t}function Wv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Jo(i,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Mt=!0);else return e.lanes=t.lanes,Zn(t,e,s)}return hd(t,e,n,r,s)}function Kv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(ii,qt),qt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(ii,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ke(ii,qt),qt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ke(ii,qt),qt|=r;return Rt(t,e,s,n),e.child}function Gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,r,s){var i=Ut(n)?ws:xt.current;return i=_i(e,i),hi(e,s),n=Nf(t,e,n,r,i,s),r=bf(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Zn(t,e,s)):(De&&r&&vf(e),e.flags|=1,Rt(t,e,n,s),e.child)}function _g(t,e,n,r,s){if(Ut(n)){var i=!0;au(e)}else i=!1;if(hi(e,s),e.stateNode===null)jl(t,e),$v(e,n,r),ud(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=an(h):(h=Ut(n)?ws:xt.current,h=_i(e,h));var f=n.getDerivedStateFromProps,y=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&dg(e,o,r,h),gr=!1;var _=e.memoizedState;o.state=_,du(e,r,o,s),u=e.memoizedState,l!==r||_!==u||jt.current||gr?(typeof f=="function"&&(ld(e,n,f,r),u=e.memoizedState),(l=gr||hg(e,n,l,r,_,u,h))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Tv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:mn(e.type,l),o.props=h,y=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=Ut(n)?ws:xt.current,u=_i(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||_!==u)&&dg(e,o,r,u),gr=!1,_=e.memoizedState,o.state=_,du(e,r,o,s);var R=e.memoizedState;l!==y||_!==R||jt.current||gr?(typeof S=="function"&&(ld(e,n,S,r),R=e.memoizedState),(h=gr||hg(e,n,h,r,_,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return dd(t,e,n,r,i,s)}function dd(t,e,n,r,s,i){Gv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&rg(e,n,!1),Zn(t,e,i);r=e.stateNode,g1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wi(e,t.child,null,i),e.child=wi(e,null,l,i)):Rt(t,e,l,i),e.memoizedState=r.state,s&&rg(e,n,!0),e.child}function Qv(t){var e=t.stateNode;e.pendingContext?ng(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ng(t,e.context,!1),Af(t,e.containerInfo)}function vg(t,e,n,r,s){return vi(),Ef(s),e.flags|=256,Rt(t,e,n,r),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yv(t,e,n){var r=e.pendingProps,s=Oe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ke(Oe,s&1),t===null)return od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Qu(o,r,0,null),t=ys(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=pd(n),e.memoizedState=fd,t):Vf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return y1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Or(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Or(l,i):(i=ys(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=fd,r}return i=t.child,t=i.sibling,r=Or(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vf(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,r){return r!==null&&Ef(r),wi(e,t.child,null,n),t=Vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=oh(Error(B(422))),_l(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Qu({mode:"visible",children:r.children},s,0,null),i=ys(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&wi(e,t.child,null,o),e.child.memoizedState=pd(o),e.memoizedState=fd,i);if(!(e.mode&1))return _l(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(B(419)),r=oh(i,r,void 0),_l(t,e,o,r)}if(l=(o&t.childLanes)!==0,Mt||l){if(r=st,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Jn(t,s),vn(r,t,s,-1))}return zf(),r=oh(Error(B(421))),_l(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=P1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ht=Pr(s.nextSibling),Gt=e,De=!0,yn=null,t!==null&&(tn[nn++]=Bn,tn[nn++]=$n,tn[nn++]=Es,Bn=t.id,$n=t.overflow,Es=e),e=Vf(e,r.children),e.flags|=4096,e)}function wg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ad(t.return,e,n)}function ah(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Xv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Rt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ah(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&fu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}ah(e,!0,n,null,i);break;case"together":ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _1(t,e,n){switch(e.tag){case 3:Qv(e),vi();break;case 5:Iv(e);break;case 1:Ut(e.type)&&au(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ke(cu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?Yv(t,e,n):(ke(Oe,Oe.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);ke(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Xv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Kv(t,e,n)}return Zn(t,e,n)}var Jv,md,Zv,e0;Jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};Zv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ps(Cn.current);var i=null;switch(n){case"input":s=Mh(t,s),r=Mh(t,r),i=[];break;case"select":s=Le({},s,{value:void 0}),r=Le({},r,{value:void 0}),i=[];break;case"textarea":s=Fh(t,s),r=Fh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=iu)}Bh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ho.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ce("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};e0=function(t,e,n,r){n!==r&&(e.flags|=4)};function yo(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function v1(t,e,n){var r=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Ut(e.type)&&ou(),_t(e),null;case 3:return r=e.stateNode,Ei(),Ne(jt),Ne(xt),Cf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(Id(yn),yn=null))),md(t,e),_t(e),null;case 5:Rf(e);var s=ps(ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Zv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return _t(e),null}if(t=ps(Cn.current),gl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[kn]=e,r[ta]=i,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(s=0;s<So.length;s++)Ce(So[s],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Cm(r,i),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ce("invalid",r);break;case"textarea":Nm(r,i),Ce("invalid",r)}Bh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ml(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ml(r.textContent,l,t),s=["children",""+l]):Ho.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":al(r),Pm(r,i,!0);break;case"textarea":al(r),bm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=iu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[ta]=r,Jv(t,e,!1,!1),e.stateNode=t;e:{switch(o=$h(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),s=r;break;case"iframe":case"object":case"embed":Ce("load",t),s=r;break;case"video":case"audio":for(s=0;s<So.length;s++)Ce(So[s],t);s=r;break;case"source":Ce("error",t),s=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),s=r;break;case"details":Ce("toggle",t),s=r;break;case"input":Cm(t,r),s=Mh(t,r),Ce("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Le({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":Nm(t,r),s=Fh(t,r),Ce("invalid",t);break;default:s=r}Bh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?N_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&C_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wo(t,u):typeof u=="number"&&Wo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ho.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ce("scroll",t):u!=null&&sf(t,i,u,o))}switch(n){case"input":al(t),Pm(t,r,!1);break;case"textarea":al(t),bm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ai(t,!!r.multiple,i,!1):r.defaultValue!=null&&ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)e0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ps(ra.current),ps(Cn.current),gl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(i=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:ml(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ml(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return _t(e),null;case 13:if(Ne(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Ht!==null&&e.mode&1&&!(e.flags&128))_v(),vi(),e.flags|=98560,i=!1;else if(i=gl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[kn]=e}else vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),i=!1}else yn!==null&&(Id(yn),yn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Je===0&&(Je=3):zf())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Ei(),md(t,e),t===null&&Zo(e.stateNode.containerInfo),_t(e),null;case 10:return xf(e.type._context),_t(e),null;case 17:return Ut(e.type)&&ou(),_t(e),null;case 19:if(Ne(Oe),i=e.memoizedState,i===null)return _t(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)yo(i,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,yo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Oe,Oe.current&1|2),e.child}t=t.sibling}i.tail!==null&&We()>Ii&&(e.flags|=128,r=!0,yo(i,!1),e.lanes=4194304)}else{if(!r)if(t=fu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!De)return _t(e),null}else 2*We()-i.renderingStartTime>Ii&&n!==1073741824&&(e.flags|=128,r=!0,yo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=We(),e.sibling=null,n=Oe.current,ke(Oe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return Ff(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function w1(t,e){switch(wf(e),e.tag){case 1:return Ut(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ei(),Ne(jt),Ne(xt),Cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(Ne(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Oe),null;case 4:return Ei(),null;case 10:return xf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var vl=!1,Et=!1,E1=typeof WeakSet=="function"?WeakSet:Set,Q=null;function si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function gd(t,e,n){try{n()}catch(r){ze(t,e,r)}}var Eg=!1;function T1(t,e){if(Zh=nu,t=iv(),_f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,y=t,_=null;t:for(;;){for(var S;y!==n||s!==0&&y.nodeType!==3||(l=o+s),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(S=y.firstChild)!==null;)_=y,y=S;for(;;){if(y===t)break t;if(_===n&&++h===s&&(l=o),_===i&&++f===r&&(u=o),(S=y.nextSibling)!==null)break;y=_,_=y.parentNode}y=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:t,selectionRange:n},nu=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,O=R.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:mn(e.type,N),O);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){ze(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=Eg,Eg=!1,R}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&gd(e,n,i)}s=s.next}while(s!==r)}}function Ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[ta],delete e[rd],delete e[s1],delete e[i1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function n0(t){return t.tag===5||t.tag===3||t.tag===4}function Tg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(r!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var at=null,gn=!1;function dr(t,e,n){for(n=n.child;n!==null;)r0(t,e,n),n=n.sibling}function r0(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:Et||si(n,e);case 6:var r=at,s=gn;at=null,dr(t,e,n),at=r,gn=s,at!==null&&(gn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(gn?(t=at,n=n.stateNode,t.nodeType===8?eh(t.parentNode,n):t.nodeType===1&&eh(t,n),Yo(t)):eh(at,n.stateNode));break;case 4:r=at,s=gn,at=n.stateNode.containerInfo,gn=!0,dr(t,e,n),at=r,gn=s;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&gd(n,e,o),s=s.next}while(s!==r)}dr(t,e,n);break;case 1:if(!Et&&(si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,e,l)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,dr(t,e,n),Et=r):dr(t,e,n);break;default:dr(t,e,n)}}function Ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new E1),e.forEach(function(r){var s=N1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:at=l.stateNode,gn=!1;break e;case 3:at=l.stateNode.containerInfo,gn=!0;break e;case 4:at=l.stateNode.containerInfo,gn=!0;break e}l=l.return}if(at===null)throw Error(B(160));r0(i,o,s),at=null,gn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){ze(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s0(e,t),e=e.sibling}function s0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),In(t),r&4){try{Lo(3,t,t.return),Ku(3,t)}catch(N){ze(t,t.return,N)}try{Lo(5,t,t.return)}catch(N){ze(t,t.return,N)}}break;case 1:pn(e,t),In(t),r&512&&n!==null&&si(n,n.return);break;case 5:if(pn(e,t),In(t),r&512&&n!==null&&si(n,n.return),t.flags&32){var s=t.stateNode;try{Wo(s,"")}catch(N){ze(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&k_(s,i),$h(l,o);var h=$h(l,i);for(o=0;o<u.length;o+=2){var f=u[o],y=u[o+1];f==="style"?N_(s,y):f==="dangerouslySetInnerHTML"?C_(s,y):f==="children"?Wo(s,y):sf(s,f,y,h)}switch(l){case"input":jh(s,i);break;case"textarea":A_(s,i);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?ai(s,!!i.multiple,S,!1):_!==!!i.multiple&&(i.defaultValue!=null?ai(s,!!i.multiple,i.defaultValue,!0):ai(s,!!i.multiple,i.multiple?[]:"",!1))}s[ta]=i}catch(N){ze(t,t.return,N)}}break;case 6:if(pn(e,t),In(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){ze(t,t.return,N)}}break;case 3:if(pn(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(N){ze(t,t.return,N)}break;case 4:pn(e,t),In(t);break;case 13:pn(e,t),In(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(jf=We())),r&4&&Ig(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(h=Et)||f,pn(e,t),Et=h):pn(e,t),In(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(y=Q=f;Q!==null;){switch(_=Q,S=_.child,_.tag){case 0:case 11:case 14:case 15:Lo(4,_,_.return);break;case 1:si(_,_.return);var R=_.stateNode;if(typeof R.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){ze(r,n,N)}}break;case 5:si(_,_.return);break;case 22:if(_.memoizedState!==null){Sg(y);continue}}S!==null?(S.return=_,Q=S):Sg(y)}f=f.sibling}e:for(f=null,y=t;;){if(y.tag===5){if(f===null){f=y;try{s=y.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=P_("display",o))}catch(N){ze(t,t.return,N)}}}else if(y.tag===6){if(f===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(N){ze(t,t.return,N)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;f===y&&(f=null),y=y.return}f===y&&(f=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:pn(e,t),In(t),r&4&&Ig(t);break;case 21:break;default:pn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(n0(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Wo(s,""),r.flags&=-33);var i=Tg(t);vd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Tg(t);_d(t,l,o);break;default:throw Error(B(161))}}catch(u){ze(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I1(t,e,n){Q=t,i0(t)}function i0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||vl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Et;l=vl;var h=Et;if(vl=o,(Et=u)&&!h)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?kg(s):u!==null?(u.return=o,Q=u):kg(s);for(;i!==null;)Q=i,i0(i),i=i.sibling;Q=s,vl=l,Et=h}xg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):xg(t)}}function xg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||Ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&lg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var y=f.dehydrated;y!==null&&Yo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Et||e.flags&512&&yd(e)}catch(_){ze(e,e.return,_)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Sg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function kg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ku(4,e)}catch(u){ze(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ze(e,s,u)}}var i=e.return;try{yd(e)}catch(u){ze(e,i,u)}break;case 5:var o=e.return;try{yd(e)}catch(u){ze(e,o,u)}}}catch(u){ze(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var x1=Math.ceil,gu=or.ReactCurrentDispatcher,Lf=or.ReactCurrentOwner,sn=or.ReactCurrentBatchConfig,me=0,st=null,Qe=null,ct=0,qt=0,ii=Kr(0),Je=0,aa=null,Is=0,Gu=0,Mf=0,Mo=null,Vt=null,jf=0,Ii=1/0,Fn=null,yu=!1,wd=null,br=null,wl=!1,Sr=null,_u=0,jo=0,Ed=null,Ul=-1,Fl=0;function Ct(){return me&6?We():Ul!==-1?Ul:Ul=We()}function Dr(t){return t.mode&1?me&2&&ct!==0?ct&-ct:a1.transition!==null?(Fl===0&&(Fl=$_()),Fl):(t=ve,t!==0||(t=window.event,t=t===void 0?16:Y_(t.type)),t):1}function vn(t,e,n,r){if(50<jo)throw jo=0,Ed=null,Error(B(185));va(t,n,r),(!(me&2)||t!==st)&&(t===st&&(!(me&2)&&(Gu|=n),Je===4&&_r(t,ct)),Ft(t,r),n===1&&me===0&&!(e.mode&1)&&(Ii=We()+500,qu&&Gr()))}function Ft(t,e){var n=t.callbackNode;aI(t,e);var r=tu(t,t===st?ct:0);if(r===0)n!==null&&Vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vm(n),e===1)t.tag===0?o1(Ag.bind(null,t)):mv(Ag.bind(null,t)),n1(function(){!(me&6)&&Gr()}),n=null;else{switch(q_(r)){case 1:n=cf;break;case 4:n=z_;break;case 16:n=eu;break;case 536870912:n=B_;break;default:n=eu}n=f0(n,o0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o0(t,e){if(Ul=-1,Fl=0,me&6)throw Error(B(327));var n=t.callbackNode;if(di()&&t.callbackNode!==n)return null;var r=tu(t,t===st?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vu(t,r);else{e=r;var s=me;me|=2;var i=l0();(st!==t||ct!==e)&&(Fn=null,Ii=We()+500,gs(t,e));do try{A1();break}catch(l){a0(t,l)}while(!0);If(),gu.current=i,me=s,Qe!==null?e=0:(st=null,ct=0,e=Je)}if(e!==0){if(e===2&&(s=Gh(t),s!==0&&(r=s,e=Td(t,s))),e===1)throw n=aa,gs(t,0),_r(t,r),Ft(t,We()),n;if(e===6)_r(t,r);else{if(s=t.current.alternate,!(r&30)&&!S1(s)&&(e=vu(t,r),e===2&&(i=Gh(t),i!==0&&(r=i,e=Td(t,i))),e===1))throw n=aa,gs(t,0),_r(t,r),Ft(t,We()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:cs(t,Vt,Fn);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=jf+500-We(),10<e)){if(tu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=nd(cs.bind(null,t,Vt,Fn),e);break}cs(t,Vt,Fn);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-_n(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x1(r/1960))-r,10<r){t.timeoutHandle=nd(cs.bind(null,t,Vt,Fn),r);break}cs(t,Vt,Fn);break;case 5:cs(t,Vt,Fn);break;default:throw Error(B(329))}}}return Ft(t,We()),t.callbackNode===n?o0.bind(null,t):null}function Td(t,e){var n=Mo;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=vu(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&Id(e)),t}function Id(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function S1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!wn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~Mf,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function Ag(t){if(me&6)throw Error(B(327));di();var e=tu(t,0);if(!(e&1))return Ft(t,We()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var r=Gh(t);r!==0&&(e=r,n=Td(t,r))}if(n===1)throw n=aa,gs(t,0),_r(t,e),Ft(t,We()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cs(t,Vt,Fn),Ft(t,We()),null}function Uf(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Ii=We()+500,qu&&Gr())}}function xs(t){Sr!==null&&Sr.tag===0&&!(me&6)&&di();var e=me;me|=1;var n=sn.transition,r=ve;try{if(sn.transition=null,ve=1,t)return t()}finally{ve=r,sn.transition=n,me=e,!(me&6)&&Gr()}}function Ff(){qt=ii.current,Ne(ii)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,t1(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ou();break;case 3:Ei(),Ne(jt),Ne(xt),Cf();break;case 5:Rf(r);break;case 4:Ei();break;case 13:Ne(Oe);break;case 19:Ne(Oe);break;case 10:xf(r.type._context);break;case 22:case 23:Ff()}n=n.return}if(st=t,Qe=t=Or(t.current,null),ct=qt=e,Je=0,aa=null,Mf=Gu=Is=0,Vt=Mo=null,fs!==null){for(e=0;e<fs.length;e++)if(n=fs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}fs=null}return t}function a0(t,e){do{var n=Qe;try{if(If(),Ll.current=mu,pu){for(var r=Ve.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}pu=!1}if(Ts=0,rt=Xe=Ve=null,Vo=!1,sa=0,Lf.current=null,n===null||n.return===null){Je=1,aa=e,Qe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ct,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,y=f.tag;if(!(f.mode&1)&&(y===0||y===11||y===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=pg(o);if(S!==null){S.flags&=-257,mg(S,o,l,i,e),S.mode&1&&fg(i,h,e),e=S,u=h;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){fg(i,h,e),zf();break e}u=Error(B(426))}}else if(De&&l.mode&1){var O=pg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),mg(O,o,l,i,e),Ef(Ti(u,l));break e}}i=u=Ti(u,l),Je!==4&&(Je=2),Mo===null?Mo=[i]:Mo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=qv(i,u,e);ag(i,T);break e;case 1:l=u;var w=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(br===null||!br.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Hv(i,l,e);ag(i,b);break e}}i=i.return}while(i!==null)}c0(n)}catch(z){e=z,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function l0(){var t=gu.current;return gu.current=mu,t===null?mu:t}function zf(){(Je===0||Je===3||Je===2)&&(Je=4),st===null||!(Is&268435455)&&!(Gu&268435455)||_r(st,ct)}function vu(t,e){var n=me;me|=2;var r=l0();(st!==t||ct!==e)&&(Fn=null,gs(t,e));do try{k1();break}catch(s){a0(t,s)}while(!0);if(If(),me=n,gu.current=r,Qe!==null)throw Error(B(261));return st=null,ct=0,Je}function k1(){for(;Qe!==null;)u0(Qe)}function A1(){for(;Qe!==null&&!JT();)u0(Qe)}function u0(t){var e=d0(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?c0(t):Qe=e,Lf.current=null}function c0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=w1(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,Qe=null;return}}else if(n=v1(n,e,qt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Je===0&&(Je=5)}function cs(t,e,n){var r=ve,s=sn.transition;try{sn.transition=null,ve=1,R1(t,e,n,r)}finally{sn.transition=s,ve=r}return null}function R1(t,e,n,r){do di();while(Sr!==null);if(me&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(lI(t,i),t===st&&(Qe=st=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,f0(eu,function(){return di(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=sn.transition,sn.transition=null;var o=ve;ve=1;var l=me;me|=4,Lf.current=null,T1(t,n),s0(n,t),GI(ed),nu=!!Zh,ed=Zh=null,t.current=n,I1(n),ZT(),me=l,ve=o,sn.transition=i}else t.current=n;if(wl&&(wl=!1,Sr=t,_u=s),i=t.pendingLanes,i===0&&(br=null),nI(n.stateNode),Ft(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(yu)throw yu=!1,t=wd,wd=null,t;return _u&1&&t.tag!==0&&di(),i=t.pendingLanes,i&1?t===Ed?jo++:(jo=0,Ed=t):jo=0,Gr(),null}function di(){if(Sr!==null){var t=q_(_u),e=sn.transition,n=ve;try{if(sn.transition=null,ve=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,_u=0,me&6)throw Error(B(331));var s=me;for(me|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(Q=h;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:Lo(8,f,i)}var y=f.child;if(y!==null)y.return=f,Q=y;else for(;Q!==null;){f=Q;var _=f.sibling,S=f.return;if(t0(f),f===h){Q=null;break}if(_!==null){_.return=S,Q=_;break}Q=S}}}var R=i.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lo(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,Q=T;break e}Q=i.return}}var w=t.current;for(Q=w;Q!==null;){o=Q;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,Q=k;else e:for(o=w;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ku(9,l)}}catch(z){ze(l,l.return,z)}if(l===o){Q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,Q=b;break e}Q=l.return}}if(me=s,Gr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Uu,t)}catch{}r=!0}return r}finally{ve=n,sn.transition=e}}return!1}function Rg(t,e,n){e=Ti(n,e),e=qv(t,e,1),t=Nr(t,e,1),e=Ct(),t!==null&&(va(t,1,e),Ft(t,e))}function ze(t,e,n){if(t.tag===3)Rg(t,t,n);else for(;e!==null;){if(e.tag===3){Rg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=Ti(n,t),t=Hv(e,t,1),e=Nr(e,t,1),t=Ct(),e!==null&&(va(e,1,t),Ft(e,t));break}}e=e.return}}function C1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(ct&n)===n&&(Je===4||Je===3&&(ct&130023424)===ct&&500>We()-jf?gs(t,0):Mf|=n),Ft(t,e)}function h0(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=Ct();t=Jn(t,e),t!==null&&(va(t,e,n),Ft(t,n))}function P1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h0(t,n)}function N1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),h0(t,n)}var d0;d0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||jt.current)Mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mt=!1,_1(t,e,n);Mt=!!(t.flags&131072)}else Mt=!1,De&&e.flags&1048576&&gv(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var s=_i(e,xt.current);hi(e,n),s=Nf(null,e,r,t,s,n);var i=bf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(i=!0,au(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,kf(e),s.updater=Wu,e.stateNode=s,s._reactInternals=e,ud(e,r,t,n),e=dd(null,e,r,!0,i,n)):(e.tag=0,De&&i&&vf(e),Rt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=D1(r),t=mn(r,t),s){case 0:e=hd(null,e,r,t,n);break e;case 1:e=_g(null,e,r,t,n);break e;case 11:e=gg(null,e,r,t,n);break e;case 14:e=yg(null,e,r,mn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mn(r,s),hd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mn(r,s),_g(t,e,r,s,n);case 3:e:{if(Qv(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Tv(t,e),du(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ti(Error(B(423)),e),e=vg(t,e,r,n,s);break e}else if(r!==s){s=Ti(Error(B(424)),e),e=vg(t,e,r,n,s);break e}else for(Ht=Pr(e.stateNode.containerInfo.firstChild),Gt=e,De=!0,yn=null,n=wv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),r===s){e=Zn(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return Iv(e),t===null&&od(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,td(r,s)?o=null:i!==null&&td(r,i)&&(e.flags|=32),Gv(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&od(e),null;case 13:return Yv(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wi(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mn(r,s),gg(t,e,r,s,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ke(cu,r._currentValue),r._currentValue=o,i!==null)if(wn(i.value,o)){if(i.children===s.children&&!jt.current){e=Zn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Gn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ad(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ad(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Rt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,hi(e,n),s=an(s),r=r(s),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,s=mn(r,e.pendingProps),s=mn(r.type,s),yg(t,e,r,s,n);case 15:return Wv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:mn(r,s),jl(t,e),e.tag=1,Ut(r)?(t=!0,au(e)):t=!1,hi(e,n),$v(e,r,s),ud(e,r,s,n),dd(null,e,r,!0,t,n);case 19:return Xv(t,e,n);case 22:return Kv(t,e,n)}throw Error(B(156,e.tag))};function f0(t,e){return F_(t,e)}function b1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new b1(t,e,n,r)}function Bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D1(t){if(typeof t=="function")return Bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===af)return 11;if(t===lf)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return ys(n.children,s,i,e);case of:o=8,s|=8;break;case Dh:return t=rn(12,n,e,s|2),t.elementType=Dh,t.lanes=i,t;case Oh:return t=rn(13,n,e,s),t.elementType=Oh,t.lanes=i,t;case Vh:return t=rn(19,n,e,s),t.elementType=Vh,t.lanes=i,t;case I_:return Qu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E_:o=10;break e;case T_:o=9;break e;case af:o=11;break e;case lf:o=14;break e;case mr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=rn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ys(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=rn(22,t,r,e),t.elementType=I_,t.lanes=n,t.stateNode={isHidden:!1},t}function lh(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function uh(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function O1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,r,s,i,o,l,u){return t=new O1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=rn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(i),t}function V1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function p0(t){if(!t)return Fr;t=t._reactInternals;e:{if(bs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ut(n))return pv(t,n,e)}return e}function m0(t,e,n,r,s,i,o,l,u){return t=$f(n,r,!0,t,s,i,o,l,u),t.context=p0(null),n=t.current,r=Ct(),s=Dr(n),i=Gn(r,s),i.callback=e??null,Nr(n,i,s),t.current.lanes=s,va(t,s,r),Ft(t,r),t}function Yu(t,e,n,r){var s=e.current,i=Ct(),o=Dr(s);return n=p0(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(s,e,o),t!==null&&(vn(t,s,o,i),Vl(t,s,o)),o}function wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Cg(t,e),(t=t.alternate)&&Cg(t,e)}function L1(){return null}var g0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}Xu.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Yu(t,e,null,null)};Xu.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xs(function(){Yu(null,t,null,null)}),e[Xn]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=K_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&Q_(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function M1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=wu(o);i.call(h)}}var o=m0(e,r,t,0,null,!1,!1,"",Pg);return t._reactRootContainer=o,t[Xn]=o.current,Zo(t.nodeType===8?t.parentNode:t),xs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=wu(u);l.call(h)}}var u=$f(t,0,!1,null,null,!1,!1,"",Pg);return t._reactRootContainer=u,t[Xn]=u.current,Zo(t.nodeType===8?t.parentNode:t),xs(function(){Yu(e,u,n,r)}),u}function Zu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=wu(o);l.call(u)}}Yu(e,o,t,s)}else o=M1(n,e,t,s,r);return wu(o)}H_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xo(e.pendingLanes);n!==0&&(hf(e,n|1),Ft(e,We()),!(me&6)&&(Ii=We()+500,Gr()))}break;case 13:xs(function(){var r=Jn(t,1);if(r!==null){var s=Ct();vn(r,t,1,s)}}),qf(t,1)}};df=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=Ct();vn(e,t,134217728,n)}qf(t,134217728)}};W_=function(t){if(t.tag===13){var e=Dr(t),n=Jn(t,e);if(n!==null){var r=Ct();vn(n,t,e,r)}qf(t,e)}};K_=function(){return ve};G_=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Hh=function(t,e,n){switch(e){case"input":if(jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=$u(r);if(!s)throw Error(B(90));S_(r),jh(r,s)}}}break;case"textarea":A_(t,n);break;case"select":e=n.value,e!=null&&ai(t,!!n.multiple,e,!1)}};O_=Uf;V_=xs;var j1={usingClientEntryPoint:!1,Events:[Ea,Zs,$u,b_,D_,Uf]},_o={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U1={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j_(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Uu=El.inject(U1),Rn=El}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(B(200));return V1(t,e,null,n)};Yt.createRoot=function(t,e){if(!Wf(t))throw Error(B(299));var n=!1,r="",s=g0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,r,s),t[Xn]=e.current,Zo(t.nodeType===8?t.parentNode:t),new Hf(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=j_(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return xs(t)};Yt.hydrate=function(t,e,n){if(!Ju(e))throw Error(B(200));return Zu(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=g0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m0(e,null,t,1,n??null,s,!1,i,o),t[Xn]=e.current,Zo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Xu(e)};Yt.render=function(t,e,n){if(!Ju(e))throw Error(B(200));return Zu(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(B(40));return t._reactRootContainer?(xs(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Yt.unstable_batchedUpdates=Uf;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Zu(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0)}catch(t){console.error(t)}}y0(),y_.exports=Yt;var F1=y_.exports,Ng=F1;Nh.createRoot=Ng.createRoot,Nh.hydrateRoot=Ng.hydrateRoot;var bg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},z1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},v0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,y=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(_=64)),r.push(n[f],n[y],n[_],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):z1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||y==null)throw new B1;const _=i<<2|l>>4;if(r.push(_),h!==64){const S=l<<4&240|h>>2;if(r.push(S),y!==64){const R=h<<6&192|y;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class B1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $1=function(t){const e=_0(t);return v0.encodeByteArray(e,!0)},Eu=function(t){return $1(t).replace(/\./g,"")},w0=function(t){try{return v0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=()=>q1().__FIREBASE_DEFAULTS__,W1=()=>{if(typeof process>"u"||typeof bg>"u")return;const t=bg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},K1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&w0(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return H1()||W1()||K1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},E0=t=>{var e,n;return(n=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},T0=t=>{const e=E0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},I0=()=>{var t;return(t=ec())===null||t===void 0?void 0:t.config},x0=t=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eu(JSON.stringify(n)),Eu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function Y1(){var t;const e=(t=ec())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function X1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function J1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ex(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tx(){return!Y1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nx(){try{return typeof indexedDB=="object"}catch{return!1}}function rx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sx,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ia.prototype.create)}}class Ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ix(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,l,r)}}function ix(t,e){return t.replace(ox,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ox=/\{\$([^}]+)}/g;function ax(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Dg(i)&&Dg(o)){if(!Tu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lx(t,e){const n=new ux(t,e);return n.subscribe.bind(n)}class ux{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cx(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ch),s.error===void 0&&(s.error=ch),s.complete===void 0&&(s.complete=ch);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ch(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new G1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fx(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dx(t){return t===hs?void 0:t}function fx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const mx={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},gx=ce.INFO,yx={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},_x=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kf{constructor(e){this.name=e,this._logLevel=gx,this._logHandler=_x,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const vx=(t,e)=>e.some(n=>t instanceof n);let Og,Vg;function wx(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ex(){return Vg||(Vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k0=new WeakMap,xd=new WeakMap,A0=new WeakMap,hh=new WeakMap,Gf=new WeakMap;function Tx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&k0.set(n,t)}).catch(()=>{}),Gf.set(e,t),e}function Ix(t){if(xd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xd.set(t,e)}let Sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||A0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xx(t){Sd=t(Sd)}function Sx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dh(this),e,...n);return A0.set(r,e.sort?e.sort():[e]),Vr(r)}:Ex().includes(t)?function(...e){return t.apply(dh(this),e),Vr(k0.get(this))}:function(...e){return Vr(t.apply(dh(this),e))}}function kx(t){return typeof t=="function"?Sx(t):(t instanceof IDBTransaction&&Ix(t),vx(t,wx())?new Proxy(t,Sd):t)}function Vr(t){if(t instanceof IDBRequest)return Tx(t);if(hh.has(t))return hh.get(t);const e=kx(t);return e!==t&&(hh.set(t,e),Gf.set(e,t)),e}const dh=t=>Gf.get(t);function Ax(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Vr(o.result),u.oldVersion,u.newVersion,Vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Rx=["get","getKey","getAll","getAllKeys","count"],Cx=["put","add","delete","clear"],fh=new Map;function Lg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Cx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Rx.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return fh.set(e,i),i}xx(t=>({...t,get:(e,n,r)=>Lg(e,n)||t.get(e,n,r),has:(e,n)=>!!Lg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",Mg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Kf("@firebase/app"),bx="@firebase/app-compat",Dx="@firebase/analytics-compat",Ox="@firebase/analytics",Vx="@firebase/app-check-compat",Lx="@firebase/app-check",Mx="@firebase/auth",jx="@firebase/auth-compat",Ux="@firebase/database",Fx="@firebase/data-connect",zx="@firebase/database-compat",Bx="@firebase/functions",$x="@firebase/functions-compat",qx="@firebase/installations",Hx="@firebase/installations-compat",Wx="@firebase/messaging",Kx="@firebase/messaging-compat",Gx="@firebase/performance",Qx="@firebase/performance-compat",Yx="@firebase/remote-config",Xx="@firebase/remote-config-compat",Jx="@firebase/storage",Zx="@firebase/storage-compat",eS="@firebase/firestore",tS="@firebase/vertexai-preview",nS="@firebase/firestore-compat",rS="firebase",sS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="[DEFAULT]",iS={[kd]:"fire-core",[bx]:"fire-core-compat",[Ox]:"fire-analytics",[Dx]:"fire-analytics-compat",[Lx]:"fire-app-check",[Vx]:"fire-app-check-compat",[Mx]:"fire-auth",[jx]:"fire-auth-compat",[Ux]:"fire-rtdb",[Fx]:"fire-data-connect",[zx]:"fire-rtdb-compat",[Bx]:"fire-fn",[$x]:"fire-fn-compat",[qx]:"fire-iid",[Hx]:"fire-iid-compat",[Wx]:"fire-fcm",[Kx]:"fire-fcm-compat",[Gx]:"fire-perf",[Qx]:"fire-perf-compat",[Yx]:"fire-rc",[Xx]:"fire-rc-compat",[Jx]:"fire-gcs",[Zx]:"fire-gcs-compat",[eS]:"fire-fst",[nS]:"fire-fst-compat",[tS]:"fire-vertex","fire-js":"fire-js",[rS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map,oS=new Map,Rd=new Map;function jg(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(Rd.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Rd.set(e,t);for(const n of Iu.values())jg(n,t);for(const n of oS.values())jg(n,t);return!0}function tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new Ia("app","Firebase",aS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=sS;function R0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ad,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Lr.create("bad-app-name",{appName:String(s)});if(n||(n=I0()),!n)throw Lr.create("no-options");const i=Iu.get(s);if(i){if(Tu(n,i.options)&&Tu(r,i.config))return i;throw Lr.create("duplicate-app",{appName:s})}const o=new px(s);for(const u of Rd.values())o.addComponent(u);const l=new lS(n,r,o);return Iu.set(s,l),l}function Qf(t=Ad){const e=Iu.get(t);if(!e&&t===Ad&&I0())return R0();if(!e)throw Lr.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let s=(r=iS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(l.join(" "));return}Ss(new zr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="firebase-heartbeat-database",cS=1,la="firebase-heartbeat-store";let ph=null;function C0(){return ph||(ph=Ax(uS,cS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(la)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),ph}async function hS(t){try{const n=(await C0()).transaction(la),r=await n.objectStore(la).get(P0(t));return await n.done,r}catch(e){if(e instanceof Ln)er.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function Ug(t,e){try{const r=(await C0()).transaction(la,"readwrite");await r.objectStore(la).put(e,P0(t)),await r.done}catch(n){if(n instanceof Ln)er.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function P0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=1024,fS=30*24*60*60*1e3;class pS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fg(),{heartbeatsToSend:r,unsentEntries:s}=mS(this._heartbeatsCache.heartbeats),i=Eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return er.warn(n),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function mS(t,e=dS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nx()?rx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ug(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ug(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zg(t){return Eu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t){Ss(new zr("platform-logger",e=>new Px(e),"PRIVATE")),Ss(new zr("heartbeat",e=>new pS(e),"PRIVATE")),Pn(kd,Mg,t),Pn(kd,Mg,"esm2017"),Pn("fire-js","")}yS("");var _S="firebase",vS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(_S,vS,"app");function Yf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function N0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wS=N0,b0=new Ia("auth","Firebase",N0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Kf("@firebase/auth");function ES(t,...e){xu.logLevel<=ce.WARN&&xu.warn(`Auth (${Ds}): ${t}`,...e)}function Bl(t,...e){xu.logLevel<=ce.ERROR&&xu.error(`Auth (${Ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,...e){throw Xf(t,...e)}function Nn(t,...e){return Xf(t,...e)}function D0(t,e,n){const r=Object.assign(Object.assign({},wS()),{[e]:n});return new Ia("auth","Firebase",r).create(e,{appName:t.name})}function Mr(t){return D0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return b0.create(t,...e)}function ne(t,e,...n){if(!t)throw Xf(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function nr(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TS(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TS()||J1()||"connection"in navigator)?navigator.onLine:!0}function xS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=Q1()||Z1()}get(){return IS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=new Sa(3e4,6e4);function nc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oi(t,e,n,r,s={}){return V0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return X1()||(h.referrerPolicy="no-referrer"),O0.fetch()(M0(t,t.config.apiHost,n,l),h)})}async function V0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SS),e);try{const s=new AS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Tl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Tl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw D0(t,f,h);tr(t,f)}}catch(s){if(s instanceof Ln)throw s;tr(t,"network-request-failed",{message:String(s)})}}async function L0(t,e,n,r,s={}){const i=await Oi(t,e,n,r,s);return"mfaPendingCredential"in i&&tr(t,"multi-factor-auth-required",{_serverResponse:i}),i}function M0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Jf(t.config,s):`${t.config.apiScheme}://${s}`}class AS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),kS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e){return Oi(t,"POST","/v1/accounts:delete",e)}async function j0(t,e){return Oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CS(t,e=!1){const n=Be(t),r=await n.getIdToken(e),s=Zf(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Uo(mh(s.auth_time)),issuedAtTime:Uo(mh(s.iat)),expirationTime:Uo(mh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mh(t){return Number(t)*1e3}function Zf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=w0(n);return s?JSON.parse(s):(Bl("Failed to decode base64 JWT payload"),null)}catch(s){return Bl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $g(t){const e=Zf(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&PS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uo(this.lastLoginAt),this.creationTime=Uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ua(t,j0(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?U0(i.providerUserInfo):[],l=DS(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Pd(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,y)}async function bS(t){const e=Be(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function U0(t){return t.map(e=>{var{providerId:n}=e,r=Yf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e){const n=await V0(t,{},async()=>{const r=xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=M0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",O0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VS(t,e){return Oi(t,"POST","/v2/accounts:revokeToken",nc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=$g(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fi;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ua(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CS(this,e)}reload(){return bS(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await ua(this,RS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,f;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:b,isAnonymous:z,providerData:U,stsTokenManager:v}=n;ne(k&&v,e,"internal-error");const m=fi.fromJSON(this.name,v);ne(typeof k=="string",e,"internal-error"),fr(y,e.name),fr(_,e.name),ne(typeof b=="boolean",e,"internal-error"),ne(typeof z=="boolean",e,"internal-error"),fr(S,e.name),fr(R,e.name),fr(N,e.name),fr(O,e.name),fr(T,e.name),fr(w,e.name);const E=new Wn({uid:k,auth:e,email:_,emailVerified:b,displayName:y,isAnonymous:z,photoURL:R,phoneNumber:S,tenantId:N,stsTokenManager:m,createdAt:T,lastLoginAt:w});return U&&Array.isArray(U)&&(E.providerData=U.map(x=>Object.assign({},x))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new fi;s.updateFromServerResponse(n);const i=new Wn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Su(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?U0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new fi;l.updateFromIdToken(r);const u=new Wn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Pd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Map;function Kn(t){nr(t instanceof Function,"Expected a class definition");let e=qg.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F0.type="NONE";const Hg=F0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$l(this.userKey,s.apiKey,i),this.fullPersistenceKey=$l("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pi(Kn(Hg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Kn(Hg);const o=$l(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const y=Wn._fromJSON(e,f);h!==i&&(l=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new pi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new pi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W0(e))return"Blackberry";if(K0(e))return"Webos";if(B0(e))return"Safari";if((e.includes("chrome/")||$0(e))&&!e.includes("edge/"))return"Chrome";if(H0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z0(t=St()){return/firefox\//i.test(t)}function B0(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $0(t=St()){return/crios\//i.test(t)}function q0(t=St()){return/iemobile/i.test(t)}function H0(t=St()){return/android/i.test(t)}function W0(t=St()){return/blackberry/i.test(t)}function K0(t=St()){return/webos/i.test(t)}function ep(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LS(t=St()){var e;return ep(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MS(){return ex()&&document.documentMode===10}function G0(t=St()){return ep(t)||H0(t)||K0(t)||W0(t)||/windows phone/i.test(t)||q0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e=[]){let n;switch(t){case"Browser":n=Wg(St());break;case"Worker":n=`${Wg(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t,e={}){return Oi(t,"GET","/v2/passwordPolicy",nc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=6;class zS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new jS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await j0(this,{idToken:e}),r=await Wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(Mr(this));const n=e?Be(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await US(this),n=new zS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ES(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rc(t){return Be(t)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=lx(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $S(t){tp=t}function qS(t){return tp.loadJS(t)}function HS(){return tp.gapiScript}function WS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t,e){const n=tc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Tu(i,e??{}))return s;tr(s,"already-initialized")}return n.initialize({options:e})}function GS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QS(t,e,n){const r=rc(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Y0(e),{host:o,port:l}=YS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),XS()}function Y0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YS(t){const e=Y0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gg(o)}}}function Gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e){return L0(t,"POST","/v1/accounts:signInWithIdp",nc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="http://localhost";class ks extends X0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ks(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:JS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends J0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ka{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ks._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ka{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ka{constructor(){super("twitter.com")}static credential(e,n){return ks._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t,e){return L0(t,"POST","/v1/accounts:signUp",nc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wn._fromIdTokenResponse(e,r,s),o=Qg(r);return new Br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qg(r);return new Br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t){var e;if(qn(t.app))return Promise.reject(Mr(t));const n=rc(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Br({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ZS(n,{returnSecureToken:!0}),s=await Br._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ku(e,n,r,s)}}function Z0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(t,i,e,r):i})}async function tk(t,e,n=!1){const r=await ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e,n=!1){const{auth:r}=t;if(qn(r.app))return Promise.reject(Mr(r));const s="reauthenticate";try{const i=await ua(t,Z0(r,s,e,t),n);ne(i.idToken,r,"internal-error");const o=Zf(i.idToken);ne(o,r,"internal-error");const{sub:l}=o;return ne(t.uid===l,r,"user-mismatch"),Br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e,n=!1){if(qn(t.app))return Promise.reject(Mr(t));const r="signIn",s=await Z0(t,r,e),i=await Br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function sk(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function ik(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function ok(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}const Au="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=1e3,lk=10;class tw extends ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=G0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);MS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tw.type="LOCAL";const uk=tw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nw.type="SESSION";const rw=nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await ck(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=np("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const _=y;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function dk(t){bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mk(){return sw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="firebaseLocalStorageDb",gk=1,Ru="firebaseLocalStorage",ow="fbase_key";class Aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ic(t,e){return t.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function yk(){const t=indexedDB.deleteDatabase(iw);return new Aa(t).toPromise()}function Nd(){const t=indexedDB.open(iw,gk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ru,{keyPath:ow})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ru)?e(r):(r.close(),await yk(),e(await Nd()))})})}async function Yg(t,e,n){const r=ic(t,!0).put({[ow]:e,value:n});return new Aa(r).toPromise()}async function _k(t,e){const n=ic(t,!1).get(e),r=await new Aa(n).toPromise();return r===void 0?null:r.value}function Xg(t,e){const n=ic(t,!0).delete(e);return new Aa(n).toPromise()}const vk=800,wk=3;class aw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(mk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fk(),!this.activeServiceWorker)return;this.sender=new hk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nd();return await Yg(e,Au,"1"),await Xg(e,Au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_k(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ic(s,!1).getAll();return new Aa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aw.type="LOCAL";const Ek=aw;new Sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t,e){return e?Kn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends X0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ik(t){return rk(t.auth,new rp(t),t.bypassAuthState)}function xk(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),nk(n,new rp(t),t.bypassAuthState)}async function Sk(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),tk(n,new rp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ik;case"linkViaPopup":case"linkViaRedirect":return Sk;case"reauthViaPopup":case"reauthViaRedirect":return xk;default:tr(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new Sa(2e3,1e4);class oi extends lw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kk.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="pendingRedirect",ql=new Map;class Rk extends lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ql.get(this.auth._key());if(!e){try{const r=await Ck(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ql.set(this.auth._key(),e)}return this.bypassAuthState||ql.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ck(t,e){const n=bk(e),r=Nk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Pk(t,e){ql.set(t._key(),e)}function Nk(t){return Kn(t._redirectPersistence)}function bk(t){return $l(Ak,t.config.apiKey,t.name)}async function Dk(t,e,n=!1){if(qn(t.app))return Promise.reject(Mr(t));const r=rc(t),s=Tk(r,e),o=await new Rk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=10*60*1e3;class Vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ok&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e={}){return Oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uk=/^https?/;async function Fk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mk(t);for(const n of e)try{if(zk(n))return}catch{}tr(t,"unauthorized-domain")}function zk(t){const e=Cd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Uk.test(n))return!1;if(jk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new Sa(3e4,6e4);function Zg(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $k(t){return new Promise((e,n)=>{var r,s,i;function o(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(Nn(t,"network-request-failed"))},timeout:Bk.get()})}if(!((s=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=bn().gapi)===null||i===void 0)&&i.load)o();else{const l=WS("iframefcb");return bn()[l]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},qS(`${HS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function qk(t){return Hl=Hl||$k(t),Hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new Sa(5e3,15e3),Wk="__/auth/iframe",Kk="emulator/auth/iframe",Gk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yk(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jf(e,Kk):`https://${t.config.authDomain}/${Wk}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},s=Qk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xa(r).slice(1)}`}async function Xk(t){const e=await qk(t),n=bn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:Yk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),l=bn().setTimeout(()=>{i(o)},Hk.get());function u(){bn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zk=500,eA=600,tA="_blank",nA="http://localhost";class ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rA(t,e,n,r=Zk,s=eA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Jk),{width:r.toString(),height:s.toString(),top:i,left:o}),h=St().toLowerCase();n&&(l=$0(h)?tA:n),z0(h)&&(e=e||nA,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[S,R])=>`${_}${S}=${R},`,"");if(LS(h)&&l!=="_self")return sA(e||"",l),new ey(null);const y=window.open(e||"",l,f);ne(y,t,"popup-blocked");try{y.focus()}catch{}return new ey(y)}function sA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="__/auth/handler",oA="emulator/auth/handler",aA=encodeURIComponent("fac");async function ty(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:s};if(e instanceof J0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ax(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))o[f]=y}if(e instanceof ka){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${aA}=${encodeURIComponent(u)}`:"";return`${lA(t)}?${xa(l).slice(1)}${h}`}function lA({config:t}){return t.emulator?Jf(t,oA):`https://${t.authDomain}/${iA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="webStorageSupport";class uA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rw,this._completeRedirectFn=Dk,this._overrideRedirectResult=Pk}async _openPopup(e,n,r,s){var i;nr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ty(e,n,r,Cd(),s);return rA(e,o,np())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ty(e,n,r,Cd(),s);return dk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Xk(e),r=new Vk(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gh,{type:gh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gh];o!==void 0&&n(!!o),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G0()||B0()||ep()}}const cA=uA;var ny="@firebase/auth",ry="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fA(t){Ss(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q0(t)},h=new BS(r,s,i,u);return GS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new zr("auth-internal",e=>{const n=rc(e.getProvider("auth").getImmediate());return(r=>new hA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(ny,ry,dA(t)),Pn(ny,ry,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=5*60,mA=x0("authIdTokenMaxAge")||pA;let sy=null;const gA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mA)return;const s=n==null?void 0:n.token;sy!==s&&(sy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yA(t=Qf()){const e=tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KS(t,{popupRedirectResolver:cA,persistence:[Ek,uk,rw]}),r=x0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gA(i.toString());ik(n,o,()=>o(n.currentUser)),sk(n,l=>o(l))}}const s=E0("auth");return s&&QS(n,`http://${s}`),n}function _A(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$S({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_A().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fA("Browser");var iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,cw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function E(){}E.prototype=m.prototype,v.D=m.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(x,A,C){for(var I=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)I[Ze-2]=arguments[Ze];return m.prototype[A].apply(x,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,E){E||(E=0);var x=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)x[A]=m.charCodeAt(E++)|m.charCodeAt(E++)<<8|m.charCodeAt(E++)<<16|m.charCodeAt(E++)<<24;else for(A=0;16>A;++A)x[A]=m[E++]|m[E++]<<8|m[E++]<<16|m[E++]<<24;m=v.g[0],E=v.g[1],A=v.g[2];var C=v.g[3],I=m+(C^E&(A^C))+x[0]+3614090360&4294967295;m=E+(I<<7&4294967295|I>>>25),I=C+(A^m&(E^A))+x[1]+3905402710&4294967295,C=m+(I<<12&4294967295|I>>>20),I=A+(E^C&(m^E))+x[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=E+(m^A&(C^m))+x[3]+3250441966&4294967295,E=A+(I<<22&4294967295|I>>>10),I=m+(C^E&(A^C))+x[4]+4118548399&4294967295,m=E+(I<<7&4294967295|I>>>25),I=C+(A^m&(E^A))+x[5]+1200080426&4294967295,C=m+(I<<12&4294967295|I>>>20),I=A+(E^C&(m^E))+x[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=E+(m^A&(C^m))+x[7]+4249261313&4294967295,E=A+(I<<22&4294967295|I>>>10),I=m+(C^E&(A^C))+x[8]+1770035416&4294967295,m=E+(I<<7&4294967295|I>>>25),I=C+(A^m&(E^A))+x[9]+2336552879&4294967295,C=m+(I<<12&4294967295|I>>>20),I=A+(E^C&(m^E))+x[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=E+(m^A&(C^m))+x[11]+2304563134&4294967295,E=A+(I<<22&4294967295|I>>>10),I=m+(C^E&(A^C))+x[12]+1804603682&4294967295,m=E+(I<<7&4294967295|I>>>25),I=C+(A^m&(E^A))+x[13]+4254626195&4294967295,C=m+(I<<12&4294967295|I>>>20),I=A+(E^C&(m^E))+x[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=E+(m^A&(C^m))+x[15]+1236535329&4294967295,E=A+(I<<22&4294967295|I>>>10),I=m+(A^C&(E^A))+x[1]+4129170786&4294967295,m=E+(I<<5&4294967295|I>>>27),I=C+(E^A&(m^E))+x[6]+3225465664&4294967295,C=m+(I<<9&4294967295|I>>>23),I=A+(m^E&(C^m))+x[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=E+(C^m&(A^C))+x[0]+3921069994&4294967295,E=A+(I<<20&4294967295|I>>>12),I=m+(A^C&(E^A))+x[5]+3593408605&4294967295,m=E+(I<<5&4294967295|I>>>27),I=C+(E^A&(m^E))+x[10]+38016083&4294967295,C=m+(I<<9&4294967295|I>>>23),I=A+(m^E&(C^m))+x[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=E+(C^m&(A^C))+x[4]+3889429448&4294967295,E=A+(I<<20&4294967295|I>>>12),I=m+(A^C&(E^A))+x[9]+568446438&4294967295,m=E+(I<<5&4294967295|I>>>27),I=C+(E^A&(m^E))+x[14]+3275163606&4294967295,C=m+(I<<9&4294967295|I>>>23),I=A+(m^E&(C^m))+x[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=E+(C^m&(A^C))+x[8]+1163531501&4294967295,E=A+(I<<20&4294967295|I>>>12),I=m+(A^C&(E^A))+x[13]+2850285829&4294967295,m=E+(I<<5&4294967295|I>>>27),I=C+(E^A&(m^E))+x[2]+4243563512&4294967295,C=m+(I<<9&4294967295|I>>>23),I=A+(m^E&(C^m))+x[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=E+(C^m&(A^C))+x[12]+2368359562&4294967295,E=A+(I<<20&4294967295|I>>>12),I=m+(E^A^C)+x[5]+4294588738&4294967295,m=E+(I<<4&4294967295|I>>>28),I=C+(m^E^A)+x[8]+2272392833&4294967295,C=m+(I<<11&4294967295|I>>>21),I=A+(C^m^E)+x[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=E+(A^C^m)+x[14]+4259657740&4294967295,E=A+(I<<23&4294967295|I>>>9),I=m+(E^A^C)+x[1]+2763975236&4294967295,m=E+(I<<4&4294967295|I>>>28),I=C+(m^E^A)+x[4]+1272893353&4294967295,C=m+(I<<11&4294967295|I>>>21),I=A+(C^m^E)+x[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=E+(A^C^m)+x[10]+3200236656&4294967295,E=A+(I<<23&4294967295|I>>>9),I=m+(E^A^C)+x[13]+681279174&4294967295,m=E+(I<<4&4294967295|I>>>28),I=C+(m^E^A)+x[0]+3936430074&4294967295,C=m+(I<<11&4294967295|I>>>21),I=A+(C^m^E)+x[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=E+(A^C^m)+x[6]+76029189&4294967295,E=A+(I<<23&4294967295|I>>>9),I=m+(E^A^C)+x[9]+3654602809&4294967295,m=E+(I<<4&4294967295|I>>>28),I=C+(m^E^A)+x[12]+3873151461&4294967295,C=m+(I<<11&4294967295|I>>>21),I=A+(C^m^E)+x[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=E+(A^C^m)+x[2]+3299628645&4294967295,E=A+(I<<23&4294967295|I>>>9),I=m+(A^(E|~C))+x[0]+4096336452&4294967295,m=E+(I<<6&4294967295|I>>>26),I=C+(E^(m|~A))+x[7]+1126891415&4294967295,C=m+(I<<10&4294967295|I>>>22),I=A+(m^(C|~E))+x[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=E+(C^(A|~m))+x[5]+4237533241&4294967295,E=A+(I<<21&4294967295|I>>>11),I=m+(A^(E|~C))+x[12]+1700485571&4294967295,m=E+(I<<6&4294967295|I>>>26),I=C+(E^(m|~A))+x[3]+2399980690&4294967295,C=m+(I<<10&4294967295|I>>>22),I=A+(m^(C|~E))+x[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=E+(C^(A|~m))+x[1]+2240044497&4294967295,E=A+(I<<21&4294967295|I>>>11),I=m+(A^(E|~C))+x[8]+1873313359&4294967295,m=E+(I<<6&4294967295|I>>>26),I=C+(E^(m|~A))+x[15]+4264355552&4294967295,C=m+(I<<10&4294967295|I>>>22),I=A+(m^(C|~E))+x[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=E+(C^(A|~m))+x[13]+1309151649&4294967295,E=A+(I<<21&4294967295|I>>>11),I=m+(A^(E|~C))+x[4]+4149444226&4294967295,m=E+(I<<6&4294967295|I>>>26),I=C+(E^(m|~A))+x[11]+3174756917&4294967295,C=m+(I<<10&4294967295|I>>>22),I=A+(m^(C|~E))+x[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=E+(C^(A|~m))+x[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+C&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var E=m-this.blockSize,x=this.B,A=this.h,C=0;C<m;){if(A==0)for(;C<=E;)s(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<m;)if(x[A++]=v.charCodeAt(C++),A==this.blockSize){s(this,x),A=0;break}}else for(;C<m;)if(x[A++]=v[C++],A==this.blockSize){s(this,x),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var E=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=E&255,E/=256;for(this.u(v),v=Array(16),m=E=0;4>m;++m)for(var x=0;32>x;x+=8)v[E++]=this.g[m]>>>x&255;return v};function i(v,m){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=m(v)}function o(v,m){this.h=m;for(var E=[],x=!0,A=v.length-1;0<=A;A--){var C=v[A]|0;x&&C==m||(E[A]=C,x=!1)}this.g=E}var l={};function u(v){return-128<=v&&128>v?i(v,function(m){return new o([m|0],0>m?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return O(h(-v));for(var m=[],E=1,x=0;v>=E;x++)m[x]=v/E|0,E*=4294967296;return new o(m,0)}function f(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return O(f(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(m,8)),x=y,A=0;A<v.length;A+=8){var C=Math.min(8,v.length-A),I=parseInt(v.substring(A,A+C),m);8>C?(C=h(Math.pow(m,C)),x=x.j(C).add(h(I))):(x=x.j(E),x=x.add(h(I)))}return x}var y=u(0),_=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var v=0,m=1,E=0;E<this.g.length;E++){var x=this.i(E);v+=(0<=x?x:4294967296+x)*m,m*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(N(this))return"-"+O(this).toString(v);for(var m=h(Math.pow(v,6)),E=this,x="";;){var A=b(E,m).g;E=T(E,A.j(m));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=A,R(E))return C+x;for(;6>C.length;)C="0"+C;x=C+x}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=T(this,v),N(v)?-1:R(v)?0:1};function O(v){for(var m=v.g.length,E=[],x=0;x<m;x++)E[x]=~v.g[x];return new o(E,~v.h).add(_)}t.abs=function(){return N(this)?O(this):this},t.add=function(v){for(var m=Math.max(this.g.length,v.g.length),E=[],x=0,A=0;A<=m;A++){var C=x+(this.i(A)&65535)+(v.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);x=I>>>16,C&=65535,I&=65535,E[A]=I<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(v,m){return v.add(O(m))}t.j=function(v){if(R(this)||R(v))return y;if(N(this))return N(v)?O(this).j(O(v)):O(O(this).j(v));if(N(v))return O(this.j(O(v)));if(0>this.l(S)&&0>v.l(S))return h(this.m()*v.m());for(var m=this.g.length+v.g.length,E=[],x=0;x<2*m;x++)E[x]=0;for(x=0;x<this.g.length;x++)for(var A=0;A<v.g.length;A++){var C=this.i(x)>>>16,I=this.i(x)&65535,Ze=v.i(A)>>>16,un=v.i(A)&65535;E[2*x+2*A]+=I*un,w(E,2*x+2*A),E[2*x+2*A+1]+=C*un,w(E,2*x+2*A+1),E[2*x+2*A+1]+=I*Ze,w(E,2*x+2*A+1),E[2*x+2*A+2]+=C*Ze,w(E,2*x+2*A+2)}for(x=0;x<m;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=m;x<2*m;x++)E[x]=0;return new o(E,0)};function w(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function k(v,m){this.g=v,this.h=m}function b(v,m){if(R(m))throw Error("division by zero");if(R(v))return new k(y,y);if(N(v))return m=b(O(v),m),new k(O(m.g),O(m.h));if(N(m))return m=b(v,O(m)),new k(O(m.g),m.h);if(30<v.g.length){if(N(v)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var E=_,x=m;0>=x.l(v);)E=z(E),x=z(x);var A=U(E,1),C=U(x,1);for(x=U(x,2),E=U(E,2);!R(x);){var I=C.add(x);0>=I.l(v)&&(A=A.add(E),C=I),x=U(x,1),E=U(E,1)}return m=T(v,A.j(m)),new k(A,m)}for(A=y;0<=v.l(m);){for(E=Math.max(1,Math.floor(v.m()/m.m())),x=Math.ceil(Math.log(E)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),C=h(E),I=C.j(m);N(I)||0<I.l(v);)E-=x,C=h(E),I=C.j(m);R(C)&&(C=_),A=A.add(C),v=T(v,I)}return new k(A,v)}t.A=function(v){return b(this,v).h},t.and=function(v){for(var m=Math.max(this.g.length,v.g.length),E=[],x=0;x<m;x++)E[x]=this.i(x)&v.i(x);return new o(E,this.h&v.h)},t.or=function(v){for(var m=Math.max(this.g.length,v.g.length),E=[],x=0;x<m;x++)E[x]=this.i(x)|v.i(x);return new o(E,this.h|v.h)},t.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),E=[],x=0;x<m;x++)E[x]=this.i(x)^v.i(x);return new o(E,this.h^v.h)};function z(v){for(var m=v.g.length+1,E=[],x=0;x<m;x++)E[x]=v.i(x)<<1|v.i(x-1)>>>31;return new o(E,v.h)}function U(v,m){var E=m>>5;m%=32;for(var x=v.g.length-E,A=[],C=0;C<x;C++)A[C]=0<m?v.i(C+E)>>>m|v.i(C+E+1)<<32-m:v.i(C+E);return new o(A,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,_s=o}).apply(typeof iy<"u"?iy:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hw,ko,dw,Wl,bd,fw,pw,mw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function y(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function _(a,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,_.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var q=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)q[xe-2]=arguments[xe];return c.prototype[P].apply(g,q)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let q=0;q<D;q++)a[P+q]=g[q]}else a.push(g)}}class T{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var z=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function U(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<E.length;D++)d=E[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Z;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,d){const g=un.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var un=new T(()=>new Bt,a=>a.reset());class Bt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let bt,H=!1,Z=new Ze,F=()=>{const a=l.Promise.resolve(void 0);bt=()=>{a.then(_e)}};var _e=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){C(d)}var c=un;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}H=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Jt(a,c){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(z){e:{try{b(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ee[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jt.aa.h.call(this)}}R(Jt,Ae);var ee={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),Va=0;function La(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++Va,this.da=this.fa=!1}function Xr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Jr(a){this.src=a,this.g={},this.h=0}Jr.prototype.add=function(a,c,d,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var q=Zr(a,c,g,P);return-1<q?(c=a[q],d||(c.fa=!1)):(c=new La(c,this.src,D,!!g,P),c.fa=d,a.push(c)),c};function Mn(a,c){var d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(Xr(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Zr(a,c,d,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return P}return-1}var cn="closure_lm_"+(1e6*Math.random()|0),Ui={};function Fi(a,c,d,g,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Fi(a,c[D],d,g,P);return null}return d=Ma(d),a&&a[pt]?a.K(c,d,h(g)?!!g.capture:!1,P):Ac(a,c,d,!1,g,P)}function Ac(a,c,d,g,P,D){if(!c)throw Error("Invalid event type");var q=h(P)?!!P.capture:!!P,xe=qi(a);if(xe||(a[cn]=xe=new Jr(a)),d=xe.add(c,d,g,q,D),d.proxy)return d;if(g=zi(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Dt||(P=q),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent($i(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function zi(){function a(d){return c.call(a.src,a.listener,d)}const c=Rc;return a}function Bi(a,c,d,g,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)Bi(a,c[D],d,g,P);else g=h(g)?!!g.capture:!!g,d=Ma(d),a&&a[pt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Zr(D,d,g,P),-1<d&&(Xr(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=qi(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Zr(c,d,g,P)),(d=-1<a?c[a]:null)&&ar(d))}function ar(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[pt])Mn(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent($i(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=qi(c))?(Mn(d,a),d.h==0&&(d.src=null,c[cn]=null)):Xr(a)}}}function $i(a){return a in Ui?Ui[a]:Ui[a]="on"+a}function Rc(a,c){if(a.da)a=!0;else{c=new Jt(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&ar(a),a=d.call(g,c)}return a}function qi(a){return a=a[cn],a instanceof Jr?a:null}var Hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ma(a){return typeof a=="function"?a:(a[Hi]||(a[Hi]=function(c){return a.handleEvent(c)}),a[Hi])}function et(){de.call(this),this.i=new Jr(this),this.M=this,this.F=null}R(et,de),et.prototype[pt]=!0,et.prototype.removeEventListener=function(a,c,d,g){Bi(this,a,c,d,g)};function it(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ae(c,a);else if(c instanceof Ae)c.target=c.target||a;else{var P=c;c=new Ae(g,a),x(c,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var q=c.g=d[D];P=Ls(q,g,!0,c)&&P}if(q=c.g=a,P=Ls(q,g,!0,c)&&P,P=Ls(q,g,!1,c)&&P,d)for(D=0;D<d.length;D++)q=c.g=d[D],P=Ls(q,g,!1,c)&&P}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)Xr(d[g]);delete a.g[c],a.h--}}this.F=null},et.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},et.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Ls(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var q=c[D];if(q&&!q.da&&q.capture==d){var xe=q.listener,ot=q.ha||q.src;q.fa&&Mn(a.i,q),P=xe.call(ot,g)!==!1&&P}}return P&&!g.defaultPrevented}function ja(a,c,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Ua(a){a.g=ja(()=>{a.g=null,a.i&&(a.i=!1,Ua(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Cc extends de{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ua(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(a){de.call(this),this.h=a,this.g={}}R(es,de);var ts=[];function Fa(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&ar(c)},a),a.g={}}es.prototype.N=function(){es.aa.N.call(this),Fa(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wi=l.JSON.stringify,za=l.JSON.parse,Pc=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Zt(){}Zt.prototype.h=null;function Ki(a){return a.h||(a.h=a.i())}function Tn(){}var ue={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gi(){Ae.call(this,"d")}R(Gi,Ae);function en(){Ae.call(this,"c")}R(en,Ae);var be={},Ba=null;function ns(){return Ba=Ba||new et}be.La="serverreachability";function Qi(a){Ae.call(this,be.La,a)}R(Qi,Ae);function lr(a){const c=ns();it(c,new Qi(c))}be.STAT_EVENT="statevent";function Yi(a,c){Ae.call(this,be.STAT_EVENT,a),this.stat=c}R(Yi,Ae);function tt(a){const c=ns();it(c,new Yi(c,a))}be.Ma="timingevent";function $a(a,c){Ae.call(this,be.Ma,a),this.size=c}R($a,Ae);function rs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function Nc(a,c,d,g,P,D){a.info(function(){if(a.g)if(D)for(var q="",xe=D.split("&"),ot=0;ot<xe.length;ot++){var ge=xe[ot].split("=");if(1<ge.length){var mt=ge[0];ge=ge[1];var gt=mt.split("_");q=2<=gt.length&&gt[1]=="type"?q+(mt+"="+ge+"&"):q+(mt+"=redacted&")}}else q=null;else q=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+q})}function qa(a,c,d,g,P,D,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+D+" "+q})}function ur(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ha(a,d)+(g?" "+g:"")})}function bc(a,c){a.info(function(){return"TIMEOUT: "+c})}ss.prototype.info=function(){};function Ha(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var q=1;q<P.length;q++)P[q]=""}}}}return Wi(d)}catch{return c}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ms;function os(){}R(os,Zt),os.prototype.g=function(){return new XMLHttpRequest},os.prototype.i=function(){return{}},Ms=new os;function hn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ji}function Ji(){this.i=null,this.g="",this.h=!1}var Zi={},js={};function Us(a,c,d){a.L=1,a.v=Ya(jn(c)),a.m=d,a.P=!0,eo(a,null)}function eo(a,c){a.F=Date.now(),V(a),a.A=jn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),tm(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Ji,a.g=vm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Cc(_(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(ts[0]=P.toString()),P=ts);for(var D=0;D<P.length;D++){var q=Fi(d,P[D],g||c.handleEvent,!1,c.h||c);if(!q)break;c.g[q.key]=q}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),lr(),Nc(a.i,a.u,a.A,a.l,a.R,a.m)}hn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Un(a)==3?c.j():this.Y(a)},hn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=Un(this.g);var c=this.g.Ba();const Bs=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||lm(this.g)))){this.J||gt!=4||c==7||(c==8||0>=Bs?lr(3):lr(2)),$(this);var d=this.g.Z();this.X=d;t:if(to(this)){var g=lm(this.g);a="";var P=g.length,D=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),G(this);var q="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==P-1)});g.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=d==200,qa(this.i,this.u,this.A,this.l,this.R,gt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,ot=this.g;if((xe=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(xe)){var ge=xe;break t}}ge=null}if(d=ge)ur(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Te(this,d);else{this.o=!1,this.s=3,tt(12),te(this),G(this);break e}}if(this.P){d=!0;let fn;for(;!this.J&&this.C<q.length;)if(fn=Wa(this,q),fn==js){gt==4&&(this.s=4,tt(14),d=!1),ur(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==Zi){this.s=4,tt(15),ur(this.i,this.l,q,"[Invalid Chunk]"),d=!1;break}else ur(this.i,this.l,fn,null),Te(this,fn);if(to(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||q.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)ur(this.i,this.l,q,"[Invalid Chunked Response]"),te(this),G(this);else if(0<q.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Lc(mt),mt.M=!0,tt(11))}}else ur(this.i,this.l,q,null),Te(this,q);gt==4&&te(this),this.o&&!this.J&&(gt==4?mm(this.j,this):(this.o=!1,V(this)))}else dT(this.g),d==400&&0<q.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),te(this),G(this)}}}catch{}finally{}};function to(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Wa(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?js:(d=Number(c.substring(d,g)),isNaN(d)?Zi:(g+=1,g+d>c.length?js:(c=c.slice(g,g+d),a.C=g+d,c)))}hn.prototype.cancel=function(){this.J=!0,te(this)};function V(a){a.S=Date.now()+a.I,W(a,a.I)}function W(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=rs(_(a.ba,a),c)}function $(a){a.B&&(l.clearTimeout(a.B),a.B=null)}hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bc(this.i,this.A),this.L!=2&&(lr(),tt(17)),te(this),this.s=2,G(this)):W(this,this.S-a)};function G(a){a.j.G==0||a.J||mm(a.j,a)}function te(a){$(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Fa(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Te(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ot(d.h,a))){if(!a.K&&Ot(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)nl(d),el(d);else break e;Vc(d),tt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=rs(_(d.Za,d),6e3));if(1>=Ie(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ls(d,11)}else if((a.K||d.g==a)&&nl(d),!w(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let ge=P[c];if(d.T=ge[0],ge=ge[1],d.G==2)if(ge[0]=="c"){d.K=ge[1],d.ia=ge[2];const mt=ge[3];mt!=null&&(d.la=mt,d.j.info("VER="+d.la));const gt=ge[4];gt!=null&&(d.Aa=gt,d.j.info("SVER="+d.Aa));const Bs=ge[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(g=1.5*Bs,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const fn=a.g;if(fn){const sl=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sl){var D=g.h;D.g||sl.indexOf("spdy")==-1&&sl.indexOf("quic")==-1&&sl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(kt(D,D.h),D.h=null))}if(g.D){const Mc=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Mc&&(g.ya=Mc,Re(g.I,g.D,Mc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var q=a;if(g.qa=_m(g,g.J?g.ia:null,g.W),q.K){dn(g.h,q);var xe=q,ot=g.L;ot&&(xe.I=ot),xe.B&&($(xe),V(xe)),g.g=q}else fm(g);0<d.i.length&&tl(d)}else ge[0]!="stop"&&ge[0]!="close"||ls(d,7);else d.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?ls(d,7):Oc(d):ge[0]!="noop"&&d.l&&d.l.ta(ge),d.v=0)}}lr(4)}catch{}}var fe=class{constructor(a,c){this.g=a,this.map=c}};function Ee(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function M(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ie(a){return a.h?1:a.g?a.g.size:0}function Ot(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function kt(a,c){a.g?a.g.add(c):a.h=c}function dn(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ee.prototype.cancel=function(){if(this.i=no(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function no(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function Ka(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function JE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function Qp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=JE(a),g=Ka(a),P=g.length,D=0;D<P;D++)c.call(void 0,g[D],d&&d[D],a)}var Yp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var D=a[d].substring(0,g);P=a[d].substring(g+1)}else D=a[d];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function as(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof as){this.h=a.h,Ga(this,a.j),this.o=a.o,this.g=a.g,Qa(this,a.s),this.l=a.l;var c=a.i,d=new io;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Xp(this,d),this.m=a.m}else a&&(c=String(a).match(Yp))?(this.h=!1,Ga(this,c[1]||"",!0),this.o=ro(c[2]||""),this.g=ro(c[3]||"",!0),Qa(this,c[4]),this.l=ro(c[5]||"",!0),Xp(this,c[6]||"",!0),this.m=ro(c[7]||"")):(this.h=!1,this.i=new io(null,this.h))}as.prototype.toString=function(){var a=[],c=this.j;c&&a.push(so(c,Jp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(so(c,Jp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(so(d,d.charAt(0)=="/"?nT:tT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",so(d,sT)),a.join("")};function jn(a){return new as(a)}function Ga(a,c,d){a.j=d?ro(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Qa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Xp(a,c,d){c instanceof io?(a.i=c,iT(a.i,a.h)):(d||(c=so(c,rT)),a.i=new io(c,a.h))}function Re(a,c,d){a.i.set(c,d)}function Ya(a){return Re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ro(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function so(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,eT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function eT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jp=/[#\/\?@]/g,tT=/[#\?:]/g,nT=/[#\?]/g,rT=/[#\?@]/g,sT=/#/g;function io(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function cr(a){a.g||(a.g=new Map,a.h=0,a.i&&ZE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=io.prototype,t.add=function(a,c){cr(this),this.i=null,a=Fs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Zp(a,c){cr(a),c=Fs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function em(a,c){return cr(a),c=Fs(a,c),a.g.has(c)}t.forEach=function(a,c){cr(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)},t.na=function(){cr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const P=a[g];for(let D=0;D<P.length;D++)d.push(c[g])}return d},t.V=function(a){cr(this);let c=[];if(typeof a=="string")em(this,a)&&(c=c.concat(this.g.get(Fs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return cr(this),this.i=null,a=Fs(this,a),em(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function tm(a,c,d){Zp(a,c),0<d.length&&(a.i=null,a.g.set(Fs(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var P=D;q[g]!==""&&(P+="="+encodeURIComponent(String(q[g]))),a.push(P)}}return this.i=a.join("&")};function Fs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function iT(a,c){c&&!a.j&&(cr(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Zp(this,g),tm(this,P,d))},a)),a.j=c}function oT(a,c){const d=new ss;if(l.Image){const g=new Image;g.onload=S(hr,d,"TestLoadImage: loaded",!0,c,g),g.onerror=S(hr,d,"TestLoadImage: error",!1,c,g),g.onabort=S(hr,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=S(hr,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function aT(a,c){const d=new ss,g=new AbortController,P=setTimeout(()=>{g.abort(),hr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?hr(d,"TestPingServer: ok",!0,c):hr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),hr(d,"TestPingServer: error",!1,c)})}function hr(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function lT(){this.g=new Pc}function uT(a,c,d){const g=d||"";try{Qp(a,function(P,D){let q=P;h(P)&&(q=Wi(P)),c.push(g+D+"="+encodeURIComponent(q))})}catch(P){throw c.push(g+"type="+encodeURIComponent("_badmap")),P}}function Xa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Xa,Zt),Xa.prototype.g=function(){return new Ja(this.l,this.j)},Xa.prototype.i=function(a){return function(){return a}}({});function Ja(a,c){et.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ja,et),t=Ja.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ao(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?oo(this):ao(this),this.readyState==3&&nm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,oo(this))},t.Qa=function(a){this.g&&(this.response=a,oo(this))},t.ga=function(){this.g&&oo(this)};function oo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ao(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ao(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rm(a){let c="";return U(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Dc(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=rm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Re(a,c,d))}function je(a){et.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(je,et);var cT=/^https?$/i,hT=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ms.g(),this.v=this.o?Ki(this.o):Ki(Ms),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){sm(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(hT,c,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,q]of d)this.g.setRequestHeader(D,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{am(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){sm(this,D)}};function sm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,im(a),Za(a)}function im(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),Za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Za(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?om(this):this.bb())},t.bb=function(){om(this)};function om(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Un(a)!=4||a.Z()!=2)){if(a.u&&Un(a)==4)ja(a.Ea,0,a);else if(it(a,"readystatechange"),Un(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=q===0){var P=String(a.D).match(Yp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!cT.test(P?P.toLowerCase():"")}d=g}if(d)it(a,"complete"),it(a,"success");else{a.m=6;try{var D=2<Un(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",im(a)}}finally{Za(a)}}}}function Za(a,c){if(a.g){am(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||it(a,"ready");try{d.onreadystatechange=g}catch{}}}function am(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),za(c)}};function lm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dT(a){const c={};a=(a.g&&2<=Un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=A(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[P]||[];c[P]=D,D.push(d)}v(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lo(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function um(a){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lo("baseRetryDelayMs",5e3,a),this.cb=lo("retryDelaySeedMs",1e4,a),this.Wa=lo("forwardChannelMaxRetries",2,a),this.wa=lo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ee(a&&a.concurrentRequestLimit),this.Da=new lT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=um.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){tt(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=_m(this,null,this.W),tl(this)};function Oc(a){if(cm(a),a.G==3){var c=a.U++,d=jn(a.I);if(Re(d,"SID",a.K),Re(d,"RID",c),Re(d,"TYPE","terminate"),uo(a,d),c=new hn(a,a.j,c),c.L=2,c.v=Ya(jn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=vm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),V(c)}ym(a)}function el(a){a.g&&(Lc(a),a.g.cancel(),a.g=null)}function cm(a){el(a),a.u&&(l.clearTimeout(a.u),a.u=null),nl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function tl(a){if(!M(a.h)&&!a.s){a.s=!0;var c=a.Ga;bt||F(),H||(bt(),H=!0),Z.add(c,a),a.B=0}}function fT(a,c){return Ie(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=rs(_(a.Ga,a,c),gm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new hn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=m(D),x(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=dm(this,P,c),d=jn(this.I),Re(d,"RID",a),Re(d,"CVER",22),this.D&&Re(d,"X-HTTP-Session-Id",this.D),uo(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(rm(D)))+"&"+c:this.m&&Dc(d,this.m,D)),kt(this.h,P),this.Ua&&Re(d,"TYPE","init"),this.P?(Re(d,"$req",c),Re(d,"SID","null"),P.T=!0,Us(P,d,null)):Us(P,d,c),this.G=2}}else this.G==3&&(a?hm(this,a):this.i.length==0||M(this.h)||hm(this))};function hm(a,c){var d;c?d=c.l:d=a.U++;const g=jn(a.I);Re(g,"SID",a.K),Re(g,"RID",d),Re(g,"AID",a.T),uo(a,g),a.m&&a.o&&Dc(g,a.m,a.o),d=new hn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=dm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),kt(a.h,d),Us(d,g,c)}function uo(a,c){a.H&&U(a.H,function(d,g){Re(c,g,d)}),a.l&&Qp({},function(d,g){Re(c,g,d)})}function dm(a,c,d){d=Math.min(a.i.length,d);var g=a.l?_(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const q=["count="+d];D==-1?0<d?(D=P[0].g,q.push("ofs="+D)):D=0:q.push("ofs="+D);let xe=!0;for(let ot=0;ot<d;ot++){let ge=P[ot].g;const mt=P[ot].map;if(ge-=D,0>ge)D=Math.max(0,P[ot].g-100),xe=!1;else try{uT(mt,q,"req"+ge+"_")}catch{g&&g(mt)}}if(xe){g=q.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function fm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;bt||F(),H||(bt(),H=!0),Z.add(c,a),a.v=0}}function Vc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=rs(_(a.Fa,a),gm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,pm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=rs(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),el(this),pm(this))};function Lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function pm(a){a.g=new hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=jn(a.qa);Re(c,"RID","rpc"),Re(c,"SID",a.K),Re(c,"AID",a.T),Re(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Re(c,"TO",a.ja),Re(c,"TYPE","xmlhttp"),uo(a,c),a.m&&a.o&&Dc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ya(jn(c)),d.m=null,d.P=!0,eo(d,a)}t.Za=function(){this.C!=null&&(this.C=null,el(this),Vc(this),tt(19))};function nl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function mm(a,c){var d=null;if(a.g==c){nl(a),Lc(a),a.g=null;var g=2}else if(Ot(a.h,c))d=c.D,dn(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;g=ns(),it(g,new $a(g,d)),tl(a)}else fm(a);else if(P=c.s,P==3||P==0&&0<c.X||!(g==1&&fT(a,c)||g==2&&Vc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:ls(a,5);break;case 4:ls(a,10);break;case 3:ls(a,6);break;default:ls(a,2)}}}function gm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function ls(a,c){if(a.j.info("Error code "+c),c==2){var d=_(a.fb,a),g=a.Xa;const P=!g;g=new as(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ga(g,"https"),Ya(g),P?oT(g.toString(),d):aT(g.toString(),d)}else tt(2);a.G=0,a.l&&a.l.sa(c),ym(a),cm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function ym(a){if(a.G=0,a.ka=[],a.l){const c=no(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function _m(a,c,d){var g=d instanceof as?jn(d):new as(d);if(g.g!="")c&&(g.g=c+"."+g.g),Qa(g,g.s);else{var P=l.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new as(null);g&&Ga(D,g),c&&(D.g=c),P&&Qa(D,P),d&&(D.l=d),g=D}return d=a.D,c=a.ya,d&&c&&Re(g,d,c),Re(g,"VER",a.la),uo(a,g),g}function vm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new je(new Xa({eb:d})):new je(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wm(){}t=wm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function rl(){}rl.prototype.g=function(a,c){return new $t(a,c)};function $t(a,c){et.call(this),this.g=new um(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new zs(this)}R($t,et),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Oc(this.g)},$t.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Wi(a),a=d);c.i.push(new fe(c.Ya++,a)),c.G==3&&tl(c)},$t.prototype.N=function(){this.g.l=null,delete this.j,Oc(this.g),delete this.g,$t.aa.N.call(this)};function Em(a){Gi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Em,Gi);function Tm(){en.call(this),this.status=1}R(Tm,en);function zs(a){this.g=a}R(zs,wm),zs.prototype.ua=function(){it(this.g,"a")},zs.prototype.ta=function(a){it(this.g,new Em(a))},zs.prototype.sa=function(a){it(this.g,new Tm)},zs.prototype.ra=function(){it(this.g,"b")},rl.prototype.createWebChannel=rl.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,mw=function(){return new rl},pw=function(){return ns()},fw=be,bd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,Wl=is,Xi.COMPLETE="complete",dw=Xi,Tn.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",et.prototype.listen=et.prototype.K,ko=Tn,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,hw=je}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});const oy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Kf("@firebase/firestore");function vo(){return As.logLevel}function Y(t,...e){if(As.logLevel<=ce.DEBUG){const n=e.map(sp);As.debug(`Firestore (${Vi}): ${t}`,...n)}}function rr(t,...e){if(As.logLevel<=ce.ERROR){const n=e.map(sp);As.error(`Firestore (${Vi}): ${t}`,...n)}}function xi(t,...e){if(As.logLevel<=ce.WARN){const n=e.map(sp);As.warn(`Firestore (${Vi}): ${t}`,...n)}}function sp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: `+t;throw rr(e),new Error(e)}function we(t,e){t||re()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class wA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EA{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new gw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new wt(e)}}class TA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class IA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){we(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new xA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=kA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Si(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Ke(0,0))}static max(){return new se(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends ca{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const AA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends ca{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return AA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new K(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Pe.fromString(e))}static fromName(e){return new X(Pe.fromString(e).popFirst(5))}static empty(){return new X(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Pe(e.slice()))}}function RA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new $r(s,X.empty(),e)}function CA(t){return new $r(t.readTime,t.key,-1)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(se.min(),X.empty(),-1)}static max(){return new $r(se.max(),X.empty(),-1)}}function PA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==NA)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function DA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ca(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ip.oe=-1;function oc(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function OA(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xl(this.root,e,this.comparator,!1)}getReverseIterator(){return new xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xl(this.root,e,this.comparator,!0)}}class xl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ly(this.data.getIterator())}getIteratorFrom(e){return new ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ht(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vw("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const VA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(we(!!t),typeof t=="string"){let e=0;const n=VA.exec(t);if(we(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rs(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ap(t){const e=t.mapValue.fields.__previous_value__;return op(e)?ap(e):e}function ha(t){const e=qr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class da{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof da&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={mapValue:{}};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?op(t)?4:jA(t)?9007199254740991:MA(t)?10:11:re()}function Vn(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=qr(s.timestampValue),l=qr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rs(s.bytesValue).isEqual(Rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),l=He(i.doubleValue);return o===l?Cu(o)===Cu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Si(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ay(o)!==ay(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vn(o[u],l[u])))return!1;return!0}(t,e);default:return re()}}function fa(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Cs(t),r=Cs(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=He(i.integerValue||i.doubleValue),u=He(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return uy(t.timestampValue,e.timestampValue);case 4:return uy(ha(t),ha(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Rs(i),u=Rs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ye(l[h],u[h]);if(f!==0)return f}return ye(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(He(i.latitude),He(o.latitude));return l!==0?l:ye(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,f;const y=i.fields||{},_=o.fields||{},S=(l=y.value)===null||l===void 0?void 0:l.arrayValue,R=(u=_.value)===null||u===void 0?void 0:u.arrayValue,N=ye(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:cy(S,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Sl.mapValue&&o===Sl.mapValue)return 0;if(i===Sl.mapValue)return 1;if(o===Sl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const _=ye(u[y],f[y]);if(_!==0)return _;const S=ki(l[u[y]],h[f[y]]);if(S!==0)return S}return ye(u.length,f.length)}(t.mapValue,e.mapValue);default:throw re()}}function uy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=qr(t),r=qr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function cy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ki(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Ai(t){return Dd(t)}function Dd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dd(n.fields[o])}`;return s+"}"}(t.mapValue):re()}function hy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Od(t){return!!t&&"integerValue"in t}function lp(t){return!!t&&"arrayValue"in t}function dy(t){return!!t&&"nullValue"in t}function fy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kl(t){return!!t&&"mapValue"in t}function MA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Kl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fo(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Fo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Kl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Kl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(Fo(this.value))}}function ww(t){const e=[];return Os(t.fields,(n,r)=>{const s=new ut([n]);if(Kl(r)){const i=ww(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,se.min(),se.min(),se.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,se.min(),se.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,se.min(),se.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.position=e,this.inclusive=n}}function py(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function my(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function UA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{}class Ye extends Ew{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zA(e,n,r):n==="array-contains"?new qA(e,r):n==="in"?new HA(e,r):n==="not-in"?new WA(e,r):n==="array-contains-any"?new KA(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BA(e,r):new $A(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends Ew{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new En(e,n)}matches(e){return Tw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Tw(t){return t.op==="and"}function Iw(t){return FA(t)&&Tw(t)}function FA(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function Vd(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Ai(t.value);if(Iw(t))return t.filters.map(e=>Vd(e)).join(",");{const e=t.filters.map(n=>Vd(n)).join(",");return`${t.op}(${e})`}}function xw(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&Vn(r.value,s.value)}(t,e):t instanceof En?function(r,s){return s instanceof En&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&xw(o,s.filters[l]),!0):!1}(t,e):void re()}function Sw(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Ai(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(Sw).join(" ,")+"}"}(t):"Filter"}class zA extends Ye{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class BA extends Ye{constructor(e,n){super(e,"in",n),this.keys=kw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $A extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=kw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class qA extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lp(n)&&fa(n.arrayValue,this.value)}}class HA extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class WA extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class KA extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function gy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new GA(t,e,n,r,s,i,o)}function up(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ai(r)).join(",")),e.ue=n}return e.ue}function cp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!my(t.startAt,e.startAt)&&my(t.endAt,e.endAt)}function Ld(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function QA(t,e,n,r,s,i,o,l){return new Li(t,e,n,r,s,i,o,l)}function ac(t){return new Li(t)}function yy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Aw(t){return t.collectionGroup!==null}function zo(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ht(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pa(i,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new pa(ut.keyField(),r))}return e.ce}function Dn(t){const e=ie(t);return e.le||(e.le=YA(e,zo(t))),e.le}function YA(t,e){if(t.limitType==="F")return gy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pa(s.field,i)});const n=t.endAt?new Pu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pu(t.startAt.position,t.startAt.inclusive):null;return gy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Md(t,e){const n=t.filters.concat([e]);return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jd(t,e,n){return new Li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return cp(Dn(t),Dn(e))&&t.limitType===e.limitType}function Rw(t){return`${up(Dn(t))}|lt:${t.limitType}`}function Hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Sw(s)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ai(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ai(s)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=py(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,zo(r),s)||r.endAt&&!function(o,l,u){const h=py(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,zo(r),s))}(t,e)}function XA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cw(t){return(e,n)=>{let r=!1;for(const s of zo(t)){const i=JA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JA(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ki(u,h):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return _w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Me(X.comparator);function sr(){return ZA}const Pw=new Me(X.comparator);function Ao(...t){let e=Pw;for(const n of t)e=e.insert(n.key,n);return e}function Nw(t){let e=Pw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ms(){return Bo()}function bw(){return Bo()}function Bo(){return new Mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const eR=new Me(X.comparator),tR=new ht(X.comparator);function le(...t){let e=tR;for(const n of t)e=e.add(n);return e}const nR=new ht(ye);function rR(){return nR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function Dw(t){return{integerValue:""+t}}function sR(t,e){return OA(e)?Dw(e):hp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this._=void 0}}function iR(t,e,n){return t instanceof ma?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&op(i)&&(i=ap(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ga?Vw(t,e):t instanceof ya?Lw(t,e):function(s,i){const o=Ow(s,i),l=_y(o)+_y(s.Pe);return Od(o)&&Od(s.Pe)?Dw(l):hp(s.serializer,l)}(t,e)}function oR(t,e,n){return t instanceof ga?Vw(t,e):t instanceof ya?Lw(t,e):n}function Ow(t,e){return t instanceof Nu?function(r){return Od(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ma extends cc{}class ga extends cc{constructor(e){super(),this.elements=e}}function Vw(t,e){const n=Mw(e);for(const r of t.elements)n.some(s=>Vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends cc{constructor(e){super(),this.elements=e}}function Lw(t,e){let n=Mw(e);for(const r of t.elements)n=n.filter(s=>!Vn(s,r));return{arrayValue:{values:n}}}class Nu extends cc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function _y(t){return He(t.integerValue||t.doubleValue)}function Mw(t){return lp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.field=e,this.transform=n}}function lR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ga&&s instanceof ga||r instanceof ya&&s instanceof ya?Si(r.elements,s.elements,Vn):r instanceof Nu&&s instanceof Nu?Vn(r.Pe,s.Pe):r instanceof ma&&s instanceof ma}(t.transform,e.transform)}class uR{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function jw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dp(t.key,on.none()):new Pa(t.key,t.data,on.none());{const n=t.data,r=Lt.empty();let s=new ht(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Qr(t.key,r,new Wt(s.toArray()),on.none())}}function cR(t,e,n){t instanceof Pa?function(s,i,o){const l=s.value.clone(),u=wy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(s,i,o){if(!Gl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=wy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Uw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $o(t,e,n,r){return t instanceof Pa?function(i,o,l,u){if(!Gl(i.precondition,o))return l;const h=i.value.clone(),f=Ey(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(i,o,l,u){if(!Gl(i.precondition,o))return l;const h=Ey(i.fieldTransforms,u,o),f=o.data;return f.setAll(Uw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return Gl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function hR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ow(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Si(r,s,(i,o)=>lR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pa extends hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qr extends hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wy(t,e,n){const r=new Map;we(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,oR(o,l,n[s]))}return r}function Ey(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iR(i,o,e))}return r}class dp extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dR extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=jw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,(n,r)=>vy(n,r))&&Si(this.baseMutations,e.baseMutations,(n,r)=>vy(n,r))}}class fp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length);let s=function(){return eR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new fp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,he;function gR(t){switch(t){default:return re();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Fw(t){if(t===void 0)return rr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ge.OK:return L.OK;case Ge.CANCELLED:return L.CANCELLED;case Ge.UNKNOWN:return L.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return L.INTERNAL;case Ge.UNAVAILABLE:return L.UNAVAILABLE;case Ge.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ge.NOT_FOUND:return L.NOT_FOUND;case Ge.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ge.ABORTED:return L.ABORTED;case Ge.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ge.DATA_LOSS:return L.DATA_LOSS;default:return re()}}(he=Ge||(Ge={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new _s([4294967295,4294967295],0);function Ty(t){const e=yR().encode(t),n=new cw;return n.update(e),new Uint8Array(n.digest())}function Iy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([n,r],0),new _s([s,i],0)]}class pp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ro(`Invalid padding: ${n}`);if(r<0)throw new Ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ro(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_s.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(_s.fromNumber(r)));return s.compare(_R)===1&&(s=new _s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ty(e),[r,s]=Iy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new pp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ty(e),[r,s]=Iy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dc(se.min(),s,new Me(ye),sr(),le())}}class Na{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Na(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class zw{constructor(e,n){this.targetId=e,this.me=n}}class Bw{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xy{constructor(){this.fe=0,this.ge=ky(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),n=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}}),new Na(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ky()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vR{constructor(e){this.Le=e,this.Be=new Map,this.ke=sr(),this.qe=Sy(),this.Qe=new Me(ye)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ld(i))if(r===0){const o=new X(i.path);this.Ue(n,o,Tt.newNoDocument(o,se.min()))}else we(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Rs(r).toUint8Array()}catch(u){if(u instanceof vw)return xi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new pp(o,s,i)}catch(u){return xi(u instanceof Ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Ld(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Tt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=le();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new dc(e,n,this.Qe,this.ke,r);return this.ke=sr(),this.qe=Sy(),this.Qe=new Me(ye),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new xy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ht(ye),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new xy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Sy(){return new Me(X.comparator)}function ky(){return new Me(X.comparator)}const wR={asc:"ASCENDING",desc:"DESCENDING"},ER={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TR={and:"AND",or:"OR"};class IR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ud(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function bu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $w(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xR(t,e){return bu(t,e.toTimestamp())}function On(t){return we(!!t),se.fromTimestamp(function(n){const r=qr(n);return new Ke(r.seconds,r.nanos)}(t))}function mp(t,e){return Fd(t,e).canonicalString()}function Fd(t,e){const n=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qw(t){const e=Pe.fromString(t);return we(Qw(e)),e}function zd(t,e){return mp(t.databaseId,e.path)}function yh(t,e){const n=qw(e);if(n.get(1)!==t.databaseId.projectId)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Ww(n))}function Hw(t,e){return mp(t.databaseId,e)}function SR(t){const e=qw(t);return e.length===4?Pe.emptyPath():Ww(e)}function Bd(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ww(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ay(t,e,n){return{name:zd(t,e),fields:n.value.mapValue.fields}}function kR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(we(f===void 0||typeof f=="string"),ft.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ft.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:Fw(h.code);return new K(f,h.message||"")}(o);n=new Bw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yh(t,r.document.name),i=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):se.min(),l=new Lt({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ql(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yh(t,r.document),i=r.readTime?On(r.readTime):se.min(),o=Tt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ql([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yh(t,r.document),i=r.removedTargetIds||[];n=new Ql([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new mR(s,i),l=r.targetId;n=new zw(l,o)}}return n}function AR(t,e){let n;if(e instanceof Pa)n={update:Ay(t,e.key,e.value)};else if(e instanceof dp)n={delete:zd(t,e.key)};else if(e instanceof Qr)n={update:Ay(t,e.key,e.data),updateMask:LR(e.fieldMask)};else{if(!(e instanceof dR))return re();n={verify:zd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Nu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function RR(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?On(s.updateTime):On(i);return o.isEqual(se.min())&&(o=On(i)),new uR(o,s.transformResults||[])}(n,e))):[]}function CR(t,e){return{documents:[Hw(t,e.path)]}}function PR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Hw(t,s);const i=function(h){if(h.length!==0)return Gw(En.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Ws(_.field),direction:DR(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ud(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function NR(t){let e=SR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(y){const _=Kw(y);return _ instanceof En&&Iw(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(_=>function(R){return new pa(Ks(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(y){let _;return _=typeof y=="object"?y.value:y,oc(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(y){const _=!!y.before,S=y.values||[];return new Pu(S,_)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const _=!y.before,S=y.values||[];return new Pu(S,_)}(n.endAt)),QA(e,s,o,i,l,"F",u,h)}function bR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ks(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ks(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>Kw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function DR(t){return wR[t]}function OR(t){return ER[t]}function VR(t){return TR[t]}function Ws(t){return{fieldPath:t.canonicalString()}}function Ks(t){return ut.fromServerFormat(t.fieldPath)}function Gw(t){return t instanceof Ye?function(n){if(n.op==="=="){if(fy(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NAN"}};if(dy(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fy(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NOT_NAN"}};if(dy(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(n.field),op:OR(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(s=>Gw(s));return r.length===1?r[0]:{compositeFilter:{op:VR(n.op),filters:r}}}(t):re()}function LR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r,s,i=se.min(),o=se.min(),l=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.ct=e}}function jR(t){const e=NR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.un=new FR}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve($r.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ri(0)}static kn(){return new Ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.changes=new Mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$o(r.mutation,s,Wt.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ao();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=sr();const o=Bo(),l=function(){return Bo()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Qr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),$o(f.mutation,h,f.mutation.getFieldMask(),Ke.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var y;return l.set(h,new BR(f,(y=o.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Bo();let s=new Me((o,l)=>o-l),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Wt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const y=(s.get(l.batchId)||le()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,y=bw();f.forEach(_=>{if(!i.has(_)){const S=jw(n.get(_),r.get(_));S!==null&&y.set(_,S),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Aw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(ms());let l=-1,u=i;return o.next(h=>j.forEach(h,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,le())).next(f=>({batchId:l,changes:Nw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=Ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,u=>{const h=function(y,_){return new Li(_,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((y,_)=>{o=o.insert(y,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let l=Ao();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&$o(f.mutation,h,Wt.empty(),Ke.now()),uc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:On(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:jR(s.bundledQuery),readTime:On(s.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.overlays=new Me(X.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ms();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=ms(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ms(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ms(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return j.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pR(n,r));let i=this.Ir.get(n);i===void 0&&(i=le(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.Tr=new ht(nt.Er),this.dr=new ht(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Pe([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Pe([])),r=new nt(n,e),s=new nt(n,e+1);let i=le();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||ye(e.wr,n.wr)}static Ar(e,n){return ye(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ht(nt.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(ye);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new nt(new X(i),0);let l=new ht(ye);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.Mr=e,this.docs=function(){return new Me(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=sr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sr();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||PA(CA(f),r)<=0||(s.has(f.key)||uc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QR(this)}getSize(e){return j.resolve(this.size)}}class QR extends zR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.persistence=e,this.Nr=new Mi(n=>up(n),cp),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gp,this.targetCount=0,this.kr=Ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ip(0),this.Kr=!1,this.Kr=!0,this.$r=new WR,this.referenceDelegate=e(this),this.Ur=new YR(this),this.indexManager=new UR,this.remoteDocumentCache=function(s){return new GR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new MR(n),this.Gr=new qR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new KR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new JR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class JR extends bA{constructor(e){super(),this.currentSequenceNumber=e}}class yp{constructor(e){this.persistence=e,this.Jr=new gp,this.Yr=null}static Zr(e){return new yp(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _p(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tx()?8:DA(St())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ZR;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(vo()<=ce.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(vo()<=ce.DEBUG&&Y("QueryEngine","Query:",Hs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(vo()<=ce.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):j.resolve())}Yi(e,n){if(yy(n))return j.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jd(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,jd(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return yy(n)||s.isEqual(se.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(vo()<=ce.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hs(n)),this.rs(e,o,n,RA(s,-1)).next(l=>l))})}ts(e,n){let r=new ht(Cw(e));return n.forEach((s,i)=>{uc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return vo()<=ce.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Hs(n)),this.Ji.getDocumentsMatchingQuery(e,n,$r.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Me(ye),this._s=new Mi(i=>up(i),cp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $R(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nC(t,e,n,r){return new tC(t,e,n,r)}async function Yw(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=le();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function rC(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const y=h.batch,_=y.keys();let S=j.resolve();return _.forEach(R=>{S=S.next(()=>f.getEntry(u,R)).next(N=>{const O=h.docVersions.get(R);we(O!==null),N.version.compareTo(O)<0&&(y.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Xw(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function sC(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,y)=>{const _=s.get(y);if(!_)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,y)));let S=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?S=S.withResumeToken(ft.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(y,S),function(N,O,T){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(_,S,f)&&l.push(n.Ur.updateTargetData(i,S))});let u=sr(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(iC(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(y=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function iC(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=sr();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function oC(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aC(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function $d(t,e,n){const r=ie(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ca(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ry(t,e,n){const r=ie(t);let s=se.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const y=ie(u),_=y._s.get(f);return _!==void 0?j.resolve(y.os.get(_)):y.Ur.getTargetData(h,f)}(r,o,Dn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:le())).next(l=>(lC(r,XA(e),l),{documents:l,Ts:i})))}function lC(t,e,n){let r=t.us.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Cy{constructor(){this.activeTargetIds=rR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uC{constructor(){this.so=new Cy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Cy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl=null;function _h(){return kl===null?kl=function(){return 268435456+Math.round(2147483648*Math.random())}():kl++,"0x"+kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class fC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=_h(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw xi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=hC[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=_h();return new Promise((o,l)=>{const u=new hw;u.setWithCredentials(!0),u.listenOnce(dw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Wl.NO_ERROR:const f=u.getResponseJson();Y(vt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Wl.TIMEOUT:Y(vt,`RPC '${e}' ${i} timed out`),l(new K(L.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const y=u.getStatus();if(Y(vt,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const R=function(O){const T=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(T)>=0?T:L.UNKNOWN}(S.status);l(new K(R,S.message))}else l(new K(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(L.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Y(vt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Y(vt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=_h(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mw(),l=pw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");Y(vt,`Creating RPC '${e}' stream ${s}: ${f}`,u);const y=o.createWebChannel(f,u);let _=!1,S=!1;const R=new dC({Io:O=>{S?Y(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(_||(Y(vt,`Opening RPC '${e}' stream ${s} transport.`),y.open(),_=!0),Y(vt,`RPC '${e}' stream ${s} sending:`,O),y.send(O))},To:()=>y.close()}),N=(O,T,w)=>{O.listen(T,k=>{try{w(k)}catch(b){setTimeout(()=>{throw b},0)}})};return N(y,ko.EventType.OPEN,()=>{S||(Y(vt,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),N(y,ko.EventType.CLOSE,()=>{S||(S=!0,Y(vt,`RPC '${e}' stream ${s} transport closed`),R.So())}),N(y,ko.EventType.ERROR,O=>{S||(S=!0,xi(vt,`RPC '${e}' stream ${s} transport errored:`,O),R.So(new K(L.UNAVAILABLE,"The operation could not be completed")))}),N(y,ko.EventType.MESSAGE,O=>{var T;if(!S){const w=O.data[0];we(!!w);const k=w,b=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(b){Y(vt,`RPC '${e}' stream ${s} received error:`,b);const z=b.status;let U=function(E){const x=Ge[E];if(x!==void 0)return Fw(x)}(z),v=b.message;U===void 0&&(U=L.INTERNAL,v="Unknown error status: "+z+" with message "+b.message),S=!0,R.So(new K(U,v)),y.close()}else Y(vt,`RPC '${e}' stream ${s} received:`,w),R.bo(w)}}),N(l,fw.STAT_EVENT,O=>{O.stat===bd.PROXY?Y(vt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===bd.NOPROXY&&Y(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function vh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return new IR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Jw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new K(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pC extends Zw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=kR(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?On(o.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Bd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ld(u)?{documents:CR(i,u)}:{query:PR(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$w(i,o.resumeToken);const h=Ud(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=bu(i,o.snapshotVersion.toTimestamp());const h=Ud(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=bR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Bd(this.serializer),n.removeTarget=e,this.a_(n)}}class mC extends Zw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=RR(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Bd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Fd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Fd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(rr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Vs(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ie(u);h.L_.add(4),await ba(h),h.q_.set("Unknown"),h.L_.delete(4),await pc(h)}(this))})}),this.q_=new yC(r,s)}}async function pc(t){if(Vs(t))for(const e of t.B_)await e(!0)}async function ba(t){for(const e of t.B_)await e(!1)}function eE(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Tp(n)?Ep(n):ji(n).r_()&&wp(n,e))}function vp(t,e){const n=ie(t),r=ji(n);n.N_.delete(e),r.r_()&&tE(n,e),n.N_.size===0&&(r.r_()?r.o_():Vs(n)&&n.q_.set("Unknown"))}function wp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ji(t).A_(e)}function tE(t,e){t.Q_.xe(e),ji(t).R_(e)}function Ep(t){t.Q_=new vR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ji(t).start(),t.q_.v_()}function Tp(t){return Vs(t)&&!ji(t).n_()&&t.N_.size>0}function Vs(t){return ie(t).L_.size===0}function nE(t){t.Q_=void 0}async function vC(t){t.q_.set("Online")}async function wC(t){t.N_.forEach((e,n)=>{wp(t,e)})}async function EC(t,e){nE(t),Tp(t)?(t.q_.M_(e),Ep(t)):t.q_.set("Unknown")}async function TC(t,e,n){if(t.q_.set("Online"),e instanceof Bw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Du(t,r)}else if(e instanceof Ql?t.Q_.Ke(e):e instanceof zw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await Xw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),tE(i,u);const y=new kr(f.target,u,h,f.sequenceNumber);wp(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Du(t,r)}}async function Du(t,e,n){if(!Ca(e))throw e;t.L_.add(1),await ba(t),t.q_.set("Offline"),n||(n=()=>Xw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await pc(t)})}function rE(t,e){return e().catch(n=>Du(t,n,e))}async function mc(t){const e=ie(t),n=Hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;IC(e);)try{const s=await oC(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,xC(e,s)}catch(s){await Du(e,s)}sE(e)&&iE(e)}function IC(t){return Vs(t)&&t.O_.length<10}function xC(t,e){t.O_.push(e);const n=Hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function sE(t){return Vs(t)&&!Hr(t).n_()&&t.O_.length>0}function iE(t){Hr(t).start()}async function SC(t){Hr(t).p_()}async function kC(t){const e=Hr(t);for(const n of t.O_)e.m_(n.mutations)}async function AC(t,e,n){const r=t.O_.shift(),s=fp.from(r,e,n);await rE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await mc(t)}async function RC(t,e){e&&Hr(t).V_&&await async function(r,s){if(function(o){return gR(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();Hr(r).s_(),await rE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mc(r)}}(t,e),sE(t)&&iE(t)}async function Ny(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Vs(n);n.L_.add(3),await ba(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await pc(n)}async function CC(t,e){const n=ie(t);e?(n.L_.delete(2),await pc(n)):e||(n.L_.add(2),await ba(n),n.q_.set("Unknown"))}function ji(t){return t.K_||(t.K_=function(n,r,s){const i=ie(n);return i.w_(),new pC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:vC.bind(null,t),Ro:wC.bind(null,t),mo:EC.bind(null,t),d_:TC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Tp(t)?Ep(t):t.q_.set("Unknown")):(await t.K_.stop(),nE(t))})),t.K_}function Hr(t){return t.U_||(t.U_=function(n,r,s){const i=ie(n);return i.w_(),new mC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:SC.bind(null,t),mo:RC.bind(null,t),f_:kC.bind(null,t),g_:AC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await mc(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ip(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(t,e){if(rr("AsyncQueue",`${e}: ${t}`),Ca(t))return new K(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new gi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.W_=new Me(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ci{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ci(e,n,gi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class NC{constructor(){this.queries=Dy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=Dy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(L.ABORTED,"Firestore shutting down"))}}function Dy(){return new Mi(t=>Rw(t),lc)}async function Sp(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new PC,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=xp(o,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Ap(n)}async function kp(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bC(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Ap(n)}function DC(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Ap(t){t.Y_.forEach(e=>{e.next()})}var qd,Oy;(Oy=qd||(qd={})).ea="default",Oy.Cache="cache";class Rp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ci(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.key=e}}class aE{constructor(e){this.key=e}}class OC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=Cw(e),this.Ra=new gi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new by,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,y)=>{const _=s.get(f),S=uc(this.query,y)?y:null,R=!!_&&this.mutatedKeys.has(_.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;_&&S?_.data.isEqual(S.data)?R!==N&&(r.track({type:3,doc:S}),O=!0):this.ga(_,S)||(r.track({type:2,doc:S}),O=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!_&&S?(r.track({type:0,doc:S}),O=!0):_&&!S&&(r.track({type:1,doc:_}),O=!0,(u||h)&&(l=!0)),O&&(S?(o=o.add(S),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,y)=>function(S,R){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return N(S)-N(R)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Ci(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new by,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new aE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new oE(r))}),n}ba(e){this.Ta=e.Ts,this.da=le();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ci.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class VC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LC{constructor(e){this.key=e,this.va=!1}}class MC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Mi(l=>Rw(l),lc),this.Ma=new Map,this.xa=new Set,this.Oa=new Me(X.comparator),this.Na=new Map,this.La=new gp,this.Ba={},this.ka=new Map,this.qa=Ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jC(t,e,n=!0){const r=fE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await lE(r,e,n,!0),s}async function UC(t,e){const n=fE(t);await lE(n,e,!0,!1)}async function lE(t,e,n,r){const s=await aC(t.localStore,Dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await FC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&eE(t.remoteStore,s),l}async function FC(t,e,n,r,s){t.Ka=(y,_,S)=>async function(N,O,T,w){let k=O.view.ma(T);k.ns&&(k=await Ry(N.localStore,O.query,!1).then(({documents:v})=>O.view.ma(v,k)));const b=w&&w.targetChanges.get(O.targetId),z=w&&w.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(k,N.isPrimaryClient,b,z);return Ly(N,O.targetId,U.wa),U.snapshot}(t,y,_,S);const i=await Ry(t.localStore,e,!0),o=new OC(e,i.Ts),l=o.ma(i.documents),u=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Ly(t,n,h.wa);const f=new VC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function zC(t,e,n){const r=ie(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!lc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $d(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vp(r.remoteStore,s.targetId),Hd(r,s.targetId)}).catch(Ra)):(Hd(r,s.targetId),await $d(r.localStore,s.targetId,!0))}async function BC(t,e){const n=ie(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vp(n.remoteStore,r.targetId))}async function $C(t,e,n){const r=YC(t);try{const s=await function(o,l){const u=ie(o),h=Ke.now(),f=l.reduce((S,R)=>S.add(R.key),le());let y,_;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=sr(),N=le();return u.cs.getEntries(S,f).next(O=>{R=O,R.forEach((T,w)=>{w.isValidDocument()||(N=N.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(O=>{y=O;const T=[];for(const w of l){const k=hR(w,y.get(w.key).overlayedDocument);k!=null&&T.push(new Qr(w.key,k,ww(k.value.mapValue),on.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,T,l)}).next(O=>{_=O;const T=O.applyToLocalDocumentSet(y,N);return u.documentOverlayCache.saveOverlays(S,O.batchId,T)})}).then(()=>({batchId:_.batchId,changes:Nw(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Me(ye)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Da(r,s.changes),await mc(r.remoteStore)}catch(s){const i=xp(s,"Failed to persist write");n.reject(i)}}async function uE(t,e){const n=ie(t);try{const r=await sC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?we(o.va):s.removedDocuments.size>0&&(we(o.va),o.va=!1))}),await Da(n,r,e)}catch(r){await Ra(r)}}function Vy(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ie(o);u.onlineState=l;let h=!1;u.queries.forEach((f,y)=>{for(const _ of y.j_)_.Z_(l)&&(h=!0)}),h&&Ap(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qC(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Me(X.comparator);o=o.insert(i,Tt.newNoDocument(i,se.min()));const l=le().add(i),u=new dc(se.min(),new Map,new Me(ye),o,l);await uE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Cp(r)}else await $d(r.localStore,e,!1).then(()=>Hd(r,e,n)).catch(Ra)}async function HC(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await rC(n.localStore,e);hE(n,r,null),cE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Da(n,s)}catch(s){await Ra(s)}}async function WC(t,e,n){const r=ie(t);try{const s=await function(o,l){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(we(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);hE(r,e,n),cE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Da(r,s)}catch(s){await Ra(s)}}function cE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function hE(t,e,n){const r=ie(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||dE(t,r)})}function dE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(vp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Cp(t))}function Ly(t,e,n){for(const r of n)r instanceof oE?(t.La.addReference(r.key,e),KC(t,r)):r instanceof aE?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||dE(t,r.key)):re()}function KC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),Cp(t))}function Cp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Pe.fromString(e)),r=t.qa.next();t.Na.set(r,new LC(n)),t.Oa=t.Oa.insert(n,r),eE(t.remoteStore,new kr(Dn(ac(n.path)),r,"TargetPurposeLimboResolution",ip.oe))}}async function Da(t,e,n){const r=ie(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const y=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=_p.Wi(u.targetId,h);i.push(y)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=ie(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>j.forEach(h,_=>j.forEach(_.$i,S=>f.persistence.referenceDelegate.addReference(y,_.targetId,S)).next(()=>j.forEach(_.Ui,S=>f.persistence.referenceDelegate.removeReference(y,_.targetId,S)))))}catch(y){if(!Ca(y))throw y;Y("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const _=y.targetId;if(!y.fromCache){const S=f.os.get(_),R=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(_,N)}}}(r.localStore,i))}async function GC(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await Yw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Da(n,r.hs)}}function QC(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return le().add(r.key);{let s=le();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function fE(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qC.bind(null,e),e.Ca.d_=bC.bind(null,e.eventManager),e.Ca.$a=DC.bind(null,e.eventManager),e}function YC(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WC.bind(null,e),e}class Ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return nC(this.persistence,new eC,e.initialUser,this.serializer)}Ga(e){return new XR(yp.Zr,this.serializer)}Wa(e){return new uC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ou.provider={build:()=>new Ou};class Wd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GC.bind(null,this.syncEngine),await CC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NC}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(i){return new fC(i)}(e.databaseInfo);return function(i,o,l,u){return new gC(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new _C(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Vy(this.syncEngine,n,0),function(){return Py.D()?new Py:new cC}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const y=new MC(s,i,o,l,u,h);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ie(s);Y("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ba(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Wd.provider={build:()=>new Wd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=yw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Yw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function My(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JC(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ny(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ny(e.remoteStore,s)),t._onlineComponents=e}async function JC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await wh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;xi("Error using user provided cache. Falling back to memory cache: "+n),await wh(t,new Ou)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await wh(t,new Ou);return t._offlineComponents}async function pE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await My(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await My(t,new Wd))),t._onlineComponents}function ZC(t){return pE(t).then(e=>e.syncEngine)}async function Vu(t){const e=await pE(t),n=e.eventManager;return n.onListen=jC.bind(null,e.syncEngine),n.onUnlisten=zC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BC.bind(null,e.syncEngine),n}function eP(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Pp({next:_=>{f.Za(),o.enqueueAndForget(()=>kp(i,y));const S=_.docs.has(l);!S&&_.fromCache?h.reject(new K(L.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&_.fromCache&&u&&u.source==="server"?h.reject(new K(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),y=new Rp(ac(l.path),f,{includeMetadataChanges:!0,_a:!0});return Sp(i,y)}(await Vu(t),t.asyncQueue,e,n,r)),r.promise}function tP(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Pp({next:_=>{f.Za(),o.enqueueAndForget(()=>kp(i,y)),_.fromCache&&u.source==="server"?h.reject(new K(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),y=new Rp(l,f,{includeMetadataChanges:!0,_a:!0});return Sp(i,y)}(await Vu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t,e,n){if(!n)throw new K(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nP(t,e,n,r){if(e===!0&&r===!0)throw new K(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uy(t){if(!X.isDocumentKey(t))throw new K(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fy(t){if(X.isDocumentKey(t))throw new K(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new K(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vA;switch(r.type){case"firstParty":return new IA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jy.get(n);r&&(Y("ComponentProvider","Removing Datastore"),jy.delete(n),r.terminate())}(this),Promise.resolve()}}function rP(t,e,n,r={}){var s;const i=(t=zt(t,yc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=wt.MOCK_USER;else{l=S0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new wt(h)}t._authCredentials=new wA(new gw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yr(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class jr extends Yr{constructor(e,n,r){super(e,n,ac(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new X(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function pr(t,e,...n){if(t=Be(t),gE("collection","path",e),t instanceof yc){const r=Pe.fromString(e,...n);return Fy(r),new jr(t,null,r)}{if(!(t instanceof It||t instanceof jr))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Fy(r),new jr(t.firestore,null,r)}}function Se(t,e,...n){if(t=Be(t),arguments.length===1&&(e=yw.newId()),gE("doc","path",e),t instanceof yc){const r=Pe.fromString(e,...n);return Uy(r),new It(t,null,new X(r))}{if(!(t instanceof It||t instanceof jr))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Uy(r),new It(t.firestore,t instanceof jr?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Jw(this,"async_queue_retry"),this.Vu=()=>{const r=vh();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Qn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ca(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw rr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Ip.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function $y(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ir extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new By,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new By(e),this._firestoreClient=void 0,await e}}}function sP(t,e){const n=typeof t=="object"?t:Qf(),r=typeof t=="string"?t:"(default)",s=tc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=T0("firestore");i&&rP(s,...i)}return s}function _c(t){if(t._terminated)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iP(t),t._firestoreClient}function iP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,f){return new LA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,mE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new XC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pi(ft.fromBase64String(e))}catch(n){throw new K(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pi(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=/^__.*__$/;class aP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pa(e,this.data,n,this.fieldTransforms)}}class yE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Dp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Dp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Lu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_E(this.Cu)&&oP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class lP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Qu(e,n,r,s=!1){return new Dp({Cu:e,methodName:n,qu:r,path:ut.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ec(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new lP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Vp("Data must be an object, but it was:",o,r);const l=wE(r,o);let u,h;if(i.merge)u=new Wt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const y of i.mergeFields){const _=Kd(e,y,n);if(!o.contains(_))throw new K(L.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);TE(f,_)||f.push(_)}u=new Wt(f),h=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=o.fieldTransforms;return new aP(new Lt(l),u,h)}class Tc extends wc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tc}}class Op extends wc{_toFieldTransform(e){return new aR(e.path,new ma)}isEqual(e){return e instanceof Op}}function uP(t,e,n,r){const s=t.Qu(1,e,n);Vp("Data must be an object, but it was:",s,r);const i=[],o=Lt.empty();Os(r,(u,h)=>{const f=Lp(e,u,n);h=Be(h);const y=s.Nu(f);if(h instanceof Tc)i.push(f);else{const _=Oa(h,y);_!=null&&(i.push(f),o.set(f,_))}});const l=new Wt(i);return new yE(o,l,s.fieldTransforms)}function cP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Kd(e,r,n)],u=[s];if(i.length%2!=0)throw new K(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(Kd(e,i[_])),u.push(i[_+1]);const h=[],f=Lt.empty();for(let _=l.length-1;_>=0;--_)if(!TE(h,l[_])){const S=l[_];let R=u[_];R=Be(R);const N=o.Nu(S);if(R instanceof Tc)h.push(S);else{const O=Oa(R,N);O!=null&&(h.push(S),f.set(S,O))}}const y=new Wt(h);return new yE(f,y,o.fieldTransforms)}function hP(t,e,n,r=!1){return Oa(n,t.Qu(r?4:3,e))}function Oa(t,e){if(EE(t=Be(t)))return Vp("Unsupported field value:",e,t),wE(t,e);if(t instanceof wc)return function(r,s){if(!_E(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Oa(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:bu(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bu(s.serializer,i)}}if(r instanceof Np)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pi)return{bytesValue:$w(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return hp(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${gc(r)}`)}(t,e)}function wE(t,e){const n={};return _w(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Os(t,(r,s)=>{const i=Oa(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function EE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Np||t instanceof Pi||t instanceof It||t instanceof wc||t instanceof bp)}function Vp(t,e,n){if(!EE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=gc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Kd(t,e,n){if((e=Be(e))instanceof vc)return e._internalPath;if(typeof e=="string")return Lp(t,e);throw Lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const dP=new RegExp("[~\\*/\\[\\]]");function Lp(t,e,n){if(e.search(dP)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vc(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(L.INVALID_ARGUMENT,l+t+u)}function TE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ic("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fP extends IE{data(){return super.data()}}function Ic(t,e){return typeof e=="string"?Lp(t,e):e instanceof vc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mp{}class SE extends Mp{}function Al(t,e,...n){let r=[];e instanceof Mp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof jp).length,l=i.filter(u=>u instanceof xc).length;if(o>1||o>0&&l>0)throw new K(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class xc extends SE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xc(e,n,r)}_apply(e){const n=this._parse(e);return kE(e._query,n),new Yr(e.firestore,e.converter,Md(e._query,n))}_parse(e){const n=Ec(e.firestore);return function(i,o,l,u,h,f,y){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ky(y,f);const S=[];for(const R of y)S.push(Wy(u,i,R));_={arrayValue:{values:S}}}else _=Wy(u,i,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ky(y,f),_=hP(l,o,y,f==="in"||f==="not-in");return Ye.create(h,f,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qy(t,e,n){const r=e,s=Ic("where",t);return xc._create(s,r,n)}class jp extends Mp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:En.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)kE(o,u),o=Md(o,u)}(e._query,n),new Yr(e.firestore,e.converter,Md(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Up extends SE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Up(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pa(i,o)}(e._query,this._field,this._direction);return new Yr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Li(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Hy(t,e="asc"){const n=e,r=Ic("orderBy",t);return Up._create(r,n)}function Wy(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new K(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Aw(e)&&n.indexOf("/")!==-1)throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!X.isDocumentKey(r))throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hy(t,new X(r))}if(n instanceof It)return hy(t,n._key);throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(n)}.`)}function Ky(t,e){if(!Array.isArray(t)||t.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class pP{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>He(o.doubleValue));return new bp(i)}convertGeoPoint(e){return new Np(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ap(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=qr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);we(Qw(r));const s=new da(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||rr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RE extends IE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ic("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yl extends RE{data(e={}){return super.data(e)}}class CE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yl(this._firestore,this._userDataWriter,r.key,r,new Co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Yl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Co(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Yl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Co(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:mP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){t=zt(t,It);const e=zt(t.firestore,ir);return eP(_c(e),t._key).then(n=>PE(e,t,n))}class Fp extends pP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function gP(t){t=zt(t,Yr);const e=zt(t.firestore,ir),n=_c(e),r=new Fp(e);return xE(t._query),tP(n,t._query).then(s=>new CE(e,r,t,s))}function Th(t,e,n){t=zt(t,It);const r=zt(t.firestore,ir),s=AE(t.converter,e);return Sc(r,[vE(Ec(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function Ue(t,e,n,...r){t=zt(t,It);const s=zt(t.firestore,ir),i=Ec(s);let o;return o=typeof(e=Be(e))=="string"||e instanceof vc?cP(i,"updateDoc",t._key,e,n,r):uP(i,"updateDoc",t._key,e),Sc(s,[o.toMutation(t._key,on.exists(!0))])}function Ih(t){return Sc(zt(t.firestore,ir),[new dp(t._key,on.none())])}function xh(t,e){const n=zt(t.firestore,ir),r=Se(t),s=AE(t.converter,e);return Sc(n,[vE(Ec(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function wo(t,...e){var n,r,s;t=Be(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||$y(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if($y(e[o])){const y=e[o];e[o]=(n=y.next)===null||n===void 0?void 0:n.bind(y),e[o+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[o+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let u,h,f;if(t instanceof It)h=zt(t.firestore,ir),f=ac(t._key.path),u={next:y=>{e[o]&&e[o](PE(h,t,y))},error:e[o+1],complete:e[o+2]};else{const y=zt(t,Yr);h=zt(y.firestore,ir),f=y._query;const _=new Fp(h);u={next:S=>{e[o]&&e[o](new CE(h,_,y,S))},error:e[o+1],complete:e[o+2]},xE(t._query)}return function(_,S,R,N){const O=new Pp(N),T=new Rp(S,O,R);return _.asyncQueue.enqueueAndForget(async()=>Sp(await Vu(_),T)),()=>{O.Za(),_.asyncQueue.enqueueAndForget(async()=>kp(await Vu(_),T))}}(_c(h),f,l,u)}function Sc(t,e){return function(r,s){const i=new Qn;return r.asyncQueue.enqueueAndForget(async()=>$C(await ZC(r),s,i)),i.promise}(_c(t),e)}function PE(t,e,n){const r=n.docs.get(e._key),s=new Fp(t);return new RE(t,s,e._key,r,new Co(n.hasPendingWrites,n.fromCache),e.converter)}function xn(){return new Op("serverTimestamp")}(function(e,n=!0){(function(s){Vi=s})(Ds),Ss(new zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ir(new EA(r.getProvider("auth-internal")),new SA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Pn(oy,"4.7.3",e),Pn(oy,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebasestorage.googleapis.com",bE="storageBucket",yP=2*60*1e3,_P=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Ln{constructor(e,n,r=0){super(Sh(e),`Firebase Storage: ${n} (${Sh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function Sh(t){return"storage/"+t}function zp(){const t="An unknown error occurred, please check the error payload for server response.";return new qe($e.UNKNOWN,t)}function vP(t){return new qe($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function wP(t){return new qe($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function EP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qe($e.UNAUTHENTICATED,t)}function TP(){return new qe($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function IP(t){return new qe($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function xP(){return new qe($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SP(){return new qe($e.CANCELED,"User canceled the upload/download.")}function kP(t){return new qe($e.INVALID_URL,"Invalid URL '"+t+"'.")}function AP(t){return new qe($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RP(){return new qe($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bE+"' property when initializing the app?")}function CP(){return new qe($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PP(){return new qe($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NP(t){return new qe($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gd(t){return new qe($e.INVALID_ARGUMENT,t)}function DE(){return new qe($e.APP_DELETED,"The Firebase app was deleted.")}function bP(t){return new qe($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qo(t,e){return new qe($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Eo(t){throw new qe($e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw AP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",S=new RegExp(`^https?://${y}/${f}/b/${s}/o${_}`,"i"),R={bucket:1,path:3},N=n===NE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",T=new RegExp(`^https?://${N}/${s}/${O}`,"i"),k=[{regex:l,indices:u,postModify:i},{regex:S,indices:R,postModify:h},{regex:T,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<k.length;b++){const z=k[b],U=z.regex.exec(e);if(U){const v=U[z.indices.bucket];let m=U[z.indices.path];m||(m=""),r=new Kt(v,m),z.postModify(r);break}}if(r==null)throw kP(e);return r}}class DP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function y(O){s=setTimeout(()=>{s=null,t(S,u())},O)}function _(){i&&clearTimeout(i)}function S(O,...T){if(h){_();return}if(O){_(),f.call(null,O,...T);return}if(u()||o){_(),f.call(null,O,...T);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,y(k)}let R=!1;function N(O){R||(R=!0,_(),!h&&(s!==null?(O||(l=2),clearTimeout(s),y(0)):O||(l=1)))}return y(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function VP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){return t!==void 0}function MP(t){return typeof t=="object"&&!Array.isArray(t)}function Bp(t){return typeof t=="string"||t instanceof String}function Gy(t){return $p()&&t instanceof Blob}function $p(){return typeof Blob<"u"}function Qy(t,e,n,r){if(r<e)throw Gd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function OE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var vs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vs||(vs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,s,i,o,l,u,h,f,y,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=y,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,R)=>{this.resolve_=S,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Rl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===vs.NO_ERROR,u=i.getStatus();if(!l||jP(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===vs.ABORT;r(!1,new Rl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Rl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());LP(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=zp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?DE():SP();o(u)}else{const u=xP();o(u)}};this.canceled_?n(!1,new Rl(!1,null,!0)):this.backoffId_=OP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $P(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qP(t,e,n,r,s,i,o=!0){const l=OE(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return BP(h,e),FP(h,n),zP(h,i),$P(h,r),new UP(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WP(...t){const e=HP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if($p())return new Blob(t);throw new qe($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t){if(typeof atob>"u")throw NP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kh{constructor(e,n){this.data=e,this.contentType=n||null}}function QP(t,e){switch(t){case An.RAW:return new kh(VE(e));case An.BASE64:case An.BASE64URL:return new kh(LE(t,e));case An.DATA_URL:return new kh(XP(e),JP(e))}throw zp()}function VE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function YP(t){let e;try{e=decodeURIComponent(t)}catch{throw qo(An.DATA_URL,"Malformed data URL.")}return VE(e)}function LE(t,e){switch(t){case An.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw qo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw qo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=GP(e)}catch(s){throw s.message.includes("polyfill")?s:qo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ME{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qo(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ZP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function XP(t){const e=new ME(t);return e.base64?LE(An.BASE64,e.rest):YP(e.rest)}function JP(t){return new ME(t).contentType}function ZP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){let r=0,s="";Gy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Gy(this.data_)){const r=this.data_,s=KP(r,e,n);return s===null?null:new Ir(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ir(r,!0)}}static getBlob(...e){if($p()){const n=e.map(r=>r instanceof Ir?r.data_:r);return new Ir(WP.apply(null,n))}else{const n=e.map(o=>Bp(o)?QP(An.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Ir(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t){let e;try{e=JSON.parse(t)}catch{return null}return MP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function t2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function UE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t,e){return e}class At{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||n2}}let Cl=null;function r2(t){return!Bp(t)||t.length<2?t:UE(t)}function FE(){if(Cl)return Cl;const t=[];t.push(new At("bucket")),t.push(new At("generation")),t.push(new At("metageneration")),t.push(new At("name","fullPath",!0));function e(i,o){return r2(o)}const n=new At("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new At("size");return s.xform=r,t.push(s),t.push(new At("timeCreated")),t.push(new At("updated")),t.push(new At("md5Hash",null,!0)),t.push(new At("cacheControl",null,!0)),t.push(new At("contentDisposition",null,!0)),t.push(new At("contentEncoding",null,!0)),t.push(new At("contentLanguage",null,!0)),t.push(new At("contentType",null,!0)),t.push(new At("metadata","customMetadata",!0)),Cl=t,Cl}function s2(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Kt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function i2(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return s2(r,t),r}function zE(t,e,n){const r=jE(e);return r===null?null:i2(t,r,n)}function o2(t,e,n,r){const s=jE(e);if(s===null||!Bp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,y=t.fullPath,_="/b/"+o(f)+"/o/"+o(y),S=kc(_,n,r),R=OE({alt:"media",token:h});return S+R})[0]}function a2(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class qp{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){if(!t)throw zp()}function l2(t,e){function n(r,s){const i=zE(t,s,e);return BE(i!==null),i}return n}function u2(t,e){function n(r,s){const i=zE(t,s,e);return BE(i!==null),o2(i,s,t.host,t._protocol)}return n}function $E(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=TP():s=EP():n.getStatus()===402?s=wP(t.bucket):n.getStatus()===403?s=IP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function qE(t){const e=$E(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=vP(t.path)),i.serverResponse=s.serverResponse,i}return n}function c2(t,e,n){const r=e.fullServerUrl(),s=kc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new qp(s,i,u2(t,n),o);return l.errorHandler=qE(e),l}function h2(t,e){const n=e.fullServerUrl(),r=kc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,h){}const l=new qp(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=qE(e),l}function d2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function f2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=d2(null,e)),r}function p2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let b=0;b<2;b++)k=k+Math.random().toString().slice(2);return k}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=f2(e,r,s),f=a2(h,n),y="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,_=`\r
--`+u+"--",S=Ir.getBlob(y,r,_);if(S===null)throw CP();const R={name:h.fullPath},N=kc(i,t.host,t._protocol),O="POST",T=t.maxUploadRetryTime,w=new qp(N,O,l2(t,n),T);return w.urlParams=R,w.headers=o,w.body=S.uploadData(),w.errorHandler=$E(e),w}class m2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class g2 extends m2{initXhr(){this.xhr_.responseType="text"}}function Hp(){return new g2}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ps(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UE(this._location.path)}get storage(){return this._service}get parent(){const e=e2(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new Ps(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bP(e)}}function y2(t,e,n){t._throwIfRoot("uploadBytes");const r=p2(t.storage,t._location,FE(),new Ir(e,!0),n);return t.storage.makeRequestWithTokens(r,Hp).then(s=>({metadata:s,ref:t}))}function _2(t){t._throwIfRoot("getDownloadURL");const e=c2(t.storage,t._location,FE());return t.storage.makeRequestWithTokens(e,Hp).then(n=>{if(n===null)throw PP();return n})}function v2(t){t._throwIfRoot("deleteObject");const e=h2(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Hp)}function w2(t,e){const n=t2(t._location.path,e),r=new Kt(t._location.bucket,n);return new Ps(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(t){return/^[A-Za-z]+:\/\//.test(t)}function T2(t,e){return new Ps(t,e)}function HE(t,e){if(t instanceof Wp){const n=t;if(n._bucket==null)throw RP();const r=new Ps(n,n._bucket);return e!=null?HE(r,e):r}else return e!==void 0?w2(t,e):t}function I2(t,e){if(e&&E2(e)){if(t instanceof Wp)return T2(t,e);throw Gd("To use ref(service, url), the first argument must be a Storage instance.")}else return HE(t,e)}function Yy(t,e){const n=e==null?void 0:e[bE];return n==null?null:Kt.makeFromBucketSpec(n,t)}function x2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:S0(s,t.app.options.projectId))}class Wp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=NE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yP,this._maxUploadRetryTime=_P,this._requests=new Set,s!=null?this._bucket=Kt.makeFromBucketSpec(s,this._host):this._bucket=Yy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=Yy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ps(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new DP(DE());{const o=qP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Xy="@firebase/storage",Jy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="storage";function S2(t,e,n){return t=Be(t),y2(t,e,n)}function k2(t){return t=Be(t),_2(t)}function Zy(t){return t=Be(t),v2(t)}function Ah(t,e){return t=Be(t),I2(t,e)}function A2(t=Qf(),e){t=Be(t);const r=tc(t,WE).getImmediate({identifier:e}),s=T0("storage");return s&&R2(r,...s),r}function R2(t,e,n,r={}){x2(t,e,n,r)}function C2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Wp(n,r,s,e,Ds)}function P2(){Ss(new zr(WE,C2,"PUBLIC").setMultipleInstances(!0)),Pn(Xy,Jy,""),Pn(Xy,Jy,"esm2017")}P2();/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ae=(t,e)=>{const n=J.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>J.createElement("svg",{ref:f,...N2,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${b2(t)}`,l].join(" "),...h},[...e.map(([y,_])=>J.createElement(y,_)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=ae("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=ae("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=ae("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=ae("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=ae("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=ae("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=ae("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=ae("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=ae("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=ae("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=ae("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=ae("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=ae("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=ae("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=ae("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=ae("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=ae("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=ae("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=ae("Hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=ae("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=ae("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=ae("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=ae("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=ae("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=ae("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=ae("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=ae("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=ae("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=ae("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=ae("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=ae("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=ae("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=ae("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);class nN extends m_.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n)}render(){return this.state.hasError?p.jsx("div",{className:"min-h-screen bg-red-50 flex flex-col items-center justify-center p-8 text-center",children:p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-xl border-2 border-red-100 max-w-lg",children:[p.jsx(Qd,{className:"w-16 h-16 text-red-500 mx-auto mb-4"}),p.jsx("h1",{className:"text-2xl font-black text-slate-900 mb-2",children:"System Critical Failure"}),p.jsx("p",{className:"text-slate-500 mb-4",children:"The Pact encountered a fatal error."}),p.jsx("div",{className:"bg-slate-900 text-red-400 p-4 rounded text-left font-mono text-xs overflow-auto max-h-40 mb-6",children:this.state.error&&this.state.error.toString()}),p.jsx("button",{onClick:()=>window.location.reload(),className:"bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors w-full",children:"Reboot System"})]})}):this.props.children}}const rN={apiKey:"AIzaSyDyAeeL97KNbjZgajcLostxNoOYWyYfsQ4",authDomain:"thepact-b80ae.firebaseapp.com",projectId:"thepact-b80ae",storageBucket:"thepact-b80ae.firebasestorage.app",messagingSenderId:"524158355276",appId:"1:524158355276:web:6ac0a6339212782551f1e9",measurementId:"G-SQWK4KE26X"},Gp=R0(rN),r_=yA(Gp),pe=sP(Gp),Ch=A2(Gp),Fe=({children:t,onClick:e,disabled:n,className:r="",variant:s="primary",type:i="button",size:o="md"})=>{const l={primary:"bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed",secondary:"bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 disabled:border-slate-300 disabled:text-slate-300",danger:"bg-red-50 text-red-600 border-2 border-red-100 hover:bg-red-100 disabled:opacity-50",success:"bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300",ghost:"bg-transparent hover:bg-slate-100 text-slate-600"},u={sm:"px-2 py-1 text-xs",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-lg"};return p.jsx("button",{type:i,onClick:e,disabled:n,className:`rounded-lg font-bold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${l[s]} ${u[o]} ${r}`,children:t})},qs=({children:t,className:e="",...n})=>p.jsx("div",{className:`bg-white rounded-xl shadow-xl border-2 border-slate-900 overflow-hidden ${e}`,...n,children:t}),Ph=({isOpen:t,onClose:e,title:n,children:r})=>t?p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in",children:p.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]",children:[p.jsxs("div",{className:"bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center flex-shrink-0",children:[p.jsx("h3",{className:"font-bold text-lg text-slate-900",children:n}),p.jsx("button",{onClick:e,className:"text-slate-400 hover:text-slate-600",children:p.jsx(eN,{size:24})})]}),p.jsx("div",{className:"p-6 overflow-y-auto",children:r})]})}):null,sN=({progress:t})=>p.jsx("div",{className:"h-2 w-full bg-slate-100 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-green-500 transition-all duration-500 ease-out",style:{width:`${t}%`}})}),iN=({onSave:t})=>{const e=J.useRef(null),[n,r]=J.useState(!1),[s,i]=J.useState(!1),[o,l]=J.useState(null);J.useEffect(()=>{const S=e.current;if(S){S.width=S.offsetWidth,S.height=200;const R=S.getContext("2d");R.lineWidth=2,R.lineCap="round",R.strokeStyle="#0f172a"}},[]);const u=S=>{const{offsetX:R,offsetY:N}=y(S),O=e.current.getContext("2d");O.beginPath(),O.moveTo(R,N),r(!0)},h=S=>{if(!n)return;const{offsetX:R,offsetY:N}=y(S),O=e.current.getContext("2d");O.lineTo(R,N),O.stroke(),i(!0)},f=()=>{r(!1),l(e.current.toDataURL())},y=S=>{if(S.touches&&S.touches[0]){const R=e.current.getBoundingClientRect();return{offsetX:S.touches[0].clientX-R.left,offsetY:S.touches[0].clientY-R.top}}return{offsetX:S.nativeEvent.offsetX,offsetY:S.nativeEvent.offsetY}},_=()=>{e.current.getContext("2d").clearRect(0,0,e.current.width,e.current.height),i(!1),l(null)};return p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"relative",children:[p.jsx("canvas",{ref:e,className:"w-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg cursor-crosshair touch-none",onMouseDown:u,onMouseMove:h,onMouseUp:f,onMouseLeave:f,onTouchStart:u,onTouchMove:h,onTouchEnd:f}),!s&&p.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none text-slate-300 text-sm font-bold uppercase",children:"Sign Here"}),s&&p.jsx("button",{onClick:_,className:"absolute top-2 right-2 p-1 bg-white border border-slate-200 rounded text-slate-400 hover:text-red-500",children:p.jsx(B2,{size:16})})]}),s&&p.jsx(Fe,{onClick:()=>t(o),variant:"success",className:"w-full py-3",children:"Accept Signature"})]})},oN=({mode:t,timerData:e,role:n,onVoteStart:r,onVoteStop:s,onReset:i,tasks:o,myName:l})=>{var N,O,T;const[u,h]=J.useState(""),[f,y]=J.useState(!1),_=e||{status:"idle",votes:{},stopVotes:{}};if(J.useEffect(()=>{if(!_||_.status!=="running"){h("");return}const w=setInterval(()=>{var m;const k=(m=_.startTime)==null?void 0:m.toMillis(),b=Date.now(),z=t==="daily"?24*60*60*1e3:7*24*60*60*1e3,v=k+z-b;if(v<=0)h("00:00:00"),y(!0),clearInterval(w);else{const E=Math.floor(v/864e5),x=Math.floor(v%(1e3*60*60*24)/(1e3*60*60)),A=Math.floor(v%(1e3*60*60)/(1e3*60)),C=Math.floor(v%(1e3*60)/1e3);let I="";E>0&&(I+=`${E}d `),I+=`${x.toString().padStart(2,"0")}:${A.toString().padStart(2,"0")}:${C.toString().padStart(2,"0")}`,h(I)}},1e3);return()=>clearInterval(w)},[_,t]),_.status==="expired"){const k=_.failedBy===n;return p.jsxs("div",{className:"bg-red-100 border-2 border-red-500 p-4 rounded-xl text-center mb-6 animate-in zoom-in",children:[p.jsx(Yd,{size:40,className:"mx-auto text-red-600 mb-2"}),p.jsx("h2",{className:"text-2xl font-black text-red-900 uppercase",children:"TIME'S UP"}),p.jsx("p",{className:"text-red-800 font-bold mb-4",children:k?"YOU FAILED.":"THEY FAILED."}),k?p.jsx("div",{className:"bg-white p-3 rounded text-sm text-slate-500",children:"Await your punishment. Your partner is writing their demands now."}):p.jsxs("div",{className:"bg-white p-3 rounded",children:[p.jsx("p",{className:"text-sm font-bold text-slate-900 mb-2",children:"Write your demands (Snacks, Chores, etc):"}),p.jsx("div",{className:"text-xs text-slate-400 italic",children:'Scroll down to "Submit Demand"'})]})]})}if(_.status==="running"){const w=(N=_.stopVotes)==null?void 0:N[n];return p.jsxs("div",{className:"bg-slate-900 text-white p-4 rounded-xl mb-6 shadow-lg border-2 border-yellow-500",children:[p.jsxs("div",{className:"flex justify-between items-center mb-2",children:[p.jsxs("span",{className:"text-yellow-500 text-xs font-bold uppercase tracking-widest",children:[t," TIMER ACTIVE"]}),p.jsx(QE,{className:"animate-spin-slow text-yellow-500",size:16})]}),p.jsx("div",{className:"text-4xl font-mono font-black tracking-widest text-center mb-4",children:u||"LOADING..."}),p.jsx("div",{className:"flex justify-center",children:p.jsx("button",{onClick:s,className:`text-xs px-3 py-1 rounded border transition-colors ${w?"bg-red-500 border-red-500 text-white":"border-slate-700 text-slate-400 hover:text-white"}`,children:w?"Waiting for partner to stop...":"Vote to Stop Timer"})})]})}const S=(O=_.votes)==null?void 0:O[n],R=(T=_.votes)==null?void 0:T[n==="userA"?"userB":"userA"];return p.jsxs("div",{className:"bg-white border-2 border-slate-200 p-4 rounded-xl mb-6 flex flex-col items-center justify-center text-center",children:[p.jsx("h3",{className:"font-bold text-slate-400 uppercase text-xs mb-2",children:"Timer Inactive"}),p.jsxs("p",{className:"text-slate-500 text-sm mb-4",children:["Both parties must agree to start the ",t==="daily"?"24h":"7 day"," clock."]}),p.jsxs("div",{className:"flex items-center gap-4 w-full",children:[p.jsxs("div",{className:`flex-1 p-2 rounded border text-xs font-bold ${S?"bg-green-100 border-green-300 text-green-700":"bg-slate-50 border-slate-200 text-slate-400"}`,children:["YOU: ",S?"READY":"WAITING"]}),p.jsxs("div",{className:`flex-1 p-2 rounded border text-xs font-bold ${R?"bg-green-100 border-green-300 text-green-700":"bg-slate-50 border-slate-200 text-slate-400"}`,children:["PARTNER: ",R?"READY":"WAITING"]})]}),p.jsx(Fe,{onClick:r,className:`w-full mt-4 ${S?"bg-slate-300":"bg-slate-900"}`,disabled:S,children:S?"Waiting for partner...":"Start Timer"})]})},s_=({task:t,user:e,isLocked:n,isNext:r,onClick:s,onToggleChecklist:i,onAddChecklist:o,onDeleteChecklist:l,onRequestMod:u,onResolveMod:h})=>{var Bt,bt,H,Z;const[f,y]=J.useState(!1),[_,S]=J.useState(""),[R,N]=J.useState(!1),[O,T]=J.useState(t.text),[w,k]=J.useState(!1),b=t.status,z=t.creator===e,U=t.type==="joint",v=t.modificationRequest,m=((Bt=t.checklist)==null?void 0:Bt.length)||0,E=((bt=t.checklist)==null?void 0:bt.filter(F=>F.done).length)||0,x=m===0?0:Math.round(E/m*100);let A=p.jsx("div",{className:"w-4 h-4 rounded-full bg-slate-300"}),C="bg-slate-200 border-slate-300 text-slate-400";b==="completed"?(A=p.jsx(Mu,{size:24}),C="bg-green-500 border-green-600 text-white"):b==="pending"?(A=z?p.jsx(Kp,{size:24,className:"animate-pulse"}):p.jsx(GE,{size:24,className:"animate-pulse"}),C="bg-yellow-100 border-yellow-400 text-yellow-600 hover:bg-yellow-200 cursor-pointer"):(r||U)&&(A=U?p.jsx(KE,{size:20}):z?p.jsx($2,{size:20}):p.jsx(YE,{size:20}),C=z||U?"bg-white border-blue-500 text-blue-500 hover:bg-blue-50 cursor-pointer":"bg-slate-100 border-slate-300 text-slate-400");const I=()=>{n&&b!=="completed"||s()},Ze=F=>{F.stopPropagation(),O&&O!==t.text&&u(t,"rename",O),N(!1)},un=F=>{F.stopPropagation(),w?(u(t,"delete"),k(!1)):(k(!0),setTimeout(()=>k(!1),3e3))};return p.jsxs("div",{className:`relative flex gap-4 transition-all duration-500 ${n?"opacity-50 grayscale":"opacity-100"}`,children:[p.jsx("div",{className:"w-16 flex-shrink-0 flex justify-center z-10 pt-2",children:p.jsx("button",{onClick:I,disabled:n||b==="completed",className:`w-12 h-12 rounded-full border-4 flex items-center justify-center shadow-sm transition-transform active:scale-95 ${C}`,children:A})}),p.jsxs("div",{className:`flex-1 bg-white rounded-xl border-2 shadow-sm overflow-hidden relative ${b==="pending"?"border-yellow-400 ring-4 ring-yellow-400/20":r?"border-slate-400":"border-slate-200"}`,children:[v&&p.jsxs("div",{className:"bg-orange-50 border-b border-orange-200 p-2 text-xs flex justify-between items-center",children:[p.jsx("div",{className:"text-orange-800 font-bold",children:v.type==="delete"?"Request: DELETE TASK":"Request: Rename"}),z?p.jsx("span",{className:"text-orange-600 italic",children:"Waiting..."}):p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:F=>{F.stopPropagation(),h(t,!0)},className:"text-green-600 font-bold hover:underline",children:"Accept"}),p.jsx("button",{onClick:F=>{F.stopPropagation(),h(t,!1)},className:"text-red-600 font-bold hover:underline",children:"Deny"})]})]}),p.jsxs("div",{className:"p-4",children:[p.jsxs("div",{className:"flex justify-between items-start mb-1",children:[p.jsx("span",{className:`text-xs font-bold uppercase px-2 py-0.5 rounded ${t.creator==="joint"?"bg-purple-100 text-purple-800":"bg-slate-100 text-slate-600"}`,children:t.creatorName}),p.jsxs("div",{className:"flex gap-2",children:[b==="pending"&&p.jsx("span",{className:"text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-bold",children:"In Review"}),z&&!v&&b!=="completed"&&!R&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:F=>{F.stopPropagation(),N(!0)},className:"text-slate-400 hover:text-blue-500",title:"Request Rename",children:p.jsx(Z2,{size:14})}),p.jsx("button",{onClick:un,className:`${w?"text-red-600 font-bold text-xs":"text-slate-400 hover:text-red-500"}`,title:"Request Delete",children:w?"Sure?":p.jsx(Xd,{size:14})})]})]})]}),R?p.jsxs("div",{className:"flex gap-2 mt-1 mb-2",onClick:F=>F.stopPropagation(),children:[p.jsx("input",{value:O,onChange:F=>T(F.target.value),className:"flex-1 border rounded px-2 py-1 text-sm font-bold",autoFocus:!0}),p.jsx("button",{onClick:Ze,className:"text-green-600",children:p.jsx(j2,{size:18})}),p.jsx("button",{onClick:F=>{F.stopPropagation(),N(!1),T(t.text)},className:"text-slate-400",children:p.jsx(tN,{size:18})})]}):p.jsx("p",{className:`font-medium text-lg leading-snug cursor-pointer ${b==="completed"?"line-through text-slate-400":"text-slate-800"}`,onClick:I,children:t.text}),p.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[p.jsx("div",{className:"flex-1",children:p.jsx(sN,{progress:b==="completed"?100:x})}),p.jsx("button",{onClick:F=>{F.stopPropagation(),y(!f)},className:"text-slate-400 hover:text-slate-600 p-1",children:f?p.jsx(F2,{size:18}):p.jsx(U2,{size:18})})]})]}),f&&p.jsxs("div",{className:"bg-slate-50 border-t border-slate-200 p-3 space-y-2 animate-in slide-in-from-top-2",children:[((H=t.checklist)==null?void 0:H.length)===0&&p.jsx("p",{className:"text-xs text-slate-400 italic",children:"No sub-tasks yet."}),(Z=t.checklist)==null?void 0:Z.map((F,_e)=>p.jsxs("div",{className:"flex items-center gap-2 group",children:[p.jsx("button",{onClick:de=>{de.stopPropagation(),i(_e)},disabled:b==="completed",className:`w-5 h-5 rounded border flex items-center justify-center transition-colors ${F.done?"bg-green-500 border-green-500 text-white":"bg-white border-slate-300 hover:border-slate-400"}`,children:F.done&&p.jsx(Mu,{size:14})}),p.jsx("span",{className:`flex-1 text-sm ${F.done?"line-through text-slate-400":"text-slate-700"}`,children:F.text}),(z||U)&&b!=="completed"&&p.jsx("button",{onClick:de=>{de.stopPropagation(),l(_e)},className:"text-slate-300 hover:text-red-500",children:p.jsx(Xd,{size:14})})]},_e)),(z||U)&&b!=="completed"&&p.jsxs("div",{className:"flex gap-2 pt-2",onClick:F=>F.stopPropagation(),children:[p.jsx("input",{value:_,onChange:F=>S(F.target.value),className:"flex-1 text-sm border rounded px-2 py-1 outline-none focus:border-slate-500",placeholder:"Add sub-task...",onKeyDown:F=>{F.key==="Enter"&&(o(_),S(""))}}),p.jsx("button",{onClick:()=>{o(_),S("")},className:"bg-slate-200 hover:bg-slate-300 text-slate-600 px-2 rounded font-bold",children:"+"})]})]})]})]})},aN=({tasks:t,firstIncompleteIndex:e,user:n,myRoleKey:r})=>{if(t.length===0)return null;if(e===-1)return p.jsxs("div",{className:"bg-green-100 border border-green-300 p-4 rounded-xl flex items-center gap-4",children:[p.jsx(Mu,{className:"text-green-600"}),p.jsx("span",{className:"font-bold text-green-800",children:"All Tasks Complete!"})]});const s=t[e];if(!s)return null;const i=s.creator===r,o=s.status==="pending";let l,u,h,f;return o?i?(l="Awaiting Approval",u="You submitted the work. Nag your friend to approve it.",h="bg-yellow-50 border-yellow-200",f=p.jsx(Kp,{size:24,className:"text-yellow-600"})):(l="ACTION REQUIRED",u="Review their work and approve it to move forward.",h="bg-yellow-100 border-yellow-400 animate-pulse",f=p.jsx(GE,{size:24,className:"text-yellow-800"})):i?(l="YOUR TURN",u="The chain is stopped until you submit this task.",h="bg-red-50 border-red-200",f=p.jsx(D2,{size:24,className:"text-red-600"})):(l=`${(s==null?void 0:s.creatorName)||"Partner"} is working`,u="You are blocked until they finish.",h="bg-slate-50 border-slate-200",f=p.jsx(XE,{size:24,className:"text-slate-400"})),p.jsxs("div",{className:`p-4 rounded-xl border flex items-center gap-4 shadow-sm transition-colors duration-500 ${h}`,children:[p.jsx("div",{className:"p-2 bg-white/50 rounded-full",children:f}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-bold text-slate-800",children:l}),p.jsx("p",{className:"text-sm opacity-80",children:u})]})]})};function lN(){var Ha,is,Xi,Ms,os,hn,Ji,Zi,js,Us,eo,to,Wa;const[t,e]=J.useState(null),[n,r]=J.useState(null),[s,i]=J.useState(null),[o,l]=J.useState([]),[u,h]=J.useState([]),[f,y]=J.useState([]),[_,S]=J.useState(""),[R,N]=J.useState([]),[O,T]=J.useState(!0),[w,k]=J.useState(!1),[b,z]=J.useState(null),[U,v]=J.useState("loading"),[m,E]=J.useState(null),[x,A]=J.useState(!1),[C,I]=J.useState(!1),[Ze,un]=J.useState(!1),[Bt,bt]=J.useState(()=>typeof Notification<"u"?Notification.permission:"default"),[H,Z]=J.useState(""),[F,_e]=J.useState("chain"),[de,Ae]=J.useState(!1),[Dt,Jt]=J.useState(""),[ee,pt]=J.useState(null),[Va,La]=J.useState(""),[Xr,Jr]=J.useState(""),[Mn,Zr]=J.useState(null),[cn,Ui]=J.useState(""),[Fi,Ac]=J.useState("We solemnly swear to keep the chain moving. If one fails, both fail."),[zi,Bi]=J.useState(""),ar=J.useRef(null),$i=J.useRef(0);J.useEffect(()=>{(async()=>{try{await ek(r_)}catch($){console.error($),z($.message),T(!1)}})();const W=ok(r_,$=>{if(e($),$){const G=localStorage.getItem("thepact_profile");G&&E(JSON.parse(G));const te=localStorage.getItem("thepact_active_code");te&&G?r(te):G?(v("lobby"),T(!1)):(v("profile"),T(!1)),za()}});return()=>W()},[]),J.useEffect(()=>{if(!t||!m||U!=="lobby")return;const V=Al(pr(pe,"pacts"),qy("host.email","==",m.email)),W=Al(pr(pe,"pacts"),qy("guest.email","==",m.email)),$=wo(V,te=>{const Te=te.docs.map(fe=>fe.data());N(fe=>[...fe.filter(M=>M.host.email!==m.email),...Te].sort((M,Ie)=>Ie.createdAt-M.createdAt))}),G=wo(W,te=>{const Te=te.docs.map(fe=>fe.data());N(fe=>[...fe.filter(M=>{var Ie;return((Ie=M.guest)==null?void 0:Ie.email)!==m.email}),...Te].sort((M,Ie)=>Ie.createdAt-M.createdAt))});return()=>{$(),G()}},[t,m,U]),J.useEffect(()=>{if(!t||!n)return;const V=Se(pe,"pacts",n),W=wo(V,fe=>{var Ee;if(fe.exists()){const M=fe.data();if(i(M),ar.current||S(M.notes||""),M.status==="active"){const Ie=sessionStorage.getItem(`cert_seen_${n}`);v(Ot=>Ot==="dashboard"||Ie?"dashboard":"certificate")}else(M.status==="waiting"||M.status==="signing")&&v("contract_room");if(M.notification&&m&&M.notification.toEmail===m.email){const Ie=((Ee=M.notification.timestamp)==null?void 0:Ee.toMillis())||0;Ie>$i.current&&Date.now()-Ie<6e4&&($i.current=Ie,Pc(M.notification.title,M.notification.body))}T(!1)}else ts()},fe=>{console.error("Sync Error:",fe),T(!1)}),$=Al(pr(pe,"pacts",n,"tasks"),Hy("createdAt","asc")),G=wo($,fe=>{const Ee=fe.docs.map(M=>({id:M.id,...M.data()}));l(Ee.filter(M=>M.type!=="joint")),h(Ee.filter(M=>M.type==="joint"))}),te=Al(pr(pe,"pacts",n,"penalties"),Hy("createdAt","desc")),Te=wo(te,fe=>{y(fe.docs.map(Ee=>({id:Ee.id,...Ee.data()})))});return()=>{W(),G(),Te()}},[t,n]),J.useEffect(()=>{if(!s||!s.timers)return;const W=setInterval(()=>{["daily","weekly"].forEach($=>{const G=s.timers[$];if(G&&G.status==="running"){const te=Date.now(),Te=G.startTime.toMillis(),fe=$==="daily"?24*60*60*1e3:7*24*60*60*1e3;te>Te+fe&&Rc($)}})},5e3);return()=>clearInterval(W)},[s,o]);const Rc=async V=>{const $=o.filter(Te=>(Te.mode||"chain")===V).find(Te=>Te.status!=="completed");let G="nobody",te=null;$&&(te=$.id,$.status==="open"?G=$.creator:$.status==="pending"&&(G=$.creator==="userA"?"userB":"userA")),await Ue(Se(pe,"pacts",n),{[`timers.${V}.status`]:"expired",[`timers.${V}.failedBy`]:G,[`timers.${V}.failedTask`]:te})},qi=async V=>{var Te,fe;const W=`timers.${V}.votes.${ue}`,$=ue==="userA"?"userB":"userA",G=((fe=(Te=s.timers)==null?void 0:Te[V])==null?void 0:fe.votes)||{},te={[W]:!0};G[$]&&(te[`timers.${V}.startTime`]=xn(),te[`timers.${V}.status`]="running",te[`timers.${V}.stopVotes`]={userA:!1,userB:!1}),await Ue(Se(pe,"pacts",n),te)},Hi=async V=>{var Te,fe;const W=`timers.${V}.stopVotes.${ue}`,$=ue==="userA"?"userB":"userA",G=((fe=(Te=s.timers)==null?void 0:Te[V])==null?void 0:fe.stopVotes)||{},te={[W]:!0};G[$]&&(te[`timers.${V}.status`]="idle",te[`timers.${V}.startTime`]=null,te[`timers.${V}.votes`]={userA:!1,userB:!1}),await Ue(Se(pe,"pacts",n),te)},Ma=async V=>{zi.trim()&&(await xh(pr(pe,"pacts",n,"penalties"),{text:zi,from:ue,to:ue==="userA"?"userB":"userA",mode:V,status:"outstanding",createdAt:xn()}),await Ue(Se(pe,"pacts",n),{[`timers.${V}.status`]:"idle",[`timers.${V}.startTime`]:null,[`timers.${V}.votes`]:{userA:!1,userB:!1}}),Bi(""))},et=async V=>{await Ue(Se(pe,"pacts",n,"penalties",V),{status:"paid",paidAt:xn()})},it=async(V,W,$)=>{T(!0);const G={name:V,email:W,pin:$};await Th(Se(pe,"users",W),G),localStorage.setItem("thepact_profile",JSON.stringify(G)),E(G),v("lobby"),T(!1)},Ls=async(V,W)=>{T(!0);const $=Se(pe,"users",V),G=await Eh($);if(G.exists()&&G.data().pin===W){const te=G.data();localStorage.setItem("thepact_profile",JSON.stringify(te)),E(te),v("lobby")}else alert("Invalid Email or PIN");T(!1)},ja=async()=>{T(!0);const V=Math.floor(1e5+Math.random()*9e5).toString();await Th(Se(pe,"pacts",V),{host:{...m,signature:null},guest:null,terms:Fi,code:V,status:"waiting",createdAt:xn(),notes:"",timers:{daily:{status:"idle",votes:{userA:!1,userB:!1}},weekly:{status:"idle",votes:{userA:!1,userB:!1}}}}),localStorage.setItem("thepact_active_code",V),r(V)},Ua=V=>{T(!0),localStorage.setItem("thepact_active_code",V),r(V)},Cc=async()=>{var Ee,M;if(cn.length!==6)return alert("Code must be 6 digits");T(!0);const V=Se(pe,"pacts",cn),W=await Eh(V);if(!W.exists())return T(!1),alert("Pact not found.");const $=W.data(),G=m.email,te=((Ee=$.host)==null?void 0:Ee.email)===G,Te=((M=$.guest)==null?void 0:M.email)===G,fe=!$.guest;if(te||Te)localStorage.setItem("thepact_active_code",cn),r(cn);else if(fe){if($.status!=="waiting")return T(!1),alert("This pact is active/full.");await Ue(V,{guest:{...m,signature:null},status:"signing"}),localStorage.setItem("thepact_active_code",cn),r(cn)}else T(!1),alert("Pact full.")},es=async()=>{T(!0);const V="DEBUG-001";await Th(Se(pe,"pacts",V),{host:{...m,signature:"debug-sig"},guest:{name:"Debug Bot",email:"bot@pact.com",signature:"bot-sig"},terms:"DEBUG MODE ACTIVE",code:V,status:"active",createdAt:xn(),notes:"Welcome to the debug zone.",timers:{daily:{status:"idle"},weekly:{status:"idle"}}}),localStorage.setItem("thepact_active_code",V),r(V),sessionStorage.setItem(`cert_seen_${V}`,"true")},ts=()=>{localStorage.removeItem("thepact_active_code"),r(null),i(null),v("lobby"),T(!1)},Fa=()=>{I(!0)},Wi=async()=>{if(I(!1),!!n){T(!0);try{const V=pr(pe,"pacts",n,"tasks"),$=(await gP(V)).docs.map(G=>Ih(G.ref));await Promise.all($),await Ih(Se(pe,"pacts",n)),ts()}catch(V){console.error("Error deleting pact:",V),alert("Failed to delete pact. Check console."),T(!1)}}},za=async()=>{if(typeof Notification>"u")return;const V=await Notification.requestPermission();bt(V),V==="granted"&&new Notification("Notifications Enabled",{body:"You will now receive alerts from The Pact.",icon:"https://cdn-icons-png.flaticon.com/512/2910/2910768.png"})},Pc=(V,W)=>{if(typeof Notification<"u"&&Notification.permission==="granted")try{new Notification(V,{body:W,icon:"https://cdn-icons-png.flaticon.com/512/2910/2910768.png"})}catch{}},Zt=async(V,W,$)=>{n&&await Ue(Se(pe,"pacts",n),{notification:{toEmail:V,title:W,body:$,timestamp:Ke.now()}})},Ki=((Ha=s==null?void 0:s.host)==null?void 0:Ha.email)===(m==null?void 0:m.email),Tn=n==="DEBUG-001"&&Ze?!Ki:Ki,ue=Tn?"userA":"userB",Gi=Tn?"userB":"userA",en=Tn?(is=s==null?void 0:s.host)==null?void 0:is.name:(Xi=s==null?void 0:s.guest)==null?void 0:Xi.name,be=Tn?(Ms=s==null?void 0:s.guest)==null?void 0:Ms.email:(os=s==null?void 0:s.host)==null?void 0:os.email,Ba=async V=>{var fe,Ee;const W=Se(pe,"pacts",n),$=await Eh(W);if(!$.exists())return;const G=$.data(),te={};Tn?te["host.signature"]=V:te["guest.signature"]=V,(Tn?(fe=G.guest)==null?void 0:fe.signature:(Ee=G.host)==null?void 0:Ee.signature)&&(te.status="active",te.signedAt=xn()),await Ue(W,te)},ns=async(V,W)=>{const $=[...V.checklist];$[W].done=!$[W].done,await Ue(Se(pe,"pacts",n,"tasks",V.id),{checklist:$})},Qi=async(V,W)=>{if(!W.trim())return;const $=[...V.checklist||[],{text:W,done:!1}];await Ue(Se(pe,"pacts",n,"tasks",V.id),{checklist:$})},lr=async(V,W)=>{const $=[...V.checklist];$.splice(W,1),await Ue(Se(pe,"pacts",n,"tasks",V.id),{checklist:$})},Yi=async(V,W,$=null)=>{const G=Se(pe,"pacts",n,"tasks",V.id);await Ue(G,{modificationRequest:{type:W,payload:$,requester:ue,createdAt:Ke.now()}}),be&&Zt(be,"Update Request",`${en} wants to ${W} a task.`)},tt=async(V,W)=>{const $=Se(pe,"pacts",n,"tasks",V.id);if(!W){await Ue($,{modificationRequest:null});return}const G=V.modificationRequest;G.type==="rename"?await Ue($,{text:G.payload,modificationRequest:null}):G.type==="delete"&&await Ih($),be&&Zt(be,"Request Update",`${en} resolved the request.`)},$a=async V=>{if(V.preventDefault(),!H.trim())return;const W=F==="daily"||F==="weekly"?F:"chain";await xh(pr(pe,"pacts",n,"tasks"),{text:H,creator:ue,creatorName:en,status:"open",type:"solo",mode:W,checklist:[],rejectionCount:0,createdAt:xn()}),Z(""),be&&Zt(be,"New Chain Link",`${en} added a ${W} task.`)},rs=async()=>{Dt.trim()&&(await xh(pr(pe,"pacts",n,"tasks"),{text:Dt,creator:"joint",creatorName:"JOINT MISSION",status:"proposed",type:"joint",checklist:[],approvals:{[ue]:!0,[Gi]:!1},initiator:ue,createdAt:xn()}),Ae(!1),Jt(""),be&&Zt(be,"Mission Proposal",`${en} proposed a joint mission.`))},ss=async V=>{const W=Se(pe,"pacts",n,"tasks",V.id),$={...V.approvals,[ue]:!0},G=$.userA&&$.userB;await Ue(W,{approvals:$,status:G?"open":"proposed"}),G&&be&&Zt(be,"Mission Active","Joint operation authorized.")},Nc=async()=>{const V=Se(pe,"pacts",n,"tasks",ee.id);let W=null,$=null;if(Mn){k(!0);try{const G=Ah(Ch,`pacts/${n}/tasks/${ee.id}/${Mn.name}`);await S2(G,Mn),W=await k2(G),$=G.fullPath}catch(G){console.error("Upload failed",G),alert("Upload failed. Try again."),k(!1);return}k(!1)}await Ue(V,{status:"pending",submittedAt:xn(),submission:{note:Va,link:Xr,file:W,storagePath:$}}),pt(null),Zr(null),be&&Zt(be,"Task Submitted",`${en} turned in work.`)},qa=async()=>{var W;const V=Se(pe,"pacts",n,"tasks",ee.id);if(ee.type==="joint"){const G={...ee.completionSignatures||{userA:!1,userB:!1},[ue]:!0};let te=ee.status;G.userA&&G.userB&&(te="completed"),await Ue(V,{completionSignatures:G,status:te})}else{if(await Ue(V,{status:"completed",completedAt:xn(),approvedBy:ue}),(W=ee.submission)!=null&&W.storagePath)try{const $=Ah(Ch,ee.submission.storagePath);await Zy($),await Ue(V,{"submission.file":null,"submission.storagePath":null,"submission.fileDeleted":!0})}catch($){console.log("File cleanup error:",$)}be&&Zt(be,"Approved!","The chain moves forward.")}pt(null)},ur=async()=>{var W;const V=Se(pe,"pacts",n,"tasks",ee.id);if((W=ee.submission)!=null&&W.storagePath)try{const $=Ah(Ch,ee.submission.storagePath);await Zy($)}catch($){console.log("File cleanup error:",$)}await Ue(V,{status:"open",rejectionCount:(ee.rejectionCount||0)+1,submission:null}),pt(null),be&&Zt(be,"REJECTED","Your work was not accepted.")},bc=V=>{const W=V.target.files[0];if(W){if(W.size>200*1024*1024)return alert("File too large! Max 200MB.");Zr(W)}};if(O)return p.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:p.jsx("div",{className:"animate-spin text-4xl",children:"⛓️"})});if(b)return p.jsxs("div",{className:"p-8 text-center",children:[p.jsx(Qd,{className:"mx-auto text-red-500 mb-4"}),p.jsx("h2",{className:"font-bold",children:"Auth Error"}),p.jsx("p",{className:"text-sm",children:b})]});if(U==="profile")return p.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center p-4",children:p.jsxs(qs,{className:"max-w-md w-full p-8",children:[p.jsx(n_,{className:"w-16 h-16 mx-auto text-slate-900 mb-6"}),p.jsx("h1",{className:"text-2xl font-black text-center mb-6",children:x?"Resume Identity":"Create Identity"}),x?p.jsxs("form",{onSubmit:V=>{V.preventDefault();const W=new FormData(V.target);Ls(W.get("email"),W.get("pin"))},className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Email (ID)"}),p.jsx("input",{name:"email",type:"email",required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3",placeholder:"you@email.com"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Security PIN"}),p.jsx("input",{name:"pin",type:"password",maxLength:4,required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3 tracking-widest font-mono",placeholder:"••••"})]}),p.jsx(Fe,{type:"submit",className:"w-full py-4 text-lg",children:"Log In"})]}):p.jsxs("form",{onSubmit:V=>{V.preventDefault();const W=new FormData(V.target);it(W.get("name"),W.get("email"),W.get("pin"))},className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Codename"}),p.jsx("input",{name:"name",required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3 font-bold",placeholder:"e.g. Shadow"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Email (ID)"}),p.jsx("input",{name:"email",type:"email",required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3",placeholder:"you@email.com"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Security PIN"}),p.jsx("input",{name:"pin",type:"password",maxLength:4,required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3 tracking-widest font-mono",placeholder:"••••"})]}),p.jsx(Fe,{type:"submit",className:"w-full py-4 text-lg",children:"Initialize Identity"})]}),p.jsx("div",{className:"mt-4 text-center",children:p.jsx("button",{onClick:()=>A(!x),className:"text-xs text-slate-400 hover:text-slate-600 underline",children:x?"Need to create an account?":"Already have an account? Log In"})})]})});if(U==="lobby")return p.jsx("div",{className:"min-h-screen bg-slate-100 p-4",children:p.jsxs("div",{className:"max-w-2xl mx-auto space-y-8 mt-8",children:[p.jsxs("div",{className:"text-center",children:[p.jsx("h1",{className:"text-4xl font-black text-slate-900 mb-2",children:"THE PACT"}),p.jsxs("p",{className:"text-slate-500",children:["Welcome, ",m.name,". Choose your path."]})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[p.jsxs(qs,{className:"p-6 hover:border-yellow-500 transition-colors cursor-pointer",onClick:ja,children:[p.jsx(t_,{className:"w-10 h-10 mb-4 text-slate-900"}),p.jsx("h2",{className:"text-xl font-bold mb-2",children:"Draft New Pact"}),p.jsx("p",{className:"text-sm text-slate-500",children:"Host a new contract and invite a partner."})]}),p.jsxs(qs,{className:"p-6 hover:border-blue-500 transition-colors cursor-pointer",children:[p.jsx(XE,{className:"w-10 h-10 mb-4 text-slate-900"}),p.jsx("h2",{className:"text-xl font-bold mb-2",children:"Join Pact"}),p.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"Enter the 6-digit code from your partner."}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("input",{value:cn,onChange:V=>Ui(V.target.value),maxLength:6,className:"flex-1 border-2 border-slate-200 rounded-lg p-2 text-center font-mono font-bold tracking-widest uppercase",placeholder:"CODE"}),p.jsx(Fe,{onClick:Cc,children:"Join"})]})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("h3",{className:"text-sm font-bold uppercase text-slate-400 flex items-center gap-2",children:[p.jsx(W2,{size:16})," Your Active Pacts"]}),R.length===0?p.jsx("div",{className:"text-center p-8 border-2 border-dashed border-slate-200 rounded-lg text-slate-400",children:"No active pacts found. Create or join one above."}):p.jsx("div",{className:"space-y-3",children:R.map(V=>{var G;const $=V.host.email===m.email?((G=V.guest)==null?void 0:G.name)||"Waiting...":V.host.name;return p.jsxs("div",{onClick:()=>Ua(V.code),className:"bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center cursor-pointer hover:border-slate-400 transition-colors",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("h4",{className:"font-bold text-slate-900",children:["Pact #",V.code]}),V.status==="active"?p.jsx("span",{className:"bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase",children:"Active"}):p.jsx("span",{className:"bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase",children:V.status})]}),p.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:["With: ",p.jsx("strong",{children:$})]})]}),p.jsx(e_,{className:"text-slate-300",size:20})]},V.code)})})]}),p.jsxs("div",{className:"text-center pt-8",children:[p.jsx("button",{onClick:()=>{localStorage.removeItem("thepact_profile"),window.location.reload()},className:"text-xs text-slate-400 underline",children:"Switch Profile"}),m.email==="logan@aplamon.com"&&p.jsx("div",{className:"mt-8 pt-8 border-t border-slate-200",children:p.jsxs(Fe,{onClick:es,variant:"danger",className:"w-full",children:[p.jsx(L2,{size:16})," ENTER DEBUG MODE"]})})]})]})});if(U==="contract_room"){const V=s.host.email===m.email,W=V?s.host.signature:(hn=s.guest)==null?void 0:hn.signature;return p.jsxs("div",{className:"min-h-screen bg-slate-50 p-4 pb-20 overflow-y-auto",children:[p.jsxs(Fe,{onClick:ts,variant:"secondary",size:"sm",className:"mb-4",children:[p.jsx(e_,{className:"rotate-180",size:16})," Back to Lobby"]}),p.jsxs("div",{className:"max-w-2xl mx-auto bg-white shadow-2xl min-h-[800px] relative border border-slate-200",children:[p.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",style:{backgroundImage:'url("https://www.transparenttextures.com/patterns/cream-paper.png")'}}),p.jsxs("div",{className:"p-12 border-b-2 border-slate-900 text-center",children:[p.jsx("h1",{className:"text-4xl font-serif font-black uppercase tracking-widest mb-4",children:"Official Pact"}),p.jsxs("div",{className:"flex justify-center gap-8 mt-6 font-bold text-lg",children:[p.jsx("div",{className:"border-b-2 border-slate-300 px-4 pb-1 min-w-[150px]",children:s.host.name}),p.jsx("div",{className:"font-serif italic text-slate-400",children:"&"}),p.jsx("div",{className:`border-b-2 px-4 pb-1 min-w-[150px] ${s.guest?"border-slate-300":"text-slate-300 italic border-dashed"}`,children:s.guest?s.guest.name:"Waiting..."})]})]}),p.jsxs("div",{className:"p-12 space-y-8",children:[V&&!s.guest&&p.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 p-6 rounded text-center",children:[p.jsx("h3",{className:"font-bold text-yellow-800 mb-2",children:"Waiting for Partner"}),p.jsx("p",{className:"text-sm text-yellow-700 mb-4",children:"Share this code with your friend to join:"}),p.jsx("div",{className:"text-5xl font-mono font-black tracking-widest text-slate-900 bg-white inline-block px-6 py-4 rounded border-2 border-slate-900 border-dashed",children:s.code})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-serif font-bold uppercase text-slate-400 text-sm mb-4",children:"Terms of Agreement"}),V&&!s.guest?p.jsx("textarea",{value:Fi,onChange:$=>{Ac($.target.value),Ue(Se(pe,"pacts",n),{terms:$.target.value})},className:"w-full h-32 border-2 border-slate-200 p-4 font-serif text-lg leading-relaxed focus:border-slate-900 outline-none resize-none"}):p.jsx("div",{className:"font-serif text-xl leading-relaxed text-slate-800",children:s.terms})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 mt-8 border-t-2 border-slate-100",children:[p.jsxs("div",{children:[p.jsx("div",{className:"h-32 border-b-2 border-slate-900 mb-2 flex items-end justify-center",children:s.host.signature?p.jsx("img",{src:s.host.signature,alt:"Host Sig",className:"max-h-24"}):p.jsx("span",{className:"text-slate-300 text-sm italic pb-2",children:"Pending..."})}),p.jsxs("p",{className:"text-center font-serif text-sm uppercase tracking-widest",children:[s.host.name," (Host)"]})]}),p.jsxs("div",{children:[p.jsx("div",{className:"h-32 border-b-2 border-slate-900 mb-2 flex items-end justify-center",children:(Ji=s.guest)!=null&&Ji.signature?p.jsx("img",{src:s.guest.signature,alt:"Guest Sig",className:"max-h-24"}):p.jsx("span",{className:"text-slate-300 text-sm italic pb-2",children:"Pending..."})}),p.jsxs("p",{className:"text-center font-serif text-sm uppercase tracking-widest",children:[s.guest?s.guest.name:"Guest"," (Partner)"]})]})]})]}),(V&&!W||!V&&s.guest&&!W)&&p.jsxs("div",{className:"p-8 bg-slate-50 border-t border-slate-200",children:[p.jsx("h3",{className:"font-bold text-center mb-4",children:"Draw your signature to accept"}),p.jsx(iN,{onSave:Ba})]})]})]})}if(U==="certificate")return p.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4",children:[p.jsx("div",{className:"max-w-2xl w-full bg-white p-2 rounded-lg shadow-2xl animate-in zoom-in duration-500",children:p.jsxs("div",{className:"border-4 border-double border-slate-900 p-8 text-center relative overflow-hidden",children:[p.jsx("div",{className:"absolute top-4 right-4",children:p.jsx(n_,{size:48,className:"text-slate-200"})}),p.jsx("h1",{className:"text-5xl font-serif font-black mb-2 uppercase",children:"It Is Done"}),p.jsx("div",{className:"w-full h-1 bg-slate-900 mb-8"}),p.jsxs("p",{className:"font-serif text-xl italic mb-8",children:["The pact between ",p.jsx("strong",{className:"uppercase",children:s.host.name})," and ",p.jsx("strong",{className:"uppercase",children:s.guest.name})," is sealed."]}),p.jsxs("div",{className:"flex justify-center gap-12 mb-8 opacity-70",children:[p.jsx("img",{src:s.host.signature,className:"h-16",alt:"Sig A"}),p.jsx("img",{src:s.guest.signature,className:"h-16",alt:"Sig B"})]}),p.jsxs("div",{className:"text-xs text-slate-400 font-mono uppercase tracking-widest",children:["Timestamp: ",(Zi=s.signedAt)==null?void 0:Zi.toDate().toLocaleString()]})]})}),p.jsxs("div",{className:"mt-8 flex gap-4",children:[p.jsxs(Fe,{onClick:()=>window.print(),variant:"secondary",children:[p.jsx(z2,{size:20})," Save"]}),p.jsxs(Fe,{onClick:()=>{sessionStorage.setItem(`cert_seen_${n}`,"true"),v("dashboard")},className:"px-8 py-3 text-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400",children:["Enter The Pact ",p.jsx(Q2,{size:20,fill:"currentColor"})]})]})]});if(U==="dashboard"){if(!s||!m)return p.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-slate-50 flex-col gap-4",children:[p.jsx("div",{className:"animate-spin text-4xl",children:"⛓️"}),p.jsx("p",{className:"text-slate-400 text-sm",children:"Loading Pact Data..."}),p.jsx(Fe,{onClick:()=>window.location.reload(),variant:"secondary",size:"sm",children:"Force Reload"})]});const V=o.filter(M=>F==="chain"?!M.mode||M.mode==="chain":F==="daily"?M.mode==="daily":F==="weekly"?M.mode==="weekly":!1),W=V.findIndex(M=>M.status!=="completed"),$=[...o,...u].filter(M=>M.rejectionCount>0),G=u.filter(M=>M.status==="proposed"&&M.status!=="cancelled"),te=u.filter(M=>M.status==="open"||M.status==="completed"),Te=V.length>0?V[V.length-1].creator:null,fe=!Te||Te!==ue,Ee=F==="daily"||F==="weekly"?(js=s.timers)==null?void 0:js[F]:null;return p.jsxs("div",{className:"min-h-screen bg-slate-100 pb-20",children:[p.jsx(Ph,{isOpen:de,onClose:()=>Ae(!1),title:"Propose Joint Mission",children:p.jsxs("div",{className:"space-y-4",children:[p.jsx("input",{value:Dt,onChange:M=>Jt(M.target.value),className:"w-full border-2 border-slate-900 rounded-lg p-3 font-bold",placeholder:"Mission Objective...",autoFocus:!0}),p.jsxs(Fe,{onClick:rs,disabled:!Dt.trim(),className:"w-full",children:[p.jsx(J2,{size:18})," Send Proposal"]})]})}),p.jsx(Ph,{isOpen:C,onClose:()=>I(!1),title:"Destroy Pact?",children:p.jsxs("div",{className:"space-y-4 text-center",children:[p.jsx("div",{className:"bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto",children:p.jsx(Qd,{className:"text-red-600",size:32})}),p.jsx("h3",{className:"font-bold text-slate-900 text-lg",children:"Are you absolutely sure?"}),p.jsx("p",{className:"text-slate-500 text-sm",children:"This action cannot be undone. This will permanently delete the contract and all associated tasks for both you and your partner."}),p.jsxs("div",{className:"flex gap-3 pt-4",children:[p.jsx(Fe,{onClick:()=>I(!1),variant:"secondary",className:"flex-1",children:"Cancel"}),p.jsx(Fe,{onClick:Wi,variant:"danger",className:"flex-1",children:"Yes, Void It"})]})]})}),ee&&p.jsx(Ph,{isOpen:!!ee,onClose:()=>pt(null),title:ee.type==="joint"?"Joint Mission":ee.creator===ue?"Submit Work":"Review Work",children:p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"bg-slate-50 p-4 rounded-xl border border-slate-200",children:[p.jsx("h2",{className:"font-bold text-xl",children:ee.text}),p.jsx("span",{className:"text-xs bg-slate-200 px-2 py-1 rounded",children:ee.creatorName})]}),ee.type==="joint"&&p.jsxs("div",{className:"space-y-4",children:[p.jsx("div",{className:"grid grid-cols-2 gap-4",children:["userA","userB"].map(M=>{var kt;const Ie=M==="userA"?s.host.name:s.guest.name,Ot=(kt=ee.completionSignatures)==null?void 0:kt[M];return p.jsxs("div",{className:`p-4 rounded border-2 text-center ${Ot?"bg-green-50 border-green-500":"bg-slate-50"}`,children:[p.jsx("p",{className:"text-xs font-bold uppercase mb-2",children:Ie}),Ot?p.jsx(Mu,{className:"mx-auto text-green-500"}):p.jsx(Kp,{className:"mx-auto text-slate-300"})]},M)})}),ee.status!=="completed"&&!((Us=ee.completionSignatures)!=null&&Us[ue])&&p.jsxs(Fe,{onClick:qa,variant:"success",className:"w-full py-4",children:[p.jsx(t_,{size:24})," Sign Off"]})]}),ee.type!=="joint"&&ee.creator===ue&&ee.status==="open"&&p.jsxs("div",{className:"space-y-4",children:[p.jsx("textarea",{value:Va,onChange:M=>La(M.target.value),className:"w-full border p-3 rounded h-32",placeholder:"Notes..."}),p.jsxs("div",{className:"flex gap-2 items-center",children:[p.jsx("input",{type:"file",onChange:bc,className:"w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"}),Mn&&p.jsxs("span",{className:"text-xs text-green-600 font-bold",children:["Selected: ",Mn.name]}),p.jsx("input",{value:Xr,onChange:M=>Jr(M.target.value),className:"flex-1 border p-2 rounded",placeholder:"Link..."})]}),p.jsx(Fe,{onClick:Nc,disabled:w,children:w?p.jsxs(p.Fragment,{children:[p.jsx(K2,{className:"animate-spin",size:18})," Uploading..."]}):"Turn In"})]}),ee.type!=="joint"&&ee.creator!==ue&&ee.status==="pending"&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"bg-white p-4 border rounded",children:[((eo=ee.submission)==null?void 0:eo.file)&&p.jsx("div",{className:"mb-4",children:ee.submission.file.includes(".jpg")||ee.submission.file.includes(".png")||ee.submission.file.includes(".jpeg")?p.jsx("img",{src:ee.submission.file,className:"max-h-48 rounded border"}):p.jsxs("a",{href:ee.submission.file,target:"_blank",className:"flex items-center gap-2 text-blue-600 font-bold bg-blue-50 p-3 rounded",children:[p.jsx(q2,{size:20})," View Attached File"]})}),p.jsx("p",{className:"text-sm whitespace-pre-wrap",children:(to=ee.submission)==null?void 0:to.note}),((Wa=ee.submission)==null?void 0:Wa.link)&&p.jsx("a",{href:ee.submission.link,target:"_blank",className:"text-blue-600 underline text-sm block mt-2",children:ee.submission.link})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsx(Fe,{onClick:ur,variant:"danger",children:"Reject"}),p.jsx(Fe,{onClick:qa,variant:"success",children:"Approve"})]})]})]})}),p.jsxs("header",{className:"bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-20",children:[p.jsxs("div",{className:"max-w-2xl mx-auto flex justify-between items-center",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Rh,{className:"text-yellow-400"}),p.jsx("h1",{className:"font-bold text-lg tracking-wider",children:"THE PACT"})]}),p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsxs("button",{onClick:za,className:`relative p-2 rounded-full hover:bg-slate-800 transition-colors ${Bt!=="granted"?"text-yellow-400":"text-slate-400"}`,title:Bt!=="granted"?"Enable Notifications":"Notifications On",children:[Bt==="granted"?p.jsx(V2,{size:20}):p.jsx(O2,{size:20}),Bt!=="granted"&&p.jsx("span",{className:"absolute top-0 right-0 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"})]}),m.email==="logan@aplamon.com"&&n==="DEBUG-001"&&p.jsxs("button",{onClick:()=>un(!Ze),className:"bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded font-bold uppercase flex items-center gap-1 animate-pulse",title:"Switch between You and Bot",children:[p.jsx(Y2,{size:12})," ",Ze?"Bot View":"My View"]}),p.jsxs("div",{className:"text-xs font-mono text-slate-400",children:[en," (",Tn?"Host":"Partner",")"]}),p.jsx("button",{onClick:Fa,className:"text-slate-400 hover:text-red-500",title:"VOID CONTRACT",children:p.jsx(Xd,{size:16})}),p.jsx("button",{onClick:ts,className:"text-slate-400 hover:text-white",title:"Exit Pact",children:p.jsx(G2,{size:16})})]})]}),p.jsx("div",{className:"max-w-2xl mx-auto mt-4 flex gap-2 overflow-x-auto pb-2",children:[{id:"chain",label:"Chain",icon:Rh},{id:"daily",label:"Daily",icon:QE},{id:"weekly",label:"Weekly",icon:M2},{id:"joint",label:"Joint",icon:KE},{id:"shame",label:"Shame",icon:Yd}].map(M=>p.jsxs("button",{onClick:()=>_e(M.id),className:`flex-1 min-w-[80px] py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase transition-colors ${F===M.id?"bg-yellow-500 text-slate-900":"bg-slate-800 text-slate-400"}`,children:[p.jsx(M.icon,{size:16}),M.label]},M.id))})]}),p.jsxs("main",{className:"max-w-2xl mx-auto p-4 space-y-6",children:[F==="shame"&&p.jsxs("div",{className:"space-y-8",children:[p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"bg-orange-50 text-orange-900 p-6 rounded-xl border border-orange-200 text-center",children:[p.jsx(H2,{size:48,className:"mx-auto mb-4 opacity-50"}),p.jsx("h2",{className:"text-2xl font-black uppercase",children:"Outstanding Debts"})]}),f.length===0?p.jsx("p",{className:"text-center text-slate-400",children:"No debts. You are both honorable."}):f.map(M=>{const Ie=M.from===ue,Ot=M.to===ue,kt=M.status==="paid";return p.jsx("div",{className:`p-4 rounded-xl border-l-4 shadow-sm relative ${kt?"bg-slate-100 border-slate-300 opacity-70":"bg-white border-red-500"}`,children:p.jsxs("div",{className:"flex justify-between items-start mb-2",children:[p.jsxs("div",{children:[p.jsx("span",{className:`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${kt?"bg-slate-200 text-slate-500":"bg-red-100 text-red-600"}`,children:kt?"SETTLED":"UNPAID DEBT"}),p.jsx("h3",{className:"font-bold text-lg mt-1",children:M.text}),p.jsxs("p",{className:"text-xs text-slate-500",children:[M.mode==="daily"?"Daily":"Weekly"," Failure • ",Ot?"YOU OWE THIS":"THEY OWE YOU"]})]}),Ie&&!kt&&p.jsx(Fe,{onClick:()=>et(M.id),size:"sm",variant:"success",children:"Accept Payment"}),Ot&&!kt&&p.jsx("div",{className:"text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded",children:"PAY UP!"})]})},M.id)})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"bg-red-900 text-red-100 p-6 rounded-xl border border-red-800 text-center",children:[p.jsx(Yd,{size:48,className:"mx-auto mb-4 opacity-50"}),p.jsx("h2",{className:"text-2xl font-black uppercase",children:"Rejected Tasks"})]}),$.length===0?p.jsx("p",{className:"text-center text-slate-400",children:"No rejected tasks."}):$.map(M=>p.jsxs("div",{className:"bg-white p-4 rounded-xl border-l-4 border-red-500 shadow-sm flex justify-between items-center",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"font-bold text-slate-900 line-through decoration-red-500",children:M.text}),p.jsx("p",{className:"text-xs text-slate-500",children:M.creatorName})]}),p.jsxs("div",{className:"text-2xl font-black text-red-200",children:[M.rejectionCount,"x"]})]},M.id))]})]}),F==="joint"&&p.jsxs("div",{className:"space-y-6",children:[p.jsx(Fe,{onClick:()=>Ae(!0),className:"w-full bg-purple-900 hover:bg-purple-800",children:"Propose Mission"}),G.map(M=>p.jsxs(qs,{className:"p-4 border-l-4 border-purple-400",children:[p.jsxs("div",{className:"flex justify-between mb-2",children:[p.jsx("h3",{className:"font-bold",children:M.text}),p.jsx("span",{className:"text-xs bg-purple-100 px-2 py-1 rounded",children:"PROPOSAL"})]}),M.approvals[ue]?p.jsx("span",{className:"text-xs text-slate-400",children:"Waiting for partner..."}):p.jsx(Fe,{size:"sm",onClick:()=>ss(M),children:"Authorize"})]},M.id)),te.map(M=>p.jsx(s_,{task:M,user:ue,isLocked:!1,onClick:()=>pt(M),onToggleChecklist:Ie=>ns(M,Ie),onAddChecklist:Ie=>Qi(M,Ie),onDeleteChecklist:Ie=>lr(M,Ie),onRequestMod:Yi,onResolveMod:tt},M.id))]}),(F==="chain"||F==="daily"||F==="weekly")&&p.jsxs(p.Fragment,{children:[(F==="daily"||F==="weekly")&&p.jsx(oN,{mode:F,timerData:Ee,role:ue,myName:en,onVoteStart:()=>qi(F),onVoteStop:()=>Hi(F),tasks:V}),(Ee==null?void 0:Ee.status)==="expired"&&Ee.failedBy!==ue&&p.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-lg border-2 border-slate-900 mb-6 animate-in slide-in-from-top",children:[p.jsx("h3",{className:"font-bold mb-2",children:"Submit Your Demand"}),p.jsx("input",{value:zi,onChange:M=>Bi(M.target.value),className:"w-full border-2 border-slate-200 rounded p-2 mb-2",placeholder:"e.g. Buy me a large pizza..."}),p.jsx(Fe,{onClick:()=>Ma(F),variant:"primary",className:"w-full",children:"Enforce Penalty"})]}),p.jsx(aN,{tasks:V,firstIncompleteIndex:W,user:ue,myRoleKey:ue}),p.jsxs("div",{className:"relative space-y-4",children:[p.jsx("div",{className:"absolute left-8 top-0 bottom-0 w-1 bg-slate-300 -z-0"}),V.length===0&&p.jsx("div",{className:"ml-16 py-8 text-slate-400 italic text-sm",children:"No links in this chain yet."}),V.map((M,Ie)=>{const Ot=Ie===W,kt=!Ot&&M.status!=="completed";return p.jsx(s_,{task:M,user:ue,isLocked:kt,isNext:Ot,onClick:()=>{var dn,no,Ka;M.status==="completed"||kt||(M.creator===ue&&M.status==="open"||M.creator!==ue&&M.status==="pending")&&(pt(M),La(((dn=M.submission)==null?void 0:dn.note)||""),Jr(((no=M.submission)==null?void 0:no.link)||""),Zr(((Ka=M.submission)==null?void 0:Ka.file)||null))},onToggleChecklist:dn=>ns(M,dn),onAddChecklist:dn=>Qi(M,dn),onDeleteChecklist:dn=>lr(M,dn),onRequestMod:Yi,onResolveMod:tt},M.id)})]}),(Ee==null?void 0:Ee.status)!=="expired"&&p.jsx("div",{className:"sticky bottom-4 z-20 mt-4",children:p.jsx(qs,{className:"bg-slate-900 border-slate-900 text-white p-2",children:fe?p.jsxs("form",{onSubmit:$a,className:"flex gap-2",children:[p.jsx("input",{value:H,onChange:M=>Z(M.target.value),placeholder:`Add to ${F} chain...`,className:"flex-1 bg-slate-800 border-none rounded-lg px-4 py-3 text-white outline-none"}),p.jsx(Fe,{type:"submit",className:"bg-yellow-500 text-slate-900",children:p.jsx(Rh,{})})]}):p.jsxs("div",{className:"p-3 text-center text-slate-400 text-sm flex items-center justify-center gap-2",children:[p.jsx(YE,{size:16}),p.jsx("span",{children:"Wait for your friend."})]})})})]}),p.jsxs(qs,{className:"p-4 bg-yellow-50 border-yellow-200",children:[p.jsxs("h3",{className:"font-bold text-yellow-800 mb-2 flex gap-2",children:[p.jsx(X2,{size:16})," The Wall"]}),p.jsx("textarea",{value:_,onChange:M=>{S(M.target.value),ar.current&&clearTimeout(ar.current),ar.current=setTimeout(()=>Ue(Se(pe,"pacts",n),{notes:M.target.value}),1e3)},className:"w-full h-24 bg-transparent border-none resize-none font-handwriting focus:ring-0"})]})]})]})}return p.jsx("div",{children:"Unknown State"})}function uN(){return p.jsx(nN,{children:p.jsx(lN,{})})}Nh.createRoot(document.getElementById("root")).render(p.jsx(m_.StrictMode,{children:p.jsx(uN,{})}));
