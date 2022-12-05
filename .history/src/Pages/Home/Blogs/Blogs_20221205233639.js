import React from 'react';
import { Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';


const Blogs = () => {
    return (
        <div>
            <Navigation></Navigation>
            <hr />
            <Typography sx={{ m: 3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                Blogs
            </Typography>
            <Typography sx={{ m: 3, color: 'gray', fontWeight: 400 }} variant="h6" component="div">
                Coming soon...
            </Typography>
            <hr />
        </div>
    );
};

export default Blogs;