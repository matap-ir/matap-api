import { ObjectId } from 'mongoose';

const privilegeOptions = {
    type:{
        create: { type:Boolean,required:true,default:false },
        edit: { type:Boolean,required:true,default:false },
        delete: { type:Boolean,required:true,default:false }
    },
    required:true,
    default:{}
}

const dbModel = {
    users:{
        type:{
            patients: privilegeOptions,
            customers: privilegeOptions
        },
        required:true,
        default:{}
    },
    admins:{
        type:{
            support: privilegeOptions,
            healthCenter: privilegeOptions
        },
        required:true,
        default:{}
    },
    visits: privilegeOptions,
    medicalServices: privilegeOptions,
    healthCenter: privilegeOptions,
    adminLogs: privilegeOptions,
    discounts: privilegeOptions,
    serverConfigs: privilegeOptions,
    serviceRequests: privilegeOptions,
    specializations: privilegeOptions,
    transactions: privilegeOptions
}

export default dbModel;
