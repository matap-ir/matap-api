/// <reference types="mongoose" />
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            patch: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            delete: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            get: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
            };
            put: {
                type: {
                    allowed: {
                        type: BooleanConstructor;
                        required: boolean;
                        default: boolean;
                    };
                    whiteList: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        ref: string | undefined;
                        required: boolean;
                        default: never[];
                    }[];
                    test: {
                        type: StringConstructor;
                        required: boolean;
                    };
                };
                required: boolean;
                default: never[];
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
