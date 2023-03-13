import axios from "axios"

const api = axios.create({
    // make sure you use PORT = 5005 (the port where our server is running)
    baseURL: "http://localhost:5005/api"
    // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
    throw err;
};

const uploadImage = (file) => {
    return api.post("/upload", file)
        .then(res => res.data)
        .catch(errorHandler);
};

const createPlan = (newPlan) => {
    return api.post("/plans/create", newPlan)
        .then(res => res.data)
        .catch(errorHandler)
};

const createPack = (newPack) => {
    return api.post("/packs/create", newPack)
        .then(res => res.data)
        .catch(errorHandler)
};

const addAvatar = (avatar) => {
    return api.put("/profile", avatar)
        .then(res => res.data)
        .catch(errorHandler)
}


export { uploadImage, createPlan, createPack, addAvatar }