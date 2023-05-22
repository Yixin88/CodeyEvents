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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/button */ \"./components/ui/button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction FilteredEventsPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filterData = router.query.slug;\n    if (!filterData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    const filteredYear = filterData[0];\n    const filteredMonth = filterData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2022 || numMonth < 1 || numMonth > 12) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Invalid Filter. Please adjust your values!\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, this);\n    }\n    const filteredEvents = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_3__.getFilteredEvents)({\n        year: numYear,\n        month: numMonth\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"center\",\n                    children: \"No Events Found For Your Filter!\"\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    link: \"/events\",\n                    children: \"Show All Event\"\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const date = new Date(numYear, numMonth - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FilteredEventsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ2Q7QUFDMkI7QUFDTTtBQUNLO0FBQ2hCO0FBRWpDLFNBQVNNLHFCQUFxQjs7SUFDM0MsTUFBTUMsU0FBU1Asc0RBQVNBO0lBRXhCLE1BQU1RLGFBQWFELE9BQU9FLEtBQUssQ0FBQ0MsSUFBSTtJQUVwQyxJQUFJLENBQUNGLFlBQVk7UUFDZixxQkFBTyw4REFBQ0c7WUFBRUMsV0FBVTtzQkFBUzs7Ozs7O0lBQy9CLENBQUM7SUFFRCxNQUFNQyxlQUFlTCxVQUFVLENBQUMsRUFBRTtJQUNsQyxNQUFNTSxnQkFBZ0JOLFVBQVUsQ0FBQyxFQUFFO0lBRW5DLE1BQU1PLFVBQVUsQ0FBQ0Y7SUFDakIsTUFBTUcsV0FBVyxDQUFDRjtJQUVsQixJQUNFRyxNQUFNRixZQUNORSxNQUFNRCxhQUNORCxVQUFVLFFBQ1ZBLFVBQVUsUUFDVkMsV0FBVyxLQUNYQSxXQUFXLElBQ1g7UUFDQSxxQkFBTyw4REFBQ0w7WUFBRUMsV0FBVTtzQkFBUzs7Ozs7O0lBQy9CLENBQUM7SUFFRCxNQUFNTSxpQkFBaUJoQiw4REFBaUJBLENBQUM7UUFBRWlCLE1BQU1KO1FBQVNLLE9BQU9KO0lBQVM7SUFFMUUsSUFBSSxDQUFDRSxrQkFBa0JBLGVBQWVHLE1BQU0sS0FBSyxHQUFHO1FBQ2xELHFCQUNFOzs4QkFDRSw4REFBQ1Y7b0JBQUVDLFdBQVU7OEJBQVM7Ozs7Ozs4QkFDdEIsOERBQUNQLDZEQUFNQTtvQkFBRWlCLE1BQUs7OEJBQVU7Ozs7Ozs7O0lBRzlCLENBQUM7SUFFRCxNQUFNQyxPQUFPLElBQUlDLEtBQUtULFNBQVNDLFdBQVc7SUFFMUMscUJBQ0U7OzBCQUNFLDhEQUFDWix3RUFBWUE7Z0JBQUNtQixNQUFNQTs7Ozs7OzBCQUNwQiw4REFBQ3BCLHFFQUFTQTtnQkFBQ3NCLE9BQU9QOzs7Ozs7OztBQUd4QixDQUFDO0dBN0N1Qlo7O1FBQ1BOLGtEQUFTQTs7O0tBREZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanM/NTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2R1bW15LWRhdGFcIjtcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3RcIjtcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL3Jlc3VsdHMtdGl0bGVcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9idXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyZWRFdmVudHNQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG5cbiAgaWYgKCFmaWx0ZXJEYXRhKSB7XG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkxvYWRpbmcuLi48L3A+O1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbiAgaWYgKFxuICAgIGlzTmFOKG51bVllYXIpIHx8XG4gICAgaXNOYU4obnVtTW9udGgpIHx8XG4gICAgbnVtWWVhciA+IDIwMzAgfHxcbiAgICBudW1ZZWFyIDwgMjAyMiB8fFxuICAgIG51bU1vbnRoIDwgMSB8fFxuICAgIG51bU1vbnRoID4gMTJcbiAgKSB7XG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkludmFsaWQgRmlsdGVyLiBQbGVhc2UgYWRqdXN0IHlvdXIgdmFsdWVzITwvcD47XG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGdldEZpbHRlcmVkRXZlbnRzKHsgeWVhcjogbnVtWWVhciwgbW9udGg6IG51bU1vbnRoIH0pO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPk5vIEV2ZW50cyBGb3VuZCBGb3IgWW91ciBGaWx0ZXIhPC9wPlxuICAgICAgICA8QnV0dG9uICBsaW5rPScvZXZlbnRzJz5TaG93IEFsbCBFdmVudDwvQnV0dG9uPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG51bVllYXIsIG51bU1vbnRoIC0gMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlfS8+XG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtmaWx0ZXJlZEV2ZW50c30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsImdldEZpbHRlcmVkRXZlbnRzIiwiRXZlbnRMaXN0IiwiUmVzdWx0c1RpdGxlIiwiQnV0dG9uIiwiRmlsdGVyZWRFdmVudHNQYWdlIiwicm91dGVyIiwiZmlsdGVyRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsInAiLCJjbGFzc05hbWUiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsInllYXIiLCJtb250aCIsImxlbmd0aCIsImxpbmsiLCJkYXRlIiwiRGF0ZSIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});