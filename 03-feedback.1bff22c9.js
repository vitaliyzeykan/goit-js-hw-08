!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function O(e){return l=e,f=setTimeout(E,t),d?y(e):a}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function E(){var e=p();if(T(e))return j(e);f=setTimeout(E,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function j(e){return f=void 0,m&&r?y(e):(r=i=void 0,a)}function h(){var e=p(),n=T(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return O(c);if(s)return f=setTimeout(E,t),y(c)}return void 0===f&&(f=setTimeout(E,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},h.flush=function(){return void 0===f?a:j(p())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var O,T,E={},j={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("STORAGE_KEY")),e.currentTarget.reset(),localStorage.removeItem("STORAGE_KEY")})),j.form.addEventListener("input",e(t)((function(e){E[e.target.name]=e.target.value;var t=JSON.stringify(E);localStorage.setItem("STORAGE_KEY",t)}),1e3)),O=localStorage.getItem("STORAGE_KEY"),(T=JSON.parse(O))&&(j.email.value=T.email,j.textarea.value=T.message)}();
//# sourceMappingURL=03-feedback.1bff22c9.js.map
