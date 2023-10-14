import React,{useEffect,useState} from 'react'
// import Head from '../../Common/Head';
import profile from "../assets/profile.png"
import { UserProfileUrl } from '../services/api';

const mystyle= {
  width:"100%",
}

function UserProfile() {


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Define an asynchronous function to fetch user profile data
    const fetchUserProfile = async () => {
      try {
        console.log("Fired useEffect hook and , before hitting url ")
        // Make the API request to fetch user profile data
        const response = await UserProfileUrl(); // Assuming UserProfileUrl returns the user profile data
        console.log(response)
        // Set the retrieved data in the state
        setUserData(response);
      } catch (error) {
        console.error('Error fetching user profile data:', error);
        // Handle the error, e.g., show an error message to the user
      }
    };

    // Call the fetchUserProfile function when the component mounts
    fetchUserProfile();
  }, []);

  return (
    <>
      {/* <Head path_name="About" /> */}
      <div className="container mt-5 p-3 mb-5">
        <div className="row gy-5">
          <div className="col-md-6 ">
              <img src={profile} alt=">>" style={mystyle} />
          </div>

          <div className="col-md-6">
            <h1>Hello, I am AHMAD</h1>
            <p> Insightful computer science student who excels at MERN and Java. Seeking job in software engineering. May marks the end of my junior year. Sucessfully done the internship of 8 months from the "NEWTON SCHOOL" </p>
            <p>__</p>
            <p>Done many projects including hands on experience such as Hotel management application, E-learning web application, expense tracker, protfolio webiste, tic tac toe , a lot more project etc. Solved leetcode, hacker rank, hacker earth dsa problems </p>
            <p>__</p>
            <p>Completed graduation from sam college of engineering (affliated with RGPV) , situated in bhopal,Madhyapardesh,done 12 and 10th from BSEB board</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default UserProfile