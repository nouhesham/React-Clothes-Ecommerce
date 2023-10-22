import ProductsList from "../ProductsList/ProductList";
import LoaderComponent from "../Loader/Loader";

import UseGetproducts from "../../Hooks/UseGetproducts.js";

const Shop = () => {
  const [loader, error, products] = UseGetproducts();

  return (
    <>
      <LoaderComponent loader={loader} error={error} />
      <ProductsList products={products} />
    </>
  );
};
export default Shop;
