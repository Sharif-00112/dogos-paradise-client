import React from 'react';
import { Typography } from '@mui/material';


const Messages = () => {
    return (
        <div>
            <Typography sx={{ pb:4, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                All Registered users:
            </Typography>
        </div>
    );
};

export default Messages;