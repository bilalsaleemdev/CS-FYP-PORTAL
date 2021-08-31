import CustomerCrpRoleProfile from "./CustomerCrpRoleProfile";

declare interface CustomerCrpIndividualProfile {
    //Mandatory field
    id: number | null;
    customer_id:number,
    parent_id:number |  null,
    crp_type_key: string,    
    name: string;
    gender_key: string;
    nationality_code: string; 
    country_of_residence_code: string;
    status_key:string;
    organization_role_status_key:string;
    // appointment_key:string;
    //Non Mandatory field
    salutation_key:string|null;        
    alias_name: string|null;
    former_registered_name: string|null;
    identity_document_type_id: string|null;
    identity_number: string|null;
    identity_issued_date: string;
    identity_expiry_date: string;
    country_of_birth_code: string|null;
    source_of_funds_key: string|null;
    dob: string;
    reference_number: string|null;
    address: string|null;
    phone: string|null;
    email: string|null;
    bank_account: string|null;
    is_undischarged_bankrupt: boolean,
    roles: Array<CustomerCrpRoleProfile>
}
export default CustomerCrpIndividualProfile;