import React from 'react';
import { SketchPicker } from 'react-color';

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const ColorPicker = ({ label, value, onChange }: Props) => {
  //   const labelClasses = inputLabelStyles();
  //   const textInputClasses = textFieldRootStyles();
  console.log('color', value);
  return (
    <SketchPicker
      color={value || '#333'}
      // onChange={(color, e) => onChange(color.hex)}
      onChangeComplete={(color) => {
        console.log('color changed', color.hex);
        onChange(color.hex);
      }}
    />
  );
};

export default ColorPicker;
