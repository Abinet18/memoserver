import { getOffsetLeft } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

type Horizontal = 'left' | 'center' | 'right' | undefined;
type Vertical = 'top' | 'center' | 'bottom' | undefined;
interface PositionProps  {
  vertical: Vertical;
  horizontal: Horizontal
};

interface Props extends PositionProps {
  children: any
}

const getLeftPos = (horizontal:Horizontal)=> {
   if(horizontal === 'center') {
    return '50%';
   }
   if(horizontal === 'right') {
    return '100%';
   }
   return 0;
}

const getTopPos = (vertical:Vertical)=> {
  if(vertical === 'center') {
   return '50%';
  }
  if(vertical === 'bottom') {
   return '100%';
  }
  return 0;
}
const floaterStyles = makeStyles(()=> ({
  root: ({vertical,horizontal}:PositionProps)=> ({
    position:'absolute',
    left: getLeftPos(horizontal),
    top: getTopPos(vertical)
  })
}));

export function Floater({vertical,horizontal,children}: Props) {
  console.log('floater vert hor',vertical,horizontal);
  const classes = floaterStyles({vertical:vertical,horizontal:horizontal});
  return (
    <div className={classes.root}>
     {children}
    </div>
  );
}

