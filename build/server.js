"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const logger_1 = __importDefault(require("./services/logger"));
const db_1 = __importDefault(require("./services/db"));
const swagger_1 = __importDefault(require("./swagger"));
const port = parseInt(process.env.PORT || "8080", 10);
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
db_1.default();
// require("./routes")(expressServer);
app.use("/", swagger_1.default);
app.listen(port, (error) => {
    if (error) {
        process.exit(-1);
    }
    logger_1.default.info(`Server is running on port ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUErQztBQUMvQyxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQiwrREFBdUM7QUFDdkMsdURBQXNDO0FBQ3RDLHdEQUFzQztBQUV0QyxNQUFNLElBQUksR0FBVyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRTlELE1BQU0sR0FBRyxHQUFnQixpQkFBTyxFQUFFLENBQUM7QUFFbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFaEQsWUFBUyxFQUFFLENBQUM7QUFFWixzQ0FBc0M7QUFFdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsaUJBQWEsQ0FBQyxDQUFDO0FBRTVCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDOUIsSUFBSSxLQUFLLEVBQUU7UUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7SUFDRCxnQkFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQyJ9