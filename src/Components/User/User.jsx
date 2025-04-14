import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import ShowInfo from '../ShowInfo/ShowInfo';

const User = ({user}) => {
    
    const {name, email,phone,id} = user;


    // usenavigate concept 
    // const navigate = useNavigate();
    // const handleNavigate = () => {
    //     navigate("/")
    // };

    //Show info concept  (toggle this button)
    const [showInfo, setShowInfo] = useState(false);
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());


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
            {/* <button onClick={handleNavigate}>Go Back</button> */}


            {/* show info concept and toggle this button */}
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} info</button>
            {/* conditional rendering */}
            {
                showInfo && <Suspense fallback={<span>Loading ....</span>}>
                    <ShowInfo userPromise={userPromise}></ShowInfo>
                </Suspense>
            }

        </div>
    );
};

export default User;