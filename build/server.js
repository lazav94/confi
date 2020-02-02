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
const routes_1 = __importDefault(require("./routes"));
const port = parseInt(process.env.PORT || "8080", 10);
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
db_1.default();
routes_1.default(app);
app.use("/", swagger_1.default);
app.listen(port, (error) => {
    if (error) {
        process.exit(-1);
    }
    logger_1.default.info(`Server is running on port ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUErQztBQUMvQyxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQiwrREFBdUM7QUFDdkMsdURBQXNDO0FBQ3RDLHdEQUFzQztBQUN0QyxzREFBOEI7QUFFOUIsTUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUU5RCxNQUFNLEdBQUcsR0FBZ0IsaUJBQU8sRUFBRSxDQUFDO0FBRW5DLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWhELFlBQVMsRUFBRSxDQUFDO0FBRVosZ0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVaLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFhLENBQUMsQ0FBQztBQUU1QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQzlCLElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDLENBQUMifQ==