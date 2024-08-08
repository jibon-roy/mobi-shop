import { useState } from "react";

export default function useBackendUri() {
  const [url, setUrl] = useState("");

  // Set the URL on initial render
  if (typeof window !== "undefined" && !url) {
    const baseURL = window.location.origin;
    setUrl(baseURL);
  }

  const devURL = import.meta.env.VITE_DEV_URL;
  const prodURL = import.meta.env.VITE_PROD_URL;

  if (url === devURL) {
    return import.meta.env.VITE_DEV_BACKEND_URI;
  } else if (url === prodURL) {
    return import.meta.env.VITE_PROD_BACKEND_URI;
  }

  return null;
}
