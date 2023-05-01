import React from 'react'
import PropTypes from 'prop-types' 
import {Link} from 'react-router-dom'
export default function Navbar(props) {

 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme={props.mode}> 
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        {/* <div className="form-check form-check-inline ">
          <input className="form-check-input" style={{backgroundColor:"#12603c",cursor:'pointer'}}  onClick={()=>{props.changeColor("#12603c","success");}} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        </div>
        <div className="form-check form-check-inline ">
          <input className="form-check-input  " style={{backgroundColor:"#95111d",cursor:'pointer'}}   onClick={()=>{props.changeColor("#95111d","danger");}} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        </div>
        <div className="form-check form-check-inline ">
          <input className="form-check-input  " style={{backgroundColor:"#4a4d5d",cursor:'pointer'}}  onClick={()=>{    props.changeColor("#4a4d5d","dark");}} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        </div> */}

        <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}  `}>
        <input className="form-check-input " type="checkbox" role="switch" onClick={props.changeMode} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
        </div>



      </div>
    </div>
  </nav>
  )
}

// setting prop types:
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

 Navbar.defaultProps={
  title: "Set Title Here",
  aboutText: "Set About Here"

 }
