import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=18"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch product details.");
  }
};

export { fetchProducts, fetchProductById };
