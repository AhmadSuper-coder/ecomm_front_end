import React from 'react'
// import styles from '../css/navbar.module.css';
// import './App.css';
import {Link} from "react-router-dom";
import { AiOutlineHome,AiOutlineFundProjectionScreen,AiOutlineLogin,AiOutlineUser,AiOutlineShoppingCart} from "react-icons/ai";
import {ImBlog} from "react-icons/im";

function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top  navbar-expand-lg bg-dark  bg-body-tertiary" data-bs-theme="dark" style={{zIndex:"2"}}>
                <div className="container-fluid">
                    <Link className={`navbar-brand p-2`}  to="/">Ecom - Express </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon border border-danger"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navbarHover">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">    <span style={{fontSize:"20px"}} ><AiOutlineHome/></span>  Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/projects"><span style={{fontSize:"20px"}} ><AiOutlineFundProjectionScreen/></span> Projects</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/profile"> <span style={{fontSize:"20px", marginRight:"2px"}} ><AiOutlineUser/></span>profile</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"> <span style={{fontSize:"20px", marginRight:"2px"}} ><AiOutlineShoppingCart/></span>Cart</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/blog"> <span style={{fontSize:"20px", marginRight:"2px"}} ><ImBlog/></span>Blog</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/login"> <span style={{fontSize:"20px",marginRight:"3px"}} ><AiOutlineLogin/></span>Login</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/register"> <span style={{fontSize:"20px",marginRight:"3px"}} ><AiOutlineLogin/></span>SignUp</Link>
                            </li>

                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar