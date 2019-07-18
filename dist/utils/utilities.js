"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructError = function (error) {
    return error.reduce(function (acc, err) {
        acc[err.path[0]] = err.message.replace(/"/g, '');
        return acc;
    }, {});
};
//# sourceMappingURL=utilities.js.map