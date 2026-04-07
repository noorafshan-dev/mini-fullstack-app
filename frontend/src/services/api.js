import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getSituations = () => API.get("/situation");
export const createSituation = (data) => API.post("/situation", data);
export const updateSituation = (id, data) => API.put(`/situation/${id}`, data);
export const deleteSituation = (id) => API.delete(`/situation/${id}`);
