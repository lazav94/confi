var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Admin from "./admin.model";
const getAdminByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () { return Admin.findOne({ username }); });
export default { getAdminByUsername };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvYWRtaW4vYWRtaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEtBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBTyxRQUFnQixFQUEwQixFQUFFLGtEQUM1RSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBLEdBQUEsQ0FBQztBQUU5QixlQUFlLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyJ9