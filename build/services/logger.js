import * as winston from "winston";
const logger = winston.createLogger({
    format: winston.format.combine(winston.format.splat(), winston.format.simple()),
    level: "debug",
    transports: [
        new winston.transports.Console()
        // new winston.transports.File({ filename: "error.log", level: "error" }),
        // new winston.transports.File({ filename: "all.log" })
    ]
});
export default logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3NlcnZpY2VzL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUVuQyxNQUFNLE1BQU0sR0FBbUIsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUNsRCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQ3hCO0lBQ0QsS0FBSyxFQUFFLE9BQU87SUFDZCxVQUFVLEVBQUU7UUFDVixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ2hDLDBFQUEwRTtRQUMxRSx1REFBdUQ7S0FDeEQ7Q0FDRixDQUFDLENBQUM7QUFFSCxlQUFlLE1BQU0sQ0FBQyJ9