import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
const drawerWidth = 220;

export default function SideDrawer() {
  return (
    <>
    {(localStorage.getItem('userData'))?
    <>
    <Box sx={{ display: 'flex' }}>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Link to='/admin'>Admin Panel</Link>
        </Toolbar>
        <Divider />
        <List>
          <Link to="/admin" variant="outlined">
            <ListItem button >
              <ListItemIcon>
                <PeopleAltTwoToneIcon />
              </ListItemIcon>
              <ListItemText>
                Home
              </ListItemText>
            </ListItem>
          </Link>

          <Link to="/user" variant="outlined">
            <ListItem button >
              <ListItemIcon>
                <PeopleAltTwoToneIcon />
              </ListItemIcon>
              <ListItemText>
                Students Info
              </ListItemText>
            </ListItem>
          </Link>

          <Link to="/admin/coursePage">
            <ListItem button >
              <ListItemIcon>
                <PeopleAltTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Course's Info" />
            </ListItem>
          </Link>
          <Link to="/admin/payment">
            <ListItem button >
              <ListItemIcon>
                <PeopleAltTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Payment" />
            </ListItem>
          </Link>
          <Link to="/admin/achievment">
            <ListItem button >
              <ListItemIcon>
                <PeopleAltTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Achievment" />
            </ListItem>
          </Link>
        </List>
      </Drawer>

    </Box>
    </>:null}
    </>
  );
}
