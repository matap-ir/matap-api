"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Archive {
    constructor(patient, doctor, title, note, createdAt) {
        this.patient = patient;
        this.doctor = doctor;
        this.note = note;
        this.title = title;
        this.createdAt = createdAt;
    }
}
exports.default = Archive;
;
