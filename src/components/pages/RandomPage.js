import Post from '../Post';

import Row from 'react-bootstrap/Row';

export default function RandomPage() {
    const DUMMY_POST = {
        key: 1234,
        desc: 'random post',
        user: {
            pfp: 'https://randomuser.me/api/portraits/women/90.jpg',
            username: 'lalala',
        },
    };
    return (
        <div>
            <br />
            <Row className="justify-content-md-center title">Random post</Row>
            <br />
            <Post post={DUMMY_POST} />
        </div>
    );
}
