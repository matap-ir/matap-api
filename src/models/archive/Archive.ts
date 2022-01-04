import {User} from '../../../index';

export default class Archive {
    _id!: string;
    patient: User;
    doctor: User;
    title: string;
    note: string;
    createdAt: number;
    file?:{
        url: string,
        file_size:number,
        file_name: string,
        mediaInfo:{
            width:number,
            height:number,
            duration:number,
            orientation:number
        }
    };

    constructor(patient: User, doctor: User, title: string,note: string,createdAt: number) {
        this.patient = patient;
        this.doctor = doctor;
        this.note = note;
        this.title = title;
        this.createdAt = createdAt;
    }
};
