import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomIconButton from './CustomIconButton';
import { Add } from '@mui/icons-material';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const AddIconButton = ({ label, onClick, disabled }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomIconButton
      className={buttonClasses.close}
      disabled={disabled}
      icon={<Add fontSize={'small'} />}
      label={label}
      onClick={onClick}
    />
  );
};

export default AddIconButton;
