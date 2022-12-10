import React from 'react';
import { Typography } from '@mui/material';


const ManageProducts = () => {
    return (
        <div>
            <Typography sx={{ pb:3, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                Manage All Products
            </Typography>
            <Typography sx={{ pb:2, color: 'gray', fontWeight: 600 }} variant="h5" component="div">
                DOGS
            </Typography>
        </div>
    );
};

export default ManageProducts;