import axios from "axios"
const newInstance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/"
})

export default newInstance