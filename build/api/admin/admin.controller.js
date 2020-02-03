var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { compare } from "bcrypt";
import adminService from "./admin.service";
// const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || "9", 10);
// Admin login
export function login(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password } = req.body;
        const admin = yield adminService.getAdminByUsername(username);
        if (admin) {
            const match = yield compare(password, admin.password);
            if (match) {
                // Login
                // Add session - this can be token (simple for now)
                if ((_b = (_a = req) === null || _a === void 0 ? void 0 : _a.session) === null || _b === void 0 ? void 0 : _b.admin) {
                    req.session.admin = true;
                }
                return res.send(200);
            }
            return res
                .send({ error: true, errorMessage: "Wrong password" })
                .status(400);
        }
        res.send({ error: true, errorMessage: "No matching user " });
    });
}
export function logout(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        // logout
        if ((_b = (_a = req) === null || _a === void 0 ? void 0 : _a.session) === null || _b === void 0 ? void 0 : _b.admin) {
            req.session.admin = null;
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvYWRtaW4vYWRtaW4uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLG9FQUFvRTtBQUVwRSxjQUFjO0FBQ2QsTUFBTSxVQUFnQixLQUFLLENBQUMsR0FBWSxFQUFFLEdBQWE7OztRQUNyRCxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFeEMsTUFBTSxLQUFLLEdBQWtCLE1BQU0sWUFBWSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxLQUFLLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxJQUFJLEtBQUssRUFBRTtnQkFDVCxRQUFRO2dCQUNSLG1EQUFtRDtnQkFDbkQsZ0JBQUksR0FBRywwQ0FBRSxPQUFPLDBDQUFFLEtBQUssRUFBRTtvQkFDdkIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjtnQkFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEI7WUFDRCxPQUFPLEdBQUc7aUJBQ1AsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQzs7Q0FDOUQ7QUFFRCxNQUFNLFVBQWdCLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYTs7O1FBQ3RELFNBQVM7UUFDVCxnQkFBSSxHQUFHLDBDQUFFLE9BQU8sMENBQUUsS0FBSyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUMxQjs7Q0FDRiJ9