(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/core/base/base-component.ts":
/*!*********************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/base/base-component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// libs
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.destroy$ = new rxjs_1.Subject();
    }
    BaseComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "../../libs/core/base/index.ts":
/*!************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/base/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base-component */ "../../libs/core/base/base-component.ts"));


/***/ }),

/***/ "../../libs/core/core.module.ts":
/*!*************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/core.module.ts ***!
  \*************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
// libs
var nx_1 = __webpack_require__(/*! @nrwl/nx */ "../../node_modules/@nrwl/nx/esm5/nrwl-nx.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var utils_1 = __webpack_require__(/*! @kmeal-frontend/utils */ "../../libs/utils/index.ts");
// app
var environment_1 = __webpack_require__(/*! ./environments/environment */ "../../libs/core/environments/environment.ts");
var services_1 = __webpack_require__(/*! ./services */ "../../libs/core/services/index.ts");
var log_service_1 = __webpack_require__(/*! ./services/log.service */ "../../libs/core/services/log.service.ts");
/**
 * DEBUGGING
 */
log_service_1.LogService.DEBUG.LEVEL_4 = !environment_1.environment.production;
exports.BASE_PROVIDERS = services_1.CORE_PROVIDERS.concat([
    {
        provide: common_1.APP_BASE_HREF,
        useValue: '/'
    }
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule, lang, translate) {
        utils_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
        // ensure default platform language is set
        translate.use(lang);
    }
    CoreModule_1 = CoreModule;
    // configuredProviders: *required to configure WindowService and others per platform
    CoreModule.forRoot = function (configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: exports.BASE_PROVIDERS.concat(configuredProviders)
        };
    };
    var CoreModule_1;
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, nx_1.NxModule.forRoot()]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()),
        __param(1, core_1.Inject(services_1.PlatformLanguageToken)),
        __metadata("design:paramtypes", [CoreModule, String, core_2.TranslateService])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "../../libs/core/environments/environment.ts":
/*!**************************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/environments/environment.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    api_url: 'https://kmeal-api.herokuapp.com/v1alpha1/graphql',
    baseRoutePath: '',
    graphql_url: 'https://kmeal-api.herokuapp.com/v1alpha1/graphql'
};


/***/ }),

/***/ "../../libs/core/index.ts":
/*!*******************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../libs/core/base/index.ts"));
__export(__webpack_require__(/*! ./environments/environment */ "../../libs/core/environments/environment.ts"));
__export(__webpack_require__(/*! ./services */ "../../libs/core/services/index.ts"));
var core_module_1 = __webpack_require__(/*! ./core.module */ "../../libs/core/core.module.ts");
exports.CoreModule = core_module_1.CoreModule;


/***/ }),

/***/ "../../libs/core/services/index.ts":
/*!****************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/services/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var log_service_1 = __webpack_require__(/*! ./log.service */ "../../libs/core/services/log.service.ts");
var window_service_1 = __webpack_require__(/*! ./window.service */ "../../libs/core/services/window.service.ts");
exports.CORE_PROVIDERS = [log_service_1.LogService, window_service_1.WindowService];
__export(__webpack_require__(/*! ./log.service */ "../../libs/core/services/log.service.ts"));
__export(__webpack_require__(/*! ./window.service */ "../../libs/core/services/window.service.ts"));
__export(__webpack_require__(/*! ./tokens */ "../../libs/core/services/tokens.ts"));


/***/ }),

/***/ "../../libs/core/services/log.service.ts":
/*!**********************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/services/log.service.ts ***!
  \**********************************************************************/
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
// angular
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService_1 = LogService;
    // info (extra messages like analytics)
    // use LEVEL_5 to see only these
    LogService.prototype.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_5 || LogService_1.DEBUG.LEVEL_4) {
            // extra messages
            console.info(msg);
        }
    };
    // debug (standard output)
    LogService.prototype.debug = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 || LogService_1.DEBUG.LEVEL_3) {
            // console.debug does not work on {N} apps... use `log`
            console.log(msg);
        }
    };
    // error
    LogService.prototype.error = function () {
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 ||
            LogService_1.DEBUG.LEVEL_3 ||
            LogService_1.DEBUG.LEVEL_2) {
            console.error(err);
        }
    };
    // warn
    LogService.prototype.warn = function () {
        var warn = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            warn[_i] = arguments[_i];
        }
        if (LogService_1.DEBUG.LEVEL_4 ||
            LogService_1.DEBUG.LEVEL_3 ||
            LogService_1.DEBUG.LEVEL_1) {
            console.warn(warn);
        }
    };
    var LogService_1;
    LogService.DEBUG = {
        LEVEL_1: false,
        LEVEL_2: false,
        LEVEL_3: false,
        LEVEL_4: false,
        LEVEL_5: false // just info (excluding all else)
    };
    LogService = LogService_1 = __decorate([
        core_1.Injectable()
    ], LogService);
    return LogService;
}());
exports.LogService = LogService;


/***/ }),

/***/ "../../libs/core/services/tokens.ts":
/*!*****************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/services/tokens.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/**
 * Various InjectionTokens shared across all platforms
 * Always suffix with 'Token' for clarity and consistency
 */
exports.PlatformLanguageToken = new core_1.InjectionToken('PlatformLanguage');


/***/ }),

/***/ "../../libs/core/services/window.service.ts":
/*!*************************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/core/services/window.service.ts ***!
  \*************************************************************************/
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
// angular
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
// app
var utils_1 = __webpack_require__(/*! @kmeal-frontend/utils */ "../../libs/utils/index.ts");
var WindowPlatformService = /** @class */ (function () {
    function WindowPlatformService() {
        this.navigator = {};
        this.location = {};
        // ...You can expand support for more window methods as you need them here...
    }
    WindowPlatformService.prototype.alert = function (msg) { };
    WindowPlatformService.prototype.confirm = function (msg) { };
    WindowPlatformService.prototype.setTimeout = function (handler, timeout) {
        return 0;
    };
    WindowPlatformService.prototype.clearTimeout = function (timeoutId) { };
    WindowPlatformService.prototype.setInterval = function (handler, ms) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return 0;
    };
    WindowPlatformService.prototype.clearInterval = function (intervalId) { };
    WindowPlatformService = __decorate([
        core_1.Injectable()
    ], WindowPlatformService);
    return WindowPlatformService;
}());
exports.WindowPlatformService = WindowPlatformService;
var WindowService = /** @class */ (function () {
    function WindowService(_platformWindow) {
        this._platformWindow = _platformWindow;
    }
    Object.defineProperty(WindowService.prototype, "navigator", {
        get: function () {
            return this._platformWindow.navigator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "location", {
        get: function () {
            return this._platformWindow.location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "process", {
        get: function () {
            return this._platformWindow.process;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "require", {
        get: function () {
            return this._platformWindow.require;
        },
        enumerable: true,
        configurable: true
    });
    WindowService.prototype.alert = function (msg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this._platformWindow.alert(msg);
            if (utils_1.isObject(result) && result.then) {
                // console.log('WindowService -- using result.then promise');
                result.then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    WindowService.prototype.confirm = function (msg, action /* used for fancyalerts on mobile*/) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = _this._platformWindow.confirm(msg, utils_1.isNativeScript() ? action : undefined);
            if (utils_1.isObject(result) && result.then) {
                result.then(resolve, reject);
            }
            else if (result) {
                resolve();
            }
            else {
                reject();
            }
        });
    };
    WindowService.prototype.setTimeout = function (handler, timeout) {
        return this._platformWindow.setTimeout(handler, timeout);
    };
    WindowService.prototype.clearTimeout = function (timeoutId) {
        return this._platformWindow.clearTimeout(timeoutId);
    };
    WindowService.prototype.setInterval = function (handler, ms) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return this._platformWindow.setInterval(handler, ms, args);
    };
    WindowService.prototype.clearInterval = function (intervalId) {
        return this._platformWindow.clearInterval(intervalId);
    };
    WindowService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [WindowPlatformService])
    ], WindowService);
    return WindowService;
}());
exports.WindowService = WindowService;


/***/ }),

/***/ "../../libs/features/index.ts":
/*!***********************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/features/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ui */ "../../libs/features/ui/index.ts"));


/***/ }),

/***/ "../../libs/features/ui/base/header.base-component.ts":
/*!***********************************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/features/ui/base/header.base-component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// libs
var base_1 = __webpack_require__(/*! @kmeal-frontend/core/base */ "../../libs/core/base/index.ts");
var HeaderBaseComponent = /** @class */ (function (_super) {
    __extends(HeaderBaseComponent, _super);
    function HeaderBaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tappedRight = new core_1.EventEmitter();
        return _this;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderBaseComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderBaseComponent.prototype, "rightButton", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HeaderBaseComponent.prototype, "tappedRight", void 0);
    return HeaderBaseComponent;
}(base_1.BaseComponent));
exports.HeaderBaseComponent = HeaderBaseComponent;


/***/ }),

/***/ "../../libs/features/ui/base/index.ts":
/*!*******************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/features/ui/base/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./header.base-component */ "../../libs/features/ui/base/header.base-component.ts"));


/***/ }),

/***/ "../../libs/features/ui/index.ts":
/*!**************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/features/ui/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../libs/features/ui/base/index.ts"));
var ui_module_1 = __webpack_require__(/*! ./ui.module */ "../../libs/features/ui/ui.module.ts");
exports.UISharedModule = ui_module_1.UISharedModule;


/***/ }),

/***/ "../../libs/features/ui/pipes/date-order.pipe.ts":
/*!******************************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/features/ui/pipes/date-order.pipe.ts ***!
  \******************************************************************************/
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
var DateOrderPipe = /** @class */ (function () {
    function DateOrderPipe() {
    }
    DateOrderPipe.prototype.transform = function (value, sortBy) {
        if (value) {
            return value.sort(function (a, b) {
                if (!a[sortBy]) {
                    throw new Error("Incorrect orderByDate property");
                }
                var dateA = new Date(a[sortBy]).getTime();
                var dateB = new Date(b[sortBy]).getTime();
                return dateB - dateA;
            });
        }
    };
    DateOrderPipe = __decorate([
        core_1.Pipe({
            name: 'orderByDate',
            pure: true
        })
    ], DateOrderPipe);
    return DateOrderPipe;
}());
exports.DateOrderPipe = DateOrderPipe;


/***/ }),

/***/ "../../libs/features/ui/pipes/index.ts":
/*!********************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/features/ui/pipes/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var date_order_pipe_1 = __webpack_require__(/*! ./date-order.pipe */ "../../libs/features/ui/pipes/date-order.pipe.ts");
exports.PIPES = [date_order_pipe_1.DateOrderPipe];


/***/ }),

/***/ "../../libs/features/ui/ui.module.ts":
/*!******************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/features/ui/ui.module.ts ***!
  \******************************************************************/
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
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var pipes_1 = __webpack_require__(/*! ./pipes */ "../../libs/features/ui/pipes/index.ts");
var MODULES = [core_2.TranslateModule];
var UISharedModule = /** @class */ (function () {
    function UISharedModule() {
    }
    UISharedModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            declarations: pipes_1.PIPES.slice(),
            exports: MODULES.concat(pipes_1.PIPES)
        })
    ], UISharedModule);
    return UISharedModule;
}());
exports.UISharedModule = UISharedModule;


/***/ }),

/***/ "../../libs/utils/angular.ts":
/*!**********************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/utils/angular.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import " + moduleName + " in the AppModule only.");
    }
}
exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;


/***/ }),

/***/ "../../libs/utils/index.ts":
/*!********************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/utils/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./angular */ "../../libs/utils/angular.ts"));
__export(__webpack_require__(/*! ./objects */ "../../libs/utils/objects.ts"));
__export(__webpack_require__(/*! ./platform */ "../../libs/utils/platform.ts"));


/***/ }),

/***/ "../../libs/utils/objects.ts":
/*!**********************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/utils/objects.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = function (arg) {
    return typeof arg === 'string';
};
exports.isObject = function (arg) {
    return arg && typeof arg === 'object';
};


/***/ }),

/***/ "../../libs/utils/platform.ts":
/*!***********************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/libs/utils/platform.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * NativeScript helpers
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determine if running on native iOS mobile app
 */
function isIOS() {
    return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
}
exports.isIOS = isIOS;
/**
 * Determine if running on native Android mobile app
 */
function isAndroid() {
    return typeof android !== 'undefined' && typeof java !== 'undefined';
}
exports.isAndroid = isAndroid;
/**
 * Determine if running on native iOS or Android mobile app
 */
function isNativeScript() {
    return isIOS() || isAndroid();
}
exports.isNativeScript = isNativeScript;
/**
 * Electron helpers
 */
function isElectron() {
    return typeof window !== 'undefined' && window.process && window.process.type;
}
exports.isElectron = isElectron;


/***/ }),

/***/ "../../xplat/web/core/base/app.base-component.ts":
/*!******************************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/xplat/web/core/base/app.base-component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = __webpack_require__(/*! @kmeal-frontend/core */ "../../libs/core/index.ts");
var AppBaseComponent = /** @class */ (function (_super) {
    __extends(AppBaseComponent, _super);
    function AppBaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppBaseComponent;
}(core_1.BaseComponent));
exports.AppBaseComponent = AppBaseComponent;


/***/ }),

/***/ "../../xplat/web/core/base/index.ts":
/*!*****************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/xplat/web/core/base/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./app.base-component */ "../../xplat/web/core/base/app.base-component.ts"));


/***/ }),

/***/ "../../xplat/web/core/core.module.ts":
/*!******************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/xplat/web/core/core.module.ts ***!
  \******************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
// libs
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var http_loader_1 = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
var utils_1 = __webpack_require__(/*! @kmeal-frontend/utils */ "../../libs/utils/index.ts");
var core_3 = __webpack_require__(/*! @kmeal-frontend/core */ "../../libs/core/index.ts");
// bring in custom web services here...
// factories
function winFactory() {
    return window;
}
exports.winFactory = winFactory;
function platformLangFactory() {
    var browserLang = window.navigator.language || 'en'; // fallback English
    // browser language has 2 codes, ex: 'en-US'
    return browserLang.split('-')[0];
}
exports.platformLangFactory = platformLangFactory;
function createTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, "./assets/i18n/", '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var FooCoreModule = /** @class */ (function () {
    function FooCoreModule(parentModule) {
        utils_1.throwIfAlreadyLoaded(parentModule, 'FooCoreModule');
    }
    FooCoreModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                core_3.CoreModule.forRoot([
                    {
                        provide: core_3.PlatformLanguageToken,
                        useFactory: platformLangFactory
                    },
                    {
                        provide: core_3.WindowPlatformService,
                        useFactory: winFactory
                    }
                ]),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [http_1.HttpClient]
                    }
                })
            ]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [FooCoreModule])
    ], FooCoreModule);
    return FooCoreModule;
}());
exports.FooCoreModule = FooCoreModule;


/***/ }),

/***/ "../../xplat/web/core/index.ts":
/*!************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/xplat/web/core/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./base */ "../../xplat/web/core/base/index.ts"));
var core_module_1 = __webpack_require__(/*! ./core.module */ "../../xplat/web/core/core.module.ts");
exports.FooCoreModule = core_module_1.FooCoreModule;


/***/ }),

/***/ "../../xplat/web/features/index.ts":
/*!****************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/xplat/web/features/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ui */ "../../xplat/web/features/ui/index.ts"));


/***/ }),

/***/ "../../xplat/web/features/ui/index.ts":
/*!*******************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/xplat/web/features/ui/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ui_module_1 = __webpack_require__(/*! ./ui.module */ "../../xplat/web/features/ui/ui.module.ts");
exports.UIModule = ui_module_1.UIModule;


/***/ }),

/***/ "../../xplat/web/features/ui/ui.module.ts":
/*!***********************************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/xplat/web/features/ui/ui.module.ts ***!
  \***********************************************************************/
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
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
// libs
var features_1 = __webpack_require__(/*! @kmeal-frontend/features */ "../../libs/features/index.ts");
var MODULES = [
    common_1.CommonModule,
    router_1.RouterModule,
    forms_1.FormsModule,
    forms_1.ReactiveFormsModule,
    features_1.UISharedModule
];
var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            exports: MODULES.slice()
        })
    ], UIModule);
    return UIModule;
}());
exports.UIModule = UIModule;


/***/ }),

/***/ "../../xplat/web/index.ts":
/*!*******************************************************!*\
  !*** C:/karma-meal/kmeal/frontend/xplat/web/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./core */ "../../xplat/web/core/index.ts"));
__export(__webpack_require__(/*! ./features */ "../../xplat/web/features/index.ts"));


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/dish/dish.module": [
		"./src/app/pages/dish/dish.module.ts",
		"default~pages-dish-dish-module~pages-home-home-module~pages-restaurant-res-module",
		"pages-dish-dish-module"
	],
	"./pages/error/error.module": [
		"./src/app/pages/error/error.module.ts",
		"pages-error-error-module"
	],
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"default~pages-dish-dish-module~pages-home-home-module~pages-restaurant-res-module",
		"default~pages-home-home-module~pages-restaurant-res-module",
		"pages-home-home-module"
	],
	"./pages/profile/profile.module": [
		"./src/app/pages/profile/profile.module.ts",
		"pages-profile-profile-module"
	],
	"./pages/restaurant/res.module": [
		"./src/app/pages/restaurant/res.module.ts",
		"default~pages-dish-dish-module~pages-home-home-module~pages-restaurant-res-module",
		"default~pages-home-home-module~pages-restaurant-res-module",
		"pages-restaurant-res-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
exports.AppRoutes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    }, {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule',
    }, {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule',
    }, {
        path: 'restaurant',
        loadChildren: './pages/restaurant/res.module#ResModule',
    }, {
        path: 'dish',
        loadChildren: './pages/dish/dish.module#DishModule',
    }, {
        path: '**',
        loadChildren: './pages/error/error.module#ErrorModule',
    },
];
exports.routing = router_1.RouterModule.forRoot(exports.AppRoutes, { enableTracing: false });


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// xplat
var web_1 = __webpack_require__(/*! @kmeal-frontend/web */ "../../xplat/web/index.ts");
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super.call(this) || this;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}(web_1.AppBaseComponent));
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
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
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
// libs
var core_2 = __webpack_require__(/*! @kmeal-frontend/core */ "../../libs/core/index.ts");
// app
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var shared_module_1 = __webpack_require__(/*! ./features/shared/shared.module */ "./src/app/features/shared/shared.module.ts");
var apollo_angular_1 = __webpack_require__(/*! apollo-angular */ "../../node_modules/apollo-angular/fesm5/ng.apollo.js");
var apollo_angular_link_http_1 = __webpack_require__(/*! apollo-angular-link-http */ "../../node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
var apollo_cache_inmemory_1 = __webpack_require__(/*! apollo-cache-inmemory */ "../../node_modules/apollo-cache-inmemory/lib/index.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_module_1.routing,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule,
                apollo_angular_1.ApolloModule,
                apollo_angular_link_http_1.HttpLinkModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/kmeal'
                },
                {
                    provide: 'apiBase',
                    useValue: core_2.environment.api_url
                },
                {
                    provide: apollo_angular_1.APOLLO_OPTIONS,
                    useFactory: function (httpLink) {
                        return {
                            cache: new apollo_cache_inmemory_1.InMemoryCache(),
                            link: httpLink.create({
                                uri: core_2.environment.graphql_url,
                            })
                        };
                    },
                    deps: [apollo_angular_link_http_1.HttpLink]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/features/shared/shared.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/shared/shared.module.ts ***!
  \**************************************************/
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var ngx_google_places_autocomplete_1 = __webpack_require__(/*! ngx-google-places-autocomplete */ "../../node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
//import { FlexLayoutModule } from '@angular/flex-layout';
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var carousel_1 = __webpack_require__(/*! @ngu/carousel */ "../../node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatStepperModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                carousel_1.NguCarouselModule,
                ngx_google_places_autocomplete_1.GooglePlaceModule
            ],
            exports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatStepperModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                carousel_1.NguCarouselModule,
                ngx_google_places_autocomplete_1.GooglePlaceModule
            ],
            declarations: [],
            providers: [material_1.MatIconRegistry]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
// libs
var core_2 = __webpack_require__(/*! @kmeal-frontend/core */ "../../libs/core/index.ts");
// app
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
if (core_2.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\karma-meal\kmeal\frontend\apps\web-kmeal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map