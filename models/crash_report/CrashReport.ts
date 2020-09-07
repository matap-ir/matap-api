import {UserType} from '../Enums';

export default interface CrashReport{
    _id: string,
    os:'android' | 'ios' | 'web',
    fatal: boolean,
    type:'native' | 'js',
    date: number,
    error: {
        name: string,
        message: string,
        stack:any,
        object:any
    },
    occurrences: number,
    resolved: number,
    user:{
        userId: string,
        userType: UserType | null,
    }
    app:{
        build:number,
        versionCode:string
    }
    device:{
        manufacturer: string,
        model:string
    }
}
