import React from 'react'
import "./navB.css"
import { Link ,useNavigate} from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'

const NavB = () => {

  const {user,dispatch}=useUserContext()
 
  const navigate=useNavigate();

  const loogout=()=>{

    useEffect(()=>{
      dispatch({type:"USER",payload:false})  

      navigate("/")
  },[])
  }

  const RenderMenu=()=>{ 
    if (user) {
      return (
        <>
        <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#features">Features</a></li>
          <li><Link className="nav-link scrollto" to="http://127.0.0.1:5000" >Scrape</Link></li>
          <li><a className="nav-link scrollto" href="#pricing">Scrape Rate Card</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><Link to="" onClick={loogout} >Logout</Link></li>

        </>
      )
    }
    else{
      return(
        <>
          <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#features">Features</a></li>
          <li><Link className="nav-link scrollto" to="/signin">Log in / Sign Up</Link></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </>
      )
    }
  }

  return (
    <div>
       <section id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><a href="index.html"><span>De SCRAP</span></a></h1>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <RenderMenu/>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </section>
    </div>
  )
}

export default NavB
