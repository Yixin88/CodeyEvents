(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7336)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,i=o(n(7294)),l=n(1003),a=n(7795),u=n(4465),c=n(2692),s=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,o){if(l.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+r;if(h.has(i))return;h.add(i)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function _(e){return"string"==typeof e?e:a.formatUrl(e)}let y=i.default.forwardRef(function(e,t){let n,o;let{href:a,as:h,children:y,prefetch:x,passHref:g,replace:j,shallow:m,scroll:b,locale:C,onClick:E,onMouseEnter:M,onTouchStart:w,legacyBehavior:k=!1}=e,O=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,k&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let P=!1!==x,N=i.default.useContext(c.RouterContext),L=i.default.useContext(s.AppRouterContext),T=null!=N?N:L,S=!N,{href:I,as:R}=i.default.useMemo(()=>{if(!N){let e=_(a);return{href:e,as:h?_(h):e}}let[t,n]=l.resolveHref(N,a,!0);return{href:t,as:h?l.resolveHref(N,h):n||t}},[N,a,h]),Z=i.default.useRef(I),D=i.default.useRef(R);k&&(o=i.default.Children.only(n));let B=k?o&&"object"==typeof o&&o.ref:t,[H,K,U]=f.useIntersection({rootMargin:"200px"}),A=i.default.useCallback(e=>{(D.current!==R||Z.current!==I)&&(U(),D.current=R,Z.current=I),H(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[R,B,I,U,H]);i.default.useEffect(()=>{T&&K&&P&&v(T,I,R,{locale:C})},[R,I,K,C,P,null==N?void 0:N.locale,T]);let F={ref:A,onClick(e){k||"function"!=typeof E||E(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,o,r,a,u,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:u}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};s?i.default.startTransition(h):h()}(e,T,I,R,j,m,b,C,S,P)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),T&&(P||!S)&&v(T,I,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof w||w(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),T&&(P||!S)&&v(T,I,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||g||"a"===o.type&&!("href"in o.props)){let X=void 0!==C?C:null==N?void 0:N.locale,q=(null==N?void 0:N.isLocaleDomain)&&d.getDomainLocale(R,X,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);F.href=q||p.addBasePath(u.addLocale(R,X,null==N?void 0:N.defaultLocale))}return k?i.default.cloneElement(o,F):i.default.createElement("a",Object.assign({},O,F),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!i,[s,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(i){if(!c&&!s&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=l.get(o)))return t;let r=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:r},a.push(n),l.set(n,t),t}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),l.delete(o);let t=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,c,n,t,s]);let h=o.useCallback(()=>{f(!1)},[]);return[p,s,h]};var o=n(7294),r=n(4686);let i="function"==typeof IntersectionObserver,l=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7336:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var o=n(5893),r=n(9008),i=n.n(r),l=n(7294),a=n(1664),u=n.n(a),c=n(2606),s=n.n(c);function f(){return(0,o.jsxs)("header",{className:s().header,children:[(0,o.jsx)("div",{className:s().logo,children:(0,o.jsx)(u(),{href:"/",children:"CodeyEvents"})}),(0,o.jsx)("nav",{className:s().navigation,children:(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:(0,o.jsx)(u(),{href:"/events",children:"Browse All Events"})})})})]})}var d=n(9015),p=n.n(d),h=n(2172),v=function(e){let t=(0,l.useContext)(h.Z),{title:n,message:r,status:i}=e,a="";"success"===i&&(a=p().success),"error"===i&&(a=p().error),"pending"===i&&(a=p().pending);let u="".concat(p().notification," ").concat(a);return(0,o.jsxs)("div",{className:u,onClick:t.hideNotification,children:[(0,o.jsx)("h2",{children:n}),(0,o.jsx)("p",{children:r})]})};function _(e){let{children:t}=e,n=(0,l.useContext)(h.Z),r=n.notification;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{}),(0,o.jsx)("main",{children:t}),r&&(0,o.jsx)(v,{title:r.title,message:r.message,status:r.status})]})}n(7475);var y=function(e){let{Component:t,pageProps:n}=e;return(0,o.jsx)(h.l,{children:(0,o.jsxs)(_,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"CodeyEvents"}),(0,o.jsx)("meta",{name:"description",content:"Find your next developer event near you!"}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,o.jsx)(t,{...n})]})})}},2172:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var o=n(5893),r=n(7294);let i=(0,r.createContext)({notification:null,showNotification:function(e){},hideNotification:function(){}});function l(e){let{children:t}=e,[n,l]=(0,r.useState)();return(0,r.useEffect)(()=>{if(n&&("success"===n.status||"error"===n.status)){let e=setTimeout(()=>{l(null)},3e3);return()=>{clearTimeout(e)}}},[n]),(0,o.jsx)(i.Provider,{value:{notification:n,showNotification:function(e){l(e)},hideNotification:function(){l(null)}},children:t})}t.Z=i},2606:function(e){e.exports={header:"main-header_header__LZcDE",logo:"main-header_logo__OP4Mb",navigation:"main-header_navigation__5rVha"}},9015:function(e){e.exports={notification:"notification_notification__ivOBk",pending:"notification_pending__m3o8H",success:"notification_success__oL5MY",error:"notification_error__1Zbg9"}},7475:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);