import mongoose from 'mongoose';
import { Schema,Prop } from '@nestjs/mongoose';

const ObjectId = mongoose.Types.ObjectId;
console.log('IS NODE')

export {
    ObjectId,
    Schema,
    Prop
};
