import CustomerCrpRoleProfile from "../customer/CustomerCrpRoleProfile";

declare interface CrpsCustomerList {
    //Mandatory field
    id: number|null;
    customer_user_id: number|null;
    parent_id: number|null;
    crp_type_key: string;
    name: string;
    gender_key: string;
    nationality_code: string;
    country_of_residence_code: string;
    status_key: string;
    organization_role_status_key: string;
    entity_type_key: string;
    ownership_structure_layer_key: string;
    country_of_incorporation_code: string;
    country_of_major_operation_code:string;
    // appointment_key:string;
    //Non Mandatory field
    date_of_incorporation: string;
    date_of_incorporation_expiry: string;
    incorporation_number: string | null;
    imo_number: string | null;
    corporate_website: string | null;
    salutation_key: string | null;
    alias_name: string | null;
    former_registered_name: string | null;
    identity_document_type_id: string | null;
    identity_number: string | null;
    identity_issued_date: string;
    identity_expiry_date: string;
    country_of_birth_code: string | null;
    source_of_funds_key: string | null;
    dob: string;
    reference_number: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    bank_account: string | null;
    is_undischarged_bankrupt: boolean,
    roles: Array<CustomerCrpRoleProfile>
    is_all_documents_uploaded: boolean;
}
export default CrpsCustomerList;