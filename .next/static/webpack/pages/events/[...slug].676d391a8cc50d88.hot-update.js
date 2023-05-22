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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ \"./pages/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FilteredEventsPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filterData = router.query.slug;\n    if (!filterData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this);\n    }\n    const filteredYear = filterData[0];\n    const filteredMonth = filterData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2022 || numMonth < 1 || numMonth > 12) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Invalid Filter. Please adjust your values!\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    const filteredEvents = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_3__.getFilteredEvents)({\n        year: numYear,\n        month: numMonth\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"No Events Found For Your Filter!\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FilteredEventsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDZDtBQUMyQjtBQUNNO0FBQzdCO0FBRWYsU0FBU0sscUJBQXFCOztJQUMzQyxNQUFNQyxTQUFTTixzREFBU0E7SUFFeEIsTUFBTU8sYUFBYUQsT0FBT0UsS0FBSyxDQUFDQyxJQUFJO0lBRXBDLElBQUksQ0FBQ0YsWUFBWTtRQUNmLHFCQUFPLDhEQUFDRztZQUFFQyxXQUFVO3NCQUFTOzs7Ozs7SUFDL0IsQ0FBQztJQUVELE1BQU1DLGVBQWVMLFVBQVUsQ0FBQyxFQUFFO0lBQ2xDLE1BQU1NLGdCQUFnQk4sVUFBVSxDQUFDLEVBQUU7SUFFbkMsTUFBTU8sVUFBVSxDQUFDRjtJQUNqQixNQUFNRyxXQUFXLENBQUNGO0lBRWxCLElBQ0VHLE1BQU1GLFlBQ05FLE1BQU1ELGFBQ05ELFVBQVUsUUFDVkEsVUFBVSxRQUNWQyxXQUFXLEtBQ1hBLFdBQVcsSUFDWDtRQUNBLHFCQUFPLDhEQUFDTDtZQUFFQyxXQUFVO3NCQUFTOzs7Ozs7SUFDL0IsQ0FBQztJQUVELE1BQU1NLGlCQUFpQmYsOERBQWlCQSxDQUFDO1FBQUVnQixNQUFNSjtRQUFTSyxPQUFPSjtJQUFTO0lBRTFFLElBQUksQ0FBQ0Usa0JBQWtCQSxlQUFlRyxNQUFNLEtBQUssR0FBRztRQUNsRCxxQkFDRSw4REFBQ1Y7WUFBRUMsV0FBVTtzQkFBUzs7Ozs7O0lBRTFCLENBQUM7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNQLHlDQUFZQTs7Ozs7MEJBQ2IsOERBQUNELHFFQUFTQTtnQkFBQ2tCLE9BQU9KOzs7Ozs7OztBQUd4QixDQUFDO0dBeEN1Qlo7O1FBQ1BMLGtEQUFTQTs7O0tBREZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanM/NTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2R1bW15LWRhdGFcIjtcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3RcIjtcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSBcIi4uL1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmlsdGVyRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnO1xuXG4gIGlmICghZmlsdGVyRGF0YSkge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XG4gIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xuXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuXG4gIGlmIChcbiAgICBpc05hTihudW1ZZWFyKSB8fFxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxuICAgIG51bVllYXIgPiAyMDMwIHx8XG4gICAgbnVtWWVhciA8IDIwMjIgfHxcbiAgICBudW1Nb250aCA8IDEgfHxcbiAgICBudW1Nb250aCA+IDEyXG4gICkge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5JbnZhbGlkIEZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+O1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBnZXRGaWx0ZXJlZEV2ZW50cyh7IHllYXI6IG51bVllYXIsIG1vbnRoOiBudW1Nb250aCB9KTtcblxuICBpZiAoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5ObyBFdmVudHMgRm91bmQgRm9yIFlvdXIgRmlsdGVyITwvcD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UmVzdWx0c1RpdGxlIC8+XG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtmaWx0ZXJlZEV2ZW50c30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsImdldEZpbHRlcmVkRXZlbnRzIiwiRXZlbnRMaXN0IiwiUmVzdWx0c1RpdGxlIiwiRmlsdGVyZWRFdmVudHNQYWdlIiwicm91dGVyIiwiZmlsdGVyRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsInAiLCJjbGFzc05hbWUiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsInllYXIiLCJtb250aCIsImxlbmd0aCIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/events/event-list */ \"./components/events/event-list.js\");\n\n\n\n\nfunction HomePage() {\n    const featuredEvents = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_2__.getFeaturedEvents)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            items: featuredEvents\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDd0I7QUFDTztBQUV6QyxTQUFTRyxXQUFXO0lBRWpDLE1BQU1DLGlCQUFpQkgsOERBQWlCQTtJQUV4QyxxQkFDRSw4REFBQ0k7a0JBQ0MsNEVBQUNILHFFQUFTQTtZQUFDSSxPQUFPRjs7Ozs7Ozs7Ozs7QUFHeEIsQ0FBQztLQVR1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRGZWF0dXJlZEV2ZW50cyB9IGZyb20gJy4uL2R1bW15LWRhdGEnXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblxuICBjb25zdCBmZWF0dXJlZEV2ZW50cyA9IGdldEZlYXR1cmVkRXZlbnRzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmVhdHVyZWRFdmVudHN9Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0RmVhdHVyZWRFdmVudHMiLCJFdmVudExpc3QiLCJIb21lUGFnZSIsImZlYXR1cmVkRXZlbnRzIiwiZGl2IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});