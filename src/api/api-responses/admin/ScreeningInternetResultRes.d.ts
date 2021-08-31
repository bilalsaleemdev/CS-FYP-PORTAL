import ScreeningInternetResult from "../../models/customer/ScreeningInternetResultRes";

export default interface ScreeningInternetResultRes {
    internetSearchResults: ScreeningInternetResult;
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
}