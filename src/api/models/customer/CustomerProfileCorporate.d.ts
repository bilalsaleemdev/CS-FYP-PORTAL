
declare interface CustomerProfileCorporate {
    id: number|null;
    customer_type_key: string,
    is_active: boolean,
    is_complex_structure: boolean,
    is_investing_own_behalf: boolean,
    is_incorporated:boolean;
    first_name: string;
    alias_name: string|null;
    former_registered_name: string|null;    
    entity_type_key: string;
    ownership_structure_layer_key: string;
    incorporate_country_code: string;
    investor_type_key: string;
    investor_activity_key: string; 
    country_of_major_operation_code: string; 
    incorporate_date: string;
    incorporate_expiry_date: string;
    is_regulated_entity: boolean,
    primary_business_activity_key: string;
    on_boarding_mode_key: string;
    payment_mode_key: string;
    product_service_complexity_key: string;
    source_of_funds_key: string|null;
    incorporate_number: string|null;
    imo_number: string|null;
    website: string|null;
    customer_reference_number: string|null;
    reference_number: string|null;
    address: string|null;
    phone: string|null;
    email: string|null;
    bank_account: string|null;
    nature_of_business_relationship: any;
    status_key: string|null,
    customer_bind_admin:Array<number>;
}
export default CustomerProfileCorporate;