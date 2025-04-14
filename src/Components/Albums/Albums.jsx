import React from 'react';
import { useLoaderData } from 'react-router';
import Album from '../Album/Album';

const Albums = () => {
    const albums = useLoaderData();

    console.log(albums);
    return (
        <div>
            <h3>This is albums ... {albums.length}</h3>
            <div>
                {
                    albums.map(album => <Album key={album.id} album={album}></Album>)
                }
            </div>
        </div>
    );
};

export default Albums;