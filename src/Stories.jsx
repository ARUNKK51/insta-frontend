import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Stories() {
const Navigate = useNavigate();

  const [Stories, setStories] = useState([]);
let tot = 0;
  useEffect(() => {

    fetch("https://insta-backend-ojox.onrender.com/story")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err))
  }, [])




  return (
    <div className="story  d-flex " >
      <div className='d-none'>
        {tot = Stories.length}
      </div>
      {Stories.length > 0 ? (Stories.map((story) =>
        
          <div key={story.id} className='mx-1' onClick={()=>{Navigate(`/story/${story.id}/${tot}`)}}>
          <div className='gradient'>
           
            <img src={story.propic} alt="story" className='story-dp rounded-circle' />   
          </div>
          <p className='text-truncate' style={{ width: "50px" }}>{story.username}</p>
        </div>

      )) : <div>Loading... </div>}

    </div>
  )
}

export default Stories
