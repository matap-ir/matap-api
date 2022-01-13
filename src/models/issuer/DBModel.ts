import {ObjectId} from '../../mongoose-types';

const dbModel = {
   type: {type: String, required: true},
   user: {type: ObjectId, ref: 'users', required: false},
   admin: {type: ObjectId, ref: 'admins', required: false}
};

export default dbModel;
