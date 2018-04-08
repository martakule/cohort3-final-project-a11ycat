import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { successToastEpic, hideToastEpic } from './features/toast/toast.epic';

const rootEpic = combineEpics(successToastEpic, hideToastEpic);

export const epicMiddleware = createEpicMiddleware(successToastEpic);
