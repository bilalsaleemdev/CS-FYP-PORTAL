
declare interface DocumentType {
    id: number;
    customer_type: string;
    key: string; 
    name: string;
    category: string;
    form_detail_id: string;
    value_en: string;
    has_document_number: boolean;
    has_expiry_date: boolean;
    parent_id: number;
}
export default DocumentType;