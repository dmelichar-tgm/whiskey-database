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
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); })
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
                    return Promise.resolve(mock_whiskeys_1.WHISKEYS).then(function (whiskeys) { return whiskeys.filter(function (whiskey) { return whiskey.id === id; })[0]; });
                };
                WhiskeyService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
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