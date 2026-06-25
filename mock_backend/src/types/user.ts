export interface User {
    id: string;
    username: string;
    email?: string;
    phoneNumber? : string;
    passwordHash: string;
    dateCreated: string;
    dateUpdated : string;
}