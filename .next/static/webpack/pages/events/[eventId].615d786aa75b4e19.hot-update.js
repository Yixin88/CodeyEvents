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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EventLogistics; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _logistics_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logistics-item */ \"./components/event-detail/logistics-item.js\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-logistics.module.css */ \"./components/event-detail/event-logistics.module.css\");\n/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction EventLogistics(param) {\n    let { date , address , image , imageAlt  } = param;\n    const humanReadableDate = new Date(date).toLocaleDateString(\"en-US\", {\n        day: \"numeric\",\n        month: \"long\",\n        year: \"numeric\"\n    });\n    const addressText = address.replace(\", \", \"\\n\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5___default().logistics),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5___default().image),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/\" + image,\n                    alt: imageAlt,\n                    width: 240,\n                    height: 240\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5___default().list),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logistics_item__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        icon: _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: humanReadableDate\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logistics_item__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        icon: _icons_address_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                            children: addressText\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/event-detail/event-logistics.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = EventLogistics;\nvar _c;\n$RefreshReg$(_c, \"EventLogistics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRWtCO0FBQ047QUFDRztBQUNLO0FBRW5DLFNBQVNLLGVBQWUsS0FBa0MsRUFBRTtRQUFwQyxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBbEM7SUFFckMsTUFBTUMsb0JBQW9CLElBQUlDLEtBQUtMLE1BQU1NLGtCQUFrQixDQUFDLFNBQVM7UUFDbkVDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQSxNQUFNQyxjQUFjVCxRQUFRVSxPQUFPLENBQUMsTUFBTTtJQUUxQyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBV2YsOEVBQWdCOzswQkFDbEMsOERBQUNpQjtnQkFBSUYsV0FBV2YsMEVBQVk7MEJBQzFCLDRFQUFDSixtREFBS0E7b0JBQUNzQixLQUFLLE1BQU1kO29CQUFPZSxLQUFLZDtvQkFBVWUsT0FBTztvQkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7MEJBRTlELDhEQUFDQztnQkFBR1AsV0FBV2YseUVBQVc7O2tDQUN4Qiw4REFBQ0QsdURBQWFBO3dCQUFDeUIsTUFBTTFCLHdEQUFRQTtrQ0FDM0IsNEVBQUMyQjtzQ0FBTW5COzs7Ozs7Ozs7OztrQ0FFVCw4REFBQ1AsdURBQWFBO3dCQUFDeUIsTUFBTTNCLDJEQUFXQTtrQ0FDOUIsNEVBQUNNO3NDQUFTUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEIsQ0FBQztLQXhCdUJYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljcy5qcz85ZGZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5pbXBvcnQgQWRkcmVzc0ljb24gZnJvbSAnLi4vaWNvbnMvYWRkcmVzcy1pY29uJztcbmltcG9ydCBEYXRlSWNvbiBmcm9tICcuLi9pY29ucy9kYXRlLWljb24nO1xuaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSAnLi9sb2dpc3RpY3MtaXRlbSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudExvZ2lzdGljcyh7IGRhdGUsIGFkZHJlc3MsIGltYWdlLCBpbWFnZUFsdCB9KSB7XG5cbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICB9KTtcbiAgY29uc3QgYWRkcmVzc1RleHQgPSBhZGRyZXNzLnJlcGxhY2UoJywgJywgJ1xcbicpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubG9naXN0aWNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICA8SW1hZ2Ugc3JjPXsnLycgKyBpbWFnZX0gYWx0PXtpbWFnZUFsdH0gd2lkdGg9ezI0MH0gaGVpZ2h0PXsyNDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICA8TG9naXN0aWNzSXRlbSBpY29uPXtEYXRlSWNvbn0+XG4gICAgICAgICAgPHRpbWU+e2h1bWFuUmVhZGFibGVEYXRlfTwvdGltZT5cbiAgICAgICAgPC9Mb2dpc3RpY3NJdGVtPlxuICAgICAgICA8TG9naXN0aWNzSXRlbSBpY29uPXtBZGRyZXNzSWNvbn0+XG4gICAgICAgICAgPGFkZHJlc3M+e2FkZHJlc3NUZXh0fTwvYWRkcmVzcz5cbiAgICAgICAgPC9Mb2dpc3RpY3NJdGVtPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59Il0sIm5hbWVzIjpbIkltYWdlIiwiQWRkcmVzc0ljb24iLCJEYXRlSWNvbiIsIkxvZ2lzdGljc0l0ZW0iLCJzdHlsZXMiLCJFdmVudExvZ2lzdGljcyIsImRhdGUiLCJhZGRyZXNzIiwiaW1hZ2UiLCJpbWFnZUFsdCIsImh1bWFuUmVhZGFibGVEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImFkZHJlc3NUZXh0IiwicmVwbGFjZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsb2dpc3RpY3MiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibGlzdCIsImljb24iLCJ0aW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/event-detail/event-logistics.js\n"));

/***/ })

});