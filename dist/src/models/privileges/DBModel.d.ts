/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
declare const dbModel: {
    users: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    admins: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    visits: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    medicalServices: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    healthCenters: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    adminLogs: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    reservations: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    discounts: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    serverConfigs: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    serviceRequests: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    specializations: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    transactions: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    notifications: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    analytics: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
    calls: {
        type: {
            post: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: typeof import("mongoose").Types.ObjectId;
                        ref: string;
                        required: boolean;
                        default: any[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: any[];
            };
            menuVisible: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        required: boolean;
        default: {};
    };
};
export default dbModel;
