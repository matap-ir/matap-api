const dbModel = {
    title: {type:String,required:true},
    code: {type:String,required:true},
    amount: {type:Number,required:true},
    start_date:{type:Number,required:true},
    end_date: {type:Number,required:true},
    per_user_limit: {type:Number,required:true},
    total_usage_limit: {type:Number,required:true},
    usages: {type:[String],required:true,default:[]}
};

export default dbModel;
