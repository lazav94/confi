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
const bcrypt_1 = require("bcrypt");
const admin_service_1 = __importDefault(require("./admin.service"));
const saltRounds = parseInt(process.env.SALT_ROUNDS || "9", 10);
// Admin login
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO call service (DB handing)
        const { username, password } = req.body;
        const admin = yield admin_service_1.default.getAdminByUsername(username);
        if (admin) {
            res.sendStatus(200);
            const match = yield bcrypt_1.compare(password, admin.password);
            if (match) {
                // Login
                return res.send(200);
            }
            return res
                .send({ error: true, errorMessage: "Wrong password" })
                .status(400);
        }
        res.send({ error: true, errorMessage: "No matching user " });
    });
}
exports.login = login;
function listBookings(req, res) {
    // get booking from db
    // send to frontend
}
exports.listBookings = listBookings;
function deleteBooking(req, res) {
    // delete booking by req.body.id
}
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvYWRtaW4vYWRtaW4uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG1DQUFpQztBQUNqQyxvRUFBMkM7QUFHM0MsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRSxjQUFjO0FBQ2QsU0FBc0IsS0FBSyxDQUFDLEdBQVksRUFBRSxHQUFhOztRQUNyRCxpQ0FBaUM7UUFFakMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRXhDLE1BQU0sS0FBSyxHQUFrQixNQUFNLHVCQUFZLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0UsSUFBSSxLQUFLLEVBQUU7WUFDVCxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sS0FBSyxHQUFHLE1BQU0sZ0JBQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELElBQUksS0FBSyxFQUFFO2dCQUNULFFBQVE7Z0JBQ1IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxHQUFHO2lCQUNQLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLENBQUM7aUJBQ3JELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUFBO0FBbEJELHNCQWtCQztBQUVELFNBQWdCLFlBQVksQ0FBQyxHQUFZLEVBQUUsR0FBYTtJQUN0RCxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3JCLENBQUM7QUFIRCxvQ0FHQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxHQUFZLEVBQUUsR0FBYTtJQUN2RCxnQ0FBZ0M7QUFDbEMsQ0FBQztBQUZELHNDQUVDIn0=