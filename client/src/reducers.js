import { combineReducers } from 'redux';
import { appReducer } from './features/app/app.reducers';
import { listItemReducer } from './features/list-item/list-item.reducers';
import { searchBarReducer } from './features/search-bar/search-bar.reducers';
import { autoCompleteListReducer } from './features/auto-complete-list/auto-complete-list.reducers';
import { locationRatingReducer } from './features/location-rating/location-rating.reducers';
import { ToastReducer } from './features/toast/toast.reducer';

export default combineReducers({
  appReducer,
  listItemReducer,
  searchBarReducer,
  autoCompleteListReducer,
  locationRatingReducer,
  ToastReducer
});
