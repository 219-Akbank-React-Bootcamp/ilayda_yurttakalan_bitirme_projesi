import axios from "axios";

const instance = axios.create({
  baseURL: "http://34.125.176.136:3000/"
});

instance.defaults.headers.authorization = `Bearer ${localStorage.getItem("token") || ""}`;

export default instance;
