import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';
import { LOCATION_RATING_TYPES } from '../location-rating/location-rating.types';
import { LIST_ITEM_ACTION_TYPES } from '../list-item/list-item.types';
import { createShowToastAction } from './toast.actions';

export const SuccessToastEpic = (action$, store) =>
  action$.ofType(LOCATION_RATING_TYPES.saveDbSuccess).map(() =>
    createShowToastAction({
      level: 'success',
      message: `Thank you for submitting a review for ${
        store.getState().listItemReducer.selectedLocation.name
      }!`
    })
  );
