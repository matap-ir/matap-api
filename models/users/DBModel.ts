import { ObjectId } from 'mongoose';
const dbModel = {
    mobile: {type: String, required: true},
    type:{type: String,require:true},
    name:{type:String,required:true},
    imageUrl:{type:String},
    code:{type:Number},
    specialization:{type:require('../specialization/DBModel').default,ref:'specializations'},
    price:{type:Number},
    details:{
        type:{
            city:String,
            nezam_pezeshki_code:String,
            monthlyCut:Number,
            clinics:[{type:require('../health_center/DBModel').default,ref:'health_centers'}],
            hospitals:[{type:require('../health_center/DBModel').default,ref:'health_centers'}]
        }
    }
};

export default dbModel;
