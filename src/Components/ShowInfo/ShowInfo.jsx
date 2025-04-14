import React, { use } from 'react';

const ShowInfo = ({userPromise}) => {

    const user = use(userPromise);
    const {name, username, website} = user;

    return (
        <div style={{
            border:"1px solid blue",
            borderRadius: "15px",
            backgroundColor: "grey"
        }}>
            <p>{name}</p>
            <p>{username}</p>
            <p>{website}</p>
            
        </div>
    );
};

export default ShowInfo;