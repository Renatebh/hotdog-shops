import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global/store";
import { login, logout } from "../../global/AuthReducer";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const [buttonText, setButtonText] = useState("Login");
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      setButtonText("Log out");
    } else {
      setButtonText("Login");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Button
        onClick={isLoggedIn ? handleLogout : handleLogin}
        variant="contained"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default LoginButton;
