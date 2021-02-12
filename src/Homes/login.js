import React, { useState } from 'react';
import {useSession} from '../lib/session'

export default function Login() {
  /** セッション情報 */
  const session = useSession();

  /** ID */
  const [id, setId] = useState('');

  /** パスワード */
  const [password, setPassword] = useState('');

  /** バリデーションメッセージ */
  const [error, setError] = useState({});

  /** ログインボタン押下時 */
  const loginBtn = (event) => {
    event.preventDefault();

    if (id.length === 0) {
      setError({ ...error, id: '入力してください。' })
      return
    }

    // セッション保存
    session.setIdentity({ "name": id });
  }
  return (
    <>
      <form onSubmit={loginBtn}>
        <div className={error.id && 'error'}>
          <input type="text" placeholder="ID" autoComplete="username" value={id} onChange={(event) => setId(event.target.value)} />
          {error.id && <div>{error.id}</div>}
        </div>
        <div>
          <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
};