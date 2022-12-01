import React from 'react';
import { Typography } from '@mui/material';

const Banner = () => {
    return (
        <div>
            <Typography sx={{ m: 3, color: 'red', fontWeight: 600 }} variant="h4" component="div">
                Head Banner
            </Typography>
            
        </div>
    );
};

export default Banner;