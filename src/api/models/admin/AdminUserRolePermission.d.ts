import AdminUserRole from "./AdminUserRole";

export default interface AdminUserRolePermission {
    id: number,
    name: string,
    roles: Array<AdminUserRole>
}