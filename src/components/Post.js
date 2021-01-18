import React from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Post.css';

export default function Post({ post }) {
    return (
        <Row className="justify-content-md-center post-card">
            <Card style={{ width: '40rem' }}>
                <Card.Header>
                    <img
                        height={45}
                        src={post.user.pfp}
                        className="rounded-circle"
                        alt=""
                    />{' '}
                    {post.user.username}
                </Card.Header>
                <Card.Img
                    variant="top"
                    src="http://via.placeholder.com/640x360"
                />
                <Card.Body>
                    <Card.Text>{post.desc ? post.desc : ''}</Card.Text>
                </Card.Body>
            </Card>
        </Row>
        // <div>
        //     <Row className="justify-content-md-center">
        //         <Col md={8} lg={8}>
        //             <Image src="http://via.placeholder.com/640x360" fluid />
        //         </Col>
        //         <Col md={8} lg={8} className="post-desc">
        //             <div>{post.desc ? post.desc : ''}</div>
        //         </Col>
        //     </Row>
        //     <br />
        //     <br />
        //     <br />
        // </div>
    );
}
