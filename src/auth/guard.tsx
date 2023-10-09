import { Navigate } from "react-router-dom";
import { useAuth } from "../shared/hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

export const RequireAuth = ({ children }: Props) => {
  const { isLogged } = useAuth();

  return isLogged ? children : <Navigate to="/login" replace />;
}