import React from 'react';
import { labelStyles } from '../styles/styles';

type Props = {
  label?: string;
};

const Label = ({ label }: Props) => {
  const labelClasses = labelStyles();
  return <div className={labelClasses.root}>{label}</div>;
};

export default Label;
