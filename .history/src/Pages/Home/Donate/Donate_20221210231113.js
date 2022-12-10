import React from 'react';
import { Typography } from '@mui/material';


const Donate = () => {
    return (
        <div>
            <hr />
            <Typography sx={{ m: 3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                Contribute to our social works
            </Typography>
            <Typography sx={{ m: 3, color: 'coral', fontWeight: 400 }} variant="h6" component="div">
                Coming soon...
            </Typography>
            <hr />
        </div>
    );
};

export default Donate;