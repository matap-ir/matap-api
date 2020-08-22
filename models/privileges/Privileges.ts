interface PrivilegeOptions{
    create:boolean,
    edit:boolean,
    delete:boolean,
    view:boolean
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
