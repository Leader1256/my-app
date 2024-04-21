import React from "react";
import './Header.css';
export const Header=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bk">
  <a className="navbar-brand" href="/"><b>J<i class="fa fa-search" style={{color:"orange"}}></i>b <b style={{color:"orange"}}>Portal</b></b></a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">HOME </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/SerachBarCom">JOBS</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">COMPANY</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">BLOG</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/ContactUs">CONTACT US</a>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" aria-pressed="true">Login</button>
    </form>
  </div>
</nav>
    )
}