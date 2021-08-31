import DocumentType from "./../../models/admin/documentType";

export default interface DocumentTypeRes {
    document_types: Array<DocumentType>;    
    // count: number;
}