import {Chat} from '../../../index';

export default{
    roomId:{type:String,required:true},
    members:{type:[String],required:true,default:[]},
    conversations:[{delivered:{type:[String],default: []},chat:require('../chat/DBModel').default}]
}
