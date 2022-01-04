"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("../models/Enums");
class Translations {
}
exports.default = Translations;
Translations.reservations = {
    [Enums_1.ReservationState.NEW]: 'جدید',
    [Enums_1.ReservationState.CONFIRMED]: 'تایید شده',
    [Enums_1.ReservationState.CANCELLED]: 'لغو شده',
    [Enums_1.ReservationState.DONE]: 'انجام شده',
    [Enums_1.ReservationState.TIME_PAST]: 'زمان گذشته'
};
