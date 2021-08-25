import Cart from "./cart";
import ItemCard from "./Itemcard";

const Main = (props) => {
  const { products } = props;

  return (
    <div>
      <h1>Products</h1>
      <ItemCard products={products} />
    </div>
  );
};

export default Main;
