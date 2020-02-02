"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
exports.swaggerSpec = swagger_jsdoc_1.default({
    definition: swaggerDef.info,
    apis: swaggerDef.apis
});
exports.swaggerJson = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(exports.swaggerSpec);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3N3YWdnZXIvc3dhZ2dlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0VBQXlDO0FBRXpDLE1BQU0sVUFBVSxHQUFRO0lBQ3RCLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxPQUFPO1FBQ2QsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsYUFBYTtZQUNuQixLQUFLLEVBQUUsbUJBQW1CO1NBQzNCO0tBQ0Y7SUFDRCxJQUFJLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztDQUN2QyxDQUFDO0FBRVcsUUFBQSxXQUFXLEdBQVcsdUJBQVksQ0FBQztJQUM5QyxVQUFVLEVBQUUsVUFBVSxDQUFDLElBQUk7SUFDM0IsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO0NBQ3RCLENBQUMsQ0FBQztBQUVVLFFBQUEsV0FBVyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3pELEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBVyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDIn0=