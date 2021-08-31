import CustomerScreeningDetails from "../../models/customer/CustomerScreeningDetails";

export default interface CustomerScreeningDetailsRes {
    own_restricted_list: Array<CustomerScreeningDetails>;
    internet_search: Array<CustomerScreeningDetails>;
    dow_jone_api: Array<CustomerScreeningDetails>;
}