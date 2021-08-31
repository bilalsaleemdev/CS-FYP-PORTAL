import AdminUserRolePermission from "../../../api/models/admin/AdminUserRolePermission";
import AdminUserRole from "../../../api/models/admin/AdminUserRole";

export default interface AdminUserRolePermissionRes{
    role_permissions: Array<AdminUserRolePermission>  
    roles: Array<AdminUserRole>  
    count: number
}