import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website, id} = user;
    return (
        <div>
            <h3>User Details here..</h3>
            <h4>{id} . name : {name}</h4>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;