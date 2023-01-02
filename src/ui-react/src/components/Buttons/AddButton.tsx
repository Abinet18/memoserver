import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomButton from './CustomBotton';
import { Add } from '@mui/icons-material';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const AddButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomButton
      className={buttonClasses.primary}
      disabled={disabled}
      icon={<Add />}
      label={label}
      onClick={onClick}
    />
  );
};

export default AddButton;
