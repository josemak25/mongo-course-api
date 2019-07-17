"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var courseSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    amount: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    }
});
exports.default = mongoose_1.default.model('course', courseSchema);
//# sourceMappingURL=course.js.map