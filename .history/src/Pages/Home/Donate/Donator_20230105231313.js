import { Typography } from '@mui/material';
import React, { Component } from 'react';

class Donator extends Component {
    render() {
        return (
            <div>
                <Typography sx={{ m: 3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                    Name: 
                </Typography>
                <Typography sx={{ m: 3, color: 'coral', fontWeight: 400 }} variant="h6" component="div">
                    Email: 
                </Typography>
            </div>
        );
    }
}

export default Donator;
