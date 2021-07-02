import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3100/api",
  headers: {
    "Content-type": "application/json"
  }
});