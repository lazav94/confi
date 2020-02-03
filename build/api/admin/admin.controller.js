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
    return __awaiter(this, void 0, void 0, function* () {
        // TODO call service (DB handing)
        const { username, password } = req.body;
        const admin = yield adminService.getAdminByUsername(username);
        if (admin) {
            res.sendStatus(200);
            const match = yield compare(password, admin.password);
            if (match) {
                // Login
                // Add session - this can be token (simple for now)
                req.session.admin = true;
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
    return __awaiter(this, void 0, void 0, function* () {
        // logout
        req.session.admin = null;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvYWRtaW4vYWRtaW4uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBRzNDLG9FQUFvRTtBQUVwRSxjQUFjO0FBQ2QsTUFBTSxVQUFnQixLQUFLLENBQUMsR0FBWSxFQUFFLEdBQWE7O1FBQ3JELGlDQUFpQztRQUVqQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFeEMsTUFBTSxLQUFLLEdBQWtCLE1BQU0sWUFBWSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLElBQUksS0FBSyxFQUFFO1lBQ1QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixNQUFNLEtBQUssR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELElBQUksS0FBSyxFQUFFO2dCQUNULFFBQVE7Z0JBQ1IsbURBQW1EO2dCQUNuRCxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QjtZQUNELE9BQU8sR0FBRztpQkFDUCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO2lCQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FBQTtBQUVELE1BQU0sVUFBZ0IsTUFBTSxDQUFDLEdBQVksRUFBRSxHQUFhOztRQUN0RCxTQUFTO1FBQ1QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Q0FBQSJ9