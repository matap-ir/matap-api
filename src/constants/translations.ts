import {ReservationState} from '../models/Enums';

export default class Translations {
  public static reservations = {
    [ReservationState.NEW]: 'جدید',
    [ReservationState.CONFIRMED]: 'تایید شده',
    [ReservationState.CANCELLED]: 'لغو شده',
    [ReservationState.DONE]: 'انجام شده',
    [ReservationState.TIME_PAST]: 'زمان گذشته'
  }
}
