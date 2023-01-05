import { Typography } from '@mui/material';
import React, { Component } from 'react';

//Using react class component (rcc)
class Donator extends Component {
    render() {
        return (
            <div>
                <Typography sx={{ m: 3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                    Name: {this.props.user.name}
                </Typography>
                <Typography sx={{ m: 3, color: 'coral', fontWeight: 400 }} variant="h6" component="div">
                    Email: {this.props.user.email}
                </Typography>
            </div>
        );
    }
}

export default Donator;
