"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/comments/[eventid]";
exports.ids = ["pages/api/comments/[eventid]"];
exports.modules = {

/***/ "(api)/./pages/api/comments/[eventid].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventid].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const eventId = req.query.eventId;\n    if (req.method === \"POST\") {\n        const { email , name , text  } = req.body;\n        if (!email.includes(\"@\") || !name || name.trim() === \"\" || !text || text.trim() === \"\") {\n            res.status(422).json({\n                message: \"Invalid input.\"\n            });\n            return;\n        }\n        const newComment = {\n            id: new Date().toISOString(),\n            email,\n            name,\n            text\n        };\n        console.log(newComment);\n        res.status(201).json({\n            message: \"Added Comment.\",\n            comment: newComment\n        });\n    }\n    if (req.method === \"GET\") {\n        const dummyList = [\n            {\n                id: \"c1\",\n                name: \"Max\",\n                text: \"A first Comment!\"\n            },\n            {\n                id: \"c2\",\n                name: \"Manuel\",\n                text: \"A second Comment!\"\n            }\n        ];\n        res.status(200).json({\n            comments: dummyList\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50aWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxNQUFNQyxVQUFVRixJQUFJRyxLQUFLLENBQUNELE9BQU87SUFFakMsSUFBSUYsSUFBSUksTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFLEdBQUdQLElBQUlRLElBQUk7UUFFdEMsSUFDRSxDQUFDSCxNQUFNSSxRQUFRLENBQUMsUUFDaEIsQ0FBQ0gsUUFDREEsS0FBS0ksSUFBSSxPQUFPLE1BQ2hCLENBQUNILFFBQ0RBLEtBQUtHLElBQUksT0FBTyxJQUNoQjtZQUNBVCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWlCO1lBQ2pEO1FBQ0YsQ0FBQztRQUVELE1BQU1DLGFBQWE7WUFDakJDLElBQUksSUFBSUMsT0FBT0MsV0FBVztZQUMxQlo7WUFDQUM7WUFDQUM7UUFDRjtRQUVBVyxRQUFRQyxHQUFHLENBQUNMO1FBR1piLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUztZQUFrQk8sU0FBU047UUFBVTtJQUN0RSxDQUFDO0lBRUQsSUFBSWQsSUFBSUksTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTWlCLFlBQVk7WUFDaEI7Z0JBQUNOLElBQUk7Z0JBQU1ULE1BQU07Z0JBQU9DLE1BQU07WUFBa0I7WUFDaEQ7Z0JBQUNRLElBQUk7Z0JBQU1ULE1BQU07Z0JBQVVDLE1BQU07WUFBbUI7U0FDckQ7UUFFRE4sSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDVSxVQUFVRDtRQUFTO0lBQzNDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9jb21tZW50cy9bZXZlbnRpZF0uanM/OWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGV2ZW50SWQgPSByZXEucXVlcnkuZXZlbnRJZDtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCB0ZXh0IH0gPSByZXEuYm9keTtcblxuICAgIGlmIChcbiAgICAgICFlbWFpbC5pbmNsdWRlcyhcIkBcIikgfHxcbiAgICAgICFuYW1lIHx8XG4gICAgICBuYW1lLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgIXRleHQgfHxcbiAgICAgIHRleHQudHJpbSgpID09PSBcIlwiXG4gICAgKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0LicgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Q29tbWVudCA9IHtcbiAgICAgIGlkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBlbWFpbCxcbiAgICAgIG5hbWUsXG4gICAgICB0ZXh0XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKG5ld0NvbW1lbnQpO1xuXG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTogXCJBZGRlZCBDb21tZW50LlwiLCBjb21tZW50OiBuZXdDb21tZW50fSlcbiAgfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgZHVtbXlMaXN0ID0gW1xuICAgICAge2lkOiAnYzEnLCBuYW1lOiAnTWF4JywgdGV4dDogJ0EgZmlyc3QgQ29tbWVudCEnfSxcbiAgICAgIHtpZDogJ2MyJywgbmFtZTogJ01hbnVlbCcsIHRleHQ6ICdBIHNlY29uZCBDb21tZW50ISd9LFxuICAgIF07XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7Y29tbWVudHM6IGR1bW15TGlzdH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZXZlbnRJZCIsInF1ZXJ5IiwibWV0aG9kIiwiZW1haWwiLCJuYW1lIiwidGV4dCIsImJvZHkiLCJpbmNsdWRlcyIsInRyaW0iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5ld0NvbW1lbnQiLCJpZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50IiwiZHVtbXlMaXN0IiwiY29tbWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[eventid].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[eventid].js"));
module.exports = __webpack_exports__;

})();