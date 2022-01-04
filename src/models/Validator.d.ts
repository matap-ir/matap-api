import { ValidatorModel } from '../../index';
export interface GeneratedValidator<T> {
    db: {
        insert: ValidatorModel;
        update: ValidatorModel;
    };
    public: {
        post: ValidatorModel;
        patch: ValidatorModel;
        put?: ValidatorModel;
    };
}
