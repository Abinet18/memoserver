import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomIconButton from './CustomIconButton';
import { Upload } from '@mui/icons-material';

type Props = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  htmlFor?:string
};

const UploadIconButton = ({ label, onClick, disabled,htmlFor }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomIconButton
      className={buttonClasses.edit}
      disabled={disabled}
      icon={<Upload/>}
      label={label}
      onClick={onClick}
      htmlFor={htmlFor}
    />
  );
};

export default UploadIconButton;
