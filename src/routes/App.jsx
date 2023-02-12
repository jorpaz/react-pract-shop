import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//? Containers
import Layout from '../containers/Layout.jsx';

//?Pages
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import Login from "../pages/Login.jsx";
import RecoveryPassword from '../pages/RecoveryPassword.jsx';
import SendEmail from '../pages/SendEmail.jsx';
import MyAccount from '../pages/MyAccount.jsx';

//? Styles
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='recovery-password' element={<RecoveryPassword />} />
                    <Route path='send-email' element={<SendEmail />} />
                    <Route path='new-password' element={<NewPassword />} />
                    <Route path='myaccount' element={<MyAccount />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
export default App;
