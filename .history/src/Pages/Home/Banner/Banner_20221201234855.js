import React from 'react';
import { Typography } from '@mui/material';

const Banner = () => {
    return (
        <div>
            <Typography sx={{ m: 3, color: 'red', fontWeight: 600 }} variant="h4" component="div">
                Head Banner
            </Typography>
            <img style={{ width: '80%'}} src="https://i.ibb.co/Mnn0NX3/dog-cover-1.jpg" alt="dog-human playing" />
        </div>
    );
};

export default Banner;