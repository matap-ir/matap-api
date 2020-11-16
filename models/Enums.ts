export enum UserType {
   PATIENT = 'PATIENT',
   DOCTOR = 'DOCTOR'
}

export enum TypingStatus{
   TYPING = 'TYPING',
   IDLE = 'IDLE',
   SENDING_MEDIA = 'SENDING_MEDIA',
   RECORDING_VOICE = 'RECORDING_VOICE',
}

export enum AdminType{
   MANAGER = 'MANAGER',
   ADMIN = 'ADMIN',
   HEALTHCENTER = 'HEALTHCENTER'
}

export enum TransactionType {
   CHARGE_BY_GATEWAY = 'CHARGE_BY_GATEWAY',
   CHARGE_BY_ADMIN = 'CHARGE_BY_ADMIN',
   REDUCE_BY_ADMIN = 'REDUCE_BY_ADMIN',
   STARTER_CHARGE = 'STARTER_CHARGE',
   VISIT_PAYMENT = 'VISIT_PAYMENT',
   PAYROLL = 'PAYROLL',
   RETURN_VISIT_PAYMENT = 'RETURN_VISIT_PAYMENT',
   SERVICE_REQUEST_PAYMENT = 'SERVICE_REQUEST_PAYMENT'
}

export enum HealthCenterType {
   HOSPITAL = 'HOSPITAL',
   CLINIC = 'CLINIC'
}

export enum VisitStatus {
   IN_QUEUE = 'IN_QUEUE' ,
   STARTED = 'STARTED',
   ENDED = 'ENDED',
   CANCELLED = 'CANCELLED'
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
   VISIT_REQUEST_ACCEPTED = 'VISIT_REQUEST_ACCEPTED',
   VISIT_REQUEST_DECLINED = 'VISIT_REQUEST_DECLINED',
   VISIT_REQUEST_INQUEUE = 'VISIT_REQUEST_INQUEUE',
   EVENT_ERROR = 'EVENT_ERROR',
   EVENT_STATUS_UPDATE = 'EVENT_STATUS_UPDATE',
   EVENT_SET_AVAILABLE = 'EVENT_SET_AVAILABLE',
   EVENT_CALL_REQUEST = 'EVENT_CALL_REQUEST',
   EVENT_CALL_ACCEPTED = 'EVENT_CALL_ACCEPTED',
   EVENT_CALL_DECLINED = 'EVENT_CALL_DECLINED',
   EVENT_CALL_ENDED = 'EVENT_CALL_ENDED',
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
