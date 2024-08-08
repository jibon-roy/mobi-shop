import useUserActions from "../../hooks/useUserActions";

export default function PublicRouter({ children }) {
  const { user, logOut } = useUserActions();

  if (!user) {
    return children;
  } else {
    logOut();
  }
}
