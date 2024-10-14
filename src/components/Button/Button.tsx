import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { BaseAction, Debug, Runner } from '../../actions-core';

export interface ButtonProps extends MantineButtonProps {
  label: string;
  action?: BaseAction;
  actionArgs?: any[];
}

const Button: React.FC<ButtonProps> = ({ label, action = Debug, actionArgs = [], ...props }) => {
  const actionRunner = new Runner(action as unknown as typeof BaseAction);

  return (
    <MantineButton {...props} onClick={() => actionRunner.run(...actionArgs)}>
      {label}
    </MantineButton>
  );
};

export default Button;
