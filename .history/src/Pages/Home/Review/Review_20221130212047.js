import React from 'react';
import { Typography } from '@mui/material';

const Review = () => {
    return (
        <div>
            <Typography sx={{ m: 3, color: 'red', fontWeight: 600 }} variant="h4" component="div">
                Happy Customer's Sayings
            </Typography>
        </div>
    );
};

export default Review;