import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.127.52.128/api/api/admin",
});

export default instance;
