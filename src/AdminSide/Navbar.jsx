import * as React from 'react';
import { Button,Box,AppBar,Toolbar,IconButton,Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import SideDrawer from './SideDrawer';
export default function Navbar() {
    const nav = useNavigate('')
  return (
    <>
  
    
  <AppBar position="relative">
        <Toolbar> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:'25px' }}>
           
          </Typography>
          <Button color="inherit" onClick={ () => {
              localStorage.clear()
              nav('/login')
          }}>Logout</Button>
          
        </Toolbar>
      </AppBar>
  
    
  
    
    </>
  );
}