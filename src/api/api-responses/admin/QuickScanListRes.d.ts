import QuickScanList from "../../models/customer/QuickScanList";

export default interface QuickScanListRes {
    quickScanList: QuickScanList;
    count: number;
    user_message:any
    system_message:any
}