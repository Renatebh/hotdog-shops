import React, { useState } from "react";
import Link from "next/link";
import { HotDogShop } from "@/types/hotDogShops";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../global/store";

interface HotDogShopsListProps {
  isLoggedIn: boolean;
}

const HotDogShopsList = ({}: HotDogShopsListProps) => {
  const shops = useSelector((state: RootState) => state.shops.data);
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  console.log(shops);

  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  const handleClick = (shop: HotDogShop) => {
    setLat(shop.latitude);
    setLng(shop.longitude);
  };

  return (
    <div>
      <ul>
        {shops.map((shop) => {
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
              <p>Rating: {shop.rating}</p>
              <Image
                src={shop.image}
                alt={shop.name}
                width={300}
                height={200}
                priority={true}
              />
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
