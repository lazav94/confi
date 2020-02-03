var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Conference from "./conference.model";
const getConferenceById = (id) => __awaiter(void 0, void 0, void 0, function* () { return Conference.findById(id); });
const getConferenceByIdLean = (id) => __awaiter(void 0, void 0, void 0, function* () { return Conference.findById(id).lean(); });
const createConference = (conference) => __awaiter(void 0, void 0, void 0, function* () {
    const newConference = new Conference(conference);
    return newConference.save();
});
const updateConference = (id, conference) => __awaiter(void 0, void 0, void 0, function* () { return Conference.findByIdAndUpdate(id, conference); });
// TODO delete all booking relalted to this conferenece
const deleteConferenceById = (id) => __awaiter(void 0, void 0, void 0, function* () { return Conference.findByIdAndDelete(id); });
export default {
    getConferenceById,
    getConferenceByIdLean,
    createConference,
    updateConference,
    deleteConferenceById
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmVyZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9jb25mZXJlbmNlL2NvbmZlcmVuY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLFVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFFN0QsTUFBTSxpQkFBaUIsR0FBRyxDQUFPLEVBQVUsRUFBK0IsRUFBRSxrREFDMUUsT0FBQSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBLEdBQUEsQ0FBQztBQUUxQixNQUFNLHFCQUFxQixHQUFHLENBQU8sRUFBVSxFQUErQixFQUFFLGtEQUM5RSxPQUFBLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUEsR0FBQSxDQUFDO0FBRWpDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDdkIsVUFBdUIsRUFDRCxFQUFFO0lBQ3hCLE1BQU0sYUFBYSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixFQUFVLEVBQ1YsVUFBdUIsRUFDTSxFQUFFLGtEQUFDLE9BQUEsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQSxHQUFBLENBQUM7QUFFL0UsdURBQXVEO0FBQ3ZELE1BQU0sb0JBQW9CLEdBQUcsQ0FBTyxFQUFVLEVBQStCLEVBQUUsa0RBQzdFLE9BQUEsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFBLEdBQUEsQ0FBQztBQUVuQyxlQUFlO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUNyQixDQUFDIn0=