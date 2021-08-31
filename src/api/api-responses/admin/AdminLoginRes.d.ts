import AdminUser from '../../models/admin/AdminUser';

export default interface AdminLoginRes{
    user: AdminUser,
    menu_list: Array<string>
}