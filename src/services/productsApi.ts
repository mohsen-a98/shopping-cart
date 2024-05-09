import axios from "axios";
import { Product } from "../App";

export const getProducts = async () => {
  try {
    const data = await axios
      .get<Product[]>("https://fakestoreapi.com/products")
      .then((res) => res.data);

    return data;
  } catch (error) {
    console.error(error);
  }
};
