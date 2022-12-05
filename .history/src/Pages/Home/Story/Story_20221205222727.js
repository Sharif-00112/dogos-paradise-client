import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


const Story = () => {
    return (
        <Box sx={{backgroundColor:"whitesmoke", p:4}}>
            <Typography sx={{ mt: 2, mb:4, color: 'gray', fontWeight: 600 }} variant="h4" component="div">
                Our Story
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={4}>
                        <img style={{ width: '100%'}} src="https://i.ibb.co/M8w31YS/dog-story.jpg" alt="dog-story" />
                    </Grid>
                    <Grid xs={6} md={8}>
                        text
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Story;