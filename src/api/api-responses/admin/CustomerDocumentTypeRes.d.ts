import CustomerDocumentType from "../../models/customer/CustomerDocumentType"

export default interface CustomerDocumentTypeRes {
    document_types: Array<CustomerDocumentType>;
}