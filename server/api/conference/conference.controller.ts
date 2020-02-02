import logger from "../../services/logger";
import conferenceService from "./conference.service";
import { Request, Response } from "express";
import { IConference } from "./conference.model";

export const getConferenceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const conference: IConference | null = await conferenceService.getConferenceById(
      id
    );
    return res.send(conference).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};
export const createConference = async (req: Request, res: Response) => {
  try {
    const newConference: IConference | null = await conferenceService.createConference(
      req.body
    );

    res.send(newConference).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};
export const updateConference = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const conference: IConference | null = await conferenceService.updateConference(
      id,
      req.body
    );
    res.send(conference).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};
export const deleteConferenceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedConference = await conferenceService.deleteConferenceById(id);
    res.send(deletedConference).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};
