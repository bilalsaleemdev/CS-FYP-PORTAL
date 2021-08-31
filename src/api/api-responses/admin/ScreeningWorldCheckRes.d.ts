import ScreeningWorldCheck from "../../models/customer/ScreeningWorldCheckRes";

export default interface ScreeningWorldCheckRes {
    worldCheckResults: ScreeningWorldCheck;
    id: number|null;
    createdBy: any;
    updatedBy: any;
    name: string|null;
    human_search_provider: number|null;
    new_hit: boolean;
    created_at: Date;
    quick_scan: boolean;
    count: number;
    status: boolean;
    user_message:any
    system_message:any
}