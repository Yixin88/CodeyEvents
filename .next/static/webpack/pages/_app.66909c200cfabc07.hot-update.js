"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/notification-context.js":
/*!***************************************!*\
  !*** ./store/notification-context.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotificationContextProvider\": function() { return /* binding */ NotificationContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    notification: null,\n    showNotification: function(notificationData) {},\n    hideNotification: function() {}\n});\nfunction NotificationContextProvider(param) {\n    let { children  } = param;\n    _s();\n    const [activeNotification, setActiveNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (activeNotification && (activeNotification.status === \"success\" || activeNotification.status === \"error\")) {\n            const timer = setTimeout(()=>{\n                setActiveNotification(null);\n            }, 3000);\n            return ()=>{\n                clearTimeout(timer);\n            };\n        }\n    }, [\n        activeNotification\n    ]);\n    function showNotificationHandler(notificationData) {\n        setActiveNotification(notificationData);\n    }\n    function hideNotificationHandler() {\n        setActiveNotification(null);\n    }\n    const context = {\n        notification: activeNotification,\n        showNotification: showNotificationHandler,\n        hideNotification: hideNotificationHandler\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: context,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/store/notification-context.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(NotificationContextProvider, \"/IvVGePZMbO4a4fksnTQ5tBm1FE=\");\n_c = NotificationContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationContext);\nvar _c;\n$RefreshReg$(_c, \"NotificationContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFpRTtBQUVqRSxNQUFNSSxvQ0FBc0JILG9EQUFhQSxDQUFDO0lBQ3hDSSxjQUFjLElBQUk7SUFDbEJDLGtCQUFrQixTQUFTQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDQyxrQkFBa0IsV0FBVyxDQUFDO0FBQ2hDO0FBRU8sU0FBU0MsNEJBQTRCLEtBQVUsRUFBRTtRQUFaLEVBQUNDLFNBQVEsRUFBQyxHQUFWOztJQUUxQyxNQUFNLENBQUVDLG9CQUFvQkMsc0JBQXVCLEdBQUdULCtDQUFRQTtJQUU5REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlTLHNCQUF1QkEsQ0FBQUEsbUJBQW1CRSxNQUFNLEtBQUssYUFBYUYsbUJBQW1CRSxNQUFNLEtBQUssT0FBTSxHQUFJO1lBQzVHLE1BQU1DLFFBQVFDLFdBQVcsSUFBTTtnQkFDN0JILHNCQUFzQixJQUFJO1lBQzVCLEdBQUc7WUFFSCxPQUFPLElBQU07Z0JBQ1hJLGFBQWFGO1lBQ2Y7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDSDtLQUFtQjtJQUV2QixTQUFTTSx3QkFBd0JWLGdCQUFnQixFQUFFO1FBQ2pESyxzQkFBc0JMO0lBQ3hCO0lBRUEsU0FBU1csMEJBQTBCO1FBQ2pDTixzQkFBc0IsSUFBSTtJQUM1QjtJQUVBLE1BQU1PLFVBQVU7UUFDZGQsY0FBY007UUFDZEwsa0JBQWtCVztRQUNsQlQsa0JBQWtCVTtJQUNwQjtJQUVBLHFCQUNFLDhEQUFDZCxvQkFBb0JnQixRQUFRO1FBQUNDLE9BQU9GO2tCQUNsQ1Q7Ozs7OztBQUdQLENBQUM7R0FuQ2VEO0tBQUFBO0FBcUNoQiwrREFBZUwsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0LmpzPzBkMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTm90aWZpY2F0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBub3RpZmljYXRpb246IG51bGwsIC8vIHsgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cyB9XG4gIHNob3dOb3RpZmljYXRpb246IGZ1bmN0aW9uKG5vdGlmaWNhdGlvbkRhdGEpIHt9LFxuICBoaWRlTm90aWZpY2F0aW9uOiBmdW5jdGlvbigpIHt9XG59KVxuXG5leHBvcnQgZnVuY3Rpb24gTm90aWZpY2F0aW9uQ29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcblxuICBjb25zdCBbIGFjdGl2ZU5vdGlmaWNhdGlvbiwgc2V0QWN0aXZlTm90aWZpY2F0aW9uIF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZU5vdGlmaWNhdGlvbiAmJiAoYWN0aXZlTm90aWZpY2F0aW9uLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnIHx8IGFjdGl2ZU5vdGlmaWNhdGlvbi5zdGF0dXMgPT09ICdlcnJvcicpKSB7XG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVOb3RpZmljYXRpb24obnVsbClcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2FjdGl2ZU5vdGlmaWNhdGlvbl0pO1xuXG4gIGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb25IYW5kbGVyKG5vdGlmaWNhdGlvbkRhdGEpIHtcbiAgICBzZXRBY3RpdmVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uRGF0YSlcbiAgfVxuICBcbiAgZnVuY3Rpb24gaGlkZU5vdGlmaWNhdGlvbkhhbmRsZXIoKSB7XG4gICAgc2V0QWN0aXZlTm90aWZpY2F0aW9uKG51bGwpXG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIG5vdGlmaWNhdGlvbjogYWN0aXZlTm90aWZpY2F0aW9uLFxuICAgIHNob3dOb3RpZmljYXRpb246IHNob3dOb3RpZmljYXRpb25IYW5kbGVyLFxuICAgIGhpZGVOb3RpZmljYXRpb246IGhpZGVOb3RpZmljYXRpb25IYW5kbGVyXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxOb3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L05vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJub3RpZmljYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uRGF0YSIsImhpZGVOb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGl2ZU5vdGlmaWNhdGlvbiIsInNldEFjdGl2ZU5vdGlmaWNhdGlvbiIsInN0YXR1cyIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNob3dOb3RpZmljYXRpb25IYW5kbGVyIiwiaGlkZU5vdGlmaWNhdGlvbkhhbmRsZXIiLCJjb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/notification-context.js\n"));

/***/ })

});