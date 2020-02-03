"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const logger_1 = __importDefault(require("./logger"));
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
});
exports.default = (mailOptions) => new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            reject(error);
            return logger_1.default.error(`error: ${error}`);
        }
        resolve(info.response);
        logger_1.default.info(`Message Sent ${info.response}`);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3NlcnZpY2VzL21haWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBeUM7QUFFekMsc0RBQThCO0FBRTlCLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDN0MsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztRQUNoQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO0tBQ2pDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsQ0FBQyxXQUF3QixFQUFnQixFQUFFLENBQ3hELElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzlCLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ2hELElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2QsT0FBTyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=