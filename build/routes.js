"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_routes_1 = __importDefault(require("./api/admin/admin.routes"));
const conference_routes_1 = __importDefault(require("./api/conference/conference.routes"));
const booking_routes_1 = __importDefault(require("./api/booking/booking.routes"));
exports.default = (app) => {
    app
        .use("/admin", admin_routes_1.default)
        .use("/conference", conference_routes_1.default)
        .use("/booking", booking_routes_1.default);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDRFQUFtRDtBQUNuRCwyRkFBa0U7QUFDbEUsa0ZBQXlEO0FBRXpELGtCQUFlLENBQUMsR0FBZ0IsRUFBUSxFQUFFO0lBQ3hDLEdBQUc7U0FDQSxHQUFHLENBQUMsUUFBUSxFQUFFLHNCQUFXLENBQUM7U0FDMUIsR0FBRyxDQUFDLGFBQWEsRUFBRSwyQkFBZ0IsQ0FBQztTQUNwQyxHQUFHLENBQUMsVUFBVSxFQUFFLHdCQUFhLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMifQ==