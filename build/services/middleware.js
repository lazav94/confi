export const haveAccess = (req, res, next) => {
    // req?.session?.admin
    if (req.session && req.session.admin && req.session.admin === true) {
        return next();
    }
    res
        .send({
        error: true,
        errorMessage: "Your session expired, please log in again"
    })
        .status(400);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBYyxFQUFFLEVBQUU7SUFDeEUsc0JBQXNCO0lBQ3RCLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDbEUsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNmO0lBRUQsR0FBRztTQUNBLElBQUksQ0FBQztRQUNKLEtBQUssRUFBRSxJQUFJO1FBQ1gsWUFBWSxFQUFFLDJDQUEyQztLQUMxRCxDQUFDO1NBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyJ9