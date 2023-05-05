import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HotDogShop } from "@/types/hotDogShops";
import { LatLngExpression } from "leaflet";
import styles from "./Map.module.css";
import { useRouter } from "next/router";

export interface MapProps {
  hotDogShops: HotDogShop[];
}

export const Map = ({ hotDogShops }: MapProps) => {
  const router = useRouter();
  const center: LatLngExpression = [40.712776, -74.005974];
  const { lat, lng } = router.query;

  return (
    <MapContainer
      center={[Number(lat) || center[0], Number(lng) || center[1]]}
      zoom={13}
      style={{ height: "600px" }}
      className={styles.map}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {hotDogShops.map((shop) => (
        <Marker position={[shop.latitude, shop.longitude]} key={shop.id}>
          <Popup>
            <h3>{shop.name}</h3>
            <p>{shop.address}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
