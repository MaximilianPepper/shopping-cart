import axios from "axios";

const apiBaseUrl = "https://fakestoreapi.com";
const getAllData = async () => {
  const { data } = await axios.get(`${apiBaseUrl}/products`);

  return data;
};

const getAllCategory = async () => {
  const { data } = await axios.get(`${apiBaseUrl}/products/categories`);

  return data;
};

export default {
  getAllData,
  getAllCategory,
};
