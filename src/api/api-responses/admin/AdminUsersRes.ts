import AdminUser from "../../models/admin/AdminUser";

export default interface AdminUsersRes{
        admin_users: Array<AdminUser>,
        roles: Array<{ id: number, name:string,  }>
        count: number
    }