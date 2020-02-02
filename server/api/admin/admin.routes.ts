import { Router } from "express";
import { login, listBookings, deleteBooking } from "./admin.controller";

const router = Router();

router
    .post("/login", login)
    .get('/list', listBookings)
    .delete('/delete', deleteBooking)
;

export default router;
