import React from 'react';
import { Typography } from '@mui/material';

const Banner = () => {
    return (
        <div>
            {/* <Typography sx={{ m: 3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                Head Banner
            </Typography> */}
            <img style={{ width: '100%'}} src="https://i.ibb.co/Mnn0NX3/dog-cover-1.jpg" alt="dog-human playing" />
            <Typography sx={{ mt: -25, mb:8, color: 'coral', fontWeight: 900 }} variant="h3" component="div">
                Dogs are not only pets;
                <br /> <br />
                They are "L O V E"
            </Typography>
        </div>
    );
};

export default Banner;