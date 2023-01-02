import React from 'react';
import GridItem from '../Views/GridItem';
import Label from '../Inputs/Label';
import GridContainer from '../Views/GridContainer';
import { formStyles } from '../styles/styles';
import { XS } from '../types/types';

type Props = {
  label: string;
  children: any;
  labelSize?: XS;
};

const FormLine = ({ label, children, labelSize }: Props) => {
  const classes = formStyles();
  return (
    <GridContainer xs className={classes.formLine}>
      <GridItem xs={12} md={labelSize ? labelSize : 3}>
        <Label label={label} />
      </GridItem>
      <GridItem xs={12} md={labelSize && labelSize < 4 ? true : 12}>
        {children}
      </GridItem>
    </GridContainer>
  );
};

export default FormLine;
