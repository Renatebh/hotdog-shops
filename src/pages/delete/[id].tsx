import { useRouter } from "next/router";

const ShopDeletePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Delete Shop {id}</h1>
      {/* Add form to update the shop */}
    </div>
  );
};

export default ShopDeletePage;
