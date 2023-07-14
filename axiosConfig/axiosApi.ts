import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import GetIp from '../utils/GetIp';
const axiosClient = axios.create({ withCredentials: true });
  axiosClient.defaults.baseURL = `http://192.168.1.16:7000/`;

axiosClient.defaults.headers["Content-Type"]="application/json";
axiosClient.defaults.headers["Access-Control-Allow-Origin"]='http://192.168.1.16:7000/'

axiosClient.defaults.timeout = 10000;


axiosClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      await AsyncStorage.removeItem('token');
      return axiosClient(config);
    }
    return Promise.reject(error);
  }
);


export default axiosClient;






