import axios from "axios";
import { store } from "@/lib/redux/store"
import { logout, loginSuccess } from "@/lib/redux/slices/authSlice";

const api = axios.create({ baseURL: "/api" });

api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const refreshToken = store.getState().auth.refreshToken;
        if (!refreshToken) throw new Error("No refresh token");

        const { data } = await axios.post("/api/auth/refresh", { refreshToken });
        store.dispatch(loginSuccess({ user: store.getState().auth.user, ...data }));

        error.config.headers.Authorization = `Bearer ${data.token}`;
        return axios(error.config);
      } catch {
        store.dispatch(logout());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
