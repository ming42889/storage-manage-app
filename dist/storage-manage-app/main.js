(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/address/address-form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/address/address-form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>{{title}}</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <mat-form-field style=\"width:100%\">\r\n            <input matInput placeholder=\"company\" [(ngModel)]=\"address.company\" (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:100%\">\r\n            <input matInput placeholder=\"street1\" [(ngModel)]=\"address.street1\" (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:100%\">\r\n            <input matInput placeholder=\"street2\" [(ngModel)]=\"address.street2\" (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"city\" [(ngModel)]=\"address.city\" (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"state\" [(ngModel)]=\"address.state\" (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"zip\" [(ngModel)]=\"address.zip\" (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"phone\" [(ngModel)]=\"address.phone\" (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/address/address-form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/address/address-form.component.ts ***!
  \***************************************************/
/*! exports provided: AddressFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressFormComponent", function() { return AddressFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_easy_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/easy-post.service */ "./src/app/shared/easy-post.service.ts");




var AddressFormComponent = /** @class */ (function () {
    function AddressFormComponent(http, easyPostService) {
        this.http = http;
        this.easyPostService = easyPostService;
        this.address = {};
        this.title = '';
        this.addressChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddressFormComponent.prototype.onModelChange = function () {
        this.addressChange.emit(this.address);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddressFormComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddressFormComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddressFormComponent.prototype, "addressChange", void 0);
    AddressFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-form',
            template: __webpack_require__(/*! ./address-form.component.html */ "./src/app/address/address-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_easy_post_service__WEBPACK_IMPORTED_MODULE_3__["EasyPostService"]])
    ], AddressFormComponent);
    return AddressFormComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shipment_shipment_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipment/shipment-form.component */ "./src/app/shipment/shipment-form.component.ts");




var routes = [
    { path: '', redirectTo: '/create-shipment', pathMatch: 'full' },
    { path: 'create-shipment', component: _shipment_shipment_form_component__WEBPACK_IMPORTED_MODULE_3__["ShipmentFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _address_address_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address/address-form.component */ "./src/app/address/address-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _shared_easy_post_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/easy-post.service */ "./src/app/shared/easy-post.service.ts");
/* harmony import */ var _shipment_shipment_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shipment/shipment-form.component */ "./src/app/shipment/shipment-form.component.ts");
/* harmony import */ var _customsItem_customs_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customsItem/customs-item.component */ "./src/app/customsItem/customs-item.component.ts");

















var MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"],
    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["PlatformModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"],
    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_13__["ObserversModule"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _address_address_form_component__WEBPACK_IMPORTED_MODULE_6__["AddressFormComponent"],
                _shipment_shipment_form_component__WEBPACK_IMPORTED_MODULE_15__["ShipmentFormComponent"],
                _customsItem_customs_item_component__WEBPACK_IMPORTED_MODULE_16__["CustomsItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                MATERIAL_MODULES
            ],
            providers: [_shared_easy_post_service__WEBPACK_IMPORTED_MODULE_14__["EasyPostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customsItem/customs-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/customsItem/customs-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <mat-card-title>{{title}}</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <mat-form-field style=\"width:75%\">\r\n            <input matInput placeholder=\"description\" [(ngModel)]=\"customsItem.description\"\r\n                (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"quantity\" type=\"number\" [(ngModel)]=\"customsItem.quantity\"\r\n                (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"weight\" type=\"number\" [(ngModel)]=\"customsItem.weight\"\r\n                (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"value\" [(ngModel)]=\"customsItem.value\" (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"hs_tariff_number\" [(ngModel)]=\"customsItem.hs_tariff_number\"\r\n                (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:25%\">\r\n            <input matInput placeholder=\"origin_country\" [(ngModel)]=\"customsItem.origin_country\"\r\n                (ngModelChange)=\"onModelChange()\">\r\n        </mat-form-field>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/customsItem/customs-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customsItem/customs-item.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomsItemComponent", function() { return CustomsItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomsItemComponent = /** @class */ (function () {
    function CustomsItemComponent() {
        this.customsItem = {};
        this.title = '';
        this.customsItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CustomsItemComponent.prototype.onModelChange = function () {
        this.customsItemChange.emit(this.customsItem);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomsItemComponent.prototype, "customsItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomsItemComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomsItemComponent.prototype, "customsItemChange", void 0);
    CustomsItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customs-item',
            template: __webpack_require__(/*! ./customs-item.component.html */ "./src/app/customsItem/customs-item.component.html")
        })
    ], CustomsItemComponent);
    return CustomsItemComponent;
}());



/***/ }),

/***/ "./src/app/shared/easy-post.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/easy-post.service.ts ***!
  \*********************************************/
/*! exports provided: EasyPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyPostService", function() { return EasyPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EasyPostService = /** @class */ (function () {
    function EasyPostService(http) {
        this.http = http;
        this.baseUrl = 'https://lkjlkdjfls.herokuapp.com/api';
    }
    // baseUrl = 'http://127.0.0.1:4200/api';
    EasyPostService.prototype.createCustomsInfo = function (customsInfo, customsItems) {
        return this.http.post(this.baseUrl +
            '/create-customsInfo', {
            customsInfo: customsInfo,
            customsItems: customsItems
        });
    };
    EasyPostService.prototype.createParcel = function (parcel) {
        return this.http.post(this.baseUrl +
            '/create-parcel', parcel);
    };
    EasyPostService.prototype.createCustomsItem = function (customsItem) {
        return this.http.post(this.baseUrl +
            '/create-customsItem', customsItem);
    };
    EasyPostService.prototype.createAddress = function (address) {
        return this.http.post(this.baseUrl +
            '/create-address', address);
    };
    EasyPostService.prototype.createShipment = function (shipment) {
        return this.http.post(this.baseUrl +
            '/create-shipment', shipment);
    };
    EasyPostService.prototype.regenerateRates = function (shipmentId) {
        return this.http.get(this.baseUrl +
            '/regenerate-rates/' + shipmentId);
    };
    EasyPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EasyPostService);
    return EasyPostService;
}());



/***/ }),

/***/ "./src/app/shipment/shipment-form.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shipment/shipment-form.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:50%;display: inline-block;\">\r\n    <div style=\"padding:5px\">\r\n        <app-address-form [title]=\"'From Address'\" [(address)]=\"shipment.fromAddress\">\r\n        </app-address-form>\r\n    </div>\r\n</div>\r\n\r\n<div style=\"width:50%;display: inline-block;\">\r\n    <div style=\"padding:5px\">\r\n        <app-address-form [title]=\"'To Address'\" [(address)]=\"shipment.toAddress\"></app-address-form>\r\n    </div>\r\n</div>\r\n<div style=\"padding:5px\">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Customs Info</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <mat-form-field style=\"width:50%\">\r\n                <mat-select placeholder=\"eel_pfc\" [(ngModel)]=\"shipment.customsInfo.eel_pfc\">\r\n                    <mat-option *ngFor=\"let type of ['NOEEI 30.37(a)' , 'AES X20120502123456']\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <span style=\"width:50%\">\r\n                <mat-checkbox [(ngModel)]=\"shipment.customsInfo.customs_certify\">customs_certify</mat-checkbox>\r\n            </span>\r\n            <mat-form-field style=\"width:50%\">\r\n                <input matInput placeholder=\"customs_signer\" [(ngModel)]=\"shipment.customsInfo.customs_signer\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:50%\">\r\n                <mat-select placeholder=\"contents_type\" [(ngModel)]=\"shipment.customsInfo.contents_type\">\r\n                    <mat-option\r\n                        *ngFor=\"let type of ['documents', 'gift', 'merchandise', 'returned_goods', 'sample',  'other']\"\r\n                        [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:50%\">\r\n                <input matInput placeholder=\"contents_explanation\"\r\n                    [(ngModel)]=\"shipment.customsInfo.contents_explanation\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:50%\">\r\n                <mat-select placeholder=\"restriction_type\" [(ngModel)]=\"shipment.customsInfo.restriction_type\">\r\n                    <mat-option\r\n                        *ngFor=\"let type of ['none', 'other', 'quarantine',  'sanitary_phytosanitary_inspection']\"\r\n                        [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:50%\">\r\n                <input matInput placeholder=\"restriction_comments\"\r\n                    [(ngModel)]=\"shipment.customsInfo.restriction_comments\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:50%\">\r\n                <mat-select placeholder=\"non_delivery_option\" [(ngModel)]=\"shipment.customsInfo.non_delivery_option\">\r\n                    <mat-option *ngFor=\"let type of ['abandon' , 'return']\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-card-subtitle style=\"font-weight: bold\">customs Item</mat-card-subtitle>\r\n            <mat-form-field style=\"width:75%\">\r\n                <input matInput placeholder=\"description\" [(ngModel)]=\"customsItem.description\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:25%\">\r\n                <input matInput placeholder=\"quantity\" type=\"number\" [(ngModel)]=\"customsItem.quantity\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:25%\">\r\n                <input matInput placeholder=\"weight\" type=\"number\" [(ngModel)]=\"customsItem.weight\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:25%\">\r\n                <input matInput placeholder=\"value\" [(ngModel)]=\"customsItem.value\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:25%\">\r\n                <input matInput placeholder=\"hs_tariff_number\" [(ngModel)]=\"customsItem.hs_tariff_number\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:25%\">\r\n                <mat-select placeholder=\"origin_country\" [(ngModel)]=\"customsItem.origin_country\">\r\n                    <mat-option *ngFor=\"let type of countries\" [value]=\"type\">\r\n                        {{type}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n<div style=\"padding:5px\">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Parcel</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <mat-form-field style=\"width:25%\">\r\n                <input matInput placeholder=\"length\" type=\"number\" [(ngModel)]=\"shipment.parcel.length\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:25%\">\r\n                <input matInput placeholder=\"width\" type=\"number\" [(ngModel)]=\"shipment.parcel.width\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:25%\">\r\n                <input matInput placeholder=\"height\" type=\"number\" [(ngModel)]=\"shipment.parcel.height\">\r\n            </mat-form-field>\r\n            <mat-form-field style=\"width:25%\">\r\n                <input matInput placeholder=\"weight\" type=\"number\" [(ngModel)]=\"shipment.parcel.weight\">\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n<button mat-raised-button color=\"primary\" (click)=\"createShipment()\">Create Shipment</button>\r\n<button mat-raised-button color=\"primary\" (click)=\"regenerateRates()\">Regenerate Rates</button>\r\n\r\n\r\n<div *ngIf=\"result\">\r\n    <!-- <div *ngFor=\"let rate of result.rates\">\r\n        rate\r\n    </div> -->\r\n    <table mat-table [dataSource]=\"result.rates\" class=\"mat-elevation-z8\" style=\"width:100%\">\r\n\r\n        <!--- Note that these columns can be defined in any order.\r\n            The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"carrier\">\r\n            <th mat-header-cell *matHeaderCellDef> carrier </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.carrier}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"service\">\r\n            <th mat-header-cell *matHeaderCellDef> service </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.service}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"rate\">\r\n            <th mat-header-cell *matHeaderCellDef> rate </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.rate}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"currency\">\r\n            <th mat-header-cell *matHeaderCellDef> currency </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.currency}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"retail_rate\">\r\n            <th mat-header-cell *matHeaderCellDef> retail_rate </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.retail_rate}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"retail_currency\">\r\n            <th mat-header-cell *matHeaderCellDef> retail_currency </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.retail_currency}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"list_rate\">\r\n            <th mat-header-cell *matHeaderCellDef> list_rate </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.list_rate}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"list_currency\">\r\n            <th mat-header-cell *matHeaderCellDef> list_currency </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.list_currency}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n</div>\r\n\r\n<div style=\"word-break: break-all;margin-top : 10px\">\r\n    {{toJSONString(result.rates)}}\r\n</div>\r\n\r\n<!-- <div style=\"width:50%;display: inline-block;\">\r\n    <div style=\"padding:5px\">\r\n        <app-customs-item [title]=\"'Customs Item'\" [(customsItem)]=\"shipment.customsItem\">\r\n        </app-customs-item>\r\n        <button mat-raised-button color=\"primary\"\r\n            (click)=\"createCustomsItem(shipment.customsItem, 'customsItem')\">create</button>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/shipment/shipment-form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shipment/shipment-form.component.ts ***!
  \*****************************************************/
/*! exports provided: ShipmentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentFormComponent", function() { return ShipmentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_easy_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/easy-post.service */ "./src/app/shared/easy-post.service.ts");




var ShipmentFormComponent = /** @class */ (function () {
    function ShipmentFormComponent(http, easyPostService) {
        this.http = http;
        this.easyPostService = easyPostService;
        this.displayedColumns = ['carrier', 'service', 'rate', 'currency', 'retail_rate', 'retail_currency', 'list_rate', 'list_currency'];
        this.customsItem = {
            origin_country: 'US',
        };
        this.shipment = {
            fromAddress: {
                company: null,
                street1: '417 Montgomery Street',
                street2: '5th Floor',
                city: 'San Francisco',
                state: 'CA',
                zip: '94104',
                country: 'US',
                phone: '4153334444',
            },
            toAddress: {
                company: null,
                street1: '179 N Harbor Dr',
                street2: null,
                city: 'Redondo Beach',
                state: 'CA',
                zip: '90277',
                country: 'US',
                phone: '4153334444',
            },
            customsInfo: {
                eel_pfc: 'NOEEI 30.37(a)',
                non_delivery_option: 'return'
            },
            parcel: {}
        };
        this.result = {};
        this.countries = ['BD', 'BE', 'BF', 'BG', 'BA', 'BB', 'WF', 'BL', 'BM', 'BN', 'BO',
            'BH', 'BI', 'BJ', 'BT', 'JM', 'BV', 'BW', 'WS', 'BQ', 'BR', 'BS', 'JE', 'BY', 'BZ', 'RU',
            'RW', 'RS', 'TL', 'RE', 'TM', 'TJ', 'RO', 'TK', 'GW', 'GU', 'GT', 'GS', 'GR', 'GQ', 'GP',
            'JP', 'GY', 'GG', 'GF', 'GE', 'GD', 'GB', 'GA', 'SV', 'GN', 'GM', 'GL', 'GI', 'GH', 'OM',
            'TN', 'JO', 'HR', 'HT', 'HU', 'HK', 'HN', 'HM', 'VE', 'PR', 'PS', 'PW', 'PT', 'SJ', 'PY',
            'IQ', 'PA', 'PF', 'PG', 'PE', 'PK', 'PH', 'PN', 'PL', 'PM', 'ZM', 'EH', 'EE', 'EG', 'ZA',
            'EC', 'IT', 'VN', 'SB', 'ET', 'SO', 'ZW', 'SA', 'ES', 'ER', 'ME', 'MD', 'MG', 'MF', 'MA',
            'MC', 'UZ', 'MM', 'ML', 'MO', 'MN', 'MH', 'MK', 'MU', 'MT', 'MW', 'MV', 'MQ', 'MP', 'MS',
            'MR', 'IM', 'UG', 'TZ', 'MY', 'MX', 'IL', 'FR', 'IO', 'SH', 'FI', 'FJ', 'FK', 'FM', 'FO',
            'NI', 'NL', 'NO', 'NA', 'VU', 'NC', 'NE', 'NF', 'NG', 'NZ', 'NP', 'NR', 'NU', 'CK', 'XK',
            'CI', 'CH', 'CO', 'CN', 'CM', 'CL', 'CC', 'CA', 'CG', 'CF', 'CD', 'CZ', 'CY', 'CX', 'CR',
            'CW', 'CV', 'CU', 'SZ', 'SY', 'SX', 'KG', 'KE', 'SS', 'SR', 'KI', 'KH', 'KN', 'KM', 'ST',
            'SK', 'KR', 'SI', 'KP', 'KW', 'SN', 'SM', 'SL', 'SC', 'KZ', 'KY', 'SG', 'SE', 'SD', 'DO',
            'DM', 'DJ', 'DK', 'VG', 'DE', 'YE', 'DZ', 'US', 'UY', 'YT', 'UM', 'LB', 'LC', 'LA', 'TV',
            'TW', 'TT', 'TR', 'LK', 'LI', 'LV', 'TO', 'LT', 'LU', 'LR', 'LS', 'TH', 'TF', 'TG', 'TD',
            'TC', 'LY', 'VA', 'VC', 'AE', 'AD', 'AG', 'AF', 'AI', 'VI', 'IS', 'IR', 'AM', 'AL', 'AO',
            'AQ', 'AS', 'AR', 'AU', 'AT', 'AW', 'IN', 'AX', 'AZ', 'IE', 'ID', 'UA', 'QA', 'MZ'];
    }
    ShipmentFormComponent.prototype.createAddress = function (address, saveToField) {
        this.easyPostService.createAddress(address)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ShipmentFormComponent.prototype.createCustomsItem = function (customsItem, saveToField) {
        this.easyPostService.createCustomsItem(customsItem)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ShipmentFormComponent.prototype.createCustomsInfo = function () {
        this.easyPostService.createCustomsInfo(this.shipment.customsInfo, [this.customsItem])
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ShipmentFormComponent.prototype.createParcel = function () {
        this.easyPostService.createParcel(this.shipment.parcel)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ShipmentFormComponent.prototype.createShipment = function () {
        var _this = this;
        this.shipment.customsItems = [this.customsItem];
        this.easyPostService.createShipment(this.shipment)
            .subscribe(function (result) {
            console.log(result);
            _this.result = result;
        });
    };
    ShipmentFormComponent.prototype.regenerateRates = function () {
        this.easyPostService.regenerateRates(this.result.id)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ShipmentFormComponent.prototype.toJSONString = function (obj) {
        return JSON.stringify(obj);
    };
    ShipmentFormComponent.prototype.create = function () {
        var _this = this;
        this.easyPostService.createAddress(this.shipment)
            .subscribe(function (result) {
            console.log(result);
            _this.result.content = JSON.stringify(result);
        });
    };
    ShipmentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipment-form',
            template: __webpack_require__(/*! ./shipment-form.component.html */ "./src/app/shipment/shipment-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_easy_post_service__WEBPACK_IMPORTED_MODULE_3__["EasyPostService"]])
    ], ShipmentFormComponent);
    return ShipmentFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\jsprojects\storage-manage-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map