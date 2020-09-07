import {UserType} from '../Enums';

export default interface CrashReport{
    os:'android' | 'ios' | 'web',
    fatal: boolean,
    type:'native' | 'js',
    date: number,
    error: string,
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
