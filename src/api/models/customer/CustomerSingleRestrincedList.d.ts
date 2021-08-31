import BusinessUnits from "./BUsinessUnits";

declare interface CustomerSingleRestrincedList {
    id: number|null;
    name: string|null;
    business_units: Array<BusinessUnits>;
}
export default CustomerSingleRestrincedList;