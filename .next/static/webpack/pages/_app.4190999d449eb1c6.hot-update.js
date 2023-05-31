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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotificationContextProvider\": function() { return /* binding */ NotificationContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    notification: null,\n    showNotification: function(notificationData) {},\n    hideNotification: function() {}\n});\nfunction NotificationContextProvider(param) {\n    let { children  } = param;\n    _s();\n    const [activeNotification, setActiveNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (activeNotification && (activeNotification.status === \"success\" || activeNotification.status === \"error\")) {}\n    }, []);\n    function showNotificationHandler(notificationData) {\n        setActiveNotification(notificationData);\n    }\n    function hideNotificationHandler() {\n        setActiveNotification(null);\n    }\n    const context = {\n        notification: activeNotification,\n        showNotification: showNotificationHandler,\n        hideNotification: hideNotificationHandler\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: context,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/store/notification-context.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(NotificationContextProvider, \"/IvVGePZMbO4a4fksnTQ5tBm1FE=\");\n_c = NotificationContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationContext);\nvar _c;\n$RefreshReg$(_c, \"NotificationContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFpRTtBQUVqRSxNQUFNSSxvQ0FBc0JILG9EQUFhQSxDQUFDO0lBQ3hDSSxjQUFjLElBQUk7SUFDbEJDLGtCQUFrQixTQUFTQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDQyxrQkFBa0IsV0FBVyxDQUFDO0FBQ2hDO0FBRU8sU0FBU0MsNEJBQTRCLEtBQVUsRUFBRTtRQUFaLEVBQUNDLFNBQVEsRUFBQyxHQUFWOztJQUUxQyxNQUFNLENBQUVDLG9CQUFvQkMsc0JBQXVCLEdBQUdULCtDQUFRQTtJQUU5REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlTLHNCQUF1QkEsQ0FBQUEsbUJBQW1CRSxNQUFNLEtBQUssYUFBYUYsbUJBQW1CRSxNQUFNLEtBQUssT0FBTSxHQUFJLENBRTlHLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxTQUFTQyx3QkFBd0JQLGdCQUFnQixFQUFFO1FBQ2pESyxzQkFBc0JMO0lBQ3hCO0lBRUEsU0FBU1EsMEJBQTBCO1FBQ2pDSCxzQkFBc0IsSUFBSTtJQUM1QjtJQUVBLE1BQU1JLFVBQVU7UUFDZFgsY0FBY007UUFDZEwsa0JBQWtCUTtRQUNsQk4sa0JBQWtCTztJQUNwQjtJQUVBLHFCQUNFLDhEQUFDWCxvQkFBb0JhLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQ2xDTjs7Ozs7O0FBR1AsQ0FBQztHQTdCZUQ7S0FBQUE7QUErQmhCLCtEQUFlTCxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQuanM/MGQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBOb3RpZmljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIG5vdGlmaWNhdGlvbjogbnVsbCwgLy8geyB0aXRsZSwgbWVzc2FnZSwgc3RhdHVzIH1cbiAgc2hvd05vdGlmaWNhdGlvbjogZnVuY3Rpb24obm90aWZpY2F0aW9uRGF0YSkge30sXG4gIGhpZGVOb3RpZmljYXRpb246IGZ1bmN0aW9uKCkge31cbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBOb3RpZmljYXRpb25Db250ZXh0UHJvdmlkZXIoe2NoaWxkcmVufSkge1xuXG4gIGNvbnN0IFsgYWN0aXZlTm90aWZpY2F0aW9uLCBzZXRBY3RpdmVOb3RpZmljYXRpb24gXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlTm90aWZpY2F0aW9uICYmIChhY3RpdmVOb3RpZmljYXRpb24uc3RhdHVzID09PSAnc3VjY2VzcycgfHwgYWN0aXZlTm90aWZpY2F0aW9uLnN0YXR1cyA9PT0gJ2Vycm9yJykpIHtcbiAgICAgIFxuICAgIH1cbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbkhhbmRsZXIobm90aWZpY2F0aW9uRGF0YSkge1xuICAgIHNldEFjdGl2ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25EYXRhKVxuICB9XG4gIFxuICBmdW5jdGlvbiBoaWRlTm90aWZpY2F0aW9uSGFuZGxlcigpIHtcbiAgICBzZXRBY3RpdmVOb3RpZmljYXRpb24obnVsbClcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgbm90aWZpY2F0aW9uOiBhY3RpdmVOb3RpZmljYXRpb24sXG4gICAgc2hvd05vdGlmaWNhdGlvbjogc2hvd05vdGlmaWNhdGlvbkhhbmRsZXIsXG4gICAgaGlkZU5vdGlmaWNhdGlvbjogaGlkZU5vdGlmaWNhdGlvbkhhbmRsZXJcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE5vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Db250ZXh0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTm90aWZpY2F0aW9uQ29udGV4dCIsIm5vdGlmaWNhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25EYXRhIiwiaGlkZU5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiYWN0aXZlTm90aWZpY2F0aW9uIiwic2V0QWN0aXZlTm90aWZpY2F0aW9uIiwic3RhdHVzIiwic2hvd05vdGlmaWNhdGlvbkhhbmRsZXIiLCJoaWRlTm90aWZpY2F0aW9uSGFuZGxlciIsImNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/notification-context.js\n"));

/***/ })

});