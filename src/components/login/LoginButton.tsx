import { useState } from "react";

interface LoginProps {
  loggedIn: boolean;
  onLogInClick: () => void;
}

const LoginButton = ({ loggedIn, onLogInClick }: LoginProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);

  const handleLogInClick = () => {
    setIsLoggedIn(!isLoggedIn);
    onLogInClick();
  };

  return (
    <>
      <button onClick={handleLogInClick}>
        {loggedIn ? (isLoggedIn ? "Log out" : "Logged in") : "Login"}
      </button>
      <div>{isLoggedIn ? "You are logged in" : ""}</div>
    </>
  );
};

export default LoginButton;
