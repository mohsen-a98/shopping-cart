import React, { createContext, useContext, useEffect, useState } from "react";
import { type Product } from "../App";
import { getProducts } from "../services/productsApi";

type ProductsContext = {
  products: Product[];
};

const ProductsContext = createContext({} as ProductsContext);

function ProductsContextProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsApi = await getProducts();
      setProducts(productsApi);
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error(
      "useProducts must be used within a ProductsContextProvider"
    );
  }
  return context;
}

export { useProducts, ProductsContextProvider };
