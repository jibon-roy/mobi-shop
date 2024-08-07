import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import {
  loginUserWithEmail,
  loginUserWithGoogle,
} from "../../utils/features/auth/authActions";
import { Link } from "react-router-dom";
// import riveImage from "../../assets/login_screen_character.riv";
// Rive animation
import { useRive, Fit, Alignment, useStateMachineInput } from "rive-react";
import { useState, useRef } from "react";
import Logo from "../../components/Logo";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const { rive, RiveComponent } = useRive({
    src: "/login_screen_character.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const isCheckingInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "Check"
  );

  const isHandsUpInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "hands_up"
  );

  const numLookInput = useStateMachineInput(rive, "State Machine 1", "Look");

  const trigSuccessInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "trigSuccess"
  );

  const trigFailInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "trigFail"
  );

  const handleLoginWithGoogle = () => {
    dispatch(loginUserWithGoogle());
  };

  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value;
    setUsername(usernameValue);

    if (inputRef.current) {
      const inputWidth = inputRef.current.offsetWidth;
      const maxNumLook = 100; // Maximum value for numLook
      const multiplier = maxNumLook / inputWidth;
      const numLookValue = usernameValue.length * multiplier;

      if (numLookInput) {
        // Set the value on the Rive state machine input
        numLookInput.value = Math.min(numLookValue, maxNumLook) * 10;
      }
    }

    if (isCheckingInput) {
      isCheckingInput.value = true;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Basic validation
    let hasError = false;
    if (!username) {
      setEmailError("Email is required");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) return;

    // Check credentials (for demonstration purposes)
    const isAuthenticated =
      username === "user@example.com" && password === "password";
    if (isAuthenticated && trigSuccessInput) {
      trigSuccessInput.fire();
    } else if (trigFailInput) {
      trigFailInput.fire();
    }

    // Dispatch action
    if (!hasError) {
      dispatch(loginUserWithEmail({ email: username, password }));
    }
  };

  const handleUsernameFocus = () => {
    if (isCheckingInput) {
      isCheckingInput.value = true;
    }
  };

  const handleUsernameBlur = () => {
    if (isCheckingInput) {
      isCheckingInput.value = false;
    }
  };

  const handlePasswordFocus = () => {
    if (isHandsUpInput) {
      isHandsUpInput.value = true;
    }
  };

  const handlePasswordBlur = () => {
    if (isHandsUpInput) {
      isHandsUpInput.value = false;
    }
  };

  return (
    <div className="flex min-h-screen pb-20 pt-10 p-4 justify-center  bg-[#D6E2EA]">
      <div className="w-full lg:w-1/4 flex flex-col items-center justify-center">
        <RiveComponent fit={Fit.Contain} alignment={Alignment.Center} />
        <div className="w-full max-w-md bg-white shadow-md rounded-lg pt-4 p-8">
          <div className="text-2xl flex flex-col items-center justify-start font-bold mb-6">
            <Logo />
            Login
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="login-email"
                autoComplete="email"
                onChange={handleUsernameChange}
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
                type="email"
                value={username}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                ref={inputRef} // Assign ref to the username input
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="login-pass"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                onChange={handlePasswordChange}
                id="login-pass"
                type="password"
                autoComplete="current-password"
                value={password}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <Link
                to="/sign-up"
                className="text-blue-500 underline hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
          <Button onClick={handleLoginWithGoogle} className="btn mt-4">
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
