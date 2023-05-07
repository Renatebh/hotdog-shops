import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global/store";
import { useState } from "react";
import { updateShops } from "../../global/ShopReducer";
import Layout from "@/components/layout/Layout";

const ShopUpdatePage = () => {
  const router = useRouter();
  const id = typeof router.query.id === "string" ? router.query.id : undefined;
  const shops = useSelector((state: RootState) => state.shops.data);
  const existingShops = shops.filter((f) => String(f.id) === String(id));
  const { name, address, rating, latitude, longitude, image } =
    existingShops?.[0] ?? {};
  const [sname, setName] = useState(name);
  const [slatitude, setLatitude] = useState(latitude);
  const [slongitude, setLongitude] = useState(longitude);
  const [saddress, setAddress] = useState(address);
  const [srating, setRating] = useState(rating);
  const [simage, setImage] = useState(image);
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
      <form onSubmit={handleUpdate}>
        <h1>Update Shop {id}</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={`${name}`}
            value={sname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder={`${address}`}
            value={saddress}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <select
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
        </div>
        <div>
          <label htmlFor="latitude">Latitude: </label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            placeholder={`${latitude}`}
            value={slatitude}
            onChange={(e) => setLatitude(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="longitude">Longitude: </label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            placeholder={`${longitude}`}
            value={slongitude}
            onChange={(e) => setLongitude(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            name="image"
            id="image"
            value=""
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </Layout>
  );
};

export default ShopUpdatePage;
