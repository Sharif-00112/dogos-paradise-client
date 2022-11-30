import React from 'react';
import { Typography } from '@mui/material';


const Story = () => {
    return (
        <div>
            <Typography sx={{ m: 3, color: 'red', fontWeight: 600 }} variant="h4" component="div">
                Our Story
            </Typography>
        </div>
    );
};

export default Story;