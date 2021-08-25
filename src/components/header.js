import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/">Cart</a> <a href="#/">signin</a>
      </div>
    </header>
  );
};

export default Header;
