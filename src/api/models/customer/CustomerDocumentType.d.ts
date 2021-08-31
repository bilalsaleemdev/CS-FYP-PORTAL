
declare interface CustomerDocumentType {
    id: number;
    customer_type: string;
    key: string|null;
    name: string;
    category: string;
    form_detail_id: string|null;
    value_en: string;
    has_document_number: boolean;
    has_expiry_date: boolean;
    parent_id: string|null;
}
export default CustomerDocumentType;