import React, { useState } from 'react'
import "./signup.css"
import {Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const Signup = () => {
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  const navigate=useNavigate();


  const getData=(e)=>{
    const {value,name}=e.target;
    
    setData(()=>{
      return{
        ...data,
        [name]:value
      }
    })
  }
  const addData=async(e)=>{
    e.preventDefault();

    const url="http://localhost:4000/api/user/register";
    
    try {
      const {data:res}=await axios.post(url,data)
      console.log(res)
      navigate("/signin");

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <section class="vh-100 signupsec">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4 ">
              {/* <div class="text-primary tit fw-bold">Web-Care</div> */}
              <form>
                <div class="sign_in fw-bolder">SIGN UP</div>
                <hr />

                <div class="form mb-4">
                  <label class="form-label lab" for="form3Example3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control form-control-lg inp"
                    placeholder="Enter a valid Name"
                    name="name"
                    onChange={getData}
                  />
                </div>

                <div class="form mb-4">
                  <label class="form-label lab" for="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg inp"
                    placeholder="Enter a valid email address"
                    name="email"
                    onChange={getData}
                  />
                </div>

                <div class="form mb-3">
                  <label class="form-label lab" for="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg inp"
                    placeholder="Enter password"
                    name="password"
                    onChange={getData}
                  />
                </div>

               

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="button" class="signup-button btn btn-lg bt" onClick={addData} >
                    Sign Up
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    {" "}
                    Already have an account?{" "}
                    <Link to="/signin"  class="link_si fw-bolder">
                      Log-in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div class="col-md-9 col-lg-6 col-xl-5 offset-xl-1">
              <img
                src="/img/signup-1.png"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
