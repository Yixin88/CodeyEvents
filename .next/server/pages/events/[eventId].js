(() => {
var exports = {};
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

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

/***/ 7816:
/***/ ((module) => {

// Exports
module.exports = {
	"comments": "comment-list_comments__IGYva"
};


/***/ }),

/***/ 6330:
/***/ ((module) => {

// Exports
module.exports = {
	"comments": "comments_comments__DvCYh"
};


/***/ }),

/***/ 9381:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "new-comment_form__StHMs",
	"row": "new-comment_row__6RSMo",
	"control": "new-comment_control__dwipg"
};


/***/ }),

/***/ 4659:
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

// EXTERNAL MODULE: ./components/input/comment-list.module.css
var comment_list_module = __webpack_require__(7816);
var comment_list_module_default = /*#__PURE__*/__webpack_require__.n(comment_list_module);
;// CONCATENATED MODULE: ./components/input/comment-list.js


function CommentList(props) {
    const { items  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (comment_list_module_default()).comments,
        children: items.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: item.text
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            "By ",
                            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                children: item.name
                            })
                        ]
                    })
                ]
            }, item._id))
    });
}

// EXTERNAL MODULE: ./components/input/new-comment.module.css
var new_comment_module = __webpack_require__(9381);
var new_comment_module_default = /*#__PURE__*/__webpack_require__.n(new_comment_module);
;// CONCATENATED MODULE: ./components/input/new-comment.js



function NewComment(props) {
    const [isInvalid, setIsInvalid] = (0,external_react_.useState)(false);
    const emailInputRef = (0,external_react_.useRef)();
    const nameInputRef = (0,external_react_.useRef)();
    const commentInputRef = (0,external_react_.useRef)();
    function sendCommentHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredComment = commentInputRef.current.value;
        if (!enteredEmail || enteredEmail.trim() === "" || !enteredEmail.includes("@") || !enteredName || enteredName.trim() === "" || !enteredComment || enteredComment.trim() === "") {
            setIsInvalid(true);
            return;
        }
        props.onAddComment({
            email: enteredEmail,
            name: enteredName,
            text: enteredComment
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (new_comment_module_default()).form,
        onSubmit: sendCommentHandler,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (new_comment_module_default()).row,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (new_comment_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "email",
                                children: "Your email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                id: "email",
                                ref: emailInputRef
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (new_comment_module_default()).control,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "name",
                                children: "Your name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "name",
                                ref: nameInputRef
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (new_comment_module_default()).control,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "comment",
                        children: "Your comment"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        id: "comment",
                        rows: "5",
                        ref: commentInputRef
                    })
                ]
            }),
            isInvalid && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Please enter a valid email address and comment!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                children: "Submit"
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/input/comments.module.css
var comments_module = __webpack_require__(6330);
var comments_module_default = /*#__PURE__*/__webpack_require__.n(comments_module);
// EXTERNAL MODULE: ./store/notification-context.js
var notification_context = __webpack_require__(2172);
;// CONCATENATED MODULE: ./components/input/comments.js






function Comments(props) {
    const { eventId  } = props;
    const notificationCtx = (0,external_react_.useContext)(notification_context/* default */.Z);
    const [showComments, setShowComments] = (0,external_react_.useState)(false);
    const [updateComments, setUpdateComments] = (0,external_react_.useState)(false);
    const [comments, setComments] = (0,external_react_.useState)([]);
    const [isFetchingComments, setIsFetchingComments] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (showComments) {
            setIsFetchingComments(true);
            fetch(`/api/comments/${eventId}`).then((response)=>response.json()).then((data)=>{
                setComments(data.comments);
                setIsFetchingComments(false);
            });
        }
    }, [
        showComments,
        updateComments
    ]);
    function toggleCommentsHandler() {
        setShowComments((prevStatus)=>!prevStatus);
    }
    function addCommentHandler(commentData) {
        notificationCtx.showNotification({
            title: "Adding Comment...",
            message: "Uploading your comment...",
            status: "pending"
        });
        fetch(`/api/comments/${eventId}`, {
            method: "POST",
            body: JSON.stringify(commentData),
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
                message: "Your comment was saved!",
                status: "success"
            });
            setUpdateComments(!updateComments);
        }).catch((error)=>{
            notificationCtx.showNotification({
                title: "Error!",
                message: error.message || "Something went wrong!",
                status: "error"
            });
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (comments_module_default()).comments,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: toggleCommentsHandler,
                children: [
                    showComments ? "Hide" : "Show",
                    " Comments"
                ]
            }),
            showComments && /*#__PURE__*/ jsx_runtime_.jsx(NewComment, {
                onAddComment: addCommentHandler
            }),
            showComments && !isFetchingComments && /*#__PURE__*/ jsx_runtime_.jsx(CommentList, {
                items: comments
            }),
            showComments && isFetchingComments && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Loading..."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CommentList, {
                        items: comments
                    })
                ]
            })
        ]
    });
}

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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Comments, {
                eventId: event.id
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

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,694,172,446], () => (__webpack_exec__(4659)));
module.exports = __webpack_exports__;

})();