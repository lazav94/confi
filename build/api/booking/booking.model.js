import mongoose, { Schema } from "mongoose";
const BookingSchema = new Schema({
    conference: {
        type: Schema.Types.ObjectId,
        ref: "Conference"
    },
    firstnname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    token: {
        type: String
    }
});
export default mongoose.model("Booking", BookingSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvYm9va2luZy9ib29raW5nLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFZLE1BQU0sVUFBVSxDQUFDO0FBWXRELE1BQU0sYUFBYSxHQUFXLElBQUksTUFBTSxDQUFDO0lBQ3ZDLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsR0FBRyxFQUFFLFlBQVk7S0FDbEI7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxLQUFLO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtLQUNiO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsZUFBZSxRQUFRLENBQUMsS0FBSyxDQUFXLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyJ9