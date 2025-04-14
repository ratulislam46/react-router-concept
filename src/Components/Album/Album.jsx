import React from 'react';
import { Link } from 'react-router';

const Album = ({album}) => {

    const {id, title} = album;

    return (
        <div style={{
            border: "1px solid tomato",
            marginBottom: "10px",
            textAlign: "start",
            paddingLeft: "15px"
        }}> 
            <h3>{id}. {title}</h3>
            <Link to={`/albums/${id}`}> <button >Album Details</button> </Link>
        </div>
    );
};

export default Album;