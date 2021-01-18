import React from 'react';
import Container from 'react-bootstrap/Container';

import Post from '../Post';

export default function HomePage({ data }) {
    return (
        <Container fluid>
            <br />
            {data.map((p) => (
                <Post post={p} key={p.key} />
            ))}
        </Container>
    );
}
