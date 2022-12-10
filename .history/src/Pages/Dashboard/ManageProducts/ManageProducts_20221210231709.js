import React from 'react';
import { Typography } from '@mui/material';


const ManageProducts = () => {
    return (
        <div>
            <Typography sx={{ pb:2, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                Manage Products
            </Typography>
            <Typography sx={{ pb:2, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                DOGS
            </Typography>
        </div>
    );
};

export default ManageProducts;