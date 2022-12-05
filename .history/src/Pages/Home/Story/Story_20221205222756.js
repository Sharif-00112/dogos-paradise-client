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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reiciendis incidunt, itaque, accusantium enim dolor in nostrum eius veniam sint illo maiores natus. Numquam, earum et. Dolorem repellendus dicta, voluptates fugit sit suscipit enim corporis quidem provident minima expedita corrupti, reiciendis cumque autem sed porro perferendis consequatur aliquam eius voluptate.
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Story;