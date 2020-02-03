import { Router } from "express";
import { login } from "./admin.controller";
const router = Router();
// Admin login (since we are on a budget, lets go with hardcoded Basic auth or simple jwt auth)
router.post("/login", login);
export default router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4ucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFeEIsK0ZBQStGO0FBQy9GLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTdCLGVBQWUsTUFBTSxDQUFDIn0=