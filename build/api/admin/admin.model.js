import mongoose, { Schema } from "mongoose";
const AdminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
export default mongoose.model("Admin", AdminSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4ubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL2FkbWluL2FkbWluLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFZLE1BQU0sVUFBVSxDQUFDO0FBT3RELE1BQU0sV0FBVyxHQUFXLElBQUksTUFBTSxDQUFDO0lBQ3JDLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtDQUNGLENBQUMsQ0FBQztBQUVILGVBQWUsUUFBUSxDQUFDLEtBQUssQ0FBUyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMifQ==