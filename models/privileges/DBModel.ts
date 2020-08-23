import { ObjectId,Schema } from 'mongoose';

const createPrivilegeOptionsDetails =(ref: string) => {
    return{
        type: {
            whiteList:[{type:ObjectId,ref,required:true,default:[]}],
        },
        required:true,
        default:[]
    }
}

const createPrivilegeOptions = (ref:string)=> {
    return{
        type:{
            test:{type:String,required:true,default:'(function(privileges,method,req){ return false; })'},
            menuVisible:{type:Boolean,required:true,default:false},
            post: createPrivilegeOptionsDetails(ref),
            patch: createPrivilegeOptionsDetails(ref),
            delete: createPrivilegeOptionsDetails(ref),
            get: createPrivilegeOptionsDetails(ref)
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
    discounts: createPrivilegeOptions('discount_coupons'),
    serverConfigs: createPrivilegeOptions('server_config'),
    serviceRequests: createPrivilegeOptions('service_requests'),
    specializations: createPrivilegeOptions('specializations'),
    transactions: createPrivilegeOptions('transactions')
}

export default dbModel;
