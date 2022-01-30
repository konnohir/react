import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { BrowserSession, useSession } from './lib/session'

import './resource/common.css';
import HomeIndex from './Homes/index';
import UserIndex from './Users';
import HomeLogin from './Homes/login';
import PageNotFound from './layout/PageNotFound';

/**
 * 認証ルート
 */
const AuthRoute = (props) => {
    const { path, component } = props;
    const [, controller, action] = path.split('/');
    const isShow = controller || action;
    return (
        isShow && <Route exact path={path} component={component} />
    )
}

/**
 * ルーティング設定
 */
const AppRoutes = () => {

    /** セッション情報 */
    const session = useSession();

    /** URLナビゲーション情報 */
    const location = useLocation();
    console.debug(location.pathname);

    // 未ログイン状態ならログイン画面に遷移する
    if (!session.identity && location.pathname !== '/login') {
        return (<Redirect to='/login' replace />);
    }
    // ログイン状態ならトップ画面に遷移する
    if (session.identity && location.pathname.toLowerCase() === '/login') {
        return (<Redirect to='/' replace />);
    }

    return (
        <Switch>
            <Route exact path='/' component={HomeIndex} />
            <AuthRoute path='/users' component={UserIndex} />
            <AuthRoute path='/users/add' component={UserIndex} />
            <AuthRoute path='/users/edit/:id' component={UserIndex} />
            <Route exact path='/login' component={HomeLogin} />
            <Route component={PageNotFound} />
        </Switch>
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
