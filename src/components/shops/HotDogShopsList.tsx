import React, { useState } from "react";
import hotDogShopsData from "../../data/hotDogShopsData";
import Link from "next/link";
import { HotDogShop } from "@/types/hotDogShops";

interface HotDogShopsListProps {
  isLoggedIn: boolean;
}

const HotDogShopsList = ({ isLoggedIn }: HotDogShopsListProps) => {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  const handleClick = (shop: HotDogShop) => {
    setLat(shop.latitude);
    setLng(shop.longitude);
  };

  return (
    <div>
      <ul>
        {hotDogShopsData.map((shop) => {
          return (
            <li key={shop.id}>
              <Link
                href={{
                  pathname: "/map",
                  query: { lat: shop.latitude, lng: shop.longitude },
                }}
              >
                {" "}
                <p onClick={() => handleClick(shop)}>{shop.name}</p>
              </Link>
              <p>{shop.address}</p>
              {isLoggedIn ? (
                <div>
                  <Link href="/update/[id]" as={`/update/${shop.id}`}>
                    Update Shop
                  </Link>

                  <Link href="/delete/[id]" as={`/delete/${shop.id}`}>
                    Delete Shop
                  </Link>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
        {isLoggedIn ? <Link href="/create">Add new Shop</Link> : ""}
      </ul>
    </div>
  );
};

export default HotDogShopsList;
