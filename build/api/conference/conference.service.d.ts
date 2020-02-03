import { IConference } from "./conference.model";
declare const _default: {
    getConferenceById: (id: string) => Promise<IConference | null>;
    getConferenceByIdLean: (id: string) => Promise<IConference | null>;
    createConference: (conference: IConference) => Promise<IConference>;
    updateConference: (id: string, conference: IConference) => Promise<IConference | null>;
    deleteConferenceById: (id: string) => Promise<IConference | null>;
};
export default _default;
//# sourceMappingURL=conference.service.d.ts.map