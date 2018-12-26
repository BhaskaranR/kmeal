(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-error-error-module"],{

/***/ "./src/app/pages/error/error.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/error/error.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fourOfour\">\r\n<svg width=\"380px\" height=\"500px\" viewBox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\r\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\r\n        <path d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\" id=\"Polygon-1\" stroke=\"#007FB2\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\" id=\"Polygon-2\" stroke=\"#EF4A5B\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\" id=\"Polygon-3\" stroke=\"#795D9C\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\" id=\"Polygon-4\" stroke=\"#F2773F\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n        <path d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\" id=\"Polygon-5\" stroke=\"#36B455\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\r\n    </g>\r\n</svg>\r\n<div class=\"message-box\">\r\n  <h1>404</h1>\r\n  <p>Page not found</p>\r\n  <div class=\"buttons-con\">\r\n    <div class=\"action-link-wrap\">\r\n      <a onclick=\"history.back(-1)\" class=\"link-button link-back-button\">Go Back</a>\r\n      <a href=\"\" class=\"link-button\">Go to Home Page</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div style=\"margin-bottom:700px\"></div>"

/***/ }),

/***/ "./src/app/pages/error/error.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/error/error.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var shared_module_1 = __webpack_require__(/*! ../../features/shared/shared.module */ "./src/app/features/shared/shared.module.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var FourZeroFourComponent = /** @class */ (function () {
    function FourZeroFourComponent() {
    }
    FourZeroFourComponent = __decorate([
        core_1.Component({
            selector: 'app-404',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/pages/error/error.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FourZeroFourComponent);
    return FourZeroFourComponent;
}());
exports.FourZeroFourComponent = FourZeroFourComponent;
exports.routing = [
    { path: '', component: FourZeroFourComponent },
];
var routingModule = router_1.RouterModule.forChild(exports.routing);
var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, routingModule],
            declarations: [FourZeroFourComponent],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ErrorModule);
    return ErrorModule;
}());
exports.ErrorModule = ErrorModule;


/***/ })

}]);
//# sourceMappingURL=pages-error-error-module.js.map