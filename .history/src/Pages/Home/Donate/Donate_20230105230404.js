import { Typography } from '@mui/material';
import React, { Component } from 'react';

//Using react class component (rcc)
class Donate extends Component {
    // constructor 
    // declaring state
    constructor(props) {
        super(props);
        this.state = {
            users: []  //add all states with , here 
        }
    }
    

    // cdm (data loading function)
    componentDidMount() {
        // use fetch to data load here
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // setState
        .then(data => this.setState({ users: data })); 
    }
    
    render() {
        return (
            <div>
                <hr />
                <Typography sx={{ m: 3, color: 'coral', fontWeight: 600 }} variant="h4" component="div">
                    Contribute to our social works
                </Typography>
                <Typography sx={{ m: 3, color: 'coral', fontWeight: 400 }} variant="h6" component="div">
                    Coming soon...
                </Typography>
                <hr />
            </div>
        );
    }
}

export default Donate;