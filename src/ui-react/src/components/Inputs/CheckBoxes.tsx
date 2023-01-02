import React from 'react';
import { Checkbox, FormLabel, FormControl, FormGroup, FormControlLabel } from '@mui/material';
import { checkboxStyles, formControlLabelStyles } from '../styles/styles';
import { Option } from '../types/types';

type Props = {
  options: Option[];
  selectedValsStr: string;
  onChange: (selectedValStr: string) => void;
  label?: string;
  disabled?: boolean;
  row?: boolean;
};

const CheckBoxes = ({
  options,
  onChange,
  label,
  row,
  disabled,
  selectedValsStr,
}: Props) => {
  const classes = formControlLabelStyles();
  const checkboxClasses = checkboxStyles();
  const selectedValues = selectedValsStr?.split(',') ?? [];
  const _onChange = (value: string, checked: boolean) => {
    if (checked && !selectedValues.includes(value)) {
      onChange([...selectedValues, value].join(','));
    } else if (!checked && selectedValues.includes(value)) {
      const newSelectedValues = selectedValues.filter((v) => v !== value);
      onChange(newSelectedValues.join(','));
    }
  };
  return (
    <FormControl className={classes.root}>
      <FormLabel component='legend'>{label}</FormLabel>
      <FormGroup row={row}>
        {options.map((option: Option, index: number) => (
          <FormControlLabel
            key={index}
            classes={classes}
            control={
              <Checkbox
                checked={selectedValues.includes(option.value)}
                onChange={(event) => {
                  _onChange(option.value, event.target.checked);
                }}
                classes={checkboxClasses}
                color='primary'
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckBoxes;
