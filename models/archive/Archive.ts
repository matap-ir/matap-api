import {User} from '../../index';

export default interface Archive {
    _id: string,
    patient: User,
    doctor: User,
    note: string,
    file?:{
        file_size:number,
        file_name: string,
        mediaInfo:{
            width:number,
            height:number,
            duration:number,
            orientation:number
        }
    },
    createdAt: number
};
