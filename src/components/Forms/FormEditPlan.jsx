import { useState } from "react"
import routeService from "../../services/route.service"
import { useNavigate, Link } from "react-router-dom"
import { uploadImage } from "../../services/upload.service"

export default function FormEditPlan({ plansId }) {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState("")
    const [date, setDate] = useState(Date.now)

    const handleFileUpload = (e) => {


        const uploadData = new FormData();
        uploadData.append("images", e.target.files[0]);



        uploadImage(uploadData)
            .then(response => {
                console.log("response is: ", response);
                // response carries "fileUrl" which we can use to update the state
                setImages(response.fileUrl);
            })
            .catch(err => console.log("Error while uploading the file: ", err));
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        routeService.updateOnePlan(plansId, { title, description, images })
            .then(result => {
                setTitle("")
                setDescription("")
                setImages("")
                setDate("")
                navigate(`/plans/${plansId}`)
            })
            .catch(err => console.log(err))

    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="floatingTitle">Title</label>
            </div>
            <div className="form-floating">
                <textarea type="text" className="form-control" id="floatingDescription" style={{ height: 100 }} value={description} onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor="floatingDescription">Description</label>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Add your image here</label>
                <input className="form-control" type="file" onChange={(e) => handleFileUpload(e)} id="formFile" name="images" />
            </div>
            <div className="mb-3">
                <label htmlFor="formDate" className="form-label">Add a date</label>
                <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} id="formDate" />
            </div>
            <button className="btn btn-info" type="submit">Edit plan</button>
            <Link to={`/plans/${plansId}`}><button>Go back</button></Link>
        </form>
    </>)
}