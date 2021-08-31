import BusinessUnits from "./BUsinessUnits";

declare interface CustomerRestrincedList {
    id: string;
    name: string;
    business_units: Array<BusinessUnits>;
    customers_count: string|null;    
    created_at: string|null;
    updated_at: string|null;    
}
export default CustomerRestrincedList;