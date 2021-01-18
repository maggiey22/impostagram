import React, { useState, useRef } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import './AddPostPage.css';

const SERVER_URL = 'http://localhost:5000';
const DEFAULT_IMG_SRC =
    'http://via.placeholder.com/640x360?text=No+image+uploaded+yet';

export default function AddPostPage() {
    const [img, setImg] = useState(DEFAULT_IMG_SRC);
    const [caption, setCaption] = useState('');
    const { addToast } = useToasts();

    const inputFile = useRef(null);
    const inputCaption = useRef(null);

    const onFileChange = (e) => {
        const newImg = e.target.files[0];

        if (newImg && newImg['type'].split('/')[0] === 'image') {
            setImg(URL.createObjectURL(newImg));
        } else {
            setImg(DEFAULT_IMG_SRC);
            e.target.value = null;
            addToast('Unknown file type. Please upload an image', {
                appearance: 'warning',
                autoDismiss: true,
            });
        }
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (img === DEFAULT_IMG_SRC) {
            addToast('Please upload an image', {
                appearance: 'warning',
                autoDismiss: true,
            });
        } else {
            console.log(`You submitted! ${caption}`);
            console.log(`You submitted! ${img}`);

            const newPost = {
                img,
                desc: caption,
            };

            axios
                .post(`${SERVER_URL}/posts/add`, newPost)
                .then(() => {
                    clear();
                    window.location = '/';
                })
                .catch((err) => console.log(err));

            // debugging
            /*const newPost = {
                desc: caption,
            };
            axios.post(`${SERVER_URL}/dummy/add`, newPost).then(() => {
                clear();
                window.location = '/';
            });*/
        }
    };

    const clear = () => {
        inputFile.current.value = null;
        setImg(DEFAULT_IMG_SRC);
        inputCaption.current.value = '';
        setCaption('');
    };

    return (
        <Container fluid>
            <br />
            <Row className="justify-content-md-center title">Add a post</Row>
            <br />
            <Row className="justify-content-md-center" id="upload-form">
                <Col xs={12} md={8}>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.File
                                id="formFile"
                                label="Image"
                                ref={inputFile}
                                onChange={onFileChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formCaption">
                            <Form.Label>Caption (optional)</Form.Label>
                            <Form.Control
                                value={caption}
                                onChange={handleCaptionChange}
                                as="textarea"
                                rows={3}
                                placeholder="Max 200 characters"
                                maxLength={200}
                                ref={inputCaption}
                            />
                        </Form.Group>
                        <Button
                            variant="outline-secondary"
                            size="lg"
                            onClick={clear}
                        >
                            Clear
                        </Button>{' '}
                        <Button
                            variant="outline-secondary"
                            type="submit"
                            size="lg"
                        >
                            Submit
                        </Button>
                        <br />
                        <br />
                    </Form>
                </Col>
                <Col>
                    <Image
                        height={360}
                        src={img}
                        alt="user upload"
                        id="uploaded-img"
                        fluid
                        rounded
                    />
                </Col>
                {/* <img
                    height={360}
                    src={img}
                    alt="user upload"
                    id="uploaded-img"
                /> */}
            </Row>
        </Container>
    );
}
