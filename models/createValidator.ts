import Joi from './Joi';
import { ValidatorModel } from '../index';

export default function createValidator(fields: {}, options?): ValidatorModel {
    const validator = Joi.object().keys(fields);
    const newFields = {...fields};
    Object.keys(newFields).forEach((key) => {
        newFields[key] = {validator: newFields[key], metadata: {}};
    });
    validator.options = options;
    return {
        fields: newFields,
        validator,
    };
}

