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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction FilteredEventsPage(props) {\n    // const router = useRouter();\n    // const filterData = router.query.slug;\n    // if (!filterData) {\n    //   return <p className=\"center\">Loading...</p>;\n    // }\n    // const filteredYear = filterData[0];\n    // const filteredMonth = filterData[1];\n    // const numYear = +filteredYear;\n    // const numMonth = +filteredMonth;\n    if (props.hasError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"center\",\n                        children: \"Invalid Filter. Please adjust your values!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const filteredEvents = props.events;\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No Events Found For Your Filter!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const date = new Date(props.date.numYear, props.numMonth - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2Q7QUFFaUM7QUFDTTtBQUNqQjtBQUNTOztBQUUxQyxTQUFTTSxtQkFBbUJDLEtBQUssRUFBRTtJQUNoRCw4QkFBOEI7SUFFOUIsd0NBQXdDO0lBRXhDLHFCQUFxQjtJQUNyQixpREFBaUQ7SUFDakQsSUFBSTtJQUVKLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFFdkMsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUVuQyxJQUFJQSxNQUFNQyxRQUFRLEVBQUU7UUFDbEIscUJBQ0U7OzhCQUNFLDhEQUFDSCxrRUFBVUE7OEJBQ1QsNEVBQUNJO3dCQUFFQyxXQUFVO2tDQUFTOzs7Ozs7Ozs7Ozs4QkFFeEIsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDTiw2REFBTUE7d0JBQUNRLE1BQUs7a0NBQVU7Ozs7Ozs7Ozs7Ozs7SUFLakMsQ0FBQztJQUVELE1BQU1DLGlCQUFpQk4sTUFBTU8sTUFBTTtJQUVuQyxJQUFJLENBQUNELGtCQUFrQkEsZUFBZUUsTUFBTSxLQUFLLEdBQUc7UUFDbEQscUJBQ0U7OzhCQUNFLDhEQUFDVixrRUFBVUE7OEJBQ1QsNEVBQUNJO2tDQUFFOzs7Ozs7Ozs7Ozs4QkFFTCw4REFBQ0U7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNOLDZEQUFNQTt3QkFBQ1EsTUFBSztrQ0FBVTs7Ozs7Ozs7Ozs7OztJQUkvQixDQUFDO0lBRUQsTUFBTUksT0FBTyxJQUFJQyxLQUFLVixNQUFNUyxJQUFJLENBQUNFLE9BQU8sRUFBRVgsTUFBTVksUUFBUSxHQUFHO0lBRTNELHFCQUNFOzswQkFDRSw4REFBQ2hCLHdFQUFZQTtnQkFBQ2EsTUFBTUE7Ozs7OzswQkFDcEIsOERBQUNkLHFFQUFTQTtnQkFBQ2tCLE9BQU9QOzs7Ozs7OztBQUd4QixDQUFDO0tBcER1QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz81MjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hcGktdXRpbFwiO1xuaW1wb3J0IEV2ZW50TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdFwiO1xuaW1wb3J0IFJlc3VsdHNUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvcmVzdWx0cy10aXRsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2Vycm9yLWFsZXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZShwcm9wcykge1xuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG5cbiAgLy8gaWYgKCFmaWx0ZXJEYXRhKSB7XG4gIC8vICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkxvYWRpbmcuLi48L3A+O1xuICAvLyB9XG5cbiAgLy8gY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbiAgLy8gY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbiAgLy8gY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gIC8vIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbiAgaWYgKHByb3BzLmhhc0Vycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkludmFsaWQgRmlsdGVyLiBQbGVhc2UgYWRqdXN0IHlvdXIgdmFsdWVzITwvcD5cbiAgICAgICAgPC9FcnJvckFsZXJ0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBsaW5rPScvZXZlbnRzJz5TaG93IEFsbCBFdmVudDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICAgXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gcHJvcHMuZXZlbnRzO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICAgIDxwPk5vIEV2ZW50cyBGb3VuZCBGb3IgWW91ciBGaWx0ZXIhPC9wPlxuICAgICAgICA8L0Vycm9yQWxlcnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPScvZXZlbnRzJz5TaG93IEFsbCBFdmVudDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwcm9wcy5kYXRlLm51bVllYXIsIHByb3BzLm51bU1vbnRoIC0gMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlfS8+XG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtmaWx0ZXJlZEV2ZW50c30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IGZpbHRlckRhdGEgPSBwYXJhbXMuc2x1ZztcblxuICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdO1xuICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcblxuICBjb25zdCBudW1ZZWFyID0gK2ZpbHRlcmVkWWVhcjtcbiAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcblxuICBpZiAoXG4gICAgaXNOYU4obnVtWWVhcikgfHxcbiAgICBpc05hTihudW1Nb250aCkgfHxcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxuICAgIG51bVllYXIgPCAyMDIyIHx8XG4gICAgbnVtTW9udGggPCAxIHx8XG4gICAgbnVtTW9udGggPiAxMlxuICApIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaGFzRXJyb3I6IHRydWVcbiAgICAgIH1cbiAgICAgIC8vIG5vdEZvdW5kOiB0cnVlLCAgICAgICAgICAvL1Nob3cgNDA0IHBhZ2UgaW5zdGVhZFxuICAgICAgLy8gcmVkaXJlY3Q6IHtcbiAgICAgIC8vICAgZGVzdGluYXRpb246ICcvZXJyb3InIC8vQ2FuIHVzZSB0aGlzIHRvIHJlZGlyZWN0IHRvIGEgc3BlY2lmaWMgZXJyb3IgcGFnZSBpZiB3ZSBoYXZlIG9uZSBlLmcuIGVycm9yLmpzXG4gICAgICAvLyB9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gYXdhaXQgZ2V0RmlsdGVyZWRFdmVudHMoeyB5ZWFyOiBudW1ZZWFyLCBtb250aDogbnVtTW9udGggfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZXZlbnRzOiBmaWx0ZXJlZEV2ZW50cyxcbiAgICAgIGRhdGU6IHtcbiAgICAgICAgeWVhcjogbnVtWWVhcixcbiAgICAgICAgbW9udGg6IG51bU1vbnRoXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJFdmVudExpc3QiLCJSZXN1bHRzVGl0bGUiLCJCdXR0b24iLCJFcnJvckFsZXJ0IiwiRmlsdGVyZWRFdmVudHNQYWdlIiwicHJvcHMiLCJoYXNFcnJvciIsInAiLCJjbGFzc05hbWUiLCJkaXYiLCJsaW5rIiwiZmlsdGVyZWRFdmVudHMiLCJldmVudHMiLCJsZW5ndGgiLCJkYXRlIiwiRGF0ZSIsIm51bVllYXIiLCJudW1Nb250aCIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});