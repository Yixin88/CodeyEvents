(() => {
var exports = {};
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 4788:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "event-content_content__N8f4Q"
};


/***/ }),

/***/ 8675:
/***/ ((module) => {

// Exports
module.exports = {
	"logistics": "event-logistics_logistics__nnLSE",
	"image": "event-logistics_image__cldYm",
	"list": "event-logistics_list__flNvw"
};


/***/ }),

/***/ 3266:
/***/ ((module) => {

// Exports
module.exports = {
	"summary": "event-summary_summary__rmm9D"
};


/***/ }),

/***/ 2063:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "logistics-item_item__jiFzn",
	"icon": "logistics-item_icon__o2W_d"
};


/***/ }),

/***/ 3815:
/***/ ((module) => {

// Exports
module.exports = {
	"alert": "error-alert_alert__CinLM"
};


/***/ }),

/***/ 3767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3815);
/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ErrorAlert(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default().alert),
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorAlert);


/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EventDetailPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(4446);
// EXTERNAL MODULE: ./components/event-detail/event-summary.module.css
var event_summary_module = __webpack_require__(3266);
var event_summary_module_default = /*#__PURE__*/__webpack_require__.n(event_summary_module);
;// CONCATENATED MODULE: ./components/event-detail/event-summary.js


function EventSummary({ title  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (event_summary_module_default()).summary,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: title
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/icons/address-icon.js
var address_icon = __webpack_require__(6860);
// EXTERNAL MODULE: ./components/icons/date-icon.js
var date_icon = __webpack_require__(6447);
// EXTERNAL MODULE: ./components/event-detail/logistics-item.module.css
var logistics_item_module = __webpack_require__(2063);
var logistics_item_module_default = /*#__PURE__*/__webpack_require__.n(logistics_item_module);
;// CONCATENATED MODULE: ./components/event-detail/logistics-item.js


function LogisticsItem({ icon: Icon , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (logistics_item_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (logistics_item_module_default()).icon,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (logistics_item_module_default()).content,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/event-detail/event-logistics.module.css
var event_logistics_module = __webpack_require__(8675);
var event_logistics_module_default = /*#__PURE__*/__webpack_require__.n(event_logistics_module);
;// CONCATENATED MODULE: ./components/event-detail/event-logistics.js






function EventLogistics({ date , address , image , imageAlt  }) {
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const addressText = address.replace(", ", "\n");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (event_logistics_module_default()).logistics,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (event_logistics_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/" + image,
                    alt: imageAlt,
                    width: 400,
                    height: 400
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (event_logistics_module_default()).list,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LogisticsItem, {
                        icon: date_icon/* default */.Z,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                            children: humanReadableDate
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LogisticsItem, {
                        icon: address_icon/* default */.Z,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: addressText
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/event-detail/event-content.module.css
var event_content_module = __webpack_require__(4788);
var event_content_module_default = /*#__PURE__*/__webpack_require__.n(event_content_module);
;// CONCATENATED MODULE: ./components/event-detail/event-content.js


function EventContent({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (event_content_module_default()).content,
        children: children
    });
}

// EXTERNAL MODULE: ./components/ui/error-alert.js
var error_alert = __webpack_require__(3767);
// EXTERNAL MODULE: ./components/ui/button.js
var ui_button = __webpack_require__(5368);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/events/[eventId].js









function EventDetailPage(props) {
    const event = props.selectedEvent;
    if (!event) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Loading..."
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: event.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: event.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EventSummary, {
                title: event.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EventLogistics, {
                date: event.date,
                address: event.location,
                image: event.image,
                imageAlt: event.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EventContent, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: event.description
                })
            })
        ]
    });
}
async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await (0,api_util/* getEventById */.Y)(eventId);
    if (!event) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            selectedEvent: event
        },
        revalidate: 10
    };
}
async function getStaticPaths() {
    const allEvents = await (0,api_util/* getFeaturedEvents */.N6)();
    const paths = allEvents.map((event)=>({
            params: {
                eventId: event.id
            }
        }));
    return {
        paths: paths,
        fallback: true
    };
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,199], () => (__webpack_exec__(660)));
module.exports = __webpack_exports__;

})();