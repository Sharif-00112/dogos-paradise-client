import { Typography } from '@mui/material';
import React, { Component } from 'react';

//Using react class component (rcc)
class Donate extends Component {
    // constructor (con)
    // declaring state
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: '',
            email: ''  //add all states with , here 
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
                    <br />
                    {/* using state variable  */}
                    Join {this.state.users.length} members
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