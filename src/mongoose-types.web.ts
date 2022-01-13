import mongoose from 'mongoose';
import { PropOptions } from '@nestjs/mongoose/dist/decorators/prop.decorator';
import { SchemaOptions } from '@nestjs/mongoose/dist/decorators/schema.decorator';

const ObjectId = mongoose.Types.ObjectId;

export function Prop (props: PropOptions): any {
  return () => {};
}

export function Schema (options: SchemaOptions): any {
  return () => {};
}

export {
  ObjectId
};
