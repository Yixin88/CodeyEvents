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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction FilteredEventsPage(props) {\n    // const router = useRouter();\n    // const filterData = router.query.slug;\n    // if (!filterData) {\n    //   return <p className=\"center\">Loading...</p>;\n    // }\n    // const filteredYear = filterData[0];\n    // const filteredMonth = filterData[1];\n    // const numYear = +filteredYear;\n    // const numMonth = +filteredMonth;\n    if (props.hasError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"center\",\n                        children: \"Invalid Filter. Please adjust your values!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const filteredEvents = props.events;\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No Events Found For Your Filter!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const date = new Date(props.numYear, props.numMonth - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2Q7QUFFaUM7QUFDTTtBQUNqQjtBQUNTOztBQUUxQyxTQUFTTSxtQkFBbUJDLEtBQUssRUFBRTtJQUNoRCw4QkFBOEI7SUFFOUIsd0NBQXdDO0lBRXhDLHFCQUFxQjtJQUNyQixpREFBaUQ7SUFDakQsSUFBSTtJQUVKLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFFdkMsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUVuQyxJQUFJQSxNQUFNQyxRQUFRLEVBQUU7UUFDbEIscUJBQ0U7OzhCQUNFLDhEQUFDSCxrRUFBVUE7OEJBQ1QsNEVBQUNJO3dCQUFFQyxXQUFVO2tDQUFTOzs7Ozs7Ozs7Ozs4QkFFeEIsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDTiw2REFBTUE7d0JBQUNRLE1BQUs7a0NBQVU7Ozs7Ozs7Ozs7Ozs7SUFLakMsQ0FBQztJQUVELE1BQU1DLGlCQUFpQk4sTUFBTU8sTUFBTTtJQUVuQyxJQUFJLENBQUNELGtCQUFrQkEsZUFBZUUsTUFBTSxLQUFLLEdBQUc7UUFDbEQscUJBQ0U7OzhCQUNFLDhEQUFDVixrRUFBVUE7OEJBQ1QsNEVBQUNJO2tDQUFFOzs7Ozs7Ozs7Ozs4QkFFTCw4REFBQ0U7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNOLDZEQUFNQTt3QkFBQ1EsTUFBSztrQ0FBVTs7Ozs7Ozs7Ozs7OztJQUkvQixDQUFDO0lBRUQsTUFBTUksT0FBTyxJQUFJQyxLQUFLVixNQUFNVyxPQUFPLEVBQUVYLE1BQU1ZLFFBQVEsR0FBRztJQUV0RCxxQkFDRTs7MEJBQ0UsOERBQUNoQix3RUFBWUE7Z0JBQUNhLE1BQU1BOzs7Ozs7MEJBQ3BCLDhEQUFDZCxxRUFBU0E7Z0JBQUNrQixPQUFPUDs7Ozs7Ozs7QUFHeEIsQ0FBQztLQXBEdUJQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanM/NTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXBpLXV0aWxcIjtcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3RcIjtcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL3Jlc3VsdHMtdGl0bGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgRXJyb3JBbGVydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9lcnJvci1hbGVydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UocHJvcHMpIHtcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc3QgZmlsdGVyRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnO1xuXG4gIC8vIGlmICghZmlsdGVyRGF0YSkge1xuICAvLyAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gfVxuXG4gIC8vIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XG4gIC8vIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xuXG4gIC8vIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuICAvLyBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuXG4gIGlmIChwcm9wcy5oYXNFcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8RXJyb3JBbGVydD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5JbnZhbGlkIEZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+XG4gICAgICAgIDwvRXJyb3JBbGVydD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gbGluaz0nL2V2ZW50cyc+U2hvdyBBbGwgRXZlbnQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICAgIFxuICAgICk7XG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IHByb3BzLmV2ZW50cztcblxuICBpZiAoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8RXJyb3JBbGVydD5cbiAgICAgICAgICA8cD5ObyBFdmVudHMgRm91bmQgRm9yIFlvdXIgRmlsdGVyITwvcD5cbiAgICAgICAgPC9FcnJvckFsZXJ0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gbGluaz0nL2V2ZW50cyc+U2hvdyBBbGwgRXZlbnQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUocHJvcHMubnVtWWVhciwgcHJvcHMubnVtTW9udGggLSAxKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UmVzdWx0c1RpdGxlIGRhdGU9e2RhdGV9Lz5cbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XG5cbiAgY29uc3QgZmlsdGVyRGF0YSA9IHBhcmFtcy5zbHVnO1xuXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XG4gIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xuXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuXG4gIGlmIChcbiAgICBpc05hTihudW1ZZWFyKSB8fFxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxuICAgIG51bVllYXIgPiAyMDMwIHx8XG4gICAgbnVtWWVhciA8IDIwMjIgfHxcbiAgICBudW1Nb250aCA8IDEgfHxcbiAgICBudW1Nb250aCA+IDEyXG4gICkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBoYXNFcnJvcjogdHJ1ZVxuICAgICAgfVxuICAgICAgLy8gbm90Rm91bmQ6IHRydWUsICAgICAgICAgIC8vU2hvdyA0MDQgcGFnZSBpbnN0ZWFkXG4gICAgICAvLyByZWRpcmVjdDoge1xuICAgICAgLy8gICBkZXN0aW5hdGlvbjogJy9lcnJvcicgLy9DYW4gdXNlIHRoaXMgdG8gcmVkaXJlY3QgdG8gYSBzcGVjaWZpYyBlcnJvciBwYWdlIGlmIHdlIGhhdmUgb25lIGUuZy4gZXJyb3IuanNcbiAgICAgIC8vIH1cbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7IHllYXI6IG51bVllYXIsIG1vbnRoOiBudW1Nb250aCB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBldmVudHM6IGZpbHRlcmVkRXZlbnRzLFxuICAgICAgZGF0ZToge1xuICAgICAgICB5ZWFyOiBudW1ZZWFyLFxuICAgICAgICBtb250aDogbnVtTW9udGhcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsIkV2ZW50TGlzdCIsIlJlc3VsdHNUaXRsZSIsIkJ1dHRvbiIsIkVycm9yQWxlcnQiLCJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsImhhc0Vycm9yIiwicCIsImNsYXNzTmFtZSIsImRpdiIsImxpbmsiLCJmaWx0ZXJlZEV2ZW50cyIsImV2ZW50cyIsImxlbmd0aCIsImRhdGUiLCJEYXRlIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});