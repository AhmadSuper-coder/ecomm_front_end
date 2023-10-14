import React, {useState} from 'react'
// import Head from '../../Common/Head'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { setRefreshToken,setAccessToken } from '../../utils/CommonUtils';
import { LoginUsersUrl } from '../../services/api';

var LoginData={
    email:"",
    password:"",
}

function Login() {
    const [LoginData,SetLoginData]=useState(LoginData);
    const {email,password}=useState(LoginData);
    const Navigate=useNavigate();

    const handleChange=(event)=>{
        console.log(LoginData)
        SetLoginData({...LoginData,[event.target.name]:event.target.value})
    }

    const LoginUser = async (event)=> {
        try{
            event.preventDefault();
            // Check if the email is valid
            if (!LoginData.email || !LoginData.email.includes('@') || !LoginData.email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
            console.log("before hitting the api ")
            
            // Define an asynchronous function to make the API call
          // const loginUser = async () => {
          //   try {
          //     console.log("before calling hte api ")
          //     const response = await LoginUsersUrl(LoginData);
          //     // Handle the response here
          //     console.log('API Response:', response);

          //     // You can add further logic to handle the response as needed
          //   } catch (error) {
          //     // Handle any errors that occur during the API call
          //     console.error('API Error:', error);
          //   }
          // };
          const response = await LoginUsersUrl(LoginData);
          console.log(response)
          console.log(response.status)
          // loginUser()
          // let response =await axios.post(`http://127.0.0.1:8000/api/user/login/`,LoginData);

        }
        catch(e){
            console.log("There is some server Error")
        }
    }

  return (
    <>
      {/* <Head path_name="Login"  /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 m-auto pt-5 pb-5 ">
            <form onSubmit={LoginUser} noValidate>
              <div className="mb-3">
                <label className="form-label">Register eamil</label>
                <input type="email" className=" border border-success form-control" name="email" onChange={handleChange} placeholder="Mail" />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="border border-success form-control" name="password" onChange={handleChange} placeholder="Password" />
              </div>


              <input className='btn btn-outline-secondary' type="submit" value="login" />

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login