import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import {
  loginUserWithEmail,
  loginUserWithGoogle,
} from "../../utils/features/auth/authActions";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUserWithGoogle());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(loginUserWithEmail(data));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url(/path/to/your/image.jpg)" }}
      >
        {/* Side Image */}
      </div>
      <div className="w-full lg:w-1/2 p-6 flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
            <p className="text-center text-sm">
              Dont have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </form>
          <Button onClick={handleLogin} className={"btn"}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
