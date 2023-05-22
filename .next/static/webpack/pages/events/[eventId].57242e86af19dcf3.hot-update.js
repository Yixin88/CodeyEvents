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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EventDetailPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-detail/event-summary */ \"./components/event-detail/event-summary.js\");\n/* harmony import */ var _components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/event-detail/event-logistics */ \"./components/event-detail/event-logistics.js\");\n/* harmony import */ var _components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/event-detail/event-content */ \"./components/event-detail/event-content.js\");\n/* harmony import */ var _components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/error-alert */ \"./components/ui/error-alert.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction EventDetailPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const event = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_3__.getEventById)(router.query.eventId);\n    if (!event) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_error_alert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No event found!\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                lineNumber: 17,\n                columnNumber: 19\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: event.title\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_logistics__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                date: event.date,\n                address: event.location,\n                image: event.image,\n                imageAlt: event.title\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_detail_event_content__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: event.description\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/pages/events/[eventId].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(EventDetailPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EventDetailPage;\nvar _c;\n$RefreshReg$(_c, \"EventDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNkO0FBQ3NCO0FBRXVCO0FBQ0k7QUFDSjtBQUNkO0FBRTFDLFNBQVNPLGtCQUFrQjs7SUFDeEMsTUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCLE1BQU1TLFFBQVFQLHlEQUFZQSxDQUFDTSxPQUFPRSxLQUFLLENBQUNDLE9BQU87SUFFL0MsSUFBSSxDQUFDRixPQUFPO1FBQ1YscUJBQ0UsOERBQUNILGtFQUFVQTtzQkFBQyw0RUFBQ007MEJBQUU7Ozs7Ozs7Ozs7O0lBQ25CLENBQUM7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNULDhFQUFZQTtnQkFBQ1UsT0FBT0osTUFBTUksS0FBSzs7Ozs7OzBCQUNoQyw4REFBQ1QsZ0ZBQWNBO2dCQUNiVSxNQUFNTCxNQUFNSyxJQUFJO2dCQUNoQkMsU0FBU04sTUFBTU8sUUFBUTtnQkFDdkJDLE9BQU9SLE1BQU1RLEtBQUs7Z0JBQ2xCQyxVQUFVVCxNQUFNSSxLQUFLOzs7Ozs7MEJBRXZCLDhEQUFDUiw4RUFBWUE7MEJBQ1gsNEVBQUNPOzhCQUFHSCxNQUFNVSxXQUFXOzs7Ozs7Ozs7Ozs7O0FBSTdCLENBQUM7R0F4QnVCWjs7UUFDUFAsa0RBQVNBOzs7S0FERk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tldmVudElkXS5qcz9hMjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0RXZlbnRCeUlkIH0gZnJvbSBcIi4uLy4uL2R1bW15LWRhdGFcIjtcblxuaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtc3VtbWFyeVwiO1xuaW1wb3J0IEV2ZW50TG9naXN0aWNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1sb2dpc3RpY3NcIjtcbmltcG9ydCBFdmVudENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWNvbnRlbnRcIjtcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2Vycm9yLWFsZXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50RGV0YWlsUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZXZlbnQgPSBnZXRFdmVudEJ5SWQocm91dGVyLnF1ZXJ5LmV2ZW50SWQpO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yQWxlcnQ+PHA+Tm8gZXZlbnQgZm91bmQhPC9wPjwvRXJyb3JBbGVydD4pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEV2ZW50U3VtbWFyeSB0aXRsZT17ZXZlbnQudGl0bGV9IC8+XG4gICAgICA8RXZlbnRMb2dpc3RpY3NcbiAgICAgICAgZGF0ZT17ZXZlbnQuZGF0ZX1cbiAgICAgICAgYWRkcmVzcz17ZXZlbnQubG9jYXRpb259XG4gICAgICAgIGltYWdlPXtldmVudC5pbWFnZX1cbiAgICAgICAgaW1hZ2VBbHQ9e2V2ZW50LnRpdGxlfVxuICAgICAgLz5cbiAgICAgIDxFdmVudENvbnRlbnQ+XG4gICAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L0V2ZW50Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsImdldEV2ZW50QnlJZCIsIkV2ZW50U3VtbWFyeSIsIkV2ZW50TG9naXN0aWNzIiwiRXZlbnRDb250ZW50IiwiRXJyb3JBbGVydCIsIkV2ZW50RGV0YWlsUGFnZSIsInJvdXRlciIsImV2ZW50IiwicXVlcnkiLCJldmVudElkIiwicCIsInRpdGxlIiwiZGF0ZSIsImFkZHJlc3MiLCJsb2NhdGlvbiIsImltYWdlIiwiaW1hZ2VBbHQiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[eventId].js\n"));

/***/ })

});