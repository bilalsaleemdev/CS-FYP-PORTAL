export default interface AdminUserNotificationOverdue {    
        overdue_cases :number,
        cases:Array<{
            customer_name: string,
            type: string,
            date_added: string
        }>
    }
    