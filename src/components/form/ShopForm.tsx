import React from "react";
import { TextField, Button } from "@mui/material";

type ShopFormProps = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  image: string;

  onSubmit: (event: React.FormEvent) => void;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLatitudeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLongitudeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRatingChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ShopForm = ({
  name,
  address,
  latitude,
  longitude,
  rating,
  image,

  onSubmit,
  onNameChange,
  onAddressChange,
  onLatitudeChange,
  onLongitudeChange,
  onRatingChange,
  onImageChange,
}: ShopFormProps) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={onNameChange}
            margin="normal"
            required
            // error={Boolean(errors.name)}
            // helperText={errors.name}
          />
        </div>
        <div>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={onAddressChange}
            margin="normal"
            required
            // error={Boolean(errors.address)}
            // helperText={errors.address}
          />
        </div>

        <div>
          <TextField
            label="Latitude"
            variant="outlined"
            fullWidth
            value={latitude}
            onChange={onLatitudeChange}
            margin="normal"
            required
            // error={Boolean(errors.latitude)}
            // helperText={errors.latitude}
          />
        </div>
        <div>
          <TextField
            label="Longitude"
            variant="outlined"
            fullWidth
            value={longitude}
            onChange={onLongitudeChange}
            margin="normal"
            required
            // error={Boolean(errors.longitude)}
            // helperText={errors.longitude}
          />
        </div>
        <div>
          <select
            name="rating"
            id="rating"
            value={rating}
            onChange={onRatingChange}
            required
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
          <input
            type="file"
            name="image"
            id="image"
            onChange={onImageChange}
            required
          />
        </div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ShopForm;
