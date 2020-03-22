export enum UserType {
   PATIENT = 'PATIENT',
   DOCTOR = 'DOCTOR'
}

export enum ReceiveStatus {
   FAILED = 'FAILED',
   DOWNLOADING = 'DOWNLOADING',
   FILE_AVAILABLE = 'FILE_AVAILABLE'
}

export enum SendStatus{
   FAILED = 'FAILED',
   WAITING_FOR_QUEUE = 'WAITING_FOR_QUEUE',
   SENDING = 'SENDING',
   SENT = 'SENT',
   DELIVERED = 'DELIVERED',
   READEN = 'READEN'
}

export enum IOStatus {
   READY = 'READY',
   DOWNLOADING = 'DOWNLOADING',
   UPLOADING = 'UPLOADING',
   WAITING_FOR_UPLOAD = 'WAITING_FOR_UPLOAD',
   WAITING_FOR_DOWNLOAD = 'WAITING_FOR_DOWNLOAD'
}


export enum EventType {
   REQUEST_VISIT = 'REQUEST_VISIT',
   REQUEST_END_VISIT = 'REQUEST_END_VISIT',
   DOCTOR_NOT_FOUND = 'DOCTOR_NOT_FOUND',
   DOCTOR_UNAVAILABLE = 'DOCTOR_UNAVAILABLE',
   VISIT_REQUEST_TIMEDOUT = 'VISIT_REQUEST_TIMEDOUT',
   VISIT_REQUEST_ACCEPTED = 'VISIT_REQUEST_ACCEPTED',
   VISIT_REQUEST_DECLINED = 'VISIT_REQUEST_DECLINED',
   VISIT_REQUEST_INQUEUE = 'VISIT_REQUEST_INQUEUE',
   ROOM_NOT_FOUND = 'ROOM_NOT_FOUND',
   EVENT_STATUS_UPDATE = 'EVENT_STATUS_UPDATE',
   EVENT_SET_AVAILABLE = 'EVENT_SET_AVAILABLE',
   EVENT_CALL_REQUEST = 'EVENT_CALL_REQUEST',
   EVENT_CALL_ACCEPTED = 'EVENT_CALL_ACCEPTED',
   EVENT_CALL_DECLINED = 'EVENT_CALL_DECLINED',
}

export enum ChatType {
   TEXT= 'TEXT',
   IMAGE = 'IMAGE',
   VIDEO = 'VIDEO',
   MUSIC = 'MUSIC',
   UNKNOWN = 'UNKNOWN',
   GIF = 'GIF',
   PDF = 'PDF'
}
