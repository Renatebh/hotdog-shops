import Layout from "@/components/layout/Layout";
import LoginButton from "@/components/login/LoginButton";
import HotDogShopsList from "@/components/shops/HotDogShopsList";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogInClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <Layout>
        <h1>Welcome to the hotdog shop locator</h1>
        <LoginButton loggedIn={isLoggedIn} onLogInClick={handleLogInClick} />
        <HotDogShopsList isLoggedIn={isLoggedIn} />
      </Layout>
    </>
  );
}
