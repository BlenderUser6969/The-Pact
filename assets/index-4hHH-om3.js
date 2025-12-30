(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function dT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e_={exports:{}},Au={},t_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),fT=Symbol.for("react.portal"),pT=Symbol.for("react.fragment"),mT=Symbol.for("react.strict_mode"),gT=Symbol.for("react.profiler"),yT=Symbol.for("react.provider"),_T=Symbol.for("react.context"),vT=Symbol.for("react.forward_ref"),wT=Symbol.for("react.suspense"),ET=Symbol.for("react.memo"),TT=Symbol.for("react.lazy"),gm=Symbol.iterator;function IT(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var n_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r_=Object.assign,s_={};function Si(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||n_}Si.prototype.isReactComponent={};Si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i_(){}i_.prototype=Si.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||n_}var Ud=jd.prototype=new i_;Ud.constructor=jd;r_(Ud,Si.prototype);Ud.isPureReactComponent=!0;var ym=Array.isArray,o_=Object.prototype.hasOwnProperty,Fd={current:null},a_={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)o_.call(e,r)&&!a_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:aa,type:t,key:i,ref:o,props:s,_owner:Fd.current}}function ST(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function kT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _m=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kT(""+t.key):e.toString(36)}function _l(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case fT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Rc(o,0):r,ym(s)?(n="",t!=null&&(n=t.replace(_m,"$&/")+"/"),_l(s,e,n,"",function(h){return h})):s!=null&&(zd(s)&&(s=ST(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(_m,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",ym(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Rc(i,l);o+=_l(i,e,n,u,s)}else if(u=IT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Rc(i,l++),o+=_l(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],s=0;return _l(t,r,"","",function(i){return e.call(n,i,s++)}),r}function AT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},vl={transition:null},RT={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:vl,ReactCurrentOwner:Fd};function u_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Si;ie.Fragment=pT;ie.Profiler=gT;ie.PureComponent=jd;ie.StrictMode=mT;ie.Suspense=wT;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RT;ie.act=u_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=r_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Fd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)o_.call(e,u)&&!a_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:aa,type:t.type,key:s,ref:i,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:_T,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yT,_context:t},t.Consumer=t};ie.createElement=l_;ie.createFactory=function(t){var e=l_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:vT,render:t}};ie.isValidElement=zd;ie.lazy=function(t){return{$$typeof:TT,_payload:{_status:-1,_result:t},_init:AT}};ie.memo=function(t,e){return{$$typeof:ET,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};ie.unstable_act=u_;ie.useCallback=function(t,e){return At.current.useCallback(t,e)};ie.useContext=function(t){return At.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return At.current.useDeferredValue(t)};ie.useEffect=function(t,e){return At.current.useEffect(t,e)};ie.useId=function(){return At.current.useId()};ie.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return At.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};ie.useRef=function(t){return At.current.useRef(t)};ie.useState=function(t){return At.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return At.current.useTransition()};ie.version="18.3.1";t_.exports=ie;var se=t_.exports;const c_=dT(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xT=se,CT=Symbol.for("react.element"),PT=Symbol.for("react.fragment"),NT=Object.prototype.hasOwnProperty,bT=xT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DT={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NT.call(e,r)&&!DT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:CT,type:t,key:i,ref:o,props:s,_owner:bT.current}}Au.Fragment=PT;Au.jsx=h_;Au.jsxs=h_;e_.exports=Au;var y=e_.exports,vh={},d_={exports:{}},$t={},f_={exports:{}},p_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var Z=$.length;$.push(X);e:for(;0<Z;){var ve=Z-1>>>1,q=$[ve];if(0<s(q,X))$[ve]=X,$[Z]=q,Z=ve;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],Z=$.pop();if(Z!==X){$[0]=Z;e:for(var ve=0,q=$.length,ye=q>>>1;ve<ye;){var qt=2*(ve+1)-1,Wt=$[qt],Kt=qt+1,Gt=$[Kt];if(0>s(Wt,Z))Kt<q&&0>s(Gt,Wt)?($[ve]=Gt,$[Kt]=Z,ve=Kt):($[ve]=Wt,$[qt]=Z,ve=qt);else if(Kt<q&&0>s(Gt,Z))$[ve]=Gt,$[Kt]=Z,ve=Kt;else break e}}return X}function s($,X){var Z=$.sortIndex-X.sortIndex;return Z!==0?Z:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,I=!1,x=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=$)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function b($){if(N=!1,A($),!x)if(n(u)!==null)x=!0,yn(F);else{var X=n(h);X!==null&&on(b,X.startTime-$)}}function F($,X){x=!1,N&&(N=!1,k(_),_=-1),I=!0;var Z=g;try{for(A(X),m=n(u);m!==null&&(!(m.expirationTime>X)||$&&!R());){var ve=m.callback;if(typeof ve=="function"){m.callback=null,g=m.priorityLevel;var q=ve(m.expirationTime<=X);X=t.unstable_now(),typeof q=="function"?m.callback=q:m===n(u)&&r(u),A(X)}else r(u);m=n(u)}if(m!==null)var ye=!0;else{var qt=n(h);qt!==null&&on(b,qt.startTime-X),ye=!1}return ye}finally{m=null,g=Z,I=!1}}var L=!1,E=null,_=-1,v=5,T=-1;function R(){return!(t.unstable_now()-T<v)}function C(){if(E!==null){var $=t.unstable_now();T=$;var X=!0;try{X=E(!0,$)}finally{X?S():(L=!1,E=null)}}else L=!1}var S;if(typeof w=="function")S=function(){w(C)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gn=ct.port2;ct.port1.onmessage=C,S=function(){gn.postMessage(null)}}else S=function(){O(C,0)};function yn($){E=$,L||(L=!0,S())}function on($,X){_=O(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,yn(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var Z=g;g=X;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return X()}finally{g=Z}},t.unstable_scheduleCallback=function($,X,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,$){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=Z+q,$={id:f++,callback:X,priorityLevel:$,startTime:Z,expirationTime:q,sortIndex:-1},Z>ve?($.sortIndex=Z,e(h,$),n(u)===null&&$===n(h)&&(N?(k(_),_=-1):N=!0,on(b,Z-ve))):($.sortIndex=q,e(u,$),x||I||(x=!0,yn(F))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var X=g;return function(){var Z=g;g=X;try{return $.apply(this,arguments)}finally{g=Z}}}})(p_);f_.exports=p_;var OT=f_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=se,Bt=OT;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m_=new Set,Oo={};function ws(t,e){ci(t,e),ci(t+"Capture",e)}function ci(t,e){for(Oo[t]=e,t=0;t<e.length;t++)m_.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,LT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vm={},wm={};function MT(t){return wh.call(wm,t)?!0:wh.call(vm,t)?!1:LT.test(t)?wm[t]=!0:(vm[t]=!0,!1)}function jT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function UT(t,e,n,r){if(e===null||typeof e>"u"||jT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,$d);lt[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,$d);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,$d);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(UT(e,n,s,r)&&(n=null),r||s===null?MT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),Ih=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),__=Symbol.for("react.offscreen"),Em=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,xc;function co(t){if(xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xc=e&&e[1]||""}return`
`+xc+t}var Cc=!1;function Pc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?co(t):""}function FT(t){switch(t.tag){case 5:return co(t.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bs:return"Fragment";case zs:return"Portal";case Eh:return"Profiler";case qd:return"StrictMode";case Th:return"Suspense";case Ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y_:return(t.displayName||"Context")+".Consumer";case g_:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:Sh(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Sh(t(e))}catch{}}return null}function zT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function v_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BT(t){var e=v_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=BT(t))}function w_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=v_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kh(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E_(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function Ah(t,e){E_(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rh(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rh(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function ei(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ho(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function T_(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,S_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$T=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){$T.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function k_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function A_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=k_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var HT=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(HT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,ti=null,ni=null;function Am(t){if(t=ca(t)){if(typeof Dh!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Nu(e),Dh(t.stateNode,t.type,e))}}function R_(t){ti?ni?ni.push(t):ni=[t]:ti=t}function x_(){if(ti){var t=ti,e=ni;if(ni=ti=null,Am(t),e)for(t=0;t<e.length;t++)Am(e[t])}}function C_(t,e){return t(e)}function P_(){}var Nc=!1;function N_(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return C_(t,e,n)}finally{Nc=!1,(ti!==null||ni!==null)&&(P_(),x_())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Oh=!1;if(Hn)try{var to={};Object.defineProperty(to,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Oh=!1}function qT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var wo=!1,Fl=null,zl=!1,Vh=null,WT={onError:function(t){wo=!0,Fl=t}};function KT(t,e,n,r,s,i,o,l,u){wo=!1,Fl=null,qT.apply(WT,arguments)}function GT(t,e,n,r,s,i,o,l,u){if(KT.apply(this,arguments),wo){if(wo){var h=Fl;wo=!1,Fl=null}else throw Error(z(198));zl||(zl=!0,Vh=h)}}function Es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function b_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if(Es(t)!==t)throw Error(z(188))}function QT(t){var e=t.alternate;if(!e){if(e=Es(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Rm(s),t;if(i===r)return Rm(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function D_(t){return t=QT(t),t!==null?O_(t):null}function O_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O_(t);if(e!==null)return e;t=t.sibling}return null}var V_=Bt.unstable_scheduleCallback,xm=Bt.unstable_cancelCallback,YT=Bt.unstable_shouldYield,XT=Bt.unstable_requestPaint,Fe=Bt.unstable_now,JT=Bt.unstable_getCurrentPriorityLevel,Qd=Bt.unstable_ImmediatePriority,L_=Bt.unstable_UserBlockingPriority,Bl=Bt.unstable_NormalPriority,ZT=Bt.unstable_LowPriority,M_=Bt.unstable_IdlePriority,Ru=null,In=null;function eI(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Ru,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:rI,tI=Math.log,nI=Math.LN2;function rI(t){return t>>>=0,t===0?32:31-(tI(t)/nI|0)|0}var Xa=64,Ja=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=fo(l):(i&=o,i!==0&&(r=fo(i)))}else o=n&~s,o!==0?r=fo(o):i!==0&&(r=fo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),s=1<<n,r|=t[n],e&=~s;return r}function sI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-dn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=sI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j_(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function oI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-dn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var me=0;function U_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F_,Xd,z_,B_,$_,Mh=!1,Za=[],Tr=null,Ir=null,Sr=null,Mo=new Map,jo=new Map,dr=[],aI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function no(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ca(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function lI(t,e,n,r,s){switch(e){case"focusin":return Tr=no(Tr,t,e,n,r,s),!0;case"dragenter":return Ir=no(Ir,t,e,n,r,s),!0;case"mouseover":return Sr=no(Sr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Mo.set(i,no(Mo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,jo.set(i,no(jo.get(i)||null,t,e,n,r,s)),!0}return!1}function H_(t){var e=ts(t.target);if(e!==null){var n=Es(e);if(n!==null){if(e=n.tag,e===13){if(e=b_(n),e!==null){t.blockedOn=e,$_(t.priority,function(){z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=ca(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Pm(t,e,n){wl(t)&&n.delete(e)}function uI(){Mh=!1,Tr!==null&&wl(Tr)&&(Tr=null),Ir!==null&&wl(Ir)&&(Ir=null),Sr!==null&&wl(Sr)&&(Sr=null),Mo.forEach(Pm),jo.forEach(Pm)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,Mh||(Mh=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,uI)))}function Uo(t){function e(s){return ro(s,t)}if(0<Za.length){ro(Za[0],t);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&ro(Tr,t),Ir!==null&&ro(Ir,t),Sr!==null&&ro(Sr,t),Mo.forEach(e),jo.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)H_(n),n.blockedOn===null&&dr.shift()}var ri=er.ReactCurrentBatchConfig,Hl=!0;function cI(t,e,n,r){var s=me,i=ri.transition;ri.transition=null;try{me=1,Jd(t,e,n,r)}finally{me=s,ri.transition=i}}function hI(t,e,n,r){var s=me,i=ri.transition;ri.transition=null;try{me=4,Jd(t,e,n,r)}finally{me=s,ri.transition=i}}function Jd(t,e,n,r){if(Hl){var s=jh(t,e,n,r);if(s===null)Bc(t,e,r,ql,n),Cm(t,r);else if(lI(s,t,e,n,r))r.stopPropagation();else if(Cm(t,r),e&4&&-1<aI.indexOf(t)){for(;s!==null;){var i=ca(s);if(i!==null&&F_(i),i=jh(t,e,n,r),i===null&&Bc(t,e,r,ql,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Bc(t,e,r,null,n)}}var ql=null;function jh(t,e,n,r){if(ql=null,t=Gd(r),t=ts(t),t!==null)if(e=Es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=b_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function q_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JT()){case Qd:return 1;case L_:return 4;case Bl:case ZT:return 16;case M_:return 536870912;default:return 16}default:return 16}}var vr=null,Zd=null,El=null;function W_(){if(El)return El;var t,e=Zd,n=e.length,r,s="value"in vr?vr.value:vr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return El=s.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Nm(){return!1}function Ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?el:Nm,this.isPropagationStopped=Nm,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Ht(ki),ua=Ce({},ki,{view:0,detail:0}),dI=Ht(ua),Dc,Oc,so,xu=Ce({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Dc=t.screenX-so.screenX,Oc=t.screenY-so.screenY):Oc=Dc=0,so=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),bm=Ht(xu),fI=Ce({},xu,{dataTransfer:0}),pI=Ht(fI),mI=Ce({},ua,{relatedTarget:0}),Vc=Ht(mI),gI=Ce({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),yI=Ht(gI),_I=Ce({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vI=Ht(_I),wI=Ce({},ki,{data:0}),Dm=Ht(wI),EI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},II={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=II[t])?!!e[t]:!1}function tf(){return SI}var kI=Ce({},ua,{key:function(t){if(t.key){var e=EI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AI=Ht(kI),RI=Ce({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=Ht(RI),xI=Ce({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),CI=Ht(xI),PI=Ce({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),NI=Ht(PI),bI=Ce({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DI=Ht(bI),OI=[9,13,27,32],nf=Hn&&"CompositionEvent"in window,Eo=null;Hn&&"documentMode"in document&&(Eo=document.documentMode);var VI=Hn&&"TextEvent"in window&&!Eo,K_=Hn&&(!nf||Eo&&8<Eo&&11>=Eo),Vm=" ",Lm=!1;function G_(t,e){switch(t){case"keyup":return OI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function LI(t,e){switch(t){case"compositionend":return Q_(e);case"keypress":return e.which!==32?null:(Lm=!0,Vm);case"textInput":return t=e.data,t===Vm&&Lm?null:t;default:return null}}function MI(t,e){if($s)return t==="compositionend"||!nf&&G_(t,e)?(t=W_(),El=Zd=vr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K_&&e.locale!=="ko"?null:e.data;default:return null}}var jI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jI[t.type]:e==="textarea"}function Y_(t,e,n,r){R_(r),e=Wl(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,Fo=null;function UI(t){av(t,0)}function Cu(t){var e=Ws(t);if(w_(e))return t}function FI(t,e){if(t==="change")return e}var X_=!1;if(Hn){var Lc;if(Hn){var Mc="oninput"in document;if(!Mc){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),Mc=typeof jm.oninput=="function"}Lc=Mc}else Lc=!1;X_=Lc&&(!document.documentMode||9<document.documentMode)}function Um(){To&&(To.detachEvent("onpropertychange",J_),Fo=To=null)}function J_(t){if(t.propertyName==="value"&&Cu(Fo)){var e=[];Y_(e,Fo,t,Gd(t)),N_(UI,e)}}function zI(t,e,n){t==="focusin"?(Um(),To=e,Fo=n,To.attachEvent("onpropertychange",J_)):t==="focusout"&&Um()}function BI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(Fo)}function $I(t,e){if(t==="click")return Cu(e)}function HI(t,e){if(t==="input"||t==="change")return Cu(e)}function qI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:qI;function zo(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!wh.call(e,s)||!pn(t[s],e[s]))return!1}return!0}function Fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,e){var n=Fm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fm(n)}}function Z_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Z_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ev(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WI(t){var e=ev(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Z_(n.ownerDocument.documentElement,n)){if(r!==null&&rf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=zm(n,i);var o=zm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KI=Hn&&"documentMode"in document&&11>=document.documentMode,Hs=null,Uh=null,Io=null,Fh=!1;function Bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fh||Hs==null||Hs!==Ul(r)||(r=Hs,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&zo(Io,r)||(Io=r,r=Wl(Uh,"onSelect"),0<r.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hs)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},jc={},tv={};Hn&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Pu(t){if(jc[t])return jc[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tv)return jc[t]=e[n];return t}var nv=Pu("animationend"),rv=Pu("animationiteration"),sv=Pu("animationstart"),iv=Pu("transitionend"),ov=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){ov.set(t,e),ws(e,[t])}for(var Uc=0;Uc<$m.length;Uc++){var Fc=$m[Uc],GI=Fc.toLowerCase(),QI=Fc[0].toUpperCase()+Fc.slice(1);zr(GI,"on"+QI)}zr(nv,"onAnimationEnd");zr(rv,"onAnimationIteration");zr(sv,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(iv,"onTransitionEnd");ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YI=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GT(r,e,void 0,t),t.currentTarget=null}function av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Hm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Hm(s,l,h),i=u}}}if(zl)throw t=Vh,zl=!1,Vh=null,t}function Te(t,e){var n=e[qh];n===void 0&&(n=e[qh]=new Set);var r=t+"__bubble";n.has(r)||(lv(e,t,2,!1),n.add(r))}function zc(t,e,n){var r=0;e&&(r|=4),lv(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[nl]){t[nl]=!0,m_.forEach(function(n){n!=="selectionchange"&&(YI.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,zc("selectionchange",!1,e))}}function lv(t,e,n,r){switch(q_(e)){case 1:var s=cI;break;case 4:s=hI;break;default:s=Jd}n=s.bind(null,e,n,t),s=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Bc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ts(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}N_(function(){var h=i,f=Gd(n),m=[];e:{var g=ov.get(t);if(g!==void 0){var I=ef,x=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":I=AI;break;case"focusin":x="focus",I=Vc;break;case"focusout":x="blur",I=Vc;break;case"beforeblur":case"afterblur":I=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=pI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=CI;break;case nv:case rv:case sv:I=yI;break;case iv:I=NI;break;case"scroll":I=dI;break;case"wheel":I=DI;break;case"copy":case"cut":case"paste":I=vI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Om}var N=(e&4)!==0,O=!N&&t==="scroll",k=N?g!==null?g+"Capture":null:g;N=[];for(var w=h,A;w!==null;){A=w;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,k!==null&&(b=Lo(w,k),b!=null&&N.push($o(w,b,A)))),O)break;w=w.return}0<N.length&&(g=new I(g,x,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==bh&&(x=n.relatedTarget||n.fromElement)&&(ts(x)||x[qn]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=h,x=x?ts(x):null,x!==null&&(O=Es(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=h),I!==x)){if(N=bm,b="onMouseLeave",k="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=Om,b="onPointerLeave",k="onPointerEnter",w="pointer"),O=I==null?g:Ws(I),A=x==null?g:Ws(x),g=new N(b,w+"leave",I,n,f),g.target=O,g.relatedTarget=A,b=null,ts(f)===h&&(N=new N(k,w+"enter",x,n,f),N.target=A,N.relatedTarget=O,b=N),O=b,I&&x)t:{for(N=I,k=x,w=0,A=N;A;A=Vs(A))w++;for(A=0,b=k;b;b=Vs(b))A++;for(;0<w-A;)N=Vs(N),w--;for(;0<A-w;)k=Vs(k),A--;for(;w--;){if(N===k||k!==null&&N===k.alternate)break t;N=Vs(N),k=Vs(k)}N=null}else N=null;I!==null&&qm(m,g,I,N,!1),x!==null&&O!==null&&qm(m,O,x,N,!0)}}e:{if(g=h?Ws(h):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var F=FI;else if(Mm(g))if(X_)F=HI;else{F=BI;var L=zI}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=$I);if(F&&(F=F(t,h))){Y_(m,F,n,f);break e}L&&L(t,g,h),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Rh(g,"number",g.value)}switch(L=h?Ws(h):window,t){case"focusin":(Mm(L)||L.contentEditable==="true")&&(Hs=L,Uh=h,Io=null);break;case"focusout":Io=Uh=Hs=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Bm(m,n,f);break;case"selectionchange":if(KI)break;case"keydown":case"keyup":Bm(m,n,f)}var E;if(nf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $s?G_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(K_&&n.locale!=="ko"&&($s||_!=="onCompositionStart"?_==="onCompositionEnd"&&$s&&(E=W_()):(vr=f,Zd="value"in vr?vr.value:vr.textContent,$s=!0)),L=Wl(h,_),0<L.length&&(_=new Dm(_,t,null,n,f),m.push({event:_,listeners:L}),E?_.data=E:(E=Q_(n),E!==null&&(_.data=E)))),(E=VI?LI(t,n):MI(t,n))&&(h=Wl(h,"onBeforeInput"),0<h.length&&(f=new Dm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}av(m,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Lo(t,n),i!=null&&r.unshift($o(t,i,s)),i=Lo(t,e),i!=null&&r.push($o(t,i,s))),t=t.return}return r}function Vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Lo(n,i),u!=null&&o.unshift($o(n,u,l))):s||(u=Lo(n,i),u!=null&&o.push($o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XI=/\r\n?/g,JI=/\u0000|\uFFFD/g;function Wm(t){return(typeof t=="string"?t:""+t).replace(XI,`
`).replace(JI,"")}function rl(t,e,n){if(e=Wm(e),Wm(t)!==e&&n)throw Error(z(425))}function Kl(){}var zh=null,Bh=null;function $h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,ZI=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(t1)}:Hh;function t1(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Uo(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),En="__reactFiber$"+Ai,Ho="__reactProps$"+Ai,qn="__reactContainer$"+Ai,qh="__reactEvents$"+Ai,n1="__reactListeners$"+Ai,r1="__reactHandles$"+Ai;function ts(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gm(t);t!==null;){if(n=t[En])return n;t=Gm(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[En]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Nu(t){return t[Ho]||null}var Wh=[],Ks=-1;function Br(t){return{current:t}}function Se(t){0>Ks||(t.current=Wh[Ks],Wh[Ks]=null,Ks--)}function we(t,e){Ks++,Wh[Ks]=t.current,t.current=e}var Vr={},wt=Br(Vr),bt=Br(!1),us=Vr;function hi(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Dt(t){return t=t.childContextTypes,t!=null}function Gl(){Se(bt),Se(wt)}function Qm(t,e,n){if(wt.current!==Vr)throw Error(z(168));we(wt,e),we(bt,n)}function uv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,zT(t)||"Unknown",s));return Ce({},n,r)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,us=wt.current,we(wt,t),we(bt,bt.current),!0}function Ym(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=uv(t,e,us),r.__reactInternalMemoizedMergedChildContext=t,Se(bt),Se(wt),we(wt,t)):Se(bt),we(bt,n)}var Vn=null,bu=!1,Hc=!1;function cv(t){Vn===null?Vn=[t]:Vn.push(t)}function s1(t){bu=!0,cv(t)}function $r(){if(!Hc&&Vn!==null){Hc=!0;var t=0,e=me;try{var n=Vn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,bu=!1}catch(s){throw Vn!==null&&(Vn=Vn.slice(t+1)),V_(Qd,$r),s}finally{me=e,Hc=!1}}return null}var Gs=[],Qs=0,Yl=null,Xl=0,Jt=[],Zt=0,cs=null,Ln=1,Mn="";function Jr(t,e){Gs[Qs++]=Xl,Gs[Qs++]=Yl,Yl=t,Xl=e}function hv(t,e,n){Jt[Zt++]=Ln,Jt[Zt++]=Mn,Jt[Zt++]=cs,cs=t;var r=Ln;t=Mn;var s=32-dn(r)-1;r&=~(1<<s),n+=1;var i=32-dn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ln=1<<32-dn(e)+s|n<<s|r,Mn=i+t}else Ln=1<<i|n<<s|r,Mn=t}function sf(t){t.return!==null&&(Jr(t,1),hv(t,1,0))}function of(t){for(;t===Yl;)Yl=Gs[--Qs],Gs[Qs]=null,Xl=Gs[--Qs],Gs[Qs]=null;for(;t===cs;)cs=Jt[--Zt],Jt[Zt]=null,Mn=Jt[--Zt],Jt[Zt]=null,Ln=Jt[--Zt],Jt[Zt]=null}var zt=null,jt=null,Ae=!1,hn=null;function dv(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,jt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,jt=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gh(t){if(Ae){var e=jt;if(e){var n=e;if(!Xm(t,e)){if(Kh(t))throw Error(z(418));e=kr(n.nextSibling);var r=zt;e&&Xm(t,e)?dv(r,n):(t.flags=t.flags&-4097|2,Ae=!1,zt=t)}}else{if(Kh(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ae=!1,zt=t}}}function Jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function sl(t){if(t!==zt)return!1;if(!Ae)return Jm(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$h(t.type,t.memoizedProps)),e&&(e=jt)){if(Kh(t))throw fv(),Error(z(418));for(;e;)dv(t,e),e=kr(e.nextSibling)}if(Jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=zt?kr(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=jt;t;)t=kr(t.nextSibling)}function di(){jt=zt=null,Ae=!1}function af(t){hn===null?hn=[t]:hn.push(t)}var i1=er.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zm(t){var e=t._init;return e(t._payload)}function pv(t){function e(k,w){if(t){var A=k.deletions;A===null?(k.deletions=[w],k.flags|=16):A.push(w)}}function n(k,w){if(!t)return null;for(;w!==null;)e(k,w),w=w.sibling;return null}function r(k,w){for(k=new Map;w!==null;)w.key!==null?k.set(w.key,w):k.set(w.index,w),w=w.sibling;return k}function s(k,w){return k=Cr(k,w),k.index=0,k.sibling=null,k}function i(k,w,A){return k.index=A,t?(A=k.alternate,A!==null?(A=A.index,A<w?(k.flags|=2,w):A):(k.flags|=2,w)):(k.flags|=1048576,w)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,w,A,b){return w===null||w.tag!==6?(w=Xc(A,k.mode,b),w.return=k,w):(w=s(w,A),w.return=k,w)}function u(k,w,A,b){var F=A.type;return F===Bs?f(k,w,A.props.children,b,A.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===cr&&Zm(F)===w.type)?(b=s(w,A.props),b.ref=io(k,w,A),b.return=k,b):(b=Cl(A.type,A.key,A.props,null,k.mode,b),b.ref=io(k,w,A),b.return=k,b)}function h(k,w,A,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Jc(A,k.mode,b),w.return=k,w):(w=s(w,A.children||[]),w.return=k,w)}function f(k,w,A,b,F){return w===null||w.tag!==7?(w=os(A,k.mode,b,F),w.return=k,w):(w=s(w,A),w.return=k,w)}function m(k,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Xc(""+w,k.mode,A),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ga:return A=Cl(w.type,w.key,w.props,null,k.mode,A),A.ref=io(k,null,w),A.return=k,A;case zs:return w=Jc(w,k.mode,A),w.return=k,w;case cr:var b=w._init;return m(k,b(w._payload),A)}if(ho(w)||eo(w))return w=os(w,k.mode,A,null),w.return=k,w;il(k,w)}return null}function g(k,w,A,b){var F=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:l(k,w,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ga:return A.key===F?u(k,w,A,b):null;case zs:return A.key===F?h(k,w,A,b):null;case cr:return F=A._init,g(k,w,F(A._payload),b)}if(ho(A)||eo(A))return F!==null?null:f(k,w,A,b,null);il(k,A)}return null}function I(k,w,A,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return k=k.get(A)||null,l(w,k,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ga:return k=k.get(b.key===null?A:b.key)||null,u(w,k,b,F);case zs:return k=k.get(b.key===null?A:b.key)||null,h(w,k,b,F);case cr:var L=b._init;return I(k,w,A,L(b._payload),F)}if(ho(b)||eo(b))return k=k.get(A)||null,f(w,k,b,F,null);il(w,b)}return null}function x(k,w,A,b){for(var F=null,L=null,E=w,_=w=0,v=null;E!==null&&_<A.length;_++){E.index>_?(v=E,E=null):v=E.sibling;var T=g(k,E,A[_],b);if(T===null){E===null&&(E=v);break}t&&E&&T.alternate===null&&e(k,E),w=i(T,w,_),L===null?F=T:L.sibling=T,L=T,E=v}if(_===A.length)return n(k,E),Ae&&Jr(k,_),F;if(E===null){for(;_<A.length;_++)E=m(k,A[_],b),E!==null&&(w=i(E,w,_),L===null?F=E:L.sibling=E,L=E);return Ae&&Jr(k,_),F}for(E=r(k,E);_<A.length;_++)v=I(E,k,_,A[_],b),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?_:v.key),w=i(v,w,_),L===null?F=v:L.sibling=v,L=v);return t&&E.forEach(function(R){return e(k,R)}),Ae&&Jr(k,_),F}function N(k,w,A,b){var F=eo(A);if(typeof F!="function")throw Error(z(150));if(A=F.call(A),A==null)throw Error(z(151));for(var L=F=null,E=w,_=w=0,v=null,T=A.next();E!==null&&!T.done;_++,T=A.next()){E.index>_?(v=E,E=null):v=E.sibling;var R=g(k,E,T.value,b);if(R===null){E===null&&(E=v);break}t&&E&&R.alternate===null&&e(k,E),w=i(R,w,_),L===null?F=R:L.sibling=R,L=R,E=v}if(T.done)return n(k,E),Ae&&Jr(k,_),F;if(E===null){for(;!T.done;_++,T=A.next())T=m(k,T.value,b),T!==null&&(w=i(T,w,_),L===null?F=T:L.sibling=T,L=T);return Ae&&Jr(k,_),F}for(E=r(k,E);!T.done;_++,T=A.next())T=I(E,k,_,T.value,b),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),w=i(T,w,_),L===null?F=T:L.sibling=T,L=T);return t&&E.forEach(function(C){return e(k,C)}),Ae&&Jr(k,_),F}function O(k,w,A,b){if(typeof A=="object"&&A!==null&&A.type===Bs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ga:e:{for(var F=A.key,L=w;L!==null;){if(L.key===F){if(F=A.type,F===Bs){if(L.tag===7){n(k,L.sibling),w=s(L,A.props.children),w.return=k,k=w;break e}}else if(L.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===cr&&Zm(F)===L.type){n(k,L.sibling),w=s(L,A.props),w.ref=io(k,L,A),w.return=k,k=w;break e}n(k,L);break}else e(k,L);L=L.sibling}A.type===Bs?(w=os(A.props.children,k.mode,b,A.key),w.return=k,k=w):(b=Cl(A.type,A.key,A.props,null,k.mode,b),b.ref=io(k,w,A),b.return=k,k=b)}return o(k);case zs:e:{for(L=A.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(k,w.sibling),w=s(w,A.children||[]),w.return=k,k=w;break e}else{n(k,w);break}else e(k,w);w=w.sibling}w=Jc(A,k.mode,b),w.return=k,k=w}return o(k);case cr:return L=A._init,O(k,w,L(A._payload),b)}if(ho(A))return x(k,w,A,b);if(eo(A))return N(k,w,A,b);il(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(k,w.sibling),w=s(w,A),w.return=k,k=w):(n(k,w),w=Xc(A,k.mode,b),w.return=k,k=w),o(k)):n(k,w)}return O}var fi=pv(!0),mv=pv(!1),Jl=Br(null),Zl=null,Ys=null,lf=null;function uf(){lf=Ys=Zl=null}function cf(t){var e=Jl.current;Se(Jl),t._currentValue=e}function Qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function si(t,e){Zl=t,lf=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(lf!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Zl===null)throw Error(z(308));Ys=t,Zl.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var ns=null;function hf(t){ns===null?ns=[t]:ns.push(t)}function gv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,hf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Wn(t,n)}return s=r.interleaved,s===null?(e.next=e,hf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Wn(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}function eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eu(t,e,n,r){var s=t.updateQueue;hr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=h=u=null,l=i;do{var g=l.lane,I=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,N=l;switch(g=e,I=n,N.tag){case 1:if(x=N.payload,typeof x=="function"){m=x.call(I,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=N.payload,g=typeof x=="function"?x.call(I,m,g):x,g==null)break e;m=Ce({},m,g);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=I,u=m):f=f.next=I,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ds|=o,t.lanes=o,t.memoizedState=m}}function tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var ha={},Sn=Br(ha),qo=Br(ha),Wo=Br(ha);function rs(t){if(t===ha)throw Error(z(174));return t}function ff(t,e){switch(we(Wo,e),we(qo,t),we(Sn,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ch(e,t)}Se(Sn),we(Sn,e)}function pi(){Se(Sn),Se(qo),Se(Wo)}function _v(t){rs(Wo.current);var e=rs(Sn.current),n=Ch(e,t.type);e!==n&&(we(qo,t),we(Sn,n))}function pf(t){qo.current===t&&(Se(Sn),Se(qo))}var Re=Br(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function mf(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var Sl=er.ReactCurrentDispatcher,Wc=er.ReactCurrentBatchConfig,hs=0,xe=null,Ke=null,et=null,nu=!1,So=!1,Ko=0,o1=0;function ft(){throw Error(z(321))}function gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pn(t[n],e[n]))return!1;return!0}function yf(t,e,n,r,s,i){if(hs=i,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?c1:h1,t=n(r,s),So){i=0;do{if(So=!1,Ko=0,25<=i)throw Error(z(301));i+=1,et=Ke=null,e.updateQueue=null,Sl.current=d1,t=n(r,s)}while(So)}if(Sl.current=ru,e=Ke!==null&&Ke.next!==null,hs=0,et=Ke=xe=null,nu=!1,e)throw Error(z(300));return t}function _f(){var t=Ko!==0;return Ko=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?xe.memoizedState=et=t:et=et.next=t,et}function sn(){if(Ke===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=et===null?xe.memoizedState:et.next;if(e!==null)et=e,Ke=t;else{if(t===null)throw Error(z(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},et===null?xe.memoizedState=et=t:et=et.next=t}return et}function Go(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ke,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((hs&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,xe.lanes|=f,ds|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,pn(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,xe.lanes|=i,ds|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);pn(i,e.memoizedState)||(Nt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function vv(){}function wv(t,e){var n=xe,r=sn(),s=e(),i=!pn(r.memoizedState,s);if(i&&(r.memoizedState=s,Nt=!0),r=r.queue,vf(Iv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Qo(9,Tv.bind(null,n,r,s,e),void 0,null),tt===null)throw Error(z(349));hs&30||Ev(n,e,s)}return s}function Ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tv(t,e,n,r){e.value=n,e.getSnapshot=r,Sv(e)&&kv(t)}function Iv(t,e,n){return n(function(){Sv(e)&&kv(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pn(t,n)}catch{return!0}}function kv(t){var e=Wn(t,1);e!==null&&fn(e,t,1,-1)}function ng(t){var e=wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=u1.bind(null,xe,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Av(){return sn().memoizedState}function kl(t,e,n,r){var s=wn();xe.flags|=t,s.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function Du(t,e,n,r){var s=sn();r=r===void 0?null:r;var i=void 0;if(Ke!==null){var o=Ke.memoizedState;if(i=o.destroy,r!==null&&gf(r,o.deps)){s.memoizedState=Qo(e,n,i,r);return}}xe.flags|=t,s.memoizedState=Qo(1|e,n,i,r)}function rg(t,e){return kl(8390656,8,t,e)}function vf(t,e){return Du(2048,8,t,e)}function Rv(t,e){return Du(4,2,t,e)}function xv(t,e){return Du(4,4,t,e)}function Cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pv(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,Cv.bind(null,e,t),n)}function wf(){}function Nv(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bv(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dv(t,e,n){return hs&21?(pn(n,e)||(n=j_(),xe.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function a1(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Wc.transition;Wc.transition={};try{t(!1),e()}finally{me=n,Wc.transition=r}}function Ov(){return sn().memoizedState}function l1(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(t))Lv(e,n);else if(n=gv(t,e,n,r),n!==null){var s=kt();fn(n,t,r,s),Mv(n,e,r)}}function u1(t,e,n){var r=xr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(t))Lv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,pn(l,o)){var u=e.interleaved;u===null?(s.next=s,hf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=gv(t,e,s,r),n!==null&&(s=kt(),fn(n,t,r,s),Mv(n,e,r))}}function Vv(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function Lv(t,e){So=nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}var ru={readContext:rn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},c1={readContext:rn,useCallback:function(t,e){return wn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,Cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=l1.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=wn();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:wf,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=a1.bind(null,t[1]),wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=wn();if(Ae){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),tt===null)throw Error(z(349));hs&30||Ev(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,rg(Iv.bind(null,r,i,t),[t]),r.flags|=2048,Qo(9,Tv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=wn(),e=tt.identifierPrefix;if(Ae){var n=Mn,r=Ln;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=o1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},h1={readContext:rn,useCallback:Nv,useContext:rn,useEffect:vf,useImperativeHandle:Pv,useInsertionEffect:Rv,useLayoutEffect:xv,useMemo:bv,useReducer:Kc,useRef:Av,useState:function(){return Kc(Go)},useDebugValue:wf,useDeferredValue:function(t){var e=sn();return Dv(e,Ke.memoizedState,t)},useTransition:function(){var t=Kc(Go)[0],e=sn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:wv,useId:Ov,unstable_isNewReconciler:!1},d1={readContext:rn,useCallback:Nv,useContext:rn,useEffect:vf,useImperativeHandle:Pv,useInsertionEffect:Rv,useLayoutEffect:xv,useMemo:bv,useReducer:Gc,useRef:Av,useState:function(){return Gc(Go)},useDebugValue:wf,useDeferredValue:function(t){var e=sn();return Ke===null?e.memoizedState=t:Dv(e,Ke.memoizedState,t)},useTransition:function(){var t=Gc(Go)[0],e=sn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:wv,useId:Ov,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?Es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),s=xr(t),i=Bn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Ar(t,i,s),e!==null&&(fn(e,t,s,r),Il(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),s=xr(t),i=Bn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Ar(t,i,s),e!==null&&(fn(e,t,s,r),Il(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=xr(t),s=Bn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Ar(t,s,r),e!==null&&(fn(e,t,r,n),Il(e,t,r))}};function sg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(s,i):!0}function jv(t,e,n){var r=!1,s=Vr,i=e.contextType;return typeof i=="object"&&i!==null?i=rn(i):(s=Dt(e)?us:wt.current,r=e.contextTypes,i=(r=r!=null)?hi(t,s):Vr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ig(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},df(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=rn(i):(i=Dt(e)?us:wt.current,s.context=hi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ou.enqueueReplaceState(s,s.state,null),eu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function mi(t,e){try{var n="",r=e;do n+=FT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var f1=typeof WeakMap=="function"?WeakMap:Map;function Uv(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){iu||(iu=!0,ld=r),Jh(t,e)},n}function Fv(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Jh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Jh(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function og(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new f1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=R1.bind(null,t,e,n),e.then(t,t))}function ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var p1=er.ReactCurrentOwner,Nt=!1;function St(t,e,n,r){e.child=t===null?mv(e,null,n,r):fi(e,t.child,n,r)}function ug(t,e,n,r,s){n=n.render;var i=e.ref;return si(e,s),r=yf(t,e,n,r,i,s),n=_f(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kn(t,e,s)):(Ae&&n&&sf(e),e.flags|=1,St(t,e,r,s),e.child)}function cg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!xf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,zv(t,e,i,r,s)):(t=Cl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&t.ref===e.ref)return Kn(t,e,s)}return e.flags|=1,t=Cr(i,r),t.ref=e.ref,t.return=e,e.child=t}function zv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(zo(i,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,Kn(t,e,s)}return Zh(t,e,n,r,s)}function Bv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Js,Mt),Mt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Js,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,we(Js,Mt),Mt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,we(Js,Mt),Mt|=r;return St(t,e,s,n),e.child}function $v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zh(t,e,n,r,s){var i=Dt(n)?us:wt.current;return i=hi(e,i),si(e,s),n=yf(t,e,n,r,i,s),r=_f(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Kn(t,e,s)):(Ae&&r&&sf(e),e.flags|=1,St(t,e,n,s),e.child)}function hg(t,e,n,r,s){if(Dt(n)){var i=!0;Ql(e)}else i=!1;if(si(e,s),e.stateNode===null)Al(t,e),jv(e,n,r),Xh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=rn(h):(h=Dt(n)?us:wt.current,h=hi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&ig(e,o,r,h),hr=!1;var g=e.memoizedState;o.state=g,eu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||bt.current||hr?(typeof f=="function"&&(Yh(e,n,f,r),u=e.memoizedState),(l=hr||sg(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:un(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Dt(n)?us:wt.current,u=hi(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&ig(e,o,r,u),hr=!1,g=e.memoizedState,o.state=g,eu(e,r,o,s);var x=e.memoizedState;l!==m||g!==x||bt.current||hr?(typeof I=="function"&&(Yh(e,n,I,r),x=e.memoizedState),(h=hr||sg(e,n,h,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ed(t,e,n,r,i,s)}function ed(t,e,n,r,s,i){$v(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Ym(e,n,!1),Kn(t,e,i);r=e.stateNode,p1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fi(e,t.child,null,i),e.child=fi(e,null,l,i)):St(t,e,l,i),e.memoizedState=r.state,s&&Ym(e,n,!0),e.child}function Hv(t){var e=t.stateNode;e.pendingContext?Qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qm(t,e.context,!1),ff(t,e.containerInfo)}function dg(t,e,n,r,s){return di(),af(s),e.flags|=256,St(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function qv(t,e,n){var r=e.pendingProps,s=Re.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),we(Re,s&1),t===null)return Gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Mu(o,r,0,null),t=os(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=nd(n),e.memoizedState=td,t):Ef(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return m1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Cr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Cr(l,i):(i=os(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=td,r}return i=t.child,t=i.sibling,r=Cr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ef(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&af(r),fi(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function m1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Qc(Error(z(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Mu({mode:"visible",children:r.children},s,0,null),i=os(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&fi(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,i);if(!(e.mode&1))return ol(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=Qc(i,r,void 0),ol(t,e,o,r)}if(l=(o&t.childLanes)!==0,Nt||l){if(r=tt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Wn(t,s),fn(r,t,s,-1))}return Rf(),r=Qc(Error(z(421))),ol(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=x1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,jt=kr(s.nextSibling),zt=e,Ae=!0,hn=null,t!==null&&(Jt[Zt++]=Ln,Jt[Zt++]=Mn,Jt[Zt++]=cs,Ln=t.id,Mn=t.overflow,cs=e),e=Ef(e,r.children),e.flags|=4096,e)}function fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qh(t.return,e,n)}function Yc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Wv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,e);else if(t.tag===19)fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Re,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&tu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Yc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&tu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Yc(e,!0,n,null,i);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function g1(t,e,n){switch(e.tag){case 3:Hv(e),di();break;case 5:_v(e);break;case 1:Dt(e.type)&&Ql(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;we(Jl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?qv(t,e,n):(we(Re,Re.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);we(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Wv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return Kn(t,e,n)}var Kv,rd,Gv,Qv;Kv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};Gv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,rs(Sn.current);var i=null;switch(n){case"input":s=kh(t,s),r=kh(t,r),i=[];break;case"select":s=Ce({},s,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":s=xh(t,s),r=xh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kl)}Ph(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Oo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Te("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Qv=function(t,e,n,r){n!==r&&(e.flags|=4)};function oo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function y1(t,e,n){var r=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Dt(e.type)&&Gl(),pt(e),null;case 3:return r=e.stateNode,pi(),Se(bt),Se(wt),mf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(hd(hn),hn=null))),rd(t,e),pt(e),null;case 5:pf(e);var s=rs(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)Gv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return pt(e),null}if(t=rs(Sn.current),sl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[En]=e,r[Ho]=i,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(s=0;s<po.length;s++)Te(po[s],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Tm(r,i),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Te("invalid",r);break;case"textarea":Sm(r,i),Te("invalid",r)}Ph(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),s=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Qa(r),Im(r,i,!0);break;case"textarea":Qa(r),km(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[Ho]=r,Kv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nh(n,r),n){case"dialog":Te("cancel",t),Te("close",t),s=r;break;case"iframe":case"object":case"embed":Te("load",t),s=r;break;case"video":case"audio":for(s=0;s<po.length;s++)Te(po[s],t);s=r;break;case"source":Te("error",t),s=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),s=r;break;case"details":Te("toggle",t),s=r;break;case"input":Tm(t,r),s=kh(t,r),Te("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ce({},r,{value:void 0}),Te("invalid",t);break;case"textarea":Sm(t,r),s=xh(t,r),Te("invalid",t);break;default:s=r}Ph(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?A_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&S_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Oo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Te("scroll",t):u!=null&&Hd(t,i,u,o))}switch(n){case"input":Qa(t),Im(t,r,!1);break;case"textarea":Qa(t),km(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ei(t,!!r.multiple,i,!1):r.defaultValue!=null&&ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)Qv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=rs(Wo.current),rs(Sn.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(i=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return pt(e),null;case 13:if(Se(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&jt!==null&&e.mode&1&&!(e.flags&128))fv(),di(),e.flags|=98560,i=!1;else if(i=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[En]=e}else di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),i=!1}else hn!==null&&(hd(hn),hn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Ge===0&&(Ge=3):Rf())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return pi(),rd(t,e),t===null&&Bo(e.stateNode.containerInfo),pt(e),null;case 10:return cf(e.type._context),pt(e),null;case 17:return Dt(e.type)&&Gl(),pt(e),null;case 19:if(Se(Re),i=e.memoizedState,i===null)return pt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)oo(i,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tu(t),o!==null){for(e.flags|=128,oo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Re,Re.current&1|2),e.child}t=t.sibling}i.tail!==null&&Fe()>gi&&(e.flags|=128,r=!0,oo(i,!1),e.lanes=4194304)}else{if(!r)if(t=tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ae)return pt(e),null}else 2*Fe()-i.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,oo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,n=Re.current,we(Re,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Af(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function _1(t,e){switch(of(e),e.tag){case 1:return Dt(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pi(),Se(bt),Se(wt),mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pf(e),null;case 13:if(Se(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Re),null;case 4:return pi(),null;case 10:return cf(e.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var al=!1,yt=!1,v1=typeof WeakSet=="function"?WeakSet:Set,W=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){De(t,e,r)}}var pg=!1;function w1(t,e){if(zh=Hl,t=ev(),rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bh={focusedElem:t,selectionRange:n},Hl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var N=x.memoizedProps,O=x.memoizedState,k=e.stateNode,w=k.getSnapshotBeforeUpdate(e.elementType===e.type?N:un(e.type,N),O);k.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){De(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return x=pg,pg=!1,x}function ko(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&sd(e,n,i)}s=s.next}while(s!==r)}}function Vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yv(t){var e=t.alternate;e!==null&&(t.alternate=null,Yv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[Ho],delete e[qh],delete e[n1],delete e[r1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xv(t){return t.tag===5||t.tag===3||t.tag===4}function mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var rt=null,cn=!1;function lr(t,e,n){for(n=n.child;n!==null;)Jv(t,e,n),n=n.sibling}function Jv(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Ru,n)}catch{}switch(n.tag){case 5:yt||Xs(n,e);case 6:var r=rt,s=cn;rt=null,lr(t,e,n),rt=r,cn=s,rt!==null&&(cn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(cn?(t=rt,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Uo(t)):$c(rt,n.stateNode));break;case 4:r=rt,s=cn,rt=n.stateNode.containerInfo,cn=!0,lr(t,e,n),rt=r,cn=s;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&sd(n,e,o),s=s.next}while(s!==r)}lr(t,e,n);break;case 1:if(!yt&&(Xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,lr(t,e,n),yt=r):lr(t,e,n);break;default:lr(t,e,n)}}function gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new v1),e.forEach(function(r){var s=C1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,cn=!1;break e;case 3:rt=l.stateNode.containerInfo,cn=!0;break e;case 4:rt=l.stateNode.containerInfo,cn=!0;break e}l=l.return}if(rt===null)throw Error(z(160));Jv(i,o,s),rt=null,cn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){De(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,t),e=e.sibling}function Zv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),vn(t),r&4){try{ko(3,t,t.return),Vu(3,t)}catch(N){De(t,t.return,N)}try{ko(5,t,t.return)}catch(N){De(t,t.return,N)}}break;case 1:ln(e,t),vn(t),r&512&&n!==null&&Xs(n,n.return);break;case 5:if(ln(e,t),vn(t),r&512&&n!==null&&Xs(n,n.return),t.flags&32){var s=t.stateNode;try{Vo(s,"")}catch(N){De(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&E_(s,i),Nh(l,o);var h=Nh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?A_(s,m):f==="dangerouslySetInnerHTML"?S_(s,m):f==="children"?Vo(s,m):Hd(s,f,m,h)}switch(l){case"input":Ah(s,i);break;case"textarea":T_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?ei(s,!!i.multiple,I,!1):g!==!!i.multiple&&(i.defaultValue!=null?ei(s,!!i.multiple,i.defaultValue,!0):ei(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ho]=i}catch(N){De(t,t.return,N)}}break;case 6:if(ln(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){De(t,t.return,N)}}break;case 3:if(ln(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(N){De(t,t.return,N)}break;case 4:ln(e,t),vn(t);break;case 13:ln(e,t),vn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Sf=Fe())),r&4&&gg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(h=yt)||f,ln(e,t),yt=h):ln(e,t),vn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(g=W,I=g.child,g.tag){case 0:case 11:case 14:case 15:ko(4,g,g.return);break;case 1:Xs(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(N){De(r,n,N)}}break;case 5:Xs(g,g.return);break;case 22:if(g.memoizedState!==null){_g(m);continue}}I!==null?(I.return=g,W=I):_g(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=k_("display",o))}catch(N){De(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){De(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ln(e,t),vn(t),r&4&&gg(t);break;case 21:break;default:ln(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xv(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Vo(s,""),r.flags&=-33);var i=mg(t);ad(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=mg(t);od(t,l,o);break;default:throw Error(z(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E1(t,e,n){W=t,e0(t)}function e0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||al;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||yt;l=al;var h=yt;if(al=o,(yt=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?vg(s):u!==null?(u.return=o,W=u):vg(s);for(;i!==null;)W=i,e0(i),i=i.sibling;W=s,al=l,yt=h}yg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):yg(t)}}function yg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||Vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&tg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Uo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}yt||e.flags&512&&id(e)}catch(g){De(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function _g(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function vg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vu(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){De(e,s,u)}}var i=e.return;try{id(e)}catch(u){De(e,i,u)}break;case 5:var o=e.return;try{id(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var T1=Math.ceil,su=er.ReactCurrentDispatcher,Tf=er.ReactCurrentOwner,tn=er.ReactCurrentBatchConfig,ce=0,tt=null,Be=null,ot=0,Mt=0,Js=Br(0),Ge=0,Yo=null,ds=0,Lu=0,If=0,Ao=null,Ct=null,Sf=0,gi=1/0,On=null,iu=!1,ld=null,Rr=null,ll=!1,wr=null,ou=0,Ro=0,ud=null,Rl=-1,xl=0;function kt(){return ce&6?Fe():Rl!==-1?Rl:Rl=Fe()}function xr(t){return t.mode&1?ce&2&&ot!==0?ot&-ot:i1.transition!==null?(xl===0&&(xl=j_()),xl):(t=me,t!==0||(t=window.event,t=t===void 0?16:q_(t.type)),t):1}function fn(t,e,n,r){if(50<Ro)throw Ro=0,ud=null,Error(z(185));la(t,n,r),(!(ce&2)||t!==tt)&&(t===tt&&(!(ce&2)&&(Lu|=n),Ge===4&&fr(t,ot)),Ot(t,r),n===1&&ce===0&&!(e.mode&1)&&(gi=Fe()+500,bu&&$r()))}function Ot(t,e){var n=t.callbackNode;iI(t,e);var r=$l(t,t===tt?ot:0);if(r===0)n!==null&&xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xm(n),e===1)t.tag===0?s1(wg.bind(null,t)):cv(wg.bind(null,t)),e1(function(){!(ce&6)&&$r()}),n=null;else{switch(U_(r)){case 1:n=Qd;break;case 4:n=L_;break;case 16:n=Bl;break;case 536870912:n=M_;break;default:n=Bl}n=l0(n,t0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t0(t,e){if(Rl=-1,xl=0,ce&6)throw Error(z(327));var n=t.callbackNode;if(ii()&&t.callbackNode!==n)return null;var r=$l(t,t===tt?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=au(t,r);else{e=r;var s=ce;ce|=2;var i=r0();(tt!==t||ot!==e)&&(On=null,gi=Fe()+500,is(t,e));do try{k1();break}catch(l){n0(t,l)}while(!0);uf(),su.current=i,ce=s,Be!==null?e=0:(tt=null,ot=0,e=Ge)}if(e!==0){if(e===2&&(s=Lh(t),s!==0&&(r=s,e=cd(t,s))),e===1)throw n=Yo,is(t,0),fr(t,r),Ot(t,Fe()),n;if(e===6)fr(t,r);else{if(s=t.current.alternate,!(r&30)&&!I1(s)&&(e=au(t,r),e===2&&(i=Lh(t),i!==0&&(r=i,e=cd(t,i))),e===1))throw n=Yo,is(t,0),fr(t,r),Ot(t,Fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Zr(t,Ct,On);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=Sf+500-Fe(),10<e)){if($l(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Hh(Zr.bind(null,t,Ct,On),e);break}Zr(t,Ct,On);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-dn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T1(r/1960))-r,10<r){t.timeoutHandle=Hh(Zr.bind(null,t,Ct,On),r);break}Zr(t,Ct,On);break;case 5:Zr(t,Ct,On);break;default:throw Error(z(329))}}}return Ot(t,Fe()),t.callbackNode===n?t0.bind(null,t):null}function cd(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=au(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&hd(e)),t}function hd(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function I1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!pn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~If,e&=~Lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function wg(t){if(ce&6)throw Error(z(327));ii();var e=$l(t,0);if(!(e&1))return Ot(t,Fe()),null;var n=au(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=cd(t,r))}if(n===1)throw n=Yo,is(t,0),fr(t,e),Ot(t,Fe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,Ct,On),Ot(t,Fe()),null}function kf(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(gi=Fe()+500,bu&&$r())}}function fs(t){wr!==null&&wr.tag===0&&!(ce&6)&&ii();var e=ce;ce|=1;var n=tn.transition,r=me;try{if(tn.transition=null,me=1,t)return t()}finally{me=r,tn.transition=n,ce=e,!(ce&6)&&$r()}}function Af(){Mt=Js.current,Se(Js)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZI(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(of(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gl();break;case 3:pi(),Se(bt),Se(wt),mf();break;case 5:pf(r);break;case 4:pi();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:cf(r.type._context);break;case 22:case 23:Af()}n=n.return}if(tt=t,Be=t=Cr(t.current,null),ot=Mt=e,Ge=0,Yo=null,If=Lu=ds=0,Ct=Ao=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ns=null}return t}function n0(t,e){do{var n=Be;try{if(uf(),Sl.current=ru,nu){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}nu=!1}if(hs=0,et=Ke=xe=null,So=!1,Ko=0,Tf.current=null,n===null||n.return===null){Ge=1,Yo=e,Be=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=ag(o);if(I!==null){I.flags&=-257,lg(I,o,l,i,e),I.mode&1&&og(i,h,e),e=I,u=h;var x=e.updateQueue;if(x===null){var N=new Set;N.add(u),e.updateQueue=N}else x.add(u);break e}else{if(!(e&1)){og(i,h,e),Rf();break e}u=Error(z(426))}}else if(Ae&&l.mode&1){var O=ag(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),lg(O,o,l,i,e),af(mi(u,l));break e}}i=u=mi(u,l),Ge!==4&&(Ge=2),Ao===null?Ao=[i]:Ao.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var k=Uv(i,u,e);eg(i,k);break e;case 1:l=u;var w=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Rr===null||!Rr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Fv(i,l,e);eg(i,b);break e}}i=i.return}while(i!==null)}i0(n)}catch(F){e=F,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function r0(){var t=su.current;return su.current=ru,t===null?ru:t}function Rf(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),tt===null||!(ds&268435455)&&!(Lu&268435455)||fr(tt,ot)}function au(t,e){var n=ce;ce|=2;var r=r0();(tt!==t||ot!==e)&&(On=null,is(t,e));do try{S1();break}catch(s){n0(t,s)}while(!0);if(uf(),ce=n,su.current=r,Be!==null)throw Error(z(261));return tt=null,ot=0,Ge}function S1(){for(;Be!==null;)s0(Be)}function k1(){for(;Be!==null&&!YT();)s0(Be)}function s0(t){var e=a0(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?i0(t):Be=e,Tf.current=null}function i0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_1(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Be=null;return}}else if(n=y1(n,e,Mt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ge===0&&(Ge=5)}function Zr(t,e,n){var r=me,s=tn.transition;try{tn.transition=null,me=1,A1(t,e,n,r)}finally{tn.transition=s,me=r}return null}function A1(t,e,n,r){do ii();while(wr!==null);if(ce&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(oI(t,i),t===tt&&(Be=tt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,l0(Bl,function(){return ii(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=me;me=1;var l=ce;ce|=4,Tf.current=null,w1(t,n),Zv(n,t),WI(Bh),Hl=!!zh,Bh=zh=null,t.current=n,E1(n),XT(),ce=l,me=o,tn.transition=i}else t.current=n;if(ll&&(ll=!1,wr=t,ou=s),i=t.pendingLanes,i===0&&(Rr=null),eI(n.stateNode),Ot(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(iu)throw iu=!1,t=ld,ld=null,t;return ou&1&&t.tag!==0&&ii(),i=t.pendingLanes,i&1?t===ud?Ro++:(Ro=0,ud=t):Ro=0,$r(),null}function ii(){if(wr!==null){var t=U_(ou),e=tn.transition,n=me;try{if(tn.transition=null,me=16>t?16:t,wr===null)var r=!1;else{if(t=wr,wr=null,ou=0,ce&6)throw Error(z(331));var s=ce;for(ce|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:ko(8,f,i)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var g=f.sibling,I=f.return;if(Yv(f),f===h){W=null;break}if(g!==null){g.return=I,W=g;break}W=I}}}var x=i.alternate;if(x!==null){var N=x.child;if(N!==null){x.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ko(9,i,i.return)}var k=i.sibling;if(k!==null){k.return=i.return,W=k;break e}W=i.return}}var w=t.current;for(W=w;W!==null;){o=W;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,W=A;else e:for(o=w;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vu(9,l)}}catch(F){De(l,l.return,F)}if(l===o){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(ce=s,$r(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Ru,t)}catch{}r=!0}return r}finally{me=n,tn.transition=e}}return!1}function Eg(t,e,n){e=mi(n,e),e=Uv(t,e,1),t=Ar(t,e,1),e=kt(),t!==null&&(la(t,1,e),Ot(t,e))}function De(t,e,n){if(t.tag===3)Eg(t,t,n);else for(;e!==null;){if(e.tag===3){Eg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=mi(n,t),t=Fv(e,t,1),e=Ar(e,t,1),t=kt(),e!==null&&(la(e,1,t),Ot(e,t));break}}e=e.return}}function R1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ot&n)===n&&(Ge===4||Ge===3&&(ot&130023424)===ot&&500>Fe()-Sf?is(t,0):If|=n),Ot(t,e)}function o0(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=kt();t=Wn(t,e),t!==null&&(la(t,e,n),Ot(t,n))}function x1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o0(t,n)}function C1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),o0(t,n)}var a0;a0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,g1(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,Ae&&e.flags&1048576&&hv(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Al(t,e),t=e.pendingProps;var s=hi(e,wt.current);si(e,n),s=yf(null,e,r,t,s,n);var i=_f();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(i=!0,Ql(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,df(e),s.updater=Ou,e.stateNode=s,s._reactInternals=e,Xh(e,r,t,n),e=ed(null,e,r,!0,i,n)):(e.tag=0,Ae&&i&&sf(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=N1(r),t=un(r,t),s){case 0:e=Zh(null,e,r,t,n);break e;case 1:e=hg(null,e,r,t,n);break e;case 11:e=ug(null,e,r,t,n);break e;case 14:e=cg(null,e,r,un(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Zh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),hg(t,e,r,s,n);case 3:e:{if(Hv(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,yv(t,e),eu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=mi(Error(z(423)),e),e=dg(t,e,r,n,s);break e}else if(r!==s){s=mi(Error(z(424)),e),e=dg(t,e,r,n,s);break e}else for(jt=kr(e.stateNode.containerInfo.firstChild),zt=e,Ae=!0,hn=null,n=mv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),r===s){e=Kn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return _v(e),t===null&&Gh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,$h(r,s)?o=null:i!==null&&$h(r,i)&&(e.flags|=32),$v(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Gh(e),null;case 13:return qv(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fi(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),ug(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,we(Jl,r._currentValue),r._currentValue=o,i!==null)if(pn(i.value,o)){if(i.children===s.children&&!bt.current){e=Kn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Bn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Qh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,si(e,n),s=rn(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=un(r,e.pendingProps),s=un(r.type,s),cg(t,e,r,s,n);case 15:return zv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Al(t,e),e.tag=1,Dt(r)?(t=!0,Ql(e)):t=!1,si(e,n),jv(e,r,s),Xh(e,r,s,n),ed(null,e,r,!0,t,n);case 19:return Wv(t,e,n);case 22:return Bv(t,e,n)}throw Error(z(156,e.tag))};function l0(t,e){return V_(t,e)}function P1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new P1(t,e,n,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N1(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===Kd)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bs:return os(n.children,s,i,e);case qd:o=8,s|=8;break;case Eh:return t=en(12,n,e,s|2),t.elementType=Eh,t.lanes=i,t;case Th:return t=en(13,n,e,s),t.elementType=Th,t.lanes=i,t;case Ih:return t=en(19,n,e,s),t.elementType=Ih,t.lanes=i,t;case __:return Mu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g_:o=10;break e;case y_:o=9;break e;case Wd:o=11;break e;case Kd:o=14;break e;case cr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function os(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Mu(t,e,n,r){return t=en(22,t,r,e),t.elementType=__,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function b1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,r,s,i,o,l,u){return t=new b1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(i),t}function D1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u0(t){if(!t)return Vr;t=t._reactInternals;e:{if(Es(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Dt(n))return uv(t,n,e)}return e}function c0(t,e,n,r,s,i,o,l,u){return t=Cf(n,r,!0,t,s,i,o,l,u),t.context=u0(null),n=t.current,r=kt(),s=xr(n),i=Bn(r,s),i.callback=e??null,Ar(n,i,s),t.current.lanes=s,la(t,s,r),Ot(t,r),t}function ju(t,e,n,r){var s=e.current,i=kt(),o=xr(s);return n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(s,e,o),t!==null&&(fn(t,s,o,i),Il(t,s,o)),o}function lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function O1(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}Uu.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));ju(t,e,null,null)};Uu.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){ju(null,t,null,null)}),e[qn]=null}};function Uu(t){this._internalRoot=t}Uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=B_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&H_(t)}};function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function V1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=lu(o);i.call(h)}}var o=c0(e,r,t,0,null,!1,!1,"",Ig);return t._reactRootContainer=o,t[qn]=o.current,Bo(t.nodeType===8?t.parentNode:t),fs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=lu(u);l.call(h)}}var u=Cf(t,0,!1,null,null,!1,!1,"",Ig);return t._reactRootContainer=u,t[qn]=u.current,Bo(t.nodeType===8?t.parentNode:t),fs(function(){ju(e,u,n,r)}),u}function zu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=lu(o);l.call(u)}}ju(e,o,t,s)}else o=V1(n,e,t,s,r);return lu(o)}F_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(Yd(e,n|1),Ot(e,Fe()),!(ce&6)&&(gi=Fe()+500,$r()))}break;case 13:fs(function(){var r=Wn(t,1);if(r!==null){var s=kt();fn(r,t,1,s)}}),Pf(t,1)}};Xd=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=kt();fn(e,t,134217728,n)}Pf(t,134217728)}};z_=function(t){if(t.tag===13){var e=xr(t),n=Wn(t,e);if(n!==null){var r=kt();fn(n,t,e,r)}Pf(t,e)}};B_=function(){return me};$_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Dh=function(t,e,n){switch(e){case"input":if(Ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Nu(r);if(!s)throw Error(z(90));w_(r),Ah(r,s)}}}break;case"textarea":T_(t,n);break;case"select":e=n.value,e!=null&&ei(t,!!n.multiple,e,!1)}};C_=kf;P_=fs;var L1={usingClientEntryPoint:!1,Events:[ca,Ws,Nu,R_,x_,kf]},ao={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M1={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D_(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||O1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Ru=ul.inject(M1),In=ul}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L1;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(z(200));return D1(t,e,null,n)};$t.createRoot=function(t,e){if(!bf(t))throw Error(z(299));var n=!1,r="",s=h0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,r,s),t[qn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Nf(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=D_(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return fs(t)};$t.hydrate=function(t,e,n){if(!Fu(e))throw Error(z(200));return zu(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!bf(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=h0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c0(e,null,t,1,n??null,s,!1,i,o),t[qn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Uu(e)};$t.render=function(t,e,n){if(!Fu(e))throw Error(z(200));return zu(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Fu(t))throw Error(z(40));return t._reactRootContainer?(fs(function(){zu(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};$t.unstable_batchedUpdates=kf;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fu(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return zu(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function d0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0)}catch(t){console.error(t)}}d0(),d_.exports=$t;var j1=d_.exports,Sg=j1;vh.createRoot=Sg.createRoot,vh.hydrateRoot=Sg.hydrateRoot;var kg={};/**
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
 */const f0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},U1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},p0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,I=h&63;u||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(f0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new F1;const g=i<<2|l>>4;if(r.push(g),h!==64){const I=l<<4&240|h>>2;if(r.push(I),m!==64){const x=h<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class F1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z1=function(t){const e=f0(t);return p0.encodeByteArray(e,!0)},uu=function(t){return z1(t).replace(/\./g,"")},m0=function(t){try{return p0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function B1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $1=()=>B1().__FIREBASE_DEFAULTS__,H1=()=>{if(typeof process>"u"||typeof kg>"u")return;const t=kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},q1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&m0(t[1]);return e&&JSON.parse(e)},Bu=()=>{try{return $1()||H1()||q1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},g0=t=>{var e,n;return(n=(e=Bu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},y0=t=>{const e=g0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_0=()=>{var t;return(t=Bu())===null||t===void 0?void 0:t.config},v0=t=>{var e;return(e=Bu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class W1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function w0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[uu(JSON.stringify(n)),uu(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function G1(){var t;const e=(t=Bu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Q1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Y1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function X1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J1(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Z1(){return!G1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eS(){try{return typeof indexedDB=="object"}catch{return!1}}function tS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const nS="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nS,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?rS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,l,r)}}function rS(t,e){return t.replace(sS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sS=/\{\$([^}]+)}/g;function iS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ag(i)&&Ag(o)){if(!cu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ag(t){return t!==null&&typeof t=="object"}/**
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
 */function fa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oS(t,e){const n=new aS(t,e);return n.subscribe.bind(n)}class aS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zc),s.error===void 0&&(s.error=Zc),s.complete===void 0&&(s.complete=Zc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const es="[DEFAULT]";/**
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
 */class uS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new W1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hS(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cS(t){return t===es?void 0:t}function hS(t){return t.instantiationMode==="EAGER"}/**
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
 */class dS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const fS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},pS=ae.INFO,mS={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},gS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Df{constructor(e){this.name=e,this._logLevel=pS,this._logHandler=gS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const yS=(t,e)=>e.some(n=>t instanceof n);let Rg,xg;function _S(){return Rg||(Rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vS(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E0=new WeakMap,dd=new WeakMap,T0=new WeakMap,eh=new WeakMap,Of=new WeakMap;function wS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&E0.set(n,t)}).catch(()=>{}),Of.set(e,t),e}function ES(t){if(dd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||T0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TS(t){fd=t(fd)}function IS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return T0.set(r,e.sort?e.sort():[e]),Pr(r)}:vS().includes(t)?function(...e){return t.apply(th(this),e),Pr(E0.get(this))}:function(...e){return Pr(t.apply(th(this),e))}}function SS(t){return typeof t=="function"?IS(t):(t instanceof IDBTransaction&&ES(t),yS(t,_S())?new Proxy(t,fd):t)}function Pr(t){if(t instanceof IDBRequest)return wS(t);if(eh.has(t))return eh.get(t);const e=SS(t);return e!==t&&(eh.set(t,e),Of.set(e,t)),e}const th=t=>Of.get(t);function kS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pr(o.result),u.oldVersion,u.newVersion,Pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const AS=["get","getKey","getAll","getAllKeys","count"],RS=["put","add","delete","clear"],nh=new Map;function Cg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||AS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return nh.set(e,i),i}TS(t=>({...t,get:(e,n,r)=>Cg(e,n)||t.get(e,n,r),has:(e,n)=>!!Cg(e,n)||t.has(e,n)}));/**
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
 */class xS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",Pg="0.10.13";/**
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
 */const Gn=new Df("@firebase/app"),PS="@firebase/app-compat",NS="@firebase/analytics-compat",bS="@firebase/analytics",DS="@firebase/app-check-compat",OS="@firebase/app-check",VS="@firebase/auth",LS="@firebase/auth-compat",MS="@firebase/database",jS="@firebase/data-connect",US="@firebase/database-compat",FS="@firebase/functions",zS="@firebase/functions-compat",BS="@firebase/installations",$S="@firebase/installations-compat",HS="@firebase/messaging",qS="@firebase/messaging-compat",WS="@firebase/performance",KS="@firebase/performance-compat",GS="@firebase/remote-config",QS="@firebase/remote-config-compat",YS="@firebase/storage",XS="@firebase/storage-compat",JS="@firebase/firestore",ZS="@firebase/vertexai-preview",ek="@firebase/firestore-compat",tk="firebase",nk="10.14.1";/**
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
 */const md="[DEFAULT]",rk={[pd]:"fire-core",[PS]:"fire-core-compat",[bS]:"fire-analytics",[NS]:"fire-analytics-compat",[OS]:"fire-app-check",[DS]:"fire-app-check-compat",[VS]:"fire-auth",[LS]:"fire-auth-compat",[MS]:"fire-rtdb",[jS]:"fire-data-connect",[US]:"fire-rtdb-compat",[FS]:"fire-fn",[zS]:"fire-fn-compat",[BS]:"fire-iid",[$S]:"fire-iid-compat",[HS]:"fire-fcm",[qS]:"fire-fcm-compat",[WS]:"fire-perf",[KS]:"fire-perf-compat",[GS]:"fire-rc",[QS]:"fire-rc-compat",[YS]:"fire-gcs",[XS]:"fire-gcs-compat",[JS]:"fire-fst",[ek]:"fire-fst-compat",[ZS]:"fire-vertex","fire-js":"fire-js",[tk]:"fire-js-all"};/**
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
 */const hu=new Map,sk=new Map,gd=new Map;function Ng(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(gd.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,t);for(const n of hu.values())Ng(n,t);for(const n of sk.values())Ng(n,t);return!0}function $u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jn(t){return t.settings!==void 0}/**
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
 */const ik={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new da("app","Firebase",ik);/**
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
 */class ok{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=nk;function I0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:md,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nr.create("bad-app-name",{appName:String(s)});if(n||(n=_0()),!n)throw Nr.create("no-options");const i=hu.get(s);if(i){if(cu(n,i.options)&&cu(r,i.config))return i;throw Nr.create("duplicate-app",{appName:s})}const o=new dS(s);for(const u of gd.values())o.addComponent(u);const l=new ok(n,r,o);return hu.set(s,l),l}function Vf(t=md){const e=hu.get(t);if(!e&&t===md&&_0())return I0();if(!e)throw Nr.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let s=(r=rk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}ps(new Lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ak="firebase-heartbeat-database",lk=1,Xo="firebase-heartbeat-store";let rh=null;function S0(){return rh||(rh=kS(ak,lk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),rh}async function uk(t){try{const n=(await S0()).transaction(Xo),r=await n.objectStore(Xo).get(k0(t));return await n.done,r}catch(e){if(e instanceof Nn)Gn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function bg(t,e){try{const r=(await S0()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,k0(t)),await r.done}catch(n){if(n instanceof Nn)Gn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function k0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ck=1024,hk=30*24*60*60*1e3;class dk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dg(),{heartbeatsToSend:r,unsentEntries:s}=fk(this._heartbeatsCache.heartbeats),i=uu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function Dg(){return new Date().toISOString().substring(0,10)}function fk(t,e=ck){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Og(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Og(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eS()?tS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Og(t){return uu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mk(t){ps(new Lr("platform-logger",e=>new xS(e),"PRIVATE")),ps(new Lr("heartbeat",e=>new dk(e),"PRIVATE")),kn(pd,Pg,t),kn(pd,Pg,"esm2017"),kn("fire-js","")}mk("");var gk="firebase",yk="10.14.1";/**
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
 */kn(gk,yk,"app");function Lf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function A0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _k=A0,R0=new da("auth","Firebase",A0());/**
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
 */const du=new Df("@firebase/auth");function vk(t,...e){du.logLevel<=ae.WARN&&du.warn(`Auth (${Ts}): ${t}`,...e)}function Pl(t,...e){du.logLevel<=ae.ERROR&&du.error(`Auth (${Ts}): ${t}`,...e)}/**
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
 */function Qn(t,...e){throw Mf(t,...e)}function An(t,...e){return Mf(t,...e)}function x0(t,e,n){const r=Object.assign(Object.assign({},_k()),{[e]:n});return new da("auth","Firebase",r).create(e,{appName:t.name})}function br(t){return x0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return R0.create(t,...e)}function ee(t,e,...n){if(!t)throw Mf(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pl(e),new Error(e)}function Yn(t,e){t||Un(e)}/**
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
 */function yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wk(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ek(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wk()||Y1()||"connection"in navigator)?navigator.onLine:!0}function Tk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=K1()||X1()}get(){return Ek()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jf(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class C0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ik={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sk=new pa(3e4,6e4);function Hu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ri(t,e,n,r,s={}){return P0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=fa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return Q1()||(h.referrerPolicy="no-referrer"),C0.fetch()(b0(t,t.config.apiHost,n,l),h)})}async function P0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ik),e);try{const s=new kk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw cl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw x0(t,f,h);Qn(t,f)}}catch(s){if(s instanceof Nn)throw s;Qn(t,"network-request-failed",{message:String(s)})}}async function N0(t,e,n,r,s={}){const i=await Ri(t,e,n,r,s);return"mfaPendingCredential"in i&&Qn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function b0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?jf(t.config,s):`${t.config.apiScheme}://${s}`}class kk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),Sk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=An(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Ak(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function D0(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rk(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),s=Uf(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xo(sh(s.auth_time)),issuedAtTime:xo(sh(s.iat)),expirationTime:xo(sh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function Uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pl("JWT malformed, contained fewer than 3 sections"),null;try{const s=m0(n);return s?JSON.parse(s):(Pl("Failed to decode base64 JWT payload"),null)}catch(s){return Pl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lg(t){const e=Uf(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&xk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Jo(t,D0(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?O0(i.providerUserInfo):[],l=Nk(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _d(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function Pk(t){const e=Oe(t);await fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function O0(t){return t.map(e=>{var{providerId:n}=e,r=Lf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bk(t,e){const n=await P0(t,{},async()=>{const r=fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=b0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",C0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dk(t,e){return Ri(t,"POST","/v2/accounts:revokeToken",Hu(t,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Lg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new oi;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function ur(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _d(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rk(this,e)}reload(){return Pk(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await Jo(this,Ak(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:b,isAnonymous:F,providerData:L,stsTokenManager:E}=n;ee(A&&E,e,"internal-error");const _=oi.fromJSON(this.name,E);ee(typeof A=="string",e,"internal-error"),ur(m,e.name),ur(g,e.name),ee(typeof b=="boolean",e,"internal-error"),ee(typeof F=="boolean",e,"internal-error"),ur(I,e.name),ur(x,e.name),ur(N,e.name),ur(O,e.name),ur(k,e.name),ur(w,e.name);const v=new Fn({uid:A,auth:e,email:g,emailVerified:b,displayName:m,isAnonymous:F,photoURL:x,phoneNumber:I,tenantId:N,stsTokenManager:_,createdAt:k,lastLoginAt:w});return L&&Array.isArray(L)&&(v.providerData=L.map(T=>Object.assign({},T))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new oi;s.updateFromServerResponse(n);const i=new Fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?O0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new oi;l.updateFromIdToken(r);const u=new Fn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _d(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Mg=new Map;function zn(t){Yn(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
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
 */class V0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V0.type="NONE";const jg=V0;/**
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
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ai(zn(jg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||zn(jg);const o=Nl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=Fn._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ai(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ai(i,e,r))}}/**
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
 */function Ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z0(e))return"Blackberry";if(B0(e))return"Webos";if(M0(e))return"Safari";if((e.includes("chrome/")||j0(e))&&!e.includes("edge/"))return"Chrome";if(F0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L0(t=Et()){return/firefox\//i.test(t)}function M0(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j0(t=Et()){return/crios\//i.test(t)}function U0(t=Et()){return/iemobile/i.test(t)}function F0(t=Et()){return/android/i.test(t)}function z0(t=Et()){return/blackberry/i.test(t)}function B0(t=Et()){return/webos/i.test(t)}function Ff(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ok(t=Et()){var e;return Ff(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vk(){return J1()&&document.documentMode===10}function $0(t=Et()){return Ff(t)||F0(t)||B0(t)||z0(t)||/windows phone/i.test(t)||U0(t)}/**
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
 */function H0(t,e=[]){let n;switch(t){case"Browser":n=Ug(Et());break;case"Worker":n=`${Ug(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
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
 */class Lk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Mk(t,e={}){return Ri(t,"GET","/v2/passwordPolicy",Hu(t,e))}/**
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
 */const jk=6;class Uk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Fk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new Lk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await D0(this,{idToken:e}),r=await Fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(br(this));const n=e?Oe(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mk(this),n=new Uk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new da("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=H0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qu(t){return Oe(t)}class Fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=oS(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zk(t){zf=t}function Bk(t){return zf.loadJS(t)}function $k(){return zf.gapiScript}function Hk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function qk(t,e){const n=$u(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(cu(i,e??{}))return s;Qn(s,"already-initialized")}return n.initialize({options:e})}function Wk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Kk(t,e,n){const r=qu(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=q0(e),{host:o,port:l}=Gk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Qk()}function q0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gk(t){const e=q0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zg(o)}}}function zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class W0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
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
 */async function li(t,e){return N0(t,"POST","/v1/accounts:signInWithIdp",Hu(t,e))}/**
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
 */const Yk="http://localhost";class ms extends W0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Lf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ms(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:Yk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fa(n)}return e}}/**
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
 */class K0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ma extends K0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends ma{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class mr extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
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
 */class gr extends ma{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */class yr extends ma{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
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
 */async function Xk(t,e){return N0(t,"POST","/v1/accounts:signUp",Hu(t,e))}/**
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
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Fn._fromIdTokenResponse(e,r,s),o=Bg(r);return new Mr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bg(r);return new Mr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Jk(t){var e;if(jn(t.app))return Promise.reject(br(t));const n=qu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Mr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Xk(n,{returnSecureToken:!0}),s=await Mr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class pu extends Nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pu(e,n,r,s)}}function G0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pu._fromErrorAndOperation(t,i,e,r):i})}async function Zk(t,e,n=!1){const r=await Jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mr._forOperation(t,"link",r)}/**
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
 */async function eA(t,e,n=!1){const{auth:r}=t;if(jn(r.app))return Promise.reject(br(r));const s="reauthenticate";try{const i=await Jo(t,G0(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Uf(i.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),Mr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qn(r,"user-mismatch"),i}}/**
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
 */async function tA(t,e,n=!1){if(jn(t.app))return Promise.reject(br(t));const r="signIn",s=await G0(t,r,e),i=await Mr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function nA(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function rA(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function sA(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}const mu="__sak";/**
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
 */class Q0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mu,"1"),this.storage.removeItem(mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iA=1e3,oA=10;class Y0 extends Q0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Vk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y0.type="LOCAL";const aA=Y0;/**
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
 */class X0 extends Q0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X0.type="SESSION";const J0=X0;/**
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
 */function lA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await lA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wu.receivers=[];/**
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
 */function Bf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Bf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function cA(t){Rn().location.href=t}/**
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
 */function Z0(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function hA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fA(){return Z0()?self:null}/**
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
 */const ew="firebaseLocalStorageDb",pA=1,gu="firebaseLocalStorage",tw="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ku(t,e){return t.transaction([gu],e?"readwrite":"readonly").objectStore(gu)}function mA(){const t=indexedDB.deleteDatabase(ew);return new ga(t).toPromise()}function vd(){const t=indexedDB.open(ew,pA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gu,{keyPath:tw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gu)?e(r):(r.close(),await mA(),e(await vd()))})})}async function $g(t,e,n){const r=Ku(t,!0).put({[tw]:e,value:n});return new ga(r).toPromise()}async function gA(t,e){const n=Ku(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function Hg(t,e){const n=Ku(t,!0).delete(e);return new ga(n).toPromise()}const yA=800,_A=3;class nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_A)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wu._getInstance(fA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hA(),!this.activeServiceWorker)return;this.sender=new uA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await $g(e,mu,"1"),await Hg(e,mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ku(s,!1).getAll();return new ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nw.type="LOCAL";const vA=nw;new pa(3e4,6e4);/**
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
 */function wA(t,e){return e?zn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $f extends W0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EA(t){return tA(t.auth,new $f(t),t.bypassAuthState)}function TA(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),eA(n,new $f(t),t.bypassAuthState)}async function IA(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Zk(n,new $f(t),t.bypassAuthState)}/**
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
 */class rw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EA;case"linkViaPopup":case"linkViaRedirect":return IA;case"reauthViaPopup":case"reauthViaRedirect":return TA;default:Qn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SA=new pa(2e3,1e4);class Zs extends rw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zs.currentPopupAction&&Zs.currentPopupAction.cancel(),Zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SA.get())};e()}}Zs.currentPopupAction=null;/**
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
 */const kA="pendingRedirect",bl=new Map;class AA extends rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await RA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RA(t,e){const n=PA(e),r=CA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xA(t,e){bl.set(t._key(),e)}function CA(t){return zn(t._redirectPersistence)}function PA(t){return Nl(kA,t.config.apiKey,t.name)}async function NA(t,e,n=!1){if(jn(t.app))return Promise.reject(br(t));const r=qu(t),s=wA(r,e),o=await new AA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const bA=10*60*1e3;class DA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bA&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sw(t);default:return!1}}/**
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
 */async function VA(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
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
 */const LA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MA=/^https?/;async function jA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VA(t);for(const n of e)try{if(UA(n))return}catch{}Qn(t,"unauthorized-domain")}function UA(t){const e=yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MA.test(n))return!1;if(LA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const FA=new pa(3e4,6e4);function Wg(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zA(t){return new Promise((e,n)=>{var r,s,i;function o(){Wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wg(),n(An(t,"network-request-failed"))},timeout:FA.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const l=Hk("iframefcb");return Rn()[l]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},Bk(`${$k()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Dl=null,e})}let Dl=null;function BA(t){return Dl=Dl||zA(t),Dl}/**
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
 */const $A=new pa(5e3,15e3),HA="__/auth/iframe",qA="emulator/auth/iframe",WA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GA(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jf(e,qA):`https://${t.config.authDomain}/${HA}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},s=KA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${fa(r).slice(1)}`}async function QA(t){const e=await BA(t),n=Rn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:GA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},$A.get());function u(){Rn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const YA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XA=500,JA=600,ZA="_blank",eR="http://localhost";class Kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tR(t,e,n,r=XA,s=JA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},YA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Et().toLowerCase();n&&(l=j0(h)?ZA:n),L0(h)&&(e=e||eR,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,x])=>`${g}${I}=${x},`,"");if(Ok(h)&&l!=="_self")return nR(e||"",l),new Kg(null);const m=window.open(e||"",l,f);ee(m,t,"popup-blocked");try{m.focus()}catch{}return new Kg(m)}function nR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rR="__/auth/handler",sR="emulator/auth/handler",iR=encodeURIComponent("fac");async function Gg(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:s};if(e instanceof K0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ma){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${iR}=${encodeURIComponent(u)}`:"";return`${oR(t)}?${fa(l).slice(1)}${h}`}function oR({config:t}){return t.emulator?jf(t,sR):`https://${t.authDomain}/${rR}`}/**
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
 */const ih="webStorageSupport";class aR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J0,this._completeRedirectFn=NA,this._overrideRedirectResult=xA}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Gg(e,n,r,yd(),s);return tR(e,o,Bf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gg(e,n,r,yd(),s);return cA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QA(e),r=new DA(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ih,{type:ih},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ih];o!==void 0&&n(!!o),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $0()||M0()||Ff()}}const lR=aR;var Qg="@firebase/auth",Yg="1.7.9";/**
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
 */class uR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hR(t){ps(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H0(t)},h=new Fk(r,s,i,u);return Wk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ps(new Lr("auth-internal",e=>{const n=qu(e.getProvider("auth").getImmediate());return(r=>new uR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Qg,Yg,cR(t)),kn(Qg,Yg,"esm2017")}/**
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
 */const dR=5*60,fR=v0("authIdTokenMaxAge")||dR;let Xg=null;const pR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fR)return;const s=n==null?void 0:n.token;Xg!==s&&(Xg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mR(t=Vf()){const e=$u(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qk(t,{popupRedirectResolver:lR,persistence:[vA,aA,J0]}),r=v0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pR(i.toString());rA(n,o,()=>o(n.currentUser)),nA(n,l=>o(l))}}const s=g0("auth");return s&&Kk(n,`http://${s}`),n}function gR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=An("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hR("Browser");var Jg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,iw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function v(){}v.prototype=_.prototype,E.D=_.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,R,C){for(var S=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)S[ct-2]=arguments[ct];return _.prototype[R].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,v){v||(v=0);var T=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)T[R]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(R=0;16>R;++R)T[R]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=E.g[0],v=E.g[1],R=E.g[2];var C=E.g[3],S=_+(C^v&(R^C))+T[0]+3614090360&4294967295;_=v+(S<<7&4294967295|S>>>25),S=C+(R^_&(v^R))+T[1]+3905402710&4294967295,C=_+(S<<12&4294967295|S>>>20),S=R+(v^C&(_^v))+T[2]+606105819&4294967295,R=C+(S<<17&4294967295|S>>>15),S=v+(_^R&(C^_))+T[3]+3250441966&4294967295,v=R+(S<<22&4294967295|S>>>10),S=_+(C^v&(R^C))+T[4]+4118548399&4294967295,_=v+(S<<7&4294967295|S>>>25),S=C+(R^_&(v^R))+T[5]+1200080426&4294967295,C=_+(S<<12&4294967295|S>>>20),S=R+(v^C&(_^v))+T[6]+2821735955&4294967295,R=C+(S<<17&4294967295|S>>>15),S=v+(_^R&(C^_))+T[7]+4249261313&4294967295,v=R+(S<<22&4294967295|S>>>10),S=_+(C^v&(R^C))+T[8]+1770035416&4294967295,_=v+(S<<7&4294967295|S>>>25),S=C+(R^_&(v^R))+T[9]+2336552879&4294967295,C=_+(S<<12&4294967295|S>>>20),S=R+(v^C&(_^v))+T[10]+4294925233&4294967295,R=C+(S<<17&4294967295|S>>>15),S=v+(_^R&(C^_))+T[11]+2304563134&4294967295,v=R+(S<<22&4294967295|S>>>10),S=_+(C^v&(R^C))+T[12]+1804603682&4294967295,_=v+(S<<7&4294967295|S>>>25),S=C+(R^_&(v^R))+T[13]+4254626195&4294967295,C=_+(S<<12&4294967295|S>>>20),S=R+(v^C&(_^v))+T[14]+2792965006&4294967295,R=C+(S<<17&4294967295|S>>>15),S=v+(_^R&(C^_))+T[15]+1236535329&4294967295,v=R+(S<<22&4294967295|S>>>10),S=_+(R^C&(v^R))+T[1]+4129170786&4294967295,_=v+(S<<5&4294967295|S>>>27),S=C+(v^R&(_^v))+T[6]+3225465664&4294967295,C=_+(S<<9&4294967295|S>>>23),S=R+(_^v&(C^_))+T[11]+643717713&4294967295,R=C+(S<<14&4294967295|S>>>18),S=v+(C^_&(R^C))+T[0]+3921069994&4294967295,v=R+(S<<20&4294967295|S>>>12),S=_+(R^C&(v^R))+T[5]+3593408605&4294967295,_=v+(S<<5&4294967295|S>>>27),S=C+(v^R&(_^v))+T[10]+38016083&4294967295,C=_+(S<<9&4294967295|S>>>23),S=R+(_^v&(C^_))+T[15]+3634488961&4294967295,R=C+(S<<14&4294967295|S>>>18),S=v+(C^_&(R^C))+T[4]+3889429448&4294967295,v=R+(S<<20&4294967295|S>>>12),S=_+(R^C&(v^R))+T[9]+568446438&4294967295,_=v+(S<<5&4294967295|S>>>27),S=C+(v^R&(_^v))+T[14]+3275163606&4294967295,C=_+(S<<9&4294967295|S>>>23),S=R+(_^v&(C^_))+T[3]+4107603335&4294967295,R=C+(S<<14&4294967295|S>>>18),S=v+(C^_&(R^C))+T[8]+1163531501&4294967295,v=R+(S<<20&4294967295|S>>>12),S=_+(R^C&(v^R))+T[13]+2850285829&4294967295,_=v+(S<<5&4294967295|S>>>27),S=C+(v^R&(_^v))+T[2]+4243563512&4294967295,C=_+(S<<9&4294967295|S>>>23),S=R+(_^v&(C^_))+T[7]+1735328473&4294967295,R=C+(S<<14&4294967295|S>>>18),S=v+(C^_&(R^C))+T[12]+2368359562&4294967295,v=R+(S<<20&4294967295|S>>>12),S=_+(v^R^C)+T[5]+4294588738&4294967295,_=v+(S<<4&4294967295|S>>>28),S=C+(_^v^R)+T[8]+2272392833&4294967295,C=_+(S<<11&4294967295|S>>>21),S=R+(C^_^v)+T[11]+1839030562&4294967295,R=C+(S<<16&4294967295|S>>>16),S=v+(R^C^_)+T[14]+4259657740&4294967295,v=R+(S<<23&4294967295|S>>>9),S=_+(v^R^C)+T[1]+2763975236&4294967295,_=v+(S<<4&4294967295|S>>>28),S=C+(_^v^R)+T[4]+1272893353&4294967295,C=_+(S<<11&4294967295|S>>>21),S=R+(C^_^v)+T[7]+4139469664&4294967295,R=C+(S<<16&4294967295|S>>>16),S=v+(R^C^_)+T[10]+3200236656&4294967295,v=R+(S<<23&4294967295|S>>>9),S=_+(v^R^C)+T[13]+681279174&4294967295,_=v+(S<<4&4294967295|S>>>28),S=C+(_^v^R)+T[0]+3936430074&4294967295,C=_+(S<<11&4294967295|S>>>21),S=R+(C^_^v)+T[3]+3572445317&4294967295,R=C+(S<<16&4294967295|S>>>16),S=v+(R^C^_)+T[6]+76029189&4294967295,v=R+(S<<23&4294967295|S>>>9),S=_+(v^R^C)+T[9]+3654602809&4294967295,_=v+(S<<4&4294967295|S>>>28),S=C+(_^v^R)+T[12]+3873151461&4294967295,C=_+(S<<11&4294967295|S>>>21),S=R+(C^_^v)+T[15]+530742520&4294967295,R=C+(S<<16&4294967295|S>>>16),S=v+(R^C^_)+T[2]+3299628645&4294967295,v=R+(S<<23&4294967295|S>>>9),S=_+(R^(v|~C))+T[0]+4096336452&4294967295,_=v+(S<<6&4294967295|S>>>26),S=C+(v^(_|~R))+T[7]+1126891415&4294967295,C=_+(S<<10&4294967295|S>>>22),S=R+(_^(C|~v))+T[14]+2878612391&4294967295,R=C+(S<<15&4294967295|S>>>17),S=v+(C^(R|~_))+T[5]+4237533241&4294967295,v=R+(S<<21&4294967295|S>>>11),S=_+(R^(v|~C))+T[12]+1700485571&4294967295,_=v+(S<<6&4294967295|S>>>26),S=C+(v^(_|~R))+T[3]+2399980690&4294967295,C=_+(S<<10&4294967295|S>>>22),S=R+(_^(C|~v))+T[10]+4293915773&4294967295,R=C+(S<<15&4294967295|S>>>17),S=v+(C^(R|~_))+T[1]+2240044497&4294967295,v=R+(S<<21&4294967295|S>>>11),S=_+(R^(v|~C))+T[8]+1873313359&4294967295,_=v+(S<<6&4294967295|S>>>26),S=C+(v^(_|~R))+T[15]+4264355552&4294967295,C=_+(S<<10&4294967295|S>>>22),S=R+(_^(C|~v))+T[6]+2734768916&4294967295,R=C+(S<<15&4294967295|S>>>17),S=v+(C^(R|~_))+T[13]+1309151649&4294967295,v=R+(S<<21&4294967295|S>>>11),S=_+(R^(v|~C))+T[4]+4149444226&4294967295,_=v+(S<<6&4294967295|S>>>26),S=C+(v^(_|~R))+T[11]+3174756917&4294967295,C=_+(S<<10&4294967295|S>>>22),S=R+(_^(C|~v))+T[2]+718787259&4294967295,R=C+(S<<15&4294967295|S>>>17),S=v+(C^(R|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var v=_-this.blockSize,T=this.B,R=this.h,C=0;C<_;){if(R==0)for(;C<=v;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<_;)if(T[R++]=E.charCodeAt(C++),R==this.blockSize){s(this,T),R=0;break}}else for(;C<_;)if(T[R++]=E[C++],R==this.blockSize){s(this,T),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var v=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=v&255,v/=256;for(this.u(E),E=Array(16),_=v=0;4>_;++_)for(var T=0;32>T;T+=8)E[v++]=this.g[_]>>>T&255;return E};function i(E,_){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=_(E)}function o(E,_){this.h=_;for(var v=[],T=!0,R=E.length-1;0<=R;R--){var C=E[R]|0;T&&C==_||(v[R]=C,T=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return O(h(-E));for(var _=[],v=1,T=0;E>=v;T++)_[T]=E/v|0,v*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return O(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),T=m,R=0;R<E.length;R+=8){var C=Math.min(8,E.length-R),S=parseInt(E.substring(R,R+C),_);8>C?(C=h(Math.pow(_,C)),T=T.j(C).add(h(S))):(T=T.j(v),T=T.add(h(S)))}return T}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var E=0,_=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(N(this))return"-"+O(this).toString(E);for(var _=h(Math.pow(E,6)),v=this,T="";;){var R=b(v,_).g;v=k(v,R.j(_));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=R,x(v))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=k(this,E),N(E)?-1:x(E)?0:1};function O(E){for(var _=E.g.length,v=[],T=0;T<_;T++)v[T]=~E.g[T];return new o(v,~E.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),v=[],T=0,R=0;R<=_;R++){var C=T+(this.i(R)&65535)+(E.i(R)&65535),S=(C>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);T=S>>>16,C&=65535,S&=65535,v[R]=S<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function k(E,_){return E.add(O(_))}t.j=function(E){if(x(this)||x(E))return m;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(0>this.l(I)&&0>E.l(I))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,v=[],T=0;T<2*_;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<E.g.length;R++){var C=this.i(T)>>>16,S=this.i(T)&65535,ct=E.i(R)>>>16,gn=E.i(R)&65535;v[2*T+2*R]+=S*gn,w(v,2*T+2*R),v[2*T+2*R+1]+=C*gn,w(v,2*T+2*R+1),v[2*T+2*R+1]+=S*ct,w(v,2*T+2*R+1),v[2*T+2*R+2]+=C*ct,w(v,2*T+2*R+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new o(v,0)};function w(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function A(E,_){this.g=E,this.h=_}function b(E,_){if(x(_))throw Error("division by zero");if(x(E))return new A(m,m);if(N(E))return _=b(O(E),_),new A(O(_.g),O(_.h));if(N(_))return _=b(E,O(_)),new A(O(_.g),_.h);if(30<E.g.length){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=_;0>=T.l(E);)v=F(v),T=F(T);var R=L(v,1),C=L(T,1);for(T=L(T,2),v=L(v,2);!x(T);){var S=C.add(T);0>=S.l(E)&&(R=R.add(v),C=S),T=L(T,1),v=L(v,1)}return _=k(E,R.j(_)),new A(R,_)}for(R=m;0<=E.l(_);){for(v=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(v),S=C.j(_);N(S)||0<S.l(E);)v-=T,C=h(v),S=C.j(_);x(C)&&(C=g),R=R.add(C),E=k(E,S)}return new A(R,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)&E.i(T);return new o(v,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)|E.i(T);return new o(v,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)^E.i(T);return new o(v,this.h^E.h)};function F(E){for(var _=E.g.length+1,v=[],T=0;T<_;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(v,E.h)}function L(E,_){var v=_>>5;_%=32;for(var T=E.g.length-v,R=[],C=0;C<T;C++)R[C]=0<_?E.i(C+v)>>>_|E.i(C+v+1)<<32-_:E.i(C+v);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,as=o}).apply(typeof Jg<"u"?Jg:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ow,mo,aw,Ol,wd,lw,uw,cw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var P=a[p];if(!(P in d))break e;d=d[P]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,p=!1,P={next:function(){if(!p&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function I(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function x(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,P,D){for(var B=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)B[_e-2]=arguments[_e];return c.prototype[P].apply(p,B)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const P=a.length||0,D=p.length||0;a.length=P+D;for(let B=0;B<D;B++)a[P+B]=p[B]}else a.push(p)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var F=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function L(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function _(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)a[d]=p[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function S(){var a=X;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ct{constructor(){this.h=this.g=null}add(c,d){const p=gn.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var gn=new k(()=>new yn,a=>a.reset());class yn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let on,$=!1,X=new ct,Z=()=>{const a=l.Promise.resolve(void 0);on=()=>{a.then(ve)}};var ve=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){C(d)}var c=gn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Wt(a,c){if(ye.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{b(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Kt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Wt.aa.h.call(this)}}x(Wt,ye);var Kt={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),Wr=0;function bi(a,c,d,p,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++Wr,this.da=this.fa=!1}function Qt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ks(a){this.src=a,this.g={},this.h=0}ks.prototype.add=function(a,c,d,p,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=Di(a,c,p,P);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new bi(c,this.src,D,!!p,P),c.fa=d,a.push(c)),c};function As(a,c){var d=c.type;if(d in a.g){var p=a.g[d],P=Array.prototype.indexOf.call(p,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(p,P,1),D&&(Qt(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Di(a,c,d,p){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==p)return P}return-1}var tr="closure_lm_"+(1e6*Math.random()|0),Rs={};function Sa(a,c,d,p,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Sa(a,c[D],d,p,P);return null}return d=Ra(d),a&&a[Gt]?a.K(c,d,h(p)?!!p.capture:!1,P):mc(a,c,d,!1,p,P)}function mc(a,c,d,p,P,D){if(!c)throw Error("Invalid event type");var B=h(P)?!!P.capture:!!P,_e=Vi(a);if(_e||(a[tr]=_e=new ks(a)),d=_e.add(c,d,p,B,D),d.proxy)return d;if(p=gc(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)qt||(P=B),P===void 0&&(P=!1),a.addEventListener(c.toString(),p,P);else if(a.attachEvent)a.attachEvent(Aa(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function gc(){function a(d){return c.call(a.src,a.listener,d)}const c=xs;return a}function ka(a,c,d,p,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)ka(a,c[D],d,p,P);else p=h(p)?!!p.capture:!!p,d=Ra(d),a&&a[Gt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Di(D,d,p,P),-1<d&&(Qt(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Vi(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Di(c,d,p,P)),(d=-1<a?c[a]:null)&&Oi(d))}function Oi(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Gt])As(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Aa(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Vi(c))?(As(d,a),d.h==0&&(d.src=null,c[tr]=null)):Qt(a)}}}function Aa(a){return a in Rs?Rs[a]:Rs[a]="on"+a}function xs(a,c){if(a.da)a=!0;else{c=new Wt(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&Oi(a),a=d.call(p,c)}return a}function Vi(a){return a=a[tr],a instanceof ks?a:null}var Li="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ra(a){return typeof a=="function"?a:(a[Li]||(a[Li]=function(c){return a.handleEvent(c)}),a[Li])}function Qe(){q.call(this),this.i=new ks(this),this.M=this,this.F=null}x(Qe,q),Qe.prototype[Gt]=!0,Qe.prototype.removeEventListener=function(a,c,d,p){ka(this,a,c,d,p)};function Ne(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new ye(c,a);else if(c instanceof ye)c.target=c.target||a;else{var P=c;c=new ye(p,a),T(c,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var B=c.g=d[D];P=Yt(B,p,!0,c)&&P}if(B=c.g=a,P=Yt(B,p,!0,c)&&P,P=Yt(B,p,!1,c)&&P,d)for(D=0;D<d.length;D++)B=c.g=d[D],P=Yt(B,p,!1,c)&&P}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Qt(d[p]);delete a.g[c],a.h--}}this.F=null},Qe.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Qe.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Yt(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var B=c[D];if(B&&!B.da&&B.capture==d){var _e=B.listener,nt=B.ha||B.src;B.fa&&As(a.i,B),P=_e.call(nt,p)!==!1&&P}}return P&&!p.defaultPrevented}function Me(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function xa(a){a.g=Me(()=>{a.g=null,a.i&&(a.i=!1,xa(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Cs extends q{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:xa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(a){q.call(this),this.h=a,this.g={}}x(Ye,q);var Ca=[];function Mi(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&Oi(c)},a),a.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),Mi(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ps=l.JSON.stringify,Pa=l.JSON.parse,yc=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ji(){}ji.prototype.h=null;function Na(a){return a.h||(a.h=a.i())}function ba(){}var nr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ui(){ye.call(this,"d")}x(Ui,ye);function Fi(){ye.call(this,"c")}x(Fi,ye);var _n={},zi=null;function Kr(){return zi=zi||new Qe}_n.La="serverreachability";function Bi(a){ye.call(this,_n.La,a)}x(Bi,ye);function rr(a){const c=Kr();Ne(c,new Bi(c))}_n.STAT_EVENT="statevent";function $i(a,c){ye.call(this,_n.STAT_EVENT,a),this.stat=c}x($i,ye);function Xe(a){const c=Kr();Ne(c,new $i(c,a))}_n.Ma="timingevent";function Hi(a,c){ye.call(this,_n.Ma,a),this.size=c}x(Hi,ye);function sr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ir(){this.g=!0}ir.prototype.xa=function(){this.g=!1};function Da(a,c,d,p,P,D){a.info(function(){if(a.g)if(D)for(var B="",_e=D.split("&"),nt=0;nt<_e.length;nt++){var de=_e[nt].split("=");if(1<de.length){var ht=de[0];de=de[1];var dt=ht.split("_");B=2<=dt.length&&dt[1]=="type"?B+(ht+"="+de+"&"):B+(ht+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+B})}function Oa(a,c,d,p,P,D,B){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+D+" "+B})}function U(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Q(a,d)+(p?" "+p:"")})}function G(a,c){a.info(function(){return"TIMEOUT: "+c})}ir.prototype.info=function(){};function Q(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return Ps(d)}catch{return c}}var J={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ue={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Je;function M(){}x(M,ji),M.prototype.g=function(){return new XMLHttpRequest},M.prototype.i=function(){return{}},Je=new M;function he(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new je}function je(){this.i=null,this.g="",this.h=!1}var Tt={},Xt={};function Ns(a,c,d){a.L=1,a.v=ja(bn(c)),a.m=d,a.P=!0,qi(a,null)}function qi(a,c){a.F=Date.now(),Va(a),a.A=bn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Gp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new je,a.g=dm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Cs(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Ca[0]=P.toString()),P=Ca);for(var D=0;D<P.length;D++){var B=Sa(d,P[D],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),rr(),Da(a.i,a.u,a.A,a.l,a.R,a.m)}he.prototype.ca=function(a){a=a.target;const c=this.M;c&&Dn(a)==3?c.j():this.Y(a)},he.prototype.Y=function(a){try{if(a==this.g)e:{const dt=Dn(this.g);var c=this.g.Ba();const Os=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||tm(this.g)))){this.J||dt!=4||c==7||(c==8||0>=Os?rr(3):rr(2)),_c(this);var d=this.g.Z();this.X=d;t:if(Vp(this)){var p=tm(this.g);a="";var P=p.length,D=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),Wi(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(D&&c==P-1)});p.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,Oa(this.i,this.u,this.A,this.l,this.R,dt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,nt=this.g;if((_e=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_e)){var de=_e;break t}}de=null}if(d=de)U(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vc(this,d);else{this.o=!1,this.s=3,Xe(12),Gr(this),Wi(this);break e}}if(this.P){d=!0;let an;for(;!this.J&&this.C<B.length;)if(an=KE(this,B),an==Xt){dt==4&&(this.s=4,Xe(14),d=!1),U(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Tt){this.s=4,Xe(15),U(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else U(this.i,this.l,an,null),vc(this,an);if(Vp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||B.length!=0||this.h.h||(this.s=1,Xe(16),d=!1),this.o=this.o&&d,!d)U(this.i,this.l,B,"[Invalid Chunked Response]"),Gr(this),Wi(this);else if(0<B.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),kc(ht),ht.M=!0,Xe(11))}}else U(this.i,this.l,B,null),vc(this,B);dt==4&&Gr(this),this.o&&!this.J&&(dt==4?lm(this.j,this):(this.o=!1,Va(this)))}else cT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,Xe(12)):(this.s=0,Xe(13)),Gr(this),Wi(this)}}}catch{}finally{}};function Vp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function KE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Xt:(d=Number(c.substring(d,p)),isNaN(d)?Tt:(p+=1,p+d>c.length?Xt:(c=c.slice(p,p+d),a.C=p+d,c)))}he.prototype.cancel=function(){this.J=!0,Gr(this)};function Va(a){a.S=Date.now()+a.I,Lp(a,a.I)}function Lp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=sr(g(a.ba,a),c)}function _c(a){a.B&&(l.clearTimeout(a.B),a.B=null)}he.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(G(this.i,this.A),this.L!=2&&(rr(),Xe(17)),Gr(this),this.s=2,Wi(this)):Lp(this,this.S-a)};function Wi(a){a.j.G==0||a.J||lm(a.j,a)}function Gr(a){_c(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Mi(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function vc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||wc(d.h,a))){if(!a.K&&wc(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ha(d),Ba(d);else break e;Sc(d),Xe(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=sr(g(d.Za,d),6e3));if(1>=Up(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Yr(d,11)}else if((a.K||d.g==a)&&Ha(d),!w(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let de=P[c];if(d.T=de[0],de=de[1],d.G==2)if(de[0]=="c"){d.K=de[1],d.ia=de[2];const ht=de[3];ht!=null&&(d.la=ht,d.j.info("VER="+d.la));const dt=de[4];dt!=null&&(d.Aa=dt,d.j.info("SVER="+d.Aa));const Os=de[5];Os!=null&&typeof Os=="number"&&0<Os&&(p=1.5*Os,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const an=a.g;if(an){const Wa=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wa){var D=p.h;D.g||Wa.indexOf("spdy")==-1&&Wa.indexOf("quic")==-1&&Wa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ec(D,D.h),D.h=null))}if(p.D){const Ac=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(p.ya=Ac,Ee(p.I,p.D,Ac))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var B=a;if(p.qa=hm(p,p.J?p.ia:null,p.W),B.K){Fp(p.h,B);var _e=B,nt=p.L;nt&&(_e.I=nt),_e.B&&(_c(_e),Va(_e)),p.g=B}else om(p);0<d.i.length&&$a(d)}else de[0]!="stop"&&de[0]!="close"||Yr(d,7);else d.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Yr(d,7):Ic(d):de[0]!="noop"&&d.l&&d.l.ta(de),d.v=0)}}rr(4)}catch{}}var GE=class{constructor(a,c){this.g=a,this.map=c}};function Mp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Up(a){return a.h?1:a.g?a.g.size:0}function wc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ec(a,c){a.g?a.g.add(c):a.h=c}function Fp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Mp.prototype.cancel=function(){if(this.i=zp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function QE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function YE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Bp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=YE(a),p=QE(a),P=p.length,D=0;D<P;D++)c.call(void 0,p[D],d&&d[D],a)}var $p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),P=null;if(0<=p){var D=a[d].substring(0,p);P=a[d].substring(p+1)}else D=a[d];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Qr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qr){this.h=a.h,La(this,a.j),this.o=a.o,this.g=a.g,Ma(this,a.s),this.l=a.l;var c=a.i,d=new Qi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Hp(this,d),this.m=a.m}else a&&(c=String(a).match($p))?(this.h=!1,La(this,c[1]||"",!0),this.o=Ki(c[2]||""),this.g=Ki(c[3]||"",!0),Ma(this,c[4]),this.l=Ki(c[5]||"",!0),Hp(this,c[6]||"",!0),this.m=Ki(c[7]||"")):(this.h=!1,this.i=new Qi(null,this.h))}Qr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Gi(c,qp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Gi(c,qp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Gi(d,d.charAt(0)=="/"?eT:ZE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Gi(d,nT)),a.join("")};function bn(a){return new Qr(a)}function La(a,c,d){a.j=d?Ki(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ma(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Hp(a,c,d){c instanceof Qi?(a.i=c,rT(a.i,a.h)):(d||(c=Gi(c,tT)),a.i=new Qi(c,a.h))}function Ee(a,c,d){a.i.set(c,d)}function ja(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ki(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,JE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function JE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var qp=/[#\/\?@]/g,ZE=/[#\?:]/g,eT=/[#\?]/g,tT=/[#\?@]/g,nT=/#/g;function Qi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&XE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Qi.prototype,t.add=function(a,c){or(this),this.i=null,a=bs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Wp(a,c){or(a),c=bs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Kp(a,c){return or(a),c=bs(a,c),a.g.has(c)}t.forEach=function(a,c){or(this),this.g.forEach(function(d,p){d.forEach(function(P){a.call(c,P,p,this)},this)},this)},t.na=function(){or(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const P=a[p];for(let D=0;D<P.length;D++)d.push(c[p])}return d},t.V=function(a){or(this);let c=[];if(typeof a=="string")Kp(this,a)&&(c=c.concat(this.g.get(bs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return or(this),this.i=null,a=bs(this,a),Kp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Gp(a,c,d){Wp(a,c),0<d.length&&(a.i=null,a.g.set(bs(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const D=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var P=D;B[p]!==""&&(P+="="+encodeURIComponent(String(B[p]))),a.push(P)}}return this.i=a.join("&")};function bs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function rT(a,c){c&&!a.j&&(or(a),a.i=null,a.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(Wp(this,p),Gp(this,P,d))},a)),a.j=c}function sT(a,c){const d=new ir;if(l.Image){const p=new Image;p.onload=I(ar,d,"TestLoadImage: loaded",!0,c,p),p.onerror=I(ar,d,"TestLoadImage: error",!1,c,p),p.onabort=I(ar,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(ar,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function iT(a,c){const d=new ir,p=new AbortController,P=setTimeout(()=>{p.abort(),ar(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(D=>{clearTimeout(P),D.ok?ar(d,"TestPingServer: ok",!0,c):ar(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),ar(d,"TestPingServer: error",!1,c)})}function ar(a,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function oT(){this.g=new yc}function aT(a,c,d){const p=d||"";try{Bp(a,function(P,D){let B=P;h(P)&&(B=Ps(P)),c.push(p+D+"="+encodeURIComponent(B))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function Ua(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Ua,ji),Ua.prototype.g=function(){return new Fa(this.l,this.j)},Ua.prototype.i=function(a){return function(){return a}}({});function Fa(a,c){Qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Fa,Qe),t=Fa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Xi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Yi(this):Xi(this),this.readyState==3&&Qp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Yi(this))},t.Qa=function(a){this.g&&(this.response=a,Yi(this))},t.ga=function(){this.g&&Yi(this)};function Yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Xi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yp(a){let c="";return L(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Tc(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Yp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ee(a,c,d))}function be(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(be,Qe);var lT=/^https?$/i,uT=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Je.g(),this.v=this.o?Na(this.o):Na(Je),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Xp(this,D);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())d.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uT,c,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of d)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{em(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Xp(this,D)}};function Xp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Jp(a),za(a)}function Jp(a){a.A||(a.A=!0,Ne(a,"complete"),Ne(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ne(this,"complete"),Ne(this,"abort"),za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),za(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zp(this):this.bb())},t.bb=function(){Zp(this)};function Zp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Dn(a)!=4||a.Z()!=2)){if(a.u&&Dn(a)==4)Me(a.Ea,0,a);else if(Ne(a,"readystatechange"),Dn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=B===0){var P=String(a.D).match($p)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!lT.test(P?P.toLowerCase():"")}d=p}if(d)Ne(a,"complete"),Ne(a,"success");else{a.m=6;try{var D=2<Dn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Jp(a)}}finally{za(a)}}}}function za(a,c){if(a.g){em(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Ne(a,"ready");try{d.onreadystatechange=p}catch{}}}function em(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Pa(c)}};function tm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cT(a){const c={};a=(a.g&&2<=Dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(w(a[p]))continue;var d=R(a[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[P]||[];c[P]=D,D.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function nm(a){this.Aa=0,this.i=[],this.j=new ir,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ji("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ji("baseRetryDelayMs",5e3,a),this.cb=Ji("retryDelaySeedMs",1e4,a),this.Wa=Ji("forwardChannelMaxRetries",2,a),this.wa=Ji("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mp(a&&a.concurrentRequestLimit),this.Da=new oT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){Xe(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=hm(this,null,this.W),$a(this)};function Ic(a){if(rm(a),a.G==3){var c=a.U++,d=bn(a.I);if(Ee(d,"SID",a.K),Ee(d,"RID",c),Ee(d,"TYPE","terminate"),Zi(a,d),c=new he(a,a.j,c),c.L=2,c.v=ja(bn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=dm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Va(c)}cm(a)}function Ba(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function rm(a){Ba(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ha(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function $a(a){if(!jp(a.h)&&!a.s){a.s=!0;var c=a.Ga;on||Z(),$||(on(),$=!0),X.add(c,a),a.B=0}}function hT(a,c){return Up(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=sr(g(a.Ga,a,c),um(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new he(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=im(this,P,c),d=bn(this.I),Ee(d,"RID",a),Ee(d,"CVER",22),this.D&&Ee(d,"X-HTTP-Session-Id",this.D),Zi(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Yp(D)))+"&"+c:this.m&&Tc(d,this.m,D)),Ec(this.h,P),this.Ua&&Ee(d,"TYPE","init"),this.P?(Ee(d,"$req",c),Ee(d,"SID","null"),P.T=!0,Ns(P,d,null)):Ns(P,d,c),this.G=2}}else this.G==3&&(a?sm(this,a):this.i.length==0||jp(this.h)||sm(this))};function sm(a,c){var d;c?d=c.l:d=a.U++;const p=bn(a.I);Ee(p,"SID",a.K),Ee(p,"RID",d),Ee(p,"AID",a.T),Zi(a,p),a.m&&a.o&&Tc(p,a.m,a.o),d=new he(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=im(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ec(a.h,d),Ns(d,p,c)}function Zi(a,c){a.H&&L(a.H,function(d,p){Ee(c,p,d)}),a.l&&Bp({},function(d,p){Ee(c,p,d)})}function im(a,c,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const B=["count="+d];D==-1?0<d?(D=P[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let _e=!0;for(let nt=0;nt<d;nt++){let de=P[nt].g;const ht=P[nt].map;if(de-=D,0>de)D=Math.max(0,P[nt].g-100),_e=!1;else try{aT(ht,B,"req"+de+"_")}catch{p&&p(ht)}}if(_e){p=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function om(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;on||Z(),$||(on(),$=!0),X.add(c,a),a.v=0}}function Sc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=sr(g(a.Fa,a),um(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,am(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=sr(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xe(10),Ba(this),am(this))};function kc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function am(a){a.g=new he(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=bn(a.qa);Ee(c,"RID","rpc"),Ee(c,"SID",a.K),Ee(c,"AID",a.T),Ee(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(c,"TO",a.ja),Ee(c,"TYPE","xmlhttp"),Zi(a,c),a.m&&a.o&&Tc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ja(bn(c)),d.m=null,d.P=!0,qi(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ba(this),Sc(this),Xe(19))};function Ha(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lm(a,c){var d=null;if(a.g==c){Ha(a),kc(a),a.g=null;var p=2}else if(wc(a.h,c))d=c.D,Fp(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;p=Kr(),Ne(p,new Hi(p,d)),$a(a)}else om(a);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&hT(a,c)||p==2&&Sc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Yr(a,5);break;case 4:Yr(a,10);break;case 3:Yr(a,6);break;default:Yr(a,2)}}}function um(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Yr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),p=a.Xa;const P=!p;p=new Qr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||La(p,"https"),ja(p),P?sT(p.toString(),d):iT(p.toString(),d)}else Xe(2);a.G=0,a.l&&a.l.sa(c),cm(a),rm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function cm(a){if(a.G=0,a.ka=[],a.l){const c=zp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function hm(a,c,d){var p=d instanceof Qr?bn(d):new Qr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Ma(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new Qr(null);p&&La(D,p),c&&(D.g=c),P&&Ma(D,P),d&&(D.l=d),p=D}return d=a.D,c=a.ya,d&&c&&Ee(p,d,c),Ee(p,"VER",a.la),Zi(a,p),p}function dm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new be(new Ua({eb:d})):new be(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fm(){}t=fm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qa(){}qa.prototype.g=function(a,c){return new Lt(a,c)};function Lt(a,c){Qe.call(this),this.g=new nm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ds(this)}x(Lt,Qe),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Ic(this.g)},Lt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ps(a),a=d);c.i.push(new GE(c.Ya++,a)),c.G==3&&$a(c)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,Lt.aa.N.call(this)};function pm(a){Ui.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(pm,Ui);function mm(){Fi.call(this),this.status=1}x(mm,Fi);function Ds(a){this.g=a}x(Ds,fm),Ds.prototype.ua=function(){Ne(this.g,"a")},Ds.prototype.ta=function(a){Ne(this.g,new pm(a))},Ds.prototype.sa=function(a){Ne(this.g,new mm)},Ds.prototype.ra=function(){Ne(this.g,"b")},qa.prototype.createWebChannel=qa.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,cw=function(){return new qa},uw=function(){return Kr()},lw=_n,wd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},J.NO_ERROR=0,J.TIMEOUT=8,J.HTTP_ERROR=6,Ol=J,ue.COMPLETE="complete",aw=ue,ba.EventType=nr,nr.OPEN="a",nr.CLOSE="b",nr.ERROR="c",nr.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,mo=ba,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,ow=be}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});const Zg="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let xi="10.14.0";/**
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
 */const gs=new Df("@firebase/firestore");function lo(){return gs.logLevel}function K(t,...e){if(gs.logLevel<=ae.DEBUG){const n=e.map(Hf);gs.debug(`Firestore (${xi}): ${t}`,...n)}}function Xn(t,...e){if(gs.logLevel<=ae.ERROR){const n=e.map(Hf);gs.error(`Firestore (${xi}): ${t}`,...n)}}function yi(t,...e){if(gs.logLevel<=ae.WARN){const n=e.map(Hf);gs.warn(`Firestore (${xi}): ${t}`,...n)}}function Hf(t){if(typeof t=="string")return t;try{/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function ge(t,e){t||te()}function re(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class _R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vR{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new hw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new gt(e)}}class wR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ER{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new TR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=SR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new He(0,0))}static max(){return new ne(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Zo{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const kR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Zo{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return kR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ie.fromString(e))}static fromName(e){return new Y(Ie.fromString(e).popFirst(5))}static empty(){return new Y(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ie(e.slice()))}}function AR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new jr(s,Y.empty(),e)}function RR(t){return new jr(t.readTime,t.key,-1)}class jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jr(ne.min(),Y.empty(),-1)}static max(){return new jr(ne.max(),Y.empty(),-1)}}function xR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const CR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ya(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==CR)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function NR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _a(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qf.oe=-1;function Gu(t){return t==null}function yu(t){return t===0&&1/t==-1/0}function bR(t){return typeof t=="number"&&Number.isInteger(t)&&!yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ey(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dl(this.root,e,this.comparator,!0)}}class dl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ty(this.data.getIterator())}getIteratorFrom(e){return new ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pw("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const DR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(ge(!!t),typeof t=="string"){let e=0;const n=DR.exec(t);if(ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function Wf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kf(t){const e=t.mapValue.fields.__previous_value__;return Wf(e)?Kf(e):e}function ea(t){const e=Ur(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class OR{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ta{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ta("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ta&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fl={mapValue:{}};function _s(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wf(t)?4:LR(t)?9007199254740991:VR(t)?10:11:te()}function Pn(t,e){if(t===e)return!0;const n=_s(t);if(n!==_s(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ea(t).isEqual(ea(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ur(s.timestampValue),l=Ur(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ys(s.bytesValue).isEqual(ys(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),l=Ue(i.doubleValue);return o===l?yu(o)===yu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ey(o)!==ey(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Pn(o[u],l[u])))return!1;return!0}(t,e);default:return te()}}function na(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=_s(t),r=_s(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ue(i.integerValue||i.doubleValue),u=Ue(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ny(t.timestampValue,e.timestampValue);case 4:return ny(ea(t),ea(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ys(i),u=ys(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=fe(l[h],u[h]);if(f!==0)return f}return fe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=fe(Ue(i.latitude),Ue(o.latitude));return l!==0?l:fe(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ry(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,f;const m=i.fields||{},g=o.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=fe(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:ry(I,x)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===fl.mapValue&&o===fl.mapValue)return 0;if(i===fl.mapValue)return 1;if(o===fl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=fe(u[m],f[m]);if(g!==0)return g;const I=vi(l[u[m]],h[f[m]]);if(I!==0)return I}return fe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw te()}}function ny(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Ur(t),r=Ur(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function ry(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=vi(n[s],r[s]);if(i)return i}return fe(n.length,r.length)}function wi(t){return Ed(t)}function Ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ed(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ed(n.fields[o])}`;return s+"}"}(t.mapValue):te()}function sy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Td(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function iy(t){return!!t&&"nullValue"in t}function oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vl(t){return!!t&&"mapValue"in t}function VR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Co(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Vl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(Co(this.value))}}function mw(t){const e=[];return Is(t.fields,(n,r)=>{const s=new it([n]);if(Vl(r)){const i=mw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
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
 */class _t{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,ne.min(),ne.min(),ne.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,ne.min(),ne.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ne.min(),ne.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _u{constructor(e,n){this.position=e,this.inclusive=n}}function ay(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=vi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ly(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ra{constructor(e,n="asc"){this.field=e,this.dir=n}}function MR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gw{}class $e extends gw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UR(e,n,r):n==="array-contains"?new BR(e,r):n==="in"?new $R(e,r):n==="not-in"?new HR(e,r):n==="array-contains-any"?new qR(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FR(e,r):new zR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vi(n,this.value)):n!==null&&_s(this.value)===_s(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends gw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new mn(e,n)}matches(e){return yw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yw(t){return t.op==="and"}function _w(t){return jR(t)&&yw(t)}function jR(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Id(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(_w(t))return t.filters.map(e=>Id(e)).join(",");{const e=t.filters.map(n=>Id(n)).join(",");return`${t.op}(${e})`}}function vw(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&Pn(r.value,s.value)}(t,e):t instanceof mn?function(r,s){return s instanceof mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&vw(o,s.filters[l]),!0):!1}(t,e):void te()}function ww(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${wi(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(ww).join(" ,")+"}"}(t):"Filter"}class UR extends $e{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class FR extends $e{constructor(e,n){super(e,"in",n),this.keys=Ew("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zR extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Ew("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ew(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class BR extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&na(n.arrayValue,this.value)}}class $R extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class HR extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!na(this.value.arrayValue,n)}}class qR extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
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
 */class WR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function uy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new WR(t,e,n,r,s,i,o)}function Qf(t){const e=re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.ue=n}return e.ue}function Yf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ly(t.startAt,e.startAt)&&ly(t.endAt,e.endAt)}function Sd(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ci{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KR(t,e,n,r,s,i,o,l){return new Ci(t,e,n,r,s,i,o,l)}function Qu(t){return new Ci(t)}function cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tw(t){return t.collectionGroup!==null}function Po(t){const e=re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ra(i,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new ra(it.keyField(),r))}return e.ce}function xn(t){const e=re(t);return e.le||(e.le=GR(e,Po(t))),e.le}function GR(t,e){if(t.limitType==="F")return uy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ra(s.field,i)});const n=t.endAt?new _u(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _u(t.startAt.position,t.startAt.inclusive):null;return uy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kd(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ad(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yu(t,e){return Yf(xn(t),xn(e))&&t.limitType===e.limitType}function Iw(t){return`${Qf(xn(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ww(s)).join(", ")}]`),Gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>wi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>wi(s)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function Xu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Po(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=ay(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Po(r),s)||r.endAt&&!function(o,l,u){const h=ay(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Po(r),s))}(t,e)}function QR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sw(t){return(e,n)=>{let r=!1;for(const s of Po(t)){const i=YR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YR(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?vi(u,h):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
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
 */const XR=new Pe(Y.comparator);function Jn(){return XR}const kw=new Pe(Y.comparator);function go(...t){let e=kw;for(const n of t)e=e.insert(n.key,n);return e}function Aw(t){let e=kw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ss(){return No()}function Rw(){return No()}function No(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const JR=new Pe(Y.comparator),ZR=new at(Y.comparator);function oe(...t){let e=ZR;for(const n of t)e=e.add(n);return e}const ex=new at(fe);function tx(){return ex}/**
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
 */function Xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(e)?"-0":e}}function xw(t){return{integerValue:""+t}}function nx(t,e){return bR(e)?xw(e):Xf(t,e)}/**
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
 */class Ju{constructor(){this._=void 0}}function rx(t,e,n){return t instanceof sa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wf(i)&&(i=Kf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ia?Pw(t,e):t instanceof oa?Nw(t,e):function(s,i){const o=Cw(s,i),l=hy(o)+hy(s.Pe);return Td(o)&&Td(s.Pe)?xw(l):Xf(s.serializer,l)}(t,e)}function sx(t,e,n){return t instanceof ia?Pw(t,e):t instanceof oa?Nw(t,e):n}function Cw(t,e){return t instanceof vu?function(r){return Td(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class sa extends Ju{}class ia extends Ju{constructor(e){super(),this.elements=e}}function Pw(t,e){const n=bw(e);for(const r of t.elements)n.some(s=>Pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oa extends Ju{constructor(e){super(),this.elements=e}}function Nw(t,e){let n=bw(e);for(const r of t.elements)n=n.filter(s=>!Pn(s,r));return{arrayValue:{values:n}}}class vu extends Ju{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function hy(t){return Ue(t.integerValue||t.doubleValue)}function bw(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ix{constructor(e,n){this.field=e,this.transform=n}}function ox(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ia&&s instanceof ia||r instanceof oa&&s instanceof oa?_i(r.elements,s.elements,Pn):r instanceof vu&&s instanceof vu?Pn(r.Pe,s.Pe):r instanceof sa&&s instanceof sa}(t.transform,e.transform)}class ax{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zu{}function Dw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jf(t.key,nn.none()):new va(t.key,t.data,nn.none());{const n=t.data,r=Pt.empty();let s=new at(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Hr(t.key,r,new Ut(s.toArray()),nn.none())}}function lx(t,e,n){t instanceof va?function(s,i,o){const l=s.value.clone(),u=fy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(s,i,o){if(!Ll(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=fy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Ow(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof va?function(i,o,l,u){if(!Ll(i.precondition,o))return l;const h=i.value.clone(),f=py(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(i,o,l,u){if(!Ll(i.precondition,o))return l;const h=py(i.fieldTransforms,u,o),f=o.data;return f.setAll(Ow(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Ll(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ux(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Cw(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_i(r,s,(i,o)=>ox(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends Zu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hr extends Zu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ow(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fy(t,e,n){const r=new Map;ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,sx(o,l,n[s]))}return r}function py(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rx(i,o,e))}return r}class Jf extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cx extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hx{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Rw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Dw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(n,r)=>dy(n,r))&&_i(this.baseMutations,e.baseMutations,(n,r)=>dy(n,r))}}class Zf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ge(e.mutations.length===r.length);let s=function(){return JR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zf(e,n,r,s)}}/**
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
 */class dx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,le;function px(t){switch(t){default:return te();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Vw(t){if(t===void 0)return Xn("GRPC error has no .code"),V.UNKNOWN;switch(t){case ze.OK:return V.OK;case ze.CANCELLED:return V.CANCELLED;case ze.UNKNOWN:return V.UNKNOWN;case ze.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ze.INTERNAL:return V.INTERNAL;case ze.UNAVAILABLE:return V.UNAVAILABLE;case ze.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ze.NOT_FOUND:return V.NOT_FOUND;case ze.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ze.ABORTED:return V.ABORTED;case ze.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ze.DATA_LOSS:return V.DATA_LOSS;default:return te()}}(le=ze||(ze={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mx(){return new TextEncoder}/**
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
 */const gx=new as([4294967295,4294967295],0);function my(t){const e=mx().encode(t),n=new iw;return n.update(e),new Uint8Array(n.digest())}function gy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new as([n,r],0),new as([s,i],0)]}class ep{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yo(`Invalid padding: ${n}`);if(r<0)throw new yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=as.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(as.fromNumber(r)));return s.compare(gx)===1&&(s=new as([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=my(e),[r,s]=gy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ep(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=my(e),[r,s]=gy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ec{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ec(ne.min(),s,new Pe(fe),Jn(),oe())}}class wa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wa(r,n,oe(),oe(),oe())}}/**
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
 */class Ml{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Lw{constructor(e,n){this.targetId=e,this.me=n}}class Mw{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class yy{constructor(){this.fe=0,this.ge=vy(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new wa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=vy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jn(),this.qe=_y(),this.Qe=new Pe(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Sd(i))if(r===0){const o=new Y(i.path);this.Ue(n,o,_t.newNoDocument(o,ne.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ys(r).toUint8Array()}catch(u){if(u instanceof pw)return yi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ep(o,s,i)}catch(u){return yi(u instanceof yo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Sd(l.target)){const u=new Y(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=oe();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ec(e,n,this.Qe,this.ke,r);return this.ke=Jn(),this.qe=_y(),this.Qe=new Pe(fe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new yy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function _y(){return new Pe(Y.comparator)}function vy(){return new Pe(Y.comparator)}const _x={asc:"ASCENDING",desc:"DESCENDING"},vx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wx={and:"AND",or:"OR"};class Ex{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||Gu(e)?e:{value:e}}function wu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tx(t,e){return wu(t,e.toTimestamp())}function Cn(t){return ge(!!t),ne.fromTimestamp(function(n){const r=Ur(n);return new He(r.seconds,r.nanos)}(t))}function tp(t,e){return xd(t,e).canonicalString()}function xd(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Uw(t){const e=Ie.fromString(t);return ge(Hw(e)),e}function Cd(t,e){return tp(t.databaseId,e.path)}function oh(t,e){const n=Uw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(zw(n))}function Fw(t,e){return tp(t.databaseId,e)}function Ix(t){const e=Uw(t);return e.length===4?Ie.emptyPath():zw(e)}function Pd(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zw(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wy(t,e,n){return{name:Cd(t,e),fields:n.value.mapValue.fields}}function Sx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ge(f===void 0||typeof f=="string"),ut.fromBase64String(f||"")):(ge(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ut.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:Vw(h.code);return new H(f,h.message||"")}(o);n=new Mw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oh(t,r.document.name),i=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):ne.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ml(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oh(t,r.document),i=r.readTime?Cn(r.readTime):ne.min(),o=_t.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ml([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oh(t,r.document),i=r.removedTargetIds||[];n=new Ml([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fx(s,i),l=r.targetId;n=new Lw(l,o)}}return n}function kx(t,e){let n;if(e instanceof va)n={update:wy(t,e.key,e.value)};else if(e instanceof Jf)n={delete:Cd(t,e.key)};else if(e instanceof Hr)n={update:wy(t,e.key,e.data),updateMask:Ox(e.fieldMask)};else{if(!(e instanceof cx))return te();n={verify:Cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Tx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function Ax(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Cn(s.updateTime):Cn(i);return o.isEqual(ne.min())&&(o=Cn(i)),new ax(o,s.transformResults||[])}(n,e))):[]}function Rx(t,e){return{documents:[Fw(t,e.path)]}}function xx(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fw(t,s);const i=function(h){if(h.length!==0)return $w(mn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Us(g.field),direction:Nx(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function Cx(t){let e=Ix(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=Bw(m);return g instanceof mn&&_w(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(x){return new ra(Fs(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Gu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new _u(I,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,I=m.values||[];return new _u(I,g)}(n.endAt)),KR(e,s,o,i,l,"F",u,h)}function Px(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fs(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fs(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fs(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fs(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Fs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>Bw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function Nx(t){return _x[t]}function bx(t){return vx[t]}function Dx(t){return wx[t]}function Us(t){return{fieldPath:t.canonicalString()}}function Fs(t){return it.fromServerFormat(t.fieldPath)}function $w(t){return t instanceof $e?function(n){if(n.op==="=="){if(oy(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NAN"}};if(iy(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oy(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NAN"}};if(iy(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(n.field),op:bx(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(s=>$w(s));return r.length===1?r[0]:{compositeFilter:{op:Dx(n.op),filters:r}}}(t):te()}function Ox(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Er{constructor(e,n,r,s,i=ne.min(),o=ne.min(),l=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vx{constructor(e){this.ct=e}}function Lx(t){const e=Cx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
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
 */class Mx{constructor(){this.un=new jx}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(jr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class jx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Ie.comparator)).toArray()}}/**
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
 */class Ei{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ei(0)}static kn(){return new Ei(-1)}}/**
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
 */class Ux{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Fx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zx{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bo(r.mutation,s,Ut.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=ss();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=go();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Jn();const o=No(),l=function(){return No()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Hr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),bo(f.mutation,h,f.mutation.getFieldMask(),He.now())):o.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new Fx(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=No();let s=new Pe((o,l)=>o-l),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ut.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(s.get(l.batchId)||oe()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Rw();f.forEach(g=>{if(!i.has(g)){const I=Dw(n.get(g),r.get(g));I!==null&&m.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(ss());let l=-1,u=i;return o.next(h=>j.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,oe())).next(f=>({batchId:l,changes:Aw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=go();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=go();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,u=>{const h=function(m,g){return new Ci(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,_t.newInvalidDocument(f)))});let l=go();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&bo(f.mutation,h,Ut.empty(),He.now()),Xu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class Bx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Cn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Lx(s.bundledQuery),readTime:Cn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class $x{constructor(){this.overlays=new Pe(Y.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ss();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=ss(),i=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ss(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ss(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return j.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dx(n,r));let i=this.Ir.get(n);i===void 0&&(i=oe(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class Hx{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class np{constructor(){this.Tr=new at(Ze.Er),this.dr=new at(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Ie([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Ie([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=oe();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
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
 */class qx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ze.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hx(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(fe);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new Y(i),0);let l=new at(fe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),j.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Wx{constructor(e){this.Mr=e,this.docs=function(){return new Pe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,l=new Y(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||xR(RR(f),r)<=0||(s.has(f.key)||Xu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kx(this)}getSize(e){return j.resolve(this.size)}}class Kx extends Ux{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Gx{constructor(e){this.persistence=e,this.Nr=new Pi(n=>Qf(n),Yf),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new np,this.targetCount=0,this.kr=Ei.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class Qx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qf(0),this.Kr=!1,this.Kr=!0,this.$r=new Hx,this.referenceDelegate=e(this),this.Ur=new Gx(this),this.indexManager=new Mx,this.remoteDocumentCache=function(s){return new Wx(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Vx(n),this.Gr=new Bx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $x,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new qx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new Yx(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Yx extends PR{constructor(e){super(),this.currentSequenceNumber=e}}class rp{constructor(e){this.persistence=e,this.Jr=new np,this.Yr=null}static Zr(e){return new rp(e)}get Xr(){if(this.Yr)return this.Yr;throw te()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=Y.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class sp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sp(e,n.fromCache,r,s)}}/**
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
 */class Xx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Jx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Z1()?8:NR(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Xx;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(lo()<=ae.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(lo()<=ae.DEBUG&&K("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(lo()<=ae.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):j.resolve())}Yi(e,n){if(cy(n))return j.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ad(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ad(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return cy(n)||s.isEqual(ne.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(lo()<=ae.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),js(n)),this.rs(e,o,n,AR(s,-1)).next(l=>l))})}ts(e,n){let r=new at(Sw(e));return n.forEach((s,i)=>{Xu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return lo()<=ae.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",js(n)),this.Ji.getDocumentsMatchingQuery(e,n,jr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Zx{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Pe(fe),this._s=new Pi(i=>Qf(i),Yf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eC(t,e,n,r){return new Zx(t,e,n,r)}async function qw(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=oe();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function tC(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let I=j.resolve();return g.forEach(x=>{I=I.next(()=>f.getEntry(u,x)).next(N=>{const O=h.docVersions.get(x);ge(O!==null),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ww(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nC(t,e){const n=re(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(ut.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(m,I),function(N,O,k){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,I,f)&&l.push(n.Ur.updateTargetData(i,I))});let u=Jn(),h=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(rC(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(ne.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function rC(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Jn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function sC(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iC(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nd(t,e,n){const r=re(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_a(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ey(t,e,n){const r=re(t);let s=ne.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=re(u),g=m._s.get(f);return g!==void 0?j.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,o,xn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:oe())).next(l=>(oC(r,QR(e),l),{documents:l,Ts:i})))}function oC(t,e,n){let r=t.us.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Ty{constructor(){this.activeTargetIds=tx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aC{constructor(){this.so=new Ty,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ty,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lC{_o(e){}shutdown(){}}/**
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
 */class Iy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pl=null;function ah(){return pl===null?pl=function(){return 268435456+Math.round(2147483648*Math.random())}():pl++,"0x"+pl.toString(16)}/**
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
 */const uC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const mt="WebChannelConnection";class hC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=ah(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>(K("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw yi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=uC[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=ah();return new Promise((o,l)=>{const u=new ow;u.setWithCredentials(!0),u.listenOnce(aw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ol.NO_ERROR:const f=u.getResponseJson();K(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ol.TIMEOUT:K(mt,`RPC '${e}' ${i} timed out`),l(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ol.HTTP_ERROR:const m=u.getStatus();if(K(mt,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const x=function(O){const k=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(k)>=0?k:V.UNKNOWN}(I.status);l(new H(x,I.message))}else l(new H(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(V.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{K(mt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);K(mt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=ah(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cw(),l=uw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");K(mt,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,I=!1;const x=new cC({Io:O=>{I?K(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(K(mt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),K(mt,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},To:()=>m.close()}),N=(O,k,w)=>{O.listen(k,A=>{try{w(A)}catch(b){setTimeout(()=>{throw b},0)}})};return N(m,mo.EventType.OPEN,()=>{I||(K(mt,`RPC '${e}' stream ${s} transport opened.`),x.yo())}),N(m,mo.EventType.CLOSE,()=>{I||(I=!0,K(mt,`RPC '${e}' stream ${s} transport closed`),x.So())}),N(m,mo.EventType.ERROR,O=>{I||(I=!0,yi(mt,`RPC '${e}' stream ${s} transport errored:`,O),x.So(new H(V.UNAVAILABLE,"The operation could not be completed")))}),N(m,mo.EventType.MESSAGE,O=>{var k;if(!I){const w=O.data[0];ge(!!w);const A=w,b=A.error||((k=A[0])===null||k===void 0?void 0:k.error);if(b){K(mt,`RPC '${e}' stream ${s} received error:`,b);const F=b.status;let L=function(v){const T=ze[v];if(T!==void 0)return Vw(T)}(F),E=b.message;L===void 0&&(L=V.INTERNAL,E="Unknown error status: "+F+" with message "+b.message),I=!0,x.So(new H(L,E)),m.close()}else K(mt,`RPC '${e}' stream ${s} received:`,w),x.bo(w)}}),N(l,lw.STAT_EVENT,O=>{O.stat===wd.PROXY?K(mt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===wd.NOPROXY&&K(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function lh(){return typeof document<"u"?document:null}/**
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
 */function tc(t){return new Ex(t,!0)}/**
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
 */class Kw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Gw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Kw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dC extends Gw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Sx(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Cn(o.readTime):ne.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Sd(u)?{documents:Rx(i,u)}:{query:xx(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=jw(i,o.resumeToken);const h=Rd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=wu(i,o.snapshotVersion.toTimestamp());const h=Rd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Px(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.a_(n)}}class fC extends Gw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Ax(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Pd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kx(this.serializer,r))};this.a_(n)}}/**
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
 */class pC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,xd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(V.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,xd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xn(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class gC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ss(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=re(u);h.L_.add(4),await Ea(h),h.q_.set("Unknown"),h.L_.delete(4),await nc(h)}(this))})}),this.q_=new mC(r,s)}}async function nc(t){if(Ss(t))for(const e of t.B_)await e(!0)}async function Ea(t){for(const e of t.B_)await e(!1)}function Qw(t,e){const n=re(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lp(n)?ap(n):Ni(n).r_()&&op(n,e))}function ip(t,e){const n=re(t),r=Ni(n);n.N_.delete(e),r.r_()&&Yw(n,e),n.N_.size===0&&(r.r_()?r.o_():Ss(n)&&n.q_.set("Unknown"))}function op(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ni(t).A_(e)}function Yw(t,e){t.Q_.xe(e),Ni(t).R_(e)}function ap(t){t.Q_=new yx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ni(t).start(),t.q_.v_()}function lp(t){return Ss(t)&&!Ni(t).n_()&&t.N_.size>0}function Ss(t){return re(t).L_.size===0}function Xw(t){t.Q_=void 0}async function yC(t){t.q_.set("Online")}async function _C(t){t.N_.forEach((e,n)=>{op(t,e)})}async function vC(t,e){Xw(t),lp(t)?(t.q_.M_(e),ap(t)):t.q_.set("Unknown")}async function wC(t,e,n){if(t.q_.set("Online"),e instanceof Mw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eu(t,r)}else if(e instanceof Ml?t.Q_.Ke(e):e instanceof Lw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ne.min()))try{const r=await Ww(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),Yw(i,u);const m=new Er(f.target,u,h,f.sequenceNumber);op(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Eu(t,r)}}async function Eu(t,e,n){if(!_a(e))throw e;t.L_.add(1),await Ea(t),t.q_.set("Offline"),n||(n=()=>Ww(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await nc(t)})}function Jw(t,e){return e().catch(n=>Eu(t,n,e))}async function rc(t){const e=re(t),n=Fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;EC(e);)try{const s=await sC(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,TC(e,s)}catch(s){await Eu(e,s)}Zw(e)&&eE(e)}function EC(t){return Ss(t)&&t.O_.length<10}function TC(t,e){t.O_.push(e);const n=Fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Zw(t){return Ss(t)&&!Fr(t).n_()&&t.O_.length>0}function eE(t){Fr(t).start()}async function IC(t){Fr(t).p_()}async function SC(t){const e=Fr(t);for(const n of t.O_)e.m_(n.mutations)}async function kC(t,e,n){const r=t.O_.shift(),s=Zf.from(r,e,n);await Jw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await rc(t)}async function AC(t,e){e&&Fr(t).V_&&await async function(r,s){if(function(o){return px(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();Fr(r).s_(),await Jw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await rc(r)}}(t,e),Zw(t)&&eE(t)}async function Sy(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Ss(n);n.L_.add(3),await Ea(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await nc(n)}async function RC(t,e){const n=re(t);e?(n.L_.delete(2),await nc(n)):e||(n.L_.add(2),await Ea(n),n.q_.set("Unknown"))}function Ni(t){return t.K_||(t.K_=function(n,r,s){const i=re(n);return i.w_(),new dC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:yC.bind(null,t),Ro:_C.bind(null,t),mo:vC.bind(null,t),d_:wC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lp(t)?ap(t):t.q_.set("Unknown")):(await t.K_.stop(),Xw(t))})),t.K_}function Fr(t){return t.U_||(t.U_=function(n,r,s){const i=re(n);return i.w_(),new fC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IC.bind(null,t),mo:AC.bind(null,t),f_:SC.bind(null,t),g_:kC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await rc(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class up{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new up(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),_a(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ui{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=go(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new ui(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ky{constructor(){this.W_=new Pe(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):te():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ti{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ti(e,n,ui.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class xC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class CC{constructor(){this.queries=Ay(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=Ay(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function Ay(){return new Pi(t=>Iw(t),Yu)}async function hp(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new xC,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=cp(o,`Initialization of query '${js(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&fp(n)}async function dp(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function PC(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&fp(n)}function NC(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function fp(t){t.Y_.forEach(e=>{e.next()})}var bd,Ry;(Ry=bd||(bd={})).ea="default",Ry.Cache="cache";class pp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bd.Cache}}/**
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
 */class tE{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class bC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=Sw(e),this.Ra=new ui(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ky,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),I=Xu(this.query,m)?m:null,x=!!g&&this.mutatedKeys.has(g.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let O=!1;g&&I?g.data.isEqual(I.data)?x!==N&&(r.track({type:3,doc:I}),O=!0):this.ga(g,I)||(r.track({type:2,doc:I}),O=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),O=!0):g&&!I&&(r.track({type:1,doc:g}),O=!0,(u||h)&&(l=!0)),O&&(I?(o=o.add(I),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(I,x){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return N(I)-N(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Ti(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ky,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new nE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new tE(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ti.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class DC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OC{constructor(e){this.key=e,this.va=!1}}class VC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Pi(l=>Iw(l),Yu),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(Y.comparator),this.Na=new Map,this.La=new np,this.Ba={},this.ka=new Map,this.qa=Ei.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function LC(t,e,n=!0){const r=lE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await rE(r,e,n,!0),s}async function MC(t,e){const n=lE(t);await rE(n,e,!0,!1)}async function rE(t,e,n,r){const s=await iC(t.localStore,xn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await jC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qw(t.remoteStore,s),l}async function jC(t,e,n,r,s){t.Ka=(m,g,I)=>async function(N,O,k,w){let A=O.view.ma(k);A.ns&&(A=await Ey(N.localStore,O.query,!1).then(({documents:E})=>O.view.ma(E,A)));const b=w&&w.targetChanges.get(O.targetId),F=w&&w.targetMismatches.get(O.targetId)!=null,L=O.view.applyChanges(A,N.isPrimaryClient,b,F);return Cy(N,O.targetId,L.wa),L.snapshot}(t,m,g,I);const i=await Ey(t.localStore,e,!0),o=new bC(e,i.Ts),l=o.ma(i.documents),u=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Cy(t,n,h.wa);const f=new DC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function UC(t,e,n){const r=re(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Yu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ip(r.remoteStore,s.targetId),Dd(r,s.targetId)}).catch(ya)):(Dd(r,s.targetId),await Nd(r.localStore,s.targetId,!0))}async function FC(t,e){const n=re(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ip(n.remoteStore,r.targetId))}async function zC(t,e,n){const r=GC(t);try{const s=await function(o,l){const u=re(o),h=He.now(),f=l.reduce((I,x)=>I.add(x.key),oe());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=Jn(),N=oe();return u.cs.getEntries(I,f).next(O=>{x=O,x.forEach((k,w)=>{w.isValidDocument()||(N=N.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(O=>{m=O;const k=[];for(const w of l){const A=ux(w,m.get(w.key).overlayedDocument);A!=null&&k.push(new Hr(w.key,A,mw(A.value.mapValue),nn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,k,l)}).next(O=>{g=O;const k=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(I,O.batchId,k)})}).then(()=>({batchId:g.batchId,changes:Aw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Pe(fe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ta(r,s.changes),await rc(r.remoteStore)}catch(s){const i=cp(s,"Failed to persist write");n.reject(i)}}async function sE(t,e){const n=re(t);try{const r=await nC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ge(o.va):s.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await Ta(n,r,e)}catch(r){await ya(r)}}function xy(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&fp(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BC(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Pe(Y.comparator);o=o.insert(i,_t.newNoDocument(i,ne.min()));const l=oe().add(i),u=new ec(ne.min(),new Map,new Pe(fe),o,l);await sE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),mp(r)}else await Nd(r.localStore,e,!1).then(()=>Dd(r,e,n)).catch(ya)}async function $C(t,e){const n=re(t),r=e.batch.batchId;try{const s=await tC(n.localStore,e);oE(n,r,null),iE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,s)}catch(s){await ya(s)}}async function HC(t,e,n){const r=re(t);try{const s=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ge(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);oE(r,e,n),iE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,s)}catch(s){await ya(s)}}function iE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function oE(t,e,n){const r=re(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||aE(t,r)})}function aE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ip(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),mp(t))}function Cy(t,e,n){for(const r of n)r instanceof tE?(t.La.addReference(r.key,e),qC(t,r)):r instanceof nE?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||aE(t,r.key)):te()}function qC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),mp(t))}function mp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new OC(n)),t.Oa=t.Oa.insert(n,r),Qw(t.remoteStore,new Er(xn(Qu(n.path)),r,"TargetPurposeLimboResolution",qf.oe))}}async function Ta(t,e,n){const r=re(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=sp.Wi(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=re(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>j.forEach(h,g=>j.forEach(g.$i,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>j.forEach(g.Ui,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!_a(m))throw m;K("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const I=f.os.get(g),x=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(g,N)}}}(r.localStore,i))}async function WC(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await qw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ta(n,r.hs)}}function KC(t,e){const n=re(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let s=oe();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function lE(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BC.bind(null,e),e.Ca.d_=PC.bind(null,e.eventManager),e.Ca.$a=NC.bind(null,e.eventManager),e}function GC(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$C.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HC.bind(null,e),e}class Tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return eC(this.persistence,new Jx,e.initialUser,this.serializer)}Ga(e){return new Qx(rp.Zr,this.serializer)}Wa(e){return new aC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tu.provider={build:()=>new Tu};class Od{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WC.bind(null,this.syncEngine),await RC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CC}()}createDatastore(e){const n=tc(e.databaseInfo.databaseId),r=function(i){return new hC(i)}(e.databaseInfo);return function(i,o,l,u){return new pC(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new gC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>xy(this.syncEngine,n,0),function(){return Iy.D()?new Iy:new lC}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const m=new VC(s,i,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ea(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Od.provider={build:()=>new Od};/**
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
 */class gp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class QC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=dw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YC(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Sy(e.remoteStore,s)),t._onlineComponents=e}async function YC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;yi("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new Tu)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await uh(t,new Tu);return t._offlineComponents}async function uE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Py(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Py(t,new Od))),t._onlineComponents}function XC(t){return uE(t).then(e=>e.syncEngine)}async function Iu(t){const e=await uE(t),n=e.eventManager;return n.onListen=LC.bind(null,e.syncEngine),n.onUnlisten=UC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=MC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FC.bind(null,e.syncEngine),n}function JC(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new gp({next:g=>{f.Za(),o.enqueueAndForget(()=>dp(i,m));const I=g.docs.has(l);!I&&g.fromCache?h.reject(new H(V.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?h.reject(new H(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new pp(Qu(l.path),f,{includeMetadataChanges:!0,_a:!0});return hp(i,m)}(await Iu(t),t.asyncQueue,e,n,r)),r.promise}function ZC(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new gp({next:g=>{f.Za(),o.enqueueAndForget(()=>dp(i,m)),g.fromCache&&u.source==="server"?h.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new pp(l,f,{includeMetadataChanges:!0,_a:!0});return hp(i,m)}(await Iu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ny=new Map;/**
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
 */function hE(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eP(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function by(t){if(!Y.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dy(t){if(Y.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sc(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Oy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ic{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yR;switch(r.type){case"firstParty":return new ER(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ny.get(n);r&&(K("ComponentProvider","Removing Datastore"),Ny.delete(n),r.terminate())}(this),Promise.resolve()}}function tP(t,e,n,r={}){var s;const i=(t=Vt(t,ic))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=gt.MOCK_USER;else{l=w0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(h)}t._authCredentials=new _R(new hw(l,u))}}/**
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
 */class qr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qr(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Dr extends qr{constructor(e,n,r){super(e,n,Qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new Y(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function Ls(t,e,...n){if(t=Oe(t),hE("collection","path",e),t instanceof ic){const r=Ie.fromString(e,...n);return Dy(r),new Dr(t,null,r)}{if(!(t instanceof vt||t instanceof Dr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Dy(r),new Dr(t.firestore,null,r)}}function qe(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=dw.newId()),hE("doc","path",e),t instanceof ic){const r=Ie.fromString(e,...n);return by(r),new vt(t,null,new Y(r))}{if(!(t instanceof vt||t instanceof Dr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return by(r),new vt(t.firestore,t instanceof Dr?t.converter:null,new Y(r))}}/**
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
 */class Vy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Kw(this,"async_queue_retry"),this.Vu=()=>{const r=lh();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new $n;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_a(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=up.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ly(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Zn extends ic{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Vy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vy(e),this._firestoreClient=void 0,await e}}}function nP(t,e){const n=typeof t=="object"?t:Vf(),r=typeof t=="string"?t:"(default)",s=$u(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=y0("firestore");i&&tP(s,...i)}return s}function oc(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rP(t),t._firestoreClient}function rP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,f){return new OR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,cE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new QC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ii(ut.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ii(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ac{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lc{constructor(e){this._methodName=e}}/**
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
 */class yp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */class _p{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const sP=/^__.*__$/;class iP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class dE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class vp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Su(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(fE(this.Cu)&&sP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class oP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tc(e)}Qu(e,n,r,s=!1){return new vp({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uc(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new oP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Ep("Data must be an object, but it was:",o,r);const l=mE(r,o);let u,h;if(i.merge)u=new Ut(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Vd(e,m,n);if(!o.contains(g))throw new H(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);yE(f,g)||f.push(g)}u=new Ut(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new iP(new Pt(l),u,h)}class cc extends lc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cc}}class wp extends lc{_toFieldTransform(e){return new ix(e.path,new sa)}isEqual(e){return e instanceof wp}}function aP(t,e,n,r){const s=t.Qu(1,e,n);Ep("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();Is(r,(u,h)=>{const f=Tp(e,u,n);h=Oe(h);const m=s.Nu(f);if(h instanceof cc)i.push(f);else{const g=Ia(h,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ut(i);return new dE(o,l,s.fieldTransforms)}function lP(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Vd(e,r,n)],u=[s];if(i.length%2!=0)throw new H(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Vd(e,i[g])),u.push(i[g+1]);const h=[],f=Pt.empty();for(let g=l.length-1;g>=0;--g)if(!yE(h,l[g])){const I=l[g];let x=u[g];x=Oe(x);const N=o.Nu(I);if(x instanceof cc)h.push(I);else{const O=Ia(x,N);O!=null&&(h.push(I),f.set(I,O))}}const m=new Ut(h);return new dE(f,m,o.fieldTransforms)}function uP(t,e,n,r=!1){return Ia(n,t.Qu(r?4:3,e))}function Ia(t,e){if(gE(t=Oe(t)))return Ep("Unsupported field value:",e,t),mE(t,e);if(t instanceof lc)return function(r,s){if(!fE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Ia(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:wu(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wu(s.serializer,i)}}if(r instanceof yp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ii)return{bytesValue:jw(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _p)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${sc(r)}`)}(t,e)}function mE(t,e){const n={};return fw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(r,s)=>{const i=Ia(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof yp||t instanceof Ii||t instanceof vt||t instanceof lc||t instanceof _p)}function Ep(t,e,n){if(!gE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=sc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Vd(t,e,n){if((e=Oe(e))instanceof ac)return e._internalPath;if(typeof e=="string")return Tp(t,e);throw Su("Field path arguments must be of type string or ",t,!1,void 0,n)}const cP=new RegExp("[~\\*/\\[\\]]");function Tp(t,e,n){if(e.search(cP)>=0)throw Su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ac(...e.split("."))._internalPath}catch{throw Su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Su(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function yE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _E{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hP extends _E{data(){return super.data()}}function hc(t,e){return typeof e=="string"?Tp(t,e):e instanceof ac?e._internalPath:e._delegate._internalPath}/**
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
 */function vE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ip{}class wE extends Ip{}function ch(t,e,...n){let r=[];e instanceof Ip&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Sp).length,l=i.filter(u=>u instanceof dc).length;if(o>1||o>0&&l>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class dc extends wE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new dc(e,n,r)}_apply(e){const n=this._parse(e);return EE(e._query,n),new qr(e.firestore,e.converter,kd(e._query,n))}_parse(e){const n=uc(e.firestore);return function(i,o,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Uy(m,f);const I=[];for(const x of m)I.push(jy(u,i,x));g={arrayValue:{values:I}}}else g=jy(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Uy(m,f),g=uP(l,o,m,f==="in"||f==="not-in");return $e.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function My(t,e,n){const r=e,s=hc("where",t);return dc._create(s,r,n)}class Sp extends Ip{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)EE(o,u),o=kd(o,u)}(e._query,n),new qr(e.firestore,e.converter,kd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kp extends wE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ra(i,o)}(e._query,this._field,this._direction);return new qr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ci(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function dP(t,e="asc"){const n=e,r=hc("orderBy",t);return kp._create(r,n)}function jy(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tw(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!Y.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sy(t,new Y(r))}if(n instanceof vt)return sy(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(n)}.`)}function Uy(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function EE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fP{convertValue(e,n="none"){switch(_s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ue(o.doubleValue));return new _p(i)}convertGeoPoint(e){return new yp(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ge(Hw(r));const s=new ta(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function TE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class _o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IE extends _E{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class jl extends IE{data(e={}){return super.data(e)}}class SE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _o(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jl(this._firestore,this._userDataWriter,r.key,r,new _o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new jl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new jl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:pP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
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
 */function hh(t){t=Vt(t,vt);const e=Vt(t.firestore,Zn);return JC(oc(e),t._key).then(n=>kE(e,t,n))}class Ap extends fP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function mP(t){t=Vt(t,qr);const e=Vt(t.firestore,Zn),n=oc(e),r=new Ap(e);return vE(t._query),ZC(n,t._query).then(s=>new SE(e,r,t,s))}function dh(t,e,n){t=Vt(t,vt);const r=Vt(t.firestore,Zn),s=TE(t.converter,e);return fc(r,[pE(uc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,nn.none())])}function xt(t,e,n,...r){t=Vt(t,vt);const s=Vt(t.firestore,Zn),i=uc(s);let o;return o=typeof(e=Oe(e))=="string"||e instanceof ac?lP(i,"updateDoc",t._key,e,n,r):aP(i,"updateDoc",t._key,e),fc(s,[o.toMutation(t._key,nn.exists(!0))])}function Fy(t){return fc(Vt(t.firestore,Zn),[new Jf(t._key,nn.none())])}function zy(t,e){const n=Vt(t.firestore,Zn),r=qe(t),s=TE(t.converter,e);return fc(n,[pE(uc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function ml(t,...e){var n,r,s;t=Oe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ly(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ly(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,f;if(t instanceof vt)h=Vt(t.firestore,Zn),f=Qu(t._key.path),u={next:m=>{e[o]&&e[o](kE(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Vt(t,qr);h=Vt(m.firestore,Zn),f=m._query;const g=new Ap(h);u={next:I=>{e[o]&&e[o](new SE(h,g,m,I))},error:e[o+1],complete:e[o+2]},vE(t._query)}return function(g,I,x,N){const O=new gp(N),k=new pp(I,O,x);return g.asyncQueue.enqueueAndForget(async()=>hp(await Iu(g),k)),()=>{O.Za(),g.asyncQueue.enqueueAndForget(async()=>dp(await Iu(g),k))}}(oc(h),f,l,u)}function fc(t,e){return function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget(async()=>zC(await XC(r),s,i)),i.promise}(oc(t),e)}function kE(t,e,n){const r=n.docs.get(e._key),s=new Ap(t);return new IE(t,s,e._key,r,new _o(n.hasPendingWrites,n.fromCache),e.converter)}function Xr(){return new wp("serverTimestamp")}(function(e,n=!0){(function(s){xi=s})(Ts),ps(new Lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Zn(new vR(r.getProvider("auth-internal")),new IR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ta(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),kn(Zg,"4.7.3",e),kn(Zg,"4.7.3","esm2017")})();/**
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
 */const AE="firebasestorage.googleapis.com",RE="storageBucket",gP=2*60*1e3,yP=10*60*1e3;/**
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
 */class Le extends Nn{constructor(e,n,r=0){super(fh(e),`Firebase Storage: ${n} (${fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function fh(t){return"storage/"+t}function Rp(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ve.UNKNOWN,t)}function _P(t){return new Le(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vP(t){return new Le(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Ve.UNAUTHENTICATED,t)}function EP(){return new Le(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TP(t){return new Le(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IP(){return new Le(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SP(){return new Le(Ve.CANCELED,"User canceled the upload/download.")}function kP(t){return new Le(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function AP(t){return new Le(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RP(){return new Le(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+RE+"' property when initializing the app?")}function xP(){return new Le(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CP(){return new Le(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PP(t){return new Le(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ld(t){return new Le(Ve.INVALID_ARGUMENT,t)}function xE(){return new Le(Ve.APP_DELETED,"The Firebase app was deleted.")}function NP(t){return new Le(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Do(t,e){return new Le(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function uo(t){throw new Le(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw AP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),x={bucket:1,path:3},N=n===AE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",k=new RegExp(`^https?://${N}/${s}/${O}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:I,indices:x,postModify:h},{regex:k,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<A.length;b++){const F=A[b],L=F.regex.exec(e);if(L){const E=L[F.indices.bucket];let _=L[F.indices.path];_||(_=""),r=new Ft(E,_),F.postModify(r);break}}if(r==null)throw kP(e);return r}}class bP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function DP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function m(O){s=setTimeout(()=>{s=null,t(I,u())},O)}function g(){i&&clearTimeout(i)}function I(O,...k){if(h){g();return}if(O){g(),f.call(null,O,...k);return}if(u()||o){g(),f.call(null,O,...k);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,m(A)}let x=!1;function N(O){x||(x=!0,g(),!h&&(s!==null?(O||(l=2),clearTimeout(s),m(0)):O||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function OP(t){t(!1)}/**
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
 */function VP(t){return t!==void 0}function LP(t){return typeof t=="object"&&!Array.isArray(t)}function xp(t){return typeof t=="string"||t instanceof String}function By(t){return Cp()&&t instanceof Blob}function Cp(){return typeof Blob<"u"}function $y(t,e,n,r){if(r<e)throw Ld(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ld(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function pc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function CE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ls||(ls={}));/**
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
 */function MP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class jP{constructor(e,n,r,s,i,o,l,u,h,f,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,x)=>{this.resolve_=I,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new gl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ls.NO_ERROR,u=i.getStatus();if(!l||MP(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ls.ABORT;r(!1,new gl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new gl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());VP(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Rp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?xE():SP();o(u)}else{const u=IP();o(u)}};this.canceled_?n(!1,new gl(!1,null,!0)):this.backoffId_=DP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $P(t,e,n,r,s,i,o=!0){const l=CE(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return zP(h,e),UP(h,n),FP(h,i),BP(h,r),new jP(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function HP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qP(...t){const e=HP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Cp())return new Blob(t);throw new Le(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function WP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function KP(t){if(typeof atob>"u")throw PP("base-64");return atob(t)}/**
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
 */const Tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ph{constructor(e,n){this.data=e,this.contentType=n||null}}function GP(t,e){switch(t){case Tn.RAW:return new ph(PE(e));case Tn.BASE64:case Tn.BASE64URL:return new ph(NE(t,e));case Tn.DATA_URL:return new ph(YP(e),XP(e))}throw Rp()}function PE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QP(t){let e;try{e=decodeURIComponent(t)}catch{throw Do(Tn.DATA_URL,"Malformed data URL.")}return PE(e)}function NE(t,e){switch(t){case Tn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Do(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Tn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Do(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KP(e)}catch(s){throw s.message.includes("polyfill")?s:Do(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class bE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Do(Tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YP(t){const e=new bE(t);return e.base64?NE(Tn.BASE64,e.rest):QP(e.rest)}function XP(t){return new bE(t).contentType}function JP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class _r{constructor(e,n){let r=0,s="";By(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(By(this.data_)){const r=this.data_,s=WP(r,e,n);return s===null?null:new _r(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new _r(r,!0)}}static getBlob(...e){if(Cp()){const n=e.map(r=>r instanceof _r?r.data_:r);return new _r(qP.apply(null,n))}else{const n=e.map(o=>xp(o)?GP(Tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new _r(s,!0)}}uploadData(){return this.data_}}/**
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
 */function DE(t){let e;try{e=JSON.parse(t)}catch{return null}return LP(e)?e:null}/**
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
 */function ZP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function OE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function tN(t,e){return e}class It{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||tN}}let yl=null;function nN(t){return!xp(t)||t.length<2?t:OE(t)}function VE(){if(yl)return yl;const t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));function e(i,o){return nN(o)}const n=new It("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new It("size");return s.xform=r,t.push(s),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),yl=t,yl}function rN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function sN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return rN(r,t),r}function LE(t,e,n){const r=DE(e);return r===null?null:sN(t,r,n)}function iN(t,e,n,r){const s=DE(e);if(s===null||!xp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),I=pc(g,n,r),x=CE({alt:"media",token:h});return I+x})[0]}function oN(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Pp{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ME(t){if(!t)throw Rp()}function aN(t,e){function n(r,s){const i=LE(t,s,e);return ME(i!==null),i}return n}function lN(t,e){function n(r,s){const i=LE(t,s,e);return ME(i!==null),iN(i,s,t.host,t._protocol)}return n}function jE(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=EP():s=wP():n.getStatus()===402?s=vP(t.bucket):n.getStatus()===403?s=TP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function UE(t){const e=jE(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=_P(t.path)),i.serverResponse=s.serverResponse,i}return n}function uN(t,e,n){const r=e.fullServerUrl(),s=pc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Pp(s,i,lN(t,n),o);return l.errorHandler=UE(e),l}function cN(t,e){const n=e.fullServerUrl(),r=pc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,h){}const l=new Pp(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=UE(e),l}function hN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function dN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=hN(null,e)),r}function fN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let b=0;b<2;b++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=dN(e,r,s),f=oN(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",I=_r.getBlob(m,r,g);if(I===null)throw xP();const x={name:h.fullPath},N=pc(i,t.host,t._protocol),O="POST",k=t.maxUploadRetryTime,w=new Pp(N,O,aN(t,n),k);return w.urlParams=x,w.headers=o,w.body=I.uploadData(),w.errorHandler=jE(e),w}class pN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw uo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw uo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw uo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw uo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw uo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mN extends pN{initXhr(){this.xhr_.responseType="text"}}function Np(){return new mN}/**
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
 */class vs{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vs(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return OE(this._location.path)}get storage(){return this._service}get parent(){const e=ZP(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new vs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw NP(e)}}function gN(t,e,n){t._throwIfRoot("uploadBytes");const r=fN(t.storage,t._location,VE(),new _r(e,!0),n);return t.storage.makeRequestWithTokens(r,Np).then(s=>({metadata:s,ref:t}))}function yN(t){t._throwIfRoot("getDownloadURL");const e=uN(t.storage,t._location,VE());return t.storage.makeRequestWithTokens(e,Np).then(n=>{if(n===null)throw CP();return n})}function _N(t){t._throwIfRoot("deleteObject");const e=cN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Np)}function vN(t,e){const n=eN(t._location.path,e),r=new Ft(t._location.bucket,n);return new vs(t.storage,r)}/**
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
 */function wN(t){return/^[A-Za-z]+:\/\//.test(t)}function EN(t,e){return new vs(t,e)}function FE(t,e){if(t instanceof bp){const n=t;if(n._bucket==null)throw RP();const r=new vs(n,n._bucket);return e!=null?FE(r,e):r}else return e!==void 0?vN(t,e):t}function TN(t,e){if(e&&wN(e)){if(t instanceof bp)return EN(t,e);throw Ld("To use ref(service, url), the first argument must be a Storage instance.")}else return FE(t,e)}function Hy(t,e){const n=e==null?void 0:e[RE];return n==null?null:Ft.makeFromBucketSpec(n,t)}function IN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:w0(s,t.app.options.projectId))}class bp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=AE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gP,this._maxUploadRetryTime=yP,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=Hy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Hy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new bP(xE());{const o=$P(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const qy="@firebase/storage",Wy="0.13.2";/**
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
 */const zE="storage";function SN(t,e,n){return t=Oe(t),gN(t,e,n)}function kN(t){return t=Oe(t),yN(t)}function Ky(t){return t=Oe(t),_N(t)}function mh(t,e){return t=Oe(t),TN(t,e)}function AN(t=Vf(),e){t=Oe(t);const r=$u(t,zE).getImmediate({identifier:e}),s=y0("storage");return s&&RN(r,...s),r}function RN(t,e,n,r={}){IN(t,e,n,r)}function xN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new bp(n,r,s,e,Ts)}function CN(){ps(new Lr(zE,xN,"PUBLIC").setMultipleInstances(!0)),kn(qy,Wy,""),kn(qy,Wy,"esm2017")}CN();/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pe=(t,e)=>{const n=se.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>se.createElement("svg",{ref:f,...PN,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${NN(t)}`,l].join(" "),...h},[...e.map(([m,g])=>se.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=pe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=pe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=pe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=pe("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=pe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=pe("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=pe("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=pe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=pe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=pe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=pe("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=pe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=pe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=pe("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=pe("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=pe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=pe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=pe("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=pe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=pe("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=pe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=pe("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=pe("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=pe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);class QN extends c_.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n)}render(){return this.state.hasError?y.jsx("div",{className:"min-h-screen bg-red-50 flex flex-col items-center justify-center p-8 text-center",children:y.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-xl border-2 border-red-100 max-w-lg",children:[y.jsx(Md,{className:"w-16 h-16 text-red-500 mx-auto mb-4"}),y.jsx("h1",{className:"text-2xl font-black text-slate-900 mb-2",children:"System Critical Failure"}),y.jsx("p",{className:"text-slate-500 mb-4",children:"The Pact encountered a fatal error."}),y.jsx("div",{className:"bg-slate-900 text-red-400 p-4 rounded text-left font-mono text-xs overflow-auto max-h-40 mb-6",children:this.state.error&&this.state.error.toString()}),y.jsx("button",{onClick:()=>window.location.reload(),className:"bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors w-full",children:"Reboot System"})]})}):this.props.children}}const YN={apiKey:"AIzaSyDyAeeL97KNbjZgajcLostxNoOYWyYfsQ4",authDomain:"thepact-b80ae.firebaseapp.com",projectId:"thepact-b80ae",storageBucket:"thepact-b80ae.firebasestorage.app",messagingSenderId:"524158355276",appId:"1:524158355276:web:6ac0a6339212782551f1e9",measurementId:"G-SQWK4KE26X"},Op=I0(YN),Jy=mR(Op),ke=nP(Op),yh=AN(Op),We=({children:t,onClick:e,disabled:n,className:r="",variant:s="primary",type:i="button",size:o="md"})=>{const l={primary:"bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed",secondary:"bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 disabled:border-slate-300 disabled:text-slate-300",danger:"bg-red-50 text-red-600 border-2 border-red-100 hover:bg-red-100 disabled:opacity-50",success:"bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300"},u={sm:"px-2 py-1 text-xs",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-lg"};return y.jsx("button",{type:i,onClick:e,disabled:n,className:`rounded-lg font-bold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${l[s]} ${u[o]} ${r}`,children:t})},Ms=({children:t,className:e="",...n})=>y.jsx("div",{className:`bg-white rounded-xl shadow-xl border-2 border-slate-900 overflow-hidden ${e}`,...n,children:t}),_h=({isOpen:t,onClose:e,title:n,children:r})=>t?y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in",children:y.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]",children:[y.jsxs("div",{className:"bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center flex-shrink-0",children:[y.jsx("h3",{className:"font-bold text-lg text-slate-900",children:n}),y.jsx("button",{onClick:e,className:"text-slate-400 hover:text-slate-600",children:y.jsx(GN,{size:24})})]}),y.jsx("div",{className:"p-6 overflow-y-auto",children:r})]})}):null,XN=({progress:t})=>y.jsx("div",{className:"h-2 w-full bg-slate-100 rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-green-500 transition-all duration-500 ease-out",style:{width:`${t}%`}})}),JN=({onSave:t})=>{const e=se.useRef(null),[n,r]=se.useState(!1),[s,i]=se.useState(!1),[o,l]=se.useState(null);se.useEffect(()=>{const I=e.current;if(I){I.width=I.offsetWidth,I.height=200;const x=I.getContext("2d");x.lineWidth=2,x.lineCap="round",x.strokeStyle="#0f172a"}},[]);const u=I=>{const{offsetX:x,offsetY:N}=m(I),O=e.current.getContext("2d");O.beginPath(),O.moveTo(x,N),r(!0)},h=I=>{if(!n)return;const{offsetX:x,offsetY:N}=m(I),O=e.current.getContext("2d");O.lineTo(x,N),O.stroke(),i(!0)},f=()=>{r(!1),l(e.current.toDataURL())},m=I=>{if(I.touches&&I.touches[0]){const x=e.current.getBoundingClientRect();return{offsetX:I.touches[0].clientX-x.left,offsetY:I.touches[0].clientY-x.top}}return{offsetX:I.nativeEvent.offsetX,offsetY:I.nativeEvent.offsetY}},g=()=>{e.current.getContext("2d").clearRect(0,0,e.current.width,e.current.height),i(!1),l(null)};return y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"relative",children:[y.jsx("canvas",{ref:e,className:"w-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg cursor-crosshair touch-none",onMouseDown:u,onMouseMove:h,onMouseUp:f,onMouseLeave:f,onTouchStart:u,onTouchMove:h,onTouchEnd:f}),!s&&y.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none text-slate-300 text-sm font-bold uppercase",children:"Sign Here"}),s&&y.jsx("button",{onClick:g,className:"absolute top-2 right-2 p-1 bg-white border border-slate-200 rounded text-slate-400 hover:text-red-500",children:y.jsx(UN,{size:16})})]}),s&&y.jsx(We,{onClick:()=>t(o),variant:"success",className:"w-full py-3",children:"Accept Signature"})]})},Zy=({task:t,user:e,isLocked:n,isNext:r,onClick:s,onToggleChecklist:i,onAddChecklist:o,onDeleteChecklist:l})=>{var F,L,E,_;const[u,h]=se.useState(!1),[f,m]=se.useState(""),g=t.status,I=t.creator===e,x=t.type==="joint",N=((F=t.checklist)==null?void 0:F.length)||0,O=((L=t.checklist)==null?void 0:L.filter(v=>v.done).length)||0,k=N===0?0:Math.round(O/N*100);let w=y.jsx("div",{className:"w-4 h-4 rounded-full bg-slate-300"}),A="bg-slate-200 border-slate-300 text-slate-400";g==="completed"?(w=y.jsx(ku,{size:24}),A="bg-green-500 border-green-600 text-white"):g==="pending"?(w=I?y.jsx(Dp,{size:24,className:"animate-pulse"}):y.jsx($E,{size:24,className:"animate-pulse"}),A="bg-yellow-100 border-yellow-400 text-yellow-600 hover:bg-yellow-200 cursor-pointer"):(r||x)&&(w=x?y.jsx(BE,{size:20}):I?y.jsx(FN,{size:20}):y.jsx(HE,{size:20}),A=I||x?"bg-white border-blue-500 text-blue-500 hover:bg-blue-50 cursor-pointer":"bg-slate-100 border-slate-300 text-slate-400");const b=()=>{n&&g!=="completed"||s()};return y.jsxs("div",{className:`relative flex gap-4 transition-all duration-500 ${n?"opacity-50 grayscale":"opacity-100"}`,children:[y.jsx("div",{className:"w-16 flex-shrink-0 flex justify-center z-10 pt-2",children:y.jsx("button",{onClick:b,disabled:n||g==="completed",className:`w-12 h-12 rounded-full border-4 flex items-center justify-center shadow-sm transition-transform active:scale-95 ${A}`,children:w})}),y.jsxs("div",{className:`flex-1 bg-white rounded-xl border-2 shadow-sm overflow-hidden ${g==="pending"?"border-yellow-400 ring-4 ring-yellow-400/20":r?"border-slate-400":"border-slate-200"}`,children:[y.jsxs("div",{className:"p-4",children:[y.jsxs("div",{className:"flex justify-between items-start mb-1",children:[y.jsx("span",{className:`text-xs font-bold uppercase px-2 py-0.5 rounded ${t.creator==="joint"?"bg-purple-100 text-purple-800":"bg-slate-100 text-slate-600"}`,children:t.creatorName}),g==="pending"&&y.jsx("span",{className:"text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-bold",children:"In Review"})]}),y.jsx("p",{className:`font-medium text-lg leading-snug cursor-pointer ${g==="completed"?"line-through text-slate-400":"text-slate-800"}`,onClick:b,children:t.text}),y.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[y.jsx("div",{className:"flex-1",children:y.jsx(XN,{progress:g==="completed"?100:k})}),y.jsx("button",{onClick:()=>h(!u),className:"text-slate-400 hover:text-slate-600 p-1",children:u?y.jsx(MN,{size:18}):y.jsx(LN,{size:18})})]})]}),u&&y.jsxs("div",{className:"bg-slate-50 border-t border-slate-200 p-3 space-y-2 animate-in slide-in-from-top-2",children:[((E=t.checklist)==null?void 0:E.length)===0&&y.jsx("p",{className:"text-xs text-slate-400 italic",children:"No sub-tasks yet."}),(_=t.checklist)==null?void 0:_.map((v,T)=>y.jsxs("div",{className:"flex items-center gap-2 group",children:[y.jsx("button",{onClick:()=>i(T),disabled:g==="completed",className:`w-5 h-5 rounded border flex items-center justify-center transition-colors ${v.done?"bg-green-500 border-green-500 text-white":"bg-white border-slate-300 hover:border-slate-400"}`,children:v.done&&y.jsx(ku,{size:14})}),y.jsx("span",{className:`flex-1 text-sm ${v.done?"line-through text-slate-400":"text-slate-700"}`,children:v.text}),I&&g!=="completed"&&y.jsx("button",{onClick:()=>l(T),className:"text-slate-300 hover:text-red-500",children:y.jsx(qE,{size:14})})]},T)),I&&g!=="completed"&&y.jsxs("div",{className:"flex gap-2 pt-2",children:[y.jsx("input",{value:f,onChange:v=>m(v.target.value),className:"flex-1 text-sm border rounded px-2 py-1 outline-none focus:border-slate-500",placeholder:"Add sub-task...",onKeyDown:v=>{v.key==="Enter"&&(o(f),m(""))}}),y.jsx("button",{onClick:()=>{o(f),m("")},className:"bg-slate-200 hover:bg-slate-300 text-slate-600 px-2 rounded font-bold",children:"+"})]})]})]})]})},ZN=({tasks:t,firstIncompleteIndex:e,user:n,myRoleKey:r})=>{if(t.length===0)return null;if(e===-1)return y.jsxs("div",{className:"bg-green-100 border border-green-300 p-4 rounded-xl flex items-center gap-4",children:[y.jsx(ku,{className:"text-green-600"}),y.jsx("span",{className:"font-bold text-green-800",children:"All Tasks Complete!"})]});const s=t[e];if(!s)return null;const i=s.creator===r,o=s.status==="pending";let l,u,h,f;return o?i?(l="Awaiting Approval",u="You submitted the work. Nag your friend to approve it.",h="bg-yellow-50 border-yellow-200",f=y.jsx(Dp,{size:24,className:"text-yellow-600"})):(l="ACTION REQUIRED",u="Review their work and approve it to move forward.",h="bg-yellow-100 border-yellow-400 animate-pulse",f=y.jsx($E,{size:24,className:"text-yellow-800"})):i?(l="YOUR TURN",u="The chain is stopped until you submit this task.",h="bg-red-50 border-red-200",f=y.jsx(bN,{size:24,className:"text-red-600"})):(l=`${(s==null?void 0:s.creatorName)||"Partner"} is working`,u="You are blocked until they finish.",h="bg-slate-50 border-slate-200",f=y.jsx(WE,{size:24,className:"text-slate-400"})),y.jsxs("div",{className:`p-4 rounded-xl border flex items-center gap-4 shadow-sm transition-colors duration-500 ${h}`,children:[y.jsx("div",{className:"p-2 bg-white/50 rounded-full",children:f}),y.jsxs("div",{children:[y.jsx("h3",{className:"font-bold text-slate-800",children:l}),y.jsx("p",{className:"text-sm opacity-80",children:u})]})]})};function e2(){var _n,zi,Kr,Bi,rr,$i,Xe,Hi,sr,ir,Da,Oa;const[t,e]=se.useState(null),[n,r]=se.useState(null),[s,i]=se.useState(null),[o,l]=se.useState([]),[u,h]=se.useState([]),[f,m]=se.useState(""),[g,I]=se.useState([]),[x,N]=se.useState(!0),[O,k]=se.useState(!1),[w,A]=se.useState(null),[b,F]=se.useState("loading"),[L,E]=se.useState(null),[_,v]=se.useState(!1),[T,R]=se.useState(!1),[C,S]=se.useState(Notification.permission),[ct,gn]=se.useState(""),[yn,on]=se.useState("chain"),[$,X]=se.useState(!1),[Z,ve]=se.useState(""),[q,ye]=se.useState(null),[qt,Wt]=se.useState(""),[Kt,Gt]=se.useState(""),[Wr,bi]=se.useState(null),[Qt,ks]=se.useState(""),[As,Di]=se.useState("We solemnly swear to keep the chain moving. If one fails, both fail."),tr=se.useRef(null),Rs=se.useRef(0);se.useEffect(()=>{(async()=>{try{await Jk(Jy)}catch(Q){console.error(Q),A(Q.message),N(!1)}})();const G=sA(Jy,Q=>{if(e(Q),Q){const J=localStorage.getItem("thepact_profile");J&&E(JSON.parse(J));const ue=localStorage.getItem("thepact_active_code");ue&&J?r(ue):J?(F("lobby"),N(!1)):(F("profile"),N(!1))}});return()=>G()},[]),se.useEffect(()=>{if(!t||!L||b!=="lobby")return;const U=ch(Ls(ke,"pacts"),My("host.email","==",L.email)),G=ch(Ls(ke,"pacts"),My("guest.email","==",L.email)),Q=ml(U,ue=>{const Je=ue.docs.map(M=>M.data());I(M=>[...M.filter(je=>je.host.email!==L.email),...Je].sort((je,Tt)=>Tt.createdAt-je.createdAt))}),J=ml(G,ue=>{const Je=ue.docs.map(M=>M.data());I(M=>[...M.filter(je=>{var Tt;return((Tt=je.guest)==null?void 0:Tt.email)!==L.email}),...Je].sort((je,Tt)=>Tt.createdAt-je.createdAt))});return()=>{Q(),J()}},[t,L,b]),se.useEffect(()=>{if(!t||!n)return;const U=qe(ke,"pacts",n),G=ml(U,ue=>{var Je;if(ue.exists()){const M=ue.data();if(i(M),tr.current||m(M.notes||""),M.status==="active"){const he=sessionStorage.getItem(`cert_seen_${n}`);F(je=>je==="dashboard"||he?"dashboard":"certificate")}else(M.status==="waiting"||M.status==="signing")&&F("contract_room");if(M.notification&&L&&M.notification.toEmail===L.email){const he=((Je=M.notification.timestamp)==null?void 0:Je.toMillis())||0;he>Rs.current&&Date.now()-he<6e4&&(Rs.current=he,Qe(M.notification.title,M.notification.body))}N(!1)}else xs()},ue=>{console.error("Sync Error:",ue),N(!1)}),Q=ch(Ls(ke,"pacts",n,"tasks"),dP("createdAt","asc")),J=ml(Q,ue=>{const Je=ue.docs.map(M=>({id:M.id,...M.data()}));l(Je.filter(M=>M.type!=="joint")),h(Je.filter(M=>M.type==="joint"))});return()=>{G(),J()}},[t,n]);const Sa=async(U,G,Q)=>{N(!0);const J={name:U,email:G,pin:Q};await dh(qe(ke,"users",G),J),localStorage.setItem("thepact_profile",JSON.stringify(J)),E(J),F("lobby"),N(!1)},mc=async(U,G)=>{N(!0);const Q=qe(ke,"users",U),J=await hh(Q);if(J.exists()&&J.data().pin===G){const ue=J.data();localStorage.setItem("thepact_profile",JSON.stringify(ue)),E(ue),F("lobby")}else alert("Invalid Email or PIN");N(!1)},gc=async()=>{N(!0);const U=Math.floor(1e5+Math.random()*9e5).toString();await dh(qe(ke,"pacts",U),{host:{...L,signature:null},guest:null,terms:As,code:U,status:"waiting",createdAt:Xr(),notes:""}),localStorage.setItem("thepact_active_code",U),r(U)},ka=U=>{N(!0),localStorage.setItem("thepact_active_code",U),r(U)},Oi=async()=>{var he,je;if(Qt.length!==6)return alert("Code must be 6 digits");N(!0);const U=qe(ke,"pacts",Qt),G=await hh(U);if(!G.exists())return N(!1),alert("Pact not found.");const Q=G.data(),J=L.email,ue=((he=Q.host)==null?void 0:he.email)===J,Je=((je=Q.guest)==null?void 0:je.email)===J,M=!Q.guest;if(ue||Je)localStorage.setItem("thepact_active_code",Qt),r(Qt);else if(M){if(Q.status!=="waiting")return N(!1),alert("This pact is active/full.");await xt(U,{guest:{...L,signature:null},status:"signing"}),localStorage.setItem("thepact_active_code",Qt),r(Qt)}else N(!1),alert("Pact full.")},Aa=async()=>{N(!0);const U="DEBUG-001";await dh(qe(ke,"pacts",U),{host:{...L,signature:"debug-sig"},guest:{name:"Debug Bot",email:"bot@pact.com",signature:"bot-sig"},terms:"DEBUG MODE ACTIVE",code:U,status:"active",createdAt:Xr(),notes:"Welcome to the debug zone."}),localStorage.setItem("thepact_active_code",U),r(U),sessionStorage.setItem(`cert_seen_${U}`,"true")},xs=()=>{localStorage.removeItem("thepact_active_code"),r(null),i(null),F("lobby"),N(!1)},Vi=()=>{R(!0)},Li=async()=>{if(R(!1),!!n){N(!0);try{const U=Ls(ke,"pacts",n,"tasks"),Q=(await mP(U)).docs.map(J=>Fy(J.ref));await Promise.all(Q),await Fy(qe(ke,"pacts",n)),xs()}catch(U){console.error("Error deleting pact:",U),alert("Failed to delete pact. Check console."),N(!1)}}},Ra=async()=>{if(!("Notification"in window))return;const U=await Notification.requestPermission();S(U),U==="granted"&&new Notification("Notifications Enabled",{body:"You will now receive alerts from The Pact.",icon:"https://cdn-icons-png.flaticon.com/512/2910/2910768.png"})},Qe=(U,G)=>{if(Notification.permission==="granted")try{new Notification(U,{body:G,icon:"https://cdn-icons-png.flaticon.com/512/2910/2910768.png"})}catch{}},Ne=async(U,G,Q)=>{n&&await xt(qe(ke,"pacts",n),{notification:{toEmail:U,title:G,body:Q,timestamp:He.now()}})},Yt=((_n=s==null?void 0:s.host)==null?void 0:_n.email)===(L==null?void 0:L.email),Me=Yt?"userA":"userB",xa=Yt?"userB":"userA",Cs=Yt?(zi=s==null?void 0:s.host)==null?void 0:zi.name:(Kr=s==null?void 0:s.guest)==null?void 0:Kr.name,Ye=Yt?(Bi=s==null?void 0:s.guest)==null?void 0:Bi.email:(rr=s==null?void 0:s.host)==null?void 0:rr.email,Ca=async U=>{var M,he;const G=qe(ke,"pacts",n),Q=await hh(G);if(!Q.exists())return;const J=Q.data(),ue={};Yt?ue["host.signature"]=U:ue["guest.signature"]=U,(Yt?(M=J.guest)==null?void 0:M.signature:(he=J.host)==null?void 0:he.signature)&&(ue.status="active",ue.signedAt=Xr()),await xt(G,ue)},Mi=async(U,G)=>{const Q=[...U.checklist];Q[G].done=!Q[G].done,await xt(qe(ke,"pacts",n,"tasks",U.id),{checklist:Q})},Ps=async(U,G)=>{if(!G.trim())return;const Q=[...U.checklist||[],{text:G,done:!1}];await xt(qe(ke,"pacts",n,"tasks",U.id),{checklist:Q})},Pa=async(U,G)=>{const Q=[...U.checklist];Q.splice(G,1),await xt(qe(ke,"pacts",n,"tasks",U.id),{checklist:Q})},yc=async U=>{U.preventDefault(),ct.trim()&&(await zy(Ls(ke,"pacts",n,"tasks"),{text:ct,creator:Me,creatorName:Cs,status:"open",type:"solo",checklist:[],rejectionCount:0,createdAt:Xr()}),gn(""),Ye&&Ne(Ye,"New Chain Link",`${Cs} added a task.`))},ji=async()=>{Z.trim()&&(await zy(Ls(ke,"pacts",n,"tasks"),{text:Z,creator:"joint",creatorName:"JOINT MISSION",status:"proposed",type:"joint",checklist:[],approvals:{[Me]:!0,[xa]:!1},initiator:Me,createdAt:Xr()}),X(!1),ve(""),Ye&&Ne(Ye,"Mission Proposal",`${Cs} proposed a joint mission.`))},Na=async U=>{const G=qe(ke,"pacts",n,"tasks",U.id),Q={...U.approvals,[Me]:!0},J=Q.userA&&Q.userB;await xt(G,{approvals:Q,status:J?"open":"proposed"}),J&&Ye&&Ne(Ye,"Mission Active","Joint operation authorized.")},ba=async()=>{const U=qe(ke,"pacts",n,"tasks",q.id);let G=null,Q=null;if(Wr){k(!0);try{const J=mh(yh,`pacts/${n}/tasks/${q.id}/${Wr.name}`);await SN(J,Wr),G=await kN(J),Q=J.fullPath}catch(J){console.error("Upload failed",J),alert("Upload failed. Try again."),k(!1);return}k(!1)}await xt(U,{status:"pending",submittedAt:Xr(),submission:{note:qt,link:Kt,file:G,storagePath:Q}}),ye(null),bi(null),Ye&&Ne(Ye,"Task Submitted",`${Cs} turned in work.`)},nr=async()=>{var G;const U=qe(ke,"pacts",n,"tasks",q.id);if(q.type==="joint"){const J={...q.completionSignatures||{userA:!1,userB:!1},[Me]:!0};let ue=q.status;J.userA&&J.userB&&(ue="completed"),await xt(U,{completionSignatures:J,status:ue})}else{if(await xt(U,{status:"completed",completedAt:Xr(),approvedBy:Me}),(G=q.submission)!=null&&G.storagePath)try{const Q=mh(yh,q.submission.storagePath);await Ky(Q),await xt(U,{"submission.file":null,"submission.storagePath":null,"submission.fileDeleted":!0})}catch(Q){console.log("File cleanup error:",Q)}Ye&&Ne(Ye,"Approved!","The chain moves forward.")}ye(null)},Ui=async()=>{var G;const U=qe(ke,"pacts",n,"tasks",q.id);if((G=q.submission)!=null&&G.storagePath)try{const Q=mh(yh,q.submission.storagePath);await Ky(Q)}catch(Q){console.log("File cleanup error:",Q)}await xt(U,{status:"open",rejectionCount:(q.rejectionCount||0)+1,submission:null}),ye(null),Ye&&Ne(Ye,"REJECTED","Your work was not accepted.")},Fi=U=>{const G=U.target.files[0];if(G){if(G.size>200*1024*1024)return alert("File too large! Max 200MB.");bi(G)}};if(x)return y.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:y.jsx("div",{className:"animate-spin text-4xl",children:"⛓️"})});if(w)return y.jsxs("div",{className:"p-8 text-center",children:[y.jsx(Md,{className:"mx-auto text-red-500 mb-4"}),y.jsx("h2",{className:"font-bold",children:"Auth Error"}),y.jsx("p",{className:"text-sm",children:w})]});if(b==="profile")return y.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center p-4",children:y.jsxs(Ms,{className:"max-w-md w-full p-8",children:[y.jsx(Yy,{className:"w-16 h-16 mx-auto text-slate-900 mb-6"}),y.jsx("h1",{className:"text-2xl font-black text-center mb-6",children:_?"Resume Identity":"Create Identity"}),_?y.jsxs("form",{onSubmit:U=>{U.preventDefault();const G=new FormData(U.target);mc(G.get("email"),G.get("pin"))},className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Email (ID)"}),y.jsx("input",{name:"email",type:"email",required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3",placeholder:"you@email.com"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Security PIN"}),y.jsx("input",{name:"pin",type:"password",maxLength:4,required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3 tracking-widest font-mono",placeholder:"••••"})]}),y.jsx(We,{type:"submit",className:"w-full py-4 text-lg",children:"Log In"})]}):y.jsxs("form",{onSubmit:U=>{U.preventDefault();const G=new FormData(U.target);Sa(G.get("name"),G.get("email"),G.get("pin"))},className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Codename"}),y.jsx("input",{name:"name",required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3 font-bold",placeholder:"e.g. Shadow"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Email (ID)"}),y.jsx("input",{name:"email",type:"email",required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3",placeholder:"you@email.com"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"text-xs font-bold uppercase text-slate-500",children:"Security PIN"}),y.jsx("input",{name:"pin",type:"password",maxLength:4,required:!0,className:"w-full border-2 border-slate-200 rounded-lg p-3 tracking-widest font-mono",placeholder:"••••"})]}),y.jsx(We,{type:"submit",className:"w-full py-4 text-lg",children:"Initialize Identity"})]}),y.jsx("div",{className:"mt-4 text-center",children:y.jsx("button",{onClick:()=>v(!_),className:"text-xs text-slate-400 hover:text-slate-600 underline",children:_?"Need to create an account?":"Already have an account? Log In"})})]})});if(b==="lobby")return y.jsx("div",{className:"min-h-screen bg-slate-100 p-4",children:y.jsxs("div",{className:"max-w-2xl mx-auto space-y-8 mt-8",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-black text-slate-900 mb-2",children:"THE PACT"}),y.jsxs("p",{className:"text-slate-500",children:["Welcome, ",L.name,". Choose your path."]})]}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[y.jsxs(Ms,{className:"p-6 hover:border-yellow-500 transition-colors cursor-pointer",onClick:gc,children:[y.jsx(Qy,{className:"w-10 h-10 mb-4 text-slate-900"}),y.jsx("h2",{className:"text-xl font-bold mb-2",children:"Draft New Pact"}),y.jsx("p",{className:"text-sm text-slate-500",children:"Host a new contract and invite a partner."})]}),y.jsxs(Ms,{className:"p-6 hover:border-blue-500 transition-colors cursor-pointer",children:[y.jsx(WE,{className:"w-10 h-10 mb-4 text-slate-900"}),y.jsx("h2",{className:"text-xl font-bold mb-2",children:"Join Pact"}),y.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"Enter the 6-digit code from your partner."}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("input",{value:Qt,onChange:U=>ks(U.target.value),maxLength:6,className:"flex-1 border-2 border-slate-200 rounded-lg p-2 text-center font-mono font-bold tracking-widest uppercase",placeholder:"CODE"}),y.jsx(We,{onClick:Oi,children:"Join"})]})]})]}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("h3",{className:"text-sm font-bold uppercase text-slate-400 flex items-center gap-2",children:[y.jsx(BN,{size:16})," Your Active Pacts"]}),g.length===0?y.jsx("div",{className:"text-center p-8 border-2 border-dashed border-slate-200 rounded-lg text-slate-400",children:"No active pacts found. Create or join one above."}):y.jsx("div",{className:"space-y-3",children:g.map(U=>{var J;const Q=U.host.email===L.email?((J=U.guest)==null?void 0:J.name)||"Waiting...":U.host.name;return y.jsxs("div",{onClick:()=>ka(U.code),className:"bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center cursor-pointer hover:border-slate-400 transition-colors",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("h4",{className:"font-bold text-slate-900",children:["Pact #",U.code]}),U.status==="active"?y.jsx("span",{className:"bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase",children:"Active"}):y.jsx("span",{className:"bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase",children:U.status})]}),y.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:["With: ",y.jsx("strong",{children:Q})]})]}),y.jsx(Gy,{className:"text-slate-300",size:20})]},U.code)})})]}),y.jsxs("div",{className:"text-center pt-8",children:[y.jsx("button",{onClick:()=>{localStorage.removeItem("thepact_profile"),window.location.reload()},className:"text-xs text-slate-400 underline",children:"Switch Profile"}),L.email==="logan@aplamon.com"&&y.jsx("div",{className:"mt-8 pt-8 border-t border-slate-200",children:y.jsxs(We,{onClick:Aa,variant:"danger",className:"w-full",children:[y.jsx(VN,{size:16})," ENTER DEBUG MODE"]})})]})]})});if(b==="contract_room"){const U=s.host.email===L.email,G=U?s.host.signature:($i=s.guest)==null?void 0:$i.signature;return y.jsxs("div",{className:"min-h-screen bg-slate-50 p-4 pb-20 overflow-y-auto",children:[y.jsxs(We,{onClick:xs,variant:"secondary",size:"sm",className:"mb-4",children:[y.jsx(Gy,{className:"rotate-180",size:16})," Back to Lobby"]}),y.jsxs("div",{className:"max-w-2xl mx-auto bg-white shadow-2xl min-h-[800px] relative border border-slate-200",children:[y.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",style:{backgroundImage:'url("https://www.transparenttextures.com/patterns/cream-paper.png")'}}),y.jsxs("div",{className:"p-12 border-b-2 border-slate-900 text-center",children:[y.jsx("h1",{className:"text-4xl font-serif font-black uppercase tracking-widest mb-4",children:"Official Pact"}),y.jsxs("div",{className:"flex justify-center gap-8 mt-6 font-bold text-lg",children:[y.jsx("div",{className:"border-b-2 border-slate-300 px-4 pb-1 min-w-[150px]",children:s.host.name}),y.jsx("div",{className:"font-serif italic text-slate-400",children:"&"}),y.jsx("div",{className:`border-b-2 px-4 pb-1 min-w-[150px] ${s.guest?"border-slate-300":"text-slate-300 italic border-dashed"}`,children:s.guest?s.guest.name:"Waiting..."})]})]}),y.jsxs("div",{className:"p-12 space-y-8",children:[U&&!s.guest&&y.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 p-6 rounded text-center",children:[y.jsx("h3",{className:"font-bold text-yellow-800 mb-2",children:"Waiting for Partner"}),y.jsx("p",{className:"text-sm text-yellow-700 mb-4",children:"Share this code with your friend to join:"}),y.jsx("div",{className:"text-5xl font-mono font-black tracking-widest text-slate-900 bg-white inline-block px-6 py-4 rounded border-2 border-slate-900 border-dashed",children:s.code})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"font-serif font-bold uppercase text-slate-400 text-sm mb-4",children:"Terms of Agreement"}),U&&!s.guest?y.jsx("textarea",{value:As,onChange:Q=>{Di(Q.target.value),xt(qe(ke,"pacts",n),{terms:Q.target.value})},className:"w-full h-32 border-2 border-slate-200 p-4 font-serif text-lg leading-relaxed focus:border-slate-900 outline-none resize-none"}):y.jsx("div",{className:"font-serif text-xl leading-relaxed text-slate-800",children:s.terms})]}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 mt-8 border-t-2 border-slate-100",children:[y.jsxs("div",{children:[y.jsx("div",{className:"h-32 border-b-2 border-slate-900 mb-2 flex items-end justify-center",children:s.host.signature?y.jsx("img",{src:s.host.signature,alt:"Host Sig",className:"max-h-24"}):y.jsx("span",{className:"text-slate-300 text-sm italic pb-2",children:"Pending..."})}),y.jsxs("p",{className:"text-center font-serif text-sm uppercase tracking-widest",children:[s.host.name," (Host)"]})]}),y.jsxs("div",{children:[y.jsx("div",{className:"h-32 border-b-2 border-slate-900 mb-2 flex items-end justify-center",children:(Xe=s.guest)!=null&&Xe.signature?y.jsx("img",{src:s.guest.signature,alt:"Guest Sig",className:"max-h-24"}):y.jsx("span",{className:"text-slate-300 text-sm italic pb-2",children:"Pending..."})}),y.jsxs("p",{className:"text-center font-serif text-sm uppercase tracking-widest",children:[s.guest?s.guest.name:"Guest"," (Partner)"]})]})]})]}),(U&&!G||!U&&s.guest&&!G)&&y.jsxs("div",{className:"p-8 bg-slate-50 border-t border-slate-200",children:[y.jsx("h3",{className:"font-bold text-center mb-4",children:"Draw your signature to accept"}),y.jsx(JN,{onSave:Ca})]})]})]})}if(b==="certificate")return y.jsxs("div",{className:"min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4",children:[y.jsx("div",{className:"max-w-2xl w-full bg-white p-2 rounded-lg shadow-2xl animate-in zoom-in duration-500",children:y.jsxs("div",{className:"border-4 border-double border-slate-900 p-8 text-center relative overflow-hidden",children:[y.jsx("div",{className:"absolute top-4 right-4",children:y.jsx(Yy,{size:48,className:"text-slate-200"})}),y.jsx("h1",{className:"text-5xl font-serif font-black mb-2 uppercase",children:"It Is Done"}),y.jsx("div",{className:"w-full h-1 bg-slate-900 mb-8"}),y.jsxs("p",{className:"font-serif text-xl italic mb-8",children:["The pact between ",y.jsx("strong",{className:"uppercase",children:s.host.name})," and ",y.jsx("strong",{className:"uppercase",children:s.guest.name})," is sealed."]}),y.jsxs("div",{className:"flex justify-center gap-12 mb-8 opacity-70",children:[y.jsx("img",{src:s.host.signature,className:"h-16",alt:"Sig A"}),y.jsx("img",{src:s.guest.signature,className:"h-16",alt:"Sig B"})]}),y.jsxs("div",{className:"text-xs text-slate-400 font-mono uppercase tracking-widest",children:["Timestamp: ",(Hi=s.signedAt)==null?void 0:Hi.toDate().toLocaleString()]})]})}),y.jsxs("div",{className:"mt-8 flex gap-4",children:[y.jsxs(We,{onClick:()=>window.print(),variant:"secondary",children:[y.jsx(jN,{size:20})," Save"]}),y.jsxs(We,{onClick:()=>{sessionStorage.setItem(`cert_seen_${n}`,"true"),F("dashboard")},className:"px-8 py-3 text-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400",children:["Enter The Pact ",y.jsx(qN,{size:20,fill:"currentColor"})]})]})]});if(b==="dashboard"){if(!s||!L)return y.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-slate-50 flex-col gap-4",children:[y.jsx("div",{className:"animate-spin text-4xl",children:"⛓️"}),y.jsx("p",{className:"text-slate-400 text-sm",children:"Loading Pact Data..."}),y.jsx(We,{onClick:()=>window.location.reload(),variant:"secondary",size:"sm",children:"Force Reload"})]});const U=o.findIndex(M=>M.status!=="completed"),G=[...o,...u].filter(M=>M.rejectionCount>0),Q=u.filter(M=>M.status==="proposed"&&M.status!=="cancelled"),J=u.filter(M=>M.status==="open"||M.status==="completed"),ue=o.length>0?o[o.length-1].creator:null,Je=!ue||ue!==Me;return y.jsxs("div",{className:"min-h-screen bg-slate-100 pb-20",children:[y.jsx(_h,{isOpen:$,onClose:()=>X(!1),title:"Propose Joint Mission",children:y.jsxs("div",{className:"space-y-4",children:[y.jsx("input",{value:Z,onChange:M=>ve(M.target.value),className:"w-full border-2 border-slate-900 rounded-lg p-3 font-bold",placeholder:"Mission Objective...",autoFocus:!0}),y.jsxs(We,{onClick:ji,disabled:!Z.trim(),className:"w-full",children:[y.jsx(KN,{size:18})," Send Proposal"]})]})}),y.jsx(_h,{isOpen:T,onClose:()=>R(!1),title:"Destroy Pact?",children:y.jsxs("div",{className:"space-y-4 text-center",children:[y.jsx("div",{className:"bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto",children:y.jsx(Md,{className:"text-red-600",size:32})}),y.jsx("h3",{className:"font-bold text-slate-900 text-lg",children:"Are you absolutely sure?"}),y.jsx("p",{className:"text-slate-500 text-sm",children:"This action cannot be undone. This will permanently delete the contract and all associated tasks for both you and your partner."}),y.jsxs("div",{className:"flex gap-3 pt-4",children:[y.jsx(We,{onClick:()=>R(!1),variant:"secondary",className:"flex-1",children:"Cancel"}),y.jsx(We,{onClick:Li,variant:"danger",className:"flex-1",children:"Yes, Void It"})]})]})}),q&&y.jsx(_h,{isOpen:!!q,onClose:()=>ye(null),title:q.type==="joint"?"Joint Mission":q.creator===Me?"Submit Work":"Review Work",children:y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"bg-slate-50 p-4 rounded-xl border border-slate-200",children:[y.jsx("h2",{className:"font-bold text-xl",children:q.text}),y.jsx("span",{className:"text-xs bg-slate-200 px-2 py-1 rounded",children:q.creatorName})]}),q.type==="joint"&&y.jsxs("div",{className:"space-y-4",children:[y.jsx("div",{className:"grid grid-cols-2 gap-4",children:["userA","userB"].map(M=>{var Tt;const he=M==="userA"?s.host.name:s.guest.name,je=(Tt=q.completionSignatures)==null?void 0:Tt[M];return y.jsxs("div",{className:`p-4 rounded border-2 text-center ${je?"bg-green-50 border-green-500":"bg-slate-50"}`,children:[y.jsx("p",{className:"text-xs font-bold uppercase mb-2",children:he}),je?y.jsx(ku,{className:"mx-auto text-green-500"}):y.jsx(Dp,{className:"mx-auto text-slate-300"})]},M)})}),q.status!=="completed"&&!((sr=q.completionSignatures)!=null&&sr[Me])&&y.jsxs(We,{onClick:nr,variant:"success",className:"w-full py-4",children:[y.jsx(Qy,{size:24})," Sign Off"]})]}),q.type!=="joint"&&q.creator===Me&&q.status==="open"&&y.jsxs("div",{className:"space-y-4",children:[y.jsx("textarea",{value:qt,onChange:M=>Wt(M.target.value),className:"w-full border p-3 rounded h-32",placeholder:"Notes..."}),y.jsxs("div",{className:"flex gap-2 items-center",children:[y.jsx("input",{type:"file",onChange:Fi,className:"w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"}),Wr&&y.jsxs("span",{className:"text-xs text-green-600 font-bold",children:["Selected: ",Wr.name]}),y.jsx("input",{value:Kt,onChange:M=>Gt(M.target.value),className:"flex-1 border p-2 rounded",placeholder:"Link..."})]}),y.jsx(We,{onClick:ba,disabled:O,children:O?y.jsxs(y.Fragment,{children:[y.jsx($N,{className:"animate-spin",size:18})," Uploading..."]}):"Turn In"})]}),q.type!=="joint"&&q.creator!==Me&&q.status==="pending"&&y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"bg-white p-4 border rounded",children:[((ir=q.submission)==null?void 0:ir.file)&&y.jsx("div",{className:"mb-4",children:q.submission.file.includes(".jpg")||q.submission.file.includes(".png")||q.submission.file.includes(".jpeg")?y.jsx("img",{src:q.submission.file,className:"max-h-48 rounded border"}):y.jsxs("a",{href:q.submission.file,target:"_blank",className:"flex items-center gap-2 text-blue-600 font-bold bg-blue-50 p-3 rounded",children:[y.jsx(zN,{size:20})," View Attached File"]})}),y.jsx("p",{className:"text-sm whitespace-pre-wrap",children:(Da=q.submission)==null?void 0:Da.note}),((Oa=q.submission)==null?void 0:Oa.link)&&y.jsx("a",{href:q.submission.link,target:"_blank",className:"text-blue-600 underline text-sm block mt-2",children:q.submission.link})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsx(We,{onClick:Ui,variant:"danger",children:"Reject"}),y.jsx(We,{onClick:nr,variant:"success",children:"Approve"})]})]})]})}),y.jsxs("header",{className:"bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-20",children:[y.jsxs("div",{className:"max-w-2xl mx-auto flex justify-between items-center",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(gh,{className:"text-yellow-400"}),y.jsx("h1",{className:"font-bold text-lg tracking-wider",children:"THE PACT"})]}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsxs("button",{onClick:Ra,className:`relative p-2 rounded-full hover:bg-slate-800 transition-colors ${C!=="granted"?"text-yellow-400":"text-slate-400"}`,title:C!=="granted"?"Enable Notifications":"Notifications On",children:[C==="granted"?y.jsx(ON,{size:20}):y.jsx(DN,{size:20}),C!=="granted"&&y.jsx("span",{className:"absolute top-0 right-0 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"})]}),y.jsxs("div",{className:"text-xs font-mono text-slate-400",children:[L.name," (",Yt?"Host":"Partner",")"]}),y.jsx("button",{onClick:Vi,className:"text-slate-400 hover:text-red-500",title:"VOID CONTRACT",children:y.jsx(qE,{size:16})}),y.jsx("button",{onClick:xs,className:"text-slate-400 hover:text-white",title:"Exit Pact",children:y.jsx(HN,{size:16})})]})]}),y.jsx("div",{className:"max-w-2xl mx-auto mt-4 flex gap-2",children:[{id:"chain",label:"Chain",icon:gh},{id:"joint",label:"Joint",icon:BE},{id:"shame",label:"Shame",icon:Xy}].map(M=>y.jsxs("button",{onClick:()=>on(M.id),className:`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase ${yn===M.id?"bg-yellow-500 text-slate-900":"bg-slate-800 text-slate-400"}`,children:[y.jsx(M.icon,{size:16}),M.label]},M.id))})]}),y.jsxs("main",{className:"max-w-2xl mx-auto p-4 space-y-6",children:[yn==="shame"&&y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"bg-red-900 text-red-100 p-6 rounded-xl border border-red-800 text-center",children:[y.jsx(Xy,{size:48,className:"mx-auto mb-4 opacity-50"}),y.jsx("h2",{className:"text-2xl font-black uppercase",children:"Hall of Failures"})]}),G.length===0?y.jsx("p",{className:"text-center text-slate-400",children:"No failures yet."}):G.map(M=>y.jsxs("div",{className:"bg-white p-4 rounded-xl border-l-4 border-red-500 shadow-sm flex justify-between items-center",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"font-bold text-slate-900 line-through decoration-red-500",children:M.text}),y.jsx("p",{className:"text-xs text-slate-500",children:M.creatorName})]}),y.jsxs("div",{className:"text-2xl font-black text-red-200",children:[M.rejectionCount,"x"]})]},M.id))]}),yn==="joint"&&y.jsxs("div",{className:"space-y-6",children:[y.jsx(We,{onClick:()=>X(!0),className:"w-full bg-purple-900 hover:bg-purple-800",children:"Propose Mission"}),Q.map(M=>y.jsxs(Ms,{className:"p-4 border-l-4 border-purple-400",children:[y.jsxs("div",{className:"flex justify-between mb-2",children:[y.jsx("h3",{className:"font-bold",children:M.text}),y.jsx("span",{className:"text-xs bg-purple-100 px-2 py-1 rounded",children:"PROPOSAL"})]}),M.approvals[Me]?y.jsx("span",{className:"text-xs text-slate-400",children:"Waiting for partner..."}):y.jsx(We,{size:"sm",onClick:()=>Na(M),children:"Authorize"})]},M.id)),J.map(M=>y.jsx(Zy,{task:M,user:Me,isLocked:!1,onClick:()=>ye(M),onToggleChecklist:he=>Mi(M,he),onAddChecklist:he=>Ps(M,he),onDeleteChecklist:he=>Pa(M,he)},M.id))]}),yn==="chain"&&y.jsxs(y.Fragment,{children:[y.jsx(ZN,{tasks:o,firstIncompleteIndex:U,user:Me,myRoleKey:Me}),y.jsxs("div",{className:"relative space-y-4",children:[y.jsx("div",{className:"absolute left-8 top-0 bottom-0 w-1 bg-slate-300 -z-0"}),o.map((M,he)=>{const je=he===U,Tt=!je&&M.status!=="completed";return y.jsx(Zy,{task:M,user:Me,isLocked:Tt,isNext:je,onClick:()=>{var Xt,Ns,qi;M.status==="completed"||Tt||(M.creator===Me&&M.status==="open"||M.creator!==Me&&M.status==="pending")&&(ye(M),Wt(((Xt=M.submission)==null?void 0:Xt.note)||""),Gt(((Ns=M.submission)==null?void 0:Ns.link)||""),bi(((qi=M.submission)==null?void 0:qi.file)||null))},onToggleChecklist:Xt=>Mi(M,Xt),onAddChecklist:Xt=>Ps(M,Xt),onDeleteChecklist:Xt=>Pa(M,Xt)},M.id)})]}),y.jsx("div",{className:"sticky bottom-4 z-20",children:y.jsx(Ms,{className:"bg-slate-900 border-slate-900 text-white p-2",children:Je?y.jsxs("form",{onSubmit:yc,className:"flex gap-2",children:[y.jsx("input",{value:ct,onChange:M=>gn(M.target.value),placeholder:"Add next link...",className:"flex-1 bg-slate-800 border-none rounded-lg px-4 py-3 text-white outline-none"}),y.jsx(We,{type:"submit",className:"bg-yellow-500 text-slate-900",children:y.jsx(gh,{})})]}):y.jsxs("div",{className:"p-3 text-center text-slate-400 text-sm flex items-center justify-center gap-2",children:[y.jsx(HE,{size:16}),y.jsx("span",{children:"Wait for your friend."})]})})})]}),y.jsxs(Ms,{className:"p-4 bg-yellow-50 border-yellow-200",children:[y.jsxs("h3",{className:"font-bold text-yellow-800 mb-2 flex gap-2",children:[y.jsx(WN,{size:16})," The Wall"]}),y.jsx("textarea",{value:f,onChange:M=>{m(M.target.value),tr.current&&clearTimeout(tr.current),tr.current=setTimeout(()=>xt(qe(ke,"pacts",n),{notes:M.target.value}),1e3)},className:"w-full h-24 bg-transparent border-none resize-none font-handwriting focus:ring-0"})]})]})]})}return y.jsx("div",{children:"Unknown State"})}function t2(){return y.jsx(QN,{children:y.jsx(e2,{})})}vh.createRoot(document.getElementById("root")).render(y.jsx(c_.StrictMode,{children:y.jsx(t2,{})}));
