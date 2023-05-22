"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FilteredEventsPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filterData = router.query.slug;\n    if (!filterData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this);\n    }\n    const filteredYear = filterData[0];\n    const filteredMonth = filterData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2022 || numMonth < 1 || numMonth > 12) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Invalid Filter. Please adjust your values!\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    const filteredEvents = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_3__.getFilteredEvents)({\n        year: numYear,\n        month: numMonth\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"No Events Found For Your Filter!\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this);\n    }\n    const date = new Date(numYear, numMonth);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FilteredEventsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDZDtBQUMyQjtBQUNNO0FBQ0s7QUFFakQsU0FBU0sscUJBQXFCOztJQUMzQyxNQUFNQyxTQUFTTixzREFBU0E7SUFFeEIsTUFBTU8sYUFBYUQsT0FBT0UsS0FBSyxDQUFDQyxJQUFJO0lBRXBDLElBQUksQ0FBQ0YsWUFBWTtRQUNmLHFCQUFPLDhEQUFDRztZQUFFQyxXQUFVO3NCQUFTOzs7Ozs7SUFDL0IsQ0FBQztJQUVELE1BQU1DLGVBQWVMLFVBQVUsQ0FBQyxFQUFFO0lBQ2xDLE1BQU1NLGdCQUFnQk4sVUFBVSxDQUFDLEVBQUU7SUFFbkMsTUFBTU8sVUFBVSxDQUFDRjtJQUNqQixNQUFNRyxXQUFXLENBQUNGO0lBRWxCLElBQ0VHLE1BQU1GLFlBQ05FLE1BQU1ELGFBQ05ELFVBQVUsUUFDVkEsVUFBVSxRQUNWQyxXQUFXLEtBQ1hBLFdBQVcsSUFDWDtRQUNBLHFCQUFPLDhEQUFDTDtZQUFFQyxXQUFVO3NCQUFTOzs7Ozs7SUFDL0IsQ0FBQztJQUVELE1BQU1NLGlCQUFpQmYsOERBQWlCQSxDQUFDO1FBQUVnQixNQUFNSjtRQUFTSyxPQUFPSjtJQUFTO0lBRTFFLElBQUksQ0FBQ0Usa0JBQWtCQSxlQUFlRyxNQUFNLEtBQUssR0FBRztRQUNsRCxxQkFDRSw4REFBQ1Y7WUFBRUMsV0FBVTtzQkFBUzs7Ozs7O0lBRTFCLENBQUM7SUFFRCxNQUFNVSxPQUFPLElBQUlDLEtBQUtSLFNBQVNDO0lBRS9CLHFCQUNFOzswQkFDRSw4REFBQ1gsd0VBQVlBOzs7OzswQkFDYiw4REFBQ0QscUVBQVNBO2dCQUFDb0IsT0FBT047Ozs7Ozs7O0FBR3hCLENBQUM7R0ExQ3VCWjs7UUFDUEwsa0RBQVNBOzs7S0FERksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz81MjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tIFwiLi4vLi4vZHVtbXktZGF0YVwiO1xuaW1wb3J0IEV2ZW50TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdFwiO1xuaW1wb3J0IFJlc3VsdHNUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvcmVzdWx0cy10aXRsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmlsdGVyRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnO1xuXG4gIGlmICghZmlsdGVyRGF0YSkge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XG4gIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xuXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuXG4gIGlmIChcbiAgICBpc05hTihudW1ZZWFyKSB8fFxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxuICAgIG51bVllYXIgPiAyMDMwIHx8XG4gICAgbnVtWWVhciA8IDIwMjIgfHxcbiAgICBudW1Nb250aCA8IDEgfHxcbiAgICBudW1Nb250aCA+IDEyXG4gICkge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5JbnZhbGlkIEZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+O1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBnZXRGaWx0ZXJlZEV2ZW50cyh7IHllYXI6IG51bVllYXIsIG1vbnRoOiBudW1Nb250aCB9KTtcblxuICBpZiAoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5ObyBFdmVudHMgRm91bmQgRm9yIFlvdXIgRmlsdGVyITwvcD5cbiAgICApXG4gIH1cblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUobnVtWWVhciwgbnVtTW9udGgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSZXN1bHRzVGl0bGUgLz5cbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiZ2V0RmlsdGVyZWRFdmVudHMiLCJFdmVudExpc3QiLCJSZXN1bHRzVGl0bGUiLCJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJyb3V0ZXIiLCJmaWx0ZXJEYXRhIiwicXVlcnkiLCJzbHVnIiwicCIsImNsYXNzTmFtZSIsImZpbHRlcmVkWWVhciIsImZpbHRlcmVkTW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImZpbHRlcmVkRXZlbnRzIiwieWVhciIsIm1vbnRoIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});