"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 3134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_notion_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6048);


const rootURL = "http://localhost:3000/blog";
function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts.map(({ title , publishedDate  })=>{
        return `
            <url>
              <loc>${`${rootURL}/${slugify__WEBPACK_IMPORTED_MODULE_0___default()(title).toLowerCase()}`}</loc>
              <lastmod>${publishedDate}</lastmod>
              <priority>1.0</priority>
            </url>
          `;
    }).join("")}
    </urlset>
  `;
}
function SiteMap() {
// getServerSideProps will do they heavy lifting
}
async function getServerSideProps({ res  }) {
    const data = await (0,utils_notion_ts__WEBPACK_IMPORTED_MODULE_1__/* .getAllArticles */ .zC)(process.env.BLOG_DATABASE_ID);
    const { articles  } = (0,utils_notion_ts__WEBPACK_IMPORTED_MODULE_1__/* .convertToArticleList */ .s_)(data);
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(articles);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);


/***/ }),

/***/ 891:
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ 3673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [48], () => (__webpack_exec__(3134)));
module.exports = __webpack_exports__;

})();