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
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\n/*\r\n  3. Allow percentage-based heights in the application\r\n*/\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n/*\r\n  Typographic tweaks!\r\n  4. Add accessible line-height\r\n  5. Improve text rendering\r\n*/\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n  6. Improve media defaults\r\n*/\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n  7. Remove built-in form typography styles\r\n*/\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n  8. Avoid text overflows\r\n*/\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\nbody {\r\n  text-align: left;\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #374958;\r\n}\r\n\r\n/* MAIN LAYOUT */\r\n\r\n.container {\r\n  font-size: 1.2rem;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.title {\r\n  color: #252525;\r\n  border-bottom: 2px solid #2abd67;\r\n}\r\n\r\n.active {\r\n  background-color: #2abd6770;\r\n  border-left: 4px solid #2abd67;\r\n}\r\n\r\ni {\r\n  margin: 0 0.2em !important;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n  text-align: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* MAIN */\r\n\r\n.main {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.main-left,\r\n.main-right {\r\n  padding: 0 1em;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.main-right {\r\n  background-color: #ececec;\r\n}\r\n\r\n.main-section-container,\r\n.projects-section-container {\r\n  margin: 1.2em 0;\r\n}\r\n\r\n.projects-section-container {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* NAV BAR */\r\n\r\n.nav-bar {\r\n  display: grid;\r\n  padding-left: 0.4em;\r\n}\r\n\r\n.projects-title,\r\n.main-title,\r\n.project-title {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.home-section,\r\n.projects-section {\r\n  margin: 1em 0;\r\n}\r\n\r\n.tab,\r\n.modal-tab {\r\n  margin: 0.5em;\r\n  padding: 0.3em;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.tab {\r\n  list-style-type: none;\r\n}\r\n\r\n.tab:hover,\r\n.modal-tab:hover {\r\n  background-color: #2abd6770;\r\n}\r\n\r\n/* TODO ITEMS */\r\n\r\n.project-title {\r\n  text-align: center;\r\n}\r\n\r\n.todo-container {\r\n  display: grid;\r\n  gap: 1.5em;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid #2abd67;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.low {\r\n  border-left: 7px solid green;\r\n}\r\n\r\n.medium {\r\n  border-left: 7px solid orange;\r\n}\r\n\r\n.high {\r\n  border-left: 7px solid red;\r\n}\r\n\r\n.todo-info,\r\n.todo-option {\r\n  margin: 0 0.4em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.todo-option {\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-name {\r\n  margin: 0 0.3em;\r\n}\r\n\r\n.true {\r\n  text-decoration: line-through;\r\n  color: lightgrey;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.active-project-title {\r\n  font-size: 2rem;\r\n  padding: 0.5em;\r\n  background-color: #2abd67;\r\n  text-align: center;\r\n  margin: 1em 0;\r\n  color: whitesmoke;\r\n  border-radius: 7px;\r\n}\r\n\r\n.project-tab {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* BUTTONS */\r\n.btn {\r\n  cursor: pointer;\r\n  background-color: #2abd67;\r\n  box-shadow: 0px 11px 14px -7px #3e7327;\r\n  text-shadow: 0px 1px 0px #5b8a3c;\r\n  font-size: 1.5rem;\r\n  color: whitesmoke;\r\n}\r\n\r\n.add-btn {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #2abd67cb;\r\n}\r\n\r\n.btn:active {\r\n  background-color: #2abd67b6;\r\n}\r\n\r\n.add-project-btn,\r\n.add-todo-btn {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  border: none;\r\n  padding: 0.2em 0.5em;\r\n}\r\n\r\n.fa-regular:hover {\r\n  color: green;\r\n}\r\n\r\n.fa-square-check {\r\n  color: green;\r\n}\r\n\r\n.todo-btn,\r\n.exit-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-option-btns {\r\n  margin: 0.2em 0;\r\n}\r\n\r\n.exit-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: red;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.todo-modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: rgba(37, 37, 37, 0.7);\r\n}\r\n\r\n.modal-inner {\r\n  position: absolute;\r\n  z-index: 9999;\r\n  background-color: whitesmoke;\r\n  max-width: 500px;\r\n  width: 90%;\r\n  padding: 1em;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\ninput,\r\nselect {\r\n  outline-color: #2abd67;\r\n  padding: 0.7em;\r\n  margin-bottom: 0.7em;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media (min-width: 750px) {\r\n  .main {\r\n    grid-template-columns: 4fr 6fr;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .container {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .add-btn {\r\n    font-size: 2rem;\r\n    display: block;\r\n    position: static;\r\n    width: 125px;\r\n    border: none;\r\n    border-radius: 7px;\r\n    margin: 10px auto 0 auto;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\r\n\r\n/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n}\r\n\r\n/*\r\n  3. Allow percentage-based heights in the application\r\n*/\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n/*\r\n  Typographic tweaks!\r\n  4. Add accessible line-height\r\n  5. Improve text rendering\r\n*/\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n  6. Improve media defaults\r\n*/\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n  7. Remove built-in form typography styles\r\n*/\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n  8. Avoid text overflows\r\n*/\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\nbody {\r\n  text-align: left;\r\n  font-family: \"Roboto\", sans-serif;\r\n  color: #374958;\r\n}\r\n\r\n/* MAIN LAYOUT */\r\n\r\n.container {\r\n  font-size: 1.2rem;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.title {\r\n  color: #252525;\r\n  border-bottom: 2px solid #2abd67;\r\n}\r\n\r\n.active {\r\n  background-color: #2abd6770;\r\n  border-left: 4px solid #2abd67;\r\n}\r\n\r\ni {\r\n  margin: 0 0.2em !important;\r\n}\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n  text-align: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* MAIN */\r\n\r\n.main {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.main-left,\r\n.main-right {\r\n  padding: 0 1em;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.main-right {\r\n  background-color: #ececec;\r\n}\r\n\r\n.main-section-container,\r\n.projects-section-container {\r\n  margin: 1.2em 0;\r\n}\r\n\r\n.projects-section-container {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* NAV BAR */\r\n\r\n.nav-bar {\r\n  display: grid;\r\n  padding-left: 0.4em;\r\n}\r\n\r\n.projects-title,\r\n.main-title,\r\n.project-title {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.home-section,\r\n.projects-section {\r\n  margin: 1em 0;\r\n}\r\n\r\n.tab,\r\n.modal-tab {\r\n  margin: 0.5em;\r\n  padding: 0.3em;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.tab {\r\n  list-style-type: none;\r\n}\r\n\r\n.tab:hover,\r\n.modal-tab:hover {\r\n  background-color: #2abd6770;\r\n}\r\n\r\n/* TODO ITEMS */\r\n\r\n.project-title {\r\n  text-align: center;\r\n}\r\n\r\n.todo-container {\r\n  display: grid;\r\n  gap: 1.5em;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid #2abd67;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.low {\r\n  border-left: 7px solid green;\r\n}\r\n\r\n.medium {\r\n  border-left: 7px solid orange;\r\n}\r\n\r\n.high {\r\n  border-left: 7px solid red;\r\n}\r\n\r\n.todo-info,\r\n.todo-option {\r\n  margin: 0 0.4em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.todo-option {\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-name {\r\n  margin: 0 0.3em;\r\n}\r\n\r\n.true {\r\n  text-decoration: line-through;\r\n  color: lightgrey;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.active-project-title {\r\n  font-size: 2rem;\r\n  padding: 0.5em;\r\n  background-color: #2abd67;\r\n  text-align: center;\r\n  margin: 1em 0;\r\n  color: whitesmoke;\r\n  border-radius: 7px;\r\n}\r\n\r\n.project-tab {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* BUTTONS */\r\n.btn {\r\n  cursor: pointer;\r\n  background-color: #2abd67;\r\n  box-shadow: 0px 11px 14px -7px #3e7327;\r\n  text-shadow: 0px 1px 0px #5b8a3c;\r\n  font-size: 1.5rem;\r\n  color: whitesmoke;\r\n}\r\n\r\n.add-btn {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #2abd67cb;\r\n}\r\n\r\n.btn:active {\r\n  background-color: #2abd67b6;\r\n}\r\n\r\n.add-project-btn,\r\n.add-todo-btn {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  border: none;\r\n  padding: 0.2em 0.5em;\r\n}\r\n\r\n.fa-regular:hover {\r\n  color: green;\r\n}\r\n\r\n.fa-square-check {\r\n  color: green;\r\n}\r\n\r\n.todo-btn,\r\n.exit-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-option-btns {\r\n  margin: 0.2em 0;\r\n}\r\n\r\n.exit-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: red;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.todo-modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: rgba(37, 37, 37, 0.7);\r\n}\r\n\r\n.modal-inner {\r\n  position: absolute;\r\n  z-index: 9999;\r\n  background-color: whitesmoke;\r\n  max-width: 500px;\r\n  width: 90%;\r\n  padding: 1em;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\ninput,\r\nselect {\r\n  outline-color: #2abd67;\r\n  padding: 0.7em;\r\n  margin-bottom: 0.7em;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media (min-width: 750px) {\r\n  .main {\r\n    grid-template-columns: 4fr 6fr;\r\n    grid-template-rows: auto;\r\n  }\r\n\r\n  .container {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .add-btn {\r\n    font-size: 2rem;\r\n    display: block;\r\n    position: static;\r\n    width: 125px;\r\n    border: none;\r\n    border-radius: 7px;\r\n    margin: 10px auto 0 auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  const allProjects = _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.allProjects;

  const renderSampleHome = () => {
    const mainSection = document.getElementById("mainSectionContainer");

    allProjects.forEach((project) => {
      if (
        project.getTitle() === "Home" ||
        project.getTitle() === "Today" ||
        project.getTitle() === "Week"
      ) {
        mainSection.innerHTML += `<li class="main-tab tab" data-id="${project.getId()}">${project.getTitle()} </li>`;
      }
    });

    const mainTab = document.querySelector(".main-tab");
    const tabs = document.querySelectorAll(".tab");
    _ui__WEBPACK_IMPORTED_MODULE_0__.uiController.switchActiveStatus(mainTab, tabs);
  };

  const renderSampleProjects = () => {
    const projectsSection = document.getElementById("projectsSectionContainer");

    allProjects.forEach((project) => {
      if (project.getTitle() === "Gym" || project.getTitle() === "Book") {
        projectsSection.innerHTML += `<li class="project-tab tab" data-id="${project.getId()}">${project.getTitle()}<button class="todo-btn delete-project-btn">
                  <i class="fa-regular fa-trash-can delete-project-btn"></i>
                </button></li>`;
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
  const homeTab = new _todoList__WEBPACK_IMPORTED_MODULE_0__["default"]("Home");
  const todayTab = new _todoList__WEBPACK_IMPORTED_MODULE_0__["default"]("Today");
  const weekTab = new _todoList__WEBPACK_IMPORTED_MODULE_0__["default"]("Week");

  const gymTab = new _todoList__WEBPACK_IMPORTED_MODULE_0__["default"]("Gym");
  const bookTab = new _todoList__WEBPACK_IMPORTED_MODULE_0__["default"]("Book");

  let projects = [homeTab, todayTab, weekTab, gymTab, bookTab];

  function add(project) {
    projects.push(project);
  }

  function getProjects() {
    return projects;
  }

  function deleteProject(target) {
    projects = projects.filter(
      (projectItem) => projectItem.getId() !== target.dataset.id
    );
  }

  function getSelectedProject(id) {
    return projects.filter((project) => project.getId() === id)[0];
  }

  return { getProjects, add, deleteProject, getSelectedProject };
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

  const getId = () => id;

  const editData = (title, notes, priority) => {
    (undefined.title = title), (undefined.notes = notes), (undefined.priority = priority);
  };

  const getIcon = () => {
    return isComplete ? "fa-square-check" : "fa-square";
  };

  const getIsComplete = () => {
    return isComplete
  }

  const changeIsComplete = () => {
    isComplete = !isComplete
  }

  return {
    title,
    dueDate,
    notes,
    priority,
    isComplete,
    getId,
    editData,
    getIcon,
    changeIsComplete,
    getIsComplete,
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


function createProject(name) {
  const title = name;

  const id = (0,uuid4__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let todos = [];

  function add(todo) {
    todos.push(todo);
  }

  function deleteTodo(todo) {
    todos = todos.filter((toDoItem) => toDoItem.getId() !== todo.dataset.id);
  }

  function getTodos() {
    return Object.freeze([...todos]);
  }

  function getTitle() {
    return title;
  }

  function getId() {
    return Object.freeze(id);
  }

  return Object.freeze({ getTitle, add, deleteTodo, getTodos, getId });
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
  const allProjects = projects.getProjects();

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

    if (
      projects.getSelectedProject(activeTab.dataset.id).getTodos().length === 0
    )
      return;

    let todoContainerHTML = "";

    projects
      .getSelectedProject(activeTab.dataset.id)
      .getTodos()
      .forEach(
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
    const newProject = (0,_todoList__WEBPACK_IMPORTED_MODULE_1__["default"])(projectTitle);

    projects.add(newProject);

    return newProject;
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
    projectItem.textContent = newProject.getTitle();

    deleteBtn.appendChild(trashIcon);
    projectItem.appendChild(deleteBtn);
    projectsSection.appendChild(projectItem);
  };

  const createTodoItem = () => {
    const todoTitle = document.getElementById("todoTitle").value;
    const todoNotes = document.getElementById("todoNote").value;
    const todoDueDate = document.getElementById("todoDueDate").value;
    const todoPriority = document.getElementById("todoPriority").value;

    return (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)(todoTitle, todoNotes, todoPriority, false, todoDueDate);
  };

  const changeIsDoneStatus = (target) => {
    const activeTab = document.querySelector(".active");

    projects
      .getSelectedProject(activeTab.dataset.id)
      .getTodos()
      .forEach((todo) => {
        if (todo.getId() === target.dataset.id) {
          todo.changeIsComplete();
        }
      });
  };

  const addTodoItem = () => {
    const activeTab = document.querySelector(".active");
    const newTodo = createTodoItem();

    allProjects.forEach((project) => {
      if (
        project.getId() === activeTab.dataset.id ||
        project.getTitle() === "Home"
      )
        project.add(newTodo);
    });
  };

  const deleteTodoItem = (todoTarget) => {
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
    allProjects,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE1BQU0sTUFBTSxLQUFLLFNBQVMsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFFBQVEsVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFB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QUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDekY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQztBQUNHOzs7Ozs7O1VDaEJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyRDtBQUN0QztBQUNyQjtBQUNBLDhDQUE4QyxtRkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VJbml0aWFsaXplLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQ0L2Jyb3dzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcclxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXHJcXG4qL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAzLiBBbGxvdyBwZXJjZW50YWdlLWJhc2VkIGhlaWdodHMgaW4gdGhlIGFwcGxpY2F0aW9uXFxyXFxuKi9cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcclxcbiAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXHJcXG4gIDUuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXHJcXG4qL1xcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgNi4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcclxcbiovXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxudmlkZW8sXFxyXFxuY2FudmFzLFxcclxcbnN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLypcXHJcXG4gIDcuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxyXFxuKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbi8qXFxyXFxuICA4LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcclxcbiovXFxyXFxucCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzM3NDk1ODtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUFJTiBMQVlPVVQgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgY29sb3I6ICMyNTI1MjU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJhYmQ2NztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3NzA7XFxyXFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyYWJkNjc7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgbWFyZ2luOiAwIDAuMmVtICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWxlZnQsXFxyXFxuLm1haW4tcmlnaHQge1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcmlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2VjdGlvbi1jb250YWluZXIsXFxyXFxuLnByb2plY3RzLXNlY3Rpb24tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMS4yZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLXNlY3Rpb24tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi8qIE5BViBCQVIgKi9cXHJcXG5cXHJcXG4ubmF2LWJhciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLXRpdGxlLFxcclxcbi5tYWluLXRpdGxlLFxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1zZWN0aW9uLFxcclxcbi5wcm9qZWN0cy1zZWN0aW9uIHtcXHJcXG4gIG1hcmdpbjogMWVtIDA7XFxyXFxufVxcclxcblxcclxcbi50YWIsXFxyXFxuLm1vZGFsLXRhYiB7XFxyXFxuICBtYXJnaW46IDAuNWVtO1xcclxcbiAgcGFkZGluZzogMC4zZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YWIge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiOmhvdmVyLFxcclxcbi5tb2RhbC10YWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NzcwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT0RPIElURU1TICovXFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMS41ZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyYWJkNjc7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdyB7XFxyXFxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaCB7XFxyXFxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taW5mbyxcXHJcXG4udG9kby1vcHRpb24ge1xcclxcbiAgbWFyZ2luOiAwIDAuNGVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tb3B0aW9uIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLW5hbWUge1xcclxcbiAgbWFyZ2luOiAwIDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4udHJ1ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbi8qIFBST0pFQ1QgKi9cXHJcXG5cXHJcXG4uYWN0aXZlLXByb2plY3QtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxZW0gMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YWIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi8qIEJVVFRPTlMgKi9cXHJcXG4uYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMTFweCAxNHB4IC03cHggIzNlNzMyNztcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjNWI4YTNjO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idG4ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICBib3R0b206IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3Y2I7XFxyXFxufVxcclxcblxcclxcbi5idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjdiNjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ0bixcXHJcXG4uYWRkLXRvZG8tYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMC4yZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1yZWd1bGFyOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNxdWFyZS1jaGVjayB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJ0bixcXHJcXG4uZXhpdC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLW9wdGlvbi1idG5zIHtcXHJcXG4gIG1hcmdpbjogMC4yZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4aXQtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTU9EQUwgKi9cXHJcXG5cXHJcXG4udG9kby1tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbm5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG5zZWxlY3Qge1xcclxcbiAgb3V0bGluZS1jb2xvcjogIzJhYmQ2NztcXHJcXG4gIHBhZGRpbmc6IDAuN2VtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC43ZW07XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVESUEgUVVFUklFUyAqL1xcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xcclxcbiAgLm1haW4ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA2ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgd2lkdGg6IDEyNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztDQUVDO0FBQ0Q7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7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RUEsVUFBVTs7QUFFVjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0VBQzFCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qXFxyXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcclxcbiovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXHJcXG4qL1xcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi8qXFxyXFxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxyXFxuICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcclxcbiAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcclxcbiovXFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxufVxcclxcbi8qXFxyXFxuICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxyXFxuKi9cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgNy4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXHJcXG4qL1xcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuLypcXHJcXG4gIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxyXFxuKi9cXHJcXG5wLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMzc0OTU4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNQUlOIExBWU9VVCAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBjb2xvcjogIzI1MjUyNTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmFiZDY3O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc3MDtcXHJcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzJhYmQ2NztcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBtYXJnaW46IDAgMC4yZW0gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbGVmdCxcXHJcXG4ubWFpbi1yaWdodCB7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1yaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zZWN0aW9uLWNvbnRhaW5lcixcXHJcXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxLjJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWIEJBUiAqL1xcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtdGl0bGUsXFxyXFxuLm1haW4tdGl0bGUsXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXNlY3Rpb24sXFxyXFxuLnByb2plY3RzLXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luOiAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYixcXHJcXG4ubW9kYWwtdGFiIHtcXHJcXG4gIG1hcmdpbjogMC41ZW07XFxyXFxuICBwYWRkaW5nOiAwLjNlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYiB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWI6aG92ZXIsXFxyXFxuLm1vZGFsLXRhYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFiZDY3NzA7XFxyXFxufVxcclxcblxcclxcbi8qIFRPRE8gSVRFTVMgKi9cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJhYmQ2NztcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0ge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5oaWdoIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pbmZvLFxcclxcbi50b2RvLW9wdGlvbiB7XFxyXFxuICBtYXJnaW46IDAgMC40ZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1vcHRpb24ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZSB7XFxyXFxuICBtYXJnaW46IDAgMC4zZW07XFxyXFxufVxcclxcblxcclxcbi50cnVlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJPSkVDVCAqL1xcclxcblxcclxcbi5hY3RpdmUtcHJvamVjdC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjc7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFlbSAwO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhYiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQlVUVE9OUyAqL1xcclxcbi5idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2NztcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE0cHggLTdweCAjM2U3MzI3O1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICM1YjhhM2M7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIGJvdHRvbTogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWJkNjdjYjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYmQ2N2I2O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnRuLFxcclxcbi5hZGQtdG9kby1idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXJlZ3VsYXI6aG92ZXIge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtc3F1YXJlLWNoZWNrIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYnRuLFxcclxcbi5leGl0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tb3B0aW9uLWJ0bnMge1xcclxcbiAgbWFyZ2luOiAwLjJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhpdC1idG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNT0RBTCAqL1xcclxcblxcclxcbi50b2RvLW1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWlubmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnNlbGVjdCB7XFxyXFxuICBvdXRsaW5lLWNvbG9yOiAjMmFiZDY3O1xcclxcbiAgcGFkZGluZzogMC43ZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRURJQSBRVUVSSUVTICovXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDZmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB3aWR0aDogMTI1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHVpQ29udHJvbGxlciB9IGZyb20gXCIuL3VpXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGZvcm1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm1cIik7XHJcbiAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhpdEJ0blwiKTtcclxuICBjb25zdCB0b2RvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tdGFiXVwiKTtcclxuICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGFiXVwiKTtcclxuICBjb25zdCBmb3JtVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVRvZG9Db250YWluZXJcIik7XHJcbiAgY29uc3QgZm9ybVByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1Qcm9qZWN0Q29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHByb2plY3RzU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJwcm9qZWN0c1NlY3Rpb25Db250YWluZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgbmF2TW9kYWxUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsLXRhYlwiKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1idG5cIikgfHxcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhpdC1idG5cIilcclxuICAgICkge1xyXG4gICAgICB1aUNvbnRyb2xsZXIudG9nZ2xlTW9kYWxWaXNpYmlsaXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrYm94XCIpKSB7XHJcbiAgICAgIGNvbnN0IHRvZG9UYWIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgIHVpQ29udHJvbGxlci5jaGFuZ2VJc0RvbmVTdGF0dXModG9kb1RhYik7XHJcbiAgICAgIHVpQ29udHJvbGxlci5yZW5kZXJUb2RvcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJcIikpIHtcclxuICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpO1xyXG5cclxuICAgICAgdWlDb250cm9sbGVyLnN3aXRjaEFjdGl2ZVN0YXR1cyhlLnRhcmdldCwgdGFicyk7XHJcbiAgICAgIHVpQ29udHJvbGxlci5yZW5kZXJUb2RvcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldCA9PT0gdG9kb1RhYikge1xyXG4gICAgICB1aUNvbnRyb2xsZXIucmVuZGVyTW9kYWwoZm9ybVRvZG9Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldCA9PT0gcHJvamVjdFRhYikge1xyXG4gICAgICB1aUNvbnRyb2xsZXIucmVuZGVyTW9kYWwoZm9ybVByb2plY3RDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldCA9PT0gZXhpdEJ0bikge1xyXG4gICAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbW9kYWxcIik7XHJcbiAgICAgIHRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvamVjdC1idG5cIikpIHtcclxuICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpO1xyXG4gICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluU2VjdGlvbkNvbnRhaW5lclwiKTtcclxuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICBpZiAocHJvamVjdEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgdWlDb250cm9sbGVyLnN3aXRjaEFjdGl2ZVN0YXR1cyhtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQsIHRhYnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1aUNvbnRyb2xsZXIuZGVsZXRlUHJvamVjdEl0ZW0ocHJvamVjdEl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtdG9kby1idG5cIikpIHtcclxuICAgICAgY29uc3QgdG9kb0l0ZW0gPVxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICB1aUNvbnRyb2xsZXIuZGVsZXRlVG9kb0l0ZW0odG9kb0l0ZW0pO1xyXG4gICAgICB1aUNvbnRyb2xsZXIucmVuZGVyVG9kb3MoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9ybXNDb250YWluZXIuZm9yRWFjaCgoZm9ybSkgPT4ge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGUuc3VibWl0dGVyLmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWJ0blwiKSkge1xyXG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKTtcclxuXHJcbiAgICAgICAgdWlDb250cm9sbGVyLnJlbmRlclByb2plY3QoKTtcclxuICAgICAgICB1aUNvbnRyb2xsZXIuc3dpdGNoQWN0aXZlU3RhdHVzKFxyXG4gICAgICAgICAgcHJvamVjdHNTZWN0aW9uQ29udGFpbmVyLmxhc3RDaGlsZCxcclxuICAgICAgICAgIHRhYnNcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnN1Ym1pdHRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtdG9kby1idG5cIikpIHtcclxuICAgICAgICB1aUNvbnRyb2xsZXIuYWRkVG9kb0l0ZW0oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdWlDb250cm9sbGVyLnJlbmRlclRvZG9zKCk7XHJcbiAgICAgIHVpQ29udHJvbGxlci50b2dnbGVNb2RhbFZpc2liaWxpdHkoKTtcclxuICAgICAgdWlDb250cm9sbGVyLmNsZWFySW5wdXRzKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgbmF2TW9kYWxUYWIuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICB1aUNvbnRyb2xsZXIuc3dpdGNoQWN0aXZlU3RhdHVzKGNoaWxkLCBuYXZNb2RhbFRhYilcclxuICAgICk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImltcG9ydCB7IHVpQ29udHJvbGxlciB9IGZyb20gXCIuL3VpXCI7XHJcbmltcG9ydCB7IGV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGFnZUluaXRpYWxpemVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBmb3JtUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVByb2plY3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSB1aUNvbnRyb2xsZXIuYWxsUHJvamVjdHM7XHJcblxyXG4gIGNvbnN0IHJlbmRlclNhbXBsZUhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblNlY3Rpb25Db250YWluZXJcIik7XHJcblxyXG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcHJvamVjdC5nZXRUaXRsZSgpID09PSBcIkhvbWVcIiB8fFxyXG4gICAgICAgIHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gXCJUb2RheVwiIHx8XHJcbiAgICAgICAgcHJvamVjdC5nZXRUaXRsZSgpID09PSBcIldlZWtcIlxyXG4gICAgICApIHtcclxuICAgICAgICBtYWluU2VjdGlvbi5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cIm1haW4tdGFiIHRhYlwiIGRhdGEtaWQ9XCIke3Byb2plY3QuZ2V0SWQoKX1cIj4ke3Byb2plY3QuZ2V0VGl0bGUoKX0gPC9saT5gO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtYWluVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXRhYlwiKTtcclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKTtcclxuICAgIHVpQ29udHJvbGxlci5zd2l0Y2hBY3RpdmVTdGF0dXMobWFpblRhYiwgdGFicyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU2FtcGxlUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzU2VjdGlvbkNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmIChwcm9qZWN0LmdldFRpdGxlKCkgPT09IFwiR3ltXCIgfHwgcHJvamVjdC5nZXRUaXRsZSgpID09PSBcIkJvb2tcIikge1xyXG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cInByb2plY3QtdGFiIHRhYlwiIGRhdGEtaWQ9XCIke3Byb2plY3QuZ2V0SWQoKX1cIj4ke3Byb2plY3QuZ2V0VGl0bGUoKX08YnV0dG9uIGNsYXNzPVwidG9kby1idG4gZGVsZXRlLXByb2plY3QtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS10cmFzaC1jYW4gZGVsZXRlLXByb2plY3QtYnRuXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+PC9saT5gO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0aWFsaXplUGFnZSA9ICgpID0+IHtcclxuICAgIHJlbmRlclNhbXBsZUhvbWUoKTtcclxuICAgIHJlbmRlclNhbXBsZVByb2plY3RzKCk7XHJcbiAgICB1aUNvbnRyb2xsZXIucmVuZGVyTW9kYWwoZm9ybVByb2plY3RDb250YWluZXIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGluaXRpYWxpemVQYWdlIH07XHJcbn0pKCk7XHJcbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c0NvbnRhaW5lcigpIHtcclxuICBjb25zdCBob21lVGFiID0gbmV3IGNyZWF0ZVByb2plY3QoXCJIb21lXCIpO1xyXG4gIGNvbnN0IHRvZGF5VGFiID0gbmV3IGNyZWF0ZVByb2plY3QoXCJUb2RheVwiKTtcclxuICBjb25zdCB3ZWVrVGFiID0gbmV3IGNyZWF0ZVByb2plY3QoXCJXZWVrXCIpO1xyXG5cclxuICBjb25zdCBneW1UYWIgPSBuZXcgY3JlYXRlUHJvamVjdChcIkd5bVwiKTtcclxuICBjb25zdCBib29rVGFiID0gbmV3IGNyZWF0ZVByb2plY3QoXCJCb29rXCIpO1xyXG5cclxuICBsZXQgcHJvamVjdHMgPSBbaG9tZVRhYiwgdG9kYXlUYWIsIHdlZWtUYWIsIGd5bVRhYiwgYm9va1RhYl07XHJcblxyXG4gIGZ1bmN0aW9uIGFkZChwcm9qZWN0KSB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHRhcmdldCkge1xyXG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoXHJcbiAgICAgIChwcm9qZWN0SXRlbSkgPT4gcHJvamVjdEl0ZW0uZ2V0SWQoKSAhPT0gdGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3QoaWQpIHtcclxuICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gaWQpWzBdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0UHJvamVjdHMsIGFkZCwgZGVsZXRlUHJvamVjdCwgZ2V0U2VsZWN0ZWRQcm9qZWN0IH07XHJcbn1cclxuIiwiaW1wb3J0IHV1aWQ0IGZyb20gXCJ1dWlkNFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvZG8gPSAoXHJcbiAgdGl0bGUsXHJcbiAgbm90ZXMsXHJcbiAgcHJpb3JpdHksXHJcbiAgaXNDb21wbGV0ZSA9IGZhbHNlLFxyXG4gIGR1ZURhdGVcclxuKSA9PiB7XHJcbiAgY29uc3QgaWQgPSB1dWlkNCgpO1xyXG5cclxuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkO1xyXG5cclxuICBjb25zdCBlZGl0RGF0YSA9ICh0aXRsZSwgbm90ZXMsIHByaW9yaXR5KSA9PiB7XHJcbiAgICAodGhpcy50aXRsZSA9IHRpdGxlKSwgKHRoaXMubm90ZXMgPSBub3RlcyksICh0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEljb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gaXNDb21wbGV0ZSA/IFwiZmEtc3F1YXJlLWNoZWNrXCIgOiBcImZhLXNxdWFyZVwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldElzQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gaXNDb21wbGV0ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlSXNDb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIGlzQ29tcGxldGUgPSAhaXNDb21wbGV0ZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlLFxyXG4gICAgZHVlRGF0ZSxcclxuICAgIG5vdGVzLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBpc0NvbXBsZXRlLFxyXG4gICAgZ2V0SWQsXHJcbiAgICBlZGl0RGF0YSxcclxuICAgIGdldEljb24sXHJcbiAgICBjaGFuZ2VJc0NvbXBsZXRlLFxyXG4gICAgZ2V0SXNDb21wbGV0ZSxcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgdXVpZDQgZnJvbSBcInV1aWQ0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcclxuICBjb25zdCB0aXRsZSA9IG5hbWU7XHJcblxyXG4gIGNvbnN0IGlkID0gdXVpZDQoKTtcclxuICBsZXQgdG9kb3MgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkKHRvZG8pIHtcclxuICAgIHRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pIHtcclxuICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b0RvSXRlbSkgPT4gdG9Eb0l0ZW0uZ2V0SWQoKSAhPT0gdG9kby5kYXRhc2V0LmlkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvZG9zKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoWy4uLnRvZG9zXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aXRsZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldElkKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoaWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoeyBnZXRUaXRsZSwgYWRkLCBkZWxldGVUb2RvLCBnZXRUb2RvcywgZ2V0SWQgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcclxuaW1wb3J0IHByb2plY3RzQ29udGFpbmVyIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdWlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RzQ29udGFpbmVyKCk7XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWxlY3RlZFByb2plY3RUaXRsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xyXG4gICAgbGV0IGFjdGl2ZVByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZlUHJvamVjdFRpdGxlXCIpO1xyXG5cclxuICAgIGFjdGl2ZVByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFjdGl2ZVRhYi50ZXh0Q29udGVudDtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVNb2RhbFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvcGVuQWRkTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Nb2RhbFwiKTtcclxuXHJcbiAgICBvcGVuQWRkTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUb2RvcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xyXG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0NvbnRhaW5lclwiKTtcclxuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHByb2plY3RzLmdldFNlbGVjdGVkUHJvamVjdChhY3RpdmVUYWIuZGF0YXNldC5pZCkuZ2V0VG9kb3MoKS5sZW5ndGggPT09IDBcclxuICAgIClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGxldCB0b2RvQ29udGFpbmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgcHJvamVjdHNcclxuICAgICAgLmdldFNlbGVjdGVkUHJvamVjdChhY3RpdmVUYWIuZGF0YXNldC5pZClcclxuICAgICAgLmdldFRvZG9zKClcclxuICAgICAgLmZvckVhY2goXHJcbiAgICAgICAgKHRvZG8pID0+XHJcbiAgICAgICAgICAodG9kb0NvbnRhaW5lckhUTUwgKz0gYCBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW0gJHt0b2RvLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9ICR7dG9kby5nZXRJc0NvbXBsZXRlKCl9XCIgZGF0YS1pZD1cIiR7dG9kby5nZXRJZCgpfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9kby1idG4gY2hlY2tib3gtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciAke3RvZG8uZ2V0SWNvbigpfSBjaGVja2JveFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0b2RvLW5hbWVcIj4ke3RvZG8udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidG9kby1kYXRlXCI+JHt0b2RvLmR1ZURhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tb3B0aW9uLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2RvLWJ0biBlZGl0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZG8tYnRuIGJ0bi1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXF1ZXN0aW9uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9kby1idG4gZGVsZXRlLXRvZG8tYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS10cmFzaC1jYW4gZGVsZXRlLXRvZG8tYnRuXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIGApXHJcbiAgICAgICk7XHJcblxyXG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSB0b2RvQ29udGFpbmVySFRNTDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzd2l0Y2hBY3RpdmVTdGF0dXMgPSAodGFyZ2V0LCB0YWJzKSA9PiB7XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG5cclxuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcblxyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgdXBkYXRlU2VsZWN0ZWRQcm9qZWN0VGl0bGUoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVQcm9qZWN0SXRlbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlKTtcclxuXHJcbiAgICBwcm9qZWN0cy5hZGQobmV3UHJvamVjdCk7XHJcblxyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNTZWN0aW9uQ29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdEl0ZW0oKTtcclxuXHJcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YWJcIik7XHJcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ0blwiKTtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xyXG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIpO1xyXG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS10cmFzaC1jYW5cIik7XHJcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcclxuICAgIHByb2plY3RJdGVtLmRhdGFzZXQuaWQgPSBuZXdQcm9qZWN0LmdldElkKCk7XHJcbiAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuZ2V0VGl0bGUoKTtcclxuXHJcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcclxuICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRvZG9JdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCB0b2RvTm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Ob3RlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9EdWVEYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvUHJpb3JpdHlcIikudmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZVRvZG8odG9kb1RpdGxlLCB0b2RvTm90ZXMsIHRvZG9Qcmlvcml0eSwgZmFsc2UsIHRvZG9EdWVEYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VJc0RvbmVTdGF0dXMgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuXHJcbiAgICBwcm9qZWN0c1xyXG4gICAgICAuZ2V0U2VsZWN0ZWRQcm9qZWN0KGFjdGl2ZVRhYi5kYXRhc2V0LmlkKVxyXG4gICAgICAuZ2V0VG9kb3MoKVxyXG4gICAgICAuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgIGlmICh0b2RvLmdldElkKCkgPT09IHRhcmdldC5kYXRhc2V0LmlkKSB7XHJcbiAgICAgICAgICB0b2RvLmNoYW5nZUlzQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvZG9JdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XHJcbiAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kb0l0ZW0oKTtcclxuXHJcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwcm9qZWN0LmdldElkKCkgPT09IGFjdGl2ZVRhYi5kYXRhc2V0LmlkIHx8XHJcbiAgICAgICAgcHJvamVjdC5nZXRUaXRsZSgpID09PSBcIkhvbWVcIlxyXG4gICAgICApXHJcbiAgICAgICAgcHJvamVjdC5hZGQobmV3VG9kbyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVUb2RvSXRlbSA9ICh0b2RvVGFyZ2V0KSA9PiB7XHJcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIHByb2plY3QuZGVsZXRlVG9kbyh0b2RvVGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RJdGVtID0gKHByb2plY3RUYXJnZXQpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNTZWN0aW9uQ29udGFpbmVyXCIpO1xyXG5cclxuICAgIHByb2plY3RzLmRlbGV0ZVByb2plY3QocHJvamVjdFRhcmdldCk7XHJcblxyXG4gICAgcHJvamVjdHNTZWN0aW9uLnJlbW92ZUNoaWxkKHByb2plY3RUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck1vZGFsID0gKHRhcmdldCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybVwiKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpKTtcclxuXHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhcklucHV0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFsbElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcclxuXHJcbiAgICBhbGxJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IChpbnB1dC52YWx1ZSA9IFwiXCIpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9nZ2xlTW9kYWxWaXNpYmlsaXR5LFxyXG4gICAgcmVuZGVyUHJvamVjdCxcclxuICAgIGRlbGV0ZVRvZG9JdGVtLFxyXG4gICAgYWRkVG9kb0l0ZW0sXHJcbiAgICBjbGVhcklucHV0cyxcclxuICAgIHJlbmRlck1vZGFsLFxyXG4gICAgcmVuZGVyVG9kb3MsXHJcbiAgICBzd2l0Y2hBY3RpdmVTdGF0dXMsXHJcbiAgICBkZWxldGVQcm9qZWN0SXRlbSxcclxuICAgIGNoYW5nZUlzRG9uZVN0YXR1cyxcclxuICAgIGFsbFByb2plY3RzLFxyXG4gIH07XHJcbn0pKCk7XHJcbiIsImNvbnN0IHV1aWRQYXR0ZXJuID0gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS00WzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9JC9pO1xuZnVuY3Rpb24gdmFsaWQodXVpZCkge1xuICByZXR1cm4gdXVpZFBhdHRlcm4udGVzdCh1dWlkKTtcbn1cblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9hYmhpc2hla2R1dHRhLm9yZy9ibG9nL3N0YW5kYWxvbmVfdXVpZF9nZW5lcmF0b3JfaW5famF2YXNjcmlwdC5odG1sXG4vLyBJRTExIGFuZCBNb2Rlcm4gQnJvd3NlcnMgT25seVxuZnVuY3Rpb24gdXVpZDQoKSB7XG4gIHZhciB0ZW1wX3VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoKSk7XG4gIHZhciB1dWlkID0gdGVtcF91cmwudG9TdHJpbmcoKTtcbiAgVVJMLnJldm9rZU9iamVjdFVSTCh0ZW1wX3VybCk7XG4gIHJldHVybiB1dWlkLnNwbGl0KC9bOlxcL10vZykucG9wKCkudG9Mb3dlckNhc2UoKTsgLy8gcmVtb3ZlIHByZWZpeGVzXG59XG51dWlkNC52YWxpZCA9IHZhbGlkO1xuXG5leHBvcnQgZGVmYXVsdCB1dWlkNDtcbmV4cG9ydCB7IHV1aWQ0LCB2YWxpZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcGFnZUluaXRpYWxpemVyIH0gZnJvbSBcIi4vbW9kdWxlcy9wYWdlSW5pdGlhbGl6ZVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcGFnZUluaXRpYWxpemVyLmluaXRpYWxpemVQYWdlKCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=