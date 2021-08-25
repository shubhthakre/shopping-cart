import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Main from "./components/main";
import Cart from "./components/cart";
import data from "./data";
import { CartProvider } from "react-use-cart";

function App() {
  const { products } = data;
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <div className="row">
          <Main products={products} />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
