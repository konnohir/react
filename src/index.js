import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import { BrowserSession, useSession } from './lib/session'

import './resource/common.css';
import HomeIndex from './Homes/index';
import UserIndex from './Users';
import HomeLogin from './Homes/login';
import HomeLogout from './Homes/logout';
import PageNotFound from './layout/PageNotFound';

/**
 * ルーティング設定
 */
const AppRoutes = () => {

    /** セッション情報 */
    const session = useSession();

    /** ナビゲート */
    const navigate = useNavigate();

    useEffect(() => {
        // 未ログイン状態ならログイン画面に遷移する
        if (!session.identity && window.location.pathname !== '/login') {
            navigate('/login', { replace: true });
        }
        // ログイン状態ならトップ画面に遷移する
        if (session.identity && window.location.pathname.toLowerCase() === '/login') {
            navigate('/', { replace: true });
        }
    });

    return (
        <Routes>
            <Route path='/' element={<HomeIndex />} />
            <Route path='/users' element={<UserIndex />} />
            <Route path='/users/add' element={<UserIndex />} />
            <Route path='/users/edit/:id' element={<UserIndex />} />
            <Route path='/login' element={<HomeLogin />} />
            <Route path='/logout' element={<HomeLogout />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

/**
 * React Startup
 */
ReactDOM.render(
    <BrowserSession>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </BrowserSession>,
    document.getElementById('app')
);
