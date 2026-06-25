export interface User {
    id: string;
    email? : string;
    contactNo: string;
    password: string;
    dateCreated: Date;
    dateUpdate: Date;
    status: UserStatus;
}

export type UserStatus = "ACTIVE" | "INACTIVE" | "ARCHIVED"