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

  createOnePack = async (requestBody) => {
    return this.api.post('/packs/create', requestBody);
  }
  createOnePlan = async (requestBody) => {
    return this.api.post('/plans/create', requestBody);
  }

  getAllPacks = async () => {
    return this.api.get('/packs');
  }
  getAllPlans = async () => {
    return this.api.get('/plans');
  }

  getOnePack = async (id) => {
    return this.api.get(`/packs/${id}`);
  }
  getOnePlan = async (id) => {
    return this.api.get(`/plans/${id}`);
  }

  updateOnePlan = async (id, requestBody) => {
    return this.api.put(`/plans/${id}/edit`, requestBody);
  }
  updateOnePack = async (id, requestBody) => {
    return this.api.put(`/packs/${id}/edit`, requestBody);
  }


  updateProfile = async (requestBody) => {
    return this.api.put(`/profile`, requestBody);
  }

  deletePlan = async (id) => {
    return this.api.delete(`/plans/${id}/delete`);
  }
  deletePack = async (id) => {
    return this.api.delete(`/packs/${id}/delete`);
  }


}

const routeService = new RouteService();

export default routeService;