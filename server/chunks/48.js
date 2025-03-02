"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 6048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R5": () => (/* binding */ notion),
/* harmony export */   "Tf": () => (/* binding */ getArticlePage),
/* harmony export */   "q3": () => (/* binding */ getArticlePageData),
/* harmony export */   "s_": () => (/* binding */ convertToArticleList),
/* harmony export */   "zC": () => (/* binding */ getAllArticles)
/* harmony export */ });
/* unused harmony exports getMoreArticlesToSuggest, shuffleArray */
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);


const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({
    auth: process.env.NOTION_SECRET
});
const getAllArticles = async (databaseId)=>{
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "status",
            select: {
                equals: "✅ Published"
            }
        }
    });
    return response.results;
};
const mapArticleProperties = (article)=>{
    const { id , properties  } = article;
    return {
        id: id,
        title: properties?.title.title[0].plain_text || "",
        categories: properties?.categories?.multi_select.map((category)=>category.name) || [],
        thumbnail: properties?.thumbnail?.files[0]?.file?.url || properties?.thumbnail?.files[0]?.external?.url || "/image-background.png",
        publishedDate: properties.published?.date?.start,
        lastEditedAt: properties.LastEdited?.last_edited_time,
        summary: properties?.summary.rich_text[0]?.plain_text ?? ""
    };
};
const convertToArticleList = (tableData)=>{
    let categories = [];
    const articles = tableData.map((article)=>{
        const { properties  } = article;
        properties?.categories?.multi_select?.forEach((category)=>{
            const { name  } = category;
            if (!categories.includes(name) && name) {
                categories.push(name);
            }
        });
        return mapArticleProperties(article);
    });
    return {
        articles,
        categories
    };
};
const getMoreArticlesToSuggest = async (databaseId, currentArticleTitle)=>{
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: "status",
                    select: {
                        equals: "✅ Published"
                    }
                },
                {
                    property: "title",
                    text: {
                        does_not_equal: currentArticleTitle
                    }
                }
            ]
        }
    });
    const moreArticles = response.results.map((article)=>mapArticleProperties(article));
    return shuffleArray(moreArticles).slice(0, 2);
};
const getArticlePage = (data, slug)=>{
    const response = data.find((result)=>{
        if (result.object === "page") {
            const resultSlug = slugify__WEBPACK_IMPORTED_MODULE_1___default()(result.properties.title.title[0].plain_text).toLowerCase();
            return resultSlug === slug;
        }
        return false;
    });
    return response;
};
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while(currentIndex != 0){
        // Pick a random element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }
    return array;
}
const getArticlePageData = async (page, slug, databaseId)=>{
    let content = [];
    let title = "";
    title = page.properties.title.title[0].plain_text;
    const moreArticles = await getMoreArticlesToSuggest(databaseId, title);
    let blocks = await notion.blocks.children.list({
        block_id: page.id
    });
    content = [
        ...blocks.results
    ];
    while(blocks.has_more){
        blocks = await notion.blocks.children.list({
            block_id: page.id,
            start_cursor: blocks.next_cursor
        });
        content = [
            ...content,
            ...blocks.results
        ];
    }
    return {
        ...mapArticleProperties(page),
        content,
        slug,
        moreArticles
    };
};


/***/ })

};
;