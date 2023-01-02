import React, {useState} from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { ClickAwayListener, Popover, Popper } from '@mui/material';
import MenuIconButton from '../components/IconButtons/MenuIconButton';
import { Header } from '../components/Views/Header';
import Card from '../components/cards/Card';
import EditIconButton from '../components/IconButtons/EditIconButton';
import { AddAttachement } from './Attachement';
import UploadIconButton from '../components/IconButtons/UploadIconButton';
import DeleteIconButton from '../components/IconButtons/DeleteIconButton';

export default function ActivityIconMenu({acid,onEdit,onRemove}:{acid:string,onEdit:()=>void,onRemove:()=>void}) {
  const [open,setOpen]=useState(false);
  const [anchorEl,setAnchorEl]=useState(null);
  const onMenuClick = (e:any)=> {
    setOpen(!open);
    if(!open) {
      setAnchorEl(e.target);
    }
    else {
      setAnchorEl(null);
    }
  }
  const onBlur = ()=> {
    if(open) {
      setOpen(false);
      setAnchorEl(null);
    }
   
  }
  return (
    <>
    <MenuIconButton onClick={onMenuClick}/>
    {/* <Popover
  id={acid}
  open={open}
  anchorEl={anchorEl}

  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  // onBlur={onBlur}
>  */}
<Popper id={acid} open={open} anchorEl={anchorEl}>

    <Card defaultClass>
      <MenuList>
        <MenuItem onClick={onEdit}>
          <ListItemIcon>
            <EditIconButton/>
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <label htmlFor={`file-input-${acid}`}>
        <MenuItem>
          <UploadIconButton htmlFor={`file-input-${acid}`}/>
          <ListItemText>Upload</ListItemText>
       </MenuItem>
       </label> 
       <MenuItem onClick={onRemove}>
          <ListItemIcon>
            <DeleteIconButton/>
          </ListItemIcon>
          <ListItemText>Remove</ListItemText>
        </MenuItem>   
      </MenuList>
    </Card>

   </Popper>
    {/* </Popover> */}
    </>
  );
}
