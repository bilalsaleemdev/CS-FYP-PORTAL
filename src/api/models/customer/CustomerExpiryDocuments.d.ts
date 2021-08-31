
import CustomerExpiryDocumentsCustomerProfile from "../../models/customer/CustomerExpiryDocumentsCustomerProfile"
import CustomerExpiryDocumentsDocuType from "../../models/customer/CustomerExpiryDocumentsDocuType"

declare interface CustomerExpiryDocuments {
    authenticity: string | null
    content_type: string | null
    crp: boolean
    customer_profile: CustomerExpiryDocumentsCustomerProfile
    document_type: CustomerExpiryDocumentsDocuType
    document_type_id: number | null
    expiry_date: string | null
    id: 3
    is_upload_verified: boolean
    is_verified: boolean
    issued_date: string | null
    other_document_description: string | null
    show_expiry_notification: boolean
    sub_document_Type: CustomerExpiryDocumentsDocuType
    sub_document_type_id: number | null
}
export default CustomerExpiryDocuments;