import React from 'react';
import { Button } from '@mui/material';

type Props = {
  label?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: any;
};

const CustomButton = ({ label, icon, onClick, className, disabled }: Props) => {
  return (
    <Button className={className} disabled={disabled} onClick={onClick}>
      {icon}
      {label}
    </Button>
  );
};

export default CustomButton;
