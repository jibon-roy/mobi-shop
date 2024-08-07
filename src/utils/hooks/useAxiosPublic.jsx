import axios from "axios";
import useBackendUri from "./useBackendUri";

export default function useAxiosPublic() {
  const backendURI = useBackendUri();
  const axiosPublic = axios.create({
    baseURL: backendURI,
  });
  return axiosPublic;
}
