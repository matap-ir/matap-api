import mongoose from 'mongoose';
import { PropOptions } from '@nestjs/mongoose/dist/decorators/prop.decorator';
import { SchemaOptions } from '@nestjs/mongoose/dist/decorators/schema.decorator';
declare const ObjectId: typeof mongoose.Types.ObjectId;
export declare function Prop(props: PropOptions): any;
export declare function Schema(options: SchemaOptions): any;
export { ObjectId };
