import { connect } from 'react-redux';
import { ToastComponent } from './toast.component';
import { createHideToastAction } from './toast.action';

const mapStateToProps = state => ({
  showToast: false,
  level: 'success',
  message: 'something'
});

const mapDispatchToProps = dispatch => ({
  hideToast: () => dispatch(createHideToastAction())
});

export const ToastContainer = connect(mapStateToProps, mapDispatchToProps)(
  ToastComponent
);
