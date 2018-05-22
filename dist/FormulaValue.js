!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("underscore"),require("moment")):"function"==typeof define&&define.amd?define(["underscore","moment"],t):"object"==typeof exports?exports.FormulaValue=t(require("underscore"),require("moment")):e.FormulaValue=t(e.underscore,e.moment)}(window,function(__WEBPACK_EXTERNAL_MODULE__1__,__WEBPACK_EXTERNAL_MODULE__5__){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(1),o=(n=a)&&n.__esModule?n:{default:n};var u=function(e){if(!e)return[];for(var t=e.split(/\.|::/),r=[];t.length>0;){var n=t.shift();(n=n.replace(/(.*)\[(@|\*|\d+)]/g,function(e,t,n){return r.push(t),"@"!==n&&"*"!==n&&(n=Number(n)),r.push(n),""}))&&r.push(n)}return r};t.default={getPath:u,assignTo:function(e,t,r,n){var a=u(t);for(void 0!==r&&a.push(r);a.length;){var o=a.shift();if(a.length>0){if(!e[o]){var i=a[0];e[o]="number"==typeof i?[]:{}}e=e[o]}else e[o]=n}},compact:function(e,t){for(var r=u(t);r.length;){var n=r.shift();if(r.length>0){if(!e[n]){var a=r[0];e[n]="number"==typeof a?[]:{}}e=e[n]}else e[n]=o.default.compact(e[n])}},patterns:{variable:"{{([^}]+)}}"},dataVarName:"data",metaDataVarName:"metaData"}},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__1__},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"eval",value:function(){throw new Error("Eval is not implemented")}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(2),u=(n=o)&&n.__esModule?n:{default:n};var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.value=e,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default),a(t,[{key:"eval",value:function(){return this.value}}]),t}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=u(r(0)),o=u(r(2));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),n(t,null,[{key:"isConcatenatedText",value:function(e){return"string"==typeof e&&e.indexOf(a.default.variablePattern)>-1}}]),t}();t.default=i},function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__5__},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=u(r(1)),o=u(r(0));function u(e){return e&&e.__esModule?e:{default:e}}var i=/\[(?!(?:@|\*|\d+)\]|[\.$])|^[^\[]*\]|\][^\[]*\]|[\{\}]/,l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i.test(t)&&(t=""),this._hasContext=!1;for(var r=o.default.getPath(t),n=void 0,a=r.length-1;a>=0;a--)"@"!==(n=r[a])&&"*"!==n?r[a]=n:this._hasContext=!0;if(this._path=r,t.indexOf("::")>-1?this._environment=o.default.metaDataVarName:this._environment=o.default.dataVarName,""===t)this._parsedVariable="null";else if(!this._hasContext){for(var u=this._environment,l=0,s=r.length;l<s;l++)u+="['"+r[l]+"']";this._parsedVariable=u}}return n(e,[{key:"parseVariable",value:function(e){return this._parsedVariable||this._parseWithEnvironment(e)}},{key:"_parseWithEnvironment",value:function(e){for(var t=0,r=e.length,n=this._path.length,o=this._path;t<r&&t<n;t++)if("@"===o[t]&&a.default.isNumber(e[t]))o[t]=Number(e[t]);else if(o[t]!==e[t]||"*"===o[t])break;for(;t<n;t++){if("@"===o[t])throw new Error("Context could not fully resolve");"*"===o[t]&&(o[t]="*")}for(var u=void 0,i=!1,l=this._environment,s=0,f=this._path.length;s<f;s++)"*"===(u=this._path[s])?(i?l+='")':i=!0,l="__processStarOperator("+l+',"'):l+="['"+u+"']";return i&&(l+='")'),l}}]),e}();t.default=l},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_CompiledExpression2=__webpack_require__(2),_CompiledExpression3=_interopRequireDefault(_CompiledExpression2),_Variable=__webpack_require__(6),_Variable2=_interopRequireDefault(_Variable),_Helpers=__webpack_require__(0),_Helpers2=_interopRequireDefault(_Helpers),_underscore=__webpack_require__(1),_underscore2=_interopRequireDefault(_underscore),_moment=__webpack_require__(5),_moment2=_interopRequireDefault(_moment);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var dataVarName="data",metaDataVarName="metaData",getDateTimeFormat=function(e){if(!e||"string"!=typeof e)return"";switch(e.length){case 10:return"YYYY-MM-DD";case 19:return"YYYY-MM-DD HH:mm:ss";case 8:return"HH:mm:ss";default:return""}},validateOperation=function(e,t,r){switch(r){case"years":case"months":case"weeks":case"days":if("HH:mm:ss"===e||"HH:mm:ss"===t)return!1;break;case"hours":case"minutes":case"seconds":if(("HH:mm:ss"===e||"HH:mm:ss"===t)&&e!==t)return!1}return!0},evalWithSafeEnvironment=function(){var __availableSpecs={Y:"years",M:"months",W:"weeks",D:"days",h:"hours",m:"minutes",s:"seconds",years:"years",months:"months",weeks:"weeks",days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"},__defaultSpec="seconds",__processStarOperator=function __processStarOperator(array,path){var result=[];if(array&&_underscore2.default.isArray(array)&&array.length)for(var i=0,len=array.length;i<len;i++){var value;if(_underscore2.default.isArray(array[i]))value=[],array[i].forEach(function(nestedElement){value.push(eval("nestedElement"+path))});else{value=null;try{value=eval("array[i]"+path)}catch(e){console.warn(e)}}result.push(value)}return result};function dateDiff(e,t,r){var n=getDateTimeFormat(e),a=getDateTimeFormat(t);return r=__availableSpecs[r]||__defaultSpec,validateOperation(n,a,r)?(e=(0,_moment2.default)(e,n),t=(0,_moment2.default)(t,a),e.diff(t,r)):(console.warn("Invalid inputs at dateDiff."),null)}function sum(e){var t=0;if(e&&_underscore2.default.isArray(e)&&e.length)for(var r=0,n=e.length;r<n;r++)e[r]&&(t+=e[r]);return t}function extract(e,t,r){e="string"==typeof e?e:e||"",t=t||",",r=r||0;var n=e.split(t)[r];return isNaN(n)?n:Number(n)}function flatten(e,t){return _underscore2.default.flatten(e,t)}function groupConcat(e,t){return t=void 0===t?", ":t,e.join(t)}function concat(){return Array.prototype.slice.call(arguments).join("")}function count(e){return e.length}function avg(e){var t=sum(e);return e&&_underscore2.default.isArray(e)&&e.length>0&&(t/=e.length),t}return function(formula,data,metaData){return eval(formula)}}.call(),rules=[{pattern:"^=",replacement:""},{pattern:"'",replacement:"\\'"}],Formula=function(e){function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r._variables=[];for(var n={},a=0,o=rules.length;a<o;a++){var u=rules[a];e=e.replace(new RegExp(u.pattern,"g"),u.replacement)}return r._parsedExpression=e.replace(new RegExp(_Helpers2.default.patterns.variable,"g"),function(e,t){return n[t]||(n[t]=r._variables.length,r._variables.push(new _Variable2.default(t))),"[*"+n[t]+"*]"}),r}return _inherits(t,_CompiledExpression3.default),_createClass(t,[{key:"eval",value:function(e,t,r){var n=_Helpers2.default.getPath(r),a=this._variables.map(function(e){return e.parseVariable(n)}),o=this._parsedExpression.replace(/\[\*(\d*)\*\]/g,function(e,t){return a[parseInt(t)]});return evalWithSafeEnvironment(o,e,t)}},{key:"getDependencies",value:function(){return this._variables.map(function(e){return e.split("::").shift()})}}],[{key:"isFormula",value:function(e){return"string"==typeof e&&0===e.indexOf("=")}}]),t}();exports.default=Formula},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=i(r(7)),o=i(r(4)),u=i(r(3));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a.default.isFormula(t)?this.compiledExpression=new a.default(t):o.default.isConcatenatedText(t)?this.compiledExpression=new o.default:this.compiledExpression=new u.default(t)}return n(e,[{key:"eval",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=null;try{n=this.compiledExpression.eval(e,t,r)}catch(e){console.error(e)}return n}}],[{key:"isFormulaValue",value:function(e){return a.default.isFormula(e)||o.default.isConcatenatedText(e)}}]),e}();t.default=l}])});
//# sourceMappingURL=FormulaValue.js.map