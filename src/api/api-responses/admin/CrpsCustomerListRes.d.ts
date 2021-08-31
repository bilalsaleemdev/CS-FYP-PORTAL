import CrpsCustomerList from "../../models/admin/CrpsCustomerList";

export default interface CrpsCustomerListRes {
    crps: Array<CrpsCustomerList>;  
    count:number      
}