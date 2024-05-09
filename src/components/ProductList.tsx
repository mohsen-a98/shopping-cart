import { useProducts } from "../context/ProductsContext";
import { ProductItem } from "./ProductItem";

function ProductList() {
  const { products } = useProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-10">
      {products.map((product) => ProductItem(product))}
    </div>
  );
}

export default ProductList;
