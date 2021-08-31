import CustomerPeriodicReview from "../../models/customer/CustomerPeriodicReview"

export default interface CustomerPeriodicReviewRes {
    periodic_review_list: Array<CustomerPeriodicReview>;
}