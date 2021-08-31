import CustomerRestrincedList from "../../models/customer/CustomerRestrincedList"

export default interface CustomerRestrictedListRes {
    restricted_lists: Array<CustomerRestrincedList>;
    count:number
}