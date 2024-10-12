import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';

export interface ButtonProps extends MantineButtonProps {
  label: string;
  action?: string;
  workflowId?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, workflowId, action, onClick, ...props }) => {
  function handleClick() {
    if (onClick) {
      onClick();
    } else if (action && workflowId) {
      console.log('action', action);
      console.log('workflowId', workflowId);
    }
  }
  return (
    <MantineButton {...props} onClick={handleClick}>
      {label}
    </MantineButton>
  );
};

export default Button;
