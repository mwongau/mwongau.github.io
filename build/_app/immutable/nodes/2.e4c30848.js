import{S as H,i as x,s as I,k as d,q as v,a as w,l as h,m as b,r as _,h as l,c as g,b as m,C as k,D as y,J as P}from"../chunks/index.afc550c3.js";function E(f){let t,s,o,n,u;return{c(){t=v(`This site might use cookies to improve your browsing experience. If you continue to use this \r
	 site, it will be assumed you agree to the use of cookies. \r
	 `),s=d("button"),o=v("Accept cookies")},l(a){t=_(a,`This site might use cookies to improve your browsing experience. If you continue to use this \r
	 site, it will be assumed you agree to the use of cookies. \r
	 `),s=h(a,"BUTTON",{});var c=b(s);o=_(c,"Accept cookies"),c.forEach(l)},m(a,c){m(a,t,c),m(a,s,c),k(s,o),n||(u=P(s,"click",f[1]),n=!0)},p:y,d(a){a&&l(t),a&&l(s),n=!1,u()}}}function M(f){let t,s,o,n,u,a,c,p,i=f[0]&&E(f);return{c(){t=d("h1"),s=v("Home"),o=w(),n=d("div"),u=d("p"),a=v(`Welcome to my personal site. I am a researcher in computer vision and machine learning with Ph.D in Computer Science, \r
M.Sc & B.Sc(Hons.) in Electronic Engineering. I am also interested in web app development. This site is built by using \r
SvelteKit, Javascript, HTML and CSS. This site also includes a static Markdown blog. This site is hosted by GitHub Pages.`),c=w(),p=d("p"),i&&i.c()},l(e){t=h(e,"H1",{});var r=b(t);s=_(r,"Home"),r.forEach(l),o=g(e),n=h(e,"DIV",{});var S=b(n);u=h(S,"P",{});var T=b(u);a=_(T,`Welcome to my personal site. I am a researcher in computer vision and machine learning with Ph.D in Computer Science, \r
M.Sc & B.Sc(Hons.) in Electronic Engineering. I am also interested in web app development. This site is built by using \r
SvelteKit, Javascript, HTML and CSS. This site also includes a static Markdown blog. This site is hosted by GitHub Pages.`),T.forEach(l),S.forEach(l),c=g(e),p=h(e,"P",{});var C=b(p);i&&i.l(C),C.forEach(l)},m(e,r){m(e,t,r),k(t,s),m(e,o,r),m(e,n,r),k(n,u),k(u,a),m(e,c,r),m(e,p,r),i&&i.m(p,null)},p(e,[r]){e[0]?i?i.p(e,r):(i=E(e),i.c(),i.m(p,null)):i&&(i.d(1),i=null)},i:y,o:y,d(e){e&&l(t),e&&l(o),e&&l(n),e&&l(c),e&&l(p),i&&i.d()}}}function B(f,t,s){let o=!0;function n(){document.cookie="acceptCookiesButtonClicked=buttonClicked",s(0,o=!1)}return document.cookie.indexOf("acceptCookiesButtonClicked=")!=-1&&(o=!1),[o,n]}class $ extends H{constructor(t){super(),x(this,t,B,M,I,{})}}export{$ as component};
