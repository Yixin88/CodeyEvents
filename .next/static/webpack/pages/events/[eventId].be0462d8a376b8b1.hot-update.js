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

/***/ "./pages/events/[eventId].js":
/*!***********************************!*\
  !*** ./pages/events/[eventId].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EventDetailPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ \"./components/event-detail/event-summary.js\");\n/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ \"./components/event-detail/event-logistics.js\");\n/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/event-detail/event-content */ \"./components/event-detail/event-content.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction EventDetailPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const event = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_3__.getEventById)(router.query.eventId);\n    if (!event) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No event found!\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: event.title\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                date: event.date,\n                address: event.location,\n                image: event.image,\n                imageAlt: event.title\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: event.description\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(EventDetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EventDetailPage;\nvar _c;\n$RefreshReg$(_c, \"EventDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNkO0FBQ3NCO0FBRXVCO0FBQ0k7QUFDSjtBQUNkO0FBRTFDLFNBQVNPLGtCQUFrQjs7SUFDeEMsTUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCLE1BQU1TLFFBQVFQLHlEQUFZQSxDQUFDTSxPQUFPRSxLQUFLLENBQUNDLE9BQU87SUFFL0MsSUFBSSxDQUFDRixPQUFPO1FBQ1YscUJBQ0UsOERBQUNILGtFQUFVQTtzQkFDVCw0RUFBQ007MEJBQUU7Ozs7Ozs7Ozs7O0lBR1QsQ0FBQztJQUVELHFCQUNFOzswQkFDRSw4REFBQ1QsOEVBQVlBO2dCQUFDVSxPQUFPSixNQUFNSSxLQUFLOzs7Ozs7MEJBQ2hDLDhEQUFDVCxnRkFBY0E7Z0JBQ2JVLE1BQU1MLE1BQU1LLElBQUk7Z0JBQ2hCQyxTQUFTTixNQUFNTyxRQUFRO2dCQUN2QkMsT0FBT1IsTUFBTVEsS0FBSztnQkFDbEJDLFVBQVVULE1BQU1JLEtBQUs7Ozs7OzswQkFFdkIsOERBQUNSLDhFQUFZQTswQkFDWCw0RUFBQ087OEJBQUdILE1BQU1VLFdBQVc7Ozs7Ozs7Ozs7Ozs7QUFJN0IsQ0FBQztHQTNCdUJaOztRQUNQUCxrREFBU0E7OztLQURGTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzP2EyMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRFdmVudEJ5SWQgfSBmcm9tIFwiLi4vLi4vZHVtbXktZGF0YVwiO1xuXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1zdW1tYXJ5XCI7XG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWxvZ2lzdGljc1wiO1xuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtY29udGVudFwiO1xuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvZXJyb3ItYWxlcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnREZXRhaWxQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBldmVudCA9IGdldEV2ZW50QnlJZChyb3V0ZXIucXVlcnkuZXZlbnRJZCk7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JBbGVydD5cbiAgICAgICAgPHA+Tm8gZXZlbnQgZm91bmQhPC9wPjwvRXJyb3JBbGVydD5cbiAgICAgIFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RXZlbnRTdW1tYXJ5IHRpdGxlPXtldmVudC50aXRsZX0gLz5cbiAgICAgIDxFdmVudExvZ2lzdGljc1xuICAgICAgICBkYXRlPXtldmVudC5kYXRlfVxuICAgICAgICBhZGRyZXNzPXtldmVudC5sb2NhdGlvbn1cbiAgICAgICAgaW1hZ2U9e2V2ZW50LmltYWdlfVxuICAgICAgICBpbWFnZUFsdD17ZXZlbnQudGl0bGV9XG4gICAgICAvPlxuICAgICAgPEV2ZW50Q29udGVudD5cbiAgICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvRXZlbnRDb250ZW50PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiZ2V0RXZlbnRCeUlkIiwiRXZlbnRTdW1tYXJ5IiwiRXZlbnRMb2dpc3RpY3MiLCJFdmVudENvbnRlbnQiLCJFcnJvckFsZXJ0IiwiRXZlbnREZXRhaWxQYWdlIiwicm91dGVyIiwiZXZlbnQiLCJxdWVyeSIsImV2ZW50SWQiLCJwIiwidGl0bGUiLCJkYXRlIiwiYWRkcmVzcyIsImxvY2F0aW9uIiwiaW1hZ2UiLCJpbWFnZUFsdCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[eventId].js\n"));

/***/ })

});