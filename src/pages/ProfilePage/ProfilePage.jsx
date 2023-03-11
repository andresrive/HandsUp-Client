import React, { useState } from 'react';
import "./ProfilePage.css";
import { Link, useNavigate } from "react-router-dom"
import { addAvatar } from '../../services/upload.service';
import routeService from '../../services/route.service';

function ProfilePage() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [images, setImages] = useState("")

  const navigate = useNavigate()

  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("images", e.target.files[0])

    addAvatar(uploadData)
      .then(response => {
        setImages(response.fileUrl)
      })
      .catch(err => console.log("Error while uploading the file: ", err))
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    routeService.updateProfile(username, email, images)
      .then(result => {

        setUsername(username)
        setEmail(email)
        setImages(images)

        navigate("/profile")

      })
      .catch(err => console.log("Error while updating the profile: ", err))
  }

  return (
    <div>
      <h1>Profile page</h1>

      <form onSubmit={handleSubmit}>
        <img src={images} className="card-img-top" alt="avatar" />
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="floatingUsername">Username</label>
        </div>
        <div className="form-floating">
          <textarea type="text" className="form-control" id="floatingEmail" style={{ height: 100 }} value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="floatingEmail">Email</label>
        </div>
        <div className="mb-3">
          <label htmlFor="formAvatar" className="form-label">Change your avatar</label>
          <input className="form-control" type="file" value={images} onChange={(e) => handleFileUpload(e)} id="formAvatar" />
        </div>

        <button className="btn btn-info" type="submit">Edit plan</button>
        {/* <Link to={`/plans/${plansId}`}><button>Go back</button></Link> */}
      </form>
    </div>
  );
}

export default ProfilePage;
