import swaggerJSDoc from "swagger-jsdoc";
const swaggerDef = {
    info: {
        title: "Confi",
        description: "Service to conferences",
        version: "1.0.0",
        contact: {
            name: "Lazar Vasic",
            email: "lazav94@gmail.com"
        }
    },
    apis: ["./build/swagger/*.swagger.js"]
};
export const swaggerSpec = swaggerJSDoc({
    definition: swaggerDef.info,
    apis: swaggerDef.apis
});
export const swaggerJson = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3N3YWdnZXIvc3dhZ2dlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sWUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxNQUFNLFVBQVUsR0FBUTtJQUN0QixJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsT0FBTztRQUNkLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsT0FBTyxFQUFFLE9BQU87UUFDaEIsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLGFBQWE7WUFDbkIsS0FBSyxFQUFFLG1CQUFtQjtTQUMzQjtLQUNGO0lBQ0QsSUFBSSxFQUFFLENBQUMsOEJBQThCLENBQUM7Q0FDdkMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBVyxZQUFZLENBQUM7SUFDOUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxJQUFJO0lBQzNCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSTtDQUN0QixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDekQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9