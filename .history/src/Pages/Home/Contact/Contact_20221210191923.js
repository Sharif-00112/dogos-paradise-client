import { Container } from '@mui/system';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';

const bg = 'https://i.ibb.co/hXGz3qW/dog-group.jpg';

const contactBanner = {
    background: `url(${bg}) no-repeat center center`,
    // marginTop: 100,
    backgroundPosition: 'center',
    backgroundSize: '100% auto',
    backgroundColor: 'rgba(45, 58, 74, 0.6)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    const [contactData, setContactData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newContactData = { ...contactData };
        newContactData[field] = value;
        setContactData(newContactData);
        // console.log(newContactData);
    }


    const handleContactSubmit = e =>{
        e.preventDefault();

        //collect form data 
        const message = {
            ...contactData,
            time: new Date()
        }
        console.log(message);

        //send data to the server and database


        alert('Submitted Successfully!');
    }

    return (
        <div style={contactBanner}>
            {/* <h2>Contact us</h2> */}
            <Container sx={{}}>
                <Typography sx={{ py: 5, fontWeight: 500 }} style={{color: 'coral'}} variant="h4" component="div">
                    Contact us
                </Typography>

                <Container>
                    <form onSubmit={handleContactSubmit}>
                        <TextField
                            style={{backgroundColor: 'whitesmoke'}}
                            required
                            sx={{width: "80%", m:1 }}
                            id="outlined-size-small"
                            placeholder='Your Email*'
                            name='email' 
                            type='email'
                            onChange={handleOnChange}
                            // defaultValue='Your Email'
                            size="small"
                            />
                        <TextField
                            style={{backgroundColor: 'whitesmoke'}}
                            // required
                            sx={{width: "80%", m:1 }}
                            id="outlined-size-small"
                            placeholder='Subject'
                            name='subject' 
                            type='text'
                            onChange={handleOnChange}
                            // defaultValue='Subject'
                            size="small"
                            />
                        <TextField
                            style={{backgroundColor: 'whitesmoke'}}
                            required
                            sx={{width: "80%", m:1 }}
                            id="filled-multiline-static"
                            // label="Multiline"
                            multiline
                            rows={4}
                            placeholder='Your message*'
                            name='message' 
                            type='text'
                            onChange={handleOnChange}
                            // defaultValue="Your message"
                            variant="filled"
                            />
                            <br /><br />
                        <Button type='submit' sx={{mt:3}} variant="contained" style={{backgroundColor: 'coral'}}>Submit</Button>
                        <br /><br /><br />
                    </form>
                </Container>

            </Container>
        </div>
    );
};

export default Contact;