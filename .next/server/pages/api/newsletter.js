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
exports.id = "pages/api/newsletter";
exports.ids = ["pages/api/newsletter"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hander)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hander(req, res) {\n    if (req.method === \"POST\") {\n        const userEmail = req.body.email;\n        if (!userEmail || !userEmail.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address.\"\n            });\n            return;\n        }\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/newsletter?retryWrites=true&w=majority\");\n        const db = client.db();\n        await db.collection(\"emails\").insertOne({\n            email: userEmail\n        });\n        client.close();\n        res.status(201).json({\n            message: \"Signed Up!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdkIsZUFBZUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsWUFBWUgsSUFBSUksSUFBSSxDQUFDQyxLQUFLO1FBRWhDLElBQUksQ0FBQ0YsYUFBYSxDQUFDQSxVQUFVRyxRQUFRLENBQUMsTUFBTTtZQUMxQ0wsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF5QjtZQUN6RDtRQUNGLENBQUM7UUFFRCxNQUFNQyxTQUFTLE1BQU1aLHdEQUFtQixDQUFDO1FBRXpDLE1BQU1jLEtBQUtGLE9BQU9FLEVBQUU7UUFFcEIsTUFBTUEsR0FBR0MsVUFBVSxDQUFDLFVBQVVDLFNBQVMsQ0FBQztZQUFDVCxPQUFPRjtRQUFTO1FBRXpETyxPQUFPSyxLQUFLO1FBR1pkLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFZO0lBQzlDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXdzbGV0dGVyLmpzPzEwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCB1c2VyRW1haWwgPSByZXEuYm9keS5lbWFpbDtcblxuICAgIGlmICghdXNlckVtYWlsIHx8ICF1c2VyRW1haWwuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgYWRkcmVzcy5cIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3lpbmc6eWluZ0BjbHVzdGVyMC5hbmR6bDF1Lm1vbmdvZGIubmV0L25ld3NsZXR0ZXI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcbiAgICBcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbignZW1haWxzJykuaW5zZXJ0T25lKHtlbWFpbDogdXNlckVtYWlsfSlcblxuICAgIGNsaWVudC5jbG9zZSgpO1xuXG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdTaWduZWQgVXAhJ30pXG4gIH1cbn0iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyRW1haWwiLCJib2R5IiwiZW1haWwiLCJpbmNsdWRlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newsletter.js"));
module.exports = __webpack_exports__;

})();