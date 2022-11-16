import React from 'react';
import "./header.css";
import bofapes from "../../img/bofapes1500.png"
import 'bootstrap/dist/css/bootstrap.css';



export default function Header() {


  return (
    
    <div className="headercontain">
    <nav className="navbar navbar-expand-lg headernav">

   
        <img src={bofapes} alt="" className='logoimg' />


  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active logonav each">
        <a className="nav-link text-white" href="#">
          All Tokens <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item each">
        <a className="nav-link text-white" href="#">
          Lockups
        </a>
      </li>
      <li className="nav-item each">
        <a className="nav-link text-white" href="#">
          Vesting
        </a>
      </li>
    </ul>

  </div>
</nav>
</div>

  )
}
