import { ObjectId } from 'mongoose';

const privilegeOptions = {
    type:{
        create: { type:Boolean,required:true,default:false },
        edit: { type:Boolean,required:true,default:false },
        delete: { type:Boolean,required:true,default:false },
        view: { type:Boolean,required:true,default:false }
    },
    required:true,
    default:{}
}

const dbModel = {
    users:{
        type:{
            patients: privilegeOptions,
            doctors: privilegeOptions
        },
        required:true,
        default:{}
    },
    admins: privilegeOptions,
    visits: privilegeOptions,
    medicalServices: privilegeOptions,
    healthCenters: privilegeOptions,
    adminLogs: privilegeOptions,
    discounts: privilegeOptions,
    serverConfigs: privilegeOptions,
    serviceRequests: privilegeOptions,
    specializations: privilegeOptions,
    transactions: privilegeOptions
}

export default dbModel;
