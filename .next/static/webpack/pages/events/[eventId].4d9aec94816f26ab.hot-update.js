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

/***/ "./components/input/comments.js":
/*!**************************************!*\
  !*** ./components/input/comments.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Comments(props) {\n    _s();\n    const { eventId  } = props;\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isFetchingComments, setIsFetchingComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/comments/\".concat(eventId)).then((response)=>response.json()).then((data)=>{\n            setComments(data.comments);\n        });\n    });\n    function toggleCommentsHandler() {\n        setShowComments((prevStatus)=>!prevStatus);\n    }\n    function addCommentHandler(commentData) {\n        notificationCtx.showNotification({\n            title: \"Adding Comment...\",\n            message: \"Uploading your comment...\",\n            status: \"pending\"\n        });\n        fetch(\"/api/comments/\".concat(eventId), {\n            method: \"POST\",\n            body: JSON.stringify(commentData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (response.ok) {\n                return response.json();\n            }\n            return response.json().then((data)=>{\n                throw new Error(data.message || \"Something went wrong!\");\n            });\n        }).then((data)=>{\n            notificationCtx.showNotification({\n                title: \"Success!\",\n                message: \"Your comment was saved!\",\n                status: \"success\"\n            });\n        }).catch((error)=>{\n            notificationCtx.showNotification({\n                title: \"Error!\",\n                message: error.message || \"Something went wrong!\",\n                status: \"error\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_5___default().comments),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleCommentsHandler,\n                children: [\n                    showComments ? \"Hide\" : \"Show\",\n                    \" Comments\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_new_comment__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onAddComment: addCommentHandler\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n                lineNumber: 73,\n                columnNumber: 24\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comment_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: comments\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n                lineNumber: 74,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Comments, \"0mYZHfgbEuzzpjPDIhT0voiASOw=\");\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFFZjtBQUNGO0FBQ0s7QUFDdUI7QUFFcEQsU0FBU08sU0FBU0MsS0FBSyxFQUFFOztJQUN0QyxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRDtJQUVwQixNQUFNRSxrQkFBa0JWLGlEQUFVQSxDQUFDTSxtRUFBbUJBO0lBRXRELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDYSxvQkFBb0JDLHNCQUFzQixHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxFRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RnQixNQUFNLGlCQUF5QixPQUFSUixVQUN0QlMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVE7WUFDWlAsWUFBWU8sS0FBS1IsUUFBUTtRQUMzQjtJQUNGO0lBRUEsU0FBU1Msd0JBQXdCO1FBQy9CVixnQkFBZ0IsQ0FBQ1csYUFBZSxDQUFDQTtJQUNuQztJQUVBLFNBQVNDLGtCQUFrQkMsV0FBVyxFQUFFO1FBQ3RDZixnQkFBZ0JnQixnQkFBZ0IsQ0FBQztZQUMvQkMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7UUFDVjtRQUVBWixNQUFNLGlCQUF5QixPQUFSUixVQUFXO1lBQ2hDcUIsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNSO1lBQ3JCUyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0NoQixJQUFJLENBQUNDLENBQUFBLFdBQVk7WUFDaEIsSUFBSUEsU0FBU2dCLEVBQUUsRUFBRTtnQkFDZixPQUFPaEIsU0FBU0MsSUFBSTtZQUN0QixDQUFDO1lBRUQsT0FBT0QsU0FBU0MsSUFBSSxHQUFHRixJQUFJLENBQUNHLENBQUFBLE9BQVE7Z0JBQ2xDLE1BQU0sSUFBSWUsTUFBTWYsS0FBS08sT0FBTyxJQUFJLHlCQUF5QjtZQUMzRDtRQUNGLEdBQ0NWLElBQUksQ0FBQ0csQ0FBQUEsT0FBUTtZQUNaWCxnQkFBZ0JnQixnQkFBZ0IsQ0FBQztnQkFDL0JDLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLFFBQVE7WUFDVjtRQUNGLEdBQ0NRLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBUztZQUNkNUIsZ0JBQWdCZ0IsZ0JBQWdCLENBQUM7Z0JBQy9CQyxPQUFPO2dCQUNQQyxTQUFTVSxNQUFNVixPQUFPLElBQUk7Z0JBQzFCQyxRQUFRO1lBQ1Y7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNVO1FBQVFDLFdBQVduQyxzRUFBZ0I7OzBCQUNsQyw4REFBQ29DO2dCQUFPQyxTQUFTcEI7O29CQUNkWCxlQUFlLFNBQVMsTUFBTTtvQkFBQzs7Ozs7OztZQUVqQ0EsOEJBQWdCLDhEQUFDUCxvREFBVUE7Z0JBQUN1QyxjQUFjbkI7Ozs7OztZQUMxQ2IsOEJBQWdCLDhEQUFDUixxREFBV0E7Z0JBQUN5QyxPQUFPL0I7Ozs7Ozs7Ozs7OztBQUczQyxDQUFDO0dBckV1Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcz9iMThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuL2NvbW1lbnQtbGlzdCc7XG5pbXBvcnQgTmV3Q29tbWVudCBmcm9tICcuL25ldy1jb21tZW50JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29tbWVudHMubW9kdWxlLmNzcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XG4gIGNvbnN0IHsgZXZlbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uQ3R4ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICBjb25zdCBbc2hvd0NvbW1lbnRzLCBzZXRTaG93Q29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaXNGZXRjaGluZ0NvbW1lbnRzLCBzZXRJc0ZldGNoaW5nQ29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgL2FwaS9jb21tZW50cy8ke2V2ZW50SWR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBzZXRDb21tZW50cyhkYXRhLmNvbW1lbnRzKVxuICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ29tbWVudHNIYW5kbGVyKCkge1xuICAgIHNldFNob3dDb21tZW50cygocHJldlN0YXR1cykgPT4gIXByZXZTdGF0dXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ29tbWVudEhhbmRsZXIoY29tbWVudERhdGEpIHtcbiAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICB0aXRsZTogJ0FkZGluZyBDb21tZW50Li4uJyxcbiAgICAgIG1lc3NhZ2U6ICdVcGxvYWRpbmcgeW91ciBjb21tZW50Li4uJyxcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnXG4gICAgfSlcblxuICAgIGZldGNoKGAvYXBpL2NvbW1lbnRzLyR7ZXZlbnRJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnREYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgIHRpdGxlOiAnU3VjY2VzcyEnLFxuICAgICAgICBtZXNzYWdlOiAnWW91ciBjb21tZW50IHdhcyBzYXZlZCEnLFxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJ1xuICAgICAgfSlcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgIHRpdGxlOiAnRXJyb3IhJyxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmchJyxcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tZW50c30+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzSGFuZGxlcn0+XG4gICAgICAgIHtzaG93Q29tbWVudHMgPyAnSGlkZScgOiAnU2hvdyd9IENvbW1lbnRzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtzaG93Q29tbWVudHMgJiYgPE5ld0NvbW1lbnQgb25BZGRDb21tZW50PXthZGRDb21tZW50SGFuZGxlcn0gLz59XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxDb21tZW50TGlzdCBpdGVtcz17Y29tbWVudHN9Lz59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb21tZW50TGlzdCIsIk5ld0NvbW1lbnQiLCJjbGFzc2VzIiwiTm90aWZpY2F0aW9uQ29udGV4dCIsIkNvbW1lbnRzIiwicHJvcHMiLCJldmVudElkIiwibm90aWZpY2F0aW9uQ3R4Iiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImlzRmV0Y2hpbmdDb21tZW50cyIsInNldElzRmV0Y2hpbmdDb21tZW50cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0b2dnbGVDb21tZW50c0hhbmRsZXIiLCJwcmV2U3RhdHVzIiwiYWRkQ29tbWVudEhhbmRsZXIiLCJjb21tZW50RGF0YSIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiY2F0Y2giLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwib25BZGRDb21tZW50IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/comments.js\n"));

/***/ })

});