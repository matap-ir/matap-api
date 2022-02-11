import FileAddresses from './src/constants/FileAddresses';
import User from './src/models/users/User';
import Chat from './src/models/chat/Chat';
import Specialization from './src/models/specialization/Specialization';
import HealthCenter from './src/models/health_center/HealthCenter';
import DiscountCoupon from './src/models/discount/DiscountCoupon';
import Transaction from './src/models/transactions/Transaction';
import PatientStatus from './src/models/PatientStatus';
import DoctorStatus from './src/models/DoctorStatus';
import Visit from './src/models/visit/Visit';
import Admin from './src/models/admin/Admin';
import FinancialAudit from './src/models/FinancialAudit';
import QueryResponse from './src/models/QueryResponse';
import Rating from './src/models/rating/Rating';
import ServerConfig from './src/models/serverconfig/ServerConfig';
import Helper from './src/helpers/Helper';
import MedicalService from './src/models/medical_service/MedicalService';
import ServiceRequest from './src/models/service_request/ServiceRequest';
import ResponseTime from './src/models/response_time/ResponseTime';
import AdminLog from './src/models/admin_log/AdminLog';
import Privileges, { PrivilegeOptions, PrivilegeOptionsDetails } from './src/models/privileges/Privileges';
import Notification from './src/models/notification/Notification';
import CrashReport from './src/models/crash_report/CrashReport';
import Archive from './src/models/archive/Archive';
import WorkTime from './src/models/response_time/WorkTime';
import Reservation, { ReservationRequest } from './src/models/reservation/Reservation';
import Issuer from './src/models/issuer/Issuer';
import Translations from './src/constants/translations';
import Colors from './src/constants/colors';
import WorkTimes from './src/models/users/WorkTimes';
import Events from './src/models/events/Events';
import CallAnalytics, { AbstractCallMetric } from './src/models/analytics/call-analytics/CallAnalytics';
import FileInfo, { FileMetaData } from './src/models/file/file.info';
export * from './src/models/Enums';
import * as Tamin from './src/models/tamin/tamin';
import GeneralEvent from './src/models/events/GeneralEvent';
import ConferenceEvent from './src/models/events/ConferenceEvent';
import Conference, { Participant } from './src/models/conference/Conference';
import Reception from './src/models/reception/reception';
export { Reception, Tamin, AbstractCallMetric, FileInfo, FileMetaData, CallAnalytics, Participant, Conference, ConferenceEvent, GeneralEvent, Events, Reservation, ReservationRequest, Translations, Colors, Issuer, WorkTime, Archive, CrashReport, Notification, PrivilegeOptionsDetails, PrivilegeOptions, Privileges, AdminLog, ResponseTime, FileAddresses, User, Chat, WorkTimes, DoctorStatus, PatientStatus, Specialization, ServiceRequest, MedicalService, HealthCenter, DiscountCoupon, Transaction, Visit, Admin, FinancialAudit, QueryResponse, Rating, ServerConfig, Helper };
export declare type HTMLTypes = 'text' | 'name' | 'number' | 'password' | 'tel' | 'date' | 'datetime-local' | 'file' | 'image' | 'month' | 'email' | 'url' | 'search';
export interface ValidatorField {
    validator: any;
    metadata: {
        placeholders: {
            en: string;
            fa: string;
        };
        type: HTMLTypes;
    };
}
export interface ValidatorModel {
    fields: ValidatorFields;
    validator: any;
}
export interface ValidatorFields {
    [key: string]: ValidatorField;
}
