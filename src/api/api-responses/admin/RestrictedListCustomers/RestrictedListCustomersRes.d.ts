import RestrictedListCustomer from "../../../../api/models/customer/RestrictedListCustomer";

export default interface RestrictedListCustomersRes {
    restricted_list_customers: Array<RestrictedListCustomer>;
    count:number
}