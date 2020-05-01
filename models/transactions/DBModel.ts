import { ObjectId } from 'mongoose';
const dbModel = {
    amount:{type:Number,required:true},
    type:{type:String,required: true},
    tracking_code:{type:String},
    date:{type:Number,required:true},
    hint:{type:String,default:''},
    issuer:{
        type:{
            type:String,
            _id:String,
            name:String
        }
    },
    target:{
        type:{
            _id:String,
            name:String
        }
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
