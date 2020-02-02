import Conference, { IConference } from "./conference.model";

const getConferenceById = async (id: string): Promise<IConference | null> =>
  Conference.findById(id);

const createConference = async (
  conference: IConference
): Promise<IConference> => {
  const newConference = new Conference(conference);
  return newConference.save();
};

const updateConference = async (
  id: string,
  conference: IConference
): Promise<IConference | null> => Conference.findByIdAndUpdate(id, conference);

const deleteConferenceById = async (id: string): Promise<IConference | null> =>
  Conference.findByIdAndDelete(id);

export default {
  getConferenceById,
  createConference,
  updateConference,
  deleteConferenceById
};
