import React from 'react';

import GridContainer from '../Views/GridContainer';
import GridItem from '../Views/GridItem';
import { XS, AlignItems, JustifyContent } from '../types/types';
import { cardStyles } from '../styles/styles';
import CardContainer from './CardContainer';

type Props = {
  xs?: XS;
  sm?: XS;
  md?: XS;
  lg?: XS;
  alignItems?: AlignItems;
  children: any;
  header?: any;
  footer?: any;
  className?: string;
  defaultClass?:boolean;
  justify?: JustifyContent;
  hide?:boolean;
};

const Card = ({
  xs,
  sm,
  md,
  lg,
  children,
  header,
  footer,
  className,
  defaultClass,
  alignItems,
  justify,
  hide
}: Props) => {
  const classes=cardStyles();
  return hide?null:(
    <CardContainer
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      alignItems={alignItems || 'flex-start'}
      justify={justify || 'flex-start'}
     className={className || (defaultClass ? classes.root: undefined)}>
        <GridItem xs={12}> {header}</GridItem>
        <GridItem xs={12}>{children}</GridItem>
        <GridItem xs={12}>{footer}</GridItem>
      </CardContainer>
    
  );
};

export default Card;
