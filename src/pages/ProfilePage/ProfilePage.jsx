import React, { useState, useContext, useEffect } from 'react';
import "./ProfilePage.css";
import { Link, useNavigate } from "react-router-dom"
import { addAvatar } from '../../services/upload.service';
import routeService from '../../services/route.service';
import { AuthContext } from '../../context/auth.context';

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
        <div>
            <h1>Profile page</h1>

            {currentUser && user._id === currentUser._id && <img src={currentUser.images} className="card-img-top" alt="avatar" />}

            {currentUser && user._id === currentUser._id && <div>{currentUser.username}</div>}

            {currentUser && user._id === currentUser._id && <div>{currentUser.email}</div>}

        </div>
    );
}


export default ProfilePage;

