import axios from 'axios';
import Login from '../components/Auth/Login';
import {getAccessToken,getRefreshToken,setAccessToken,setRefreshToken } from '../utils/CommonUtils';
import { resolvePath } from 'react-router-dom';

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
      config.headers['Authorization'] = `Bearer ${getAccessToken()}`; // Include "Bearer" prefix

    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)

  // Add a response interceptor to handle token expiration and refresh
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {

    if (error.response && error.response.status === 401) {
      // Token expired, try to refresh it
      const refreshToken = getRefreshToken();
      // if user will have already refreshToken only in that case we will generate new refressh token 
      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(
            `${BaseUrl}/api/token/refresh/`,
            { refresh: refreshToken }
          );
          const newAccessToken = refreshResponse.data.access;
          setAccessToken(newAccessToken);
          // Retry the original request with the new access token
          error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        } catch (refreshError) {
          // If refresh fails, log the user out or handle it as needed
          console.error('Refresh token failed:', refreshError);
          // Handle logout or other actions here
        }
      }
    }
    return Promise.reject(error);
  }
);




export const LoginUsersUrl = async (LoginData) => {
    try {
      // Make the API request
      const response = await axios.post(`${BaseUrl}/api/user/login/`, LoginData);
      console.log(response.data.token)
      setAccessToken(response.data.token.access)
      setRefreshToken(response.data.token.refresh)
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



  export const UserCartUrl = async () => {
    try {
      // Make the API request
      const response = await axiosInstance.get(`${BaseUrl}/cart/getcart/`);
      return response.data;
    } catch (error) {
      // If there's an error in the API call, handle it here
      console.error('API Error:', error);
      // You can throw the error or return an error object, or handle it as needed
      throw error;
    }
  };



  export const SignUpUserUrl = async (SignUpData) => {
    try {
      // Make the API request
      const response = await axiosInstance.post(`${BaseUrl}/api/user/register/`, SignUpData);
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