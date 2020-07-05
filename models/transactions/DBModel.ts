import { ObjectId } from 'mongoose';
const dbModel = {
    amount:{type:Number,required:true},
    type:{type:String,required: true},
    tracking_code:{type:String},
    date:{type:Number,required:true},
    hint:{type:String,default:''},
    discount:{type:Number,required:false},
    visit_id:{type:String,required:false},
    doctorCut:{type:Number,required:false},
    issuer:{
            type:{type:String,required:true},
            _id:{type:String,required:true},
            name:{type:String,required:true}
    },
    target:{
            _id:{type:String,required:true},
            name:{type:String,required:true}
    }
};

export default dbModel;

/*
const { Sequelize, DataTypes } = require('sequelize');
const dbModel = {
    amount:{type:DataTypes.STRING,allowNull: false},
    type:{type:DataTypes.STRING,allowNull: false},
    tracking_code:{type:DataTypes.STRING,allowNull:true},
    date:{type:DataTypes.NUMBER,allowNull:false},
    hint:{type:String,allowNull:false,defaultValue:''},
    issuer:{}
};*/
