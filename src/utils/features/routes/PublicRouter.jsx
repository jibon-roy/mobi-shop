import { Navigate } from "react-router-dom";
import useUserActions from "../../hooks/useUserActions";

export default function PublicRouter({ children }) {
  const { user } = useUserActions();

  if (user) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
}
