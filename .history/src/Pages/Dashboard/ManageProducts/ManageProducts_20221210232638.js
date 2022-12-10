import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const ManageProducts = () => {
    const [dogs, setDogs] = useState([]);

    useEffect( () =>{
        const url = `http://localhost:3005/dogs`
        fetch(url)
        .then(res => res.json())
        .then(data => setDogs(data))
    },[])

    const handleDeleteDog = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:3005/dogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully!')

                    // update the UI (or, set [dogs] dependency instead of it)
                    const remainingDogs = dogs.filter(dog => dog._id !== id);
                    setDogs(remainingDogs);
                }
            })
        }
    }

    return (
        <div>
            <Typography sx={{ pb:3, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                Manage All Products
            </Typography>
            <Typography sx={{ pb:2, color: 'gray', fontWeight: 600 }} variant="h5" component="div">
                DOGS
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="right">Breed</TableCell>
                        <TableCell align="right">Image</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {dogs.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="center">{row.subject}</TableCell>
                            <TableCell align="right">{ row.message}</TableCell>
                            <TableCell align="right">{row.time }</TableCell>
                            <TableCell align="right">{<Button 
                                onClick={() => handleDeleteDog(row._id)}
                                size="small" 
                                variant="contained" 
                                style={{backgroundColor: 'red'}}>
                                    Delete
                                </Button> }
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;