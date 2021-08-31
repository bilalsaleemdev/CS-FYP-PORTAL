import ScreeningWorldCheckRes from "../../models/customer/ScreeningWorldCheckRes";
declare interface worldCheck {
  
    action_required: boolean
    created_at: string|null
    id: number|null
    worldCheckResults: ScreeningWorldCheckRes
    last_updated_at: string|null
    new_hit: boolean
    results_count: number|null
    screening_type: number|null
    primary_d:string|null
    secondary_id:string|null
    status:boolean
    }
    export default worldCheck;