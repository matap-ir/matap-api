"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const index_1 = require("../../../index");
const WorkTimes_1 = tslib_1.__importDefault(require("./WorkTimes"));
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_types_1 = require("../../mongoose-types");
const class_transformer_1 = require("class-transformer/");
class NotificationSettings {
}
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettings.prototype, "notification", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], NotificationSettings.prototype, "sms", void 0);
class SettingsType {
}
tslib_1.__decorate([
    mongoose_1.Prop({ type: { newPatient: () => NotificationSettings, workTimeClose: () => NotificationSettings, workTimeEnded: () => NotificationSettings, workTimeStarted: () => NotificationSettings } }),
    tslib_1.__metadata("design:type", Object)
], SettingsType.prototype, "notifications", void 0);
;
class ReservationCoordinatesType {
}
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], ReservationCoordinatesType.prototype, "lat", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], ReservationCoordinatesType.prototype, "lng", void 0);
class WorkTimesType {
}
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], WorkTimesType.prototype, "from", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], WorkTimesType.prototype, "to", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: [String] }),
    tslib_1.__metadata("design:type", Array)
], WorkTimesType.prototype, "exceptions", void 0);
class ReservationInfoDetailsType {
}
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], ReservationInfoDetailsType.prototype, "enabled", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], ReservationInfoDetailsType.prototype, "phone", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], ReservationInfoDetailsType.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], ReservationInfoDetailsType.prototype, "gapMinutes", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], ReservationInfoDetailsType.prototype, "cost", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", ReservationCoordinatesType)
], ReservationInfoDetailsType.prototype, "coordinates", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, type: {
            saturday: { type: WorkTimesType, required: true },
            sunday: { type: WorkTimesType, required: true },
            monday: { type: WorkTimesType, required: true },
            tuesday: { type: WorkTimesType, required: true },
            wednesday: { type: WorkTimesType, required: true },
            thursday: { type: WorkTimesType, required: true },
            friday: { type: WorkTimesType, required: true }
        } }),
    tslib_1.__metadata("design:type", WorkTimes_1.default)
], ReservationInfoDetailsType.prototype, "workTimes", void 0);
class ResponseDaysDetailsType {
}
class DetailsType {
}
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", ReservationInfoDetailsType)
], DetailsType.prototype, "reservationInfo", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], DetailsType.prototype, "phone", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], DetailsType.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Boolean)
], DetailsType.prototype, "videoCallAllowed", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], DetailsType.prototype, "bio", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, default: true }),
    tslib_1.__metadata("design:type", Boolean)
], DetailsType.prototype, "displayInList", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], DetailsType.prototype, "maxVisitDurationMillisec", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], DetailsType.prototype, "city", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], DetailsType.prototype, "shaba", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], DetailsType.prototype, "nezam_pezeshki_code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], DetailsType.prototype, "cut", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: [{ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }] }),
    tslib_1.__metadata("design:type", Array)
], DetailsType.prototype, "clinics", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: [{ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }] }),
    tslib_1.__metadata("design:type", Array)
], DetailsType.prototype, "hospitals", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: () => ResponseDaysDetailsType }),
    tslib_1.__metadata("design:type", Object)
], DetailsType.prototype, "response_days", void 0);
let User = class User {
    constructor(type, mobile) {
        this.name = '';
        this.currency = 0;
        this.gender = '';
        this.type = type;
        this.mobile = mobile;
    }
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, index: true, unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "mobile", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "type", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false, default: '' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'specializations' }),
    tslib_1.__metadata("design:type", index_1.Specialization)
], User.prototype, "specialization", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: false }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "price", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ default: 0 }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "currency", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "ready", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "sms_code", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "fcmtoken", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "creationDate", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: [String] }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "finalizable_visits", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "gender", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    mongoose_1.Prop({ type: [String], default: [] }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "notificationQueuePatients", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "os", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: () => SettingsType }),
    tslib_1.__metadata("design:type", SettingsType)
], User.prototype, "settings", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: () => DetailsType }),
    tslib_1.__metadata("design:type", DetailsType)
], User.prototype, "details", void 0);
User = tslib_1.__decorate([
    mongoose_1.Schema(),
    tslib_1.__metadata("design:paramtypes", [String, String])
], User);
exports.default = User;
