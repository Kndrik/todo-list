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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'RobotoRegular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoItalic';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoThin';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoMedium';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoBold';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\nhtml {\n    font-family: 'RobotoRegular';\n    font-weight: normal;\n    font-style: normal;\n    --main-pop-color: rgb(223, 74, 54);\n    --dark-pop-color: rgb(206, 64, 46);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.main {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-columns: 300px 3fr;\n    grid-auto-flow: row;\n}\n\nheader {\n    height: 60px;\n    background-color: rgb(223, 74, 54);\n    display: flex;\n    align-items: center;\n    padding-left: 25px;\n    color: white;\n    font-size: 24px;\n    grid-column: 1 / 3;\n    font-family: 'RobotoMedium';\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n\n.sidebar {\n    box-sizing: border-box;\n    background-color: rgb(245, 245, 245);\n    height: calc(100vh - 60px);\n    padding: 20px;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul.projectList {\n    padding-left: 30px;\n    margin-top: 10px;\n}\n\n.projectList li {\n    padding-left: 5px;\n    box-sizing: border-box;\n    height: 30px;\n    font-size: 16px;\n    color: rgb(223, 74, 54);\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.sideList li {\n    height: 40px;\n    font-size: 18px;\n    color:rgb(56, 56, 56);\n    margin-bottom: 5px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n}\n\nli.clickable:hover,\nli.clickable:hover {\n    cursor: pointer;\n    background-color: rgb(230, 230, 230);\n    border-radius: 5px;\n}\n\n.sideList li {\n    font-family: 'RobotoRegular';\n}\n\n.content {\n    padding: 20px;\n}\n\nbutton#new-todo {\n    position: absolute;\n    bottom: 30px;\n    right: 30px;\n    height: 70px;\n    width: 70px;\n    border-radius: 50%;\n    border: none;\n    background-color: rgb(223, 74, 54);\n    color: white;\n    font-family: 'RobotoMedium';\n    font-size: 42px;\n}\n\nbutton#new-todo:hover {\n    cursor: pointer;\n    background-color: rgb(206, 64, 46);\n}\n\n.todo {\n    padding: 10px;\n    border-bottom: 1px solid rgb(206, 206, 206);\n    width: 100%;\n    display: grid;\n    grid-template-columns: 40px 1fr 200px;\n    column-gap: 15px;\n    row-gap: 10px;\n    padding-bottom: 10px;\n    padding-right: 15px;\n    box-sizing: border-box;\n    margin-bottom: 10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-radius: 10px;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;\n}\n\n.todo:hover {\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;\n}\n\n.todo input {\n    grid-column: 1/2;\n    grid-row: 1/3;\n}\n\n.todo input {\n    width: 2em;\n    height: 2em;\n    background-color: white;\n    border-radius: 50%;\n    vertical-align: middle;\n    border: 2px solid rgb(126, 126, 126);\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n}\n\n.todo input:hover {\n    background-color: rgb(230, 230, 230);\n}\n\n.todo input:checked {\n    background-color: rgb(41, 165, 248);\n}\n\n.task {\n    font-family: 'RobotoMedium';\n    font-size: 18px;\n}\n\n.todo.done {\n    background-color: rgb(243, 243, 243);\n}\n\n.todo.done .task {\n    text-decoration: line-through;\n    font-family: 'RobotoRegular';\n    color:rgb(56, 56, 56);\n}\n\n.todo .buttons {\n    grid-column: 3/4;\n    grid-row: 2/3;\n    display: flex;\n    justify-content: flex-end;\n    gap: 20px;\n    color:rgb(148, 148, 148);\n}\n\n.material-symbols-outlined {\n    font-size: 22px;\n}\n\n.buttons .material-symbols-outlined:hover {\n    cursor: pointer;\n    color:rgb(56, 56, 56);\n}\n\n.material-symbols-outlined.delete:hover {\n    cursor: pointer;\n    color:rgb(204, 38, 38);\n}\n\n.date {\n    font-family: 'RobotoRegular';\n    color:rgb(85, 85, 85);\n}\n\n.task,\n.date {\n    grid-column: 2/3;\n}\n\n.project {\n    grid-column: 3/4;\n    text-align: end;\n    font-family: 'RobotoItalic';\n    font-size: 16px;\n    color:rgb(104, 93, 255)\n}\n\n.details-popup,\n.create-popup,\n.edit-popup {\n    visibility: hidden;\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.582);\n    display: flex;\n    justify-content: center;\n}\n\n.details-popup.show,\n.create-popup.show,\n.edit-popup.show {\n    visibility: visible;\n}\n\n.create-popup .panel,\n.edit-popup .panel {\n    margin-top: 20vh;\n    background-color: white;\n    border-radius: 10px;\n    height: 360px;\n    width: 400px;\n\n    box-sizing: border-box;\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.details-popup .panel {\n    margin-top: 20vh;\n    background-color: white;\n    border-radius: 10px;\n    height: 300px;\n    width: 500px;\n\n    padding: 20px 50px 20px 20px;\n    box-sizing: border-box;\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.details-task {\n    font-family: 'RobotoBold';\n    font-size: 28px;\n    text-align: start;\n    margin-bottom: 10px;\n}\n\n.details-text {\n    font-size: 18px;\n    color:rgb(85, 85, 85);\n}\n\n.details-project {\n    font-family: 'RobotoItalic';\n    color:rgb(104, 93, 255);\n    margin-bottom: 5px;\n}\n\n.details-date {\n    color:rgb(56, 56, 56);\n}\n\n.details-popup .panel .close {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    font-size: 26px;\n}\n\n.create-form,\n.edit-form {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 20px;\n}\n\n.create-form button,\n.edit-form button {\n    height: 35px;\n    border: none;\n    background-color: rgb(223, 74, 54);\n    color: white;\n    font-family: 'RobotoMedium';\n    font-size: 16px;\n    border-radius: 5px;\n    \n}\n\n.create-form button:hover,\n.edit-form button:hover {\n    cursor: pointer;\n    background-color: rgb(206, 63, 44);\n}\n\n.create-form .top,\n.edit-form .top {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-task,\n.edit-task {\n    font-size: 16px;\n    min-height: 30px;\n    flex: 1;\n}\n\n.form-details,\n.edit-details {\n    font-size: 14px;\n    resize: none;\n}\n\n.form-selections,\n.edit-selections {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.form-project,\n.form-date,\n.edit-project,\n.edit-date {\n    flex: 1;\n    min-height: 30px;\n}\n\n.panel .header {\n    flex: 1;\n    background-color: rgb(223, 74, 54);\n    border-top-left-radius: 9px;\n    border-top-right-radius: 9px;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-height: 35px;\n    position: relative;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.header .title {\n    font-family: 'RobotoBold';\n    font-size: 16px\n}\n\n.create-popup .header .close,\n.edit-popup .header .close {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    font-size: 26px;\n}\n\n.create-popup .header .close:hover,\n.edit-popup .header .close:hover {\n    cursor: pointer;\n}\n\n.details-popup .panel .close:hover {\n    cursor: pointer;\n    color: black;\n}\n\n.project-li {\n    position: relative;\n}\n\n.project-li .project-add {\n    visibility: hidden;\n    position: absolute;\n    background-color: rgb(223, 74, 54);\n    right: 5px;\n    width: 30px;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-family: 'RobotoMedium';\n}\n\n.project-li:hover .project-add {\n    visibility: visible;\n}\n\n.project-add:hover {\n    cursor: pointer;\n    background-color: rgb(206, 63, 44);\n}\n\n.project-name {\n    font-size: 16px;\n    color: rgb(223, 74, 54);\n    border: 1px solid rgb(223, 74, 54);\n    border-radius: 5px;\n    background-color: transparent;\n}\n\n.project-name:focus {\n    border: 2px solid rgb(223, 74, 54);\n    outline: none;\n}\n\nform.form-project {\n    visibility: hidden;\n    padding-left: 30px;\n}\n\nform.form-project.show {\n    visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'RobotoRegular';\n    src: url('./Roboto-Regular.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoItalic';\n    src: url('./Roboto-Italic.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoThin';\n    src: url('./Roboto-Thin.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoMedium';\n    src: url('./Roboto-Medium.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'RobotoBold';\n    src: url('./Roboto-Bold.ttf') format('truetype');\n    font-weight: normal;    \n    font-style: normal;\n}\n\nhtml {\n    font-family: 'RobotoRegular';\n    font-weight: normal;\n    font-style: normal;\n    --main-pop-color: rgb(223, 74, 54);\n    --dark-pop-color: rgb(206, 64, 46);\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.main {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-columns: 300px 3fr;\n    grid-auto-flow: row;\n}\n\nheader {\n    height: 60px;\n    background-color: rgb(223, 74, 54);\n    display: flex;\n    align-items: center;\n    padding-left: 25px;\n    color: white;\n    font-size: 24px;\n    grid-column: 1 / 3;\n    font-family: 'RobotoMedium';\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n}\n\n.sidebar {\n    box-sizing: border-box;\n    background-color: rgb(245, 245, 245);\n    height: calc(100vh - 60px);\n    padding: 20px;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nul.projectList {\n    padding-left: 30px;\n    margin-top: 10px;\n}\n\n.projectList li {\n    padding-left: 5px;\n    box-sizing: border-box;\n    height: 30px;\n    font-size: 16px;\n    color: rgb(223, 74, 54);\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.sideList li {\n    height: 40px;\n    font-size: 18px;\n    color:rgb(56, 56, 56);\n    margin-bottom: 5px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n}\n\nli.clickable:hover,\nli.clickable:hover {\n    cursor: pointer;\n    background-color: rgb(230, 230, 230);\n    border-radius: 5px;\n}\n\n.sideList li {\n    font-family: 'RobotoRegular';\n}\n\n.content {\n    padding: 20px;\n}\n\nbutton#new-todo {\n    position: absolute;\n    bottom: 30px;\n    right: 30px;\n    height: 70px;\n    width: 70px;\n    border-radius: 50%;\n    border: none;\n    background-color: rgb(223, 74, 54);\n    color: white;\n    font-family: 'RobotoMedium';\n    font-size: 42px;\n}\n\nbutton#new-todo:hover {\n    cursor: pointer;\n    background-color: rgb(206, 64, 46);\n}\n\n.todo {\n    padding: 10px;\n    border-bottom: 1px solid rgb(206, 206, 206);\n    width: 100%;\n    display: grid;\n    grid-template-columns: 40px 1fr 200px;\n    column-gap: 15px;\n    row-gap: 10px;\n    padding-bottom: 10px;\n    padding-right: 15px;\n    box-sizing: border-box;\n    margin-bottom: 10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-radius: 10px;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;\n}\n\n.todo:hover {\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;\n}\n\n.todo input {\n    grid-column: 1/2;\n    grid-row: 1/3;\n}\n\n.todo input {\n    width: 2em;\n    height: 2em;\n    background-color: white;\n    border-radius: 50%;\n    vertical-align: middle;\n    border: 2px solid rgb(126, 126, 126);\n    appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n}\n\n.todo input:hover {\n    background-color: rgb(230, 230, 230);\n}\n\n.todo input:checked {\n    background-color: rgb(41, 165, 248);\n}\n\n.task {\n    font-family: 'RobotoMedium';\n    font-size: 18px;\n}\n\n.todo.done {\n    background-color: rgb(243, 243, 243);\n}\n\n.todo.done .task {\n    text-decoration: line-through;\n    font-family: 'RobotoRegular';\n    color:rgb(56, 56, 56);\n}\n\n.todo .buttons {\n    grid-column: 3/4;\n    grid-row: 2/3;\n    display: flex;\n    justify-content: flex-end;\n    gap: 20px;\n    color:rgb(148, 148, 148);\n}\n\n.material-symbols-outlined {\n    font-size: 22px;\n}\n\n.buttons .material-symbols-outlined:hover {\n    cursor: pointer;\n    color:rgb(56, 56, 56);\n}\n\n.material-symbols-outlined.delete:hover {\n    cursor: pointer;\n    color:rgb(204, 38, 38);\n}\n\n.date {\n    font-family: 'RobotoRegular';\n    color:rgb(85, 85, 85);\n}\n\n.task,\n.date {\n    grid-column: 2/3;\n}\n\n.project {\n    grid-column: 3/4;\n    text-align: end;\n    font-family: 'RobotoItalic';\n    font-size: 16px;\n    color:rgb(104, 93, 255)\n}\n\n.details-popup,\n.create-popup,\n.edit-popup {\n    visibility: hidden;\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.582);\n    display: flex;\n    justify-content: center;\n}\n\n.details-popup.show,\n.create-popup.show,\n.edit-popup.show {\n    visibility: visible;\n}\n\n.create-popup .panel,\n.edit-popup .panel {\n    margin-top: 20vh;\n    background-color: white;\n    border-radius: 10px;\n    height: 360px;\n    width: 400px;\n\n    box-sizing: border-box;\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.details-popup .panel {\n    margin-top: 20vh;\n    background-color: white;\n    border-radius: 10px;\n    height: 300px;\n    width: 500px;\n\n    padding: 20px 50px 20px 20px;\n    box-sizing: border-box;\n    position: relative;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.details-task {\n    font-family: 'RobotoBold';\n    font-size: 28px;\n    text-align: start;\n    margin-bottom: 10px;\n}\n\n.details-text {\n    font-size: 18px;\n    color:rgb(85, 85, 85);\n}\n\n.details-project {\n    font-family: 'RobotoItalic';\n    color:rgb(104, 93, 255);\n    margin-bottom: 5px;\n}\n\n.details-date {\n    color:rgb(56, 56, 56);\n}\n\n.details-popup .panel .close {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    font-size: 26px;\n}\n\n.create-form,\n.edit-form {\n    flex: 1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 20px;\n}\n\n.create-form button,\n.edit-form button {\n    height: 35px;\n    border: none;\n    background-color: rgb(223, 74, 54);\n    color: white;\n    font-family: 'RobotoMedium';\n    font-size: 16px;\n    border-radius: 5px;\n    \n}\n\n.create-form button:hover,\n.edit-form button:hover {\n    cursor: pointer;\n    background-color: rgb(206, 63, 44);\n}\n\n.create-form .top,\n.edit-form .top {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-task,\n.edit-task {\n    font-size: 16px;\n    min-height: 30px;\n    flex: 1;\n}\n\n.form-details,\n.edit-details {\n    font-size: 14px;\n    resize: none;\n}\n\n.form-selections,\n.edit-selections {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.form-project,\n.form-date,\n.edit-project,\n.edit-date {\n    flex: 1;\n    min-height: 30px;\n}\n\n.panel .header {\n    flex: 1;\n    background-color: rgb(223, 74, 54);\n    border-top-left-radius: 9px;\n    border-top-right-radius: 9px;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-height: 35px;\n    position: relative;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n\n.header .title {\n    font-family: 'RobotoBold';\n    font-size: 16px\n}\n\n.create-popup .header .close,\n.edit-popup .header .close {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    font-size: 26px;\n}\n\n.create-popup .header .close:hover,\n.edit-popup .header .close:hover {\n    cursor: pointer;\n}\n\n.details-popup .panel .close:hover {\n    cursor: pointer;\n    color: black;\n}\n\n.project-li {\n    position: relative;\n}\n\n.project-li .project-add {\n    visibility: hidden;\n    position: absolute;\n    background-color: rgb(223, 74, 54);\n    right: 5px;\n    width: 30px;\n    height: 30px;\n    border-radius: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-family: 'RobotoMedium';\n}\n\n.project-li:hover .project-add {\n    visibility: visible;\n}\n\n.project-add:hover {\n    cursor: pointer;\n    background-color: rgb(206, 63, 44);\n}\n\n.project-name {\n    font-size: 16px;\n    color: rgb(223, 74, 54);\n    border: 1px solid rgb(223, 74, 54);\n    border-radius: 5px;\n    background-color: transparent;\n}\n\n.project-name:focus {\n    border: 2px solid rgb(223, 74, 54);\n    outline: none;\n}\n\nform.form-project {\n    visibility: hidden;\n    padding-left: 30px;\n}\n\nform.form-project.show {\n    visibility: visible;\n}"],"sourceRoot":""}]);
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


const storageManager = (() => { 
    let todoArray = localStorage.getItem('todos') === null ?
        [{task : 'Make a website',
        details : 'It needs to be interactive and pretty. Who cares if it runs fast or not anyway.',
        date : '2023-02-23',
        project : 'Default',
        done : false},
        {task : 'Call grandma',
        details : "That'll make the both of us happy.",
        date : '2023-02-18',
        project : 'Default',
        done : true}] : 
        JSON.parse(localStorage.getItem('todos'));
    let projectsArray = localStorage.getItem('projects') === null ? ['Default'] : JSON.parse(localStorage.getItem('projects'));

    const addTodo = (todo) => {
        const newObj = {
            task : todo.getTask(),
            details : todo.getDetails(),
            date : todo.getDate(),
            project : todo.getProject().getName(),
            done : todo.isDone()
        }
        todoArray.push(newObj);

        localStorage.setItem('todos', JSON.stringify(todoArray));
    }

    const addProject = (name) => {
        projectsArray.push(name);

        localStorage.setItem('projects', JSON.stringify(projectsArray));
    }

    const generateObjects = () => {
        createProjects();
        createTodos();
    }

    const createProjects = () => {
        for (let i = 0; i < projectsArray.length; i++) {
            const newProject = project(projectsArray[i]);
            projectManager.addProject(newProject);
        }
    }

    const createTodos = () => {
        for (let i = 0; i < todoArray.length; i++) {
            const arrayElem = todoArray[i];
            const projectObj = projectManager.getProject(arrayElem.project);
            const newTodo = todo(arrayElem.task, arrayElem.details, arrayElem.date, projectObj, arrayElem.done);

            todosHolder.addTodo(newTodo);
            projectObj.addTodo(newTodo);
            
            domManager.refreshDom();
        }
    }

    const updateTodo = (task, project, newTask, newDetails, newDate, newProject, newDone) => {
        for (let i = 0; i < todoArray.length; i++) {
            if (todoArray[i].task === task && todoArray[i].project === project) {
                todoArray[i].task = newTask;
                todoArray[i].details = newDetails;
                todoArray[i].date = newDate;
                todoArray[i].project = newProject;
                todoArray[i].done = newDone;
            }
        }
        localStorage.setItem('todos', JSON.stringify(todoArray));
    }

    const removeTodo = (task, project) => {
        for (let i = 0; i < todoArray.length; i++) {
            if (todoArray[i].task === task && todoArray[i].project === project) {
                todoArray.splice(i, 1);
            }
        }
        localStorage.setItem('todos', JSON.stringify(todoArray));
    }

    return { addTodo, addProject, generateObjects, updateTodo, removeTodo }
})();

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
        todos.splice(index, 1);
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

    function edit(newTask, newDetails, newDate, newProject) {
        storageManager.updateTodo(task, project.getName(), newTask, newDetails, newDate, newProject.getName(), isDone());
        task = newTask;
        details = newDetails;
        date = newDate;
        project = newProject;
    }

    return { getTask, getDetails, getDate, getProject, isDone, getIndex, setDone, edit };
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

const formManager = (() => {
    const confirmNewTodo = (event) => {
        event.preventDefault();
        const task = document.querySelector('.form-task').value;
        const details = document.querySelector('.form-details').value;
        const date = document.querySelector('.form-date').value;
        const project = document.querySelector('.form-project').value;

        creationManager.createTodo(task, details, date, project, false);
        toggleNewTodo();
    }

    const confirmEditTodo = (event, index) => {
        event.preventDefault();
        const newTask = document.querySelector('.edit-task').value;
        const newDetails = document.querySelector('.edit-details').value;
        const newDate = document.querySelector('.edit-date').value;
        const newProject = projectManager.getProject(document.querySelector('.edit-project').value);

        toggleEdit();
        const todoToEdit = todosHolder.getTodo(index);
        projectManager.getProject(todoToEdit.getProject().getName()).removeTodo(todoToEdit);
        todoToEdit.edit(newTask, newDetails, newDate, newProject);
        newProject.addTodo(todoToEdit);
        domManager.refreshDom();
    }

    const confirmNewProject = (event) => {
        event.preventDefault();
        const projectName = document.querySelector('.project-name').value;

        if (projectManager.getProject(projectName) !== undefined) {
            toggleNewProject();
            alert(`There is already a project called ${projectName}`);
            return;
        }

        if (projectName === '') {
            toggleNewProject();
            alert(`Project name cannot be empty`);
            return;
        }

        creationManager.createProject(projectName);
        toggleNewProject();
    }

    return { confirmNewTodo, confirmEditTodo, confirmNewProject }
})();

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
        <span class="material-symbols-outlined edit" onclick="toggleEdit(${todo.getIndex()})">edit</span>
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
        lastShown = projectName;
    };

    const showAll = () => {
        removeContent();
        const projects = projectManager.getProjects();
        projects.forEach(project => {
            showProject(project.getName());
        });
        lastShown = 'all';
    }

    const refreshDom = () => {
        removeContent();
        if (lastShown === 'all') {
            showAll();
        } else {
            showProject(lastShown);
        }
    }

    return { showProject, showAll, removeContent, removeTodo, refreshDom }
})();

const creationManager = (() => {
    const createTodo = (task, details, date, project) => {
        const projectObj = projectManager.getProject(project);
        const newTodo = todo(task, details, date, projectObj, false);
        todosHolder.addTodo(newTodo);
        projectObj.addTodo(newTodo);
        domManager.refreshDom();
        storageManager.addTodo(newTodo);
    }

    const createProject = (name) => {
        const newProject = project(name);
        projectManager.addProject(newProject);
        storageManager.addProject(name);
    }

    return { createTodo, createProject };
})();

window.checkboxClicked = (index) => {
    const todo = todosHolder.getTodo(index);
    todo.setDone(!todo.isDone());
    storageManager.updateTodo(todo.getTask(), todo.getProject().getName(), todo.getTask(), todo.getDetails(), todo.getDate(), todo.getProject().getName(), todo.isDone());
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
    storageManager.removeTodo(todo.getTask(), todo.getProject().getName());
}

window.toggleNewTodo = () => {
    const element = document.querySelector('.create-popup');
    element.classList.toggle('show');
    if (!element.classList.contains('show')) return;

    const form = document.querySelector('form.create-form');
    form.onsubmit = formManager.confirmNewTodo;

    const selectElem = document.querySelector('.form-project');
    selectElem.innerHTML = '';
    const projects = projectManager.getProjects();
    for (let i = 0; i < projects.length; i++) {
        selectElem.innerHTML += `<option value="${projects[i].getName()}">${projects[i].getName()}</option>`
    }

    document.querySelector('.form-task').value = '';
    document.querySelector('.form-details').value = '';
    document.querySelector('.form-date').value = null;
}

window.toggleEdit = (index) => {
    const element = document.querySelector('.edit-popup');
    element.classList.toggle('show');

    if (!element.classList.contains('show')) return;
    if (index === undefined) return;

    const form = document.querySelector('form.edit-form');
    form.onsubmit = (event) => {
        formManager.confirmEditTodo(event, index);
    }

    const task = document.querySelector('.edit-task');
    const details = document.querySelector('.edit-details');
    const date = document.querySelector('.edit-date');
    const project = document.querySelector('.edit-project');

    const todo = todosHolder.getTodo(index);

    const selectElem = document.querySelector('.edit-project');
    selectElem.innerHTML = '';
    const projects = projectManager.getProjects();
    for (let i = 0; i < projects.length; i++) {
        selectElem.innerHTML += `<option value="${projects[i].getName()}">${projects[i].getName()}</option>`
    }

    task.value = todo.getTask();
    details.value = todo.getDetails();
    date.value = todo.getDate();
    project.value = todo.getProject().getName();
}

window.toggleNewProject = () => {
    const element = document.querySelector('form.form-project');
    element.classList.toggle('show');

    if (!element.classList.contains('show')) return;

    const field = document.querySelector('input.project-name');
    field.value = '';
    field.focus();
    element.onsubmit = formManager.confirmNewProject;
}

// const projectOne = project('Default');
// const projectTwo = project('Moneygun Run');

// projectManager.addProject(projectOne);
// projectManager.addProject(projectTwo);

// const taskOne = todo('Do cool stuff', 'I really need to do more cool stuff. I have not done cool stuff in a very long time.', '1st Dec. 2022', projectOne, false);
// todosHolder.addTodo(taskOne);
// const taskTwo = todo('Do that', 'That would definitely help', '1st Dec. 2023', projectOne, false);
// todosHolder.addTodo(taskTwo);
// const taskThree = todo('Clean dishes', 'It is not very fun but it needs to be done. uh...', '25 January 2023', projectOne, true);
// todosHolder.addTodo(taskThree);
// const taskFour = todo('Change character', 'The current one clashes too much with the recent artistic direction change. We should find something that looks more in tune with the rest. (We could add a stylish cell shading ??)', 'Tomorrow', projectTwo, false);
// todosHolder.addTodo(taskFour);

// projectOne.addTodo(taskOne);
// projectOne.addTodo(taskTwo);
// projectOne.addTodo(taskThree);
// projectTwo.addTodo(taskFour);

// domManager.showProject(projectOne);
// domManager.showProject(projectTwo);
domManager.removeContent();
domManager.showAll();


storageManager.generateObjects();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLFFBQVEsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFB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QXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELFlBQVk7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsZ0VBQWdFLE1BQU07QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQSx3QkFBd0IsZ0JBQWdCLDZCQUE2QixnQkFBZ0IsNERBQTRELCtCQUErQjtBQUNoTCw0QkFBNEIsZUFBZTtBQUMzQywrQkFBK0IsNEJBQTRCO0FBQzNELDRCQUE0QixlQUFlO0FBQzNDO0FBQ0EsMkVBQTJFLGdCQUFnQjtBQUMzRixpRkFBaUYsZ0JBQWdCO0FBQ2pHLDZFQUE2RSxnQkFBZ0I7QUFDN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsaUJBQWlCO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDLGtEQUFrRCxzQkFBc0IsSUFBSSxzQkFBc0I7QUFDbEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QyxrREFBa0Qsc0JBQXNCLElBQUksc0JBQXNCO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9JdGFsaWMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9UaGluJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgICAgXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgICAgXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvQm9sZCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgIFxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIC0tbWFpbi1wb3AtY29sb3I6IHJnYigyMjMsIDc0LCA1NCk7XFxuICAgIC0tZGFyay1wb3AtY29sb3I6IHJnYigyMDYsIDY0LCA0Nik7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYWluIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDNmcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAycHggOHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxudWwucHJvamVjdExpc3Qge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0TGlzdCBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHJnYigyMjMsIDc0LCA1NCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zaWRlTGlzdCBsaSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjpyZ2IoNTYsIDU2LCA1Nik7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5saS5jbGlja2FibGU6aG92ZXIsXFxubGkuY2xpY2thYmxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNpZGVMaXN0IGxpIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5idXR0b24jbmV3LXRvZG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgcmlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbn1cXG5cXG5idXR0b24jbmV3LXRvZG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDY0LCA0Nik7XFxufVxcblxcbi50b2RvIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDYsIDIwNiwgMjA2KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnIgMjAwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDE1cHg7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg5LCAzMCwgNjYsIDAuMjUpIDBweCAxcHggMXB4LCByZ2JhKDksIDMwLCA2NiwgMC4xMykgMHB4IDBweCAxcHggMXB4O1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOSwgMzAsIDY2LCAwLjI1KSAwcHggNHB4IDhweCAtMnB4LCByZ2JhKDksIDMwLCA2NiwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xcbn1cXG5cXG4udG9kbyBpbnB1dCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxufVxcblxcbi50b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjYsIDEyNiwgMTI2KTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIGlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbn1cXG5cXG4udG9kbyBpbnB1dDpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAxNjUsIDI0OCk7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9NZWRpdW0nO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50b2RvLmRvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxufVxcblxcbi50b2RvLmRvbmUgLnRhc2sge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gICAgY29sb3I6cmdiKDU2LCA1NiwgNTYpO1xcbn1cXG5cXG4udG9kbyAuYnV0dG9ucyB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6cmdiKDE0OCwgMTQ4LCAxNDgpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmJ1dHRvbnMgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOnJnYig1NiwgNTYsIDU2KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQuZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjpyZ2IoMjA0LCAzOCwgMzgpO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICAgIGNvbG9yOnJnYig4NSwgODUsIDg1KTtcXG59XFxuXFxuLnRhc2ssXFxuLmRhdGUge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9JdGFsaWMnO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOnJnYigxMDQsIDkzLCAyNTUpXFxufVxcblxcbi5kZXRhaWxzLXBvcHVwLFxcbi5jcmVhdGUtcG9wdXAsXFxuLmVkaXQtcG9wdXAge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTgyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWxzLXBvcHVwLnNob3csXFxuLmNyZWF0ZS1wb3B1cC5zaG93LFxcbi5lZGl0LXBvcHVwLnNob3cge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY3JlYXRlLXBvcHVwIC5wYW5lbCxcXG4uZWRpdC1wb3B1cCAucGFuZWwge1xcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzNjBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxufVxcblxcbi5kZXRhaWxzLXBvcHVwIC5wYW5lbCB7XFxuICAgIG1hcmdpbi10b3A6IDIwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbn1cXG5cXG4uZGV0YWlscy10YXNrIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9Cb2xkJztcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmRldGFpbHMtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6cmdiKDg1LCA4NSwgODUpO1xcbn1cXG5cXG4uZGV0YWlscy1wcm9qZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9JdGFsaWMnO1xcbiAgICBjb2xvcjpyZ2IoMTA0LCA5MywgMjU1KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZGV0YWlscy1kYXRlIHtcXG4gICAgY29sb3I6cmdiKDU2LCA1NiwgNTYpO1xcbn1cXG5cXG4uZGV0YWlscy1wb3B1cCAucGFuZWwgLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTVweDtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5jcmVhdGUtZm9ybSxcXG4uZWRpdC1mb3JtIHtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jcmVhdGUtZm9ybSBidXR0b24sXFxuLmVkaXQtZm9ybSBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG59XFxuXFxuLmNyZWF0ZS1mb3JtIGJ1dHRvbjpob3ZlcixcXG4uZWRpdC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgNjMsIDQ0KTtcXG59XFxuXFxuLmNyZWF0ZS1mb3JtIC50b3AsXFxuLmVkaXQtZm9ybSAudG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS10YXNrLFxcbi5lZGl0LXRhc2sge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5mb3JtLWRldGFpbHMsXFxuLmVkaXQtZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZm9ybS1zZWxlY3Rpb25zLFxcbi5lZGl0LXNlbGVjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tcHJvamVjdCxcXG4uZm9ybS1kYXRlLFxcbi5lZGl0LXByb2plY3QsXFxuLmVkaXQtZGF0ZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5wYW5lbCAuaGVhZGVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcbn1cXG5cXG4uaGVhZGVyIC50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvQm9sZCc7XFxuICAgIGZvbnQtc2l6ZTogMTZweFxcbn1cXG5cXG4uY3JlYXRlLXBvcHVwIC5oZWFkZXIgLmNsb3NlLFxcbi5lZGl0LXBvcHVwIC5oZWFkZXIgLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4uY3JlYXRlLXBvcHVwIC5oZWFkZXIgLmNsb3NlOmhvdmVyLFxcbi5lZGl0LXBvcHVwIC5oZWFkZXIgLmNsb3NlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGV0YWlscy1wb3B1cCAucGFuZWwgLmNsb3NlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWxpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdC1saSAucHJvamVjdC1hZGQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9NZWRpdW0nO1xcbn1cXG5cXG4ucHJvamVjdC1saTpob3ZlciAucHJvamVjdC1hZGQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDYzLCA0NCk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZm9ybS5mb3JtLXByb2plY3Qge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuZm9ybS5mb3JtLXByb2plY3Quc2hvdyB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsK0RBQW1EO0lBQ25ELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsK0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0RBQWdEO0lBQ2hELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsK0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0RBQWdEO0lBQ2hELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9GQUFvRjtBQUN4Rjs7QUFFQTtJQUNJLHlGQUF5RjtBQUM3Rjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsU0FBUztJQUNULHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZOztJQUVaLHNCQUFzQjtJQUN0QixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZOztJQUVaLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4Qjs7SUFFOUIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2Ysa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYOztBQUVBOztJQUVJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBOzs7O0lBSUksT0FBTztJQUNQLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5RkFBeUY7QUFDN0Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixlQUFlO0FBQ25COztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICAgIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgICAgXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvSXRhbGljJztcXG4gICAgc3JjOiB1cmwoJy4vUm9ib3RvLUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgIFxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1RoaW4nO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgIFxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxuICAgIHNyYzogdXJsKCcuL1JvYm90by1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9Cb2xkJztcXG4gICAgc3JjOiB1cmwoJy4vUm9ib3RvLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAtLW1haW4tcG9wLWNvbG9yOiByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICAtLWRhcmstcG9wLWNvbG9yOiByZ2IoMjA2LCA2NCwgNDYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAzZnI7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMnB4IDhweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsLnByb2plY3RMaXN0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdExpc3QgbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiByZ2IoMjIzLCA3NCwgNTQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2lkZUxpc3QgbGkge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6cmdiKDU2LCA1NiwgNTYpO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxubGkuY2xpY2thYmxlOmhvdmVyLFxcbmxpLmNsaWNrYWJsZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlTGlzdCBsaSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuYnV0dG9uI25ldy10b2RvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b01lZGl1bSc7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG59XFxuXFxuYnV0dG9uI25ldy10b2RvOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCA2NCwgNDYpO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjA2LCAyMDYsIDIwNik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyIDIwMHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOSwgMzAsIDY2LCAwLjI1KSAwcHggMXB4IDFweCwgcmdiYSg5LCAzMCwgNjYsIDAuMTMpIDBweCAwcHggMXB4IDFweDtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDksIDMwLCA2NiwgMC4yNSkgMHB4IDRweCA4cHggLTJweCwgcmdiYSg5LCAzMCwgNjYsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcXG59XFxuXFxuLnRvZG8gaW5wdXQge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbn1cXG5cXG4udG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI2LCAxMjYsIDEyNik7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kbyBpbnB1dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG59XFxuXFxuLnRvZG8gaW5wdXQ6Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgMTY1LCAyNDgpO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udG9kby5kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xcbn1cXG5cXG4udG9kby5kb25lIC50YXNrIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICAgIGNvbG9yOnJnYig1NiwgNTYsIDU2KTtcXG59XFxuXFxuLnRvZG8gLmJ1dHRvbnMge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGNvbG9yOnJnYigxNDgsIDE0OCwgMTQ4KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5idXR0b25zIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjpyZ2IoNTYsIDU2LCA1Nik7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLmRlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6cmdiKDIwNCwgMzgsIDM4KTtcXG59XFxuXFxuLmRhdGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgICBjb2xvcjpyZ2IoODUsIDg1LCA4NSk7XFxufVxcblxcbi50YXNrLFxcbi5kYXRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvSXRhbGljJztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjpyZ2IoMTA0LCA5MywgMjU1KVxcbn1cXG5cXG4uZGV0YWlscy1wb3B1cCxcXG4uY3JlYXRlLXBvcHVwLFxcbi5lZGl0LXBvcHVwIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU4Mik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlscy1wb3B1cC5zaG93LFxcbi5jcmVhdGUtcG9wdXAuc2hvdyxcXG4uZWRpdC1wb3B1cC5zaG93IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNyZWF0ZS1wb3B1cCAucGFuZWwsXFxuLmVkaXQtcG9wdXAgLnBhbmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbn1cXG5cXG4uZGV0YWlscy1wb3B1cCAucGFuZWwge1xcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcblxcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggMjBweCAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXG59XFxuXFxuLmRldGFpbHMtdGFzayB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvQm9sZCc7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5kZXRhaWxzLXRleHQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOnJnYig4NSwgODUsIDg1KTtcXG59XFxuXFxuLmRldGFpbHMtcHJvamVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvSXRhbGljJztcXG4gICAgY29sb3I6cmdiKDEwNCwgOTMsIDI1NSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmRldGFpbHMtZGF0ZSB7XFxuICAgIGNvbG9yOnJnYig1NiwgNTYsIDU2KTtcXG59XFxuXFxuLmRldGFpbHMtcG9wdXAgLnBhbmVsIC5jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIHRvcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4uY3JlYXRlLWZvcm0sXFxuLmVkaXQtZm9ybSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY3JlYXRlLWZvcm0gYnV0dG9uLFxcbi5lZGl0LWZvcm0gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDc0LCA1NCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG9NZWRpdW0nO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgXFxufVxcblxcbi5jcmVhdGUtZm9ybSBidXR0b246aG92ZXIsXFxuLmVkaXQtZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDYzLCA0NCk7XFxufVxcblxcbi5jcmVhdGUtZm9ybSAudG9wLFxcbi5lZGl0LWZvcm0gLnRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tdGFzayxcXG4uZWRpdC10YXNrIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9ybS1kZXRhaWxzLFxcbi5lZGl0LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tc2VsZWN0aW9ucyxcXG4uZWRpdC1zZWxlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLXByb2plY3QsXFxuLmZvcm0tZGF0ZSxcXG4uZWRpdC1wcm9qZWN0LFxcbi5lZGl0LWRhdGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucGFuZWwgLmhlYWRlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDc0LCA1NCk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDlweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDlweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXG59XFxuXFxuLmhlYWRlciAudGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90b0JvbGQnO1xcbiAgICBmb250LXNpemU6IDE2cHhcXG59XFxuXFxuLmNyZWF0ZS1wb3B1cCAuaGVhZGVyIC5jbG9zZSxcXG4uZWRpdC1wb3B1cCAuaGVhZGVyIC5jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLmNyZWF0ZS1wb3B1cCAuaGVhZGVyIC5jbG9zZTpob3ZlcixcXG4uZWRpdC1wb3B1cCAuaGVhZGVyIC5jbG9zZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRldGFpbHMtcG9wdXAgLnBhbmVsIC5jbG9zZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1saSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QtbGkgLnByb2plY3QtYWRkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDc0LCA1NCk7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTWVkaXVtJztcXG59XFxuXFxuLnByb2plY3QtbGk6aG92ZXIgLnByb2plY3QtYWRkIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnByb2plY3QtYWRkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCA2MywgNDQpO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMywgNzQsIDU0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByb2plY3QtbmFtZTpmb2N1cyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjMsIDc0LCA1NCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmZvcm0uZm9ybS1wcm9qZWN0IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbmZvcm0uZm9ybS1wcm9qZWN0LnNob3cge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBzdG9yYWdlTWFuYWdlciA9ICgoKSA9PiB7IFxuICAgIGxldCB0b2RvQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSA9PT0gbnVsbCA/XG4gICAgICAgIFt7dGFzayA6ICdNYWtlIGEgd2Vic2l0ZScsXG4gICAgICAgIGRldGFpbHMgOiAnSXQgbmVlZHMgdG8gYmUgaW50ZXJhY3RpdmUgYW5kIHByZXR0eS4gV2hvIGNhcmVzIGlmIGl0IHJ1bnMgZmFzdCBvciBub3QgYW55d2F5LicsXG4gICAgICAgIGRhdGUgOiAnMjAyMy0wMi0yMycsXG4gICAgICAgIHByb2plY3QgOiAnRGVmYXVsdCcsXG4gICAgICAgIGRvbmUgOiBmYWxzZX0sXG4gICAgICAgIHt0YXNrIDogJ0NhbGwgZ3JhbmRtYScsXG4gICAgICAgIGRldGFpbHMgOiBcIlRoYXQnbGwgbWFrZSB0aGUgYm90aCBvZiB1cyBoYXBweS5cIixcbiAgICAgICAgZGF0ZSA6ICcyMDIzLTAyLTE4JyxcbiAgICAgICAgcHJvamVjdCA6ICdEZWZhdWx0JyxcbiAgICAgICAgZG9uZSA6IHRydWV9XSA6IFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpID09PSBudWxsID8gWydEZWZhdWx0J10gOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCBuZXdPYmogPSB7XG4gICAgICAgICAgICB0YXNrIDogdG9kby5nZXRUYXNrKCksXG4gICAgICAgICAgICBkZXRhaWxzIDogdG9kby5nZXREZXRhaWxzKCksXG4gICAgICAgICAgICBkYXRlIDogdG9kby5nZXREYXRlKCksXG4gICAgICAgICAgICBwcm9qZWN0IDogdG9kby5nZXRQcm9qZWN0KCkuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgZG9uZSA6IHRvZG8uaXNEb25lKClcbiAgICAgICAgfVxuICAgICAgICB0b2RvQXJyYXkucHVzaChuZXdPYmopO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2gobmFtZSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlT2JqZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlUHJvamVjdHMoKTtcbiAgICAgICAgY3JlYXRlVG9kb3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwcm9qZWN0c0FycmF5W2ldKTtcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvcyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5RWxlbSA9IHRvZG9BcnJheVtpXTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPYmogPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KGFycmF5RWxlbS5wcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKGFycmF5RWxlbS50YXNrLCBhcnJheUVsZW0uZGV0YWlscywgYXJyYXlFbGVtLmRhdGUsIHByb2plY3RPYmosIGFycmF5RWxlbS5kb25lKTtcblxuICAgICAgICAgICAgdG9kb3NIb2xkZXIuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICAgICAgICAgIHByb2plY3RPYmouYWRkVG9kbyhuZXdUb2RvKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZG9tTWFuYWdlci5yZWZyZXNoRG9tKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb2RvID0gKHRhc2ssIHByb2plY3QsIG5ld1Rhc2ssIG5ld0RldGFpbHMsIG5ld0RhdGUsIG5ld1Byb2plY3QsIG5ld0RvbmUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b2RvQXJyYXlbaV0udGFzayA9PT0gdGFzayAmJiB0b2RvQXJyYXlbaV0ucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpXS50YXNrID0gbmV3VGFzaztcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaV0uZGV0YWlscyA9IG5ld0RldGFpbHM7XG4gICAgICAgICAgICAgICAgdG9kb0FycmF5W2ldLmRhdGUgPSBuZXdEYXRlO1xuICAgICAgICAgICAgICAgIHRvZG9BcnJheVtpXS5wcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXlbaV0uZG9uZSA9IG5ld0RvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0FycmF5KSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0YXNrLCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9kb0FycmF5W2ldLnRhc2sgPT09IHRhc2sgJiYgdG9kb0FycmF5W2ldLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0b2RvQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFRvZG8sIGFkZFByb2plY3QsIGdlbmVyYXRlT2JqZWN0cywgdXBkYXRlVG9kbywgcmVtb3ZlVG9kbyB9XG59KSgpO1xuXG5jb25zdCB0b2Rvc0hvbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBuZXcgQXJyYXkoKTtcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9kb3MubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvZG9zW2luZGV4XTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVG9kbywgZ2V0U2l6ZSwgZ2V0VG9kbywgcmVtb3ZlVG9kbyB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gbmV3IEFycmF5KCk7XG4gICAgXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KHByb2plY3QpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSBbLi4ucHJvamVjdHNdO1xuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3RzLCBnZXRQcm9qZWN0IH07XG59KSgpO1xuXG5jb25zdCB0b2RvID0gKHRhc2ssIGRldGFpbHMsIGRhdGUsIHByb2plY3QsIGRvbmUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRvZG9zSG9sZGVyLmdldFNpemUoKTtcblxuICAgIGZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERldGFpbHMoKSB7XG4gICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIGRvbmU7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGdldEluZGV4KCkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RG9uZShub3dEb25lKSB7XG4gICAgICAgIGRvbmUgPSBub3dEb25lO1xuICAgIH0gXG5cbiAgICBmdW5jdGlvbiBlZGl0KG5ld1Rhc2ssIG5ld0RldGFpbHMsIG5ld0RhdGUsIG5ld1Byb2plY3QpIHtcbiAgICAgICAgc3RvcmFnZU1hbmFnZXIudXBkYXRlVG9kbyh0YXNrLCBwcm9qZWN0LmdldE5hbWUoKSwgbmV3VGFzaywgbmV3RGV0YWlscywgbmV3RGF0ZSwgbmV3UHJvamVjdC5nZXROYW1lKCksIGlzRG9uZSgpKTtcbiAgICAgICAgdGFzayA9IG5ld1Rhc2s7XG4gICAgICAgIGRldGFpbHMgPSBuZXdEZXRhaWxzO1xuICAgICAgICBkYXRlID0gbmV3RGF0ZTtcbiAgICAgICAgcHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0VGFzaywgZ2V0RGV0YWlscywgZ2V0RGF0ZSwgZ2V0UHJvamVjdCwgaXNEb25lLCBnZXRJbmRleCwgc2V0RG9uZSwgZWRpdCB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBuZXcgQXJyYXkoKTtcblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XG4gICAgZG9tRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9tTWFuYWdlci5yZW1vdmVDb250ZW50KCk7XG4gICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3QobmFtZSk7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gdG9kbyksIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdG9kb3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVG9kbywgZ2V0VG9kb3MsIGdldE5hbWUsIHJlbW92ZVRvZG8gfTtcbn07XG5cbmNvbnN0IGZvcm1NYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb25maXJtTmV3VG9kbyA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdGFzaycpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZGV0YWlscycpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcHJvamVjdCcpLnZhbHVlO1xuXG4gICAgICAgIGNyZWF0aW9uTWFuYWdlci5jcmVhdGVUb2RvKHRhc2ssIGRldGFpbHMsIGRhdGUsIHByb2plY3QsIGZhbHNlKTtcbiAgICAgICAgdG9nZ2xlTmV3VG9kbygpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpcm1FZGl0VG9kbyA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2snKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRldGFpbHMnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdCcpLnZhbHVlKTtcblxuICAgICAgICB0b2dnbGVFZGl0KCk7XG4gICAgICAgIGNvbnN0IHRvZG9Ub0VkaXQgPSB0b2Rvc0hvbGRlci5nZXRUb2RvKGluZGV4KTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdCh0b2RvVG9FZGl0LmdldFByb2plY3QoKS5nZXROYW1lKCkpLnJlbW92ZVRvZG8odG9kb1RvRWRpdCk7XG4gICAgICAgIHRvZG9Ub0VkaXQuZWRpdChuZXdUYXNrLCBuZXdEZXRhaWxzLCBuZXdEYXRlLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRUb2RvKHRvZG9Ub0VkaXQpO1xuICAgICAgICBkb21NYW5hZ2VyLnJlZnJlc2hEb20oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maXJtTmV3UHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS52YWx1ZTtcblxuICAgICAgICBpZiAocHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG9nZ2xlTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgYWxlcnQoYFRoZXJlIGlzIGFscmVhZHkgYSBwcm9qZWN0IGNhbGxlZCAke3Byb2plY3ROYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSAnJykge1xuICAgICAgICAgICAgdG9nZ2xlTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgYWxlcnQoYFByb2plY3QgbmFtZSBjYW5ub3QgYmUgZW1wdHlgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0aW9uTWFuYWdlci5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgdG9nZ2xlTmV3UHJvamVjdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNvbmZpcm1OZXdUb2RvLCBjb25maXJtRWRpdFRvZG8sIGNvbmZpcm1OZXdQcm9qZWN0IH1cbn0pKCk7XG5cbmNvbnN0IGRvbU1hbmFnZXIgPSAoKCkgPT4ge1xuICAgIGxldCBsYXN0U2hvd24gPSAnYWxsJztcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJyk7XG4gICAgYWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzaG93QWxsKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kb1tpbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgICAgIHRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZG9FbGVtZW50ID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICBpZiAodG9kby5pc0RvbmUoKSkgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgYCR7dG9kby5nZXRJbmRleCgpfWApO1xuICAgICAgICB0b2RvRWxlbWVudC5pbm5lckhUTUwgPSBgICAgICAgICAgICAgXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cIiR7dG9kby5nZXRJbmRleCgpfVwiIG9uY2xpY2s9XCJjaGVja2JveENsaWNrZWQoJHt0b2RvLmdldEluZGV4KCl9KVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0YXNrRG9uZVwiIGlkPVwidGFza0RvbmVcIiBjbGFzcz1cIlwiICR7dG9kby5pc0RvbmUoKSA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj4ke3RvZG8uZ2V0VGFzaygpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPiR7dG9kby5nZXRQcm9qZWN0KCkuZ2V0TmFtZSgpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dG9kby5nZXREYXRlKCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBlZGl0XCIgb25jbGljaz1cInRvZ2dsZUVkaXQoJHt0b2RvLmdldEluZGV4KCl9KVwiPmVkaXQ8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBkZXRhaWxzXCIgb25jbGljaz1cInRvZ2dsZURldGFpbHMoJHt0b2RvLmdldEluZGV4KCl9KVwiPnZpc2liaWxpdHk8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBkZWxldGVcIiBvbmNsaWNrPVwiZGVsZXRlVG9kbygke3RvZG8uZ2V0SW5kZXgoKX0pXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgICByZXR1cm4gdG9kb0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC5nZXRUb2RvcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9kb3NbaV0gPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBnZXRUb2RvRWxlbWVudCh0b2Rvc1tpXSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgICAgICAgIHRvZG9FbGVtZW50LnRvZG9PYmogPSB0b2Rvc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0U2hvd24gPSBwcm9qZWN0TmFtZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQ29udGVudCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBzaG93UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsYXN0U2hvd24gPSAnYWxsJztcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoRG9tID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVDb250ZW50KCk7XG4gICAgICAgIGlmIChsYXN0U2hvd24gPT09ICdhbGwnKSB7XG4gICAgICAgICAgICBzaG93QWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93UHJvamVjdChsYXN0U2hvd24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2hvd1Byb2plY3QsIHNob3dBbGwsIHJlbW92ZUNvbnRlbnQsIHJlbW92ZVRvZG8sIHJlZnJlc2hEb20gfVxufSkoKTtcblxuY29uc3QgY3JlYXRpb25NYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRhc2ssIGRldGFpbHMsIGRhdGUsIHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE9iaiA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKHRhc2ssIGRldGFpbHMsIGRhdGUsIHByb2plY3RPYmosIGZhbHNlKTtcbiAgICAgICAgdG9kb3NIb2xkZXIuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICAgICAgcHJvamVjdE9iai5hZGRUb2RvKG5ld1RvZG8pO1xuICAgICAgICBkb21NYW5hZ2VyLnJlZnJlc2hEb20oKTtcbiAgICAgICAgc3RvcmFnZU1hbmFnZXIuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobmFtZSk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIHN0b3JhZ2VNYW5hZ2VyLmFkZFByb2plY3QobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlVG9kbywgY3JlYXRlUHJvamVjdCB9O1xufSkoKTtcblxud2luZG93LmNoZWNrYm94Q2xpY2tlZCA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSB0b2Rvc0hvbGRlci5nZXRUb2RvKGluZGV4KTtcbiAgICB0b2RvLnNldERvbmUoIXRvZG8uaXNEb25lKCkpO1xuICAgIHN0b3JhZ2VNYW5hZ2VyLnVwZGF0ZVRvZG8odG9kby5nZXRUYXNrKCksIHRvZG8uZ2V0UHJvamVjdCgpLmdldE5hbWUoKSwgdG9kby5nZXRUYXNrKCksIHRvZG8uZ2V0RGV0YWlscygpLCB0b2RvLmdldERhdGUoKSwgdG9kby5nZXRQcm9qZWN0KCkuZ2V0TmFtZSgpLCB0b2RvLmlzRG9uZSgpKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG9baW5kZXg9XCIke2luZGV4LnRvU3RyaW5nKCl9XCJdYCk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG59XG5cbndpbmRvdy50b2dnbGVEZXRhaWxzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXBvcHVwJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSByZXR1cm47XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zSG9sZGVyLmdldFRvZG8oaW5kZXgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtdGFzaycpLnRleHRDb250ZW50ID0gdG9kby5nZXRUYXNrKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtdGV4dCcpLnRleHRDb250ZW50ID0gdG9kby5nZXREZXRhaWxzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtcHJvamVjdCcpLnRleHRDb250ZW50ID0gdG9kby5nZXRQcm9qZWN0KCkuZ2V0TmFtZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWRhdGUnKS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0RGF0ZSgpO1xufVxuXG53aW5kb3cuZGVsZXRlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIGRvbU1hbmFnZXIucmVtb3ZlVG9kbyhpbmRleCk7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zSG9sZGVyLmdldFRvZG8oaW5kZXgpO1xuICAgIGNvbnN0IHByb2plY3QgPSB0b2RvLmdldFByb2plY3QoKTtcbiAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kbyk7XG4gICAgdG9kb3NIb2xkZXIucmVtb3ZlVG9kbyhpbmRleCk7XG4gICAgc3RvcmFnZU1hbmFnZXIucmVtb3ZlVG9kbyh0b2RvLmdldFRhc2soKSwgdG9kby5nZXRQcm9qZWN0KCkuZ2V0TmFtZSgpKTtcbn1cblxud2luZG93LnRvZ2dsZU5ld1RvZG8gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcG9wdXAnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHJldHVybjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLmNyZWF0ZS1mb3JtJyk7XG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZvcm1NYW5hZ2VyLmNvbmZpcm1OZXdUb2RvO1xuXG4gICAgY29uc3Qgc2VsZWN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXByb2plY3QnKTtcbiAgICBzZWxlY3RFbGVtLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGVjdEVsZW0uaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0c1tpXS5nZXROYW1lKCl9XCI+JHtwcm9qZWN0c1tpXS5nZXROYW1lKCl9PC9vcHRpb24+YFxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRhc2snKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWRldGFpbHMnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWRhdGUnKS52YWx1ZSA9IG51bGw7XG59XG5cbndpbmRvdy50b2dnbGVFZGl0ID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXBvcHVwJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG5cbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHJldHVybjtcbiAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uZWRpdC1mb3JtJyk7XG4gICAgZm9ybS5vbnN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3JtTWFuYWdlci5jb25maXJtRWRpdFRvZG8oZXZlbnQsIGluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzaycpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kZXRhaWxzJyk7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRhdGUnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtcHJvamVjdCcpO1xuXG4gICAgY29uc3QgdG9kbyA9IHRvZG9zSG9sZGVyLmdldFRvZG8oaW5kZXgpO1xuXG4gICAgY29uc3Qgc2VsZWN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QnKTtcbiAgICBzZWxlY3RFbGVtLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGVjdEVsZW0uaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0c1tpXS5nZXROYW1lKCl9XCI+JHtwcm9qZWN0c1tpXS5nZXROYW1lKCl9PC9vcHRpb24+YFxuICAgIH1cblxuICAgIHRhc2sudmFsdWUgPSB0b2RvLmdldFRhc2soKTtcbiAgICBkZXRhaWxzLnZhbHVlID0gdG9kby5nZXREZXRhaWxzKCk7XG4gICAgZGF0ZS52YWx1ZSA9IHRvZG8uZ2V0RGF0ZSgpO1xuICAgIHByb2plY3QudmFsdWUgPSB0b2RvLmdldFByb2plY3QoKS5nZXROYW1lKCk7XG59XG5cbndpbmRvdy50b2dnbGVOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLmZvcm0tcHJvamVjdCcpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSByZXR1cm47XG5cbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LnByb2plY3QtbmFtZScpO1xuICAgIGZpZWxkLnZhbHVlID0gJyc7XG4gICAgZmllbGQuZm9jdXMoKTtcbiAgICBlbGVtZW50Lm9uc3VibWl0ID0gZm9ybU1hbmFnZXIuY29uZmlybU5ld1Byb2plY3Q7XG59XG5cbi8vIGNvbnN0IHByb2plY3RPbmUgPSBwcm9qZWN0KCdEZWZhdWx0Jyk7XG4vLyBjb25zdCBwcm9qZWN0VHdvID0gcHJvamVjdCgnTW9uZXlndW4gUnVuJyk7XG5cbi8vIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdE9uZSk7XG4vLyBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RUd28pO1xuXG4vLyBjb25zdCB0YXNrT25lID0gdG9kbygnRG8gY29vbCBzdHVmZicsICdJIHJlYWxseSBuZWVkIHRvIGRvIG1vcmUgY29vbCBzdHVmZi4gSSBoYXZlIG5vdCBkb25lIGNvb2wgc3R1ZmYgaW4gYSB2ZXJ5IGxvbmcgdGltZS4nLCAnMXN0IERlYy4gMjAyMicsIHByb2plY3RPbmUsIGZhbHNlKTtcbi8vIHRvZG9zSG9sZGVyLmFkZFRvZG8odGFza09uZSk7XG4vLyBjb25zdCB0YXNrVHdvID0gdG9kbygnRG8gdGhhdCcsICdUaGF0IHdvdWxkIGRlZmluaXRlbHkgaGVscCcsICcxc3QgRGVjLiAyMDIzJywgcHJvamVjdE9uZSwgZmFsc2UpO1xuLy8gdG9kb3NIb2xkZXIuYWRkVG9kbyh0YXNrVHdvKTtcbi8vIGNvbnN0IHRhc2tUaHJlZSA9IHRvZG8oJ0NsZWFuIGRpc2hlcycsICdJdCBpcyBub3QgdmVyeSBmdW4gYnV0IGl0IG5lZWRzIHRvIGJlIGRvbmUuIHVoLi4uJywgJzI1IEphbnVhcnkgMjAyMycsIHByb2plY3RPbmUsIHRydWUpO1xuLy8gdG9kb3NIb2xkZXIuYWRkVG9kbyh0YXNrVGhyZWUpO1xuLy8gY29uc3QgdGFza0ZvdXIgPSB0b2RvKCdDaGFuZ2UgY2hhcmFjdGVyJywgJ1RoZSBjdXJyZW50IG9uZSBjbGFzaGVzIHRvbyBtdWNoIHdpdGggdGhlIHJlY2VudCBhcnRpc3RpYyBkaXJlY3Rpb24gY2hhbmdlLiBXZSBzaG91bGQgZmluZCBzb21ldGhpbmcgdGhhdCBsb29rcyBtb3JlIGluIHR1bmUgd2l0aCB0aGUgcmVzdC4gKFdlIGNvdWxkIGFkZCBhIHN0eWxpc2ggY2VsbCBzaGFkaW5nID8/KScsICdUb21vcnJvdycsIHByb2plY3RUd28sIGZhbHNlKTtcbi8vIHRvZG9zSG9sZGVyLmFkZFRvZG8odGFza0ZvdXIpO1xuXG4vLyBwcm9qZWN0T25lLmFkZFRvZG8odGFza09uZSk7XG4vLyBwcm9qZWN0T25lLmFkZFRvZG8odGFza1R3byk7XG4vLyBwcm9qZWN0T25lLmFkZFRvZG8odGFza1RocmVlKTtcbi8vIHByb2plY3RUd28uYWRkVG9kbyh0YXNrRm91cik7XG5cbi8vIGRvbU1hbmFnZXIuc2hvd1Byb2plY3QocHJvamVjdE9uZSk7XG4vLyBkb21NYW5hZ2VyLnNob3dQcm9qZWN0KHByb2plY3RUd28pO1xuZG9tTWFuYWdlci5yZW1vdmVDb250ZW50KCk7XG5kb21NYW5hZ2VyLnNob3dBbGwoKTtcblxuXG5zdG9yYWdlTWFuYWdlci5nZW5lcmF0ZU9iamVjdHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=