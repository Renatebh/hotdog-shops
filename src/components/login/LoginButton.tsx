import { useEffect, useState } from "react";

interface LoginProps {
  onLogInClick: () => void;
}

const LoginButton = ({ onLogInClick }: LoginProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonText, setButtonText] = useState("Login");
  const [loginText, setLoginText] = useState("");

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setButtonText("Log out");
      setLoginText("You are logged in!");
    } else {
      setButtonText("Login");
      setLoginText("");
    }
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogInClick = () => {
    setIsLoggedIn(!isLoggedIn);
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
