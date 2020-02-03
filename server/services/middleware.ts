import { Request, Response } from "express";

export const haveAccess = (req: Request, res: Response, next: Function) => {
  if (req?session?admin && req.session.admin === true) {
    return next();
  }

  res
    .send({
      error: true,
      errorMessage: "Your session expired, please log in again"
    })
    .status(400);
};
