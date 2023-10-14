import axios from 'axios';
import Login from '../components/Auth/Login';
import {getAccessToken,getRefreshToken,setAccessToken,setRefreshToken } from '../utils/CommonUtils';

// https://rapidapi.com/guides/custom-axios-instance
const BaseUrl = 'http://127.0.0.1:8000'

const axiosInstance = axios.create({
    baseURL: BaseUrl,
    headers: {
        "content-type": "application/json"
    }
});


axiosInstance.interceptors.request.use(
    config => {
      
      const token = getAccessToken()
      if (token) {
        config.headers['Authorization'] = getAccessToken()
      }
      // config.headers['Content-Type'] = 'application/json';
      return config
    },
    error => {
      Promise.reject(error)
    }
  )


// // Set the access token in the headers for every request
// axiosInstance.interceptors.request.use(config => {
//     console.log(config)
//     const token = yourAuthToken; // Get the token from your storage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });



export const LoginUsersUrl = async (LoginData) => {
    try {
      // Make the API request
      const response = await axios.post(`${BaseUrl}/api/user/login/`, LoginData);
      setAccessToken(response.data.token.accessToken)
      setRefreshToken(response.data.token.refreshToken)
      console.log(getAccessToken())
      console.log(getAccessToken())
      // If the request is successful, return the response data
      return response.data;
    } catch (error) {
      // If there's an error in the API call, handle it here
      console.error('API Error:', error);
      // You can throw the error or return an error object, or handle it as needed
      throw error;
    }
  };


export const UserProfileUrl = async () => {
    try {
      // Make the API request
      const response = await axiosInstance.get(`${BaseUrl}/api/user/profile/`);
      return response.data;
    } catch (error) {
      // If there's an error in the API call, handle it here
      console.error('API Error:', error);
      // You can throw the error or return an error object, or handle it as needed
      throw error;
    }
  };

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }