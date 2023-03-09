import { useState } from "react";
// import Calendar from "./Calendar";
import { uploadImage, createPlan } from "../services/upload.service"
import { useNavigate } from "react-router-dom"


export default function FormCreatePlan() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState("")
    const [date, setDate] = useState("")

    const navigate = useNavigate()

    const handleFileUpload = (e) => {

        console.log("handleFileUpload: ", e)

        const uploadData = new FormData()

        uploadData.append("images", e.target.files[0])

        uploadImage(uploadData)
            .then(response => {
                setImages(response.fileUrl)
            })
            .catch(err => console.log("Error while uploading the file", err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("handleSubmit: ", e)

        createPlan({ title, description, images })
            //importar la date de calendar?
            .then(res => {


                setTitle("")
                setDescription("")
                setImages("")
                setDate("")
                navigate("/")

            })
            .catch(err => console.log("Error while adding the new movie: ", err))

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
                <label htmlFor="formFileMultiple" className="form-label">Add your images here</label>
                <input className="form-control" type="file" onChange={(e) => handleFileUpload(e)} id="formFileMultiple" />
            </div>
            <div className="mb-3">
                {/* <Calendar /> */}
                <label htmlFor="formDate" className="form-label">Add a date</label>
                <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} id="formDate" />
            </div>
            <button type="submit" className="btn btn-info">Create plan</button>
        </form>
    </>)
}