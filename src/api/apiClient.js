import axios from "axios";

// Base API configuration
const API_BASE_URL = "https://affyclouditsolutions.com/api";
export const DEFAULT_WEBSITE = "techtrade";

// Create Axios client instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Request interceptor to automatically attach website parameter
apiClient.interceptors.request.use(
  (config) => {
    config.params = {
      website: DEFAULT_WEBSITE,
      ...config.params,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error response:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Blog API functions
export const blogApi = {
  /**
   * Fetch paginated blogs list with optional search
   * @param {Object} options
   * @param {string} [options.website='techtrade']
   * @param {number} [options.page=1]
   * @param {number} [options.perPage=10]
   * @param {string} [options.search='']
   */
  getBlogs: async ({ website = DEFAULT_WEBSITE, page = 1, perPage = 10, search = "" } = {}) => {
    const params = {
      website,
      page,
      per_page: perPage,
    };

    if (search && search.trim()) {
      params.search = search.trim();
    }

    const response = await apiClient.get("/blogs", { params });
    return response.data;
  },

  /**
   * Search blogs specifically
   * @param {string} query
   * @param {Object} [options]
   */
  searchBlogs: async (query, { website = DEFAULT_WEBSITE, page = 1, perPage = 10 } = {}) => {
    const params = {
      website,
      search: query,
      page,
      per_page: perPage,
    };
    const response = await apiClient.get("/blogs", { params });
    return response.data;
  },

  /**
   * Fetch single blog post details and SEO metadata by slug
   * @param {string} slug
   * @param {string} [website='techtrade']
   */
  getBlogBySlug: async (slug, website = DEFAULT_WEBSITE) => {
    const response = await apiClient.get(`/blogs/${encodeURIComponent(slug)}`, {
      params: { website },
    });
    return response.data;
  },
};

export default apiClient;

