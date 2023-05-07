import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShops } from "../../global/ShopReducer";
import { RootState } from "../../global/store";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

const ShopCreatePage = () => {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");

  const router = useRouter();
  const shops = useSelector((state: RootState) => state.shops.data);

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    rating: "",
    latitude: "",
    longitude: "",
    image: "",
  });

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
    const newErrors = {
      name: "",
      address: "",
      rating: "",
      latitude: "",
      longitude: "",
      image: "",
    };
    let hasError = false;
    if (!name) {
      newErrors.name = "Name is required";
      hasError = true;
    }
    if (!address) {
      newErrors.address = "Address is required";
      hasError = true;
    }
    if (!rating) {
      newErrors.rating = "Rating is required";
      hasError = true;
    }
    if (!latitude) {
      newErrors.latitude = "Latitude is required";
      hasError = true;
    }
    if (!longitude) {
      newErrors.longitude = "Longitude is required";
      hasError = true;
    }
    if (!image) {
      newErrors.image = "Image is required";
      hasError = true;
    }
    setErrors(newErrors);
    if (!hasError) {
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
    }
  };

  return (
    <Layout>
      <div>
        <h2>Create a new shop</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter shop name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter shop adress"
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <span>{errors.address}</span>}
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
            {errors.rating && <span>{errors.rating}</span>}
          </div>
          <div>
            <label htmlFor="latitude">Latitude: </label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              placeholder="Enter shop latitude"
              onChange={(e) => setLatitude(parseFloat(e.target.value))}
            />
            {errors.latitude && <span>{errors.latitude}</span>}
          </div>
          <div>
            <label htmlFor="longitude">Longitude: </label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              placeholder="Enter shop longitude"
              onChange={(e) => setLongitude(parseFloat(e.target.value))}
            />
            {errors.longitude && <span>{errors.longitude}</span>}
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleImageChange}
            />
            {errors.image && <span>{errors.image}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default ShopCreatePage;
