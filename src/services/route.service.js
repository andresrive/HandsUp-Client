import axios from 'axios';

class RouteService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005/api"
    });
    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  createOne = async (requestBody) => {
    return this.api.post('/examples', requestBody);
  }

  getAllPacks = async () => {
    return this.api.get('/packs');
  }
  getAllPlans = async () => {
    return this.api.get('/plans');
  }

  getOne = async (id) => {
    return this.api.get(`/examples/${id}`);
  }

  updateOne = async (id, requestBody) => {
    return this.api.put(`/examples/${id}`, requestBody);
  }

  deleteProject = async (id) => {
    return this.api.delete(`/examples/${id}`);
  } 


}

const routeService = new RouteService();

export default routeService;