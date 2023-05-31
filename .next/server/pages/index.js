(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5353:
/***/ ((module) => {

// Exports
module.exports = {
	"newsletter": "newsletter-registration_newsletter__yI1Np",
	"control": "newsletter-registration_control__YcKSh"
};


/***/ }),

/***/ 74:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(4446);
// EXTERNAL MODULE: ./components/events/event-list.js + 2 modules
var event_list = __webpack_require__(3481);
// EXTERNAL MODULE: ./components/input/newsletter-registration.module.css
var newsletter_registration_module = __webpack_require__(5353);
var newsletter_registration_module_default = /*#__PURE__*/__webpack_require__.n(newsletter_registration_module);
// EXTERNAL MODULE: ./store/notification-context.js
var notification_context = __webpack_require__(2172);
;// CONCATENATED MODULE: ./components/input/newsletter-registration.js




function NewsletterRegistration() {
    const emailInputRef = (0,external_react_.useRef)();
    const notificationCtx = (0,external_react_.useContext)(notification_context/* default */.Z);
    function registrationHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        notificationCtx.showNotification({
            title: "Signing Up...",
            message: "Registering for newsletter.",
            status: "pending"
        });
        fetch("/api/newsletter", {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                return response.json();
            }
            return response.json().then((data)=>{
                throw new Error(data.message || "Something went wrong!");
            });
        }).then((data)=>{
            notificationCtx.showNotification({
                title: "Success!",
                message: "Successfully registered for newsletter!",
                status: "success"
            });
        }).catch((error)=>{
            notificationCtx.showNotification({
                title: "Error!",
                message: error.message || "Something went wrong!",
                status: "error"
            });
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (newsletter_registration_module_default()).newsletter,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Sign up to stay updated!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: registrationHandler,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (newsletter_registration_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            ref: emailInputRef,
                            type: "email",
                            id: "email",
                            placeholder: "Your email",
                            "aria-label": "Your email"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            children: "Register"
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.js






function HomePage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "CodeyEvents"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Find your next developer event near you!"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NewsletterRegistration, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(event_list/* default */.Z, {
                items: props.events
            })
        ]
    });
}
async function getStaticProps() {
    const featuredEvents = await (0,api_util/* getFeaturedEvents */.N6)();
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,694,336,172,446], () => (__webpack_exec__(74)));
module.exports = __webpack_exports__;

})();