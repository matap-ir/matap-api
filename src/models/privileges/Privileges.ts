import {Prop, Schema} from '@nestjs/mongoose';

export class PrivilegeOptionsDetails{
    @Prop()
    allowed: boolean;

    @Prop()
    whiteList:string[] | any[];

    @Prop()
    test: string;
}

export class PrivilegeOptions{
    @Prop()
    post: PrivilegeOptionsDetails;

    @Prop()
    patch: PrivilegeOptionsDetails;

    @Prop()
    delete: PrivilegeOptionsDetails;

    @Prop()
    get: PrivilegeOptionsDetails;

    @Prop()
    put: PrivilegeOptionsDetails;

    @Prop()
    menuVisible: boolean
}

export default class Privileges{
    @Prop()
    users:PrivilegeOptions;

    @Prop()
    admins:PrivilegeOptions;

    @Prop()
    visits:PrivilegeOptions;

    @Prop()
    medicalServices:PrivilegeOptions;

    @Prop()
    healthCenters:PrivilegeOptions;

    @Prop()
    adminLogs:PrivilegeOptions;

    @Prop()
    reservations: PrivilegeOptions;

    @Prop()
    discounts:PrivilegeOptions;

    @Prop()
    serverConfigs:PrivilegeOptions;

    @Prop()
    serviceRequests:PrivilegeOptions;

    @Prop()
    specializations:PrivilegeOptions;

    @Prop()
    transactions:PrivilegeOptions;

    @Prop()
    notifications: PrivilegeOptions;

    @Prop()
    analytics: PrivilegeOptions;

    @Prop()
    calls: PrivilegeOptions;

    @Prop()
    defaultTestFunction: string
}
