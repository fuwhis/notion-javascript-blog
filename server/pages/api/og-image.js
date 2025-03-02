"use strict";
(() => {
var exports = {};
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 7893:
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 4076:
/***/ ((module) => {

module.exports = require("is-lambda");

/***/ }),

/***/ 1107:
/***/ ((module) => {

module.exports = require("puppeteer-core");

/***/ }),

/***/ 8684:
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ 8091:
/***/ ((module) => {

module.exports = require("twemoji");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ og_image)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: ./components/OgTemplate.tsx

function OgTemplate({ date , title  }) {
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "w-[1200px] h-[630px] border flex items-center justify-center p-16",
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
            className: "flex flex-col items-center justify-center text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "text-2xl",
                    children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        className: "",
                        children: date
                    })
                }),
                /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                    className: "mt-4 mb-8 font-extrabold text-7xl leading-[80px] text-center",
                    children: title
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next-api-og-image/lib/next-api-og-image.module.js
var next_api_og_image_module = __webpack_require__(8318);
;// CONCATENATED MODULE: ./pages/api/og-image.tsx



/* harmony default export */ const og_image = ((0,next_api_og_image_module/* withOGImage */.T)({
    template: {
        react: ({ title , date  })=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("html", {
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: `<head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(OgTemplate, {
                        title: title,
                        date: date
                    })
                ]
            })
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [318], () => (__webpack_exec__(2341)));
module.exports = __webpack_exports__;

})();