import React from 'react';
import { Toast } from '../../ui-kit/toast';

export const SuccessToast = props => (
  <Toast
    state="success"
    message={`Your review for ${props.location} has been submitted.`}
  />
);
