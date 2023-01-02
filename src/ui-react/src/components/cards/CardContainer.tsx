import React from 'react';

import GridContainer from '../Views/GridContainer';
import { XS, Spacing, AlignItems, JustifyContent, Direction } from '../types/types';
import { cardStyles } from '../styles/styles';


type Props = {
  xs?: XS;
  sm?: XS;
  md?: XS;
  lg?: XS;
  children: any;
  alignItems?: AlignItems;
  direction?:Direction;
  spacing?: Spacing;
  justify?: JustifyContent;
  className?: string;
  overflow?: 'scroll' | 'auto'
};

const CardContainer = ({
  xs,
  sm,
  md,
  lg,
  children,
  alignItems,
  direction,
  spacing,
  justify,
  className,
  overflow
}: Props) => {
  const classes=cardStyles();
  return (
    <GridContainer
      xs={xs}
      md={md}
      lg={lg}
      className={className??classes.container}
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justify={justify}
      overflow={overflow}>
      {children}
    </GridContainer>
  );
};

export default CardContainer;
