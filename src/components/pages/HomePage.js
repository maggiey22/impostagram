import React from 'react';

import Post from '../Post';

export default function HomePage({ data }) {
    return (
        <div>
            {data.map((p) => (
                <Post post={p} key={p.key} />
            ))}
        </div>
    );
}
