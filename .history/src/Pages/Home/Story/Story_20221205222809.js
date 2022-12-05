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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia possimus vel molestiae animi consequuntur architecto excepturi voluptatum cum ad? Voluptas harum alias quae rerum repellendus odio, fugit expedita veritatis? Velit dolor ea similique unde officia. Fugiat non voluptatem nemo error cumque distinctio corporis, consequatur quo? Rerum distinctio animi quis, eaque quam dolores quia qui a ut, ipsam commodi nihil beatae, pariatur voluptatibus totam saepe. Nihil quae possimus quidem sed soluta perspiciatis consequuntur. Alias illo minus totam iste hic voluptates excepturi ab! Placeat, minima voluptate eaque ratione voluptatibus consequatur a dolorum, sint itaque recusandae earum quaerat expedita dolorem doloribus, totam numquam.
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Story;