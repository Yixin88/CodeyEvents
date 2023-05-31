(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3410:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "main-header_header__LZcDE",
	"logo": "main-header_logo__OP4Mb",
	"navigation": "main-header_navigation__5rVha"
};


/***/ }),

/***/ 9549:
/***/ ((module) => {

// Exports
module.exports = {
	"notification": "notification_notification__ivOBk",
	"pending": "notification_pending__m3o8H",
	"success": "notification_success__oL5MY",
	"error": "notification_error__1Zbg9"
};


/***/ }),

/***/ 7336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout/main-header.module.css
var main_header_module = __webpack_require__(3410);
var main_header_module_default = /*#__PURE__*/__webpack_require__.n(main_header_module);
;// CONCATENATED MODULE: ./components/layout/main-header.js




function MainHeader() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (main_header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (main_header_module_default()).logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "CodeyEvents"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (main_header_module_default()).navigation,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/events",
                            children: "Browse All Events"
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ui/notification.module.css
var notification_module = __webpack_require__(9549);
var notification_module_default = /*#__PURE__*/__webpack_require__.n(notification_module);
// EXTERNAL MODULE: ./store/notification-context.js
var notification_context = __webpack_require__(2172);
;// CONCATENATED MODULE: ./components/ui/notification.js




function Notification(props) {
    const notificationCtx = (0,external_react_.useContext)(notification_context/* default */.Z);
    const { title , message , status  } = props;
    let statusClasses = "";
    if (status === "success") {
        statusClasses = (notification_module_default()).success;
    }
    if (status === "error") {
        statusClasses = (notification_module_default()).error;
    }
    if (status === "pending") {
        statusClasses = (notification_module_default()).pending;
    }
    const activeClasses = `${(notification_module_default()).notification} ${statusClasses}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: activeClasses,
        onClick: notificationCtx.hideNotification,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: message
            })
        ]
    });
}
/* harmony default export */ const notification = (Notification);

;// CONCATENATED MODULE: ./components/layout/layout.js





function Layout({ children  }) {
    const notificationCtx = (0,external_react_.useContext)(notification_context/* default */.Z);
    const activeNotification = notificationCtx.notification;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MainHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            activeNotification && /*#__PURE__*/ jsx_runtime_.jsx(notification, {
                title: activeNotification.title,
                message: activeNotification.message,
                status: activeNotification.status
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(notification_context/* NotificationContextProvider */.l, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "CodeyEvents"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Find your next developer event near you!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,172], () => (__webpack_exec__(7336)));
module.exports = __webpack_exports__;

})();