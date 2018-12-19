(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-restaurant-res-module"],{

/***/ "./src/app/pages/restaurant/res.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/restaurant/res.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\r\n<div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n    <div fxFlex=\"30%\" fxFlex.sm=\"100%\"fxFlex.xs=\"100%\" style=\"height:150px; overflow: hidden;\">\r\n        <img style=\"display: block; width:100%;\" src=\"https://auspost.com.au/content/dam/corp/travel-essentials/destination-guides/italy/photo-antipasto-platter-italian-food.jpg.auspostimage.970*0.low.jpg\" alt=\"\">\r\n    </div>\r\n    <div fxFlex=\"70%\" fxFlex.sm=\"100%\" fxFlex.xs=\"100%\"style=\"height:150px;background-color: rgb(207, 102, 70); padding:25px; color:white\">\r\n        <h3>Indian Dinner</h3>\r\n        <p>176 96th, Ave, Queens , (646) 325 2201</p>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<div>\r\n    <div style=\"padding:10px\">\r\n        <h5>Menu</h5>\r\n        <div fxLayout fxLayoutAlign=\"left center\">\r\n            <div fxFlex=\"70%\">\r\n                    <mat-nav-list fxLayout>\r\n                            <mat-list-item>\r\n                                <a >Most Popular</a>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <a>Appertizer</a>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <a >Entry</a>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <a >Soup</a>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <a >Salad</a>\r\n                            </mat-list-item>\r\n                        </mat-nav-list>\r\n            </div>\r\n            <div fxFlex=\"30%\" style=\"text-align:right\">More..</div>\r\n        </div>\r\n        \r\n        <hr>\r\n    </div>\r\n    <div style=\"padding:10px\">\r\n        <h5>Most Popular</h5>\r\n        <div >\r\n            <mat-card  class=\"mat-elevation-z0\"  (click)=\"goToDish()\" *ngFor=\"let dishDetails of dishes\"  style=\"width:400px;margin-right:25px;margin-bottom:25px;display:inline-block\">\r\n                <div fxLayout=\"row\">\r\n                    <div fxFlex=\"40%\">\r\n                        <mat-card-subtitle>{{dishDetails.name}}</mat-card-subtitle>\r\n                    </div>\r\n                    <div fxFlex=\"60%\">\r\n                        <p style=\"text-align:right\">${{dishDetails.currentPrice}} <small style=\"text-decoration: line-through;\">  ${{dishDetails.orignalprice}}</small></p>\r\n                    </div>\r\n                </div>\r\n                <mat-card-content>\r\n                    <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\r\n                    <p style=\"text-align:center\"><small>{{dishDetails.ordersCount}} orders / {{dishDetails.maxOrders}} max,  Deal ends in {{dishDetails.expireTime}} <mat-icon style=\"font-size:13px\">help_outline</mat-icon></small></p>\r\n                    <mat-card-subtitle>{{dishDetails.description}}</mat-card-subtitle>\r\n                </mat-card-content>\r\n                <mat-card-actions><button mat-stroked-button>Order Now</button></mat-card-actions>\r\n                <mat-card-footer style=\"text-align:center\"> <small></small> </mat-card-footer>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<footer-bar></footer-bar>"

/***/ }),

/***/ "./src/app/pages/restaurant/res.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/restaurant/res.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3dlYi1rbWVhbC9zcmMvYXBwL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/restaurant/res.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/restaurant/res.component.ts ***!
  \***************************************************/
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
var ResComponent = /** @class */ (function () {
    function ResComponent() {
        this.dishes = [
            {
                id: '321hdjsha',
                name: 'Chicken Biryani',
                description: "Sautted Chicken with Fried rice, with special Indian Spcies",
                lables: ['Indian', 'Spicy', 'Chicken', 'Rice'],
                restaurant: 'Indian Diner',
                currentPrice: 13.88,
                orignalprice: 16.00,
                ordersCount: 12,
                maxOrders: 30,
                rating: 5,
                expireTime: "02:00:00"
            }, {
                id: '4372djakhx',
                name: 'Chicken Curry',
                description: "Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
                lables: ['Indian', 'Spicy', 'Chicken', 'Rice', 'curry'],
                restaurant: 'Indian Diner',
                currentPrice: 13.88,
                orignalprice: 16.00,
                ordersCount: 12,
                maxOrders: 30,
                rating: 5,
                expireTime: "02:00:00"
            }, {
                id: '4372djakhx',
                name: 'Chicken Curry',
                description: "Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
                lables: ['Indian', 'Spicy', 'Chicken', 'Rice', 'curry'],
                restaurant: 'Indian Diner',
                currentPrice: 13.88,
                orignalprice: 16.00,
                ordersCount: 12,
                maxOrders: 30,
                rating: 5,
                expireTime: "02:00:00"
            }, {
                id: '4372djakhx',
                name: 'Chicken Curry',
                description: "Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
                lables: ['Indian', 'Spicy', 'Chicken', 'Rice', 'curry'],
                restaurant: 'Indian Diner',
                currentPrice: 13.88,
                orignalprice: 16.00,
                ordersCount: 12,
                maxOrders: 30,
                rating: 5,
                expireTime: "02:00:00"
            }, {
                id: '4372djakhx',
                name: 'Chicken Curry',
                description: "Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
                lables: ['Indian', 'Spicy', 'Chicken', 'Rice', 'curry'],
                restaurant: 'Indian Diner',
                currentPrice: 13.88,
                orignalprice: 16.00,
                ordersCount: 12,
                maxOrders: 30,
                rating: 5,
                expireTime: "02:00:00"
            }, {
                id: '4372djakhx',
                name: 'Chicken Curry',
                description: "Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
                lables: ['Indian', 'Spicy', 'Chicken', 'Rice', 'curry'],
                restaurant: 'Indian Diner',
                currentPrice: 13.88,
                orignalprice: 16.00,
                ordersCount: 12,
                maxOrders: 30,
                rating: 5,
                expireTime: "02:00:00"
            }, {
                id: '4372djakhx',
                name: 'Chicken Curry',
                description: "Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
                lables: ['Indian', 'Spicy', 'Chicken', 'Rice', 'curry'],
                restaurant: 'Indian Diner',
                currentPrice: 13.88,
                orignalprice: 16.00,
                ordersCount: 12,
                maxOrders: 30,
                rating: 5,
                expireTime: "02:00:00"
            }, {
                id: '4372djakhx',
                name: 'Chicken Curry',
                description: "Grilled Chicken in creamy curry sauce, served with choice of white rice or brown rice",
                lables: ['Indian', 'Spicy', 'Chicken', 'Rice', 'curry'],
                restaurant: 'Indian Diner',
                currentPrice: 13.88,
                orignalprice: 16.00,
                ordersCount: 12,
                maxOrders: 30,
                rating: 5,
                expireTime: "02:00:00"
            }
        ];
    }
    ResComponent = __decorate([
        core_1.Component({
            selector: "app-restaurant",
            moduleId: module.i,
            template: __webpack_require__(/*! ./res.component.html */ "./src/app/pages/restaurant/res.component.html"),
            styles: [__webpack_require__(/*! ./res.component.scss */ "./src/app/pages/restaurant/res.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ResComponent);
    return ResComponent;
}());
exports.ResComponent = ResComponent;


/***/ }),

/***/ "./src/app/pages/restaurant/res.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/restaurant/res.module.ts ***!
  \************************************************/
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
var res_component_1 = __webpack_require__(/*! ./res.component */ "./src/app/pages/restaurant/res.component.ts");
var shared_module_1 = __webpack_require__(/*! ../../features/shared/shared.module */ "./src/app/features/shared/shared.module.ts");
var res_service_1 = __webpack_require__(/*! ./res.service */ "./src/app/pages/restaurant/res.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var dish_list_module_1 = __webpack_require__(/*! ../../features/shared/dish-list/dish-list.module */ "./src/app/features/shared/dish-list/dish-list.module.ts");
var nav_module_1 = __webpack_require__(/*! ../../features/shared/nav-bar/nav.module */ "./src/app/features/shared/nav-bar/nav.module.ts");
exports.routing = [
    { path: '', component: res_component_1.ResComponent },
];
var routingModule = router_1.RouterModule.forChild(exports.routing);
var ResModule = /** @class */ (function () {
    function ResModule() {
    }
    ResModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                routingModule,
                nav_module_1.NavBarModule,
                dish_list_module_1.DishListModule
            ],
            declarations: [
                res_component_1.ResComponent
            ],
            providers: [res_service_1.ResService],
            exports: [res_component_1.ResComponent],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ResModule);
    return ResModule;
}());
exports.ResModule = ResModule;


/***/ }),

/***/ "./src/app/pages/restaurant/res.service.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/restaurant/res.service.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var ResService = /** @class */ (function () {
    function ResService() {
    }
    ResService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ResService);
    return ResService;
}());
exports.ResService = ResService;


/***/ })

}]);
//# sourceMappingURL=pages-restaurant-res-module.js.map