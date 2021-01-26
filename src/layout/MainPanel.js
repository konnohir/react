import React, { useContext, useLayoutEffect, useMemo, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';

import SessionContext from '../lib/session'


import Home from '../Homes/index';
import About from '../Homes/about';
import Login from '../Homes/login';

/**
 * メインコンテンツ
 */
const MainPanel = () => {
  /** セッション情報 */
  const session = useContext(SessionContext);

  /** URLパス */
  const location = useLocation();

  /** historyAPI */
  const history = useHistory();

  // 未ログイン状態ならログイン画面に遷移する
  useLayoutEffect(() => {
    if (!session.identity && location.pathname !== '/login') {
      history.push('/login');
    }
    if (session.identity && location.pathname === '/login') {
      history.push('/');
    }
  });

  return (
    <main>
      <Route exact path='/' component={(Home)} />
      <Route exact path='/about' component={About} />
      <AuthRoute path='/about/:id' component={About} />
      <Route exact path='/login' component={Login} />
    </main>
  )
};

const AuthRoute = (props) => {
  const { path, component } = props;
  // const [,controller, action] = path.split('/');
  const isShow = true;
  return (
    isShow && <Route exact path={path} component={component} />
  )
}

export default MainPanel;