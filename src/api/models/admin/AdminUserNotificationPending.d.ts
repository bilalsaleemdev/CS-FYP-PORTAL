export default interface AdminUserNotificationPending {
    pending_cases :number,
    cases:Array<{
        customer_name: string,
        type: string,
        date_added: string
    }>
}
