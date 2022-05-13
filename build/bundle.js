var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o,i;function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){i=t}const p=[],m=[],$=[],b=[],v=Promise.resolve();let y=!1;function _(t){$.push(t)}const x=new Set;let k=0;function w(){const t=i;do{for(;k<p.length;){const t=p[k];k++,g(t),T(t.$$)}for(g(null),p.length=0,k=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];x.has(e)||(x.add(e),e())}$.length=0}while(p.length);for(;b.length;)b.pop()();y=!1,x.clear(),g(t)}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const j=new Set;function E(t,e){t&&t.i&&(j.delete(t),t.i(e))}function q(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),undefined.c.push((()=>{j.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function A(t){t&&t.c()}function N(t,n,a,o){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(n,a),o||_((()=>{const n=c.map(e).filter(s);l?l.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(_)}function L(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,v.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(e,s,a,o,c,l,f,d=[-1]){const h=i;g(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||h.$$.root};f&&f(p.root);let m=!1;if(p.ctx=a?a(e,s.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),m&&B(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!o&&o(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();s.intro&&E(e.$$.fragment),N(e,s.target,s.anchor,s.customElement),w()}g(h)}class M{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(e){let n;return{c(){n=f("div"),n.innerHTML='<h1 class="svelte-f5q2p3">About</h1> \n    <p class="svelte-f5q2p3">I am a backend python developer learning frontend. I mainly work with python, with a particular interest of making things simple and automating daily tasks</p> \n    <h1 class="svelte-f5q2p3">Interest</h1> \n    <p class="svelte-f5q2p3">Solving Challenges. Natural Language(Linguistics). Automating simple tasks. Gaming. Reading Books. Being Up-To-Date with technology, and much more</p>',h(n,"class","svelte-f5q2p3")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class I extends M{constructor(t){super(),C(this,t,null,H,a,{})}}function O(e){let n;return{c(){n=f("div"),n.innerHTML='<h1 class="svelte-vmbxyh"><b>Terroid</b></h1> \n    <h3 class="svelte-vmbxyh">Pythonista</h3> \n    <div class="inline svelte-vmbxyh"><a class="blurple svelte-vmbxyh" target="_blank" href="https://discord.gg/uNnNgtBzCy"><i class="fa-brands fa-discord"></i>  Discord</a> \n        <a class="red svelte-vmbxyh" target="_blank" href="https://www.youtube.com/Terroid"><i class="fa-brands fa-youtube"></i>  Youtube</a></div>',h(n,"class","main svelte-vmbxyh")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class S extends M{constructor(t){super(),C(this,t,null,O,a,{})}}function D(e){let n;return{c(){n=f("div"),n.innerHTML='<div class="mid svelte-16hgjo5"><a target="_blank" href="https://twitter.com/TerroidYT" class="svelte-16hgjo5"><i class="fa-brands fa-twitter"></i></a> \n        <a target="_blank" href="https://www.instagram.com/bhairavaskanda/" class="svelte-16hgjo5"><i class="fa-brands fa-instagram"></i></a> \n        <a target="_blank" href="https://github.com/skandabhairava" class="svelte-16hgjo5"><i class="fa-brands fa-github"></i></a></div>',h(n,"class","container svelte-16hgjo5")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class P extends M{constructor(t){super(),C(this,t,null,D,a,{})}}function Y(e){let n,r,s,a,i,g,p,m,$,b;return i=new S({}),p=new I({}),$=new P({}),{c(){var t,e;n=f("main"),r=f("img"),a=d(),A(i.$$.fragment),g=d(),A(p.$$.fragment),m=d(),A($.$$.fragment),t=r.src,e=s="./Terroid.png",o||(o=document.createElement("a")),o.href=e,t!==o.href&&h(r,"src","./Terroid.png"),h(r,"alt","Terroid"),h(r,"class","svelte-17u0ts7")},m(t,e){l(t,n,e),c(n,r),c(n,a),N(i,n,null),c(n,g),N(p,n,null),c(n,m),N($,n,null),b=!0},p:t,i(t){b||(E(i.$$.fragment,t),E(p.$$.fragment,t),E($.$$.fragment,t),b=!0)},o(t){q(i.$$.fragment,t),q(p.$$.fragment,t),q($.$$.fragment,t),b=!1},d(t){t&&u(n),L(i),L(p),L($)}}}return new class extends M{constructor(t){super(),C(this,t,null,Y,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map