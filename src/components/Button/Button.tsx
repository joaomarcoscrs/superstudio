import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { Debug, Runner } from '../../actions-core';

export interface ButtonProps extends MantineButtonProps {
  label: string;
  action?: string;
  workflowId?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, workflowId, action, onClick, ...props }) => {
  const actionRunner = new Runner(new Debug());

  function handleClick() {
    if (onClick) {
      onClick();
    } else if (action && workflowId) {
      actionRunner.run(action, workflowId);
    }
  }
  return (
    <MantineButton {...props} onClick={handleClick}>
      {label}
    </MantineButton>
  );
};

export default Button;
