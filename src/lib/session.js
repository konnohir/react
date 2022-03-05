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
  return useContext(SessionContext);
}

/**
 * Context provider
 */
export const BrowserSession = ({children}) => {
  const [identity, setIdentity] = useLocalStorage('identity', null);

  const session = {
    identity,
    setIdentity,
  };

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContext;