import { Container } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';

const bg = 'https://i.ibb.co/hXGz3qW/dog-group.jpg';

const appointmentBanner = {
    background: `url(${bg}) no-repeat `,
    // marginTop: 100,
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundColor: 'rgba(45, 58, 74, 0.5)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    const handleContactSubmit = e =>{
        e.preventDefault();

        //collect form data 


        //send data to the server and database


        alert('Submitted Successfully!');
    }

    return (
        <div style={appointmentBanner}>
            {/* <h2>Contact us</h2> */}
            <Container sx={{py: 10}}>
                <Typography sx={{ pb: 5, fontWeight: 500 }} style={{color: 'coral'}} variant="h4" component="div">
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
                            // defaultValue='Your Email'
                            size="small"
                            />
                        <TextField
                            style={{backgroundColor: 'whitesmoke'}}
                            required
                            sx={{width: "80%", m:1 }}
                            id="outlined-size-small"
                            placeholder='Subject*'
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
                            // defaultValue="Your message"
                            variant="filled"
                            />
                            <br />
                        <Button type='submit' sx={{mt:3}} variant="contained" style={{backgroundColor: 'coral'}}>Submit</Button>
                    </form>
                </Container>

            </Container>
        </div>
    );
};

export default Contact;