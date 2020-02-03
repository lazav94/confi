var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import logger from "../../services/logger";
import conferenceService from "./conference.service";
export const getConferenceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const conference = yield conferenceService.getConferenceById(id);
        return res.send(conference).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
export const hasConferenceWithId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conference = yield conferenceService.getConferenceByIdLean(id);
        return !!conference;
    }
    catch (error) {
        logger.error("Has Conference with Id error: ", error);
        return false;
    }
});
export const createConference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newConference = yield conferenceService.createConference(req.body);
        res.send(newConference).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
export const updateConference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const conference = yield conferenceService.updateConference(id, req.body);
        res.send(conference).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
export const deleteConferenceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedConference = yield conferenceService.deleteConferenceById(id);
        res.send(deletedConference).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmVyZW5jZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9jb25mZXJlbmNlL2NvbmZlcmVuY2UuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLE1BQU0sTUFBTSx1QkFBdUIsQ0FBQztBQUMzQyxPQUFPLGlCQUFpQixNQUFNLHNCQUFzQixDQUFDO0FBR3JELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3JFLElBQUk7UUFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQixNQUFNLFVBQVUsR0FBdUIsTUFBTSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FDOUUsRUFBRSxDQUNILENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsRTtBQUNILENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBTyxFQUFVLEVBQW9CLEVBQUU7SUFDeEUsSUFBSTtRQUNGLE1BQU0sVUFBVSxHQUF1QixNQUFNLGlCQUFpQixDQUFDLHFCQUFxQixDQUNsRixFQUFFLENBQ0gsQ0FBQztRQUNGLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQztLQUNyQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNwRSxJQUFJO1FBQ0YsTUFBTSxhQUFhLEdBQXVCLE1BQU0saUJBQWlCLENBQUMsZ0JBQWdCLENBQ2hGLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQztRQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsRTtBQUNILENBQUMsQ0FBQSxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDcEUsSUFBSTtRQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCLE1BQU0sVUFBVSxHQUF1QixNQUFNLGlCQUFpQixDQUFDLGdCQUFnQixDQUM3RSxFQUFFLEVBQ0YsR0FBRyxDQUFDLElBQUksQ0FDVCxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xFO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN4RSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xFO0FBQ0gsQ0FBQyxDQUFBLENBQUMifQ==