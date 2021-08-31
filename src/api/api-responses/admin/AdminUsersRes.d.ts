import AdminUserRolePermission from "../../models/admin/AdminUserRolePermission";
import AdminUserRole from "../../models/admin/AdminUserRole";

export default interface AdminUsersRes{
    admin_users: Array<AdminUserRolePermission>      
    count: number
}