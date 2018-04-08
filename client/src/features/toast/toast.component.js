import React from 'react';
import styled, { css } from 'styled-components';
import { variables } from '../../ui-kit/variables';

export const ToastComponent = props => {
  if (props.showToast) {
    return (
      <StyledToast onClick={props.hideToast} level={props.level}>
        {props.message}
      </StyledToast>
    );
  } else return null;
};

const StyledToast = styled.div`
  position: fixed;
  top: 2em;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 600px;
  min-width: 320px;
  border-radius: ${variables.button.borderRadius};
  padding: 25px 20px 25px 70px;
  line-height: 1.5;
  background: ${variables.colour.paleGrey};
  color: ${variables.colour.offBlack};
  box-shadow: 4px 4px 12px ${variables.colour.lightGrey};
  text-align:center;

  &:before {
    color: white;
    height: 50px;
    width: 50px;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 30px;
    padding: 3px 3px 2px 5px;
    border-radius: ${variables.circle};
  }

  ${props =>
    props.level === 'success' &&
    css`
      &:before {
        background: #6cd577;
        background: linear-gradient(to bottom right, #6cd577, #b6eec9);
        content: '✔';
      }
    `} ${props =>
    props.level === 'error' &&
    css`
      &:before {
        background: #eb6773;
        background: linear-gradient(to bottom right, #eb6773, #f3b2ba);
        content: '✘';
      }
    `};
`;
