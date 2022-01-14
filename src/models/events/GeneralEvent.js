"use strict";
exports.__esModule = true;
var GeneralEvent = /** @class */ (function () {
    function GeneralEvent(type, payload) {
        this.type = type;
        this.payload = payload;
        if (payload && payload instanceof Error) {
            // @ts-ignore
            this.payload = {
                name: payload.name,
                message: payload.message,
                stack: payload.stack
            };
        }
    }
    return GeneralEvent;
}());
exports["default"] = GeneralEvent;
//# sourceMappingURL=GeneralEvent.js.map