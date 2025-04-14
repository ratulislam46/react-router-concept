import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website, id} = user;

    // useNavigate concept 
    const navigate2 = useNavigate()
    const handleNavigate2 =() => {
        navigate2('/')
    };

    // useParams concept 
    const params = useParams();
    // console.log(params);

    // another way 
    const {userId} = useParams();
    // console.log(userId)

    return (
        <div>
            <h3>User Details here..</h3>
            <h4>{id} . name : {name}</h4>
            <p>{website}</p>
            <button onClick={handleNavigate2}> Go To Home</button>
        </div>
    );
};

export default UserDetails;