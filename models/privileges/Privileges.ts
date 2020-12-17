export interface PrivilegeOptionsDetails{
    allowed: boolean,
    whiteList:string[] | any[],
    test: string | ((privilegeOptions,req)=>boolean)
}
export interface PrivilegeOptions{
    post: PrivilegeOptionsDetails,
    patch: PrivilegeOptionsDetails,
    delete: PrivilegeOptionsDetails,
    get: PrivilegeOptionsDetails,
    put: PrivilegeOptionsDetails,
    menuVisible: boolean
}
export default interface Privileges{
    users:PrivilegeOptions,
    admins:PrivilegeOptions,
    visits:PrivilegeOptions,
    medicalServices:PrivilegeOptions,
    healthCenters:PrivilegeOptions,
    adminLogs:PrivilegeOptions,
    reservations: PrivilegeOptions,
    discounts:PrivilegeOptions,
    serverConfigs:PrivilegeOptions,
    serviceRequests:PrivilegeOptions,
    specializations:PrivilegeOptions,
    transactions:PrivilegeOptions,
    notifications: PrivilegeOptions,
    defaultTestFunction: string
}
