import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  

  return (
    <AppBar position="static" sx={{ background: "linear-gradient(to right, rgba(32, 40, 119, 1), rgba(55, 46, 149, 1), rgba(83, 49, 177, 1), rgba(114, 48, 205, 1), rgba(150, 41, 230, 1))" }}>
      <Container maxWidth="xl">
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 5,p:1, display: { xs: 'flex', md: 'flex', flexGrow: 10 } }}
          >
            Code with SadiQ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'} }}>
            <Link style={{ textDecoration:'none' }}  to="/" >
              <Button
                sx={{ my: 2, color: 'rgba(255, 255, 255, .55)','&:hover':{color:'white'}, display: 'block' }}
              >
                Home
              </Button>
            </Link>

           <Link style={{ textDecoration:'none' }}  to='/coursePage'>
           <Button
              sx={{ my: 2, display: 'block', color: 'rgba(255, 255, 255, .55)','&:hover':{color:'white'} }}
            >
              Course
            </Button>
           </Link>
           <Link style={{ textDecoration:'none' }}  to='/paymentPage'>
           <Button
              sx={{ my: 2, color: 'rgba(255, 255, 255, .55)','&:hover':{color:'white'}, display: 'block' }}
            >
              Online Payment
            </Button>
           </Link>
           <Link style={{ textDecoration:'none' }}  to="/apply">
           <Button
              variant='contained'
              sx={{ my: 2,backgroundColor:'#ffc107','&:hover':{background:'#ffcc32'}, color:'black',display: 'block' }}
            >
              Apply for Admission
            </Button>
           </Link>

          </Box>
        </Toolbar >
      </Container >
    </AppBar>
  );
};
export default Header;
