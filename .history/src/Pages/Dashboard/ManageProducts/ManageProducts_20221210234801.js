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

    const handleAddNewDog= () => {

    }

    const handleEditDog = id =>{

    }

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
            <Typography sx={{ pb:3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                Manage All Products
            </Typography>
            <Typography sx={{ pb:2, color: 'gray', fontWeight: 600 }} variant="h5" component="div">
                DOGS
            </Typography>

            <Button 
            onClick={handleAddNewDog}
            sx={{mb:2, px:10}}
            size="small" 
            variant="contained" 
            style={{backgroundColor: 'coral'}}>
                Add a new Dog?
            </Button>

            <Typography sx={{ pb:2, color: 'gray', fontWeight: 400 }} variant="h6" component="div">
                {dogs.length} Existing Dogs
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center">Breed</TableCell>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Edit?</TableCell>
                        <TableCell align="right">Delete?</TableCell>
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
                            <TableCell align="center">{row.age}M</TableCell>
                            <TableCell align="center">{row.breed}</TableCell>
                            <TableCell align="left">{row.image}</TableCell>
                            <TableCell align="center">{row.price}$</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="center">{<Button 
                                onClick={() => handleEditDog(row._id)}
                                size="small" 
                                variant="contained" 
                                style={{backgroundColor: 'gray'}}>
                                    Edit
                                </Button> }
                            </TableCell>
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