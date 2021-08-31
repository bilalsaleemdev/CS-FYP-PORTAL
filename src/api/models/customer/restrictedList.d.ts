import ScreeningRestrictedListRes from "../../models/customer/ScreeningRestrictedListRes";
declare interface restrictedList {
    action_required: boolean
    created_at: string|null
    id: number|null
    last_updated_at: string|null
    new_hit: boolean
    results_count: number|null
    screening_type: number|null
    primary_d:string|null
    secondary_id:string|null
    status:boolean
    restrictedListResults: ScreeningRestrictedListRes
    system_message: string|null
    }
    export default restrictedList;