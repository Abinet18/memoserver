import React from 'react';
import { TextField } from '@mui/material';

import { textFieldRootStyles, textFieldLabelStyles } from '../styles/styles';

interface Props {
  params: any;
  inputClasses?: any;
  labelClasses?: any;
  label?: string;
  placeholder?: string;
}

export default function CustomTextField({
  params,
  inputClasses,
  label,
  placeholder,
}: Props) {
  const classes = textFieldRootStyles();
  const labelClasses = textFieldLabelStyles();
  const InputProps = { ...params.InputProps, classes: inputClasses || classes };

  return (
    <TextField
      {...params}
      InputProps={InputProps}
      label={label}
      placeholder={placeholder}
      InputLabelProps={{
        ...params.InputLabelProps,
        classes: labelClasses,
      }}
    />
  );
}
