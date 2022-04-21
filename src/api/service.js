import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "https://handishare.herokuapp.com/api",
});

const createNewMaterial = (file) => {
  return api.post("/material/new", file).then((res) => res.data);
};

const updateExistingMaterial = (file) => {
  return api.put("/material/:id", file).then((res) => res.data);
};

const createUser = (file) => {
  return api.post("/user/register", file).then((res) => res.data);
};

export { createNewMaterial, updateExistingMaterial, createUser };
