import React, {useEffect, useState} from 'react'
import Images from './Images'



export default function Unsplash() {
    const [val, setval] = useState("");

const valChange = (e)=>{
setval(e.target.value);
}
  const [data, setData] = useState([]);
  
const getData = async ()=>{
const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${val}&per_page=50&client_id=z6a0g3ImpjYVhGL4KYDS6X0JGeVKh-LMyCsKHXPUxOI`);
const result = await res.json();
setData(result.results);
}  
  
  

useEffect(() => {
  return () => {
   getData();
  }
}, )


  
  
  
    return (
    




<div className='container my-4' style={{display:"flex", flexWrap:"wrap", justifyContent: "center"}}>

<input onChange={ valChange } value = {val} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

{
data.map((val, index)=>{
 return <Images srcc = {val.urls.small} key = {index}/>
})
}




</div>

    
  )
}
