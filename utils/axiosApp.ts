import axios from 'axios';

// Create an Axios instance with a custom base URL
const axiosInstance = axios.create({
  baseURL: 'https://magzsalone-c6d08b8d094b.herokuapp.com',
  withCredentials:true
});



export default axiosInstance