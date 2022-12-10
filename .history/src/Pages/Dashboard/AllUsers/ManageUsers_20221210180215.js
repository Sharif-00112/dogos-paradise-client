import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect( () =>{
        const url = `http://localhost:3005/users`
        fetch(url)
        .then(res => res.json())
        .then(data => setAllUsers(data))
    },[])

    return (
        <div>
            <Typography sx={{ pb:4, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                All Registered users:
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="center">User Name</TableCell>
                        <TableCell align="right">Role</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {allUsers.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.email}
                        </TableCell>
                        <TableCell align="center">{row.displayName}</TableCell>
                        <TableCell align="right">{ row.role }</TableCell>
                        <TableCell align="right">{ }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageUsers;