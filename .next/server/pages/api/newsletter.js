"use strict";
(() => {
var exports = {};
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 1990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TR": () => (/* binding */ connectDatabase),
  "uW": () => (/* binding */ getAllDocument),
  "ZZ": () => (/* binding */ insectDocument)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./helpers/db-util.js

async function connectDatabase() {
    const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/events?retryWrites=true&w=majority");
    return client;
}
async function insectDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}
async function getAllDocument(client, collection, sort) {
    const db = client.db();
    const documents = await db.collection(collection).find().sort(sort).toArray();
    return documents;
}


/***/ }),

/***/ 9668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1990);

async function handler(req, res) {
    if (req.method === "POST") {
        const userEmail = req.body.email;
        if (!userEmail || !userEmail.includes("@")) {
            res.status(422).json({
                message: "Invalid email address."
            });
            return;
        }
        let client;
        try {
            client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .connectDatabase */ .TR)();
        } catch (error) {
            res.status(500).json({
                message: "Connecting to the database failed!"
            });
            return;
        }
        try {
            await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__/* .insectDocument */ .ZZ)(client, "newsletter", {
                email: userEmail
            });
            client.close();
        } catch (error1) {
            res.status(500).json({
                message: "Inserting data failed!"
            });
            return;
        }
        res.status(201).json({
            message: "Signed Up!"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9668));
module.exports = __webpack_exports__;

})();