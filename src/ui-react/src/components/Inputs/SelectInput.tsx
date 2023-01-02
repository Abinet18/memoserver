import { Autocomplete } from '@mui/material';
import React from 'react';
import { Option } from '../types/types';
import { selectInputStyles } from '../styles/styles';
import CustomTextField from './CustomTextField';

type Props = {
  label?: string;
  value: string;
  options: Option[];
  disableClearable?: boolean;
  onChange: (value: string) => void;
  groupBy?: (option: Option) => string;
  placeholder?: string;
};

const SelectInput = ({
  label,
  value,
  onChange,
  options,
  disableClearable,
  placeholder,
  groupBy,
}: Props) => {
  const classes = selectInputStyles();
  const selectedOption = options.find((option) => option.value === value);
  const _onChange = (option: Option | null) => {
    onChange(option?.value ?? '');
  };
  return (
    <Autocomplete
      value={selectedOption}
      disableClearable={disableClearable}
      options={options}
      getOptionLabel={(option: Option) => option.label}
      groupBy={groupBy}
      onChange={(event, option) => {
        _onChange(option);
      }}
      onHighlightChange={(event, option) => {
        console.log('highlight selected', option)
      }}
      className={classes.root}
      renderInput={(params) => (
        <CustomTextField
          params={params}
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default SelectInput;
