import React from 'react';

import HeaderPanel from './HeaderPanel'
import MainPanel from './MainPanel'
import FooterPanel from './FooterPanel'

/**
 * アプリケーション共通レイアウト
 */
export default function AppLayout({ children }) {
  return (
    <React.StrictMode>
      <HeaderPanel />
      <MainPanel>
        {children}
      </MainPanel>
      <FooterPanel />
    </React.StrictMode>
  );
};