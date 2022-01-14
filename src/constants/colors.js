"use strict";
var _a;
exports.__esModule = true;
// const colors = ['#ff7f50', '#dc143c', '#ff8c00', '#9932cc', '#e9967a', '#8fbc8f', '#cd5c5c', '#da70d6', '#eee8aa', '#98fb98', '#afeeee', '#db7093', '#cd853f', '#b0e0e6'];
var Enums_1 = require("../models/Enums");
var Colors = /** @class */ (function () {
    function Colors() {
    }
    Colors.reservations = (_a = {},
        _a[Enums_1.ReservationState.NEW] = 'blue',
        _a[Enums_1.ReservationState.CONFIRMED] = 'yellow',
        _a[Enums_1.ReservationState.CANCELLED] = 'red',
        _a[Enums_1.ReservationState.DONE] = 'orange',
        _a[Enums_1.ReservationState.TIME_PAST] = 'green',
        _a);
    return Colors;
}());
exports["default"] = Colors;
//# sourceMappingURL=colors.js.map