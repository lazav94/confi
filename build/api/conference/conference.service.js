"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conference_model_1 = __importDefault(require("./conference.model"));
const getConferenceById = (id) => __awaiter(void 0, void 0, void 0, function* () { return conference_model_1.default.findById(id); });
const createConference = (conference) => __awaiter(void 0, void 0, void 0, function* () {
    const newConference = new conference_model_1.default(conference);
    return newConference.save();
});
const updateConference = (id, conference) => __awaiter(void 0, void 0, void 0, function* () { return conference_model_1.default.findByIdAndUpdate(id, conference); });
const deleteConferenceById = (id) => __awaiter(void 0, void 0, void 0, function* () { return conference_model_1.default.findByIdAndDelete(id); });
exports.default = {
    getConferenceById,
    createConference,
    updateConference,
    deleteConferenceById
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmVyZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9jb25mZXJlbmNlL2NvbmZlcmVuY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUE2RDtBQUU3RCxNQUFNLGlCQUFpQixHQUFHLENBQU8sRUFBVSxFQUErQixFQUFFLGtEQUMxRSxPQUFBLDBCQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBLEdBQUEsQ0FBQztBQUUxQixNQUFNLGdCQUFnQixHQUFHLENBQ3ZCLFVBQXVCLEVBQ0QsRUFBRTtJQUN4QixNQUFNLGFBQWEsR0FBRyxJQUFJLDBCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLENBQ3ZCLEVBQVUsRUFDVixVQUF1QixFQUNNLEVBQUUsa0RBQUMsT0FBQSwwQkFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQSxHQUFBLENBQUM7QUFFL0UsTUFBTSxvQkFBb0IsR0FBRyxDQUFPLEVBQVUsRUFBK0IsRUFBRSxrREFDN0UsT0FBQSwwQkFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFBLEdBQUEsQ0FBQztBQUVuQyxrQkFBZTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUNyQixDQUFDIn0=