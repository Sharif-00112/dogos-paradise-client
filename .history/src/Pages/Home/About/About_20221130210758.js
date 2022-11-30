import React from 'react';
import { Typography } from '@mui/material';

const About = () => {
    return (
        <div>
            <Typography sx={{ m: 3, color: 'red', fontWeight: 600 }} variant="h4" component="div">
                About us
            </Typography>
        </div>
    );
};

export default About;