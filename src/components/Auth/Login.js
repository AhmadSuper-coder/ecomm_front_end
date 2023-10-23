import React, {useState} from 'react'
// import Head from '../../Common/Head'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { setRefreshToken,setAccessToken } from '../../utils/CommonUtils';
import { LoginUsersUrl } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

var LoginData={
    email:"",
    password:"",
}


function Login() {
    const [LoginData,SetLoginData]=useState(LoginData);
    const {email,password}=useState(LoginData);
    const Navigate=useNavigate();
    const { login_state } = useAuth(); // Get the login function from AuthContext


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

          const response = await LoginUsersUrl(LoginData);
          login_state()
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