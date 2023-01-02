import { Menu } from '@mui/icons-material';

import React from 'react';
import { buttonStyles } from '../styles/styles';
import CustomIconButton from './CustomIconButton';

type Props = {
  label?: string;
  onClick?: (event?: any) => void;
  disabled?: boolean;
  fontSize?: 'small' | 'large';
};

const MenuIconButton = ({ label, onClick, disabled, fontSize }: Props) => {
  const buttonClasses = buttonStyles();
  return (
    <CustomIconButton
      className={buttonClasses.close}
      disabled={disabled}
      icon={<Menu fontSize={fontSize || 'small'} />}
      label={label}
      onClick={onClick}
    />
  );
};

export default MenuIconButton;
