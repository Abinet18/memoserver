import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomButton from './CustomBotton';

type Props = {
  label?: string;
  onClick?: (e?:Event) => void | Promise<void>;
  disabled?: boolean;
};

const SubmitButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomButton
      className={buttonClasses.primary}
      disabled={disabled}
      label={label}
      onClick={onClick}
    />
  );
};

export default SubmitButton;
