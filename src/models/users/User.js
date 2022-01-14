"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var class_transformer_1 = require("class-transformer/");
var NotificationSettings = /** @class */ (function () {
    function NotificationSettings() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], NotificationSettings.prototype, "notification");
    __decorate([
        mongoose_types_1.Prop()
    ], NotificationSettings.prototype, "sms");
    return NotificationSettings;
}());
var SettingsType = /** @class */ (function () {
    function SettingsType() {
    }
    __decorate([
        mongoose_types_1.Prop({ type: { newPatient: function () { return NotificationSettings; }, workTimeClose: function () { return NotificationSettings; }, workTimeEnded: function () { return NotificationSettings; }, workTimeStarted: function () { return NotificationSettings; } } })
    ], SettingsType.prototype, "notifications");
    return SettingsType;
}());
;
var ReservationCoordinatesType = /** @class */ (function () {
    function ReservationCoordinatesType() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], ReservationCoordinatesType.prototype, "lat");
    __decorate([
        mongoose_types_1.Prop()
    ], ReservationCoordinatesType.prototype, "lng");
    return ReservationCoordinatesType;
}());
var WorkTimesType = /** @class */ (function () {
    function WorkTimesType() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], WorkTimesType.prototype, "from");
    __decorate([
        mongoose_types_1.Prop()
    ], WorkTimesType.prototype, "to");
    __decorate([
        mongoose_types_1.Prop({ type: [String] })
    ], WorkTimesType.prototype, "exceptions");
    return WorkTimesType;
}());
var ReservationInfoDetailsType = /** @class */ (function () {
    function ReservationInfoDetailsType() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], ReservationInfoDetailsType.prototype, "enabled");
    __decorate([
        mongoose_types_1.Prop()
    ], ReservationInfoDetailsType.prototype, "phone");
    __decorate([
        mongoose_types_1.Prop()
    ], ReservationInfoDetailsType.prototype, "address");
    __decorate([
        mongoose_types_1.Prop()
    ], ReservationInfoDetailsType.prototype, "gapMinutes");
    __decorate([
        mongoose_types_1.Prop()
    ], ReservationInfoDetailsType.prototype, "cost");
    __decorate([
        mongoose_types_1.Prop({ required: false })
    ], ReservationInfoDetailsType.prototype, "coordinates");
    __decorate([
        mongoose_types_1.Prop({ required: true, type: {
                saturday: { type: WorkTimesType, required: true },
                sunday: { type: WorkTimesType, required: true },
                monday: { type: WorkTimesType, required: true },
                tuesday: { type: WorkTimesType, required: true },
                wednesday: { type: WorkTimesType, required: true },
                thursday: { type: WorkTimesType, required: true },
                friday: { type: WorkTimesType, required: true }
            } })
    ], ReservationInfoDetailsType.prototype, "workTimes");
    return ReservationInfoDetailsType;
}());
var ResponseDaysDetailsType = /** @class */ (function () {
    function ResponseDaysDetailsType() {
    }
    return ResponseDaysDetailsType;
}());
var DetailsType = /** @class */ (function () {
    function DetailsType() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], DetailsType.prototype, "reservationInfo");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DetailsType.prototype, "phone");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DetailsType.prototype, "address");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DetailsType.prototype, "videoCallAllowed");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DetailsType.prototype, "bio");
    __decorate([
        mongoose_types_1.Prop({ required: true, "default": true })
    ], DetailsType.prototype, "displayInList");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DetailsType.prototype, "maxVisitDurationMillisec");
    __decorate([
        mongoose_types_1.Prop()
    ], DetailsType.prototype, "city");
    __decorate([
        mongoose_types_1.Prop()
    ], DetailsType.prototype, "shaba");
    __decorate([
        mongoose_types_1.Prop()
    ], DetailsType.prototype, "nezam_pezeshki_code");
    __decorate([
        mongoose_types_1.Prop()
    ], DetailsType.prototype, "cut");
    __decorate([
        mongoose_types_1.Prop({ type: [{ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }] })
    ], DetailsType.prototype, "clinics");
    __decorate([
        mongoose_types_1.Prop({ type: [{ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }] })
    ], DetailsType.prototype, "hospitals");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return ResponseDaysDetailsType; } })
    ], DetailsType.prototype, "response_days");
    return DetailsType;
}());
var User = /** @class */ (function () {
    function User(type, mobile) {
        this.name = '';
        this.currency = 0;
        this.gender = '';
        this.type = type;
        this.mobile = mobile;
    }
    __decorate([
        mongoose_types_1.Prop({ required: true, index: true, unique: true })
    ], User.prototype, "mobile");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], User.prototype, "type");
    __decorate([
        mongoose_types_1.Prop({ required: false, "default": '' })
    ], User.prototype, "name");
    __decorate([
        mongoose_types_1.Prop()
    ], User.prototype, "imageUrl");
    __decorate([
        mongoose_types_1.Prop()
    ], User.prototype, "code");
    __decorate([
        mongoose_types_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'specializations' })
    ], User.prototype, "specialization");
    __decorate([
        mongoose_types_1.Prop({ required: false })
    ], User.prototype, "price");
    __decorate([
        mongoose_types_1.Prop({ "default": 0 })
    ], User.prototype, "currency");
    __decorate([
        mongoose_types_1.Prop()
    ], User.prototype, "ready");
    __decorate([
        class_transformer_1.Exclude(),
        mongoose_types_1.Prop()
    ], User.prototype, "sms_code");
    __decorate([
        class_transformer_1.Exclude(),
        mongoose_types_1.Prop()
    ], User.prototype, "fcmtoken");
    __decorate([
        mongoose_types_1.Prop()
    ], User.prototype, "creationDate");
    __decorate([
        mongoose_types_1.Prop({ type: [String] })
    ], User.prototype, "finalizable_visits");
    __decorate([
        mongoose_types_1.Prop()
    ], User.prototype, "gender");
    __decorate([
        class_transformer_1.Exclude(),
        mongoose_types_1.Prop({ type: [String], "default": [] })
    ], User.prototype, "notificationQueuePatients");
    __decorate([
        mongoose_types_1.Prop()
    ], User.prototype, "os");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return SettingsType; } })
    ], User.prototype, "settings");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return DetailsType; } })
    ], User.prototype, "details");
    User = __decorate([
        mongoose_types_1.Schema()
    ], User);
    return User;
}());
exports["default"] = User;
//# sourceMappingURL=User.js.map