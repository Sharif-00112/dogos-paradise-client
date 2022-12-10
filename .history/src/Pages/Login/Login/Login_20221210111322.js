import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
// import loginImg from '../../../images/images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    //destructuring hooks
    // const { customLogin, signInUsingGoogle, signInUsingFacebook, user, error, handleLoginSubmitBtn, handleEmailChange, handlePasswordChange, logout } = useAuth();
    const { customLogin, user, error, isLoading, signInUsingGoogle } = useAuth();
    // console.log(user.photoURL);

    useTitle("Login");

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
  
    const handleLoginSubmit = e => {
        e.preventDefault();
        customLogin( loginData.email, loginData.password);
        // alert('Login Clicked!');
        // alert(error);s
    }

    return (
        <div className="">
            <Typography sx={{ m: 5, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                Login
            </Typography>
            <Container sx={{ mb:5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={6}>
                            <img style={{ width:'70%' }} src= 'https://i.ibb.co/r0Bzb5B/dog-pre-login-min.jpg' alt="dog-security" />
                        </Grid>
                        <Grid sx={{ mt:5 }} xs={12} md={6}>
                            
                            {/* error  */}
                            {error && <Alert severity="error">{error}</Alert>}
                            
                            { (!isLoading && !user.email) && <form onSubmit={ handleLoginSubmit }>
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    required
                                    id="standard-basic"
                                    name='email' 
                                    onChange={handleOnChange}
                                    label="Your Email" 
                                    variant="standard" />
                                <br /> 
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    required
                                    id="standard-basic" 
                                    name='password'
                                    onChange={handleOnChange}
                                    label="Your Password" 
                                    type="password"
                                    variant="standard" />
                                <br />
                                <Button type='submit' sx={{ width:'50%',m:3 }} variant="contained" style={{backgroundColor: '#5CE7ED'}}>
                                    Login
                                </Button>
                                <br />
                                Or
                                <br />
                                <Button onClick={signInUsingGoogle} type='' sx={{ width:'75%',m:3 }} variant="contained" style={{backgroundColor: 'red'}}>
                                    Login with GOOGLE
                                </Button>
                                <br />
                                <NavLink 
                                    // style={{ textDecoration:'none'}} 
                                    to='/register'>
                                    <Button sx={{ color: 'black' }}>
                                        New user? Please Register here
                                    </Button>
                                </NavLink>
                            </form>}

                            {/* success alert  */}
                            {user?.email && <Alert severity="success">Login succeeded for email: {user.email}, Name: {user.displayName}</Alert>}
                            
                            {/* Spinner  */}
                            {isLoading && <CircularProgress />}

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Login;