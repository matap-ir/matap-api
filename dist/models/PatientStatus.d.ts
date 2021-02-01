import Visit from './visit/Visit';
import Reservation from './reservation/Reservation';
export default interface PatientStatus {
    visit: Visit | undefined;
    reservations: Reservation[];
}
