import AdminUserNotificationSummary from "../../../api/models/admin/AdminUserNotificationSummary";
import AdminUserNotificationExpiringDocuments from "../../../api/models/admin/AdminUserNotificationExpiringDocuments";
import AdminUserNotificationOverdue from "../../../api/models/admin/AdminUserNotificationOverdue";
import AdminUserNotificationPending from "../../../api/models/admin/AdminUserNotificationPending";
import AdminUserNotificationPeriodicReview from "../../../api/models/admin/AdminUserNotificationPeriodicReview";

export default interface AdminUserNotificationSummaryRes{
        summary: AdminUserNotificationSummary,
        pending:AdminUserNotificationPending,
        overdue:AdminUserNotificationOverdue,
        expiring_documents:AdminUserNotificationExpiringDocuments,
        periodic_review:AdminUserNotificationPeriodicReview
    }
