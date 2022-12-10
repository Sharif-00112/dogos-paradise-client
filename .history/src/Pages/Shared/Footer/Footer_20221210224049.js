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
                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'black', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            All we provide
                        </Typography>
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/dogs'>
                                Most Adorable Puppies 
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/foods'>
                                Puppies Foods
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/checkUp'>
                                Puppies Health Check
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/vaccine'>
                                Puppies Vaccines
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/breeding'>
                                Puppies Breeding
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/cages'>
                                Puppies Cages
                        </Link>
                    </Grid>
                    <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'black', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            Let's Have a Tour
                        </Typography>
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/termsAndConditions'>
                                Terms and Conditions 
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/privacyPolicy'>
                                Privacy Policy
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/rulesAndRegulations'>
                                Laws and Regulations
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/faq'>
                                FAQ
                        </Link>
                        
                        <br />
                        <br />

                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'black', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            Social Campaigns
                        </Typography>
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/termsAndConditions'>
                                Nurturing Homeless Puppies
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color:'whitesmoke' }}
                            to = '/donate'>
                            <Button size="medium" variant="contained" style={{backgroundColor: 'green'}} sx={{my:1}}>Donate us</Button>
                        </Link>
                    </Grid>
                    <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'black', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            Our Outlets
                        </Typography>
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/outlets/dhanmondi'>
                                Dhanmondi 
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/outlets/uttara'>
                                Uttara
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/outlets/banani'>
                                Banani
                        </Link>
                        <br />
                        <Link 
                            style={{ textDecoration:'none', color: 'coral', fontWeight: 500, fontSize: 16 }} 
                            to = '/outlets/bashundhara'>
                                Bashundhara 
                        </Link>
                    </Grid>
                    <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                        <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: 'black', fontWeight: 500, fontSize: 25 }} variant="h6" component="div">
                            Head Office
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 400 }} style={{color: 'coral', fontWeight: 500, fontSize: 16 }} variant="" component="div">
                                Bashundhara Baridhara <br />
                                Dhaka-1000 
                        </Typography>

                        <a href="https://www.facebook.com/" target="blank" style={{ textDecoration:'none', color:'white' }}>
                            <Button sx={{ mt:3, mr:2 }} variant="contained" style={{backgroundColor: 'coral'}}>
                                FB
                            </Button>
                        </a>
                        <a href="https://www.google.com/" target="blank" style={{ textDecoration:'none', color:'white' }}>
                            <Button sx={{ mt:3, mr:2 }} variant="contained" style={{backgroundColor: 'coral'}}>
                                G+
                            </Button>
                        </a>
                        <a href="https://twitter.com/" target="blank" style={{ textDecoration:'none', color:'white' }}>
                            <Button sx={{ mt:3, mr:2 }} variant="contained" style={{backgroundColor: 'coral'}}>
                                TW
                            </Button>
                        </a>

                        <Typography sx={{ mt:7, fontSize: 16, fontWeight: 400, color:'black' }} variant="" component="div">
                                Call Now
                        </Typography>
                        <a href="tel:+8801773241632" style={{ textDecoration:'none', color:'white' }}>
                            <Button sx={{ mt:1, mr:2 }} variant="contained" style={{backgroundColor: 'coral'}}>
                                +8801773241632
                            </Button>
                        </a>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <Typography sx={{ p:2, fontSize: 14, fontWeight: 400, color: 'black' }} variant="" component="div">
            Copyright &copy; 2022 - All Rights Reserved 
        </Typography>
    </div>
    );
};

export default Footer;