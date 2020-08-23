export interface PrivilegeOptionsDetails{
    allowed: boolean,
    whiteList:string[] | any[],
}
export interface PrivilegeOptions{
    post: PrivilegeOptionsDetails,
    patch: PrivilegeOptionsDetails,
    delete: PrivilegeOptionsDetails,
    get: PrivilegeOptionsDetails,
    put: PrivilegeOptionsDetails,
    menuVisible: boolean,
    test: string | ((privilegeOptions,req)=>boolean)
}
export default interface Privileges{
    users:PrivilegeOptions,
    admins:PrivilegeOptions,
    visits:PrivilegeOptions,
    medicalServices:PrivilegeOptions,
    healthCenters:PrivilegeOptions,
    adminLogs:PrivilegeOptions,
    discounts:PrivilegeOptions,
    serverConfigs:PrivilegeOptions,
    serviceRequests:PrivilegeOptions,
    specializations:PrivilegeOptions,
    transactions:PrivilegeOptions,
    defaultTestFunction: string
}
