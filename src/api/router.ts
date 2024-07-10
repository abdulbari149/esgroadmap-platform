import axios from "axios";
import Cookies from "js-cookie";

const publicRouter = axios.create({
  baseURL: 'http://localhost:4000/api'
});

const privateRouter = axios.create({
  baseURL: 'http://localhost:4000/api'
});

privateRouter.interceptors.request.use(
  config => {
    // Get the token from cookies
    const token = Cookies.get('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const router = {
  public: publicRouter,
  private: privateRouter
};

export default router;
