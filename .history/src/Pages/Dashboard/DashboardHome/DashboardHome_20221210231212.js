import React from 'react';
import { Typography } from '@mui/material';


const DashboardHome = () => {
    return (
        <div>
            <hr />
            <Typography sx={{ pb:4, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                -Dashboard Home-
            </Typography>
            <Typography sx={{ m: 3, color: 'coral', fontWeight: 400 }} variant="h6" component="div">
                Coming soon...
            </Typography>
            <hr />
        </div>
    );
};

export default DashboardHome;