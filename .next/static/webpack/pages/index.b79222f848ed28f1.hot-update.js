"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/input/newsletter-registration.js":
/*!*****************************************************!*\
  !*** ./components/input/newsletter-registration.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsletterRegistration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction NewsletterRegistration() {\n    _s();\n    const emailInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    function registrationHandler(event) {\n        event.preventDefault();\n        const email = emailInput.current.value;\n        fetch(\"/api/newsletter\", {\n            method: \"POST\",\n            body: JSON.stringify(email),\n            headers: {\n                \"Content-Types\": \"application/json\"\n            }\n        });\n    // fetch user input (state or refs)\n    // optional: validate input\n    // send valid data to API\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up to stay updated!\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: registrationHandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: emailInput,\n                            type: \"email\",\n                            id: \"email\",\n                            placeholder: \"Your email\",\n                            \"aria-label\": \"Your email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterRegistration, \"KlgDnqFEiuoPcJA669ODzOY6fhE=\");\n_c = NewsletterRegistration;\nvar _c;\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDNEI7QUFFNUMsU0FBU0UseUJBQXlCOztJQUUvQyxNQUFNQyxhQUFhSCw2Q0FBTUE7SUFFekIsU0FBU0ksb0JBQW9CQyxLQUFLLEVBQUU7UUFDbENBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsUUFBUUosV0FBV0ssT0FBTyxDQUFDQyxLQUFLO1FBRXRDQyxNQUFNLG1CQUFtQjtZQUN2QkMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1lBQ3JCUSxTQUFTO2dCQUNQLGlCQUFpQjtZQUNuQjtRQUNGO0lBQ0EsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBV2hCLHVGQUFrQjs7MEJBQ3BDLDhEQUFDa0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVqQjswQkFDZCw0RUFBQ2tCO29CQUFJTCxXQUFXaEIsb0ZBQWU7O3NDQUM3Qiw4REFBQ3VCOzRCQUNDQyxLQUFLdEI7NEJBQ0x1QixNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaQyxjQUFXOzs7Ozs7c0NBRWIsOERBQUNDO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQixDQUFDO0dBdEN1QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5wdXQvbmV3c2xldHRlci1yZWdpc3RyYXRpb24uanM/MjdkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uKCkge1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSB1c2VSZWYoKTtcbiAgXG4gIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LmN1cnJlbnQudmFsdWU7XG5cbiAgICBmZXRjaCgnL2FwaS9uZXdzbGV0dGVyJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbWFpbCksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGVzJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBmZXRjaCB1c2VyIGlucHV0IChzdGF0ZSBvciByZWZzKVxuICAgIC8vIG9wdGlvbmFsOiB2YWxpZGF0ZSBpbnB1dFxuICAgIC8vIHNlbmQgdmFsaWQgZGF0YSB0byBBUElcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm5ld3NsZXR0ZXJ9PlxuICAgICAgPGgyPlNpZ24gdXAgdG8gc3RheSB1cGRhdGVkITwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cmVnaXN0cmF0aW9uSGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtlbWFpbElucHV0fVxuICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nWW91ciBlbWFpbCdcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9J1lvdXIgZW1haWwnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlUmVmIiwiY2xhc3NlcyIsIk5ld3NsZXR0ZXJSZWdpc3RyYXRpb24iLCJlbWFpbElucHV0IiwicmVnaXN0cmF0aW9uSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm5ld3NsZXR0ZXIiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2wiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.js\n"));

/***/ })

});