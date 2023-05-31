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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsletterRegistration; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NewsletterRegistration() {\n    _s();\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    function registrationHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        notificationCtx.showNotification({\n            title: \"Signing Up...\",\n            message: \"Re\"\n        });\n        fetch(\"/api/newsletter\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                email: enteredEmail\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(data);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up to stay updated!\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: registrationHandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: emailInputRef,\n                            type: \"email\",\n                            id: \"email\",\n                            placeholder: \"Your email\",\n                            \"aria-label\": \"Your email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/newsletter-registration.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterRegistration, \"DPwtQQ/gldp2MEe6QW3mx9/oYa8=\");\n_c = NewsletterRegistration;\nvar _c;\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ2dCO0FBQ1E7QUFFcEQsU0FBU0kseUJBQXlCOztJQUUvQyxNQUFNQyxnQkFBZ0JKLDZDQUFNQTtJQUU1QixNQUFNSyxrQkFBa0JOLGlEQUFVQSxDQUFDRyxtRUFBbUJBO0lBRXRELFNBQVNJLG9CQUFvQkMsS0FBSyxFQUFFO1FBQ2xDQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLGVBQWVMLGNBQWNNLE9BQU8sQ0FBQ0MsS0FBSztRQUVoRE4sZ0JBQWdCTyxnQkFBZ0IsQ0FBQztZQUMvQkMsT0FBTztZQUNQQyxTQUFTO1FBQ1g7UUFFQUMsTUFBTSxtQkFBbUI7WUFDdkJDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxPQUFPWDtZQUFhO1lBQzNDWSxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0NDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQVFDLFdBQVc1Qix1RkFBa0I7OzBCQUNwQyw4REFBQzhCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVM0I7MEJBQ2QsNEVBQUM0QjtvQkFBSUwsV0FBVzVCLG9GQUFlOztzQ0FDN0IsOERBQUNtQzs0QkFDQ0MsS0FBS2pDOzRCQUNMa0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSEMsYUFBWTs0QkFDWkMsY0FBVzs7Ozs7O3NDQUViLDhEQUFDQztzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEIsQ0FBQztHQTlDdUJ2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzPzI3ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5tb2R1bGUuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c2xldHRlclJlZ2lzdHJhdGlvbigpIHtcblxuICBjb25zdCBlbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uQ3R4ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcbiAgXG4gIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gZW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgdGl0bGU6ICdTaWduaW5nIFVwLi4uJyxcbiAgICAgIG1lc3NhZ2U6ICdSZSdcbiAgICB9KVxuXG4gICAgZmV0Y2goJy9hcGkvbmV3c2xldHRlcicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogZW50ZXJlZEVtYWlsIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdzbGV0dGVyfT5cbiAgICAgIDxoMj5TaWduIHVwIHRvIHN0YXkgdXBkYXRlZCE8L2gyPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3JlZ2lzdHJhdGlvbkhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17ZW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1lvdXIgZW1haWwnXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdZb3VyIGVtYWlsJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VSZWYiLCJjbGFzc2VzIiwiTm90aWZpY2F0aW9uQ29udGV4dCIsIk5ld3NsZXR0ZXJSZWdpc3RyYXRpb24iLCJlbWFpbElucHV0UmVmIiwibm90aWZpY2F0aW9uQ3R4IiwicmVnaXN0cmF0aW9uSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJzaG93Tm90aWZpY2F0aW9uIiwidGl0bGUiLCJtZXNzYWdlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuZXdzbGV0dGVyIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwiaW5wdXQiLCJyZWYiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.js\n"));

/***/ })

});