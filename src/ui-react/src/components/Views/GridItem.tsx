import React from 'react';
import { Grid } from '@mui/material';
import { XS } from '../types/types';

type Props = {
  xs?: XS;
  md?: XS;
  lg?: XS;
  children: any;
  className?: string;
};
const GridItem = ({ xs, md, lg, children, className }: Props) => {
  return (
    <Grid item xs={xs} md={md} lg={lg} className={className}>
      {children}
    </Grid>
  );
};

export default GridItem;
