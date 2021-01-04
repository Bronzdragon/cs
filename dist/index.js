"use strict";
exports.__esModule = true;
function cs() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return elements.flat(Infinity)
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
}
exports["default"] = cs;
//# sourceMappingURL=index.js.map