
declare interface CustomerProfile {
    id: number|null;
    customer_type_key: string,
    is_active: boolean,
    is_complex_structure: boolean,
    is_investing_own_behalf: boolean,
    salutation_key:string|null;
    first_name: string;
    middle_name: string|null;
    last_name: string|null;
    full_name: string|null;
    alias_name: string|null;
    former_registered_name: string|null;
    gender_key: string;
    nationality_code: string; // string number. have to map from list of nationality
    country_of_residence_code: string; // string number. have to map from list of countries    
    investor_activity_key:string;
    identity_document_type_id: string|null;
    identity_number: string|null;
    identity_issued_date: string;
    identity_expiry_date: string;
    country_of_birth_code: string|null;
    industry_key: string;
    occupation_key: string;
    on_boarding_mode_key: string;
    payment_mode_key: string;
    product_service_complexity_key: string;
    source_of_funds_key: string;
    other_source_of_funds: any;
    dob: string;
    customer_reference_number: string|null;
    reference_number: string|null;
    address: string|null;
    phone: string|null;
    email: string;
    bank_account: string|null;
    purpose_of_account: string|null;
    nature_of_business_relationship: any;
    status_key:string|null,
    customer_bind_admin:Array<number>
}
export default CustomerProfile;