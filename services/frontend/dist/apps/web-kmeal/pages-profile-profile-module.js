(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./src/app/pages/profile/profile-common.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/profile-common.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3dlYi1rbWVhbC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS1jb21tb24uc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
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
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "profile",
            moduleId: module.i,
            template: __webpack_require__(/*! ./profile.html */ "./src/app/pages/profile/profile.html"),
            styles: [__webpack_require__(/*! ./profile-common.scss */ "./src/app/pages/profile/profile-common.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/pages/profile/profile.html":
/*!********************************************!*\
  !*** ./src/app/pages/profile/profile.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nAddress\r\nBank Account\r\nEOS Account\r\nHelp\r\nSettings  "

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var shared_module_1 = __webpack_require__(/*! ../../features/shared/shared.module */ "./src/app/features/shared/shared.module.ts");
var profile_component_1 = __webpack_require__(/*! ./profile.component */ "./src/app/pages/profile/profile.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
exports.routing = [
    { path: '', component: profile_component_1.ProfileComponent },
];
var routingModule = router_1.RouterModule.forChild(exports.routing);
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, routingModule],
            declarations: [
                profile_component_1.ProfileComponent
            ],
            exports: [profile_component_1.ProfileComponent],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;


/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map