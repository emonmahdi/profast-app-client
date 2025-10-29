import axios from 'axios'; 
import { useAuth } from "./useAuth";

const axiosSecure = axios.create({
  baseURL: `http://localhost:5000`,
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = user?.stsTokenManager?.accessToken;
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosSecure;
}; 

export default useAxiosSecure;