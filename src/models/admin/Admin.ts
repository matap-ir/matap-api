import {AdminType} from '../Enums';
import {Privileges} from '../../../index';
import {ObjectId, Prop, Schema} from '../../mongoose-types';

@Schema()
export default class Admin {
    _id!: string;

    @Prop()
    name:string;

    @Prop()
    username:string;

    @Prop()
    password:string;

    @Prop()
    type: AdminType;

    @Prop({type: ()=> Privileges})
    privileges: Privileges;

    constructor(name: string,username: string,password: string,type: AdminType, privileges: Privileges) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = type;
        this.privileges = privileges;
    }
}
