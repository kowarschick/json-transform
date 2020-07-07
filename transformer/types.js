"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInitMap = exports.isRegExp = exports.isJsonFunction = exports.isJsonValue = exports.isJsonObject = exports.isJsonArray = exports.isJsonPrimitive = exports.isJsonNull = exports.isJsonBoolean = exports.isJsonNumber = exports.isJsonString = exports.JsonType = void 0;
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
function isJsonString(value) { return typeof value === 'string'; }
exports.isJsonString = isJsonString;
function isJsonNumber(value) { return Number.isFinite(value); }
exports.isJsonNumber = isJsonNumber;
function isJsonBoolean(value) { return typeof value === 'boolean'; }
exports.isJsonBoolean = isJsonBoolean;
function isJsonNull(value) { return value == null; }
exports.isJsonNull = isJsonNull;
function isJsonPrimitive(value) {
    const t = typeof value;
    return t == null || t === 'string' || t === 'number' || t === 'boolean';
}
exports.isJsonPrimitive = isJsonPrimitive;
function isJsonArray(value) { return Array.isArray(value); }
exports.isJsonArray = isJsonArray;
function isJsonObject(value) { return value != null && typeof value === 'object' && !Array.isArray(value); }
exports.isJsonObject = isJsonObject;
function isJsonValue(value) { return value != null && typeof value !== 'function'; }
exports.isJsonValue = isJsonValue;
function isJsonFunction(value) { return value != null && typeof value === 'function'; }
exports.isJsonFunction = isJsonFunction;
function isRegExp(value) { return value instanceof RegExp; }
exports.isRegExp = isRegExp;
function isInitMap(value) { return value != null && typeof value === 'object' && !Array.isArray(value); }
exports.isInitMap = isInitMap;
//# sourceMappingURL=types.js.map