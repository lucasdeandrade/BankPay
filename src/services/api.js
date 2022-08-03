import axios from "axios";

const api = axios.create({
  baseURL: "https://bankpay-api.herokuapp.com",
});


export default api;