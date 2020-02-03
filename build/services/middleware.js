// TODO generate midleware to save session, only admin with the active session can list and delete booking (cookies or jwt)
export const haveAccess = (req, res, next) => {
    if (req.session.admin === true) {
        return next();
    }
    // send some message to fronend, like your session expired
    res
        .send({
        error: true,
        errorMessage: "Your session expired, please log in agaoin"
    })
        .status(400);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLDJIQUEySDtBQUMzSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWMsRUFBRSxFQUFFO0lBQ3hFLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQzlCLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZjtJQUNELDBEQUEwRDtJQUMxRCxHQUFHO1NBQ0EsSUFBSSxDQUFDO1FBQ0osS0FBSyxFQUFFLElBQUk7UUFDWCxZQUFZLEVBQUUsNENBQTRDO0tBQzNELENBQUM7U0FDRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDIn0=