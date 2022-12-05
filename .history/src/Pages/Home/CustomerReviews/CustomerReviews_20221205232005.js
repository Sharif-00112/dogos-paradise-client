import React from 'react';
import { Typography } from '@mui/material';


const CustomerReviews = () => {
    return (
        <div>
            <hr />
            <Typography sx={{ m: 3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                Happy Customer's Sayings
            </Typography>
            <Typography sx={{ m: 3, color: 'coral', fontWeight: 400 }} variant="h6" component="div">
                Coming soon...
            </Typography>
            <hr />
        </div>
    );
};

export default CustomerReviews;