System.register(["./chunk-vendor.js","./chunk-frameworks.js"],function(U,D){"use strict";var m,y,x,_,j;return{setters:[function(l){m=l.a,y=l.o,x=l.j,_=l.f},function(l){j=l.B}],execute:function(){var l=Object.defineProperty,A=(t,e)=>l(t,"name",{value:e,configurable:!0});function C(t){const e=document.createElement("input");return e.setAttribute("type","hidden"),e.setAttribute("name",t.name),e.setAttribute("value",t.value),e}A(C,"copyInput");function I(t){let e=!1;const o=t.querySelectorAll(".js-scanning-fixed-alert-numbers"),r=o.length!==0?JSON.parse(o[0].getAttribute("data-numbers")||"[]"):[];for(const n of t.querySelectorAll(".js-scanning-bulk-action-items")){n.innerHTML="";const s=t.querySelectorAll(".js-scanning-alert-list [data-check-all-item]:checked");for(const c of s)e||(e=r.indexOf(parseInt(c.value))!==-1),n.appendChild(C(c))}for(const n of t.querySelectorAll(".js-scanning-reopen-button"))n.hidden=e;for(const n of t.querySelectorAll(".js-scanning-reopen-button-disabled"))n.hidden=!e}A(I,"copyCheckedAlertsToBulkActionForms"),m("change",".js-scanning-alert-check",function({currentTarget:t}){const e=t.closest(".js-scanning-alert-list"),o=e.querySelector(".js-scanning-alert-check:checked")!=null,r=e.querySelector(".js-scanning-filter-options"),n=e.querySelector(".js-scanning-alert-bulk-actions"),s=e.querySelector(".js-scanning-alert-links");r&&(r.hidden=o),n&&(n.hidden=!o),s&&(s.hidden=o),I(e)}),m("details-menu-selected",".js-scanning-code-path-menu",function(t){const e=t.detail.relatedTarget.getAttribute("data-target-code-path");for(const o of document.querySelectorAll(".js-scanning-code-path"))o.hidden=e!==o.getAttribute("data-code-path")},{capture:!0});var H=Object.defineProperty,a=(t,e)=>H(t,"name",{value:e,configurable:!0});y(".js-add-secret-format-button",{add(){window.postProcessingExpressionCount=0;const t=document.querySelector(".js-post-processing-expression-count");t&&t.textContent&&(window.postProcessingExpressionCount=parseInt(t.textContent))}}),m("click",".js-add-secret-format-button",t=>{const e=t.currentTarget;if(!!e&&window.postProcessingExpressionCount<p()){const o=document.querySelectorAll(".js-additional-secret-format");if(!o)return;for(const r of o)if(r.classList.contains("has-removed-contents")){r.classList.toggle("has-removed-contents",!1),window.postProcessingExpressionCount++,window.postProcessingExpressionCount===p()&&(e.hidden=!0);break}}}),m("click",".js-remove-secret-format-button",t=>{var e,o;const r=document.querySelector(".js-add-secret-format-button");if(!r)return;const n=t.currentTarget;if(!n)return;const s=n.closest(".js-additional-secret-format");if(!s)return;s.classList.toggle("has-removed-contents",!0);const c=s.getElementsByClassName("js-post-processing-input")[0];c.value="";const i=Array.from(s.getElementsByClassName("js-post-processing-input-rule")),d=s.getElementsByClassName("errored")[0];d&&d.classList.toggle("errored",!1);for(const v of i)(e=document.getElementById(`${v.id}_hidden`))==null||e.remove();(o=document.getElementById(`${c.id}_hidden`))==null||o.remove(),E(window.codeEditor.getValue()),window.postProcessingExpressionCount--,window.postProcessingExpressionCount<p()&&(r.hidden=!1)}),y(".js-test-code",{async add(){const t=document.querySelector(".js-test-code"),e=t.clientHeight,o=await D.import("./chunk-codemirror.js").then(function(r){return r.c});if(window.codeEditor=o.default.fromTextArea(t,{lineNumbers:!1,lineWrapping:!0,mode:"text/x-yaml",inputStyle:"contenteditable",value:t.value,lineSeparator:`\r
`,theme:"github-light"}),e!==0){const r=document.querySelector(".CodeMirror");r&&(r.style.height=`${e}px`,r.style.border="1px solid #e1e4e8",r.style.borderRadius="6px")}window.codeEditor.save(),window.codeEditor.on("change",()=>{E(window.codeEditor.getValue())})}}),j(".js-custom-secret-scanning-pattern-form *",async function(){!window.codeEditor||E(window.codeEditor.getValue())}),m("click",".js-save-and-dry-run-button, .js-custom-pattern-submit-button",t=>{t.preventDefault();const e=T(t);if(!e)return;k(e);const o=h();!o||(e.className.includes("js-save-and-dry-run-button")&&q(o,"submit_type","save_and_dry_run"),_(o,"submit"))});function T(t){return t.currentTarget}a(T,"getSubmitButton");function k(t){t.innerHTML=t.getAttribute("data-disable-with")||"",t.disabled=!0}a(k,"setSubmitButtonDisableWith");function h(){return document.querySelector(".js-custom-secret-scanning-pattern-form")}a(h,"getCustomPatternForm");const q=a((t,e,o)=>{const r=document.createElement("input");r.type="hidden",r.name=e,r.id=`${e}_hidden`,r.value=o,t.appendChild(r),r.required=!0},"createHiddenInputField"),E=x(function(t){const e=document.querySelector(".js-custom-pattern-submit-button"),o=document.querySelector(".js-save-and-dry-run-button");if(!(e instanceof HTMLElement))return;const r=document.querySelector(".js-update-pattern-info"),n=document.querySelector(".js-test-pattern-matches");if(!!n)if(t.length===0){const s=document.querySelector(".js-dry-run-status");if(!s)return;M(s)||e.setAttribute("disabled","true"),o==null||o.setAttribute("disabled","true"),n.textContent=""}else{window.codeEditor.save();const s=document.querySelector(".js-test-custom-secret-scanning-pattern");if(!(s instanceof HTMLFormElement))return;const c=h();if(!c)return;for(const i of c.elements)if(i instanceof HTMLInputElement&&i.name&&(i.type==="text"||i.type==="radio"&&i.checked)){const d=document.getElementById(`${i.name}_hidden`);d!==null&&d.remove(),q(s,i.name,i.value)}F(s,$(c,e,o,r),O(n))}},300),O=a(t=>e=>{if(e.length===0)t.textContent=" - No matches";else if(e.length===1)t.textContent=" - 1 match";else{const o=[];for(const s of e)o.push(JSON.stringify(s));const n=[...new Set(o)];t.textContent=` - ${n.length} matches`}},"getTestLabelUpdater"),$=a((t,e,o,r)=>n=>{var s,c;if(P(t),n==null?void 0:n.message){if(e.setAttribute("disabled","true"),o==null||o.setAttribute("disabled","true"),r)r.hidden=!0;else if((n==null?void 0:n.error_type)==="START_DELIMITER"||(n==null?void 0:n.error_type)==="END_DELIMITER"||(n==null?void 0:n.error_type)==="MUST_MATCH"||(n==null?void 0:n.error_type)==="MUST_NOT_MATCH"){const i=document.querySelector(".js-more-options.js-details-container");i&&(i.classList.add("open"),i.classList.add("Details--on"))}return L(t,n),!1}else{const i=document.querySelector(".js-mode");if(!i)return!1;const d=document.querySelector(".js-dry-run-status");return d?((((s=d.textContent)==null?void 0:s.toLowerCase())==="cancelled"||((c=i.textContent)==null?void 0:c.toLowerCase())!=="unpublished")&&e.removeAttribute("disabled"),o==null||o.removeAttribute("disabled"),r&&(r.hidden=!1),!0):!1}},"getTestErrorHandler");function L(t,e){var o;if(e.error_type==="MUST_MATCH"||e.error_type==="MUST_NOT_MATCH"){let r=0;const n=t.getElementsByClassName("js-additional-secret-format");for(const s of n){if(r>(e.error_index||0))return;const i=[...s.getElementsByTagName("input")].filter(f=>f.checked),d=i&&((o=i[0])==null?void 0:o.value.toUpperCase()),v=d===e.error_type&&r===e.error_index,w=[...s.getElementsByTagName("input")].filter(f=>f.type==="text");if(!w||w.length===0)continue;const u=w[0];if(u.value!=="")if(v){const f=u.id;u&&u.parentElement&&b(u.parentElement);const g=document.createElement("p"),N=`${f}_error_message`;g.classList.add("note","error","mt-5"),g.id=N,g.textContent=e.message,u==null||u.setAttribute("aria-describedby",N),u==null||u.insertAdjacentElement("afterend",g);return}else d===e.error_type&&r++}}else{const r=R[e.error_type],n=document.querySelector(`#${r}`);n&&n.parentElement&&b(n.parentElement);const s=document.createElement("p"),c=`${r}_error_message`;s.classList.add("note","error"),s.id=c,s.textContent=e.message,n==null||n.setAttribute("aria-describedby",c),n==null||n.insertAdjacentElement("afterend",s)}}a(L,"showInputErrorState");function P(t){var e,o;const r=document.querySelector(".js-error-banner");r.hidden=!0;for(const n of t.getElementsByTagName("input"))if((e=n.parentElement)==null?void 0:e.classList.contains("errored")){B(n.parentElement);const s=n.getAttribute("aria-describedby");(o=document.querySelector(`#${s}`))==null||o.remove()}}a(P,"clearInputErrorState");function p(){const t=document.querySelector(".js-post-processing-expression-max-count");if(!t)return 5;const e=t.textContent;return e?parseInt(e):5}a(p,"getMaxPostProcessingExpressions");function b(t){t==null||t.classList.add("form-group","errored","my-0")}a(b,"addErrorStylingToInput");function B(t){t==null||t.classList.remove("form-group","errored","my-0")}a(B,"removeErrorStylingFromInput");function S(){if(!window.codeEditor)return;const t=window.codeEditor.posFromIndex(0),e=window.codeEditor.posFromIndex(window.codeEditor.getValue().length);for(const o of window.codeEditor.findMarks(t,e))o.clear()}a(S,"clearCodeHighlights");function M(t){var e,o;return((e=t.textContent)==null?void 0:e.toLowerCase())==="queued"||((o=t.textContent)==null?void 0:o.toLowerCase())==="inprogress"}a(M,"allowDryRunCancellation");const R={NONE:"",CONFIG_LOAD:"secret_format",COMPILE_DB:"secret_format",START_DELIMITER:"before_secret",END_DELIMITER:"after_secret",DISPLAY_NAME:"display_name"};async function F(t,e,o){let r;try{const n=await fetch(t.action,{method:t.method,body:new FormData(t),headers:{Accept:"application/json"}});n.ok&&(r=await n.json())}catch{}if(r&&e(r.error))if(r.has_matches){const n=JSON.parse(r.matches);S(),o(n);for(const s of n){const c=window.codeEditor.posFromIndex(s.start),i=window.codeEditor.posFromIndex(s.end);window.codeEditor.markText(c,i,{className:"text-bold hx_keyword-hl rounded-2 d-inline-block"})}}else o([]),S()}a(F,"updatePatternMatches")}}});
//# sourceMappingURL=scanning-3d5384ea.js.map
