"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conference_controller_1 = require("./conference.controller");
const router = express_1.Router();
router
    .get("/:id", conference_controller_1.getConferenceById)
    .put("/", conference_controller_1.createConference)
    .post("/", conference_controller_1.updateConference)
    .delete("/:id", conference_controller_1.deleteConferenceById);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmVyZW5jZS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL2NvbmZlcmVuY2UvY29uZmVyZW5jZS5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMsbUVBS2lDO0FBRWpDLE1BQU0sTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUV4QixNQUFNO0tBQ0gsR0FBRyxDQUFDLE1BQU0sRUFBRSx5Q0FBaUIsQ0FBQztLQUM5QixHQUFHLENBQUMsR0FBRyxFQUFFLHdDQUFnQixDQUFDO0tBQzFCLElBQUksQ0FBQyxHQUFHLEVBQUUsd0NBQWdCLENBQUM7S0FDM0IsTUFBTSxDQUFDLE1BQU0sRUFBRSw0Q0FBb0IsQ0FBQyxDQUFDO0FBRXhDLGtCQUFlLE1BQU0sQ0FBQyJ9