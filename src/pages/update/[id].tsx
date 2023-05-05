import { useRouter } from "next/router";

const ShopUpdatePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Update Shop {id}</h1>
      {/* Add form to update the shop */}
    </div>
  );
};

export default ShopUpdatePage;
