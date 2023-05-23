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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/api-util */ \"./helpers/api-util.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction FilteredEventsPage(props) {\n    _s();\n    const [loadedEvents, setLoadedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filterData = router.query.slug;\n    const fetcher = (url)=>fetch(url).then((r)=>r.json());\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"https://nextjs-course-4ba9d-default-rtdb.firebaseio.com/events.json\", fetcher);\n    const filteredYear = filterData[0];\n    const filteredMonth = filterData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    const pageHeadData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Filtered Events\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"All events for \".concat(numMonth, \"/\").concat(numYear)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data) {\n            const events = [];\n            for(const key in data){\n                events.push({\n                    id: key,\n                    ...data[key]\n                });\n            }\n            setLoadedEvents(events);\n        }\n    }, [\n        data\n    ]);\n    if (!loadedEvents) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"center\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, this);\n    }\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2022 || numMonth < 1 || numMonth > 12 || error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"center\",\n                        children: \"Invalid Filter. Please adjust your values!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    let filteredEvents = loadedEvents.filter((event)=>{\n        const eventDate = new Date(event.date);\n        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No Events Found For Your Filter!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const date = new Date(numYear, numMonth - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Filtered Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"All events for \".concat(numMonth, \"/\").concat(numYear)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // export async function getServerSideProps(context) {\n //   const { params } = context;\n //   const filterData = params.slug;\n //   const filteredYear = filterData[0];\n //   const filteredMonth = filterData[1];\n //   const numYear = +filteredYear;\n //   const numMonth = +filteredMonth;\n //   if (\n //     isNaN(numYear) ||\n //     isNaN(numMonth) ||\n //     numYear > 2030 ||\n //     numYear < 2022 ||\n //     numMonth < 1 ||\n //     numMonth > 12\n //   ) {\n //     return {\n //       props: {\n //         hasError: true,\n //       },\n //       // notFound: true,          //Show 404 page instead\n //       // redirect: {\n //       //   destination: '/error' //Can use this to redirect to a specific error page if we have one e.g. error.js\n //       // }\n //     };\n //   }\n //   const filteredEvents = await getFilteredEvents({\n //     year: numYear,\n //     month: numMonth,\n //   });\n //   return {\n //     props: {\n //       events: filteredEvents,\n //       date: {\n //         year: numYear,\n //         month: numMonth,\n //       },\n //     },\n //   };\n // }\n_s(FilteredEventsPage, \"baGcR2zYNkTBGEMbpcQg6la1mJw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2lELE9BQU9UOzs7Ozs7OztBQUd4QixDQUFDLENBRUQsc0RBQXNEO0NBQ3RELGdDQUFnQztDQUVoQyxvQ0FBb0M7Q0FFcEMsd0NBQXdDO0NBQ3hDLHlDQUF5QztDQUV6QyxtQ0FBbUM7Q0FDbkMscUNBQXFDO0NBRXJDLFNBQVM7Q0FDVCx3QkFBd0I7Q0FDeEIseUJBQXlCO0NBQ3pCLHdCQUF3QjtDQUN4Qix3QkFBd0I7Q0FDeEIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixRQUFRO0NBQ1IsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiwwQkFBMEI7Q0FDMUIsV0FBVztDQUNYLDREQUE0RDtDQUM1RCx1QkFBdUI7Q0FDdkIsb0hBQW9IO0NBQ3BILGFBQWE7Q0FDYixTQUFTO0NBQ1QsTUFBTTtDQUVOLHFEQUFxRDtDQUNyRCxxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLFFBQVE7Q0FFUixhQUFhO0NBQ2IsZUFBZTtDQUNmLGdDQUFnQztDQUNoQyxnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLDJCQUEyQjtDQUMzQixXQUFXO0NBQ1gsU0FBUztDQUNULE9BQU87Q0FDUCxJQUFJO0dBL0lvQmxDOztRQUVQWCxrREFBU0E7UUFLQVMsMkNBQU1BOzs7S0FQUkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz81MjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXBpLXV0aWxcIjtcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3RcIjtcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL3Jlc3VsdHMtdGl0bGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgRXJyb3JBbGVydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9lcnJvci1hbGVydFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZShwcm9wcykge1xuICBjb25zdCBbbG9hZGVkRXZlbnRzLCBzZXRMb2FkZWRFdmVudHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmlsdGVyRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnO1xuXG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHIpID0+IHIuanNvbigpKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIFwiaHR0cHM6Ly9uZXh0anMtY291cnNlLTRiYTlkLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ldmVudHMuanNvblwiLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdO1xuICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcblxuICBjb25zdCBudW1ZZWFyID0gK2ZpbHRlcmVkWWVhcjtcbiAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcblxuICBjb25zdCBwYWdlSGVhZERhdGEgPSAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+RmlsdGVyZWQgRXZlbnRzPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtgQWxsIGV2ZW50cyBmb3IgJHtudW1Nb250aH0vJHtudW1ZZWFyfWB9IC8+XG4gICAgPC9IZWFkPlxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gW107XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgLi4uZGF0YVtrZXldLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2V0TG9hZGVkRXZlbnRzKGV2ZW50cyk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIGlmICghbG9hZGVkRXZlbnRzKSB7XG4gICAgcmV0dXJuICg8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5Mb2FkaW5nLi4uPC9wPik7XG4gIH1cblxuICBpZiAoXG4gICAgaXNOYU4obnVtWWVhcikgfHxcbiAgICBpc05hTihudW1Nb250aCkgfHxcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxuICAgIG51bVllYXIgPCAyMDIyIHx8XG4gICAgbnVtTW9udGggPCAxIHx8XG4gICAgbnVtTW9udGggPiAxMiB8fCBlcnJvclxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEVycm9yQWxlcnQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+SW52YWxpZCBGaWx0ZXIuIFBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhPC9wPlxuICAgICAgICA8L0Vycm9yQWxlcnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPVwiL2V2ZW50c1wiPlNob3cgQWxsIEV2ZW50PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGxldCBmaWx0ZXJlZEV2ZW50cyA9IGxvYWRlZEV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQuZGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIGV2ZW50RGF0ZS5nZXRGdWxsWWVhcigpID09PSBudW1ZZWFyICYmXG4gICAgICBldmVudERhdGUuZ2V0TW9udGgoKSA9PT0gbnVtTW9udGggLSAxXG4gICAgKTtcbiAgfSk7XG5cbiAgaWYgKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEVycm9yQWxlcnQ+XG4gICAgICAgICAgPHA+Tm8gRXZlbnRzIEZvdW5kIEZvciBZb3VyIEZpbHRlciE8L3A+XG4gICAgICAgIDwvRXJyb3JBbGVydD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGxpbms9XCIvZXZlbnRzXCI+U2hvdyBBbGwgRXZlbnQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG51bVllYXIsIG51bU1vbnRoIC0gMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GaWx0ZXJlZCBFdmVudHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17YEFsbCBldmVudHMgZm9yICR7bnVtTW9udGh9LyR7bnVtWWVhcn1gfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlfSAvPlxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcblxuLy8gICBjb25zdCBmaWx0ZXJEYXRhID0gcGFyYW1zLnNsdWc7XG5cbi8vICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbi8vICAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbi8vICAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4vLyAgIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbi8vICAgaWYgKFxuLy8gICAgIGlzTmFOKG51bVllYXIpIHx8XG4vLyAgICAgaXNOYU4obnVtTW9udGgpIHx8XG4vLyAgICAgbnVtWWVhciA+IDIwMzAgfHxcbi8vICAgICBudW1ZZWFyIDwgMjAyMiB8fFxuLy8gICAgIG51bU1vbnRoIDwgMSB8fFxuLy8gICAgIG51bU1vbnRoID4gMTJcbi8vICAgKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIGhhc0Vycm9yOiB0cnVlLFxuLy8gICAgICAgfSxcbi8vICAgICAgIC8vIG5vdEZvdW5kOiB0cnVlLCAgICAgICAgICAvL1Nob3cgNDA0IHBhZ2UgaW5zdGVhZFxuLy8gICAgICAgLy8gcmVkaXJlY3Q6IHtcbi8vICAgICAgIC8vICAgZGVzdGluYXRpb246ICcvZXJyb3InIC8vQ2FuIHVzZSB0aGlzIHRvIHJlZGlyZWN0IHRvIGEgc3BlY2lmaWMgZXJyb3IgcGFnZSBpZiB3ZSBoYXZlIG9uZSBlLmcuIGVycm9yLmpzXG4vLyAgICAgICAvLyB9XG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gYXdhaXQgZ2V0RmlsdGVyZWRFdmVudHMoe1xuLy8gICAgIHllYXI6IG51bVllYXIsXG4vLyAgICAgbW9udGg6IG51bU1vbnRoLFxuLy8gICB9KTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBldmVudHM6IGZpbHRlcmVkRXZlbnRzLFxuLy8gICAgICAgZGF0ZToge1xuLy8gICAgICAgICB5ZWFyOiBudW1ZZWFyLFxuLy8gICAgICAgICBtb250aDogbnVtTW9udGgsXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEZpbHRlcmVkRXZlbnRzIiwiRXZlbnRMaXN0IiwiUmVzdWx0c1RpdGxlIiwiQnV0dG9uIiwiRXJyb3JBbGVydCIsInVzZVNXUiIsIkhlYWQiLCJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsImxvYWRlZEV2ZW50cyIsInNldExvYWRlZEV2ZW50cyIsInJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwicGFnZUhlYWREYXRhIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJldmVudHMiLCJrZXkiLCJwdXNoIiwiaWQiLCJwIiwiY2xhc3NOYW1lIiwiaXNOYU4iLCJkaXYiLCJsaW5rIiwiZmlsdGVyZWRFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImV2ZW50RGF0ZSIsIkRhdGUiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImxlbmd0aCIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});