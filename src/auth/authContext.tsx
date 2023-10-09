import { createContext, useCallback, useMemo, useReducer } from "react";
import { AuthActionType, TAuthContext, TUser } from "./types";
import { authReducer } from "./reducer";
import { AUTH_TOKEN_KEY, USER_AUTH_KEY } from "../utils/constants";

export const AuthContext = createContext<TAuthContext>({
  isLogged: false,
  login: (user: TUser) => {user},
  logout: () => {},
  user: null
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, dispatch] = useReducer(
    authReducer,
    {
      isLogged: false
    }, () => {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      const userDataKey = localStorage.getItem(USER_AUTH_KEY);
      const user: TUser = userDataKey
        ? JSON.parse(userDataKey)
        : null;

      return {
        isLogged: !!token,
        user
      };
    }
  );
  
  const isLogged = useMemo(() => auth.isLogged, [auth.isLogged]);
  const login = useCallback(({name}: {name: string}) => dispatch({
    type: AuthActionType.LOGIN,
    payload: name
  }), [dispatch]);
  const logout = useCallback(() => dispatch({
    type: AuthActionType.LOGOUT
  }), [dispatch]);
  const user = useMemo(() => auth.user, [auth.user]);

  return (
    <AuthContext.Provider value={{
      isLogged,
      login,
      logout,
      user
    }}>
      {children}
    </AuthContext.Provider>
  );
}