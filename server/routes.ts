import { Application } from "express";
import adminRoutes from "./api/admin/admin.routes";
import conferenceRoutes from "./api/conference/conference.routes";
import bookingRoutes from "./api/booking/booking.routes";

export default (app: Application): void => {
  app
    .use("/admin", adminRoutes)
    .use("/conference", conferenceRoutes)
    .use("/booking", bookingRoutes);
};
