"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const COLLECTIONS = {
    BUSINESS: {
        MODEL_NAME: 'business.summary.model',
        DISCOUNTS: {
            MODEL_NAME: 'business.discounts.model',
        },
        PRODUCTS: {
            MODEL_NAME: 'business.products.model',
            COMMENTS: {
                MODEL_NAME: 'business.products.comments.model',
                USERS_ACTIONS: {
                    MODEL_NAME: 'business.products.comments.useractions.model',
                },
            },
            USERS_ACTIONS: {
                MODEL_NAME: 'business.products.useractions.model',
            },
        },
        NEWSLETTERS: {
            MODEL_NAME: 'business.newsletters.model',
        },
        COMMENTS: {
            MODEL_NAME: 'business.comments.model',
        },
        USERS_ACTIONS: {
            MODEL_NAME: 'business.useractions.model',
        },
    },
};
exports.default = {
    COLLECTIONS,
};
