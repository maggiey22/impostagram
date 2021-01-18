import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';
import HomePage from './components/pages/HomePage';
import AddPostPage from './components/pages/AddPostPage';
import RandomPage from './components/pages/RandomPage';
import Error404Page from './components/pages/404Page.js';

import './App.css';

const DUMMY_DATA = [
    { key: 0, desc: 'data 0' },
    { key: 1, desc: 'data 1' },
    { key: 2, desc: 'data 2' },
];

export default function App() {
    const [data, setData] = useState(DUMMY_DATA);

    return (
        <Router>
            <div className="common container">
                <CustomNavbar />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => <HomePage data={data} {...props} />}
                    />
                    <Route path="/add" exact component={AddPostPage} />
                    <Route path="/random" exact component={RandomPage} />
                    <Route component={Error404Page} />
                </Switch>
            </div>
        </Router>
    );
}
