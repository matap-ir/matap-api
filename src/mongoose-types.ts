import mongoose from 'mongoose';
import { Schema,Prop } from '@nestjs/mongoose';

const ObjectId = mongoose.Types.ObjectId;

console.log('TYPE',ObjectId);

export {
    ObjectId,
    Schema,
    Prop
};
