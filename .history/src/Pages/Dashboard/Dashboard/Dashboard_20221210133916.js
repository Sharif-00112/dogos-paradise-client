import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';

import { 
  Routes,
  Route
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AllUsers from '../AllUsers/AllUsers';
import ManageProducts from '../ManageProducts/ManageProducts';
 
const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar style={{backgroundColor: 'coral'}} /> */}
      <Divider style={{backgroundColor: 'coral'}} sx={{pt:11.3}} />

      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = 'dashboard'>
        <Button sx={{mx:3}} color="inherit">Dashboard</Button>
      </Link>

      {/* erase after admin implementation  */}
      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = 'manageProducts'>
        <Button sx={{mx:3}} color="inherit">Manage Products</Button>
      </Link>
      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = 'makeAdmin'>
        <Button sx={{mx:3}} color="inherit">Make Admin</Button>
      </Link>
      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = 'allUsers'>
        <Button sx={{mx:3}} color="inherit">All Users</Button>
      </Link>
      {/* erase after admin implementation  */}

      {admin && <Box>
        <Link 
          style={{ textDecoration:'none', color:'black' }}
          to = 'manageProducts'>
          <Button sx={{mx:3}} color="inherit">Manage Products</Button>
      </Link>
        <Link 
          style={{ textDecoration:'none', color:'black' }}
          to = 'makeAdmin'>
          <Button sx={{mx:3}} color="inherit">Make Admin</Button>
        </Link>
        <Link 
          style={{ textDecoration:'none', color:'black' }}
          to = 'allUsers'>
          <Button sx={{mx:3}} color="inherit">All Users</Button>
        </Link>
      </Box>}

      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div >
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
                }}
                style={{backgroundColor: 'coral'}}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography sx={{ py: 3}} variant="h4" noWrap component="div">
                    Dashboard
                </Typography>
                <Link 
                    style={{ textDecoration:'none', color:'white' }}
                    to = '/home'>
                    <Button sx={{mx:2}} color="inherit">Home</Button>
                </Link>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Routes>
                    {/* <Route path = 'appointment' element={<Appointment/>}/> */}
                    <Route path = '/' element={<DashboardHome/>}/>
                    <Route path = 'dashboard' element={<DashboardHome/>}/>
                    {/* <Route path = 'makeAdmin' element={<MakeAdmin/>}/> */}
                    {/* <Route path = 'addDoctor' element={<AddDoctor/>}/> */}
                    {/* way-1 to secure route through AdminRoute  */}
                    <Route path = 'makeAdmin' element = {
                    //   <AdminRoute>
                        <MakeAdmin></MakeAdmin>
                    //   </AdminRoute>
                    }> </Route>
                    <Route path = 'manageProducts' element = {
                    //   <AdminRoute>
                        <ManageProducts></ManageProducts>
                    //   </AdminRoute>
                    }> </Route>
                    <Route path = 'allUsers' element = {
                    //   <AdminRoute>
                        <AllUsers></AllUsers>
                    //   </AdminRoute>
                    }> </Route>
                </Routes>
                
            </Box>
        </Box>
    </div>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
