import FileAddresses from './constants/FileAddresses';
import User from './models/users/User';
import { UserType, HealthCenterType } from 'models/Enums';
import Chat from './models/chat/Chat';
import * as Enums from './models/Enums';
import Status from './models/Status';
import CallOffer from './models/CallOffer';
import Specialization from './models/specialization/Specialization';
import HealthCenter from 'models/health_center/HealthCenter';
import DiscountCoupon from './models/discount/DiscountCoupon';
import Receipt from 'models/receipt/Receipt';

export {
    CallOffer,
    UserType,
    HealthCenterType,
    FileAddresses,
    User,
    Chat,
    Enums,
    Status,
    Specialization,
    HealthCenter,
    DiscountCoupon,
    Receipt
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


