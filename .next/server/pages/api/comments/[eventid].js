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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const eventId = req.query.eventId;\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/events?retryWrites=true&w=majority\");\n    if (req.method === \"POST\") {\n        const { email , name , text  } = req.body;\n        if (!email.includes(\"@\") || !name || name.trim() === \"\" || !text || text.trim() === \"\") {\n            res.status(422).json({\n                message: \"Invalid input.\"\n            });\n            return;\n        }\n        const newComment = {\n            email,\n            name,\n            text,\n            eventId\n        };\n        const db = client.db();\n        const result = await db.collection(\"comments\").insertOne(newComment);\n        console.log(result);\n        newComment.id = result.insertedId;\n        res.status(201).json({\n            message: \"Added Comment.\",\n            comment: newComment\n        });\n    }\n    if (req.method === \"GET\") {\n        const db1 = client.db();\n        const documents = await db1.collection(\"comments\").find().sort({\n            _id: -1\n        }).toArray();\n        res.status(200).json({\n            comments: documents\n        });\n    }\n    client.close();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV2QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxVQUFVRixJQUFJRyxLQUFLLENBQUNELE9BQU87SUFFakMsTUFBTUUsU0FBUyxNQUFNTix3REFBbUIsQ0FDdEM7SUFHRixJQUFJRSxJQUFJTSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBR1QsSUFBSVUsSUFBSTtRQUV0QyxJQUNFLENBQUNILE1BQU1JLFFBQVEsQ0FBQyxRQUNoQixDQUFDSCxRQUNEQSxLQUFLSSxJQUFJLE9BQU8sTUFDaEIsQ0FBQ0gsUUFDREEsS0FBS0csSUFBSSxPQUFPLElBQ2hCO1lBQ0FYLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUI7WUFDakQ7UUFDRixDQUFDO1FBRUQsTUFBTUMsYUFBYTtZQUNqQlQ7WUFDQUM7WUFDQUM7WUFDQVA7UUFDRjtRQUVBLE1BQU1lLEtBQUtiLE9BQU9hLEVBQUU7UUFDcEIsTUFBTUMsU0FBUyxNQUFNRCxHQUFHRSxVQUFVLENBQUMsWUFBWUMsU0FBUyxDQUFDSjtRQUV6REssUUFBUUMsR0FBRyxDQUFDSjtRQUVaRixXQUFXTyxFQUFFLEdBQUdMLE9BQU9NLFVBQVU7UUFFakN2QixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBa0JVLFNBQVNUO1FBQVc7SUFDeEUsQ0FBQztJQUVELElBQUloQixJQUFJTSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNVyxNQUFLYixPQUFPYSxFQUFFO1FBRXBCLE1BQU1TLFlBQVksTUFBTVQsSUFDckJFLFVBQVUsQ0FBQyxZQUNYUSxJQUFJLEdBQ0pDLElBQUksQ0FBQztZQUFFQyxLQUFLLENBQUM7UUFBRSxHQUNmQyxPQUFPO1FBRVY3QixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVpQixVQUFVTDtRQUFVO0lBQzdDLENBQUM7SUFFRHRCLE9BQU80QixLQUFLO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzPzhiNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGV2ZW50SWQgPSByZXEucXVlcnkuZXZlbnRJZDtcblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly95aW5nOnlpbmdAY2x1c3RlcjAuYW5kemwxdS5tb25nb2RiLm5ldC9ldmVudHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCB0ZXh0IH0gPSByZXEuYm9keTtcblxuICAgIGlmIChcbiAgICAgICFlbWFpbC5pbmNsdWRlcyhcIkBcIikgfHxcbiAgICAgICFuYW1lIHx8XG4gICAgICBuYW1lLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgIXRleHQgfHxcbiAgICAgIHRleHQudHJpbSgpID09PSBcIlwiXG4gICAgKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBpbnB1dC5cIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdDb21tZW50ID0ge1xuICAgICAgZW1haWwsXG4gICAgICBuYW1lLFxuICAgICAgdGV4dCxcbiAgICAgIGV2ZW50SWQsXG4gICAgfTtcblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpLmluc2VydE9uZShuZXdDb21tZW50KTtcblxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICBuZXdDb21tZW50LmlkID0gcmVzdWx0Lmluc2VydGVkSWQ7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiQWRkZWQgQ29tbWVudC5cIiwgY29tbWVudDogbmV3Q29tbWVudCB9KTtcbiAgfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIGNvbnN0IGRvY3VtZW50cyA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbihcImNvbW1lbnRzXCIpXG4gICAgICAuZmluZCgpXG4gICAgICAuc29ydCh7IF9pZDogLTEgfSlcbiAgICAgIC50b0FycmF5KCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvbW1lbnRzOiBkb2N1bWVudHMgfSk7XG4gIH1cblxuICBjbGllbnQuY2xvc2UoKTtcbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJldmVudElkIiwicXVlcnkiLCJjbGllbnQiLCJjb25uZWN0IiwibWV0aG9kIiwiZW1haWwiLCJuYW1lIiwidGV4dCIsImJvZHkiLCJpbmNsdWRlcyIsInRyaW0iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5ld0NvbW1lbnQiLCJkYiIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJpbnNlcnRlZElkIiwiY29tbWVudCIsImRvY3VtZW50cyIsImZpbmQiLCJzb3J0IiwiX2lkIiwidG9BcnJheSIsImNvbW1lbnRzIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[eventId].js\n");

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