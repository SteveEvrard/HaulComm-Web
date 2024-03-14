import { AppBar, Button, Toolbar, Typography, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    document.body.classList.add('body--no-scroll');
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (to) => {
    document.body.classList.remove('body--no-scroll');
    setAnchorEl(null);
    if (to) {
      scroll.scrollTo(to);
    }
  };

  const handleMenuItemClick = (to) => {
    return () => {
      // Use scroller.scrollTo to programmatically scroll to the desired element
      scroller.scrollTo(to, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
      handleClose();
    };
  };

  const handleTitleClick = () => {
    scroll.scrollToTop({
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        {isMobile && (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" size="large" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={open} onClose={() => handleClose()}>
              <MenuItem onClick={handleMenuItemClick('about-us')} sx={{ fontSize: '1.1rem' }}>About Us</MenuItem>
              <MenuItem onClick={handleMenuItemClick('operator')} sx={{ fontSize: '1.1rem' }}>Operator</MenuItem>
              <MenuItem onClick={handleMenuItemClick('broker-owner')} sx={{ fontSize: '1.1rem' }}>Broker/Owner</MenuItem>
              {/* <MenuItem onClick={handleMenuItemClick('contact')} sx={{ fontSize: '1.1rem' }}>Contact</MenuItem> */}
            </Menu>
          </>
        )}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#333333', cursor: 'pointer' }} onClick={handleTitleClick}>
          HaulComm
        </Typography>
        {!isMobile && (
          <>
            <Link to="about-us" smooth={true} duration={500} style={{ textDecoration: 'none', marginRight: theme.spacing(2) }}>
              <Button sx={{ 
                color: '#333333', 
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)', // Adjust hover background color as needed
                  transform: 'scale(1.05)', // Slightly increase the size on hover
                  transition: 'transform 0.3s' // Smooth transition for transform effect
                }
              }}>About Us</Button>
            </Link>
            <Link to="operator" smooth={true} duration={500} style={{ textDecoration: 'none', marginRight: theme.spacing(2) }}>
              <Button sx={{ 
                color: '#333333', 
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s'
                }
              }}>Operator</Button>
            </Link>
            <Link to="broker-owner" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
              <Button sx={{ 
                color: '#333333', 
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s'
                }
              }}>Broker/Owner</Button>
            </Link>
            {/* <Link to="contact" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
              <Button sx={{ 
                color: '#333333', 
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s'
                }
              }}>Contact</Button>
            </Link> */}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
