import AdminUserRoles from "./AdminUserRoles";

export default interface AdminUser {
        id: number
        organization_id: number
        alias_name: string
        first_name: string
        last_name: string
        user_type: string
        roles?:Array<AdminUserRoles>
}
