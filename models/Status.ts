export default interface Status{
    room: string | undefined,
    ready: boolean,
    doctor:{
        queueList:string[]
    },
    patient:{
        doctorCode: number | undefined
    }
}
