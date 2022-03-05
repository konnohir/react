import { useLayoutEffect } from 'react';
import { useSession } from '../lib/session'

export default function HomeLogin() {
  /** セッション情報 */
  const session = useSession();

  useLayoutEffect(() => {
    // 識別子クリア (ログアウト)
    session.setIdentity(null);
  })

  return null;
};