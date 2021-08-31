import internetSearch from "../../models/customer/internetSearch";
import worldCheck from "../../models/customer/worldCheck";
import restrictedList from "../../models/customer/restrictedList";

export default interface ScreeningWorldCheckRes {
    createdBy: any,
    customerType: number | null;
    id: number | null;
    internetSearch: internetSearch;
    name: string | null;
    quick_scan: boolean;
    updatedBy: any;
    worldCheck: worldCheck;
    restrictedList: restrictedList;
    screenProcessed: boolean;
    screenConculion:string|null,
    user_message:any,
    system_message:any

}