import useUserActions from "../../hooks/useUserActions";
import Error from "../../../pages/Error";

export default function PrivetRouter({ children }) {
  const { user } = useUserActions();

  if (user) {
    return <>{children}</>;
  } else {
    return <Error />;
  }
}
