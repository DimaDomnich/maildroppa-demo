import { useContext} from "react";
import { AuthContext } from "../../../auth/authContext";

export const useAuth = () => {
  const {
    isLogged,
    login,
    logout,
    user
  } = useContext(AuthContext);

  return {isLogged, login, logout, user};
};