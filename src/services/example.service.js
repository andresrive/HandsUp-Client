import axios from 'axios';

class ExampleService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005/"
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
    return this.api.post('/api/examples', requestBody);
  }

  getAll = async () => {
    return this.api.get('/plans');
  }

  getOne = async (id) => {
    return this.api.get(`/api/examples/${id}`);
  }

  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/examples/${id}`, requestBody);
  }

  deleteProject = async (id) => {
    return this.api.delete(`/api/examples/${id}`);
  } 


}

const exampleService = new ExampleService();

export default exampleService;