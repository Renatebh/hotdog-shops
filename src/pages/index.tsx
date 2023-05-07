import Layout from "@/components/layout/Layout";
import LoginButton from "@/components/login/LoginButton";
import HotDogShopsList from "@/components/shops/HotDogShopsList";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false);
    console.log("isLoggedIn Home", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogInClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Layout>
        <h1>Welcome to the hotdog shop locator</h1>
        <LoginButton onLogInClick={handleLogInClick} isLoggedIn={isLoggedIn} />
        <HotDogShopsList isLoggedIn={isLoggedIn} />
      </Layout>
    </>
  );
}
