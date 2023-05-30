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
exports.id = "pages/api/comments/[eventId]";
exports.ids = ["pages/api/comments/[eventId]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/comments/[eventId].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventId].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const eventId = req.query.eventId;\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/events?retryWrites=true&w=majority\");\n    if (req.method === \"POST\") {\n        const { email , name , text  } = req.body;\n        if (!email.includes(\"@\") || !name || name.trim() === \"\" || !text || text.trim() === \"\") {\n            res.status(422).json({\n                message: \"Invalid input.\"\n            });\n            return;\n        }\n        const newComment = {\n            email,\n            name,\n            text,\n            eventId\n        };\n        const db = client.db();\n        const result = await db.collection(eventId).insertOne(newComment);\n        newComment.id = result.insertedId;\n        const documents = await db.collection(eventId).find().sort({\n            _id: -1\n        }).toArray();\n        res.status(201).json({\n            message: \"Added Comment.\",\n            comment: newComment\n        });\n    }\n    if (req.method === \"GET\") {\n        const db1 = client.db();\n        const documents1 = await db1.collection(eventId).find().sort({\n            _id: -1\n        }).toArray();\n        res.status(200).json({\n            comments: documents1\n        });\n    }\n    client.close();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV2QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxVQUFVRixJQUFJRyxLQUFLLENBQUNELE9BQU87SUFFakMsTUFBTUUsU0FBUyxNQUFNTix3REFBbUIsQ0FDdEM7SUFHRixJQUFJRSxJQUFJTSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBR1QsSUFBSVUsSUFBSTtRQUV0QyxJQUNFLENBQUNILE1BQU1JLFFBQVEsQ0FBQyxRQUNoQixDQUFDSCxRQUNEQSxLQUFLSSxJQUFJLE9BQU8sTUFDaEIsQ0FBQ0gsUUFDREEsS0FBS0csSUFBSSxPQUFPLElBQ2hCO1lBQ0FYLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUI7WUFDakQ7UUFDRixDQUFDO1FBRUQsTUFBTUMsYUFBYTtZQUNqQlQ7WUFDQUM7WUFDQUM7WUFDQVA7UUFDRjtRQUVBLE1BQU1lLEtBQUtiLE9BQU9hLEVBQUU7UUFDcEIsTUFBTUMsU0FBUyxNQUFNRCxHQUFHRSxVQUFVLENBQUNqQixTQUFTa0IsU0FBUyxDQUFDSjtRQUV0REEsV0FBV0ssRUFBRSxHQUFHSCxPQUFPSSxVQUFVO1FBRWpDLE1BQU1DLFlBQVksTUFBTU4sR0FDckJFLFVBQVUsQ0FBQ2pCLFNBQ1hzQixJQUFJLEdBQ0pDLElBQUksQ0FBQztZQUFFQyxLQUFLLENBQUM7UUFBRSxHQUNmQyxPQUFPO1FBRVYxQixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBa0JhLFNBQVNaO1FBQVc7SUFDeEUsQ0FBQztJQUVELElBQUloQixJQUFJTSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNVyxNQUFLYixPQUFPYSxFQUFFO1FBRXBCLE1BQU1NLGFBQVksTUFBTU4sSUFDckJFLFVBQVUsQ0FBQ2pCLFNBQ1hzQixJQUFJLEdBQ0pDLElBQUksQ0FBQztZQUFFQyxLQUFLLENBQUM7UUFBRSxHQUNmQyxPQUFPO1FBRVYxQixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVlLFVBQVVOO1FBQVU7SUFDN0MsQ0FBQztJQUVEbkIsT0FBTzBCLEtBQUs7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9jb21tZW50cy9bZXZlbnRJZF0uanM/OGI0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgZXZlbnRJZCA9IHJlcS5xdWVyeS5ldmVudElkO1xuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL3lpbmc6eWluZ0BjbHVzdGVyMC5hbmR6bDF1Lm1vbmdvZGIubmV0L2V2ZW50cz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgZW1haWwsIG5hbWUsIHRleHQgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKFxuICAgICAgIWVtYWlsLmluY2x1ZGVzKFwiQFwiKSB8fFxuICAgICAgIW5hbWUgfHxcbiAgICAgIG5hbWUudHJpbSgpID09PSBcIlwiIHx8XG4gICAgICAhdGV4dCB8fFxuICAgICAgdGV4dC50cmltKCkgPT09IFwiXCJcbiAgICApIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGlucHV0LlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIG5hbWUsXG4gICAgICB0ZXh0LFxuICAgICAgZXZlbnRJZCxcbiAgICB9O1xuXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGV2ZW50SWQpLmluc2VydE9uZShuZXdDb21tZW50KTtcblxuICAgIG5ld0NvbW1lbnQuaWQgPSByZXN1bHQuaW5zZXJ0ZWRJZDtcblxuICAgIGNvbnN0IGRvY3VtZW50cyA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbihldmVudElkKVxuICAgICAgLmZpbmQoKVxuICAgICAgLnNvcnQoeyBfaWQ6IC0xIH0pXG4gICAgICAudG9BcnJheSgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkFkZGVkIENvbW1lbnQuXCIsIGNvbW1lbnQ6IG5ld0NvbW1lbnQgfSk7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oZXZlbnRJZClcbiAgICAgIC5maW5kKClcbiAgICAgIC5zb3J0KHsgX2lkOiAtMSB9KVxuICAgICAgLnRvQXJyYXkoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29tbWVudHM6IGRvY3VtZW50cyB9KTtcbiAgfVxuXG4gIGNsaWVudC5jbG9zZSgpO1xufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImV2ZW50SWQiLCJxdWVyeSIsImNsaWVudCIsImNvbm5lY3QiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJ0ZXh0IiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibmV3Q29tbWVudCIsImRiIiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImlkIiwiaW5zZXJ0ZWRJZCIsImRvY3VtZW50cyIsImZpbmQiLCJzb3J0IiwiX2lkIiwidG9BcnJheSIsImNvbW1lbnQiLCJjb21tZW50cyIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[eventId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[eventId].js"));
module.exports = __webpack_exports__;

})();