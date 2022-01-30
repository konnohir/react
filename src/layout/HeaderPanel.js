import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../lib/session'

/**
 * ヘッダーパネル
 */
export default React.memo(function HeaderPanel() {
    /** セッション情報 */
    const session = useSession();

    /** ログアウトボタン押下時 */
    const logoutBtn = () => {
        // 識別子クリア (ログアウト)
        session.setIdentity(null);
    }

    // 未ログインならヘッダーには何も表示しない
    if (!session.identity) {
        return (<header />)
    }

    // ヘッダーにメニューを表示する
    return (
        <header>
            <nav aria-labelledby="primary">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
            </nav>
            <nav aria-labelledby="secondary">
                <Link to="/profile">{session.identity.name}</Link>
                <Link to="/logout" onClick={logoutBtn}>Logout</Link>
            </nav>
        </header>
    )
});
