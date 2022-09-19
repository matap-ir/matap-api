import { AdminType } from '../Enums';
import { Privileges } from '../../../index';
export default class Admin {
    _id: string;
    name: string;
    username: string;
    password: string;
    type: AdminType;
    privileges: Privileges;
    constructor(name: string, username: string, password: string, type: AdminType, privileges: Privileges);
}
