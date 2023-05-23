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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/api-util */ \"./helpers/api-util.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction FilteredEventsPage(props) {\n    _s();\n    const [loadedEvents, setLoadedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filterData = router.query.slug;\n    const fetcher = (url)=>fetch(url).then((r)=>r.json());\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"https://nextjs-course-4ba9d-default-rtdb.firebaseio.com/events.json\", fetcher);\n    const filteredYear = filterData[0];\n    const filteredMonth = filterData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    const pageHeadData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Filtered Events\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"All events for \".concat(numMonth, \"/\").concat(numYear)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data) {\n            const events = [];\n            for(const key in data){\n                events.push({\n                    id: key,\n                    ...data[key]\n                });\n            }\n            setLoadedEvents(events);\n        }\n    }, [\n        data\n    ]);\n    if (!loadedEvents) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                pageHeadData,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"center\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2022 || numMonth < 1 || numMonth > 12 || error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                pageHeadData,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"center\",\n                        children: \"Invalid Filter. Please adjust your values!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    let filteredEvents = loadedEvents.filter((event)=>{\n        const eventDate = new Date(event.date);\n        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                p,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No Events Found For Your Filter!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const date = new Date(numYear, numMonth - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Filtered Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"All events for \".concat(numMonth, \"/\").concat(numYear)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // export async function getServerSideProps(context) {\n //   const { params } = context;\n //   const filterData = params.slug;\n //   const filteredYear = filterData[0];\n //   const filteredMonth = filterData[1];\n //   const numYear = +filteredYear;\n //   const numMonth = +filteredMonth;\n //   if (\n //     isNaN(numYear) ||\n //     isNaN(numMonth) ||\n //     numYear > 2030 ||\n //     numYear < 2022 ||\n //     numMonth < 1 ||\n //     numMonth > 12\n //   ) {\n //     return {\n //       props: {\n //         hasError: true,\n //       },\n //       // notFound: true,          //Show 404 page instead\n //       // redirect: {\n //       //   destination: '/error' //Can use this to redirect to a specific error page if we have one e.g. error.js\n //       // }\n //     };\n //   }\n //   const filteredEvents = await getFilteredEvents({\n //     year: numYear,\n //     month: numMonth,\n //   });\n //   return {\n //     props: {\n //       events: filteredEvents,\n //       date: {\n //         year: numYear,\n //         month: numMonth,\n //       },\n //     },\n //   };\n // }\n_s(FilteredEventsPage, \"baGcR2zYNkTBGEMbpcQg6la1mJw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzswQkFDcEIsOERBQUM3QyxxRUFBU0E7Z0JBQUNpRCxPQUFPVDs7Ozs7Ozs7QUFHeEIsQ0FBQyxDQUVELHNEQUFzRDtDQUN0RCxnQ0FBZ0M7Q0FFaEMsb0NBQW9DO0NBRXBDLHdDQUF3QztDQUN4Qyx5Q0FBeUM7Q0FFekMsbUNBQW1DO0NBQ25DLHFDQUFxQztDQUVyQyxTQUFTO0NBQ1Qsd0JBQXdCO0NBQ3hCLHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIsUUFBUTtDQUNSLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsMEJBQTBCO0NBQzFCLFdBQVc7Q0FDWCw0REFBNEQ7Q0FDNUQsdUJBQXVCO0NBQ3ZCLG9IQUFvSDtDQUNwSCxhQUFhO0NBQ2IsU0FBUztDQUNULE1BQU07Q0FFTixxREFBcUQ7Q0FDckQscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixRQUFRO0NBRVIsYUFBYTtDQUNiLGVBQWU7Q0FDZixnQ0FBZ0M7Q0FDaEMsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QiwyQkFBMkI7Q0FDM0IsV0FBVztDQUNYLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsSUFBSTtHQXRKb0JsQzs7UUFFUFgsa0RBQVNBO1FBS0FTLDJDQUFNQTs7O0tBUFJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanM/NTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaS11dGlsXCI7XG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0XCI7XG5pbXBvcnQgUmVzdWx0c1RpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9yZXN1bHRzLXRpdGxlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvZXJyb3ItYWxlcnRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UocHJvcHMpIHtcbiAgY29uc3QgW2xvYWRlZEV2ZW50cywgc2V0TG9hZGVkRXZlbnRzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcblxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyKSA9PiByLmpzb24oKSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICBcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS00YmE5ZC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZXZlbnRzLmpzb25cIixcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbiAgY29uc3QgcGFnZUhlYWREYXRhID0gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkZpbHRlcmVkIEV2ZW50czwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17YEFsbCBldmVudHMgZm9yICR7bnVtTW9udGh9LyR7bnVtWWVhcn1gfSAvPlxuICAgIDwvSGVhZD5cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIC4uLmRhdGFba2V5XSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNldExvYWRlZEV2ZW50cyhldmVudHMpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICBpZiAoIWxvYWRlZEV2ZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7cGFnZUhlYWREYXRhfVxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5Mb2FkaW5nLi4uPC9wPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChcbiAgICBpc05hTihudW1ZZWFyKSB8fFxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxuICAgIG51bVllYXIgPiAyMDMwIHx8XG4gICAgbnVtWWVhciA8IDIwMjIgfHxcbiAgICBudW1Nb250aCA8IDEgfHxcbiAgICBudW1Nb250aCA+IDEyIHx8IGVycm9yXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7cGFnZUhlYWREYXRhfVxuICAgICAgICA8RXJyb3JBbGVydD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5JbnZhbGlkIEZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+XG4gICAgICAgIDwvRXJyb3JBbGVydD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGxpbms9XCIvZXZlbnRzXCI+U2hvdyBBbGwgRXZlbnQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgbGV0IGZpbHRlcmVkRXZlbnRzID0gbG9hZGVkRXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShldmVudC5kYXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IG51bVllYXIgJiZcbiAgICAgIGV2ZW50RGF0ZS5nZXRNb250aCgpID09PSBudW1Nb250aCAtIDFcbiAgICApO1xuICB9KTtcblxuICBpZiAoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7cH1cbiAgICAgICAgPEVycm9yQWxlcnQ+XG4gICAgICAgICAgPHA+Tm8gRXZlbnRzIEZvdW5kIEZvciBZb3VyIEZpbHRlciE8L3A+XG4gICAgICAgIDwvRXJyb3JBbGVydD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGxpbms9XCIvZXZlbnRzXCI+U2hvdyBBbGwgRXZlbnQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG51bVllYXIsIG51bU1vbnRoIC0gMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GaWx0ZXJlZCBFdmVudHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17YEFsbCBldmVudHMgZm9yICR7bnVtTW9udGh9LyR7bnVtWWVhcn1gfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlfSAvPlxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcblxuLy8gICBjb25zdCBmaWx0ZXJEYXRhID0gcGFyYW1zLnNsdWc7XG5cbi8vICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbi8vICAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbi8vICAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4vLyAgIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbi8vICAgaWYgKFxuLy8gICAgIGlzTmFOKG51bVllYXIpIHx8XG4vLyAgICAgaXNOYU4obnVtTW9udGgpIHx8XG4vLyAgICAgbnVtWWVhciA+IDIwMzAgfHxcbi8vICAgICBudW1ZZWFyIDwgMjAyMiB8fFxuLy8gICAgIG51bU1vbnRoIDwgMSB8fFxuLy8gICAgIG51bU1vbnRoID4gMTJcbi8vICAgKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIGhhc0Vycm9yOiB0cnVlLFxuLy8gICAgICAgfSxcbi8vICAgICAgIC8vIG5vdEZvdW5kOiB0cnVlLCAgICAgICAgICAvL1Nob3cgNDA0IHBhZ2UgaW5zdGVhZFxuLy8gICAgICAgLy8gcmVkaXJlY3Q6IHtcbi8vICAgICAgIC8vICAgZGVzdGluYXRpb246ICcvZXJyb3InIC8vQ2FuIHVzZSB0aGlzIHRvIHJlZGlyZWN0IHRvIGEgc3BlY2lmaWMgZXJyb3IgcGFnZSBpZiB3ZSBoYXZlIG9uZSBlLmcuIGVycm9yLmpzXG4vLyAgICAgICAvLyB9XG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gYXdhaXQgZ2V0RmlsdGVyZWRFdmVudHMoe1xuLy8gICAgIHllYXI6IG51bVllYXIsXG4vLyAgICAgbW9udGg6IG51bU1vbnRoLFxuLy8gICB9KTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBldmVudHM6IGZpbHRlcmVkRXZlbnRzLFxuLy8gICAgICAgZGF0ZToge1xuLy8gICAgICAgICB5ZWFyOiBudW1ZZWFyLFxuLy8gICAgICAgICBtb250aDogbnVtTW9udGgsXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEZpbHRlcmVkRXZlbnRzIiwiRXZlbnRMaXN0IiwiUmVzdWx0c1RpdGxlIiwiQnV0dG9uIiwiRXJyb3JBbGVydCIsInVzZVNXUiIsIkhlYWQiLCJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsImxvYWRlZEV2ZW50cyIsInNldExvYWRlZEV2ZW50cyIsInJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwicGFnZUhlYWREYXRhIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJldmVudHMiLCJrZXkiLCJwdXNoIiwiaWQiLCJwIiwiY2xhc3NOYW1lIiwiaXNOYU4iLCJkaXYiLCJsaW5rIiwiZmlsdGVyZWRFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImV2ZW50RGF0ZSIsIkRhdGUiLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImxlbmd0aCIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});