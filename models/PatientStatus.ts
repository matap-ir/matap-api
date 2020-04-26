import {User} from '../index';

export default interface PatientStatus{
    room: {id:string,patient:User,doctor:User} | undefined,
    queue:{
        doctor:User,
        discountId:string | undefined,
    } | undefined
}
