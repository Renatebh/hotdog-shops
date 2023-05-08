import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HotDogShop } from "@/types/hotDogShops";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global/store";
import { deleteShop } from "../../global/ShopReducer";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "./HotDogShopsList.module.css";

const HotDogShopsList = () => {
  const shops = useSelector((state: RootState) => state.shops.data);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

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
    <div className={styles["shops-list-container"]}>
      <div className={styles["crate-button-wrapper"]}>
        {isLoggedIn ? (
          <Link href="/create">
            <Button variant="contained">Add new Shop</Button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className={styles["card-container"]}>
        {shops.map((shop) => {
          return (
            <div key={shop.id} className={styles["shops-card"]}>
              <Link
                href={{
                  pathname: "/map",
                  query: { lat: shop.latitude, lng: shop.longitude },
                }}
              >
                {" "}
                <h3
                  onClick={() => handleClick(shop)}
                  className={styles["shop-name"]}
                >
                  {shop.name}
                </h3>
              </Link>
              <p className={styles["shop-address"]}>{shop.address}</p>
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
                className={styles["shop-image"]}
              />
              {isLoggedIn ? (
                <div className={styles["links-container"]}>
                  <Link href="/update/[id]" as={`/update/${shop.id}`}>
                    <Button
                      variant="outlined"
                      className={styles["edit-button"]}
                    >
                      {" "}
                      Edit Shop
                    </Button>
                  </Link>
                  <div>
                    <Button
                      onClick={() => handleDelete(shop.id)}
                      variant="contained"
                      className={styles["delete-button"]}
                    >
                      Delete shop
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotDogShopsList;
