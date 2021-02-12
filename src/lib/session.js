import { createContext, useContext } from 'react';
import useLocalStorage from './localStorage'

/**
 * セッションコンテキスト
 */
const SessionContext = createContext();

/**
 * Session context hook
 */
export const useSession = () => {
  const session = useContext(SessionContext);
  return session;
}

/**
 * Context provider
 */
export const BrowserSession = (props) => {
  const [identity, setIdentity] = useLocalStorage('identity', null);

  const session = {
    identity,
    setIdentity,
  };

  return (
    <SessionContext.Provider value={session}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionContext;