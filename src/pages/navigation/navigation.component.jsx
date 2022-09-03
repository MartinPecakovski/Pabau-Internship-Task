import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { ReactComponent as Logo } from '../../assets/spacex.svg';
import './navigation.styles.css';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { autocompleteClasses } from '@mui/material';

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        sx={{ bgcolor: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        position='sticky'
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters >
           

          
            <Typography
              variant='h5'
              noWrap
              sx={{
                mr: 2,
                flexGrow: 1,
                textAlign: 'center',
              }}
            >
              <Link to='/'>
                <Logo className='logo' />
              </Link>
            </Typography>
            
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Navigation;
