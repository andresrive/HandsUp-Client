import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { uploadImage } from '../../services/upload.service';
import routeService from '../../services/route.service';
import { AuthContext } from '../../context/auth.context';
import Navbar from '../Navbar/Navbar';


function FormEditProfile() {

    const { user } = useContext(AuthContext)

    const [currentUser, setCurrentUser] = useState(null)

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        routeService.getProfile()
            .then((response) => {
                setCurrentUser(response.data)
                setUsername(response.data.username)
                setEmail(response.data.email)
                setAvatarUrl(response.data.images)
                setIsLoading(false)
                console.log("RESPONSE-CURRENT-USER", response.data)
            })
            .catch(err => console.log("Error al buscar el perfil", err))
    }, [])

    const navigate = useNavigate();

    const handleFileUpload = (e) => {
        const uploadData = new FormData();

        uploadData.append("images", e.target.files[0])

        uploadImage(uploadData)
            .then(response => {
                setAvatarUrl(response.fileUrl);
                console.log("FOTO SUBIDA")
            })
            .catch(err => console.log("Error while uploading the file: ", err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("reqbody falso: ", username, email, avatarUrl)

        routeService.updateProfile({ username, email, avatarUrl })
            .then(result => {
                setCurrentUser(result.data)
                console.log(result.data)
                setUsername(username);
                setEmail(email);

                navigate("/profile");

            })
            .catch(err => console.log("Error while updating the profile: ", err))
    }

    console.log("USER", user)

    console.log("CURRENT USER", currentUser)

    return (
        <>
            {!isLoading &&
                <>
                    <Navbar />
                    <div className="mt-5 mb-5">
                        <form onSubmit={handleSubmit}>
                            <img src={avatarUrl} className="card-img-top" alt="avatar" />
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingUsername"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label htmlFor="floatingUsername">Username</label>
                            </div>
                            <div className="form-floating">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="floatingEmail"
                                    style={{ height: 100 }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="floatingEmail">Email</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formAvatar" className="form-label">
                                    Change your avatar
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    onChange={(e) => handleFileUpload(e)}
                                    name="images"
                                    id="formAvatar"
                                />
                            </div>

                            <button className="btn btn-info" type="submit">
                                Edit profile
                            </button>
                            {/* <Link to={`/plans/${plansId}`}><button>Go back</button></Link> */}
                        </form>
                    </div>
                </>
            }
        </>
    );
}


export default FormEditProfile;

