"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/[slug]/page",{

/***/ "(app-pages-browser)/./src/components/Blog/BlogPostClient.tsx":
/*!************************************************!*\
  !*** ./src/components/Blog/BlogPostClient.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BlogPostsClient_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogPostsClient-styles */ \"(app-pages-browser)/./src/components/Blog/BlogPostsClient-styles.tsx\");\n/* harmony import */ var _utils_formatDateWithSuffix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatDateWithSuffix */ \"(app-pages-browser)/./src/utils/formatDateWithSuffix.ts\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ \"(app-pages-browser)/./node_modules/html-react-parser/esm/index.mjs\");\n/* harmony import */ var _BlogPostClient_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlogPostClient-styles */ \"(app-pages-browser)/./src/components/Blog/BlogPostClient-styles.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst BlogPostClient = (param)=>{\n    let { blog } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostClient_styles__WEBPACK_IMPORTED_MODULE_5__.BlogPostContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostClient_styles__WEBPACK_IMPORTED_MODULE_5__.BlogMainImage, {\n                src: blog.thumbnail,\n                alt: blog.title,\n                width: 500,\n                height: 500\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostsClient_styles__WEBPACK_IMPORTED_MODULE_2__.BlogDateAndCategoryCol, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostsClient_styles__WEBPACK_IMPORTED_MODULE_2__.BlogPostDate, {\n                        children: (0,_utils_formatDateWithSuffix__WEBPACK_IMPORTED_MODULE_3__.formatDateWithSuffix)(blog.created)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostsClient_styles__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostsClient_styles__WEBPACK_IMPORTED_MODULE_2__.BlogCategoriesRow, {\n                        children: ((blog === null || blog === void 0 ? void 0 : blog.categories) || []).map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostsClient_styles__WEBPACK_IMPORTED_MODULE_2__.BlogPostCategory, {\n                                children: category\n                            }, category, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostsClient_styles__WEBPACK_IMPORTED_MODULE_2__.BlogPostTitle, {\n                children: blog.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BlogPostsClient_styles__WEBPACK_IMPORTED_MODULE_2__.BlogPostBody, {\n                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(blog.body)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\Blog\\\\BlogPostClient.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BlogPostClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPostClient);\nvar _c;\n$RefreshReg$(_c, \"BlogPostClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Jsb2cvQmxvZ1Bvc3RDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMwQjtBQVVRO0FBQ3NDO0FBRWxDO0FBQ3FDO0FBTTNFLE1BQU1ZLGlCQUFpQjtRQUFDLEVBQUVDLElBQUksRUFBdUI7SUFDbkQscUJBQ0UsOERBQUNGLHFFQUFpQkE7OzBCQUNoQiw4REFBQ0QsaUVBQWFBO2dCQUNaSSxLQUFLRCxLQUFLRSxTQUFTO2dCQUNuQkMsS0FBS0gsS0FBS0ksS0FBSztnQkFDZkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDakIsMkVBQXNCQTs7a0NBQ3JCLDhEQUFDRyxpRUFBWUE7a0NBQUVHLGlGQUFvQkEsQ0FBQ0ssS0FBS08sT0FBTzs7Ozs7O2tDQUNoRCw4REFBQ2IsNERBQU9BOzs7OztrQ0FDUiw4REFBQ04sc0VBQWlCQTtrQ0FDZixDQUFDWSxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1RLFVBQVUsS0FBSSxFQUFFLEVBQUVDLEdBQUcsQ0FBQyxDQUFDQyx5QkFDN0IsOERBQUNuQixxRUFBZ0JBOzBDQUFpQm1COytCQUFYQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJN0IsOERBQUNqQixrRUFBYUE7MEJBQUVPLEtBQUtJLEtBQUs7Ozs7OzswQkFDMUIsOERBQUNkLGlFQUFZQTswQkFBRU0sNkRBQUtBLENBQUNJLEtBQUtXLElBQUk7Ozs7Ozs7Ozs7OztBQUdwQztLQXRCTVo7QUF3Qk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvZy9CbG9nUG9zdENsaWVudC50c3g/MTQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJsb2dDYXRlZ29yaWVzUm93LFxyXG4gIEJsb2dEYXRlQW5kQ2F0ZWdvcnlDb2wsXHJcbiAgQmxvZ1Bvc3RCb2R5LFxyXG4gIEJsb2dQb3N0Q2F0ZWdvcnksXHJcbiAgQmxvZ1Bvc3REYXRlLFxyXG4gIEJsb2dQb3N0SW1hZ2UsXHJcbiAgQmxvZ1Bvc3RUaXRsZSxcclxuICBEaXZpZGVyXHJcbn0gZnJvbSBcIi4vQmxvZ1Bvc3RzQ2xpZW50LXN0eWxlc1wiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlV2l0aFN1ZmZpeCB9IGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXREYXRlV2l0aFN1ZmZpeFwiO1xyXG5pbXBvcnQgeyBCbG9nUG9zdCB9IGZyb20gXCIuL0Jsb2dQb3N0c0NsaWVudFwiO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCI7XHJcbmltcG9ydCB7IEJsb2dNYWluSW1hZ2UsIEJsb2dQb3N0Q29udGFpbmVyIH0gZnJvbSBcIi4vQmxvZ1Bvc3RDbGllbnQtc3R5bGVzXCI7XHJcblxyXG5pbnRlcmZhY2UgQmxvZ1Bvc3RDbGllbnRQcm9wcyB7XHJcbiAgYmxvZzogQmxvZ1Bvc3Q7XHJcbn1cclxuXHJcbmNvbnN0IEJsb2dQb3N0Q2xpZW50ID0gKHsgYmxvZyB9OiBCbG9nUG9zdENsaWVudFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCbG9nUG9zdENvbnRhaW5lcj5cclxuICAgICAgPEJsb2dNYWluSW1hZ2VcclxuICAgICAgICBzcmM9e2Jsb2cudGh1bWJuYWlsfVxyXG4gICAgICAgIGFsdD17YmxvZy50aXRsZX1cclxuICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAvPlxyXG4gICAgICA8QmxvZ0RhdGVBbmRDYXRlZ29yeUNvbD5cclxuICAgICAgICA8QmxvZ1Bvc3REYXRlPntmb3JtYXREYXRlV2l0aFN1ZmZpeChibG9nLmNyZWF0ZWQpfTwvQmxvZ1Bvc3REYXRlPlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPEJsb2dDYXRlZ29yaWVzUm93PlxyXG4gICAgICAgICAgeyhibG9nPy5jYXRlZ29yaWVzIHx8IFtdKS5tYXAoKGNhdGVnb3J5OiBzdHJpbmcpID0+IChcclxuICAgICAgICAgICAgPEJsb2dQb3N0Q2F0ZWdvcnkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvQmxvZ1Bvc3RDYXRlZ29yeT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQmxvZ0NhdGVnb3JpZXNSb3c+XHJcbiAgICAgIDwvQmxvZ0RhdGVBbmRDYXRlZ29yeUNvbD5cclxuICAgICAgPEJsb2dQb3N0VGl0bGU+e2Jsb2cudGl0bGV9PC9CbG9nUG9zdFRpdGxlPlxyXG4gICAgICA8QmxvZ1Bvc3RCb2R5PntwYXJzZShibG9nLmJvZHkpfTwvQmxvZ1Bvc3RCb2R5PlxyXG4gICAgPC9CbG9nUG9zdENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3RDbGllbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJsb2dDYXRlZ29yaWVzUm93IiwiQmxvZ0RhdGVBbmRDYXRlZ29yeUNvbCIsIkJsb2dQb3N0Qm9keSIsIkJsb2dQb3N0Q2F0ZWdvcnkiLCJCbG9nUG9zdERhdGUiLCJCbG9nUG9zdFRpdGxlIiwiRGl2aWRlciIsImZvcm1hdERhdGVXaXRoU3VmZml4IiwicGFyc2UiLCJCbG9nTWFpbkltYWdlIiwiQmxvZ1Bvc3RDb250YWluZXIiLCJCbG9nUG9zdENsaWVudCIsImJsb2ciLCJzcmMiLCJ0aHVtYm5haWwiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3JlYXRlZCIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Blog/BlogPostClient.tsx\n"));

/***/ })

});