/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Italic.ttf */ "./src/Roboto-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Thin.ttf */ "./src/Roboto-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Medium.ttf */ "./src/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Bold.ttf */ "./src/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'RobotoRegular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoItalic';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoThin';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoMedium';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoBold';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\nhtml {\n    font-family: 'RobotoRegular';\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.main {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-columns: 300px 3fr;\n    grid-auto-flow: row;\n}\n\nheader {\n    height: 60px;\n    background-color: rgb(223, 74, 54);\n    display: flex;\n    align-items: center;\n    padding-left: 25px;\n    color: white;\n    font-size: 24px;\n    grid-column: 1 / 3;\n    font-family: 'RobotoMedium';\n}\n\n.sidebar {\n    box-sizing: border-box;\n    background-color: rgb(245, 245, 245);\n    height: calc(100vh - 60px);\n    padding: 20px;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul.projectList {\n    padding-left: 30px;\n    margin-top: 10px;\n}\n\n.projectList li {\n    padding-left: 5px;\n    box-sizing: border-box;\n    height: 30px;\n    font-size: 16px;\n    color: rgb(223, 74, 54);\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.sideList li {\n    height: 40px;\n    font-size: 18px;\n    color:rgb(56, 56, 56);\n    margin-bottom: 5px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n}\n\nli.clickable:hover,\nli.clickable:hover {\n    cursor: pointer;\n    background-color: rgb(230, 230, 230);\n    border-radius: 5px;\n}\n\n.sideList li {\n    font-family: 'RobotoRegular';\n}\n\n.content {\n    padding: 20px;\n}\n\nbutton#new-todo {\n    position: absolute;\n    bottom: 30px;\n    right: 30px;\n    height: 70px;\n    width: 70px;\n    border-radius: 50%;\n    border: none;\n    background-color: rgb(223, 74, 54);\n    color: white;\n    font-family: 'RobotoMedium';\n    font-size: 42px;\n}\n\nbutton#new-todo:hover {\n    cursor: pointer;\n    background-color: rgb(206, 64, 46);\n}\n\n.todo {\n    padding: 10px;\n    border-bottom: 1px solid rgb(206, 206, 206);\n    width: 100%;\n    display: grid;\n    grid-template-columns: 40px 1fr 200px;\n    column-gap: 15px;\n    row-gap: 10px;\n    padding-bottom: 20px;\n    padding-right: 15px;\n    box-sizing: border-box;\n    margin-bottom: 10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.todo input {\n    grid-column: 1/2;\n    grid-row: 1/3;\n}\n\n.todo input {\n    width: 2em;\n    height: 2em;\n    background-color: white;\n    border-radius: 50%;\n    vertical-align: middle;\n    border: 2px solid rgb(126, 126, 126);\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n}\n\n.todo input:hover {\n    background-color: rgb(230, 230, 230);\n}\n\n.todo input:checked {\n    background-color: rgb(41, 165, 248);\n}\n\n.task {\n    font-family: 'RobotoMedium';\n    font-size: 18px;\n}\n\n.todo.done {\n    background-color: rgb(243, 243, 243);\n}\n\n.todo.done .task {\n    text-decoration: line-through;\n    font-family: 'RobotoRegular';\n    color:rgb(56, 56, 56);\n}\n\n.todo .buttons {\n    grid-column: 3/4;\n    grid-row: 2/3;\n    display: flex;\n    justify-content: flex-end;\n    gap: 20px;\n    color:rgb(148, 148, 148);\n}\n\n.material-symbols-outlined {\n    font-size: 22px;\n}\n\n.material-symbols-outlined:hover {\n    cursor: pointer;\n    color:rgb(56, 56, 56);\n}\n\n.material-symbols-outlined.delete:hover {\n    cursor: pointer;\n    color:rgb(204, 38, 38);\n}\n\n.date {\n    font-family: 'RobotoRegular';\n    color:rgb(85, 85, 85);\n}\n\n.task,\n.date {\n    grid-column: 2/3;\n}\n\n.project {\n    grid-column: 3/4;\n    text-align: end;\n    font-family: 'RobotoItalic';\n    font-size: 16px;\n    color:rgb(104, 93, 255)\n}\n\n\n\n.details-popup {\n    visibility: hidden;\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.582);\n    display: flex;\n    justify-content: center;\n}\n\n.details-popup.show {\n    visibility: visible;\n}\n\n.details-popup .panel {\n    margin-top: 20vh;\n    background-color: white;\n    border-radius: 3px;\n    height: 300px;\n    width: 500px;\n\n    padding: 20px 50px 20px 20px;\n    box-sizing: border-box;\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.details-task {\n    font-family: 'RobotoBold';\n    font-size: 28px;\n    text-align: start;\n    margin-bottom: 10px;\n}\n\n.details-text {\n    font-size: 18px;\n    color:rgb(85, 85, 85);\n}\n\n.details-project {\n    font-family: 'RobotoItalic';\n    color:rgb(104, 93, 255);\n    margin-bottom: 5px;\n}\n\n.details-date {\n    color:rgb(56, 56, 56);\n}\n\n.panel .close {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    font-size: 26px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'RobotoRegular';\n    src: url('./Roboto-Regular.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoItalic';\n    src: url('./Roboto-Italic.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoThin';\n    src: url('./Roboto-Thin.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoMedium';\n    src: url('./Roboto-Medium.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoBold';\n    src: url('./Roboto-Bold.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\nhtml {\n    font-family: 'RobotoRegular';\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.main {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-columns: 300px 3fr;\n    grid-auto-flow: row;\n}\n\nheader {\n    height: 60px;\n    background-color: rgb(223, 74, 54);\n    display: flex;\n    align-items: center;\n    padding-left: 25px;\n    color: white;\n    font-size: 24px;\n    grid-column: 1 / 3;\n    font-family: 'RobotoMedium';\n}\n\n.sidebar {\n    box-sizing: border-box;\n    background-color: rgb(245, 245, 245);\n    height: calc(100vh - 60px);\n    padding: 20px;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul.projectList {\n    padding-left: 30px;\n    margin-top: 10px;\n}\n\n.projectList li {\n    padding-left: 5px;\n    box-sizing: border-box;\n    height: 30px;\n    font-size: 16px;\n    color: rgb(223, 74, 54);\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.sideList li {\n    height: 40px;\n    font-size: 18px;\n    color:rgb(56, 56, 56);\n    margin-bottom: 5px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n}\n\nli.clickable:hover,\nli.clickable:hover {\n    cursor: pointer;\n    background-color: rgb(230, 230, 230);\n    border-radius: 5px;\n}\n\n.sideList li {\n    font-family: 'RobotoRegular';\n}\n\n.content {\n    padding: 20px;\n}\n\nbutton#new-todo {\n    position: absolute;\n    bottom: 30px;\n    right: 30px;\n    height: 70px;\n    width: 70px;\n    border-radius: 50%;\n    border: none;\n    background-color: rgb(223, 74, 54);\n    color: white;\n    font-family: 'RobotoMedium';\n    font-size: 42px;\n}\n\nbutton#new-todo:hover {\n    cursor: pointer;\n    background-color: rgb(206, 64, 46);\n}\n\n.todo {\n    padding: 10px;\n    border-bottom: 1px solid rgb(206, 206, 206);\n    width: 100%;\n    display: grid;\n    grid-template-columns: 40px 1fr 200px;\n    column-gap: 15px;\n    row-gap: 10px;\n    padding-bottom: 20px;\n    padding-right: 15px;\n    box-sizing: border-box;\n    margin-bottom: 10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.todo input {\n    grid-column: 1/2;\n    grid-row: 1/3;\n}\n\n.todo input {\n    width: 2em;\n    height: 2em;\n    background-color: white;\n    border-radius: 50%;\n    vertical-align: middle;\n    border: 2px solid rgb(126, 126, 126);\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n}\n\n.todo input:hover {\n    background-color: rgb(230, 230, 230);\n}\n\n.todo input:checked {\n    background-color: rgb(41, 165, 248);\n}\n\n.task {\n    font-family: 'RobotoMedium';\n    font-size: 18px;\n}\n\n.todo.done {\n    background-color: rgb(243, 243, 243);\n}\n\n.todo.done .task {\n    text-decoration: line-through;\n    font-family: 'RobotoRegular';\n    color:rgb(56, 56, 56);\n}\n\n.todo .buttons {\n    grid-column: 3/4;\n    grid-row: 2/3;\n    display: flex;\n    justify-content: flex-end;\n    gap: 20px;\n    color:rgb(148, 148, 148);\n}\n\n.material-symbols-outlined {\n    font-size: 22px;\n}\n\n.material-symbols-outlined:hover {\n    cursor: pointer;\n    color:rgb(56, 56, 56);\n}\n\n.material-symbols-outlined.delete:hover {\n    cursor: pointer;\n    color:rgb(204, 38, 38);\n}\n\n.date {\n    font-family: 'RobotoRegular';\n    color:rgb(85, 85, 85);\n}\n\n.task,\n.date {\n    grid-column: 2/3;\n}\n\n.project {\n    grid-column: 3/4;\n    text-align: end;\n    font-family: 'RobotoItalic';\n    font-size: 16px;\n    color:rgb(104, 93, 255)\n}\n\n\n\n.details-popup {\n    visibility: hidden;\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.582);\n    display: flex;\n    justify-content: center;\n}\n\n.details-popup.show {\n    visibility: visible;\n}\n\n.details-popup .panel {\n    margin-top: 20vh;\n    background-color: white;\n    border-radius: 3px;\n    height: 300px;\n    width: 500px;\n\n    padding: 20px 50px 20px 20px;\n    box-sizing: border-box;\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.details-task {\n    font-family: 'RobotoBold';\n    font-size: 28px;\n    text-align: start;\n    margin-bottom: 10px;\n}\n\n.details-text {\n    font-size: 18px;\n    color:rgb(85, 85, 85);\n}\n\n.details-project {\n    font-family: 'RobotoItalic';\n    color:rgb(104, 93, 255);\n    margin-bottom: 5px;\n}\n\n.details-date {\n    color:rgb(56, 56, 56);\n}\n\n.panel .close {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    font-size: 26px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
  } // For old IE

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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/Roboto-Bold.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/Roboto-Italic.ttf":
/*!*******************************!*\
  !*** ./src/Roboto-Italic.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87f3afe16a8c3c370634.ttf";

/***/ }),

/***/ "./src/Roboto-Medium.ttf":
/*!*******************************!*\
  !*** ./src/Roboto-Medium.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/Roboto-Thin.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Thin.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a732a12eb07742232407.ttf";

/***/ })

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const todosHolder = (() => {
    const todos = new Array();
    const addTodo = (todo) => {
        todos.push(todo);
    }

    const getSize = () => {
        return todos.length;
    }

    const getTodo = (index) => {
        return todos[index];
    }

    const removeTodo = (index) => {

    }

    return { addTodo, getSize, getTodo, removeTodo };
})();

const projectManager = (() => {
    const projects = new Array();
    
    const addProject = (project) => {
        projects.push(project);
    }

    const removeProject = (project) => {
        const index = projects.findIndex(project);
        if (index === -1) return;
        projects.splice(index, 1);
    }

    const getProjects = () => {
        const copy = [...projects];
        return copy;
    }
    
    const getProject = (name) => {
        return projects.find(project => project.getName() === name);
    }

    return { addProject, removeProject, getProjects, getProject };
})();

const todo = (task, details, date, project, done) => {
    const index = todosHolder.getSize();

    function getTask() {
        return task;
    }

    function getDetails() {
        return details;
    }

    function getDate() {
        return date;
    }

    function getProject() {
        return project;
    }

    function isDone() {
        return done;
    }
    
    function getIndex() {
        return index;
    }

    function setDone(nowDone) {
        done = nowDone;
    } 

    return { getTask, getDetails, getDate, getProject, isDone, getIndex, setDone };
};

const project = (name) => {
    const todos = new Array();

    const domElement = document.createElement('li');
    domElement.classList.add('clickable');
    domElement.textContent = name;
    domElement.addEventListener('click', () => {
        domManager.removeContent();
        domManager.showProject(name);
    });
    const projectList = document.querySelector('.projectList');
    projectList.appendChild(domElement);
    
    function addTodo(todo) {
        todos.push(todo);
    }

    function removeTodo(todo) {
        todos.splice(todos.findIndex((element) => element === todo), 1);
    }

    function getTodos() {
        return todos;
    }

    function getName() {
        return name;
    }

    return { addTodo, getTodos, getName, removeTodo };
};

window.checkboxClicked = (index) => {
    const todo = todosHolder.getTodo(index);
    todo.setDone(!todo.isDone());
    const element = document.querySelector(`.todo[index="${index.toString()}"]`);
    element.classList.toggle('done');
}

window.toggleDetails = (index) => {
    const element = document.querySelector('.details-popup');
    element.classList.toggle('show');
    if (!element.classList.contains('show')) return;
    const todo = todosHolder.getTodo(index);

    document.querySelector('.details-task').textContent = todo.getTask();
    document.querySelector('.details-text').textContent = todo.getDetails();
    document.querySelector('.details-project').textContent = todo.getProject().getName();
    document.querySelector('.details-date').textContent = todo.getDate();
}

window.deleteTodo = (index) => {
    domManager.removeTodo(index);
    const todo = todosHolder.getTodo(index);
    const project = todo.getProject();
    project.removeTodo(todo);
    todosHolder.removeTodo(index);
}

const domManager = (() => {
    let lastShown = 'all';
    const content = document.querySelector('.content');
    const allButton = document.querySelector('#all');
    allButton.addEventListener('click', () => {
        showAll();
    })

    const removeTodo = (index) => {
        const toRemove = document.querySelector(`.todo[index="${index}"]`);
        toRemove.remove();
    }

    const getTodoElement = (todo) => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        if (todo.isDone()) todoElement.classList.add('done');
        todoElement.setAttribute('index', `${todo.getIndex()}`);
        todoElement.innerHTML = `            
        <input class="${todo.getIndex()}" onclick="checkboxClicked(${todo.getIndex()})" type="checkbox" name="taskDone" id="taskDone" class="" ${todo.isDone() ? 'checked' : ''}>
        <div class="task">${todo.getTask()}</div>
        <div class="project">${todo.getProject().getName()}</div>
        <div class="date">${todo.getDate()}</div>
        <div class="buttons">
        <span class="material-symbols-outlined edit">edit</span>
        <span class="material-symbols-outlined details" onclick="toggleDetails(${todo.getIndex()})">visibility</span>
        <span class="material-symbols-outlined delete" onclick="deleteTodo(${todo.getIndex()})">delete</span>
        </div>`;
        return todoElement;
    }

    const removeContent = () => {
        content.innerHTML = '';
    }

    const showProject = (projectName) => {
        const project = projectManager.getProject(projectName);
        const todos = project.getTodos();
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] === null) continue;
            const todoElement = getTodoElement(todos[i]);
            content.appendChild(todoElement);
            todoElement.todoObj = todos[i];
        }
    };

    const showAll = () => {
        removeContent();
        const projects = projectManager.getProjects();
        projects.forEach(project => {
            showProject(project.getName());
        });
    }

    return { showProject, showAll, removeContent, removeTodo }
})();

const projectOne = project('Default');
const projectTwo = project('Moneygun Run');
const projectThree = project('Empty project');

projectManager.addProject(projectOne);
projectManager.addProject(projectTwo);
projectManager.addProject(projectThree);

const taskOne = todo('Do cool stuff', 'I really need to do more cool stuff. I have not done cool stuff in a very long time.', '1st Dec. 2022', projectOne, false);
todosHolder.addTodo(taskOne);
const taskTwo = todo('Do that', 'That would definitely help', '1st Dec. 2023', projectOne, false);
todosHolder.addTodo(taskTwo);
const taskThree = todo('Clean dishes', 'It is not very fun but it needs to be done. uh...', '25 January 2023', projectOne, true);
todosHolder.addTodo(taskThree);
const taskFour = todo('Change character', 'The current one clashes too much with the recent artistic direction change. We should find something that looks more in tune with the rest. (We could add a stylish cell shading ??)', 'Tomorrow', projectTwo, false);
todosHolder.addTodo(taskFour);

projectOne.addTodo(taskOne);
projectOne.addTodo(taskTwo);
projectOne.addTodo(taskThree);
projectTwo.addTodo(taskFour);

//domManager.showProject(projectOne);
// domManager.showProject(projectTwo);
domManager.removeContent();
domManager.showAll();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9JdGFsaWMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9UaGluJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgICAgXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgICAgXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvQm9sZCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgIFxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYWluIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDNmcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxudWwucHJvamVjdExpc3Qge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHJnYigyMjMsIDc0LCA1NCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zaWRlTGlzdCBsaSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjpyZ2IoNTYsIDU2LCA1Nik7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5saS5jbGlja2FibGU6aG92ZXIsXFxubGkuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNpZGVMaXN0IGxpIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5idXR0b24jbmV3LXRvZG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgcmlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbn1cXG5cXG5idXR0b24jbmV3LXRvZG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDY0LCA0Nik7XFxufVxcblxcbi50b2RvIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDYsIDIwNiwgMjA2KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnIgMjAwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDE1cHg7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRvZG8gaW5wdXQge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbn1cXG5cXG4udG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI2LCAxMjYsIDEyNik7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kbyBpbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG59XFxuXFxuLnRvZG8gaW5wdXQ6Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMTY1LCAyNDgpO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udG9kby5kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xcbn1cXG5cXG4udG9kby5kb25lIC50YXNrIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICAgIGNvbG9yOnJnYig1NiwgNTYsIDU2KTtcXG59XFxuXFxuLnRvZG8gLmJ1dHRvbnMge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbG9yOnJnYigxNDgsIDE0OCwgMTQ4KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjpyZ2IoNTYsIDU2LCA1Nik7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLmRlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6cmdiKDIwNCwgMzgsIDM4KTtcXG59XFxuXFxuLmRhdGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgICBjb2xvcjpyZ2IoODUsIDg1LCA4NSk7XFxufVxcblxcbi50YXNrLFxcbi5kYXRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvSXRhbGljJztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjpyZ2IoMTA0LCA5MywgMjU1KVxcbn1cXG5cXG5cXG5cXG4uZGV0YWlscy1wb3B1cCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41ODIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbHMtcG9wdXAuc2hvdyB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5kZXRhaWxzLXBvcHVwIC5wYW5lbCB7XFxuICAgIG1hcmdpbi10b3A6IDIwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG5cXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDIwcHggMjBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXRhaWxzLXRhc2sge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b0JvbGQnO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscy10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjpyZ2IoODUsIDg1LCA4NSk7XFxufVxcblxcbi5kZXRhaWxzLXByb2plY3Qge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b0l0YWxpYyc7XFxuICAgIGNvbG9yOnJnYigxMDQsIDkzLCAyNTUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5kZXRhaWxzLWRhdGUge1xcbiAgICBjb2xvcjpyZ2IoNTYsIDU2LCA1Nik7XFxufVxcblxcbi5wYW5lbCAuY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtB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O0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmO0FBQ0o7Ozs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZOztJQUVaLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICAgIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgICAgXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvSXRhbGljJztcXG4gICAgc3JjOiB1cmwoJy4vUm9ib3RvLUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgIFxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1RoaW4nO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgIFxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxuICAgIHNyYzogdXJsKCcuL1JvYm90by1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9Cb2xkJztcXG4gICAgc3JjOiB1cmwoJy4vUm9ib3RvLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAzZnI7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsLnByb2plY3RMaXN0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2lkZUxpc3QgbGkge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6cmdiKDU2LCA1NiwgNTYpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxubGkuY2xpY2thYmxlOmhvdmVyLFxcbmxpLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlTGlzdCBsaSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuYnV0dG9uI25ldy10b2RvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG59XFxuXFxuYnV0dG9uI25ldy10b2RvOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCA2NCwgNDYpO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjA2LCAyMDYsIDIwNik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyIDIwMHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50b2RvIGlucHV0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG59XFxuXFxuLnRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyNiwgMTI2LCAxMjYpO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8gaW5wdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxufVxcblxcbi50b2RvIGlucHV0OmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDE2NSwgMjQ4KTtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRvZG8uZG9uZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcXG59XFxuXFxuLnRvZG8uZG9uZSAudGFzayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgICBjb2xvcjpyZ2IoNTYsIDU2LCA1Nik7XFxufVxcblxcbi50b2RvIC5idXR0b25zIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjpyZ2IoMTQ4LCAxNDgsIDE0OCk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6cmdiKDU2LCA1NiwgNTYpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZC5kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOnJnYigyMDQsIDM4LCAzOCk7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gICAgY29sb3I6cmdiKDg1LCA4NSwgODUpO1xcbn1cXG5cXG4udGFzayxcXG4uZGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b0l0YWxpYyc7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6cmdiKDEwNCwgOTMsIDI1NSlcXG59XFxuXFxuXFxuXFxuLmRldGFpbHMtcG9wdXAge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTgyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWxzLXBvcHVwLnNob3cge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZGV0YWlscy1wb3B1cCAucGFuZWwge1xcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGV0YWlscy10YXNrIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9Cb2xkJztcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmRldGFpbHMtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6cmdiKDg1LCA4NSwgODUpO1xcbn1cXG5cXG4uZGV0YWlscy1wcm9qZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9JdGFsaWMnO1xcbiAgICBjb2xvcjpyZ2IoMTA0LCA5MywgMjU1KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZGV0YWlscy1kYXRlIHtcXG4gICAgY29sb3I6cmdiKDU2LCA1NiwgNTYpO1xcbn1cXG5cXG4ucGFuZWwgLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTVweDtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHRvZG9zSG9sZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IG5ldyBBcnJheSgpO1xuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0b2Rvcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kbyA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9kb3NbaW5kZXhdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcblxuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFRvZG8sIGdldFNpemUsIGdldFRvZG8sIHJlbW92ZVRvZG8gfTtcbn0pKCk7XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBBcnJheSgpO1xuICAgIFxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0KTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb3B5ID0gWy4uLnByb2plY3RzXTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0UHJvamVjdCB9O1xufSkoKTtcblxuY29uc3QgdG9kbyA9ICh0YXNrLCBkZXRhaWxzLCBkYXRlLCBwcm9qZWN0LCBkb25lKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0b2Rvc0hvbGRlci5nZXRTaXplKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrKCkge1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREZXRhaWxzKCkge1xuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RvbmUoKSB7XG4gICAgICAgIHJldHVybiBkb25lO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldERvbmUobm93RG9uZSkge1xuICAgICAgICBkb25lID0gbm93RG9uZTtcbiAgICB9IFxuXG4gICAgcmV0dXJuIHsgZ2V0VGFzaywgZ2V0RGV0YWlscywgZ2V0RGF0ZSwgZ2V0UHJvamVjdCwgaXNEb25lLCBnZXRJbmRleCwgc2V0RG9uZSB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBuZXcgQXJyYXkoKTtcblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XG4gICAgZG9tRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5yZW1vdmVDb250ZW50KCk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3QobmFtZSk7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gdG9kbyksIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdG9kb3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVG9kbywgZ2V0VG9kb3MsIGdldE5hbWUsIHJlbW92ZVRvZG8gfTtcbn07XG5cbndpbmRvdy5jaGVja2JveENsaWNrZWQgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB0b2RvID0gdG9kb3NIb2xkZXIuZ2V0VG9kbyhpbmRleCk7XG4gICAgdG9kby5zZXREb25lKCF0b2RvLmlzRG9uZSgpKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9baW5kZXg9XCIke2luZGV4LnRvU3RyaW5nKCl9XCJdYCk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG59XG5cbndpbmRvdy50b2dnbGVEZXRhaWxzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXBvcHVwJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSByZXR1cm47XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zSG9sZGVyLmdldFRvZG8oaW5kZXgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtdGFzaycpLnRleHRDb250ZW50ID0gdG9kby5nZXRUYXNrKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtdGV4dCcpLnRleHRDb250ZW50ID0gdG9kby5nZXREZXRhaWxzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtcHJvamVjdCcpLnRleHRDb250ZW50ID0gdG9kby5nZXRQcm9qZWN0KCkuZ2V0TmFtZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWRhdGUnKS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGF0ZSgpO1xufVxuXG53aW5kb3cuZGVsZXRlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIGRvbU1hbmFnZXIucmVtb3ZlVG9kbyhpbmRleCk7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zSG9sZGVyLmdldFRvZG8oaW5kZXgpO1xuICAgIGNvbnN0IHByb2plY3QgPSB0b2RvLmdldFByb2plY3QoKTtcbiAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kbyk7XG4gICAgdG9kb3NIb2xkZXIucmVtb3ZlVG9kbyhpbmRleCk7XG59XG5cbmNvbnN0IGRvbU1hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGxldCBsYXN0U2hvd24gPSAnYWxsJztcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJyk7XG4gICAgYWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93QWxsKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1tpbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgICAgIHRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZG9FbGVtZW50ID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICBpZiAodG9kby5pc0RvbmUoKSkgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgYCR7dG9kby5nZXRJbmRleCgpfWApO1xuICAgICAgICB0b2RvRWxlbWVudC5pbm5lckhUTUwgPSBgICAgICAgICAgICAgXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cIiR7dG9kby5nZXRJbmRleCgpfVwiIG9uY2xpY2s9XCJjaGVja2JveENsaWNrZWQoJHt0b2RvLmdldEluZGV4KCl9KVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0YXNrRG9uZVwiIGlkPVwidGFza0RvbmVcIiBjbGFzcz1cIlwiICR7dG9kby5pc0RvbmUoKSA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj4ke3RvZG8uZ2V0VGFzaygpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPiR7dG9kby5nZXRQcm9qZWN0KCkuZ2V0TmFtZSgpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dG9kby5nZXREYXRlKCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBlZGl0XCI+ZWRpdDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGRldGFpbHNcIiBvbmNsaWNrPVwidG9nZ2xlRGV0YWlscygke3RvZG8uZ2V0SW5kZXgoKX0pXCI+dmlzaWJpbGl0eTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGRlbGV0ZVwiIG9uY2xpY2s9XCJkZWxldGVUb2RvKCR7dG9kby5nZXRJbmRleCgpfSlcIj5kZWxldGU8L3NwYW4+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIHJldHVybiB0b2RvRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LmdldFRvZG9zKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b2Rvc1tpXSA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGdldFRvZG9FbGVtZW50KHRvZG9zW2ldKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgICAgICAgICAgdG9kb0VsZW1lbnQudG9kb09iaiA9IHRvZG9zW2ldO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNvbnRlbnQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgc2hvd1Byb2plY3QocHJvamVjdC5nZXROYW1lKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzaG93UHJvamVjdCwgc2hvd0FsbCwgcmVtb3ZlQ29udGVudCwgcmVtb3ZlVG9kbyB9XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0T25lID0gcHJvamVjdCgnRGVmYXVsdCcpO1xuY29uc3QgcHJvamVjdFR3byA9IHByb2plY3QoJ01vbmV5Z3VuIFJ1bicpO1xuY29uc3QgcHJvamVjdFRocmVlID0gcHJvamVjdCgnRW1wdHkgcHJvamVjdCcpO1xuXG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RPbmUpO1xucHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0VHdvKTtcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdFRocmVlKTtcblxuY29uc3QgdGFza09uZSA9IHRvZG8oJ0RvIGNvb2wgc3R1ZmYnLCAnSSByZWFsbHkgbmVlZCB0byBkbyBtb3JlIGNvb2wgc3R1ZmYuIEkgaGF2ZSBub3QgZG9uZSBjb29sIHN0dWZmIGluIGEgdmVyeSBsb25nIHRpbWUuJywgJzFzdCBEZWMuIDIwMjInLCBwcm9qZWN0T25lLCBmYWxzZSk7XG50b2Rvc0hvbGRlci5hZGRUb2RvKHRhc2tPbmUpO1xuY29uc3QgdGFza1R3byA9IHRvZG8oJ0RvIHRoYXQnLCAnVGhhdCB3b3VsZCBkZWZpbml0ZWx5IGhlbHAnLCAnMXN0IERlYy4gMjAyMycsIHByb2plY3RPbmUsIGZhbHNlKTtcbnRvZG9zSG9sZGVyLmFkZFRvZG8odGFza1R3byk7XG5jb25zdCB0YXNrVGhyZWUgPSB0b2RvKCdDbGVhbiBkaXNoZXMnLCAnSXQgaXMgbm90IHZlcnkgZnVuIGJ1dCBpdCBuZWVkcyB0byBiZSBkb25lLiB1aC4uLicsICcyNSBKYW51YXJ5IDIwMjMnLCBwcm9qZWN0T25lLCB0cnVlKTtcbnRvZG9zSG9sZGVyLmFkZFRvZG8odGFza1RocmVlKTtcbmNvbnN0IHRhc2tGb3VyID0gdG9kbygnQ2hhbmdlIGNoYXJhY3RlcicsICdUaGUgY3VycmVudCBvbmUgY2xhc2hlcyB0b28gbXVjaCB3aXRoIHRoZSByZWNlbnQgYXJ0aXN0aWMgZGlyZWN0aW9uIGNoYW5nZS4gV2Ugc2hvdWxkIGZpbmQgc29tZXRoaW5nIHRoYXQgbG9va3MgbW9yZSBpbiB0dW5lIHdpdGggdGhlIHJlc3QuIChXZSBjb3VsZCBhZGQgYSBzdHlsaXNoIGNlbGwgc2hhZGluZyA/PyknLCAnVG9tb3Jyb3cnLCBwcm9qZWN0VHdvLCBmYWxzZSk7XG50b2Rvc0hvbGRlci5hZGRUb2RvKHRhc2tGb3VyKTtcblxucHJvamVjdE9uZS5hZGRUb2RvKHRhc2tPbmUpO1xucHJvamVjdE9uZS5hZGRUb2RvKHRhc2tUd28pO1xucHJvamVjdE9uZS5hZGRUb2RvKHRhc2tUaHJlZSk7XG5wcm9qZWN0VHdvLmFkZFRvZG8odGFza0ZvdXIpO1xuXG4vL2RvbU1hbmFnZXIuc2hvd1Byb2plY3QocHJvamVjdE9uZSk7XG4vLyBkb21NYW5hZ2VyLnNob3dQcm9qZWN0KHByb2plY3RUd28pO1xuZG9tTWFuYWdlci5yZW1vdmVDb250ZW50KCk7XG5kb21NYW5hZ2VyLnNob3dBbGwoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=