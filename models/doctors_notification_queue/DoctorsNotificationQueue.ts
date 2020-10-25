export default interface DoctorsNotificationQueue {
    _id: string,
    doctorId: string,
    patientsInQueue: string[]
}
