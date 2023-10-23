import React, {useState} from 'react'
// import Head from '../../Common/Head'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { setRefreshToken,setAccessToken } from '../../utils/CommonUtils';
import { SignUpUserUrl } from '../../services/api';

var SignUpData={
    name:"",
    email:"",
    mobile_number:"",
    password:"",
    password2:""

}


function SignUp() {
    const [SignUpData,SetSignUpData]=useState(SignUpData);
    const {email,password}=useState(SignUpData);
    const Navigate=useNavigate();

    const handleChange=(event)=>{
        console.log(SignUpData)
        SetSignUpData({...SignUpData,[event.target.name]:event.target.value})
    }

    const SignUpUser = async (event)=> {
        try{
            event.preventDefault();
            // Check if the email is valid
            if (!SignUpData.email || !SignUpData.email.includes('@') || !SignUpData.email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
          console.log("before hitting the api --> ",SignUpData)
          const response = await SignUpUserUrl(SignUpData);
          console.log("successfully signup in ")
          console.log(response)

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
            <form onSubmit={SignUpUser} noValidate>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className=" border border-success form-control" name="name" onChange={handleChange} placeholder="Enter your name please !" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className=" border border-success form-control" name="email" onChange={handleChange} placeholder="Enter your email please !" />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="phone" className=" border border-success form-control" name="mobile_number" onChange={handleChange} placeholder="Enter your phone number please !" />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="border border-success form-control" name="password" onChange={handleChange} placeholder="Password" />
              </div>

              <div className="mb-3">
                <label className="form-label">Re-Enter-Password</label>
                <input type="password" className="border border-success form-control" name="password2" onChange={handleChange} placeholder="Re-Enter-Password" />
              </div>


              <input className='btn btn-outline-secondary' type="submit" value="login" />

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp