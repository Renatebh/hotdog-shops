import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShops } from "../../global/ShopReducer";
import { RootState } from "../../global/store";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { TextField, Button } from "@mui/material";
import styles from "../update/update.module.css";

const ShopCreatePage = () => {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");

  const router = useRouter();
  const shops = useSelector((state: RootState) => state.shops.data);

  const dispatch = useDispatch();

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(`/images/${file.name}`);
    };
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push("/");
    dispatch(
      addShops({
        id: shops[shops.length - 1].id + 1,
        name,
        address,
        rating,
        latitude,
        longitude,
        image,
      })
    );
  };

  return (
    <Layout>
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit} className={styles["update-form"]}>
          <h2>Create a new shop</h2>
          <div>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
          </div>
          <div>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              margin="normal"
              required
            />
          </div>

          <div>
            <TextField
              label="Latitude"
              variant="outlined"
              fullWidth
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              margin="normal"
              required
            />
          </div>
          <div>
            <TextField
              label="Longitude"
              variant="outlined"
              fullWidth
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              margin="normal"
              required
            />
          </div>
          <div className={styles["select-container"]}>
            <select
              className={styles["select-rating"]}
              name="rating"
              id="rating"
              onChange={(e) => setRating(parseFloat(e.target.value))}
            >
              <option value="">Select rating</option>
              <option value="0.5">0.5</option>
              <option value="1.0">1.0</option>
              <option value="1.5">1.5</option>
              <option value="2.0">2.0</option>
              <option value="2.5">2.5</option>
              <option value="3.0">3.0</option>
              <option value="3.5">3.5</option>
              <option value="4.0">4.0</option>
              <option value="4.5">4.5</option>
              <option value="5.0">5.0</option>
            </select>

            <label htmlFor="image">Select mage: </label>
            <input
              className={styles["select-image"]}
              type="file"
              name="image"
              id="image"
              onChange={handleImageChange}
            />
          </div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default ShopCreatePage;
