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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-align: left;\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #374958;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.container {\r\n  font-size: 1.2rem;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.title {\r\n  color: #252525;\r\n  border-bottom: 2px solid #2abd67;\r\n}\r\n\r\n.active {\r\n  background-color: rgba(42, 189, 103, 0.44);\r\n  border-left: 4px solid #2abd67;\r\n}\r\n\r\ni {\r\n  margin: 0 0.2em !important;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n  text-align: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* MAIN */\r\n\r\n.main {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.main-left,\r\n.main-right {\r\n  padding: 0 1em;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.main-right {\r\n  background-color: #ececec;\r\n}\r\n\r\n.main-section-container,\r\n.projects-section-container {\r\n  margin: 1.2em 0;\r\n}\r\n\r\n.projects-section-container {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* NAV BAR */\r\n\r\n.nav-bar {\r\n  display: grid;\r\n  padding-left: 0.4em;\r\n}\r\n\r\n.projects-title,\r\n.main-title,\r\n.project-title {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.home-section,\r\n.projects-section {\r\n  margin: 1em 0;\r\n}\r\n\r\n.tab,\r\n.modal-tab {\r\n  margin: 0.5em;\r\n  padding: 0.3em;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.tab {\r\n  list-style-type: none;\r\n}\r\n\r\n.tab:hover,\r\n.modal-tab:hover {\r\n  background-color: rgba(42, 189, 103, 0.44);\r\n}\r\n\r\n/* TODO ITEMS */\r\n\r\n.project-title {\r\n  text-align: center;\r\n}\r\n\r\n.todo-container {\r\n  display: grid;\r\n  gap: 1.5em;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid #2abd67;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.low {\r\n  border-left: 7px solid green;\r\n}\r\n\r\n.medium {\r\n  border-left: 7px solid orange;\r\n}\r\n\r\n.high {\r\n  border-left: 7px solid red;\r\n}\r\n\r\n.todo-info,\r\n.todo-option {\r\n  margin: 0 0.4em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.todo-option {\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-name {\r\n  margin: 0 0.3em;\r\n}\r\n\r\n.true {\r\n  text-decoration: line-through;\r\n  color: lightgrey;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.active-project-title {\r\n  font-size: 2rem;\r\n  padding: 0.5em;\r\n  background-color: #2abd67;\r\n  text-align: center;\r\n  margin: 1em 0;\r\n  color: whitesmoke;\r\n  border-radius: 7px;\r\n}\r\n\r\n.project-tab {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* BUTTONS */\r\n.btn {\r\n  cursor: pointer;\r\n  background-color: #2abd67;\r\n  box-shadow: 0px 11px 14px -7px #3e7327;\r\n  text-shadow: 0px 1px 0px #5b8a3c;\r\n  font-size: 1.5rem;\r\n  color: whitesmoke;\r\n}\r\n\r\n.add-btn {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #2abd67cb;\r\n}\r\n\r\n.btn:active {\r\n  background-color: #2abd67b6;\r\n}\r\n\r\n.add-project-btn,\r\n.add-todo-btn {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  border: none;\r\n  padding: 0.2em 0.5em;\r\n}\r\n\r\n.fa-regular:hover {\r\n  color: green;\r\n}\r\n\r\n.fa-square-check {\r\n  color: green;\r\n}\r\n\r\n.todo-btn,\r\n.exit-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-option-btns {\r\n  margin: 0.2em 0;\r\n}\r\n\r\n.exit-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: red;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.todo-modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: rgba(37, 37, 37, 0.7);\r\n}\r\n\r\n.modal-inner {\r\n  position: absolute;\r\n  z-index: 9999;\r\n  background-color: whitesmoke;\r\n  max-width: 500px;\r\n  width: 90%;\r\n  padding: 1em;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\ninput,\r\nselect {\r\n  outline-color: #2abd67;\r\n  padding: 0.7em;\r\n  margin-bottom: 0.7em;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media (min-width: 750px) {\r\n  .main {\r\n    grid-template-columns: 4fr 6fr;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .container {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .add-btn {\r\n    font-size: 2rem;\r\n    display: block;\r\n    position: static;\r\n    width: 125px;\r\n    border: none;\r\n    border-radius: 7px;\r\n    margin: 10px auto 0 auto;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-align: left;\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #374958;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.container {\r\n  font-size: 1.2rem;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.title {\r\n  color: #252525;\r\n  border-bottom: 2px solid #2abd67;\r\n}\r\n\r\n.active {\r\n  background-color: rgba(42, 189, 103, 0.44);\r\n  border-left: 4px solid #2abd67;\r\n}\r\n\r\ni {\r\n  margin: 0 0.2em !important;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n  text-align: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* MAIN */\r\n\r\n.main {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.main-left,\r\n.main-right {\r\n  padding: 0 1em;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.main-right {\r\n  background-color: #ececec;\r\n}\r\n\r\n.main-section-container,\r\n.projects-section-container {\r\n  margin: 1.2em 0;\r\n}\r\n\r\n.projects-section-container {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* NAV BAR */\r\n\r\n.nav-bar {\r\n  display: grid;\r\n  padding-left: 0.4em;\r\n}\r\n\r\n.projects-title,\r\n.main-title,\r\n.project-title {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.home-section,\r\n.projects-section {\r\n  margin: 1em 0;\r\n}\r\n\r\n.tab,\r\n.modal-tab {\r\n  margin: 0.5em;\r\n  padding: 0.3em;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.tab {\r\n  list-style-type: none;\r\n}\r\n\r\n.tab:hover,\r\n.modal-tab:hover {\r\n  background-color: rgba(42, 189, 103, 0.44);\r\n}\r\n\r\n/* TODO ITEMS */\r\n\r\n.project-title {\r\n  text-align: center;\r\n}\r\n\r\n.todo-container {\r\n  display: grid;\r\n  gap: 1.5em;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid #2abd67;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.low {\r\n  border-left: 7px solid green;\r\n}\r\n\r\n.medium {\r\n  border-left: 7px solid orange;\r\n}\r\n\r\n.high {\r\n  border-left: 7px solid red;\r\n}\r\n\r\n.todo-info,\r\n.todo-option {\r\n  margin: 0 0.4em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.todo-option {\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-name {\r\n  margin: 0 0.3em;\r\n}\r\n\r\n.true {\r\n  text-decoration: line-through;\r\n  color: lightgrey;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.active-project-title {\r\n  font-size: 2rem;\r\n  padding: 0.5em;\r\n  background-color: #2abd67;\r\n  text-align: center;\r\n  margin: 1em 0;\r\n  color: whitesmoke;\r\n  border-radius: 7px;\r\n}\r\n\r\n.project-tab {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* BUTTONS */\r\n.btn {\r\n  cursor: pointer;\r\n  background-color: #2abd67;\r\n  box-shadow: 0px 11px 14px -7px #3e7327;\r\n  text-shadow: 0px 1px 0px #5b8a3c;\r\n  font-size: 1.5rem;\r\n  color: whitesmoke;\r\n}\r\n\r\n.add-btn {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #2abd67cb;\r\n}\r\n\r\n.btn:active {\r\n  background-color: #2abd67b6;\r\n}\r\n\r\n.add-project-btn,\r\n.add-todo-btn {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  border: none;\r\n  padding: 0.2em 0.5em;\r\n}\r\n\r\n.fa-regular:hover {\r\n  color: green;\r\n}\r\n\r\n.fa-square-check {\r\n  color: green;\r\n}\r\n\r\n.todo-btn,\r\n.exit-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-option-btns {\r\n  margin: 0.2em 0;\r\n}\r\n\r\n.exit-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: red;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.todo-modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: rgba(37, 37, 37, 0.7);\r\n}\r\n\r\n.modal-inner {\r\n  position: absolute;\r\n  z-index: 9999;\r\n  background-color: whitesmoke;\r\n  max-width: 500px;\r\n  width: 90%;\r\n  padding: 1em;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\ninput,\r\nselect {\r\n  outline-color: #2abd67;\r\n  padding: 0.7em;\r\n  margin-bottom: 0.7em;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media (min-width: 750px) {\r\n  .main {\r\n    grid-template-columns: 4fr 6fr;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .container {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .add-btn {\r\n    font-size: 2rem;\r\n    display: block;\r\n    position: static;\r\n    width: 125px;\r\n    border: none;\r\n    border-radius: 7px;\r\n    margin: 10px auto 0 auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventListeners": () => (/* binding */ eventListeners)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");



const eventListeners = (function () {
  const formsContainer = document.querySelectorAll("form");
  const exitBtn = document.getElementById("exitBtn");
  const todoTab = document.querySelector("[data-todo-tab]");
  const projectTab = document.querySelector("[data-project-tab]");
  const formTodoContainer = document.getElementById("formTodoContainer");
  const formProjectContainer = document.getElementById("formProjectContainer");
  const projectsSectionContainer = document.getElementById(
    "projectsSectionContainer"
  );
  const navModalTab = document.querySelectorAll(".modal-tab");

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("add-btn") ||
      e.target.classList.contains("exit-btn")
    ) {
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.toggleModalVisibility();
    }

    if (e.target.classList.contains("checkbox")) {
      const todoTab = e.target.parentElement.parentElement.parentElement;

      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.changeIsDoneStatus(todoTab);
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.renderTodos();
    }

    if (e.target.classList.contains("tab")) {
      const tabs = document.querySelectorAll(".tab");

      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.switchActiveStatus(e.target, tabs);
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.renderTodos();
    }

    if (e.target === todoTab) {
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.renderModal(formTodoContainer);
    }

    if (e.target === projectTab) {
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.renderModal(formProjectContainer);
    }

    if (e.target === exitBtn) {
      const todoModal = document.querySelector(".todo-modal");
      todoModal.classList.add("hidden");
    }

    if (e.target.classList.contains("delete-project-btn")) {
      const tabs = document.querySelectorAll(".tab");
      const mainContainer = document.getElementById("mainSectionContainer");
      const projectItem = e.target.parentElement.parentElement;

      if (projectItem.classList.contains("active")) {
        _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.switchActiveStatus(mainContainer.firstChild, tabs);
      }

      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.deleteProjectItem(projectItem);
    }

    if (e.target.classList.contains("delete-todo-btn")) {
      const todoItem =
        e.target.parentElement.parentElement.parentElement.parentElement;

      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.deleteTodoItem(todoItem);
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.renderTodos();
    }
  });

  formsContainer.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.submitter.classList.contains("add-project-btn")) {
        const tabs = document.querySelectorAll(".tab");

        _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.renderProject();
        _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.switchActiveStatus(
          projectsSectionContainer.lastChild,
          tabs
        );
      }
      if (e.submitter.classList.contains("add-todo-btn")) {
        _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.addTodoItem();
      }

      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.renderTodos();
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.toggleModalVisibility();
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.clearInputs();
    });
  });

  navModalTab.forEach((child) => {
    child.addEventListener("click", () =>
      _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.switchActiveStatus(child, navModalTab)
    );
  });
})();


/***/ }),

/***/ "./src/modules/pageInitialize.js":
/*!***************************************!*\
  !*** ./src/modules/pageInitialize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageInitializer": () => (/* binding */ pageInitializer)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/modules/events.js");



const pageInitializer = (function () {
  const formProjectContainer = document.getElementById("formProjectContainer");
  const projects = _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.projects;

  projects.addProject("Home");
  projects.addProject("Today");
  projects.addProject("Week");
  projects.addProject("Gym");
  projects.addProject("Book");

  const renderSampleHome = () => {
    const mainSection = document.getElementById("mainSectionContainer");

    projects.getProjects().forEach((project) => {
      if (
        project.title === "Home" ||
        project.title === "Today" ||
        project.title === "Week"
      ) {
        const li = document.createElement("li");
        li.classList.add("main-tab", "tab");
        li.setAttribute("data-id", project.getId());
        li.textContent = project.title;
        mainSection.appendChild(li);
      }
    });

    const mainTab = document.querySelector(".main-tab");
    const tabs = document.querySelectorAll(".tab");
    _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.switchActiveStatus(mainTab, tabs);
  };

  const renderSampleProjects = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    projects.getProjects().forEach((project) => {
      if (project.title === "Gym" || project.title === "Book") {
        const li = document.createElement("li");
        li.classList.add("project-tab", "tab");
        li.setAttribute("data-id", project.getId());
        li.textContent = project.title;

        const button = document.createElement("button");
        button.classList.add("todo-btn", "delete-project-btn");

        const i = document.createElement("i");
        i.classList.add("fa-regular", "fa-trash-can", "delete-project-btn");

        button.appendChild(i);
        li.appendChild(button);
        projectsSection.appendChild(li);
      }
    });
  };

  const initializePage = () => {
    renderSampleHome();
    renderSampleProjects();
    _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.renderModal(formProjectContainer);
  };

  return { initializePage };
})();


/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsContainer)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");


function projectsContainer() {
  let projects = [];

  function addProject(title) {
    const project = new _todoList__WEBPACK_IMPORTED_MODULE_0__["default"](title);
    projects.push(project);
    return project;
  }

  function deleteProject(target) {
    projects = projects.filter(
      (projectItem) => projectItem.getId() !== target.dataset.id
    );
  }

  function getProjects() {
    return projects;
  }

  function getSelectedProject(id) {
    return projects.find((project) => project.getId() === id);
  }

  return { getProjects, addProject, deleteProject, getSelectedProject };
}


/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var uuid4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid4 */ "./node_modules/uuid4/browser.mjs");


const createTodo = (
  title,
  notes,
  priority,
  isComplete = false,
  dueDate
) => {
  const id = (0,uuid4__WEBPACK_IMPORTED_MODULE_0__["default"])();

  let todo = {
    title,
    dueDate,
    notes,
    priority,
    isComplete,
  };

  return {
    ...todo,
    getId: () => id,
    getIcon: () => (isComplete ? "fa-square-check" : "fa-square"),
    changeIsComplete: () => {
      todo = {
        ...todo,
        isComplete: !todo.isComplete,
      };
    },
    getIsComplete: () => todo.isComplete,
  };
};


/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var uuid4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid4 */ "./node_modules/uuid4/browser.mjs");


function createProject(title) {
  const id = (0,uuid4__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let todos = [];

  function add(todo) {
    todos.push(todo);
  }

  function deleteTodo(todo) {
    todos = todos.filter((toDoItem) => toDoItem.getId() !== todo.dataset.id);
  }

  function getTodos() {
    return [...todos];
  }

  function getId() {
    return id;
  }

  return { title, add, deleteTodo, getTodos, getId };
}


/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiController": () => (/* binding */ uiController)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");




const uiController = (function () {
  const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const updateSelectedProjectTitle = () => {
    const activeTab = document.querySelector(".active");
    let activeProjectTitle = document.getElementById("activeProjectTitle");

    activeProjectTitle.textContent = activeTab.textContent;
  };

  const toggleModalVisibility = () => {
    const openAddModal = document.getElementById("todoModal");

    openAddModal.classList.toggle("hidden");
  };

  const renderTodos = () => {
    const activeTab = document.querySelector(".active");
    const todoContainer = document.getElementById("todoContainer");
    todoContainer.innerHTML = "";

    const selectedProject = projects.getSelectedProject(activeTab.dataset.id);
    if (!selectedProject) return;

    const todos = selectedProject.getTodos();
    if (todos.length === 0) return;

    let todoContainerHTML = "";

    todos.forEach(
      (todo) =>
        (todoContainerHTML += ` 
          <div class="todo-item ${todo.priority.toLowerCase()} ${todo.getIsComplete()}" data-id="${todo.getId()}">
            <div class="todo-info">
                <button class="todo-btn checkbox-btn">
                  <i class="fa-regular ${todo.getIcon()} checkbox"></i>
                </button>
                <p class="todo-name">${todo.title}</p>
                </div>
                <div class="todo-option">
                <p class="todo-date">${todo.dueDate}</p>
                <div class="todo-option-btns">
                <button class="todo-btn edit-btn">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="todo-btn btn-details">
                <i class="fa-regular fa-circle-question"></i>
                </button>
                <button class="todo-btn delete-todo-btn">
                  <i class="fa-regular fa-trash-can delete-todo-btn"></i>
                </button>
                </div>
                </div>
              </div>
              `)
    );

    todoContainer.innerHTML = todoContainerHTML;
  };

  const switchActiveStatus = (target, tabs) => {
    if (target.classList.contains("active")) return;

    tabs.forEach((tab) => tab.classList.remove("active"));

    target.classList.add("active");

    updateSelectedProjectTitle();
  };

  const createProjectItem = () => {
    const projectTitle = document.getElementById("projectTitle").value;

    return projects.addProject(projectTitle);
  };

  const renderProject = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");
    const projectItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const trashIcon = document.createElement("i");
    const newProject = createProjectItem();

    projectItem.classList.add("project-tab");
    projectItem.classList.add("tab");
    deleteBtn.classList.add("todo-btn");
    deleteBtn.classList.add("delete-project-btn");
    trashIcon.classList.add("fa-regular");
    trashIcon.classList.add("fa-trash-can");
    trashIcon.classList.add("delete-project-btn");
    projectItem.dataset.id = newProject.getId();
    projectItem.textContent = newProject.title;

    deleteBtn.appendChild(trashIcon);
    projectItem.appendChild(deleteBtn);
    projectsSection.appendChild(projectItem);
  };

  const createTodoItem = () => {
    const todoTitle = document.getElementById("todoTitle").value;
    const todoNotes = document.getElementById("todoNote").value;
    const todoDueDate = document.getElementById("todoDueDate").value;
    const todoPriority = document.getElementById("todoPriority").value;

    const newTodoItem = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
      todoTitle,
      todoNotes,
      todoPriority,
      false,
      todoDueDate
    );

    return newTodoItem;
  };

  const changeIsDoneStatus = (target) => {
    const activeTab = document.querySelector(".active");

    const selectedProject = projects.getSelectedProject(activeTab.dataset.id);

    const targetTodo = selectedProject
      .getTodos()
      .find((todo) => todo.getId() === target.dataset.id);

    targetTodo.changeIsComplete();
  };

  const addTodoItem = () => {
    const activeTab = document.querySelector(".active");
    const allProjects = projects.getProjects();
    const newTodo = createTodoItem();

    allProjects.forEach((project) => {
      if (project.getId() === activeTab.dataset.id || project.title === "Home")
        project.add(newTodo);
    });
  };

  const deleteTodoItem = (todoTarget) => {
    const allProjects = projects.getProjects();

    allProjects.forEach((project) => {
      project.deleteTodo(todoTarget);
    });
  };

  const deleteProjectItem = (projectTarget) => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    projects.deleteProject(projectTarget);

    projectsSection.removeChild(projectTarget);
  };

  const renderModal = (target) => {
    const formContainers = document.querySelectorAll("form");

    formContainers.forEach((container) => container.classList.add("hidden"));

    target.classList.remove("hidden");
  };

  const clearInputs = () => {
    const allInputs = document.querySelectorAll("input");

    allInputs.forEach((input) => (input.value = ""));
  };

  return {
    toggleModalVisibility,
    renderProject,
    deleteTodoItem,
    addTodoItem,
    clearInputs,
    renderModal,
    renderTodos,
    switchActiveStatus,
    deleteProjectItem,
    changeIsDoneStatus,
    projects,
  };
})();


/***/ }),

/***/ "./node_modules/uuid4/browser.mjs":
/*!****************************************!*\
  !*** ./node_modules/uuid4/browser.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "uuid4": () => (/* binding */ uuid4),
/* harmony export */   "valid": () => (/* binding */ valid)
/* harmony export */ });
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function valid(uuid) {
  return uuidPattern.test(uuid);
}

// Based on https://abhishekdutta.org/blog/standalone_uuid_generator_in_javascript.html
// IE11 and Modern Browsers Only
function uuid4() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.split(/[:\/]/g).pop().toLowerCase(); // remove prefixes
}
uuid4.valid = valid;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uuid4);



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
/* harmony import */ var _modules_pageInitialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageInitialize */ "./src/modules/pageInitialize.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



document.addEventListener("DOMContentLoaded", _modules_pageInitialize__WEBPACK_IMPORTED_MODULE_0__.pageInitializer.initializePage());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxRQUFRLFVBQVUsTUFBTSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUss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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyRDtBQUN0QztBQUNyQjtBQUNBLDhDQUE4QyxtRkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VJbml0aWFsaXplLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQ0L2Jyb3dzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzM3NDk1ODtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxudmlkZW8sXFxyXFxuY2FudmFzLFxcclxcbnN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5wLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBjb2xvcjogIzI1MjUyNTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmFiZDY3O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDE4OSwgMTAzLCAwLjQ0KTtcXHJcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzJhYmQ2NztcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBtYXJnaW46IDAgMC4yZW0gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbGVmdCxcXHJcXG4ubWFpbi1yaWdodCB7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1yaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zZWN0aW9uLWNvbnRhaW5lcixcXHJcXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxLjJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWIEJBUiAqL1xcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtdGl0bGUsXFxyXFxuLm1haW4tdGl0bGUsXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXNlY3Rpb24sXFxyXFxuLnByb2plY3RzLXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luOiAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYixcXHJcXG4ubW9kYWwtdGFiIHtcXHJcXG4gIG1hcmdpbjogMC41ZW07XFxyXFxuICBwYWRkaW5nOiAwLjNlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYiB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWI6aG92ZXIsXFxyXFxuLm1vZGFsLXRhYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxODksIDEwMywgMC40NCk7XFxyXFxufVxcclxcblxcclxcbi8qIFRPRE8gSVRFTVMgKi9cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJhYmQ2NztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0ge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5oaWdoIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pbmZvLFxcclxcbi50b2RvLW9wdGlvbiB7XFxyXFxuICBtYXJnaW46IDAgMC40ZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1vcHRpb24ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZSB7XFxyXFxuICBtYXJnaW46IDAgMC4zZW07XFxyXFxufVxcclxcblxcclxcbi50cnVlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJPSkVDVCAqL1xcclxcblxcclxcbi5hY3RpdmUtcHJvamVjdC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFlbSAwO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhYiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQlVUVE9OUyAqL1xcclxcbi5idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE0cHggLTdweCAjM2U3MzI3O1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICM1YjhhM2M7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIGJvdHRvbTogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjdjYjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2N2I2O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnRuLFxcclxcbi5hZGQtdG9kby1idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXJlZ3VsYXI6aG92ZXIge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtc3F1YXJlLWNoZWNrIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYnRuLFxcclxcbi5leGl0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tb3B0aW9uLWJ0bnMge1xcclxcbiAgbWFyZ2luOiAwLjJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhpdC1idG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNT0RBTCAqL1xcclxcblxcclxcbi50b2RvLW1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWlubmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnNlbGVjdCB7XFxyXFxuICBvdXRsaW5lLWNvbG9yOiAjMmFiZDY3O1xcclxcbiAgcGFkZGluZzogMC43ZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRURJQSBRVUVSSUVTICovXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDZmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB3aWR0aDogMTI1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGNBQWM7QUFDaEI7O0FBRUE7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSwwQ0FBMEM7QUFDNUM7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQzs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0VBQzFCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMzc0OTU4O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGNvbG9yOiAjMjUyNTI1O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyYWJkNjc7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgMTg5LCAxMDMsIDAuNDQpO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMmFiZDY3O1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gIG1hcmdpbjogMCAwLjJlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNQUlOICovXFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1sZWZ0LFxcclxcbi5tYWluLXJpZ2h0IHtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXJpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXNlY3Rpb24tY29udGFpbmVyLFxcclxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDEuMmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOQVYgQkFSICovXFxyXFxuXFxyXFxuLm5hdi1iYXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy10aXRsZSxcXHJcXG4ubWFpbi10aXRsZSxcXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtc2VjdGlvbixcXHJcXG4ucHJvamVjdHMtc2VjdGlvbiB7XFxyXFxuICBtYXJnaW46IDFlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLFxcclxcbi5tb2RhbC10YWIge1xcclxcbiAgbWFyZ2luOiAwLjVlbTtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYjpob3ZlcixcXHJcXG4ubW9kYWwtdGFiOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDE4OSwgMTAzLCAwLjQ0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVE9ETyBJVEVNUyAqL1xcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmFiZDY3O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5sb3cge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bSB7XFxyXFxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2gge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWluZm8sXFxyXFxuLnRvZG8tb3B0aW9uIHtcXHJcXG4gIG1hcmdpbjogMCAwLjRlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLW9wdGlvbiB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1uYW1lIHtcXHJcXG4gIG1hcmdpbjogMCAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRydWUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogbGlnaHRncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KRUNUICovXFxyXFxuXFxyXFxuLmFjdGl2ZS1wcm9qZWN0LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMWVtIDA7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFiIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCVVRUT05TICovXFxyXFxuLmJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTRweCAtN3B4ICMzZTczMjc7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzViOGEzYztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgYm90dG9tOiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2N2NiO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3YjY7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idG4sXFxyXFxuLmFkZC10b2RvLWJ0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtcmVndWxhcjpob3ZlciB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5mYS1zcXVhcmUtY2hlY2sge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1idG4sXFxyXFxuLmV4aXQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1vcHRpb24tYnRucyB7XFxyXFxuICBtYXJnaW46IDAuMmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5leGl0LWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIE1PREFMICovXFxyXFxuXFxyXFxuLnRvZG8tbW9kYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaW5uZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIG91dGxpbmUtY29sb3I6ICMyYWJkNjc7XFxyXFxuICBwYWRkaW5nOiAwLjdlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuN2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgNmZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIHdpZHRoOiAxMjVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdWlDb250cm9sbGVyIH0gZnJvbSBcIi4vdWlcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudExpc3RlbmVycyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZm9ybXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybVwiKTtcclxuICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGl0QnRuXCIpO1xyXG4gIGNvbnN0IHRvZG9UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby10YWJdXCIpO1xyXG4gIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC10YWJdXCIpO1xyXG4gIGNvbnN0IGZvcm1Ub2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtVG9kb0NvbnRhaW5lclwiKTtcclxuICBjb25zdCBmb3JtUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVByb2plY3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgcHJvamVjdHNTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInByb2plY3RzU2VjdGlvbkNvbnRhaW5lclwiXHJcbiAgKTtcclxuICBjb25zdCBuYXZNb2RhbFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtdGFiXCIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLWJ0blwiKSB8fFxyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJleGl0LWJ0blwiKVxyXG4gICAgKSB7XHJcbiAgICAgIHVpQ29udHJvbGxlci50b2dnbGVNb2RhbFZpc2liaWxpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tib3hcIikpIHtcclxuICAgICAgY29uc3QgdG9kb1RhYiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgdWlDb250cm9sbGVyLmNoYW5nZUlzRG9uZVN0YXR1cyh0b2RvVGFiKTtcclxuICAgICAgdWlDb250cm9sbGVyLnJlbmRlclRvZG9zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhYlwiKSkge1xyXG4gICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIik7XHJcblxyXG4gICAgICB1aUNvbnRyb2xsZXIuc3dpdGNoQWN0aXZlU3RhdHVzKGUudGFyZ2V0LCB0YWJzKTtcclxuICAgICAgdWlDb250cm9sbGVyLnJlbmRlclRvZG9zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0ID09PSB0b2RvVGFiKSB7XHJcbiAgICAgIHVpQ29udHJvbGxlci5yZW5kZXJNb2RhbChmb3JtVG9kb0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0ID09PSBwcm9qZWN0VGFiKSB7XHJcbiAgICAgIHVpQ29udHJvbGxlci5yZW5kZXJNb2RhbChmb3JtUHJvamVjdENvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0ID09PSBleGl0QnRuKSB7XHJcbiAgICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1tb2RhbFwiKTtcclxuICAgICAgdG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKSkge1xyXG4gICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIik7XHJcbiAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5TZWN0aW9uQ29udGFpbmVyXCIpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChwcm9qZWN0SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICB1aUNvbnRyb2xsZXIuc3dpdGNoQWN0aXZlU3RhdHVzKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCwgdGFicyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVpQ29udHJvbGxlci5kZWxldGVQcm9qZWN0SXRlbShwcm9qZWN0SXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS10b2RvLWJ0blwiKSkge1xyXG4gICAgICBjb25zdCB0b2RvSXRlbSA9XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgIHVpQ29udHJvbGxlci5kZWxldGVUb2RvSXRlbSh0b2RvSXRlbSk7XHJcbiAgICAgIHVpQ29udHJvbGxlci5yZW5kZXJUb2RvcygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3Jtc0NvbnRhaW5lci5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoZS5zdWJtaXR0ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYnRuXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpO1xyXG5cclxuICAgICAgICB1aUNvbnRyb2xsZXIucmVuZGVyUHJvamVjdCgpO1xyXG4gICAgICAgIHVpQ29udHJvbGxlci5zd2l0Y2hBY3RpdmVTdGF0dXMoXHJcbiAgICAgICAgICBwcm9qZWN0c1NlY3Rpb25Db250YWluZXIubGFzdENoaWxkLFxyXG4gICAgICAgICAgdGFic1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUuc3VibWl0dGVyLmNsYXNzTGlzdC5jb250YWlucyhcImFkZC10b2RvLWJ0blwiKSkge1xyXG4gICAgICAgIHVpQ29udHJvbGxlci5hZGRUb2RvSXRlbSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1aUNvbnRyb2xsZXIucmVuZGVyVG9kb3MoKTtcclxuICAgICAgdWlDb250cm9sbGVyLnRvZ2dsZU1vZGFsVmlzaWJpbGl0eSgpO1xyXG4gICAgICB1aUNvbnRyb2xsZXIuY2xlYXJJbnB1dHMoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBuYXZNb2RhbFRhYi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHVpQ29udHJvbGxlci5zd2l0Y2hBY3RpdmVTdGF0dXMoY2hpbGQsIG5hdk1vZGFsVGFiKVxyXG4gICAgKTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiaW1wb3J0IHsgdWlDb250cm9sbGVyIH0gZnJvbSBcIi4vdWlcIjtcclxuaW1wb3J0IHsgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlSW5pdGlhbGl6ZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGZvcm1Qcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtUHJvamVjdENvbnRhaW5lclwiKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IHVpQ29udHJvbGxlci5wcm9qZWN0cztcclxuXHJcbiAgcHJvamVjdHMuYWRkUHJvamVjdChcIkhvbWVcIik7XHJcbiAgcHJvamVjdHMuYWRkUHJvamVjdChcIlRvZGF5XCIpO1xyXG4gIHByb2plY3RzLmFkZFByb2plY3QoXCJXZWVrXCIpO1xyXG4gIHByb2plY3RzLmFkZFByb2plY3QoXCJHeW1cIik7XHJcbiAgcHJvamVjdHMuYWRkUHJvamVjdChcIkJvb2tcIik7XHJcblxyXG4gIGNvbnN0IHJlbmRlclNhbXBsZUhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblNlY3Rpb25Db250YWluZXJcIik7XHJcblxyXG4gICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwcm9qZWN0LnRpdGxlID09PSBcIkhvbWVcIiB8fFxyXG4gICAgICAgIHByb2plY3QudGl0bGUgPT09IFwiVG9kYXlcIiB8fFxyXG4gICAgICAgIHByb2plY3QudGl0bGUgPT09IFwiV2Vla1wiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRhYlwiLCBcInRhYlwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHByb2plY3QuZ2V0SWQoKSk7XHJcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWFpblRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10YWJcIik7XHJcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIik7XHJcbiAgICB1aUNvbnRyb2xsZXIuc3dpdGNoQWN0aXZlU3RhdHVzKG1haW5UYWIsIHRhYnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNhbXBsZVByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1NlY3Rpb25Db250YWluZXJcIik7XHJcblxyXG4gICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBcIkd5bVwiIHx8IHByb2plY3QudGl0bGUgPT09IFwiQm9va1wiKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFiXCIsIFwidGFiXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgcHJvamVjdC5nZXRJZCgpKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ0blwiLCBcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIGkuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIiwgXCJmYS10cmFzaC1jYW5cIiwgXCJkZWxldGUtcHJvamVjdC1idG5cIik7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmVuZGVyU2FtcGxlSG9tZSgpO1xyXG4gICAgcmVuZGVyU2FtcGxlUHJvamVjdHMoKTtcclxuICAgIHVpQ29udHJvbGxlci5yZW5kZXJNb2RhbChmb3JtUHJvamVjdENvbnRhaW5lcik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgaW5pdGlhbGl6ZVBhZ2UgfTtcclxufSkoKTtcclxuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzQ29udGFpbmVyKCkge1xyXG4gIGxldCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3QodGl0bGUpO1xyXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIHJldHVybiBwcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCh0YXJnZXQpIHtcclxuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKFxyXG4gICAgICAocHJvamVjdEl0ZW0pID0+IHByb2plY3RJdGVtLmdldElkKCkgIT09IHRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3QoaWQpIHtcclxuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldElkKCkgPT09IGlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldFByb2plY3RzLCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBnZXRTZWxlY3RlZFByb2plY3QgfTtcclxufVxyXG4iLCJpbXBvcnQgdXVpZDQgZnJvbSBcInV1aWQ0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVG9kbyA9IChcclxuICB0aXRsZSxcclxuICBub3RlcyxcclxuICBwcmlvcml0eSxcclxuICBpc0NvbXBsZXRlID0gZmFsc2UsXHJcbiAgZHVlRGF0ZVxyXG4pID0+IHtcclxuICBjb25zdCBpZCA9IHV1aWQ0KCk7XHJcblxyXG4gIGxldCB0b2RvID0ge1xyXG4gICAgdGl0bGUsXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgbm90ZXMsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIGlzQ29tcGxldGUsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnRvZG8sXHJcbiAgICBnZXRJZDogKCkgPT4gaWQsXHJcbiAgICBnZXRJY29uOiAoKSA9PiAoaXNDb21wbGV0ZSA/IFwiZmEtc3F1YXJlLWNoZWNrXCIgOiBcImZhLXNxdWFyZVwiKSxcclxuICAgIGNoYW5nZUlzQ29tcGxldGU6ICgpID0+IHtcclxuICAgICAgdG9kbyA9IHtcclxuICAgICAgICAuLi50b2RvLFxyXG4gICAgICAgIGlzQ29tcGxldGU6ICF0b2RvLmlzQ29tcGxldGUsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZ2V0SXNDb21wbGV0ZTogKCkgPT4gdG9kby5pc0NvbXBsZXRlLFxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB1dWlkNCBmcm9tIFwidXVpZDRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpIHtcclxuICBjb25zdCBpZCA9IHV1aWQ0KCk7XHJcbiAgbGV0IHRvZG9zID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIGFkZCh0b2RvKSB7XHJcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvKSB7XHJcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigodG9Eb0l0ZW0pID0+IHRvRG9JdGVtLmdldElkKCkgIT09IHRvZG8uZGF0YXNldC5pZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRUb2RvcygpIHtcclxuICAgIHJldHVybiBbLi4udG9kb3NdO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0SWQoKSB7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB0aXRsZSwgYWRkLCBkZWxldGVUb2RvLCBnZXRUb2RvcywgZ2V0SWQgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xyXG5pbXBvcnQgcHJvamVjdHNDb250YWluZXIgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1aUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gcHJvamVjdHNDb250YWluZXIoKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICAgIGxldCBhY3RpdmVQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZVByb2plY3RUaXRsZVwiKTtcclxuXHJcbiAgICBhY3RpdmVQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhY3RpdmVUYWIudGV4dENvbnRlbnQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTW9kYWxWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb3BlbkFkZE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvTW9kYWxcIik7XHJcblxyXG4gICAgb3BlbkFkZE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVG9kb3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Db250YWluZXJcIik7XHJcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZ2V0U2VsZWN0ZWRQcm9qZWN0KGFjdGl2ZVRhYi5kYXRhc2V0LmlkKTtcclxuICAgIGlmICghc2VsZWN0ZWRQcm9qZWN0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdG9kb3MgPSBzZWxlY3RlZFByb2plY3QuZ2V0VG9kb3MoKTtcclxuICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgdG9kb0NvbnRhaW5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIHRvZG9zLmZvckVhY2goXHJcbiAgICAgICh0b2RvKSA9PlxyXG4gICAgICAgICh0b2RvQ29udGFpbmVySFRNTCArPSBgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8taXRlbSAke3RvZG8ucHJpb3JpdHkudG9Mb3dlckNhc2UoKX0gJHt0b2RvLmdldElzQ29tcGxldGUoKX1cIiBkYXRhLWlkPVwiJHt0b2RvLmdldElkKCl9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2RvLWJ0biBjaGVja2JveC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyICR7dG9kby5nZXRJY29uKCl9IGNoZWNrYm94XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRvZG8tbmFtZVwiPiR7dG9kby50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLW9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b2RvLWRhdGVcIj4ke3RvZG8uZHVlRGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1vcHRpb24tYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZG8tYnRuIGVkaXQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9kby1idG4gYnRuLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUtcXVlc3Rpb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2RvLWJ0biBkZWxldGUtdG9kby1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXRyYXNoLWNhbiBkZWxldGUtdG9kby1idG5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgYClcclxuICAgICk7XHJcblxyXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSB0b2RvQ29udGFpbmVySFRNTDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzd2l0Y2hBY3RpdmVTdGF0dXMgPSAodGFyZ2V0LCB0YWJzKSA9PiB7XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG5cclxuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcblxyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0VGl0bGUoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVQcm9qZWN0SXRlbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNTZWN0aW9uQ29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdEl0ZW0oKTtcclxuXHJcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YWJcIik7XHJcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ0blwiKTtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xyXG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIpO1xyXG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS10cmFzaC1jYW5cIik7XHJcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcclxuICAgIHByb2plY3RJdGVtLmRhdGFzZXQuaWQgPSBuZXdQcm9qZWN0LmdldElkKCk7XHJcbiAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QudGl0bGU7XHJcblxyXG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XHJcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gICAgcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVUb2RvSXRlbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1RpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdG9kb05vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvTm90ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRHVlRGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1ByaW9yaXR5XCIpLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IG5ld1RvZG9JdGVtID0gY3JlYXRlVG9kbyhcclxuICAgICAgdG9kb1RpdGxlLFxyXG4gICAgICB0b2RvTm90ZXMsXHJcbiAgICAgIHRvZG9Qcmlvcml0eSxcclxuICAgICAgZmFsc2UsXHJcbiAgICAgIHRvZG9EdWVEYXRlXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBuZXdUb2RvSXRlbTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VJc0RvbmVTdGF0dXMgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5nZXRTZWxlY3RlZFByb2plY3QoYWN0aXZlVGFiLmRhdGFzZXQuaWQpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldFRvZG8gPSBzZWxlY3RlZFByb2plY3RcclxuICAgICAgLmdldFRvZG9zKClcclxuICAgICAgLmZpbmQoKHRvZG8pID0+IHRvZG8uZ2V0SWQoKSA9PT0gdGFyZ2V0LmRhdGFzZXQuaWQpO1xyXG5cclxuICAgIHRhcmdldFRvZG8uY2hhbmdlSXNDb21wbGV0ZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvZG9JdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RzLmdldFByb2plY3RzKCk7XHJcbiAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kb0l0ZW0oKTtcclxuXHJcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmIChwcm9qZWN0LmdldElkKCkgPT09IGFjdGl2ZVRhYi5kYXRhc2V0LmlkIHx8IHByb2plY3QudGl0bGUgPT09IFwiSG9tZVwiKVxyXG4gICAgICAgIHByb2plY3QuYWRkKG5ld1RvZG8pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlVG9kb0l0ZW0gPSAodG9kb1RhcmdldCkgPT4ge1xyXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xyXG5cclxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHRvZG9UYXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdEl0ZW0gPSAocHJvamVjdFRhcmdldCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1NlY3Rpb25Db250YWluZXJcIik7XHJcblxyXG4gICAgcHJvamVjdHMuZGVsZXRlUHJvamVjdChwcm9qZWN0VGFyZ2V0KTtcclxuXHJcbiAgICBwcm9qZWN0c1NlY3Rpb24ucmVtb3ZlQ2hpbGQocHJvamVjdFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTW9kYWwgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtXCIpO1xyXG5cclxuICAgIGZvcm1Db250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lcikgPT4gY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIikpO1xyXG5cclxuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFySW5wdXRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xyXG5cclxuICAgIGFsbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gKGlucHV0LnZhbHVlID0gXCJcIikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b2dnbGVNb2RhbFZpc2liaWxpdHksXHJcbiAgICByZW5kZXJQcm9qZWN0LFxyXG4gICAgZGVsZXRlVG9kb0l0ZW0sXHJcbiAgICBhZGRUb2RvSXRlbSxcclxuICAgIGNsZWFySW5wdXRzLFxyXG4gICAgcmVuZGVyTW9kYWwsXHJcbiAgICByZW5kZXJUb2RvcyxcclxuICAgIHN3aXRjaEFjdGl2ZVN0YXR1cyxcclxuICAgIGRlbGV0ZVByb2plY3RJdGVtLFxyXG4gICAgY2hhbmdlSXNEb25lU3RhdHVzLFxyXG4gICAgcHJvamVjdHMsXHJcbiAgfTtcclxufSkoKTtcclxuIiwiY29uc3QgdXVpZFBhdHRlcm4gPSAvXlswLTlhLWZdezh9LVswLTlhLWZdezR9LTRbMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn0kL2k7XG5mdW5jdGlvbiB2YWxpZCh1dWlkKSB7XG4gIHJldHVybiB1dWlkUGF0dGVybi50ZXN0KHV1aWQpO1xufVxuXG4vLyBCYXNlZCBvbiBodHRwczovL2FiaGlzaGVrZHV0dGEub3JnL2Jsb2cvc3RhbmRhbG9uZV91dWlkX2dlbmVyYXRvcl9pbl9qYXZhc2NyaXB0Lmh0bWxcbi8vIElFMTEgYW5kIE1vZGVybiBCcm93c2VycyBPbmx5XG5mdW5jdGlvbiB1dWlkNCgpIHtcbiAgdmFyIHRlbXBfdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYigpKTtcbiAgdmFyIHV1aWQgPSB0ZW1wX3VybC50b1N0cmluZygpO1xuICBVUkwucmV2b2tlT2JqZWN0VVJMKHRlbXBfdXJsKTtcbiAgcmV0dXJuIHV1aWQuc3BsaXQoL1s6XFwvXS9nKS5wb3AoKS50b0xvd2VyQ2FzZSgpOyAvLyByZW1vdmUgcHJlZml4ZXNcbn1cbnV1aWQ0LnZhbGlkID0gdmFsaWQ7XG5cbmV4cG9ydCBkZWZhdWx0IHV1aWQ0O1xuZXhwb3J0IHsgdXVpZDQsIHZhbGlkIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBwYWdlSW5pdGlhbGl6ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VJbml0aWFsaXplXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBwYWdlSW5pdGlhbGl6ZXIuaW5pdGlhbGl6ZVBhZ2UoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==