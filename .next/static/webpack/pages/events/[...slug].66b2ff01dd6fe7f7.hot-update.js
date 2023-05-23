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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilteredEventsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/api-util */ \"./helpers/api-util.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction FilteredEventsPage(props) {\n    _s();\n    const [loadedEvents, setLoadedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filterData = router.query.slug;\n    const fetcher = (url)=>fetch(url).then((r)=>r.json());\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"https://nextjs-course-4ba9d-default-rtdb.firebaseio.com/events.json\", fetcher);\n    const filteredYear = filterData[0];\n    const filteredMonth = filterData[1];\n    const numYear = +filteredYear;\n    const numMonth = +filteredMonth;\n    const pageHeadData = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Filtered Events\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"All events for \".concat(numMonth, \"/\").concat(numYear)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data) {\n            const events = [];\n            for(const key in data){\n                events.push({\n                    id: key,\n                    ...data[key]\n                });\n            }\n            setLoadedEvents(events);\n        }\n    }, [\n        data\n    ]);\n    if (!loadedEvents) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                pageHeadData,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"center\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2022 || numMonth < 1 || numMonth > 12 || error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"center\",\n                        children: \"Invalid Filter. Please adjust your values!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    let filteredEvents = loadedEvents.filter((event)=>{\n        const eventDate = new Date(event.date);\n        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;\n    });\n    if (!filteredEvents || filteredEvents.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No Events Found For Your Filter!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        link: \"/events\",\n                        children: \"Show All Event\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    const date = new Date(numYear, numMonth - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Filtered Events\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"All events for \".concat(numMonth, \"/\").concat(numYear)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                items: filteredEvents\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[...slug].js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // export async function getServerSideProps(context) {\n //   const { params } = context;\n //   const filterData = params.slug;\n //   const filteredYear = filterData[0];\n //   const filteredMonth = filterData[1];\n //   const numYear = +filteredYear;\n //   const numMonth = +filteredMonth;\n //   if (\n //     isNaN(numYear) ||\n //     isNaN(numMonth) ||\n //     numYear > 2030 ||\n //     numYear < 2022 ||\n //     numMonth < 1 ||\n //     numMonth > 12\n //   ) {\n //     return {\n //       props: {\n //         hasError: true,\n //       },\n //       // notFound: true,          //Show 404 page instead\n //       // redirect: {\n //       //   destination: '/error' //Can use this to redirect to a specific error page if we have one e.g. error.js\n //       // }\n //     };\n //   }\n //   const filteredEvents = await getFilteredEvents({\n //     year: numYear,\n //     month: numMonth,\n //   });\n //   return {\n //     props: {\n //       events: filteredEvents,\n //       date: {\n //         year: numYear,\n //         month: numMonth,\n //       },\n //     },\n //   };\n // }\n_s(FilteredEventsPage, \"baGcR2zYNkTBGEMbpcQg6la1mJw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = FilteredEventsPage;\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDN0MscUVBQVNBO2dCQUFDaUQsT0FBT1Q7Ozs7Ozs7O0FBR3hCLENBQUMsQ0FFRCxzREFBc0Q7Q0FDdEQsZ0NBQWdDO0NBRWhDLG9DQUFvQztDQUVwQyx3Q0FBd0M7Q0FDeEMseUNBQXlDO0NBRXpDLG1DQUFtQztDQUNuQyxxQ0FBcUM7Q0FFckMsU0FBUztDQUNULHdCQUF3QjtDQUN4Qix5QkFBeUI7Q0FDekIsd0JBQXdCO0NBQ3hCLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLFFBQVE7Q0FDUixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLDBCQUEwQjtDQUMxQixXQUFXO0NBQ1gsNERBQTREO0NBQzVELHVCQUF1QjtDQUN2QixvSEFBb0g7Q0FDcEgsYUFBYTtDQUNiLFNBQVM7Q0FDVCxNQUFNO0NBRU4scURBQXFEO0NBQ3JELHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsUUFBUTtDQUVSLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0NBQWdDO0NBQ2hDLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIsMkJBQTJCO0NBQzNCLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsT0FBTztDQUNQLElBQUk7R0FySm9CbEM7O1FBRVBYLGtEQUFTQTtRQUtBUywyQ0FBTUE7OztLQVBSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzPzUyNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hcGktdXRpbFwiO1xuaW1wb3J0IEV2ZW50TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdFwiO1xuaW1wb3J0IFJlc3VsdHNUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvcmVzdWx0cy10aXRsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2Vycm9yLWFsZXJ0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyZWRFdmVudHNQYWdlKHByb3BzKSB7XG4gIGNvbnN0IFtsb2FkZWRFdmVudHMsIHNldExvYWRlZEV2ZW50c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG5cbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocikgPT4gci5qc29uKCkpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL25leHRqcy1jb3Vyc2UtNGJhOWQtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2V2ZW50cy5qc29uXCIsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XG4gIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xuXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuXG4gIGNvbnN0IHBhZ2VIZWFkRGF0YSA9IChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5GaWx0ZXJlZCBFdmVudHM8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2BBbGwgZXZlbnRzIGZvciAke251bU1vbnRofS8ke251bVllYXJ9YH0gLz5cbiAgICA8L0hlYWQ+XG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zdCBldmVudHMgPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBldmVudHMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAuLi5kYXRhW2tleV0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXRMb2FkZWRFdmVudHMoZXZlbnRzKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgaWYgKCFsb2FkZWRFdmVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3BhZ2VIZWFkRGF0YX1cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+TG9hZGluZy4uLjwvcD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBpZiAoXG4gICAgaXNOYU4obnVtWWVhcikgfHxcbiAgICBpc05hTihudW1Nb250aCkgfHxcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxuICAgIG51bVllYXIgPCAyMDIyIHx8XG4gICAgbnVtTW9udGggPCAxIHx8XG4gICAgbnVtTW9udGggPiAxMiB8fCBlcnJvclxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgXG4gICAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPkludmFsaWQgRmlsdGVyLiBQbGVhc2UgYWRqdXN0IHlvdXIgdmFsdWVzITwvcD5cbiAgICAgICAgPC9FcnJvckFsZXJ0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gbGluaz1cIi9ldmVudHNcIj5TaG93IEFsbCBFdmVudDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBsZXQgZmlsdGVyZWRFdmVudHMgPSBsb2FkZWRFdmVudHMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gbnVtWWVhciAmJlxuICAgICAgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG51bU1vbnRoIC0gMVxuICAgICk7XG4gIH0pO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICAgIDxwPk5vIEV2ZW50cyBGb3VuZCBGb3IgWW91ciBGaWx0ZXIhPC9wPlxuICAgICAgICA8L0Vycm9yQWxlcnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPVwiL2V2ZW50c1wiPlNob3cgQWxsIEV2ZW50PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShudW1ZZWFyLCBudW1Nb250aCAtIDEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RmlsdGVyZWQgRXZlbnRzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2BBbGwgZXZlbnRzIGZvciAke251bU1vbnRofS8ke251bVllYXJ9YH0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZX0gLz5cbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XG5cbi8vICAgY29uc3QgZmlsdGVyRGF0YSA9IHBhcmFtcy5zbHVnO1xuXG4vLyAgIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XG4vLyAgIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xuXG4vLyAgIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xuLy8gICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xuXG4vLyAgIGlmIChcbi8vICAgICBpc05hTihudW1ZZWFyKSB8fFxuLy8gICAgIGlzTmFOKG51bU1vbnRoKSB8fFxuLy8gICAgIG51bVllYXIgPiAyMDMwIHx8XG4vLyAgICAgbnVtWWVhciA8IDIwMjIgfHxcbi8vICAgICBudW1Nb250aCA8IDEgfHxcbi8vICAgICBudW1Nb250aCA+IDEyXG4vLyAgICkge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge1xuLy8gICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcbi8vICAgICAgIH0sXG4vLyAgICAgICAvLyBub3RGb3VuZDogdHJ1ZSwgICAgICAgICAgLy9TaG93IDQwNCBwYWdlIGluc3RlYWRcbi8vICAgICAgIC8vIHJlZGlyZWN0OiB7XG4vLyAgICAgICAvLyAgIGRlc3RpbmF0aW9uOiAnL2Vycm9yJyAvL0NhbiB1c2UgdGhpcyB0byByZWRpcmVjdCB0byBhIHNwZWNpZmljIGVycm9yIHBhZ2UgaWYgd2UgaGF2ZSBvbmUgZS5nLiBlcnJvci5qc1xuLy8gICAgICAgLy8gfVxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGF3YWl0IGdldEZpbHRlcmVkRXZlbnRzKHtcbi8vICAgICB5ZWFyOiBudW1ZZWFyLFxuLy8gICAgIG1vbnRoOiBudW1Nb250aCxcbi8vICAgfSk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgZXZlbnRzOiBmaWx0ZXJlZEV2ZW50cyxcbi8vICAgICAgIGRhdGU6IHtcbi8vICAgICAgICAgeWVhcjogbnVtWWVhcixcbi8vICAgICAgICAgbW9udGg6IG51bU1vbnRoLFxuLy8gICAgICAgfSxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsIkV2ZW50TGlzdCIsIlJlc3VsdHNUaXRsZSIsIkJ1dHRvbiIsIkVycm9yQWxlcnQiLCJ1c2VTV1IiLCJIZWFkIiwiRmlsdGVyZWRFdmVudHNQYWdlIiwicHJvcHMiLCJsb2FkZWRFdmVudHMiLCJzZXRMb2FkZWRFdmVudHMiLCJyb3V0ZXIiLCJmaWx0ZXJEYXRhIiwicXVlcnkiLCJzbHVnIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiZmlsdGVyZWRZZWFyIiwiZmlsdGVyZWRNb250aCIsIm51bVllYXIiLCJudW1Nb250aCIsInBhZ2VIZWFkRGF0YSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZXZlbnRzIiwia2V5IiwicHVzaCIsImlkIiwicCIsImNsYXNzTmFtZSIsImlzTmFOIiwiZGl2IiwibGluayIsImZpbHRlcmVkRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJldmVudERhdGUiLCJEYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJsZW5ndGgiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});