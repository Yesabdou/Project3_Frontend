import axios from "axios";
 
const api = axios.create({
  baseURL: "https://handishare.herokuapp.com/api"
});

const errorHandler = (err) => {
    throw err;
  };
 
const uploadImage = (file) => {
  return api.post("/material/new", file)
    .then(res => res.data)
    .catch(errorHandler);
};

 
export default uploadImage;