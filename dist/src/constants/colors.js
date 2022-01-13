"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("../models/Enums");
class Colors {
}
exports.default = Colors;
Colors.reservations = {
    [Enums_1.ReservationState.NEW]: 'blue',
    [Enums_1.ReservationState.CONFIRMED]: 'yellow',
    [Enums_1.ReservationState.CANCELLED]: 'red',
    [Enums_1.ReservationState.DONE]: 'orange',
    [Enums_1.ReservationState.TIME_PAST]: 'green'
};
