import { useEffect, useState } from "react";

interface LoginProps {
  onLogInClick: () => void;
  isLoggedIn: boolean;
}

const LoginButton = ({ onLogInClick, isLoggedIn }: LoginProps) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonText, setButtonText] = useState("Login");
  const [loginText, setLoginText] = useState("");

  console.log("LoginButton", isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      setButtonText("Log out");
      setLoginText("You are logged in!");
    } else {
      setButtonText("Login");
      setLoginText("");
    }
  }, [isLoggedIn]);

  const handleLogInClick = () => {
    onLogInClick();
  };

  return (
    <>
      <button onClick={handleLogInClick}>{buttonText}</button>
      <div>
        <p>{loginText}</p>
      </div>
    </>
  );
};

export default LoginButton;
