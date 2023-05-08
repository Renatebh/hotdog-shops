import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global/store";
import { useState } from "react";
import { updateShops } from "../../global/ShopReducer";
import Layout from "@/components/layout/Layout";
import { TextField, Button } from "@mui/material";
import styles from "./update.module.css";

const ShopUpdatePage = () => {
  const router = useRouter();
  const id = typeof router.query.id === "string" ? router.query.id : undefined;
  const shops = useSelector((state: RootState) => state.shops.data);
  const existingShops = shops.filter((f) => String(f.id) === String(id));
  const { name, address, rating, latitude, longitude, image } =
    existingShops?.[0] ?? {};

  const [sname, setName] = useState(name || "");
  const [slatitude, setLatitude] = useState(latitude || "");
  const [slongitude, setLongitude] = useState(longitude || "");
  const [saddress, setAddress] = useState(address || "");
  const [srating, setRating] = useState(rating || "");
  const [simage, setImage] = useState(image || "");
  const dispatch = useDispatch();

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(`/images/${file.name}`);
    };
  };

  const handleUpdate = (event: any) => {
    event.preventDefault();
    router.push("/");
    dispatch(
      updateShops({
        id: id,
        name: sname,
        latitude: slatitude,
        longitude: slongitude,
        address: saddress,
        rating: srating,
        image: simage,
      })
    );
  };

  return (
    <Layout>
      <div className={styles["form-container"]}>
        <form onSubmit={handleUpdate} className={styles["update-form"]}>
          <h2>Update {name}</h2>
          <div>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={sname}
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
              value={saddress}
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
              value={slatitude}
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
              value={slongitude}
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

            <input
              className={styles["select-image"]}
              type="file"
              name="image"
              id="image"
              onChange={handleImageChange}
            />
          </div>
          <Button variant="contained" type="submit">
            Update
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default ShopUpdatePage;
