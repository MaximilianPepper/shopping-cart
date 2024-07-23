import axios from "axios";

const apiBaseUrl = "https://fakestoreapi.com";
const getTestData = async () => {
  const { data } = await axios.get(`${apiBaseUrl}/products?limit=5`);

  return data;
};

export default {
  getTestData,
};
