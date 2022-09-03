"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/badge";
exports.ids = ["pages/badge"];
exports.modules = {

/***/ "./components/events.js":
/*!******************************!*\
  !*** ./components/events.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);\nswr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/volkan/Documents/play/Maker-Badge/App/front-end/components/events.js\";\n\n\n\nconst fetcher = (...args) => fetch(...args).then(res => res.json());\n\nfunction EventsCard() {\n  const {\n    data,\n    error\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('http://localhost:3000/api/events', fetcher);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: \"Failed to load\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 21\n  }, this);\n  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 21\n  }, this);\n  console.log(data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: data.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: data.date\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: data.location\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: data.details\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsCard);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQyxHQUFHQyxJQUFKLEtBQWFDLEtBQUssQ0FBQyxHQUFHRCxJQUFKLENBQUwsQ0FBZUUsSUFBZixDQUFxQkMsR0FBRCxJQUFTQSxHQUFHLENBQUNDLElBQUosRUFBN0IsQ0FBN0I7O0FBRUEsU0FBU0MsVUFBVCxHQUFzQjtBQUNwQixRQUFNO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUE7QUFBUixNQUFrQlQsK0NBQU0sQ0FBQyxrQ0FBRCxFQUFxQ0MsT0FBckMsQ0FBOUI7QUFFQSxNQUFJUSxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWEUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQU1BLElBQUksQ0FBQ0k7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFNSixJQUFJLENBQUNLO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSxnQkFBTUwsSUFBSSxDQUFDTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsZ0JBQU1OLElBQUksQ0FBQ087QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7QUFDRCxpRUFBZVIsVUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ldmVudHMuanM/NDdkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cbmZ1bmN0aW9uIEV2ZW50c0NhcmQoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ldmVudHMnLCBmZXRjaGVyKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+e2RhdGEubmFtZX08L2Rpdj5cbiAgICAgIDxkaXY+e2RhdGEuZGF0ZX08L2Rpdj5cbiAgICAgIDxkaXY+e2RhdGEubG9jYXRpb259PC9kaXY+XG4gICAgICA8ZGl2PntkYXRhLmRldGFpbHN9PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c0NhcmQ7XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiRXZlbnRzQ2FyZCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZGF0ZSIsImxvY2F0aW9uIiwiZGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/events.js\n");

/***/ }),

/***/ "./pages/badge.js":
/*!************************!*\
  !*** ./pages/badge.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/events */ \"./components/events.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_events__WEBPACK_IMPORTED_MODULE_0__]);\n_components_events__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/volkan/Documents/play/Maker-Badge/App/front-end/pages/badge.js\";\n\n\n\n\nfunction Badge() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"Badge\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iYWRnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsU0FBU0MsS0FBVCxHQUFpQjtBQUNiLHNCQUNFO0FBQUEsNEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQTtBQUFBLGtCQURGO0FBTUQ7O0FBRUQsaUVBQWVBLEtBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2JhZGdlLmpzP2Q1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50c0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZXZlbnRzXCJcblxuZnVuY3Rpb24gQmFkZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8ZGl2PkJhZGdlPC9kaXY+XG4gICAgICA8RXZlbnRzQ2FyZCAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBCYWRnZSJdLCJuYW1lcyI6WyJFdmVudHNDYXJkIiwiQmFkZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/badge.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/badge.js"));
module.exports = __webpack_exports__;

})();