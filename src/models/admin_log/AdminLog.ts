import {User} from '../../../index';

export default class AdminLog{
    _id!:string;
    url: string;
    path:string;
    headers?: string[];
    user:string | User;
    description?: string;
    date: number;
    body?:any;
    success?: boolean;
    params?: any[];
    type?:string;
    method:'POST' | 'PATCH'

    constructor(url: string,path: string,user: string | User,date: number,method: 'POST' | 'PATCH') {
        this.url = url;
        this.path = path;
        this.user = user;
        this.date = date;
        this.method = method;
    }
}
