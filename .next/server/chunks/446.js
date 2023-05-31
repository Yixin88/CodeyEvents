"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 4446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IP": () => (/* binding */ getAllEvents),
/* harmony export */   "N6": () => (/* binding */ getFeaturedEvents),
/* harmony export */   "Y": () => (/* binding */ getEventById)
/* harmony export */ });
/* unused harmony export getFilteredEvents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

async function getAllEvents() {
    const response = await fetch("https://nextjs-course-4ba9d-default-rtdb.firebaseio.com/events.json");
    const data = await response.json();
    const events = [];
    for(const key in data){
        events.push({
            id: key,
            ...data[key]
        });
    }
    return events;
}
async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event)=>event.isFeatured);
}
async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event)=>event.id === id);
}
async function getFilteredEvents(dateFilter) {
    const { year , month  } = dateFilter;
    const allEvents = await getAllEvents();
    let filteredEvents = allEvents.filter((event)=>{
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}


/***/ })

};
;