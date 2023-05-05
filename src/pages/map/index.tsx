import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HotDogShop } from "../../types/hotDogShops";
import hotDogShopData from "@/data/hotDogShopsData";
import Layout from "@/components/layout/Layout";

interface MapWithNoSSRProps {
  hotDogShops: HotDogShop[];
}

const MapWithNoSSR = dynamic<MapWithNoSSRProps>(
  () => import("../../components/map/Map"),
  {
    ssr: false,
  }
);

const MapPage = () => {
  const [renderMap, setRenderMap] = useState(false);

  useEffect(() => {
    setRenderMap(true);
  }, []);

  return (
    <>
      <Layout>
        {renderMap && <MapWithNoSSR hotDogShops={hotDogShopData} />}
      </Layout>
    </>
  );
};

export default MapPage;
