(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1492:function(e,n,t){var a=t(27),o=t(1493);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:function(e){const n=document.getElementsByTagName("apryse-webviewer");if(n.length>0){const t=[];for(let a=0;a<n.length;a++){const o=n[a];if(0===a)o.shadowRoot.appendChild(e),e.onload=function(){t.length>0&&t.forEach(n=>{n.innerHTML=e.innerHTML})};else{const n=e.cloneNode(!0);o.shadowRoot.appendChild(n),t.push(n)}}}else document.head.appendChild(e)},singleton:!1};a(o,i);e.exports=o.locals||{}},1493:function(e,n,t){(n=e.exports=t(28)(!1)).push([e.i,".open.MeasurementOverlay{visibility:visible}.closed.MeasurementOverlay{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.MeasurementOverlay{position:absolute;z-index:95;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);flex-direction:column;bottom:60px;right:14px;font-size:16px;min-width:215px;padding:6px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .MeasurementOverlay{bottom:8px;right:8px;padding:8px;font-size:14px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .MeasurementOverlay{bottom:8px;right:8px;padding:8px;font-size:14px}}.MeasurementOverlay>*{margin:6px}.MeasurementOverlay.transparent{opacity:.5;pointer-events:none}.measurement__value{display:flex;flex-direction:row}.measurement__value .distance-show{margin-left:3px;cursor:pointer}.measurement__title{display:flex;justify-content:center;align-items:center}.measurement__title .measurement__icon{margin-right:5px}.measurement__deltas{display:flex;justify-content:space-between}.lineMeasurementInput{width:50px;margin-left:4px}.length_input{margin-bottom:3px}.angle_input{margin-top:3px}.angle_input .lineMeasurementInput{width:65px}",""]),n.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1705:function(e,n,t){"use strict";t.r(n);t(55),t(116),t(7),t(38),t(18),t(11),t(13),t(12),t(8),t(9),t(10),t(15),t(14),t(20),t(17),t(64),t(52);var a=t(0),o=t.n(a),i=t(19),r=t.n(i),s=t(221),l=t.n(s),c=t(4),u=t.n(c),p=t(1),m=t(61),d=t(2),f=t(3),h=t(6),v=(t(33),t(422),t(1347)),y=t(37);function b(e){return function(n){switch(Object(m.g)(e.annotation)){case"ellipse":return o.a.createElement(g,e);default:console.error("Custom overlay for annotation type: ".concat(n," not supported"))}}(e.type)}function g(e){var n,t=Object(m.g)(e.annotation),a=Object(m.e)(t).icon,i=e.t,r=p.a.getTool("AnnotationCreateDistanceMeasurement"),s=r.defaults.Precision,l=r.defaults.Scale,c=r.Measure,u=l[1][1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"measurement__title"},a&&o.a.createElement(y.a,{className:"measurement__icon",glyph:a}),e.title),o.a.createElement("div",{className:"measurement__scale"},i("option.measurementOverlay.scale"),": ","".concat(l[0][0]," ").concat(l[0][1]," = ").concat(l[1][0]," ").concat(l[1][1])),o.a.createElement("div",{className:"measurement__precision"},i("option.shared.precision"),": ",s),o.a.createElement("div",{className:"measurement__value"},e.label,": ",o.a.createElement("input",{className:"lineMeasurementInput",type:"number",min:"0",value:(n=c.axis[0].factor,(e.value(e.annotation).toFixed(2)*n).toFixed(2)),onChange:function(n){return e.onChange(n,e.annotation)}})," ",u))}b.propTypes={annotation:u.a.object.isRequired,value:u.a.func.isRequired,onChange:u.a.func.isRequired,label:u.a.string.isRequired,t:u.a.func.isRequired,title:u.a.string.isRequired},g.propTypes=b.propTypes;var x=Object(v.a)()(b),E=t(358);function w(e){var n=Object(m.g)(e.annotation),t=Object(m.e)(n).icon,a=Object(E.a)().t,i=p.a.getAnnotationsList().filter((function(e){return e.getCustomData("trn-is-count")})).length;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"measurement__title"},t&&o.a.createElement(y.a,{className:"measurement__icon",glyph:t}),a("option.measurementOverlay.countMeasurement")),o.a.createElement("div",{className:"measurement__count"},a("option.measurementOverlay.count"),": ",i))}w.propTypes={annotation:u.a.object.isRequired};var O=w,_=t(5);t(1492);function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,o,i,r,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(a=i.call(t)).done)&&(s.push(a.value),s.length!==n);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(c)throw o}}return s}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var R={annotation:u.a.object},T=function(e){var n,t=e.annotation,i=Object(h.e)((function(e){return f.a.isElementDisabled(e,_.a.MEASUREMENT_OVERLAY)})),s=(n=j(Object(a.useState)(0),2)[1],function(){return n((function(e){return e+1}))}),c=Object(h.d)(),u=j(Object(a.useState)({x:0,y:0}),2),v=u[0],y=u[1],b=j(Object(a.useState)(!1),2),g=b[0],E=b[1],w=j(Object(a.useState)(!1),2),A=w[0],R=w[1],T=Object(h.e)((function(e){return f.a.isElementOpen(e,_.a.MEASUREMENT_OVERLAY)})),N=Object(h.e)((function(e){return f.a.getActiveToolName(e)})),S=Object(h.e)((function(e){return f.a.getCustomMeasurementOverlay(e)})),C=Object(a.useRef)(),L=Object(m.g)(t),k=function(e){return!function(e){return["countMeasurement"].includes(Object(m.g)(e))}(e)&&S.some((function(n){return n.validate(e)}))},D=function(e){var n=p.a.getTool(N);if(t){var a,o=function(e,n){if(null===n)return!1;var t,a,o=n.getBoundingClientRect();return e.touches&&e instanceof TouchEvent?(t=e.touches[0].clientX,a=e.touches[0].clientY):(t=e.clientX,a=e.clientY),t>=o.left&&t<=o.right&&a>=o.top&&a<=o.bottom}(e,C.current);if(A){var i,r,l=null===(i=(r=p.a.getToolMode()).getDrawMode)||void 0===i?void 0:i.call(r);a=o&&"twoClicks"!==l}else{var u=p.a.getAnnotationByMouseEvent(e);a=o&&u===t}E(a),s()}else k(n.annotation)&&(c(d.a.openElement(_.a.MEASUREMENT_OVERLAY)),R(!0))},I=function(e,n){"add"===n&&1===e.length&&e[0]===t&&c(d.a.closeElement(_.a.MEASUREMENT_OVERLAY)),"modify"===n&&1===e.length&&e[0]===t&&s()};return Object(a.useEffect)((function(){return p.a.addEventListener("mouseMove",D),p.a.addEventListener("annotationChanged",I),function(){p.a.removeEventListener("mouseMove",D),p.a.removeEventListener("annotationChanged",I)}}),[]),i||!t?null:o.a.createElement(l.a,{cancel:"input",position:v,onDrag:function(e,n){var t=n.x,a=n.y;return y({x:t,y:a})},onStop:function(e,n){var t=n.x,a=n.y;return y({x:t,y:a})}},o.a.createElement("div",{className:r()({Overlay:!0,MeasurementOverlay:!0,open:T,closed:!T,transparent:g}),ref:C,"data-element":_.a.MEASUREMENT_OVERLAY},function(e,n){return k(e)?o.a.createElement(x,M({annotation:e},S.filter((function(n){return n.validate(e)}))[0])):"countMeasurement"===n?o.a.createElement(O,{annotation:e}):void 0}(t,L)))};T.propTypes=R;var N=T;n.default=N}}]);
//# sourceMappingURL=36.chunk.js.map