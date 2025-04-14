import React from 'react';
import { useLoaderData } from 'react-router';

const AlbumDetails = () => {

    const album = useLoaderData();
    console.log(album);
    const {id, title} = album;

    return (
        <div>
            <h3>{id}. {title}</h3>
        </div>
    );
};

export default AlbumDetails;