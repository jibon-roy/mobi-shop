export default function useBackendUri() {
  const mode = import.meta.env.VITE_MODE;

  if (mode == "dev") {
    return import.meta.env.VITE_DEV_BACKEND_URI;
  } else if (mode == "prod") {
    return import.meta.env.VITE_PROD_BACKEND_URI;
  }
}
