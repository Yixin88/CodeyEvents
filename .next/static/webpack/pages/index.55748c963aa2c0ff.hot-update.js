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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsletterRegistration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NewsletterRegistration() {\n    _s();\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    function registrationHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        notificationCtx.showNotification({\n            title: \"Signing Up...\",\n            message: \"Registering for newsletter.\",\n            status: \"pending\"\n        });\n        fetch(\"/api/newsletter\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                email: enteredEmail\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            notificationCtx.showNotification({\n                title: \"Success!\",\n                message: \"Successfully registered for newsletter!\",\n                status: \"success\"\n            });\n        }).catch((error)=>{\n            notificationCtx.showNotification({\n                title: \"Error!\",\n                message: error.message,\n                status: \"error\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up to stay updated!\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: registrationHandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: emailInputRef,\n                            type: \"email\",\n                            id: \"email\",\n                            placeholder: \"Your email\",\n                            \"aria-label\": \"Your email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterRegistration, \"DPwtQQ/gldp2MEe6QW3mx9/oYa8=\");\n_c = NewsletterRegistration;\nvar _c;\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ2dCO0FBQ1E7QUFFcEQsU0FBU0kseUJBQXlCOztJQUUvQyxNQUFNQyxnQkFBZ0JKLDZDQUFNQTtJQUU1QixNQUFNSyxrQkFBa0JOLGlEQUFVQSxDQUFDRyxtRUFBbUJBO0lBRXRELFNBQVNJLG9CQUFvQkMsS0FBSyxFQUFFO1FBQ2xDQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLGVBQWVMLGNBQWNNLE9BQU8sQ0FBQ0MsS0FBSztRQUVoRE4sZ0JBQWdCTyxnQkFBZ0IsQ0FBQztZQUMvQkMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7UUFDVjtRQUVBQyxNQUFNLG1CQUFtQjtZQUN2QkMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLE9BQU9aO1lBQWE7WUFDM0NhLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0YsR0FDQ0MsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVE7WUFDWnJCLGdCQUFnQk8sZ0JBQWdCLENBQUM7Z0JBQy9CQyxPQUFPO2dCQUNQQyxTQUFTO2dCQUNUQyxRQUFRO1lBQ1Y7UUFDRixHQUNDWSxLQUFLLENBQUNDLENBQUFBLFFBQVM7WUFDZHZCLGdCQUFnQk8sZ0JBQWdCLENBQUM7Z0JBQy9CQyxPQUFPO2dCQUNQQyxTQUFTYyxNQUFNZCxPQUFPO2dCQUN0QkMsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYztRQUFRQyxXQUFXN0IsdUZBQWtCOzswQkFDcEMsOERBQUMrQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVTVCOzBCQUNkLDRFQUFDNkI7b0JBQUlMLFdBQVc3QixvRkFBZTs7c0NBQzdCLDhEQUFDb0M7NEJBQ0NDLEtBQUtsQzs0QkFDTG1DLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLGFBQVk7NEJBQ1pDLGNBQVc7Ozs7OztzQ0FFYiw4REFBQ0M7c0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCLENBQUM7R0ExRHVCeEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcz8yN2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vbmV3c2xldHRlci1yZWdpc3RyYXRpb24ubW9kdWxlLmNzcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NsZXR0ZXJSZWdpc3RyYXRpb24oKSB7XG5cbiAgY29uc3QgZW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkN0eCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG4gIFxuICBmdW5jdGlvbiByZWdpc3RyYXRpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgIHRpdGxlOiAnU2lnbmluZyBVcC4uLicsXG4gICAgICBtZXNzYWdlOiAnUmVnaXN0ZXJpbmcgZm9yIG5ld3NsZXR0ZXIuJyxcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnXG4gICAgfSlcblxuICAgIGZldGNoKCcvYXBpL25ld3NsZXR0ZXInLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVudGVyZWRFbWFpbCB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcbiAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIGZvciBuZXdzbGV0dGVyIScsXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgdGl0bGU6ICdFcnJvciEnLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm5ld3NsZXR0ZXJ9PlxuICAgICAgPGgyPlNpZ24gdXAgdG8gc3RheSB1cGRhdGVkITwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cmVnaXN0cmF0aW9uSGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtlbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nWW91ciBlbWFpbCdcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9J1lvdXIgZW1haWwnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVJlZiIsImNsYXNzZXMiLCJOb3RpZmljYXRpb25Db250ZXh0IiwiTmV3c2xldHRlclJlZ2lzdHJhdGlvbiIsImVtYWlsSW5wdXRSZWYiLCJub3RpZmljYXRpb25DdHgiLCJyZWdpc3RyYXRpb25IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm5ld3NsZXR0ZXIiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2wiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.js\n"));

/***/ })

});