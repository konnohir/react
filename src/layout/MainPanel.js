import React, { useLayoutEffect } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import {useSession} from '../lib/session'


import Home from '../Homes/index';
import UserIndex from '../Users';
import Login from '../Homes/login';

/**
 * メインコンテンツ
 */
const MainPanel = () => {
  // ログイン判定
  useAuthenticationCheck();

  return (
    <main>
      <Route exact path='/' component={(Home)} />
      <AuthRoute path='/users' component={UserIndex} />
      <AuthRoute path='/users/add' component={UserIndex} />
      <AuthRoute path='/users/edit/:id' component={UserIndex} />
      <Route exact path='/login' component={Login} />
    </main>
  )
};

/**
 * ログイン判定 Hook
 */
const useAuthenticationCheck = () => {
  /** セッション情報 */
  const session = useSession();

  /** URLパス */
  const location = useLocation();

  /** historyAPI */
  const history = useHistory();

  useLayoutEffect(() => {
    // 未ログイン状態ならログイン画面に遷移する
    if (!session.identity && location.pathname !== '/login') {
      history.replace('/login');
    }
    // ログイン状態ならトップ画面に遷移する
    if (session.identity && location.pathname.toLowerCase() === '/login') {
      history.replace('/');
    }
  });
}

/**
 * 認証ルート
 */
const AuthRoute = (props) => {
  const { path, component } = props;
  const [,controller, action] = path.split('/');
  const isShow = controller || action;
  return (
    isShow && <Route exact path={path} component={component} />
  )
}

export default MainPanel;