import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';


const ManageProducts = () => {
    const [dogs, setDogs] = useState([]);

    useEffect( () =>{
        const url = `http://localhost:3005/dogs`
        fetch(url)
        .then(res => res.json())
        .then(data => setDogs(data))
    },[])

    return (
        <div>
            <Typography sx={{ pb:3, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                Manage All Products
            </Typography>
            <Typography sx={{ pb:2, color: 'gray', fontWeight: 600 }} variant="h5" component="div">
                DOGS
            </Typography>

        </div>
    );
};

export default ManageProducts;