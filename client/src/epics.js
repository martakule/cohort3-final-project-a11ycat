import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { SuccessToastEpic } from './features/toast/toast.epic';

const rootEpic = combineEpics(SuccessToastEpic);

export const epicMiddleware = createEpicMiddleware(rootEpic);
