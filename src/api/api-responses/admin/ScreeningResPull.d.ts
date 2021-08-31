
import ScreeningPullStatus from "../../models/customer/ScreeningPullStatus";

export default interface ScreeningResponsePull {
    pullStatus: ScreeningPullStatus,
    user_message:any
    system_message:any
    status:boolean
    id:number
}