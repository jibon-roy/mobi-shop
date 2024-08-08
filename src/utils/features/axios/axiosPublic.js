import axios from "axios";

// Set the URL on initial render

const getUri = () => {
  if (typeof window !== "undefined") {
    const baseURL = window.location.origin;
    const devURL = import.meta.env.VITE_DEV_URL;
    const prodURL = import.meta.env.VITE_PROD_URL;
    if (baseURL === devURL) {
      return import.meta.env.VITE_DEV_BACKEND_URI;
    } else if (baseURL === prodURL) {
      return import.meta.env.VITE_PROD_BACKEND_URI;
    }
  }
};

export const backendURI = getUri();

const axiosPublic = axios.create({
  baseURL: backendURI,
});

export default axiosPublic;
