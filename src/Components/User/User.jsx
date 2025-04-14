import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    
    const {name, email,phone,id} = user;

    return (
        <div style={{
            border : "2px solid red",
            borderRadius: "10px",
            marginBottom: "10px"
        }}>
            <h3> Name : {name} </h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;