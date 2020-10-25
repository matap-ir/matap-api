import FileAddresses from './constants/FileAddresses';
import User from './models/users/User';
import {UserType, HealthCenterType, VisitStatus, TransactionType, TypingStatus} from 'models/Enums';
import Chat from './models/chat/Chat';
import * as Enums from './models/Enums';
import CallOffer from './models/CallOffer';
import Specialization from './models/specialization/Specialization';
import HealthCenter from 'models/health_center/HealthCenter';
import DiscountCoupon from './models/discount/DiscountCoupon';
import Transaction from 'models/transactions/Transaction';
import PatientStatus from 'models/PatientStatus';
import DoctorStatus from 'models/DoctorStatus';
import Visit from 'models/visit/Visit';
import Admin from 'models/admin/Admin';
import FinancialAudit from 'models/FinancialAudit';
import QueryResponse from 'models/QueryResponse';
import Rating from 'models/rating/Rating';
import ServerConfig from './models/serverconfig/ServerConfig';
import Helper from './helpers/Helper';
import MedicalService from './models/medical_service/MedicalService';
import ServiceRequest from 'models/service_request/ServiceRequest';
import ResponseTime from './models/response_time/ResponseTime';
import AdminLog from 'models/admin_log/AdminLog';
import Privileges,{PrivilegeOptions,PrivilegeOptionsDetails} from './models/privileges/Privileges';
import Notification from './models/notification/Notification';
import CrashReport from './models/crash_report/CrashReport';
import DoctorsNotificationQueue from './models/doctors_notification_queue/DoctorsNotificationQueue';

export {
    CrashReport,
    Notification,
    PrivilegeOptionsDetails,
    PrivilegeOptions,
    Privileges,
    AdminLog,
    ResponseTime,
    CallOffer,
    UserType,
    HealthCenterType,
    FileAddresses,
    User,
    Chat,
    Enums,
    DoctorStatus,
    PatientStatus,
    Specialization,
    ServiceRequest,
    MedicalService,
    HealthCenter,
    DiscountCoupon,
    Transaction,
    Visit,
    VisitStatus,
    Admin,
    FinancialAudit,
    TransactionType,
    QueryResponse,
    Rating,
    ServerConfig,
    Helper,
    DoctorsNotificationQueue
};

export type HTMLTypes = 'text' | 'name' | 'number' | 'password' | 'tel' | 'date' | 'datetime-local' | 'file' | 'image' | 'month' | 'email' | 'url' | 'search';

export interface ValidatorField {
    validator: any;
    metadata: {
        placeholders: {en: string, fa: string},
        type: HTMLTypes,
    };
}
export interface ValidatorModel {
    fields: ValidatorFields;
    validator: any;
}
export interface ValidatorFields {
    [key: string]: ValidatorField;
}

declare module 'Api' {



}


