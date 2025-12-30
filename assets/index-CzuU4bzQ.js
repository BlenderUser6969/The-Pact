(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function aE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ly={exports:{}},nu={},uy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),lE=Symbol.for("react.portal"),uE=Symbol.for("react.fragment"),cE=Symbol.for("react.strict_mode"),hE=Symbol.for("react.profiler"),dE=Symbol.for("react.provider"),fE=Symbol.for("react.context"),pE=Symbol.for("react.forward_ref"),mE=Symbol.for("react.suspense"),gE=Symbol.for("react.memo"),yE=Symbol.for("react.lazy"),xp=Symbol.iterator;function vE(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hy=Object.assign,dy={};function hs(t,e,n){this.props=t,this.context=e,this.refs=dy,this.updater=n||cy}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fy(){}fy.prototype=hs.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=dy,this.updater=n||cy}var id=rd.prototype=new fy;id.constructor=rd;hy(id,hs.prototype);id.isPureReactComponent=!0;var Np=Array.isArray,py=Object.prototype.hasOwnProperty,sd={current:null},my={key:!0,ref:!0,__self:!0,__source:!0};function gy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)py.call(e,r)&&!my.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Bo,type:t,key:s,ref:o,props:i,_owner:sd.current}}function _E(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function od(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function wE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wE(""+t.key):e.toString(36)}function Qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case lE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ec(o,0):r,Np(i)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),Qa(i,e,n,"",function(h){return h})):i!=null&&(od(i)&&(i=_E(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Np(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ec(s,l);o+=Qa(s,e,n,u,i)}else if(u=vE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ec(s,l++),o+=Qa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var r=[],i=0;return Qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function EE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Ya={transition:null},TE={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:sd};function yy(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=hs;re.Fragment=uE;re.Profiler=hE;re.PureComponent=rd;re.StrictMode=cE;re.Suspense=mE;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TE;re.act=yy;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=hy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)py.call(e,u)&&!my.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Bo,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:fE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dE,_context:t},t.Consumer=t};re.createElement=gy;re.createFactory=function(t){var e=gy.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:pE,render:t}};re.isValidElement=od;re.lazy=function(t){return{$$typeof:yE,_payload:{_status:-1,_result:t},_init:EE}};re.memo=function(t,e){return{$$typeof:gE,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};re.unstable_act=yy;re.useCallback=function(t,e){return _t.current.useCallback(t,e)};re.useContext=function(t){return _t.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};re.useEffect=function(t,e){return _t.current.useEffect(t,e)};re.useId=function(){return _t.current.useId()};re.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return _t.current.useMemo(t,e)};re.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};re.useRef=function(t){return _t.current.useRef(t)};re.useState=function(t){return _t.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return _t.current.useTransition()};re.version="18.3.1";uy.exports=re;var ne=uy.exports;const IE=aE(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=ne,AE=Symbol.for("react.element"),kE=Symbol.for("react.fragment"),RE=Object.prototype.hasOwnProperty,CE=SE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PE={key:!0,ref:!0,__self:!0,__source:!0};function vy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RE.call(e,r)&&!PE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:AE,type:t,key:s,ref:o,props:i,_owner:CE.current}}nu.Fragment=kE;nu.jsx=vy;nu.jsxs=vy;ly.exports=nu;var v=ly.exports,Fc={},_y={exports:{}},Lt={},wy={exports:{}},Ey={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var Q=B.length;B.push(Y);e:for(;0<Q;){var ye=Q-1>>>1,ce=B[ye];if(0<i(ce,Y))B[ye]=Y,B[Q]=ce,Q=ye;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],Q=B.pop();if(Q!==Y){B[0]=Q;e:for(var ye=0,ce=B.length,Ae=ce>>>1;ye<Ae;){var Et=2*(ye+1)-1,Ft=B[Et],Yt=Et+1,Xt=B[Yt];if(0>i(Ft,Q))Yt<ce&&0>i(Xt,Ft)?(B[ye]=Xt,B[Yt]=Q,ye=Yt):(B[ye]=Ft,B[Et]=Q,ye=Et);else if(Yt<ce&&0>i(Xt,Q))B[ye]=Xt,B[Yt]=Q,ye=Yt;else break e}}return Y}function i(B,Y){var Q=B.sortIndex-Y.sortIndex;return Q!==0?Q:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,S=!1,P=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=B)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function V(B){if(N=!1,k(B),!P)if(n(u)!==null)P=!0,$n(U);else{var Y=n(h);Y!==null&&jt(V,Y.startTime-B)}}function U(B,Y){P=!1,N&&(N=!1,A(g),g=-1),S=!0;var Q=y;try{for(k(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||B&&!C());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,y=m.priorityLevel;var ce=ye(m.expirationTime<=Y);Y=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),k(Y)}else r(u);m=n(u)}if(m!==null)var Ae=!0;else{var Et=n(h);Et!==null&&jt(V,Et.startTime-Y),Ae=!1}return Ae}finally{m=null,y=Q,S=!1}}var F=!1,E=null,g=-1,w=5,I=-1;function C(){return!(t.unstable_now()-I<w)}function R(){if(E!==null){var B=t.unstable_now();I=B;var Y=!0;try{Y=E(!0,B)}finally{Y?T():(F=!1,E=null)}}else F=!1}var T;if(typeof _=="function")T=function(){_(R)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,cn=mt.port2;mt.port1.onmessage=R,T=function(){cn.postMessage(null)}}else T=function(){O(R,0)};function $n(B){E=B,F||(F=!0,T())}function jt(B,Y){g=O(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||S||(P=!0,$n(U))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var Q=y;y=Y;try{return B()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=y;y=B;try{return Y()}finally{y=Q}},t.unstable_scheduleCallback=function(B,Y,Q){var ye=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ye+Q:ye):Q=ye,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Q+ce,B={id:f++,callback:Y,priorityLevel:B,startTime:Q,expirationTime:ce,sortIndex:-1},Q>ye?(B.sortIndex=Q,e(h,B),n(u)===null&&B===n(h)&&(N?(A(g),g=-1):N=!0,jt(V,Q-ye))):(B.sortIndex=ce,e(u,B),P||S||(P=!0,$n(U))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var Y=y;return function(){var Q=y;y=Y;try{return B.apply(this,arguments)}finally{y=Q}}}})(Ey);wy.exports=Ey;var xE=wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE=ne,bt=xE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ty=new Set,mo={};function si(t,e){Yi(t,e),Yi(t+"Capture",e)}function Yi(t,e){for(mo[t]=e,t=0;t<e.length;t++)Ty.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,DE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},Op={};function VE(t){return Uc.call(Op,t)?!0:Uc.call(Vp,t)?!1:DE.test(t)?Op[t]=!0:(Vp[t]=!0,!1)}function OE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bE(t,e,n,r){if(e===null||typeof e>"u"||OE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ad=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ad,ld);et[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ad,ld);et[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ad,ld);et[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bE(e,n,i,r)&&(n=null),r||i===null?VE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=NE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Iy=Symbol.for("react.provider"),Sy=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),Ay=Symbol.for("react.offscreen"),bp=Symbol.iterator;function Ms(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,tc;function Ws(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function rc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ws(t):""}function LE(t){switch(t.tag){case 5:return Ws(t.type);case 16:return Ws("Lazy");case 13:return Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function Hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case Ri:return"Portal";case zc:return"Profiler";case cd:return"StrictMode";case Bc:return"Suspense";case $c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sy:return(t.displayName||"Context")+".Consumer";case Iy:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Hc(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return Hc(t(e))}catch{}}return null}function ME(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hc(e);case 8:return e===cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ky(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jE(t){var e=ky(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=jE(t))}function Ry(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ky(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qc(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cy(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function Wc(t,e){Cy(t,e);var n=Sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function Ui(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Ks(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function Py(t,e){var n=Sr(e.value),r=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Ny=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FE=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){FE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function Dy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function Vy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UE=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yc(t,e){if(e){if(UE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,zi=null,Bi=null;function Up(t){if(t=qo(t)){if(typeof Zc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=au(e),Zc(t.stateNode,t.type,e))}}function Oy(t){zi?Bi?Bi.push(t):Bi=[t]:zi=t}function by(){if(zi){var t=zi,e=Bi;if(Bi=zi=null,Up(t),e)for(t=0;t<e.length;t++)Up(e[t])}}function Ly(t,e){return t(e)}function My(){}var ic=!1;function jy(t,e,n){if(ic)return t(e,n);ic=!0;try{return Ly(t,e,n)}finally{ic=!1,(zi!==null||Bi!==null)&&(My(),by())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var r=au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var eh=!1;if(Dn)try{var js={};Object.defineProperty(js,"passive",{get:function(){eh=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{eh=!1}function zE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var to=!1,yl=null,vl=!1,th=null,BE={onError:function(t){to=!0,yl=t}};function $E(t,e,n,r,i,s,o,l,u){to=!1,yl=null,zE.apply(BE,arguments)}function HE(t,e,n,r,i,s,o,l,u){if($E.apply(this,arguments),to){if(to){var h=yl;to=!1,yl=null}else throw Error(M(198));vl||(vl=!0,th=h)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(oi(t)!==t)throw Error(M(188))}function qE(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zp(i),t;if(s===r)return zp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Uy(t){return t=qE(t),t!==null?zy(t):null}function zy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zy(t);if(e!==null)return e;t=t.sibling}return null}var By=bt.unstable_scheduleCallback,Bp=bt.unstable_cancelCallback,WE=bt.unstable_shouldYield,KE=bt.unstable_requestPaint,be=bt.unstable_now,GE=bt.unstable_getCurrentPriorityLevel,pd=bt.unstable_ImmediatePriority,$y=bt.unstable_UserBlockingPriority,_l=bt.unstable_NormalPriority,QE=bt.unstable_LowPriority,Hy=bt.unstable_IdlePriority,ru=null,pn=null;function YE(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:ZE,XE=Math.log,JE=Math.LN2;function ZE(t){return t>>>=0,t===0?32:31-(XE(t)/JE|0)|0}var Na=64,Da=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Gs(l):(s&=o,s!==0&&(r=Gs(s)))}else o=n&~i,o!==0?r=Gs(o):s!==0&&(r=Gs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function eT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=eT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qy(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function nT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Wy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ky,gd,Gy,Qy,Yy,rh=!1,Va=[],cr=null,hr=null,dr=null,vo=new Map,_o=new Map,tr=[],rT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qo(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iT(t,e,n,r,i){switch(e){case"focusin":return cr=Fs(cr,t,e,n,r,i),!0;case"dragenter":return hr=Fs(hr,t,e,n,r,i),!0;case"mouseover":return dr=Fs(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vo.set(s,Fs(vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_o.set(s,Fs(_o.get(s)||null,t,e,n,r,i)),!0}return!1}function Xy(t){var e=Br(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=Fy(n),e!==null){t.blockedOn=e,Yy(t.priority,function(){Gy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jc=r,n.target.dispatchEvent(r),Jc=null}else return e=qo(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){Xa(t)&&n.delete(e)}function sT(){rh=!1,cr!==null&&Xa(cr)&&(cr=null),hr!==null&&Xa(hr)&&(hr=null),dr!==null&&Xa(dr)&&(dr=null),vo.forEach(Hp),_o.forEach(Hp)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,sT)))}function wo(t){function e(i){return Us(i,t)}if(0<Va.length){Us(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Us(cr,t),hr!==null&&Us(hr,t),dr!==null&&Us(dr,t),vo.forEach(e),_o.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Xy(n),n.blockedOn===null&&tr.shift()}var $i=zn.ReactCurrentBatchConfig,El=!0;function oT(t,e,n,r){var i=he,s=$i.transition;$i.transition=null;try{he=1,yd(t,e,n,r)}finally{he=i,$i.transition=s}}function aT(t,e,n,r){var i=he,s=$i.transition;$i.transition=null;try{he=4,yd(t,e,n,r)}finally{he=i,$i.transition=s}}function yd(t,e,n,r){if(El){var i=ih(t,e,n,r);if(i===null)mc(t,e,r,Tl,n),$p(t,r);else if(iT(i,t,e,n,r))r.stopPropagation();else if($p(t,r),e&4&&-1<rT.indexOf(t)){for(;i!==null;){var s=qo(i);if(s!==null&&Ky(s),s=ih(t,e,n,r),s===null&&mc(t,e,r,Tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mc(t,e,r,null,n)}}var Tl=null;function ih(t,e,n,r){if(Tl=null,t=fd(r),t=Br(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function Jy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GE()){case pd:return 1;case $y:return 4;case _l:case QE:return 16;case Hy:return 536870912;default:return 16}default:return 16}}var ar=null,vd=null,Ja=null;function Zy(){if(Ja)return Ja;var t,e=vd,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ja=i.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function qp(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:qp,this.isPropagationStopped=qp,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=Mt(ds),Ho=Ce({},ds,{view:0,detail:0}),lT=Mt(Ho),oc,ac,zs,iu=Ce({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(oc=t.screenX-zs.screenX,ac=t.screenY-zs.screenY):ac=oc=0,zs=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),Wp=Mt(iu),uT=Ce({},iu,{dataTransfer:0}),cT=Mt(uT),hT=Ce({},Ho,{relatedTarget:0}),lc=Mt(hT),dT=Ce({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),fT=Mt(dT),pT=Ce({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mT=Mt(pT),gT=Ce({},ds,{data:0}),Kp=Mt(gT),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_T[t])?!!e[t]:!1}function wd(){return wT}var ET=Ce({},Ho,{key:function(t){if(t.key){var e=yT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TT=Mt(ET),IT=Ce({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Mt(IT),ST=Ce({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),AT=Mt(ST),kT=Ce({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),RT=Mt(kT),CT=Ce({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PT=Mt(CT),xT=[9,13,27,32],Ed=Dn&&"CompositionEvent"in window,no=null;Dn&&"documentMode"in document&&(no=document.documentMode);var NT=Dn&&"TextEvent"in window&&!no,ev=Dn&&(!Ed||no&&8<no&&11>=no),Qp=" ",Yp=!1;function tv(t,e){switch(t){case"keyup":return xT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function DT(t,e){switch(t){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(Yp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Yp?null:t;default:return null}}function VT(t,e){if(Pi)return t==="compositionend"||!Ed&&tv(t,e)?(t=Zy(),Ja=vd=ar=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var OT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OT[t.type]:e==="textarea"}function rv(t,e,n,r){Oy(r),e=Il(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ro=null,Eo=null;function bT(t){pv(t,0)}function su(t){var e=Di(t);if(Ry(e))return t}function LT(t,e){if(t==="change")return e}var iv=!1;if(Dn){var uc;if(Dn){var cc="oninput"in document;if(!cc){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),cc=typeof Jp.oninput=="function"}uc=cc}else uc=!1;iv=uc&&(!document.documentMode||9<document.documentMode)}function Zp(){ro&&(ro.detachEvent("onpropertychange",sv),Eo=ro=null)}function sv(t){if(t.propertyName==="value"&&su(Eo)){var e=[];rv(e,Eo,t,fd(t)),jy(bT,e)}}function MT(t,e,n){t==="focusin"?(Zp(),ro=e,Eo=n,ro.attachEvent("onpropertychange",sv)):t==="focusout"&&Zp()}function jT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return su(Eo)}function FT(t,e){if(t==="click")return su(e)}function UT(t,e){if(t==="input"||t==="change")return su(e)}function zT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:zT;function To(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uc.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BT(t){var e=av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(r!==null&&Td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tm(n,s);var o=tm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $T=Dn&&"documentMode"in document&&11>=document.documentMode,xi=null,sh=null,io=null,oh=!1;function nm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||xi==null||xi!==gl(r)||(r=xi,"selectionStart"in r&&Td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&To(io,r)||(io=r,r=Il(sh,"onSelect"),0<r.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xi)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ni={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},hc={},lv={};Dn&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function ou(t){if(hc[t])return hc[t];if(!Ni[t])return t;var e=Ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lv)return hc[t]=e[n];return t}var uv=ou("animationend"),cv=ou("animationiteration"),hv=ou("animationstart"),dv=ou("transitionend"),fv=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){fv.set(t,e),si(e,[t])}for(var dc=0;dc<rm.length;dc++){var fc=rm[dc],HT=fc.toLowerCase(),qT=fc[0].toUpperCase()+fc.slice(1);Nr(HT,"on"+qT)}Nr(uv,"onAnimationEnd");Nr(cv,"onAnimationIteration");Nr(hv,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(dv,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function im(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HE(r,e,void 0,t),t.currentTarget=null}function pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;im(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;im(i,l,h),s=u}}}if(vl)throw t=th,vl=!1,th=null,t}function we(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(mv(e,t,2,!1),n.add(r))}function pc(t,e,n){var r=0;e&&(r|=4),mv(n,t,r,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[La]){t[La]=!0,Ty.forEach(function(n){n!=="selectionchange"&&(WT.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[La]||(e[La]=!0,pc("selectionchange",!1,e))}}function mv(t,e,n,r){switch(Jy(e)){case 1:var i=oT;break;case 4:i=aT;break;default:i=yd}n=i.bind(null,e,n,t),i=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}jy(function(){var h=s,f=fd(n),m=[];e:{var y=fv.get(t);if(y!==void 0){var S=_d,P=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":S=TT;break;case"focusin":P="focus",S=lc;break;case"focusout":P="blur",S=lc;break;case"beforeblur":case"afterblur":S=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=cT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=AT;break;case uv:case cv:case hv:S=fT;break;case dv:S=RT;break;case"scroll":S=lT;break;case"wheel":S=PT;break;case"copy":case"cut":case"paste":S=mT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Gp}var N=(e&4)!==0,O=!N&&t==="scroll",A=N?y!==null?y+"Capture":null:y;N=[];for(var _=h,k;_!==null;){k=_;var V=k.stateNode;if(k.tag===5&&V!==null&&(k=V,A!==null&&(V=yo(_,A),V!=null&&N.push(So(_,V,k)))),O)break;_=_.return}0<N.length&&(y=new S(y,P,null,n,f),m.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&n!==Jc&&(P=n.relatedTarget||n.fromElement)&&(Br(P)||P[Vn]))break e;if((S||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,S?(P=n.relatedTarget||n.toElement,S=h,P=P?Br(P):null,P!==null&&(O=oi(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(S=null,P=h),S!==P)){if(N=Wp,V="onMouseLeave",A="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=Gp,V="onPointerLeave",A="onPointerEnter",_="pointer"),O=S==null?y:Di(S),k=P==null?y:Di(P),y=new N(V,_+"leave",S,n,f),y.target=O,y.relatedTarget=k,V=null,Br(f)===h&&(N=new N(A,_+"enter",P,n,f),N.target=k,N.relatedTarget=O,V=N),O=V,S&&P)t:{for(N=S,A=P,_=0,k=N;k;k=Ei(k))_++;for(k=0,V=A;V;V=Ei(V))k++;for(;0<_-k;)N=Ei(N),_--;for(;0<k-_;)A=Ei(A),k--;for(;_--;){if(N===A||A!==null&&N===A.alternate)break t;N=Ei(N),A=Ei(A)}N=null}else N=null;S!==null&&sm(m,y,S,N,!1),P!==null&&O!==null&&sm(m,O,P,N,!0)}}e:{if(y=h?Di(h):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var U=LT;else if(Xp(y))if(iv)U=UT;else{U=jT;var F=MT}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=FT);if(U&&(U=U(t,h))){rv(m,U,n,f);break e}F&&F(t,y,h),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&Kc(y,"number",y.value)}switch(F=h?Di(h):window,t){case"focusin":(Xp(F)||F.contentEditable==="true")&&(xi=F,sh=h,io=null);break;case"focusout":io=sh=xi=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,nm(m,n,f);break;case"selectionchange":if($T)break;case"keydown":case"keyup":nm(m,n,f)}var E;if(Ed)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Pi?tv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(ev&&n.locale!=="ko"&&(Pi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Pi&&(E=Zy()):(ar=f,vd="value"in ar?ar.value:ar.textContent,Pi=!0)),F=Il(h,g),0<F.length&&(g=new Kp(g,t,null,n,f),m.push({event:g,listeners:F}),E?g.data=E:(E=nv(n),E!==null&&(g.data=E)))),(E=NT?DT(t,n):VT(t,n))&&(h=Il(h,"onBeforeInput"),0<h.length&&(f=new Kp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}pv(m,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yo(t,n),s!=null&&r.unshift(So(t,s,i)),s=yo(t,e),s!=null&&r.push(So(t,s,i))),t=t.return}return r}function Ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=yo(n,s),u!=null&&o.unshift(So(n,u,l))):i||(u=yo(n,s),u!=null&&o.push(So(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(KT,`
`).replace(GT,"")}function Ma(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(M(425))}function Sl(){}var ah=null,lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,QT=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,YT=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(XT)}:ch;function XT(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wo(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),fn="__reactFiber$"+fs,Ao="__reactProps$"+fs,Vn="__reactContainer$"+fs,hh="__reactEvents$"+fs,JT="__reactListeners$"+fs,ZT="__reactHandles$"+fs;function Br(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[fn])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[fn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function au(t){return t[Ao]||null}var dh=[],Vi=-1;function Dr(t){return{current:t}}function Te(t){0>Vi||(t.current=dh[Vi],dh[Vi]=null,Vi--)}function ge(t,e){Vi++,dh[Vi]=t.current,t.current=e}var Ar={},ft=Dr(Ar),kt=Dr(!1),Qr=Ar;function Xi(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function Al(){Te(kt),Te(ft)}function um(t,e,n){if(ft.current!==Ar)throw Error(M(168));ge(ft,e),ge(kt,n)}function gv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,ME(t)||"Unknown",i));return Ce({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,Qr=ft.current,ge(ft,t),ge(kt,kt.current),!0}function cm(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=gv(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,Te(kt),Te(ft),ge(ft,t)):Te(kt),ge(kt,n)}var Sn=null,lu=!1,yc=!1;function yv(t){Sn===null?Sn=[t]:Sn.push(t)}function eI(t){lu=!0,yv(t)}function Vr(){if(!yc&&Sn!==null){yc=!0;var t=0,e=he;try{var n=Sn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,lu=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),By(pd,Vr),i}finally{he=e,yc=!1}}return null}var Oi=[],bi=0,Rl=null,Cl=0,Bt=[],$t=0,Yr=null,An=1,kn="";function Fr(t,e){Oi[bi++]=Cl,Oi[bi++]=Rl,Rl=t,Cl=e}function vv(t,e,n){Bt[$t++]=An,Bt[$t++]=kn,Bt[$t++]=Yr,Yr=t;var r=An;t=kn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-on(e)+i|n<<i|r,kn=s+t}else An=1<<s|n<<i|r,kn=t}function Id(t){t.return!==null&&(Fr(t,1),vv(t,1,0))}function Sd(t){for(;t===Rl;)Rl=Oi[--bi],Oi[bi]=null,Cl=Oi[--bi],Oi[bi]=null;for(;t===Yr;)Yr=Bt[--$t],Bt[$t]=null,kn=Bt[--$t],Bt[$t]=null,An=Bt[--$t],Bt[$t]=null}var Ot=null,Dt=null,Ie=!1,sn=null;function _v(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Dt=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:An,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Dt=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(Ie){var e=Dt;if(e){var n=e;if(!hm(t,e)){if(fh(t))throw Error(M(418));e=fr(n.nextSibling);var r=Ot;e&&hm(t,e)?_v(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ot=t)}}else{if(fh(t))throw Error(M(418));t.flags=t.flags&-4097|2,Ie=!1,Ot=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function ja(t){if(t!==Ot)return!1;if(!Ie)return dm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=Dt)){if(fh(t))throw wv(),Error(M(418));for(;e;)_v(t,e),e=fr(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Ot?fr(t.stateNode.nextSibling):null;return!0}function wv(){for(var t=Dt;t;)t=fr(t.nextSibling)}function Ji(){Dt=Ot=null,Ie=!1}function Ad(t){sn===null?sn=[t]:sn.push(t)}var tI=zn.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function Ev(t){function e(A,_){if(t){var k=A.deletions;k===null?(A.deletions=[_],A.flags|=16):k.push(_)}}function n(A,_){if(!t)return null;for(;_!==null;)e(A,_),_=_.sibling;return null}function r(A,_){for(A=new Map;_!==null;)_.key!==null?A.set(_.key,_):A.set(_.index,_),_=_.sibling;return A}function i(A,_){return A=yr(A,_),A.index=0,A.sibling=null,A}function s(A,_,k){return A.index=k,t?(k=A.alternate,k!==null?(k=k.index,k<_?(A.flags|=2,_):k):(A.flags|=2,_)):(A.flags|=1048576,_)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,_,k,V){return _===null||_.tag!==6?(_=Sc(k,A.mode,V),_.return=A,_):(_=i(_,k),_.return=A,_)}function u(A,_,k,V){var U=k.type;return U===Ci?f(A,_,k.props.children,V,k.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Zn&&fm(U)===_.type)?(V=i(_,k.props),V.ref=Bs(A,_,k),V.return=A,V):(V=ol(k.type,k.key,k.props,null,A.mode,V),V.ref=Bs(A,_,k),V.return=A,V)}function h(A,_,k,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=Ac(k,A.mode,V),_.return=A,_):(_=i(_,k.children||[]),_.return=A,_)}function f(A,_,k,V,U){return _===null||_.tag!==7?(_=Kr(k,A.mode,V,U),_.return=A,_):(_=i(_,k),_.return=A,_)}function m(A,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Sc(""+_,A.mode,k),_.return=A,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ca:return k=ol(_.type,_.key,_.props,null,A.mode,k),k.ref=Bs(A,null,_),k.return=A,k;case Ri:return _=Ac(_,A.mode,k),_.return=A,_;case Zn:var V=_._init;return m(A,V(_._payload),k)}if(Ks(_)||Ms(_))return _=Kr(_,A.mode,k,null),_.return=A,_;Fa(A,_)}return null}function y(A,_,k,V){var U=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return U!==null?null:l(A,_,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ca:return k.key===U?u(A,_,k,V):null;case Ri:return k.key===U?h(A,_,k,V):null;case Zn:return U=k._init,y(A,_,U(k._payload),V)}if(Ks(k)||Ms(k))return U!==null?null:f(A,_,k,V,null);Fa(A,k)}return null}function S(A,_,k,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return A=A.get(k)||null,l(_,A,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ca:return A=A.get(V.key===null?k:V.key)||null,u(_,A,V,U);case Ri:return A=A.get(V.key===null?k:V.key)||null,h(_,A,V,U);case Zn:var F=V._init;return S(A,_,k,F(V._payload),U)}if(Ks(V)||Ms(V))return A=A.get(k)||null,f(_,A,V,U,null);Fa(_,V)}return null}function P(A,_,k,V){for(var U=null,F=null,E=_,g=_=0,w=null;E!==null&&g<k.length;g++){E.index>g?(w=E,E=null):w=E.sibling;var I=y(A,E,k[g],V);if(I===null){E===null&&(E=w);break}t&&E&&I.alternate===null&&e(A,E),_=s(I,_,g),F===null?U=I:F.sibling=I,F=I,E=w}if(g===k.length)return n(A,E),Ie&&Fr(A,g),U;if(E===null){for(;g<k.length;g++)E=m(A,k[g],V),E!==null&&(_=s(E,_,g),F===null?U=E:F.sibling=E,F=E);return Ie&&Fr(A,g),U}for(E=r(A,E);g<k.length;g++)w=S(E,A,g,k[g],V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?g:w.key),_=s(w,_,g),F===null?U=w:F.sibling=w,F=w);return t&&E.forEach(function(C){return e(A,C)}),Ie&&Fr(A,g),U}function N(A,_,k,V){var U=Ms(k);if(typeof U!="function")throw Error(M(150));if(k=U.call(k),k==null)throw Error(M(151));for(var F=U=null,E=_,g=_=0,w=null,I=k.next();E!==null&&!I.done;g++,I=k.next()){E.index>g?(w=E,E=null):w=E.sibling;var C=y(A,E,I.value,V);if(C===null){E===null&&(E=w);break}t&&E&&C.alternate===null&&e(A,E),_=s(C,_,g),F===null?U=C:F.sibling=C,F=C,E=w}if(I.done)return n(A,E),Ie&&Fr(A,g),U;if(E===null){for(;!I.done;g++,I=k.next())I=m(A,I.value,V),I!==null&&(_=s(I,_,g),F===null?U=I:F.sibling=I,F=I);return Ie&&Fr(A,g),U}for(E=r(A,E);!I.done;g++,I=k.next())I=S(E,A,g,I.value,V),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?g:I.key),_=s(I,_,g),F===null?U=I:F.sibling=I,F=I);return t&&E.forEach(function(R){return e(A,R)}),Ie&&Fr(A,g),U}function O(A,_,k,V){if(typeof k=="object"&&k!==null&&k.type===Ci&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ca:e:{for(var U=k.key,F=_;F!==null;){if(F.key===U){if(U=k.type,U===Ci){if(F.tag===7){n(A,F.sibling),_=i(F,k.props.children),_.return=A,A=_;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Zn&&fm(U)===F.type){n(A,F.sibling),_=i(F,k.props),_.ref=Bs(A,F,k),_.return=A,A=_;break e}n(A,F);break}else e(A,F);F=F.sibling}k.type===Ci?(_=Kr(k.props.children,A.mode,V,k.key),_.return=A,A=_):(V=ol(k.type,k.key,k.props,null,A.mode,V),V.ref=Bs(A,_,k),V.return=A,A=V)}return o(A);case Ri:e:{for(F=k.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(A,_.sibling),_=i(_,k.children||[]),_.return=A,A=_;break e}else{n(A,_);break}else e(A,_);_=_.sibling}_=Ac(k,A.mode,V),_.return=A,A=_}return o(A);case Zn:return F=k._init,O(A,_,F(k._payload),V)}if(Ks(k))return P(A,_,k,V);if(Ms(k))return N(A,_,k,V);Fa(A,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(A,_.sibling),_=i(_,k),_.return=A,A=_):(n(A,_),_=Sc(k,A.mode,V),_.return=A,A=_),o(A)):n(A,_)}return O}var Zi=Ev(!0),Tv=Ev(!1),Pl=Dr(null),xl=null,Li=null,kd=null;function Rd(){kd=Li=xl=null}function Cd(t){var e=Pl.current;Te(Pl),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hi(t,e){xl=t,kd=Li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(kd!==t)if(t={context:t,memoizedValue:e,next:null},Li===null){if(xl===null)throw Error(M(308));Li=t,xl.dependencies={lanes:0,firstContext:t}}else Li=Li.next=t;return e}var $r=null;function Pd(t){$r===null?$r=[t]:$r.push(t)}function Iv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pd(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,Pd(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,md(t,n)}}function pm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,S=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(y=e,S=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){m=P.call(S,m,y);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,y=typeof P=="function"?P.call(S,m,y):P,y==null)break e;m=Ce({},m,y);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else S={eventTime:S,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=m):f=f.next=S,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=m}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Wo={},mn=Dr(Wo),ko=Dr(Wo),Ro=Dr(Wo);function Hr(t){if(t===Wo)throw Error(M(174));return t}function Nd(t,e){switch(ge(Ro,e),ge(ko,t),ge(mn,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qc(e,t)}Te(mn),ge(mn,e)}function es(){Te(mn),Te(ko),Te(Ro)}function Av(t){Hr(Ro.current);var e=Hr(mn.current),n=Qc(e,t.type);e!==n&&(ge(ko,t),ge(mn,n))}function Dd(t){ko.current===t&&(Te(mn),Te(ko))}var ke=Dr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function Vd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var tl=zn.ReactCurrentDispatcher,_c=zn.ReactCurrentBatchConfig,Xr=0,Re=null,ze=null,He=null,Vl=!1,so=!1,Co=0,nI=0;function ot(){throw Error(M(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function bd(t,e,n,r,i,s){if(Xr=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?oI:aI,t=n(r,i),so){s=0;do{if(so=!1,Co=0,25<=s)throw Error(M(301));s+=1,He=ze=null,e.updateQueue=null,tl.current=lI,t=n(r,i)}while(so)}if(tl.current=Ol,e=ze!==null&&ze.next!==null,Xr=0,He=ze=Re=null,Vl=!1,e)throw Error(M(300));return t}function Ld(){var t=Co!==0;return Co=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Re.memoizedState=He=t:He=He.next=t,He}function Qt(){if(ze===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=He===null?Re.memoizedState:He.next;if(e!==null)He=e,ze=t;else{if(t===null)throw Error(M(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},He===null?Re.memoizedState=He=t:He=He.next=t}return He}function Po(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Xr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Re.lanes|=f,Jr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,ln(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Qt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kv(){}function Rv(t,e){var n=Re,r=Qt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,Md(xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,xo(9,Pv.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(M(349));Xr&30||Cv(n,e,i)}return i}function Cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pv(t,e,n,r){e.value=n,e.getSnapshot=r,Nv(e)&&Dv(t)}function xv(t,e,n){return n(function(){Nv(e)&&Dv(t)})}function Nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function Dv(t){var e=On(t,1);e!==null&&an(e,t,1,-1)}function gm(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=sI.bind(null,Re,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vv(){return Qt().memoizedState}function nl(t,e,n,r){var i=dn();Re.flags|=t,i.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function uu(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(ze!==null){var o=ze.memoizedState;if(s=o.destroy,r!==null&&Od(r,o.deps)){i.memoizedState=xo(e,n,s,r);return}}Re.flags|=t,i.memoizedState=xo(1|e,n,s,r)}function ym(t,e){return nl(8390656,8,t,e)}function Md(t,e){return uu(2048,8,t,e)}function Ov(t,e){return uu(4,2,t,e)}function bv(t,e){return uu(4,4,t,e)}function Lv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,Lv.bind(null,e,t),n)}function jd(){}function jv(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Uv(t,e,n){return Xr&21?(ln(n,e)||(n=qy(),Re.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function rI(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=_c.transition;_c.transition={};try{t(!1),e()}finally{he=n,_c.transition=r}}function zv(){return Qt().memoizedState}function iI(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bv(t))$v(e,n);else if(n=Iv(t,e,n,r),n!==null){var i=vt();an(n,t,r,i),Hv(n,e,r)}}function sI(t,e,n){var r=gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bv(t))$v(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,o)){var u=e.interleaved;u===null?(i.next=i,Pd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Iv(t,e,i,r),n!==null&&(i=vt(),an(n,t,r,i),Hv(n,e,r))}}function Bv(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function $v(t,e){so=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,md(t,n)}}var Ol={readContext:Gt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},oI={readContext:Gt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,Lv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iI.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:jd,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=rI.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=dn();if(Ie){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),qe===null)throw Error(M(349));Xr&30||Cv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ym(xv.bind(null,r,s,t),[t]),r.flags|=2048,xo(9,Pv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=qe.identifierPrefix;if(Ie){var n=kn,r=An;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aI={readContext:Gt,useCallback:jv,useContext:Gt,useEffect:Md,useImperativeHandle:Mv,useInsertionEffect:Ov,useLayoutEffect:bv,useMemo:Fv,useReducer:wc,useRef:Vv,useState:function(){return wc(Po)},useDebugValue:jd,useDeferredValue:function(t){var e=Qt();return Uv(e,ze.memoizedState,t)},useTransition:function(){var t=wc(Po)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Rv,useId:zv,unstable_isNewReconciler:!1},lI={readContext:Gt,useCallback:jv,useContext:Gt,useEffect:Md,useImperativeHandle:Mv,useInsertionEffect:Ov,useLayoutEffect:bv,useMemo:Fv,useReducer:Ec,useRef:Vv,useState:function(){return Ec(Po)},useDebugValue:jd,useDeferredValue:function(t){var e=Qt();return ze===null?e.memoizedState=t:Uv(e,ze.memoizedState,t)},useTransition:function(){var t=Ec(Po)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Rv,useId:zv,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=gr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(an(e,t,i,r),el(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=gr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(an(e,t,i,r),el(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=gr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(an(e,t,r,n),el(e,t,r))}};function vm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,r)||!To(i,s):!0}function qv(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Rt(e)?Qr:ft.current,r=e.contextTypes,s=(r=r!=null)?Xi(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},xd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Rt(e)?Qr:ft.current,i.context=Xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cu.enqueueReplaceState(i,i.state,null),Nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e){try{var n="",r=e;do n+=LE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uI=typeof WeakMap=="function"?WeakMap:Map;function Wv(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,Ch=r),vh(t,e)},n}function Kv(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=II.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var cI=zn.ReactCurrentOwner,At=!1;function yt(t,e,n,r){e.child=t===null?Tv(e,null,n,r):Zi(e,t.child,n,r)}function Im(t,e,n,r,i){n=n.render;var s=e.ref;return Hi(e,i),r=bd(t,e,n,r,s,i),n=Ld(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Ie&&n&&Id(e),e.flags|=1,yt(t,e,r,i),e.child)}function Sm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gv(t,e,s,r,i)):(t=ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,r)&&t.ref===e.ref)return bn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Gv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(To(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,bn(t,e,i)}return _h(t,e,n,r,i)}function Qv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ji,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ji,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(ji,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(ji,Nt),Nt|=r;return yt(t,e,i,n),e.child}function Yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _h(t,e,n,r,i){var s=Rt(n)?Qr:ft.current;return s=Xi(e,s),Hi(e,i),n=bd(t,e,n,r,s,i),r=Ld(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Ie&&r&&Id(e),e.flags|=1,yt(t,e,n,i),e.child)}function Am(t,e,n,r,i){if(Rt(n)){var s=!0;kl(e)}else s=!1;if(Hi(e,i),e.stateNode===null)rl(t,e),qv(e,n,r),yh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Gt(h):(h=Rt(n)?Qr:ft.current,h=Xi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&_m(e,o,r,h),er=!1;var y=e.memoizedState;o.state=y,Nl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||kt.current||er?(typeof f=="function"&&(gh(e,n,f,r),u=e.memoizedState),(l=er||vm(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Sv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:nn(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Gt(u):(u=Rt(n)?Qr:ft.current,u=Xi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&_m(e,o,r,u),er=!1,y=e.memoizedState,o.state=y,Nl(e,r,o,i);var P=e.memoizedState;l!==m||y!==P||kt.current||er?(typeof S=="function"&&(gh(e,n,S,r),P=e.memoizedState),(h=er||vm(e,n,h,r,y,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return wh(t,e,n,r,s,i)}function wh(t,e,n,r,i,s){Yv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cm(e,n,!1),bn(t,e,s);r=e.stateNode,cI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zi(e,t.child,null,s),e.child=Zi(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&cm(e,n,!0),e.child}function Xv(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),Nd(t,e.containerInfo)}function km(t,e,n,r,i){return Ji(),Ad(i),e.flags|=256,yt(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Th(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jv(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(ke,i&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fu(o,r,0,null),t=Kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Th(n),e.memoizedState=Eh,t):Fd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yr(l,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fd(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,r){return r!==null&&Ad(r),Zi(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tc(Error(M(422))),Ua(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fu({mode:"visible",children:r.children},i,0,null),s=Kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zi(e,t.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=Eh,s);if(!(e.mode&1))return Ua(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Tc(s,r,void 0),Ua(t,e,o,r)}if(l=(o&t.childLanes)!==0,At||l){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),an(r,t,i,-1))}return qd(),r=Tc(Error(M(421))),Ua(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Dt=fr(i.nextSibling),Ot=e,Ie=!0,sn=null,t!==null&&(Bt[$t++]=An,Bt[$t++]=kn,Bt[$t++]=Yr,An=t.id,kn=t.overflow,Yr=e),e=Fd(e,r.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function Ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dI(t,e,n){switch(e.tag){case 3:Xv(e),Ji();break;case 5:Av(e);break;case 1:Rt(e.type)&&kl(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?Jv(t,e,n):(ge(ke,ke.current&1),t=bn(t,e,n),t!==null?t.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Zv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,Qv(t,e,n)}return bn(t,e,n)}var e_,Ih,t_,n_;e_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};t_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(mn.current);var s=null;switch(n){case"input":i=qc(t,i),r=qc(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Gc(t,i),r=Gc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}Yc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(mo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(mo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};n_=function(t,e,n,r){n!==r&&(e.flags|=4)};function $s(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fI(t,e,n){var r=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Rt(e.type)&&Al(),at(e),null;case 3:return r=e.stateNode,es(),Te(kt),Te(ft),Vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Nh(sn),sn=null))),Ih(t,e),at(e),null;case 5:Dd(e);var i=Hr(Ro.current);if(n=e.type,t!==null&&e.stateNode!=null)t_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return at(e),null}if(t=Hr(mn.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Qs.length;i++)we(Qs[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Lp(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":jp(r,s),we("invalid",r)}Yc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),i=["children",""+l]):mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Pa(r),Mp(r,s,!0);break;case"textarea":Pa(r),Fp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Ao]=r,e_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xc(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qs.length;i++)we(Qs[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Lp(t,r),i=qc(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),we("invalid",t);break;case"textarea":jp(t,r),i=Gc(t,r),we("invalid",t);break;default:i=r}Yc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Vy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ny(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&go(t,u):typeof u=="number"&&go(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&ud(t,s,u,o))}switch(n){case"input":Pa(t),Mp(t,r,!1);break;case"textarea":Pa(t),Fp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ui(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)n_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Hr(Ro.current),Hr(mn.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:Ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return at(e),null;case 13:if(Te(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Dt!==null&&e.mode&1&&!(e.flags&128))wv(),Ji(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[fn]=e}else Ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else sn!==null&&(Nh(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Be===0&&(Be=3):qd())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return es(),Ih(t,e),t===null&&Io(e.stateNode.containerInfo),at(e),null;case 10:return Cd(e.type._context),at(e),null;case 17:return Rt(e.type)&&Al(),at(e),null;case 19:if(Te(ke),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>ns&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return at(e),null}else 2*be()-s.renderingStartTime>ns&&n!==1073741824&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Hd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function pI(t,e){switch(Sd(e),e.tag){case 1:return Rt(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(),Te(kt),Te(ft),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(Te(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(ke),null;case 4:return es(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var za=!1,ct=!1,mI=typeof WeakSet=="function"?WeakSet:Set,H=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Sh(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Cm=!1;function gI(t,e){if(ah=El,t=av(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)y=m,m=S;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},El=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,O=P.memoizedState,A=e.stateNode,_=A.getSnapshotBeforeUpdate(e.elementType===e.type?N:nn(e.type,N),O);A.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){Ve(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return P=Cm,Cm=!1,P}function oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sh(e,n,s)}i=i.next}while(i!==r)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r_(t){var e=t.alternate;e!==null&&(t.alternate=null,r_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Ao],delete e[hh],delete e[JT],delete e[ZT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i_(t){return t.tag===5||t.tag===3||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var Qe=null,rn=!1;function Xn(t,e,n){for(n=n.child;n!==null;)s_(t,e,n),n=n.sibling}function s_(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:ct||Mi(n,e);case 6:var r=Qe,i=rn;Qe=null,Xn(t,e,n),Qe=r,rn=i,Qe!==null&&(rn?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(rn?(t=Qe,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),wo(t)):gc(Qe,n.stateNode));break;case 4:r=Qe,i=rn,Qe=n.stateNode.containerInfo,rn=!0,Xn(t,e,n),Qe=r,rn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sh(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!ct&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,Xn(t,e,n),ct=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mI),e.forEach(function(r){var i=AI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,rn=!1;break e;case 3:Qe=l.stateNode.containerInfo,rn=!0;break e;case 4:Qe=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(Qe===null)throw Error(M(160));s_(s,o,i),Qe=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ve(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,t),e=e.sibling}function o_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),hn(t),r&4){try{oo(3,t,t.return),hu(3,t)}catch(N){Ve(t,t.return,N)}try{oo(5,t,t.return)}catch(N){Ve(t,t.return,N)}}break;case 1:tn(e,t),hn(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(tn(e,t),hn(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{go(i,"")}catch(N){Ve(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Cy(i,s),Xc(l,o);var h=Xc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Vy(i,m):f==="dangerouslySetInnerHTML"?Ny(i,m):f==="children"?go(i,m):ud(i,f,m,h)}switch(l){case"input":Wc(i,s);break;case"textarea":Py(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Ui(i,!!s.multiple,S,!1):y!==!!s.multiple&&(s.defaultValue!=null?Ui(i,!!s.multiple,s.defaultValue,!0):Ui(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ao]=s}catch(N){Ve(t,t.return,N)}}break;case 6:if(tn(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ve(t,t.return,N)}}break;case 3:if(tn(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(N){Ve(t,t.return,N)}break;case 4:tn(e,t),hn(t);break;case 13:tn(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bd=be())),r&4&&xm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(h=ct)||f,tn(e,t),ct=h):tn(e,t),hn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(y=H,S=y.child,y.tag){case 0:case 11:case 14:case 15:oo(4,y,y.return);break;case 1:Mi(y,y.return);var P=y.stateNode;if(typeof P.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Ve(r,n,N)}}break;case 5:Mi(y,y.return);break;case 22:if(y.memoizedState!==null){Dm(m);continue}}S!==null?(S.return=y,H=S):Dm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Dy("display",o))}catch(N){Ve(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){Ve(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:tn(e,t),hn(t),r&4&&xm(t);break;case 21:break;default:tn(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(go(i,""),r.flags&=-33);var s=Pm(t);Rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Pm(t);kh(t,l,o);break;default:throw Error(M(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yI(t,e,n){H=t,a_(t)}function a_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||za;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ct;l=za;var h=ct;if(za=o,(ct=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Vm(i):u!==null?(u.return=o,H=u):Vm(i);for(;s!==null;)H=s,a_(s),s=s.sibling;H=i,za=l,ct=h}Nm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Nm(t)}}function Nm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&wo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}ct||e.flags&512&&Ah(e)}catch(y){Ve(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Dm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Vm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{Ah(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{Ah(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var vI=Math.ceil,bl=zn.ReactCurrentDispatcher,Ud=zn.ReactCurrentOwner,qt=zn.ReactCurrentBatchConfig,ae=0,qe=null,Me=null,Je=0,Nt=0,ji=Dr(0),Be=0,No=null,Jr=0,du=0,zd=0,ao=null,It=null,Bd=0,ns=1/0,In=null,Ll=!1,Ch=null,mr=null,Ba=!1,lr=null,Ml=0,lo=0,Ph=null,il=-1,sl=0;function vt(){return ae&6?be():il!==-1?il:il=be()}function gr(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:tI.transition!==null?(sl===0&&(sl=qy()),sl):(t=he,t!==0||(t=window.event,t=t===void 0?16:Jy(t.type)),t):1}function an(t,e,n,r){if(50<lo)throw lo=0,Ph=null,Error(M(185));$o(t,n,r),(!(ae&2)||t!==qe)&&(t===qe&&(!(ae&2)&&(du|=n),Be===4&&nr(t,Je)),Ct(t,r),n===1&&ae===0&&!(e.mode&1)&&(ns=be()+500,lu&&Vr()))}function Ct(t,e){var n=t.callbackNode;tT(t,e);var r=wl(t,t===qe?Je:0);if(r===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?eI(Om.bind(null,t)):yv(Om.bind(null,t)),YT(function(){!(ae&6)&&Vr()}),n=null;else{switch(Wy(r)){case 1:n=pd;break;case 4:n=$y;break;case 16:n=_l;break;case 536870912:n=Hy;break;default:n=_l}n=m_(n,l_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l_(t,e){if(il=-1,sl=0,ae&6)throw Error(M(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=wl(t,t===qe?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jl(t,r);else{e=r;var i=ae;ae|=2;var s=c_();(qe!==t||Je!==e)&&(In=null,ns=be()+500,Wr(t,e));do try{EI();break}catch(l){u_(t,l)}while(!0);Rd(),bl.current=s,ae=i,Me!==null?e=0:(qe=null,Je=0,e=Be)}if(e!==0){if(e===2&&(i=nh(t),i!==0&&(r=i,e=xh(t,i))),e===1)throw n=No,Wr(t,0),nr(t,r),Ct(t,be()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!_I(i)&&(e=jl(t,r),e===2&&(s=nh(t),s!==0&&(r=s,e=xh(t,s))),e===1))throw n=No,Wr(t,0),nr(t,r),Ct(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Ur(t,It,In);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Bd+500-be(),10<e)){if(wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ch(Ur.bind(null,t,It,In),e);break}Ur(t,It,In);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vI(r/1960))-r,10<r){t.timeoutHandle=ch(Ur.bind(null,t,It,In),r);break}Ur(t,It,In);break;case 5:Ur(t,It,In);break;default:throw Error(M(329))}}}return Ct(t,be()),t.callbackNode===n?l_.bind(null,t):null}function xh(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=jl(t,e),t!==2&&(e=It,It=n,e!==null&&Nh(e)),t}function Nh(t){It===null?It=t:It.push.apply(It,t)}function _I(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~zd,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Om(t){if(ae&6)throw Error(M(327));qi();var e=wl(t,0);if(!(e&1))return Ct(t,be()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=xh(t,r))}if(n===1)throw n=No,Wr(t,0),nr(t,e),Ct(t,be()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,It,In),Ct(t,be()),null}function $d(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ns=be()+500,lu&&Vr())}}function Zr(t){lr!==null&&lr.tag===0&&!(ae&6)&&qi();var e=ae;ae|=1;var n=qt.transition,r=he;try{if(qt.transition=null,he=1,t)return t()}finally{he=r,qt.transition=n,ae=e,!(ae&6)&&Vr()}}function Hd(){Nt=ji.current,Te(ji)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QT(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:es(),Te(kt),Te(ft),Vd();break;case 5:Dd(r);break;case 4:es();break;case 13:Te(ke);break;case 19:Te(ke);break;case 10:Cd(r.type._context);break;case 22:case 23:Hd()}n=n.return}if(qe=t,Me=t=yr(t.current,null),Je=Nt=e,Be=0,No=null,zd=du=Jr=0,It=ao=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function u_(t,e){do{var n=Me;try{if(Rd(),tl.current=Ol,Vl){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vl=!1}if(Xr=0,He=ze=Re=null,so=!1,Co=0,Ud.current=null,n===null||n.return===null){Be=1,No=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Em(o);if(S!==null){S.flags&=-257,Tm(S,o,l,s,e),S.mode&1&&wm(s,h,e),e=S,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){wm(s,h,e),qd();break e}u=Error(M(426))}}else if(Ie&&l.mode&1){var O=Em(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Tm(O,o,l,s,e),Ad(ts(u,l));break e}}s=u=ts(u,l),Be!==4&&(Be=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=Wv(s,u,e);pm(s,A);break e;case 1:l=u;var _=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(mr===null||!mr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=Kv(s,l,e);pm(s,V);break e}}s=s.return}while(s!==null)}d_(n)}catch(U){e=U,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function c_(){var t=bl.current;return bl.current=Ol,t===null?Ol:t}function qd(){(Be===0||Be===3||Be===2)&&(Be=4),qe===null||!(Jr&268435455)&&!(du&268435455)||nr(qe,Je)}function jl(t,e){var n=ae;ae|=2;var r=c_();(qe!==t||Je!==e)&&(In=null,Wr(t,e));do try{wI();break}catch(i){u_(t,i)}while(!0);if(Rd(),ae=n,bl.current=r,Me!==null)throw Error(M(261));return qe=null,Je=0,Be}function wI(){for(;Me!==null;)h_(Me)}function EI(){for(;Me!==null&&!WE();)h_(Me)}function h_(t){var e=p_(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?d_(t):Me=e,Ud.current=null}function d_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pI(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Me=null;return}}else if(n=fI(n,e,Nt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Be===0&&(Be=5)}function Ur(t,e,n){var r=he,i=qt.transition;try{qt.transition=null,he=1,TI(t,e,n,r)}finally{qt.transition=i,he=r}return null}function TI(t,e,n,r){do qi();while(lr!==null);if(ae&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nT(t,s),t===qe&&(Me=qe=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,m_(_l,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=he;he=1;var l=ae;ae|=4,Ud.current=null,gI(t,n),o_(n,t),BT(lh),El=!!ah,lh=ah=null,t.current=n,yI(n),KE(),ae=l,he=o,qt.transition=s}else t.current=n;if(Ba&&(Ba=!1,lr=t,Ml=i),s=t.pendingLanes,s===0&&(mr=null),YE(n.stateNode),Ct(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ll)throw Ll=!1,t=Ch,Ch=null,t;return Ml&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===Ph?lo++:(lo=0,Ph=t):lo=0,Vr(),null}function qi(){if(lr!==null){var t=Wy(Ml),e=qt.transition,n=he;try{if(qt.transition=null,he=16>t?16:t,lr===null)var r=!1;else{if(t=lr,lr=null,Ml=0,ae&6)throw Error(M(331));var i=ae;for(ae|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var y=f.sibling,S=f.return;if(r_(f),f===h){H=null;break}if(y!==null){y.return=S,H=y;break}H=S}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,H=A;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,H=k;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hu(9,l)}}catch(U){Ve(l,l.return,U)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(ae=i,Vr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(ru,t)}catch{}r=!0}return r}finally{he=n,qt.transition=e}}return!1}function bm(t,e,n){e=ts(n,e),e=Wv(t,e,1),t=pr(t,e,1),e=vt(),t!==null&&($o(t,1,e),Ct(t,e))}function Ve(t,e,n){if(t.tag===3)bm(t,t,n);else for(;e!==null;){if(e.tag===3){bm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){t=ts(n,t),t=Kv(e,t,1),e=pr(e,t,1),t=vt(),e!==null&&($o(e,1,t),Ct(e,t));break}}e=e.return}}function II(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Je&n)===n&&(Be===4||Be===3&&(Je&130023424)===Je&&500>be()-Bd?Wr(t,0):zd|=n),Ct(t,e)}function f_(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=vt();t=On(t,e),t!==null&&($o(t,e,n),Ct(t,n))}function SI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f_(t,n)}function AI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),f_(t,n)}var p_;p_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,dI(t,e,n);At=!!(t.flags&131072)}else At=!1,Ie&&e.flags&1048576&&vv(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var i=Xi(e,ft.current);Hi(e,n),i=bd(null,e,r,t,i,n);var s=Ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xd(e),i.updater=cu,e.stateNode=i,i._reactInternals=e,yh(e,r,t,n),e=wh(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Id(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RI(r),t=nn(r,t),i){case 0:e=_h(null,e,r,t,n);break e;case 1:e=Am(null,e,r,t,n);break e;case 11:e=Im(null,e,r,t,n);break e;case 14:e=Sm(null,e,r,nn(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),_h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Am(t,e,r,i,n);case 3:e:{if(Xv(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Sv(t,e),Nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ts(Error(M(423)),e),e=km(t,e,r,n,i);break e}else if(r!==i){i=ts(Error(M(424)),e),e=km(t,e,r,n,i);break e}else for(Dt=fr(e.stateNode.containerInfo.firstChild),Ot=e,Ie=!0,sn=null,n=Tv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ji(),r===i){e=bn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return Av(e),t===null&&ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uh(r,i)?o=null:s!==null&&uh(r,s)&&(e.flags|=32),Yv(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return Jv(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zi(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Im(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Pl,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!kt.current){e=bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),mh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hi(e,n),i=Gt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),Sm(t,e,r,i,n);case 15:return Gv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),rl(t,e),e.tag=1,Rt(r)?(t=!0,kl(e)):t=!1,Hi(e,n),qv(e,r,i),yh(e,r,i,n),wh(null,e,r,!0,t,n);case 19:return Zv(t,e,n);case 22:return Qv(t,e,n)}throw Error(M(156,e.tag))};function m_(t,e){return By(t,e)}function kI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new kI(t,e,n,r)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RI(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===dd)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Kr(n.children,i,s,e);case cd:o=8,i|=8;break;case zc:return t=Ht(12,n,e,i|2),t.elementType=zc,t.lanes=s,t;case Bc:return t=Ht(13,n,e,i),t.elementType=Bc,t.lanes=s,t;case $c:return t=Ht(19,n,e,i),t.elementType=$c,t.lanes=s,t;case Ay:return fu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Iy:o=10;break e;case Sy:o=9;break e;case hd:o=11;break e;case dd:o=14;break e;case Zn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kr(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function fu(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=Ay,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,r,i,s,o,l,u){return t=new CI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(s),t}function PI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function g_(t){if(!t)return Ar;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(Rt(n))return gv(t,n,e)}return e}function y_(t,e,n,r,i,s,o,l,u){return t=Kd(n,r,!0,t,i,s,o,l,u),t.context=g_(null),n=t.current,r=vt(),i=gr(n),s=Nn(r,i),s.callback=e??null,pr(n,s,i),t.current.lanes=i,$o(t,i,r),Ct(t,r),t}function pu(t,e,n,r){var i=e.current,s=vt(),o=gr(i);return n=g_(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(an(t,i,o,s),el(t,i,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){Lm(t,e),(t=t.alternate)&&Lm(t,e)}function xI(){return null}var v_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}mu.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));pu(t,e,null,null)};mu.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){pu(null,t,null,null)}),e[Vn]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Xy(t)}};function Yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function NI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Fl(o);s.call(h)}}var o=y_(e,r,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[Vn]=o.current,Io(t.nodeType===8?t.parentNode:t),Zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Fl(u);l.call(h)}}var u=Kd(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=u,t[Vn]=u.current,Io(t.nodeType===8?t.parentNode:t),Zr(function(){pu(e,u,n,r)}),u}function yu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Fl(o);l.call(u)}}pu(e,o,t,i)}else o=NI(n,e,t,i,r);return Fl(o)}Ky=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(md(e,n|1),Ct(e,be()),!(ae&6)&&(ns=be()+500,Vr()))}break;case 13:Zr(function(){var r=On(t,1);if(r!==null){var i=vt();an(r,t,1,i)}}),Gd(t,1)}};gd=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=vt();an(e,t,134217728,n)}Gd(t,134217728)}};Gy=function(t){if(t.tag===13){var e=gr(t),n=On(t,e);if(n!==null){var r=vt();an(n,t,e,r)}Gd(t,e)}};Qy=function(){return he};Yy=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Zc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=au(r);if(!i)throw Error(M(90));Ry(r),Wc(r,i)}}}break;case"textarea":Py(t,n);break;case"select":e=n.value,e!=null&&Ui(t,!!n.multiple,e,!1)}};Ly=$d;My=Zr;var DI={usingClientEntryPoint:!1,Events:[qo,Di,au,Oy,by,$d]},Hs={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VI={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uy(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||xI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{ru=$a.inject(VI),pn=$a}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DI;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(M(200));return PI(t,e,null,n)};Lt.createRoot=function(t,e){if(!Yd(t))throw Error(M(299));var n=!1,r="",i=v_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,Io(t.nodeType===8?t.parentNode:t),new Qd(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Uy(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return Zr(t)};Lt.hydrate=function(t,e,n){if(!gu(e))throw Error(M(200));return yu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Yd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=v_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y_(e,null,t,1,n??null,i,!1,s,o),t[Vn]=e.current,Io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mu(e)};Lt.render=function(t,e,n){if(!gu(e))throw Error(M(200));return yu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!gu(t))throw Error(M(40));return t._reactRootContainer?(Zr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Lt.unstable_batchedUpdates=$d;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return yu(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function __(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(__)}catch(t){console.error(t)}}__(),_y.exports=Lt;var OI=_y.exports,jm=OI;Fc.createRoot=jm.createRoot,Fc.hydrateRoot=jm.hydrateRoot;var Fm={};/**
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
 */const w_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(y=64)),r.push(n[f],n[m],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new LI;const y=s<<2|l>>4;if(r.push(y),h!==64){const S=l<<4&240|h>>2;if(r.push(S),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MI=function(t){const e=w_(t);return E_.encodeByteArray(e,!0)},Ul=function(t){return MI(t).replace(/\./g,"")},T_=function(t){try{return E_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FI=()=>jI().__FIREBASE_DEFAULTS__,UI=()=>{if(typeof process>"u"||typeof Fm>"u")return;const t=Fm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&T_(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return FI()||UI()||zI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I_=t=>{var e,n;return(n=(e=vu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BI=t=>{const e=I_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S_=()=>{var t;return(t=vu())===null||t===void 0?void 0:t.config},A_=t=>{var e;return(e=vu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function HI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),""].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function WI(){var t;const e=(t=vu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YI(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XI(){return!WI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JI(){try{return typeof indexedDB=="object"}catch{return!1}}function ZI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const eS="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eS,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,l,r)}}function tS(t,e){return t.replace(nS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nS=/\{\$([^}]+)}/g;function rS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Um(s)&&Um(o)){if(!zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Um(t){return t!==null&&typeof t=="object"}/**
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
 */function Go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function iS(t,e){const n=new sS(t,e);return n.subscribe.bind(n)}class sS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kc),i.error===void 0&&(i.error=kc),i.complete===void 0&&(i.complete=kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class aS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $I;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uS(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lS(t){return t===zr?void 0:t}function uS(t){return t.instantiationMode==="EAGER"}/**
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
 */class cS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const hS={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},dS=se.INFO,fS={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},pS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xd{constructor(e){this.name=e,this._logLevel=dS,this._logHandler=pS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const mS=(t,e)=>e.some(n=>t instanceof n);let zm,Bm;function gS(){return zm||(zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yS(){return Bm||(Bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k_=new WeakMap,Dh=new WeakMap,R_=new WeakMap,Rc=new WeakMap,Jd=new WeakMap;function vS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&k_.set(n,t)}).catch(()=>{}),Jd.set(e,t),e}function _S(t){if(Dh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||R_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wS(t){Vh=t(Vh)}function ES(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return R_.set(r,e.sort?e.sort():[e]),vr(r)}:yS().includes(t)?function(...e){return t.apply(Cc(this),e),vr(k_.get(this))}:function(...e){return vr(t.apply(Cc(this),e))}}function TS(t){return typeof t=="function"?ES(t):(t instanceof IDBTransaction&&_S(t),mS(t,gS())?new Proxy(t,Vh):t)}function vr(t){if(t instanceof IDBRequest)return vS(t);if(Rc.has(t))return Rc.get(t);const e=TS(t);return e!==t&&(Rc.set(t,e),Jd.set(e,t)),e}const Cc=t=>Jd.get(t);function IS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vr(o.result),u.oldVersion,u.newVersion,vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const SS=["get","getKey","getAll","getAllKeys","count"],AS=["put","add","delete","clear"],Pc=new Map;function $m(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Pc.set(e,s),s}wS(t=>({...t,get:(e,n,r)=>$m(e,n)||t.get(e,n,r),has:(e,n)=>!!$m(e,n)||t.has(e,n)}));/**
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
 */class kS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oh="@firebase/app",Hm="0.10.13";/**
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
 */const Ln=new Xd("@firebase/app"),CS="@firebase/app-compat",PS="@firebase/analytics-compat",xS="@firebase/analytics",NS="@firebase/app-check-compat",DS="@firebase/app-check",VS="@firebase/auth",OS="@firebase/auth-compat",bS="@firebase/database",LS="@firebase/data-connect",MS="@firebase/database-compat",jS="@firebase/functions",FS="@firebase/functions-compat",US="@firebase/installations",zS="@firebase/installations-compat",BS="@firebase/messaging",$S="@firebase/messaging-compat",HS="@firebase/performance",qS="@firebase/performance-compat",WS="@firebase/remote-config",KS="@firebase/remote-config-compat",GS="@firebase/storage",QS="@firebase/storage-compat",YS="@firebase/firestore",XS="@firebase/vertexai-preview",JS="@firebase/firestore-compat",ZS="firebase",e1="10.14.1";/**
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
 */const bh="[DEFAULT]",t1={[Oh]:"fire-core",[CS]:"fire-core-compat",[xS]:"fire-analytics",[PS]:"fire-analytics-compat",[DS]:"fire-app-check",[NS]:"fire-app-check-compat",[VS]:"fire-auth",[OS]:"fire-auth-compat",[bS]:"fire-rtdb",[LS]:"fire-data-connect",[MS]:"fire-rtdb-compat",[jS]:"fire-fn",[FS]:"fire-fn-compat",[US]:"fire-iid",[zS]:"fire-iid-compat",[BS]:"fire-fcm",[$S]:"fire-fcm-compat",[HS]:"fire-perf",[qS]:"fire-perf-compat",[WS]:"fire-rc",[KS]:"fire-rc-compat",[GS]:"fire-gcs",[QS]:"fire-gcs-compat",[YS]:"fire-fst",[JS]:"fire-fst-compat",[XS]:"fire-vertex","fire-js":"fire-js",[ZS]:"fire-js-all"};/**
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
 */const Bl=new Map,n1=new Map,Lh=new Map;function qm(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(Lh.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of Bl.values())qm(n,t);for(const n of n1.values())qm(n,t);return!0}function Zd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t.settings!==void 0}/**
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
 */const r1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new Ko("app","Firebase",r1);/**
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
 */class i1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=e1;function C_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(n||(n=S_()),!n)throw _r.create("no-options");const s=Bl.get(i);if(s){if(zl(n,s.options)&&zl(r,s.config))return s;throw _r.create("duplicate-app",{appName:i})}const o=new cS(i);for(const u of Lh.values())o.addComponent(u);const l=new i1(n,r,o);return Bl.set(i,l),l}function P_(t=bh){const e=Bl.get(t);if(!e&&t===bh&&S_())return C_();if(!e)throw _r.create("no-app",{appName:t});return e}function wr(t,e,n){var r;let i=(r=t1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}rs(new ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const s1="firebase-heartbeat-database",o1=1,Do="firebase-heartbeat-store";let xc=null;function x_(){return xc||(xc=IS(s1,o1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Do)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),xc}async function a1(t){try{const n=(await x_()).transaction(Do),r=await n.objectStore(Do).get(N_(t));return await n.done,r}catch(e){if(e instanceof Bn)Ln.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Wm(t,e){try{const r=(await x_()).transaction(Do,"readwrite");await r.objectStore(Do).put(e,N_(t)),await r.done}catch(n){if(n instanceof Bn)Ln.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function N_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const l1=1024,u1=30*24*60*60*1e3;class c1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new d1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Km();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=u1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Km(),{heartbeatsToSend:r,unsentEntries:i}=h1(this._heartbeatsCache.heartbeats),s=Ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function Km(){return new Date().toISOString().substring(0,10)}function h1(t,e=l1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class d1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JI()?ZI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await a1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gm(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function f1(t){rs(new ei("platform-logger",e=>new kS(e),"PRIVATE")),rs(new ei("heartbeat",e=>new c1(e),"PRIVATE")),wr(Oh,Hm,t),wr(Oh,Hm,"esm2017"),wr("fire-js","")}f1("");var p1="firebase",m1="10.14.1";/**
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
 */wr(p1,m1,"app");function ef(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function D_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g1=D_,V_=new Ko("auth","Firebase",D_());/**
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
 */const $l=new Xd("@firebase/auth");function y1(t,...e){$l.logLevel<=se.WARN&&$l.warn(`Auth (${ps}): ${t}`,...e)}function al(t,...e){$l.logLevel<=se.ERROR&&$l.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function Mn(t,...e){throw tf(t,...e)}function gn(t,...e){return tf(t,...e)}function O_(t,e,n){const r=Object.assign(Object.assign({},g1()),{[e]:n});return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function Er(t){return O_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return V_.create(t,...e)}function X(t,e,...n){if(!t)throw tf(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function jn(t,e){t||Cn(e)}/**
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
 */function Mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function v1(){return Qm()==="http:"||Qm()==="https:"}function Qm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v1()||GI()||"connection"in navigator)?navigator.onLine:!0}function w1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=qI()||QI()}get(){return _1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nf(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class b_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const E1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const T1=new Qo(3e4,6e4);function _u(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ms(t,e,n,r,i={}){return L_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Go(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return KI()||(h.referrerPolicy="no-referrer"),b_.fetch()(j_(t,t.config.apiHost,n,l),h)})}async function L_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},E1),e);try{const i=new I1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ha(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw O_(t,f,h);Mn(t,f)}}catch(i){if(i instanceof Bn)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function M_(t,e,n,r,i={}){const s=await ms(t,e,n,r,i);return"mfaPendingCredential"in s&&Mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function j_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nf(t.config,i):`${t.config.apiScheme}://${i}`}class I1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),T1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function S1(t,e){return ms(t,"POST","/v1/accounts:delete",e)}async function F_(t,e){return ms(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A1(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=rf(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:uo(Nc(i.auth_time)),issuedAtTime:uo(Nc(i.iat)),expirationTime:uo(Nc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const i=T_(n);return i?JSON.parse(i):(al("Failed to decode base64 JWT payload"),null)}catch(i){return al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ym(t){const e=rf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&k1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function k1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class R1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vo(t,F_(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?U_(s.providerUserInfo):[],l=P1(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new jh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function C1(t){const e=tt(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function U_(t){return t.map(e=>{var{providerId:n}=e,r=ef(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function x1(t,e){const n=await L_(t,{},async()=>{const r=Go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=j_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",b_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function N1(t,e){return ms(t,"POST","/v2/accounts:revokeToken",_u(t,e))}/**
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
 */class Wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Ym(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await x1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wi;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wi,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function Jn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return A1(this,e)}reload(){return C1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await Vo(this,S1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:V,isAnonymous:U,providerData:F,stsTokenManager:E}=n;X(k&&E,e,"internal-error");const g=Wi.fromJSON(this.name,E);X(typeof k=="string",e,"internal-error"),Jn(m,e.name),Jn(y,e.name),X(typeof V=="boolean",e,"internal-error"),X(typeof U=="boolean",e,"internal-error"),Jn(S,e.name),Jn(P,e.name),Jn(N,e.name),Jn(O,e.name),Jn(A,e.name),Jn(_,e.name);const w=new Pn({uid:k,auth:e,email:y,emailVerified:V,displayName:m,isAnonymous:U,photoURL:P,phoneNumber:S,tenantId:N,stsTokenManager:g,createdAt:A,lastLoginAt:_});return F&&Array.isArray(F)&&(w.providerData=F.map(I=>Object.assign({},I))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wi;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?U_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Wi;l.updateFromIdToken(r);const u=new Pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Xm=new Map;function xn(t){jn(t instanceof Function,"Expected a class definition");let e=Xm.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xm.set(t,e),e)}/**
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
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z_.type="NONE";const Jm=z_;/**
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
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class Ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ki(xn(Jm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||xn(Jm);const o=ll(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=Pn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ki(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ki(s,e,r))}}/**
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
 */function Zm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K_(e))return"Blackberry";if(G_(e))return"Webos";if($_(e))return"Safari";if((e.includes("chrome/")||H_(e))&&!e.includes("edge/"))return"Chrome";if(W_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B_(t=pt()){return/firefox\//i.test(t)}function $_(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H_(t=pt()){return/crios\//i.test(t)}function q_(t=pt()){return/iemobile/i.test(t)}function W_(t=pt()){return/android/i.test(t)}function K_(t=pt()){return/blackberry/i.test(t)}function G_(t=pt()){return/webos/i.test(t)}function sf(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function D1(t=pt()){var e;return sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function V1(){return YI()&&document.documentMode===10}function Q_(t=pt()){return sf(t)||W_(t)||G_(t)||K_(t)||/windows phone/i.test(t)||q_(t)}/**
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
 */function Y_(t,e=[]){let n;switch(t){case"Browser":n=Zm(pt());break;case"Worker":n=`${Zm(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class O1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function b1(t,e={}){return ms(t,"GET","/v2/passwordPolicy",_u(t,e))}/**
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
 */const L1=6;class M1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:L1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class j1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new O1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await F_(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(Er(this));const n=e?tt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await b1(this),n=new M1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await N1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&y1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wu(t){return tt(t)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=iS(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F1(t){of=t}function U1(t){return of.loadJS(t)}function z1(){return of.gapiScript}function B1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function $1(t,e){const n=Zd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zl(s,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function H1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function q1(t,e,n){const r=wu(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=X_(e),{host:o,port:l}=W1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),K1()}function X_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function W1(t){const e=X_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function K1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class J_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
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
 */async function Gi(t,e){return M_(t,"POST","/v1/accounts:signInWithIdp",_u(t,e))}/**
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
 */const G1="http://localhost";class ti extends J_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ef(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:G1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Go(n)}return e}}/**
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
 */class Z_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yo extends Z_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends Yo{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class ir extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ti._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
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
 */class sr extends Yo{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class or extends Yo{constructor(){super("twitter.com")}static credential(e,n){return ti._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function Q1(t,e){return M_(t,"POST","/v1/accounts:signUp",_u(t,e))}/**
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
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=ng(r);return new kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ng(r);return new kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Y1(t){var e;if(Rn(t.app))return Promise.reject(Er(t));const n=wu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new kr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Q1(n,{returnSecureToken:!0}),i=await kr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ql extends Bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ql(e,n,r,i)}}function e0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,s,e,r):s})}async function X1(t,e,n=!1){const r=await Vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
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
 */async function J1(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(Er(r));const i="reauthenticate";try{const s=await Vo(t,e0(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=rf(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),s}}/**
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
 */async function Z1(t,e,n=!1){if(Rn(t.app))return Promise.reject(Er(t));const r="signIn",i=await e0(t,r,e),s=await kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function eA(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function tA(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function nA(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}const Wl="__sak";/**
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
 */class t0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rA=1e3,iA=10;class n0 extends t0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);V1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n0.type="LOCAL";const sA=n0;/**
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
 */class r0 extends t0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r0.type="SESSION";const i0=r0;/**
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
 */function oA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Eu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await oA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eu.receivers=[];/**
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
 */function af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=af("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function lA(t){yn().location.href=t}/**
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
 */function s0(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function uA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hA(){return s0()?self:null}/**
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
 */const o0="firebaseLocalStorageDb",dA=1,Kl="firebaseLocalStorage",a0="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function fA(){const t=indexedDB.deleteDatabase(o0);return new Xo(t).toPromise()}function Fh(){const t=indexedDB.open(o0,dA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:a0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await fA(),e(await Fh()))})})}async function rg(t,e,n){const r=Tu(t,!0).put({[a0]:e,value:n});return new Xo(r).toPromise()}async function pA(t,e){const n=Tu(t,!1).get(e),r=await new Xo(n).toPromise();return r===void 0?null:r.value}function ig(t,e){const n=Tu(t,!0).delete(e);return new Xo(n).toPromise()}const mA=800,gA=3;class l0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return s0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eu._getInstance(hA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uA(),!this.activeServiceWorker)return;this.sender=new aA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fh();return await rg(e,Wl,"1"),await ig(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tu(i,!1).getAll();return new Xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l0.type="LOCAL";const yA=l0;new Qo(3e4,6e4);/**
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
 */function vA(t,e){return e?xn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lf extends J_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _A(t){return Z1(t.auth,new lf(t),t.bypassAuthState)}function wA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),J1(n,new lf(t),t.bypassAuthState)}async function EA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),X1(n,new lf(t),t.bypassAuthState)}/**
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
 */class u0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _A;case"linkViaPopup":case"linkViaRedirect":return EA;case"reauthViaPopup":case"reauthViaRedirect":return wA;default:Mn(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TA=new Qo(2e3,1e4);class Fi extends u0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TA.get())};e()}}Fi.currentPopupAction=null;/**
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
 */const IA="pendingRedirect",ul=new Map;class SA extends u0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await AA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AA(t,e){const n=CA(e),r=RA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kA(t,e){ul.set(t._key(),e)}function RA(t){return xn(t._redirectPersistence)}function CA(t){return ll(IA,t.config.apiKey,t.name)}async function PA(t,e,n=!1){if(Rn(t.app))return Promise.reject(Er(t));const r=wu(t),i=vA(r,e),o=await new SA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xA=10*60*1e3;class NA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!c0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xA&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function c0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c0(t);default:return!1}}/**
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
 */async function VA(t,e={}){return ms(t,"GET","/v1/projects",e)}/**
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
 */const OA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bA=/^https?/;async function LA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VA(t);for(const n of e)try{if(MA(n))return}catch{}Mn(t,"unauthorized-domain")}function MA(t){const e=Mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bA.test(n))return!1;if(OA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jA=new Qo(3e4,6e4);function og(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FA(t){return new Promise((e,n)=>{var r,i,s;function o(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(gn(t,"network-request-failed"))},timeout:jA.get()})}if(!((i=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yn().gapi)===null||s===void 0)&&s.load)o();else{const l=B1("iframefcb");return yn()[l]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},U1(`${z1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw cl=null,e})}let cl=null;function UA(t){return cl=cl||FA(t),cl}/**
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
 */const zA=new Qo(5e3,15e3),BA="__/auth/iframe",$A="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WA(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nf(e,$A):`https://${t.config.authDomain}/${BA}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=qA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Go(r).slice(1)}`}async function KA(t){const e=await UA(t),n=yn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:WA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),l=yn().setTimeout(()=>{s(o)},zA.get());function u(){yn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const GA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QA=500,YA=600,XA="_blank",JA="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZA(t,e,n,r=QA,i=YA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},GA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=pt().toLowerCase();n&&(l=H_(h)?XA:n),B_(h)&&(e=e||JA,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[S,P])=>`${y}${S}=${P},`,"");if(D1(h)&&l!=="_self")return ek(e||"",l),new ag(null);const m=window.open(e||"",l,f);X(m,t,"popup-blocked");try{m.focus()}catch{}return new ag(m)}function ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tk="__/auth/handler",nk="emulator/auth/handler",rk=encodeURIComponent("fac");async function lg(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof Z_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Yo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${rk}=${encodeURIComponent(u)}`:"";return`${ik(t)}?${Go(l).slice(1)}${h}`}function ik({config:t}){return t.emulator?nf(t,nk):`https://${t.authDomain}/${tk}`}/**
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
 */const Dc="webStorageSupport";class sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i0,this._completeRedirectFn=PA,this._overrideRedirectResult=kA}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lg(e,n,r,Mh(),i);return ZA(e,o,af())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lg(e,n,r,Mh(),i);return lA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KA(e),r=new NA(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dc];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q_()||$_()||sf()}}const ok=sk;var ug="@firebase/auth",cg="1.7.9";/**
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
 */class ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uk(t){rs(new ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y_(t)},h=new j1(r,i,s,u);return H1(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new ei("auth-internal",e=>{const n=wu(e.getProvider("auth").getImmediate());return(r=>new ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(ug,cg,lk(t)),wr(ug,cg,"esm2017")}/**
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
 */const ck=5*60,hk=A_("authIdTokenMaxAge")||ck;let hg=null;const dk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hk)return;const i=n==null?void 0:n.token;hg!==i&&(hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fk(t=P_()){const e=Zd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$1(t,{popupRedirectResolver:ok,persistence:[yA,sA,i0]}),r=A_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=dk(s.toString());tA(n,o,()=>o(n.currentUser)),eA(n,l=>o(l))}}const i=I_("auth");return i&&q1(n,`http://${i}`),n}function pk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}F1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uk("Browser");var dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,h0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function w(){}w.prototype=g.prototype,E.D=g.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(I,C,R){for(var T=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)T[mt-2]=arguments[mt];return g.prototype[C].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,w){w||(w=0);var I=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)I[C]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(C=0;16>C;++C)I[C]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=E.g[0],w=E.g[1],C=E.g[2];var R=E.g[3],T=g+(R^w&(C^R))+I[0]+3614090360&4294967295;g=w+(T<<7&4294967295|T>>>25),T=R+(C^g&(w^C))+I[1]+3905402710&4294967295,R=g+(T<<12&4294967295|T>>>20),T=C+(w^R&(g^w))+I[2]+606105819&4294967295,C=R+(T<<17&4294967295|T>>>15),T=w+(g^C&(R^g))+I[3]+3250441966&4294967295,w=C+(T<<22&4294967295|T>>>10),T=g+(R^w&(C^R))+I[4]+4118548399&4294967295,g=w+(T<<7&4294967295|T>>>25),T=R+(C^g&(w^C))+I[5]+1200080426&4294967295,R=g+(T<<12&4294967295|T>>>20),T=C+(w^R&(g^w))+I[6]+2821735955&4294967295,C=R+(T<<17&4294967295|T>>>15),T=w+(g^C&(R^g))+I[7]+4249261313&4294967295,w=C+(T<<22&4294967295|T>>>10),T=g+(R^w&(C^R))+I[8]+1770035416&4294967295,g=w+(T<<7&4294967295|T>>>25),T=R+(C^g&(w^C))+I[9]+2336552879&4294967295,R=g+(T<<12&4294967295|T>>>20),T=C+(w^R&(g^w))+I[10]+4294925233&4294967295,C=R+(T<<17&4294967295|T>>>15),T=w+(g^C&(R^g))+I[11]+2304563134&4294967295,w=C+(T<<22&4294967295|T>>>10),T=g+(R^w&(C^R))+I[12]+1804603682&4294967295,g=w+(T<<7&4294967295|T>>>25),T=R+(C^g&(w^C))+I[13]+4254626195&4294967295,R=g+(T<<12&4294967295|T>>>20),T=C+(w^R&(g^w))+I[14]+2792965006&4294967295,C=R+(T<<17&4294967295|T>>>15),T=w+(g^C&(R^g))+I[15]+1236535329&4294967295,w=C+(T<<22&4294967295|T>>>10),T=g+(C^R&(w^C))+I[1]+4129170786&4294967295,g=w+(T<<5&4294967295|T>>>27),T=R+(w^C&(g^w))+I[6]+3225465664&4294967295,R=g+(T<<9&4294967295|T>>>23),T=C+(g^w&(R^g))+I[11]+643717713&4294967295,C=R+(T<<14&4294967295|T>>>18),T=w+(R^g&(C^R))+I[0]+3921069994&4294967295,w=C+(T<<20&4294967295|T>>>12),T=g+(C^R&(w^C))+I[5]+3593408605&4294967295,g=w+(T<<5&4294967295|T>>>27),T=R+(w^C&(g^w))+I[10]+38016083&4294967295,R=g+(T<<9&4294967295|T>>>23),T=C+(g^w&(R^g))+I[15]+3634488961&4294967295,C=R+(T<<14&4294967295|T>>>18),T=w+(R^g&(C^R))+I[4]+3889429448&4294967295,w=C+(T<<20&4294967295|T>>>12),T=g+(C^R&(w^C))+I[9]+568446438&4294967295,g=w+(T<<5&4294967295|T>>>27),T=R+(w^C&(g^w))+I[14]+3275163606&4294967295,R=g+(T<<9&4294967295|T>>>23),T=C+(g^w&(R^g))+I[3]+4107603335&4294967295,C=R+(T<<14&4294967295|T>>>18),T=w+(R^g&(C^R))+I[8]+1163531501&4294967295,w=C+(T<<20&4294967295|T>>>12),T=g+(C^R&(w^C))+I[13]+2850285829&4294967295,g=w+(T<<5&4294967295|T>>>27),T=R+(w^C&(g^w))+I[2]+4243563512&4294967295,R=g+(T<<9&4294967295|T>>>23),T=C+(g^w&(R^g))+I[7]+1735328473&4294967295,C=R+(T<<14&4294967295|T>>>18),T=w+(R^g&(C^R))+I[12]+2368359562&4294967295,w=C+(T<<20&4294967295|T>>>12),T=g+(w^C^R)+I[5]+4294588738&4294967295,g=w+(T<<4&4294967295|T>>>28),T=R+(g^w^C)+I[8]+2272392833&4294967295,R=g+(T<<11&4294967295|T>>>21),T=C+(R^g^w)+I[11]+1839030562&4294967295,C=R+(T<<16&4294967295|T>>>16),T=w+(C^R^g)+I[14]+4259657740&4294967295,w=C+(T<<23&4294967295|T>>>9),T=g+(w^C^R)+I[1]+2763975236&4294967295,g=w+(T<<4&4294967295|T>>>28),T=R+(g^w^C)+I[4]+1272893353&4294967295,R=g+(T<<11&4294967295|T>>>21),T=C+(R^g^w)+I[7]+4139469664&4294967295,C=R+(T<<16&4294967295|T>>>16),T=w+(C^R^g)+I[10]+3200236656&4294967295,w=C+(T<<23&4294967295|T>>>9),T=g+(w^C^R)+I[13]+681279174&4294967295,g=w+(T<<4&4294967295|T>>>28),T=R+(g^w^C)+I[0]+3936430074&4294967295,R=g+(T<<11&4294967295|T>>>21),T=C+(R^g^w)+I[3]+3572445317&4294967295,C=R+(T<<16&4294967295|T>>>16),T=w+(C^R^g)+I[6]+76029189&4294967295,w=C+(T<<23&4294967295|T>>>9),T=g+(w^C^R)+I[9]+3654602809&4294967295,g=w+(T<<4&4294967295|T>>>28),T=R+(g^w^C)+I[12]+3873151461&4294967295,R=g+(T<<11&4294967295|T>>>21),T=C+(R^g^w)+I[15]+530742520&4294967295,C=R+(T<<16&4294967295|T>>>16),T=w+(C^R^g)+I[2]+3299628645&4294967295,w=C+(T<<23&4294967295|T>>>9),T=g+(C^(w|~R))+I[0]+4096336452&4294967295,g=w+(T<<6&4294967295|T>>>26),T=R+(w^(g|~C))+I[7]+1126891415&4294967295,R=g+(T<<10&4294967295|T>>>22),T=C+(g^(R|~w))+I[14]+2878612391&4294967295,C=R+(T<<15&4294967295|T>>>17),T=w+(R^(C|~g))+I[5]+4237533241&4294967295,w=C+(T<<21&4294967295|T>>>11),T=g+(C^(w|~R))+I[12]+1700485571&4294967295,g=w+(T<<6&4294967295|T>>>26),T=R+(w^(g|~C))+I[3]+2399980690&4294967295,R=g+(T<<10&4294967295|T>>>22),T=C+(g^(R|~w))+I[10]+4293915773&4294967295,C=R+(T<<15&4294967295|T>>>17),T=w+(R^(C|~g))+I[1]+2240044497&4294967295,w=C+(T<<21&4294967295|T>>>11),T=g+(C^(w|~R))+I[8]+1873313359&4294967295,g=w+(T<<6&4294967295|T>>>26),T=R+(w^(g|~C))+I[15]+4264355552&4294967295,R=g+(T<<10&4294967295|T>>>22),T=C+(g^(R|~w))+I[6]+2734768916&4294967295,C=R+(T<<15&4294967295|T>>>17),T=w+(R^(C|~g))+I[13]+1309151649&4294967295,w=C+(T<<21&4294967295|T>>>11),T=g+(C^(w|~R))+I[4]+4149444226&4294967295,g=w+(T<<6&4294967295|T>>>26),T=R+(w^(g|~C))+I[11]+3174756917&4294967295,R=g+(T<<10&4294967295|T>>>22),T=C+(g^(R|~w))+I[2]+718787259&4294967295,C=R+(T<<15&4294967295|T>>>17),T=w+(R^(C|~g))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var w=g-this.blockSize,I=this.B,C=this.h,R=0;R<g;){if(C==0)for(;R<=w;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<g;)if(I[C++]=E.charCodeAt(R++),C==this.blockSize){i(this,I),C=0;break}}else for(;R<g;)if(I[C++]=E[R++],C==this.blockSize){i(this,I),C=0;break}}this.h=C,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var w=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=w&255,w/=256;for(this.u(E),E=Array(16),g=w=0;4>g;++g)for(var I=0;32>I;I+=8)E[w++]=this.g[g]>>>I&255;return E};function s(E,g){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=g(E)}function o(E,g){this.h=g;for(var w=[],I=!0,C=E.length-1;0<=C;C--){var R=E[C]|0;I&&R==g||(w[C]=R,I=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return O(h(-E));for(var g=[],w=1,I=0;E>=w;I++)g[I]=E/w|0,w*=4294967296;return new o(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return O(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(g,8)),I=m,C=0;C<E.length;C+=8){var R=Math.min(8,E.length-C),T=parseInt(E.substring(C,C+R),g);8>R?(R=h(Math.pow(g,R)),I=I.j(R).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var m=u(0),y=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var E=0,g=1,w=0;w<this.g.length;w++){var I=this.i(w);E+=(0<=I?I:4294967296+I)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+O(this).toString(E);for(var g=h(Math.pow(E,6)),w=this,I="";;){var C=V(w,g).g;w=A(w,C.j(g));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=C,P(w))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=A(this,E),N(E)?-1:P(E)?0:1};function O(E){for(var g=E.g.length,w=[],I=0;I<g;I++)w[I]=~E.g[I];return new o(w,~E.h).add(y)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],I=0,C=0;C<=g;C++){var R=I+(this.i(C)&65535)+(E.i(C)&65535),T=(R>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);I=T>>>16,R&=65535,T&=65535,w[C]=T<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function A(E,g){return E.add(O(g))}t.j=function(E){if(P(this)||P(E))return m;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(0>this.l(S)&&0>E.l(S))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,w=[],I=0;I<2*g;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<E.g.length;C++){var R=this.i(I)>>>16,T=this.i(I)&65535,mt=E.i(C)>>>16,cn=E.i(C)&65535;w[2*I+2*C]+=T*cn,_(w,2*I+2*C),w[2*I+2*C+1]+=R*cn,_(w,2*I+2*C+1),w[2*I+2*C+1]+=T*mt,_(w,2*I+2*C+1),w[2*I+2*C+2]+=R*mt,_(w,2*I+2*C+2)}for(I=0;I<g;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=g;I<2*g;I++)w[I]=0;return new o(w,0)};function _(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function k(E,g){this.g=E,this.h=g}function V(E,g){if(P(g))throw Error("division by zero");if(P(E))return new k(m,m);if(N(E))return g=V(O(E),g),new k(O(g.g),O(g.h));if(N(g))return g=V(E,O(g)),new k(O(g.g),g.h);if(30<E.g.length){if(N(E)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,I=g;0>=I.l(E);)w=U(w),I=U(I);var C=F(w,1),R=F(I,1);for(I=F(I,2),w=F(w,2);!P(I);){var T=R.add(I);0>=T.l(E)&&(C=C.add(w),R=T),I=F(I,1),w=F(w,1)}return g=A(E,C.j(g)),new k(C,g)}for(C=m;0<=E.l(g);){for(w=Math.max(1,Math.floor(E.m()/g.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=h(w),T=R.j(g);N(T)||0<T.l(E);)w-=I,R=h(w),T=R.j(g);P(R)&&(R=y),C=C.add(R),E=A(E,T)}return new k(C,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)&E.i(I);return new o(w,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)|E.i(I);return new o(w,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)^E.i(I);return new o(w,this.h^E.h)};function U(E){for(var g=E.g.length+1,w=[],I=0;I<g;I++)w[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(w,E.h)}function F(E,g){var w=g>>5;g%=32;for(var I=E.g.length-w,C=[],R=0;R<I;R++)C[R]=0<g?E.i(R+w)>>>g|E.i(R+w+1)<<32-g:E.i(R+w);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Gr=o}).apply(typeof dg<"u"?dg:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var d0,Ys,f0,hl,Uh,p0,m0,g0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var x=a[p];if(!(x in d))break e;d=d[x]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,x={next:function(){if(!p&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,p),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,x,D){for(var z=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)z[fe-2]=arguments[fe];return c.prototype[x].apply(p,z)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const x=a.length||0,D=p.length||0;a.length=x+D;for(let z=0;z<D;z++)a[x+z]=p[z]}else a.push(p)}}class A{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var U=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function F(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(d in p)a[d]=p[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Y;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class mt{constructor(){this.h=this.g=null}add(c,d){const p=cn.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var cn=new A(()=>new $n,a=>a.reset());class $n{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let jt,B=!1,Y=new mt,Q=()=>{const a=l.Promise.resolve(void 0);jt=()=>{a.then(ye)}};var ye=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){R(d)}var c=cn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Et=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Ft(a,c){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{V(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Yt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ft.aa.h.call(this)}}P(Ft,Ae);var Yt={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),Uu=0;function ci(a,c,d,p,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=x,this.key=++Uu,this.da=this.fa=!1}function hi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function di(a){this.src=a,this.g={},this.h=0}di.prototype.add=function(a,c,d,p,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=Jt(a,c,p,x);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new ci(c,this.src,D,!!p,x),c.fa=d,a.push(c)),c};function ws(a,c){var d=c.type;if(d in a.g){var p=a.g[d],x=Array.prototype.indexOf.call(p,c,void 0),D;(D=0<=x)&&Array.prototype.splice.call(p,x,1),D&&(hi(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Jt(a,c,d,p){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==p)return x}return-1}var Zt="closure_lm_"+(1e6*Math.random()|0),xe={};function sa(a,c,d,p,x){if(Array.isArray(c)){for(var D=0;D<c.length;D++)sa(a,c[D],d,p,x);return null}return d=aa(d),a&&a[Xt]?a.K(c,d,h(p)?!!p.capture:!1,x):br(a,c,d,!1,p,x)}function br(a,c,d,p,x,D){if(!c)throw Error("Invalid event type");var z=h(x)?!!x.capture:!!x,fe=Ts(a);if(fe||(a[Zt]=fe=new di(a)),d=fe.add(c,d,p,z,D),d.proxy)return d;if(p=rt(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Et||(x=z),x===void 0&&(x=!1),a.addEventListener(c.toString(),p,x);else if(a.attachEvent)a.attachEvent(Es(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function rt(){function a(d){return c.call(a.src,a.listener,d)}const c=zu;return a}function oa(a,c,d,p,x){if(Array.isArray(c))for(var D=0;D<c.length;D++)oa(a,c[D],d,p,x);else p=h(p)?!!p.capture:!!p,d=aa(d),a&&a[Xt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Jt(D,d,p,x),-1<d&&(hi(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Ts(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Jt(c,d,p,x)),(d=-1<a?c[a]:null)&&fi(d))}function fi(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Xt])ws(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Es(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Ts(c))?(ws(d,a),d.h==0&&(d.src=null,c[Zt]=null)):hi(a)}}}function Es(a){return a in xe?xe[a]:xe[a]="on"+a}function zu(a,c){if(a.da)a=!0;else{c=new Ft(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&fi(a),a=d.call(p,c)}return a}function Ts(a){return a=a[Zt],a instanceof di?a:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function aa(a){return typeof a=="function"?a:(a[Is]||(a[Is]=function(c){return a.handleEvent(c)}),a[Is])}function Ue(){ce.call(this),this.i=new di(this),this.M=this,this.F=null}P(Ue,ce),Ue.prototype[Xt]=!0,Ue.prototype.removeEventListener=function(a,c,d,p){oa(this,a,c,d,p)};function We(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ae(c,a);else if(c instanceof Ae)c.target=c.target||a;else{var x=c;c=new Ae(p,a),I(c,x)}if(x=!0,d)for(var D=d.length-1;0<=D;D--){var z=c.g=d[D];x=pi(z,p,!0,c)&&x}if(z=c.g=a,x=pi(z,p,!0,c)&&x,x=pi(z,p,!1,c)&&x,d)for(D=0;D<d.length;D++)z=c.g=d[D],x=pi(z,p,!1,c)&&x}Ue.prototype.N=function(){if(Ue.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)hi(d[p]);delete a.g[c],a.h--}}this.F=null},Ue.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Ue.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function pi(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,D=0;D<c.length;++D){var z=c[D];if(z&&!z.da&&z.capture==d){var fe=z.listener,Ke=z.ha||z.src;z.fa&&ws(a.i,z),x=fe.call(Ke,p)!==!1&&x}}return x&&!p.defaultPrevented}function la(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Ss(a){a.g=la(()=>{a.g=null,a.i&&(a.i=!1,Ss(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ua extends ce{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ss(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hn(a){ce.call(this),this.h=a,this.g={}}P(Hn,ce);var As=[];function ks(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&fi(c)},a),a.g={}}Hn.prototype.N=function(){Hn.aa.N.call(this),ks(this)},Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mi=l.JSON.stringify,ca=l.JSON.parse,ha=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function gi(){}gi.prototype.h=null;function Rs(a){return a.h||(a.h=a.i())}function Cs(){}var qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function W(){Ae.call(this,"d")}P(W,Ae);function te(){Ae.call(this,"c")}P(te,Ae);var G={},pe=null;function ve(){return pe=pe||new Ue}G.La="serverreachability";function Pt(a){Ae.call(this,G.La,a)}P(Pt,Ae);function j(a){const c=ve();We(c,new Pt(c))}G.STAT_EVENT="statevent";function Ne(a,c){Ae.call(this,G.STAT_EVENT,a),this.stat=c}P(Ne,Ae);function me(a){const c=ve();We(c,new Ne(c,a))}G.Ma="timingevent";function Wn(a,c){Ae.call(this,G.Ma,a),this.size=c}P(Wn,Ae);function Ut(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Kn(){this.g=!0}Kn.prototype.xa=function(){this.g=!1};function da(a,c,d,p,x,D){a.info(function(){if(a.g)if(D)for(var z="",fe=D.split("&"),Ke=0;Ke<fe.length;Ke++){var le=fe[Ke].split("=");if(1<le.length){var it=le[0];le=le[1];var st=it.split("_");z=2<=st.length&&st[1]=="type"?z+(it+"="+le+"&"):z+(it+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+c+`
`+d+`
`+z})}function Fw(a,c,d,p,x,D,z){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+c+`
`+d+`
`+D+" "+z})}function yi(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+zw(a,d)+(p?" "+p:"")})}function Uw(a,c){a.info(function(){return"TIMEOUT: "+c})}Kn.prototype.info=function(){};function zw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var x=p[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<x.length;z++)x[z]=""}}}}return mi(d)}catch{return c}}var fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bu;function pa(){}P(pa,gi),pa.prototype.g=function(){return new XMLHttpRequest},pa.prototype.i=function(){return{}},Bu=new pa;function Gn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Hn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wf}function Wf(){this.i=null,this.g="",this.h=!1}var Kf={},$u={};function Hu(a,c,d){a.L=1,a.v=va(En(c)),a.m=d,a.P=!0,Gf(a,null)}function Gf(a,c){a.F=Date.now(),ma(a),a.A=En(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),lp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Wf,a.g=kp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new ua(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(As[0]=x.toString()),x=As);for(var D=0;D<x.length;D++){var z=sa(d,x[D],p||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),j(),da(a.i,a.u,a.A,a.l,a.R,a.m)}Gn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Tn(a)==3?c.j():this.Y(a)},Gn.prototype.Y=function(a){try{if(a==this.g)e:{const st=Tn(this.g);var c=this.g.Ba();const wi=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||mp(this.g)))){this.J||st!=4||c==7||(c==8||0>=wi?j(3):j(2)),qu(this);var d=this.g.Z();this.X=d;t:if(Qf(this)){var p=mp(this.g);a="";var x=p.length,D=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Ps(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(D&&c==x-1)});p.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Fw(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ke=this.g;if((fe=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(fe)){var le=fe;break t}}le=null}if(d=le)yi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wu(this,d);else{this.o=!1,this.s=3,me(12),Lr(this),Ps(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<z.length;)if(en=Bw(this,z),en==$u){st==4&&(this.s=4,me(14),d=!1),yi(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Kf){this.s=4,me(15),yi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else yi(this.i,this.l,en,null),Wu(this,en);if(Qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||z.length!=0||this.h.h||(this.s=1,me(16),d=!1),this.o=this.o&&d,!d)yi(this.i,this.l,z,"[Invalid Chunked Response]"),Lr(this),Ps(this);else if(0<z.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ju(it),it.M=!0,me(11))}}else yi(this.i,this.l,z,null),Wu(this,z);st==4&&Lr(this),this.o&&!this.J&&(st==4?Tp(this.j,this):(this.o=!1,ma(this)))}else sE(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,me(12)):(this.s=0,me(13)),Lr(this),Ps(this)}}}catch{}finally{}};function Qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Bw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?$u:(d=Number(c.substring(d,p)),isNaN(d)?Kf:(p+=1,p+d>c.length?$u:(c=c.slice(p,p+d),a.C=p+d,c)))}Gn.prototype.cancel=function(){this.J=!0,Lr(this)};function ma(a){a.S=Date.now()+a.I,Yf(a,a.I)}function Yf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ut(y(a.ba,a),c)}function qu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Gn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Uw(this.i,this.A),this.L!=2&&(j(),me(17)),Lr(this),this.s=2,Ps(this)):Yf(this,this.S-a)};function Ps(a){a.j.G==0||a.J||Tp(a.j,a)}function Lr(a){qu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,ks(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Wu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ku(d.h,a))){if(!a.K&&Ku(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Sa(d),Ta(d);else break e;Xu(d),me(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ut(y(d.Za,d),6e3));if(1>=Zf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else jr(d,11)}else if((a.K||d.g==a)&&Sa(d),!_(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let le=x[c];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const it=le[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const st=le[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const wi=le[5];wi!=null&&typeof wi=="number"&&0<wi&&(p=1.5*wi,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const en=a.g;if(en){const ka=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ka){var D=p.h;D.g||ka.indexOf("spdy")==-1&&ka.indexOf("quic")==-1&&ka.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Gu(D,D.h),D.h=null))}if(p.D){const Zu=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Zu&&(p.ya=Zu,_e(p.I,p.D,Zu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=a;if(p.qa=Ap(p,p.J?p.ia:null,p.W),z.K){ep(p.h,z);var fe=z,Ke=p.L;Ke&&(fe.I=Ke),fe.B&&(qu(fe),ma(fe)),p.g=z}else wp(p);0<d.i.length&&Ia(d)}else le[0]!="stop"&&le[0]!="close"||jr(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?jr(d,7):Yu(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}j(4)}catch{}}var $w=class{constructor(a,c){this.g=a,this.map=c}};function Xf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zf(a){return a.h?1:a.g?a.g.size:0}function Ku(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Gu(a,c){a.g?a.g.add(c):a.h=c}function ep(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Xf.prototype.cancel=function(){if(this.i=tp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function Hw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function qw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function np(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=qw(a),p=Hw(a),x=p.length,D=0;D<x;D++)c.call(void 0,p[D],d&&d[D],a)}var rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ww(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),x=null;if(0<=p){var D=a[d].substring(0,p);x=a[d].substring(p+1)}else D=a[d];c(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mr){this.h=a.h,ga(this,a.j),this.o=a.o,this.g=a.g,ya(this,a.s),this.l=a.l;var c=a.i,d=new Ds;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),ip(this,d),this.m=a.m}else a&&(c=String(a).match(rp))?(this.h=!1,ga(this,c[1]||"",!0),this.o=xs(c[2]||""),this.g=xs(c[3]||"",!0),ya(this,c[4]),this.l=xs(c[5]||"",!0),ip(this,c[6]||"",!0),this.m=xs(c[7]||"")):(this.h=!1,this.i=new Ds(null,this.h))}Mr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ns(c,sp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ns(c,sp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?Qw:Gw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,Xw)),a.join("")};function En(a){return new Mr(a)}function ga(a,c,d){a.j=d?xs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ya(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function ip(a,c,d){c instanceof Ds?(a.i=c,Jw(a.i,a.h)):(d||(c=Ns(c,Yw)),a.i=new Ds(c,a.h))}function _e(a,c,d){a.i.set(c,d)}function va(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Kw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Kw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sp=/[#\/\?@]/g,Gw=/[#\?:]/g,Qw=/[#\?]/g,Yw=/[#\?@]/g,Xw=/#/g;function Ds(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Qn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ww(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ds.prototype,t.add=function(a,c){Qn(this),this.i=null,a=vi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function op(a,c){Qn(a),c=vi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ap(a,c){return Qn(a),c=vi(a,c),a.g.has(c)}t.forEach=function(a,c){Qn(this),this.g.forEach(function(d,p){d.forEach(function(x){a.call(c,x,p,this)},this)},this)},t.na=function(){Qn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const x=a[p];for(let D=0;D<x.length;D++)d.push(c[p])}return d},t.V=function(a){Qn(this);let c=[];if(typeof a=="string")ap(this,a)&&(c=c.concat(this.g.get(vi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Qn(this),this.i=null,a=vi(this,a),ap(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function lp(a,c,d){op(a,c),0<d.length&&(a.i=null,a.g.set(vi(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const D=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var x=D;z[p]!==""&&(x+="="+encodeURIComponent(String(z[p]))),a.push(x)}}return this.i=a.join("&")};function vi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Jw(a,c){c&&!a.j&&(Qn(a),a.i=null,a.g.forEach(function(d,p){var x=p.toLowerCase();p!=x&&(op(this,p),lp(this,x,d))},a)),a.j=c}function Zw(a,c){const d=new Kn;if(l.Image){const p=new Image;p.onload=S(Yn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=S(Yn,d,"TestLoadImage: error",!1,c,p),p.onabort=S(Yn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(Yn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function eE(a,c){const d=new Kn,p=new AbortController,x=setTimeout(()=>{p.abort(),Yn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(D=>{clearTimeout(x),D.ok?Yn(d,"TestPingServer: ok",!0,c):Yn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Yn(d,"TestPingServer: error",!1,c)})}function Yn(a,c,d,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(d)}catch{}}function tE(){this.g=new ha}function nE(a,c,d){const p=d||"";try{np(a,function(x,D){let z=x;h(x)&&(z=mi(x)),c.push(p+D+"="+encodeURIComponent(z))})}catch(x){throw c.push(p+"type="+encodeURIComponent("_badmap")),x}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}P(_a,gi),_a.prototype.g=function(){return new wa(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function wa(a,c){Ue.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(wa,Ue),t=wa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Os(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;up(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function up(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Vs(this):Os(this),this.readyState==3&&up(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Vs(this))},t.Qa=function(a){this.g&&(this.response=a,Vs(this))},t.ga=function(){this.g&&Vs(this)};function Vs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Os(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cp(a){let c="";return F(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Qu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=cp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):_e(a,c,d))}function De(a){Ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(De,Ue);var rE=/^https?$/i,iE=["POST","PUT"];t=De.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bu.g(),this.v=this.o?Rs(this.o):Rs(Bu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){hp(this,D);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)d.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())d.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(iE,c,void 0))||p||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){hp(this,D)}};function hp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,dp(a),Ea(a)}function dp(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,We(this,"complete"),We(this,"abort"),Ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fp(this):this.bb())},t.bb=function(){fp(this)};function fp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)la(a.Ea,0,a);else if(We(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=z===0){var x=String(a.D).match(rp)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),p=!rE.test(x?x.toLowerCase():"")}d=p}if(d)We(a,"complete"),We(a,"success");else{a.m=6;try{var D=2<Tn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",dp(a)}}finally{Ea(a)}}}}function Ea(a,c){if(a.g){pp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||We(a,"ready");try{d.onreadystatechange=p}catch{}}}function pp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),ca(c)}};function mp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sE(a){const c={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var d=C(a[p]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[x]||[];c[x]=D,D.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function gp(a){this.Aa=0,this.i=[],this.j=new Kn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xf(a&&a.concurrentRequestLimit),this.Da=new tE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=gp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){me(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ap(this,null,this.W),Ia(this)};function Yu(a){if(yp(a),a.G==3){var c=a.U++,d=En(a.I);if(_e(d,"SID",a.K),_e(d,"RID",c),_e(d,"TYPE","terminate"),Ls(a,d),c=new Gn(a,a.j,c),c.L=2,c.v=va(En(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=kp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ma(c)}Sp(a)}function Ta(a){a.g&&(Ju(a),a.g.cancel(),a.g=null)}function yp(a){Ta(a),a.u&&(l.clearTimeout(a.u),a.u=null),Sa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ia(a){if(!Jf(a.h)&&!a.s){a.s=!0;var c=a.Ga;jt||Q(),B||(jt(),B=!0),Y.add(c,a),a.B=0}}function oE(a,c){return Zf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ut(y(a.Ga,a,c),Ip(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Gn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=_p(this,x,c),d=En(this.I),_e(d,"RID",a),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),Ls(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(cp(D)))+"&"+c:this.m&&Qu(d,this.m,D)),Gu(this.h,x),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",c),_e(d,"SID","null"),x.T=!0,Hu(x,d,null)):Hu(x,d,c),this.G=2}}else this.G==3&&(a?vp(this,a):this.i.length==0||Jf(this.h)||vp(this))};function vp(a,c){var d;c?d=c.l:d=a.U++;const p=En(a.I);_e(p,"SID",a.K),_e(p,"RID",d),_e(p,"AID",a.T),Ls(a,p),a.m&&a.o&&Qu(p,a.m,a.o),d=new Gn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=_p(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Gu(a.h,d),Hu(d,p,c)}function Ls(a,c){a.H&&F(a.H,function(d,p){_e(c,p,d)}),a.l&&np({},function(d,p){_e(c,p,d)})}function _p(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=x[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let fe=!0;for(let Ke=0;Ke<d;Ke++){let le=x[Ke].g;const it=x[Ke].map;if(le-=D,0>le)D=Math.max(0,x[Ke].g-100),fe=!1;else try{nE(it,z,"req"+le+"_")}catch{p&&p(it)}}if(fe){p=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function wp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;jt||Q(),B||(jt(),B=!0),Y.add(c,a),a.v=0}}function Xu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ut(y(a.Fa,a),Ip(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ut(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,me(10),Ta(this),Ep(this))};function Ju(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ep(a){a.g=new Gn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=En(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),Ls(a,c),a.m&&a.o&&Qu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=va(En(c)),d.m=null,d.P=!0,Gf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ta(this),Xu(this),me(19))};function Sa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Tp(a,c){var d=null;if(a.g==c){Sa(a),Ju(a),a.g=null;var p=2}else if(Ku(a.h,c))d=c.D,ep(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;p=ve(),We(p,new Wn(p,d)),Ia(a)}else wp(a);else if(x=c.s,x==3||x==0&&0<c.X||!(p==1&&oE(a,c)||p==2&&Xu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function Ip(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function jr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const x=!p;p=new Mr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ga(p,"https"),va(p),x?Zw(p.toString(),d):eE(p.toString(),d)}else me(2);a.G=0,a.l&&a.l.sa(c),Sp(a),yp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),me(2)):(this.j.info("Failed to ping google.com"),me(1))};function Sp(a){if(a.G=0,a.ka=[],a.l){const c=tp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Ap(a,c,d){var p=d instanceof Mr?En(d):new Mr(d);if(p.g!="")c&&(p.g=c+"."+p.g),ya(p,p.s);else{var x=l.location;p=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var D=new Mr(null);p&&ga(D,p),c&&(D.g=c),x&&ya(D,x),d&&(D.l=d),p=D}return d=a.D,c=a.ya,d&&c&&_e(p,d,c),_e(p,"VER",a.la),Ls(a,p),p}function kp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new De(new _a({eb:d})):new De(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rp(){}t=Rp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(a,c){return new xt(a,c)};function xt(a,c){Ue.call(this),this.g=new gp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new _i(this)}P(xt,Ue),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Yu(this.g)},xt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=mi(a),a=d);c.i.push(new $w(c.Ya++,a)),c.G==3&&Ia(c)},xt.prototype.N=function(){this.g.l=null,delete this.j,Yu(this.g),delete this.g,xt.aa.N.call(this)};function Cp(a){W.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Cp,W);function Pp(){te.call(this),this.status=1}P(Pp,te);function _i(a){this.g=a}P(_i,Rp),_i.prototype.ua=function(){We(this.g,"a")},_i.prototype.ta=function(a){We(this.g,new Cp(a))},_i.prototype.sa=function(a){We(this.g,new Pp)},_i.prototype.ra=function(){We(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,g0=function(){return new Aa},m0=function(){return ve()},p0=G,Uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,hl=fa,qf.COMPLETE="complete",f0=qf,Cs.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",Ue.prototype.listen=Ue.prototype.K,Ys=Cs,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,d0=De}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const fg="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let gs="10.14.0";/**
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
 */const ni=new Xd("@firebase/firestore");function qs(){return ni.logLevel}function q(t,...e){if(ni.logLevel<=se.DEBUG){const n=e.map(uf);ni.debug(`Firestore (${gs}): ${t}`,...n)}}function Fn(t,...e){if(ni.logLevel<=se.ERROR){const n=e.map(uf);ni.error(`Firestore (${gs}): ${t}`,...n)}}function is(t,...e){if(ni.logLevel<=se.WARN){const n=e.map(uf);ni.warn(`Firestore (${gs}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function de(t,e){t||J()}function ee(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class y0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class gk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yk{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new y0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new ut(e)}}class vk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _k{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ek{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new wk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Tk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class v0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Tk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Fe(0,0))}static max(){return new Z(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Oo{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const Ik=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Oo{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return Ik.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ee.fromString(e))}static fromName(e){return new K(Ee.fromString(e).popFirst(5))}static empty(){return new K(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ee(e.slice()))}}function Sk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Rr(i,K.empty(),e)}function Ak(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(Z.min(),K.empty(),-1)}static max(){return new Rr(Z.max(),K.empty(),-1)}}function kk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const Rk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ck{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Jo(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Rk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Pk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cf.oe=-1;function Iu(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function xk(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mg(this.data.getIterator())}getIteratorFrom(e){return new mg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class mg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class w0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new w0("Invalid base64 string: "+s):s}}(e);return new nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const Nk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(de(!!t),typeof t=="string"){let e=0;const n=Nk.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function df(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?df(e):e}function bo(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class Dk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ka={mapValue:{}};function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:Ok(t)?9007199254740991:Vk(t)?10:11:J()}function wn(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bo(t).isEqual(bo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Cr(i.timestampValue),l=Cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ri(i.bytesValue).isEqual(ri(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),l=Oe(s.doubleValue);return o===l?Gl(o)===Gl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(pg(o)!==pg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!wn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function Mo(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gg(t.timestampValue,e.timestampValue);case 4:return gg(bo(t),bo(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ri(s),u=ri(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ue(l[h],u[h]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Oe(s.latitude),Oe(o.latitude));return l!==0?l:ue(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},y=o.fields||{},S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=(u=y.value)===null||u===void 0?void 0:u.arrayValue,N=ue(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:yg(S,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ka.mapValue&&o===Ka.mapValue)return 0;if(s===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=ue(u[m],f[m]);if(y!==0)return y;const S=os(l[u[m]],h[f[m]]);if(S!==0)return S}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Cr(t),r=Cr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function yg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=os(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function as(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ri(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zh(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function vg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bh(t){return!!t&&"integerValue"in t}function ff(t){return!!t&&"arrayValue"in t}function _g(t){return!!t&&"nullValue"in t}function wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function Vk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ai(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ok(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=co(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ai(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(co(this.value))}}function E0(t){const e=[];return ai(t.fields,(n,r)=>{const i=new Xe([n]);if(dl(r)){const s=E0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
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
 */class ht{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,Z.min(),Z.min(),Z.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,Z.min(),Z.min(),St.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,Z.min(),Z.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ql{constructor(e,n){this.position=e,this.inclusive=n}}function Eg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function bk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class T0{}class je extends T0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Mk(e,n,r):n==="array-contains"?new Uk(e,r):n==="in"?new zk(e,r):n==="not-in"?new Bk(e,r):n==="array-contains-any"?new $k(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jk(e,r):new Fk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends T0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return I0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function I0(t){return t.op==="and"}function S0(t){return Lk(t)&&I0(t)}function Lk(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function $h(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+as(t.value);if(S0(t))return t.filters.map(e=>$h(e)).join(",");{const e=t.filters.map(n=>$h(n)).join(",");return`${t.op}(${e})`}}function A0(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&wn(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&A0(o,i.filters[l]),!0):!1}(t,e):void J()}function k0(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(k0).join(" ,")+"}"}(t):"Filter"}class Mk extends je{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class jk extends je{constructor(e,n){super(e,"in",n),this.keys=R0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Fk extends je{constructor(e,n){super(e,"not-in",n),this.keys=R0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function R0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Uk extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&Mo(n.arrayValue,this.value)}}class zk extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class Bk extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class $k extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
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
 */class Hk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ig(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Hk(t,e,n,r,i,s,o)}function pf(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$h(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ue=n}return e.ue}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tg(t.startAt,e.startAt)&&Tg(t.endAt,e.endAt)}function Hh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ys{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qk(t,e,n,r,i,s,o,l){return new ys(t,e,n,r,i,s,o,l)}function Su(t){return new ys(t)}function Sg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C0(t){return t.collectionGroup!==null}function ho(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new jo(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new jo(Xe.keyField(),r))}return e.ce}function vn(t){const e=ee(t);return e.le||(e.le=Wk(e,ho(t))),e.le}function Wk(t,e){if(t.limitType==="F")return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new jo(i.field,s)});const n=t.endAt?new Ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ql(t.startAt.position,t.startAt.inclusive):null;return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qh(t,e){const n=t.filters.concat([e]);return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wh(t,e,n){return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Au(t,e){return mf(vn(t),vn(e))&&t.limitType===e.limitType}function P0(t){return`${pf(vn(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>k0(i)).join(", ")}]`),Iu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,ho(r),i)||r.endAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,ho(r),i))}(t,e)}function Kk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function x0(t){return(e,n)=>{let r=!1;for(const i of ho(t)){const s=Gk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Gk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?os(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ai(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _0(this.inner)}size(){return this.innerSize}}/**
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
 */const Qk=new Pe(K.comparator);function Un(){return Qk}const N0=new Pe(K.comparator);function Xs(...t){let e=N0;for(const n of t)e=e.insert(n.key,n);return e}function D0(t){let e=N0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qr(){return fo()}function V0(){return fo()}function fo(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yk=new Pe(K.comparator),Xk=new Ze(K.comparator);function ie(...t){let e=Xk;for(const n of t)e=e.add(n);return e}const Jk=new Ze(ue);function Zk(){return Jk}/**
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
 */function gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function O0(t){return{integerValue:""+t}}function eR(t,e){return xk(e)?O0(e):gf(t,e)}/**
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
 */class Ru{constructor(){this._=void 0}}function tR(t,e,n){return t instanceof Fo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hf(s)&&(s=df(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Uo?L0(t,e):t instanceof zo?M0(t,e):function(i,s){const o=b0(i,s),l=Ag(o)+Ag(i.Pe);return Bh(o)&&Bh(i.Pe)?O0(l):gf(i.serializer,l)}(t,e)}function nR(t,e,n){return t instanceof Uo?L0(t,e):t instanceof zo?M0(t,e):n}function b0(t,e){return t instanceof Yl?function(r){return Bh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Fo extends Ru{}class Uo extends Ru{constructor(e){super(),this.elements=e}}function L0(t,e){const n=j0(e);for(const r of t.elements)n.some(i=>wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends Ru{constructor(e){super(),this.elements=e}}function M0(t,e){let n=j0(e);for(const r of t.elements)n=n.filter(i=>!wn(i,r));return{arrayValue:{values:n}}}class Yl extends Ru{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ag(t){return Oe(t.integerValue||t.doubleValue)}function j0(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class rR{constructor(e,n){this.field=e,this.transform=n}}function iR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Uo&&i instanceof Uo||r instanceof zo&&i instanceof zo?ss(r.elements,i.elements,wn):r instanceof Yl&&i instanceof Yl?wn(r.Pe,i.Pe):r instanceof Fo&&i instanceof Fo}(t.transform,e.transform)}class sR{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cu{}function F0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yf(t.key,Wt.none()):new ea(t.key,t.data,Wt.none());{const n=t.data,r=St.empty();let i=new Ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new Vt(i.toArray()),Wt.none())}}function oR(t,e,n){t instanceof ea?function(i,s,o){const l=i.value.clone(),u=Rg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,o){if(!fl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Rg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(U0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,r){return t instanceof ea?function(s,o,l,u){if(!fl(s.precondition,o))return l;const h=s.value.clone(),f=Cg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,o,l,u){if(!fl(s.precondition,o))return l;const h=Cg(s.fieldTransforms,u,o),f=o.data;return f.setAll(U0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return fl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function aR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=b0(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function kg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>iR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Cu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Cu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function U0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rg(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,nR(o,l,n[i]))}return r}function Cg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tR(s,o,e))}return r}class yf extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lR extends Cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=V0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=F0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>kg(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>kg(n,r))}}class vf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return Yk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vf(e,n,r,i)}}/**
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
 */class cR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,oe;function dR(t){switch(t){default:return J();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function z0(t){if(t===void 0)return Fn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Le.OK:return b.OK;case Le.CANCELLED:return b.CANCELLED;case Le.UNKNOWN:return b.UNKNOWN;case Le.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Le.INTERNAL:return b.INTERNAL;case Le.UNAVAILABLE:return b.UNAVAILABLE;case Le.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Le.NOT_FOUND:return b.NOT_FOUND;case Le.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Le.ABORTED:return b.ABORTED;case Le.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Le.DATA_LOSS:return b.DATA_LOSS;default:return J()}}(oe=Le||(Le={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fR(){return new TextEncoder}/**
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
 */const pR=new Gr([4294967295,4294967295],0);function Pg(t){const e=fR().encode(t),n=new h0;return n.update(e),new Uint8Array(n.digest())}function xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,s],0)]}class _f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Gr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Gr.fromNumber(r)));return i.compare(pR)===1&&(i=new Gr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pg(e),[r,i]=xg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _f(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Pg(e),[r,i]=xg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pu(Z.min(),i,new Pe(ue),Un(),ie())}}class ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,ie(),ie(),ie())}}/**
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
 */class pl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class B0{constructor(e,n){this.targetId=e,this.me=n}}class $0{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ng{constructor(){this.fe=0,this.ge=Vg(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new ta(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Vg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=Dg(),this.Qe=new Pe(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Hh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ht.newNoDocument(o,Z.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ri(r).toUint8Array()}catch(u){if(u instanceof w0)return is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new _f(o,i,s)}catch(u){return is(u instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Hh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Pu(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=Dg(),this.Qe=new Pe(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ng,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ng),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Dg(){return new Pe(K.comparator)}function Vg(){return new Pe(K.comparator)}const gR={asc:"ASCENDING",desc:"DESCENDING"},yR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vR={and:"AND",or:"OR"};class _R{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kh(t,e){return t.useProto3Json||Iu(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wR(t,e){return Xl(t,e.toTimestamp())}function _n(t){return de(!!t),Z.fromTimestamp(function(n){const r=Cr(n);return new Fe(r.seconds,r.nanos)}(t))}function wf(t,e){return Gh(t,e).canonicalString()}function Gh(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q0(t){const e=Ee.fromString(t);return de(Y0(e)),e}function Qh(t,e){return wf(t.databaseId,e.path)}function Vc(t,e){const n=q0(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(K0(n))}function W0(t,e){return wf(t.databaseId,e)}function ER(t){const e=q0(t);return e.length===4?Ee.emptyPath():K0(e)}function Yh(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function K0(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Og(t,e,n){return{name:Qh(t,e),fields:n.value.mapValue.fields}}function TR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(de(f===void 0||typeof f=="string"),nt.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array),nt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:z0(h.code);return new $(f,h.message||"")}(o);n=new $0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vc(t,r.document.name),s=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):Z.min(),l=new St({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new pl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vc(t,r.document),s=r.readTime?_n(r.readTime):Z.min(),o=ht.newNoDocument(i,s),l=r.removedTargetIds||[];n=new pl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vc(t,r.document),s=r.removedTargetIds||[];n=new pl([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hR(i,s),l=r.targetId;n=new B0(l,o)}}return n}function IR(t,e){let n;if(e instanceof ea)n={update:Og(t,e.key,e.value)};else if(e instanceof yf)n={delete:Qh(t,e.key)};else if(e instanceof Or)n={update:Og(t,e.key,e.data),updateMask:DR(e.fieldMask)};else{if(!(e instanceof lR))return J();n={verify:Qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function SR(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?_n(i.updateTime):_n(s);return o.isEqual(Z.min())&&(o=_n(s)),new sR(o,i.transformResults||[])}(n,e))):[]}function AR(t,e){return{documents:[W0(t,e.path)]}}function kR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=W0(t,i);const s=function(h){if(h.length!==0)return Q0(un.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Ai(y.field),direction:PR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Kh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function RR(t){let e=ER(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=G0(m);return y instanceof un&&S0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(P){return new jo(ki(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Iu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,S=m.values||[];return new Ql(S,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,S=m.values||[];return new Ql(S,y)}(n.endAt)),qk(e,i,o,s,l,"F",u,h)}function CR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function G0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ki(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return je.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>G0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function PR(t){return gR[t]}function xR(t){return yR[t]}function NR(t){return vR[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function ki(t){return Xe.fromServerFormat(t.fieldPath)}function Q0(t){return t instanceof je?function(n){if(n.op==="=="){if(wg(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(_g(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wg(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(_g(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:xR(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>Q0(i));return r.length===1?r[0]:{compositeFilter:{op:NR(n.op),filters:r}}}(t):J()}function DR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ur{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VR{constructor(e){this.ct=e}}function OR(t){const e=RR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wh(e,e.limit,"L"):e}/**
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
 */class bR{constructor(){this.un=new LR}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Rr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class LR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ee.comparator)).toArray()}}/**
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
 */class ls{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ls(0)}static kn(){return new ls(-1)}}/**
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
 */class MR{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class FR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&po(r.mutation,i,Vt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Un();const o=fo(),l=function(){return fo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Or)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),po(f.mutation,h,f.mutation.getFieldMask(),Fe.now())):o.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new jR(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=fo();let i=new Pe((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=V0();f.forEach(y=>{if(!s.has(y)){const S=F0(n.get(y),r.get(y));S!==null&&m.set(y,S),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(qr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:D0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(m,y){return new ys(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ht.newInvalidDocument(f)))});let l=Xs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&po(f.mutation,h,Vt.empty(),Fe.now()),ku(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class UR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:_n(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:OR(i.bundledQuery),readTime:_n(i.readTime)}}(n)),L.resolve()}}/**
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
 */class zR{constructor(){this.overlays=new Pe(K.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=qr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=qr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cR(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class BR{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Ef{constructor(){this.Tr=new Ze($e.Er),this.dr=new Ze($e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new $e(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ee([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ee([])),r=new $e(n,e),i=new $e(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class $R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze($e.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ue);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new $e(new K(s),0);let l=new Ze(ue);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new $e(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HR{constructor(e){this.Mr=e,this.docs=function(){return new Pe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||kk(Ak(f),r)<=0||(i.has(f.key)||ku(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qR(this)}getSize(e){return L.resolve(this.size)}}class qR extends MR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class WR{constructor(e){this.persistence=e,this.Nr=new vs(n=>pf(n),mf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ef,this.targetCount=0,this.kr=ls.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
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
 */class KR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new cf(0),this.Kr=!1,this.Kr=!0,this.$r=new BR,this.referenceDelegate=e(this),this.Ur=new WR(this),this.indexManager=new bR,this.remoteDocumentCache=function(i){return new HR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VR(n),this.Gr=new UR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $R(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new GR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class GR extends Ck{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.Jr=new Ef,this.Yr=null}static Zr(e){return new Tf(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class If{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new If(e,n.fromCache,r,i)}}/**
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
 */class QR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return XI()?8:Pk(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(qs()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(qs()<=se.DEBUG&&q("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(qs()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):L.resolve())}Yi(e,n){if(Sg(n))return L.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wh(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Wh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Sg(n)||i.isEqual(Z.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(qs()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.rs(e,o,n,Sk(i,-1)).next(l=>l))})}ts(e,n){let r=new Ze(x0(e));return n.forEach((i,s)=>{ku(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return qs()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Si(n)),this.Ji.getDocumentsMatchingQuery(e,n,Rr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class XR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Pe(ue),this._s=new vs(s=>pf(s),mf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function JR(t,e,n,r){return new XR(t,e,n,r)}async function X0(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function ZR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let S=L.resolve();return y.forEach(P=>{S=S.next(()=>f.getEntry(u,P)).next(N=>{const O=h.docVersions.get(P);de(O!==null),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function J0(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function eC(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let S=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(nt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(N,O,A){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(y,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=Un(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(tC(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Z.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function tC(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function nC(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rC(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Xh(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function bg(t,e,n){const r=ee(t);let i=Z.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=ee(u),y=m._s.get(f);return y!==void 0?L.resolve(m.os.get(y)):m.Ur.getTargetData(h,f)}(r,o,vn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ie())).next(l=>(iC(r,Kk(e),l),{documents:l,Ts:s})))}function iC(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Lg{constructor(){this.activeTargetIds=Zk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sC{constructor(){this.so=new Lg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Lg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class oC{_o(e){}shutdown(){}}/**
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
 */class Mg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ga=null;function Oc(){return Ga===null?Ga=function(){return 268435456+Math.round(2147483648*Math.random())}():Ga++,"0x"+Ga.toString(16)}/**
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
 */const aC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const lt="WebChannelConnection";class uC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Oc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw is("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=aC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Oc();return new Promise((o,l)=>{const u=new d0;u.setWithCredentials(!0),u.listenOnce(f0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hl.NO_ERROR:const f=u.getResponseJson();q(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case hl.TIMEOUT:q(lt,`RPC '${e}' ${s} timed out`),l(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const m=u.getStatus();if(q(lt,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const P=function(O){const A=O.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(A)>=0?A:b.UNKNOWN}(S.status);l(new $(P,S.message))}else l(new $(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(b.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{q(lt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Oc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=g0(),l=m0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(lt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,S=!1;const P=new lC({Io:O=>{S?q(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(y||(q(lt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),q(lt,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},To:()=>m.close()}),N=(O,A,_)=>{O.listen(A,k=>{try{_(k)}catch(V){setTimeout(()=>{throw V},0)}})};return N(m,Ys.EventType.OPEN,()=>{S||(q(lt,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(m,Ys.EventType.CLOSE,()=>{S||(S=!0,q(lt,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(m,Ys.EventType.ERROR,O=>{S||(S=!0,is(lt,`RPC '${e}' stream ${i} transport errored:`,O),P.So(new $(b.UNAVAILABLE,"The operation could not be completed")))}),N(m,Ys.EventType.MESSAGE,O=>{var A;if(!S){const _=O.data[0];de(!!_);const k=_,V=k.error||((A=k[0])===null||A===void 0?void 0:A.error);if(V){q(lt,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let F=function(w){const I=Le[w];if(I!==void 0)return z0(I)}(U),E=V.message;F===void 0&&(F=b.INTERNAL,E="Unknown error status: "+U+" with message "+V.message),S=!0,P.So(new $(F,E)),m.close()}else q(lt,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),N(l,p0.STAT_EVENT,O=>{O.stat===Uh.PROXY?q(lt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Uh.NOPROXY&&q(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function bc(){return typeof document<"u"?document:null}/**
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
 */function xu(t){return new _R(t,!0)}/**
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
 */class Z0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ew{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Z0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cC extends ew{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=TR(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?_n(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Yh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Hh(u)?{documents:AR(s,u)}:{query:kR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=H0(s,o.resumeToken);const h=Kh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=Xl(s,o.snapshotVersion.toTimestamp());const h=Kh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=CR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Yh(this.serializer),n.removeTarget=e,this.a_(n)}}class hC extends ew{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=SR(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Yh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IR(this.serializer,r))};this.a_(n)}}/**
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
 */class dC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Gh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(b.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Gh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(b.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Fn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class pC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{li(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.L_.add(4),await na(h),h.q_.set("Unknown"),h.L_.delete(4),await Nu(h)}(this))})}),this.q_=new fC(r,i)}}async function Nu(t){if(li(t))for(const e of t.B_)await e(!0)}async function na(t){for(const e of t.B_)await e(!1)}function tw(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Rf(n)?kf(n):_s(n).r_()&&Af(n,e))}function Sf(t,e){const n=ee(t),r=_s(n);n.N_.delete(e),r.r_()&&nw(n,e),n.N_.size===0&&(r.r_()?r.o_():li(n)&&n.q_.set("Unknown"))}function Af(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).A_(e)}function nw(t,e){t.Q_.xe(e),_s(t).R_(e)}function kf(t){t.Q_=new mR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.q_.v_()}function Rf(t){return li(t)&&!_s(t).n_()&&t.N_.size>0}function li(t){return ee(t).L_.size===0}function rw(t){t.Q_=void 0}async function mC(t){t.q_.set("Online")}async function gC(t){t.N_.forEach((e,n)=>{Af(t,e)})}async function yC(t,e){rw(t),Rf(t)?(t.q_.M_(e),kf(t)):t.q_.set("Unknown")}async function vC(t,e,n){if(t.q_.set("Online"),e instanceof $0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof pl?t.Q_.Ke(e):e instanceof B0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await J0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),nw(s,u);const m=new ur(f.target,u,h,f.sequenceNumber);Af(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!Zo(e))throw e;t.L_.add(1),await na(t),t.q_.set("Offline"),n||(n=()=>J0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Nu(t)})}function iw(t,e){return e().catch(n=>Jl(t,n,e))}async function Du(t){const e=ee(t),n=Pr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;_C(e);)try{const i=await nC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,wC(e,i)}catch(i){await Jl(e,i)}sw(e)&&ow(e)}function _C(t){return li(t)&&t.O_.length<10}function wC(t,e){t.O_.push(e);const n=Pr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function sw(t){return li(t)&&!Pr(t).n_()&&t.O_.length>0}function ow(t){Pr(t).start()}async function EC(t){Pr(t).p_()}async function TC(t){const e=Pr(t);for(const n of t.O_)e.m_(n.mutations)}async function IC(t,e,n){const r=t.O_.shift(),i=vf.from(r,e,n);await iw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Du(t)}async function SC(t,e){e&&Pr(t).V_&&await async function(r,i){if(function(o){return dR(o)&&o!==b.ABORTED}(i.code)){const s=r.O_.shift();Pr(r).s_(),await iw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Du(r)}}(t,e),sw(t)&&ow(t)}async function jg(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=li(n);n.L_.add(3),await na(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Nu(n)}async function AC(t,e){const n=ee(t);e?(n.L_.delete(2),await Nu(n)):e||(n.L_.add(2),await na(n),n.q_.set("Unknown"))}function _s(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new cC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:mC.bind(null,t),Ro:gC.bind(null,t),mo:yC.bind(null,t),d_:vC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Rf(t)?kf(t):t.q_.set("Unknown")):(await t.K_.stop(),rw(t))})),t.K_}function Pr(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new hC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:EC.bind(null,t),mo:SC.bind(null,t),f_:TC.bind(null,t),g_:IC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Du(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Cf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Cf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Zo(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fg{constructor(){this.W_=new Pe(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new us(e,n,Qi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class kC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class RC{constructor(){this.queries=Ug(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=Ug(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(b.ABORTED,"Firestore shutting down"))}}function Ug(){return new vs(t=>P0(t),Au)}async function aw(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new kC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Pf(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&xf(n)}async function lw(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CC(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&xf(n)}function PC(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function xf(t){t.Y_.forEach(e=>{e.next()})}var Jh,zg;(zg=Jh||(Jh={})).ea="default",zg.Cache="cache";class uw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Jh.Cache}}/**
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
 */class cw{constructor(e){this.key=e}}class hw{constructor(e){this.key=e}}class xC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=x0(e),this.Ra=new Qi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Fg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),S=ku(this.query,m)?m:null,P=!!y&&this.mutatedKeys.has(y.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;y&&S?y.data.isEqual(S.data)?P!==N&&(r.track({type:3,doc:S}),O=!0):this.ga(y,S)||(r.track({type:2,doc:S}),O=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!y&&S?(r.track({type:0,doc:S}),O=!0):y&&!S&&(r.track({type:1,doc:y}),O=!0,(u||h)&&(l=!0)),O&&(S?(o=o.add(S),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(S,P){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return N(S)-N(P)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new us(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new hw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return us.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class NC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DC{constructor(e){this.key=e,this.va=!1}}class VC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new vs(l=>P0(l),Au),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(K.comparator),this.Na=new Map,this.La=new Ef,this.Ba={},this.ka=new Map,this.qa=ls.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function OC(t,e,n=!0){const r=yw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await dw(r,e,n,!0),i}async function bC(t,e){const n=yw(t);await dw(n,e,!0,!1)}async function dw(t,e,n,r){const i=await rC(t.localStore,vn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await LC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tw(t.remoteStore,i),l}async function LC(t,e,n,r,i){t.Ka=(m,y,S)=>async function(N,O,A,_){let k=O.view.ma(A);k.ns&&(k=await bg(N.localStore,O.query,!1).then(({documents:E})=>O.view.ma(E,k)));const V=_&&_.targetChanges.get(O.targetId),U=_&&_.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(k,N.isPrimaryClient,V,U);return $g(N,O.targetId,F.wa),F.snapshot}(t,m,y,S);const s=await bg(t.localStore,e,!0),o=new xC(e,s.Ts),l=o.ma(s.documents),u=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);$g(t,n,h.wa);const f=new NC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function MC(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Au(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Xh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sf(r.remoteStore,i.targetId),Zh(r,i.targetId)}).catch(Jo)):(Zh(r,i.targetId),await Xh(r.localStore,i.targetId,!0))}async function jC(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sf(n.remoteStore,r.targetId))}async function FC(t,e,n){const r=WC(t);try{const i=await function(o,l){const u=ee(o),h=Fe.now(),f=l.reduce((S,P)=>S.add(P.key),ie());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Un(),N=ie();return u.cs.getEntries(S,f).next(O=>{P=O,P.forEach((A,_)=>{_.isValidDocument()||(N=N.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(O=>{m=O;const A=[];for(const _ of l){const k=aR(_,m.get(_.key).overlayedDocument);k!=null&&A.push(new Or(_.key,k,E0(k.value.mapValue),Wt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,A,l)}).next(O=>{y=O;const A=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(S,O.batchId,A)})}).then(()=>({batchId:y.batchId,changes:D0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Pe(ue)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await ra(r,i.changes),await Du(r.remoteStore)}catch(i){const s=Pf(i,"Failed to persist write");n.reject(s)}}async function fw(t,e){const n=ee(t);try{const r=await eC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await ra(n,r,e)}catch(r){await Jo(r)}}function Bg(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&xf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UC(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Pe(K.comparator);o=o.insert(s,ht.newNoDocument(s,Z.min()));const l=ie().add(s),u=new Pu(Z.min(),new Map,new Pe(ue),o,l);await fw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Nf(r)}else await Xh(r.localStore,e,!1).then(()=>Zh(r,e,n)).catch(Jo)}async function zC(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await ZR(n.localStore,e);mw(n,r,null),pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,i)}catch(i){await Jo(i)}}async function BC(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(de(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);mw(r,e,n),pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,i)}catch(i){await Jo(i)}}function pw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function mw(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||gw(t,r)})}function gw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Nf(t))}function $g(t,e,n){for(const r of n)r instanceof cw?(t.La.addReference(r.key,e),$C(t,r)):r instanceof hw?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||gw(t,r.key)):J()}function $C(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Nf(t))}function Nf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new DC(n)),t.Oa=t.Oa.insert(n,r),tw(t.remoteStore,new ur(vn(Su(n.path)),r,"TargetPurposeLimboResolution",cf.oe))}}async function ra(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=If.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,y=>L.forEach(y.$i,S=>f.persistence.referenceDelegate.addReference(m,y.targetId,S)).next(()=>L.forEach(y.Ui,S=>f.persistence.referenceDelegate.removeReference(m,y.targetId,S)))))}catch(m){if(!Zo(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const S=f.os.get(y),P=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,N)}}}(r.localStore,s))}async function HC(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await X0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(b.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.hs)}}function qC(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function yw(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UC.bind(null,e),e.Ca.d_=CC.bind(null,e.eventManager),e.Ca.$a=PC.bind(null,e.eventManager),e}function WC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BC.bind(null,e),e}class Zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return JR(this.persistence,new YR,e.initialUser,this.serializer)}Ga(e){return new KR(Tf.Zr,this.serializer)}Wa(e){return new sC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zl.provider={build:()=>new Zl};class ed{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HC.bind(null,this.syncEngine),await AC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RC}()}createDatastore(e){const n=xu(e.databaseInfo.databaseId),r=function(s){return new uC(s)}(e.databaseInfo);return function(s,o,l,u){return new dC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new pC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Bg(this.syncEngine,n,0),function(){return Mg.D()?new Mg:new oC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new VC(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await na(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ed.provider={build:()=>new ed};/**
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
 */class vw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class KC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=v0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await X0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GC(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jg(e.remoteStore,i)),t._onlineComponents=e}async function GC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new Zl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Lc(t,new Zl);return t._offlineComponents}async function _w(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Hg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Hg(t,new ed))),t._onlineComponents}function QC(t){return _w(t).then(e=>e.syncEngine)}async function td(t){const e=await _w(t),n=e.eventManager;return n.onListen=OC.bind(null,e.syncEngine),n.onUnlisten=MC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=bC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jC.bind(null,e.syncEngine),n}function YC(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new vw({next:y=>{f.Za(),o.enqueueAndForget(()=>lw(s,m));const S=y.docs.has(l);!S&&y.fromCache?h.reject(new $(b.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&u&&u.source==="server"?h.reject(new $(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new uw(Su(l.path),f,{includeMetadataChanges:!0,_a:!0});return aw(s,m)}(await td(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ww(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qg=new Map;/**
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
 */function Ew(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XC(t,e,n,r){if(e===!0&&r===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wg(t){if(!K.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kg(t){if(K.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vu(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Gg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ww((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ou{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mk;switch(r.type){case"firstParty":return new _k(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qg.get(n);r&&(q("ComponentProvider","Removing Datastore"),qg.delete(n),r.terminate())}(this),Promise.resolve()}}function JC(t,e,n,r={}){var i;const s=(t=Kt(t,Ou))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ut.MOCK_USER;else{l=HI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new $(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(h)}t._authCredentials=new gk(new y0(l,u))}}/**
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
 */class ui{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ui(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class Ir extends ui{constructor(e,n,r){super(e,n,Su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new K(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function Mc(t,e,...n){if(t=tt(t),Ew("collection","path",e),t instanceof Ou){const r=Ee.fromString(e,...n);return Kg(r),new Ir(t,null,r)}{if(!(t instanceof dt||t instanceof Ir))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Kg(r),new Ir(t.firestore,null,r)}}function gt(t,e,...n){if(t=tt(t),arguments.length===1&&(e=v0.newId()),Ew("doc","path",e),t instanceof Ou){const r=Ee.fromString(e,...n);return Wg(r),new dt(t,null,new K(r))}{if(!(t instanceof dt||t instanceof Ir))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Wg(r),new dt(t.firestore,t instanceof Ir?t.converter:null,new K(r))}}/**
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
 */class Qg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Z0(this,"async_queue_retry"),this.Vu=()=>{const r=bc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Cf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Yg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class xr extends Ou{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qg(e),this._firestoreClient=void 0,await e}}}function ZC(t,e){const n=typeof t=="object"?t:P_(),r=typeof t=="string"?t:"(default)",i=Zd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=BI("firestore");s&&JC(i,...s)}return i}function Df(t){if(t._terminated)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eP(t),t._firestoreClient}function eP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Dk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ww(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new KC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(nt.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lu{constructor(e){this._methodName=e}}/**
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
 */class Vf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class Of{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const tP=/^__.*__$/;class nP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class Tw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Iw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class bf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new bf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return eu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Iw(this.Cu)&&tP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xu(e)}Qu(e,n,r,i=!1){return new bf({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mu(t){const e=t._freezeSettings(),n=xu(t._databaseId);return new rP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sw(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Mf("Data must be an object, but it was:",o,r);const l=Aw(r,o);let u,h;if(s.merge)u=new Vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=nd(e,m,n);if(!o.contains(y))throw new $(b.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Rw(f,y)||f.push(y)}u=new Vt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new nP(new St(l),u,h)}class ju extends Lu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ju}}class Lf extends Lu{_toFieldTransform(e){return new rR(e.path,new Fo)}isEqual(e){return e instanceof Lf}}function iP(t,e,n,r){const i=t.Qu(1,e,n);Mf("Data must be an object, but it was:",i,r);const s=[],o=St.empty();ai(r,(u,h)=>{const f=jf(e,u,n);h=tt(h);const m=i.Nu(f);if(h instanceof ju)s.push(f);else{const y=ia(h,m);y!=null&&(s.push(f),o.set(f,y))}});const l=new Vt(s);return new Tw(o,l,i.fieldTransforms)}function sP(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[nd(e,r,n)],u=[i];if(s.length%2!=0)throw new $(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(nd(e,s[y])),u.push(s[y+1]);const h=[],f=St.empty();for(let y=l.length-1;y>=0;--y)if(!Rw(h,l[y])){const S=l[y];let P=u[y];P=tt(P);const N=o.Nu(S);if(P instanceof ju)h.push(S);else{const O=ia(P,N);O!=null&&(h.push(S),f.set(S,O))}}const m=new Vt(h);return new Tw(f,m,o.fieldTransforms)}function oP(t,e,n,r=!1){return ia(n,t.Qu(r?4:3,e))}function ia(t,e){if(kw(t=tt(t)))return Mf("Unsupported field value:",e,t),Aw(t,e);if(t instanceof Lu)return function(r,i){if(!Iw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ia(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:Xl(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xl(i.serializer,s)}}if(r instanceof Vf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:H0(i.serializer,r._byteString)};if(r instanceof dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Of)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return gf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Vu(r)}`)}(t,e)}function Aw(t,e){const n={};return _0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ai(t,(r,i)=>{const s=ia(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function kw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Vf||t instanceof cs||t instanceof dt||t instanceof Lu||t instanceof Of)}function Mf(t,e,n){if(!kw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function nd(t,e,n){if((e=tt(e))instanceof bu)return e._internalPath;if(typeof e=="string")return jf(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const aP=new RegExp("[~\\*/\\[\\]]");function jf(t,e,n){if(e.search(aP)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bu(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(b.INVALID_ARGUMENT,l+t+u)}function Rw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Cw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lP extends Cw{data(){return super.data()}}function Ff(t,e){return typeof e=="string"?jf(t,e):e instanceof bu?e._internalPath:e._delegate._internalPath}/**
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
 */function uP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uf{}class Pw extends Uf{}function cP(t,e,...n){let r=[];e instanceof Uf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Bf).length,l=s.filter(u=>u instanceof zf).length;if(o>1||o>0&&l>0)throw new $(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class zf extends Pw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zf(e,n,r)}_apply(e){const n=this._parse(e);return xw(e._query,n),new ui(e.firestore,e.converter,qh(e._query,n))}_parse(e){const n=Mu(e.firestore);return function(s,o,l,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Jg(m,f);const S=[];for(const P of m)S.push(Xg(u,s,P));y={arrayValue:{values:S}}}else y=Xg(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Jg(m,f),y=oP(l,o,m,f==="in"||f==="not-in");return je.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Bf extends Uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)xw(o,u),o=qh(o,u)}(e._query,n),new ui(e.firestore,e.converter,qh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $f extends Pw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $f(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jo(s,o)}(e._query,this._field,this._direction);return new ui(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ys(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hP(t,e="asc"){const n=e,r=Ff("orderBy",t);return $f._create(r,n)}function Xg(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new $(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C0(e)&&n.indexOf("/")!==-1)throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!K.isDocumentKey(r))throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vg(t,new K(r))}if(n instanceof dt)return vg(t,n._key);throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vu(n)}.`)}function Jg(t,e){if(!Array.isArray(t)||t.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dP{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ai(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Oe(o.doubleValue));return new Of(s)}convertGeoPoint(e){return new Vf(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=df(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bo(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);de(Y0(r));const i=new Lo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Nw(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dw extends Cw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ff("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends Dw{data(e={}){return super.data(e)}}class fP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:pP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function Zg(t){t=Kt(t,dt);const e=Kt(t.firestore,xr);return YC(Df(e),t._key).then(n=>Ow(e,t,n))}class Vw extends dP{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function mP(t,e,n){t=Kt(t,dt);const r=Kt(t.firestore,xr),i=Nw(t.converter,e);return Fu(r,[Sw(Mu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Wt.none())])}function zt(t,e,n,...r){t=Kt(t,dt);const i=Kt(t.firestore,xr),s=Mu(i);let o;return o=typeof(e=tt(e))=="string"||e instanceof bu?sP(s,"updateDoc",t._key,e,n,r):iP(s,"updateDoc",t._key,e),Fu(i,[o.toMutation(t._key,Wt.exists(!0))])}function gP(t){return Fu(Kt(t.firestore,xr),[new yf(t._key,Wt.none())])}function ey(t,e){const n=Kt(t.firestore,xr),r=gt(t),i=Nw(t.converter,e);return Fu(n,[Sw(Mu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function ty(t,...e){var n,r,i;t=tt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yg(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yg(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof dt)h=Kt(t.firestore,xr),f=Su(t._key.path),u={next:m=>{e[o]&&e[o](Ow(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Kt(t,ui);h=Kt(m.firestore,xr),f=m._query;const y=new Vw(h);u={next:S=>{e[o]&&e[o](new fP(h,y,m,S))},error:e[o+1],complete:e[o+2]},uP(t._query)}return function(y,S,P,N){const O=new vw(N),A=new uw(S,O,P);return y.asyncQueue.enqueueAndForget(async()=>aw(await td(y),A)),()=>{O.Za(),y.asyncQueue.enqueueAndForget(async()=>lw(await td(y),A))}}(Df(h),f,l,u)}function Fu(t,e){return function(r,i){const s=new Tr;return r.asyncQueue.enqueueAndForget(async()=>FC(await QC(r),i,s)),s.promise}(Df(t),e)}function Ow(t,e,n){const r=n.docs.get(e._key),i=new Vw(t);return new Dw(t,i,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}function Ti(){return new Lf("serverTimestamp")}(function(e,n=!0){(function(i){gs=i})(ps),rs(new ei("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new xr(new yk(r.getProvider("auth-internal")),new Ek(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),wr(fg,"4.7.3",e),wr(fg,"4.7.3","esm2017")})();/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Se=(t,e)=>{const n=ne.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>ne.createElement("svg",{ref:f,...yP,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${vP(t)}`,l].join(" "),...h},[...e.map(([m,y])=>ne.createElement(m,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=Se("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=Se("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=Se("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=Se("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=Se("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=Se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=Se("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=Se("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=Se("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=Se("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=Se("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=Se("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=Se("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=Se("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=Se("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Se("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=Se("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=Se("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=Se("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Se("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Se("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=Se("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=Se("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=Se("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),OP={apiKey:"AIzaSyDyAeeL97KNbjZgajcLostxNoOYWyYfsQ4",authDomain:"thepact-b80ae.firebaseapp.com",projectId:"thepact-b80ae",storageBucket:"thepact-b80ae.firebasestorage.app",messagingSenderId:"524158355276",appId:"1:524158355276:web:6ac0a6339212782551f1e9",measurementId:"G-SQWK4KE26X"},jw=C_(OP),sy=fk(jw),Ge=ZC(jw),Tt=({children:t,onClick:e,disabled:n,className:r="",variant:i="primary",type:s="button",size:o="md"})=>{const l={primary:"bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed",secondary:"bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 disabled:border-slate-300 disabled:text-slate-300",danger:"bg-red-50 text-red-600 border-2 border-red-100 hover:bg-red-100 disabled:opacity-50",success:"bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300"},u={sm:"px-2 py-1 text-xs",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-lg"};return v.jsx("button",{type:s,onClick:e,disabled:n,className:`rounded-lg font-bold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${l[i]} ${u[o]} ${r}`,children:t})},Ii=({children:t,className:e="",...n})=>v.jsx("div",{className:`bg-white rounded-xl shadow-xl border-2 border-slate-900 overflow-hidden ${e}`,...n,children:t}),oy=({isOpen:t,onClose:e,title:n,children:r})=>t?v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in",children:v.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]",children:[v.jsxs("div",{className:"bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center flex-shrink-0",children:[v.jsx("h3",{className:"font-bold text-lg text-slate-900",children:n}),v.jsx("button",{onClick:e,className:"text-slate-400 hover:text-slate-600",children:v.jsx(VP,{size:24})})]}),v.jsx("div",{className:"p-6 overflow-y-auto",children:r})]})}):null,bP=({progress:t})=>v.jsx("div",{className:"h-2 w-full bg-slate-100 rounded-full overflow-hidden",children:v.jsx("div",{className:"h-full bg-green-500 transition-all duration-500 ease-out",style:{width:`${t}%`}})}),LP=({onSave:t})=>{const e=ne.useRef(null),[n,r]=ne.useState(!1),[i,s]=ne.useState(!1),[o,l]=ne.useState(null);ne.useEffect(()=>{const S=e.current;if(S){S.width=S.offsetWidth,S.height=200;const P=S.getContext("2d");P.lineWidth=2,P.lineCap="round",P.strokeStyle="#0f172a"}},[]);const u=S=>{const{offsetX:P,offsetY:N}=m(S),O=e.current.getContext("2d");O.beginPath(),O.moveTo(P,N),r(!0)},h=S=>{if(!n)return;const{offsetX:P,offsetY:N}=m(S),O=e.current.getContext("2d");O.lineTo(P,N),O.stroke(),s(!0)},f=()=>{r(!1),l(e.current.toDataURL())},m=S=>{if(S.touches&&S.touches[0]){const P=e.current.getBoundingClientRect();return{offsetX:S.touches[0].clientX-P.left,offsetY:S.touches[0].clientY-P.top}}return{offsetX:S.nativeEvent.offsetX,offsetY:S.nativeEvent.offsetY}},y=()=>{e.current.getContext("2d").clearRect(0,0,e.current.width,e.current.height),s(!1),l(null)};return v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"relative",children:[v.jsx("canvas",{ref:e,className:"w-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg cursor-crosshair touch-none",onMouseDown:u,onMouseMove:h,onMouseUp:f,onMouseLeave:f,onTouchStart:u,onTouchMove:h,onTouchEnd:f}),!i&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none text-slate-300 text-sm font-bold uppercase",children:"Sign Here"}),i&&v.jsx("button",{onClick:y,className:"absolute top-2 right-2 p-1 bg-white border border-slate-200 rounded text-slate-400 hover:text-red-500",children:v.jsx(kP,{size:16})})]}),i&&v.jsx(Tt,{onClick:()=>t(o),variant:"success",className:"w-full py-3",children:"Accept Signature"})]})},ay=({task:t,user:e,isLocked:n,isNext:r,onClick:i,onToggleChecklist:s,onAddChecklist:o})=>{var V,U,F,E;const[l,u]=ne.useState(!1),[h,f]=ne.useState(""),m=t.status,y=t.creator===e,S=t.type==="joint",P=((V=t.checklist)==null?void 0:V.length)||0,N=((U=t.checklist)==null?void 0:U.filter(g=>g.done).length)||0,O=P===0?0:Math.round(N/P*100);let A=v.jsx("div",{className:"w-4 h-4 rounded-full bg-slate-300"}),_="bg-slate-200 border-slate-300 text-slate-400";m==="completed"?(A=v.jsx(tu,{size:24}),_="bg-green-500 border-green-600 text-white"):m==="pending"?(A=y?v.jsx(Hf,{size:24,className:"animate-pulse"}):v.jsx(bw,{size:24,className:"animate-pulse"}),_="bg-yellow-100 border-yellow-400 text-yellow-600 hover:bg-yellow-200 cursor-pointer"):(r||S)&&(A=S?v.jsx(Handshake,{size:20}):y?v.jsx(RP,{size:20}):v.jsx(Lw,{size:20}),_=y||S?"bg-white border-blue-500 text-blue-500 hover:bg-blue-50 cursor-pointer":"bg-slate-100 border-slate-300 text-slate-400");const k=()=>{n&&m!=="completed"||i()};return v.jsxs("div",{className:`relative flex gap-4 transition-all duration-500 ${n?"opacity-50 grayscale":"opacity-100"}`,children:[v.jsx("div",{className:"w-16 flex-shrink-0 flex justify-center z-10 pt-2",children:v.jsx("button",{onClick:k,disabled:n||m==="completed",className:`w-12 h-12 rounded-full border-4 flex items-center justify-center shadow-sm transition-transform active:scale-95 ${_}`,children:A})}),v.jsxs("div",{className:`flex-1 bg-white rounded-xl border-2 shadow-sm overflow-hidden ${m==="pending"?"border-yellow-400 ring-4 ring-yellow-400/20":r?"border-slate-400":"border-slate-200"}`,children:[v.jsxs("div",{className:"p-4",children:[v.jsxs("div",{className:"flex justify-between items-start mb-1",children:[v.jsx("span",{className:`text-xs font-bold uppercase px-2 py-0.5 rounded ${t.creator==="joint"?"bg-purple-100 text-purple-800":"bg-slate-100 text-slate-600"}`,children:t.creatorName}),m==="pending"&&v.jsx("span",{className:"text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-bold",children:"In Review"})]}),v.jsx("p",{className:`font-medium text-lg leading-snug cursor-pointer ${m==="completed"?"line-through text-slate-400":"text-slate-800"}`,onClick:k,children:t.text}),v.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[v.jsx("div",{className:"flex-1",children:v.jsx(bP,{progress:m==="completed"?100:O})}),v.jsx("button",{onClick:()=>u(!l),className:"text-slate-400 hover:text-slate-600 p-1",children:l?v.jsx(SP,{size:18}):v.jsx(IP,{size:18})})]})]}),l&&v.jsxs("div",{className:"bg-slate-50 border-t border-slate-200 p-3 space-y-2 animate-in slide-in-from-top-2",children:[((F=t.checklist)==null?void 0:F.length)===0&&v.jsx("p",{className:"text-xs text-slate-400 italic",children:"No sub-tasks yet."}),(E=t.checklist)==null?void 0:E.map((g,w)=>v.jsxs("div",{className:"flex items-center gap-2 group",children:[v.jsx("button",{onClick:()=>s(w),disabled:m==="completed",className:`w-5 h-5 rounded border flex items-center justify-center transition-colors ${g.done?"bg-green-500 border-green-500 text-white":"bg-white border-slate-300 hover:border-slate-400"}`,children:g.done&&v.jsx(tu,{size:14})}),v.jsx("span",{className:`text-sm ${g.done?"line-through text-slate-400":"text-slate-700"}`,children:g.text})]},w)),m!=="completed"&&v.jsxs("div",{className:"flex gap-2 pt-2",children:[v.jsx("input",{value:h,onChange:g=>f(g.target.value),className:"flex-1 text-sm border rounded px-2 py-1 outline-none focus:border-slate-500",placeholder:"Add sub-task...",onKeyDown:g=>{g.key==="Enter"&&(o(h),f(""))}}),v.jsx("button",{onClick:()=>{o(h),f("")},className:"bg-slate-200 hover:bg-slate-300 text-slate-600 px-2 rounded font-bold",children:"+"})]})]})]})]})},MP=({tasks:t,firstIncompleteIndex:e,user:n,myRoleKey:r})=>{if(t.length===0)return null;if(e===-1)return v.jsxs("div",{className:"bg-green-100 border border-green-300 p-4 rounded-xl flex items-center gap-4",children:[v.jsx(tu,{className:"text-green-600"}),v.jsx("span",{className:"font-bold text-green-800",children:"All Tasks Complete!"})]});const i=t[e],s=i.creator===r,o=i.status==="pending";let l,u,h,f;return o?s?(l="Awaiting Approval",u="You submitted the work. Nag your friend to approve it.",h="bg-yellow-50 border-yellow-200",f=v.jsx(Hf,{size:24,className:"text-yellow-600"})):(l="ACTION REQUIRED",u="Review their work and approve it to move forward.",h="bg-yellow-100 border-yellow-400 animate-pulse",f=v.jsx(bw,{size:24,className:"text-yellow-800"})):s?(l="YOUR TURN",u="The chain is stopped until you submit this task.",h="bg-red-50 border-red-200",f=v.jsx(_P,{size:24,className:"text-red-600"})):(l=`${i.creatorName} is working`,u="You are blocked until they finish.",h="bg-slate-50 border-slate-200",f=v.jsx(Mw,{size:24,className:"text-slate-400"})),v.jsxs("div",{className:`p-4 rounded-xl border flex items-center gap-4 shadow-sm transition-colors duration-500 ${h}`,children:[v.jsx("div",{className:"p-2 bg-white/50 rounded-full",children:f}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-bold text-slate-800",children:l}),v.jsx("p",{className:"text-sm opacity-80",children:u})]})]})};function jP(){var Ss,ua,Hn,As,ks,mi,ca,ha,gi,Rs,Cs,qn;const[t,e]=ne.useState(null),[n,r]=ne.useState(null),[i,s]=ne.useState(null),[o,l]=ne.useState([]),[u,h]=ne.useState([]),[f,m]=ne.useState(""),[y,S]=ne.useState(!0),[P,N]=ne.useState(null),[O,A]=ne.useState("loading"),[_,k]=ne.useState(null),[V,U]=ne.useState(""),[F,E]=ne.useState("chain"),[g,w]=ne.useState(!1),[I,C]=ne.useState(""),[R,T]=ne.useState(null),[mt,cn]=ne.useState(""),[$n,jt]=ne.useState(""),[B,Y]=ne.useState(null),[Q,ye]=ne.useState(""),[ce,Ae]=ne.useState("We solemnly swear to keep the chain moving. If one fails, both fail."),Et=ne.useRef(null),Ft=ne.useRef(0);ne.useEffect(()=>{(async()=>{try{await Y1(sy)}catch(G){console.error(G),N(G.message),S(!1)}})();const te=nA(sy,G=>{if(e(G),G){const pe=localStorage.getItem("thepact_profile");pe&&k(JSON.parse(pe));const ve=localStorage.getItem("thepact_active_code");ve&&pe?r(ve):pe?(A("lobby"),S(!1)):(A("profile"),S(!1)),di()}});return()=>te()},[]),ne.useEffect(()=>{if(!t||!n)return;const W=gt(Ge,"pacts",n),te=ty(W,ve=>{var Pt;if(ve.exists()){const j=ve.data();if(s(j),Et.current||m(j.notes||""),j.status==="active"){const Ne=sessionStorage.getItem(`cert_seen_${n}`);A(me=>me==="dashboard"||Ne?"dashboard":"certificate")}else(j.status==="waiting"||j.status==="signing")&&A("contract_room");if(j.notification&&_&&j.notification.toEmail===_.email){const Ne=((Pt=j.notification.timestamp)==null?void 0:Pt.toMillis())||0;Ne>Ft.current&&Date.now()-Ne<6e4&&(Ft.current=Ne,ws(j.notification.title,j.notification.body))}S(!1)}else ci()},ve=>{console.error("Sync Error:",ve),S(!1)}),G=cP(Mc(Ge,"pacts",n,"tasks"),hP("createdAt","asc")),pe=ty(G,ve=>{const Pt=ve.docs.map(j=>({id:j.id,...j.data()}));l(Pt.filter(j=>j.type!=="joint")),h(Pt.filter(j=>j.type==="joint"))});return()=>{te(),pe()}},[t,n]);const Yt=(W,te,G)=>{const pe={name:W,email:te,pin:G};localStorage.setItem("thepact_profile",JSON.stringify(pe)),k(pe),A("lobby")},Xt=async()=>{S(!0);const W=Math.floor(1e5+Math.random()*9e5).toString();await mP(gt(Ge,"pacts",W),{host:{..._,signature:null},guest:null,terms:ce,code:W,status:"waiting",createdAt:Ti(),notes:""}),localStorage.setItem("thepact_active_code",W),r(W)},Uu=async()=>{var Ne,me;if(Q.length!==6)return alert("Code must be 6 digits");S(!0);const W=gt(Ge,"pacts",Q),te=await Zg(W);if(!te.exists())return S(!1),alert("Pact not found.");const G=te.data(),pe=_.email,ve=((Ne=G.host)==null?void 0:Ne.email)===pe,Pt=((me=G.guest)==null?void 0:me.email)===pe,j=!G.guest;if(ve||Pt)localStorage.setItem("thepact_active_code",Q),r(Q);else if(j){if(G.status!=="waiting")return S(!1),alert("This pact is active/full.");await zt(W,{guest:{..._,signature:null},status:"signing"}),localStorage.setItem("thepact_active_code",Q),r(Q)}else S(!1),alert("Pact full.")},ci=()=>{localStorage.removeItem("thepact_active_code"),r(null),s(null),A("lobby"),S(!1)},hi=async()=>{confirm("DANGER: Permanently delete this pact?")&&(S(!0),await gP(gt(Ge,"pacts",n)),ci())},di=async()=>{"Notification"in window&&Notification.permission==="default"&&await Notification.requestPermission()},ws=(W,te)=>{if(Notification.permission==="granted")try{new Notification(W,{body:te,icon:"https://cdn-icons-png.flaticon.com/512/2910/2910768.png"})}catch{}},Jt=async(W,te,G)=>{n&&await zt(gt(Ge,"pacts",n),{notification:{toEmail:W,title:te,body:G,timestamp:Fe.now()}})},Zt=((Ss=i==null?void 0:i.host)==null?void 0:Ss.email)===(_==null?void 0:_.email),xe=Zt?"userA":"userB",sa=Zt?"userB":"userA",br=Zt?(ua=i==null?void 0:i.host)==null?void 0:ua.name:(Hn=i==null?void 0:i.guest)==null?void 0:Hn.name,rt=Zt?(As=i==null?void 0:i.guest)==null?void 0:As.email:(ks=i==null?void 0:i.host)==null?void 0:ks.email,oa=async W=>{var j,Ne;const te=gt(Ge,"pacts",n),G=await Zg(te);if(!G.exists())return;const pe=G.data(),ve={};Zt?ve["host.signature"]=W:ve["guest.signature"]=W,(Zt?(j=pe.guest)==null?void 0:j.signature:(Ne=pe.host)==null?void 0:Ne.signature)&&(ve.status="active",ve.signedAt=Ti()),await zt(te,ve)},fi=async(W,te)=>{const G=[...W.checklist];G[te].done=!G[te].done,await zt(gt(Ge,"pacts",n,"tasks",W.id),{checklist:G})},Es=async(W,te)=>{if(!te.trim())return;const G=[...W.checklist||[],{text:te,done:!1}];await zt(gt(Ge,"pacts",n,"tasks",W.id),{checklist:G})},zu=async W=>{W.preventDefault(),V.trim()&&(await ey(Mc(Ge,"pacts",n,"tasks"),{text:V,creator:xe,creatorName:br,status:"open",type:"solo",checklist:[],rejectionCount:0,createdAt:Ti()}),U(""),rt&&Jt(rt,"New Chain Link",`${br} added a task.`))},Ts=async()=>{I.trim()&&(await ey(Mc(Ge,"pacts",n,"tasks"),{text:I,creator:"joint",creatorName:"JOINT MISSION",status:"proposed",type:"joint",checklist:[],approvals:{[xe]:!0,[sa]:!1},initiator:xe,createdAt:Ti()}),w(!1),C(""),rt&&Jt(rt,"Mission Proposal",`${br} proposed a joint mission.`))},Is=async W=>{const te=gt(Ge,"pacts",n,"tasks",W.id),G={...W.approvals,[xe]:!0},pe=G.userA&&G.userB;await zt(te,{approvals:G,status:pe?"open":"proposed"}),pe&&rt&&Jt(rt,"Mission Active","Joint operation authorized.")},aa=async()=>{const W=gt(Ge,"pacts",n,"tasks",R.id);await zt(W,{status:"pending",submittedAt:Ti(),submission:{note:mt,link:$n,file:B}}),T(null),rt&&Jt(rt,"Task Submitted",`${br} turned in work.`)},Ue=async()=>{const W=gt(Ge,"pacts",n,"tasks",R.id);if(R.type==="joint"){const G={...R.completionSignatures||{userA:!1,userB:!1},[xe]:!0};let pe=R.status;G.userA&&G.userB&&(pe="completed"),await zt(W,{completionSignatures:G,status:pe})}else await zt(W,{status:"completed",completedAt:Ti(),approvedBy:xe}),rt&&Jt(rt,"Approved!","The chain moves forward.");T(null)},We=async()=>{const W=gt(Ge,"pacts",n,"tasks",R.id);await zt(W,{status:"open",rejectionCount:(R.rejectionCount||0)+1,submission:null}),T(null),rt&&Jt(rt,"REJECTED","Your work was not accepted.")},pi=W=>{const te=W.target.files[0];if(!te)return;if(te.size>3e5)return alert("File too large! Max 300KB.");const G=new FileReader;G.onloadend=()=>Y(G.result),G.readAsDataURL(te)},la=()=>{rt&&Jt(rt,"Wake Up!",`${br} is waiting for you!`),alert("Nudge sent!")};if(y)return v.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:v.jsx("div",{className:"animate-spin text-4xl",children:"⛓️"})});if(P)return v.jsxs("div",{className:"p-8 text-center",children:[v.jsx(wP,{className:"mx-auto text-red-500 mb-4"}),v.jsx("h2",{className:"font-bold",children:"Auth Error"}),v.jsx("p",{className:"text-sm",children:P})]});if(O==="profile")return v.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center p-4",children:v.jsxs(Ii,{className:"max-w-md w-full p-8",children:[v.jsx(ry,{className:"w-16 h-16 mx-auto text-slate-900 mb-6"}),v.jsx("h1",{className:"text-2xl font-black text-center mb-6",children:"Create Identity"}),v.jsxs("form",{onSubmit:W=>{W.preventDefault();const te=new FormData(W.target);Yt(te.get("name"),te.get("email"),te.get("pin"))},className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Codename"}),v.jsx("input",{name:"name",required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3 font-bold",placeholder:"e.g. Shadow"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Email (ID)"}),v.jsx("input",{name:"email",type:"email",required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3",placeholder:"you@email.com"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Security PIN"}),v.jsx("input",{name:"pin",type:"password",maxLength:4,required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3 tracking-widest font-mono",placeholder:"••••"})]}),v.jsx(Tt,{type:"submit",className:"w-full py-4 text-lg",children:"Initialize Identity"})]})]})});if(O==="lobby")return v.jsx("div",{className:"min-h-screen bg-slate-100 flex items-center justify-center p-4",children:v.jsxs("div",{className:"max-w-md w-full space-y-6",children:[v.jsxs("div",{className:"text-center",children:[v.jsx("h1",{className:"text-4xl font-black text-slate-900 mb-2",children:"THE PACT"}),v.jsxs("p",{className:"text-slate-500",children:["Welcome, ",_.name,". Choose your path."]})]}),v.jsxs("div",{className:"grid gap-4",children:[v.jsxs(Ii,{className:"p-6 hover:border-yellow-500 transition-colors cursor-pointer",onClick:Xt,children:[v.jsx(ny,{className:"w-10 h-10 mb-4 text-slate-900"}),v.jsx("h2",{className:"text-xl font-bold mb-2",children:"Draft New Pact"}),v.jsx("p",{className:"text-sm text-slate-500",children:"Start a new contract and invite a partner."})]}),v.jsxs(Ii,{className:"p-6 hover:border-blue-500 transition-colors cursor-pointer",children:[v.jsx(Mw,{className:"w-10 h-10 mb-4 text-slate-900"}),v.jsx("h2",{className:"text-xl font-bold mb-2",children:"Join Pact"}),v.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"Enter the 6-digit code from your partner."}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("input",{value:Q,onChange:W=>ye(W.target.value),maxLength:6,className:"flex-1 border-2 border-slate-200 rounded-lg p-2 text-center font-mono font-bold tracking-widest uppercase",placeholder:"CODE"}),v.jsx(Tt,{onClick:Uu,children:"Join"})]})]})]}),v.jsx("div",{className:"text-center",children:v.jsx("button",{onClick:()=>{localStorage.removeItem("thepact_profile"),window.location.reload()},className:"text-xs text-slate-400 underline",children:"Switch Profile"})})]})});if(O==="contract_room"){const W=i.host.email===_.email,te=W?i.host.signature:(mi=i.guest)==null?void 0:mi.signature;return v.jsxs("div",{className:"min-h-screen bg-slate-50 p-4 pb-20 overflow-y-auto",children:[v.jsxs(Tt,{onClick:ci,variant:"secondary",size:"sm",className:"mb-4",children:[v.jsx(EP,{className:"rotate-180",size:16})," Back to Lobby"]}),v.jsxs("div",{className:"max-w-2xl mx-auto bg-white shadow-2xl min-h-[800px] relative border border-slate-200",children:[v.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",style:{backgroundImage:'url("https://www.transparenttextures.com/patterns/cream-paper.png")'}}),v.jsxs("div",{className:"p-12 border-b-2 border-slate-900 text-center",children:[v.jsx("h1",{className:"text-4xl font-serif font-black uppercase tracking-widest mb-4",children:"Official Pact"}),v.jsxs("div",{className:"flex justify-center gap-8 mt-6 font-bold text-lg",children:[v.jsx("div",{className:"border-b-2 border-slate-300 px-4 pb-1 min-w-[150px]",children:i.host.name}),v.jsx("div",{className:"font-serif italic text-slate-400",children:"&"}),v.jsx("div",{className:`border-b-2 px-4 pb-1 min-w-[150px] ${i.guest?"border-slate-300":"text-slate-300 italic border-dashed"}`,children:i.guest?i.guest.name:"Waiting..."})]})]}),v.jsxs("div",{className:"p-12 space-y-8",children:[W&&!i.guest&&v.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 p-6 rounded text-center",children:[v.jsx("h3",{className:"font-bold text-yellow-800 mb-2",children:"Waiting for Partner"}),v.jsx("p",{className:"text-sm text-yellow-700 mb-4",children:"Share this code with your friend to join:"}),v.jsx("div",{className:"text-5xl font-mono font-black tracking-widest text-slate-900 bg-white inline-block px-6 py-4 rounded border-2 border-slate-900 border-dashed",children:i.code})]}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-serif font-bold uppercase text-slate-400 text-sm mb-4",children:"Terms of Agreement"}),W&&!i.guest?v.jsx("textarea",{value:ce,onChange:G=>{Ae(G.target.value),zt(gt(Ge,"pacts",n),{terms:G.target.value})},className:"w-full h-32 border-2 border-slate-200 p-4 font-serif text-lg leading-relaxed focus:border-slate-900 outline-none resize-none"}):v.jsx("div",{className:"font-serif text-xl leading-relaxed text-slate-800",children:i.terms})]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 mt-8 border-t-2 border-slate-100",children:[v.jsxs("div",{children:[v.jsx("div",{className:"h-32 border-b-2 border-slate-900 mb-2 flex items-end justify-center",children:i.host.signature?v.jsx("img",{src:i.host.signature,alt:"Host Sig",className:"max-h-24"}):v.jsx("span",{className:"text-slate-300 text-sm italic pb-2",children:"Pending..."})}),v.jsxs("p",{className:"text-center font-serif text-sm uppercase tracking-widest",children:[i.host.name," (Host)"]})]}),v.jsxs("div",{children:[v.jsx("div",{className:"h-32 border-b-2 border-slate-900 mb-2 flex items-end justify-center",children:(ca=i.guest)!=null&&ca.signature?v.jsx("img",{src:i.guest.signature,alt:"Guest Sig",className:"max-h-24"}):v.jsx("span",{className:"text-slate-300 text-sm italic pb-2",children:"Pending..."})}),v.jsxs("p",{className:"text-center font-serif text-sm uppercase tracking-widest",children:[i.guest?i.guest.name:"Guest"," (Partner)"]})]})]})]}),(W&&!te||!W&&i.guest&&!te)&&v.jsxs("div",{className:"p-8 bg-slate-50 border-t border-slate-200",children:[v.jsx("h3",{className:"font-bold text-center mb-4",children:"Draw your signature to accept"}),v.jsx(LP,{onSave:oa})]})]})]})}if(O==="certificate")return v.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4",children:[v.jsx("div",{className:"max-w-2xl w-full bg-white p-2 rounded-lg shadow-2xl animate-in zoom-in duration-500",children:v.jsxs("div",{className:"border-4 border-double border-slate-900 p-8 text-center relative overflow-hidden",children:[v.jsx("div",{className:"absolute top-4 right-4",children:v.jsx(ry,{size:48,className:"text-slate-200"})}),v.jsx("h1",{className:"text-5xl font-serif font-black mb-2 uppercase",children:"It Is Done"}),v.jsx("div",{className:"w-full h-1 bg-slate-900 mb-8"}),v.jsxs("p",{className:"font-serif text-xl italic mb-8",children:["The pact between ",v.jsx("strong",{className:"uppercase",children:i.host.name})," and ",v.jsx("strong",{className:"uppercase",children:i.guest.name})," is sealed."]}),v.jsxs("div",{className:"flex justify-center gap-12 mb-8 opacity-70",children:[v.jsx("img",{src:i.host.signature,className:"h-16",alt:"Sig A"}),v.jsx("img",{src:i.guest.signature,className:"h-16",alt:"Sig B"})]}),v.jsxs("div",{className:"text-xs text-slate-400 font-mono uppercase tracking-widest",children:["Timestamp: ",(ha=i.signedAt)==null?void 0:ha.toDate().toLocaleString()]})]})}),v.jsxs("div",{className:"mt-8 flex gap-4",children:[v.jsxs(Tt,{onClick:()=>window.print(),variant:"secondary",children:[v.jsx(AP,{size:20})," Save"]}),v.jsxs(Tt,{onClick:()=>{sessionStorage.setItem(`cert_seen_${n}`,"true"),A("dashboard")},className:"px-8 py-3 text-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400",children:["Enter The Pact ",v.jsx(PP,{size:20,fill:"currentColor"})]})]})]});if(O==="dashboard"){if(!i||!_)return v.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:v.jsx("div",{className:"animate-spin text-4xl",children:"⛓️"})});const W=o.findIndex(j=>j.status!=="completed"),te=[...o,...u].filter(j=>j.rejectionCount>0),G=u.filter(j=>j.status==="proposed"&&j.status!=="cancelled"),pe=u.filter(j=>j.status==="open"||j.status==="completed"),ve=o.length>0?o[o.length-1].creator:null,Pt=!ve||ve!==xe;return v.jsxs("div",{className:"min-h-screen bg-slate-100 pb-20",children:[v.jsx(oy,{isOpen:g,onClose:()=>w(!1),title:"Propose Joint Mission",children:v.jsxs("div",{className:"space-y-4",children:[v.jsx("input",{value:I,onChange:j=>C(j.target.value),className:"w-full border-2 border-slate-900 rounded-lg p-3 font-bold",placeholder:"Mission Objective...",autoFocus:!0}),v.jsxs(Tt,{onClick:Ts,disabled:!I.trim(),className:"w-full",children:[v.jsx(NP,{size:18})," Send Proposal"]})]})}),R&&v.jsx(oy,{isOpen:!!R,onClose:()=>T(null),title:R.type==="joint"?"Joint Mission":R.creator===xe?"Submit Work":"Review Work",children:v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"bg-slate-50 p-4 rounded-xl border border-slate-200",children:[v.jsx("h2",{className:"font-bold text-xl",children:R.text}),v.jsx("span",{className:"text-xs bg-slate-200 px-2 py-1 rounded",children:R.creatorName})]}),R.type==="joint"&&v.jsxs("div",{className:"space-y-4",children:[v.jsx("div",{className:"grid grid-cols-2 gap-4",children:["userA","userB"].map(j=>{var Wn;const Ne=j==="userA"?i.host.name:i.guest.name,me=(Wn=R.completionSignatures)==null?void 0:Wn[j];return v.jsxs("div",{className:`p-4 rounded border-2 text-center ${me?"bg-green-50 border-green-500":"bg-slate-50"}`,children:[v.jsx("p",{className:"text-xs font-bold uppercase mb-2",children:Ne}),me?v.jsx(tu,{className:"mx-auto text-green-500"}):v.jsx(Hf,{className:"mx-auto text-slate-300"})]},j)})}),R.status!=="completed"&&!((gi=R.completionSignatures)!=null&&gi[xe])&&v.jsxs(Tt,{onClick:Ue,variant:"success",className:"w-full py-4",children:[v.jsx(ny,{size:24})," Sign Off"]})]}),R.type!=="joint"&&R.creator===xe&&R.status==="open"&&v.jsxs("div",{className:"space-y-4",children:[v.jsx("textarea",{value:mt,onChange:j=>cn(j.target.value),className:"w-full border p-3 rounded h-32",placeholder:"Notes..."}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("input",{type:"file",onChange:pi,className:"w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"}),v.jsx("input",{value:$n,onChange:j=>jt(j.target.value),className:"flex-1 border p-2 rounded",placeholder:"Link..."})]}),v.jsx(Tt,{onClick:aa,children:"Turn In"})]}),R.type!=="joint"&&R.creator!==xe&&R.status==="pending"&&v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"bg-white p-4 border rounded",children:[((Rs=R.submission)==null?void 0:Rs.file)&&v.jsx("img",{src:R.submission.file,className:"mb-4 max-h-48 rounded"}),v.jsx("p",{className:"text-sm whitespace-pre-wrap",children:(Cs=R.submission)==null?void 0:Cs.note}),((qn=R.submission)==null?void 0:qn.link)&&v.jsx("a",{href:R.submission.link,target:"_blank",className:"text-blue-600 underline text-sm block mt-2",children:R.submission.link})]}),v.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[v.jsx(Tt,{onClick:We,variant:"danger",children:"Reject"}),v.jsx(Tt,{onClick:Ue,variant:"success",children:"Approve"})]})]})]})}),v.jsxs("header",{className:"bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-20",children:[v.jsxs("div",{className:"max-w-2xl mx-auto flex justify-between items-center",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(jc,{className:"text-yellow-400"}),v.jsx("h1",{className:"font-bold text-lg tracking-wider",children:"THE PACT"})]}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("button",{onClick:la,className:"text-slate-400 hover:text-yellow-400",title:"Nudge",children:v.jsx(TP,{size:20})}),v.jsxs("div",{className:"text-xs font-mono text-slate-400",children:[_.name," (",Zt?"Host":"Partner",")"]}),v.jsx("button",{onClick:hi,className:"text-slate-400 hover:text-red-500",title:"VOID CONTRACT",children:v.jsx(DP,{size:16})}),v.jsx("button",{onClick:ci,className:"text-slate-400 hover:text-white",title:"Exit Pact",children:v.jsx(CP,{size:16})})]})]}),v.jsx("div",{className:"max-w-2xl mx-auto mt-4 flex gap-2",children:[{id:"chain",label:"Chain",icon:jc},{id:"joint",label:"Joint",icon:Handshake},{id:"shame",label:"Shame",icon:iy}].map(j=>v.jsxs("button",{onClick:()=>E(j.id),className:`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase ${F===j.id?"bg-yellow-500 text-slate-900":"bg-slate-800 text-slate-400"}`,children:[v.jsx(j.icon,{size:16}),j.label]},j.id))})]}),v.jsxs("main",{className:"max-w-2xl mx-auto p-4 space-y-6",children:[F==="shame"&&v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"bg-red-900 text-red-100 p-6 rounded-xl border border-red-800 text-center",children:[v.jsx(iy,{size:48,className:"mx-auto mb-4 opacity-50"}),v.jsx("h2",{className:"text-2xl font-black uppercase",children:"Hall of Failures"})]}),te.length===0?v.jsx("p",{className:"text-center text-slate-400",children:"No failures yet."}):te.map(j=>v.jsxs("div",{className:"bg-white p-4 rounded-xl border-l-4 border-red-500 shadow-sm flex justify-between items-center",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"font-bold text-slate-900 line-through decoration-red-500",children:j.text}),v.jsx("p",{className:"text-xs text-slate-500",children:j.creatorName})]}),v.jsxs("div",{className:"text-2xl font-black text-red-200",children:[j.rejectionCount,"x"]})]},j.id))]}),F==="joint"&&v.jsxs("div",{className:"space-y-6",children:[v.jsx(Tt,{onClick:()=>w(!0),className:"w-full bg-purple-900 hover:bg-purple-800",children:"Propose Mission"}),G.map(j=>v.jsxs(Ii,{className:"p-4 border-l-4 border-purple-400",children:[v.jsxs("div",{className:"flex justify-between mb-2",children:[v.jsx("h3",{className:"font-bold",children:j.text}),v.jsx("span",{className:"text-xs bg-purple-100 px-2 py-1 rounded",children:"PROPOSAL"})]}),j.approvals[xe]?v.jsx("span",{className:"text-xs text-slate-400",children:"Waiting for partner..."}):v.jsx(Tt,{size:"sm",onClick:()=>Is(j),children:"Authorize"})]},j.id)),pe.map(j=>v.jsx(ay,{task:j,user:xe,isLocked:!1,onClick:()=>T(j),onToggleChecklist:Ne=>fi(j,Ne),onAddChecklist:Ne=>Es(j,Ne)},j.id))]}),F==="chain"&&v.jsxs(v.Fragment,{children:[v.jsx(MP,{tasks:o,firstIncompleteIndex:W,user:xe,myRoleKey:xe}),v.jsxs("div",{className:"relative space-y-4",children:[v.jsx("div",{className:"absolute left-8 top-0 bottom-0 w-1 bg-slate-300 -z-0"}),o.map((j,Ne)=>{const me=Ne===W,Wn=!me&&j.status!=="completed";return v.jsx(ay,{task:j,user:xe,isLocked:Wn,isNext:me,onClick:()=>{var Ut,Kn,da;j.status==="completed"||Wn||(j.creator===xe&&j.status==="open"||j.creator!==xe&&j.status==="pending")&&(T(j),cn(((Ut=j.submission)==null?void 0:Ut.note)||""),jt(((Kn=j.submission)==null?void 0:Kn.link)||""),Y(((da=j.submission)==null?void 0:da.file)||null))},onToggleChecklist:Ut=>fi(j,Ut),onAddChecklist:Ut=>Es(j,Ut)},j.id)})]}),v.jsx("div",{className:"sticky bottom-4 z-20",children:v.jsx(Ii,{className:"bg-slate-900 border-slate-900 text-white p-2",children:Pt?v.jsxs("form",{onSubmit:zu,className:"flex gap-2",children:[v.jsx("input",{value:V,onChange:j=>U(j.target.value),placeholder:"Add next link...",className:"flex-1 bg-slate-800 border-none rounded-lg px-4 py-3 text-white outline-none"}),v.jsx(Tt,{type:"submit",className:"bg-yellow-500 text-slate-900",children:v.jsx(jc,{})})]}):v.jsxs("div",{className:"p-3 text-center text-slate-400 text-sm flex items-center justify-center gap-2",children:[v.jsx(Lw,{size:16}),v.jsx("span",{children:"Wait for your friend."})]})})})]}),v.jsxs(Ii,{className:"p-4 bg-yellow-50 border-yellow-200",children:[v.jsxs("h3",{className:"font-bold text-yellow-800 mb-2 flex gap-2",children:[v.jsx(xP,{size:16})," The Wall"]}),v.jsx("textarea",{value:f,onChange:j=>{m(j.target.value),Et.current&&clearTimeout(Et.current),Et.current=setTimeout(()=>zt(gt(Ge,"pacts",n),{notes:j.target.value}),1e3)},className:"w-full h-24 bg-transparent border-none resize-none font-handwriting focus:ring-0"})]})]})]})}return v.jsx("div",{children:"Unknown State"})}Fc.createRoot(document.getElementById("root")).render(v.jsx(IE.StrictMode,{children:v.jsx(jP,{})}));
