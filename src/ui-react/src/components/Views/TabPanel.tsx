import React, { useState } from 'react';
import { Paper, Tabs, Tab, Typography } from '@mui/material';
import EditButton from '../IconButtons/EditIconButton';

type Props = {
  children: React.ReactNode;
};
function TabPanel(props: Props) {
  return (
    <div role='tabpanel'>
      <Typography>{props.children}</Typography>
    </div>
  );
}

const tabPanels: { [key: string]: JSX.Element } = {
  active1: (
    <TabPanel>
      Item One <EditButton />
    </TabPanel>
  ),
  disabled: <TabPanel>Item Two</TabPanel>,
  active2: <TabPanel>Item Three</TabPanel>,
};
export default function TabPanels() {
  const [value, setValue] = useState('');

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}>
        <Tab label='Active' value={'active1'} />
        <Tab label='Disabled' disabled value={'disabled'} />
        <Tab label='Active' value={'active2'} />
      </Tabs>
      {tabPanels[value] || null}
    </Paper>
  );
}
