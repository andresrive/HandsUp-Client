import axios from 'axios';

class RouteService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005/api"
    });
    // this.api.interceptors.request.use((config) => {
    //   const storedToken = localStorage.getItem("authToken");

    //   if (storedToken) {
    //     config.headers = { Authorization: `Bearer ${storedToken}` };
    //   }

    //   return config;
    // });

    this.headersObject = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`
      }
    }
  }


  createPlan = async (requestBody) => {
    return this.api.post('/plans/create', requestBody, this.headersObject)
  }

  createPack = async (requestBody) => {
    return this.api.post('/packs/create', requestBody, this.headersObject)
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

  joinPlan = async (id, requestsBody) => {
    return this.api.post(`/plans/${id}/join`, requestsBody, this.headersObject)
  }
  joinPack = async (id, requestsBody) => {
    return this.api.post(`/packs/${id}/join`, requestsBody, this.headersObject)
  }

  updateOnePlan = async (id, requestBody) => {
    return this.api.put(`/plans/${id}/edit`, requestBody, this.headersObject);
  }

  updateOnePack = async (id, requestBody) => {
    return this.api.put(`/packs/${id}/edit`, requestBody, this.headersObject);
  }

  getProfile = async () => {
    return this.api.get(`/profile`, this.headersObject);
  }

  updateProfile = async (requestBody) => {
    return this.api.put(`/profile`, requestBody, this.headersObject);
  }

  deletePlan = async (id) => {
    return this.api.delete(`/plans/${id}/delete`, this.headersObject);
  }
  deletePack = async (id) => {
    return this.api.delete(`/packs/${id}/delete`);
  }


}

const routeService = new RouteService();

export default routeService;