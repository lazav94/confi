// TODO check how to setup gmal
// LINK: https://subscription.packtpub.com/book/application_development/9781786468710/12/ch12lvl1sec71/sending-mail
import * as nodemailer from "nodemailer";

var transporter = nodemailer.createTransport(
  `smtps://<username>%40gmail.com:<password>@smtp.gmail.com`
);

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
