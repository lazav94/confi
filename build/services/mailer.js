"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO check how to setup gmal
// LINK: https://subscription.packtpub.com/book/application_development/9781786468710/12/ch12lvl1sec71/sending-mail
const nodemailer = __importStar(require("nodemailer"));
var transporter = nodemailer.createTransport(`smtps://<username>%40gmail.com:<password>@smtp.gmail.com`);
var mailOptions = {
    from: "from_test@gmail.com",
    to: "to_test@gmail.com",
    subject: "Hello",
    text: "Hello from node.js"
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(`error: ${error}`);
    }
    console.log(`Message Sent ${info.response}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3NlcnZpY2VzL21haWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUhBQW1IO0FBQ25ILHVEQUF5QztBQUV6QyxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUMxQywwREFBMEQsQ0FDM0QsQ0FBQztBQUVGLElBQUksV0FBVyxHQUFHO0lBQ2hCLElBQUksRUFBRSxxQkFBcUI7SUFDM0IsRUFBRSxFQUFFLG1CQUFtQjtJQUN2QixPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUUsb0JBQW9CO0NBQzNCLENBQUM7QUFFRixXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNoRCxJQUFJLEtBQUssRUFBRTtRQUNULE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDdkM7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQyJ9