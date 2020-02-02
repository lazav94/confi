"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const conferenceUser = new mongoose_1.Schema({
    name: String,
    date: Date // Date of a conference
});
exports.default = mongoose_1.default.model("Conference", conferenceUser);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmVyZW5jZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvY29uZmVyZW5jZS9jb25mZXJlbmNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFEQUE0QztBQUU1QyxNQUFNLGNBQWMsR0FBVyxJQUFJLGlCQUFNLENBQUM7SUFDeEMsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtDQUNuQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxrQkFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMifQ==