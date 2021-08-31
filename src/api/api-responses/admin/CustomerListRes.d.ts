import Customer from "../../models/admin/Customer";

export default interface CustomerListRes {
    customers_list: Array<Customer>;    
    count: number;
}