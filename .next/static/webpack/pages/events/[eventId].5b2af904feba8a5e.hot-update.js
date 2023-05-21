"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[eventId]",{

/***/ "./components/event-detail/event-logistics.js":
/*!****************************************************!*\
  !*** ./components/event-detail/event-logistics.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _logistics_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logistics-item */ \"./components/event-detail/logistics-item.js\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-logistics.module.css */ \"./components/event-detail/event-logistics.module.css\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction EventLogistics(param) {\n    let { date , address , image , imageAlt  } = param;\n    const humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const addressText = address.replace(\", \", \"\\n\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default().logistics),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/\".concat(image),\n                    alt: imageAlt\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logistics_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        icon: _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: humanReadableDate\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logistics_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        icon: _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                            children: addressText\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = EventLogistics;\nvar _c;\n$RefreshReg$(_c, \"EventLogistics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUNOO0FBQ0c7QUFDSztBQUVsRCxTQUFTSSxlQUFlLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQWxDO0lBRXRCLE1BQU1DLG9CQUFvQixJQUFJQyxLQUFLTCxNQUFNTSxrQkFBa0IsQ0FBQyxTQUFTO1FBQ25FQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0EsTUFBTUMsY0FBY1QsUUFBUVUsT0FBTyxDQUFDLE1BQU07SUFFMUMscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVdmLDhFQUFnQjs7MEJBQ2xDLDhEQUFDaUI7Z0JBQUlGLFdBQVdmLDBFQUFZOzBCQUMxQiw0RUFBQ2tCO29CQUFJQyxLQUFLLElBQVUsT0FBTmY7b0JBQVNnQixLQUFLZjs7Ozs7Ozs7Ozs7MEJBRTlCLDhEQUFDZ0I7Z0JBQUdOLFdBQVdmLHlFQUFXOztrQ0FDeEIsOERBQUNELHVEQUFhQTt3QkFBQ3dCLE1BQU16Qix3REFBUUE7a0NBQzNCLDRFQUFDMEI7c0NBQU1sQjs7Ozs7Ozs7Ozs7a0NBRVQsOERBQUNQLHVEQUFhQTt3QkFBQ3dCLE1BQU0xQiwyREFBV0E7a0NBQzlCLDRFQUFDTTtzQ0FBU1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0tBeEJTWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MuanM/OWRmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkcmVzc0ljb24gZnJvbSAnLi4vaWNvbnMvYWRkcmVzcy1pY29uJztcbmltcG9ydCBEYXRlSWNvbiBmcm9tICcuLi9pY29ucy9kYXRlLWljb24nO1xuaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSAnLi9sb2dpc3RpY3MtaXRlbSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBFdmVudExvZ2lzdGljcyh7IGRhdGUsIGFkZHJlc3MsIGltYWdlLCBpbWFnZUFsdCB9KSB7XG5cbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICB9KTtcbiAgY29uc3QgYWRkcmVzc1RleHQgPSBhZGRyZXNzLnJlcGxhY2UoJywgJywgJ1xcbicpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubG9naXN0aWNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICA8aW1nIHNyYz17YC8ke2ltYWdlfWB9IGFsdD17aW1hZ2VBbHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgPExvZ2lzdGljc0l0ZW0gaWNvbj17RGF0ZUljb259PlxuICAgICAgICAgIDx0aW1lPntodW1hblJlYWRhYmxlRGF0ZX08L3RpbWU+XG4gICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgPExvZ2lzdGljc0l0ZW0gaWNvbj17QWRkcmVzc0ljb259PlxuICAgICAgICAgIDxhZGRyZXNzPnthZGRyZXNzVGV4dH08L2FkZHJlc3M+XG4gICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFkZHJlc3NJY29uIiwiRGF0ZUljb24iLCJMb2dpc3RpY3NJdGVtIiwic3R5bGVzIiwiRXZlbnRMb2dpc3RpY3MiLCJkYXRlIiwiYWRkcmVzcyIsImltYWdlIiwiaW1hZ2VBbHQiLCJodW1hblJlYWRhYmxlRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJhZGRyZXNzVGV4dCIsInJlcGxhY2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibG9naXN0aWNzIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwidWwiLCJsaXN0IiwiaWNvbiIsInRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/event-detail/event-logistics.js\n"));

/***/ })

});