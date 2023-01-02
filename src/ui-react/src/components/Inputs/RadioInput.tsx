import React from 'react';

import { FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { checkboxStyles, formControlLabelStyles } from '../styles/styles';

type Props = {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  label?: string;
  row?: boolean;
  disabled?: boolean;
};

const RadioInput = ({
  options,
  onChange,
  label,
  selectedValue,
  row,
  disabled,
}: Props) => {
  const classes = formControlLabelStyles();
  const checkboxClasses = checkboxStyles();
  return (
    <FormControl className={classes.root}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup aria-label={label} value={selectedValue} row={row}>
        {options.map((value: string, index: number) => (
          <FormControlLabel
            key={index}
            classes={classes}
            control={
              <Radio
                checked={value === selectedValue}
                onChange={(event) => {
                  onChange(event.target.value);
                }}
                value={value}
                classes={checkboxClasses}
                color='primary'
              />
            }
            label={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
