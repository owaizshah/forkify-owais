!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},o=t.parcelRequire7e89;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire7e89=o),o.register("1ignV",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("4ZMOm",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o("1ignV").register(JSON.parse('{"5gn8V":"index.6f209437.js","bC9sc":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,p,d={},h="object"==typeof document&&document.all,g=(p={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;d=p.IS_HTMLDDA?function(e){return"function"==typeof e||e===g}:function(e){return"function"==typeof e};var v,y={},b={};v=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var m=Function.prototype,_=m.call,w=v&&m.bind.bind(_,_);b=v?w:function(e){return function(){return _.apply(e,arguments)}};var k,E,S;S=function(e){return null==e};var O=TypeError;E=function(e){if(S(e))throw O("Can't call method on "+e);return e};var j=Object;k=function(e){return j(E(e))};var P=b({}.hasOwnProperty);y=Object.hasOwn||function(e,t){return P(k(e),t)};var T,$=Function.prototype,A=c&&Object.getOwnPropertyDescriptor,L=y($,"name"),x={EXISTS:L,PROPER:L&&"something"===function(){}.name,CONFIGURABLE:L&&(!c||c&&A($,"name").configurable)}.CONFIGURABLE,M={},I={},R=Object.defineProperty;T=function(e,t){try{R(a,e,{value:t,configurable:!0,writable:!0})}catch(r){a[e]=t}return t};var C="__core-js_shared__",F=a["__core-js_shared__"]||T(C,{});I=F;var H=b(Function.toString);d(I.inspectSource)||(I.inspectSource=function(e){return H(e)}),M=I.inspectSource;var N,q,D=a.WeakMap;q=d(D)&&/native code/.test(String(D));var U={},V=p.all;U=p.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:d(e)||e===V}:function(e){return"object"==typeof e?null!==e:d(e)};var G,z,B,Y={},W=a.document,J=U(W)&&U(W.createElement);B=function(e){return J?W.createElement(e):{}},z=!c&&!u((function(){return 7!=Object.defineProperty(B("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Z,K=String,X=TypeError;Z=function(e){if(U(e))return e;throw X(K(e)+" is not an object")};var ee,te,re={},ne=Function.prototype.call;re=v?ne.bind(ne):function(){return ne.apply(ne,arguments)};var ie,oe={},ae=function(e){return d(e)?e:void 0};ie=function(e,t){return arguments.length<2?ae(a[e]):a[e]&&a[e][t]};var se={};se=b({}.isPrototypeOf);var ce,ue,le,fe={};fe=ie("navigator","userAgent")||"";var pe,de,he=a.process,ge=a.Deno,ve=he&&he.versions||ge&&ge.version,ye=ve&&ve.v8;ye&&(de=(pe=ye.split("."))[0]>0&&pe[0]<4?1:+(pe[0]+pe[1])),!de&&fe&&(!(pe=fe.match(/Edge\/(\d+)/))||pe[1]>=74)&&(pe=fe.match(/Chrome\/(\d+)/))&&(de=+pe[1]),le=de,ue=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&le&&le<41})),ce=ue&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var be=Object;oe=ce?function(e){return"symbol"==typeof e}:function(e){var t=ie("Symbol");return d(t)&&se(t.prototype,be(e))};var me,_e,we,ke=String;we=function(e){try{return ke(e)}catch(e){return"Object"}};var Ee=TypeError;_e=function(e){if(d(e))return e;throw Ee(we(e)+" is not a function")},me=function(e,t){var r=e[t];return S(r)?void 0:_e(r)};var Se,Oe=TypeError;Se=function(e,t){var r,n;if("string"===t&&d(r=e.toString)&&!U(n=re(r,e)))return n;if(d(r=e.valueOf)&&!U(n=re(r,e)))return n;if("string"!==t&&d(r=e.toString)&&!U(n=re(r,e)))return n;throw Oe("Can't convert object to primitive value")};var je,Pe;(Pe=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Te,$e=0,Ae=Math.random(),Le=b(1..toString);Te=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Le(++$e+Ae,36)};var xe=Pe("wks"),Me=a.Symbol,Ie=Me&&Me.for,Re=ce?Me:Me&&Me.withoutSetter||Te;je=function(e){if(!y(xe,e)||!ue&&"string"!=typeof xe[e]){var t="Symbol."+e;ue&&y(Me,e)?xe[e]=Me[e]:xe[e]=ce&&Ie?Ie(t):Re(t)}return xe[e]};var Ce=TypeError,Fe=je("toPrimitive");te=function(e,t){if(!U(e)||oe(e))return e;var r,n=me(e,Fe);if(n){if(void 0===t&&(t="default"),r=re(n,e,t),!U(r)||oe(r))return r;throw Ce("Can't convert object to primitive value")}return void 0===t&&(t="number"),Se(e,t)},ee=function(e){var t=te(e,"string");return oe(t)?t:t+""};var He=TypeError,Ne=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,De="enumerable",Ue="configurable",Ve="writable";G=c?Q?function(e,t,r){if(Z(e),t=ee(t),Z(r),"function"==typeof e&&"prototype"===t&&"value"in r&&Ve in r&&!r.writable){var n=qe(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:Ue in r?r.configurable:n.configurable,enumerable:De in r?r.enumerable:n.enumerable,writable:!1})}return Ne(e,t,r)}:Ne:function(e,t,r){if(Z(e),t=ee(t),Z(r),z)try{return Ne(e,t,r)}catch(e){}if("get"in r||"set"in r)throw He("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var Ge;Ge=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},Y=c?function(e,t,r){return G(e,t,Ge(1,r))}:function(e,t,r){return e[t]=r,e};var ze,Be=Pe("keys");ze=function(e){return Be[e]||(Be[e]=Te(e))};var Ye={};Ye={};var We,Je,Qe,Ze="Object already initialized",Ke=a.TypeError,Xe=a.WeakMap;if(q||I.state){var et=I.state||(I.state=new Xe);et.get=et.get,et.has=et.has,et.set=et.set,We=function(e,t){if(et.has(e))throw Ke(Ze);return t.facade=e,et.set(e,t),t},Je=function(e){return et.get(e)||{}},Qe=function(e){return et.has(e)}}else{var tt=ze("state");Ye[tt]=!0,We=function(e,t){if(y(e,tt))throw Ke(Ze);return t.facade=e,Y(e,tt,t),t},Je=function(e){return y(e,tt)?e[tt]:{}},Qe=function(e){return y(e,tt)}}var rt=(N={set:We,get:Je,has:Qe,enforce:function(e){return Qe(e)?Je(e):We(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=Je(t)).type!==e)throw Ke("Incompatible receiver, "+e+" required");return r}}}).enforce,nt=N.get,it=Object.defineProperty,ot=c&&!u((function(){return 8!==it((function(){}),"length",{value:8}).length})),at=String(String).split("String"),st=f=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!y(e,"name")||x&&e.name!==t)&&(c?it(e,"name",{value:t,configurable:!0}):e.name=t),ot&&r&&y(r,"arity")&&e.length!==r.arity&&it(e,"length",{value:r.arity});try{r&&y(r,"constructor")&&r.constructor?c&&it(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=rt(e);return y(n,"source")||(n.source=at.join("string"==typeof t?t:"")),e};Function.prototype.toString=st((function(){return d(this)&&nt(this).source||M(this)}),"toString"),l=function(e,t,r){return r.get&&f(r.get,t,{getter:!0}),r.set&&f(r.set,t,{setter:!0}),G(e,t,r)};var ct;ct=function(){var e=Z(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var ut=a.RegExp,lt=ut.prototype;c&&u((function(){var e=!0;try{ut(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(lt,"flags").get.call(t)!==n||r!==n}))&&l(lt,"flags",{configurable:!0,get:ct});var ft,pt;pt="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var dt,ht={},gt={};gt[je("toStringTag")]="z",dt="[object z]"===String(gt);var vt,yt=b({}.toString),bt=b("".slice);vt=function(e){return bt(yt(e),8,-1)};var mt=je("toStringTag"),_t=Object,wt="Arguments"==vt(function(){return arguments}());ht=dt?vt:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=_t(e),mt))?r:wt?vt(t):"Object"==(n=vt(t))&&d(t.callee)?"Arguments":n};var kt;kt=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(d(r)&&f(r,o,n),n.global)i?e[t]=r:T(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:G(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var Et,St=G,Ot={};Et=!u((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}));var jt=ze("IE_PROTO"),Pt=Object,Tt=Pt.prototype;Ot=Et?Pt.getPrototypeOf:function(e){var t=k(e);if(y(t,jt))return t[jt];var r=t.constructor;return d(r)&&t instanceof r?r.prototype:t instanceof Pt?Tt:null};var $t,At={},Lt=String,xt=TypeError;$t=function(e){if("object"==typeof e||d(e))return e;throw xt("Can't set "+Lt(e)+" as a prototype")},At=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=b(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return Z(r),$t(n),t?e(r,n):r.__proto__=n,r}}():void 0);var Mt,It,Rt,Ct=N.enforce,Ft=N.get,Ht=a.Int8Array,Nt=Ht&&Ht.prototype,qt=a.Uint8ClampedArray,Dt=qt&&qt.prototype,Ut=Ht&&Ot(Ht),Vt=Nt&&Ot(Nt),Gt=Object.prototype,zt=a.TypeError,Bt=je("toStringTag"),Yt=Te("TYPED_ARRAY_TAG"),Wt="TypedArrayConstructor",Jt=pt&&!!At&&"Opera"!==ht(a.opera),Qt=!1,Zt={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},Kt={BigInt64Array:8,BigUint64Array:8},Xt=function(e){var t=Ot(e);if(U(t)){var r=Ft(t);return r&&y(r,Wt)?r.TypedArrayConstructor:Xt(t)}},er=function(e){if(!U(e))return!1;var t=ht(e);return y(Zt,t)||y(Kt,t)};for(Mt in Zt)(Rt=(It=a[Mt])&&It.prototype)?Ct(Rt).TypedArrayConstructor=It:Jt=!1;for(Mt in Kt)(Rt=(It=a[Mt])&&It.prototype)&&(Ct(Rt).TypedArrayConstructor=It);if((!Jt||!d(Ut)||Ut===Function.prototype)&&(Ut=function(){throw zt("Incorrect invocation")},Jt))for(Mt in Zt)a[Mt]&&At(a[Mt],Ut);if((!Jt||!Vt||Vt===Gt)&&(Vt=Ut.prototype,Jt))for(Mt in Zt)a[Mt]&&At(a[Mt].prototype,Vt);if(Jt&&Ot(Dt)!==Vt&&At(Dt,Vt),c&&!y(Vt,Bt))for(Mt in Qt=!0,St(Vt,Bt,{get:function(){return U(this)?this[Yt]:void 0}}),Zt)a[Mt]&&Y(a[Mt],Yt,Mt);ft={NATIVE_ARRAY_BUFFER_VIEWS:Jt,TYPED_ARRAY_TAG:Qt&&Yt,aTypedArray:function(e){if(er(e))return e;throw zt("Target is not a typed array")},aTypedArrayConstructor:function(e){if(d(e)&&(!At||se(Ut,e)))return e;throw zt(we(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if(c){if(r)for(var i in Zt){var o=a[i];if(o&&y(o.prototype,e))try{delete o.prototype[e]}catch(r){try{o.prototype[e]=t}catch(e){}}}Vt[e]&&!r||kt(Vt,e,r?t:Jt&&Nt[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,i;if(c){if(At){if(r)for(n in Zt)if((i=a[n])&&y(i,e))try{delete i[e]}catch(e){}if(Ut[e]&&!r)return;try{return kt(Ut,e,r?t:Jt&&Ut[e]||t)}catch(e){}}for(n in Zt)!(i=a[n])||i[e]&&!r||kt(i,e,t)}},getTypedArrayConstructor:Xt,isView:function(e){if(!U(e))return!1;var t=ht(e);return"DataView"===t||y(Zt,t)||y(Kt,t)},isTypedArray:er,TypedArray:Ut,TypedArrayPrototype:Vt};var tr,rr,nr,ir={},or=Math.ceil,ar=Math.floor;ir=Math.trunc||function(e){var t=+e;return(t>0?ar:or)(t)},nr=function(e){var t=+e;return t!=t||0===t?0:ir(t)};var sr=Math.min;rr=function(e){return e>0?sr(nr(e),9007199254740991):0},tr=function(e){return rr(e.length)};var cr,ur,lr=RangeError;ur=function(e){var t=nr(e);if(t<0)throw lr("The argument can't be less than 0");return t};var fr=RangeError;cr=function(e,t){var r=ur(e);if(r%t)throw fr("Wrong offset");return r};var pr=a.RangeError,dr=a.Int8Array,hr=dr&&dr.prototype,gr=hr&&hr.set,vr=ft.aTypedArray,yr=ft.exportTypedArrayMethod,br=!u((function(){var e=new Uint8ClampedArray(2);return re(gr,e,{length:1,0:3},1),3!==e[1]})),mr=br&&ft.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new dr(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));yr("set",(function(e){vr(this);var t=cr(arguments.length>1?arguments[1]:void 0,1),r=k(e);if(br)return re(gr,this,r,t);var n=this.length,i=tr(r),o=0;if(i+t>n)throw pr("Wrong length");for(;o<i;)this[t+o]=r[o++]}),!br||mr);var _r,wr,kr,Er={}.propertyIsEnumerable,Sr=Object.getOwnPropertyDescriptor,Or=Sr&&!Er.call({1:2},1);kr=Or?function(e){var t=Sr(this,e);return!!t&&t.enumerable}:Er;var jr,Pr={},Tr=Object,$r=b("".split);Pr=u((function(){return!Tr("z").propertyIsEnumerable(0)}))?function(e){return"String"==vt(e)?$r(e,""):Tr(e)}:Tr,jr=function(e){return Pr(E(e))};var Ar,Lr,xr,Mr,Ir=Object.getOwnPropertyDescriptor,Rr=wr=c?Ir:function(e,t){if(e=jr(e),t=ee(t),z)try{return Ir(e,t)}catch(e){}if(y(e,t))return Ge(!re(kr,e,t),e[t])},Cr={},Fr=Math.max,Hr=Math.min;Mr=function(e,t){var r=nr(e);return r<0?Fr(r+t,0):Hr(r,t)};var Nr=function(e){return function(t,r,n){var i,o=jr(t),a=tr(o),s=Mr(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},qr={includes:Nr(!0),indexOf:Nr(!1)}.indexOf,Dr=b([].push);xr=function(e,t){var r,n=jr(e),i=0,o=[];for(r in n)!y(Ye,r)&&y(n,r)&&Dr(o,r);for(;t.length>i;)y(n,r=t[i++])&&(~qr(o,r)||Dr(o,r));return o};var Ur,Vr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Lr=Object.getOwnPropertyNames||function(e){return xr(e,Vr)},Ur=Object.getOwnPropertySymbols;var Gr=b([].concat);Cr=ie("Reflect","ownKeys")||function(e){var t=Lr(Z(e));return Ur?Gr(t,Ur(e)):t},Ar=function(e,t,r){for(var n=Cr(t),i=G,o=wr,a=0;a<n.length;a++){var s=n[a];y(e,s)||r&&y(r,s)||i(e,s,o(t,s))}};var zr={},Br=/#|\.prototype\./,Yr=function(e,t){var r=Jr[Wr(e)];return r==Zr||r!=Qr&&(d(t)?u(t):!!t)},Wr=Yr.normalize=function(e){return String(e).replace(Br,".").toLowerCase()},Jr=Yr.data={},Qr=Yr.NATIVE="N",Zr=Yr.POLYFILL="P";zr=Yr,_r=function(e,t){var r,n,i,o,s,c=e.target,u=e.global,l=e.stat;if(r=u?a:l?a[c]||T(c,{}):(a[c]||{}).prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(s=Rr(r,n))&&s.value:r[n],!zr(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Ar(o,i)}(e.sham||i&&i.sham)&&Y(o,"sham",!0),kt(r,n,o,e)}};var Kr,Xr={},en=Function.prototype,tn=en.apply,rn=en.call;Xr="object"==typeof Reflect&&Reflect.apply||(v?rn.bind(tn):function(){return rn.apply(tn,arguments)});var nn,on,an=(on=function(e){if("Function"===vt(e))return b(e)})(on.bind);nn=function(e,t){return _e(e),void 0===t?e:v?an(e,t):function(){return e.apply(t,arguments)}};var sn={};sn=ie("document","documentElement");var cn={};cn=b([].slice);var un,ln=TypeError;un=function(e,t){if(e<t)throw ln("Not enough arguments");return e};var fn;fn=/(?:ipad|iphone|ipod).*applewebkit/i.test(fe);var pn;pn="process"==vt(a.process);var dn,hn,gn,vn,yn=a.setImmediate,bn=a.clearImmediate,mn=a.process,_n=a.Dispatch,wn=a.Function,kn=a.MessageChannel,En=a.String,Sn=0,On={},jn="onreadystatechange";try{dn=a.location}catch(e){}var Pn=function(e){if(y(On,e)){var t=On[e];delete On[e],t()}},Tn=function(e){return function(){Pn(e)}},$n=function(e){Pn(e.data)},An=function(e){a.postMessage(En(e),dn.protocol+"//"+dn.host)};yn&&bn||(yn=function(e){un(arguments.length,1);var t=d(e)?e:wn(e),r=cn(arguments,1);return On[++Sn]=function(){Xr(t,void 0,r)},hn(Sn),Sn},bn=function(e){delete On[e]},pn?hn=function(e){mn.nextTick(Tn(e))}:_n&&_n.now?hn=function(e){_n.now(Tn(e))}:kn&&!fn?(vn=(gn=new kn).port2,gn.port1.onmessage=$n,hn=nn(vn.postMessage,vn)):a.addEventListener&&d(a.postMessage)&&!a.importScripts&&dn&&"file:"!==dn.protocol&&!u(An)?(hn=An,a.addEventListener("message",$n,!1)):hn=jn in B("script")?function(e){sn.appendChild(B("script")).onreadystatechange=function(){sn.removeChild(this),Pn(e)}}:function(e){setTimeout(Tn(e),0)});var Ln=(Kr={set:yn,clear:bn}).clear;_r({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Ln},{clearImmediate:Ln});var xn=Kr.set;_r({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==xn},{setImmediate:xn});var Mn=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new $(n||[]);return i(a,"_invoke",{value:O(e,r,s)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",d="executing",h="completed",g={};function v(){}function y(){}function b(){}var m={};u(m,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(A([])));w&&w!==r&&n.call(w,a)&&(m=w);var k=b.prototype=v.prototype=Object.create(m);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(i,o,a,s){var c=f(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function O(e,t,r){var n=p;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw o;return L()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=f(e,t,r);if("normal"===c.type){if(n=r.done?h:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function j(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function A(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:L}}function L(){return{value:t,done:!0}}return y.prototype=b,i(k,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=A,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Mn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Mn:Function("r","regeneratorRuntime = r")(Mn)}const In="https://forkify-api.herokuapp.com/api/v2/recipes/",Rn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,Cn(10)]);return await n.json()}catch(e){throw e}},Cn=function(e){return new Promise((function(t,r){setTimeout((function(){r(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},Fn={recipe:{},search:{query:"",result:[],resultsPerpage:10,page:1},bookmarks:[]},Hn=function(e){const{recipe:t}=e.data;return{cookingTime:t.cooking_time,id:t.id,image:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,sourceURL:t.source_url,title:t.title,...t.key&&{key:t.key}}},Nn=function(e=Fn.search.page){Fn.search.page=e;const t=(e-1)*Fn.search.resultsPerpage,r=e*Fn.search.resultsPerpage;return Fn.search.result.slice(t,r)},qn=function(){localStorage.setItem("bookmarks",JSON.stringify(Fn.bookmarks))},Dn=function(e){Fn.bookmarks.push(e),e.id===Fn.recipe.id&&(Fn.recipe.bookmarked=!0),qn()};!function(){const e=localStorage.getItem("bookmarks");e&&(Fn.bookmarks=JSON.parse(e))}();function Un(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Vn;Vn=o("4ZMOm").getBundleURL("5gn8V")+o("1ignV").resolve("bC9sc");class Gn{render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const r=this._generateMarkup();if(!t)return r;this._clearMarkup(),this._ParentEl.insertAdjacentHTML("afterbegin",r)}_clearMarkup(){this._ParentEl.innerHTML=""}update(e){this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._ParentEl.querySelectorAll("*"));n.forEach(((e,t)=>{const r=i[t];e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>r.setAttribute(e.name,e.value)))}))}renderError(e=this._errorMessage){const t=`<div class="error">\n        <div>\n          <svg>\n            <use href="${r(Vn)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clearMarkup(),this._ParentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`<div class="message">\n        <div>\n          <svg>\n            <use href="${r(Vn)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clearMarkup(),this._ParentEl.insertAdjacentHTML("afterbegin",t)}renderSpinner(){const e=`<div class="spinner">\n            <svg>\n              <use href="${r(Vn)}#icon-loader"></use>\n            </svg>\n          </div>`;this._ParentEl.innerHTML="",this._ParentEl.insertAdjacentHTML("afterbegin",e)}constructor(){Un(this,"_data",void 0)}}var zn;function Bn(e,t,r,n,i){const o=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let a=0,s=1,c=e,u=t;for(;a<=o.length;)c%o[a]==0&&u%o[a]==0?(s*=o[a],c/=o[a],u/=o[a]):a++;return function(e,t,r,n){return 1===e&&1===t?`${r=`${n}${(parseInt(r)+1).toString()}`}`:0===t?`${n}${r}`:"0"==r?`${n}${t}/${e}`:`${n}${r} ${t}/${e}`}(u,c,r,n)}zn=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const r=e.toString(),n=r.split(".");let i,o=n[0];if("0"==i&&"0"!==o)return o;if("0"==i&&"0"==o)return"0";if(i=r.length>=17?n[1].slice(0,n[1].length-1):n[1],"99"==i&&"0"!==o)return`${o} 99/100`;if("99"==i&&"0"==o)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return o;let a=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&i.length>2){let e=a[0].split("").reverse().join(""),r=a[1].split("").reverse().join("");if(r.length>1){let e=r.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(r=e[0])}return r.length>1&&r.length%2==0&&(r=parseInt(r.slice(0,r.length/2),10)-parseInt(r.slice(r.length/2,r.length),10)==0?r.slice(0,r.length/2):r),function(e,t,r,n,i){const o=!0,a=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return Bn(l,(u-1)*s,n,i,o)}(i,r,e,o,t)}return function(e,t,r){const n=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return Bn(i,o,t,r,n)}(i,o,t)};var Yn=new class extends Gn{addHandlerRender(e){["load","hashchange"].forEach((t=>window.addEventListener(t,e)))}addHandlerServing(e){this._ParentEl.addEventListener("click",(function(t){const r=t.target.closest(".btn--tiny");if(!r)return;const n=+r.dataset.goto;n>0&&e(n)}))}addHanderBookmark(e){this._ParentEl.addEventListener("click",(function(t){t.target.closest(".btn-bookmark")&&e()}))}_generateMarkup(){return`<figure class="recipe__fig">\n    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this._data.title}</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${r(Vn)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${r(Vn)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--increase-servings" data-goto="${this._data.servings-1}">\n          <svg>\n            <use href="${r(Vn)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--increase-servings" data-goto="${this._data.servings+1}">\n          <svg>\n            <use href="${r(Vn)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n      <svg>\n        <use href="${r(Vn)}#icon-user"></use>\n      </svg>\n    </div>\n    <button class="btn--round btn-bookmark">\n      <svg class="">\n        <use href="${r(Vn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n     ${this._data.ingredients.map(this._generateIngredientsMarkup).join("")}</ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.sourceURL}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${r(Vn)}#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>`}_generateIngredientsMarkup(e){return` <li class="recipe__ingredient">\n     <svg class="recipe__icon">\n       <use href="${r(Vn)}#icon-check"></use>\n     </svg>\n     <div class="recipe__quantity">${e.quantity?r(zn)(e.quantity):""}</div>\n     <div class="recipe__description">\n       <span class="recipe__unit">${e.unit}</span>\n       ${e.description}\n     </div>\n   </li>`}constructor(...e){super(...e),Un(this,"_ParentEl",document.querySelector(".recipe")),Un(this,"_errorMessage","Recipe could not be found! please try again"),Un(this,"_message","")}};function Wn(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function Jn(e,t){return t.get?t.get.call(e):t.value}function Qn(e,t){return Jn(e,Wn(e,t,"get"))}function Zn(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Kn(e,t,r){Zn(e,t),t.set(e,r)}function Xn(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}var ei=new WeakMap,ti=new WeakSet;function ri(){Qn(this,ei).querySelector(".search__field").value=""}var ni=new class{getQuery(){const e=Qn(this,ei).querySelector(".search__field").value;return Xn(this,ti,ri).call(this),e}addHandlerSearch(e){Qn(this,ei).addEventListener("submit",(function(t){t.preventDefault(),e()}))}constructor(){var e,t;Zn(e=this,t=ti),t.add(e),Kn(this,ei,{writable:!0,value:document.querySelector(".search")})}};var ii=new class extends Gn{_generateMarkup(){const e=window.location.hash.slice(1);return`<li class="preview">\n    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n      <figure class="preview__fig">\n        <img src="${this._data.image}" alt="Test" />\n      </figure>\n      <div class="preview__data">\n        <h4 class="preview__title">${this._data.title}</h4>\n        <p class="preview__publisher">${this._data.publisher}</p>\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n      <svg>\n        <use href="${r(Vn)}#icon-user"></use>\n      </svg>\n    </div>\n      </div>\n    </a>\n  </li>`}constructor(...e){super(...e),Un(this,"_ParentEl","")}};var oi=new class extends Gn{_generateMarkup(){return this._data.map((e=>ii.render(e,!1))).join("")}constructor(...e){super(...e),Un(this,"_ParentEl",document.querySelector(".results")),Un(this,"_errorMessage","No recipes found for your query! please try again :)"),Un(this,"_message","")}};var ai=new class extends Gn{addHandlerClick(e){this._ParentEl.addEventListener("click",(function(t){const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.goto;e(n)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.result.length/this._data.resultsPerpage);return 1===e&&t>1?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n      <span>Page ${e+1}</span>\n      <svg class="search__icon">\n        <use href="${r(Vn)}#icon-arrow-right"></use>\n      </svg>\n    </button>`:e===t&&t>1?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n      <svg class="search__icon">\n        <use href="${r(Vn)}#icon-arrow-left"></use>\n      </svg>\n      <span>Page ${e-1}</span>\n    </button>`:e<t?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n      <span>Page ${e+1}</span>\n      <svg class="search__icon">\n        <use href="${r(Vn)}#icon-arrow-right"></use>\n      </svg>\n    </button> <button  data-goto="${e-1}"class="btn--inline pagination__btn--prev">\n    <svg class="search__icon">\n      <use href="${r(Vn)}#icon-arrow-left"></use>\n    </svg>\n    <span>Page ${e-1}</span>\n  </button>`:""}constructor(...e){super(...e),Un(this,"_ParentEl",document.querySelector(".pagination"))}};var si=new class extends Gn{addHandlerload(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>ii.render(e,!1))).join("")}constructor(...e){super(...e),Un(this,"_ParentEl",document.querySelector(".bookmarks__list")),Un(this,"_errorMessage","No bookmarks yet, please found a nice recipe and bookmark it"),Un(this,"_message","")}};var ci=new class extends Gn{toggle(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}showRecipeHandler(){this._btnOpen.addEventListener("click",this.toggle.bind(this))}hideRecipeHandler(){this._btnClose.addEventListener("click",this.toggle.bind(this)),this._overlay.addEventListener("click",this.toggle.bind(this))}addHandlerUpload(e){this._ParentEl.addEventListener("submit",(function(t){t.preventDefault();const r=[...new FormData(this)],n=Object.fromEntries(r);e(n)}))}_generateMarkup(){}constructor(){super(),Un(this,"_message","Your recipe is added succesfully"),Un(this,"_ParentEl",document.querySelector(".upload")),Un(this,"_window",document.querySelector(".add-recipe-window")),Un(this,"_overlay",document.querySelector(".overlay")),Un(this,"_btnOpen",document.querySelector(".nav__btn--add-recipe")),Un(this,"_btnClose",document.querySelector(".btn--close-modal")),this.showRecipeHandler(),this.hideRecipeHandler()}};const ui=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Yn.renderSpinner(),oi.update(Nn()),si.update(Fn.bookmarks),await async function(e){try{const t=await Promise.race([Rn(`${In}/${e}?key=74be7945-0b67-4b51-b293-85b82e186021`),Cn(10)]);Fn.recipe=Hn(t),Fn.bookmarks.some((t=>t.id===e))?Fn.recipe.bookmarked=!0:Fn.recipe.bookmarked=!1}catch(e){throw e}}(e),Yn.render(Fn.recipe)}catch(e){Yn.renderError()}},li=async function(){try{oi.renderSpinner();const e=ni.getQuery();await async function(e){try{Fn.search.query=e;const t=await Rn(`${In}?search=${e}&key=74be7945-0b67-4b51-b293-85b82e186021`);console.log(t.results/10),Fn.search.result=t.data.recipes.map((e=>({id:e.id,image:e.image_url,title:e.title,publisher:e.publisher,...e.key&&{key:e.key}}))),Fn.search.page=1}catch(e){console.log(e)}}(e),oi.render(Nn()),ai.render(Fn.search)}catch(e){console.error(e)}},fi=function(e){oi.render(Nn(e)),console.log(Nn(e)),ai.update(Fn.search)},pi=function(e){var t;t=e,Fn.recipe.ingredients.forEach((e=>{e.quantity=e.quantity*t/Fn.recipe.servings})),Fn.recipe.servings=t,console.log(Fn.recipe),Yn.update(Fn.recipe)},di=function(){Fn.recipe.bookmarked?function(e){const t=Fn.bookmarks.findIndex((t=>t.id===e));Fn.bookmarks.splice(t,1),e===Fn.recipe.id&&(Fn.recipe.bookmarked=!1),qn()}(Fn.recipe.id):Dn(Fn.recipe),Yn.update(Fn.recipe),si.render(Fn.bookmarks)},hi=function(){si.render(Fn.bookmarks)},gi=async function(e){try{ci.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Please Insert Correct Format of Recipe");const[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}})),r={title:e.title,publisher:e.publisher,servings:+e.servings,cooking_time:+e.cookingTime,source_url:e.sourceUrl,image_url:e.image,ingredients:t},n=await Rn(`${In}?key=74be7945-0b67-4b51-b293-85b82e186021`,r);Fn.recipe=Hn(n),Dn(Fn.recipe)}catch(e){throw e}}(e),Yn.render(Fn.recipe),ci.renderMessage(),si.render(Fn.bookmarks),window.history.pushState(null,"",Fn.recipe.id),setTimeout((function(){ci.toggle()}),2500)}catch(e){console.error(e),ci.renderError(e.message)}};Yn.addHandlerRender(ui),Yn.addHandlerServing(pi),Yn.addHanderBookmark(di),ni.addHandlerSearch(li),ai.addHandlerClick(fi),si.addHandlerload(hi),ci.addHandlerUpload(gi)}();
//# sourceMappingURL=index.6f209437.js.map