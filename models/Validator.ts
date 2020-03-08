import Joi from './Joi';
import {HTMLTypes, ValidatorModel} from '../index';

export interface GeneratedValidator<T> {
    db: {
        insert: ValidatorModel,
        update: ValidatorModel,
    };
    public: {
        post: ValidatorModel,
        patch: ValidatorModel,
        put: ValidatorModel,
    };
}
