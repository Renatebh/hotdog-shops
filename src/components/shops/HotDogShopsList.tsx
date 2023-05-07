import React, { useState } from "react";
import Link from "next/link";
import { HotDogShop } from "@/types/hotDogShops";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global/store";
import { deleteShop } from "../../global/ShopReducer";
import { Rating } from "@mui/material";

interface HotDogShopsListProps {
  isLoggedIn: boolean;
}

const HotDogShopsList = ({ isLoggedIn }: HotDogShopsListProps) => {
  const shops = useSelector((state: RootState) => state.shops.data);
  const dispatch = useDispatch();

  // console.log("HotDogShopsList", isLoggedIn);

  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  const handleClick = (shop: HotDogShop) => {
    setLat(shop.latitude);
    setLng(shop.longitude);
  };

  const handleDelete = (id: any) => {
    dispatch(deleteShop({ id: id }));
  };

  return (
    <div>
      {isLoggedIn ? <Link href="/create">Add new Shop</Link> : ""}
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
              <Rating
                name="shop-rating"
                value={shop.rating}
                precision={0.1}
                readOnly
              />
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
                    Edit Shop
                  </Link>

                  <button onClick={() => handleDelete(shop.id)}>
                    Delete Shop
                  </button>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HotDogShopsList;
