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
            Manage Users
            <Typography sx={{ p:3, color: 'coral', fontWeight: 600 }} variant="h6" component="div">
                All Registered users:
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="center">User Name</TableCell>
                        {/* <TableCell align="center">Date</TableCell> */}
                        {/* <TableCell align="center">Time</TableCell> */}
                        {/* <TableCell align="center">Payment Status</TableCell> */}
                        <TableCell align="right">Action</TableCell>
                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {allUsers.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.displayName}
                        </TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        {/* <TableCell align="center">{row.date}</TableCell> */}
                        {/* <TableCell align="center">{row.time}</TableCell> */}
                        {/* <TableCell align="right">Unpaid</TableCell> */}
                        <TableCell align="right">{ }</TableCell>
                        {/* <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageUsers;