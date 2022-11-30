import React from 'react';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
// import errorIMG from '../../images/dribbble_1.gif'
import errorIMG from '../../images/dog-404-error.jpg'


const NotFound = () => {
    return (
        <div>
            <Box>
                <Typography sx={{ mt:7, fontSize: 35, fontWeight: 600 }} style={{color: 'red'}} variant="h4" component="div">
                    404 Page Not Found!
                </Typography>
                <img 
                    style={{width: 400 }} 
                    src={errorIMG} 
                    alt="404 Page Not Found!" 
                />
            </Box>
            <br />
            <NavLink 
                style={{ textDecoration:'none' }}
                to='/'>
                <Button variant="contained" sx={{ m:3 }} style={{ backgroundColor: 'red' }}>Go to Home</Button>
            </NavLink>
        </div>
    );
};

export default NotFound;