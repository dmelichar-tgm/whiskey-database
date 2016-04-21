System.register(['angular2/core', 'angular2/router', './whiskey-detail.component', './whiskey.service', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, whiskey_detail_component_1, whiskey_service_1, http_1, Observable_1;
    var WhiskeysComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (whiskey_detail_component_1_1) {
                whiskey_detail_component_1 = whiskey_detail_component_1_1;
            },
            function (whiskey_service_1_1) {
                whiskey_service_1 = whiskey_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            WhiskeysComponent = (function () {
                function WhiskeysComponent(_router, _whiskeyService, http) {
                    this._router = _router;
                    this._whiskeyService = _whiskeyService;
                    this.http = http;
                    this._whiskeysUrl = 'app/whiskeys.json'; // URL to web api
                }
                WhiskeysComponent.prototype.getWhiskeys = function () {
                    return this.http.get(this._whiskeysUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                WhiskeysComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getWhiskeys().subscribe(function (whiskeys) { return _this.whiskeys = whiskeys; });
                };
                WhiskeysComponent.prototype.onSelect = function (whiskey) { this.selectedWhiskey = whiskey; };
                WhiskeysComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['WhiskeyDetail', { id: this.selectedWhiskey.id }]);
                };
                WhiskeysComponent.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                WhiskeysComponent.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                WhiskeysComponent = __decorate([
                    core_1.Component({
                        selector: 'my-whiskeys',
                        templateUrl: 'app/whiskeys.component.html',
                        styleUrls: ['app/whiskeys.component.css'],
                        directives: [whiskey_detail_component_1.WhiskeyDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, whiskey_service_1.WhiskeyService, http_1.Http])
                ], WhiskeysComponent);
                return WhiskeysComponent;
            }());
            exports_1("WhiskeysComponent", WhiskeysComponent);
        }
    }
});
//# sourceMappingURL=whiskeys.component.js.map