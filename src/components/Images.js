import React from 'react'

export default function Images(props) {
  return (
    <div className="card mx-2 my-3 main" style={{  width: "300px",height: "300px", objectFit: "cover", border: "2px solid black"}}>
    <img src= {props.srcc}   className="card-img-top" alt="Sample Image" width="300px" height="296px"  />
    </div>
  )
}
