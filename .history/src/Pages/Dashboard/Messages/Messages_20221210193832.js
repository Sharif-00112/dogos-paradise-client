import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

 
const Messages = () => {
    const [allMessages, setAllMessages] = useState([]);

    useEffect( () =>{
        const url = `http://localhost:3005/messages`
        fetch(url)
        .then(res => res.json())
        .then(data => setAllMessages(data))
    },[])

    return (
        <div>
            <Typography sx={{ pb:4, color: 'coral', fontWeight: 600 }} variant="h5" component="div">
                All Messages:
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Sender</TableCell>
                        <TableCell align="center">Subject</TableCell>
                        <TableCell align="right">Message</TableCell>
                        <TableCell align="right">Sent at</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {allMessages.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.email}
                        </TableCell>
                        <TableCell align="center">{row.subject}</TableCell>
                        <TableCell align="right">{ row.message}</TableCell>
                        <TableCell align="right">{row.time.toLocaleDateString() }</TableCell>
                        <TableCell align="right">{ }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Messages;