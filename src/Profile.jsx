import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [profile, setprofile] = useState(null);
    const [followers, setFollowers] = useState([]);
    const[unfollowed,setunfollowed] = useState();

    useEffect(() => {
        axios.get('https://insta-backend-ojox.onrender.com/profile')
            .then((data) => setprofile(data.data))
            .catch((err) => console.log(err))

        axios.get('https://insta-backend-ojox.onrender.com/followers')
            .then(data => { setFollowers(data.data); console.log(data) })
            .catch(err => console.log(err))
    }, [unfollowed])

    function handleOnchange(e) {
        setprofile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }

    const handleUpdate = async () => {
        axios.put('https://insta-backend-ojox.onrender.com/profile', profile)
            .then(console.log("updated"))
            .catch((err) => console.log(err))

    }
     const handleunfollow = async (id) =>
     {
axios.delete(`https://insta-backend-ojox.onrender.com/followers/${id}`)
.then(alert('unfollowed'))
.then(setunfollowed(!unfollowed)) 
.catch(err => console.log(err))

     }


    return (
        <div className='m-5'>
            {profile ? (<div>
                <img src={profile.propic} className=' profilepicture rounded-circle ' />
                <h5 className='ms-2'>{profile.username}</h5>
                <input type="text"

                    value={profile.username}
                    name="username"
                    className='form-control my-5'
                    onChange={handleOnchange}

                />

                <input type="text"

                    value={profile.propic}
                    name="propic"
                    className="form-control"
                    onChange={handleOnchange}

                />

                <button className='btn btn-primary my-5' onClick={handleUpdate}>
                    update
                </button>

            </div>) : (<div> Loading Profile</div>)
            }
            <div>

                {followers.length > 0 ? (followers.map(follower =>
                    <div key={follower.id} className='d-flex my-2' > 
                    <h5>{follower.username}</h5>
                    
                    <button onClick={()=> {handleunfollow(follower.id)}} className='btn btn-secondary ms-auto'>unfollow</button>
                    </div>

                  
                
                ))
                    : (<div> Loading Followers </div>)}
            </div>
        </div>
    )
}

export default Profile
