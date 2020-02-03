import { Router } from "express";
import { getConferenceById, createConference, updateConference, deleteConferenceById } from "./conference.controller";
const router = Router();
router
    .get("/:id", getConferenceById)
    .put("/", createConference)
    .post("/", updateConference)
    .delete("/:id", deleteConferenceById);
export default router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmVyZW5jZS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL2NvbmZlcmVuY2UvY29uZmVyZW5jZS5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3JCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFeEIsTUFBTTtLQUNILEdBQUcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUM7S0FDOUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQztLQUMxQixJQUFJLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDO0tBQzNCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUV4QyxlQUFlLE1BQU0sQ0FBQyJ9