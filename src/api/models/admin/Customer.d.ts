
declare interface Customer {
    id: number;
    name: string;
    email: string; // string number. have to map from list of nationality
    nationality_code: string; // string number. have to map from list of countries
    status_key:string
}
export default Customer;