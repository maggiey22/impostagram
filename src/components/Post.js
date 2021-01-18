import React from 'react';

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Post.css';

export default function Post({ post }) {
    return (
        <div>
            <Row className="justify-content-md-center">
                {/* <Col md={8} lg={8}> */}
                <Col md={8} lg={8}>
                    <Image src="http://via.placeholder.com/640x360" fluid />
                </Col>
                <Col md={8} lg={8} className="post-desc">
                    <div>dis a post: {post.desc}</div>
                </Col>
                {/* </Col> */}
            </Row>
            <br />
            <br />
            <br />
        </div>
    );
}
