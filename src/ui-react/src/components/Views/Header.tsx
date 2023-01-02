
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import Card from '../cards/Card';
import CardContainer from '../cards/CardContainer';
import GridItem from './GridItem';



interface Props {
  label?:string;
  actions?:any;
  actionpos?:'left' | 'right';
}



export function Header({label,actions,actionpos}: Props) {
  
  return (
    <GridItem xs={12}>
    <CardContainer direction={actionpos==='left'?'row-reverse':'row'} justify='space-between'>
    <GridItem xs={10}><h3>{label}</h3></GridItem>
    <GridItem>{actions}</GridItem>
    </CardContainer>
    </GridItem>
  );
}