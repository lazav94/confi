import { Router } from "express";
import swaggerUi from "swagger-ui-express";
const router = Router();
import { swaggerJson, swaggerSpec } from "./swagger.controller";
router
    .get("/api-docs.json", swaggerJson)
    .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvc3dhZ2dlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pDLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRXhCLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEUsTUFBTTtLQUNILEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7S0FDbEMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUVuRSxlQUFlLE1BQU0sQ0FBQyJ9