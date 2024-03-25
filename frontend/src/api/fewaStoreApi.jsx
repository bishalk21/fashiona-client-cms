import axios from "axios";

const fewaStoreApi = axios.create({
  baseURL:
    import.meta.env.NODE_ENV === "production"
      ? "https://fewa-store-api.vercel.app"
      : "http://localhost:3300",
});

export default fewaStoreApi;
