"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/camel-case";
exports.ids = ["vendor-chunks/camel-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/camel-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/camel-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   camelCase: () => (/* binding */ camelCase),\n/* harmony export */   camelCaseTransform: () => (/* binding */ camelCaseTransform),\n/* harmony export */   camelCaseTransformMerge: () => (/* binding */ camelCaseTransformMerge)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pascal-case */ \"(ssr)/./node_modules/pascal-case/dist.es2015/index.js\");\n\n\nfunction camelCaseTransform(input, index) {\n    if (index === 0) return input.toLowerCase();\n    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransform)(input, index);\n}\nfunction camelCaseTransformMerge(input, index) {\n    if (index === 0) return input.toLowerCase();\n    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransformMerge)(input);\n}\nfunction camelCase(input, options) {\n    if (options === void 0) {\n        options = {};\n    }\n    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({\n        transform: camelCaseTransform\n    }, options));\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUN3RDtBQUNsRixTQUFTSSxtQkFBbUJDLEtBQUssRUFBRUMsS0FBSztJQUMzQyxJQUFJQSxVQUFVLEdBQ1YsT0FBT0QsTUFBTUUsV0FBVztJQUM1QixPQUFPTCxnRUFBbUJBLENBQUNHLE9BQU9DO0FBQ3RDO0FBQ08sU0FBU0Usd0JBQXdCSCxLQUFLLEVBQUVDLEtBQUs7SUFDaEQsSUFBSUEsVUFBVSxHQUNWLE9BQU9ELE1BQU1FLFdBQVc7SUFDNUIsT0FBT0oscUVBQXdCQSxDQUFDRTtBQUNwQztBQUNPLFNBQVNJLFVBQVVKLEtBQUssRUFBRUssT0FBTztJQUNwQyxJQUFJQSxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVLENBQUM7SUFBRztJQUN4QyxPQUFPVCx1REFBVUEsQ0FBQ0ksT0FBT0wsK0NBQVFBLENBQUM7UUFBRVcsV0FBV1A7SUFBbUIsR0FBR007QUFDekUsRUFDQSxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydG5leHQvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcz83ODI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBwYXNjYWxDYXNlLCBwYXNjYWxDYXNlVHJhbnNmb3JtLCBwYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2UsIH0gZnJvbSBcInBhc2NhbC1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVHJhbnNmb3JtKGlucHV0LCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHBhc2NhbENhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IDApXG4gICAgICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBwYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2UoaW5wdXQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIHBhc2NhbENhc2UoaW5wdXQsIF9fYXNzaWduKHsgdHJhbnNmb3JtOiBjYW1lbENhc2VUcmFuc2Zvcm0gfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwicGFzY2FsQ2FzZSIsInBhc2NhbENhc2VUcmFuc2Zvcm0iLCJwYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2UiLCJjYW1lbENhc2VUcmFuc2Zvcm0iLCJpbnB1dCIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJjYW1lbENhc2VUcmFuc2Zvcm1NZXJnZSIsImNhbWVsQ2FzZSIsIm9wdGlvbnMiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/camel-case/dist.es2015/index.js\n");

/***/ })

};
;