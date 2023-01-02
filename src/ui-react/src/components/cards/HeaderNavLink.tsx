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

const HeaderNavLink = ({ link }: Props) => {
  const classes = cardStyles();
  return (
    <NavLink to={link.path} className={classes.navlink}>
      <GridContainer xs alignItems={'center'}>
        <GridItem xs={4}>{<link.icon />}</GridItem>
        <GridItem xs={1}> </GridItem>
        <GridItem xs={7}>{link.name}</GridItem>
      </GridContainer>
    </NavLink>
  );
};

export default HeaderNavLink;
