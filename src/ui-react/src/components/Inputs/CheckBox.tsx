import React, { ChangeEvent } from 'react';

import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { checkboxStyles, formControlLabelStyles } from '../styles/styles';

type Props = {
  checked?: 'Y' | 'N';
  onChange: (checked: 'Y' | 'N') => void;
  label: string;
  disabled?: boolean;
};

const CheckBox = ({ checked, onChange, label, disabled }: Props) => {
  const classes = formControlLabelStyles();
  const checkboxClasses = checkboxStyles();
  const _onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? 'Y' : 'N');
  };
  return (
    <FormControl className={classes.root}>
      <FormControlLabel
        classes={classes}
        control={
          <Checkbox
            checked={checked === 'Y'}
            onChange={_onChange}
            classes={checkboxClasses}
            color='primary'
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default CheckBox;
