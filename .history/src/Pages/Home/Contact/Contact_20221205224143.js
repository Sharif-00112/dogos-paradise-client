import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const Contact = () => {
    return (
        <Box sx={{backgroundColor:"whitesmoke", p:4}}>
        <Typography sx={{ mt: 2, mb:4, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
            Contact us
        </Typography>
        <Box sx={{  }}>

        </Box>
    </Box>
    );
};

export default Contact;