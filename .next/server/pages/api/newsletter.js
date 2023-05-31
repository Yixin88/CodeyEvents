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

/***/ "(api)/./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDatabase\": () => (/* binding */ connectDatabase),\n/* harmony export */   \"getAllDocument\": () => (/* binding */ getAllDocument),\n/* harmony export */   \"insectDocument\": () => (/* binding */ insectDocument)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/events?retryWrites=true&w=majority\");\n    return client;\n}\nasync function insectDocument(client, collection, document) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(document);\n    return result;\n}\nasync function getAllDocument(client, collection, sort) {\n    const db = client.db();\n    const documents = await db.collection(collection).find().sort(sort).toArray();\n    return documents;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFFL0IsZUFBZUMsa0JBQWtCO0lBQ3RDLE1BQU1DLFNBQVMsTUFBTUYsd0RBQW1CLENBQUM7SUFFekMsT0FBT0U7QUFDVCxDQUFDO0FBRU0sZUFBZUUsZUFBZUYsTUFBTSxFQUFFRyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUNqRSxNQUFNQyxLQUFLTCxPQUFPSyxFQUFFO0lBRXBCLE1BQU1DLFNBQVMsTUFBTUQsR0FBR0YsVUFBVSxDQUFDQSxZQUFZSSxTQUFTLENBQUNIO0lBRXpELE9BQU9FO0FBQ1QsQ0FBQztBQUVNLGVBQWVFLGVBQWVSLE1BQU0sRUFBRUcsVUFBVSxFQUFFTSxJQUFJLEVBQUU7SUFDN0QsTUFBTUosS0FBS0wsT0FBT0ssRUFBRTtJQUVwQixNQUFNSyxZQUFZLE1BQU1MLEdBQ3JCRixVQUFVLENBQUNBLFlBQ1hRLElBQUksR0FDSkYsSUFBSSxDQUFDQSxNQUNMRyxPQUFPO0lBRVYsT0FBT0Y7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2hlbHBlcnMvZGItdXRpbC5qcz9mNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0RGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8veWluZzp5aW5nQGNsdXN0ZXIwLmFuZHpsMXUubW9uZ29kYi5uZXQvZXZlbnRzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xuXG4gIHJldHVybiBjbGllbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VjdERvY3VtZW50KGNsaWVudCwgY29sbGVjdGlvbiwgZG9jdW1lbnQpIHtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShkb2N1bWVudCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERvY3VtZW50KGNsaWVudCwgY29sbGVjdGlvbiwgc29ydCkge1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IGRvY3VtZW50cyA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcbiAgICAuZmluZCgpXG4gICAgLnNvcnQoc29ydClcbiAgICAudG9BcnJheSgpO1xuXG4gIHJldHVybiBkb2N1bWVudHM7XG59Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY29ubmVjdERhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdCIsImluc2VjdERvY3VtZW50IiwiY29sbGVjdGlvbiIsImRvY3VtZW50IiwiZGIiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJnZXRBbGxEb2N1bWVudCIsInNvcnQiLCJkb2N1bWVudHMiLCJmaW5kIiwidG9BcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/db-util.js\n");

/***/ }),

/***/ "(api)/./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/db-util */ \"(api)/./helpers/db-util.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const userEmail = req.body.email;\n        if (!userEmail || !userEmail.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address.\"\n            });\n            return;\n        }\n        let client;\n        try {\n            client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__.connectDatabase)();\n        } catch (error) {\n            res.status(500).json({\n                message: \"Connecting to the database failed!\"\n            });\n            return;\n        }\n        try {\n            await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__.insectDocument)(client, \"newsletter\", {\n                email: userEmail\n            });\n            client.close();\n        } catch (error1) {\n            res.status(500).json({\n                message: \"Inserting data failed!\"\n            });\n            return;\n        }\n        res.status(201).json({\n            message: \"Signed Up!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRTtBQUd0RCxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxZQUFZSCxJQUFJSSxJQUFJLENBQUNDLEtBQUs7UUFFaEMsSUFBSSxDQUFDRixhQUFhLENBQUNBLFVBQVVHLFFBQVEsQ0FBQyxNQUFNO1lBQzFDTCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXlCO1lBQ3pEO1FBQ0YsQ0FBQztRQUVELElBQUlDO1FBQ0osSUFBSTtZQUNGQSxTQUFTLE1BQU1iLGlFQUFlQTtRQUNoQyxFQUFFLE9BQU9jLE9BQU87WUFDZFYsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBQ0MsU0FBUztZQUFvQztZQUNuRTtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1YLGdFQUFjQSxDQUFDWSxRQUFRLGNBQWM7Z0JBQUNMLE9BQU9GO1lBQVM7WUFDNURPLE9BQU9FLEtBQUs7UUFDZCxFQUFFLE9BQU9ELFFBQU87WUFDZFYsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBQ0MsU0FBUztZQUF3QjtZQUN2RDtRQUNGO1FBR0FSLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFZO0lBQzlDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXdzbGV0dGVyLmpzPzEwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0RGF0YWJhc2UsIGluc2VjdERvY3VtZW50fSBmcm9tICcuLi8uLi9oZWxwZXJzL2RiLXV0aWwnXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgdXNlckVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG5cbiAgICBpZiAoIXVzZXJFbWFpbCB8fCAhdXNlckVtYWlsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3MuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNsaWVudFxuICAgIHRyeSB7XG4gICAgICBjbGllbnQgPSBhd2FpdCBjb25uZWN0RGF0YWJhc2UoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6ICdDb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZSBmYWlsZWQhJ30pXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGluc2VjdERvY3VtZW50KGNsaWVudCwgJ25ld3NsZXR0ZXInLCB7ZW1haWw6IHVzZXJFbWFpbH0pXG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6ICdJbnNlcnRpbmcgZGF0YSBmYWlsZWQhJ30pXG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdTaWduZWQgVXAhJ30pXG4gIH1cbn0iXSwibmFtZXMiOlsiY29ubmVjdERhdGFiYXNlIiwiaW5zZWN0RG9jdW1lbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlckVtYWlsIiwiYm9keSIsImVtYWlsIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNsaWVudCIsImVycm9yIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

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