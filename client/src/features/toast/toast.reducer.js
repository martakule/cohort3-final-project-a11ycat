import { SHOW_TOAST, HIDE_TOAST } from './toast.types';

const INITIAL_STATE = {
  showToast: false,
  message: '',
  level: ''
};

export const ToastReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SHOW_TOAST:
      return {
        showToast: true,
        message: payload.message,
        level: payload.level
      };
    case HIDE_TOAST:
      return INITIAL_STATE;

    default:
      return state;
  }
};
