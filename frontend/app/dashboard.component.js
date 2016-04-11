System.register(['angular2/core', 'angular2/router', './whiskey.service', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, router_1, whiskey_service_1, http_1, Observable_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            DashboardComponent = (function () {
                function DashboardComponent(_router, _whiskeyService, http) {
                    this._router = _router;
                    this._whiskeyService = _whiskeyService;
                    this.http = http;
                    this.whiskeys = [];
                    this._whiskeysUrl = 'app/whiskeys.json'; // URL to web api
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    return this.http.get(this._whiskeysUrl)
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return _this.whiskeys = data.slice(1, 5); }) // eyeball results in the console
                        .catch(this.handleError);
                };
                DashboardComponent.prototype.gotoDetail = function (whiskey) {
                    var link = ['WhiskeyDetail', { id: whiskey.id }];
                    this._router.navigate(link);
                };
                DashboardComponent.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/dashboard.component.html',
                        styleUrls: ['app/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, whiskey_service_1.WhiskeyService, http_1.Http])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map