import { Container } from "react-bootstrap";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { item } = useCart();
  return (
    <Container fluid>
      <h2>Cart Items</h2>
    </Container>
  );
};

export default Cart;
