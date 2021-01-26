import { createContext } from 'react';

import useLocalStorage from './localStorage'

const useSession = () => {
  const [identity, setIdentity] = useLocalStorage('identity', null);

  const session = {
    identity,
    setIdentity,
  };

  return session;
}

export const BrowserSession = (props) => {
  const session = useSession();

  return (
    <SessionContext.Provider value={session}>
      {props.children}
    </SessionContext.Provider>
  )
}
/**
 * セッションコンテキスト
 */
const SessionContext = createContext();

export default SessionContext;