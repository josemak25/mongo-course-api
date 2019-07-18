"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var NewCourseSchema = {
    name: joi_1.default.string()
        .min(5)
        .max(50)
        .required(),
    author: joi_1.default.string()
        .min(5)
        .max(50)
        .required(),
    tags: joi_1.default.array()
        .items(joi_1.default.string()
        .min(3)
        .max(20)
        .required())
        .min(1)
        .max(8)
        .required(),
    amount: joi_1.default.string()
        .min(2)
        .max(10)
        .required(),
    level: joi_1.default.string()
        .min(5)
        .max(20)
        .required()
};
var UpdateCourseSchema = {
    name: joi_1.default.string()
        .min(5)
        .max(50)
        .optional(),
    author: joi_1.default.string()
        .min(5)
        .max(50)
        .optional(),
    tags: joi_1.default.array()
        .items(joi_1.default.string()
        .min(3)
        .max(20)
        .optional())
        .min(1)
        .max(8)
        .optional(),
    amount: joi_1.default.string()
        .min(2)
        .max(10)
        .optional(),
    level: joi_1.default.string()
        .min(5)
        .max(20)
        .optional()
};
exports.validateNewCourse = function (course) {
    return joi_1.default.validate(course, NewCourseSchema, {
        abortEarly: false,
        stripUnknown: true,
        skipFunctions: true
    });
};
exports.validateUpdateCourse = function (course) {
    if (!Object.keys(course).length) {
        var value = null;
        var errorObject = {
            message: "All Fields can't be empty",
            path: ['Body'],
            type: 'Error'
        };
        var error = {
            details: [errorObject]
        };
        return { error: error, value: value };
    }
    return joi_1.default.validate(course, UpdateCourseSchema, {
        abortEarly: false,
        stripUnknown: true,
        skipFunctions: true
    });
};
//# sourceMappingURL=validateCourse.js.map