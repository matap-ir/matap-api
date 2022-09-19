import Joi from '@hapi/joi';
// customJoi.string().phoneNumber({ defaultCountry: 'IR', format: 'international', strict: true })
export default Joi;

export const phone = () => {
    return Joi.string();
};
