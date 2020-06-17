"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoIt = exports.JsonType = void 0;
var JsonType;
(function (JsonType) {
    JsonType[JsonType["Primitive"] = 1] = "Primitive";
    JsonType[JsonType["Array"] = 2] = "Array";
    JsonType[JsonType["Object"] = 3] = "Object";
    JsonType[JsonType["String"] = 4] = "String";
    JsonType[JsonType["Number"] = 5] = "Number";
    JsonType[JsonType["Boolean"] = 6] = "Boolean";
    JsonType[JsonType["Null"] = 7] = "Null";
})(JsonType = exports.JsonType || (exports.JsonType = {}));
var DoIt;
(function (DoIt) {
    DoIt[DoIt["Before"] = 1] = "Before";
    DoIt[DoIt["After"] = 2] = "After";
    DoIt[DoIt["Twice"] = 3] = "Twice";
})(DoIt = exports.DoIt || (exports.DoIt = {}));
;
//# sourceMappingURL=interfaces.js.map