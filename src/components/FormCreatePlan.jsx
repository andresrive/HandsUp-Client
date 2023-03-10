import { useState } from "react";
// import Calendar from "./Calendar";
import { uploadImage, createPlan } from "../services/upload.service"
import { useNavigate } from "react-router-dom"


export default function FormCreatePlan() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState("")
    const [date, setDate] = useState("")
    const [destination, setDestination] = useState("")

    const navigate = useNavigate()

    const handleFileUpload = (e) => {

        console.log("handleFileUpload: ", e)

        const uploadData = new FormData()

        console.log("IMAGES: ", images)
        console.log("E.TARGET: ", e.target.files)

        uploadData.append("images", e.target)

        uploadImage(uploadData)
            .then(response => {
                setImages(response.fileUrl)
            })
            .catch(err => console.log("Error while uploading the file", err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("handleSubmit: ", e)



        createPlan({ title, description, images, date, destination })
            //importar la date de calendar?
            .then(res => {
                setTitle("")
                setDescription("")
                setImages("")
                setDate("")
                setDestination("")
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
                <input className="form-control" type="file" onChange={(e) => {
                    console.log("File selected:", e.target.files);
                    setImages(e.target.files[0]);
                }} id="formFileMultiple" name="photo" />
            </div>
            <div className="mb-3">
                {/* <Calendar /> */}
                <label htmlFor="formDate" className="form-label">Add a date</label>
                <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} id="formDate" />
            </div>
            <div className="mb-3">
                <label htmlFor="formDestination" className="form-label">Add a destination</label>
                <input className="form-control" type="text" value={destination} onChange={(e) => setDestination(e.target.value)} id="formDestination" />
            </div>
            <button type="submit" className="btn btn-info">Create plan</button>
        </form>
    </>)
}