import React from 'react';

export default function Post({ post }) {
    return (
        <div>
            <img
                alt="placeholder"
                src="http://via.placeholder.com/640x360"
            ></img>
            <br />
            dis a post: {post.desc}
        </div>
    );
}
