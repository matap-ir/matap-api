import FileAddresses from './constants/FileAddresses';
import User from './models/users/User';
import Chat from './models/chat/Chat';
import CallOffer from './models/CallOffer';
import Specialization from './models/specialization/Specialization';
import HealthCenter from './models/health_center/HealthCenter';
import DiscountCoupon from './models/discount/DiscountCoupon';
import Transaction from './models/transactions/Transaction';
import PatientStatus from './models/PatientStatus';
import DoctorStatus from './models/DoctorStatus';
import Visit from './models/visit/Visit';
import Admin from './models/admin/Admin';
import FinancialAudit from './models/FinancialAudit';
import QueryResponse from './models/QueryResponse';
import Rating from './models/rating/Rating';
import ServerConfig from './models/serverconfig/ServerConfig';
import Helper from './helpers/Helper';
import MedicalService from './models/medical_service/MedicalService';
import ServiceRequest from './models/service_request/ServiceRequest';
import ResponseTime from './models/response_time/ResponseTime';
import AdminLog from './models/admin_log/AdminLog';
import Privileges,{PrivilegeOptions,PrivilegeOptionsDetails} from './models/privileges/Privileges';
import Notification from './models/notification/Notification';
import CrashReport from './models/crash_report/CrashReport';
import Archive from './models/archive/Archive';
import WorkTime from './models/response_time/WorkTime';
import Reservation,{ReservationCancellation,ReservationOffer,ReservationRequest} from './models/reservation/Reservation';
import Issuer from './models/issuer/Issuer';
import WorkTimes from './models/users/WorkTimes';
export * from './models/Enums';

export {
    Reservation,
    ReservationRequest,
    ReservationOffer,
    ReservationCancellation,
    Issuer,
    WorkTime,
    Archive,
    CrashReport,
    Notification,
    PrivilegeOptionsDetails,
    PrivilegeOptions,
    Privileges,
    AdminLog,
    ResponseTime,
    CallOffer,
    FileAddresses,
    User,
    Chat,
    WorkTimes,
    DoctorStatus,
    PatientStatus,
    Specialization,
    ServiceRequest,
    MedicalService,
    HealthCenter,
    DiscountCoupon,
    Transaction,
    Visit,
    Admin,
    FinancialAudit,
    QueryResponse,
    Rating,
    ServerConfig,
    Helper
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

