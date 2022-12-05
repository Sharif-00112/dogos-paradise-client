import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const About = () => {
    return (
        <Box sx={{backgroundColor:"lightgray", p:4}}>
        <Typography sx={{ mt: 2, mb:4, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
            Who are we?
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6} md={8}>
                    <Typography sx={{ mx: 2, color: 'gray', fontWeight: 400 }} variant="body1" component="div">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat unde cum incidunt consequatur ducimus quos debitis error odit cumque quis qui consequuntur sequi eligendi nulla et omnis quibusdam, laboriosam facilis libero explicabo a quasi expedita dolore. Officiis, soluta? Beatae nihil perspiciatis illum ea perferendis debitis odio. At cumque, corporis ipsum soluta perspiciatis pariatur quas quisquam vitae similique deleniti odio et.
                    </Typography>
                </Grid>
                <Grid xs={6} md={4}>
                    <img style={{ width: '100%'}} src="https://i.ibb.co/c2xbHpP/dog-about.jpg" alt="dog-story" />
                </Grid>
            </Grid>
        </Box>
    </Box>
    );
};

export default About;