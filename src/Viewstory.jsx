import React, { useEffect } from 'react'
import {useParams,Link, useNavigate } from 'react-router-dom'
import { useState} from 'react';



function Viewstory() {
  
    const{id,tot} = useParams();
    const[story,setstory] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>
    {
fetch(`https://insta-backend-ojox.onrender.com/story/${id}`)
.then((data)=>  data.json())
.then((data)=> setstory(data))
.catch((err) => console.log(err))

    },[id])

    if(id > tot || id <= 0)
    {
      navigate("/");
    }

  return (
    <div className='justify-content-center align-items-center'>
      {story ? <div className='text-center '>
        <Link to={`/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
        <img src={story.image} alt="story" className='vh-100' />
        <Link to={`/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
        </div> : 
        <div>loading 
             </div> }
    </div>
  )
}

export default Viewstory


