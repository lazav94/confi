import { Request, Response } from "express";
export declare const getAllBookings: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response | undefined>;
export declare const getBookingById: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response>;
export declare const createBooking: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response | undefined>;
export declare const updateBooking: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response | undefined>;
export declare const deleteBookingById: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => Promise<Response | undefined>;
export declare function register(req: Request, res: Response): Response | undefined;
//# sourceMappingURL=booking.controller.d.ts.map