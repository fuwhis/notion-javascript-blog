"use strict";
(() => {
var exports = {};
exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 6592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ subscribe_convertkit)
});

;// CONCATENATED MODULE: ./utils/isValidEmail.ts
function isValidEmail(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

;// CONCATENATED MODULE: ./pages/api/subscribe-convertkit.ts

const subscribeConvertkit = async (req, res)=>{
    const { email  } = JSON.parse(req.body);
    if (!email) {
        return res.status(400).json({
            error: "Email is required."
        });
    }
    const isValid = isValidEmail(email);
    if (!isValid) {
        return res.status(400).json({
            error: "Email is invalid."
        });
    }
    try {
        const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
        const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;
        const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
            body: JSON.stringify({
                email,
                api_key: API_KEY
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        // something went wrong on the convertkit server
        if (response.status >= 400) {
            return res.status(400).json({
                error: "There was an error subscribing to the list."
            });
        }
        // Success
        return res.status(201).json({
            error: null
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message || error.toString()
        });
    }
};
/* harmony default export */ const subscribe_convertkit = (subscribeConvertkit);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6592));
module.exports = __webpack_exports__;

})();