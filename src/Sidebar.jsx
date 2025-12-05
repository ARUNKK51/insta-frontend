import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  let Navigate = useNavigate();
  return (
    <div className='m-3 position-fixed'>
    <div className='sidebar d-flex flex-column gap-3'>
      <img  className="logo-text"src="src\assets\Instagram_logo.svg.png"  />
       <div><i className="bi bi-house-door-fill"></i>Home</div>
       <div><i className="bi bi-search"></i>Search</div>
       <div><i className="bi bi-compass-fill"></i>Explore</div>
       <div><i className="bi bi-camera-reels-fill"></i>Reels</div>
       <div><i className="bi bi-chat-dots-fill"></i>Messages</div>
       <div><i className="bi bi-bell"></i>Notification</div>
       <div><i className="bi bi-plus-square-fill"></i>Create</div>
       <div onClick={()=> {Navigate('/Profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div  className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i className="bi bi-threads"></i>Thread</div>
        <div><i className="bi bi-three-dots"></i>More</div>
    </div>
    </div>
    
  )
}

export default Sidebar;
