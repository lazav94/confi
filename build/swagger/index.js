"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const router = express_1.Router();
const swagger_controller_1 = require("./swagger.controller");
router
    .get("/api-docs.json", swagger_controller_1.swaggerJson)
    .use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_controller_1.swaggerSpec));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvc3dhZ2dlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFpQztBQUNqQyw0RUFBMkM7QUFDM0MsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLDZEQUFnRTtBQUVoRSxNQUFNO0tBQ0gsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGdDQUFXLENBQUM7S0FDbEMsR0FBRyxDQUFDLFdBQVcsRUFBRSw0QkFBUyxDQUFDLEtBQUssRUFBRSw0QkFBUyxDQUFDLEtBQUssQ0FBQyxnQ0FBVyxDQUFDLENBQUMsQ0FBQztBQUVuRSxrQkFBZSxNQUFNLENBQUMifQ==