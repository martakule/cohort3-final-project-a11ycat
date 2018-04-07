import { SHOW_TOAST, HIDE_TOAST } from './toast.types';

export function createShowToastAction(payload) {
  return {
    type: SHOW_TOAST,
    payload,
  };
}

export function createShowToastAction() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
