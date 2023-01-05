import { Typography } from '@mui/material';
import React, { Component } from 'react';
import Donator from './Donator';

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
                    Join with {this.state.users.length} existing members below: 
                </Typography>
                {/* <Typography sx={{ m: 3, color: 'coral', fontWeight: 400 }} variant="h6" component="div">
                    Coming soon...
                </Typography> */}

                {
                    this.state.users.map(user => <Donator
                        user={user}
                    ></Donator>)
                }
                <hr />
            </div>
        );
    }
}

export default Donate;