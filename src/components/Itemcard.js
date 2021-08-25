import { Card, Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
  const { addItem } = useCart();

  const { products } = props;
  return (
    <div style={{ marginLeft: "17vw" }}>
      {products.map((p) => (
        <Card
          style={{ width: "18rem", marginLeft: "2vw", float: "left" }}
          key={p.id}
        >
          <Card.Img variant="top" src={p.image} />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>${p.price}</Card.Text>
            <Button variant="primary" onClick={() => addItem(p)}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ItemCard;
