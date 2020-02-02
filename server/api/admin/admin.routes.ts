import { Router } from "express";
import { login, listBookings, deleteBooking } from "./admin.controller";

const router = Router();

router.post("/login", login);

export default router;
