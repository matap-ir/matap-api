// const colors = ['#ff7f50', '#dc143c', '#ff8c00', '#9932cc', '#e9967a', '#8fbc8f', '#cd5c5c', '#da70d6', '#eee8aa', '#98fb98', '#afeeee', '#db7093', '#cd853f', '#b0e0e6'];
import {ReservationState} from '../models/Enums';

export default class Colors {
  public static reservations = {
    [ReservationState.NEW]: 'blue',
    [ReservationState.CONFIRMED]: 'yellow',
    [ReservationState.CANCELLED]: 'red',
    [ReservationState.DONE]: 'orange',
    [ReservationState.TIME_PAST]: 'green'
  }
}
