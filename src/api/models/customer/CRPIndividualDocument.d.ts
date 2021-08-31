
declare interface CRPIndividualDocument {
    id: number,
    document_type_id: number,    
    customer_related_party_form_id:string,
    sub_document_type_id:number,    
    is_upload_verified:string,
    expiry_date:boolean,
    issued_date:boolean,
    document_number:string,
    is_verified:string,    
}
export default CRPIndividualDocument;