import axios from "axios";

export const getProducts = async () => {
  try {
    const data = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);

    return data;
  } catch (error) {
    console.error(error);
  }
};
