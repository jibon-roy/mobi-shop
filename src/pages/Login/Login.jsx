import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { loginUserWithGoogle } from "../../utils/features/auth/authActions";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUserWithGoogle());
  };

  return (
    <div>
      <Button onClick={handleLogin} className={"btn"}>
        Login
      </Button>
    </div>
  );
}
