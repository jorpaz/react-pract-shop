import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/Layout.jsx';
import Login from "../containers/Login.jsx";
import RecoveryPassword from '../containers/RecoveryPassword.jsx';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={Home} />
                    <Route exact path='/login' element={Login} />
                    <Route path='recovery-password' element={RecoveryPassword} />
                    <Route path='*' component={NotFound} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
