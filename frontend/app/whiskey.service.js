System.register(['./mock-whiskeys', 'angular2/core', 'rxjs/Observable', 'angular2/http'], function(exports_1, context_1) {
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
    var mock_whiskeys_1, core_1, Observable_1, http_1, http_2;
    var WhiskeyService;
    return {
        setters:[
            function (mock_whiskeys_1_1) {
                mock_whiskeys_1 = mock_whiskeys_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            }],
        execute: function() {
            WhiskeyService = (function () {
                function WhiskeyService(http) {
                    this.http = http;
                    // private _whiskeysUrl = 'app/whiskeys.json'; // URL to JSON file
                    this._whiskeysUrl = 'app/whiskeys.json'; // URL to web ap
                }
                WhiskeyService.prototype.getWhiskeys = function () {
                    return this.http.get(this._whiskeysUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                WhiskeyService.prototype.addWhiskey = function (name) {
                    var body = JSON.stringify({ name: name });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._whiskeysUrl, body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                WhiskeyService.prototype.getWhiskeysSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_whiskeys_1.WHISKEYS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                WhiskeyService.prototype.getWhiskey = function (id) {
                    var whiskeys = this.http.get(this._whiskeysUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                    var whiskey = whiskeys.filter(function (whiskey) { return whiskey.id === id; });
                    return whiskey;
                };
                WhiskeyService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                WhiskeyService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                WhiskeyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WhiskeyService);
                return WhiskeyService;
            }());
            exports_1("WhiskeyService", WhiskeyService);
        }
    }
});
//# sourceMappingURL=whiskey.service.js.map