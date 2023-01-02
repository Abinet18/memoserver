import React from 'react';
import { NavLink } from 'react-router-dom';
import GridContainer from '../Views/GridContainer';
import GridItem from '../Views/GridItem';
import { cardStyles } from '../styles/styles';
type Props = {
  link: {
    path: string;
    icon: any;
    name: string;
  };
};

const HeaderLink = ({ link }: Props) => {
  const classes = cardStyles();
  return (
    <NavLink to={link.path} className={classes.link}>
      <GridContainer xs direction={'column'} alignItems={'center'}>
        <GridItem xs>{<link.icon />}</GridItem>
        <GridItem xs>{link.name}</GridItem>
      </GridContainer>
    </NavLink>
  );
};

export default HeaderLink;
