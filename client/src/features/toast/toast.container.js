import { connect } from 'react-redux';
import { ToastComponent } from './toast.component';
import { createHideToastAction } from './toast.actions';

const mapStateToProps = state => ({
  showToast: state.ToastReducer.showToast,
  level: state.ToastReducer.level,
  message: state.ToastReducer.message
});

const mapDispatchToProps = dispatch => ({
  hideToast: () => dispatch(createHideToastAction())
});

export const ToastContainer = connect(mapStateToProps, mapDispatchToProps)(
  ToastComponent
);
