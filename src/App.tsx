import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import { ProductsContextProvider } from "./context/ProductsContext";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

function App() {
  return (
    <ProductsContextProvider>
      <ShoppingCartProvider>
        <div className="container bg-slate-100">
          <div className="p-5">
            <Header />
            <ProductList />
          </div>
        </div>
      </ShoppingCartProvider>
    </ProductsContextProvider>
  );
}

export default App;
