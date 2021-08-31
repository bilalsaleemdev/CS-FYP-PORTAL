import CustomerCrpRoleProfile from "./CustomerCrpRoleProfile";

declare interface CustomerCrpCorporateProfile {
    //Mandatory field
    id: number|null;
    customer_id:number;
    parent_id:number|null;
    crp_type_key: string,    
    name: string;
    entity_type_key: string;
    ownership_structure_layer_key: string;
    country_of_incorporation_code: string; 
    country_of_major_operation_code: string; 
    status_key:string;    
    organization_role_status_key:string,
    //Non Mandatory field
    alias_name: string|null;
    former_registered_name: string|null;
    date_of_incorporation: string;
    date_of_incorporation_expiry: string;
    source_of_funds_key: string|null;
    incorporation_number: string|null;
    imo_number: string|null;
    corporate_website: string|null;
    reference_number: string|null;
    address: string|null;
    phone: string|null;
    email: string|null;
    bank_account: string|null;
    is_undischarged_bankrupt: boolean,
    roles: Array<CustomerCrpRoleProfile>
}
export default CustomerCrpCorporateProfile;