import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';

export const showToastEpic = action$ =>
  action$.ofType(LOCATION_RATING_TYPES.saveDbSuccess).map(() =>
    createShowNotificationAction({
      message: 'Yay',
      level: 'success'
    })
  );
