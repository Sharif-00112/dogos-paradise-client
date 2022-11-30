import React from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Footer = () => {
    return (
        <div style={{ backgroundColor: 'lightgray' }}>
        <Container sx={{ py: 5, px:10 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'red', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            All we provide
                        </Typography>
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/emergencyDentalCare'>
                                Most Adorable Puppies 
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Foods
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Health Check
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Vaccines
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Breeding
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Cages
                        </Link>
                    </Grid>
                    <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'red', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            All we provide
                        </Typography>
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/emergencyDentalCare'>
                                Most Adorable Puppies 
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Foods
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Health Check
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Vaccines
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Breeding
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Cages
                        </Link>
                    </Grid>
                    <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'red', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            All we provide
                        </Typography>
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/emergencyDentalCare'>
                                Most Adorable Puppies 
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Foods
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Health Check
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Vaccines
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Breeding
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'red', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Cages
                        </Link>
                    </Grid>
                    <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'red', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            Our Address
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 400 }} style={{color: 'red', fontWeight: 500, fontSize: 16 }} variant="" component="div">
                                Bashundhara Baridhara <br />
                                Dhaka-1000 
                        </Typography>

                        <a href="https://www.facebook.com/" target="_blank" style={{ textDecoration:'none', color:'white' }}>
                            <Button sx={{ mt:3, mr:2 }} variant="contained" style={{backgroundColor: 'red'}}>
                                FB
                            </Button>
                        </a>
                        <a href="https://www.google.com/" target="_blank" style={{ textDecoration:'none', color:'white' }}>
                            <Button sx={{ mt:3, mr:2 }} variant="contained" style={{backgroundColor: 'red'}}>
                                G+
                            </Button>
                        </a>
                        <a href="https://twitter.com/" target="_blank" style={{ textDecoration:'none', color:'white' }}>
                            <Button sx={{ mt:3, mr:2 }} variant="contained" style={{backgroundColor: 'red'}}>
                                TW
                            </Button>
                        </a>

                        <Typography sx={{ mt:7, fontSize: 16, fontWeight: 400, color:'red' }} variant="" component="div">
                                Call Now
                        </Typography>
                        <a href="tel:+8801773241632" style={{ textDecoration:'none', color:'white' }}>
                            <Button sx={{ mt:1, mr:2 }} variant="contained" style={{backgroundColor: 'red'}}>
                                +8801773241632
                            </Button>
                        </a>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <Typography sx={{ p:2, fontSize: 14, fontWeight: 400, color: 'red' }} variant="" component="div">
            Copyright &copy; 2022 - All Rights Reserved 
        </Typography>
    </div>
    );
};

export default Footer;