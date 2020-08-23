import { ObjectId } from 'mongoose';

const privilegeOptionsDetails = {
    type:{
        allowed: {type:Boolean,required:true,default:false},
        restrictions: {type:[String],required:true,default:[]},
        menuVisible: {type:Boolean,required:true}
    },
    default:{allowed: false,restrictions:[]},
    required:true
}

const privilegeOptions = {
    type:{
        create: privilegeOptionsDetails,
        edit: privilegeOptionsDetails,
        delete: privilegeOptionsDetails,
        view: privilegeOptionsDetails
    },
    required:true
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
