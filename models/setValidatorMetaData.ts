import {HTMLTypes, ValidatorField} from '../index';

export default function(validator: ValidatorField, htmlType: HTMLTypes, placeHolders: {en: string, fa: string}) {
    validator.metadata.type = htmlType;
    validator.metadata.placeholders = placeHolders;
}
