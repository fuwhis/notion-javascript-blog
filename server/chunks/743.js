"use strict";
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 2023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArticleCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3652);




function ArticleCard({ article  }) {
    const slug = slugify__WEBPACK_IMPORTED_MODULE_2___default()(article.title).toLowerCase();
    const formattedTime = (0,utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(article.publishedDate);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: `/blog/${slug}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col overflow-hidden cursor-pointer group",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute",
                            children: article?.categories?.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-bold text-gray-600 uppercase bg-gray-100 rounded left-3 top-3",
                                    children: category
                                }, category))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " filter contrast-[0.9]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "object-cover w-full h-48 transition rounded-lg aspect-video group-hover:opacity-90 bg-gray-50",
                                src: article.thumbnail,
                                blurDataURL: article.thumbnail,
                                objectFit: "cover",
                                placeholder: "blur",
                                layout: "intrinsic",
                                width: 800,
                                height: 400,
                                alt: "article cover"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col justify-between flex-1 py-4 bg-white",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xl font-semibold text-gray-900",
                                    children: article.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-3 text-base text-gray-500 line-clamp-2",
                                    children: article.summary
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center mt-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex mb-2 space-x-1 text-sm text-gray-400",
                                children: [
                                    article.categories.map((category)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "font-semibold text-gray-600",
                                                    children: [
                                                        category,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    "aria-hidden": "true",
                                                    children: "\xb7"
                                                })
                                            ]
                                        }, category)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                        dateTime: formattedTime,
                                        children: formattedTime
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 9470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfettiCanvas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7987);
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1__);


const style = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};
function ConfettiCanvas({ getInstance  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default()), {
        refConfetti: getInstance,
        style: style
    });
}


/***/ }),

/***/ 2284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-5xl px-4 mx-auto md:px-8",
        children: children
    });
}


/***/ }),

/***/ 351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Socials)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var siteData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3999);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function Socials() {
    const socials = [
        {
            name: "Twitter",
            href: siteData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z?.twitter,
            icon: "/socials/twitter.svg"
        },
        {
            name: "GitHub",
            href: siteData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z?.github,
            icon: "/socials/github.svg"
        },
        {
            name: "LinkedIn",
            href: siteData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z?.linkedin,
            icon: "/socials/linkedin.svg"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center space-x-6 md:order-2",
        children: socials.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                href: item.href,
                className: "text-gray-400 transform hover:text-gray-500 filter hover:contrast-0",
                target: "_blank",
                rel: "noreferrer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: item.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: item.icon,
                        alt: "social-icon",
                        width: 24,
                        height: 24,
                        objectFit: "cover"
                    })
                ]
            }, item.name))
    });
}


/***/ }),

/***/ 1568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Subscribe)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2284);
/* harmony import */ var _SubscribeInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SubscribeInput__WEBPACK_IMPORTED_MODULE_2__]);
_SubscribeInput__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Subscribe() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-24 text-center bg-gray-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
                    children: "Subscribe to the newsletter"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-2xl mx-auto mt-4 text-lg text-gray-500",
                    children: "Get emails from me about web development, tech, and early access to new articles."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubscribeInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SubscribeInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useConfetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6948);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var utils_isValidEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8200);
/* harmony import */ var _ConfettiCanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CONVERTKIT_API = "/api/subscribe-convertkit";
function SubscribeInput() {
    const { 0: formState , 1: setFormState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("initial");
    const { register , handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const { getInstance , fire  } = (0,hooks_useConfetti__WEBPACK_IMPORTED_MODULE_1__/* .useConfetti */ .$)();
    const onSubmit = async ({ email  })=>{
        if (!email && !(0,utils_isValidEmail__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(email)) {
            return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("Email is not valid");
        }
        setFormState("loading");
        const response = await fetch(CONVERTKIT_API, {
            method: "POST",
            body: JSON.stringify({
                email
            })
        });
        const { error  } = await response.json();
        if (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error(error);
            return setFormState("error");
        }
        reset();
        fire();
        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success("Check your email to confirm your subscription");
        return setFormState("success");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "grid items-center max-w-md grid-flow-row gap-4 mx-auto mt-8 sm:grid-flow-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "cta-email",
                                className: "sr-only",
                                children: "Email address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ...register("email"),
                                type: "email",
                                className: "w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm",
                                placeholder: "Enter your email"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConfettiCanvas__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                getInstance: getInstance
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "block w-full px-2 py-3 font-medium text-white transform bg-gray-600 border border-transparent rounded-md shadow hover:bg-gray-500 sm:px-6",
                                children: formState === "loading" ? "Subscribing..." : "Subscribe"
                            })
                        ]
                    })
                ]
            }),
            formState === "success" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: fire,
                className: "mt-2 text-sm font-semibold text-gray-500 cursor-pointer",
                children: "\uD83C\uDF89 Give me more confetti"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-2 text-sm text-gray-500",
                children: "Be the first to know when the blog is published"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useConfetti)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useConfetti = ()=>{
    const refAnimationInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const getInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((instance)=>{
        refAnimationInstance.current = instance;
    }, []);
    const makeShot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((particleRatio, opts)=>{
        refAnimationInstance.current && refAnimationInstance.current({
            ...opts,
            origin: {
                y: 0.7
            },
            particleCount: Math.floor(200 * particleRatio)
        });
    }, []);
    const fire = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });
        makeShot(0.2, {
            spread: 60
        });
        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    }, [
        makeShot
    ]);
    return {
        getInstance,
        fire
    };
};


/***/ }),

/***/ 3382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2284);
/* harmony import */ var components_Socials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(351);



function Footer({ blog  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "py-16 bg-white border-t",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:flex md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Socials__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-8 md:mt-0 md:order-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-base text-center text-gray-400",
                            children: blog?.footerText
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 1078:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1568);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3382);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8845);
/* harmony import */ var _MetaHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Subscribe__WEBPACK_IMPORTED_MODULE_1__]);
components_Subscribe__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Layout(props) {
    const { children , date , imageUrl , title , description , ogUrl , blog  } = props;
    const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
    const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;
    const metaHeadProps = {
        date,
        imageUrl,
        description,
        ogUrl,
        title
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetaHead__WEBPACK_IMPORTED_MODULE_4__/* .MetaHead */ .w, {
                ...metaHeadProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pt-14",
                children: children
            }),
            FORM_ID && API_KEY && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Subscribe__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                blog: blog
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ MetaHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var siteData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3999);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



function MetaHead(props) {
    const { date , title , imageUrl , description , ogUrl  } = props;
    const titleName = title || siteData__WEBPACK_IMPORTED_MODULE_1__/* ["default"].title */ .Z.title;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: titleName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "follow, index"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                content: description || titleName,
                name: "description"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: siteData__WEBPACK_IMPORTED_MODULE_1__/* ["default"].author */ .Z.author
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: siteData__WEBPACK_IMPORTED_MODULE_1__/* ["default"].title */ .Z.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: imageUrl || siteData__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ogBanner */ .Z.ogBanner
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: ogUrl
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: titleName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: imageUrl
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:domain",
                content: siteData__WEBPACK_IMPORTED_MODULE_1__/* ["default"].websiteUrl */ .Z.websiteUrl
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:url",
                content: ogUrl
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: titleName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: imageUrl
            }),
            date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "article:published_time",
                content: date
            })
        ]
    });
}


/***/ }),

/***/ 8845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2284);
/* harmony import */ var components_Socials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(351);
/* harmony import */ var siteData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3999);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





function Navbar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed z-50 w-full bg-white border-b",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between w-full py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-xl font-bold cursor-pointer",
                            children: siteData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z?.author
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Socials__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 3999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const siteData = {
    title: "Starter Notion blog for Nextjs with Tailwind",
    author: "Notion Blog Starter",
    headerTitle: "Nextjs Notion Blog Starter",
    profileUrl: "/nextjs-logo.png",
    headerDescription: "Starter Notion blog for Nextjs with Tailwind",
    footerText: "\xa9 All rights reserved",
    language: "en-us",
    locale: "en-US",
    ogBanner: "https://nextjs-notion-blog-starter.vercel.app/preview/1.jpg",
    github: "https://github.com/fuwhis/notion-javascript-blog",
    twitter: "https://github.com/fuwhis/notion-javascript-blog",
    websiteUrl: "https://nextjs-notion-blog-starter.vercel.app",
    linkedin: "https://github.com/fuwhis/notion-javascript-blog"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siteData);


/***/ }),

/***/ 3652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getLocalizedDate)
/* harmony export */ });
/* harmony import */ var siteData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3999);

function getLocalizedDate(date) {
    return new Date(date).toLocaleDateString(siteData__WEBPACK_IMPORTED_MODULE_0__/* ["default"].locale */ .Z.locale, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}


/***/ }),

/***/ 8200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isValidEmail)
/* harmony export */ });
function isValidEmail(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}


/***/ })

};
;