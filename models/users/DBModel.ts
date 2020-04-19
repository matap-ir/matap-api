import { ObjectId } from 'mongoose';
const dbModel = {
    mobile: {type: String, required: true},
    type:{type: String,require:true},
    name:{type:String,required:true},
    imageUrl:{type:String},
    code:{type:Number,required:false},
    specialization:{type:require('../specialization/DBModel').default,required:true,ref:'specializations'},
    price:{type:Number,required:true},
    details:{
        type:{
            city:String,
            nezam_pezeshki_code:String,
            monthlyCut:Number,
            clinics:[{type:require('../health_center/DBModel').default,ref:'health_centers'}],
            hospitals:[{type:require('../health_center/DBModel').default,ref:'health_centers'}]
        },
        required:true
    }
};

export default dbModel;
