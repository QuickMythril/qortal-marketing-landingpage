"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/Layout/Footer/Footer-styles.tsx":
/*!********************************************************!*\
  !*** ./src/components/Layout/Footer/Footer-styles.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FooterContainer: function() { return /* binding */ FooterContainer; },\n/* harmony export */   FooterLink: function() { return /* binding */ FooterLink; }\n/* harmony export */ });\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ \"(app-pages-browser)/./node_modules/@mui/system/esm/styled.js\");\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _app_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/fonts */ \"(app-pages-browser)/./src/app/fonts.ts\");\n\n\n\n\nconst FooterContainer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        display: \"flex\",\n        flexDirection: \"row\",\n        justifyContent: \"flex-end\",\n        alignItems: \"center\",\n        width: \"100%\",\n        padding: \"15px 30px 0 30px\",\n        gap: \"15px\",\n        marginTop: \"auto\",\n        [theme.breakpoints.down(\"sm\")]: {\n            justifyContent: \"center\",\n            padding: \"15px 0\"\n        }\n    };\n});\nconst FooterLink = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(next_link__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        position: \"relative\",\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        gap: \"8px\",\n        backgroundColor: \"transparent\",\n        fontFamily: _app_fonts__WEBPACK_IMPORTED_MODULE_1__.oxygen.style.fontFamily,\n        fontSize: \"18px\",\n        color: theme.palette.text.primary,\n        height: \"48px\",\n        borderRadius: \"2px\",\n        padding: \"10px 15px\",\n        userSelect: \"none\",\n        textDecoration: \"none\",\n        transition: \"all 0.3s ease-in-out\",\n        zIndex: 2,\n        \"&.active \": {\n            \"&::after\": {\n                width: \"100%\",\n                backgroundColor: theme.palette.text.primary,\n                height: \"2px\",\n                position: \"absolute\",\n                content: \"''\",\n                bottom: \"3px\"\n            }\n        },\n        \"&::after\": {\n            position: \"absolute\",\n            width: \"0%\",\n            height: \"2px\",\n            backgroundColor: theme.palette.text.primary,\n            content: \"''\",\n            bottom: \"3px\",\n            transition: \"all 0.3s ease-in-out\"\n        },\n        \"&:hover\": {\n            cursor: \"pointer\",\n            \"&::after\": {\n                width: \"100%\",\n                backgroundColor: theme.palette.text.primary,\n                height: \"2px\",\n                position: \"absolute\",\n                content: \"''\",\n                bottom: \"3px\"\n            }\n        }\n    };\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Gb290ZXIvRm9vdGVyLXN0eWxlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBQ1c7QUFDbkI7QUFDZTtBQUVyQyxNQUFNSSxrQkFBa0JKLHVEQUFNQSxDQUFDQywrRUFBR0EsRUFBRTtRQUFDLEVBQUVJLEtBQUssRUFBRTtXQUFNO1FBQ3pEQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxLQUFLO1FBQ0xDLFdBQVc7UUFDWCxDQUFDUixNQUFNUyxXQUFXLENBQUNDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUJQLGdCQUFnQjtZQUNoQkcsU0FBUztRQUNYO0lBQ0Y7R0FBSTtBQUVHLE1BQU1LLGFBQWFoQix1REFBTUEsQ0FBQ0UsaURBQUlBLEVBQUU7UUFBQyxFQUFFRyxLQUFLLEVBQUU7V0FBTTtRQUNyRFksVUFBVTtRQUNWWCxTQUFTO1FBQ1RHLFlBQVk7UUFDWkQsZ0JBQWdCO1FBQ2hCSSxLQUFLO1FBQ0xNLGlCQUFpQjtRQUNqQkMsWUFBWWhCLDhDQUFNQSxDQUFDaUIsS0FBSyxDQUFDRCxVQUFVO1FBQ25DRSxVQUFVO1FBQ1ZDLE9BQU9qQixNQUFNa0IsT0FBTyxDQUFDQyxJQUFJLENBQUNDLE9BQU87UUFDakNDLFFBQVE7UUFDUkMsY0FBYztRQUNkaEIsU0FBUztRQUNUaUIsWUFBWTtRQUNaQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsUUFBUTtRQUNSLGFBQWE7WUFDWCxZQUFZO2dCQUNWckIsT0FBTztnQkFDUFEsaUJBQWlCYixNQUFNa0IsT0FBTyxDQUFDQyxJQUFJLENBQUNDLE9BQU87Z0JBQzNDQyxRQUFRO2dCQUNSVCxVQUFVO2dCQUNWZSxTQUFTO2dCQUNUQyxRQUFRO1lBQ1Y7UUFDRjtRQUNBLFlBQVk7WUFDVmhCLFVBQVU7WUFDVlAsT0FBTztZQUNQZ0IsUUFBUTtZQUNSUixpQkFBaUJiLE1BQU1rQixPQUFPLENBQUNDLElBQUksQ0FBQ0MsT0FBTztZQUMzQ08sU0FBUztZQUNUQyxRQUFRO1lBQ1JILFlBQVk7UUFDZDtRQUNBLFdBQVc7WUFDVEksUUFBUTtZQUNSLFlBQVk7Z0JBQ1Z4QixPQUFPO2dCQUNQUSxpQkFBaUJiLE1BQU1rQixPQUFPLENBQUNDLElBQUksQ0FBQ0MsT0FBTztnQkFDM0NDLFFBQVE7Z0JBQ1JULFVBQVU7Z0JBQ1ZlLFNBQVM7Z0JBQ1RDLFFBQVE7WUFDVjtRQUNGO0lBQ0Y7R0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyL0Zvb3Rlci1zdHlsZXMudHN4PzYzZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgb3h5Z2VuIH0gZnJvbSBcIi4uLy4uLy4uL2FwcC9mb250c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZChCb3gpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIHBhZGRpbmc6IFwiMTVweCAzMHB4IDAgMzBweFwiLFxyXG4gIGdhcDogXCIxNXB4XCIsXHJcbiAgbWFyZ2luVG9wOiBcImF1dG9cIixcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBwYWRkaW5nOiBcIjE1cHggMFwiXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTGluayA9IHN0eWxlZChMaW5rKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICBnYXA6IFwiOHB4XCIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgZm9udEZhbWlseTogb3h5Z2VuLnN0eWxlLmZvbnRGYW1pbHksXHJcbiAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICBoZWlnaHQ6IFwiNDhweFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIycHhcIixcclxuICBwYWRkaW5nOiBcIjEwcHggMTVweFwiLFxyXG4gIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2UtaW4tb3V0XCIsXHJcbiAgekluZGV4OiAyLFxyXG4gIFwiJi5hY3RpdmUgXCI6IHtcclxuICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgIGhlaWdodDogXCIycHhcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICBib3R0b206IFwiM3B4XCJcclxuICAgIH1cclxuICB9LFxyXG4gIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiBcIjAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMnB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG4gICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgYm90dG9tOiBcIjNweFwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlLWluLW91dFwiXHJcbiAgfSxcclxuICBcIiY6aG92ZXJcIjoge1xyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIFwiJjo6YWZ0ZXJcIjoge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcbiAgICAgIGhlaWdodDogXCIycHhcIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICBib3R0b206IFwiM3B4XCJcclxuICAgIH1cclxuICB9XHJcbn0pKTtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkJveCIsIkxpbmsiLCJveHlnZW4iLCJGb290ZXJDb250YWluZXIiLCJ0aGVtZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJwYWRkaW5nIiwiZ2FwIiwibWFyZ2luVG9wIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiRm9vdGVyTGluayIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsInN0eWxlIiwiZm9udFNpemUiLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0IiwicHJpbWFyeSIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInVzZXJTZWxlY3QiLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwiYm90dG9tIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/Footer/Footer-styles.tsx\n"));

/***/ })

});