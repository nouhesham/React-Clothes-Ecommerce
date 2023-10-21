import ProductsList from "../ProductsList/ProductList";
import Loader from "../Loader/Loader";
import UseGetproducts from "../../Hooks/UseGetproducts.js";

const Shop = () => {
  const [loader, error, products] = UseGetproducts();
  console.log(products);

  return (
    <>
      <Loader loader={loader} error={error}></Loader>
      <ProductsList products={products} />
    </>
  );
};
export default Shop;
