import CustomerPerodicReviewCustomer from "./CustomerPerodicReviewCustomer";
import CustomerPerodicReviewUpdatedBy from "./CustomerPerodicReviewUpdatedBy";

declare interface CustomerPeriodicReview {
    approval_status: string
    computed_risk_rating: string
    created_at: string
    customer: CustomerPerodicReviewCustomer
    id: number
    override_risk_rating: string
    risk_score: number
    updated_by: CustomerPerodicReviewUpdatedBy
}
export default CustomerPeriodicReview;