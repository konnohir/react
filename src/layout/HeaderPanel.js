import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import SessionContext from '../lib/session'

/**
 * ヘッダー
 */
const HeaderPanel = () => {

    /** セッション情報 */
    const session = useContext(SessionContext);

    /** ログアウトボタン押下時 */
    const logoutBtn = () => {
        // セッション破棄 (ログアウト)
        session.setIdentity(null);
    }

    // 未ログインならヘッダーには何も表示しない
    if (!session.identity) {
        return (
            <header />
        )
    }

    // ヘッダーにメニューを表示する
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/about/1">#1</Link>
            ({session.identity.name}
            <Link to="" onClick={logoutBtn}>Logout</Link>)
        </header>
    )
};

export default HeaderPanel;