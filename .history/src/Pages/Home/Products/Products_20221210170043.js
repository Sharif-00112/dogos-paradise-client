import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Dog from '../Dog/Dog';

const Products = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/dogs')
        .then(res => res.json())
        .then(data => setDogs(data))
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1, backgroundColor:"lightblue", py:4 }}>
                <Container>
                    <Typography sx={{ p:3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                        All Dogs Waiting for you to adapt
                    </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            dogs.map(dog => (
                                <Grid xs={2} sm={4} md={4} key={dog._id}>
                                    <Dog
                                        key= {dog._id}
                                        dog = {dog}
                                    ></Dog>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Products;