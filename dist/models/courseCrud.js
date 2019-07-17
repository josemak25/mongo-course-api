"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = __importDefault(require("./course"));
exports.findAll = function () {
    return course_1.default.find({}).exec();
};
exports.findOne = function (id) {
    return course_1.default.findById(id);
};
//# sourceMappingURL=courseCrud.js.map