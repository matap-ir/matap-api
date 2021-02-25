export default interface Rating {
    _id: string;
    visitId: string;
    service_quality: number;
    video_call_satisfaction: number;
    doctor_details_clearity: number;
    doctor_solutions: number;
    doctor_detailed_consequences: number;
    environment_details: number;
}
