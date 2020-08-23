export interface PrivilegeOptionsDetails{
    test: string | (()=>boolean),
}
export interface PrivilegeOptions{
    menuVisible: boolean,
    whiteList:string[] | any[],
    post: PrivilegeOptionsDetails,
    patch: PrivilegeOptionsDetails,
    delete: PrivilegeOptionsDetails,
    get: PrivilegeOptionsDetails
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
    transactions:PrivilegeOptions
}
