import React, { useState } from 'react';
import { useSession } from '../lib/session'
import AppLayout from '../layout/AppLayout'

export default function HomeLogin() {
  /** セッション情報 */
  const session = useSession();

  /** ID */
  const [id, setId] = useState('');

  /** パスワード */
  const [password, setPassword] = useState('');

  /** バリデーションメッセージ */
  const [idError, setIdError] = useState();

  /** ログインボタン押下時 */
  const loginBtn = (event) => {
    event.preventDefault();

    if (id.length === 0) {
      setIdError('入力してください。');
      return;
    }

    // セッション保存
    session.setIdentity({ "name": id });
  }

  return (
    <AppLayout>
      <form onSubmit={loginBtn}>
        <InputGroup validationMessage={idError}>
          <input type="text" placeholder="ID" autoComplete="username" value={id} onChange={(event) => setId(event.target.value)} />
        </InputGroup>
        <InputGroup>
          <input type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </InputGroup>
        <button type="submit">Login</button>
      </form>
    </AppLayout>
  );
};

const InputGroup = ({ children, validationMessage }) => {
  return (
    <div className={validationMessage && 'error'}>
      {children}
      <ErrorField>{validationMessage}</ErrorField>
    </div>
  );
};

const ErrorField = ({ children }) => {
  if (children) {
    return (<div>{children}</div>);
  }
  return '';
};