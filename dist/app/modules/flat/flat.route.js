"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatRoutes = void 0;
const express_1 = __importDefault(require("express"));
const flat_controller_1 = require("./flat.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const flat_validation_1 = require("./flat.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post("/flats", (0, auth_1.default)(), (0, validateRequest_1.default)(flat_validation_1.flatValidationSchema.flatValidation), flat_controller_1.flatController.addFlat);
router.get("/flats", (0, auth_1.default)(), flat_controller_1.flatController.getAllFlats);
router.put("/flats/:flatId", (0, auth_1.default)(), (0, validateRequest_1.default)(flat_validation_1.flatValidationSchema.flatUpdateValidation), flat_controller_1.flatController.updateFlat);
exports.flatRoutes = router;
