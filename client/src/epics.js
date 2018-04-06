import { combineEpics, createEpicMiddleware } from 'redux-observable';

// these are all epic actions, like written in the above example
import {
  fetchPokemonsEpic,
  showNotificationEpic,
  faveNote,
  hideNotificationEpic
} from './features/pokemon-list/pokemon-list.epics';

//this combineEpics function simple takes each epic as an argument and creates a single root 'epic'
const rootEpic = combineEpics(
  fetchPokemonsEpic,
  showNotificationEpic,
  faveNote,
  hideNotificationEpic
);

// createEpicMiddleware wraps your combined epic, and creates the hooks for it listen to redux's middlware system
export const epicMiddleware = createEpicMiddleware(rootEpic);
