import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Suggestions() {

  const [profile, setprofile] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    fetch("https://insta-backend-ojox.onrender.com/profile")
      .then((data) => data.json())
      .then((data) => setprofile(data))
      .catch((err) => console.log(err));

    fetch("https://insta-backend-ojox.onrender.com/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err))
  })

  const handlefollow = async (id, username)=>
  {
    axios.post('https://insta-backend-ojox.onrender.com/followers',{"id":id,"username":username})
    .then(alert(`followed`))
    .catch(err => console.log(err))
  }

  return (
    <div >
      <div  className='suggestions w-75 m-4'>
        {profile ?
          <div className='profilenamepicture d-flex' onClick={()=> {Navigate('/Profile')}} >
            <img className='dp1 rounded-circle  '  src={profile.propic} alt="Profile picture" />
            <h5 className='Profilename '>{profile.username}</h5>
            <small className='ms-auto text-primary'>Switch</small>
          </div>
          : <p>Loading</p>}

        <div className='d-flex my-2'>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>

        {suggestions.length > 0 ? (<div> {suggestions.map((suggestion) =>
          <div className='suggestionlist my-0'  key={suggestion.id}>
            <div className='d-flex'  >
              <img className='dp rounded-circle' src={suggestion.propic} alt="Profile picture" />
              <h5>{suggestion.username}</h5>
              <a onClick={()=>{handlefollow(suggestion.id,suggestion.username)}} className='text-primary ms-auto'>Follow</a>
            </div>


          </div>
        )}
        </div>) : (<div>Loading suggestions...</div>)}

      </div>

    </div>
  )
}

export default Suggestions

