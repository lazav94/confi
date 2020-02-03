"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
// TODO use custome solution instead validator
const validator_1 = __importDefault(require("validator"));
const checkEmptyFields = fields => {
  const { firstname, lastname, email, phone } = fields;
  let errorMessage = "";
  if (!firstname) {
    errorMessage += "Please enter your first name";
  }
  if (!lastname) {
    errorMessage += "Please enter your last name";
  }
  if (!email) {
    errorMessage += "Please enter your email";
  }
  if (!phone) {
    errorMessage += "Please enter your phone number";
  }
  return {
    errorMessage,
    error: errorMessage !== ""
  };
};
// Admin login
function register(req, res) {
  // TODO call service (DB handing)
  const errorObject = checkEmptyFields(req.body);
  const { firstname, lastname, email, phone } = req.body;
  if (!validator_1.default.isEmail(email)) {
    errorObject.errorMessage += "Not valid email format";
  }
  if (!validator_1.default.isMobilePhone(phone)) {
    errorObject.errorMessage += "Not valid phone number format";
  }
  if (errorObject.errorMessage) {
    return res.status(400).send(errorObject);
  }
  // const criptedPassword = await bcrypt.decode(password);
  // Get user from db by username
  // compare passwords
  // 200 or not good
  res.sendStatus(200);
}
exports.register = register;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS91c2VyL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLDhDQUE4QztBQUM5QywwREFBa0M7QUFLbEMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE1BQXdCLEVBQUUsRUFBRTtJQUNwRCxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBQ3JELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsWUFBWSxJQUFJLDhCQUE4QixDQUFDO0tBQ2hEO0lBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNiLFlBQVksSUFBSSw2QkFBNkIsQ0FBQztLQUMvQztJQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixZQUFZLElBQUkseUJBQXlCLENBQUM7S0FDM0M7SUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsWUFBWSxJQUFJLGdDQUFnQyxDQUFDO0tBQ2xEO0lBQ0QsT0FBTztRQUNMLFlBQVk7UUFDWixLQUFLLEVBQUUsWUFBWSxLQUFLLEVBQUU7S0FDM0IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGNBQWM7QUFDZCxTQUFnQixRQUFRLENBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsaUNBQWlDO0lBRWpDLE1BQU0sV0FBVyxHQUFnQixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFNUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFdkQsSUFBSSxDQUFDLG1CQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzdCLFdBQVcsQ0FBQyxZQUFZLElBQUksd0JBQXdCLENBQUM7S0FDdEQ7SUFDRCxJQUFJLENBQUMsbUJBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkMsV0FBVyxDQUFDLFlBQVksSUFBSSwrQkFBK0IsQ0FBQztLQUM3RDtJQUVELElBQUksV0FBVyxDQUFDLFlBQVksRUFBRTtRQUM1QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzFDO0lBRUQseURBQXlEO0lBRXpELCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQXhCRCw0QkF3QkMifQ==
