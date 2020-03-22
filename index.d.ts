import FileAddresses from './constants/FileAddresses';
import User from './models/users/User';
import { UserType } from 'models/Enums';
import Chat from './models/chat/Chat';
import * as Enums from './models/Enums';
import Status from './models/Status';
import CallSession from './models/CallSession';

export {
    CallSession,
    UserType,
    FileAddresses,
    User,
    Chat,
    Enums,
    Status
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


