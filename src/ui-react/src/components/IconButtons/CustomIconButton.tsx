import React from 'react';
import { IconButton } from '@mui/material';

type Props = {
  label?: string;
  onClick?: (event?: any) => void;
  className?: string;
  disabled?: boolean;
  icon?: any;
  htmlFor?:string;
};

const CustomIconButton = ({
  label,
  icon,
  onClick,
  className,
  disabled,
  htmlFor
}: Props) => {
  return (
    <IconButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      data-tip={label}
      size={'small'}>
      {htmlFor?<label htmlFor={htmlFor}>{icon}</label>:icon}  
    </IconButton>
  );
};

export default CustomIconButton;
