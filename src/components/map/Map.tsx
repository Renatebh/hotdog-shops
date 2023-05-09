import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngExpression } from "leaflet";
import { useRouter } from "next/router";
import styles from "./Map.module.css";
import hotDogIcon from "../../../public/hotdog.ico.png";
import { useSelector } from "react-redux";
import { RootState } from "../../global/store";

export const Map = () => {
  const shops = useSelector((state: RootState) => state.shops.data);

  const router = useRouter();
  const center: LatLngExpression = [40.712776, -74.005974];
  const { lat, lng } = router.query;
  const hotDogIconUrl = hotDogIcon.src;

  const hotDogIconObj = L.icon({
    iconUrl: hotDogIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return (
    <div className={styles["map-wrapper"]}>
      <MapContainer
        center={[Number(lat) || center[0], Number(lng) || center[1]]}
        zoom={13}
        style={{ height: "600px" }}
        className={styles.map}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {shops.map((shop) => (
          <Marker
            position={[shop.latitude, shop.longitude]}
            key={shop.id}
            icon={hotDogIconObj}
          >
            <Popup>
              <h3>{shop.name}</h3>
              <p>{shop.address}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
