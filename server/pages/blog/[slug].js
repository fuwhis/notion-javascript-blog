"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 1802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ renderBlocks)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./utils/formatHashLink.ts
function formatHashLink(slug) {
    if (false) {}
}

;// CONCATENATED MODULE: ./components/blocks/AnchorLink.tsx



function AnchorLink({ children , text  }) {
    const { 0: hashLink , 1: setHashLink  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        setHashLink(formatHashLink(text));
    }, [
        text
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-start space-x-2 group",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-10 group-hover:opacity-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-gray-600",
                    target: "_blank",
                    id: hashLink,
                    href: `#${hashLink}`,
                    rel: "noreferrer",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "hidden w-7 h-7 md:block",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M16.75 13.25L18 12C19.6569 10.3431 19.6569 7.65685 18 6V6C16.3431 4.34315 13.6569 4.34315 12 6L10.75 7.25"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M7.25 10.75L6 12C4.34315 13.6569 4.34315 16.3431 6 18V18C7.65685 19.6569 10.3431 19.6569 12 18L13.25 16.75"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M14.25 9.75L9.75 14.25"
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: external "prism-react-renderer"
const external_prism_react_renderer_namespaceObject = require("prism-react-renderer");
var external_prism_react_renderer_default = /*#__PURE__*/__webpack_require__.n(external_prism_react_renderer_namespaceObject);
;// CONCATENATED MODULE: ./components/blocks/outputTheme.ts
// @flow
// Converted automatically using ./tools/themeFromVsCode
const theme = {
    plain: {
        color: "#abb2bf",
        backgroundColor: "#282c34"
    },
    styles: [
        {
            types: [
                "comment"
            ],
            style: {
                color: "rgb(92, 99, 112)",
                fontStyle: "italic"
            }
        },
        {
            types: [
                "keyword",
                "operator",
                "selector",
                "changed"
            ],
            style: {
                color: "rgb(198, 120, 221)"
            }
        },
        {
            types: [
                "constant",
                "number",
                "builtin",
                "attr-name"
            ],
            style: {
                color: "rgb(209, 154, 102)"
            }
        },
        {
            types: [
                "char",
                "symbol"
            ],
            style: {
                color: "rgb(86, 182, 194)"
            }
        },
        {
            types: [
                "variable",
                "tag",
                "deleted"
            ],
            style: {
                color: "rgb(224, 108, 117)"
            }
        },
        {
            types: [
                "string",
                "inserted"
            ],
            style: {
                color: "rgb(152, 195, 121)"
            }
        },
        {
            types: [
                "punctuation"
            ],
            style: {
                color: "rgb(92, 99, 112)"
            }
        },
        {
            types: [
                "function"
            ],
            style: {
                color: "rgb(97, 175, 239)"
            }
        },
        {
            types: [
                "class-name"
            ],
            style: {
                color: "rgb(229, 192, 123)"
            }
        }
    ]
};

;// CONCATENATED MODULE: external "copy-to-clipboard"
const external_copy_to_clipboard_namespaceObject = require("copy-to-clipboard");
var external_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_copy_to_clipboard_namespaceObject);
;// CONCATENATED MODULE: ./hooks/useCopyToClipboard.ts


// By default will copy URL to clipboard if text is not passed to the hook.
function useCopyToClipboard(resetInterval = 3000, text = null) {
    const { 0: isCopied , 1: setCopied  } = (0,external_react_.useState)(false);
    const handleCopy = (0,external_react_.useCallback)(()=>{
        if (window !== undefined) {
            external_copy_to_clipboard_default()(text ?? window.location.href);
            setCopied(true);
        }
    }, [
        text
    ]);
    (0,external_react_.useEffect)(()=>{
        let timeout;
        if (isCopied && resetInterval) {
            timeout = setTimeout(()=>setCopied(false), resetInterval);
        }
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        isCopied,
        resetInterval
    ]);
    return [
        isCopied,
        handleCopy
    ];
}

;// CONCATENATED MODULE: ./components/blocks/CodeBlock.tsx


// import theme from 'prism-react-renderer/themes/nightOwl';


const RE = /{([\d,-]+)}/;
const calculateLinesToHighlight = (meta)=>{
    if (!RE.test(meta)) {
        return ()=>false;
    }
    const lineNumbers = RE.exec(meta)[1].split(`,`).map((v)=>v.split(`-`).map((x)=>parseInt(x, 10)));
    return (index)=>{
        const lineNumber = index + 1;
        const inRange = lineNumbers.some(([start, end])=>end ? lineNumber >= start && lineNumber <= end : lineNumber === start);
        return inRange;
    };
};
function CodeBlock({ code , language , metaString , caption  }) {
    const [isCopied, handleCopy] = useCopyToClipboard(1000, code);
    const shouldHighlightLine = calculateLinesToHighlight(metaString);
    const CopyCodeButton = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: `hidden md:inline-block group ${isCopied ? "text-teal-500" : "text-gray-400"}`,
        onClick: ()=>handleCopy(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Copy code"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                "aria-hidden": "true",
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                className: "stroke-current transform group-hover:rotate-[-4deg] transition",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.7475 16.2499L18.2475 16.2499",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.7475 19.2499L18.2475 19.2499",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        className: `transition-opacity ${isCopied ? "opacity-100 transform rotate-[-4deg] transition" : "opacity-0"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M15.9975 5.99988L15.9975 3.99988",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M19.9975 5.99988L20.9975 4.99988",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M11.9975 5.99988L10.9975 4.99988",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        ]
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_prism_react_renderer_default()), {
            ...external_prism_react_renderer_namespaceObject.defaultProps,
            code: code,
            language: language,
            theme: theme,
            children: ({ className , style , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative not-prose",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("pre", {
                        className: `rounded-lg relative overflow-hidden ${className}`,
                        style: style,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative flex text-xs leading-6 ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center flex-none px-4 py-1 mt-2 text-sm text-teal-400 border-t border-b border-t-transparent border-b-teal-400",
                                        children: [
                                            caption || JSON.stringify(language).replace(/['"]+/g, ""),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-auto pt-2 overflow-hidden rounded-tr-xl",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-auto -mr-px border rounded-tl bg-slate-700/50 border-slate-500/30"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute flex items-center h-8 pl-4 right-5 top-[9px]",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative flex -mr-2",
                                            children: CopyCodeButton
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-auto p-5 overflow-auto text-sm text-gray-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: tokens.map((line, i)=>{
                                        const lineProps = getLineProps({
                                            line,
                                            key: i
                                        });
                                        if (shouldHighlightLine(i)) {
                                            lineProps.className = `${lineProps.className} highlight-line`;
                                        }
                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            ...lineProps,
                                            children: line.map((token, key)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    ...getTokenProps({
                                                        token,
                                                        key
                                                    })
                                                }, key))
                                        }, i);
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute w-8 top-[45px] right-0 bg-gradient-to-l from-midnight code-fade"
                            })
                        ]
                    })
                })
        })
    });
}

;// CONCATENATED MODULE: ./components/blocks/Text.tsx

function Text({ text  }) {
    if (!text) {
        return null;
    }
    return text.map((value, index)=>{
        const { annotations: { bold , code , color , italic , strikethrough , underline  } , text  } = value;
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: [
                bold ? "font-bold" : null,
                italic ? "italic" : null,
                code ? "bg-gray-200 font-semibold  text-gray-500 text-sm px-2 rounded mx-1 inline-block align-middle tracking-tight" : null,
                strikethrough ? "line-through" : null,
                underline ? "underline" : null
            ].join(" "),
            style: color !== "default" ? {
                color
            } : {},
            children: text.link ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "text-gray-700 underline break-all",
                target: "_blank",
                href: text.link.url,
                rel: "noreferrer",
                children: text.content
            }) : text.content
        }, index);
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/blocks/renderBlocks.tsx






function renderBlocks(block) {
    const { type , id  } = block;
    const value = block[type];
    switch(type){
        case "paragraph":
            return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "leading-[28px] text-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                    text: value.text
                })
            });
        case "heading_1":
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-16 text-3xl font-semibold",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AnchorLink, {
                    text: value.text[0].text.content,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        text: value.text
                    })
                })
            });
        case "heading_2":
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-8 text-2xl font-semibold",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AnchorLink, {
                    text: value.text[0].text.content,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        text: value.text
                    })
                })
            });
        case "heading_3":
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-8 text-xl font-semibold",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AnchorLink, {
                    text: value.text[0].text.content,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                        text: value.text
                    })
                })
            });
        case "bulleted_list_item":
        case "numbered_list_item":
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "text-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                    text: value.text
                })
            });
        case "to_do":
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    htmlFor: id,
                    className: "flex items-center justify-start space-x-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            id: id,
                            "aria-describedby": value.text,
                            name: id,
                            type: "checkbox",
                            checked: value?.checked,
                            readOnly: true,
                            className: "w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                            text: value.text
                        })
                    ]
                })
            });
        case "toggle":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("summary", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                            text: value.text
                        })
                    }),
                    value.children?.map((block)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                            children: renderBlocks(block)
                        }, block.id))
                ]
            });
        case "child_page":
            return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: value.title
            });
        case "image":
            const src = value.type === "external" ? value.external.url : value.file.url;
            const caption = value.caption.length >= 1 ? value.caption[0].plain_text : "";
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                className: "mt-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "rounded-lg aspect-video",
                        objectFit: "cover",
                        src: src,
                        placeholder: "blur",
                        blurDataURL: src,
                        width: 1200,
                        height: 684,
                        alt: caption ? caption : "A visual depiction of what is being written about"
                    }),
                    caption && /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                        className: "text-center",
                        children: caption
                    })
                ]
            });
        case "code":
            return /*#__PURE__*/ jsx_runtime_.jsx(CodeBlock, {
                language: value.language,
                caption: value.caption.length >= 1 && value.caption[0].plain_text,
                code: value.text[0].text.content
            });
        case "callout":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex p-3 space-x-4 bg-gray-100 rounded-lg",
                children: [
                    value.icon && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-2xl",
                        children: value.icon.emoji
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "leading-[28px] text-base",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                            text: value.text
                        })
                    })
                ]
            });
        case "table_of_contents":
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "TOC"
            });
        case "video":
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    className: "w-full h-96 md:h-[680px]",
                    src: value?.external?.url || "",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: true,
                    title: "Embedded youtube"
                })
            });
        case "quote":
            return /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                className: "p-4 rounded-r-lg bg-gray-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Text, {
                    text: value.text
                })
            });
        case "divider":
            return /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"
            });
        default:
            return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type})`;
    }
}


/***/ }),

/***/ 6051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_notion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6048);
/* harmony import */ var layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1078);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_blocks_renderBlocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1802);
/* harmony import */ var utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3652);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2284);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var siteData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3999);
/* harmony import */ var components_ArticleCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2023);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_Layout__WEBPACK_IMPORTED_MODULE_4__]);
layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const ArticlePage = ({ content , title , thumbnail , publishedDate , lastEditedAt , summary , moreArticles  })=>{
    const publishedOn = (0,utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(publishedDate);
    const modifiedDate = (0,utils_getLocalizedDate__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(lastEditedAt);
    const slug = slugify__WEBPACK_IMPORTED_MODULE_9___default()(title).toLowerCase();
    // const ogImage = `https://www.phung.io/api/og-image?title=${encodeURIComponent(
    //   title
    // )}&date=${encodeURIComponent(publishedOn)}`;
    const ogImage = `${siteData__WEBPACK_IMPORTED_MODULE_10__/* ["default"].websiteUrl */ .Z.websiteUrl}/api/og-image?title=${encodeURIComponent(title)}&date=${encodeURIComponent(publishedOn)}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
            title: title,
            description: summary,
            imageUrl: ogImage,
            date: new Date(publishedDate).toISOString(),
            ogUrl: `/blog/${slug}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "px-6 py-16 pt-16 pb-48 mx-auto -mb-48 text-center bg-gray-100 md:pb-96 md:-mb-96",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-3xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sm:flex items-center justify-center mb-2 space-x-2 text-sm text-gray-500",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "",
                                            children: publishedOn
                                        }),
                                        publishedOn !== modifiedDate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sm:block hidden",
                                                    children: "•"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "0",
                                                    children: [
                                                        "Updated on ",
                                                        modifiedDate
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-extrabold tracking-tight text-gray-900 text-w-4xl sm:text-4xl text-2xl",
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-3xl mx-auto mt-3 text-xl leading-8 text-gray-500 sm:mt-4",
                                    children: summary
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-5xl px-6 mx-auto my-16 md:px-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                            className: "rounded-lg aspect-video",
                            objectFit: "cover",
                            src: thumbnail,
                            placeholder: "blur",
                            blurDataURL: thumbnail,
                            layout: "intrinsic",
                            width: 1200,
                            height: 684,
                            alt: "article cover",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8",
                        children: content.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                children: (0,components_blocks_renderBlocks__WEBPACK_IMPORTED_MODULE_6__/* .renderBlocks */ .l)(block)
                            }, block.id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-12 border-t",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between my-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-3xl font-bold text-gray-900",
                                            children: "Latest articles"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-semibold text-gray-900 cursor-pointer",
                                                children: "More articles ➜"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid gap-10 lg:gap-12 sm:grid-cols-2",
                                    children: moreArticles.map((article)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ArticleCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            article: article
                                        }, article.id))
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
const getStaticPaths = async ()=>{
    const paths = [];
    const data = await (0,utils_notion__WEBPACK_IMPORTED_MODULE_3__/* .getAllArticles */ .zC)(process.env.BLOG_DATABASE_ID);
    data.forEach((result)=>{
        if (result.object === "page") {
            paths.push({
                params: {
                    slug: slugify__WEBPACK_IMPORTED_MODULE_9___default()(result.properties.title.title[0].plain_text).toLowerCase()
                }
            });
        }
    });
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async ({ params: { slug  }  })=>{
    const data = await (0,utils_notion__WEBPACK_IMPORTED_MODULE_3__/* .getAllArticles */ .zC)(process.env.BLOG_DATABASE_ID);
    const page = (0,utils_notion__WEBPACK_IMPORTED_MODULE_3__/* .getArticlePage */ .Tf)(data, slug);
    const result = await (0,utils_notion__WEBPACK_IMPORTED_MODULE_3__/* .getArticlePageData */ .q3)(page, slug, process.env.BLOG_DATABASE_ID);
    return {
        props: result,
        revalidate: 60 * 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 891:
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7987:
/***/ ((module) => {

module.exports = require("react-canvas-confetti");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,61,48,743], () => (__webpack_exec__(6051)));
module.exports = __webpack_exports__;

})();