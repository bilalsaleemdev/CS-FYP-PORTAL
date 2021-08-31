import CustomerRequiredDocument from "../../models/customer/CustomerRequiredDocument"

export default interface CustomerRequiredDocumentRes {
    required_documents_types: Array<CustomerRequiredDocument>;
}
