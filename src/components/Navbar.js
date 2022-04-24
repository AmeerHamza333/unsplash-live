import React from 'react'

export default function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid" style={{marginLeft: "20px"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968749.png" alt="LOGO" style={{height: "5vh", marginRight: "10px"}} />
      <a className="navbar-brand" href="#" style={{marginRight: "5vw"}}>Unsplash</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" style={{color: "skyblue"}}>Search Any Image that you want</a>
          </li>
         
        
        </ul>

      </div>
    </div>
  </nav>
  )
}
