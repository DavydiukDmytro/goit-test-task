"use strict";(self.webpackChunkgoit_test_task=self.webpackChunkgoit_test_task||[]).push([[300],{2856:function(n,r,t){t.r(r),t.d(r,{default:function(){return mn}});var e=t(9434),o=t(8683),i="NOT_FOUND";var a=function(n,r){return n===r};function c(n,r){var t="object"===typeof r?r:{equalityCheck:r},e=t.equalityCheck,o=void 0===e?a:e,c=t.maxSize,s=void 0===c?1:c,u=t.resultEqualityCheck,l=function(n){return function(r,t){if(null===r||null===t||r.length!==t.length)return!1;for(var e=r.length,o=0;o<e;o++)if(!n(r[o],t[o]))return!1;return!0}}(o),p=1===s?function(n){var r;return{get:function(t){return r&&n(r.key,t)?r.value:i},put:function(n,t){r={key:n,value:t}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}(l):function(n,r){var t=[];function e(n){var e=t.findIndex((function(t){return r(n,t.key)}));if(e>-1){var o=t[e];return e>0&&(t.splice(e,1),t.unshift(o)),o.value}return i}return{get:e,put:function(r,o){e(r)===i&&(t.unshift({key:r,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(s,l);function d(){var r=p.get(arguments);if(r===i){if(r=n.apply(null,arguments),u){var t=p.getEntries(),e=t.find((function(n){return u(n.value,r)}));e&&(r=e.value)}p.put(arguments,r)}return r}return d.clearCache=function(){return p.clear()},d}function s(n){var r=Array.isArray(n[0])?n[0]:n;if(!r.every((function(n){return"function"===typeof n}))){var t=r.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return r}function u(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];var o=function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},u=e.pop();if("object"===typeof u&&(c=u,u=e.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,p=l.memoizeOptions,d=void 0===p?t:p,f=Array.isArray(d)?d:[d],x=s(e),g=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(f)),m=n((function(){for(var n=[],r=x.length,t=0;t<r;t++)n.push(x[t].apply(null,arguments));return i=g.apply(null,n)}));return Object.assign(m,{resultFunc:u,memoizedResultFunc:g,dependencies:x,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var l,p,d,f,x,g,m,h,b,v,w=u(c),y=t(3585),j=function(n){return n.users.error},k=function(n){return n.users.errorUpdate},Z=function(n){return n.users.page},z=function(n){return n.users.isLoading},F=function(n){return n.users.filter},$=w([function(n){return n.users.users},function(n){return n.users.followingList}],(function(n,r){return n.map((function(n){return(0,o.Z)((0,o.Z)({},n),{},{following:r.includes(n.id)})}))})),E=w([$,F],(function(n,r){return r===y.Lg.follow?n.filter((function(n){return!1===n.following})):r===y.Lg.followings?n.filter((function(n){return!0===n.following})):n})),C=w([E,Z],(function(n,r){return!(n.length<=y.FF*r)})),N=w([E,Z],(function(n,r){var t=y.FF*r;return n.length>t?n.slice(0,t):n})),O=t(8609),_=t(168),A=t(5706),L=A.Z.div(l||(l=(0,_.Z)(["\n  text-align: center;\n  @media screen and (min-width: ","px) {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n  }\n  @media screen and (min-width: ","px) {\n    margin-bottom: 20px;\n  }\n"])),y.j$.tablet,y.j$.desktop),S=A.Z.button(p||(p=(0,_.Z)(["\n  padding: 8px;\n  min-width: 180px;\n  background: var(--color-primary-text);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: var(--color-primary);\n\n  &:hover,\n  &:focus {\n    background-color: var(--color-secondary-bg);\n    color: var(--color-primary-text);\n  }\n\n  @media screen and (max-width: ","px) {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 20px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  @media screen and (min-width: ","px) {\n    font-size: 25px;\n    min-width: 190px;\n  }\n"])),y.j$.tablet-1,y.j$.desktop),I=t(184),U=function(){var n=(0,e.I0)(),r=(0,e.v9)(F);return(0,I.jsx)(L,{children:Object.keys(y.Lg).map((function(t){return(0,I.jsx)(S,{className:t===r?"active":"",onClick:function(){return r=t,void n((0,O.l3)(r));var r},children:y.Lg[t]},t)}))})},q=t(8349),R=t(9439),B=t(2791),T=t(4630),D=A.Z.li(d||(d=(0,_.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  margin: 20px;\n  padding-top: 28px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n  text-align: center;\n"]))),P=A.Z.img(f||(f=(0,_.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),W=A.Z.img(x||(x=(0,_.Z)(["\n  margin: 0 auto 18px auto;\n\n  width: 308px;\n  height: 168px;\n"]))),G=A.Z.img(g||(g=(0,_.Z)(["\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n"]))),H=A.Z.div(m||(m=(0,_.Z)(["\n  position: relative;\n  margin-bottom: 62px;\n  height: 8px;\n  width: 100%;\n  background: var(--color-primary);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),J=A.Z.div(h||(h=(0,_.Z)(["\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  height: 80px;\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 50%;\n"]))),K=A.Z.p(b||(b=(0,_.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--color-primary);\n  text-transform: uppercase;\n  margin-bottom: 16px;\n  &.margin_bottom {\n    margin-bottom: 26px;\n  }\n"]))),M=A.Z.button(v||(v=(0,_.Z)(["\n  padding: 14px 0;\n  width: 196px;\n  text-align: center;\n  background-color: var(--color-primary);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 18px;\n  color: var(--color-secondary-text);\n\n  &:hover,\n  &:focus {\n    background-color: var(--color-secondary-bg);\n  }\n\n  &.active {\n    background-color: var(--color-secondary-bg);\n\n    &:hover,\n    &:focus {\n      background-color: var(--color-primary);\n    }\n  }\n"])));var Q,V,X,Y,nn,rn,tn=t.p+"static/media/logo.ed8d2d6f7ea349921680afb489ab80b8.svg",en=t.p+"static/media/backgroundImage.760f2dbcc74337295886.webp",on=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},an=function(n){var r=n.user,t=(0,e.v9)(k),o=(0,e.I0)(),i=(0,B.useState)(null),a=(0,R.Z)(i,2),c=a[0],s=a[1],u=(0,B.useState)(null),l=(0,R.Z)(u,2),p=l[0],d=l[1];(0,B.useEffect)((function(){s(null)}),[r.followers]),(0,B.useEffect)((function(){p||d(t)}),[t,p]);return(0,I.jsxs)(D,{children:[(0,I.jsx)(P,{src:tn,alt:"logo",width:"76",height:"22"}),(0,I.jsx)(W,{className:"img",src:en,width:"308",height:"168"}),(0,I.jsx)(H,{children:(0,I.jsx)(J,{children:(0,I.jsx)(G,{className:"img",src:r.avatar,width:"62",height:"62",alt:"User Avatar"})})}),p&&c?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(K,{children:"Error "}),(0,I.jsx)(K,{className:"margin_bottom",children:p})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(K,{children:[on(r.tweets)," tweets"]}),(0,I.jsxs)(K,{className:"margin_bottom",children:[on(r.followers)," followers"]}),(0,I.jsx)(M,{className:r.following?"active":"",onClick:function(){!function(n){var r=n.id,t=n.followers,e=n.following;s(r);var i={id:r,followers:t};e?i.followers-=1:i.followers+=1,o((0,T.P)(i))}(r)},disabled:c===r.id,children:r.following?"Following":"Follow"})]})]})},cn=A.Z.ul(Q||(Q=(0,_.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n\n  @media screen and (min-width: ","px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media screen and (min-width: ","px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"])),y.j$.tablet,y.j$.desktop),sn=function(){var n=(0,e.v9)(N);return(0,I.jsx)(cn,{children:n.map((function(n){return(0,I.jsx)(an,{user:n},n.id)}))})},un=t(3576),ln=t(1087),pn=A.Z.h1(V||(V=(0,_.Z)(["\n  margin-bottom: 20px;\n  font-weight: 700;\n  font-size: 50px;\n  text-transform: uppercase;\n  text-align: center;\n  color: var(--color-primary-text);\n\n  @media screen and (min-width: ","px) {\n    font-size: 60px;\n  }\n  @media screen and (min-width: ","px) {\n    font-size: 80px;\n    margin-bottom: 30px;\n  }\n"])),y.j$.tablet,y.j$.desktop),dn=A.Z.p(X||(X=(0,_.Z)(["\n  margin-bottom: 20px;\n  font-weight: 500;\n  font-size: 20px;\n  text-transform: uppercase;\n  text-align: center;\n  color: var(--color-primary-text);\n\n  @media screen and (min-width: ","px) {\n    font-size: 25px;\n  }\n  @media screen and (min-width: ","px) {\n    font-size: 30px;\n    margin-bottom: 30px;\n  }\n"])),y.j$.tablet,y.j$.desktop),fn=A.Z.p(Y||(Y=(0,_.Z)(["\n  font-weight: 600;\n  font-size: 30px;\n  text-transform: uppercase;\n  text-align: center;\n  color: var(--color-primary-text);\n  margin-bottom: 10px;\n\n  @media screen and (min-width: ","px) {\n    font-size: 35px;\n    margin-bottom: 20px;\n  }\n  @media screen and (min-width: ","px) {\n    font-size: 40px;\n    margin-bottom: 30px;\n  }\n"])),y.j$.tablet,y.j$.desktop),xn=A.Z.button(nn||(nn=(0,_.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n  margin-top: 20px;\n  padding: 8px;\n  min-width: 180px;\n  background-color: var(--color-primary-text);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: var(--color-primary);\n\n  &:hover,\n  &:focus {\n    background-color: var(--color-secondary-bg);\n    color: var(--color-primary-text);\n  }\n\n  @media screen and (min-width: ","px) {\n    padding: 10px;\n    font-size: 25px;\n  }\n"])),y.j$.desktop),gn=(0,A.Z)(ln.rU)(rn||(rn=(0,_.Z)(["\n  display: block;\n  padding: 8px;\n  max-width: 180px;\n  margin: 20px auto;\n\n  background-color: var(--color-primary-text);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: var(--color-primary);\n  text-align: center;\n\n  &:hover,\n  &:focus {\n    background-color: var(--color-secondary-bg);\n    color: var(--color-primary-text);\n  }\n"]))),mn=function(){var n=(0,e.I0)(),r=(0,e.v9)(C),t=(0,e.v9)(z),o=(0,e.v9)(j);(0,B.useEffect)((function(){n((0,T.c)())}),[n]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(gn,{to:"/",children:"Back"}),(0,I.jsx)(pn,{children:"Tweets"}),t?(0,I.jsx)(q.a,{}):o?(0,I.jsxs)(un.W2,{className:"error",children:[(0,I.jsx)(fn,{children:"Oops, something went wrong, try again later"}),(0,I.jsx)(dn,{children:o})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(U,{}),(0,I.jsx)(sn,{}),r&&(0,I.jsx)(xn,{onClick:function(){n((0,O.Oy)())},children:"load more"})]})]})}}}]);
//# sourceMappingURL=300.f95e1ed9.chunk.js.map