
declare interface RestrictedListCustomer {
    id: number|null,    
    name: string;
    reference_number:string|null;
    identity_number: string|null;
    country_code: string;
    dob: string;
    comment: string|null;    
    restricted_list_id: string;
    status_key: string;
}
export default RestrictedListCustomer;