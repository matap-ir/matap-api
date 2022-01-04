export declare class PrivilegeOptionsDetails {
    allowed: boolean;
    whiteList: string[] | any[];
    test: string;
}
export declare class PrivilegeOptions {
    post: PrivilegeOptionsDetails;
    patch: PrivilegeOptionsDetails;
    delete: PrivilegeOptionsDetails;
    get: PrivilegeOptionsDetails;
    put: PrivilegeOptionsDetails;
    menuVisible: boolean;
}
export default class Privileges {
    users: PrivilegeOptions;
    admins: PrivilegeOptions;
    visits: PrivilegeOptions;
    medicalServices: PrivilegeOptions;
    healthCenters: PrivilegeOptions;
    adminLogs: PrivilegeOptions;
    reservations: PrivilegeOptions;
    discounts: PrivilegeOptions;
    serverConfigs: PrivilegeOptions;
    serviceRequests: PrivilegeOptions;
    specializations: PrivilegeOptions;
    transactions: PrivilegeOptions;
    notifications: PrivilegeOptions;
    analytics: PrivilegeOptions;
    calls: PrivilegeOptions;
    defaultTestFunction: string;
}
