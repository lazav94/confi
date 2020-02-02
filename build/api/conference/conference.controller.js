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
const conference_service_1 = __importDefault(require("./conference.service"));
exports.getConferenceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const conference = yield conference_service_1.default.getConferenceById(id);
        return res.send(conference).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
exports.createConference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newConference = yield conference_service_1.default.createConference(req.body);
        res.send(newConference).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
exports.updateConference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const conference = yield conference_service_1.default.updateConference(id, req.body);
        res.send(conference).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
exports.deleteConferenceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedConference = yield conference_service_1.default.deleteConferenceById(id);
        res.send(deletedConference).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmVyZW5jZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9jb25mZXJlbmNlL2NvbmZlcmVuY2UuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUFxRDtBQUl4QyxRQUFBLGlCQUFpQixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3JFLElBQUk7UUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQixNQUFNLFVBQVUsR0FBdUIsTUFBTSw0QkFBaUIsQ0FBQyxpQkFBaUIsQ0FDOUUsRUFBRSxDQUNILENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsRTtBQUNILENBQUMsQ0FBQSxDQUFDO0FBQ1csUUFBQSxnQkFBZ0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNwRSxJQUFJO1FBQ0YsTUFBTSxhQUFhLEdBQXVCLE1BQU0sNEJBQWlCLENBQUMsZ0JBQWdCLENBQ2hGLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQztRQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsRTtBQUNILENBQUMsQ0FBQSxDQUFDO0FBQ1csUUFBQSxnQkFBZ0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNwRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIsTUFBTSxVQUFVLEdBQXVCLE1BQU0sNEJBQWlCLENBQUMsZ0JBQWdCLENBQzdFLEVBQUUsRUFDRixHQUFHLENBQUMsSUFBSSxDQUNULENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEU7QUFDSCxDQUFDLENBQUEsQ0FBQztBQUNXLFFBQUEsb0JBQW9CLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDeEUsSUFBSTtRQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCLE1BQU0saUJBQWlCLEdBQUcsTUFBTSw0QkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsRTtBQUNILENBQUMsQ0FBQSxDQUFDIn0=