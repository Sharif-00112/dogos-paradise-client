import React from 'react';
import { Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Typography sx={{ m: 3, color: 'red', fontWeight: 600 }} variant="h4" component="div">
                Register
            </Typography>
        </div>
    );
};

export default Register;