import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserSession } from '../lib/session'

import HeaderPanel from './HeaderPanel'
import MainPanel from './MainPanel'
import FooterPanel from './FooterPanel'

/**
 * レイアウト
 */
const AppLayout = () => {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <BrowserSession>
          <HeaderPanel />
          <MainPanel />
          <FooterPanel />
        </BrowserSession>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default AppLayout;