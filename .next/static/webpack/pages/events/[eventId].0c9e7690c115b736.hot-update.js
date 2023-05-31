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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Comments(props) {\n    _s();\n    const { eventId  } = props;\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [updateComments, setUpdateComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isFetchingComments, setIsFetchingComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsFetchingComments(true);\n        fetch(\"/api/comments/\".concat(eventId)).then((response)=>response.json()).then((data)=>{\n            setComments(data.comments);\n            setIsFetchingComments(false);\n        });\n    });\n    function toggleCommentsHandler() {\n        setShowComments((prevStatus)=>!prevStatus);\n    }\n    function addCommentHandler(commentData) {\n        notificationCtx.showNotification({\n            title: \"Adding Comment...\",\n            message: \"Uploading your comment...\",\n            status: \"pending\"\n        });\n        fetch(\"/api/comments/\".concat(eventId), {\n            method: \"POST\",\n            body: JSON.stringify(commentData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (response.ok) {\n                return response.json();\n            }\n            return response.json().then((data)=>{\n                throw new Error(data.message || \"Something went wrong!\");\n            });\n        }).then((data)=>{\n            notificationCtx.showNotification({\n                title: \"Success!\",\n                message: \"Your comment was saved!\",\n                status: \"success\"\n            });\n        }).catch((error)=>{\n            notificationCtx.showNotification({\n                title: \"Error!\",\n                message: error.message || \"Something went wrong!\",\n                status: \"error\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_5___default().comments),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleCommentsHandler,\n                children: [\n                    showComments ? \"Hide\" : \"Show\",\n                    \" Comments\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_new_comment__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onAddComment: addCommentHandler\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n                lineNumber: 76,\n                columnNumber: 24\n            }, this),\n            showComments && !isFetchingComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comment_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: comments\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n                lineNumber: 77,\n                columnNumber: 47\n            }, this),\n            showComments && isFetchingComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n                lineNumber: 78,\n                columnNumber: 46\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/CodeyEvents/components/input/comments.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Comments, \"TrsNryP/SLrknHuVH9TMC9F9nag=\");\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFFZjtBQUNGO0FBQ0s7QUFDdUI7QUFFcEQsU0FBU08sU0FBU0MsS0FBSyxFQUFFOztJQUN0QyxNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRDtJQUVwQixNQUFNRSxrQkFBa0JWLGlEQUFVQSxDQUFDTSxtRUFBbUJBO0lBRXRELE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDVyxnQkFBZ0JDLGtCQUFrQixHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFELE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2Usb0JBQW9CQyxzQkFBc0IsR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUs7SUFFbEVELGdEQUFTQSxDQUFDLElBQU07UUFDZGlCLHNCQUFzQixJQUFJO1FBQzFCQyxNQUFNLGlCQUF5QixPQUFSVixVQUN0QlcsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVE7WUFDWlAsWUFBWU8sS0FBS1IsUUFBUTtZQUN6Qkcsc0JBQXNCLEtBQUs7UUFDN0I7SUFDRjtJQUVBLFNBQVNNLHdCQUF3QjtRQUMvQlosZ0JBQWdCLENBQUNhLGFBQWUsQ0FBQ0E7SUFDbkM7SUFFQSxTQUFTQyxrQkFBa0JDLFdBQVcsRUFBRTtRQUN0Q2pCLGdCQUFnQmtCLGdCQUFnQixDQUFDO1lBQy9CQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsUUFBUTtRQUNWO1FBRUFaLE1BQU0saUJBQXlCLE9BQVJWLFVBQVc7WUFDaEN1QixRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1I7WUFDckJTLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0YsR0FDQ2hCLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWTtZQUNoQixJQUFJQSxTQUFTZ0IsRUFBRSxFQUFFO2dCQUNmLE9BQU9oQixTQUFTQyxJQUFJO1lBQ3RCLENBQUM7WUFFRCxPQUFPRCxTQUFTQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUTtnQkFDbEMsTUFBTSxJQUFJZSxNQUFNZixLQUFLTyxPQUFPLElBQUkseUJBQXlCO1lBQzNEO1FBQ0YsR0FDQ1YsSUFBSSxDQUFDRyxDQUFBQSxPQUFRO1lBQ1piLGdCQUFnQmtCLGdCQUFnQixDQUFDO2dCQUMvQkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsUUFBUTtZQUNWO1FBQ0YsR0FDQ1EsS0FBSyxDQUFDQyxDQUFBQSxRQUFTO1lBQ2Q5QixnQkFBZ0JrQixnQkFBZ0IsQ0FBQztnQkFDL0JDLE9BQU87Z0JBQ1BDLFNBQVNVLE1BQU1WLE9BQU8sSUFBSTtnQkFDMUJDLFFBQVE7WUFDVjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1U7UUFBUUMsV0FBV3JDLHNFQUFnQjs7MEJBQ2xDLDhEQUFDc0M7Z0JBQU9DLFNBQVNwQjs7b0JBQ2RiLGVBQWUsU0FBUyxNQUFNO29CQUFDOzs7Ozs7O1lBRWpDQSw4QkFBZ0IsOERBQUNQLG9EQUFVQTtnQkFBQ3lDLGNBQWNuQjs7Ozs7O1lBQzFDZixnQkFBZ0IsQ0FBQ00sb0NBQXNCLDhEQUFDZCxxREFBV0E7Z0JBQUMyQyxPQUFPL0I7Ozs7OztZQUMzREosZ0JBQWdCTSxvQ0FBc0IsOERBQUM4QjswQkFBRTs7Ozs7Ozs7Ozs7O0FBR2hELENBQUM7R0F6RXVCeEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcz9iMThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuL2NvbW1lbnQtbGlzdCc7XG5pbXBvcnQgTmV3Q29tbWVudCBmcm9tICcuL25ldy1jb21tZW50JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29tbWVudHMubW9kdWxlLmNzcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XG4gIGNvbnN0IHsgZXZlbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uQ3R4ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICBjb25zdCBbc2hvd0NvbW1lbnRzLCBzZXRTaG93Q29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXBkYXRlQ29tbWVudHMsIHNldFVwZGF0ZUNvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzRmV0Y2hpbmdDb21tZW50cywgc2V0SXNGZXRjaGluZ0NvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzRmV0Y2hpbmdDb21tZW50cyh0cnVlKVxuICAgIGZldGNoKGAvYXBpL2NvbW1lbnRzLyR7ZXZlbnRJZH1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIHNldENvbW1lbnRzKGRhdGEuY29tbWVudHMpXG4gICAgICBzZXRJc0ZldGNoaW5nQ29tbWVudHMoZmFsc2UpXG4gICAgfSlcbiAgfSwgKVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbW1lbnRzSGFuZGxlcigpIHtcbiAgICBzZXRTaG93Q29tbWVudHMoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvbW1lbnRIYW5kbGVyKGNvbW1lbnREYXRhKSB7XG4gICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgdGl0bGU6ICdBZGRpbmcgQ29tbWVudC4uLicsXG4gICAgICBtZXNzYWdlOiAnVXBsb2FkaW5nIHlvdXIgY29tbWVudC4uLicsXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJ1xuICAgIH0pXG5cbiAgICBmZXRjaChgL2FwaS9jb21tZW50cy8ke2V2ZW50SWR9YCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50RGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcbiAgICAgICAgbWVzc2FnZTogJ1lvdXIgY29tbWVudCB3YXMgc2F2ZWQhJyxcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcydcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICB0aXRsZTogJ0Vycm9yIScsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nIScsXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29tbWVudHN9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb21tZW50c0hhbmRsZXJ9PlxuICAgICAgICB7c2hvd0NvbW1lbnRzID8gJ0hpZGUnIDogJ1Nob3cnfSBDb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxOZXdDb21tZW50IG9uQWRkQ29tbWVudD17YWRkQ29tbWVudEhhbmRsZXJ9IC8+fVxuICAgICAge3Nob3dDb21tZW50cyAmJiAhaXNGZXRjaGluZ0NvbW1lbnRzICYmIDxDb21tZW50TGlzdCBpdGVtcz17Y29tbWVudHN9Lz59XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIGlzRmV0Y2hpbmdDb21tZW50cyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbW1lbnRMaXN0IiwiTmV3Q29tbWVudCIsImNsYXNzZXMiLCJOb3RpZmljYXRpb25Db250ZXh0IiwiQ29tbWVudHMiLCJwcm9wcyIsImV2ZW50SWQiLCJub3RpZmljYXRpb25DdHgiLCJzaG93Q29tbWVudHMiLCJzZXRTaG93Q29tbWVudHMiLCJ1cGRhdGVDb21tZW50cyIsInNldFVwZGF0ZUNvbW1lbnRzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImlzRmV0Y2hpbmdDb21tZW50cyIsInNldElzRmV0Y2hpbmdDb21tZW50cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0b2dnbGVDb21tZW50c0hhbmRsZXIiLCJwcmV2U3RhdHVzIiwiYWRkQ29tbWVudEhhbmRsZXIiLCJjb21tZW50RGF0YSIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiY2F0Y2giLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwib25BZGRDb21tZW50IiwiaXRlbXMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/input/comments.js\n"));

/***/ })

});