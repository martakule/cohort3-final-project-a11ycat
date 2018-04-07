import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';

export const SuccessToastEpic = action$ =>
  action$.ofType(LOCATION_RATING_TYPES.saveDbSuccess).map(() =>
    createShowToastAction({
      message: 'Yay',
      level: 'success'
    })
  );
