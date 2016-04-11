System.register(['angular2/core', 'angular2/router', './whiskey', './whiskey.service'], function(exports_1, context_1) {
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
    var core_1, router_1, whiskey_1, whiskey_service_1;
    var WhiskeyDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (whiskey_1_1) {
                whiskey_1 = whiskey_1_1;
            },
            function (whiskey_service_1_1) {
                whiskey_service_1 = whiskey_service_1_1;
            }],
        execute: function() {
            WhiskeyDetailComponent = (function () {
                function WhiskeyDetailComponent(_whiskeyService, _routeParams) {
                    this._whiskeyService = _whiskeyService;
                    this._routeParams = _routeParams;
                }
                WhiskeyDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._whiskeyService.getWhiskey(id)
                        .then(function (whiskey) { return _this.whiskey = whiskey; });
                };
                WhiskeyDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', whiskey_1.Whiskey)
                ], WhiskeyDetailComponent.prototype, "whiskey", void 0);
                WhiskeyDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-whiskey-detail',
                        templateUrl: 'app/whiskey-detail.component.html',
                        styleUrls: ['app/whiskey-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [whiskey_service_1.WhiskeyService, router_1.RouteParams])
                ], WhiskeyDetailComponent);
                return WhiskeyDetailComponent;
            }());
            exports_1("WhiskeyDetailComponent", WhiskeyDetailComponent);
        }
    }
});
//# sourceMappingURL=whiskey-detail.component.js.map