"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Admin login
function login(req, res) {
    // TODO call service (DB handing)
    const { username, password } = req.body;
    // const criptedPassword = await bcrypt.decode(password);
    // Get user from db by username
    // compare passwords
    // 200 or not good
    res.sendStatus(200);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvYWRtaW4vYWRtaW4uY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGNBQWM7QUFDZCxTQUFnQixLQUFLLENBQUMsR0FBWSxFQUFFLEdBQWE7SUFDL0MsaUNBQWlDO0lBRWpDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUN4Qyx5REFBeUQ7SUFDekQsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBVEQsc0JBU0M7QUFFRCxTQUFnQixZQUFZLENBQUMsR0FBWSxFQUFFLEdBQWE7SUFDdEQsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUNyQixDQUFDO0FBSEQsb0NBR0M7QUFFRCxTQUFnQixhQUFhLENBQUMsR0FBWSxFQUFFLEdBQWE7SUFDdkQsZ0NBQWdDO0FBQ2xDLENBQUM7QUFGRCxzQ0FFQyJ9