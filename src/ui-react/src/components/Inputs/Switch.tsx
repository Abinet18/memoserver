import React, { ChangeEvent } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { checkboxStyles, formControlLabelStyles } from '../styles/styles';

type Props = {
  checked?: 'Y' | 'N';
  onChange: (checked: 'Y' | 'N') => void;
  label: string;
};

const SwitchInput = ({ checked, onChange, label }: Props) => {
  const classes = formControlLabelStyles();
  const checkboxClasses = checkboxStyles();
  const _onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? 'Y' : 'N');
  };
  return (
    <FormControlLabel
      classes={classes}
      control={
        <Switch
          checked={checked === 'Y'}
          onChange={_onChange}
          classes={checkboxClasses}
        />
      }
      label={label}
    />
  );
};

export default SwitchInput;
