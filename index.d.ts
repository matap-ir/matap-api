import FileAddresses from './constants/FileAddresses';
import User from './models/users/User';
import {UserType, HealthCenterType, VisitStatus, TransactionType} from 'models/Enums';
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

export {
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
    ServerConfig
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


