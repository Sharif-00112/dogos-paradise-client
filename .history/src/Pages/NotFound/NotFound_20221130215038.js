import React from 'react';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import errorIMG from '../../images/dog-404-error.jpg'


const NotFound = () => {
    return (
        <div>
            <Typography sx={{ my:7, fontSize: 25, fontWeight: 600 }} style={{color: 'red'}} variant="h6" component="div">
                Error 404!
                <br />
                Perhaps I've mistakenly eaten the cables!
            </Typography>
            <img 
                style={{width: 400 }} 
                src={errorIMG} 
                alt="404 Page Not Found!" 
            />
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