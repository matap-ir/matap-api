"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeneralEvent {
    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
        if (payload && payload instanceof Error) {
            this.payload = {
                name: payload.name,
                message: payload.message,
                stack: payload.stack
            };
        }
    }
}
exports.default = GeneralEvent;
