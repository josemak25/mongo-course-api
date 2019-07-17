"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller = __importStar(require("../controller/course"));
var router = express_1.Router();
/* GET users listing. */
router.get('/', controller.getCourses).get('/:id', controller.getCourse);
exports.default = router;
//# sourceMappingURL=course.js.map