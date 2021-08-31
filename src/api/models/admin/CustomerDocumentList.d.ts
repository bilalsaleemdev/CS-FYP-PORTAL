
declare interface CustomerDocumentList {
    id: number|null;
    document_type_id: any;
    entity_type_document_id: any;
    sub_document_type_id: any;
    issued_date: any;
    expiry_date: any;
    is_verified: boolean|null;
    is_upload_verified: boolean|null;
}
export default CustomerDocumentList;