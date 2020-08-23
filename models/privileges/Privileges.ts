
export type PrivilegeOptionsDetails = 'all' | 'none' | {_id:string,name:string}[];

export interface PrivilegeOptions{
    create: PrivilegeOptionsDetails,
    edit: PrivilegeOptionsDetails,
    delete: PrivilegeOptionsDetails,
    view: PrivilegeOptionsDetails
}
export default interface Privileges{
    users:{
        patients:PrivilegeOptions,
        doctors:PrivilegeOptions
    },
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
