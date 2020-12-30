import {Admin, User} from '../../index';

type Issuer = {type:'user',user: User} | {type:'admin',admin: Admin};

export default Issuer;
