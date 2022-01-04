const dbModel = {
    logoUrl:{type:String},
    title:{type:String,required:true},
    subTitle:{type:String,required: true},
    details:{type:String,required:true},
    price:{type:Number,required:true}
};

export default dbModel;
