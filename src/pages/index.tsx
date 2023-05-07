import Layout from "@/components/layout/Layout";
import LoginButton from "@/components/login/LoginButton";
import HotDogShopsList from "@/components/shops/HotDogShopsList";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogInClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("IS_LOGGED_IN");
    console.log("useeffecf data", data);
    if (data !== null) {
      setIsLoggedIn(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("IS_LOGGED_IN", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <>
      <Layout>
        <LoginButton onLogInClick={handleLogInClick} isLoggedIn={isLoggedIn} />
        <HotDogShopsList isLoggedIn={isLoggedIn} />
      </Layout>
    </>
  );
}
