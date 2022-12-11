import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UpdateProductModal = ({ openUpdateProductModal, handleUpdateProductModalClose }) => {
    const { user } = useAuth();
    const initialInfo = {
        title: '',
        age: '',
        breed: '',
        image: '',
        price: '',
        description: ''
    };
    const [updateProductInfo, setUpdateProductInfoInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...updateProductInfo};
        newInfo[field] = value;
        // console.log(newInfo);
        setUpdateProductInfoInfo(newInfo);
    }

    const handleUpdateProductSubmit = e =>{
        e.preventDefault();

        //collect form data and other info 
        const product = {
            ...updateProductInfo,
            addedBy: user.email,
            addedAt: new Date().toLocaleDateString()
        }
        // console.log(product);

        //send data to the server and database
        fetch('http://localhost:3005/dogs', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                alert('Added new dog Successfully!');
                handleUpdateProductModalClose();
            }
        })
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openUpdateProductModal}
                onClose={handleUpdateProductModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={openUpdateProductModal}>
                    <Box sx={style}>
                            <Typography style={{ textAlign: 'center'}} sx={{ mb:3, fontSize: 20, fontWeight: 600, color: 'coral'}} variant='h5' gutterBottom component='div'>
                                New Dog
                            </Typography>
                        <form onSubmit={handleUpdateProductSubmit}>
                        <TextField
                            // disabled
                            // defaultValue={date.toDateString()}
                            required
                            label="Title"
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            placeholder='Title'
                            name='title'
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <TextField
                            label="Age"
                            required
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            placeholder='Age (month)'
                            name='age'
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            required
                            label="Breed"
                            id="outlined-size-small"
                            placeholder='Breed'
                            name='breed'
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            required
                            label="Image URL"
                            id="outlined-size-small"
                            placeholder='Image URL'
                            name='image'
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            required
                            label="Price"
                            id="outlined-size-small"
                            placeholder='Price ($)'
                            name='price'
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            required
                            label="Description"
                            id="outlined-size-small"
                            placeholder='Short Description'
                            name='description'
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <Button type='submit' sx={{m:1}} variant="contained" style={{backgroundColor: 'coral'}}>Submit</Button>
                        <Button onClick={handleUpdateProductModalClose} sx={{m:1}} variant="contained" style={{backgroundColor: 'gray'}}>Cancel</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default UpdateProductModal;