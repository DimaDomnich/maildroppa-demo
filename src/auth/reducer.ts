import { AUTH_TOKEN_KEY, USER_AUTH_KEY } from "../utils/constants";
import { AuthAction, AuthState, AuthActionType } from "./types";
import {v4 as createToken} from 'uuid'

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN: {
      const token = createToken();
      const name = action.payload as string;
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(USER_AUTH_KEY, JSON.stringify({
        name
      }));
      return {
        isLogged: true,
        user: {
          name
        }
      };
    }
    case AuthActionType.LOGOUT:
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(USER_AUTH_KEY);
      return {
        isLogged: false,
        user: null
      };
    default:
      return state;
  }
};  