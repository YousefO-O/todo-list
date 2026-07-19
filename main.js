/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 365
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
}

body {
    display: grid;
    grid-template-columns:  1fr 2fr;
}

#side-bar {
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
}

#side-bar button, .new-todo-button {
    font-size: 1.2rem
}

#content {
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
}

#title-and-button {
    display: flex;
    gap: 1rem
}

#projects-container {
    display: flex;
    flex-direction: column;
}

.project-component {
    display: grid;
    grid-template-columns: 1fr auto;
}

.project-component[data-selected="true"] .view-project-button {
    background-color: lightblue;
}

.view-project-button {
    font-size: 1.2rem;
    grid-column: 1/2;
}

.project-component > div {
    display: flex;
    grid-column: 2/3;
    margin-left: auto;
}

.project-component > div > button {
    flex: 1;
    font-size: 1.2rem;
    padding: .5rem;
}

h1 {
    text-align: center;
}

.todo-container[data-priority="low"] {
    border-left: 5px solid green;
}

.todo-container[data-priority="medium"] {
    border-left: 5px solid orange;
}

.todo-container[data-priority="high"] {
    border-left: 5px solid red;
}   

.todo-container[data-priority="none"] {
    border-left: 5px solid grey;
}  


.todo-container[data-completed="true"] {
    opacity: .6;
}

.todo-container[data-completed="true"] .todo-title {
    text-decoration-line: line-through;
    text-decoration-thickness: .3rem;
}

.todo-container {
    display:grid;
    grid-template-columns: 30px auto;
    grid-template-rows: 1fr auto;
    border: 2px solid black;
    padding: .5rem;
    gap: 0 .5rem;
}

.todo-toggle-container {
    display: grid;
    grid-column: 1;
}

.todo-top {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.todo-title-and-date-container {
    display: flex;
    flex-direction: column;
}

.todo-title {
    all: unset;
    grid-column: 2;
    font-weight: bold;
    font-size: 1.5rem;
}

.buttons-container {
    display: flex;
    gap: .5rem;
    align-items: center;
}

.buttons-container > button {
    padding: .2rem .5rem;
    font-size: .9rem;
}

.todo-description {
    grid-column: 2;
    grid-row: 2;
    max-inline-size: 66ch;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,OAAO;IACP,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,WAAW;AACf;;AAEA;IACI,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,4BAA4B;IAC5B,uBAAuB;IACvB,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,cAAc;IACd,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,qBAAqB;AACzB","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    display: grid;\n    grid-template-columns:  1fr 2fr;\n}\n\n#side-bar {\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n}\n\n#side-bar button, .new-todo-button {\n    font-size: 1.2rem\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    grid-column: 2/3;\n}\n\n#title-and-button {\n    display: flex;\n    gap: 1rem\n}\n\n#projects-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-component {\n    display: grid;\n    grid-template-columns: 1fr auto;\n}\n\n.project-component[data-selected=\"true\"] .view-project-button {\n    background-color: lightblue;\n}\n\n.view-project-button {\n    font-size: 1.2rem;\n    grid-column: 1/2;\n}\n\n.project-component > div {\n    display: flex;\n    grid-column: 2/3;\n    margin-left: auto;\n}\n\n.project-component > div > button {\n    flex: 1;\n    font-size: 1.2rem;\n    padding: .5rem;\n}\n\nh1 {\n    text-align: center;\n}\n\n.todo-container[data-priority=\"low\"] {\n    border-left: 5px solid green;\n}\n\n.todo-container[data-priority=\"medium\"] {\n    border-left: 5px solid orange;\n}\n\n.todo-container[data-priority=\"high\"] {\n    border-left: 5px solid red;\n}   \n\n.todo-container[data-priority=\"none\"] {\n    border-left: 5px solid grey;\n}  \n\n\n.todo-container[data-completed=\"true\"] {\n    opacity: .6;\n}\n\n.todo-container[data-completed=\"true\"] .todo-title {\n    text-decoration-line: line-through;\n    text-decoration-thickness: .3rem;\n}\n\n.todo-container {\n    display:grid;\n    grid-template-columns: 30px auto;\n    grid-template-rows: 1fr auto;\n    border: 2px solid black;\n    padding: .5rem;\n    gap: 0 .5rem;\n}\n\n.todo-toggle-container {\n    display: grid;\n    grid-column: 1;\n}\n\n.todo-top {\n    display: flex;\n    gap: 1rem;\n    align-items: flex-start;\n}\n\n.todo-title-and-date-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-title {\n    all: unset;\n    grid-column: 2;\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n\n.buttons-container {\n    display: flex;\n    gap: .5rem;\n    align-items: center;\n}\n\n.buttons-container > button {\n    padding: .2rem .5rem;\n    font-size: .9rem;\n}\n\n.todo-description {\n    grid-column: 2;\n    grid-row: 2;\n    max-inline-size: 66ch;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 314
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ 354
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ 72
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ 659
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ 540
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ 56
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ 825
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ 113
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles.css
var styles = __webpack_require__(365);
;// ./src/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const src_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// ./src/modules/classes.js
class Project {
    constructor(data) {
        this.title = data.title;
        this.todos = data.todos || [];
        this.id = data.id || crypto.randomUUID();
    };
    deleteTodo = (todo) => {
        if(!todo) return
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
        console.log(`Successfully deleted todo: ${todo.title} ` +
        `from project: ${this.title}`);
    };
};

class Todo {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.dueDate = data.dueDate;
        this.priority = data.priority;
        this.id = data.id || crypto.randomUUID();
        this.complete = data.complete || false;
    };

    toggleCompleteStatus = () => {
        this.complete = !this.complete;
        console.log(`Set ${this.title} as ${this.complete ? 'complete' : 'incomplete'}`);
    };

    editDetails = (newTitle, newDescription, newDueDate, newPriority) => {
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    };
};
;// ./node_modules/date-fns/constants.js
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");

;// ./node_modules/date-fns/constructFrom.js


/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_constructFrom = ((/* unused pure expression or super */ null && (constructFrom)));

;// ./node_modules/date-fns/_lib/normalizeDates.js


function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}

;// ./node_modules/date-fns/toDate.js


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return constructFrom(context || argument, argument);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_toDate = ((/* unused pure expression or super */ null && (toDate)));

;// ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

;// ./node_modules/date-fns/startOfDay.js


/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_startOfDay = ((/* unused pure expression or super */ null && (startOfDay)));

;// ./node_modules/date-fns/differenceInCalendarDays.js





/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarDays = ((/* unused pure expression or super */ null && (differenceInCalendarDays)));

;// ./node_modules/date-fns/differenceInCalendarMonths.js


/**
 * The {@link differenceInCalendarMonths} function options.
 */

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();

  return yearsDiff * 12 + monthsDiff;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarMonths = ((/* unused pure expression or super */ null && (differenceInCalendarMonths)));

;// ./node_modules/date-fns/getQuarter.js


/**
 * The {@link getQuarter} function options.
 */

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2));
 * //=> 3
 */
function getQuarter(date, options) {
  const _date = toDate(date, options?.in);
  const quarter = Math.trunc(_date.getMonth() / 3) + 1;
  return quarter;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_getQuarter = ((/* unused pure expression or super */ null && (getQuarter)));

;// ./node_modules/date-fns/differenceInCalendarQuarters.js



/**
 * The {@link differenceInCalendarQuarters} function options.
 */

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const quartersDiff = getQuarter(laterDate_) - getQuarter(earlierDate_);

  return yearsDiff * 4 + quartersDiff;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarQuarters = ((/* unused pure expression or super */ null && (differenceInCalendarQuarters)));

;// ./node_modules/date-fns/_lib/defaultOptions.js
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

;// ./node_modules/date-fns/startOfWeek.js



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_startOfWeek = ((/* unused pure expression or super */ null && (startOfWeek)));

;// ./node_modules/date-fns/differenceInCalendarWeeks.js





/**
 * The {@link differenceInCalendarWeeks} function options.
 */

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
function differenceInCalendarWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfWeek = startOfWeek(laterDate_, options);
  const earlierStartOfWeek = startOfWeek(earlierDate_, options);

  const laterTimestamp =
    +laterStartOfWeek - getTimezoneOffsetInMilliseconds(laterStartOfWeek);
  const earlierTimestamp =
    +earlierStartOfWeek - getTimezoneOffsetInMilliseconds(earlierStartOfWeek);

  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInWeek);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarWeeks = ((/* unused pure expression or super */ null && (differenceInCalendarWeeks)));

;// ./node_modules/date-fns/differenceInCalendarYears.js


/**
 * The {@link differenceInCalendarYears} function options.
 */

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * );
 * //=> 2
 */
function differenceInCalendarYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarYears = ((/* unused pure expression or super */ null && (differenceInCalendarYears)));

;// ./node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}

;// ./node_modules/date-fns/differenceInHours.js




/**
 * The {@link differenceInHours} function options.
 */

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInHours = ((/* unused pure expression or super */ null && (differenceInHours)));

;// ./node_modules/date-fns/differenceInMilliseconds.js


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInMilliseconds = ((/* unused pure expression or super */ null && (differenceInMilliseconds)));

;// ./node_modules/date-fns/differenceInMinutes.js




/**
 * The {@link differenceInMinutes} function options.
 */

/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff =
    differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInMinutes = ((/* unused pure expression or super */ null && (differenceInMinutes)));

;// ./node_modules/date-fns/differenceInSeconds.js



/**
 * The {@link differenceInSeconds} function options.
 */

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1000;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInSeconds = ((/* unused pure expression or super */ null && (differenceInSeconds)));

;// ./node_modules/date-fns/intlFormatDistance.js











/**
 * The {@link intlFormatDistance} function options.
 */

/**
 * The unit used to format the distance in {@link intlFormatDistance}.
 */

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with.
 * @param options - An object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 *
 * @returns The distance in words according to language-sensitive relative time formatting.
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must not be invalid Unit
 * @throws `options.locale` must not be invalid locale
 * @throws `options.localeMatcher` must not be invalid localeMatcher
 * @throws `options.numeric` must not be invalid numeric
 * @throws `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
function intlFormatDistance(laterDate, earlierDate, options) {
  let value = 0;
  let unit;

  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  if (!options?.unit) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    const diffInSeconds = differenceInSeconds(laterDate_, earlierDate_); // The smallest unit

    if (Math.abs(diffInSeconds) < secondsInMinute) {
      value = differenceInSeconds(laterDate_, earlierDate_);
      unit = "second";
    } else if (Math.abs(diffInSeconds) < secondsInHour) {
      value = differenceInMinutes(laterDate_, earlierDate_);
      unit = "minute";
    } else if (
      Math.abs(diffInSeconds) < secondsInDay &&
      Math.abs(differenceInCalendarDays(laterDate_, earlierDate_)) < 1
    ) {
      value = differenceInHours(laterDate_, earlierDate_);
      unit = "hour";
    } else if (
      Math.abs(diffInSeconds) < secondsInWeek &&
      (value = differenceInCalendarDays(laterDate_, earlierDate_)) &&
      Math.abs(value) < 7
    ) {
      unit = "day";
    } else if (Math.abs(diffInSeconds) < secondsInMonth) {
      value = differenceInCalendarWeeks(laterDate_, earlierDate_);
      unit = "week";
    } else if (Math.abs(diffInSeconds) < secondsInQuarter) {
      value = differenceInCalendarMonths(laterDate_, earlierDate_);
      unit = "month";
    } else if (Math.abs(diffInSeconds) < secondsInYear) {
      if (differenceInCalendarQuarters(laterDate_, earlierDate_) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = differenceInCalendarQuarters(laterDate_, earlierDate_);
        unit = "quarter";
      } else {
        value = differenceInCalendarYears(laterDate_, earlierDate_);
        unit = "year";
      }
    } else {
      value = differenceInCalendarYears(laterDate_, earlierDate_);
      unit = "year";
    }
  } else {
    // Get the value if unit is specified
    unit = options?.unit;
    if (unit === "second") {
      value = differenceInSeconds(laterDate_, earlierDate_);
    } else if (unit === "minute") {
      value = differenceInMinutes(laterDate_, earlierDate_);
    } else if (unit === "hour") {
      value = differenceInHours(laterDate_, earlierDate_);
    } else if (unit === "day") {
      value = differenceInCalendarDays(laterDate_, earlierDate_);
    } else if (unit === "week") {
      value = differenceInCalendarWeeks(laterDate_, earlierDate_);
    } else if (unit === "month") {
      value = differenceInCalendarMonths(laterDate_, earlierDate_);
    } else if (unit === "quarter") {
      value = differenceInCalendarQuarters(laterDate_, earlierDate_);
    } else if (unit === "year") {
      value = differenceInCalendarYears(laterDate_, earlierDate_);
    }
  }

  const rtf = new Intl.RelativeTimeFormat(options?.locale, {
    numeric: "auto",
    ...options,
  });

  return rtf.format(value, unit);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_intlFormatDistance = ((/* unused pure expression or super */ null && (intlFormatDistance)));

;// ./src/modules/todo-component.js



  

function createTodoContainer(todo) {
    const container = document.createElement('div');
    container.classList.add('todo-container');
    container.dataset.priority = todo.priority;
    container.dataset.completed = todo.complete
    
    const topContainer = document.createElement('div')
    topContainer.classList.add('todo-top')
    
    const titleAndDateContainer = document.createElement('div')
    titleAndDateContainer.classList.add('todo-title-and-date-container')

    const title = document.createElement('button');
    title.classList.add('todo-title');
    title.textContent = todo.title;

    const dueDate = document.createElement('span');
    dueDate.classList.add('todo-due-date')

    titleAndDateContainer.appendChild(title)
    if(todo.dueDate) {
        dueDate.textContent = intlFormatDistance(todo.dueDate, new Date())
        titleAndDateContainer.appendChild(dueDate)
    }

    topContainer.appendChild(titleAndDateContainer)

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', ()=> {
        setTodoBeingEdited(todo)
        setEditTodoFormValues(todo.title, todo.description, todo.dueDate, todo.priority);
        showEditTodoDialog()
    });

    buttonsContainer.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', ()=>{
        deleteTodo(todo.id);
    });
    
    buttonsContainer.appendChild(deleteButton);

    const toggleContainer = document.createElement('div');
    toggleContainer.classList.add('todo-toggle-container')
    const toggleButton = document.createElement('input');
    toggleButton.type = 'checkbox';
    toggleButton.classList.add('todo-toggle-button')
    toggleButton.checked = todo.complete
    toggleButton.addEventListener('change', () => {
        toggleTodo(todo)
        container.dataset.completed = todo.complete
        title.disabled = todo.complete
        editButton.disabled = todo.complete
        deleteButton.disabled = todo.complete
    })
    toggleContainer.appendChild(toggleButton);

    title.disabled = todo.complete
    editButton.disabled = todo.complete
    deleteButton.disabled = todo.complete

    let description
    if(todo.description) {
        description = document.createElement('p');
        description.textContent = todo.description ? todo.description : ''
        description.style.display = 'none';
        description.classList.add('todo-description')
        
        title.addEventListener('click', () => {
            toggleDescriptionDisplay(description);
        });
    }

    

    topContainer.appendChild(buttonsContainer)

    container.appendChild(toggleContainer)
    container.appendChild(topContainer)
    if(description) {
        container.appendChild(description)
    }
    return container;
};
;// ./src/modules/project-component.js



function createProjectComponent(project) {
    const container = document.createElement('div')
    container.classList.add('project-component')
    container.dataset.id = project.id

    const title = document.createElement('button')
    title.textContent = project.title
    title.classList.add('view-project-button')
    title.addEventListener('click', ()=>{
        if(container.dataset.selected === 'true') return;
        console.log('Loading project..')
        loadProject(project)
    })
    
    const buttonsContainer = document.createElement('div')
    
    const editButton = document.createElement('button')
    editButton.classList.add('edit-project-button')
    editButton.textContent = 'Edit'
    editButton.addEventListener('click', () => {
        setProjectBeingEdited(project)
        document.querySelector('#edited-project-title').value = project.title; 
        document.querySelector('#edit-project-dialog').showModal()
    })

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete-project-button')
    deleteButton.addEventListener('click', ()=>{
        deleteProject(project.id)
    })

    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(deleteButton)

    container.appendChild(title)
    container.appendChild(buttonsContainer)

    return container
}
;// ./src/modules/DOMController.js






let selectedProject = null
let todoBeingEdited = null
let projectBeingEdited = null

const projectsContainer = document.querySelector('#projects-container')
const addProjectButton = document.querySelector('#add-project-button')
const newProjectForm = document.querySelector('#new-project-form')
const newProjectDialog = document.querySelector('#new-project-dialog')
const editProjectForm = document.querySelector('#edit-project-form')
const editProjectDialog = document.querySelector('#edit-project-dialog')
addProjectButton.addEventListener('click', () => {
    newProjectDialog.showModal()
})

editProjectForm.addEventListener('submit', (event) => {
    editProjectDialog.close()
    event.preventDefault()
    const title = document.querySelector('#edited-project-title').value
    editProjectTitle(projectBeingEdited.id, title)
})

newProjectForm.addEventListener('submit', (event) => {
    newProjectDialog.close()
    event.preventDefault()
    const title = document.querySelector('#project-title').value
    createProject(title)
})

const setTodoBeingEdited = (value) => todoBeingEdited = value
const setProjectBeingEdited = (value) => projectBeingEdited = value

const newTodoDialog = document.querySelector('#new-todo-dialog');
const editTodoDialog = document.querySelector('#edit-todo-dialog');

const showEditTodoDialog = () => editTodoDialog.showModal()

const closeDialogButtons = document.querySelectorAll('.close-dialog-button');
[...closeDialogButtons].forEach(button => {
    button.addEventListener('click', (event) => {
        const dialog = document.querySelector('dialog[open]')
        if(dialog) dialog.close()
    });
});

const dialogs = document.querySelectorAll('dialog');
[...dialogs].forEach(dialog => {
    dialog.addEventListener('close', () => {
        dialog.querySelector('form').reset()
    })
})

const newTodoForm = document.querySelector('#new-todo-form');
newTodoForm.addEventListener('submit', handleNewTodoSubmit);

const editTodoForm = document.querySelector('#edit-todo-form');
editTodoForm.addEventListener('submit', handleEditTodoSubmit)

function toggleDescriptionDisplay(description) {
    description.style.display == 'block' ? description.style.display = 'none' : 
        description.style.display = 'block';
};

function createNewTodoButton() {
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = 'Add Todo';
    newTodoButton.classList.add('new-todo-button') 
    newTodoButton.addEventListener('click', ()=>{
        newTodoDialog.showModal();
    });
    return newTodoButton;
};

function loadProjects(projectsArray) {
    projectsContainer.replaceChildren('')
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('')
    if(projectsArray.length == 0) return
    projectsArray.forEach(project=>{
        const projectComponent = createProjectComponent(project)
        projectsContainer.appendChild(projectComponent)
    })
}

function loadProject(project) {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('');
    const newTodoButton = createNewTodoButton();
    contentDiv.appendChild(newTodoButton);
    selectedProject = project
    saveKey('selected-project-id', selectedProject.id)
    const projectComponents = [...document.querySelectorAll('.project-component')]
    projectComponents.forEach(projectComponent => {
        projectComponent.dataset.selected = false;
    })
    document.querySelector(`[data-id='${project.id}']`).dataset.selected = 'true';
    loadTodos(project.todos);
}   

function loadTodos(todosArray) {
    if(todosArray.length == 0) return
    const contentDiv = document.querySelector('#content');

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');

    todosArray.forEach(todo => {
        const todoContainer = createTodoContainer(todo);
        todosContainer.appendChild(todoContainer);
    });
    contentDiv.appendChild(todosContainer);
};

function handleNewTodoSubmit(event) {
    event.preventDefault();
    newTodoDialog.close()
    const title = document.querySelector('#todo-title').value;
    const description = document.querySelector('#todo-description').value;
    const dueDate = document.querySelector('#todo-due-date').value;
    const priority = document.querySelector('#todo-priority').value;
    createTodo(title, description, dueDate, priority, selectedProject.id);
};

function handleEditTodoSubmit(event) {
    event.preventDefault();
    editTodoDialog.close()
    const title = document.querySelector('#edited-todo-title').value;
    const description = document.querySelector('#edited-todo-description').value;
    const dueDate = document.querySelector('#edited-todo-due-date').value;
    const priority = document.querySelector('#edited-todo-priority').value;
    editTodoDetails(todoBeingEdited, title, description, dueDate, priority);
    todoBeingEdited = null
};

function setEditTodoFormValues(title, description, dueDate, priority) {
    document.querySelector('#edited-todo-title').value = title; 
    document.querySelector('#edited-todo-description').value = description || '';
    document.querySelector('#edited-todo-due-date').value = dueDate;
    document.querySelector('#edited-todo-priority').value = priority;
};
;// ./src/modules/storage.js
function checkStorageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
;// ./src/modules/dataController.js

    


const projects = [];

function saveData() {
    if(checkStorageAvailable('localStorage')) {
        localStorage.setItem('projects', JSON.stringify(projects))
    }
    else {
        console.error('Couldn\'t save data!')
    }
}

function saveKey(key, value) {
    if(checkStorageAvailable('localStorage')) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    else {
        console.error('Couldn\'t save key!')
    }
}

function loadData() {
    if(!checkStorageAvailable('localStorage')) {
        console.warn('Browser doesn\'t support localStorage!')
        return
    };
    if(!localStorage.getItem('projects')) {
        console.warn('There is no previous data to load!')
        return
    }
    const projectsData = JSON.parse(localStorage.getItem('projects'))
    projectsData.forEach(projectData => {
        const project = new Project(projectData)
        project.todos = []
        projectData.todos.forEach(todoData => {
            console.log(todoData)
            const todo = new Todo(todoData)
            project.todos.push(todo)
        })
        console.log(project.todos)
        projects.push(project)
    })
    const selectedProjectId = JSON.parse(localStorage.getItem('selected-project-id'))
    loadProjects(projects)
    if(selectedProjectId) {
        loadProject(projects.find(project => project.id === selectedProjectId))
    }
}

loadData()

const findProject = (projectId) => {
    const project = projects.find(project => project.id === projectId);
    return project;
};

function findProjectByTodoId(todoId) {
    return projects.find(project => {
        if(project.todos.find(todo => todo.id === todoId)) {
            return true
        }
    })
}

const findTodo = (todoId) => {
    let parentProject;
    let todo;
    projects.forEach(project => {
        todo = project.todos.find(todoObject => todoObject.id === todoId)
        if(todo) parentProject = project
    })
    // const todo = project.todos.find(todo => todo.id == todoId);
    console.log(todo)
    return {parentProject, todo};
};

const createProject = (title) => {
    if(title.trim().length == 0) {
        console.warn('Project title must contain at least one none-space character!')
        return
    }
    const trimmedTitle = title.trim()
    const newProject = new Project({title});
    projects.push(newProject);
    loadProjects(projects)
    loadProject(newProject);
    saveData()
};

const editProjectTitle = (projectId, newTitle) => {
    if(newTitle.trim().length == 0) {
        console.warn('Project title must contain at least one none-space character!')
        return
    }
    const project = findProject(projectId)
    if(!project) return
    project.title = newTitle.trim()
    loadProjects(projects)
    saveData()
}

const deleteProject = projectId => {
    const project = findProject(projectId)
    const index = projects.indexOf(project)
    projects.splice(index, 1)
    loadProjects(projects)

    saveData()
}

const createTodo = (title, description, dueDate, priority = 'none', 
    parentProjectId = projects[0].id) => {
    const newTodo = new Todo({title, description, dueDate, priority, parentProjectId});
    const parentProject = findProject(parentProjectId);
    if(!parentProject) return;
    if(title.trim().length == 0) {
        console.warn('Todo title must contain at least one none-space character!')
        return
    }

    parentProject.todos.push(newTodo);
    console.log('Successfully created todo in: ' + parentProject.title);
    loadProject(parentProject);
    saveData()
};

const deleteTodo = (todoId, parentProjectId) => {
    // const parentProject = findProject(parentProjectId);
    // if(!parentProject) return
    // const todo = findTodo(todoId, parentProject);
    // const parentProject = findProjectByTodoId(todoId)
    const {parentProject, todo} = findTodo(todoId)
    if(!todo) return
    parentProject.deleteTodo(todo);
    loadProject(parentProject);
    saveData()
};

const toggleTodo = (todo) => {
    todo.toggleCompleteStatus();
    saveData()
}   

const editTodoDetails = (todo, newTitle,
    newDescription, newDueDate, newPriority) => {
    console.log(todo)
    const parentProject = findProjectByTodoId(todo.id);
    if(!parentProject) return;
    if(newTitle.trim().length == 0) {
        console.warn('Todo title must contain at least one none-space character!')
        return
    }
    todo.editDetails(newTitle.trim(), newDescription, newDueDate, newPriority);
    console.log(newTitle)
    loadProject(parentProject);
    saveData()
};
;// ./src/index.js






// Default Project
/******/ })()
;
//# sourceMappingURL=main.js.map