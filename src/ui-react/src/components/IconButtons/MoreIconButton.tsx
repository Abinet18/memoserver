import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomIconButton from './CustomIconButton';
import { MoreVert } from '@mui/icons-material';

type Props = {
  label?: string;
  onClick?: (event?: any) => void;
  disabled?: boolean;
  fontSize?: 'small' | 'large';
};

const MoreIconButton = ({ label, onClick, disabled, fontSize }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomIconButton
      className={buttonClasses.close}
      disabled={disabled}
      icon={<MoreVert fontSize={fontSize || 'small'} />}
      label={label}
      onClick={onClick}
    />
  );
};

export default MoreIconButton;
