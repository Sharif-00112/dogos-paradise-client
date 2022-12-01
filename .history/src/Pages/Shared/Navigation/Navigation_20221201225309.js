import React from 'react';
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
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const pages = [
    <Link 
        style={{ textDecoration:'none', color:'white' }}
        to = '/home'>
        <Button sx={{mx:1}} color="inherit">Home</Button>
    </Link>,
    <Link 
        style={{ textDecoration:'none', color:'white' }}
        to = '/dogs'>
        <Button sx={{mx:1}} color="inherit">Dogs</Button>
    </Link>,
    <Link 
        style={{ textDecoration:'none', color:'white' }}
        to = '/blogs'>
        <Button sx={{mx:1}} color="inherit">Blogs</Button>
    </Link>,
    // <Link 
    //     style={{ textDecoration:'none', color:'white' }}
    //     to = '/about'>
    //     <Button sx={{mx:1}} color="inherit">About</Button>
    // </Link>,
    // <Link 
    //     style={{ textDecoration:'none', color:'white' }}
    //     to = '/contact'>
    //     <Button sx={{mx:1}} color="inherit">Contact</Button>
    // </Link>,
    <Link 
        style={{ textDecoration:'none', color:'white' }}
        to = '/dashboard'>
        <Button sx={{mx:1}} color="inherit">Dashboard</Button>
    </Link>,
];
const settings = [
    <Link 
        // style={{ textDecoration:'none', color:'white' }}
        style={{ textDecoration:'none' }}
        to = '/login'>
        {/* <Button color="inherit">Appointment</Button> */}
        Profile
    </Link>,
    <Link 
        // style={{ textDecoration:'none', color:'white' }}
        style={{ textDecoration:'none' }}
        to = '/dashboard'>
        {/* <Button color="inherit">Appointment</Button> */}
        Dashboard
    </Link>
];
 
const Navigation = () => {
    const { user, logout } = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Dogos Paradise
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' }
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem style={{backgroundColor: 'gray'}} key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Dogos Paradise
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color:'gray' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                    
                    {
                        user?.email ?
                        <NavLink 
                            style={{ textDecoration:'none', color:'white' }}
                            to = '/login'>
                            <Button sx={{ mx:2 }} onClick={logout} color="inherit">Logout</Button>
                        </NavLink>
                        :
                        <NavLink 
                            style={{ textDecoration:'none', color:'white' }}
                            to = '/login'>
                            <Button sx={{ mx:2 }} color="inherit">Login</Button>
                        </NavLink>
                    }

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={user.email}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={user.email} src={user.photoURL} />
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navigation;