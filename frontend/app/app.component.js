System.register(['angular2/core', 'angular2/router', './whiskey.service', './dashboard.component', './whiskeys.component', './whiskey-detail.component', 'angular2/http', 'a2-in-memory-web-api/core', './whiskey-data'], function(exports_1, context_1) {
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
    var core_1, router_1, whiskey_service_1, dashboard_component_1, whiskeys_component_1, whiskey_detail_component_1, core_2, http_1, core_3, whiskey_data_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (whiskey_service_1_1) {
                whiskey_service_1 = whiskey_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (whiskeys_component_1_1) {
                whiskeys_component_1 = whiskeys_component_1_1;
            },
            function (whiskey_detail_component_1_1) {
                whiskey_detail_component_1 = whiskey_detail_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (whiskey_data_1_1) {
                whiskey_data_1 = whiskey_data_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Whiskeys';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n      <a [routerLink]=\"['Whiskeys']\">Whiskeys</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            whiskey_service_1.WhiskeyService,
                            // in-memory web api providers
                            core_2.provide(http_1.XHRBackend, { useClass: core_3.InMemoryBackendService }),
                            core_2.provide(core_3.SEED_DATA, { useClass: whiskey_data_1.WhiskeyData }) // in-mem server data
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'WhiskeyDetail',
                            component: whiskey_detail_component_1.WhiskeyDetailComponent
                        },
                        {
                            path: '/whiskeys',
                            name: 'Whiskeys',
                            component: whiskeys_component_1.WhiskeysComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map