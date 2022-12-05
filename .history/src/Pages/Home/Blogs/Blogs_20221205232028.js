import React from 'react';
import { Typography } from '@mui/material';


const Blogs = () => {
    return (
        <div>
            <hr />
            <Typography sx={{ m: 3, color: 'red', fontWeight: 600 }} variant="h4" component="div">
                Blogs
            </Typography>
            <Typography sx={{ m: 3, color: 'coral', fontWeight: 400 }} variant="h6" component="div">
                Coming soon...
            </Typography>
            <hr />
        </div>
    );
};

export default Blogs;