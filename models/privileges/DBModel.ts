import { Schema } from 'mongoose';
import {ObjectId} from '../../mongoose-types';

const createPrivilegeOptionsDetails =(ref?: string) => {
    return{
        type: {
            allowed:{type:Boolean,required:true,default:true},
            whiteList:[{type:ObjectId,ref,required:true,default:[]}],
            test:{type:String,required:false}
        },
        required:true,
        default:[]
    }
}

const createPrivilegeOptions = (ref:string)=> {
    return{
        type:{
            post: createPrivilegeOptionsDetails(ref),
            patch: createPrivilegeOptionsDetails(ref),
            delete: createPrivilegeOptionsDetails(ref),
            get: createPrivilegeOptionsDetails(ref),
            put: createPrivilegeOptionsDetails(ref),
            menuVisible:{type:Boolean,required:true,default:false}
        },
        required:true,
        default:{}
    }
}

const dbModel = {
    users: createPrivilegeOptions('users'),
    admins: createPrivilegeOptions('admins'),
    visits: createPrivilegeOptions('visits'),
    medicalServices: createPrivilegeOptions('medical_services'),
    healthCenters: createPrivilegeOptions('healthcenters'),
    adminLogs: createPrivilegeOptions('admin-logs'),
    reservations: createPrivilegeOptions('reservations'),
    discounts: createPrivilegeOptions('discount_coupons'),
    serverConfigs: createPrivilegeOptions('server_config'),
    serviceRequests: createPrivilegeOptions('service_requests'),
    specializations: createPrivilegeOptions('specializations'),
    transactions: createPrivilegeOptions('transactions'),
    notifications: createPrivilegeOptions('notifications')
}

export default dbModel;
