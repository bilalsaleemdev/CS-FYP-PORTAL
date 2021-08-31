import CustomerExpiryDocuments from "../../models/customer/CustomerExpiryDocuments"

export default interface CustomerExpiringDocumentstRes {
    expire_documents: Array<CustomerExpiryDocuments>;
    count:number
}