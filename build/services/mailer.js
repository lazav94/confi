// TODO check how to setup gmal
// LINK: https://subscription.packtpub.com/book/application_development/9781786468710/12/ch12lvl1sec71/sending-mail
import * as nodemailer from "nodemailer";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3NlcnZpY2VzL21haWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0I7QUFDL0IsbUhBQW1IO0FBQ25ILE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxDQUFDO0FBRXpDLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQzFDLDBEQUEwRCxDQUMzRCxDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUc7SUFDaEIsSUFBSSxFQUFFLHFCQUFxQjtJQUMzQixFQUFFLEVBQUUsbUJBQW1CO0lBQ3ZCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxvQkFBb0I7Q0FDM0IsQ0FBQztBQUVGLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2hELElBQUksS0FBSyxFQUFFO1FBQ1QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUN2QztJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDIn0=