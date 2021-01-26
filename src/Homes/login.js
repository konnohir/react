import React, { useContext, useState } from 'react';
import SessionContext from '../lib/session';

export default function Login() {
  /** セッション情報 */
  const session = useContext(SessionContext);

  /** ID */
  const [id, setId] = useState('');

  /** パスワード */
  const [password, setPassword] = useState('');

  /** バリデーションメッセージ */
  const [error, setError] = useState({});

  /** ログインボタン押下時 */
  const loginBtn = () => {

    if (id.length === 0) {
      setError({ ...error, id: '入力してください。' })
      return
    }

    // セッション保存
    session.setIdentity({ "name": id });
  }
  return (
    <main>
      <div>
        <input type="text" placeholder="ID" value={id} onChange={(event) => setId(event.target.value)} />
        {error.id && <div>{error.id}</div>}
      </div>
      <div>
        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button onClick={loginBtn}>Login</button>
    </main>
  )
};