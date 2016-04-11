System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WhiskeyData;
    return {
        setters:[],
        execute: function() {
            WhiskeyData = (function () {
                function WhiskeyData() {
                }
                WhiskeyData.prototype.createDb = function () {
                    var whiskeys = [
                        { "id": 1, "name": "Jack Daniels" },
                        { "id": 2, "name": "Jameson" },
                        { "id": 3, "name": "Teeling " },
                        { "id": 4, "name": "Tachers" },
                        { "id": 5, "name": "Locke" },
                        { "id": 6, "name": "Glenfiddich" },
                        { "id": 7, "name": "Redbreast" },
                        { "id": 8, "name": "Bushmills" }
                    ];
                    return { whiskeys: whiskeys };
                };
                return WhiskeyData;
            }());
            exports_1("WhiskeyData", WhiskeyData);
        }
    }
});
//# sourceMappingURL=whiskey-data.js.map