import ScreeningInternetResultRes from "../../models/customer/ScreeningInternetResultRes";
declare interface internetSearch {
action_required: boolean
created_at: string|null
id: number|null
internetSearchResults: ScreeningInternetResultRes
last_updated_at: string|null
new_hit: boolean
results_count: number|null
screening_type: number|null
status:boolean
}
export default internetSearch;