import axios from 'axios';

// Axios instance
const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log(`[API] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        `[API Error] ${error.response.status}: ${error.response.statusText}`
      );
    } else if (error.request) {
      console.error('[API Error] No response received');
    }
    return Promise.reject(error);
  }
);

// API functions
export const getProducts = async () => {
  const res = await apiClient.get('/products');
  return res.data;
};

export const getProductById = async (id) => {
  const res = await apiClient.get(`/products/${id}`);
  return res.data;
};

export const getProductsByCategory = async (category) => {
  const res = await apiClient.get(`/products/category/${category}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await apiClient.get('/products/categories');
  return res.data;
};

export default apiClient;