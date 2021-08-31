
declare interface CustomerRequiredDocument {
    id: number,
    document_type_id: number,
    category_key:string,
    children:null,
    form_detail_id:string,
    has_document_number:boolean,
    has_expiry_date:boolean,
    has_issued_date:boolean,
    key:string,
    name:string,
    value_en:string,
}
export default CustomerRequiredDocument;