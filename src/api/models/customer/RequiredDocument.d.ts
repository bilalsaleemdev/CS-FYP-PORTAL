export default interface RequiredDocument {
    id: number;
    document_type_id: number;
    is_organization_document: boolean;
    is_signable: boolean;
    is_optional: boolean;
}