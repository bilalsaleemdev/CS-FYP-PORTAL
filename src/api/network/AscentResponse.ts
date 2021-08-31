import AscentStatusCode from "../models/AscentStatusCode";

export default class AscentResponse<T> {
    data?: T;
    status_code?: AscentStatusCode;
    success?: boolean;
    system_message?: string;
    user_message?: string;
}
