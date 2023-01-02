import React from 'react';
import { Grid } from '@mui/material';
import { XS, Spacing, AlignItems, JustifyContent, Direction } from '../types/types';

type Props = {
  xs?: XS;
  md?: XS;
  lg?: XS;
  sm?: XS;
  direction?: Direction;
  children: any;
  className?: string;
  spacing?: Spacing;
  alignItems?: AlignItems;
  justify?: JustifyContent;
  onClick?: () => void;
  overflow?:'scroll' | 'auto';
};

const GridContainer = ({
  xs,
  sm,
  md,
  lg,
  spacing,
  direction,
  children,
  className,
  alignItems,
  justify,
  onClick,
  overflow
}: Props) => {
  return (
    <Grid
      container
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      direction={direction ?? 'row'}
      alignItems={alignItems}
      className={className}
      spacing={spacing}
      overflow={overflow}
      onClick={onClick}
      justifyContent={justify}>
      {children}
    </Grid>
  );
};

export default GridContainer;
