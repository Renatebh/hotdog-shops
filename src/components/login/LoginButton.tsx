import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginStatus } from "@/global/store";
import { RootState } from "../../global/store";

interface LoginProps {
  onLogInClick: () => void;
}

const LoginButton = ({ onLogInClick }: LoginProps) => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Login");

  useEffect(() => {
    if (isLoggedIn) {
      setButtonText("Log out");
    } else {
      setButtonText("Login");
    }
  }, [isLoggedIn]);

  const handleLogInClick = () => {
    dispatch(updateLoginStatus(!isLoggedIn));
    onLogInClick();
  };

  return (
    <>
      <button onClick={handleLogInClick}>{buttonText}</button>
      <div>{isLoggedIn ? "You are logged in" : ""}</div>
    </>
  );
};

export default LoginButton;
