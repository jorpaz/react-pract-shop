import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Layout from '../containers/Layout.jsx';
import Login from "../containers/Login.jsx";
import RecoveryPassword from '../containers/RecoveryPassword.jsx';
import NotFound from '../pages/NotFound.jsx';

import '../styles/global.css';
import Order from '../components/Order.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='recovery-password' element={<RecoveryPassword />} />
                    <Route path='order' element={<Order />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
export default App;
