interface PrivilegeOptions{
    create:boolean,
    edit:boolean,
    delete:boolean
}

export default interface Privileges{
    users:{
        patients:PrivilegeOptions,
        customers:PrivilegeOptions
    },
    admins:{
        support:PrivilegeOptions,
        healthCenter:PrivilegeOptions
    },
    visits:PrivilegeOptions,
    medicalServices:PrivilegeOptions,
    healthCenter:PrivilegeOptions,
    adminLogs:PrivilegeOptions,
    discounts:PrivilegeOptions,
    serverConfigs:PrivilegeOptions,
    serviceRequests:PrivilegeOptions,
    specializations:PrivilegeOptions,
    transactions:PrivilegeOptions
}
