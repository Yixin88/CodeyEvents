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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/api-util */ \"./helpers/api-util.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction FilteredEventsPage(props) {\n    _s();\n    const [loadedEvents, setLoadedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filterData = router.query.slug;\n    const fetcher = (url)=>fetch(url).then((r)=>r.json());\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"https://nextjs-course-4ba9d-default-rtdb.firebaseio.com/events.json\", fetcher);\n    let pageHeadData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Filtered Events\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"A list of filtered events\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data) {\n            const events = [];\n            for(const key in data){\n                events.push({\n                    id: key,\n                    ...data[key]\n                });\n            }\n            setLoadedEvents(events);\n        }\n    }, [\n        data\n    ]);\n    if (!loadedEvents) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                pageHeadData,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"center\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const filteredYear = filterData[0];\n    const filteredMonth = filterData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2022 || numMonth < 1 || numMonth > 12 || error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                pageHeadData,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"center\",\n                        children: \"Invalid Filter. Please adjust your values!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    let filteredEvents = loadedEvents.filter((event)=>{\n        const eventDate = new Date(event.date);\n        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                pageHeadData,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No Events Found For Your Filter!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const date = new Date(numYear, numMonth - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            pageHeadData,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // export async function getServerSideProps(context) {\n //   const { params } = context;\n //   const filterData = params.slug;\n //   const filteredYear = filterData[0];\n //   const filteredMonth = filterData[1];\n //   const numYear = +filteredYear;\n //   const numMonth = +filteredMonth;\n //   if (\n //     isNaN(numYear) ||\n //     isNaN(numMonth) ||\n //     numYear > 2030 ||\n //     numYear < 2022 ||\n //     numMonth < 1 ||\n //     numMonth > 12\n //   ) {\n //     return {\n //       props: {\n //         hasError: true,\n //       },\n //       // notFound: true,          //Show 404 page instead\n //       // redirect: {\n //       //   destination: '/error' //Can use this to redirect to a specific error page if we have one e.g. error.js\n //       // }\n //     };\n //   }\n //   const filteredEvents = await getFilteredEvents({\n //     year: numYear,\n //     month: numMonth,\n //   });\n //   return {\n //     props: {\n //       events: filteredEvents,\n //       date: {\n //         year: numYear,\n //         month: numMonth,\n //       },\n //     },\n //   };\n // }\n_s(FilteredEventsPage, \"baGcR2zYNkTBGEMbpcQg6la1mJw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVyQyxTQUFTO0NBQ1Qsd0JBQXdCO0NBQ3hCLHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIsUUFBUTtDQUNSLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsMEJBQTBCO0NBQzFCLFdBQVc7Q0FDWCw0REFBNEQ7Q0FDNUQsdUJBQXVCO0NBQ3ZCLG9IQUFvSDtDQUNwSCxhQUFhO0NBQ2IsU0FBUztDQUNULE1BQU07Q0FFTixxREFBcUQ7Q0FDckQscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixRQUFRO0NBRVIsYUFBYTtDQUNiLGVBQWU7Q0FDZixnQ0FBZ0M7Q0FDaEMsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QiwyQkFBMkI7Q0FDM0IsV0FBVztDQUNYLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsSUFBSTtHQXJKb0JsQzs7UUFFUFgsa0RBQVNBO1FBS0FTLDJDQUFNQTs7O0tBUFJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanM/NTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaS11dGlsXCI7XG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0XCI7XG5pbXBvcnQgUmVzdWx0c1RpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9yZXN1bHRzLXRpdGxlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvZXJyb3ItYWxlcnRcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UocHJvcHMpIHtcbiAgY29uc3QgW2xvYWRlZEV2ZW50cywgc2V0TG9hZGVkRXZlbnRzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcblxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyKSA9PiByLmpzb24oKSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICBcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS00YmE5ZC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZXZlbnRzLmpzb25cIixcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgXG5cbiAgbGV0IHBhZ2VIZWFkRGF0YSA9IChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5GaWx0ZXJlZCBFdmVudHM8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0EgbGlzdCBvZiBmaWx0ZXJlZCBldmVudHMnIC8+XG4gICAgPC9IZWFkPlxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc3QgZXZlbnRzID0gW107XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgLi4uZGF0YVtrZXldLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2V0TG9hZGVkRXZlbnRzKGV2ZW50cyk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIGlmICghbG9hZGVkRXZlbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtwYWdlSGVhZERhdGF9XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkxvYWRpbmcuLi48L3A+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cbiAgaWYgKFxuICAgIGlzTmFOKG51bVllYXIpIHx8XG4gICAgaXNOYU4obnVtTW9udGgpIHx8XG4gICAgbnVtWWVhciA+IDIwMzAgfHxcbiAgICBudW1ZZWFyIDwgMjAyMiB8fFxuICAgIG51bU1vbnRoIDwgMSB8fFxuICAgIG51bU1vbnRoID4gMTIgfHwgZXJyb3JcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtwYWdlSGVhZERhdGF9XG4gICAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkludmFsaWQgRmlsdGVyLiBQbGVhc2UgYWRqdXN0IHlvdXIgdmFsdWVzITwvcD5cbiAgICAgICAgPC9FcnJvckFsZXJ0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gbGluaz1cIi9ldmVudHNcIj5TaG93IEFsbCBFdmVudDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBsZXQgZmlsdGVyZWRFdmVudHMgPSBsb2FkZWRFdmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gbnVtWWVhciAmJlxuICAgICAgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG51bU1vbnRoIC0gMVxuICAgICk7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtwYWdlSGVhZERhdGF9XG4gICAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICAgIDxwPk5vIEV2ZW50cyBGb3VuZCBGb3IgWW91ciBGaWx0ZXIhPC9wPlxuICAgICAgICA8L0Vycm9yQWxlcnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPVwiL2V2ZW50c1wiPlNob3cgQWxsIEV2ZW50PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShudW1ZZWFyLCBudW1Nb250aCAtIDEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwYWdlSGVhZERhdGF9XG4gICAgICA8UmVzdWx0c1RpdGxlIGRhdGU9e2RhdGV9IC8+XG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtmaWx0ZXJlZEV2ZW50c30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xuXG4vLyAgIGNvbnN0IGZpbHRlckRhdGEgPSBwYXJhbXMuc2x1ZztcblxuLy8gICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdO1xuLy8gICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcblxuLy8gICBjb25zdCBudW1ZZWFyID0gK2ZpbHRlcmVkWWVhcjtcbi8vICAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcblxuLy8gICBpZiAoXG4vLyAgICAgaXNOYU4obnVtWWVhcikgfHxcbi8vICAgICBpc05hTihudW1Nb250aCkgfHxcbi8vICAgICBudW1ZZWFyID4gMjAzMCB8fFxuLy8gICAgIG51bVllYXIgPCAyMDIyIHx8XG4vLyAgICAgbnVtTW9udGggPCAxIHx8XG4vLyAgICAgbnVtTW9udGggPiAxMlxuLy8gICApIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgaGFzRXJyb3I6IHRydWUsXG4vLyAgICAgICB9LFxuLy8gICAgICAgLy8gbm90Rm91bmQ6IHRydWUsICAgICAgICAgIC8vU2hvdyA0MDQgcGFnZSBpbnN0ZWFkXG4vLyAgICAgICAvLyByZWRpcmVjdDoge1xuLy8gICAgICAgLy8gICBkZXN0aW5hdGlvbjogJy9lcnJvcicgLy9DYW4gdXNlIHRoaXMgdG8gcmVkaXJlY3QgdG8gYSBzcGVjaWZpYyBlcnJvciBwYWdlIGlmIHdlIGhhdmUgb25lIGUuZy4gZXJyb3IuanNcbi8vICAgICAgIC8vIH1cbi8vICAgICB9O1xuLy8gICB9XG5cbi8vICAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7XG4vLyAgICAgeWVhcjogbnVtWWVhcixcbi8vICAgICBtb250aDogbnVtTW9udGgsXG4vLyAgIH0pO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIGV2ZW50czogZmlsdGVyZWRFdmVudHMsXG4vLyAgICAgICBkYXRlOiB7XG4vLyAgICAgICAgIHllYXI6IG51bVllYXIsXG4vLyAgICAgICAgIG1vbnRoOiBudW1Nb250aCxcbi8vICAgICAgIH0sXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0RmlsdGVyZWRFdmVudHMiLCJFdmVudExpc3QiLCJSZXN1bHRzVGl0bGUiLCJCdXR0b24iLCJFcnJvckFsZXJ0IiwidXNlU1dSIiwiSGVhZCIsIkZpbHRlcmVkRXZlbnRzUGFnZSIsInByb3BzIiwibG9hZGVkRXZlbnRzIiwic2V0TG9hZGVkRXZlbnRzIiwicm91dGVyIiwiZmlsdGVyRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImRhdGEiLCJlcnJvciIsInBhZ2VIZWFkRGF0YSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZXZlbnRzIiwia2V5IiwicHVzaCIsImlkIiwicCIsImNsYXNzTmFtZSIsImZpbHRlcmVkWWVhciIsImZpbHRlcmVkTW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImRpdiIsImxpbmsiLCJmaWx0ZXJlZEV2ZW50cyIsImZpbHRlciIsImV2ZW50IiwiZXZlbnREYXRlIiwiRGF0ZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwibGVuZ3RoIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});