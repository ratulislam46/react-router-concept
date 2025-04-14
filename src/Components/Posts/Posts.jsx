import React, { use } from 'react';

const Posts = ({postsPromise}) => {

    const posts = use(postsPromise);
    console.log(posts);

    return (
        <div>
            <h2>this is posts...</h2>
        </div>
    );
};

export default Posts;