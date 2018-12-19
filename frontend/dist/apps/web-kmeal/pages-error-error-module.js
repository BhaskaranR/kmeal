(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-error-error-module"],{

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
            template: 'Page not found',
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