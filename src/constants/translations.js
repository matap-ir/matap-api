"use strict";
var _a;
exports.__esModule = true;
var Enums_1 = require("../models/Enums");
var Translations = /** @class */ (function () {
    function Translations() {
    }
    Translations.reservations = (_a = {},
        _a[Enums_1.ReservationState.NEW] = 'جدید',
        _a[Enums_1.ReservationState.CONFIRMED] = 'تایید شده',
        _a[Enums_1.ReservationState.CANCELLED] = 'لغو شده',
        _a[Enums_1.ReservationState.DONE] = 'انجام شده',
        _a[Enums_1.ReservationState.TIME_PAST] = 'زمان گذشته',
        _a);
    return Translations;
}());
exports["default"] = Translations;
//# sourceMappingURL=translations.js.map