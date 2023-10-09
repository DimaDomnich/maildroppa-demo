export enum AuthActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export interface AuthAction {
  type: AuthActionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export interface AuthState {
  isLogged: boolean;
  user?: TUser | null;
}

export interface TUser {
  name: string;
}

export interface TAuthContext {
  isLogged: boolean,
  login: (user: {name: string}) => void,
  logout: () => void,
  user?: TUser | null;
}