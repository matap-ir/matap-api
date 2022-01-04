import { Admin, User } from '../../../index';
declare type Issuer = {
    type: 'user';
    user: User;
} | {
    type: 'admin';
    admin: Admin;
};
export default Issuer;
