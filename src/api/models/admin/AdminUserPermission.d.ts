import Role from "./AdminUserRoles";

export default interface AdminUserPermission {
        id: number|null;        
        user_id: number|null;
        l1:boolean;
        l2: boolean;
        l3: boolean;
        admin:boolean;        
}
