import React, { useState, useContext, useEffect } from 'react';
import "./ProfilePage.css";
import { Link, useNavigate } from "react-router-dom"
import routeService from '../../services/route.service';
import { AuthContext } from '../../context/auth.context';
import Navbar from '../../components/Navbar/Navbar'

function ProfilePage() {

  const { user } = useContext(AuthContext)

  const [currentUser, setCurrentUser] = useState(null)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    routeService.getProfile()
      .then((response) => {
        setCurrentUser(response.data)
        console.log("RESPONSE-CURRENT-USER", response.data)
      })
  }, [])


  return (
    <>
      <Navbar/>
    <div className='container-profile'>

      {currentUser && user._id === currentUser._id && <img src={currentUser.images} className="card-img-top-avatar" alt="avatar" />}

      {currentUser && user._id === currentUser._id && <div className='username-profile'>{currentUser.username}</div>}

      {currentUser && user._id === currentUser._id && <div className="email-profile">{currentUser.email}</div>}

      <Link to={`/profile/edit`}>
        <button className="details-button">Edit profile</button>
      </Link>

    </div>
    </>
  );
}

export default ProfilePage;
