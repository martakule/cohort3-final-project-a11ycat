import { connect } from 'react-redux';
import { SuccessToast } from './success-toast.component';

const mapStateToProps = state => ({
  location: state.listItemReducer.selectedLocation
});

export const ToastContainer = connect(mapStateToProps)(SuccessToast);
