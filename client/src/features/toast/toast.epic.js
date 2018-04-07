import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';
import { LOCATION_RATING_TYPES } from './location-rating.types';
import { createShowToastAction } from './toast.actions';

export const SuccessToastEpic = action$ =>
  action$.ofType(LOCATION_RATING_TYPES.saveDbSuccess).map(() =>
    createShowToastAction({
      message: 'Yay',
      level: 'success'
    })
  );
