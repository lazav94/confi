import adminRoutes from "./api/admin/admin.routes";
import conferenceRoutes from "./api/conference/conference.routes";
import bookingRoutes from "./api/booking/booking.routes";
export default (app) => {
    app
        .use("/admin", adminRoutes)
        .use("/conference", conferenceRoutes)
        .use("/booking", bookingRoutes);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLFdBQVcsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLGdCQUFnQixNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sYUFBYSxNQUFNLDhCQUE4QixDQUFDO0FBRXpELGVBQWUsQ0FBQyxHQUFnQixFQUFRLEVBQUU7SUFDeEMsR0FBRztTQUNBLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO1NBQzFCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7U0FDcEMsR0FBRyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMifQ==