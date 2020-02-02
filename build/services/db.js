"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
const dbOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
mongoose_1.default.connection.on("error", (err) => logger_1.default.error("Mongoose error:", err));
mongoose_1.default.connection.on("connected", () => logger_1.default.info("Connection to DB established successfully"));
mongoose_1.default.Promise = global.Promise;
exports.default = () => {
    mongoose_1.default.connect(process.env.MONGO_URI || "", dbOptions);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvc2VydmljZXMvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsc0RBQThCO0FBRTlCLE1BQU0sU0FBUyxHQUFXO0lBQ3hCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsZUFBZSxFQUFFLElBQUk7Q0FDdEIsQ0FBQztBQUVGLGtCQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUMzQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FDckMsQ0FBQztBQUVGLGtCQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQ3ZDLGdCQUFNLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQ3pELENBQUM7QUFFRixrQkFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBRWxDLGtCQUFlLEdBQUcsRUFBRTtJQUNsQixrQkFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDIn0=