import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default ManageUsers;