import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { BaseAction, Debug, Runner } from '../../actions-core';

export interface ButtonProps extends MantineButtonProps {
  label: string;
  icon?: IconDefinition;
  action?: typeof BaseAction;
  actionArgs?: any[];
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  action = Debug,
  actionArgs = [],
  ...props
}) => {
  const actionRunner = new Runner(action as unknown as typeof BaseAction);

  return (
    <MantineButton {...props} onClick={() => actionRunner.run(...actionArgs)}>
      <span className="flex items-center gap-2">
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
      </span>
    </MantineButton>
  );
};

export default Button;
