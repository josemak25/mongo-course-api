"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var model = __importStar(require("../models/courseCrud"));
var validateCourse_1 = require("../middleware/validateCourse");
var utilities_1 = require("../utils/utilities");
exports.getCourses = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
    var courses;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, model.findAll()];
            case 1:
                courses = _a.sent();
                if (!courses.length) {
                    return [2 /*return*/, res.status(404).json({
                            message: 'No Record Found'
                        })];
                }
                return [2 /*return*/, res.status(200).json({
                        message: 'Successful',
                        courses: courses
                    })];
        }
    });
}); };
exports.getCourse = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, course, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model.findOne(id)];
            case 2:
                course = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: 'Successful',
                        course: course
                    })];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(404).json({
                        message: "No Course with ID " + id + " Found"
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createCourse = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, error, value, errMessage, course;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = validateCourse_1.validateNewCourse(req.body), error = _a.error, value = _a.value;
                if (error) {
                    errMessage = utilities_1.constructError(error.details);
                    return [2 /*return*/, res.status(403).json({
                            message: 'Unsuccessful',
                            name: 'ValidationError',
                            error: errMessage
                        })];
                }
                return [4 /*yield*/, model.createOne(value)];
            case 1:
                course = _b.sent();
                return [2 /*return*/, res.status(201).json({
                        message: 'Successful',
                        course: course
                    })];
        }
    });
}); };
exports.updateCourse = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, _a, error, value, errMessage, course, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = validateCourse_1.validateUpdateCourse(req.body), error = _a.error, value = _a.value;
                if (error) {
                    errMessage = utilities_1.constructError(error.details);
                    return [2 /*return*/, res.status(403).json({
                            message: 'Unsuccessful',
                            name: 'ValidationError',
                            error: errMessage
                        })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model.updateOne(id, value)];
            case 2:
                course = _b.sent();
                return [2 /*return*/, res.status(200).json({
                        message: 'Successful',
                        course: course
                    })];
            case 3:
                error_2 = _b.sent();
                return [2 /*return*/, res.status(404).json({
                        message: 'Unsuccessful',
                        error: "No Course with ID " + id + " Found"
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteCourse = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, course, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model.deleteOne(id)];
            case 2:
                course = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: 'Successful',
                        course: course
                    })];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(404).json({
                        message: 'Unsuccessful',
                        error: "Cannot Delete A Non Exiting Course with ID " + id
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=course.js.map